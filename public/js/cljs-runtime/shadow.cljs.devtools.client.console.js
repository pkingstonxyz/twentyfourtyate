goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__13281 = cljs.core.seq(item);
var chunk__13282 = null;
var count__13283 = (0);
var i__13284 = (0);
while(true){
if((i__13284 < count__13283)){
var it = chunk__13282.cljs$core$IIndexed$_nth$arity$2(null, i__13284);
arr.push(it);


var G__13568 = seq__13281;
var G__13569 = chunk__13282;
var G__13570 = count__13283;
var G__13571 = (i__13284 + (1));
seq__13281 = G__13568;
chunk__13282 = G__13569;
count__13283 = G__13570;
i__13284 = G__13571;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13281);
if(temp__5804__auto__){
var seq__13281__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13281__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13281__$1);
var G__13573 = cljs.core.chunk_rest(seq__13281__$1);
var G__13574 = c__5525__auto__;
var G__13575 = cljs.core.count(c__5525__auto__);
var G__13576 = (0);
seq__13281 = G__13573;
chunk__13282 = G__13574;
count__13283 = G__13575;
i__13284 = G__13576;
continue;
} else {
var it = cljs.core.first(seq__13281__$1);
arr.push(it);


var G__13577 = cljs.core.next(seq__13281__$1);
var G__13578 = null;
var G__13579 = (0);
var G__13580 = (0);
seq__13281 = G__13577;
chunk__13282 = G__13578;
count__13283 = G__13579;
i__13284 = G__13580;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if((obj == null)){
return null;
} else {
return ["object",({"object": obj})];
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13304){
var vec__13305 = p__13304;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13305,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__13312 = struct;
var seq__13313 = cljs.core.seq(vec__13312);
var first__13314 = cljs.core.first(seq__13313);
var seq__13313__$1 = cljs.core.next(seq__13313);
var tag = first__13314;
var first__13314__$1 = cljs.core.first(seq__13313__$1);
var seq__13313__$2 = cljs.core.next(seq__13313__$1);
var attrs = first__13314__$1;
var children = seq__13313__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__13315_13584 = cljs.core.seq(children);
var chunk__13316_13585 = null;
var count__13317_13586 = (0);
var i__13318_13587 = (0);
while(true){
if((i__13318_13587 < count__13317_13586)){
var child_13588 = chunk__13316_13585.cljs$core$IIndexed$_nth$arity$2(null, i__13318_13587);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_13588) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null, child_13588)));


var G__13589 = seq__13315_13584;
var G__13590 = chunk__13316_13585;
var G__13591 = count__13317_13586;
var G__13592 = (i__13318_13587 + (1));
seq__13315_13584 = G__13589;
chunk__13316_13585 = G__13590;
count__13317_13586 = G__13591;
i__13318_13587 = G__13592;
continue;
} else {
var temp__5804__auto___13593 = cljs.core.seq(seq__13315_13584);
if(temp__5804__auto___13593){
var seq__13315_13594__$1 = temp__5804__auto___13593;
if(cljs.core.chunked_seq_QMARK_(seq__13315_13594__$1)){
var c__5525__auto___13595 = cljs.core.chunk_first(seq__13315_13594__$1);
var G__13596 = cljs.core.chunk_rest(seq__13315_13594__$1);
var G__13597 = c__5525__auto___13595;
var G__13598 = cljs.core.count(c__5525__auto___13595);
var G__13599 = (0);
seq__13315_13584 = G__13596;
chunk__13316_13585 = G__13597;
count__13317_13586 = G__13598;
i__13318_13587 = G__13599;
continue;
} else {
var child_13600 = cljs.core.first(seq__13315_13594__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_13600) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null, child_13600)));


var G__13608 = cljs.core.next(seq__13315_13594__$1);
var G__13609 = null;
var G__13610 = (0);
var G__13611 = (0);
seq__13315_13584 = G__13608;
chunk__13316_13585 = G__13609;
count__13317_13586 = G__13610;
i__13318_13587 = G__13611;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$console$iter__13339(s__13340){
return (new cljs.core.LazySeq(null,(function (){
var s__13340__$1 = s__13340;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13340__$1);
if(temp__5804__auto__){
var s__13340__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13340__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13340__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13342 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13341 = (0);
while(true){
if((i__13341 < size__5479__auto__)){
var value = cljs.core._nth(c__5478__auto__,i__13341);
cljs.core.chunk_append(b__13342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__13620 = (i__13341 + (1));
i__13341 = G__13620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13342),shadow$cljs$devtools$client$console$iter__13339(cljs.core.chunk_rest(s__13340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13342),null);
}
} else {
var value = cljs.core.first(s__13340__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__13339(cljs.core.rest(s__13340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$console$iter__13363(s__13364){
return (new cljs.core.LazySeq(null,(function (){
var s__13364__$1 = s__13364;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13364__$1);
if(temp__5804__auto__){
var s__13364__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13364__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13364__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13366 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13365 = (0);
while(true){
if((i__13365 < size__5479__auto__)){
var key = cljs.core._nth(c__5478__auto__,i__13365);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__13366,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__13627 = (i__13365 + (1));
i__13365 = G__13627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13366),shadow$cljs$devtools$client$console$iter__13363(cljs.core.chunk_rest(s__13364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13366),null);
}
} else {
var key = cljs.core.first(s__13364__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__13363(cljs.core.rest(s__13364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e13402){var e = e13402;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5804__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__13546 = f;
G__13546.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__13546.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__13546.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__13546.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__13546.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__13546;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13551_SHARP_){
return goog.object.get(p1__13551_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
