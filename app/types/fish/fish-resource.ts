export interface FishResourceFile {
  type: "json" | "image" | "atlas"
  path: string
  is_entry?: boolean
}

export interface FishResourceDefinition {
  type: "spritesheet" | "atlas"
  asset_key: string
  files: FishResourceFile[]
}

export interface FishConfigEntry {
  id: number
  name: string
  odds: number
  weight: number
  is_boss: boolean
  resource: FishResourceDefinition
}

export interface FishConfigFile {
  fish_types: FishConfigEntry[]
}
