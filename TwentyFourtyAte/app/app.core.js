goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__45092(s__45093){
return (new cljs.core.LazySeq(null,(function (){
var s__45093__$1 = s__45093;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45093__$1);
if(temp__5804__auto__){
var s__45093__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45093__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45093__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45095 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45094 = (0);
while(true){
if((i__45094 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__45094);
cljs.core.chunk_append(b__45095,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__45094,i,c__5521__auto__,size__5522__auto__,b__45095,s__45093__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__45092_$_iter__45096(s__45097){
return (new cljs.core.LazySeq(null,((function (i__45094,i,c__5521__auto__,size__5522__auto__,b__45095,s__45093__$2,temp__5804__auto__){
return (function (){
var s__45097__$1 = s__45097;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45097__$1);
if(temp__5804__auto____$1){
var s__45097__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45097__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__45097__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__45099 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__45098 = (0);
while(true){
if((i__45098 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__45098);
cljs.core.chunk_append(b__45099,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__45203 = (i__45098 + (1));
i__45098 = G__45203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45099),app$core$init_board_$_iter__45092_$_iter__45096(cljs.core.chunk_rest(s__45097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45099),null);
}
} else {
var j = cljs.core.first(s__45097__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__45092_$_iter__45096(cljs.core.rest(s__45097__$2)));
}
} else {
return null;
}
break;
}
});})(i__45094,i,c__5521__auto__,size__5522__auto__,b__45095,s__45093__$2,temp__5804__auto__))
,null,null));
});})(i__45094,i,c__5521__auto__,size__5522__auto__,b__45095,s__45093__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__45204 = (i__45094 + (1));
i__45094 = G__45204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45095),app$core$init_board_$_iter__45092(cljs.core.chunk_rest(s__45093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45095),null);
}
} else {
var i = cljs.core.first(s__45093__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__45093__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__45092_$_iter__45100(s__45101){
return (new cljs.core.LazySeq(null,(function (){
var s__45101__$1 = s__45101;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45101__$1);
if(temp__5804__auto____$1){
var s__45101__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45101__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45101__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45103 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45102 = (0);
while(true){
if((i__45102 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__45102);
cljs.core.chunk_append(b__45103,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__45205 = (i__45102 + (1));
i__45102 = G__45205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45103),app$core$init_board_$_iter__45092_$_iter__45100(cljs.core.chunk_rest(s__45101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45103),null);
}
} else {
var j = cljs.core.first(s__45101__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__45092_$_iter__45100(cljs.core.rest(s__45101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__45093__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__45092(cljs.core.rest(s__45093__$2)));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__45104){
var vec__45105 = p__45104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45105,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([probabilities], 0));
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45108_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__45108_SHARP_) === (0));
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__45110){
var vec__45111 = p__45110;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45111,(0),null);
var map__45114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45111,(1),null);
var map__45114__$1 = cljs.core.__destructure_map(map__45114);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__45115 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45115,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45115,(1),null);
var vec__45118 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45118,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45118,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol], null));
var oldval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(fromtile);
var reposed_from = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fromtile,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),tocol),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),torow);
var newkeyfrom = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keynum","keynum",1580606196)) : db.call(null,new cljs.core.Keyword(null,"keynum","keynum",1580606196)));
var newdb = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol], null),reposed_from),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkeyfrom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
if(cljs.core.truth_(merged)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(newdb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),((2) * oldval)),new cljs.core.Keyword(null,"score","score",-1963588780),(function (p1__45109_SHARP_){
return (p1__45109_SHARP_ + ((2) * oldval));
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
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__45121,p__45122){
var map__45123 = p__45121;
var map__45123__$1 = cljs.core.__destructure_map(map__45123);
var cofx = map__45123__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45124 = p__45122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(1),null);
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),(function (db,p__45127){
var vec__45128 = p__45127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128,(0),null);
var vec__45131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45128,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),true),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),(2));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-sauce","remove-sauce",-115978714),(function (db,p__45134){
var vec__45135 = p__45134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45135,(0),null);
var vec__45138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45135,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),true);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random-sauce","random-sauce",202790695),(function (db,p__45141){
var vec__45142 = p__45141;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(0),null);
var vec__45145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45145,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45145,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638),true),new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928),(5));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap-sauce","swap-sauce",-1262243351),(function (db,p__45148){
var vec__45149 = p__45148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(0),null);
var vec__45152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45152,(1),null);
return cljs.core.assoc_in(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),true);
}));
app.core.handle_swap = (function app$core$handle_swap(db,pos_x,pos_y){
var tile_1_coords = new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
if((!((tile_1_coords == null)))){
var vec__45155 = tile_1_coords;
var t1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45155,(0),null);
var t1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45155,(1),null);
var tile_1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null));
var tile_2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null));
var moved_tile_1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),pos_y);
var moved_tile_2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_2,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),t1x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),t1y);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null),moved_tile_2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null),moved_tile_1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),false);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null));
}
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__45158){
var vec__45159 = p__45158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45159,(0),null);
var vec__45162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45159,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(1),null);
var can_remove_QMARK_ = new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380).cljs$core$IFn$_invoke$arity$1(db);
var can_swap_QMARK_ = new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
var tileval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null));
console.log(cljs.core.clj__GT_js(tileval));

if(cljs.core.truth_(can_remove_QMARK_)){
var G__45165 = tileval;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__45165)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),G__45165)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),G__45165)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random","random",-557811113),G__45165)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap","swap",228675637),G__45165)){
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
app.core.swipe_detector = (function app$core$swipe_detector(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__45166 = [clj_props__27041__auto__];
var map__45169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45166,(0),null);
var map__45169__$1 = cljs.core.__destructure_map(map__45169);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45206 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45206)){
var f__26980__auto___45207 = temp__5804__auto___45206;
(f__26980__auto___45207.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45207.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45207.call(null));
} else {
}
} else {
}

var vec__45170 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45170,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45170,(1),null);
var vec__45173 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45173,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45173,(1),null);
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
var _STAR_current_component_STAR__orig_val__45176 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45177 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45177);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45176);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45208 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45208.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45208.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___45208.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___45208);
} else {
}
} else {
}
app.core.AnimatedModel = shadow.js.shim.module$$react_spring$three.animated(module$js$meshes.Model);
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__45178 = [clj_props__27041__auto__];
var map__45181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45178,(0),null);
var map__45181__$1 = cljs.core.__destructure_map(map__45181);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45209 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45209)){
var f__26980__auto___45210 = temp__5804__auto___45209;
(f__26980__auto___45210.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45210.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45210.call(null));
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
var G__45182 = (function (scale__$1,_){
return uix.compiler.alpha.component_element(app.core.AnimatedModel,uix.compiler.attributes.interpret_props(({"key": key, "position": springs.position, "scale": scale__$1.scale, "rotation": [(3.14159 / (2)),(0),(0)], "onClick": (function (___$1){
var G__45183 = tileval;
var G__45183__$1 = (((G__45183 instanceof cljs.core.Keyword))?G__45183.fqn:null);
switch (G__45183__$1) {
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
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__45182) : transition.call(null,G__45182));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__45184 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45185 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45185);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45184);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45212 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45212.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45212.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__26989__auto___45212.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___45212);
} else {
}
} else {
}
app.core.totalMoves = (function app$core$totalMoves(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45213 = app.core.totalMoves.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45213)){
var f__26980__auto___45214 = temp__5804__auto___45213;
(f__26980__auto___45214.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45214.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45214.call(null));
} else {
}
} else {
}

var movecount = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movecount","movecount",1972774776)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Moves: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(movecount)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__45186 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45187 = app.core.totalMoves;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45187);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45186);
}} else {
return f__27038__auto__();
}
});

(app.core.totalMoves.uix_component_QMARK_ = true);

(app.core.totalMoves.displayName = "app.core/totalMoves");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45215 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45215.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45215.cljs$core$IFn$_invoke$arity$4(app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null) : sig__26989__auto___45215.call(null,app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null));

window.uix.dev.register_BANG_(app.core.totalMoves,app.core.totalMoves.displayName);

(app.core.totalMoves.fast_refresh_signature = sig__26989__auto___45215);
} else {
}
} else {
}
app.core.score_board = (function app$core$score_board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45216 = app.core.score_board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45216)){
var f__26980__auto___45217 = temp__5804__auto___45216;
(f__26980__auto___45217.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45217.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45217.call(null));
} else {
}
} else {
}

var score = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__45188 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45189 = app.core.score_board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45189);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45188);
}} else {
return f__27038__auto__();
}
});

(app.core.score_board.uix_component_QMARK_ = true);

(app.core.score_board.displayName = "app.core/score-board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45218 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45218.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45218.cljs$core$IFn$_invoke$arity$4(app.core.score_board,"(rfx/use-sub [:score])",null,null) : sig__26989__auto___45218.call(null,app.core.score_board,"(rfx/use-sub [:score])",null,null));

window.uix.dev.register_BANG_(app.core.score_board,app.core.score_board.displayName);

(app.core.score_board.fast_refresh_signature = sig__26989__auto___45218);
} else {
}
} else {
}
app.core.ui = (function app$core$ui(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45219 = app.core.ui.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45219)){
var f__26980__auto___45220 = temp__5804__auto___45219;
(f__26980__auto___45220.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45220.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45220.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"position": "absolute", "top": (0), "left": (0), "width": "100%", "height": "100%"})})),[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.StatusBar,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"margin-top": (10), "margin-left": (10), "margin-right": (10), "height": "20%"})})),[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"flex": (1), "flexDirection": "column", "justifyContent": "center", "alignItems": "center"})})),[uix.compiler.alpha.component_element(app.core.totalMoves,[null],[]),uix.compiler.alpha.component_element(app.core.score_board,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__45190 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45191 = app.core.ui;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45191);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45190);
}} else {
return f__27038__auto__();
}
});

(app.core.ui.uix_component_QMARK_ = true);

(app.core.ui.displayName = "app.core/ui");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45221 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45221.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45221.cljs$core$IFn$_invoke$arity$4(app.core.ui,"",null,null) : sig__26989__auto___45221.call(null,app.core.ui,"",null,null));

window.uix.dev.register_BANG_(app.core.ui,app.core.ui.displayName);

(app.core.ui.fast_refresh_signature = sig__26989__auto___45221);
} else {
}
} else {
}
app.core.reset_button = (function app$core$reset_button(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45222 = app.core.reset_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45222)){
var f__26980__auto___45223 = temp__5804__auto___45222;
(f__26980__auto___45223.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45223.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45223.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("mesh",[{'onClick':(function (_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}),'position':[(0),-3.5,(0)]}],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",uix.compiler.attributes.interpret_attrs(({"color": "#22aa22"}),["meshStandardMaterial",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__45192 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45193 = app.core.reset_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45193);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45192);
}} else {
return f__27038__auto__();
}
});

(app.core.reset_button.uix_component_QMARK_ = true);

(app.core.reset_button.displayName = "app.core/reset-button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45224 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45224.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45224.cljs$core$IFn$_invoke$arity$4(app.core.reset_button,"",null,null) : sig__26989__auto___45224.call(null,app.core.reset_button,"",null,null));

window.uix.dev.register_BANG_(app.core.reset_button,app.core.reset_button.displayName);

(app.core.reset_button.fast_refresh_signature = sig__26989__auto___45224);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45225 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45225)){
var f__26980__auto___45226 = temp__5804__auto___45225;
(f__26980__auto___45226.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45226.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45226.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.flatten(board);
var iter__5523__auto__ = (function app$core$board_$_iter__45195(s__45196){
return (new cljs.core.LazySeq(null,(function (){
var s__45196__$1 = s__45196;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45196__$1);
if(temp__5804__auto__){
var s__45196__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45196__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45196__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45198 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45197 = (0);
while(true){
if((i__45197 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__45197);
cljs.core.chunk_append(b__45198,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__45227 = (i__45197 + (1));
i__45197 = G__45227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45198),app$core$board_$_iter__45195(cljs.core.chunk_rest(s__45196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45198),null);
}
} else {
var tileinfo = cljs.core.first(s__45196__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__45195(cljs.core.rest(s__45196__$2)));
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
var _STAR_current_component_STAR__orig_val__45199 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45200 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45200);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45199);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45228 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45228.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45228.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___45228.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___45228);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___45229 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___45229)){
var f__26980__auto___45230 = temp__5804__auto___45229;
(f__26980__auto___45230.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___45230.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___45230.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",uix.compiler.attributes.interpret_attrs(({"intensity": (2)}),["ambientLight",null,null,false],false),[]),uix.compiler.aot._GT_el("pointLight",uix.compiler.attributes.interpret_attrs(({"position": [(0),(0),(12)], "intensity": (100)}),["pointLight",null,null,false],false),[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei$native.PerspectiveCamera,uix.compiler.attributes.interpret_props(({"makeDefault": true, "rotation": [(0),(0),(0)], "position": [(0),(0),(12)]})),[]),uix.compiler.alpha.component_element(app.core.board,[null],[]),uix.compiler.alpha.component_element(app.core.reset_button,[null],[])]),uix.compiler.alpha.component_element(app.core.ui,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__45201 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__45202 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__45202);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__45201);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___45231 = window.uix.dev.signature_BANG_();
(sig__26989__auto___45231.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___45231.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___45231.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___45231);
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
