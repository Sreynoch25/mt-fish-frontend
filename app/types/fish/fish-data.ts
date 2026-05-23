import * as PIXI from 'pixi.js'

export interface FishData {
  normalTextures: PIXI.Texture[]
  shadowTextures?: PIXI.Texture[]
  deadTextures?: PIXI.Texture[]
  deadShadowTextures?: PIXI.Texture[]
  prefix: string
  deadPrefix?: string
  description?: string
  scale: number
}
