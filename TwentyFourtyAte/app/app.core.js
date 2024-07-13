goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__33173(s__33174){
return (new cljs.core.LazySeq(null,(function (){
var s__33174__$1 = s__33174;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33174__$1);
if(temp__5804__auto__){
var s__33174__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33174__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33174__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33176 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33175 = (0);
while(true){
if((i__33175 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33175);
cljs.core.chunk_append(b__33176,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__33175,i,c__5521__auto__,size__5522__auto__,b__33176,s__33174__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__33173_$_iter__33177(s__33178){
return (new cljs.core.LazySeq(null,((function (i__33175,i,c__5521__auto__,size__5522__auto__,b__33176,s__33174__$2,temp__5804__auto__){
return (function (){
var s__33178__$1 = s__33178;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33178__$1);
if(temp__5804__auto____$1){
var s__33178__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33178__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__33178__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__33180 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__33179 = (0);
while(true){
if((i__33179 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__33179);
cljs.core.chunk_append(b__33180,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__33243 = (i__33179 + (1));
i__33179 = G__33243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33180),app$core$init_board_$_iter__33173_$_iter__33177(cljs.core.chunk_rest(s__33178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33180),null);
}
} else {
var j = cljs.core.first(s__33178__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__33173_$_iter__33177(cljs.core.rest(s__33178__$2)));
}
} else {
return null;
}
break;
}
});})(i__33175,i,c__5521__auto__,size__5522__auto__,b__33176,s__33174__$2,temp__5804__auto__))
,null,null));
});})(i__33175,i,c__5521__auto__,size__5522__auto__,b__33176,s__33174__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__33244 = (i__33175 + (1));
i__33175 = G__33244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33176),app$core$init_board_$_iter__33173(cljs.core.chunk_rest(s__33174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33176),null);
}
} else {
var i = cljs.core.first(s__33174__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__33174__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__33173_$_iter__33181(s__33182){
return (new cljs.core.LazySeq(null,(function (){
var s__33182__$1 = s__33182;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33182__$1);
if(temp__5804__auto____$1){
var s__33182__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33182__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33182__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33184 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33183 = (0);
while(true){
if((i__33183 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__33183);
cljs.core.chunk_append(b__33184,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__33245 = (i__33183 + (1));
i__33183 = G__33245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33184),app$core$init_board_$_iter__33173_$_iter__33181(cljs.core.chunk_rest(s__33182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33184),null);
}
} else {
var j = cljs.core.first(s__33182__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__33173_$_iter__33181(cljs.core.rest(s__33182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__33174__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__33173(cljs.core.rest(s__33174__$2)));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),app.core.init_board(),new cljs.core.Keyword(null,"keynum","keynum",1580606196),(16),new cljs.core.Keyword(null,"movecount","movecount",1972774776),(0)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null)], null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33185_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__33185_SHARP_) === (0));
}),tile_list);
if(cljs.core.seq(empty_slots)){
var picked_tile = cljs.core.rand_nth(empty_slots);
var rowcoord = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(picked_tile);
var colcoord = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(picked_tile);
var newtileval = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(2),(2),(2),(2),(2),(2),(4)], null));
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),newtileval),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
} else {
return db;
}
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__33186){
var vec__33187 = p__33186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187,(0),null);
var map__33190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187,(1),null);
var map__33190__$1 = cljs.core.__destructure_map(map__33190);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33190__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33190__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33190__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__33191 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33191,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33191,(1),null);
var vec__33194 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol], null));
var oldval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(fromtile);
var reposed_from = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fromtile,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),tocol),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),torow);
var newkey = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keynum","keynum",1580606196)) : db.call(null,new cljs.core.Keyword(null,"keynum","keynum",1580606196)));
var newdb = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol], null),reposed_from),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
if(cljs.core.truth_(merged)){
return cljs.core.assoc_in(newdb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),((2) * oldval));
} else {
return newdb;
}
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__33197,p__33198){
var map__33199 = p__33197;
var map__33199__$1 = cljs.core.__destructure_map(map__33199);
var cofx = map__33199__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33200 = p__33198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33200,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33200,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
var slides = ((cljs.core.seq(moves))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (movedata){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),movedata], null)], null);
}),moves):cljs.core.PersistentVector.EMPTY);
var effects = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(slides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"movecount","movecount",1972774776),cljs.core.inc),new cljs.core.Keyword(null,"fx","fx",-1237829572),effects], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inctime","inctime",1374933206),(function (db,p__33204){
var vec__33205 = p__33204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(0),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"gametime","gametime",882955201),(function (p1__33203_SHARP_){
return (delta + p1__33203_SHARP_);
}));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633),(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"movecount","movecount",1972774776),(function (db,_){
return new cljs.core.Keyword(null,"movecount","movecount",1972774776).cljs$core$IFn$_invoke$arity$1(db);
}));
app.core.swipe_detector = (function app$core$swipe_detector(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__33208 = [clj_props__27041__auto__];
var map__33211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33208,(0),null);
var map__33211__$1 = cljs.core.__destructure_map(map__33211);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33246 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33246)){
var f__26980__auto___33247 = temp__5804__auto___33246;
(f__26980__auto___33247.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33247.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33247.call(null));
} else {
}
} else {
}

var vec__33212 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33212,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33212,(1),null);
var vec__33215 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
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
var _STAR_current_component_STAR__orig_val__33218 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33219 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33219);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33218);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33248 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33248.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33248.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___33248.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___33248);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__33220 = [clj_props__27041__auto__];
var map__33223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33220,(0),null);
var map__33223__$1 = cljs.core.__destructure_map(map__33223);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33223__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33223__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33249 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33249)){
var f__26980__auto___33250 = temp__5804__auto___33249;
(f__26980__auto___33250.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33250.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33250.call(null));
} else {
}
} else {
}

var scale = 1.2;
var pos_x = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo);
var pos_y = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo);
var tileval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo);
var springs = shadow.js.shim.module$$react_spring$three.useSpring(({"position": [(scale * ((new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo) - (0)) - 1.5)),(scale * (((3) - new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo)) - 1.5)),(0)], "config": ({"mass": (1), "tension": (600), "friction": (30)})}));
var transition = shadow.js.shim.module$$react_spring$three.useTransition(new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo),({"from": ({"scale": 0.5}), "enter": ({"scale": (1)}), "leave": ({"scale": (0)}), "config": ({"mass": (1), "tension": (600), "friction": (30)})}));
var G__33224 = (function (scale__$1,item){
return uix.compiler.alpha.component_element(shadow.js.shim.module$$react_spring$three.animated.mesh,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"position","position",-2011731912),springs.position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale__$1.scale], null)],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':(function (){var fexpr__33225 = cljs.core.PersistentHashMap.fromArrays([(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#709997","#cc6b3e","#967fad","#9cb36b","#6494aa","#c769b0","#89a990","#c86a6d","#b7a852","#000000","#e19c3d"]);
return (fexpr__33225.cljs$core$IFn$_invoke$arity$1 ? fexpr__33225.cljs$core$IFn$_invoke$arity$1(tileval) : fexpr__33225.call(null,tileval));
})()}],[])]);
});
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__33224) : transition.call(null,G__33224));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33226 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33227 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33227);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33226);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33251 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33251.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33251.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 600, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__26989__auto___33251.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 600, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___33251);
} else {
}
} else {
}
app.core.totalMoves = (function app$core$totalMoves(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33252 = app.core.totalMoves.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33252)){
var f__26980__auto___33253 = temp__5804__auto___33252;
(f__26980__auto___33253.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33253.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33253.call(null));
} else {
}
} else {
}

var movecount = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movecount","movecount",1972774776)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Moves: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(movecount)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33228 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33229 = app.core.totalMoves;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33229);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33228);
}} else {
return f__27038__auto__();
}
});

(app.core.totalMoves.uix_component_QMARK_ = true);

(app.core.totalMoves.displayName = "app.core/totalMoves");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33254 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33254.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33254.cljs$core$IFn$_invoke$arity$4(app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null) : sig__26989__auto___33254.call(null,app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null));

window.uix.dev.register_BANG_(app.core.totalMoves,app.core.totalMoves.displayName);

(app.core.totalMoves.fast_refresh_signature = sig__26989__auto___33254);
} else {
}
} else {
}
app.core.ui = (function app$core$ui(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33255 = app.core.ui.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33255)){
var f__26980__auto___33256 = temp__5804__auto___33255;
(f__26980__auto___33256.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33256.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33256.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.StatusBar,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null)], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null)],[uix.compiler.alpha.component_element(app.core.totalMoves,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33230 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33231 = app.core.ui;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33231);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33230);
}} else {
return f__27038__auto__();
}
});

(app.core.ui.uix_component_QMARK_ = true);

(app.core.ui.displayName = "app.core/ui");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33257 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33257.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33257.cljs$core$IFn$_invoke$arity$4(app.core.ui,"",null,null) : sig__26989__auto___33257.call(null,app.core.ui,"",null,null));

window.uix.dev.register_BANG_(app.core.ui,app.core.ui.displayName);

(app.core.ui.fast_refresh_signature = sig__26989__auto___33257);
} else {
}
} else {
}
app.core.reset_button = (function app$core$reset_button(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33258 = app.core.reset_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33258)){
var f__26980__auto___33259 = temp__5804__auto___33258;
(f__26980__auto___33259.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33259.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33259.call(null));
} else {
}
} else {
}



uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"#22aa22"}],[]);

uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"#22aa22"}],[]);

return uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"#22aa22"}],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33232 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33233 = app.core.reset_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33233);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33232);
}} else {
return f__27038__auto__();
}
});

(app.core.reset_button.uix_component_QMARK_ = true);

(app.core.reset_button.displayName = "app.core/reset-button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33260 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33260.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33260.cljs$core$IFn$_invoke$arity$4(app.core.reset_button,"",null,null) : sig__26989__auto___33260.call(null,app.core.reset_button,"",null,null));

window.uix.dev.register_BANG_(app.core.reset_button,app.core.reset_button.displayName);

(app.core.reset_button.fast_refresh_signature = sig__26989__auto___33260);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33261 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33261)){
var f__26980__auto___33262 = temp__5804__auto___33261;
(f__26980__auto___33262.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33262.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33262.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33234_SHARP_){
return (!((new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__33234_SHARP_) === (0))));
}),cljs.core.flatten(board));
var iter__5523__auto__ = (function app$core$board_$_iter__33235(s__33236){
return (new cljs.core.LazySeq(null,(function (){
var s__33236__$1 = s__33236;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33236__$1);
if(temp__5804__auto__){
var s__33236__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33236__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33236__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33238 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33237 = (0);
while(true){
if((i__33237 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__33237);
cljs.core.chunk_append(b__33238,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__33263 = (i__33237 + (1));
i__33237 = G__33263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33238),app$core$board_$_iter__33235(cljs.core.chunk_rest(s__33236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33238),null);
}
} else {
var tileinfo = cljs.core.first(s__33236__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__33235(cljs.core.rest(s__33236__$2)));
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
var _STAR_current_component_STAR__orig_val__33239 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33240 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33240);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33239);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33264 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33264.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33264.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___33264.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___33264);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33265 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33265)){
var f__26980__auto___33266 = temp__5804__auto___33265;
(f__26980__auto___33266.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33266.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33266.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",[{'intensity':(3)}],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei$native.PerspectiveCamera,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),[(0),(0),(0)],new cljs.core.Keyword(null,"position","position",-2011731912),[(0),(0),(12)]], null)],[]),uix.compiler.alpha.component_element(app.core.board,[null],[]),uix.compiler.alpha.component_element(app.core.reset_button,[null],[])]),uix.compiler.alpha.component_element(app.core.ui,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33241 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33242 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33242);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33241);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33267 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33267.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33267.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___33267.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___33267);
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
