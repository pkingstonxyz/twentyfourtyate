goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__31410(s__31411){
return (new cljs.core.LazySeq(null,(function (){
var s__31411__$1 = s__31411;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31411__$1);
if(temp__5804__auto__){
var s__31411__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31411__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31411__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31413 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31412 = (0);
while(true){
if((i__31412 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__31412);
cljs.core.chunk_append(b__31413,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__31412,i,c__5521__auto__,size__5522__auto__,b__31413,s__31411__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__31410_$_iter__31414(s__31415){
return (new cljs.core.LazySeq(null,((function (i__31412,i,c__5521__auto__,size__5522__auto__,b__31413,s__31411__$2,temp__5804__auto__){
return (function (){
var s__31415__$1 = s__31415;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31415__$1);
if(temp__5804__auto____$1){
var s__31415__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31415__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__31415__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__31417 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__31416 = (0);
while(true){
if((i__31416 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__31416);
cljs.core.chunk_append(b__31417,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__31522 = (i__31416 + (1));
i__31416 = G__31522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31417),app$core$init_board_$_iter__31410_$_iter__31414(cljs.core.chunk_rest(s__31415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31417),null);
}
} else {
var j = cljs.core.first(s__31415__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__31410_$_iter__31414(cljs.core.rest(s__31415__$2)));
}
} else {
return null;
}
break;
}
});})(i__31412,i,c__5521__auto__,size__5522__auto__,b__31413,s__31411__$2,temp__5804__auto__))
,null,null));
});})(i__31412,i,c__5521__auto__,size__5522__auto__,b__31413,s__31411__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__31523 = (i__31412 + (1));
i__31412 = G__31523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31413),app$core$init_board_$_iter__31410(cljs.core.chunk_rest(s__31411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31413),null);
}
} else {
var i = cljs.core.first(s__31411__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__31411__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__31410_$_iter__31418(s__31419){
return (new cljs.core.LazySeq(null,(function (){
var s__31419__$1 = s__31419;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31419__$1);
if(temp__5804__auto____$1){
var s__31419__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31419__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31419__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31421 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31420 = (0);
while(true){
if((i__31420 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__31420);
cljs.core.chunk_append(b__31421,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__31524 = (i__31420 + (1));
i__31420 = G__31524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31421),app$core$init_board_$_iter__31410_$_iter__31418(cljs.core.chunk_rest(s__31419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31421),null);
}
} else {
var j = cljs.core.first(s__31419__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__31410_$_iter__31418(cljs.core.rest(s__31419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__31411__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__31410(cljs.core.rest(s__31411__$2)));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),new cljs.core.Keyword(null,"fixed-probabilities","fixed-probabilities",1465457166),new cljs.core.Keyword(null,"base-probabilities","base-probabilities",507396627),new cljs.core.Keyword(null,"keynum","keynum",1580606196),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"movecount","movecount",1972774776),new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638),new cljs.core.Keyword(null,"board","board",-1907017633)],[(0),false,false,(0),new cljs.core.PersistentArrayMap(null, 1, [(2),(1)], null),new cljs.core.PersistentArrayMap(null, 6, [(2),(90),(4),(6),new cljs.core.Keyword(null,"freeze","freeze",2043466309),(1),new cljs.core.Keyword(null,"remove","remove",-131428414),(1),new cljs.core.Keyword(null,"swap","swap",228675637),(1),new cljs.core.Keyword(null,"random","random",-557811113),(1)], null),(16),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377),false,new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009),null], null),(0),false,app.core.init_board()]),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null)], null)], null);
}));
app.core.tiles_by_probabilities = (function app$core$tiles_by_probabilities(probabilities){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__31422){
var vec__31423 = p__31422;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([probabilities], 0));
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31426_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__31426_SHARP_) === (0));
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__31428){
var vec__31429 = p__31428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31429,(0),null);
var map__31432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31429,(1),null);
var map__31432__$1 = cljs.core.__destructure_map(map__31432);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__31433 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31433,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31433,(1),null);
var vec__31436 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31436,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31436,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol], null));
var oldval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(fromtile);
var reposed_from = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fromtile,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),tocol),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),torow);
var newkeyfrom = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keynum","keynum",1580606196)) : db.call(null,new cljs.core.Keyword(null,"keynum","keynum",1580606196)));
var newdb = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol], null),reposed_from),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkeyfrom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
if(cljs.core.truth_(merged)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(newdb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),((2) * oldval)),new cljs.core.Keyword(null,"score","score",-1963588780),(function (p1__31427_SHARP_){
return (p1__31427_SHARP_ + ((2) * oldval));
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
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__31439,p__31440){
var map__31441 = p__31439;
var map__31441__$1 = cljs.core.__destructure_map(map__31441);
var cofx = map__31441__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31441__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31442 = p__31440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31442,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31442,(1),null);
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),(function (db,p__31445){
var vec__31446 = p__31445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(0),null);
var vec__31449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),true),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),(2));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-sauce","remove-sauce",-115978714),(function (db,p__31452){
var vec__31453 = p__31452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31453,(0),null);
var vec__31456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31453,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),true);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random-sauce","random-sauce",202790695),(function (db,p__31459){
var vec__31460 = p__31459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31460,(0),null);
var vec__31463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31460,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31463,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31463,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"fixed-randomness?","fixed-randomness?",-1139629638),true),new cljs.core.Keyword(null,"fixed-random-moves-left","fixed-random-moves-left",-58540928),(5));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap-sauce","swap-sauce",-1262243351),(function (db,p__31466){
var vec__31467 = p__31466;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31467,(0),null);
var vec__31470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31467,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31470,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31470,(1),null);
return cljs.core.assoc_in(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),true);
}));
app.core.handle_swap = (function app$core$handle_swap(db,pos_x,pos_y){
var tile_1_coords = new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
if((!((tile_1_coords == null)))){
var vec__31473 = tile_1_coords;
var t1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31473,(0),null);
var t1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31473,(1),null);
var tile_1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null));
var tile_2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null));
var moved_tile_1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),pos_y);
var moved_tile_2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_2,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),t1x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),t1y);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null),moved_tile_2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null),moved_tile_1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),false);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null));
}
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__31476){
var vec__31477 = p__31476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31477,(0),null);
var vec__31480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31477,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31480,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31480,(1),null);
var can_remove_QMARK_ = new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380).cljs$core$IFn$_invoke$arity$1(db);
var can_swap_QMARK_ = new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
var tileval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null));
console.log(cljs.core.clj__GT_js(tileval));

if(cljs.core.truth_(can_remove_QMARK_)){
var G__31483 = tileval;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__31483)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),G__31483)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),G__31483)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random","random",-557811113),G__31483)){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap","swap",228675637),G__31483)){
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
var vec__31484 = [clj_props__27041__auto__];
var map__31487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31484,(0),null);
var map__31487__$1 = cljs.core.__destructure_map(map__31487);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31525 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31525)){
var f__26980__auto___31526 = temp__5804__auto___31525;
(f__26980__auto___31526.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31526.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31526.call(null));
} else {
}
} else {
}

var vec__31488 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31488,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31488,(1),null);
var vec__31491 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31491,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31491,(1),null);
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
var _STAR_current_component_STAR__orig_val__31494 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31495 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31495);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31494);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31527 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31527.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31527.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___31527.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___31527);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__31496 = [clj_props__27041__auto__];
var map__31499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31496,(0),null);
var map__31499__$1 = cljs.core.__destructure_map(map__31499);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31528 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31528)){
var f__26980__auto___31529 = temp__5804__auto___31528;
(f__26980__auto___31529.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31529.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31529.call(null));
} else {
}
} else {
}

var scale = 1.2;
var pos_x = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo);
var pos_y = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo);
var tileval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo);
var springs = shadow.js.shim.module$$react_spring$three.useSpring(({"position": [(scale * ((new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo) - (0)) - 1.5)),(scale * (((3) - new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo)) - 1.5)),(0)], "config": ({"mass": (1), "tension": (1000), "friction": (30)})}));
var transition = shadow.js.shim.module$$react_spring$three.useTransition(new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo),({"from": ({"scale": 0.5}), "enter": ({"scale": (1)}), "leave": ({"scale": (0)}), "config": ({"mass": (1), "tension": (600), "friction": (30)})}));
var G__31500 = (function (scale__$1,item){
return uix.compiler.alpha.component_element(shadow.js.shim.module$$react_spring$three.animated.mesh,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"position","position",-2011731912),springs.position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale__$1.scale,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (_){
var G__31501 = tileval;
var G__31501__$1 = (((G__31501 instanceof cljs.core.Keyword))?G__31501.fqn:null);
switch (G__31501__$1) {
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
})], null)],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':(function (){var fexpr__31502 = cljs.core.PersistentHashMap.fromArrays([(0),(128),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"freeze","freeze",2043466309),(4),(512),(32),(256),(1024),(64),(2),new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"random","random",-557811113),(16),(2048),(8)],["#ffffff","#709997","#ff0000","#0000ff","#cc6b3e","#967fad","#9cb36b","#6494aa","#c769b0","#89a990","#c86a6d","#ffff00","#00ff00","#b7a852","#000000","#e19c3d"]);
return (fexpr__31502.cljs$core$IFn$_invoke$arity$1 ? fexpr__31502.cljs$core$IFn$_invoke$arity$1(tileval) : fexpr__31502.call(null,tileval));
})()}],[])]);
});
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__31500) : transition.call(null,G__31500));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__31503 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31504 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31504);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31503);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31531 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31531.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31531.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__26989__auto___31531.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___31531);
} else {
}
} else {
}
app.core.totalMoves = (function app$core$totalMoves(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31532 = app.core.totalMoves.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31532)){
var f__26980__auto___31533 = temp__5804__auto___31532;
(f__26980__auto___31533.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31533.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31533.call(null));
} else {
}
} else {
}

var movecount = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movecount","movecount",1972774776)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Moves: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(movecount)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__31505 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31506 = app.core.totalMoves;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31506);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31505);
}} else {
return f__27038__auto__();
}
});

(app.core.totalMoves.uix_component_QMARK_ = true);

(app.core.totalMoves.displayName = "app.core/totalMoves");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31534 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31534.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31534.cljs$core$IFn$_invoke$arity$4(app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null) : sig__26989__auto___31534.call(null,app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null));

window.uix.dev.register_BANG_(app.core.totalMoves,app.core.totalMoves.displayName);

(app.core.totalMoves.fast_refresh_signature = sig__26989__auto___31534);
} else {
}
} else {
}
app.core.score_board = (function app$core$score_board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31535 = app.core.score_board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31535)){
var f__26980__auto___31536 = temp__5804__auto___31535;
(f__26980__auto___31536.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31536.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31536.call(null));
} else {
}
} else {
}

var score = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__31507 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31508 = app.core.score_board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31508);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31507);
}} else {
return f__27038__auto__();
}
});

(app.core.score_board.uix_component_QMARK_ = true);

(app.core.score_board.displayName = "app.core/score-board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31537 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31537.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31537.cljs$core$IFn$_invoke$arity$4(app.core.score_board,"(rfx/use-sub [:score])",null,null) : sig__26989__auto___31537.call(null,app.core.score_board,"(rfx/use-sub [:score])",null,null));

window.uix.dev.register_BANG_(app.core.score_board,app.core.score_board.displayName);

(app.core.score_board.fast_refresh_signature = sig__26989__auto___31537);
} else {
}
} else {
}
app.core.ui = (function app$core$ui(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31538 = app.core.ui.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31538)){
var f__26980__auto___31539 = temp__5804__auto___31538;
(f__26980__auto___31539.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31539.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31539.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"position": "absolute", "top": (0), "left": (0), "width": "100%", "height": "100%"})})),[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.StatusBar,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"margin-top": (10), "margin-left": (10), "margin-right": (10), "height": "20%"})})),[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,uix.compiler.attributes.interpret_props(({"style": ({"flex": (1), "flexDirection": "column", "justifyContent": "center", "alignItems": "center"})})),[uix.compiler.alpha.component_element(app.core.totalMoves,[null],[]),uix.compiler.alpha.component_element(app.core.score_board,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__31509 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31510 = app.core.ui;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31510);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31509);
}} else {
return f__27038__auto__();
}
});

(app.core.ui.uix_component_QMARK_ = true);

(app.core.ui.displayName = "app.core/ui");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31540 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31540.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31540.cljs$core$IFn$_invoke$arity$4(app.core.ui,"",null,null) : sig__26989__auto___31540.call(null,app.core.ui,"",null,null));

window.uix.dev.register_BANG_(app.core.ui,app.core.ui.displayName);

(app.core.ui.fast_refresh_signature = sig__26989__auto___31540);
} else {
}
} else {
}
app.core.reset_button = (function app$core$reset_button(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31541 = app.core.reset_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31541)){
var f__26980__auto___31542 = temp__5804__auto___31541;
(f__26980__auto___31542.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31542.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31542.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("mesh",[{'onClick':(function (_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}),'position':[(0),-3.5,(0)]}],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",uix.compiler.attributes.interpret_attrs(({"color": "#22aa22"}),["meshStandardMaterial",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__31511 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31512 = app.core.reset_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31512);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31511);
}} else {
return f__27038__auto__();
}
});

(app.core.reset_button.uix_component_QMARK_ = true);

(app.core.reset_button.displayName = "app.core/reset-button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31543 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31543.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31543.cljs$core$IFn$_invoke$arity$4(app.core.reset_button,"",null,null) : sig__26989__auto___31543.call(null,app.core.reset_button,"",null,null));

window.uix.dev.register_BANG_(app.core.reset_button,app.core.reset_button.displayName);

(app.core.reset_button.fast_refresh_signature = sig__26989__auto___31543);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31544 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31544)){
var f__26980__auto___31545 = temp__5804__auto___31544;
(f__26980__auto___31545.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31545.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31545.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.flatten(board);
var iter__5523__auto__ = (function app$core$board_$_iter__31514(s__31515){
return (new cljs.core.LazySeq(null,(function (){
var s__31515__$1 = s__31515;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31515__$1);
if(temp__5804__auto__){
var s__31515__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31515__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31515__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31517 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31516 = (0);
while(true){
if((i__31516 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__31516);
cljs.core.chunk_append(b__31517,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__31546 = (i__31516 + (1));
i__31516 = G__31546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31517),app$core$board_$_iter__31514(cljs.core.chunk_rest(s__31515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31517),null);
}
} else {
var tileinfo = cljs.core.first(s__31515__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__31514(cljs.core.rest(s__31515__$2)));
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
var _STAR_current_component_STAR__orig_val__31518 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31519 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31519);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31518);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31547 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31547.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31547.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___31547.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___31547);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___31548 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___31548)){
var f__26980__auto___31549 = temp__5804__auto___31548;
(f__26980__auto___31549.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___31549.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___31549.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",uix.compiler.attributes.interpret_attrs(({"intensity": (3)}),["ambientLight",null,null,false],false),[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei$native.PerspectiveCamera,uix.compiler.attributes.interpret_props(({"makeDefault": true, "rotation": [(0),(0),(0)], "position": [(0),(0),(12)]})),[]),uix.compiler.alpha.component_element(app.core.board,[null],[]),uix.compiler.alpha.component_element(app.core.reset_button,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react.Suspense,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(module$js$meshes.Model,uix.compiler.attributes.interpret_props(({"position": [(1),(1),(1)], "rotation": [(3.1415 / (2)),(0),(0)]})),[])])]),uix.compiler.alpha.component_element(app.core.ui,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__31520 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__31521 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__31521);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__31520);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___31550 = window.uix.dev.signature_BANG_();
(sig__26989__auto___31550.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___31550.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___31550.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___31550);
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
