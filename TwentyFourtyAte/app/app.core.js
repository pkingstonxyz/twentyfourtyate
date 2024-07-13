goog.provide('app.core');
app.core.init_board = (function app$core$init_board(){
return cljs.core.vec((function (){var iter__5523__auto__ = (function app$core$init_board_$_iter__29645(s__29646){
return (new cljs.core.LazySeq(null,(function (){
var s__29646__$1 = s__29646;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29646__$1);
if(temp__5804__auto__){
var s__29646__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29646__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29646__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29648 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29647 = (0);
while(true){
if((i__29647 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__29647);
cljs.core.chunk_append(b__29648,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__29647,i,c__5521__auto__,size__5522__auto__,b__29648,s__29646__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__29645_$_iter__29649(s__29650){
return (new cljs.core.LazySeq(null,((function (i__29647,i,c__5521__auto__,size__5522__auto__,b__29648,s__29646__$2,temp__5804__auto__){
return (function (){
var s__29650__$1 = s__29650;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29650__$1);
if(temp__5804__auto____$1){
var s__29650__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29650__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__29650__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__29652 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__29651 = (0);
while(true){
if((i__29651 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__29651);
cljs.core.chunk_append(b__29652,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__29718 = (i__29651 + (1));
i__29651 = G__29718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29652),app$core$init_board_$_iter__29645_$_iter__29649(cljs.core.chunk_rest(s__29650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29652),null);
}
} else {
var j = cljs.core.first(s__29650__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__29645_$_iter__29649(cljs.core.rest(s__29650__$2)));
}
} else {
return null;
}
break;
}
});})(i__29647,i,c__5521__auto__,size__5522__auto__,b__29648,s__29646__$2,temp__5804__auto__))
,null,null));
});})(i__29647,i,c__5521__auto__,size__5522__auto__,b__29648,s__29646__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()));

var G__29719 = (i__29647 + (1));
i__29647 = G__29719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29648),app$core$init_board_$_iter__29645(cljs.core.chunk_rest(s__29646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29648),null);
}
} else {
var i = cljs.core.first(s__29646__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__29646__$2,temp__5804__auto__){
return (function app$core$init_board_$_iter__29645_$_iter__29653(s__29654){
return (new cljs.core.LazySeq(null,(function (){
var s__29654__$1 = s__29654;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29654__$1);
if(temp__5804__auto____$1){
var s__29654__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29654__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29654__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29656 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29655 = (0);
while(true){
if((i__29655 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__29655);
cljs.core.chunk_append(b__29656,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null));

var G__29720 = (i__29655 + (1));
i__29655 = G__29720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29656),app$core$init_board_$_iter__29645_$_iter__29653(cljs.core.chunk_rest(s__29654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29656),null);
}
} else {
var j = cljs.core.first(s__29654__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tileval","tileval",252915903),(0),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943),(((4) * i) + j),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),j,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),i], null),app$core$init_board_$_iter__29645_$_iter__29653(cljs.core.rest(s__29654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__29646__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})()),app$core$init_board_$_iter__29645(cljs.core.rest(s__29646__$2)));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),app.core.init_board(),new cljs.core.Keyword(null,"keynum","keynum",1580606196),(16),new cljs.core.Keyword(null,"movecount","movecount",1972774776),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null)], null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955),(function (db,_){
var tile_list = cljs.core.flatten(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var empty_slots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29657_SHARP_){
return (new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__29657_SHARP_) === (0));
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
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide","slide",142491892),(function (db,p__29659){
var vec__29660 = p__29659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29660,(0),null);
var map__29663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29660,(1),null);
var map__29663__$1 = cljs.core.__destructure_map(map__29663);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29663__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29663__$1,new cljs.core.Keyword(null,"to","to",192099007));
var merged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29663__$1,new cljs.core.Keyword(null,"merged","merged",1648712643));
var vec__29664 = from;
var fromrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664,(0),null);
var fromcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664,(1),null);
var vec__29667 = to;
var torow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29667,(0),null);
var tocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29667,(1),null);
var fromtile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol], null));
var oldval = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(fromtile);
var reposed_from = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fromtile,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),tocol),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),torow);
var newkey = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keynum","keynum",1580606196)) : db.call(null,new cljs.core.Keyword(null,"keynum","keynum",1580606196)));
var newdb = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol], null),reposed_from),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),(0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),fromrow,fromcol,new cljs.core.Keyword(null,"tilekey","tilekey",1892691943)], null),newkey),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keynum","keynum",1580606196)], null),cljs.core.inc);
if(cljs.core.truth_(merged)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(newdb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),torow,tocol,new cljs.core.Keyword(null,"tileval","tileval",252915903)], null),((2) * oldval)),new cljs.core.Keyword(null,"score","score",-1963588780),(function (p1__29658_SHARP_){
return (p1__29658_SHARP_ + ((2) * oldval));
}));
} else {
return newdb;
}
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__29670,p__29671){
var map__29672 = p__29670;
var map__29672__$1 = cljs.core.__destructure_map(map__29672);
var cofx = map__29672__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29672__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29673 = p__29671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29673,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29673,(1),null);
var moves = app.merge.generate_board_moves(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),dir);
var slides = ((cljs.core.seq(moves))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (movedata){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),movedata], null)], null);
}),moves):cljs.core.PersistentVector.EMPTY);
var effects = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(slides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-random-tile","add-random-tile",109829955)], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"movecount","movecount",1972774776),cljs.core.inc),new cljs.core.Keyword(null,"fx","fx",-1237829572),effects], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inctime","inctime",1374933206),(function (db,p__29677){
var vec__29678 = p__29677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(0),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"gametime","gametime",882955201),(function (p1__29676_SHARP_){
return (delta + p1__29676_SHARP_);
}));
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
var vec__29681 = [clj_props__27041__auto__];
var map__29684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29681,(0),null);
var map__29684__$1 = cljs.core.__destructure_map(map__29684);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29721 = app.core.swipe_detector.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29721)){
var f__26980__auto___29722 = temp__5804__auto___29721;
(f__26980__auto___29722.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29722.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29722.call(null));
} else {
}
} else {
}

var vec__29685 = uix.core.use_state(0.0);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29685,(0),null);
var set_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29685,(1),null);
var vec__29688 = uix.core.use_state(0.0);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688,(0),null);
var set_y_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688,(1),null);
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
var _STAR_current_component_STAR__orig_val__29691 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29692 = app.core.swipe_detector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29692);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29691);
}} else {
return f__27042__auto__();
}
});

(app.core.swipe_detector.uix_component_QMARK_ = true);

(app.core.swipe_detector.displayName = "app.core/swipe-detector");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29723 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29723.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29723.cljs$core$IFn$_invoke$arity$4(app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null) : sig__26989__auto___29723.call(null,app.core.swipe_detector,"(uix/use-state 0.0)(uix/use-state 0.0)",null,null));

window.uix.dev.register_BANG_(app.core.swipe_detector,app.core.swipe_detector.displayName);

(app.core.swipe_detector.fast_refresh_signature = sig__26989__auto___29723);
} else {
}
} else {
}
app.core.tile = (function app$core$tile(props__27040__auto__){
var clj_props__27041__auto__ = uix.core.glue_args(props__27040__auto__);
var vec__29693 = [clj_props__27041__auto__];
var map__29696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29693,(0),null);
var map__29696__$1 = cljs.core.__destructure_map(map__29696);
var tileinfo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29696__$1,new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29696__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var f__27042__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29724 = app.core.tile.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29724)){
var f__26980__auto___29725 = temp__5804__auto___29724;
(f__26980__auto___29725.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29725.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29725.call(null));
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
var G__29697 = (function (scale__$1,item){
return uix.compiler.alpha.component_element(shadow.js.shim.module$$react_spring$three.animated.mesh,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"position","position",-2011731912),springs.position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale__$1.scale], null)],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':(function (){var fexpr__29698 = cljs.core.PersistentHashMap.fromArrays([(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#709997","#cc6b3e","#967fad","#9cb36b","#6494aa","#c769b0","#89a990","#c86a6d","#b7a852","#000000","#e19c3d"]);
return (fexpr__29698.cljs$core$IFn$_invoke$arity$1 ? fexpr__29698.cljs$core$IFn$_invoke$arity$1(tileval) : fexpr__29698.call(null,tileval));
})()}],[])]);
});
return (transition.cljs$core$IFn$_invoke$arity$1 ? transition.cljs$core$IFn$_invoke$arity$1(G__29697) : transition.call(null,G__29697));
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29699 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29700 = app.core.tile;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29700);

try{if(((cljs.core.map_QMARK_(clj_props__27041__auto__)) || ((clj_props__27041__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__27041__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__27041__auto__) (clojure.core/nil? clj-props__27041__auto__))"].join('')));
}

return f__27042__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29699);
}} else {
return f__27042__auto__();
}
});

(app.core.tile.uix_component_QMARK_ = true);

(app.core.tile.displayName = "app.core/tile");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29726 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29726.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29726.cljs$core$IFn$_invoke$arity$4(app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 600, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null) : sig__26989__auto___29726.call(null,app.core.tile,"(rs/useSpring {:position [(* scale (- (- (:pos-x tileinfo) 0) 1.5)) (* scale (- (- 3 (:pos-y tileinfo)) 1.5)) 0], :config {:mass 1, :tension 600, :friction 30}})(rs/useTransition (:tileval tileinfo) {:from {:scale 0.5}, :enter {:scale 1}, :leave {:scale 0}, :config {:mass 1, :tension 600, :friction 30}})",null,null));

window.uix.dev.register_BANG_(app.core.tile,app.core.tile.displayName);

(app.core.tile.fast_refresh_signature = sig__26989__auto___29726);
} else {
}
} else {
}
app.core.totalMoves = (function app$core$totalMoves(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29727 = app.core.totalMoves.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29727)){
var f__26980__auto___29728 = temp__5804__auto___29727;
(f__26980__auto___29728.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29728.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29728.call(null));
} else {
}
} else {
}

var movecount = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movecount","movecount",1972774776)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Moves: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(movecount)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29701 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29702 = app.core.totalMoves;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29702);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29701);
}} else {
return f__27038__auto__();
}
});

(app.core.totalMoves.uix_component_QMARK_ = true);

(app.core.totalMoves.displayName = "app.core/totalMoves");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29729 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29729.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29729.cljs$core$IFn$_invoke$arity$4(app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null) : sig__26989__auto___29729.call(null,app.core.totalMoves,"(rfx/use-sub [:movecount])",null,null));

window.uix.dev.register_BANG_(app.core.totalMoves,app.core.totalMoves.displayName);

(app.core.totalMoves.fast_refresh_signature = sig__26989__auto___29729);
} else {
}
} else {
}
app.core.score_board = (function app$core$score_board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29730 = app.core.score_board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29730)){
var f__26980__auto___29731 = temp__5804__auto___29730;
(f__26980__auto___29731.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29731.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29731.call(null));
} else {
}
} else {
}

var score = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null));
return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.Text,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60)], null)], null)],[["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join('')]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29703 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29704 = app.core.score_board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29704);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29703);
}} else {
return f__27038__auto__();
}
});

(app.core.score_board.uix_component_QMARK_ = true);

(app.core.score_board.displayName = "app.core/score-board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29732 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29732.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29732.cljs$core$IFn$_invoke$arity$4(app.core.score_board,"(rfx/use-sub [:score])",null,null) : sig__26989__auto___29732.call(null,app.core.score_board,"(rfx/use-sub [:score])",null,null));

window.uix.dev.register_BANG_(app.core.score_board,app.core.score_board.displayName);

(app.core.score_board.fast_refresh_signature = sig__26989__auto___29732);
} else {
}
} else {
}
app.core.ui = (function app$core$ui(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29733 = app.core.ui.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29733)){
var f__26980__auto___29734 = temp__5804__auto___29733;
(f__26980__auto___29734.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29734.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29734.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.StatusBar,[null],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null)], null)],[uix.compiler.alpha.component_element(shadow.js.shim.module$react_native.View,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null)],[uix.compiler.alpha.component_element(app.core.totalMoves,[null],[]),uix.compiler.alpha.component_element(app.core.score_board,[null],[])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29705 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29706 = app.core.ui;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29706);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29705);
}} else {
return f__27038__auto__();
}
});

(app.core.ui.uix_component_QMARK_ = true);

(app.core.ui.displayName = "app.core/ui");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29735 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29735.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29735.cljs$core$IFn$_invoke$arity$4(app.core.ui,"",null,null) : sig__26989__auto___29735.call(null,app.core.ui,"",null,null));

window.uix.dev.register_BANG_(app.core.ui,app.core.ui.displayName);

(app.core.ui.fast_refresh_signature = sig__26989__auto___29735);
} else {
}
} else {
}
app.core.reset_button = (function app$core$reset_button(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29736 = app.core.reset_button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29736)){
var f__26980__auto___29737 = temp__5804__auto___29736;
(f__26980__auto___29737.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29737.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29737.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("mesh",[{'onClick':(function (_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}),'position':[(0),-3.5,(0)]}],[uix.compiler.aot._GT_el("boxGeometry",[null],[]),uix.compiler.aot._GT_el("meshStandardMaterial",[{'color':"#22aa22"}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29707 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29708 = app.core.reset_button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29708);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29707);
}} else {
return f__27038__auto__();
}
});

(app.core.reset_button.uix_component_QMARK_ = true);

(app.core.reset_button.displayName = "app.core/reset-button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29738 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29738.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29738.cljs$core$IFn$_invoke$arity$4(app.core.reset_button,"",null,null) : sig__26989__auto___29738.call(null,app.core.reset_button,"",null,null));

window.uix.dev.register_BANG_(app.core.reset_button,app.core.reset_button.displayName);

(app.core.reset_button.fast_refresh_signature = sig__26989__auto___29738);
} else {
}
} else {
}
app.core.board = (function app$core$board(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29739 = app.core.board.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29739)){
var f__26980__auto___29740 = temp__5804__auto___29739;
(f__26980__auto___29740.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29740.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29740.call(null));
} else {
}
} else {
}

var board = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var tiles = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29709_SHARP_){
return (!((new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(p1__29709_SHARP_) === (0))));
}),cljs.core.flatten(board));
var iter__5523__auto__ = (function app$core$board_$_iter__29710(s__29711){
return (new cljs.core.LazySeq(null,(function (){
var s__29711__$1 = s__29711;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29711__$1);
if(temp__5804__auto__){
var s__29711__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29711__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29711__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29713 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29712 = (0);
while(true){
if((i__29712 < size__5522__auto__)){
var tileinfo = cljs.core._nth(c__5521__auto__,i__29712);
cljs.core.chunk_append(b__29713,uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]));

var G__29741 = (i__29712 + (1));
i__29712 = G__29741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29713),app$core$board_$_iter__29710(cljs.core.chunk_rest(s__29711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29713),null);
}
} else {
var tileinfo = cljs.core.first(s__29711__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.tile,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tilekey","tilekey",1892691943).cljs$core$IFn$_invoke$arity$1(tileinfo),new cljs.core.Keyword(null,"tileinfo","tileinfo",-1064086984),tileinfo], null)],[]),app$core$board_$_iter__29710(cljs.core.rest(s__29711__$2)));
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
var _STAR_current_component_STAR__orig_val__29714 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29715 = app.core.board;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29715);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29714);
}} else {
return f__27038__auto__();
}
});

(app.core.board.uix_component_QMARK_ = true);

(app.core.board.displayName = "app.core/board");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29742 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29742.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29742.cljs$core$IFn$_invoke$arity$4(app.core.board,"(rfx/use-sub [:board])",null,null) : sig__26989__auto___29742.call(null,app.core.board,"(rfx/use-sub [:board])",null,null));

window.uix.dev.register_BANG_(app.core.board,app.core.board.displayName);

(app.core.board.fast_refresh_signature = sig__26989__auto___29742);
} else {
}
} else {
}
app.core.root = (function app$core$root(){
var f__27038__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29743 = app.core.root.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29743)){
var f__26980__auto___29744 = temp__5804__auto___29743;
(f__26980__auto___29744.cljs$core$IFn$_invoke$arity$0 ? f__26980__auto___29744.cljs$core$IFn$_invoke$arity$0() : f__26980__auto___29744.call(null));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(app.core.swipe_detector,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$fiber$native.Canvas,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("ambientLight",[{'intensity':(3)}],[]),uix.compiler.alpha.component_element(shadow.js.shim.module$$react_three$drei$native.PerspectiveCamera,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),[(0),(0),(0)],new cljs.core.Keyword(null,"position","position",-2011731912),[(0),(0),(12)]], null)],[]),uix.compiler.alpha.component_element(app.core.board,[null],[]),uix.compiler.alpha.component_element(app.core.reset_button,[null],[])]),uix.compiler.alpha.component_element(app.core.ui,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29716 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29717 = app.core.root;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29717);

try{return f__27038__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29716);
}} else {
return f__27038__auto__();
}
});

(app.core.root.uix_component_QMARK_ = true);

(app.core.root.displayName = "app.core/root");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__26989__auto___29745 = window.uix.dev.signature_BANG_();
(sig__26989__auto___29745.cljs$core$IFn$_invoke$arity$4 ? sig__26989__auto___29745.cljs$core$IFn$_invoke$arity$4(app.core.root,"",null,null) : sig__26989__auto___29745.call(null,app.core.root,"",null,null));

window.uix.dev.register_BANG_(app.core.root,app.core.root.displayName);

(app.core.root.fast_refresh_signature = sig__26989__auto___29745);
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
