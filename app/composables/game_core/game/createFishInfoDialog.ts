import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import fishApiData from "~/composables/game_core/data/fishApiData.json";
import {
  FISH_BASE_PATH,
  useFishAssetPreload,
} from "~/composables/game_core/assets/useFishAssetPreload";

type ApiRenderState = {
  state_code: string;
  prefix: string;
  frame_array: string[];
};

type ApiRenderFamily = {
  render_family_name: string;
  spine_json_path?: string | null;
  spine_atlas_path?: string | null;
  render_type: { type_code: string } | null;
  render_states: ApiRenderState[];
};

type ApiFishType = {
  id: number;
  boss_name: string | null;
  is_boss: boolean;
  min_odd: number | null;
  max_odd: number | null;
  default_state_code: string;
  scale?: number | null;
  render_family: ApiRenderFamily | null;
};

type ApiRoot = {
  fish_types: ApiFishType[];
};

type FishInfoEntry = {
  id: number;
  label: string;
  familyName: string;
  rewardLabel: string;
  stateCode: string;
  isBoss: boolean;
  previewKind: "atlas_sprite_anim" | "spine";
  atlasUrl?: string;
  frames?: string[];
  spineJsonUrl?: string;
  spineAtlasUrl?: string;
  scale: number;
  isSoloPage?: boolean;
};

const DIALOG_WIDTH = 860;
const DIALOG_HEIGHT = 560;
const CONTENT_X = 26;
const CONTENT_Y = 92;
const CONTENT_WIDTH = DIALOG_WIDTH - CONTENT_X * 2;
const CONTENT_HEIGHT = DIALOG_HEIGHT - 156;
const CARDS_PER_ROW = 4;
const ROWS_PER_PAGE = 2;
const CARDS_PER_PAGE = CARDS_PER_ROW * ROWS_PER_PAGE;
const apiRoot = fishApiData as ApiRoot;

// These spine families each get their own full page, centered
const SOLO_SPINE_FAMILIES = new Set([
  "spine_crystal_crab",
  "spine_turtle",
  "spine_octopus",
  "spine_phoenix",
  "spine_crocodile",
  "spine_naga",
]);

// A "page slot" is either a solo entry or a group of up to CARDS_PER_PAGE normal entries
type PageSlot =
  | { kind: "solo"; entry: FishInfoEntry }
  | { kind: "group"; entries: FishInfoEntry[] };

function sortFramesForPlayback(frames: string[]) {
  return [...frames].sort((left, right) => {
    const leftNums = left.match(/\d+/g)?.map(Number) ?? [];
    const rightNums = right.match(/\d+/g)?.map(Number) ?? [];
    const maxLen = Math.max(leftNums.length, rightNums.length);

    for (let index = 0; index < maxLen; index += 1) {
      const leftVal = leftNums[index] ?? 0;
      const rightVal = rightNums[index] ?? 0;
      if (leftVal !== rightVal) return leftVal - rightVal;
    }

    return left.localeCompare(right);
  });
}

function getAtlasUrlFromPrefix(prefix: string | null): string | null {
  if (!prefix) return null;
  const cleanPrefix = prefix.replace(/\/+$/, "");
  return `${FISH_BASE_PATH}/${cleanPrefix}.atlas.txt`;
}

function formatRewardLabel(fish: ApiFishType): string {
  if (fish.min_odd != null && fish.max_odd != null) {
    return fish.min_odd === fish.max_odd
      ? `${fish.min_odd}x`
      : `${fish.min_odd}-${fish.max_odd}x`;
  }

  if (fish.min_odd != null) return `${fish.min_odd}x`;
  if (fish.max_odd != null) return `${fish.max_odd}x`;
  return "-";
}

function formatBossLabel(bossName: string | null, fishId: number) {
  const raw = bossName?.trim();
  if (!raw) return `Boss ${fishId}`;
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

function buildFishEntries(): FishInfoEntry[] {
  const deduped = new Map<string, FishInfoEntry>();

  for (const fish of apiRoot.fish_types) {
    const family = fish.render_family;
    const renderType = family?.render_type?.type_code;
    if (!family || !renderType) continue;

    const label = fish.is_boss
      ? formatBossLabel(fish.boss_name, fish.id)
      : `Fish ${fish.id}`;

    const isSoloPage =
      renderType === "spine" &&
      SOLO_SPINE_FAMILIES.has(family.render_family_name);

    if (renderType === "atlas_sprite_anim") {
      const targetStateCode = fish.default_state_code || "move";
      const targetState =
        family.render_states.find((state) => state.state_code === targetStateCode) ??
        family.render_states[0];

      if (!targetState?.prefix || !targetState.frame_array?.length) continue;

      const atlasUrl = getAtlasUrlFromPrefix(targetState.prefix);
      if (!atlasUrl) continue;

      const frames = sortFramesForPlayback(targetState.frame_array);
      const visualKey = `atlas:${atlasUrl}:${frames.join(",")}`;
      if (deduped.has(visualKey)) continue;

      deduped.set(visualKey, {
        id: fish.id,
        label,
        familyName: family.render_family_name || "Unknown",
        rewardLabel: formatRewardLabel(fish),
        stateCode: targetState.state_code,
        isBoss: fish.is_boss,
        previewKind: "atlas_sprite_anim",
        atlasUrl,
        frames,
        scale: fish.scale ?? 1,
        isSoloPage: false,
      });
      continue;
    }

    if (renderType === "spine") {
      const spineJsonUrl = family.spine_json_path ?? undefined;
      const spineAtlasUrl = family.spine_atlas_path ?? undefined;
      if (!spineJsonUrl || !spineAtlasUrl) continue;

      const visualKey = `spine:${spineJsonUrl}`;
      if (deduped.has(visualKey)) continue;

      deduped.set(visualKey, {
        id: fish.id,
        label,
        familyName: family.render_family_name || "Unknown",
        rewardLabel: formatRewardLabel(fish),
        stateCode: fish.default_state_code || "run",
        isBoss: fish.is_boss,
        previewKind: "spine",
        spineJsonUrl,
        spineAtlasUrl,
        scale: fish.scale ?? 1,
        isSoloPage,
      });
    }
  }

  return [...deduped.values()].sort((left, right) => left.id - right.id);
}

function buildPageSlots(entries: FishInfoEntry[]): PageSlot[] {
  const slots: PageSlot[] = [];
  const normalBatch: FishInfoEntry[] = [];

  function flushBatch() {
    for (let i = 0; i < normalBatch.length; i += CARDS_PER_PAGE) {
      slots.push({ kind: "group", entries: normalBatch.slice(i, i + CARDS_PER_PAGE) });
    }
    normalBatch.length = 0;
  }

  for (const entry of entries) {
    if (entry.isSoloPage) {
      flushBatch();
      slots.push({ kind: "solo", entry });
    } else {
      normalBatch.push(entry);
    }
  }
  flushBatch();

  return slots;
}

export async function createFishInfoDialog() {
  const { preloadAtlas, getAtlasTexture } = useFishAssetPreload();
  const entries = buildFishEntries();
  const uniqueAtlasUrls = [
    ...new Set(
      entries
        .map((entry) => entry.atlasUrl)
        .filter((atlasUrl): atlasUrl is string => typeof atlasUrl === "string"),
    ),
  ];
  const uniqueSpines = [
    ...new Map(
      entries
        .filter(
          (entry) =>
            entry.previewKind === "spine" &&
            entry.spineJsonUrl &&
            entry.spineAtlasUrl,
        )
        .map((entry) => [
          entry.spineJsonUrl!,
          {
            json: entry.spineJsonUrl!,
            atlas: entry.spineAtlasUrl!,
          },
        ]),
    ).values(),
  ];

  await Promise.all(uniqueAtlasUrls.map((atlasUrl) => preloadAtlas(atlasUrl)));
  await Promise.all(
    uniqueSpines.map((manifest) =>
      PIXI.Assets.load({
        src: manifest.json,
        data: {
          spineAtlasFile: manifest.atlas,
        },
      }),
    ),
  );

  const pageSlots = buildPageSlots(entries);

  const container = new PIXI.Container();
  container.visible = false;
  container.eventMode = "static";
  container.zIndex = 50;

  const livePreviews: PIXI.DisplayObject[] = [];
  let currentPage = 0;

  const overlay = new PIXI.Graphics();
  overlay.beginFill(0x000000, 0.52);
  overlay.drawRect(-3000, -3000, 6000, 6000);
  overlay.endFill();
  overlay.eventMode = "static";
  container.addChild(overlay);

  const panel = new PIXI.Container();
  panel.position.set(210, 76);
  container.addChild(panel);

  const background = new PIXI.Graphics();
  background.lineStyle(4, 0x46d3ff, 0.85);
  background.beginFill(0x051c2d, 0.97);
  background.drawRoundedRect(0, 0, DIALOG_WIDTH, DIALOG_HEIGHT, 28);
  background.endFill();
  panel.addChild(background);

  const innerBorder = new PIXI.Graphics();
  innerBorder.lineStyle(2, 0x1e7ca2, 0.45);
  innerBorder.drawRoundedRect(10, 10, DIALOG_WIDTH - 20, DIALOG_HEIGHT - 20, 22);
  panel.addChild(innerBorder);

  const title = new PIXI.Text("Special Fish", {
    fill: 0xffffff,
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
  });
  title.anchor.set(0.5, 0);
  title.position.set(DIALOG_WIDTH / 2, 20);
  panel.addChild(title);

  const divider = new PIXI.Graphics();
  divider.lineStyle(2, 0x1e7ca2, 0.5);
  divider.moveTo(24, 82);
  divider.lineTo(DIALOG_WIDTH - 24, 82);
  panel.addChild(divider);

  const closeButton = new PIXI.Container();
  closeButton.position.set(DIALOG_WIDTH - 38, 34);
  closeButton.eventMode = "static";
  closeButton.cursor = "pointer";

  const closeBg = new PIXI.Graphics();
  closeBg.beginFill(0x0d3a57, 1);
  closeBg.drawCircle(0, 0, 18);
  closeBg.endFill();
  closeButton.addChild(closeBg);

  const closeLabel = new PIXI.Text("X", {
    fill: 0xffffff,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "700",
  });
  closeLabel.anchor.set(0.5);
  closeButton.addChild(closeLabel);
  panel.addChild(closeButton);

  const content = new PIXI.Container();
  content.position.set(CONTENT_X, CONTENT_Y);
  panel.addChild(content);

  const pageIndicator = new PIXI.Text("1 / 1", {
    fill: 0xa8dbff,
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
  });
  pageIndicator.anchor.set(0.5);
  pageIndicator.position.set(DIALOG_WIDTH / 2, DIALOG_HEIGHT - 34);
  panel.addChild(pageIndicator);

  function makeNavButton(label: string, x: number, onClick: () => void) {
    const button = new PIXI.Container();
    button.position.set(x, DIALOG_HEIGHT - 34);
    button.eventMode = "static";
    button.cursor = "pointer";

    const buttonBg = new PIXI.Graphics();
    buttonBg.lineStyle(2, 0x46d3ff, 0.65);
    buttonBg.beginFill(0x0d3a57, 1);
    buttonBg.drawRoundedRect(-26, -18, 52, 36, 10);
    buttonBg.endFill();
    button.addChild(buttonBg);

    const buttonLabel = new PIXI.Text(label, {
      fill: 0xffffff,
      fontFamily: "Poppins",
      fontSize: 20,
      fontWeight: "700",
    });
    buttonLabel.anchor.set(0.5);
    button.addChild(buttonLabel);

    button.on("pointertap", onClick);
    return button;
  }

  const prevButton = makeNavButton("<", DIALOG_WIDTH / 2 - 90, () => goToPage(currentPage - 1));
  const nextButton = makeNavButton(">", DIALOG_WIDTH / 2 + 90, () => goToPage(currentPage + 1));
  panel.addChild(prevButton);
  panel.addChild(nextButton);

  function clearLivePreviews() {
    for (const preview of livePreviews) {
      if (preview instanceof PIXI.AnimatedSprite) {
        preview.stop();
      }
      preview.destroy();
    }
    livePreviews.length = 0;
  }

  function buildPlaceholderPreview() {
    const placeholder = new PIXI.Graphics();
    placeholder.beginFill(0x12344a, 1);
    placeholder.drawRoundedRect(-44, -44, 88, 88, 16);
    placeholder.endFill();
    placeholder.lineStyle(2, 0x46d3ff, 0.45);
    placeholder.moveTo(-22, -22);
    placeholder.lineTo(22, 22);
    placeholder.moveTo(22, -22);
    placeholder.lineTo(-22, 22);
    return placeholder;
  }

  function fitPreviewToCard(
    preview: PIXI.DisplayObject,
    cardWidth: number,
    cardHeight: number,
    scaleBoost = 1,
  ) {
    const bounds = preview.getLocalBounds();
    const sourceWidth = Math.max(bounds.width, 1);
    const sourceHeight = Math.max(bounds.height, 1);
    const maxWidth = cardWidth * 0.6;
    const maxHeight = cardHeight * 0.38;
    const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight, 1);

    preview.scale.set(scale * scaleBoost);
    preview.position.set(
      (cardWidth - 12) / 2 - (bounds.x + bounds.width / 2) * preview.scale.x,
      86 - (bounds.y + bounds.height / 2) * preview.scale.y,
    );
  }

  // Fit a solo spine to fill most of the content area, centered
  function fitPreviewSolo(
    preview: PIXI.DisplayObject,
    scaleBoost = 1,
  ) {
    const bounds = preview.getLocalBounds();
    const sourceWidth = Math.max(bounds.width, 1);
    const sourceHeight = Math.max(bounds.height, 1);
    const maxWidth = CONTENT_WIDTH * 0.55;
    const maxHeight = CONTENT_HEIGHT * 0.62;
    const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight, 1);

    preview.scale.set(scale * scaleBoost);
    // Center horizontally in content area; vertically leave room for labels below
    preview.position.set(
      CONTENT_WIDTH / 2 - (bounds.x + bounds.width / 2) * preview.scale.x,
      CONTENT_HEIGHT * 0.42 - (bounds.y + bounds.height / 2) * preview.scale.y,
    );
  }

  function buildSpinePreview(entry: FishInfoEntry): PIXI.DisplayObject {
    const spineResource = entry.spineJsonUrl
      ? (PIXI.Assets.get(entry.spineJsonUrl) as { spineData?: unknown } | undefined)
      : undefined;
    const spineData = spineResource?.spineData ?? spineResource;

    if (!spineData || typeof spineData !== "object") {
      return buildPlaceholderPreview();
    }

    const spine = new Spine(spineData as never);
    const anim = entry.stateCode || "run";
    spine.skeleton?.setToSetupPose?.();
    if (spine.state?.hasAnimation(anim)) {
      spine.state.setAnimation(0, anim, true);
      spine.state.update(0);
      spine.state.apply(spine.skeleton);
    }
    spine.skeleton?.updateWorldTransform?.();
    spine.update(0);
    livePreviews.push(spine);
    return spine;
  }

  function buildAtlasPreview(entry: FishInfoEntry): PIXI.DisplayObject {
    const textures = (entry.frames ?? [])
      .map((frame) => getAtlasTexture(entry.atlasUrl!, frame))
      .filter((texture) => texture !== PIXI.Texture.WHITE);

    if (!textures.length) return buildPlaceholderPreview();

    const sprite = new PIXI.AnimatedSprite(textures);
    sprite.anchor.set(0.5);
    sprite.animationSpeed = 0.16;
    sprite.loop = true;
    sprite.play();
    livePreviews.push(sprite);
    return sprite;
  }

  function buildPreviewSprite(entry: FishInfoEntry, cardWidth: number, cardHeight: number) {
    const preview =
      entry.previewKind === "spine"
        ? buildSpinePreview(entry)
        : buildAtlasPreview(entry);

    fitPreviewToCard(preview, cardWidth, cardHeight, entry.scale);
    return preview;
  }

  function buildCard(entry: FishInfoEntry, index: number) {
    const cardWidth = (CONTENT_WIDTH - 24) / CARDS_PER_ROW;
    const cardHeight = (CONTENT_HEIGHT - 20) / ROWS_PER_PAGE;
    const col = index % CARDS_PER_ROW;
    const row = Math.floor(index / CARDS_PER_ROW);

    const card = new PIXI.Container();
    card.position.set(col * cardWidth, row * cardHeight);

    const bg = new PIXI.Graphics();
    bg.lineStyle(2, 0x2d99c7, 0.7);
    bg.beginFill(entry.isBoss ? 0x14263c : 0x082437, 0.95);
    bg.drawRoundedRect(0, 0, cardWidth - 12, cardHeight - 12, 18);
    bg.endFill();
    card.addChild(bg);

    if (entry.isBoss) {
      const bossBadge = new PIXI.Text("BOSS", {
        fill: 0xffd166,
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "700",
      });
      bossBadge.position.set(cardWidth - 56, 14);
      card.addChild(bossBadge);
    }

    const nameText = new PIXI.Text(entry.label, {
      fill: 0xffffff,
      fontFamily: "Poppins",
      fontSize: 18,
      fontWeight: "700",
    });
    nameText.position.set(14, 12);
    card.addChild(nameText);

    const preview = buildPreviewSprite(entry, cardWidth - 12, cardHeight - 12);
    card.addChild(preview);

    const familyText = new PIXI.Text(entry.familyName, {
      fill: 0x8ecae6,
      fontFamily: "Poppins",
      fontSize: 14,
    });
    familyText.position.set(14, cardHeight - 96);
    card.addChild(familyText);

    const stateText = new PIXI.Text(`State: ${entry.stateCode}`, {
      fill: 0xb7e4f9,
      fontFamily: "Poppins",
      fontSize: 13,
    });
    stateText.position.set(14, cardHeight - 72);
    card.addChild(stateText);

    const rewardText = new PIXI.Text(`Reward: ${entry.rewardLabel}`, {
      fill: 0xffd166,
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: "700",
    });
    rewardText.position.set(14, cardHeight - 46);
    card.addChild(rewardText);

    return card;
  }

  // Full-page centered layout for a single special spine fish
  function buildSoloCard(entry: FishInfoEntry) {
    const card = new PIXI.Container();

    // Background panel
    const bg = new PIXI.Graphics();
    bg.lineStyle(3, entry.isBoss ? 0xffd166 : 0x2d99c7, 0.85);
    bg.beginFill(entry.isBoss ? 0x14263c : 0x082437, 0.97);
    bg.drawRoundedRect(0, 0, CONTENT_WIDTH, CONTENT_HEIGHT, 24);
    bg.endFill();
    card.addChild(bg);

    // BOSS badge
    if (entry.isBoss) {
      const bossBadge = new PIXI.Text("BOSS", {
        fill: 0xffd166,
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "700",
      });
      bossBadge.anchor.set(0.5, 0);
      bossBadge.position.set(CONTENT_WIDTH / 2, 16);
      card.addChild(bossBadge);
    }

    // Spine preview — large and centered
    const preview = buildSpinePreview(entry);
    fitPreviewSolo(preview, entry.scale);
    card.addChild(preview);

    // Labels centered at the bottom
    const nameText = new PIXI.Text(entry.label, {
      fill: 0xffffff,
      fontFamily: "Poppins",
      fontSize: 26,
      fontWeight: "700",
      align: "center",
    });
    nameText.anchor.set(0.5, 0);
    nameText.position.set(CONTENT_WIDTH / 2, CONTENT_HEIGHT - 100);
    card.addChild(nameText);

    const familyText = new PIXI.Text(entry.familyName, {
      fill: 0x8ecae6,
      fontFamily: "Poppins",
      fontSize: 16,
      align: "center",
    });
    familyText.anchor.set(0.5, 0);
    familyText.position.set(CONTENT_WIDTH / 2, CONTENT_HEIGHT - 68);
    card.addChild(familyText);

    const stateText = new PIXI.Text(`State: ${entry.stateCode}`, {
      fill: 0xb7e4f9,
      fontFamily: "Poppins",
      fontSize: 14,
      align: "center",
    });
    stateText.anchor.set(0.5, 0);
    stateText.position.set(CONTENT_WIDTH / 2, CONTENT_HEIGHT - 46);
    card.addChild(stateText);

    const rewardText = new PIXI.Text(`Reward: ${entry.rewardLabel}`, {
      fill: 0xffd166,
      fontFamily: "Poppins",
      fontSize: 20,
      fontWeight: "700",
      align: "center",
    });
    rewardText.anchor.set(0.5, 0);
    rewardText.position.set(CONTENT_WIDTH / 2, CONTENT_HEIGHT - 22);
    card.addChild(rewardText);

    return card;
  }

  function renderPage(page: number) {
    clearLivePreviews();
    content.removeChildren().forEach((child) => child.destroy());

    const totalPages = Math.max(pageSlots.length, 1);
    currentPage = Math.max(0, Math.min(page, totalPages - 1));

    const slot = pageSlots[currentPage];

    if (!slot) {
      const emptyState = new PIXI.Text("No fish data available.", {
        fill: 0xa8dbff,
        fontFamily: "Poppins",
        fontSize: 24,
      });
      emptyState.anchor.set(0.5);
      emptyState.position.set(CONTENT_WIDTH / 2, CONTENT_HEIGHT / 2);
      content.addChild(emptyState);
    } else if (slot.kind === "solo") {
      content.addChild(buildSoloCard(slot.entry));
    } else {
      slot.entries.forEach((entry, index) => {
        content.addChild(buildCard(entry, index));
      });
    }

    pageIndicator.text = `${currentPage + 1} / ${totalPages}`;
    prevButton.alpha = currentPage === 0 ? 0.45 : 1;
    nextButton.alpha = currentPage >= totalPages - 1 ? 0.45 : 1;
  }

  function goToPage(page: number) {
    renderPage(page);
  }

  function close() {
    container.visible = false;
  }

  function open() {
    renderPage(currentPage);
    container.visible = true;
  }

  overlay.on("pointertap", close);
  closeButton.on("pointertap", close);
  renderPage(0);

  return {
    container,
    open,
    close,
    destroy() {
      clearLivePreviews();
      container.destroy({ children: true });
    },
  };
}
