import * as PIXI from "pixi.js";
import { createNormalMapAmbient } from "./useNormalMapAmbient";

type TextureGetter = (url: string) => PIXI.Texture;
type EffectTextureGetter = (frame: string) => PIXI.Texture;

export function createCrocodileAmbient(options: {
  app: PIXI.Application;
  getTexture: TextureGetter;
  getEffectTexture: EffectTextureGetter;
  width?: number;
  height?: number;
}) {
  return createNormalMapAmbient({
    ...options,
    tuning: {
      waveStrength: 0.0048,
      scrollSpeed: 0.92,
      bubbleAlpha: 0.78,
      bubbleScale: 0.9,
      bubbleSpeed: 0.92,
    },
  });
}
