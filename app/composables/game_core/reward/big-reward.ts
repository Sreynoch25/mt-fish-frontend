// useRewardEffectBig.ts
import * as PIXI from "pixi.js";
import {
  useFishAssetPreload,
  COIN_ATLAS_URL,
} from "~/composables/game_core/assets/useFishAssetPreload";

// ── Constants ─────────────────────────────────────────────────────────────────
const ODD_FONT_NAME = "fnt_odd";

// ── Atlas frame names ─────────────────────────────────────────────────────────
// effect.atlas.txt
const BIG_COIN_EFFECT_FRAME = "s_coin0001.png";

// coin.atlas.txt
const SMALL_COIN_FRAME = "ef_coin0_only0000.png";

const EXPLODE_FRAMES = [
  "ef_coin_0001.png",
  "ef_coin_0002.png",
  "ef_coin_0003.png",
  "ef_coin_0004.png",
  "ef_coin_0005.png",
  "ef_coin_0006.png",
  "ef_coin_0007.png",
  "ef_coin_0008.png",
  "ef_coin_0009.png",
  "ef_coin_0010.png",
  "ef_coin_0011.png",
  "ef_coin_0012.png",
  "ef_coin_0013.png",
  "ef_coin_0014.png",
  "ef_coin_0015.png",
] as const;

const BIG_COIN_FRAMES = [
  "s_coin0000.png",
  "s_coin0001.png",
  "s_coin0002.png",
  "s_coin0003.png",
  "s_coin0004.png",
  "s_coin0005.png",
  "s_coin0006.png",
  "s_coin0007.png",
  "s_coin0008.png",
  "s_coin0009.png",
] as const;

// ── Timing ────────────────────────────────────────────────────────────────────
const INTRO_MS = 380;
const POP_MS = 280;
const COIN_COUNT = 5;
const CIRCLE_RADIUS = 60;
const EXPLODE_COUNT = 10;
const COIN_BASE_SCALE = 0.65;
const COIN_ROUNDS = 3; // full animation loops before freezing

// ── Easing ────────────────────────────────────────────────────────────────────
function easeOutBack(t: number): number {
  const c1 = 1.70158,
    c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// ── Public types ──────────────────────────────────────────────────────────────
export type BigRewardEffectOptions = {
  layer: PIXI.Container;
  x: number;
  y: number;
  amount: number;
  boxTarget?: { x: number; y: number };
  onComplete?: () => void;
};

// ── Main ──────────────────────────────────────────────────────────────────────
export function showBigRewardEffect(options: BigRewardEffectOptions): void {
  const { layer, x, y, amount, boxTarget, onComplete } = options;

  const { getEffectTexture, getAtlasTexture, getLocalizedTexture } =
    useFishAssetPreload();

  // ── Validate required assets ──────────────────────────────────────────────
  const bigCoinTex = getEffectTexture(BIG_COIN_EFFECT_FRAME);
  if (!bigCoinTex || bigCoinTex === PIXI.Texture.WHITE) {
    console.warn("[bigReward] s_coin0001.png not loaded from effect atlas");
    return;
  }

  const explodeTextures = EXPLODE_FRAMES.map((f) =>
    getAtlasTexture(COIN_ATLAS_URL, f),
  ).filter((t) => t !== PIXI.Texture.WHITE);

  if (explodeTextures.length === 0) {
    console.warn("[bigReward] coin explode frames not loaded from coin atlas");
    return;
  }

  // ── Root container ────────────────────────────────────────────────────────
  const root = new PIXI.Container();
  root.position.set(x, y);
  (root as any).__isRewardEffect = true;
  root.zIndex = 9999;
  root.sortableChildren = true;
  layer.addChild(root);

  // ── Explosion bursts (z: 2) ───────────────────────────────────────────────
  const burstDelays = Array.from({ length: EXPLODE_COUNT }, (_, i) => i * 40);
  const burstFired = new Array<boolean>(EXPLODE_COUNT).fill(false);

  const explodeBursts = Array.from({ length: EXPLODE_COUNT }, (_, i) => {
    const burst = new PIXI.AnimatedSprite(explodeTextures);
    burst.anchor.set(0.5);
    const angle = (i / EXPLODE_COUNT) * Math.PI * 2 + Math.random() * 0.4;
    const dist = 50 + Math.random() * 70;
    burst.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist);
    burst.scale.set(1.4 + Math.random() * 0.6);
    burst.animationSpeed = 0.5 + Math.random() * 0.2;
    burst.loop = false;
    burst.alpha = 0;
    burst.zIndex = 2;
    root.addChild(burst);
    return burst;
  });

  // ── Scattered small coins (z: 3) ──────────────────────────────────────────
  const smallCoinTex = getAtlasTexture(COIN_ATLAS_URL, SMALL_COIN_FRAME);
  const SCATTER_COUNT = 12;

  const scatterCoins =
    smallCoinTex !== PIXI.Texture.WHITE
      ? Array.from({ length: SCATTER_COUNT }, () => {
          const sc = new PIXI.Sprite(smallCoinTex);
          sc.anchor.set(0.5);
          const angle = Math.random() * Math.PI * 2;
          const dist = 80 + Math.random() * 120;
          sc.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist);
          sc.scale.set(0);
          sc.alpha = 0;
          sc.zIndex = 3;
          root.addChild(sc);
          return sc;
        })
      : [];

  // ── Five circle coins (z: 9) ──────────────────────────────────────────────
  const bigCoinFrameTextures = BIG_COIN_FRAMES.map((f) =>
    getAtlasTexture(COIN_ATLAS_URL, f),
  ).filter((t) => t !== PIXI.Texture.WHITE);

  const coinTextures =
    bigCoinFrameTextures.length > 0 ? bigCoinFrameTextures : [bigCoinTex];

  const circleCoins = Array.from({ length: COIN_COUNT }, (_, i) => {
    const angle = (i / COIN_COUNT) * Math.PI * 2 - Math.PI / 2;
    const coin = new PIXI.AnimatedSprite(coinTextures);
    coin.anchor.set(0.5);
    coin.scale.set(0);
    coin.position.set(
      Math.cos(angle) * CIRCLE_RADIUS,
      Math.sin(angle) * CIRCLE_RADIUS,
    );
    coin.zIndex = 9;
    coin.animationSpeed = 0.25;
    coin.loop = true;
    coin.gotoAndStop(0); // start frozen on frame 0
    root.addChild(coin);
    return coin;
  });

  // ── Shared sync state for circle coins ───────────────────────────────────
  // All coins pop in staggered, but animate and stop together as one unit.
  // "syncStarted" = last coin finished popping → all start playing frame 0.
  // "sharedRounds" counts loops on one leader coin; when it hits COIN_ROUNDS
  // every coin freezes on frame 0 simultaneously.
  let syncStarted = false;
  let sharedRounds = 0;
  let allCoinsDone = false;

  // ── Win sprite (z: 20) ────────────────────────────────────────────────────
  const winTex = getLocalizedTexture("km", "win.png");
  let winSprite: PIXI.Sprite | null = null;
  if (winTex !== PIXI.Texture.WHITE) {
    winSprite = new PIXI.Sprite(winTex);
    winSprite.anchor.set(0.5);
    winSprite.scale.set(0);
    winSprite.position.y = -40;
    winSprite.zIndex = 20;
    root.addChild(winSprite);
  }

  // ── Amount label (z: 21) ──────────────────────────────────────────────────
  const amountLabel = new PIXI.BitmapText(`${amount.toLocaleString()}`, {
    fontName: ODD_FONT_NAME,
    fontSize: 18,
    align: "center",
  });
  amountLabel.anchor.set(0.5);
  amountLabel.position.set(0, -15);
  amountLabel.scale.set(0);
  amountLabel.alpha = 0;
  amountLabel.zIndex = 21;
  root.addChild(amountLabel);

  // ── Animation state ───────────────────────────────────────────────────────
  const circleDelays = circleCoins.map((_, i) => 80 + i * 60);
  const circleEls = new Array<number>(COIN_COUNT).fill(0);

  // When the last coin finishes popping → sync-play starts
  const LAST_POP_DONE_MS = (circleDelays[COIN_COUNT - 1] ?? 0) + POP_MS;

  // Duration of one full animation cycle in ms (animationSpeed = frames/tick at 60fps)
  const MS_PER_ROUND = (coinTextures.length / 0.25) * (1000 / 60);
  const COINS_ANIM_TOTAL_MS = LAST_POP_DONE_MS + COIN_ROUNDS * MS_PER_ROUND;

  // Hold phase starts after all 3 rounds complete, plus a short buffer
  const holdMs = COINS_ANIM_TOTAL_MS + 200;

  let elapsed = 0;
  let flyStarted = false;

  // ── Main tick ─────────────────────────────────────────────────────────────
  const onTick = () => {
    if (root.destroyed) {
      PIXI.Ticker.shared.remove(onTick);
      return;
    }

    const dt = PIXI.Ticker.shared.elapsedMS;
    elapsed += dt;

    // Explosion bursts — staggered fire + re-trigger while in hold
    explodeBursts.forEach((burst, i) => {
      if (burst.destroyed) return;
      if (burstFired[i] || elapsed <= (burstDelays[i] ?? 0)) return;

      burstFired[i] = true;
      burst.alpha = 1;
      burst.gotoAndPlay(0);

      burst.onComplete = () => {
        if (burst.destroyed) return;
        burst.alpha = 0;
        if (elapsed >= holdMs * 0.75) return;

        // Re-position and re-fire after a short wait
        const newAngle = Math.random() * Math.PI * 2;
        const newDist = 40 + Math.random() * 90;
        burst.position.set(
          Math.cos(newAngle) * newDist,
          Math.sin(newAngle) * newDist,
        );
        burst.scale.set(0.9 + Math.random() * 0.8);

        let waitEl = 0;
        const waitDelay = 100 + Math.random() * 180;
        const onWait = () => {
          if (burst.destroyed) {
            PIXI.Ticker.shared.remove(onWait);
            return;
          }
          waitEl += PIXI.Ticker.shared.elapsedMS;
          if (waitEl < waitDelay) return;
          PIXI.Ticker.shared.remove(onWait);
          burst.alpha = 1;
          burst.gotoAndPlay(0);
          burst.onComplete = () => {
            if (!burst.destroyed) burst.alpha = 0;
          };
        };
        PIXI.Ticker.shared.add(onWait);
      };
    });

    // Circle coins — staggered pop-in, then sync play + sync stop
    circleCoins.forEach((coin, i) => {
      if (coin.destroyed) return;
      circleEls[i]! += dt;
      const localT = circleEls[i]! - circleDelays[i]!;
      if (localT < 0) return;

      // Pop-in phase: scale up frozen on frame 0
      const popT = Math.min(localT / POP_MS, 1);
      if (popT < 1) {
        coin.scale.set(easeOutBack(popT) * COIN_BASE_SCALE);
        return;
      }

      coin.scale.set(COIN_BASE_SCALE);
    });

    // Once the last coin finishes its pop-in, start ALL coins on frame 0 together
    if (!syncStarted && elapsed >= LAST_POP_DONE_MS) {
      syncStarted = true;

      // All coins loop freely — only the leader counts rounds.
      // When the leader finishes its Nth loop it freezes everyone on frame 0
      // in one shot. Non-leaders never have loop=false set externally so they
      // animate naturally right up until that single gotoAndStop(0) call.
      const leader = circleCoins[0];
      if (leader && !leader.destroyed) {
        leader.loop = true;
        leader.onLoop = () => {
          // onLoop fires at the START of each new loop (i.e. the previous loop
          // just completed), so sharedRounds counts completed loops correctly.
          sharedRounds++;
          if (sharedRounds >= COIN_ROUNDS) {
            // The Nth loop just completed — stop here, don't start another.
            leader.onLoop = undefined;
            leader.loop = false;
            // onComplete fires when the sprite reaches its last frame after
            // loop=false. Since we set loop=false right at the loop boundary
            // (frame 0), PIXI will not advance further; call gotoAndStop
            // immediately instead to avoid a one-frame delay.
            allCoinsDone = true;
            // stop() halts the internal ticker; gotoAndStop(0) sets the frame.
            // Both are needed: stop() alone doesn't rewind, gotoAndStop alone
            // on a playing sprite can be overridden on the next ticker update.
            circleCoins.forEach((c) => {
              if (!c.destroyed) {
                c.stop();
                c.gotoAndStop(0);
              }
            });
          }
        };
      }

      // Non-leaders just loop freely — no onLoop/onComplete wired
      circleCoins.slice(1).forEach((c) => {
        if (!c.destroyed) {
          c.loop = true;
        }
      });

      // Start every coin from frame 0 at the same tick
      circleCoins.forEach((coin) => {
        if (!coin.destroyed) coin.gotoAndPlay(0);
      });
    }

    // Win sprite pop
    if (winSprite && !winSprite.destroyed) {
      const wt = Math.min(elapsed / 320, 1);
      winSprite.scale.set(easeOutBack(wt) * 0.9);
      winSprite.alpha = Math.min(1, wt * 2);
    }

    // Amount label pop
    if (!amountLabel.destroyed) {
      const at = Math.min((elapsed - 200) / 350, 1);
      if (at > 0) {
        amountLabel.scale.set(easeOutBack(at) * 0.9);
        amountLabel.alpha = Math.min(1, at * 2);
      }
    }

    // Hold → fade win + label → detach coins → fly/fade
    if (elapsed > holdMs && !flyStarted) {
      const fadeT = Math.min((elapsed - holdMs) / 350, 1);

      if (winSprite && !winSprite.destroyed)
        winSprite.alpha = Math.max(0, 1 - fadeT);
      if (!amountLabel.destroyed) amountLabel.alpha = Math.max(0, 1 - fadeT);

      if (fadeT >= 1) {
        flyStarted = true;
        PIXI.Ticker.shared.remove(onTick);

        // Detach coins into layer space before destroying root
        const flyCoins: PIXI.AnimatedSprite[] = [];
        for (const coin of circleCoins) {
          if (coin.destroyed) continue;
          const worldPos = root.toGlobal(coin.position);
          const layerPos = layer.toLocal(worldPos);
          root.removeChild(coin);
          coin.position.set(layerPos.x, layerPos.y);
          coin.zIndex = 9999;
          coin.stop();
          coin.gotoAndStop(0); // ensure frozen on frame 0 for the fly
          layer.addChild(coin);
          flyCoins.push(coin);
        }

        root.parent?.removeChild(root);
        root.destroy({ children: true });

        if (boxTarget && flyCoins.length > 0) {
          flyCoinsToBox(flyCoins, layer, boxTarget, onComplete);
        } else {
          fadeOutSprites(flyCoins, onComplete);
        }
      }
    }
  };

  PIXI.Ticker.shared.add(onTick);
}

// ── Fly circle coins to coin box ──────────────────────────────────────────────
function flyCoinsToBox(
  coins: PIXI.AnimatedSprite[],
  layer: PIXI.Container,
  target: { x: number; y: number },
  onComplete?: () => void,
): void {
  const FLY_DURATION = 600;
  const STAGGER_DELAY = 70;
  let completed = 0;

  coins.forEach((coin, i) => {
    const delay = i * STAGGER_DELAY;
    const startX = coin.x;
    const startY = coin.y;
    const midX = (startX + target.x) / 2 + (Math.random() - 0.5) * 120;
    const midY = Math.min(startY, target.y) - 80 - Math.random() * 60;
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

      // Quadratic bezier arc
      coin.x = inv * inv * startX + 2 * inv * et * midX + et * et * target.x;
      coin.y = inv * inv * startY + 2 * inv * et * midY + et * et * target.y;

      if (t > 0.78) {
        const endT = (t - 0.78) / 0.22;
        coin.scale.set(0.5 * (1 - endT * 0.8));
        coin.alpha = 1 - endT;
      } else {
        coin.scale.set(0.5 * (0.5 + t * 0.5));
        coin.alpha = 1;
      }

      if (t >= 1) {
        PIXI.Ticker.shared.remove(onFly);
        coin.parent?.removeChild(coin);
        coin.destroy();
        if (++completed === coins.length) onComplete?.();
      }
    };

    PIXI.Ticker.shared.add(onFly);
  });
}

// ── Fallback: fade out sprites ────────────────────────────────────────────────
function fadeOutSprites(
  sprites: PIXI.DisplayObject[],
  onComplete?: () => void,
): void {
  if (sprites.length === 0) {
    onComplete?.();
    return;
  }

  const FADE_MS = 300;
  let completed = 0;

  sprites.forEach((sprite) => {
    let elapsed = 0;
    const onFade = () => {
      if (sprite.destroyed) {
        PIXI.Ticker.shared.remove(onFade);
        if (++completed === sprites.length) onComplete?.();
        return;
      }

      elapsed += PIXI.Ticker.shared.elapsedMS;
      const t = Math.min(elapsed / FADE_MS, 1);
      sprite.alpha = 1 - t;

      if (t >= 1) {
        PIXI.Ticker.shared.remove(onFade);
        sprite.parent?.removeChild(sprite);
        sprite.destroy();
        if (++completed === sprites.length) onComplete?.();
      }
    };
    PIXI.Ticker.shared.add(onFade);
  });
}
