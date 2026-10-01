# BACKROOMS — Organized Survival FPS

Top-down survival: tutorial + 15 levels, 15 entities, crafting, journal/VHS tapes, traders, multiplayer ghosts (Perchance only).

## Play
Any static server (ES modules need http, not file://):
```bash
npx serve .
# or
python3 -m http.server
```
Then open the printed URL. Or push to GitHub Pages (Settings > Pages > Deploy from branch).

## Controls
WASD/arrows move, mouse aims, click/Space attack, E pickup, F flashlight, 1-6 use slot, C craft, J journal, M menu. Mobile: left stick + drag look + attack button.

## Files
- `index.html` — standalone page (wraps the HUD/menu DOM)
- `src/main.js` — engine: player, entity AI, HUD, codex, minimap
- `src/data.js` — LEVELS / ENTITIES / ITEMS / WEAPONS (edit to add content)
- `src/maze.js` — seeded maze generator
- `src/audio.js` — procedural WebAudio
- `src/craft.js` — crafting recipes
- `src/story.js` — VHS lore, level intros, achievements
- `src/fx.js` — damage floats, screen shake
- `src/weaponview.js` — top-down weapon sprites, tracers, muzzle flash
- `src/details.js` — floor/wall detail, decals, dust, exit doors
- `main.pjs` — reference only: the Perchance generator lists (needs perchance.org to run)

## Tutorial
First entry in LEVELS (`id:"T"`, `tutorial:true`, 11x11 maze). Scripted loot, one weak practice dummy + Guide instructor. On exit everything is stripped back to the standard kit — training gear never leaves. Saves are blocked inside.

## Debug API (console)
`BR.x / BR.y` position, `BR.ex / BR.ey` exit, `BR.items`, `BR.ents`, `BR.tp(x,y)` teleport.

## Notes
- Saves use localStorage (`br_save`, `br_coins`, `br_kills`, `br_ach`, `br_tapes`, `br_unlocked`).
- No build step, no dependencies.
