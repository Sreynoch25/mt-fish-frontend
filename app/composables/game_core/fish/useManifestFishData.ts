import { useGameManifestStore } from "~/stores/gameManifestStore";
import type { ManifestFishType } from "~/composables/service/gameManifestApi";

export type ManifestFishApiRoot = {
  fish_types: ManifestFishType[];
};

export function getManifestFishTypes(): ManifestFishType[] {
  return useGameManifestStore().manifest?.fish_types ?? [];
}

export function getManifestFishById(id: number): ManifestFishType | undefined {
  return getManifestFishTypes().find((fish) => fish.id === id);
}

export function getManifestFishApiRoot(): ManifestFishApiRoot {
  return { fish_types: getManifestFishTypes() };
}

export function assertManifestFishTypesReady(): ManifestFishType[] {
  const fishTypes = getManifestFishTypes();
  if (fishTypes.length === 0) {
    throw new Error("Game manifest fish_types is empty or not loaded.");
  }
  return fishTypes;
}
