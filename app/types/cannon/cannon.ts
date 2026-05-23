import * as PIXI from 'pixi.js'

export interface CannonAssets {
  cannonSprite: PIXI.Sprite
  shineSprite: PIXI.AnimatedSprite
  fireSprite: PIXI.Sprite
  btnMinusSprite: PIXI.Sprite | null
  btnPlusSprite: PIXI.Sprite | null
  levelText: PIXI.Text
  cannonContainer: PIXI.Container
}
