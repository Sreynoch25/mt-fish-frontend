import * as PIXI from "pixi.js";
import type { StageTransitionRunner } from "./types";
import {
  createPhoenixBossBanner,
  installBossOddFont,
  type LocalizedTextureGetter,
} from "./bossBanner";
import { runBossBannerSequence } from "./bossBannerRunner";

const BURN_VERT = `
  attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat3 projectionMatrix;
  varying vec2 vTextureCoord;
  void main(void) {
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
  }
`;

const BURN_FRAG = `
  precision mediump float;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  uniform sampler2D uNoise;
  uniform sampler2D uBurnColor;
  uniform float uProgress;
  uniform float uEdgeWidth;

  void main(void) {
    float noise = texture2D(uNoise, vTextureCoord).r;
    float burnLine  = uProgress;
    float charStart = uProgress + uEdgeWidth * 4.0;

    if (noise < burnLine - uEdgeWidth) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }

    vec4 scene = texture2D(uSampler, vTextureCoord);

    if (noise < burnLine + uEdgeWidth) {
      float t = (noise - (burnLine - uEdgeWidth)) / (uEdgeWidth * 2.0);
      t = clamp(t, 0.0, 1.0);
      vec3 hotOrange = vec3(1.0,  0.42, 0.0);
      vec3 deepRed   = vec3(0.55, 0.04, 0.0);
      vec3 fireCol   = mix(hotOrange, deepRed, t);
      vec3 col       = mix(fireCol, vec3(0.04, 0.01, 0.0), t * t * 0.6);
      gl_FragColor   = vec4(col, 1.0);
      return;
    }

    if (noise < charStart) {
      float charT = (noise - (burnLine + uEdgeWidth)) / (charStart - burnLine - uEdgeWidth);
      charT = clamp(charT, 0.0, 1.0);
      vec3 innerChar = vec3(0.06, 0.01, 0.0);
      vec3 outerChar = vec3(0.04, 0.01, 0.0);
      vec3 charCol   = mix(innerChar, outerChar, charT);
      float ember = (1.0 - charT) * (1.0 - charT) * 0.12;
      charCol += vec3(ember * 0.9, ember * 0.18, 0.0);
      gl_FragColor = vec4(charCol, 1.0);
      return;
    }

    gl_FragColor = scene;
  }
`;

class BurnFilter extends PIXI.Filter {
  constructor(noiseTexture: PIXI.Texture, burnColorTexture: PIXI.Texture) {
    super(BURN_VERT, BURN_FRAG, {
      uNoise: noiseTexture,
      uBurnColor: burnColorTexture,
      uProgress: 0,
      uEdgeWidth: 0.025,
    });
  }
  get progress(): number {
    return this.uniforms.uProgress;
  }
  set progress(v: number) {
    this.uniforms.uProgress = v;
  }
}

interface AshParticle {
  sprite: PIXI.Graphics;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

function createAshParticles(
  container: PIXI.Container,
  count: number,
  width: number,
  height: number,
): AshParticle[] {
  const particles: AshParticle[] = [];
  for (let i = 0; i < count; i++) {
    const g = new PIXI.Graphics();
    const size = 1.5 + Math.random() * 3.5;
    const r = Math.random();
    const color = r < 0.4 ? 0xff3300 : r < 0.7 ? 0xff7700 : 0xffbb33;
    g.beginFill(color, 0.9);
    g.drawCircle(0, 0, size);
    g.endFill();
    g.x = Math.random() * width;
    g.y = Math.random() * height;
    g.alpha = 0;
    container.addChild(g);
    particles.push({
      sprite: g,
      x: g.x,
      y: g.y,
      vx: (Math.random() - 0.5) * 1.2,
      vy: -(0.6 + Math.random() * 1.8),
      life: Math.random(),
      maxLife: 0.6 + Math.random() * 1.0,
      size,
    });
  }
  return particles;
}

function tickAshParticles(
  particles: AshParticle[],
  dt: number,
  burnProgress: number,
  width: number,
  height: number,
): void {
  for (const p of particles) {
    p.life += dt / p.maxLife;
    if (p.life > 1) {
      p.x = Math.random() * width;
      p.y = (0.2 + Math.random() * 0.8) * height;
      p.vx = (Math.random() - 0.5) * 1.2;
      p.vy = -(0.6 + Math.random() * 1.8);
      p.life = 0;
    }
    p.x += p.vx;
    p.y += p.vy;
    p.vx += (Math.random() - 0.5) * 0.08;
    const lifeT = p.life;
    const alphaEnvelope = lifeT < 0.2 ? lifeT / 0.2 : 1.0 - (lifeT - 0.2) / 0.8;
    p.sprite.alpha = alphaEnvelope * burnProgress * 0.85;
    p.sprite.x = p.x;
    p.sprite.y = p.y;
    p.sprite.scale.set(1.0 - lifeT * 0.5);
  }
}

function destroyAshParticles(particles: AshParticle[]): void {
  for (const p of particles) {
    p.sprite.parent?.removeChild(p.sprite);
    p.sprite.destroy();
  }
}

export interface BurnTransitionOptions {
  app: PIXI.Application;
  currentScene: PIXI.DisplayObject;
  targetLayer: PIXI.Container;
  nextScene: PIXI.DisplayObject;
  noiseTexture: PIXI.Texture;
  burnColorTexture: PIXI.Texture;
  durationMs?: number;
  onComplete?: () => void;
  width: number;
  height: number;
  createIntroOverlay?: (width: number, height: number) => PIXI.Container | null;
}

/**
 * runPhoenixBurnTransition
 *
 * How the snapshot works
 * ──────────────────────
 * currentScene is a plain Container at (0,0) scale(1,1) inside backgroundLayer.
 * Its children (background sprite + ambient) are positioned within it using
 * GAME_WIDTH/GAME_HEIGHT coordinates. When renderer.render(currentScene, { renderTexture })
 * is called, PIXI uses only currentScene's OWN local transform (not its parents),
 * so the snapshot captures exactly the 1280x720 logical content — full screen.
 *
 * Key ordering rules
 * ──────────────────
 * 1. nextScene is NOT added to backgroundLayer before this function is called
 *    (useFishMapDebugScene no longer pre-adds it). The transition adds it here
 *    AFTER the snapshot, so it never bleeds into the capture.
 * 2. currentScene.visible = false after snapshot — burnSprite is the visual
 *    stand-in while it burns away.
 */
export function runPhoenixBurnTransition(options: BurnTransitionOptions): void {
  const {
    app,
    currentScene,
    targetLayer,
    nextScene,
    noiseTexture,
    burnColorTexture,
    durationMs = 2000,
    onComplete,
    createIntroOverlay,
  } = options;
  const { renderer, ticker } = app;

  const screenWidth = Math.round(renderer.width);
  const screenHeight = Math.round(renderer.height);

  const sceneRoot = targetLayer.parent as PIXI.Container;
  const stageParent = sceneRoot.parent as PIXI.Container; // app.stage
  const sceneRootIndex = stageParent.getChildIndex(sceneRoot);

  // ── Step 1: Snapshot the screen exactly as it looks right now ─────────────
  // Do NOT touch the scene graph before this — capture everything visible
  const rt = PIXI.RenderTexture.create({
    width: screenWidth,
    height: screenHeight,
  });

  // Hide everything in sceneRoot except targetLayer
  const siblingVisibility = new Map<PIXI.DisplayObject, boolean>();
  for (const child of sceneRoot.children) {
    siblingVisibility.set(child, child.visible);
    child.visible = child === targetLayer; // only show targetLayer
  }

  // Also hide anything above sceneRoot in stage (UI overlays etc)
  const stageVisibility = new Map<PIXI.DisplayObject, boolean>();
  for (const child of stageParent.children) {
    stageVisibility.set(child, child.visible);
    child.visible = child === sceneRoot; // only show sceneRoot
  }

  renderer.render(app.stage, { renderTexture: rt, clear: true });

  // Restore all visibility
  for (const [child, wasVisible] of siblingVisibility) {
    child.visible = wasVisible;
  }
  for (const [child, wasVisible] of stageVisibility) {
    child.visible = wasVisible;
  }

  // ── Step 2: Add nextScene at the BOTTOM of targetLayer (will be revealed) ──
  // Ensure nextScene is not already in the tree
  if (nextScene.parent) {
    nextScene.parent.removeChild(nextScene);
  }
  nextScene.visible = true;
  nextScene.alpha = 1;
  targetLayer.addChildAt(nextScene, 0); // index 0 = bottom = revealed last

  // ── Step 3: Hide currentScene — burnSprite takes its place visually ────────
  currentScene.visible = false;

  // ── Step 4: Build burnSprite from clean snapshot ───────────────────────────
  const burnSprite = new PIXI.Sprite(rt);
  burnSprite.position.set(0, 0);
  burnSprite.width = screenWidth;
  burnSprite.height = screenHeight;
  const burnFilter = new BurnFilter(noiseTexture, burnColorTexture);
  burnSprite.filters = [burnFilter];

  // ── Step 5: Ash particles ──────────────────────────────────────────────────
  const ashContainer = new PIXI.Container();
  const ashParticles = createAshParticles(
    ashContainer,
    140,
    screenWidth,
    screenHeight,
  );

  // ── Step 6: Intro overlay (optional) ──────────────────────────────────────
  const introOverlay =
    createIntroOverlay?.(options.width, options.height) ?? null;

  // ── Step 7: Insert into stage ABOVE sceneRoot (screen space) ──────────────
  // Layout order from bottom to top:
  //   sceneRootIndex+0 = sceneRoot (contains targetLayer → nextScene at 0, currentScene hidden)
  //   sceneRootIndex+1 = burnSprite (snapshot of old scene, burns away)
  //   sceneRootIndex+2 = ashContainer (particles above burn)
  const targetLayerIndex = sceneRoot.getChildIndex(targetLayer);
  sceneRoot.addChildAt(burnSprite, targetLayerIndex + 1);
  sceneRoot.addChildAt(ashContainer, targetLayerIndex + 2);
  if (introOverlay) {
    stageParent.addChild(introOverlay); // topmost
  }

  // ── Tick ───────────────────────────────────────────────────────────────────
  const startTime = performance.now();
  let lastTime = startTime;

  const tick = () => {
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    const t = Math.min((now - startTime) / durationMs, 1);

    // burn progress — ease in
    burnFilter.progress = t < 0.8 ? (t / 0.8) ** 1.6 : 1.0;

    // ash intensity peaks mid-transition
    const ashIntensity =
      t < 0.4 ? t / 0.4 : t < 0.8 ? 1.0 : 1.0 - ((t - 0.8) / 0.2) * 0.25;
    tickAshParticles(ashParticles, dt, ashIntensity, screenWidth, screenHeight);

    // intro overlay animation
    if (introOverlay) {
      const fadeIn = Math.min(1, t / 0.08);
      const holdFade = t < 0.18 ? 1 : Math.max(0, 1 - (t - 0.18) / 0.34);
      introOverlay.alpha = fadeIn * holdFade;
      const scaleBoost = t < 0.22 ? 1.08 - t * 0.18 : 1.0;
      introOverlay.scale.set(scaleBoost);
    }

    // fade out burn and ash at the end
    if (t > 0.8) burnSprite.alpha = Math.max(0, 1 - (t - 0.8) / 0.12);
    if (t > 0.88) ashContainer.alpha = Math.max(0, 1 - (t - 0.88) / 0.12);

    // ── Cleanup ──────────────────────────────────────────────────────────────
    if (t >= 1) {
      ticker.remove(tick);

      destroyAshParticles(ashParticles);
      burnSprite.parent?.removeChild(burnSprite);
      ashContainer.parent?.removeChild(ashContainer);
      if (introOverlay?.parent) {
        introOverlay.parent.removeChild(introOverlay);
      }
      ashContainer.destroy();
      introOverlay?.destroy({ children: true });
      burnSprite.destroy();
      rt.destroy(true);

      // nextScene is already visible at index 0 in targetLayer
      // caller's onComplete will removeChild(currentScene) and update state
      nextScene.alpha = 1;
      onComplete?.();
    }
  };

  ticker.add(tick);
}

export function makePhoenixTransitionRunner(
  app: PIXI.Application,
  backgroundLayer: PIXI.Container,
  bannerLayer: PIXI.Container,
  noiseTexture: PIXI.Texture,
  burnColorTexture: PIXI.Texture,
  width: number,
  height: number,
  getLocalizedTexture: LocalizedTextureGetter,
  lang: "en" | "km" = "km",
  applyChildScale?: (child: PIXI.DisplayObject) => void,
): StageTransitionRunner {
  return ({ currentScene, nextScene, onComplete }) => {
    void (async () => {
      await installBossOddFont();

      const BURN_DURATION = 2000;
      const banner = createPhoenixBossBanner(
        width,
        height,
        getLocalizedTexture,
        lang,
      );

      runBossBannerSequence({
        app,
        bannerLayer,
        banner,
        holdMs: 2000,
        fadeInMs: 300,
        burnDurationMs: BURN_DURATION,
        onHoldComplete: () => {
          runPhoenixBurnTransition({
            app,
            currentScene,
            targetLayer: backgroundLayer,
            nextScene,
            noiseTexture,
            burnColorTexture,
            durationMs: BURN_DURATION,
            width,
            height,
            createIntroOverlay: undefined,
            onComplete,
          });
        },
        onComplete: () => {},
        applyChildScale,
        gameWidth: width,
      });
    })().catch((error) => {
      console.error("[transition] failed to install boss odd font", error);
      onComplete?.();
    });
  };
}
