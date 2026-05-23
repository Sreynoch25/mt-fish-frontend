import * as PIXI from "pixi.js";
import type { StageTransitionRunner } from "./types";

const RIPPLE_VERT = `
  attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat3 projectionMatrix;
  varying vec2 vTextureCoord;
  void main(void) {
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
  }
`;

const RIPPLE_FRAG = `
  precision mediump float;
  varying vec2 vTextureCoord;

  uniform sampler2D uSampler;
  uniform float uProgress;
  uniform float uTime;
  uniform float uRippleStr;
  uniform float uWaveFreq;
  uniform float uFeather;
  uniform vec2  uCentre;
  uniform vec2  uScale;
  uniform float uVibrate;

  void main(void) {
    // Aspect-corrected delta from centre
    vec2 delta = vTextureCoord - uCentre;
    delta.x *= uScale.x / uScale.y;
    float dist = length(delta);

    // Precompute maxR once
    float cx = max(uCentre.x, 1.0 - uCentre.x) * uScale.x / uScale.y;
    float cy = max(uCentre.y, 1.0 - uCentre.y);
    float maxR = length(vec2(cx, cy));

    float wipeR   = uProgress * maxR * 1.06;
    float featherR = uFeather * maxR;

    // Hard discard inside wipe — skip all math
    if (dist < wipeR - featherR) {
      gl_FragColor = vec4(0.0);
      return;
    }

    float distN = dist / maxR;

    // --- VIBRATE PHASE (cheap: 1 sin, 1 exp approximation) ---
    // Use abs(sin) trick to avoid second sin call
    float vPhase = distN * uWaveFreq * 1.5 - uTime * 4.0;
    float vSin   = sin(vPhase);
    // Cheap exp approximation: e^(-x) ≈ 1/(1+x) for small x
    float vFall  = 1.0 / (1.0 + distN * 3.5);
    float vibrateWave = vSin * vFall * uRippleStr * 8.0 * uVibrate
                      * smoothstep(0.0, 1.5, uTime);

    // --- WIPE PHASE (only runs when uVibrate=0) ---
    float frontDistN = (dist - wipeR) / maxR;
    float phase = distN * uWaveFreq - uTime * 5.0;

    // Cheap front envelope — one exp, skip trail entirely on mobile
    float envFront = exp(-frontDistN * frontDistN * 300.0);
    float wipeWave = sin(phase) * envFront * uRippleStr * (1.0 - uVibrate);

    float wave = vibrateWave + wipeWave;

    // Distort UV
    vec2 dir = delta / (dist + 0.0001); // normalize without normalize()
    dir.x /= uScale.x / uScale.y;
    vec2 distortedUV = clamp(vTextureCoord + dir * wave, 0.001, 0.999);

    vec4 scene = texture2D(uSampler, distortedUV);

    // Alpha fade at wipe edge
    float alpha = smoothstep(wipeR - featherR, wipeR + featherR * 0.3, dist);

    // Crest highlight only during wipe
    float crest = envFront * max(0.0, sin(phase)) * 0.3 * (1.0 - uVibrate);
    scene.rgb += crest;

    gl_FragColor = vec4(scene.rgb, scene.a * alpha);
  }
`;

class RippleWipeFilter extends PIXI.Filter {
  private _startTime: number = performance.now();

  constructor(centreUV: [number, number], spriteW: number, spriteH: number) {
    super(RIPPLE_VERT, RIPPLE_FRAG, {
      uProgress: 0,
      uTime: 0,
      uVibrate: 1.0,
      uCentre: centreUV,
      uScale: [spriteW, spriteH],
      uRippleStr: 0.028,
      uWaveFreq: 22.0,
      uFeather: 0.012,
    });
  }

  get progress(): number {
    return this.uniforms.uProgress;
  }
  set progress(v: number) {
    this.uniforms.uProgress = v;
  }
  set vibrate(v: number) {
    this.uniforms.uVibrate = v;
  }
  updateTime(): void {
    this.uniforms.uTime = (performance.now() - this._startTime) / 1000;
  }
}

export interface RippleTransitionOptions {
  app: PIXI.Application;
  currentScene: PIXI.DisplayObject;
  targetLayer: PIXI.Container;
  nextScene: PIXI.DisplayObject;
  durationMs?: number;
  onComplete?: () => void;
}

export function runRippleRevealTransition(
  options: RippleTransitionOptions,
): void {
  const {
    app,
    currentScene,
    targetLayer,
    nextScene,
    durationMs = 1200,
    onComplete,
  } = options;
  const { renderer, ticker } = app;

  const VIBRATE_MS = 2000;

  const W = renderer.screen.width;
  const H = renderer.screen.height;

  const rt = PIXI.RenderTexture.create({
    width: W,
    height: H,
    resolution: renderer.resolution,
  });

  const nextWasVisible = nextScene.visible;
  nextScene.visible = false;
  renderer.render(currentScene, { renderTexture: rt });
  nextScene.visible = nextWasVisible;

  const wipeSprite = new PIXI.Sprite(rt);
  wipeSprite.position.set(0, 0);

  const centreUV: [number, number] = [0.32, 0.37];

  const rippleFilter = new RippleWipeFilter(centreUV, W, H);
  wipeSprite.filters = [rippleFilter];

  nextScene.alpha = 1;
  nextScene.visible = true;
  targetLayer.addChild(nextScene);
  targetLayer.addChild(wipeSprite);
  currentScene.visible = false;

  const startTime = performance.now();

  const tick = () => {
    const elapsed = performance.now() - startTime;
    rippleFilter.updateTime();

    if (elapsed < VIBRATE_MS) {
      rippleFilter.progress = 0;
      rippleFilter.vibrate = 1.0;
    } else {
      const wipeT = Math.min((elapsed - VIBRATE_MS) / durationMs, 1);
      rippleFilter.progress = wipeT;
      rippleFilter.vibrate = 0.0;

      if (wipeT > 0.9) {
        wipeSprite.alpha = Math.max(0, 1 - (wipeT - 0.9) / 0.1);
      }

      if (wipeT >= 1) {
        ticker.remove(tick);
        targetLayer.removeChild(wipeSprite);
        wipeSprite.destroy();
        rt.destroy(true);
        currentScene.visible = false;
        nextScene.alpha = 1;
        onComplete?.();
      }
    }
  };

  ticker.add(tick);
}

export function makeRippleTransitionRunner(
  app: PIXI.Application,
  backgroundLayer: PIXI.Container,
): StageTransitionRunner {
  return ({ currentScene, nextScene, onComplete }) => {
    runRippleRevealTransition({
      app,
      currentScene,
      targetLayer: backgroundLayer,
      nextScene,
      durationMs: 1200,
      onComplete,
    });
  };
}
