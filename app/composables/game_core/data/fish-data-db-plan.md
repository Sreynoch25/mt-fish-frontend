# Fish Data DB Plan

This folder contains the source data that drives fish identity, rendering,
animation tuning, and runtime behavior for the fish game.

The files are all important, but they do not all need to become first-class SQL
tables. Some are canonical source data, and some are derived or import helper
artifacts.

## Source Priority

Use these files with this priority:

1. `fishCatalog.json`
   - Canonical normalized source for runtime and import.
   - Merges fish identity, render family linkage, path usage, and pack status.
2. `fishAnimationDb.json`
   - Canonical source for animation behavior overrides and defaults.
3. `fishTypeDb.json`
   - Legacy source artifact for fish id/runtime mapping and odds hints.
4. `fishRenderDb.json`
   - Legacy source artifact for per-fish render mapping.
5. `fishFrameGroups.json`
   - Legacy source artifact for ordered atlas frame groups.
6. `fishScaleDb.json`
   - Small tuning source; fold into fish master data.
7. `fishZOrderDb.json`
   - Small tuning source; fold into fish master data.

## Recommended Table Model

Recommended practical table count: `6`

### 1. `tbl_fish_types`

Main master data for each fish.

One row per `spawn_fish_id`.

Suggested columns:

- `id`
- `game_config_id`
- `spawn_fish_id`
- `runtime_kind_1based`
- `internal_kind`
- `fish_code`
- `fish_name`
- `fish_tier`
- `fish_kind`
- `has_runtime_config`
- `is_boss`
- `boss_name`
- `win_odds`
- `odds_range_json`
- `rate_big_win`
- `kill_rate_modifier`
- `hit_points`
- `movement_speed`
- `animation_speed`
- `walk_animation_speed`
- `animation_behavior`
- `scale_ratio`
- `z_index`
- `render_family_code`
- `default_state`
- `available_in_pack`
- `used_in_path`
- `path_usage_count`
- `status_id`
- `order`
- `created_at`
- `updated_at`

Source mapping:

- `fishCatalog.json -> fish[*]`
- `fishTypeDb.json -> fish_types[*]`
- `fishAnimationDb.json -> fish[*]`
- `fishScaleDb.json`
- `fishZOrderDb.json`

Notes:

- `scale_ratio` should come from `fishScaleDb.json`.
- `z_index` should come from `fishZOrderDb.json`.
- `used_in_path` and `path_usage_count` are useful operational fields even if
  they are derivable.

### 2. `tbl_fish_render_families`

Reusable render definition shared by one or more fish.

Suggested columns:

- `id`
- `game_config_id`
- `family_code`
- `renderer`
- `prefix`
- `spine_json_path`
- `spine_atlas_path`
- `spine_texture_path`
- `render_json`
- `status_id`
- `order`
- `created_at`
- `updated_at`

Source mapping:

- `fishCatalog.json -> render_families`

Notes:

- For atlas fish, `prefix` may be enough at family level.
- For spine fish, store the spine file paths here.

### 3. `tbl_fish_render_states`

One row per state inside a render family.

Examples: `move`, `anger`.

Suggested columns:

- `id`
- `render_family_id`
- `state_code`
- `prefix`
- `frame_count`
- `is_default`
- `state_json`
- `status_id`
- `order`

Source mapping:

- `fishCatalog.json -> render_families[*].states`

Notes:

- `prefix` can override family prefix when needed.
- `is_default` should align with fish `default_state`.

### 4. `tbl_fish_render_state_frames`

One row per frame, preserving exact playback order.

Suggested columns:

- `id`
- `render_state_id`
- `frame_name`
- `frame_index`

Source mapping:

- `fishCatalog.json -> render_families[*].states[*].frames`
- `fishFrameGroups.json -> frame_groups[*].frames`

Notes:

- This table is only needed if you want full normalization.
- If you want a simpler schema, these frames can live as JSON on
  `tbl_fish_render_states` instead.

### 5. `tbl_fish_animation_profiles`

Animation tuning and special playback behavior.

Suggested columns:

- `id`
- `fish_type_id` nullable
- `renderer_type`
- `base_anim_speed`
- `walk_anim_speed`
- `behavior`
- `profile_json`

Source mapping:

- `fishAnimationDb.json`

Notes:

- Store explicit fish overrides here.
- Renderer defaults can also live here if you want everything queryable.
- If you prefer a simpler design, these fields can be folded into
  `tbl_fish_types`.

### 6. `tbl_fish_import_batches`

Tracks imports and the source files that produced the current DB state.

Suggested columns:

- `id`
- `source_name`
- `source_path`
- `source_hash`
- `imported_at`
- `notes_json`

Why:

- Helps when the data is regenerated from bundle assets or extracted files.
- Makes future sync work less risky.

## Minimum Simpler Model

If we want faster delivery with less normalization, use only `4` tables:

1. `tbl_fish_types`
2. `tbl_fish_render_families`
3. `tbl_fish_animation_profiles`
4. `tbl_fish_import_batches`

In that model:

- render states and frames live in JSON fields
- odds ranges stay in JSON
- scale and z-order stay on `tbl_fish_types`

This is the best balance for the current project.

## What Does Not Need Separate Tables

Do not make standalone business tables for:

- `fishScaleDb.json`
- `fishZOrderDb.json`
- `fishTypeDb.json`
- `fishRenderDb.json`
- `fishFrameGroups.json`

Reason:

- they are either tiny tuning maps or import helper artifacts
- they fit better as merged fields in fish master data or render-family JSON

## Recommended Final Direction

For this repo, the best path is:

1. treat `fishCatalog.json` as the main import source
2. keep `tbl_fish_types` as the main fish master table
3. keep render data in `tbl_fish_render_families`
4. choose either:
   - normalized states + frames tables, or
   - JSON states/frames for simpler implementation
5. fold scale and z-order into fish master rows
6. keep import metadata so regenerated data stays traceable

## Current Data Snapshot

Based on the current files in this folder:

- fish entries: `29`
- render families: `19`
- frame groups: `19`
- animation override entries: `6`
- scale entries: `22`
- z-order entries: `22`

Important gaps:

- unresolved renderable fish ids:
  `11, 12, 14, 15, 23, 24, 25, 26, 27, 28, 29, 30, 31`
- missing runtime config fish ids:
  `25, 26, 27, 28, 29, 30, 31`

That means the schema should allow partial rows for unresolved fish while the
asset mapping work continues.
