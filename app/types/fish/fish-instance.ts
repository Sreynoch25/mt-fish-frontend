import * as PIXI from 'pixi.js'


export interface FishRunTime  {
  // Core sprite properties
  container: PIXI.Container;
  turtle: PIXI.AnimatedSprite;
  shadow: PIXI.AnimatedSprite | null;
  
  // Behavior
  updateFn: () => void;
  isSwimmingAway: boolean;
  targetX: number;
  targetY: number;
  swimSpeed: number;
  
  // Animation textures
  deadTextures?: PIXI.Texture[];
  deadShadowTextures?: PIXI.Texture[];
  atlasScale: number;
  
}

