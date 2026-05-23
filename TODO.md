# Fix Debug Sprites Page - No Sprites Loaded

Status: Planning complete, ready for edits.

## Steps

### [ ] Step 1: Add diagnostic logs and fix filename matching in sprites-list.vue

- Change condition to `if (!file.match(/\\.atlas/i)) continue;`
- Update replace to `atlasFile = file.replace(/\\.atlas(?!\\.txt)$/i, '.atlas.txt');`
- Add console.log('Processing', folder, file, '->', atlasFile, url);
- Add console.log('Atlas fetch OK, text length', text.length);
- Add console.log('parseJsonAtlas image', image, 'frames count', Object.keys(frames).length);
- This will reveal if atlases processed and parse succeeds.

### [ ] Step 2: Test

- Save file (dev auto-reload).
- Refresh /debug/sprites-list.
- Check console logs for processing urls, parse counts.
- Expect ~100+ sprites.

### [ ] Step 3: If still 0, read another atlas (Spine format).

- e.g. purple.atlas.txt from resources/puffer.

### [ ] Step 4: Completion

- attempt_completion with command `cd aqua_area_v6_v3.1 && pnpm dev` (open http://localhost:3000/debug/sprites-list)
