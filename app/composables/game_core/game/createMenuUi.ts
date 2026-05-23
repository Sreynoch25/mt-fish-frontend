import * as PIXI from "pixi.js";
import gsap from "gsap";
import {
  ICON_BUTTON_ATLAS_URL,
  ICON_BUTTON_IMAGE_URL,
  useFishAssetPreload,
} from "~/composables/game_core/assets/useFishAssetPreload";

type MenuItem = {
  frame: string;
  label: string;
  onClick: () => void;
};

type MenuUiOptions = {
  items?: MenuItem[];
  getAtlasTexture?: (atlasUrl: string, frame: string) => PIXI.Texture;
};

export async function createMenuUi(options?: MenuUiOptions) {
  const { getJsonAsset, preloadJsonAsset } = useFishAssetPreload();
  const rootContainer = new PIXI.Container();
  rootContainer.sortableChildren = true;

  // ── Load atlas ────────────────────────────────────────────────────────────
  let atlasData: any = null;
  let atlasTexture: PIXI.Texture | null = null;

  try {
    atlasData =
      getJsonAsset<any>(ICON_BUTTON_ATLAS_URL) ??
      (await preloadJsonAsset<any>(ICON_BUTTON_ATLAS_URL));
    atlasTexture = PIXI.Texture.from(ICON_BUTTON_IMAGE_URL);
  } catch (e) {
    console.warn("[MenuUi] failed to load icon_button atlas", e);
  }

  function getFrameTexture(frameName: string): PIXI.Texture {
    if (!atlasData || !atlasTexture) return PIXI.Texture.EMPTY;
    const frameData = atlasData.frames[frameName];
    if (!frameData) return PIXI.Texture.EMPTY;
    const { x, y, w, h } = frameData.frame;
    return new PIXI.Texture(
      atlasTexture!.baseTexture,
      new PIXI.Rectangle(x, y, w, h),
    );
  }

  // ── Default menu items ────────────────────────────────────────────────────
  const defaultItems: MenuItem[] = [
    { frame: "mute.png", label: "Mute", onClick: () => console.log("mute") },
    { frame: "about.png", label: "About", onClick: () => console.log("about") },
    { frame: "note.png", label: "Note", onClick: () => console.log("note") },
    { frame: "bell.png", label: "Bell", onClick: () => console.log("bell") },
    {
      frame: "logout.png",
      label: "Logout",
      onClick: () => console.log("logout"),
    },
  ];

  const menuItems = options?.items ?? defaultItems;

  // ── Sizes ─────────────────────────────────────────────────────────────────
  const ICON_SIZE = 64;
  const ICON_GAP = 16;
  const PADDING = 16;
  const MENU_BTN_SIZE = 64;

  const panelW = ICON_SIZE + PADDING * 2;
  const panelH = menuItems.length * (ICON_SIZE + ICON_GAP) + PADDING * 2;

  // ── Overlay (click-outside catcher) ───────────────────────────────────────
  // Sits at zIndex 0, covers entire screen, hidden until panel opens
  const overlay = new PIXI.Graphics();
  overlay.beginFill(0x000000, 0.01); // near-invisible but hittable
  overlay.drawRect(-5000, -5000, 10000, 10000);
  overlay.endFill();
  overlay.eventMode = "static";
  overlay.visible = false;
  overlay.zIndex = 0;
  overlay.on("pointerdown", (e) => {
    e.stopPropagation();
    closePanel();
  });
  rootContainer.addChild(overlay);

  // ── Menu toggle button ────────────────────────────────────────────────────
  const menuBtnContainer = new PIXI.Container();
  menuBtnContainer.eventMode = "static";
  menuBtnContainer.cursor = "pointer";
  menuBtnContainer.zIndex = 2; // always on top

  const menuBtnGlow = new PIXI.Graphics();
  menuBtnGlow.lineStyle(2, 0x3aa8e8, 0.6);
  menuBtnGlow.beginFill(0x0a2240, 0.85);
  menuBtnGlow.drawCircle(
    MENU_BTN_SIZE / 2,
    MENU_BTN_SIZE / 2,
    MENU_BTN_SIZE / 2,
  );
  menuBtnGlow.endFill();
  menuBtnContainer.addChild(menuBtnGlow);

  const menuIconTex = getFrameTexture("note.png");
  const menuIcon = new PIXI.Sprite(menuIconTex);
  menuIcon.anchor.set(0.5);
  menuIcon.position.set(MENU_BTN_SIZE / 2, MENU_BTN_SIZE / 2);
  menuIcon.width = MENU_BTN_SIZE - 16;
  menuIcon.height = MENU_BTN_SIZE - 16;
  menuBtnContainer.addChild(menuIcon);

  rootContainer.addChild(menuBtnContainer);

  // ── Panel ─────────────────────────────────────────────────────────────────
  // Positioned to the RIGHT of the toggle button
  const panel = new PIXI.Container();
  panel.alpha = 0;
  panel.visible = false;
  panel.zIndex = 1;
  // Place panel to the right of the toggle button with a small gap
  panel.position.set(MENU_BTN_SIZE + 12, -(panelH / 2) + MENU_BTN_SIZE / 2);

  // ── Panel background ──────────────────────────────────────────────────────
  const panelBgTex = getFrameTexture("Background.png");
  if (panelBgTex !== PIXI.Texture.EMPTY) {
    const panelBgSprite = new PIXI.Sprite(panelBgTex);
    panelBgSprite.width = panelW;
    panelBgSprite.height = panelH;
    // Block clicks from passing through to overlay
    panelBgSprite.eventMode = "static";
    panelBgSprite.on("pointerdown", (e) => e.stopPropagation());
    panel.addChild(panelBgSprite);
  } else {
    const panelBgFallback = new PIXI.Graphics();
    panelBgFallback.lineStyle(2, 0x3aa8e8, 0.7);
    panelBgFallback.beginFill(0x051928, 0.92);
    panelBgFallback.drawRoundedRect(0, 0, panelW, panelH, 20);
    panelBgFallback.endFill();
    panelBgFallback.eventMode = "static";
    panelBgFallback.on("pointerdown", (e) => e.stopPropagation());
    panel.addChild(panelBgFallback);
  }

  // Inner glow accent line at the top
  const panelGlow = new PIXI.Graphics();
  panelGlow.lineStyle(1.5, 0x3aa8e8, 0.3);
  panelGlow.moveTo(20, 1);
  panelGlow.lineTo(panelW - 20, 1);
  panel.addChild(panelGlow);

  // ── Icon buttons ──────────────────────────────────────────────────────────
  menuItems.forEach((item, i) => {
    const btnContainer = new PIXI.Container();
    btnContainer.eventMode = "static";
    btnContainer.cursor = "pointer";
    btnContainer.position.set(PADDING, PADDING + i * (ICON_SIZE + ICON_GAP));

    // Circle background
    const circleBg = new PIXI.Graphics();
    circleBg.lineStyle(2, 0x3aa8e8, 0.5);
    circleBg.beginFill(0x0a2240, 0.8);
    circleBg.drawCircle(ICON_SIZE / 2, ICON_SIZE / 2, ICON_SIZE / 2);
    circleBg.endFill();
    btnContainer.addChild(circleBg);

    // Icon sprite
    const iconTex = getFrameTexture(item.frame);
    const iconSprite = new PIXI.Sprite(iconTex);
    iconSprite.anchor.set(0.5);
    iconSprite.position.set(ICON_SIZE / 2, ICON_SIZE / 2);
    iconSprite.width = ICON_SIZE - 16;
    iconSprite.height = ICON_SIZE - 16;
    btnContainer.addChild(iconSprite);

    // Hover
    btnContainer.on("pointerover", () => {
      gsap.to(circleBg, { alpha: 1, duration: 0.15 });
      gsap.to(btnContainer.scale, { x: 1.1, y: 1.1, duration: 0.15 });
    });
    btnContainer.on("pointerout", () => {
      gsap.to(circleBg, { alpha: 1, duration: 0.15 });
      gsap.to(btnContainer.scale, { x: 1, y: 1, duration: 0.15 });
    });

    // Click — stopPropagation so overlay does NOT fire
    btnContainer.on("pointerdown", (e) => {
      e.stopPropagation();
      gsap.fromTo(
        btnContainer.scale,
        { x: 0.88, y: 0.88 },
        { x: 1, y: 1, duration: 0.18, ease: "back.out(2)" },
      );
      closePanel();
      item.onClick();
    });

    panel.addChild(btnContainer);
  });

  rootContainer.addChild(panel);

  // ── Toggle logic ──────────────────────────────────────────────────────────
  let isOpen = false;

  function openPanel() {
    isOpen = true;
    panel.visible = true;
    overlay.visible = true;
    panel.scale.set(0.8, 0.8);
    gsap.to(panel, { alpha: 1, duration: 0.2 });
    gsap.to(panel.scale, { x: 1, y: 1, duration: 0.2, ease: "back.out(1.5)" });
  }

  function closePanel() {
    isOpen = false;
    overlay.visible = false;
    gsap.to(panel, {
      alpha: 0,
      duration: 0.15,
      onComplete: () => {
        if (!panel.destroyed) panel.visible = false;
      },
    });
    gsap.to(panel.scale, { x: 0.8, y: 0.8, duration: 0.15 });
  }

  menuBtnContainer.on("pointerdown", (e) => {
    e.stopPropagation();
    gsap.fromTo(
      menuBtnContainer.scale,
      { x: 0.88, y: 0.88 },
      { x: 1, y: 1, duration: 0.18, ease: "back.out(2)" },
    );
    isOpen ? closePanel() : openPanel();
  });

  // ── Hover on toggle button ────────────────────────────────────────────────
  menuBtnContainer.on("pointerover", () => {
    gsap.to(menuBtnGlow, { alpha: 1, duration: 0.15 });
    gsap.to(menuBtnContainer.scale, { x: 1.1, y: 1.1, duration: 0.15 });
  });
  menuBtnContainer.on("pointerout", () => {
    gsap.to(menuBtnGlow, { alpha: 1, duration: 0.15 });
    gsap.to(menuBtnContainer.scale, { x: 1, y: 1, duration: 0.15 });
  });

  // ── Public API ────────────────────────────────────────────────────────────
  function destroy() {
    overlay.removeAllListeners();
    menuBtnContainer.removeAllListeners();
    gsap.killTweensOf(panel);
    gsap.killTweensOf(panel.scale);
    gsap.killTweensOf(menuBtnContainer.scale);
    rootContainer.destroy({ children: true });
  }

  return {
    container: rootContainer,
    openPanel,
    closePanel,
    destroy,
  };
}
