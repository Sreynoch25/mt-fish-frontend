import type * as PIXI from 'pixi.js'

export interface StageTransitionContext {
  app: PIXI.Application
  targetLayer: PIXI.Container
  currentScene: PIXI.DisplayObject
  nextScene: PIXI.DisplayObject
  onComplete?: () => void
  
}

export type StageTransitionRunner = (context: StageTransitionContext) => void
