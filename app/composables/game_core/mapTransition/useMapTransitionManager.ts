import type * as PIXI from "pixi.js";
import { makeNormalFadeTransitionRunner } from "./normalFadeTransition";
import { makePhoenixTransitionRunner } from "./phoenixBurnTransition";
import { makeNagaRippleTransitionRunner } from "./nagaRippleTransition";
import { makeCrocodileRippleTransitionRunner } from "./crocodileRippleTransition";
import { makeWaterWipeTransitionRunner } from "./waterWipeTransition";
import type { LocalizedTextureGetter } from "./bossBanner";
import type { StageTransitionRunner } from "./types";

export interface MapTransitionManagerOptions {
  app: PIXI.Application;
  targetLayer: PIXI.Container;
  bannerLayer: PIXI.Container; // ✅ add
  sceneRoot: PIXI.Container;
  burnNoiseTexture?: PIXI.Texture | null;
  burnColorTexture?: PIXI.Texture | null;
  width: number;
  height: number;
  getLocalizedTexture?: LocalizedTextureGetter;
  localizedLang?: "en" | "km";
  applyChildScale?: (child: PIXI.DisplayObject) => void;
}

export type MapTransitionMode = "normal" | "boss" | "context_wipe";

export function createMapTransitionManager(
  options: MapTransitionManagerOptions,
) {
  const normalRunner = makeNormalFadeTransitionRunner();

  const waterWipeRunner = makeWaterWipeTransitionRunner(
    options.app,
    options.targetLayer,
    options.width,
    options.height,
  );

  const getRunner = (
    sceneId: string,
    mode: MapTransitionMode,
  ): StageTransitionRunner => {
    if (mode === "context_wipe") return waterWipeRunner;

    if (
      sceneId === "phoenix" &&
      options.burnNoiseTexture &&
      options.burnColorTexture &&
      options.getLocalizedTexture
    ) {
      return makePhoenixTransitionRunner(
        options.app,
        options.targetLayer,
        options.bannerLayer,
        options.burnNoiseTexture,
        options.burnColorTexture,
        options.width,
        options.height,
        options.getLocalizedTexture,
        options.localizedLang ?? "km",
        options.applyChildScale,
      );
    }

    if (sceneId === "naga" && options.getLocalizedTexture) {
      return makeNagaRippleTransitionRunner(
        options.app,
        options.targetLayer,
        options.bannerLayer,
        options.width,
        options.height,
        options.getLocalizedTexture,
        options.localizedLang ?? "km",
        options.applyChildScale,
      );
    }

    if (sceneId === "crocodileBoss" && options.getLocalizedTexture) {
      return makeCrocodileRippleTransitionRunner(
        options.app,
        options.targetLayer,
        options.bannerLayer,
        options.width,
        options.height,
        options.getLocalizedTexture,
        options.localizedLang ?? "km",
        options.applyChildScale,
      );
    }

    return normalRunner;
  };

  return {
    run(
      sceneId: string,
      currentScene: PIXI.DisplayObject,
      nextScene: PIXI.DisplayObject,
      onComplete?: () => void,
      mode: MapTransitionMode = "normal",
    ) {
      const runner = getRunner(sceneId, mode);
      runner({
        app: options.app,
        targetLayer: options.targetLayer,
        currentScene,
        nextScene,
        onComplete,
      });
    },
  };
}
