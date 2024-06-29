goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18971 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18971(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18976 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18976(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17856 = coll;
var G__17857 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17856,G__17857) : shadow.dom.lazy_native_coll_seq.call(null, G__17856,G__17857));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17950 = arguments.length;
switch (G__17950) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17972 = arguments.length;
switch (G__17972) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18002 = arguments.length;
switch (G__18002) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18022 = arguments.length;
switch (G__18022) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18063 = arguments.length;
switch (G__18063) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18134 = arguments.length;
switch (G__18134) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e18140){if((e18140 instanceof Object)){
var e = e18140;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18140;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18162 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18163 = null;
var count__18164 = (0);
var i__18165 = (0);
while(true){
if((i__18165 < count__18164)){
var el = chunk__18163.cljs$core$IIndexed$_nth$arity$2(null, i__18165);
var handler_18983__$1 = ((function (seq__18162,chunk__18163,count__18164,i__18165,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18162,chunk__18163,count__18164,i__18165,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18983__$1);


var G__18984 = seq__18162;
var G__18985 = chunk__18163;
var G__18986 = count__18164;
var G__18987 = (i__18165 + (1));
seq__18162 = G__18984;
chunk__18163 = G__18985;
count__18164 = G__18986;
i__18165 = G__18987;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18162);
if(temp__5804__auto__){
var seq__18162__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18162__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18162__$1);
var G__18988 = cljs.core.chunk_rest(seq__18162__$1);
var G__18989 = c__5525__auto__;
var G__18990 = cljs.core.count(c__5525__auto__);
var G__18991 = (0);
seq__18162 = G__18988;
chunk__18163 = G__18989;
count__18164 = G__18990;
i__18165 = G__18991;
continue;
} else {
var el = cljs.core.first(seq__18162__$1);
var handler_18992__$1 = ((function (seq__18162,chunk__18163,count__18164,i__18165,el,seq__18162__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18162,chunk__18163,count__18164,i__18165,el,seq__18162__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18992__$1);


var G__18993 = cljs.core.next(seq__18162__$1);
var G__18994 = null;
var G__18995 = (0);
var G__18996 = (0);
seq__18162 = G__18993;
chunk__18163 = G__18994;
count__18164 = G__18995;
i__18165 = G__18996;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18194 = arguments.length;
switch (G__18194) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18215 = cljs.core.seq(events);
var chunk__18217 = null;
var count__18218 = (0);
var i__18219 = (0);
while(true){
if((i__18219 < count__18218)){
var vec__18238 = chunk__18217.cljs$core$IIndexed$_nth$arity$2(null, i__18219);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18238,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18998 = seq__18215;
var G__18999 = chunk__18217;
var G__19000 = count__18218;
var G__19001 = (i__18219 + (1));
seq__18215 = G__18998;
chunk__18217 = G__18999;
count__18218 = G__19000;
i__18219 = G__19001;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18215);
if(temp__5804__auto__){
var seq__18215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18215__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18215__$1);
var G__19002 = cljs.core.chunk_rest(seq__18215__$1);
var G__19003 = c__5525__auto__;
var G__19004 = cljs.core.count(c__5525__auto__);
var G__19005 = (0);
seq__18215 = G__19002;
chunk__18217 = G__19003;
count__18218 = G__19004;
i__18219 = G__19005;
continue;
} else {
var vec__18246 = cljs.core.first(seq__18215__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18246,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19010 = cljs.core.next(seq__18215__$1);
var G__19011 = null;
var G__19012 = (0);
var G__19013 = (0);
seq__18215 = G__19010;
chunk__18217 = G__19011;
count__18218 = G__19012;
i__18219 = G__19013;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18254 = cljs.core.seq(styles);
var chunk__18255 = null;
var count__18256 = (0);
var i__18257 = (0);
while(true){
if((i__18257 < count__18256)){
var vec__18282 = chunk__18255.cljs$core$IIndexed$_nth$arity$2(null, i__18257);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18282,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19014 = seq__18254;
var G__19015 = chunk__18255;
var G__19016 = count__18256;
var G__19017 = (i__18257 + (1));
seq__18254 = G__19014;
chunk__18255 = G__19015;
count__18256 = G__19016;
i__18257 = G__19017;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18254);
if(temp__5804__auto__){
var seq__18254__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18254__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18254__$1);
var G__19018 = cljs.core.chunk_rest(seq__18254__$1);
var G__19019 = c__5525__auto__;
var G__19020 = cljs.core.count(c__5525__auto__);
var G__19021 = (0);
seq__18254 = G__19018;
chunk__18255 = G__19019;
count__18256 = G__19020;
i__18257 = G__19021;
continue;
} else {
var vec__18294 = cljs.core.first(seq__18254__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19023 = cljs.core.next(seq__18254__$1);
var G__19024 = null;
var G__19025 = (0);
var G__19026 = (0);
seq__18254 = G__19023;
chunk__18255 = G__19024;
count__18256 = G__19025;
i__18257 = G__19026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18299_19027 = key;
var G__18299_19028__$1 = (((G__18299_19027 instanceof cljs.core.Keyword))?G__18299_19027.fqn:null);
switch (G__18299_19028__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19030 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_19030,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_19030,"aria-");
}
})())){
el.setAttribute(ks_19030,value);
} else {
(el[ks_19030] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18326){
var map__18328 = p__18326;
var map__18328__$1 = cljs.core.__destructure_map(map__18328);
var props = map__18328__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18328__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18342 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18342,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18342;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18355 = arguments.length;
switch (G__18355) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18374){
var vec__18387 = p__18374;
var seq__18388 = cljs.core.seq(vec__18387);
var first__18389 = cljs.core.first(seq__18388);
var seq__18388__$1 = cljs.core.next(seq__18388);
var nn = first__18389;
var first__18389__$1 = cljs.core.first(seq__18388__$1);
var seq__18388__$2 = cljs.core.next(seq__18388__$1);
var np = first__18389__$1;
var nc = seq__18388__$2;
var node = vec__18387;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18392 = nn;
var G__18393 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18392,G__18393) : create_fn.call(null, G__18392,G__18393));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18394 = nn;
var G__18395 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18394,G__18395) : create_fn.call(null, G__18394,G__18395));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18400 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18400,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18400,(1),null);
var seq__18403_19045 = cljs.core.seq(node_children);
var chunk__18404_19046 = null;
var count__18405_19047 = (0);
var i__18406_19048 = (0);
while(true){
if((i__18406_19048 < count__18405_19047)){
var child_struct_19049 = chunk__18404_19046.cljs$core$IIndexed$_nth$arity$2(null, i__18406_19048);
var children_19050 = shadow.dom.dom_node(child_struct_19049);
if(cljs.core.seq_QMARK_(children_19050)){
var seq__18448_19063 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19050));
var chunk__18450_19064 = null;
var count__18451_19065 = (0);
var i__18452_19066 = (0);
while(true){
if((i__18452_19066 < count__18451_19065)){
var child_19067 = chunk__18450_19064.cljs$core$IIndexed$_nth$arity$2(null, i__18452_19066);
if(cljs.core.truth_(child_19067)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19067);


var G__19068 = seq__18448_19063;
var G__19069 = chunk__18450_19064;
var G__19070 = count__18451_19065;
var G__19071 = (i__18452_19066 + (1));
seq__18448_19063 = G__19068;
chunk__18450_19064 = G__19069;
count__18451_19065 = G__19070;
i__18452_19066 = G__19071;
continue;
} else {
var G__19073 = seq__18448_19063;
var G__19074 = chunk__18450_19064;
var G__19075 = count__18451_19065;
var G__19076 = (i__18452_19066 + (1));
seq__18448_19063 = G__19073;
chunk__18450_19064 = G__19074;
count__18451_19065 = G__19075;
i__18452_19066 = G__19076;
continue;
}
} else {
var temp__5804__auto___19077 = cljs.core.seq(seq__18448_19063);
if(temp__5804__auto___19077){
var seq__18448_19078__$1 = temp__5804__auto___19077;
if(cljs.core.chunked_seq_QMARK_(seq__18448_19078__$1)){
var c__5525__auto___19079 = cljs.core.chunk_first(seq__18448_19078__$1);
var G__19080 = cljs.core.chunk_rest(seq__18448_19078__$1);
var G__19081 = c__5525__auto___19079;
var G__19082 = cljs.core.count(c__5525__auto___19079);
var G__19083 = (0);
seq__18448_19063 = G__19080;
chunk__18450_19064 = G__19081;
count__18451_19065 = G__19082;
i__18452_19066 = G__19083;
continue;
} else {
var child_19084 = cljs.core.first(seq__18448_19078__$1);
if(cljs.core.truth_(child_19084)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19084);


var G__19085 = cljs.core.next(seq__18448_19078__$1);
var G__19086 = null;
var G__19087 = (0);
var G__19088 = (0);
seq__18448_19063 = G__19085;
chunk__18450_19064 = G__19086;
count__18451_19065 = G__19087;
i__18452_19066 = G__19088;
continue;
} else {
var G__19089 = cljs.core.next(seq__18448_19078__$1);
var G__19090 = null;
var G__19091 = (0);
var G__19092 = (0);
seq__18448_19063 = G__19089;
chunk__18450_19064 = G__19090;
count__18451_19065 = G__19091;
i__18452_19066 = G__19092;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19050);
}


var G__19093 = seq__18403_19045;
var G__19094 = chunk__18404_19046;
var G__19095 = count__18405_19047;
var G__19096 = (i__18406_19048 + (1));
seq__18403_19045 = G__19093;
chunk__18404_19046 = G__19094;
count__18405_19047 = G__19095;
i__18406_19048 = G__19096;
continue;
} else {
var temp__5804__auto___19097 = cljs.core.seq(seq__18403_19045);
if(temp__5804__auto___19097){
var seq__18403_19098__$1 = temp__5804__auto___19097;
if(cljs.core.chunked_seq_QMARK_(seq__18403_19098__$1)){
var c__5525__auto___19099 = cljs.core.chunk_first(seq__18403_19098__$1);
var G__19100 = cljs.core.chunk_rest(seq__18403_19098__$1);
var G__19101 = c__5525__auto___19099;
var G__19102 = cljs.core.count(c__5525__auto___19099);
var G__19103 = (0);
seq__18403_19045 = G__19100;
chunk__18404_19046 = G__19101;
count__18405_19047 = G__19102;
i__18406_19048 = G__19103;
continue;
} else {
var child_struct_19104 = cljs.core.first(seq__18403_19098__$1);
var children_19105 = shadow.dom.dom_node(child_struct_19104);
if(cljs.core.seq_QMARK_(children_19105)){
var seq__18463_19107 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19105));
var chunk__18466_19108 = null;
var count__18467_19109 = (0);
var i__18468_19110 = (0);
while(true){
if((i__18468_19110 < count__18467_19109)){
var child_19111 = chunk__18466_19108.cljs$core$IIndexed$_nth$arity$2(null, i__18468_19110);
if(cljs.core.truth_(child_19111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19111);


var G__19112 = seq__18463_19107;
var G__19113 = chunk__18466_19108;
var G__19114 = count__18467_19109;
var G__19115 = (i__18468_19110 + (1));
seq__18463_19107 = G__19112;
chunk__18466_19108 = G__19113;
count__18467_19109 = G__19114;
i__18468_19110 = G__19115;
continue;
} else {
var G__19116 = seq__18463_19107;
var G__19117 = chunk__18466_19108;
var G__19118 = count__18467_19109;
var G__19119 = (i__18468_19110 + (1));
seq__18463_19107 = G__19116;
chunk__18466_19108 = G__19117;
count__18467_19109 = G__19118;
i__18468_19110 = G__19119;
continue;
}
} else {
var temp__5804__auto___19120__$1 = cljs.core.seq(seq__18463_19107);
if(temp__5804__auto___19120__$1){
var seq__18463_19121__$1 = temp__5804__auto___19120__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18463_19121__$1)){
var c__5525__auto___19122 = cljs.core.chunk_first(seq__18463_19121__$1);
var G__19123 = cljs.core.chunk_rest(seq__18463_19121__$1);
var G__19124 = c__5525__auto___19122;
var G__19125 = cljs.core.count(c__5525__auto___19122);
var G__19126 = (0);
seq__18463_19107 = G__19123;
chunk__18466_19108 = G__19124;
count__18467_19109 = G__19125;
i__18468_19110 = G__19126;
continue;
} else {
var child_19127 = cljs.core.first(seq__18463_19121__$1);
if(cljs.core.truth_(child_19127)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19127);


var G__19129 = cljs.core.next(seq__18463_19121__$1);
var G__19130 = null;
var G__19131 = (0);
var G__19132 = (0);
seq__18463_19107 = G__19129;
chunk__18466_19108 = G__19130;
count__18467_19109 = G__19131;
i__18468_19110 = G__19132;
continue;
} else {
var G__19133 = cljs.core.next(seq__18463_19121__$1);
var G__19134 = null;
var G__19135 = (0);
var G__19136 = (0);
seq__18463_19107 = G__19133;
chunk__18466_19108 = G__19134;
count__18467_19109 = G__19135;
i__18468_19110 = G__19136;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19105);
}


var G__19138 = cljs.core.next(seq__18403_19098__$1);
var G__19139 = null;
var G__19140 = (0);
var G__19141 = (0);
seq__18403_19045 = G__19138;
chunk__18404_19046 = G__19139;
count__18405_19047 = G__19140;
i__18406_19048 = G__19141;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18511 = cljs.core.seq(node);
var chunk__18512 = null;
var count__18513 = (0);
var i__18514 = (0);
while(true){
if((i__18514 < count__18513)){
var n = chunk__18512.cljs$core$IIndexed$_nth$arity$2(null, i__18514);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19144 = seq__18511;
var G__19145 = chunk__18512;
var G__19146 = count__18513;
var G__19147 = (i__18514 + (1));
seq__18511 = G__19144;
chunk__18512 = G__19145;
count__18513 = G__19146;
i__18514 = G__19147;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18511);
if(temp__5804__auto__){
var seq__18511__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18511__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18511__$1);
var G__19148 = cljs.core.chunk_rest(seq__18511__$1);
var G__19149 = c__5525__auto__;
var G__19150 = cljs.core.count(c__5525__auto__);
var G__19151 = (0);
seq__18511 = G__19148;
chunk__18512 = G__19149;
count__18513 = G__19150;
i__18514 = G__19151;
continue;
} else {
var n = cljs.core.first(seq__18511__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19152 = cljs.core.next(seq__18511__$1);
var G__19153 = null;
var G__19154 = (0);
var G__19155 = (0);
seq__18511 = G__19152;
chunk__18512 = G__19153;
count__18513 = G__19154;
i__18514 = G__19155;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18531 = arguments.length;
switch (G__18531) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18543 = arguments.length;
switch (G__18543) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18560 = arguments.length;
switch (G__18560) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19160 = arguments.length;
var i__5727__auto___19161 = (0);
while(true){
if((i__5727__auto___19161 < len__5726__auto___19160)){
args__5732__auto__.push((arguments[i__5727__auto___19161]));

var G__19162 = (i__5727__auto___19161 + (1));
i__5727__auto___19161 = G__19162;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18589_19163 = cljs.core.seq(nodes);
var chunk__18590_19164 = null;
var count__18591_19165 = (0);
var i__18592_19166 = (0);
while(true){
if((i__18592_19166 < count__18591_19165)){
var node_19167 = chunk__18590_19164.cljs$core$IIndexed$_nth$arity$2(null, i__18592_19166);
fragment.appendChild(shadow.dom._to_dom(node_19167));


var G__19168 = seq__18589_19163;
var G__19169 = chunk__18590_19164;
var G__19170 = count__18591_19165;
var G__19171 = (i__18592_19166 + (1));
seq__18589_19163 = G__19168;
chunk__18590_19164 = G__19169;
count__18591_19165 = G__19170;
i__18592_19166 = G__19171;
continue;
} else {
var temp__5804__auto___19172 = cljs.core.seq(seq__18589_19163);
if(temp__5804__auto___19172){
var seq__18589_19173__$1 = temp__5804__auto___19172;
if(cljs.core.chunked_seq_QMARK_(seq__18589_19173__$1)){
var c__5525__auto___19174 = cljs.core.chunk_first(seq__18589_19173__$1);
var G__19175 = cljs.core.chunk_rest(seq__18589_19173__$1);
var G__19176 = c__5525__auto___19174;
var G__19177 = cljs.core.count(c__5525__auto___19174);
var G__19178 = (0);
seq__18589_19163 = G__19175;
chunk__18590_19164 = G__19176;
count__18591_19165 = G__19177;
i__18592_19166 = G__19178;
continue;
} else {
var node_19179 = cljs.core.first(seq__18589_19173__$1);
fragment.appendChild(shadow.dom._to_dom(node_19179));


var G__19180 = cljs.core.next(seq__18589_19173__$1);
var G__19181 = null;
var G__19182 = (0);
var G__19183 = (0);
seq__18589_19163 = G__19180;
chunk__18590_19164 = G__19181;
count__18591_19165 = G__19182;
i__18592_19166 = G__19183;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18582){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18582));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18607_19185 = cljs.core.seq(scripts);
var chunk__18608_19186 = null;
var count__18609_19187 = (0);
var i__18610_19188 = (0);
while(true){
if((i__18610_19188 < count__18609_19187)){
var vec__18621_19189 = chunk__18608_19186.cljs$core$IIndexed$_nth$arity$2(null, i__18610_19188);
var script_tag_19190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621_19189,(0),null);
var script_body_19191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621_19189,(1),null);
eval(script_body_19191);


var G__19192 = seq__18607_19185;
var G__19193 = chunk__18608_19186;
var G__19194 = count__18609_19187;
var G__19195 = (i__18610_19188 + (1));
seq__18607_19185 = G__19192;
chunk__18608_19186 = G__19193;
count__18609_19187 = G__19194;
i__18610_19188 = G__19195;
continue;
} else {
var temp__5804__auto___19196 = cljs.core.seq(seq__18607_19185);
if(temp__5804__auto___19196){
var seq__18607_19197__$1 = temp__5804__auto___19196;
if(cljs.core.chunked_seq_QMARK_(seq__18607_19197__$1)){
var c__5525__auto___19198 = cljs.core.chunk_first(seq__18607_19197__$1);
var G__19199 = cljs.core.chunk_rest(seq__18607_19197__$1);
var G__19200 = c__5525__auto___19198;
var G__19201 = cljs.core.count(c__5525__auto___19198);
var G__19202 = (0);
seq__18607_19185 = G__19199;
chunk__18608_19186 = G__19200;
count__18609_19187 = G__19201;
i__18610_19188 = G__19202;
continue;
} else {
var vec__18629_19203 = cljs.core.first(seq__18607_19197__$1);
var script_tag_19204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18629_19203,(0),null);
var script_body_19205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18629_19203,(1),null);
eval(script_body_19205);


var G__19206 = cljs.core.next(seq__18607_19197__$1);
var G__19207 = null;
var G__19208 = (0);
var G__19209 = (0);
seq__18607_19185 = G__19206;
chunk__18608_19186 = G__19207;
count__18609_19187 = G__19208;
i__18610_19188 = G__19209;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18639){
var vec__18640 = p__18639;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18664 = arguments.length;
switch (G__18664) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18693 = cljs.core.seq(style_keys);
var chunk__18695 = null;
var count__18696 = (0);
var i__18697 = (0);
while(true){
if((i__18697 < count__18696)){
var it = chunk__18695.cljs$core$IIndexed$_nth$arity$2(null, i__18697);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19212 = seq__18693;
var G__19213 = chunk__18695;
var G__19214 = count__18696;
var G__19215 = (i__18697 + (1));
seq__18693 = G__19212;
chunk__18695 = G__19213;
count__18696 = G__19214;
i__18697 = G__19215;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18693);
if(temp__5804__auto__){
var seq__18693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18693__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18693__$1);
var G__19216 = cljs.core.chunk_rest(seq__18693__$1);
var G__19217 = c__5525__auto__;
var G__19218 = cljs.core.count(c__5525__auto__);
var G__19219 = (0);
seq__18693 = G__19216;
chunk__18695 = G__19217;
count__18696 = G__19218;
i__18697 = G__19219;
continue;
} else {
var it = cljs.core.first(seq__18693__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19220 = cljs.core.next(seq__18693__$1);
var G__19221 = null;
var G__19222 = (0);
var G__19223 = (0);
seq__18693 = G__19220;
chunk__18695 = G__19221;
count__18696 = G__19222;
i__18697 = G__19223;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18707,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18724 = k18707;
var G__18724__$1 = (((G__18724 instanceof cljs.core.Keyword))?G__18724.fqn:null);
switch (G__18724__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18707,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18729){
var vec__18731 = p__18729;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18706){
var self__ = this;
var G__18706__$1 = this;
return (new cljs.core.RecordIter((0),G__18706__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18708,other18709){
var self__ = this;
var this18708__$1 = this;
return (((!((other18709 == null)))) && ((((this18708__$1.constructor === other18709.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18708__$1.x,other18709.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18708__$1.y,other18709.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18708__$1.__extmap,other18709.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18707){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18752 = k18707;
var G__18752__$1 = (((G__18752 instanceof cljs.core.Keyword))?G__18752.fqn:null);
switch (G__18752__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18707);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18706){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18753 = cljs.core.keyword_identical_QMARK_;
var expr__18754 = k__5309__auto__;
if(cljs.core.truth_((pred__18753.cljs$core$IFn$_invoke$arity$2 ? pred__18753.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18754) : pred__18753.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18754)))){
return (new shadow.dom.Coordinate(G__18706,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18753.cljs$core$IFn$_invoke$arity$2 ? pred__18753.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18754) : pred__18753.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18754)))){
return (new shadow.dom.Coordinate(self__.x,G__18706,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18706),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18706){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18706,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18716){
var extmap__5342__auto__ = (function (){var G__18766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18716,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18716)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18766);
} else {
return G__18766;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18716),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18716),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18775,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18782 = k18775;
var G__18782__$1 = (((G__18782 instanceof cljs.core.Keyword))?G__18782.fqn:null);
switch (G__18782__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18775,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18783){
var vec__18784 = p__18783;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18774){
var self__ = this;
var G__18774__$1 = this;
return (new cljs.core.RecordIter((0),G__18774__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18776,other18777){
var self__ = this;
var this18776__$1 = this;
return (((!((other18777 == null)))) && ((((this18776__$1.constructor === other18777.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18776__$1.w,other18777.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18776__$1.h,other18777.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18776__$1.__extmap,other18777.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18775){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18800 = k18775;
var G__18800__$1 = (((G__18800 instanceof cljs.core.Keyword))?G__18800.fqn:null);
switch (G__18800__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18775);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18774){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18801 = cljs.core.keyword_identical_QMARK_;
var expr__18802 = k__5309__auto__;
if(cljs.core.truth_((pred__18801.cljs$core$IFn$_invoke$arity$2 ? pred__18801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18802) : pred__18801.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18802)))){
return (new shadow.dom.Size(G__18774,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18801.cljs$core$IFn$_invoke$arity$2 ? pred__18801.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18802) : pred__18801.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18802)))){
return (new shadow.dom.Size(self__.w,G__18774,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18774),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18774){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18774,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18781){
var extmap__5342__auto__ = (function (){var G__18804 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18781,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18781)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18804);
} else {
return G__18804;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18781),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18781),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19241 = (i + (1));
var G__19242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19241;
ret = G__19242;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18809){
var vec__18810 = p__18809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18823 = arguments.length;
switch (G__18823) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19246 = ps;
var G__19247 = (i + (1));
el__$1 = G__19246;
i = G__19247;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18837 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18844_19250 = cljs.core.seq(props);
var chunk__18845_19251 = null;
var count__18846_19252 = (0);
var i__18847_19253 = (0);
while(true){
if((i__18847_19253 < count__18846_19252)){
var vec__18854_19254 = chunk__18845_19251.cljs$core$IIndexed$_nth$arity$2(null, i__18847_19253);
var k_19255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18854_19254,(0),null);
var v_19256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18854_19254,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19255);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19255),v_19256);


var G__19257 = seq__18844_19250;
var G__19258 = chunk__18845_19251;
var G__19259 = count__18846_19252;
var G__19260 = (i__18847_19253 + (1));
seq__18844_19250 = G__19257;
chunk__18845_19251 = G__19258;
count__18846_19252 = G__19259;
i__18847_19253 = G__19260;
continue;
} else {
var temp__5804__auto___19261 = cljs.core.seq(seq__18844_19250);
if(temp__5804__auto___19261){
var seq__18844_19262__$1 = temp__5804__auto___19261;
if(cljs.core.chunked_seq_QMARK_(seq__18844_19262__$1)){
var c__5525__auto___19263 = cljs.core.chunk_first(seq__18844_19262__$1);
var G__19264 = cljs.core.chunk_rest(seq__18844_19262__$1);
var G__19265 = c__5525__auto___19263;
var G__19266 = cljs.core.count(c__5525__auto___19263);
var G__19267 = (0);
seq__18844_19250 = G__19264;
chunk__18845_19251 = G__19265;
count__18846_19252 = G__19266;
i__18847_19253 = G__19267;
continue;
} else {
var vec__18857_19268 = cljs.core.first(seq__18844_19262__$1);
var k_19269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857_19268,(0),null);
var v_19270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857_19268,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19269);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19269),v_19270);


var G__19271 = cljs.core.next(seq__18844_19262__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__18844_19250 = G__19271;
chunk__18845_19251 = G__19272;
count__18846_19252 = G__19273;
i__18847_19253 = G__19274;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18870 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
var seq__18873_19275 = cljs.core.seq(node_children);
var chunk__18875_19276 = null;
var count__18876_19277 = (0);
var i__18877_19278 = (0);
while(true){
if((i__18877_19278 < count__18876_19277)){
var child_struct_19280 = chunk__18875_19276.cljs$core$IIndexed$_nth$arity$2(null, i__18877_19278);
if((!((child_struct_19280 == null)))){
if(typeof child_struct_19280 === 'string'){
var text_19281 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19281),child_struct_19280].join(''));
} else {
var children_19282 = shadow.dom.svg_node(child_struct_19280);
if(cljs.core.seq_QMARK_(children_19282)){
var seq__18900_19284 = cljs.core.seq(children_19282);
var chunk__18902_19285 = null;
var count__18903_19286 = (0);
var i__18904_19287 = (0);
while(true){
if((i__18904_19287 < count__18903_19286)){
var child_19289 = chunk__18902_19285.cljs$core$IIndexed$_nth$arity$2(null, i__18904_19287);
if(cljs.core.truth_(child_19289)){
node.appendChild(child_19289);


var G__19290 = seq__18900_19284;
var G__19291 = chunk__18902_19285;
var G__19292 = count__18903_19286;
var G__19293 = (i__18904_19287 + (1));
seq__18900_19284 = G__19290;
chunk__18902_19285 = G__19291;
count__18903_19286 = G__19292;
i__18904_19287 = G__19293;
continue;
} else {
var G__19294 = seq__18900_19284;
var G__19295 = chunk__18902_19285;
var G__19296 = count__18903_19286;
var G__19297 = (i__18904_19287 + (1));
seq__18900_19284 = G__19294;
chunk__18902_19285 = G__19295;
count__18903_19286 = G__19296;
i__18904_19287 = G__19297;
continue;
}
} else {
var temp__5804__auto___19298 = cljs.core.seq(seq__18900_19284);
if(temp__5804__auto___19298){
var seq__18900_19299__$1 = temp__5804__auto___19298;
if(cljs.core.chunked_seq_QMARK_(seq__18900_19299__$1)){
var c__5525__auto___19301 = cljs.core.chunk_first(seq__18900_19299__$1);
var G__19302 = cljs.core.chunk_rest(seq__18900_19299__$1);
var G__19303 = c__5525__auto___19301;
var G__19304 = cljs.core.count(c__5525__auto___19301);
var G__19305 = (0);
seq__18900_19284 = G__19302;
chunk__18902_19285 = G__19303;
count__18903_19286 = G__19304;
i__18904_19287 = G__19305;
continue;
} else {
var child_19307 = cljs.core.first(seq__18900_19299__$1);
if(cljs.core.truth_(child_19307)){
node.appendChild(child_19307);


var G__19308 = cljs.core.next(seq__18900_19299__$1);
var G__19309 = null;
var G__19310 = (0);
var G__19311 = (0);
seq__18900_19284 = G__19308;
chunk__18902_19285 = G__19309;
count__18903_19286 = G__19310;
i__18904_19287 = G__19311;
continue;
} else {
var G__19312 = cljs.core.next(seq__18900_19299__$1);
var G__19313 = null;
var G__19314 = (0);
var G__19315 = (0);
seq__18900_19284 = G__19312;
chunk__18902_19285 = G__19313;
count__18903_19286 = G__19314;
i__18904_19287 = G__19315;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19282);
}
}


var G__19316 = seq__18873_19275;
var G__19317 = chunk__18875_19276;
var G__19318 = count__18876_19277;
var G__19319 = (i__18877_19278 + (1));
seq__18873_19275 = G__19316;
chunk__18875_19276 = G__19317;
count__18876_19277 = G__19318;
i__18877_19278 = G__19319;
continue;
} else {
var G__19320 = seq__18873_19275;
var G__19321 = chunk__18875_19276;
var G__19322 = count__18876_19277;
var G__19323 = (i__18877_19278 + (1));
seq__18873_19275 = G__19320;
chunk__18875_19276 = G__19321;
count__18876_19277 = G__19322;
i__18877_19278 = G__19323;
continue;
}
} else {
var temp__5804__auto___19324 = cljs.core.seq(seq__18873_19275);
if(temp__5804__auto___19324){
var seq__18873_19325__$1 = temp__5804__auto___19324;
if(cljs.core.chunked_seq_QMARK_(seq__18873_19325__$1)){
var c__5525__auto___19326 = cljs.core.chunk_first(seq__18873_19325__$1);
var G__19327 = cljs.core.chunk_rest(seq__18873_19325__$1);
var G__19328 = c__5525__auto___19326;
var G__19329 = cljs.core.count(c__5525__auto___19326);
var G__19330 = (0);
seq__18873_19275 = G__19327;
chunk__18875_19276 = G__19328;
count__18876_19277 = G__19329;
i__18877_19278 = G__19330;
continue;
} else {
var child_struct_19331 = cljs.core.first(seq__18873_19325__$1);
if((!((child_struct_19331 == null)))){
if(typeof child_struct_19331 === 'string'){
var text_19332 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19332),child_struct_19331].join(''));
} else {
var children_19333 = shadow.dom.svg_node(child_struct_19331);
if(cljs.core.seq_QMARK_(children_19333)){
var seq__18910_19334 = cljs.core.seq(children_19333);
var chunk__18912_19335 = null;
var count__18913_19336 = (0);
var i__18914_19337 = (0);
while(true){
if((i__18914_19337 < count__18913_19336)){
var child_19338 = chunk__18912_19335.cljs$core$IIndexed$_nth$arity$2(null, i__18914_19337);
if(cljs.core.truth_(child_19338)){
node.appendChild(child_19338);


var G__19339 = seq__18910_19334;
var G__19340 = chunk__18912_19335;
var G__19341 = count__18913_19336;
var G__19342 = (i__18914_19337 + (1));
seq__18910_19334 = G__19339;
chunk__18912_19335 = G__19340;
count__18913_19336 = G__19341;
i__18914_19337 = G__19342;
continue;
} else {
var G__19343 = seq__18910_19334;
var G__19344 = chunk__18912_19335;
var G__19345 = count__18913_19336;
var G__19346 = (i__18914_19337 + (1));
seq__18910_19334 = G__19343;
chunk__18912_19335 = G__19344;
count__18913_19336 = G__19345;
i__18914_19337 = G__19346;
continue;
}
} else {
var temp__5804__auto___19347__$1 = cljs.core.seq(seq__18910_19334);
if(temp__5804__auto___19347__$1){
var seq__18910_19348__$1 = temp__5804__auto___19347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18910_19348__$1)){
var c__5525__auto___19349 = cljs.core.chunk_first(seq__18910_19348__$1);
var G__19350 = cljs.core.chunk_rest(seq__18910_19348__$1);
var G__19351 = c__5525__auto___19349;
var G__19352 = cljs.core.count(c__5525__auto___19349);
var G__19353 = (0);
seq__18910_19334 = G__19350;
chunk__18912_19335 = G__19351;
count__18913_19336 = G__19352;
i__18914_19337 = G__19353;
continue;
} else {
var child_19354 = cljs.core.first(seq__18910_19348__$1);
if(cljs.core.truth_(child_19354)){
node.appendChild(child_19354);


var G__19355 = cljs.core.next(seq__18910_19348__$1);
var G__19356 = null;
var G__19357 = (0);
var G__19358 = (0);
seq__18910_19334 = G__19355;
chunk__18912_19335 = G__19356;
count__18913_19336 = G__19357;
i__18914_19337 = G__19358;
continue;
} else {
var G__19359 = cljs.core.next(seq__18910_19348__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__18910_19334 = G__19359;
chunk__18912_19335 = G__19360;
count__18913_19336 = G__19361;
i__18914_19337 = G__19362;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19333);
}
}


var G__19363 = cljs.core.next(seq__18873_19325__$1);
var G__19364 = null;
var G__19365 = (0);
var G__19366 = (0);
seq__18873_19275 = G__19363;
chunk__18875_19276 = G__19364;
count__18876_19277 = G__19365;
i__18877_19278 = G__19366;
continue;
} else {
var G__19367 = cljs.core.next(seq__18873_19325__$1);
var G__19368 = null;
var G__19369 = (0);
var G__19370 = (0);
seq__18873_19275 = G__19367;
chunk__18875_19276 = G__19368;
count__18876_19277 = G__19369;
i__18877_19278 = G__19370;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19374 = arguments.length;
var i__5727__auto___19375 = (0);
while(true){
if((i__5727__auto___19375 < len__5726__auto___19374)){
args__5732__auto__.push((arguments[i__5727__auto___19375]));

var G__19376 = (i__5727__auto___19375 + (1));
i__5727__auto___19375 = G__19376;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18925){
var G__18926 = cljs.core.first(seq18925);
var seq18925__$1 = cljs.core.next(seq18925);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18926,seq18925__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18932 = arguments.length;
switch (G__18932) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__14267__auto___19383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_18938){
var state_val_18939 = (state_18938[(1)]);
if((state_val_18939 === (1))){
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18938__$1,(2),once_or_cleanup);
} else {
if((state_val_18939 === (2))){
var inst_18935 = (state_18938[(2)]);
var inst_18936 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18938__$1 = (function (){var statearr_18940 = state_18938;
(statearr_18940[(7)] = inst_18935);

return statearr_18940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18938__$1,inst_18936);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13236__auto__ = null;
var shadow$dom$state_machine__13236__auto____0 = (function (){
var statearr_18941 = [null,null,null,null,null,null,null,null];
(statearr_18941[(0)] = shadow$dom$state_machine__13236__auto__);

(statearr_18941[(1)] = (1));

return statearr_18941;
});
var shadow$dom$state_machine__13236__auto____1 = (function (state_18938){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_18938);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e18944){var ex__13239__auto__ = e18944;
var statearr_18946_19385 = state_18938;
(statearr_18946_19385[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_18938[(4)]))){
var statearr_18947_19386 = state_18938;
(statearr_18947_19386[(1)] = cljs.core.first((state_18938[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19388 = state_18938;
state_18938 = G__19388;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
shadow$dom$state_machine__13236__auto__ = function(state_18938){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13236__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13236__auto____1.call(this,state_18938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13236__auto____0;
shadow$dom$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13236__auto____1;
return shadow$dom$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_18949 = f__14268__auto__();
(statearr_18949[(6)] = c__14267__auto___19383);

return statearr_18949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
