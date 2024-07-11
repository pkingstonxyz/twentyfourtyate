goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__36607(s__36608){
return (new cljs.core.LazySeq(null,(function (){
var s__36608__$1 = s__36608;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36608__$1);
if(temp__5804__auto__){
var s__36608__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36608__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36608__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36610 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36609 = (0);
while(true){
if((i__36609 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__36609);
cljs.core.chunk_append(b__36610,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__36609,i,c__5521__auto__,size__5522__auto__,b__36610,s__36608__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__36607_$_iter__36611(s__36612){
return (new cljs.core.LazySeq(null,((function (i__36609,i,c__5521__auto__,size__5522__auto__,b__36610,s__36608__$2,temp__5804__auto__){
return (function (){
var s__36612__$1 = s__36612;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36612__$1);
if(temp__5804__auto____$1){
var s__36612__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36612__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__36612__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__36614 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__36613 = (0);
while(true){
if((i__36613 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__36613);
cljs.core.chunk_append(b__36614,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__36653 = (i__36613 + (1));
i__36613 = G__36653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36614),app$core$init_board_$_iter__36607_$_iter__36611(cljs.core.chunk_rest(s__36612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36614),null);
}
} else {
var j = cljs.core.first(s__36612__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__36607_$_iter__36611(cljs.core.rest(s__36612__$2)));
}
} else {
return null;
}
break;
}
});})(i__36609,i,c__5521__auto__,size__5522__auto__,b__36610,s__36608__$2,temp__5804__auto__))
,null,null));
});})(i__36609,i,c__5521__auto__,size__5522__auto__,b__36610,s__36608__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__36654 = (i__36609 + (1));
i__36609 = G__36654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36610),app$core$init_board_$_iter__36607(cljs.core.chunk_rest(s__36608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36610),null);
}
} else {
var i = cljs.core.first(s__36608__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__36608__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__36607_$_iter__36615(s__36616){
return (new cljs.core.LazySeq(null,(function (){
var s__36616__$1 = s__36616;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36616__$1);
if(temp__5804__auto____$1){
var s__36616__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36616__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36616__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36618 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36617 = (0);
while(true){
if((i__36617 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__36617);
cljs.core.chunk_append(b__36618,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__36655 = (i__36617 + (1));
i__36617 = G__36655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36618),app$core$init_board_$_iter__36607_$_iter__36615(cljs.core.chunk_rest(s__36616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36618),null);
}
} else {
var j = cljs.core.first(s__36616__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__36607_$_iter__36615(cljs.core.rest(s__36616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__36608__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__36607(cljs.core.rest(s__36608__$2)));
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
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36619_SHARP_){
return (new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(p1__36619_SHARP_) === (0));
}),tile_list);
if(cljs.core.seq(empty_slots)){
var picked_tile = cljs.core.rand_nth(empty_slots);
var rowcoord = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(picked_tile);
var colcoord = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(picked_tile);
var newval = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(2),(2),(2),(2),(2),(2),(4)], null));
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
console.log("x: ",colcoord,", y: ",rowcoord);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"val","val",128701612)], null),newval),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"key","key",-1516042587)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
} else {
return db;
}
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__36620,p__36621){
var map__36622 = p__36620;
var map__36622__$1 = cljs.core.__destructure_map(map__36622);
var cofx = map__36622__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36623 = p__36621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36623,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36623,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null)], null)], null);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633),(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"animation-controller","animation-controller",9304032),(function (db,p__36626){
var vec__36627 = p__36626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-controllers","animation-controllers",171287909),idx], null));
}));
app.core.cube = (function app$core$cube(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__36630 = [clj_props__27041__auto__];
var map__36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36630,(0),null);
var map__36633__$1 = cljs.core.__destructure_map(map__36633);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36633__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___36656 = app.core.cube.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___36656)){
var f__26980__auto___36657 = temp__5804__auto___36656;
(f__26980__auto___36657.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___36657.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___36657.call(null));
} else {
}
} else {
}

var api = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-controller","animation-controller",9304032),idx], null));
var spring = shadow.js.shim.module$$react_spring$native.useSpring(({"ref": api, "x": (0)}));
return uix.compiler.aot._GT_el("mesh",[{'positionX':uix.compiler.attributes.keyword__GT_string(spring)}],[uix.compiler.aot._GT_el("boxGeometry",[{'args':[(1),(1),(1)]}],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"orange"}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__36634 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__36635 = app.core.cube;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__36635);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__36634);
}} else {
return f__27042__auto__();
}
});

(app.core.cube.uix_component_QMARK_ = true);

(app.core.cube.displayName = "app.core/cube");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___36658 = window.uix.dev.signature_BANG_();
(sig__26989__auto___36658.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___36658.cljs$core$IFn$_invoke$arity$4(app.core.cube,"(rfx/use-sub [:animation-controller idx])(rs/useSpring {:ref api, :x 0})",null,null) : sig__26989__auto___36658.call(null,app.core.cube,"(rfx/use-sub [:animation-controller idx])(rs/useSpring {:ref api, :x 0})",null,null));

window.uix.dev.register_BANG_(app.core.cube,app.core.cube.displayName);

(app.core.cube.fast_refresh_signature = sig__26989__auto___36658);
} else {
}
} else {
}
app.core.swipe_detector = (function app$core$swipe_detector(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__36636 = [clj_props__27041__auto__];
var map__36639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36636,(0),null);
var map__36639__$1 = cljs.core.__destructure_map(map__36639);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___36659 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___36659)){
var f__26980__auto___36660 = temp__5804__auto___36659;
(f__26980__auto___36660.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___36660.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___36660.call(null));
} else {
}
} else {
}

var vec__36640 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36640,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36640,(1),null);
var vec__36643 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36643,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36643,(1),null);
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
var _STAR_current_component_STAR__orig_val__36646 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__36647 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__36647);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__36646);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___36661 = window.uix.dev.signature_BANG_();
(sig__26989__auto___36661.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___36661.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___36661.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___36661);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(tileinfo){
var scale = 1.2;
return uix.compiler.aot._GT_el("mesh",[{'key':new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(tileinfo),'position':[(scale * ((new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo) - (0)) - 1.5)),(scale * (((3) - new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo)) - 1.5)),(0)]}],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"orange"}],[])]);
});
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___36662 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___36662)){
var f__26980__auto___36663 = temp__5804__auto___36662;
(f__26980__auto___36663.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___36663.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___36663.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.tile,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36648_SHARP_){
return (!((new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(p1__36648_SHARP_) === (0))));
}),cljs.core.flatten(board)));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__36649 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__36650 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__36650);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__36649);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___36664 = window.uix.dev.signature_BANG_();
(sig__26989__auto___36664.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___36664.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___36664.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___36664);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___36665 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___36665)){
var f__26980__auto___36666 = temp__5804__auto___36665;
(f__26980__auto___36666.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___36666.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___36666.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",[{'intensity':1.57}],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei.PerspectiveCamera,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),[(0),(0),(0)],new cljs.core.Keyword(null,"position","position",-2011731912),[(0),(0),(12)]], null)],[]),uix.compiler.alpha.component_element(app.core.board,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__36651 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__36652 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__36652);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__36651);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___36667 = window.uix.dev.signature_BANG_();
(sig__26989__auto___36667.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___36667.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___36667.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___36667);
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
