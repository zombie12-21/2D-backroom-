# BACKROOMS — organized project

`src/` ships with the generator. Everything else is ephemeral.

```
src/
  README.md   this file + GitHub steps
  data.js     LEVELS / ENTITIES / ITEMS / WEAPONS (the database)
  maze.js     seeded maze generator
  audio.js    procedural WebAudio (hum, steps, chase)
  craft.js    crafting recipes (canCraft/doCraft)
  story.js    VHS lore tapes, level intros, achievements
  fx.js       damage floats, screen shake
  weaponview.js real top-down weapon sprites + tracers + muzzle flash
  details.js  floor/wall detail, decals, dust, exit doors, flashlight cone
  main.js     FPS engine, player, entities AI, HUD, codex, minimap
main.pjs      perchance lists (mirrors data.js) + $meta
index.html    HUD / menu / codex DOM (body only)
```

## GitHub step-by-step
```bash
# 1. save in perchance editor, then download src/ files (files panel)
# 2. new repo
git init backrooms-game && cd backrooms-game
mkdir src && cp -r /downloads/src/* src/
cp main.pjs index.html . 2>/dev/null; echo "perchance export" > README.md; cat src/README.md >> README.md
git add . && git commit -m "backrooms v1: levels+entities+items+weapons"
gh repo create backrooms-game --public --source=. --push
# 3. playtest: npx serve .  (open index.html via local server so src/*.js loads)
# 4. iterate: edit src/data.js to add level/entity/item/weapon, push again
```

## How to extend (keep it organized)
- New level: add one entry in `LEVELS` in data.js (wall/floor/ceiling colors, maze size, entity, loot table, objective). No other file changes needed.
- New entity: add entry in `ENTITIES` (speed, damage, weakness, color). Spawns automatically on its levels.
- New item: add entry in `ITEMS` (type, heal/use). Add to a level's `loot` array.
- New weapon: add entry in `WEAPONS` (dmg, range, cooldown). It appears in codex + loot.
- Balance: all numbers live in data.js. Engine reads only from there.

## Controls
WASD move, mouse look (click to lock), SHIFT sprint, E pickup, LMB attack, F flashlight, 1-6 hotbar, C craft, J journal, M menu.
Mobile: left stick + drag look + ⚔ button.

## Tutorial
Index 0 in `LEVELS` (`id:"T"`, `tutorial:true`, `size:5` → 11×11 maze). Scripted loot (crowbar, energy bar, batteries), one weak practice dummy + a Guide instructor, no traders/safes/coins. Checklist HUD (move/grab/hit/exit). On exit everything is stripped back to the standard kit and coins are refunded — training gear never leaves. Saves are blocked inside and level-wrap skips index 0.
