goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__29182(s__29183){
return (new cljs.core.LazySeq(null,(function (){
var s__29183__$1 = s__29183;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29183__$1);
if(temp__5804__auto__){
var s__29183__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29183__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29183__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29185 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29184 = (0);
while(true){
if((i__29184 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__29184);
cljs.core.chunk_append(b__29185,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__29184,i,c__5521__auto__,size__5522__auto__,b__29185,s__29183__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__29182_$_iter__29186(s__29187){
return (new cljs.core.LazySeq(null,((function (i__29184,i,c__5521__auto__,size__5522__auto__,b__29185,s__29183__$2,temp__5804__auto__){
return (function (){
var s__29187__$1 = s__29187;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29187__$1);
if(temp__5804__auto____$1){
var s__29187__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29187__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__29187__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__29189 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__29188 = (0);
while(true){
if((i__29188 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__29188);
cljs.core.chunk_append(b__29189,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__29293 = (i__29188 + (1));
i__29188 = G__29293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29189),app$core$init_board_$_iter__29182_$_iter__29186(cljs.core.chunk_rest(s__29187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29189),null);
}
} else {
var j = cljs.core.first(s__29187__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__29182_$_iter__29186(cljs.core.rest(s__29187__$2)));
}
} else {
return null;
}
break;
}
});})(i__29184,i,c__5521__auto__,size__5522__auto__,b__29185,s__29183__$2,temp__5804__auto__))
,null,null));
});})(i__29184,i,c__5521__auto__,size__5522__auto__,b__29185,s__29183__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__29294 = (i__29184 + (1));
i__29184 = G__29294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29185),app$core$init_board_$_iter__29182(cljs.core.chunk_rest(s__29183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29185),null);
}
} else {
var i = cljs.core.first(s__29183__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__29183__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__29182_$_iter__29190(s__29191){
return (new cljs.core.LazySeq(null,(function (){
var s__29191__$1 = s__29191;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29191__$1);
if(temp__5804__auto____$1){
var s__29191__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29191__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29191__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29193 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29192 = (0);
while(true){
if((i__29192 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__29192);
cljs.core.chunk_append(b__29193,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__29295 = (i__29192 + (1));
i__29192 = G__29295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29193),app$core$init_board_$_iter__29182_$_iter__29190(cljs.core.chunk_rest(s__29191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29193),null);
}
} else {
var j = cljs.core.first(s__29191__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__29182_$_iter__29190(cljs.core.rest(s__29191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__29183__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__29182(cljs.core.rest(s__29183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})());
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),new cljs.core.Keyword(null,"fixed-probabilities","fixed-probabilities",1465457166),new cljs.core.Keyword(null,"base-probabilities","base-probabilities",507396627),new cljs.core.Keyword(null,"keynum","keynum",1580606196),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"movecount","movecount",1972774776),new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638),new cljs.core.Keyword(null,"board","board",-1907017633)],[(0),false,false,(0),new cljs.core.PersistentArrayMap(null, 1, [(2),(1)], null),new cljs.core.PersistentArrayMap(null, 6, [(2),(90),(4),(6),new cljs.core.Keyword(null,"freeze","freeze",2043466309),(0),new cljs.core.Keyword(null,"remove","remove",-131428414),(0),new cljs.core.Keyword(null,"swap","swap",228675637),(0),new cljs.core.Keyword(null,"random","random",-557811113),(0)], null),(16),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377),false,new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009),null], null),(0),false,app.core.init_board()]),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null)], null)], null);
}));
app.core.tiles_by_probabilities = (function app$core$tiles_by_probabilities(probabilities){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__29194){
var vec__29195 = p__29194;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29195,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([probabilities], 0));
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29198_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__29198_SHARP_) === (0));
}),tile_list);
if(cljs.core.seq(empty_slots)){
var picked_tile = cljs.core.rand_nth(empty_slots);
var rowcoord = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(picked_tile);
var colcoord = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(picked_tile);
var possible_tiles = app.core.tiles_by_probabilities((cljs.core.truth_(new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638).cljs$core$IFn$_invoke$arity$1(db))?new cljs.core.Keyword(null,"fixed-probabilities","fixed-probabilities",1465457166).cljs$core$IFn$_invoke$arity$1(db):new cljs.core.Keyword(null,"base-probabilities","base-probabilities",507396627).cljs$core$IFn$_invoke$arity$1(db)));
var newtileval = cljs.core.rand_nth(possible_tiles);
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),newtileval),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
} else {
return db;
}
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__29200){
var vec__29201 = p__29200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29201,(0),null);
var map__29204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29201,(1),null);
var map__29204__$1 = cljs.core.__destructure_map(map__29204);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__29205 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(1),null);
var vec__29208 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol], null));
var oldval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(fromtile);
var reposed_from = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fromtile,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),tocol),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),torow);
var newkeyfrom = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keynum","keynum",1580606196)) : db.call(null,new cljs.core.Keyword(null,"keynum","keynum",1580606196)));
var newdb = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol], null),reposed_from),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkeyfrom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
if(cljs.core.truth_(merged)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(newdb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),((2) * oldval)),new cljs.core.Keyword(null,"score","score",-1963588780),(function (p1__29199_SHARP_){
return (p1__29199_SHARP_ + ((2) * oldval));
}));
} else {
return newdb;
}
}));
app.core.update_frozen_db = (function app$core$update_frozen_db(db){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frozen?","frozen?",613726824).cljs$core$IFn$_invoke$arity$1(db))){
var should_be_frozen_after_QMARK_ = (new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601).cljs$core$IFn$_invoke$arity$1(db) > (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),should_be_frozen_after_QMARK_),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),cljs.core.dec),new cljs.core.Keyword(null,"movecount","movecount",1972774776),cljs.core.dec);
} else {
return db;
}
});
app.core.update_random_db = (function app$core$update_random_db(db){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638).cljs$core$IFn$_invoke$arity$1(db))){
var should_be_fixed_after_QMARK_ = (new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928).cljs$core$IFn$_invoke$arity$1(db) > (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638),should_be_fixed_after_QMARK_),new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928),cljs.core.dec);
} else {
return db;
}
});
app.core.add_tile_if_not_frozen = (function app$core$add_tile_if_not_frozen(effects,frozen_QMARK_){
if(cljs.core.truth_((function (){var or__5045__auto__ = frozen_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (cljs.core.count(effects) === (0));
}
})())){
return effects;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__29211,p__29212){
var map__29213 = p__29211;
var map__29213__$1 = cljs.core.__destructure_map(map__29213);
var cofx = map__29213__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29213__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29214 = p__29212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
var slides = ((cljs.core.seq(moves))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (movedata){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),movedata], null)], null);
}),moves):cljs.core.PersistentVector.EMPTY);
var effects = app.core.add_tile_if_not_frozen(slides,new cljs.core.Keyword(null,"frozen?","frozen?",613726824).cljs$core$IFn$_invoke$arity$1(db));
var newdb = app.core.update_random_db(app.core.update_frozen_db(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"movecount","movecount",1972774776),cljs.core.inc)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),newdb,new cljs.core.Keyword(null,"fx","fx",-1237829572),effects], null);
}));
app.core.remove_tile = (function app$core$remove_tile(db,pos_x,pos_y){
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.Keyword(null,"keynum","keynum",1580606196),cljs.core.inc);
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),(function (db,p__29217){
var vec__29218 = p__29217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29218,(0),null);
var vec__29221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29218,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29221,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29221,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),true),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),(2));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-sauce","remove-sauce",-115978714),(function (db,p__29224){
var vec__29225 = p__29224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29225,(0),null);
var vec__29228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29225,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),true);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random-sauce","random-sauce",202790695),(function (db,p__29231){
var vec__29232 = p__29231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(0),null);
var vec__29235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638),true),new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928),(5));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap-sauce","swap-sauce",-1262243351),(function (db,p__29238){
var vec__29239 = p__29238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(0),null);
var vec__29242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(1),null);
return cljs.core.assoc_in(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),true);
}));
app.core.handle_swap = (function app$core$handle_swap(db,pos_x,pos_y){
var tile_1_coords = new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
if((!((tile_1_coords == null)))){
var vec__29245 = tile_1_coords;
var t1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29245,(0),null);
var t1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29245,(1),null);
var tile_1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null));
var tile_2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null));
var moved_tile_1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),pos_y);
var moved_tile_2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_2,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),t1x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),t1y);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null),moved_tile_2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null),moved_tile_1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),false);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null));
}
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__29248){
var vec__29249 = p__29248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(0),null);
var vec__29252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(1),null);
var can_remove_QMARK_ = new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380).cljs$core$IFn$_invoke$arity$1(db);
var can_swap_QMARK_ = new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
var tileval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null));
console.log(cljs.core.clj__GT_js(tileval));

if(cljs.core.truth_(can_remove_QMARK_)){
var G__29255 = tileval;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__29255)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),G__29255)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),G__29255)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random","random",-557811113),G__29255)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap","swap",228675637),G__29255)){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),false);

}
}
}
}
}
} else {
if(cljs.core.truth_(can_swap_QMARK_)){
return app.core.handle_swap(db,pos_x,pos_y);
} else {
return db;

}
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633),(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"movecount","movecount",1972774776),(function (db,_){
return new cljs.core.Keyword(null,"movecount","movecount",1972774776).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780),(function (db,_){
return new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(db);
}));
app.core.swipe_detector = (function app$core$swipe_detector(props__28458__auto__){
var clj_props__28459__auto__ = uix.core.glue_args(props__28458__auto__);
var vec__29256 = [clj_props__28459__auto__];
var map__29259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29256,(0),null);
var map__29259__$1 = cljs.core.__destructure_map(map__29259);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__28460__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29296 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29296)){
var f__28398__auto___29297 = temp__5804__auto___29296;
(f__28398__auto___29297.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29297.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29297.call(null));
} else {
}
} else {
}

var vec__29260 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260,(1),null);
var vec__29263 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263,(1),null);
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),(function (e){
var event = e.nativeEvent;
var new_x = event.pageX;
var new_y = event.pageY;
(set_x_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_x_BANG_.cljs$core$IFn$_invoke$arity$1(new_x) : set_x_BANG_.call(null,new_x));

return (set_y_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_y_BANG_.cljs$core$IFn$_invoke$arity$1(new_y) : set_y_BANG_.call(null,new_y));
}),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),(function (e){
var dx = (e.nativeEvent.pageX - x);
var dy = (e.nativeEvent.pageY - y);
var adx = Math.abs(dx);
var ady = Math.abs(dy);
var xthresh = (50);
var ythresh = (50);
if((((adx > xthresh)) || ((ady > ythresh)))){
if((adx > ady)){
if((dx > (0))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"right","right",-452581833)], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"left","left",-399115937)], null));
}
} else {
if((dy > (0))){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"down","down",1565245570)], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"up","up",-269712113)], null));
}
}
} else {
return null;
}
})], null)],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29266 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29267 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29267);

try{if(((cljs.core.map_QMARK_(clj_props__28459__auto__)) || ((clj_props__28459__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28459__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28459__auto__) (clojure.core/nil? clj-props__28459__auto__))"].join('')));
}

return f__28460__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29266);
}} else {
return f__28460__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29298 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29298.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29298.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__28407__auto___29298.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__28407__auto___29298);
} else {
}
} else {
}
app.core.AnimatedModel = shadow.js.shim.module$$react_spring$three.animated(module$js$meshes.Model);
app.core.tile = (function app$core$tile(props__28458__auto__){
var clj_props__28459__auto__ = uix.core.glue_args(props__28458__auto__);
var vec__29268 = [clj_props__28459__auto__];
var map__29271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29268,(0),null);
var map__29271__$1 = cljs.core.__destructure_map(map__29271);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29271__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29271__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__28460__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29299 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29299)){
var f__28398__auto___29300 = temp__5804__auto___29299;
(f__28398__auto___29300.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29300.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29300.call(null));
} else {
}
} else {
}

var scale = 1.3;
var pos_x = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo);
var pos_y = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo);
var tileval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo);
var springs = shadow.js.shim.module$$react_spring$three.useSpring(({"position": [(scale * ((new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo) - (0)) - 1.5)),(scale * (((3) - new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo)) - 1.5)),(0)], "config": ({"mass": (1), "tension": (1000), "friction": (30)})}));
var transition = shadow.js.shim.module$$react_spring$three.useTransition(new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo),({"from": ({"scale": 0.5}), "enter": ({"scale": (1)}), "config": ({"mass": (1), "tension": (600), "friction": (30)})}));
var G__29272 = (function (scale__$1,_){
return uix.compiler.alpha.component_element(app.core.AnimatedModel,uix.compiler.attributes.interpret_props(({"key": key, "position": springs.position, "scale": scale__$1.scale, "rotation": [(3.14159 / (2)),(0),(0)], "onClick": (function (___$1){
var G__29273 = tileval;
var G__29273__$1 = (((G__29273 instanceof cljs.core.Keyword))?G__29273.fqn:null);
switch (G__29273__$1) {
case "freeze":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
case "remove":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-sauce","remove-sauce",-115978714),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
case "swap":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap-sauce","swap-sauce",-1262243351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
case "random":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-sauce","random-sauce",202790695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
default:
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

}
}), "val": tileval})),[]);
});
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__29272) : transition.call(null,G__29272));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29274 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29275 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29275);

try{if(((cljs.core.map_QMARK_(clj_props__28459__auto__)) || ((clj_props__28459__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28459__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28459__auto__) (clojure.core/nil? clj-props__28459__auto__))"].join('')));
}

return f__28460__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29274);
}} else {
return f__28460__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29302 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29302.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29302.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__28407__auto___29302.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__28407__auto___29302);
} else {
}
} else {
}
app.core.totalMoves = (function app$core$totalMoves(){
var f__28456__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29303 = app.core.totalMoves.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29303)){
var f__28398__auto___29304 = temp__5804__auto___29303;
(f__28398__auto___29304.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29304.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29304.call(null));
} else {
}
} else {
}

var movecount = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movecount","movecount",1972774776)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Moves: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(movecount)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29276 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29277 = app.core.totalMoves;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29277);

try{return f__28456__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29276);
}} else {
return f__28456__auto__();
}
});

(app.core.totalMoves.uix_component_QMARK_ = true);

(app.core.totalMoves.displayName = "app.core/totalMoves");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29305 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29305.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29305.cljs$core$IFn$_invoke$arity$4(app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null) : sig__28407__auto___29305.call(null,app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null));

window.uix.dev.register_BANG_(app.core.totalMoves,app.core.totalMoves.displayName);

(app.core.totalMoves.fast_refresh_signature = sig__28407__auto___29305);
} else {
}
} else {
}
app.core.score_board = (function app$core$score_board(){
var f__28456__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29306 = app.core.score_board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29306)){
var f__28398__auto___29307 = temp__5804__auto___29306;
(f__28398__auto___29307.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29307.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29307.call(null));
} else {
}
} else {
}

var score = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29278 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29279 = app.core.score_board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29279);

try{return f__28456__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29278);
}} else {
return f__28456__auto__();
}
});

(app.core.score_board.uix_component_QMARK_ = true);

(app.core.score_board.displayName = "app.core/score-board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29308 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29308.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29308.cljs$core$IFn$_invoke$arity$4(app.core.score_board,"(rfx/use-sub [:score])",null,null) : sig__28407__auto___29308.call(null,app.core.score_board,"(rfx/use-sub [:score])",null,null));

window.uix.dev.register_BANG_(app.core.score_board,app.core.score_board.displayName);

(app.core.score_board.fast_refresh_signature = sig__28407__auto___29308);
} else {
}
} else {
}
app.core.ui = (function app$core$ui(){
var f__28456__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29309 = app.core.ui.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29309)){
var f__28398__auto___29310 = temp__5804__auto___29309;
(f__28398__auto___29310.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29310.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29310.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"position": "absolute", "top": (0), "left": (0), "width": "100%", "height": "100%"})})),[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.StatusBar,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"margin-top": (10), "margin-left": (10), "margin-right": (10), "height": "20%"})})),[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"flex": (1), "flexDirection": "column", "justifyContent": "center", "alignItems": "center"})})),[uix.compiler.alpha.component_element(app.core.totalMoves,[null],[]),uix.compiler.alpha.component_element(app.core.score_board,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29280 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29281 = app.core.ui;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29281);

try{return f__28456__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29280);
}} else {
return f__28456__auto__();
}
});

(app.core.ui.uix_component_QMARK_ = true);

(app.core.ui.displayName = "app.core/ui");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29311 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29311.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29311.cljs$core$IFn$_invoke$arity$4(app.core.ui,"",null,null) : sig__28407__auto___29311.call(null,app.core.ui,"",null,null));

window.uix.dev.register_BANG_(app.core.ui,app.core.ui.displayName);

(app.core.ui.fast_refresh_signature = sig__28407__auto___29311);
} else {
}
} else {
}
app.core.reset_button = (function app$core$reset_button(){
var f__28456__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29312 = app.core.reset_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29312)){
var f__28398__auto___29313 = temp__5804__auto___29312;
(f__28398__auto___29313.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29313.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29313.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("mesh",[{'onClick':(function (_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}),'position':[(0),-3.5,(0)]}],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",uix.compiler.attributes.interpret_attrs(({"color": "#22aa22"}),["meshStandardMaterial",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29282 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29283 = app.core.reset_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29283);

try{return f__28456__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29282);
}} else {
return f__28456__auto__();
}
});

(app.core.reset_button.uix_component_QMARK_ = true);

(app.core.reset_button.displayName = "app.core/reset-button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29314 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29314.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29314.cljs$core$IFn$_invoke$arity$4(app.core.reset_button,"",null,null) : sig__28407__auto___29314.call(null,app.core.reset_button,"",null,null));

window.uix.dev.register_BANG_(app.core.reset_button,app.core.reset_button.displayName);

(app.core.reset_button.fast_refresh_signature = sig__28407__auto___29314);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__28456__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29315 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29315)){
var f__28398__auto___29316 = temp__5804__auto___29315;
(f__28398__auto___29316.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29316.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29316.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.flatten(board);
var iter__5523__auto__ = (function app$core$board_$_iter__29285(s__29286){
return (new cljs.core.LazySeq(null,(function (){
var s__29286__$1 = s__29286;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29286__$1);
if(temp__5804__auto__){
var s__29286__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29286__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29286__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29288 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29287 = (0);
while(true){
if((i__29287 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__29287);
cljs.core.chunk_append(b__29288,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__29317 = (i__29287 + (1));
i__29287 = G__29317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29288),app$core$board_$_iter__29285(cljs.core.chunk_rest(s__29286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29288),null);
}
} else {
var tileinfo = cljs.core.first(s__29286__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__29285(cljs.core.rest(s__29286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(tiles);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29289 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29290 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29290);

try{return f__28456__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29289);
}} else {
return f__28456__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29318 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29318.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29318.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__28407__auto___29318.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__28407__auto___29318);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__28456__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29319 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29319)){
var f__28398__auto___29320 = temp__5804__auto___29319;
(f__28398__auto___29320.cljs$core$IFn$_invoke$arity$0 ? f__28398__auto___29320.cljs$core$IFn$_invoke$arity$0() : f__28398__auto___29320.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",uix.compiler.attributes.interpret_attrs(({"intensity": (2)}),["ambientLight",null,null,false],false),[]),uix.compiler.aot._GT_el("pointLight",uix.compiler.attributes.interpret_attrs(({"position": [(0),(0),(12)], "intensity": (100)}),["pointLight",null,null,false],false),[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei$native.PerspectiveCamera,uix.compiler.attributes.interpret_props(({"makeDefault": true, "rotation": [(0),(0),(0)], "position": [(0),(0),(12)]})),[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react.Suspense,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(app.core.board,[null],[])]),uix.compiler.alpha.component_element(app.core.reset_button,[null],[])]),uix.compiler.alpha.component_element(app.core.ui,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29291 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29292 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29292);

try{return f__28456__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29291);
}} else {
return f__28456__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28407__auto___29321 = window.uix.dev.signature_BANG_();
(sig__28407__auto___29321.cljs$core$IFn$_invoke$arity$4 ? sig__28407__auto___29321.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__28407__auto___29321.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__28407__auto___29321);
} else {
}
} else {
}
app.core.init = (function app$core$init(){
refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return shadow.js.shim.module$expo.registerRootComponent(app.core.root);
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
