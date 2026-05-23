/**
 * useFishApiData2.ts
 *
 * Composable that consumes fish data from the loaded game manifest.
 * Provides type-safe helpers and a validation function to verify
 * the current manifest fish data shape.
 */

import { getManifestFishTypes } from "~/composables/game_core/fish/useManifestFishData";
import type {
  ManifestFishType,
  ManifestRenderState,
} from "~/composables/service/gameManifestApi";

export type FishType = ManifestFishType;
export type RenderState = ManifestRenderState;

export type FishApiData = {
  fish_types: ManifestFishType[];
};

// ─── Runtime data ────────────────────────────────────────────────────

function getApiData(): FishApiData {
  return { fish_types: getManifestFishTypes() };
}

// ─── Getters ─────────────────────────────────────────────────────────

export function getFishTypes(): FishType[] {
  return getApiData().fish_types;
}

export function getFishById(id: number): FishType | undefined {
  return getFishTypes().find((fish) => fish.id === id);
}

export function getFishByAssetKey(assetKey: string): FishType | undefined {
  return getFishTypes().find((fish) => fish.asset_key === assetKey);
}

export function getBossFish(): FishType[] {
  return getFishTypes().filter((fish) => fish.is_boss);
}

export function getRenderableFish(): FishType[] {
  return getFishTypes().filter((fish) => fish.render_family != null);
}

export function getFishCount(): number {
  return getFishTypes().length;
}

export function getRenderableCount(): number {
  return getRenderableFish().length;
}

export function getBossCount(): number {
  return getBossFish().length;
}

export function hasRuntimeConfig(id: number): boolean {
  const fish = getFishById(id);
  return fish?.has_runtime_config ?? false;
}

export function getFishOddsRange(id: number): {
  min: number | null;
  max: number | null;
} {
  const fish = getFishById(id);
  return { min: fish?.min_odd ?? null, max: fish?.max_odd ?? null };
}

export function getFishRenderType(
  id: number,
): "atlas_sprite_anim" | "spine" | "unknown" | null {
  const fish = getFishById(id);
  const typeCode = fish?.render_family?.render_type?.type_code;
  if (
    typeCode === "atlas_sprite_anim" ||
    typeCode === "spine" ||
    typeCode === "unknown"
  ) {
    return typeCode;
  }
  return null;
}

export function getFishSpinePaths(id: number): {
  json: string | null;
  atlas: string | null;
  png: string | null;
} {
  const fish = getFishById(id);
  const rf = fish?.render_family;
  return {
    json: rf?.spine_json_path ?? null,
    atlas: rf?.spine_atlas_path ?? null,
    png: rf?.spine_png_path ?? null,
  };
}

export function getFishAtlasPrefix(
  id: number,
  stateCode?: string,
): string | null {
  const fish = getFishById(id);
  if (!fish?.render_family?.render_states) return null;

  const states = fish.render_family.render_states;
  const target = stateCode ?? fish.default_state_code;
  const state = states.find((s) => s.state_code === target);
  return state?.prefix ?? null;
}

export function getFishFrameArray(
  id: number,
  stateCode?: string,
): string[] | null {
  const fish = getFishById(id);
  if (!fish?.render_family?.render_states) return null;

  const states = fish.render_family.render_states;
  const target = stateCode ?? fish.default_state_code;
  const state = states.find((s: RenderState) => s.state_code === target);
  return state?.frame_array ?? null;
}

// ─── Validation ──────────────────────────────────────────────────────

export type ValidationResult = {
  valid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalFish: number;
    renderableFish: number;
    bossFish: number;
    fishWithOdds: number;
    families: number;
    spineFish: number;
    atlasFish: number;
  };
};

/**
 * Validates that manifest fish data is structurally sound.
 */
export function validateFishApiData2(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const fishTypes = getFishTypes();

  if (!Array.isArray(fishTypes)) {
    errors.push("fish_types is not an array");
    return { valid: false, errors, warnings, stats: createEmptyStats() };
  }

  if (fishTypes.length === 0) {
    errors.push("fish_types array is empty");
  }

  const seenIds = new Set<number>();
  const seenAssetKeys = new Set<string>();
  let spineCount = 0;
  let atlasCount = 0;
  let familyCount = 0;
  const familyIds = new Set<number>();

  for (const fish of fishTypes) {
    // ID uniqueness
    if (seenIds.has(fish.id)) {
      errors.push(`Duplicate fish id: ${fish.id}`);
    } else {
      seenIds.add(fish.id);
    }

    // Asset key uniqueness
    if (fish.asset_key) {
      if (seenAssetKeys.has(fish.asset_key)) {
        warnings.push(
          `Duplicate asset_key: ${fish.asset_key} (fish ${fish.id})`,
        );
      } else {
        seenAssetKeys.add(fish.asset_key);
      }
    }

    // Render family consistency
    if (fish.render_family) {
      familyIds.add(fish.render_family.id);

      const rtId = fish.render_family.render_type_id;
      const rt = fish.render_family.render_type;
      if (rt && rt.id !== rtId) {
        errors.push(
          `Fish ${fish.id}: render_type.id (${rt.id}) != render_family.render_type_id (${rtId})`,
        );
      }

      const states = fish.render_family.render_states;
      if (states.length > 0) {
        for (const state of states) {
          if (state.render_family_id !== fish.render_family.id) {
            errors.push(
              `Fish ${fish.id}: state ${state.state_code} has wrong render_family_id (${state.render_family_id} != ${fish.render_family.id})`,
            );
          }
        }
      }

      if (fish.render_family.render_type?.type_code === "spine") {
        spineCount++;
        if (!fish.render_family.spine_json_path) {
          warnings.push(`Fish ${fish.id} is spine but missing spine_json_path`);
        }
      } else if (
        fish.render_family.render_type?.type_code === "atlas_sprite_anim"
      ) {
        atlasCount++;
      }
    }

    // Odds consistency
    if (
      fish.min_odd != null &&
      fish.max_odd != null &&
      fish.min_odd > fish.max_odd
    ) {
      errors.push(
        `Fish ${fish.id}: min_odd (${fish.min_odd}) > max_odd (${fish.max_odd})`,
      );
    }

    // Boss consistency
    if (fish.is_boss && !fish.boss_name) {
      warnings.push(`Fish ${fish.id} is_boss=true but has no boss_name`);
    }
  }

  familyCount = familyIds.size;

  const stats = {
    totalFish: fishTypes.length,
    renderableFish: fishTypes.filter((f) => f.render_family != null).length,
    bossFish: fishTypes.filter((f) => f.is_boss).length,
    fishWithOdds: fishTypes.filter(
      (f) => f.min_odd != null || f.max_odd != null,
    ).length,
    families: familyCount,
    spineFish: spineCount,
    atlasFish: atlasCount,
  };

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats,
  };
}

function createEmptyStats(): ValidationResult["stats"] {
  return {
    totalFish: 0,
    renderableFish: 0,
    bossFish: 0,
    fishWithOdds: 0,
    families: 0,
    spineFish: 0,
    atlasFish: 0,
  };
}

/**
 * Quick console report for dev use.
 */
export function logValidationReport(result?: ValidationResult): void {
  const r = result ?? validateFishApiData2();
  // eslint-disable-next-line no-console
  console.log("[useFishApiData2] Validation Report:");
  // eslint-disable-next-line no-console
  console.log("  Valid:", r.valid);
  // eslint-disable-next-line no-console
  console.log("  Errors:", r.errors.length, r.errors);
  // eslint-disable-next-line no-console
  console.log("  Warnings:", r.warnings.length, r.warnings);
  // eslint-disable-next-line no-console
  console.log("  Stats:", r.stats);
}
