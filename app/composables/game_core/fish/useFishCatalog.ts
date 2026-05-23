import { getManifestFishTypes } from "~/composables/game_core/fish/useManifestFishData";
import type { ManifestFishType } from "~/composables/service/gameManifestApi";

export function getFishCatalogList(): ManifestFishType[] {
  return getManifestFishTypes();
}

export function getFishCatalogItem(
  fishTypeId: number,
): ManifestFishType | null {
  return getManifestFishTypes().find((fish) => fish.id === fishTypeId) ?? null;
}

export function getMissingRenderableFishIds(): number[] {
  return getManifestFishTypes()
    .filter((fish) => fish.render_family === null)
    .map((fish) => fish.id);
}
