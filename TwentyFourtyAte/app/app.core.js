goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__30077(s__30078){
return (new cljs.core.LazySeq(null,(function (){
var s__30078__$1 = s__30078;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30078__$1);
if(temp__5804__auto__){
var s__30078__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30078__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30078__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30080 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30079 = (0);
while(true){
if((i__30079 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__30079);
cljs.core.chunk_append(b__30080,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__30079,i,c__5521__auto__,size__5522__auto__,b__30080,s__30078__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__30077_$_iter__30081(s__30082){
return (new cljs.core.LazySeq(null,((function (i__30079,i,c__5521__auto__,size__5522__auto__,b__30080,s__30078__$2,temp__5804__auto__){
return (function (){
var s__30082__$1 = s__30082;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30082__$1);
if(temp__5804__auto____$1){
var s__30082__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30082__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__30082__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__30084 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__30083 = (0);
while(true){
if((i__30083 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__30083);
cljs.core.chunk_append(b__30084,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__30135 = (i__30083 + (1));
i__30083 = G__30135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30084),app$core$init_board_$_iter__30077_$_iter__30081(cljs.core.chunk_rest(s__30082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30084),null);
}
} else {
var j = cljs.core.first(s__30082__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__30077_$_iter__30081(cljs.core.rest(s__30082__$2)));
}
} else {
return null;
}
break;
}
});})(i__30079,i,c__5521__auto__,size__5522__auto__,b__30080,s__30078__$2,temp__5804__auto__))
,null,null));
});})(i__30079,i,c__5521__auto__,size__5522__auto__,b__30080,s__30078__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__30136 = (i__30079 + (1));
i__30079 = G__30136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30080),app$core$init_board_$_iter__30077(cljs.core.chunk_rest(s__30078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30080),null);
}
} else {
var i = cljs.core.first(s__30078__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__30078__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__30077_$_iter__30085(s__30086){
return (new cljs.core.LazySeq(null,(function (){
var s__30086__$1 = s__30086;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30086__$1);
if(temp__5804__auto____$1){
var s__30086__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30086__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30086__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30088 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30087 = (0);
while(true){
if((i__30087 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__30087);
cljs.core.chunk_append(b__30088,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__30137 = (i__30087 + (1));
i__30087 = G__30137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30088),app$core$init_board_$_iter__30077_$_iter__30085(cljs.core.chunk_rest(s__30086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30088),null);
}
} else {
var j = cljs.core.first(s__30086__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__30077_$_iter__30085(cljs.core.rest(s__30086__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__30078__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__30077(cljs.core.rest(s__30078__$2)));
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
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30089_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__30089_SHARP_) === (0));
}),tile_list);
if(cljs.core.seq(empty_slots)){
var picked_tile = cljs.core.rand_nth(empty_slots);
var rowcoord = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(picked_tile);
var colcoord = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(picked_tile);
var newtileval = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(2),(2),(2),(2),(2),(2),(4)], null));
var newkey = new cljs.core.Keyword(null,"keynum","keynum",1580606196).cljs$core$IFn$_invoke$arity$1(db);
console.log("new: ",[rowcoord,colcoord]);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),newtileval),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),rowcoord,colcoord,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
} else {
return db;
}
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__30090){
var vec__30091 = p__30090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30091,(0),null);
var map__30094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30091,(1),null);
var map__30094__$1 = cljs.core.__destructure_map(map__30094);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30094__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30094__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30094__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__30095 = from;
var fromx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30095,(0),null);
var fromy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30095,(1),null);
var vec__30098 = to;
var tox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(0),null);
var toy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromy,fromx], null));
var totile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),toy,tox], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromx,fromy,new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null),tox),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromx,fromy,new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null),toy);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__30101,p__30102){
var map__30103 = p__30101;
var map__30103__$1 = cljs.core.__destructure_map(map__30103);
var cofx = map__30103__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30103__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30104 = p__30102;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30104,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30104,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
var slides = ((cljs.core.seq(moves))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (movedata){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),movedata], null)], null);
}),moves):cljs.core.PersistentVector.EMPTY);
var effects = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(slides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null));
console.log(cljs.core.clj__GT_js(dir));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),effects], null);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633),(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
}));
app.core.swipe_detector = (function app$core$swipe_detector(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__30107 = [clj_props__27041__auto__];
var map__30110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(0),null);
var map__30110__$1 = cljs.core.__destructure_map(map__30110);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30138 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30138)){
var f__26980__auto___30139 = temp__5804__auto___30138;
(f__26980__auto___30139.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___30139.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___30139.call(null));
} else {
}
} else {
}

var vec__30111 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30111,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30111,(1),null);
var vec__30114 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30114,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30114,(1),null);
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
var _STAR_current_component_STAR__orig_val__30117 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30118 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30118);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30117);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___30140 = window.uix.dev.signature_BANG_();
(sig__26989__auto___30140.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___30140.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___30140.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___30140);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__30119 = [clj_props__27041__auto__];
var map__30122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(0),null);
var map__30122__$1 = cljs.core.__destructure_map(map__30122);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30122__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30122__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30141 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30141)){
var f__26980__auto___30142 = temp__5804__auto___30141;
(f__26980__auto___30142.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___30142.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___30142.call(null));
} else {
}
} else {
}

var scale = 1.2;
var pos_x = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo);
var pos_y = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo);
var tileval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(tileinfo);
var springs = shadow.js.shim.module$$react_spring$three.useSpring(({"position": [new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(tileinfo),(0)]}));
return uix.compiler.alpha.component_element(shadow.js.shim.module$$react_spring$three.animated.mesh,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"position","position",-2011731912),springs.position], null)],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':(function (){var fexpr__30123 = new cljs.core.PersistentArrayMap(null, 2, [(2),"#ffaaaa",(4),"#ff8888"], null);
return (fexpr__30123.cljs$core$IFn$_invoke$arity$1 ? fexpr__30123.cljs$core$IFn$_invoke$arity$1(tileval) : fexpr__30123.call(null,tileval));
})()}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30124 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30125 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30125);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30124);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___30143 = window.uix.dev.signature_BANG_();
(sig__26989__auto___30143.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___30143.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(:pos-x tileinfo) (:pos-y tileinfo) 0]})",null,null) : sig__26989__auto___30143.call(null,app.core.tile,"(rs/useSpring {:position [(:pos-x tileinfo) (:pos-y tileinfo) 0]})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___30143);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30144 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30144)){
var f__26980__auto___30145 = temp__5804__auto___30144;
(f__26980__auto___30145.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___30145.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___30145.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30126_SHARP_){
return (!((new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__30126_SHARP_) === (0))));
}),cljs.core.flatten(board));
var iter__5523__auto__ = (function app$core$board_$_iter__30127(s__30128){
return (new cljs.core.LazySeq(null,(function (){
var s__30128__$1 = s__30128;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30128__$1);
if(temp__5804__auto__){
var s__30128__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30128__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30128__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30130 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30129 = (0);
while(true){
if((i__30129 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__30129);
cljs.core.chunk_append(b__30130,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__30146 = (i__30129 + (1));
i__30129 = G__30146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30130),app$core$board_$_iter__30127(cljs.core.chunk_rest(s__30128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30130),null);
}
} else {
var tileinfo = cljs.core.first(s__30128__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__30127(cljs.core.rest(s__30128__$2)));
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
var _STAR_current_component_STAR__orig_val__30131 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30132 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30132);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30131);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___30147 = window.uix.dev.signature_BANG_();
(sig__26989__auto___30147.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___30147.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___30147.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___30147);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___30148 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___30148)){
var f__26980__auto___30149 = temp__5804__auto___30148;
(f__26980__auto___30149.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___30149.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___30149.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",[{'intensity':1.57}],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei.PerspectiveCamera,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),[(0),(0),(0)],new cljs.core.Keyword(null,"position","position",-2011731912),[(0),(0),(12)]], null)],[]),uix.compiler.alpha.component_element(app.core.board,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30133 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30134 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30134);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30133);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___30150 = window.uix.dev.signature_BANG_();
(sig__26989__auto___30150.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___30150.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___30150.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___30150);
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
