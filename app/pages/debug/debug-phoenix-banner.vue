<template>
  <main class="phoenix-banner-page">
    <section class="phoenix-banner-toolbar">
      <div class="phoenix-banner-group">
        <span class="phoenix-banner-label">Language</span>
        <div class="phoenix-banner-actions">
          <button type="button" class="phoenix-banner-button"
            :class="{ 'phoenix-banner-button--active': selectedLang === 'en' }" @click="switchLang('en')">
            EN
          </button>
          <button type="button" class="phoenix-banner-button"
            :class="{ 'phoenix-banner-button--active': selectedLang === 'km' }" @click="switchLang('km')">
            KM
          </button>
        </div>
      </div>

      <div class="phoenix-banner-meta">
        <div><strong>Top:</strong> <code>bossfont_01.png</code></div>
        <div><strong>Name:</strong> <code>bossname_07.png</code></div>
      </div>
    </section>

    <section class="phoenix-banner-stage-wrap">
      <div ref="pixiMountRef" class="phoenix-banner-stage" />

      <div v-if="isLoading || errorMessage" class="phoenix-banner-overlay">
        <div class="phoenix-banner-state" :class="{ 'phoenix-banner-state--error': Boolean(errorMessage) }">
          {{ errorMessage || "Loading banner assets..." }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import * as PIXI from "pixi.js";
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import {
  useFishAssetPreload,
} from "~/composables/game_core/assets/useFishAssetPreload";
type LocalizeLanguage = "en" | "km";

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;
const TOP_FRAME = "bossfont_01.png";
const NAME_FRAME = "bossname_07.png";
const ODD_FONT_URL = "/fish/fish-all-star/resources/fnt/fnt_odd/fnt_odd.fnt";
const ODD_FONT_NAME = "fnt_odd";

const pixiMountRef = ref<HTMLDivElement | null>(null);
const selectedLang = ref<LocalizeLanguage>("en");
const isLoading = ref(true);
const errorMessage = ref("");

const { preloadBitmapFont, getLocalizedTexture } =
  useFishAssetPreload();

let app: PIXI.Application | null = null;
let resizeObserver: ResizeObserver | null = null;
let topSprite: PIXI.Sprite | null = null;
let nameSprite: PIXI.Sprite | null = null;
let oddText: PIXI.BitmapText | null = null;

function fitCanvas(container: HTMLDivElement) {
  if (!app) return;
  const bounds = container.getBoundingClientRect();
  const scale = Math.min(bounds.width / STAGE_WIDTH, bounds.height / STAGE_HEIGHT);
  const view = app.view as HTMLCanvasElement;
  view.style.width = `${STAGE_WIDTH * scale}px`;
  view.style.height = `${STAGE_HEIGHT * scale}px`;
}

function renderBanner() {
  if (!topSprite || !nameSprite || !oddText) return;

  topSprite.texture = getLocalizedTexture(selectedLang.value, TOP_FRAME);
  nameSprite.texture = getLocalizedTexture(selectedLang.value, NAME_FRAME);

  topSprite.anchor.set(0.5);
  nameSprite.anchor.set(0.5);

  topSprite.position.set(STAGE_WIDTH / 2, STAGE_HEIGHT / 2 - 40);
  nameSprite.position.set(STAGE_WIDTH / 2, STAGE_HEIGHT / 2 + 46);
  oddText.text = "200X";
  oddText.updateText();
  oddText.pivot.set(oddText.textWidth / 2, oddText.textHeight / 2);
  oddText.position.set(STAGE_WIDTH / 2, STAGE_HEIGHT / 2 + 158);

  topSprite.scale.set(1);
  nameSprite.scale.set(1);
  oddText.scale.set(1);
}

async function installOddFont() {
  if (PIXI.BitmapFont.available[ODD_FONT_NAME]) return;
  await preloadBitmapFont(ODD_FONT_URL);
}

async function mountStage(container: HTMLDivElement) {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    await installOddFont();

    app = new PIXI.Application({
      width: STAGE_WIDTH,
      height: STAGE_HEIGHT,
      antialias: true,
      backgroundColor: 0x07111b,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });

    container.innerHTML = "";
    container.appendChild(app.view as HTMLCanvasElement);

    const background = new PIXI.Graphics();
    background.beginFill(0x07111b, 1);
    background.drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
    background.endFill();

    const glow = new PIXI.Graphics();
    glow.beginFill(0x5fd7ff, 0.06);
    glow.drawRoundedRect(300, 250, 680, 180, 36);
    glow.endFill();

    topSprite = new PIXI.Sprite();
    nameSprite = new PIXI.Sprite();
    oddText = new PIXI.BitmapText("200X", {
      fontName: ODD_FONT_NAME,
      fontSize: 34,
      align: "center",
    });

    app.stage.addChild(background, glow, topSprite, nameSprite, oddText);
    renderBanner();

    fitCanvas(container);
    resizeObserver = new ResizeObserver(() => fitCanvas(container));
    resizeObserver.observe(container);
  } catch (error) {
    console.error(error);
    errorMessage.value =
      error instanceof Error ? error.message : "Unable to load phoenix banner debug.";
  } finally {
    isLoading.value = false;
  }
}

async function switchLang(lang: LocalizeLanguage) {
  selectedLang.value = lang;
  await nextTick();
  renderBanner();
}

onMounted(() => {
  if (!pixiMountRef.value) return;
  void mountStage(pixiMountRef.value);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
  topSprite = null;
  nameSprite = null;
  oddText = null;

  if (app) {
    app.destroy(true, { children: true, texture: false });
    app = null;
  }
});
</script>

<style scoped>
.phoenix-banner-page {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr;
  background:
    radial-gradient(circle at top, rgba(255, 136, 39, 0.12), transparent 24%),
    linear-gradient(180deg, #050c15 0%, #091524 100%);
  color: #edf7ff;
}

.phoenix-banner-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  padding: 18px 22px;
  border-bottom: 1px solid rgba(124, 188, 226, 0.18);
  background: rgba(4, 12, 20, 0.84);
}

.phoenix-banner-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.phoenix-banner-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(181, 220, 244, 0.75);
}

.phoenix-banner-actions {
  display: flex;
  gap: 10px;
}

.phoenix-banner-button {
  min-width: 72px;
  height: 40px;
  border: 1px solid rgba(123, 192, 239, 0.3);
  border-radius: 999px;
  background: rgba(11, 24, 36, 0.9);
  color: #edf7ff;
  font-weight: 700;
  cursor: pointer;
}

.phoenix-banner-button--active {
  background: linear-gradient(180deg, rgba(91, 183, 239, 0.95), rgba(39, 110, 171, 0.95));
  border-color: rgba(174, 227, 255, 0.75);
}

.phoenix-banner-meta {
  display: grid;
  gap: 6px;
  align-content: center;
}

.phoenix-banner-stage-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.phoenix-banner-stage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phoenix-banner-stage :deep(canvas) {
  display: block;
}

.phoenix-banner-overlay {
  position: absolute;
  inset: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.phoenix-banner-state {
  padding: 18px 22px;
  border-radius: 16px;
  background: rgba(9, 22, 35, 0.92);
  border: 1px solid rgba(127, 192, 231, 0.18);
}

.phoenix-banner-state--error {
  color: #ffd1d1;
  border-color: rgba(255, 125, 125, 0.26);
}
</style>
