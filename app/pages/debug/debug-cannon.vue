<template>
  <main class="debug-page">
    <section class="hero">
      <div>
        <p class="eyebrow">Atlas Debug</p>
        <h1>Cannon PNG + Atlas Viewer</h1>
        <p class="subtitle">
          Inspect frame names from <code>cannon.atlas.txt</code> and preview how
          each sprite is cut from <code>cannon.png</code>.
        </p>
      </div>

      <div class="hero-meta">
        <div class="meta-card">
          <span class="meta-label">Image</span>
          <strong>{{ atlasData?.meta.image ?? "Loading..." }}</strong>
        </div>
        <div class="meta-card">
          <span class="meta-label">Prefix</span>
          <strong>{{ atlasData?.meta.prefix ?? "-" }}</strong>
        </div>
        <div class="meta-card">
          <span class="meta-label">Frames</span>
          <strong>{{ frames.length }}</strong>
        </div>
      </div>
    </section>

    <section v-if="errorMessage" class="panel error-panel">
      {{ errorMessage }}
    </section>

    <section v-else class="debug-layout">
      <aside class="panel sidebar">
        <label class="search-box">
          <span>Search frame name</span>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Try cannon, fire, base..."
          />
        </label>

        <div class="frame-list">
          <button
            v-for="frame in filteredFrames"
            :key="frame.name"
            class="frame-button"
            :class="{ active: frame.name === selectedFrame?.name }"
            type="button"
            @click="selectedFrameName = frame.name"
          >
            <span class="frame-name">{{ frame.name }}</span>
            <span class="frame-size">
              {{ frame.frame.w }} x {{ frame.frame.h }}
            </span>
          </button>
        </div>
      </aside>

      <section class="content">
        <div class="panel inspector">
          <div class="panel-header">
            <div>
              <p class="panel-label">Selected frame</p>
              <h2>{{ selectedFrame?.name ?? "No frame selected" }}</h2>
            </div>
          </div>

          <div v-if="selectedFrame" class="details-grid">
            <div class="detail-card">
              <span class="detail-label">Atlas frame</span>
              <strong>
                x: {{ selectedFrame.frame.x }}, y: {{ selectedFrame.frame.y }}
              </strong>
              <small>
                w: {{ selectedFrame.frame.w }}, h: {{ selectedFrame.frame.h }}
              </small>
            </div>
            <div class="detail-card">
              <span class="detail-label">Source size</span>
              <strong>
                {{ selectedFrame.sourceSize.w }} x {{ selectedFrame.sourceSize.h }}
              </strong>
              <small>
                offset: {{ selectedFrame.spriteSourceSize.x }},
                {{ selectedFrame.spriteSourceSize.y }}
              </small>
            </div>
            <div class="detail-card">
              <span class="detail-label">Texture path</span>
              <strong>{{ texturePath }}</strong>
            </div>
          </div>

          <div class="preview-grid">
            <div class="preview-card">
              <div class="preview-title">Cropped preview</div>
              <canvas
                ref="previewCanvas"
                class="preview-canvas"
                aria-label="Selected frame preview"
              />
            </div>

            <div class="preview-card">
              <div class="preview-title">Atlas image with highlight</div>
              <div class="atlas-image-shell">
                <img
                  :src="texturePath"
                  alt="cannon texture atlas"
                  class="atlas-image"
                  @load="handleImageLoad"
                />
                <div
                  v-if="selectedFrame && imageSize.width && imageSize.height"
                  class="atlas-highlight"
                  :style="highlightStyle"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="panel raw-panel">
          <div class="panel-header">
            <div>
              <p class="panel-label">Raw atlas</p>
              <h2>cannon.atlas.txt</h2>
            </div>
          </div>
          <pre>{{ prettyAtlas }}</pre>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";

type AtlasFrameData = {
  frame: {
    idx: number;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  sourceSize: {
    w: number;
    h: number;
  };
  spriteSourceSize: {
    x: number;
    y: number;
  };
};

type AtlasData = {
  meta: {
    prefix: string;
    scale: number;
    image: string;
  };
  frames: Record<string, AtlasFrameData>;
};

type AtlasFrameEntry = AtlasFrameData & {
  name: string;
};

const atlasPath = "/resources/cannon.atlas.txt";
const texturePath = "/resources/cannon.png";

const atlasData = ref<AtlasData | null>(null);
const errorMessage = ref("");
const searchTerm = ref("");
const selectedFrameName = ref("");
const imageSize = ref({ width: 0, height: 0 });
const previewCanvas = ref<HTMLCanvasElement | null>(null);

const frames = computed<AtlasFrameEntry[]>(() => {
  if (!atlasData.value) {
    return [];
  }

  return Object.entries(atlasData.value.frames)
    .map(([name, frame]) => ({ name, ...frame }))
    .sort((left, right) => left.name.localeCompare(right.name));
});

const filteredFrames = computed(() => {
  const keyword = searchTerm.value.trim().toLowerCase();

  if (!keyword) {
    return frames.value;
  }

  return frames.value.filter((frame) =>
    frame.name.toLowerCase().includes(keyword),
  );
});

const selectedFrame = computed(() => {
  const exactMatch = filteredFrames.value.find(
    (frame) => frame.name === selectedFrameName.value,
  );

  if (exactMatch) {
    return exactMatch;
  }

  return filteredFrames.value[0] ?? null;
});

const prettyAtlas = computed(() =>
  atlasData.value ? JSON.stringify(atlasData.value, null, 2) : "Loading atlas...",
);

const highlightStyle = computed(() => {
  if (!selectedFrame.value || !imageSize.value.width || !imageSize.value.height) {
    return {};
  }

  const { frame } = selectedFrame.value;

  return {
    left: `${(frame.x / imageSize.value.width) * 100}%`,
    top: `${(frame.y / imageSize.value.height) * 100}%`,
    width: `${(frame.w / imageSize.value.width) * 100}%`,
    height: `${(frame.h / imageSize.value.height) * 100}%`,
  };
});

const drawSelectedFrame = async () => {
  if (!selectedFrame.value || !previewCanvas.value) {
    return;
  }

  const texture = new Image();
  texture.src = texturePath;

  await texture.decode();

  const canvas = previewCanvas.value;
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  const {
    frame,
    sourceSize,
    spriteSourceSize,
  } = selectedFrame.value;

  canvas.width = sourceSize.w;
  canvas.height = sourceSize.h;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#0e1624";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.drawImage(
    texture,
    frame.x,
    frame.y,
    frame.w,
    frame.h,
    spriteSourceSize.x,
    spriteSourceSize.y,
    frame.w,
    frame.h,
  );
};

const loadAtlas = async () => {
  try {
    atlasData.value = await $fetch<AtlasData>(atlasPath, {
      parseResponse: JSON.parse,
    });

    selectedFrameName.value = Object.keys(atlasData.value.frames)[0] ?? "";
    await nextTick();
    await drawSelectedFrame();
  } catch (error) {
    console.error(error);
    errorMessage.value = `Could not load ${atlasPath}.`;
  }
};

const handleImageLoad = (event: Event) => {
  const target = event.target as HTMLImageElement;
  imageSize.value = {
    width: target.naturalWidth,
    height: target.naturalHeight,
  };
};

watch(selectedFrame, () => {
  drawSelectedFrame();
});

onMounted(() => {
  loadAtlas();
});
</script>

<style scoped>
.debug-page {
  min-height: 100vh;
  padding: 32px;
  background:
    radial-gradient(circle at top left, rgba(255, 191, 122, 0.18), transparent 28%),
    radial-gradient(circle at top right, rgba(99, 194, 255, 0.18), transparent 26%),
    linear-gradient(180deg, #08111d 0%, #0d1625 100%);
  color: #f5f7fb;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
}

.hero {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  margin-bottom: 24px;
}

.eyebrow,
.panel-label,
.meta-label,
.detail-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  color: #8cb8de;
}

h1,
h2,
p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 3vw, 3.2rem);
}

.subtitle {
  margin-top: 10px;
  max-width: 720px;
  color: #bed0e4;
  line-height: 1.5;
}

.hero-meta {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
}

.meta-card,
.detail-card,
.panel {
  background: rgba(7, 16, 29, 0.76);
  border: 1px solid rgba(145, 190, 227, 0.16);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
  border-radius: 20px;
}

.meta-card {
  padding: 16px;
}

.meta-card strong,
.detail-card strong {
  display: block;
  margin-top: 8px;
}

.debug-layout {
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
  gap: 20px;
}

.sidebar,
.inspector,
.raw-panel {
  padding: 18px;
}

.search-box {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.search-box input {
  width: 100%;
  border: 1px solid rgba(140, 184, 222, 0.24);
  background: rgba(255, 255, 255, 0.04);
  color: inherit;
  border-radius: 14px;
  padding: 12px 14px;
}

.frame-list {
  display: grid;
  gap: 8px;
  max-height: calc(100vh - 240px);
  overflow: auto;
}

.frame-button {
  border: 1px solid transparent;
  border-radius: 14px;
  padding: 12px;
  text-align: left;
  background: rgba(255, 255, 255, 0.03);
  color: inherit;
  cursor: pointer;
}

.frame-button.active {
  border-color: rgba(255, 196, 107, 0.75);
  background: rgba(255, 196, 107, 0.12);
}

.frame-name,
.frame-size {
  display: block;
}

.frame-name {
  font-weight: 700;
}

.frame-size {
  margin-top: 4px;
  color: #9bb2c9;
  font-size: 0.9rem;
}

.content {
  display: grid;
  gap: 20px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;
  margin-bottom: 18px;
}

.details-grid,
.preview-grid {
  display: grid;
  gap: 16px;
}

.details-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 18px;
}

.detail-card {
  padding: 14px;
}

.detail-card small {
  display: block;
  margin-top: 6px;
  color: #9bb2c9;
}

.preview-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.preview-card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  padding: 14px;
}

.preview-title {
  margin-bottom: 12px;
  color: #c8d6e5;
  font-weight: 700;
}

.preview-canvas,
.atlas-image {
  display: block;
  width: 100%;
  border-radius: 16px;
  background:
    linear-gradient(45deg, rgba(255, 255, 255, 0.06) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.06) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.06) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.06) 75%);
  background-size: 24px 24px;
  background-position: 0 0, 0 12px, 12px -12px, -12px 0;
}

.atlas-image-shell {
  position: relative;
}

.atlas-highlight {
  position: absolute;
  border: 2px solid #ffcb6f;
  box-shadow:
    0 0 0 9999px rgba(8, 17, 29, 0.56),
    0 0 0 2px rgba(255, 255, 255, 0.16) inset;
  border-radius: 8px;
  pointer-events: none;
}

.raw-panel pre {
  margin: 0;
  overflow: auto;
  max-height: 420px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.28);
  color: #cfe3f5;
  line-height: 1.45;
}

.error-panel {
  padding: 18px;
  color: #ffd0d0;
  border-color: rgba(255, 125, 125, 0.24);
}

code {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 2px 6px;
}

@media (max-width: 1024px) {
  .hero,
  .debug-layout,
  .details-grid,
  .preview-grid {
    grid-template-columns: 1fr;
    display: grid;
  }

  .hero-meta {
    width: 100%;
  }

  .frame-list {
    max-height: 280px;
  }
}

@media (max-width: 640px) {
  .debug-page {
    padding: 18px;
  }

  .hero-meta {
    grid-template-columns: 1fr;
  }
}
</style>
