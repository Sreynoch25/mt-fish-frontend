/**
 * useBossSpineFactory2.ts
 *
 * Re-implementation of useBossSpineFactory that consumes ONLY manifest fish data.
 * Replaces fishRenderDb with API manifest data.
 */

import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import { getManifestFishTypes } from "~/composables/game_core/fish/useManifestFishData";

type ApiRenderFamily = {
  render_family_name: string;
  render_type: { id: number; type_code: string } | null;
  spine_json_path: string | null;
  spine_atlas_path: string | null;
  spine_png_path: string | null;
};

type ApiFishType = {
  id: number;
  is_boss: boolean;
  render_family: ApiRenderFamily | null;
};

type BossSpineEntry = {
  spawn_fish_id: number;
  render_type: string;
  boss_name: string | null;
  spine: {
    json: string;
    atlas: string;
    png: string;
  } | null;
};

function getBossEntryBySpawnFishId(spawnFishId: number): BossSpineEntry | null {
  const fish = (getManifestFishTypes() as ApiFishType[]).find(
    (f) => f.id === spawnFishId,
  );
  if (!fish) return null;

  const family = fish.render_family;
  if (!family || family.render_type?.type_code !== "spine") return null;

  return {
    spawn_fish_id: fish.id,
    render_type: "spine",
    boss_name: fish.is_boss ? (family.render_family_name ?? null) : null,
    spine: family.spine_json_path
      ? {
          json: family.spine_json_path,
          atlas: family.spine_atlas_path ?? "",
          png: family.spine_png_path ?? "",
        }
      : null,
  };
}

async function loadSpineResource(spineJsonUrl: string, spineAtlasUrl: string) {
  const cached = PIXI.Assets.get(spineJsonUrl) as
    | { spineData?: unknown }
    | undefined;
  if (cached?.spineData) return cached;

  const resource = await PIXI.Assets.load({
    src: spineJsonUrl,
    data: {
      spineAtlasFile: spineAtlasUrl,
    },
  });

  return resource as { spineData?: unknown };
}

export async function createBossSpineBySpawnFishId2(options: {
  spawnFishId: number;
  position?: PIXI.IPointData;
  scale?: number;
  animation?: string;
  loop?: boolean;
}) {
  const {
    spawnFishId,
    position = new PIXI.Point(0, 0),
    scale = 1,
    animation = "run",
    loop = true,
  } = options;

  const entry = getBossEntryBySpawnFishId(spawnFishId);
  if (!entry) {
    throw new Error(
      `No spine manifest entry found for spawn fish id ${spawnFishId}.`,
    );
  }

  if (!entry.spine) {
    throw new Error(
      `Fish ${spawnFishId} has no spine paths in the game manifest.`,
    );
  }

  const resource = await loadSpineResource(entry.spine.json, entry.spine.atlas);
  if (!resource?.spineData) {
    throw new Error(
      `Failed to load spine data for fish ${spawnFishId} from ${entry.spine.json}.`,
    );
  }

  const spine = new Spine(resource.spineData as never);
  spine.position.set(position.x, position.y);
  spine.scale.set(scale);

  if (spine.state?.hasAnimation(animation)) {
    spine.state.setAnimation(0, animation, loop);
  }

  return {
    spine,
    manifest: entry,
  };
}

export function getBossSpineManifest2(spawnFishId: number) {
  return getBossEntryBySpawnFishId(spawnFishId);
}
