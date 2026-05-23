<template>
  <main class="spritesheets-page">
    <section class="hero">
      <div>
        <p class="eyebrow">Debug</p>
        <h1>All Spritesheets</h1>
        <p class="subtitle">
          Browse every atlas from <code>fish/fish-all-star/file_config.json</code> and preview all frames.
        </p>
      </div>

      <div class="hero-stats">
        <div class="stat-card">
          <span class="stat-label">Atlases</span>
          <strong>{{ filteredAtlases.length }}</strong>
        </div>
        <div class="stat-card">
          <span class="stat-label">Frames</span>
          <strong>{{ totalFilteredFrames }}</strong>
        </div>
      </div>
    </section>

    <section class="toolbar">
      <label class="search-box">
        <span>Search atlas or frame</span>
        <input v-model.trim="searchTerm" type="search" placeholder="Try ui, cannon, fish, button..." />
      </label>

      <button type="button" class="refresh-btn" @click="loadAtlases">
        Refresh
      </button>
    </section>

    <section v-if="isLoading" class="state-panel">
      Loading spritesheets...
    </section>

    <section v-else-if="errorMessage" class="state-panel state-panel--error">
      {{ errorMessage }}
    </section>

    <section v-else class="atlas-list">
      <div v-if="warningMessages.length" class="warning-panel">
        <strong>
          Skipped {{ warningMessages.length }} atlas file{{ warningMessages.length > 1 ? "s" : "" }}
        </strong>
        <ul>
          <li v-for="warning in warningMessages" :key="warning">
            {{ warning }}
          </li>
        </ul>
      </div>

      <article v-for="atlas in filteredAtlases" :key="atlas.url" class="atlas-card">
        <header class="atlas-card__header">
          <div>
            <p class="atlas-card__eyebrow">Atlas</p>
            <h2>{{ atlas.name }}</h2>
            <p class="atlas-card__folder">{{ atlas.folder }}</p>
            <p class="atlas-card__path">{{ atlas.url }}</p>
          </div>

          <div class="atlas-card__meta">
            <span>{{ atlas.filteredFrames.length }} frames</span>
            <span>{{ atlas.images.length }} sheet{{ atlas.images.length > 1 ? "s" : "" }}</span>
          </div>
        </header>

        <div class="atlas-images">
          <figure v-for="image in atlas.images" :key="image.url" class="atlas-image-card">
            <figcaption>{{ image.name }}</figcaption>
            <img :src="image.url" :alt="`${atlas.name} spritesheet ${image.name}`" class="atlas-image" />
          </figure>
        </div>

        <div class="frame-grid">
          <article v-for="frame in atlas.filteredFrames" :key="frame.name" class="frame-card">
            <div class="frame-preview-shell">
              <div class="frame-preview-fit">
                <div class="frame-preview" :style="getFramePreviewStyle(atlas, frame)" />
              </div>
            </div>

            <div class="frame-info">
              <h3>{{ frame.name }}</h3>
              <p>{{ frame.frame.w }} x {{ frame.frame.h }}</p>
              <p class="muted">
                sheet {{ frame.frame.idx ?? 0 }} · x {{ frame.frame.x }}, y {{ frame.frame.y }}
              </p>
            </div>
          </article>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { FISH_BASE_PATH } from "~/composables/game_core/assets/useFishAssetPreload";
import { useGameManifestStore } from "~/stores/gameManifestStore";

const manifestStore = useGameManifestStore();

// ── types (unchanged) ─────────────────────────────────────────
type AtlasFrameRect = {
  idx: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

type AtlasFrameData = {
  frame: AtlasFrameRect;
};

type AtlasData = {
  meta?: {
    prefix?: string;
    scale?: number;
    image?: string;
  };
  frames?: Record<string, AtlasFrameData>;
};

type AtlasImageEntry = {
  name: string;
  url: string;
};

type AtlasFrameEntry = {
  name: string;
  frame: AtlasFrameRect;
};

type AtlasEntry = {
  name: string;
  folder: string;
  url: string;
  images: AtlasImageEntry[];
  frames: AtlasFrameEntry[];
};

type FilteredAtlasEntry = AtlasEntry & {
  filteredFrames: AtlasFrameEntry[];
};

// ── state ─────────────────────────────────────────────────────
const searchTerm = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const atlases = ref<AtlasEntry[]>([]);
const warningMessages = ref<string[]>([]);

// ── helpers (unchanged) ───────────────────────────────────────
function getAtlasName(url: string) {
  return (
    url
      .split("/")
      .pop()
      ?.replace(/\.atlas(?:\.txt)?$/i, "") ?? url
  );
}

function resolveAtlasImageUrls(atlasUrl: string, metaImage: string | undefined) {
  const atlasDir = atlasUrl.split("/").slice(0, -1).join("/");
  const imageNames = (metaImage ?? "")
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  return imageNames.map((name) => ({
    name,
    url: name.startsWith("/") ? name : `${atlasDir}/${name}`,
  }));
}

// ── main loader — now uses store instead of $fetch(FILE_CONFIG_URL) ──
async function loadAtlases() {
  isLoading.value = true;
  errorMessage.value = "";
  warningMessages.value = [];

  try {
    // fetch manifest if not already loaded
    if (!manifestStore.fetched) {
      await manifestStore.fetchManifest();
    }

    const fileConfig = manifestStore.fileConfig;
    if (!fileConfig?.files) {
      throw new Error("file_config not available in manifest store");
    }

    // build atlas url list from store file config — same logic as before
    const atlasUrls = Object.entries(fileConfig.files)
      .flatMap(([folder, files]) =>
        (files ?? [])
          .filter(
            (file) =>
              file.toLowerCase().endsWith(".atlas") ||
              file.toLowerCase().endsWith(".atlas.txt"),
          )
          .map((file) => {
            const normalizedFile = file.toLowerCase().endsWith(".atlas.txt")
              ? file
              : file.replace(/\.atlas$/i, ".atlas.txt");
            return {
              folder,
              url: `${FISH_BASE_PATH}/${folder}/${normalizedFile}`,
            };
          }),
      )
      .sort((left, right) => left.url.localeCompare(right.url));

    const entries = await Promise.all(
      atlasUrls.map(async ({ folder, url: atlasUrl }) => {
        try {
          const response = await fetch(atlasUrl, { cache: "force-cache" });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);

          const atlas = (await response.json()) as AtlasData;
          const frames = Object.entries(atlas.frames ?? {})
            .map(([name, entry]) => ({
              name,
              frame: entry.frame,
            }))
            .filter((entry) => entry.frame)
            .sort((left, right) => left.name.localeCompare(right.name));

          return {
            name: getAtlasName(atlasUrl),
            folder,
            url: atlasUrl,
            images: resolveAtlasImageUrls(atlasUrl, atlas.meta?.image),
            frames,
          } satisfies AtlasEntry;
        } catch (error) {
          const reason =
            error instanceof Error ? error.message : "Unknown atlas load error";
          warningMessages.value.push(`${atlasUrl} (${reason})`);
          return null;
        }
      }),
    );

    atlases.value = entries.filter((entry): entry is AtlasEntry =>
      Boolean(entry),
    );
  } catch (error) {
    console.error(error);
    errorMessage.value =
      error instanceof Error
        ? error.message
        : "Could not load spritesheets.";
  } finally {
    isLoading.value = false;
  }
}

// ── computed (unchanged) ──────────────────────────────────────
const filteredAtlases = computed<FilteredAtlasEntry[]>(() => {
  const keyword = searchTerm.value.toLowerCase();

  return atlases.value
    .map((atlas) => {
      const filteredFrames = keyword
        ? atlas.frames.filter(
          (frame) =>
            atlas.name.toLowerCase().includes(keyword) ||
            atlas.folder.toLowerCase().includes(keyword) ||
            frame.name.toLowerCase().includes(keyword),
        )
        : atlas.frames;

      return { ...atlas, filteredFrames };
    })
    .filter((atlas) => atlas.filteredFrames.length > 0);
});

const totalFilteredFrames = computed(() =>
  filteredAtlases.value.reduce(
    (sum, atlas) => sum + atlas.filteredFrames.length,
    0,
  ),
);

function getFramePreviewStyle(atlas: AtlasEntry, frame: AtlasFrameEntry) {
  const maxPreviewSize = 116;
  const scale = Math.min(
    maxPreviewSize / Math.max(frame.frame.w, 1),
    maxPreviewSize / Math.max(frame.frame.h, 1),
    1,
  );
  const image = atlas.images[frame.frame.idx ?? 0];

  return {
    width: `${frame.frame.w}px`,
    height: `${frame.frame.h}px`,
    backgroundImage: image ? `url(${image.url})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `-${frame.frame.x}px -${frame.frame.y}px`,
    transform: `scale(${scale})`,
    transformOrigin: "center center",
  };
}

onMounted(() => {
  loadAtlases();
});
</script>

<style scoped>
.spritesheets-page {
  min-height: 100vh;
  padding: 28px;
  background:
    radial-gradient(circle at top left, rgba(62, 171, 244, 0.16), transparent 28%),
    radial-gradient(circle at top right, rgba(90, 247, 208, 0.14), transparent 22%),
    linear-gradient(180deg, #06111c 0%, #0b1827 100%);
  color: #eff8ff;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  overflow: auto;
}

.hero {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.eyebrow,
.stat-label,
.atlas-card__eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  color: #8db9da;
}

h1,
h2,
h3,
p,
figure {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 4vw, 3.25rem);
}

.subtitle {
  margin-top: 8px;
  max-width: 760px;
  color: rgba(226, 241, 252, 0.8);
  line-height: 1.55;
}

.subtitle code {
  color: #9fe7ff;
}

.hero-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stat-card {
  min-width: 108px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(7, 23, 38, 0.84);
  border: 1px solid rgba(140, 198, 233, 0.16);
}

.stat-card strong {
  font-size: 1.3rem;
}

.toolbar {
  display: flex;
  gap: 12px;
  align-items: end;
  margin-bottom: 20px;
}

.search-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-box span {
  font-size: 0.86rem;
  color: rgba(219, 237, 248, 0.78);
}

.search-box input,
.refresh-btn {
  min-height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(142, 205, 242, 0.2);
  background: rgba(8, 24, 39, 0.86);
  color: #eff8ff;
  font: inherit;
}

.search-box input {
  padding: 0 14px;
}

.refresh-btn {
  padding: 0 18px;
  cursor: pointer;
  font-weight: 700;
}

.state-panel {
  padding: 20px;
  border-radius: 16px;
  background: rgba(8, 24, 39, 0.86);
  border: 1px solid rgba(140, 198, 233, 0.16);
}

.state-panel--error {
  color: #ffb8b8;
  border-color: rgba(255, 140, 140, 0.24);
}

.warning-panel {
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(74, 46, 7, 0.32);
  border: 1px solid rgba(255, 196, 94, 0.28);
  color: #ffe2ac;
}

.warning-panel ul {
  margin: 10px 0 0;
  padding-left: 18px;
}

.atlas-list {
  display: grid;
  gap: 22px;
}

.atlas-card {
  padding: 18px;
  border-radius: 20px;
  background: rgba(7, 21, 35, 0.9);
  border: 1px solid rgba(140, 198, 233, 0.14);
}

.atlas-card__header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;
  margin-bottom: 18px;
}

.atlas-card__path {
  margin-top: 8px;
  color: rgba(190, 217, 234, 0.62);
  word-break: break-all;
  font-size: 0.9rem;
}

.atlas-card__folder {
  margin-top: 8px;
  color: rgba(159, 231, 255, 0.82);
  font-size: 0.9rem;
}

.atlas-card__meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.atlas-card__meta span {
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(17, 44, 67, 0.9);
  color: rgba(227, 243, 252, 0.82);
  font-size: 0.85rem;
}

.atlas-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}

.atlas-image-card {
  padding: 12px;
  border-radius: 16px;
  background: rgba(11, 29, 45, 0.9);
  border: 1px solid rgba(140, 198, 233, 0.12);
}

.atlas-image-card figcaption {
  margin-bottom: 10px;
  font-size: 0.88rem;
  color: rgba(213, 235, 247, 0.8);
}

.atlas-image {
  width: 100%;
  max-height: 420px;
  object-fit: contain;
  display: block;
  border-radius: 10px;
  background:
    linear-gradient(45deg, rgba(148, 187, 214, 0.12) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(148, 187, 214, 0.12) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(148, 187, 214, 0.12) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(148, 187, 214, 0.12) 75%);
  background-size: 18px 18px;
  background-position: 0 0, 0 9px, 9px -9px, -9px 0;
}

.frame-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  gap: 12px;
}

.frame-card {
  padding: 12px;
  border-radius: 16px;
  background: rgba(10, 28, 42, 0.9);
  border: 1px solid rgba(140, 198, 233, 0.1);
}

.frame-preview-shell {
  height: 140px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    linear-gradient(45deg, rgba(160, 194, 218, 0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(160, 194, 218, 0.1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(160, 194, 218, 0.1) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(160, 194, 218, 0.1) 75%),
    rgba(2, 10, 18, 0.9);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0;
}

.frame-preview-fit {
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
}

.frame-preview {
  background-repeat: no-repeat;
}

.frame-info {
  margin-top: 10px;
  display: grid;
  gap: 4px;
}

.frame-info h3 {
  font-size: 0.92rem;
  line-height: 1.3;
  word-break: break-word;
}

.frame-info p {
  font-size: 0.82rem;
  color: rgba(220, 239, 250, 0.78);
}

.frame-info .muted {
  color: rgba(179, 205, 222, 0.58);
}

@media (max-width: 720px) {
  .spritesheets-page {
    padding: 18px;
  }

  .hero,
  .toolbar,
  .atlas-card__header {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
