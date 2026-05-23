export interface GameState {
  score: number
  coins: number
  fishCount: number
  cannonLevel: number
  remainingSeconds: number
}

export const DEFAULT_GAME_STATE: GameState = {
  score: 0,
  coins: 0,
  fishCount: 0,
  cannonLevel: 1,
  remainingSeconds: 300
}