<template>
  <main class="debug-page">
    <section class="hero">
      <div>
        <p class="eyebrow">Atlas Debug</p>
        <h1>Bullet PNG + Atlas Viewer</h1>
        <p class="subtitle">
          Browse every frame in <code>bullet.atlas.txt</code> and preview the
          cropped sprite from <code>bullet.png</code>.
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
          <strong>{{ filteredFrames.length }}</strong>
        </div>
      </div>
    </section>

    <section v-if="errorMessage" class="panel error-panel">
      {{ errorMessage }}
    </section>

    <template v-else>
      <section class="panel atlas-panel">
        <div class="panel-header">
          <div>
            <p class="panel-label">Full atlas</p>
            <h2>bullet.png</h2>
          </div>
        </div>

        <div class="atlas-shell">
          <img :src="texturePath" alt="bullet texture atlas" class="atlas-image" />
        </div>
      </section>

      <section class="toolbar">
        <label class="search-box">
          <span>Search frame name</span>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Try bullet, shark, thunder..."
          />
        </label>
      </section>

      <section class="frame-grid">
        <article
          v-for="frame in filteredFrames"
          :key="frame.name"
          class="panel frame-card"
        >
          <div class="preview-shell">
            <div class="preview-fit-box">
              <div
                class="preview-image"
                :style="getFramePreviewStyle(frame)"
              />
            </div>
          </div>

          <div class="frame-info">
            <h3>{{ frame.name }}</h3>
            <p>{{ frame.frame.w }} x {{ frame.frame.h }}</p>
            <p class="muted">
              x: {{ frame.frame.x }}, y: {{ frame.frame.y }}
            </p>
          </div>
        </article>
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

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

const atlasPath = "/resources/bullet.atlas.txt";
const texturePath = "/resources/bullet.png";

const atlasData = ref<AtlasData | null>(null);
const errorMessage = ref("");
const searchTerm = ref("");

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

const getFramePreviewStyle = (frame: AtlasFrameEntry) => {
  const maxPreviewSize = 120;
  const scale = Math.min(
    maxPreviewSize / frame.frame.w,
    maxPreviewSize / frame.frame.h,
    1,
  );

  return {
    width: `${frame.frame.w}px`,
    height: `${frame.frame.h}px`,
    backgroundImage: `url(${texturePath})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `-${frame.frame.x}px -${frame.frame.y}px`,
    transform: `scale(${scale})`,
    transformOrigin: "center center",
  };
};

const loadAtlas = async () => {
  try {
    atlasData.value = await $fetch<AtlasData>(atlasPath, {
      parseResponse: JSON.parse,
    });
  } catch (error) {
    console.error(error);
    errorMessage.value = `Could not load ${atlasPath}.`;
  }
};

onMounted(() => {
  loadAtlas();
});
</script>

<style scoped>
.debug-page {
  min-height: 100vh;
  padding: 32px;
  background:
    radial-gradient(circle at top left, rgba(249, 183, 80, 0.18), transparent 28%),
    radial-gradient(circle at top right, rgba(73, 160, 255, 0.18), transparent 24%),
    linear-gradient(180deg, #07101b 0%, #0d1827 100%);
  color: #f3f6fb;
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
.meta-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  color: #8cb8de;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 3vw, 3.2rem);
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
  word-break: break-word;
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

.meta-card strong {
  display: block;
  margin-top: 8px;
}

.atlas-panel {
  padding: 18px;
}

.panel-header {
  margin-bottom: 18px;
}

.atlas-shell {
  overflow: auto;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  padding: 16px;
}

.atlas-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  image-rendering: pixelated;
}

.toolbar {
  margin: 20px 0;
}

.search-box {
  display: grid;
  gap: 8px;
}

.search-box input {
  width: 100%;
  border: 1px solid rgba(140, 184, 222, 0.24);
  background: rgba(255, 255, 255, 0.04);
  color: inherit;
  border-radius: 14px;
  padding: 12px 14px;
}

.frame-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.frame-card {
  padding: 16px;
}

.preview-shell {
  min-height: 156px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  padding: 12px;
  background:
    linear-gradient(45deg, rgba(255, 255, 255, 0.06) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.06) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.06) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.06) 75%);
  background-size: 24px 24px;
  background-position: 0 0, 0 12px, 12px -12px, -12px 0;
}

.preview-fit-box {
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
}

.preview-image {
  image-rendering: pixelated;
}

.frame-info {
  margin-top: 14px;
  display: grid;
  gap: 4px;
}

.muted {
  color: #9bb2c9;
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
  .hero {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero-meta {
    width: 100%;
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
