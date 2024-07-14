# twentyfourtyate
An food themed version of 2048 with sauce :)

## Gameplan:

 - [x] Get a basic app up and running
 - [x] Get a basic react-three-fiber setup up and running
 - [x] Design the game
 - [x] Implement 2048 in 3d
 - [x] Add a reset button
 - [x] Add a score tracker
 - [x] Add in move counter
 - [x] Add time freeze sauce
 - [x] Add remove sauce
 - [x] Add swap sauce
 - [x] Add randomness modifier sauce
 - [ ] Model out tiles
 - [ ] Model out reset button
 - [ ] Model out plate
 - [ ] Polish score counter
 - [ ] Polish move counter
 - [ ] Stretch: Implement high score and app-db persistence to local storage

## Design:
Improve on perfection

### What I'm going with:

Move counter

 - Move counter

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

