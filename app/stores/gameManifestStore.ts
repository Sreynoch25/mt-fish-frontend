import { defineStore } from "pinia";
import { ref, computed } from "vue";
import {
  getGameManifest,
  type GameManifest,
  type ManifestFishType,
  type ManifestCannonType,
} from "~/composables/service/gameManifestApi";

export const useGameManifestStore = defineStore("useGameManifestStore", () => {
  const manifest = ref<GameManifest | null>(null);
  const isFetching = ref(false);
  const fetched = ref(false);
  const ready = ref(false);
  const error = ref<string | null>(null);

  // ── fetch ─────────────────────────────────────────────────────
  const fetchManifest = async (force = false): Promise<void> => {
    if (fetched.value && !force) return;
    isFetching.value = true;
    error.value = null;

    try {
      const response = await getGameManifest();
      const data = (response as any)?.data ?? response;
      const payload = (data?.value.data ?? data) as GameManifest;

      if (!payload) throw new Error("Empty manifest");

      manifest.value = payload;
      // console.log("[store] game manifest loaded:", data.value.data);
      fetched.value = true;
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : String(err);
      throw err;
    } finally {
      isFetching.value = false;
    }
  };

  // ── computed ──────────────────────────────────────────────────
  const gameConfig = computed(() => manifest.value?.game ?? null);

  const fileConfig = computed(
    () => manifest.value?.asset_manifest?.file_config ?? null,
  );

  const fishTypes = computed(() => manifest.value?.fish_types ?? []);

  const bossFish = computed(
    () => manifest.value?.fish_types.filter((f) => f.is_boss) ?? [],
  );

  const normalFish = computed(
    () => manifest.value?.fish_types.filter((f) => !f.is_boss) ?? [],
  );

  const cannonTypes = computed(() => manifest.value?.cannon_types ?? []);

  const cannonLevels = computed(() => manifest.value?.cannon_levels ?? []);

  const scenes = computed(() => manifest.value?.scenes ?? []);

  const pathVersion = computed(() => manifest.value?.path_version ?? null);

  const rtpTarget = computed(() =>
    parseFloat(manifest.value?.game?.rtp_target ?? "0.88"),
  );

  // ── utils ─────────────────────────────────────────────────────
  const getFishById = (id: number): ManifestFishType | undefined =>
    manifest.value?.fish_types.find((f) => f.id === id);

  const getCannonByCode = (code: string): ManifestCannonType | undefined =>
    manifest.value?.cannon_types.find((c) => c.cannon_code === code);

  // ── reset ─────────────────────────────────────────────────────
  const reset = (): void => {
    manifest.value = null;
    fetched.value = false;
    isFetching.value = false;
    ready.value = false;
    error.value = null;
  };

  return {
    // state
    manifest,
    isFetching,
    fetched,
    ready,
    error,
    // actions
    fetchManifest,
    reset,
    // computed
    gameConfig,
    fileConfig,
    fishTypes,
    bossFish,
    normalFish,
    cannonTypes,
    cannonLevels,
    scenes,
    pathVersion,
    rtpTarget,
    // utils
    getFishById,
    getCannonByCode,
  };
});
