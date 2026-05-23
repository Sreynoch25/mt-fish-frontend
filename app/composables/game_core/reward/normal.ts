// useRewardEffect.ts
import * as PIXI from "pixi.js";
import {
  useFishAssetPreload,
  COIN_ATLAS_URL,
  COIN_FONT_URL,
  ODD_FONT_URL,
} from "~/composables/game_core/assets/useFishAssetPreload";

// ── Constants ─────────────────────────────────────────────────────────────────
const COIN_FONT_NAME = "fnt_coin";

const COIN_FRAMES = [
  "ef_coin0_only0000.png",
  "ef_coin0_only0001.png",
  "ef_coin0_only0002.png",
  "ef_coin0_only0003.png",
  "ef_coin0_only0004.png",
  "ef_coin0_only0005.png",
  "ef_coin0_only0006.png",
  "ef_coin0_only0007.png",
  "ef_coin0_only0008.png",
  "ef_coin0_only0009.png",
] as const;

// ── Timing ────────────────────────────────────────────────────────────────────
const HOLD_RATIO = 0.55;
const POP_SINGLE_MS = 300;
const POP_MULTI_MS = 280;
const POP_STAGGER_MS = 60;
const LABEL_IN_MS = 400;
const LABEL_FADE_MS = 300;
const FLY_DURATION = 550;
const STAGGER_DELAY = 80;
const FADE_MS = 300;

// ── Easing ────────────────────────────────────────────────────────────────────
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function easeOutBack(t: number): number {
  const c1 = 1.70158,
    c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// ── Public types ──────────────────────────────────────────────────────────────
export type RewardEffectOptions = {
  layer: PIXI.Container;
  x: number;
  y: number;
  amount: number;
  durationMs?: number;
  boxTarget?: { x: number; y: number };
  onComplete?: () => void;
};

// ── Texture getter ────────────────────────────────────────────────────────────
function getCoinTextures(): PIXI.Texture[] {
  const { getAtlasTexture } = useFishAssetPreload();
  return COIN_FRAMES.map((f) => getAtlasTexture(COIN_ATLAS_URL, f)).filter(
    (t) => t !== PIXI.Texture.WHITE,
  );
}

// ── Amount label ──────────────────────────────────────────────────────────────
function makeAmountLabel(amount: number): PIXI.BitmapText {
  const label = new PIXI.BitmapText(`+${amount.toLocaleString()}`, {
    fontName: COIN_FONT_NAME,
    fontSize: 44,
    align: "center",
  });
  label.anchor.set(0.5);
  return label;
}

// ── Public entry point ────────────────────────────────────────────────────────
export function showRewardEffect(options: RewardEffectOptions): void {
  const {
    layer,
    x,
    y,
    amount,
    durationMs = 1800,
    boxTarget,
    onComplete,
  } = options;

  const textures = getCoinTextures();
  if (textures.length === 0) {
    console.warn(
      "[reward] coin textures not loaded — call preloadAppAssets() first",
    );
    return;
  }

  if (amount <= 50) {
    spawnSingleCoin(
      layer,
      x,
      y,
      textures,
      amount,
      durationMs,
      boxTarget,
      onComplete,
    );
  } else {
    spawnMultiCoin(
      layer,
      x,
      y,
      textures,
      amount,
      durationMs,
      boxTarget,
      onComplete,
    );
  }
}

// ── Single coin (amount <= 50) ────────────────────────────────────────────────
function spawnSingleCoin(
  layer: PIXI.Container,
  x: number,
  y: number,
  textures: PIXI.Texture[],
  amount: number,
  durationMs: number,
  boxTarget?: { x: number; y: number },
  onComplete?: () => void,
): void {
  const root = new PIXI.Container();
  (root as any).__isRewardEffect = true;  
  root.zIndex = 1000;
  root.position.set(x, y);
  layer.addChild(root);

  const coin = new PIXI.AnimatedSprite(textures);
  coin.anchor.set(0.5);
  coin.animationSpeed = 0.5;
  coin.loop = true;
  coin.scale.set(0);
  coin.zIndex = 1000;
  coin.play();
  root.addChild(coin);

  const label = makeAmountLabel(amount);
  label.position.set(0, -70);
  label.alpha = 0;
  label.scale.set(0.3);
  root.addChild(label);

  // Pop-in
  let popEl = 0;
  const onPop = () => {
    if (coin.destroyed) {
      PIXI.Ticker.shared.remove(onPop);
      return;
    }
    popEl += PIXI.Ticker.shared.elapsedMS;
    const t = Math.min(popEl / POP_SINGLE_MS, 1);
    coin.scale.set(easeOutBack(t) * 0.9);
    if (t >= 1) PIXI.Ticker.shared.remove(onPop);
  };
  PIXI.Ticker.shared.add(onPop);

  animateReward(root, [coin], label, durationMs, boxTarget, layer, onComplete);
}

// ── Four coins in circle (amount > 50) ───────────────────────────────────────
function spawnMultiCoin(
  layer: PIXI.Container,
  x: number,
  y: number,
  textures: PIXI.Texture[],
  amount: number,
  durationMs: number,
  boxTarget?: { x: number; y: number },
  onComplete?: () => void,
): void {
  const root = new PIXI.Container();
  (root as any).__isRewardEffect = true; 
  root.zIndex = 1000;
  root.position.set(x, y);
  layer.addChild(root);

  const RADIUS = 30;
  const POSITIONS = [
    { x: 0, y: -RADIUS },
    { x: RADIUS, y: 0 },
    { x: 0, y: RADIUS },
    { x: -RADIUS, y: 0 },
  ] as const;

  const coins = POSITIONS.map((pos, i) => {
    const coin = new PIXI.AnimatedSprite(textures);
    coin.anchor.set(0.5);
    coin.currentFrame = Math.floor((i / POSITIONS.length) * textures.length);
    coin.animationSpeed = 0.45;
    coin.loop = true;
    coin.scale.set(0);
    coin.zIndex = 1000;
    coin.position.set(pos.x, pos.y);
    coin.play();
    root.addChild(coin);
    return coin;
  });

  const label = makeAmountLabel(amount);
  label.position.set(0, -RADIUS - 52);
  label.alpha = 0;
  label.scale.set(0.3);
  root.addChild(label);

  // Staggered pop-in
  coins.forEach((coin, i) => {
    const delay = i * POP_STAGGER_MS;
    let elapsed = 0;
    const onPop = () => {
      if (coin.destroyed) {
        PIXI.Ticker.shared.remove(onPop);
        return;
      }
      elapsed += PIXI.Ticker.shared.elapsedMS;
      if (elapsed < delay) return;
      const t = Math.min((elapsed - delay) / POP_MULTI_MS, 1);
      coin.scale.set(easeOutBack(t) * 0.85);
      if (t >= 1) PIXI.Ticker.shared.remove(onPop);
    };
    PIXI.Ticker.shared.add(onPop);
  });

  animateReward(root, coins, label, durationMs, boxTarget, layer, onComplete);
}

// ── Shared: float up → hold → detach → fly/fade ───────────────────────────────
function animateReward(
  root: PIXI.Container,
  coins: PIXI.AnimatedSprite[],
  label: PIXI.BitmapText,
  durationMs: number,
  boxTarget: { x: number; y: number } | undefined,
  layer: PIXI.Container,
  onComplete?: () => void,
): void {
  const startY = root.y;
  const holdMs = durationMs * HOLD_RATIO;
  let elapsed = 0;
  let flyStarted = false;

  const onMain = () => {
    if (root.destroyed) {
      PIXI.Ticker.shared.remove(onMain);
      return;
    }

    elapsed += PIXI.Ticker.shared.elapsedMS;
    const t = Math.min(elapsed / durationMs, 1);
    root.y = startY - easeOut(t) * 90;

    // Label fade-in
    if (!label.destroyed) {
      const labelT = Math.min(elapsed / LABEL_IN_MS, 1);
      label.scale.set(easeOutBack(labelT) * 0.9);
      label.alpha = Math.min(1, labelT * 2);

      // Label + root fade-out during hold exit
      if (elapsed > holdMs) {
        const fadeT = Math.min((elapsed - holdMs) / LABEL_FADE_MS, 1);
        label.alpha = Math.max(0, 1 - fadeT);
        root.alpha = Math.max(0, 1 - fadeT);
      }
    }

    if (!flyStarted && elapsed >= holdMs) {
      flyStarted = true;
      PIXI.Ticker.shared.remove(onMain);

      // Detach coins into layer space before destroying root
      const flyCoins: PIXI.AnimatedSprite[] = [];
      for (const coin of coins) {
        if (coin.destroyed) continue;
        const worldPos = root.toGlobal(coin.position);
        const layerPos = layer.toLocal(worldPos);
        root.removeChild(coin);
        coin.position.set(layerPos.x, layerPos.y);
        layer.addChild(coin);
        flyCoins.push(coin);
      }

      root.parent?.removeChild(root);
      root.destroy({ children: true });

      if (boxTarget && flyCoins.length > 0) {
        flyCoinsToBox(flyCoins, boxTarget, onComplete);
      } else {
        fadeOutCoins(flyCoins, onComplete);
      }
    }
  };

  PIXI.Ticker.shared.add(onMain);
}

// ── Fly coins to coin box (bezier arc) ───────────────────────────────────────
function flyCoinsToBox(
  coins: PIXI.AnimatedSprite[],
  target: { x: number; y: number },
  onComplete?: () => void,
): void {
  let completed = 0;

  coins.forEach((coin, i) => {
    const delay = i * STAGGER_DELAY;
    const startX = coin.x;
    const startY = coin.y;
    const midX = (startX + target.x) / 2 + (Math.random() - 0.5) * 100;
    const midY = Math.min(startY, target.y) - 60 - Math.random() * 60;
    let elapsed = 0;

    const onFly = () => {
      if (coin.destroyed) {
        PIXI.Ticker.shared.remove(onFly);
        if (++completed === coins.length) onComplete?.();
        return;
      }

      elapsed += PIXI.Ticker.shared.elapsedMS;
      if (elapsed < delay) return;

      const t = Math.min((elapsed - delay) / FLY_DURATION, 1);
      const et = easeInOut(t);
      const inv = 1 - et;

      // Quadratic bezier
      coin.x = inv * inv * startX + 2 * inv * et * midX + et * et * target.x;
      coin.y = inv * inv * startY + 2 * inv * et * midY + et * et * target.y;

      const BASE = 0.75;
      if (t > 0.8) {
        const endT = (t - 0.8) / 0.2;
        coin.scale.set(BASE * (1 - endT * 0.7));
        coin.alpha = 1 - endT;
      } else {
        coin.scale.set(BASE);
        coin.alpha = 1;
      }

      if (t >= 1) {
        PIXI.Ticker.shared.remove(onFly);
        coin.stop();
        coin.parent?.removeChild(coin);
        coin.destroy();
        if (++completed === coins.length) onComplete?.();
      }
    };

    PIXI.Ticker.shared.add(onFly);
  });
}

// ── Fallback: fade coins out ──────────────────────────────────────────────────
function fadeOutCoins(
  coins: PIXI.AnimatedSprite[],
  onComplete?: () => void,
): void {
  if (coins.length === 0) {
    onComplete?.();
    return;
  }

  let completed = 0;

  coins.forEach((coin) => {
    let elapsed = 0;
    const onFade = () => {
      if (coin.destroyed) {
        PIXI.Ticker.shared.remove(onFade);
        if (++completed === coins.length) onComplete?.();
        return;
      }
      elapsed += PIXI.Ticker.shared.elapsedMS;
      const t = Math.min(elapsed / FADE_MS, 1);
      coin.alpha = 1 - t;
      if (t >= 1) {
        PIXI.Ticker.shared.remove(onFade);
        coin.stop();
        coin.parent?.removeChild(coin);
        coin.destroy();
        if (++completed === coins.length) onComplete?.();
      }
    };
    PIXI.Ticker.shared.add(onFade);
  });
}
