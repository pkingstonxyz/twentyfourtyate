goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__33450(s__33451){
return (new cljs.core.LazySeq(null,(function (){
var s__33451__$1 = s__33451;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33451__$1);
if(temp__5804__auto__){
var s__33451__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33451__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33451__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33453 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33452 = (0);
while(true){
if((i__33452 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33452);
cljs.core.chunk_append(b__33453,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__33452,i,c__5521__auto__,size__5522__auto__,b__33453,s__33451__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__33450_$_iter__33454(s__33455){
return (new cljs.core.LazySeq(null,((function (i__33452,i,c__5521__auto__,size__5522__auto__,b__33453,s__33451__$2,temp__5804__auto__){
return (function (){
var s__33455__$1 = s__33455;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33455__$1);
if(temp__5804__auto____$1){
var s__33455__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33455__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__33455__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__33457 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__33456 = (0);
while(true){
if((i__33456 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__33456);
cljs.core.chunk_append(b__33457,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__33509 = (i__33456 + (1));
i__33456 = G__33509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33457),app$core$init_board_$_iter__33450_$_iter__33454(cljs.core.chunk_rest(s__33455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33457),null);
}
} else {
var j = cljs.core.first(s__33455__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__33450_$_iter__33454(cljs.core.rest(s__33455__$2)));
}
} else {
return null;
}
break;
}
});})(i__33452,i,c__5521__auto__,size__5522__auto__,b__33453,s__33451__$2,temp__5804__auto__))
,null,null));
});})(i__33452,i,c__5521__auto__,size__5522__auto__,b__33453,s__33451__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__33510 = (i__33452 + (1));
i__33452 = G__33510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33453),app$core$init_board_$_iter__33450(cljs.core.chunk_rest(s__33451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33453),null);
}
} else {
var i = cljs.core.first(s__33451__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__33451__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__33450_$_iter__33458(s__33459){
return (new cljs.core.LazySeq(null,(function (){
var s__33459__$1 = s__33459;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33459__$1);
if(temp__5804__auto____$1){
var s__33459__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33459__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33459__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33461 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33460 = (0);
while(true){
if((i__33460 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__33460);
cljs.core.chunk_append(b__33461,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__33511 = (i__33460 + (1));
i__33460 = G__33511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33461),app$core$init_board_$_iter__33450_$_iter__33458(cljs.core.chunk_rest(s__33459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33461),null);
}
} else {
var j = cljs.core.first(s__33459__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__33450_$_iter__33458(cljs.core.rest(s__33459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__33451__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__33450(cljs.core.rest(s__33451__$2)));
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),app.core.init_board(),new cljs.core.Keyword(null,"keynum","keynum",1580606196),(16)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33462_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__33462_SHARP_) === (0));
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__33463){
var vec__33464 = p__33463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(0),null);
var map__33467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(1),null);
var map__33467__$1 = cljs.core.__destructure_map(map__33467);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33467__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33467__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33467__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__33468 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33468,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33468,(1),null);
var vec__33471 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471,(1),null);
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
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__33474,p__33475){
var map__33476 = p__33474;
var map__33476__$1 = cljs.core.__destructure_map(map__33476);
var cofx = map__33476__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33476__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33477 = p__33475;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
var slides = ((cljs.core.seq(moves))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (movedata){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),movedata], null)], null);
}),moves):cljs.core.PersistentVector.EMPTY);
var effects = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(slides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),effects], null);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633),(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
}));
app.core.swipe_detector = (function app$core$swipe_detector(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__33480 = [clj_props__27041__auto__];
var map__33483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33480,(0),null);
var map__33483__$1 = cljs.core.__destructure_map(map__33483);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33512 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33512)){
var f__26980__auto___33513 = temp__5804__auto___33512;
(f__26980__auto___33513.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33513.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33513.call(null));
} else {
}
} else {
}

var vec__33484 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33484,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33484,(1),null);
var vec__33487 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(1),null);
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
var _STAR_current_component_STAR__orig_val__33490 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33491 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33491);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33490);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33514 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33514.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33514.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___33514.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___33514);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__33492 = [clj_props__27041__auto__];
var map__33495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33492,(0),null);
var map__33495__$1 = cljs.core.__destructure_map(map__33495);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33515 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33515)){
var f__26980__auto___33516 = temp__5804__auto___33515;
(f__26980__auto___33516.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33516.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33516.call(null));
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
var G__33496 = (function (scale__$1,item){
return uix.compiler.alpha.component_element(shadow.js.shim.module$$react_spring$three.animated.mesh,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"position","position",-2011731912),springs.position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale__$1.scale], null)],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':(function (){var fexpr__33497 = cljs.core.PersistentHashMap.fromArrays([(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#691e06","#de7033","#311e1d","#9e310d","#441e15","#1e1e24","#8f250c","#f18c55","#ad3c0e","#000000","#ca5310"]);
return (fexpr__33497.cljs$core$IFn$_invoke$arity$1 ? fexpr__33497.cljs$core$IFn$_invoke$arity$1(tileval) : fexpr__33497.call(null,tileval));
})()}],[])]);
});
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__33496) : transition.call(null,G__33496));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33498 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33499 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33499);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33498);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33517 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33517.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33517.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 600, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__26989__auto___33517.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 600, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___33517);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33518 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33518)){
var f__26980__auto___33519 = temp__5804__auto___33518;
(f__26980__auto___33519.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33519.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33519.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33500_SHARP_){
return (!((new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__33500_SHARP_) === (0))));
}),cljs.core.flatten(board));
var iter__5523__auto__ = (function app$core$board_$_iter__33501(s__33502){
return (new cljs.core.LazySeq(null,(function (){
var s__33502__$1 = s__33502;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33502__$1);
if(temp__5804__auto__){
var s__33502__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33502__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33502__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33504 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33503 = (0);
while(true){
if((i__33503 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__33503);
cljs.core.chunk_append(b__33504,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__33520 = (i__33503 + (1));
i__33503 = G__33520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33504),app$core$board_$_iter__33501(cljs.core.chunk_rest(s__33502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33504),null);
}
} else {
var tileinfo = cljs.core.first(s__33502__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__33501(cljs.core.rest(s__33502__$2)));
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
var _STAR_current_component_STAR__orig_val__33505 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33506 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33506);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33505);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33521 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33521.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33521.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___33521.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___33521);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33522 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33522)){
var f__26980__auto___33523 = temp__5804__auto___33522;
(f__26980__auto___33523.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___33523.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___33523.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",[{'intensity':1.57}],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei.PerspectiveCamera,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),[(0),(0),(0)],new cljs.core.Keyword(null,"position","position",-2011731912),[(0),(0),(12)]], null)],[]),uix.compiler.alpha.component_element(app.core.board,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33507 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33508 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33508);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33507);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___33524 = window.uix.dev.signature_BANG_();
(sig__26989__auto___33524.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___33524.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___33524.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___33524);
} else {
}
} else {
}
app.core.init = (function app$core$init(){
refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null));

refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null));

return shadow.js.shim.module$expo.registerRootComponent(app.core.root);
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
