# twentyfourtyate
An food themed version of 2048 with sauce :)

## Gameplan:

 - [x] Get a basic app up and running
 - [x] Get a basic react-three-fiber setup up and running
 - [x] Design the game
 - [ ] Implement 2048 in 3d
 - [ ] Add camera movements
 - [ ] Add in time-based enhancements
 - [ ] Add in like an app (start/restart)
 - [ ] Add time freeze sauce
 - [ ] Add remove sauce
 - [ ] Add swap sauce
 - [ ] Add randomness modifier sauce
 - [ ] Model out tiles
 - [ ] Add particle effects on merge
 - [ ] Add particle effects on sauce enter

## Design:
Improve on perfection

### What I'm going with:

Speed-based score increases

 - (like the longer you're doing quick moves, the more you get(?))

Sauce (flavored as like burger sauce)

 - Freeze time (doing a move doesn't make new tiles spawn for N moves)
 - Remove a particular tile
 - Swap two tiles
 - Improve spawn

### Ideas:

 - Speed-based score increases
 - Reward for merging chains
 - Tiles can get locked
 - Tiles can disappear (and the points they contribute/contributed) (maybe this can be flavored as food going bad?)
 - Powerups
   - Change randomess of spawns
     - All of them spawn at a specific tiles
     - instead of 2s and 4s, it's only 2s or only 4s or 4s and 8s
   - freeze time (moves don't make new tiles spawn)
   - Undos a resource
   - Remove a particular tile
   - Swap
   - ^These are all tiles than only activate when you tap on them (tradeoff between board space and powers)
 - Power downs
   - A tile can only be merged N times (it can't be made into a 2048)
 - Auto2048 (like cookieclicker but for automatic 2048)
 - Larger grid
 - Tiles can explode surrounding tiles on merge
   - Or maybe it's a new type of tile that does this and you can tap on it
 - Make everything a tile

