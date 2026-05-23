import * as PIXI from "pixi.js";
import { createWaterOverlayLayer } from "./useNormalMapAmbient";

type TextureGetter = (url: string) => PIXI.Texture;
type EffectTextureGetter = (frame: string) => PIXI.Texture;
type BackgroundSource = PIXI.Texture | PIXI.Sprite | null;

type LavaParticle = {
  sprite: PIXI.Sprite;
  originX: number;
  originY: number;
  life: number;
  maxLife: number;
  speedX: number;
  speedY: number;
  scaleBase: number;
  wobble: number;
  phase: number;
  rotationSpeed: number;
};

export function createPhoenixAmbient(options: {
  app: PIXI.Application;
  getTexture: TextureGetter;
  getEffectTexture: EffectTextureGetter;
  width?: number;
  height?: number;
}) {
  const { app, getTexture, getEffectTexture, width = 1280, height = 720 } = options;

  const container = new PIXI.Container();
  container.visible = false;
  container.alpha = 0;

  const waterOverlay = createWaterOverlayLayer({
    app,
    getTexture,
    width,
    height,
    waveStrength: 0.0035,
    scrollSpeed: 0.85,
  });
  container.addChild(waterOverlay.container);

  const glowLayer = new PIXI.Container();
  const lavaLayer = new PIXI.Container();

  container.addChild(glowLayer);
  container.addChild(lavaLayer);

  const glowTexture = getEffectTexture("img_lightdot_blur.png");
  const lavaTexture = getEffectTexture("particle/particle_lava.png");

  const baseGlow = new PIXI.Sprite(glowTexture);
  baseGlow.anchor.set(0.5);
  baseGlow.position.set(width * 0.5, height * 0.72);
  baseGlow.scale.set(6.8);
  baseGlow.alpha = 0.08;
  baseGlow.tint = 0xff6a1b;
  baseGlow.blendMode = PIXI.BLEND_MODES.ADD;
  glowLayer.addChild(baseGlow);

  const sideGlow = new PIXI.Sprite(glowTexture);
  sideGlow.anchor.set(0.5);
  sideGlow.position.set(width * 0.76, height * 0.62);
  sideGlow.scale.set(4.2);
  sideGlow.alpha = 0.045;
  sideGlow.tint = 0xff7e29;
  sideGlow.blendMode = PIXI.BLEND_MODES.ADD;
  glowLayer.addChild(sideGlow);

  const emitters = [
    { x: width * 0.2, y: height * 0.92, spread: 100, dirY: -1, dirX: 0.15 },
    { x: width * 0.5, y: height * 0.9, spread: 180, dirY: -1, dirX: 0.0 },
    { x: width * 0.78, y: height * 0.88, spread: 120, dirY: -1, dirX: -0.15 },
    { x: width * 0.18, y: height * 0.14, spread: 90, dirY: 1, dirX: 0.1 },
    { x: width * 0.82, y: height * 0.16, spread: 90, dirY: 1, dirX: -0.1 },
  ];

  const particles: LavaParticle[] = [];

  function resetParticle(particle: LavaParticle, immediate = false) {
    const emitter = emitters[Math.floor(Math.random() * emitters.length)]!;
    particle.sprite.position.set(
      emitter.x + (Math.random() - 0.5) * emitter.spread,
      emitter.y + (Math.random() - 0.5) * 24,
    );
    particle.originX = particle.sprite.x;
    particle.originY = particle.sprite.y;
    particle.life = immediate ? Math.random() * (1.2 + Math.random() * 1.8) : 0;
    particle.maxLife = 1.2 + Math.random() * 1.8;
    particle.speedX = emitter.dirX * (14 + Math.random() * 12) + (Math.random() - 0.5) * 12;
    particle.speedY = emitter.dirY * (30 + Math.random() * 46);
    particle.scaleBase = 0.08 + Math.random() * 0.18;
    particle.wobble = 8 + Math.random() * 18;
    particle.phase = Math.random() * Math.PI * 2;
    particle.rotationSpeed = (Math.random() - 0.5) * 1.4;
    particle.sprite.scale.set(particle.scaleBase);
    particle.sprite.rotation = Math.random() * Math.PI * 2;
    particle.sprite.alpha = immediate ? 0.15 + Math.random() * 0.2 : 0;
    particle.sprite.tint = Math.random() > 0.45 ? 0xffc14d : 0xff6a1b;
  }

  for (let i = 0; i < 28; i += 1) {
    const sprite = new PIXI.Sprite(lavaTexture);
    sprite.anchor.set(0.5);
    sprite.blendMode = PIXI.BLEND_MODES.ADD;
    lavaLayer.addChild(sprite);

    const particle: LavaParticle = {
      sprite,
      originX: 0,
      originY: 0,
      life: 0,
      maxLife: 1,
      speedX: 0,
      speedY: 0,
      scaleBase: 0.1,
      wobble: 0,
      phase: 0,
      rotationSpeed: 0,
    };
    resetParticle(particle, true);
    particles.push(particle);
  }

  let active = false;
  let fade = 0;
  let time = 0;

  const tick = () => {
    const dt = app.ticker.deltaMS / 1000;
    time += dt;

    const fadeTarget = active ? 1 : 0;
    fade += (fadeTarget - fade) * Math.min(1, dt * 4.5);
    container.alpha = fade;
    container.visible = fade > 0.01;
    if (fade <= 0.001) return;

    const breathe = Math.sin(time * 1.4) * 0.5 + 0.5;
    baseGlow.alpha = 0.05 + breathe * 0.06;
    baseGlow.scale.set(6.5 + breathe * 0.5);
    sideGlow.alpha = 0.025 + (Math.sin(time * 1.9 + 0.8) * 0.5 + 0.5) * 0.04;
    sideGlow.scale.set(4.0 + breathe * 0.25);

    for (const particle of particles) {
      particle.life += dt;

      if (particle.life >= particle.maxLife) {
        resetParticle(particle);
        continue;
      }

      const progress = particle.life / particle.maxLife;
      const drift =
        Math.sin(time * 3.1 + particle.phase + progress * Math.PI * 2) *
        particle.wobble;

      particle.sprite.x += particle.speedX * dt + drift * dt;
      particle.sprite.y += particle.speedY * dt;
      particle.sprite.rotation += particle.rotationSpeed * dt;

      const riseAlpha =
        progress < 0.16
          ? progress / 0.16
          : progress > 0.72
            ? (1 - progress) / 0.28
            : 1;

      particle.sprite.alpha = riseAlpha * 0.38;
      particle.sprite.scale.set(
        particle.scaleBase * (0.9 + progress * 0.55),
      );
    }
  };

  app.ticker.add(tick);

  return {
    container,
    setBackgroundTexture(source: BackgroundSource) {
      waterOverlay.setBackgroundTexture(source);
    },
    setActive(nextActive: boolean) {
      active = nextActive;
    },
    destroy() {
      app.ticker.remove(tick);
      waterOverlay.destroy();
      container.destroy({ children: true });
    },
  };
}
