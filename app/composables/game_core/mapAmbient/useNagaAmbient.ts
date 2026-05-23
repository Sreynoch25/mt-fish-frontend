import * as PIXI from "pixi.js";
import { createWaterOverlayLayer } from "./useNormalMapAmbient";

type AtlasTextureGetter = (frame: string) => PIXI.Texture;
type EffectTextureGetter = (frame: string) => PIXI.Texture;
type TextureGetter = (url: string) => PIXI.Texture;
type BackgroundSource = PIXI.Texture | PIXI.Sprite | null;

const NAGA_RING_URL = "/fish/fish-all-star/resources/background/bg_naga_2.webp";
const NAGA_COIN_URL = "/fish/fish-all-star/resources/background/bg_naga_1.webp";

type AmbientParticle = {
  sprite: PIXI.Sprite;
  originX: number;
  originY: number;
  life: number;
  maxLife: number;
  speedX: number;
  speedY: number;
  scaleBase: number;
  drift: number;
  rotationSpeed: number;
};

function addSprite(
  parent: PIXI.Container,
  texture: PIXI.Texture,
  x: number,
  y: number,
  scale: number,
  alpha: number,
  blend: PIXI.BLEND_MODES = PIXI.BLEND_MODES.ADD,
  tint = 0xffffff,
): PIXI.Sprite {
  const s = new PIXI.Sprite(texture);
  s.anchor.set(0.5);
  s.position.set(x, y);
  s.scale.set(scale);
  s.alpha = alpha;
  s.blendMode = blend;
  s.tint = tint;
  parent.addChild(s);
  return s;
}

export function createNagaAmbient(options: {
  app: PIXI.Application;
  getTexture: TextureGetter;
  getAtlasTexture: AtlasTextureGetter;
  getEffectTexture: EffectTextureGetter;
  width?: number;
  height?: number;
}) {
  const {
    app,
    getTexture,
    getAtlasTexture,
    getEffectTexture,
    width = 1280,
    height = 720,
  } = options;

  const container = new PIXI.Container();
  container.visible = false;
  container.alpha = 0;

  const waterOverlay = createWaterOverlayLayer({
    app,
    getTexture,
    width,
    height,
    waveStrength: 0.0038,
    scrollSpeed: 0.92,
  });
  container.addChild(waterOverlay.container);

  // ── Layer stack ────────────────────────────────────────────────────────────
  const bgGlowLayer = new PIXI.Container();
  const portalLayer = new PIXI.Container();
  const crackGlowLayer = new PIXI.Container();
  const orbLayer = new PIXI.Container();
  const bubbleLayer = new PIXI.Container();
  const coinLayer = new PIXI.Container();

  container.addChild(bgGlowLayer);
  container.addChild(portalLayer);
  container.addChild(crackGlowLayer);
  container.addChild(orbLayer);
  container.addChild(bubbleLayer);
  container.addChild(coinLayer);

  // ── Anchor points measured from the actual bg_naga artwork ─────────────────
  // The portal is centered almost exactly in the middle of the map and the
  // decorative outer ring is substantially larger than our earlier estimate.
  const portalXRatio = 0.5;
  const portalYRatio = 0.5;
  let portalX = width * portalXRatio;
  let portalY = height * portalYRatio;
  let portalWidth = 333;
  let portalHeight = 334;
  let portalDiameter = Math.max(portalWidth, portalHeight);

  // Top-right cracked pillar structure (where lightning runs)
  const crackX = width * 0.88;
  const crackY = height * 0.2;

  // Bottom-left coin — small medallion on the cannon
  const coinX = width * 0.048;
  const coinY = height * 0.895;

  // ── Soft glow behind portal ────────────────────────────────────────────────
  const glowTex = getEffectTexture("img_lightdot_blur.png");

  const bgGlow = addSprite(
    bgGlowLayer,
    glowTex,
    portalX,
    portalY,
    (portalDiameter * 2.2) / 512,
    0.1,
    PIXI.BLEND_MODES.ADD,
    0x00ccff,
  );
  const midGlow = addSprite(
    bgGlowLayer,
    glowTex,
    portalX,
    portalY,
    (portalDiameter * 1.4) / 512,
    0.18,
    PIXI.BLEND_MODES.ADD,
    0x0088ff,
  );

  // ── Portal ring — rotates slowly CW ───────────────────────────────────────
  const portalTransform = new PIXI.Container();
  portalTransform.position.set(portalX, portalY);
  portalLayer.addChild(portalTransform);

  const ringTex = getTexture(NAGA_RING_URL);
  const portalRing = new PIXI.Sprite(ringTex);
  portalRing.anchor.set(0.5);
  portalRing.position.set(0, 0);
  let ringTextureWidth = ringTex.width || 333;
  let ringTextureHeight = ringTex.height || 334;
  let ringOverlayTextureWidth = 350;
  let ringOverlayTextureHeight = 350;
  const portalBaseWidth = ringTextureWidth;
  const portalBaseHeight = ringTextureHeight;
  const ringBaseScale = 1;

  // Scale so the outer edge of the ring matches the BG circle exactly.
  // The wrapper container receives the resize stretch. The rotating child
  // sprites keep uniform local scale so they stay aligned while rotating.
  let portalStretchX = portalWidth / portalBaseWidth;
  let portalStretchY = portalHeight / portalBaseHeight;
  let ringOverlayBaseScaleX = portalBaseWidth / ringOverlayTextureWidth;
  let ringOverlayBaseScaleY = portalBaseHeight / ringOverlayTextureHeight;
  portalRing.scale.set(ringBaseScale);
  portalRing.alpha = 1;
  portalRing.blendMode = PIXI.BLEND_MODES.NORMAL;
  portalTransform.addChild(portalRing);

  // Additive teal rim glow
  const rimGlow = addSprite(
    portalLayer,
    glowTex,
    portalX,
    portalY,
    (portalDiameter * 1.1) / 512,
    0.12,
    PIXI.BLEND_MODES.ADD,
    0x00ffcc,
  );

  // ── Ring overlay animation from naga atlas ───────────────────────────────
  // `nacabg_ef01xx` is the real 12-frame ring FX sequence that sits directly
  // on top of the ring texture in the original prefab.
  const ef01Frames = Array.from({ length: 12 }, (_, index) =>
    getAtlasTexture(
      `naga_bg_fx/nacabg_ef01${String(index + 1).padStart(2, "0")}.png`,
    ),
  );
  const ef02Frames = Array.from({ length: 12 }, (_, index) =>
    getAtlasTexture(
      `naga_bg_fx/nacabg_ef02${String(index + 1).padStart(2, "0")}.png`,
    ),
  );
  ringTextureWidth = ringTex.width || 333;
  ringTextureHeight = ringTex.height || 334;
  ringOverlayTextureWidth = ef01Frames[0]?.orig.width || ef01Frames[0]?.width || 350;
  ringOverlayTextureHeight =
    ef01Frames[0]?.orig.height || ef01Frames[0]?.height || 350;
  portalWidth = ringTextureWidth;
  portalHeight = ringTextureHeight;
  portalDiameter = Math.max(portalWidth, portalHeight);

  const ringOverlayPrimary = new PIXI.AnimatedSprite(ef01Frames);
  ringOverlayPrimary.anchor.set(0.5);
  ringOverlayPrimary.position.set(0, 0);
  ringOverlayPrimary.scale.set(ringOverlayBaseScaleX, ringOverlayBaseScaleY);
  ringOverlayPrimary.alpha = 0.5;
  ringOverlayPrimary.blendMode = PIXI.BLEND_MODES.ADD;
  ringOverlayPrimary.animationSpeed = 0.2;
  ringOverlayPrimary.play();
  portalTransform.addChild(ringOverlayPrimary);

  const ringOverlaySecondary = new PIXI.AnimatedSprite(ef02Frames);
  ringOverlaySecondary.anchor.set(0.5);
  ringOverlaySecondary.position.set(0, 0);
  ringOverlaySecondary.scale.set(ringOverlayBaseScaleX, ringOverlayBaseScaleY);
  ringOverlaySecondary.alpha = 0.22;
  ringOverlaySecondary.blendMode = PIXI.BLEND_MODES.ADD;
  ringOverlaySecondary.animationSpeed = 0.12;
  ringOverlaySecondary.gotoAndPlay(5);
  portalTransform.addChild(ringOverlaySecondary);

  // ── Crack lightning flickers ───────────────────────────────────────────────
  const lightTex = getAtlasTexture("lightning/r_lightingc_lighting01.png");

  type CrackFlicker = {
    sprite: PIXI.Sprite;
    baseX: number;
    baseY: number;
    timer: number;
    nextFlash: number;
    flashDuration: number;
  };

  const crackFlickers: CrackFlicker[] = [];

  function makeCrackFlicker(
    x: number,
    y: number,
    rot: number,
    scale: number,
    tint: number,
    initialDelay: number,
  ): CrackFlicker {
    const s = new PIXI.Sprite(lightTex);
    s.anchor.set(0.5);
    s.position.set(x, y);
    s.scale.set(scale);
    s.rotation = rot;
    s.alpha = 0;
    s.blendMode = PIXI.BLEND_MODES.ADD;
    s.tint = tint;
    crackGlowLayer.addChild(s);
    return {
      sprite: s,
      baseX: x,
      baseY: y,
      timer: 0,
      nextFlash: initialDelay,
      flashDuration: 0,
    };
  }

  // Portal interior cracks — trace the crack lines visible inside the circle
  const pr = portalDiameter * 0.28; // crack placement radius inside portal
  crackFlickers.push(
    makeCrackFlicker(
      portalX - pr * 0.8,
      portalY - pr,
      -0.6,
      0.5,
      0x88ddff,
      0.3,
    ),
  );
  crackFlickers.push(
    makeCrackFlicker(
      portalX + pr * 0.9,
      portalY - pr * 0.7,
      0.8,
      0.42,
      0x66ccff,
      1.2,
    ),
  );
  crackFlickers.push(
    makeCrackFlicker(
      portalX - pr * 0.4,
      portalY + pr,
      0.3,
      0.46,
      0x99eeff,
      0.7,
    ),
  );
  crackFlickers.push(
    makeCrackFlicker(
      portalX + pr * 0.7,
      portalY + pr * 0.6,
      -0.4,
      0.4,
      0x77ddff,
      1.8,
    ),
  );

  // Top-right cracked pillar — teal electric glow along the stone crack
  crackFlickers.push(
    makeCrackFlicker(crackX - 20, crackY + 25, 1.1, 0.65, 0x44ffcc, 0.5),
  );
  crackFlickers.push(
    makeCrackFlicker(crackX + 10, crackY + 55, 1.4, 0.52, 0x22eebb, 1.4),
  );
  crackFlickers.push(
    makeCrackFlicker(crackX - 40, crackY + 50, 0.9, 0.45, 0x55ffdd, 2.1),
  );

  // Always-on soft ambient glow on the crack (never fully dark)
  const crackAmbient = addSprite(
    crackGlowLayer,
    glowTex,
    crackX - 10,
    crackY + 40,
    1.0,
    0.12,
    PIXI.BLEND_MODES.ADD,
    0x00ffaa,
  );

  // ── Floating orbs ──────────────────────────────────────────────────────────
  type OrbParticle = {
    sprite: PIXI.Sprite;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    phase: number;
  };

  const orbParticles: OrbParticle[] = [];

  function spawnOrb(immediate = false): void {
    const s = new PIXI.Sprite(glowTex);
    s.anchor.set(0.5);
    s.position.set(
      width * 0.05 + Math.random() * width * 0.9,
      height * 0.1 + Math.random() * height * 0.8,
    );
    s.scale.set(0.18 + Math.random() * 0.38);
    s.alpha = 0;
    s.blendMode = PIXI.BLEND_MODES.ADD;
    s.tint = Math.random() > 0.5 ? 0xaaffff : 0xffffff;
    orbLayer.addChild(s);
    const maxLife = 5 + Math.random() * 5;
    orbParticles.push({
      sprite: s,
      vx: (Math.random() - 0.5) * 14,
      vy: -4 - Math.random() * 8,
      life: immediate ? Math.random() * maxLife : 0,
      maxLife,
      phase: Math.random() * Math.PI * 2,
    });
  }

  for (let i = 0; i < 16; i++) spawnOrb(true);

  // ── Bubbles ────────────────────────────────────────────────────────────────
  const bubbleTex = getEffectTexture("particle/bubble.png");
  const bubbles: AmbientParticle[] = [];

  const bEmitters = [
    { x: width * 0.1, y: height * 0.92, dirY: -1, dirX: 0.35 },
    { x: width * 0.28, y: height * 0.88, dirY: -1, dirX: 0.2 },
    { x: width * 0.52, y: height * 0.9, dirY: -1, dirX: -0.1 },
    { x: width * 0.72, y: height * 0.87, dirY: -1, dirX: -0.25 },
    { x: width * 0.9, y: height * 0.91, dirY: -1, dirX: -0.35 },
    { x: width * 0.16, y: height * 0.14, dirY: 1, dirX: 0.18 },
    { x: width * 0.84, y: height * 0.16, dirY: 1, dirX: -0.18 },
  ];

  function resetBubble(p: AmbientParticle, immediate = false): void {
    const em = bEmitters[Math.floor(Math.random() * bEmitters.length)]!;
    p.sprite.position.set(em.x + (Math.random() - 0.5) * 70, em.y);
    p.originX = p.sprite.x;
    p.originY = 0;
    p.speedX = em.dirX * (8 + Math.random() * 10) + (Math.random() - 0.5) * 4;
    p.speedY = em.dirY * (12 + Math.random() * 16);
    p.drift = 5 + Math.random() * 10;
    p.scaleBase = 0.05 + Math.random() * 0.09;
    p.sprite.scale.set(p.scaleBase);
    p.sprite.tint = Math.random() > 0.4 ? 0xaaffff : 0xffffff;
    p.sprite.alpha = immediate ? Math.random() * 0.2 : 0;
    p.maxLife = 3.5 + Math.random() * 3;
    p.life = immediate ? Math.random() * p.maxLife : 0;
    p.rotationSpeed = 0;
  }

  for (let i = 0; i < 20; i++) {
    const s = new PIXI.Sprite(bubbleTex);
    s.anchor.set(0.5);
    s.blendMode = PIXI.BLEND_MODES.SCREEN;
    bubbleLayer.addChild(s);
    const p: AmbientParticle = {
      sprite: s,
      originX: 0,
      originY: 0,
      life: 0,
      maxLife: 1,
      speedX: 0,
      speedY: 0,
      scaleBase: 0.07,
      drift: 0,
      rotationSpeed: 0,
    };
    resetBubble(p, true);
    bubbles.push(p);
  }

  // ── State ──────────────────────────────────────────────────────────────────
  let active = false;
  let fade = 0;
  let time = 0;

  function applyPortalLayout(source: BackgroundSource) {
    let glowScaleRatio = 1;

    if (source instanceof PIXI.Sprite) {
      const bgLeft = source.position.x - source.width * source.anchor.x;
      const bgTop = source.position.y - source.height * source.anchor.y;
      const textureWidth = source.texture.width || width;
      const textureHeight = source.texture.height || height;
      const backgroundScaleX = source.width / textureWidth;
      const backgroundScaleY = source.height / textureHeight;
      portalX = bgLeft + textureWidth * portalXRatio * backgroundScaleX;
      portalY = bgTop + textureHeight * portalYRatio * backgroundScaleY;
      portalWidth = ringTextureWidth * backgroundScaleX;
      portalHeight = ringTextureHeight * backgroundScaleY;
      portalDiameter = Math.max(portalWidth, portalHeight);
      portalStretchX = portalWidth / portalBaseWidth;
      portalStretchY = portalHeight / portalBaseHeight;
    } else {
      portalX = width * portalXRatio;
      portalY = height * portalYRatio;
      portalWidth = ringTextureWidth;
      portalHeight = ringTextureHeight;
      portalDiameter = Math.max(portalWidth, portalHeight);
      portalStretchX = portalWidth / portalBaseWidth;
      portalStretchY = portalHeight / portalBaseHeight;
    }

    bgGlow.position.set(portalX, portalY);
    midGlow.position.set(portalX, portalY);
    portalTransform.position.set(portalX, portalY);
    portalTransform.scale.set(portalStretchX, portalStretchY);
    rimGlow.position.set(portalX, portalY);
    bgGlow.scale.set((portalWidth * 2.2) / 512, (portalHeight * 2.2) / 512);
    midGlow.scale.set((portalWidth * 1.4) / 512, (portalHeight * 1.4) / 512);
    rimGlow.scale.set((portalWidth * 1.1) / 512, (portalHeight * 1.1) / 512);
  }

  const tick = () => {
    const dt = app.ticker.deltaMS / 1000;
    time += dt;

    const fadeTarget = active ? 1 : 0;
    fade += (fadeTarget - fade) * Math.min(1, dt * 4.2);
    container.alpha = fade;
    container.visible = fade > 0.01;
    if (fade <= 0.001) return;

    // ── Portal glow breathe ────────────────────────────────────────────────
    const breathe = Math.sin(time * 0.65) * 0.5 + 0.5;
    bgGlow.alpha = 0.07 + breathe * 0.06;
    bgGlow.scale.set(
      (portalWidth * (2.2 + breathe * 0.2)) / 512,
      (portalHeight * (2.2 + breathe * 0.2)) / 512,
    );
    midGlow.alpha = 0.14 + breathe * 0.08;
    midGlow.scale.set(
      (portalWidth * (1.4 + breathe * 0.1)) / 512,
      (portalHeight * (1.4 + breathe * 0.1)) / 512,
    );

    // ── Portal ring slow CW rotation ──────────────────────────────────────
    portalRing.rotation += dt * 0.018;
    ringOverlayPrimary.rotation = portalRing.rotation;
    ringOverlaySecondary.rotation = portalRing.rotation;
    rimGlow.alpha = 0.08 + (Math.sin(time * 1.3) * 0.5 + 0.5) * 0.09;
    ringOverlayPrimary.alpha = 0.34 + (Math.sin(time * 1.4) * 0.5 + 0.5) * 0.2;
    ringOverlaySecondary.alpha =
      0.12 + (Math.sin(time * 0.9 + 1.3) * 0.5 + 0.5) * 0.12;

    // ── Crack flickers ─────────────────────────────────────────────────────
    for (const f of crackFlickers) {
      f.timer += dt;

      if (f.sprite.alpha > 0.01) {
        f.sprite.alpha *= Math.pow(0.08, dt);
        f.sprite.x = f.baseX + (Math.random() - 0.5) * 4;
        f.sprite.y = f.baseY + (Math.random() - 0.5) * 4;
      } else {
        f.sprite.alpha = 0;
        if (f.timer >= f.nextFlash) {
          f.timer = 0;
          f.nextFlash = 0.6 + Math.random() * 2.5;
          f.sprite.alpha = 0.45 + Math.random() * 0.45;
          const sc = 0.4 + Math.random() * 0.25;
          f.sprite.scale.set(sc);
        }
      }
    }

    crackAmbient.alpha = 0.08 + (Math.sin(time * 1.8) * 0.5 + 0.5) * 0.1;

    // ── Floating orbs ──────────────────────────────────────────────────────
    for (let i = orbParticles.length - 1; i >= 0; i--) {
      const o = orbParticles[i]!;
      o.life += dt;
      if (o.life >= o.maxLife) {
        orbLayer.removeChild(o.sprite);
        o.sprite.destroy();
        orbParticles.splice(i, 1);
        spawnOrb(false);
        continue;
      }
      const p = o.life / o.maxLife;
      const sway = Math.sin(time * 0.9 + o.phase) * 10;
      o.sprite.x += (o.vx + sway) * dt;
      o.sprite.y += o.vy * dt;
      const alpha = p < 0.2 ? p / 0.2 : p > 0.8 ? (1 - p) / 0.2 : 1.0;
      o.sprite.alpha = alpha * 0.5;
    }

    // ── Bubbles ────────────────────────────────────────────────────────────
    for (const p of bubbles) {
      p.life += dt;
      if (p.life >= p.maxLife) {
        resetBubble(p);
        continue;
      }
      const prog = p.life / p.maxLife;
      const sway = Math.sin(prog * Math.PI * 2.2 + p.originX * 0.006) * p.drift;
      p.sprite.x += (p.speedX + sway) * dt;
      p.sprite.y += p.speedY * dt;
      const a =
        prog < 0.18 ? prog / 0.18 : prog > 0.78 ? (1 - prog) / 0.22 : 1.0;
      p.sprite.alpha = a * 0.28;
      p.sprite.scale.set(p.scaleBase * (0.88 + prog * 0.28));
    }
  };

  app.ticker.add(tick);

  return {
    container,
    setBackgroundTexture(source: BackgroundSource) {
      applyPortalLayout(source);
      waterOverlay.setBackgroundTexture(source);
    },
    setActive(nextActive: boolean) {
      active = nextActive;
    },
    destroy() {
      app.ticker.remove(tick);
      waterOverlay.destroy();
      ringOverlayPrimary.destroy();
      ringOverlaySecondary.destroy();
      container.destroy({ children: true });
    },
  };
}
