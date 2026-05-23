import type * as PIXI from 'pixi.js'

export interface GameTextures {
  bullet: PIXI.Texture[]
  net: PIXI.Texture[]
  silverCoin: PIXI.Texture[]
  goldCoin: PIXI.Texture[]
  cannon: {
    base: PIXI.Texture[]
    cannon: PIXI.Texture[]
    shine: PIXI.Texture[]
    fire: PIXI.Texture[]
    btnMinus: PIXI.Texture[]
    btnPlus: PIXI.Texture[]
  }
  ui: {
    btnLock?: PIXI.Texture
    btnSpeed?: PIXI.Texture
    btnDouble?: PIXI.Texture
    emoOn?: PIXI.Texture
    lockTarget?: PIXI.Texture
    bgFrame?: PIXI.Texture
    timeCountBg?: PIXI.Texture
  }
}