import type * as PIXI from 'pixi.js'
import type { StageTransitionRunner } from './types'

export interface NormalFadeTransitionOptions {
  durationMs?: number
}

export function makeNormalFadeTransitionRunner(
  options: NormalFadeTransitionOptions = {},
): StageTransitionRunner {
  const { durationMs = 900 } = options

  return ({ app, targetLayer, currentScene, nextScene, onComplete }) => {
    nextScene.alpha = 0
    targetLayer.addChild(nextScene)

    const ticker = app.ticker
    const startTime = performance.now()

    const tick = () => {
      const progress = Math.min((performance.now() - startTime) / durationMs, 1)
      const eased = 1 - (1 - progress) * (1 - progress)

      currentScene.alpha = 1 - eased
      nextScene.alpha = eased

      if (progress >= 1) {
        ticker.remove(tick)
        if (currentScene.parent === targetLayer) {
          targetLayer.removeChild(currentScene)
        }
        nextScene.alpha = 1
        onComplete?.()
      }
    }

    ticker.add(tick)
  }
}
