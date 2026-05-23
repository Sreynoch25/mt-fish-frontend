<template>
  <v-app class="app-root">
    <VSonner position="top-right" :visible-toasts="4" />

    <div v-if="isAuthenticated && isPreloading" class="app-preload">
      <div class="app-preload__panel">
        <p class="app-preload__eyebrow">Aqua Area</p>
        <h1 class="app-preload__title">Loading Assets</h1>
        <p class="app-preload__subtitle">
          Preparing your game resources, please wait...
        </p>
      </div>
    </div>

    <div v-else-if="isAuthenticated && preloadError" class="app-preload">
      <div class="app-preload__panel app-preload__panel--error">
        <p class="app-preload__eyebrow">Aqua Area</p>
        <h1 class="app-preload__title">Asset Preload Failed</h1>
        <p class="app-preload__subtitle">{{ preloadError }}</p>
        <button type="button" class="app-preload__retry" @click="runPreload">
          Retry
        </button>
      </div>
    </div>

    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { VSonner } from "vuetify-sonner";
import "vuetify-sonner/style.css";
import { useFishAssetPreload } from "~/composables/game_core/assets/useFishAssetPreload";
import { useGameManifestStore } from "~/stores/gameManifestStore";
import { hydrateAccessToken } from "~/utils/authToken";

const { preloadAppAssets } = useFishAssetPreload();
const manifestStore = useGameManifestStore();

const token = hydrateAccessToken();
const isAuthenticated = computed(() => !!token.value);

const isPreloading = ref(false);
const preloadError = ref("");

async function runPreload() {
  if (!isAuthenticated.value) return;
  if (manifestStore.ready) return;

  isPreloading.value = true;
  preloadError.value = "";

  try {
    await manifestStore.fetchManifest();


    const fileConfig = manifestStore.fileConfig;
    // console.log("[preload] fileConfig:", fileConfig);
    // console.log("[preload] fileConfig.files keys:", Object.keys(fileConfig?.files ?? {}));
    if (!fileConfig) throw new Error("File configuration is missing.");

    // setFishFileConfig(fileConfig);
    await preloadAppAssets();

    manifestStore.ready = true;
  } catch (error) {
    preloadError.value =
      error instanceof Error ? error.message : "Unable to preload game assets.";
  } finally {
    isPreloading.value = false;
  }
}

// replaces onMounted — reacts to login/logout automatically
watch(
  isAuthenticated,
  (authed) => {
    if (authed && !manifestStore.ready) {
      void runPreload();
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.app-root {
  min-height: 100dvh;
}

.app-preload {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-image:
    radial-gradient(circle at top, rgba(82, 183, 243, 0.14), transparent 28%),
    linear-gradient(180deg, rgba(4, 16, 26, 0.75) 0%, rgba(8, 22, 36, 0.85) 100%),
    url("/wallpaper/wp1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.app-preload__panel {
  max-width: 560px;
  padding: 28px 30px;
  border-radius: 24px;
  border: 1px solid rgba(133, 200, 240, 0.18);
  background: rgba(6, 18, 29, 0.92);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.32);
  color: #eef8ff;
}

.app-preload__panel--error {
  border-color: rgba(255, 137, 137, 0.22);
}

.app-preload__eyebrow {
  margin: 0 0 8px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(172, 217, 243, 0.72);
}

.app-preload__title {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.app-preload__subtitle {
  margin: 12px 0 0;
  line-height: 1.6;
  color: rgba(223, 239, 248, 0.82);
}

.app-preload__retry {
  margin-top: 18px;
  min-width: 140px;
  height: 42px;
  border: 1px solid rgba(129, 197, 240, 0.32);
  border-radius: 999px;
  background: rgba(16, 33, 48, 0.96);
  color: #eef8ff;
  font-weight: 700;
  cursor: pointer;
}
</style>
