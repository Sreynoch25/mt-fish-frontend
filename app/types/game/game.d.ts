import type * as PIXI from 'pixi.js'

declare module 'pixi.js' {
  interface Container {
    isDying?: boolean
  }
  interface Sprite {
    vx?: number
    vy?: number
    lifetime?: number
    maxLifetime?: number
  }
  interface AnimatedSprite {
    vx?: number
    vy?: number
    lifetime?: number
    maxLifetime?: number
  }
}



export interface Frame {
  frame: any
  sourceSize: any
  spriteSourceSize: any
}

export interface GameState {
  score: Ref<number>
  coins: Ref<number>
  fishCount: Ref<number>
  cannonLevel: Ref<number>
  transitionState: Ref<'idle' | 'swimming-away' | 'transitioning' | 'spawning'>
  remainingSeconds: Ref<number>
}

