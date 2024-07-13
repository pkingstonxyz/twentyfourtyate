goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__35346(s__35347){
return (new cljs.core.LazySeq(null,(function (){
var s__35347__$1 = s__35347;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35347__$1);
if(temp__5804__auto__){
var s__35347__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35347__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35347__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35349 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35348 = (0);
while(true){
if((i__35348 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__35348);
cljs.core.chunk_append(b__35349,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__35348,i,c__5521__auto__,size__5522__auto__,b__35349,s__35347__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__35346_$_iter__35350(s__35351){
return (new cljs.core.LazySeq(null,((function (i__35348,i,c__5521__auto__,size__5522__auto__,b__35349,s__35347__$2,temp__5804__auto__){
return (function (){
var s__35351__$1 = s__35351;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35351__$1);
if(temp__5804__auto____$1){
var s__35351__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35351__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__35351__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__35353 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__35352 = (0);
while(true){
if((i__35352 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__35352);
cljs.core.chunk_append(b__35353,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__35450 = (i__35352 + (1));
i__35352 = G__35450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35353),app$core$init_board_$_iter__35346_$_iter__35350(cljs.core.chunk_rest(s__35351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35353),null);
}
} else {
var j = cljs.core.first(s__35351__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__35346_$_iter__35350(cljs.core.rest(s__35351__$2)));
}
} else {
return null;
}
break;
}
});})(i__35348,i,c__5521__auto__,size__5522__auto__,b__35349,s__35347__$2,temp__5804__auto__))
,null,null));
});})(i__35348,i,c__5521__auto__,size__5522__auto__,b__35349,s__35347__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__35451 = (i__35348 + (1));
i__35348 = G__35451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35349),app$core$init_board_$_iter__35346(cljs.core.chunk_rest(s__35347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35349),null);
}
} else {
var i = cljs.core.first(s__35347__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__35347__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__35346_$_iter__35354(s__35355){
return (new cljs.core.LazySeq(null,(function (){
var s__35355__$1 = s__35355;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35355__$1);
if(temp__5804__auto____$1){
var s__35355__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35355__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35355__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35357 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35356 = (0);
while(true){
if((i__35356 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__35356);
cljs.core.chunk_append(b__35357,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__35452 = (i__35356 + (1));
i__35356 = G__35452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35357),app$core$init_board_$_iter__35346_$_iter__35354(cljs.core.chunk_rest(s__35355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35357),null);
}
} else {
var j = cljs.core.first(s__35355__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__35346_$_iter__35354(cljs.core.rest(s__35355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__35347__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__35346(cljs.core.rest(s__35347__$2)));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"board","board",-1907017633),app.core.init_board(),new cljs.core.Keyword(null,"keynum","keynum",1580606196),(16),new cljs.core.Keyword(null,"movecount","movecount",1972774776),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),false,new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),(0),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),false,new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377),false,new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009),null], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null)], null)], null);
}));
app.core.tiles_by_probabilities = (function app$core$tiles_by_probabilities(probabilities){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__35358){
var vec__35359 = p__35358;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([probabilities], 0));
});
app.core.possible_tiles = app.core.tiles_by_probabilities(new cljs.core.PersistentArrayMap(null, 5, [(2),(90),(4),(7),new cljs.core.Keyword(null,"freeze","freeze",2043466309),(1),new cljs.core.Keyword(null,"remove","remove",-131428414),(1),new cljs.core.Keyword(null,"swap","swap",228675637),(1)], null));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35362_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__35362_SHARP_) === (0));
}),tile_list);
if(cljs.core.seq(empty_slots)){
var picked_tile = cljs.core.rand_nth(empty_slots);
var rowcoord = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(picked_tile);
var colcoord = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(picked_tile);
var newtileval = cljs.core.rand_nth(app.core.possible_tiles);
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),newtileval),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
} else {
return db;
}
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__35364){
var vec__35365 = p__35364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(0),null);
var map__35368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(1),null);
var map__35368__$1 = cljs.core.__destructure_map(map__35368);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35368__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__35369 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(1),null);
var vec__35372 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol], null));
var oldval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(fromtile);
var reposed_from = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fromtile,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),tocol),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),torow);
var newkeyfrom = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keynum","keynum",1580606196)) : db.call(null,new cljs.core.Keyword(null,"keynum","keynum",1580606196)));
var newdb = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol], null),reposed_from),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkeyfrom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
if(cljs.core.truth_(merged)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(newdb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),((2) * oldval)),new cljs.core.Keyword(null,"score","score",-1963588780),(function (p1__35363_SHARP_){
return (p1__35363_SHARP_ + ((2) * oldval));
}));
} else {
return newdb;
}
}));
app.core.update_frozen_db = (function app$core$update_frozen_db(db){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frozen?","frozen?",613726824).cljs$core$IFn$_invoke$arity$1(db))){
var should_be_frozen_after_QMARK_ = (new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601).cljs$core$IFn$_invoke$arity$1(db) > (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),should_be_frozen_after_QMARK_),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),cljs.core.dec);
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
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__35375,p__35376){
var map__35377 = p__35375;
var map__35377__$1 = cljs.core.__destructure_map(map__35377);
var cofx = map__35377__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35377__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35378 = p__35376;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
var slides = ((cljs.core.seq(moves))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (movedata){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),movedata], null)], null);
}),moves):cljs.core.PersistentVector.EMPTY);
var effects = app.core.add_tile_if_not_frozen(slides,new cljs.core.Keyword(null,"frozen?","frozen?",613726824).cljs$core$IFn$_invoke$arity$1(db));
var newdb = app.core.update_frozen_db(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"movecount","movecount",1972774776),cljs.core.inc));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),newdb,new cljs.core.Keyword(null,"fx","fx",-1237829572),effects], null);
}));
app.core.remove_tile = (function app$core$remove_tile(db,pos_x,pos_y){
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.Keyword(null,"keynum","keynum",1580606196),cljs.core.inc);
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"freeze","freeze",2043466309),(function (db,p__35381){
var vec__35382 = p__35381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(0),null);
var vec__35385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35385,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35385,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"frozen?","frozen?",613726824),true),new cljs.core.Keyword(null,"frozen-moves-left","frozen-moves-left",553526601),(2));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-sauce","remove-sauce",-115978714),(function (db,p__35388){
var vec__35389 = p__35388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35389,(0),null);
var vec__35392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35389,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),true);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap-sauce","swap-sauce",-1262243351),(function (db,p__35395){
var vec__35396 = p__35395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(0),null);
var vec__35399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(1),null);
return cljs.core.assoc_in(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),true);
}));
app.core.handle_swap = (function app$core$handle_swap(db,pos_x,pos_y){
var tile_1_coords = new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(tile_1_coords)){
var vec__35402 = tile_1_coords;
var t1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(0),null);
var t1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(1),null);
var tile_1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null));
var tile_2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null));
var moved_tile_1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),pos_y);
var moved_tile_2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile_2,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),t1x),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),t1y);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),t1y,t1x], null),moved_tile_2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),pos_y,pos_x], null),moved_tile_1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377)], null),false);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"tile-1-pos","tile-1-pos",780980009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null));
}
});
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__35405){
var vec__35406 = p__35405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35406,(0),null);
var vec__35409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35406,(1),null);
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35409,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35409,(1),null);
console.log(cljs.core.clj__GT_js(db));

var can_remove_QMARK_ = new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380).cljs$core$IFn$_invoke$arity$1(db);
var can_swap_QMARK_ = new cljs.core.Keyword(null,"can-swap?","can-swap?",1453228377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(can_remove_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.core.remove_tile(db,pos_x,pos_y),new cljs.core.Keyword(null,"can-remove?","can-remove?",-1082976380),false);
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
var vec__35412 = [clj_props__27041__auto__];
var map__35415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,(0),null);
var map__35415__$1 = cljs.core.__destructure_map(map__35415);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35453 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35453)){
var f__26980__auto___35454 = temp__5804__auto___35453;
(f__26980__auto___35454.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35454.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35454.call(null));
} else {
}
} else {
}

var vec__35416 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(1),null);
var vec__35419 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419,(1),null);
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
var _STAR_current_component_STAR__orig_val__35422 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35423 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35423);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35422);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35455 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35455.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35455.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___35455.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___35455);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__35424 = [clj_props__27041__auto__];
var map__35427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35424,(0),null);
var map__35427__$1 = cljs.core.__destructure_map(map__35427);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35427__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35427__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35456 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35456)){
var f__26980__auto___35457 = temp__5804__auto___35456;
(f__26980__auto___35457.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35457.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35457.call(null));
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
var G__35428 = (function (scale__$1,item){
return uix.compiler.alpha.component_element(shadow.js.shim.module$$react_spring$three.animated.mesh,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"position","position",-2011731912),springs.position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale__$1.scale,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (_){
var G__35429 = tileval;
var G__35429__$1 = (((G__35429 instanceof cljs.core.Keyword))?G__35429.fqn:null);
switch (G__35429__$1) {
case "freeze":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freeze","freeze",2043466309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
case "remove":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-sauce","remove-sauce",-115978714),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
case "swap":
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap-sauce","swap-sauce",-1262243351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

break;
default:
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)], null));

}
})], null)],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':(function (){var fexpr__35430 = cljs.core.PersistentHashMap.fromArrays([(0),(128),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"freeze","freeze",2043466309),(4),(512),(32),(256),(1024),(64),(2),new cljs.core.Keyword(null,"swap","swap",228675637),(16),(2048),(8)],["#ffffff","#709997","#ff0000","#ccccff","#cc6b3e","#967fad","#9cb36b","#6494aa","#c769b0","#89a990","#c86a6d","#0000ff","#b7a852","#000000","#e19c3d"]);
return (fexpr__35430.cljs$core$IFn$_invoke$arity$1 ? fexpr__35430.cljs$core$IFn$_invoke$arity$1(tileval) : fexpr__35430.call(null,tileval));
})()}],[])]);
});
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__35428) : transition.call(null,G__35428));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__35431 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35432 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35432);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35431);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35459 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35459.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35459.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__26989__auto___35459.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 1000, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___35459);
} else {
}
} else {
}
app.core.totalMoves = (function app$core$totalMoves(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35460 = app.core.totalMoves.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35460)){
var f__26980__auto___35461 = temp__5804__auto___35460;
(f__26980__auto___35461.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35461.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35461.call(null));
} else {
}
} else {
}

var movecount = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movecount","movecount",1972774776)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Moves: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(movecount)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__35433 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35434 = app.core.totalMoves;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35434);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35433);
}} else {
return f__27038__auto__();
}
});

(app.core.totalMoves.uix_component_QMARK_ = true);

(app.core.totalMoves.displayName = "app.core/totalMoves");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35462 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35462.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35462.cljs$core$IFn$_invoke$arity$4(app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null) : sig__26989__auto___35462.call(null,app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null));

window.uix.dev.register_BANG_(app.core.totalMoves,app.core.totalMoves.displayName);

(app.core.totalMoves.fast_refresh_signature = sig__26989__auto___35462);
} else {
}
} else {
}
app.core.score_board = (function app$core$score_board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35463 = app.core.score_board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35463)){
var f__26980__auto___35464 = temp__5804__auto___35463;
(f__26980__auto___35464.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35464.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35464.call(null));
} else {
}
} else {
}

var score = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__35435 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35436 = app.core.score_board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35436);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35435);
}} else {
return f__27038__auto__();
}
});

(app.core.score_board.uix_component_QMARK_ = true);

(app.core.score_board.displayName = "app.core/score-board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35465 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35465.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35465.cljs$core$IFn$_invoke$arity$4(app.core.score_board,"(rfx/use-sub [:score])",null,null) : sig__26989__auto___35465.call(null,app.core.score_board,"(rfx/use-sub [:score])",null,null));

window.uix.dev.register_BANG_(app.core.score_board,app.core.score_board.displayName);

(app.core.score_board.fast_refresh_signature = sig__26989__auto___35465);
} else {
}
} else {
}
app.core.ui = (function app$core$ui(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35466 = app.core.ui.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35466)){
var f__26980__auto___35467 = temp__5804__auto___35466;
(f__26980__auto___35467.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35467.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35467.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.StatusBar,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null)], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null)],[uix.compiler.alpha.component_element(app.core.totalMoves,[null],[]),uix.compiler.alpha.component_element(app.core.score_board,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__35437 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35438 = app.core.ui;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35438);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35437);
}} else {
return f__27038__auto__();
}
});

(app.core.ui.uix_component_QMARK_ = true);

(app.core.ui.displayName = "app.core/ui");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35468 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35468.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35468.cljs$core$IFn$_invoke$arity$4(app.core.ui,"",null,null) : sig__26989__auto___35468.call(null,app.core.ui,"",null,null));

window.uix.dev.register_BANG_(app.core.ui,app.core.ui.displayName);

(app.core.ui.fast_refresh_signature = sig__26989__auto___35468);
} else {
}
} else {
}
app.core.reset_button = (function app$core$reset_button(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35469 = app.core.reset_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35469)){
var f__26980__auto___35470 = temp__5804__auto___35469;
(f__26980__auto___35470.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35470.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35470.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("mesh",[{'onClick':(function (_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}),'position':[(0),-3.5,(0)]}],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"#22aa22"}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__35439 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35440 = app.core.reset_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35440);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35439);
}} else {
return f__27038__auto__();
}
});

(app.core.reset_button.uix_component_QMARK_ = true);

(app.core.reset_button.displayName = "app.core/reset-button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35471 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35471.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35471.cljs$core$IFn$_invoke$arity$4(app.core.reset_button,"",null,null) : sig__26989__auto___35471.call(null,app.core.reset_button,"",null,null));

window.uix.dev.register_BANG_(app.core.reset_button,app.core.reset_button.displayName);

(app.core.reset_button.fast_refresh_signature = sig__26989__auto___35471);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35472 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35472)){
var f__26980__auto___35473 = temp__5804__auto___35472;
(f__26980__auto___35473.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35473.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35473.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.flatten(board);
var iter__5523__auto__ = (function app$core$board_$_iter__35442(s__35443){
return (new cljs.core.LazySeq(null,(function (){
var s__35443__$1 = s__35443;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35443__$1);
if(temp__5804__auto__){
var s__35443__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35443__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35443__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35445 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35444 = (0);
while(true){
if((i__35444 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__35444);
cljs.core.chunk_append(b__35445,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__35474 = (i__35444 + (1));
i__35444 = G__35474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35445),app$core$board_$_iter__35442(cljs.core.chunk_rest(s__35443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35445),null);
}
} else {
var tileinfo = cljs.core.first(s__35443__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__35442(cljs.core.rest(s__35443__$2)));
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
var _STAR_current_component_STAR__orig_val__35446 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35447 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35447);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35446);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35475 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35475.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35475.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___35475.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___35475);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___35476 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___35476)){
var f__26980__auto___35477 = temp__5804__auto___35476;
(f__26980__auto___35477.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___35477.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___35477.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",[{'intensity':(3)}],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei$native.PerspectiveCamera,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),[(0),(0),(0)],new cljs.core.Keyword(null,"position","position",-2011731912),[(0),(0),(12)]], null)],[]),uix.compiler.alpha.component_element(app.core.board,[null],[]),uix.compiler.alpha.component_element(app.core.reset_button,[null],[])]),uix.compiler.alpha.component_element(app.core.ui,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__35448 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__35449 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__35449);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__35448);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___35478 = window.uix.dev.signature_BANG_();
(sig__26989__auto___35478.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___35478.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___35478.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___35478);
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
