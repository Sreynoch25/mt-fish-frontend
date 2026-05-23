import 'pixi.js'

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
