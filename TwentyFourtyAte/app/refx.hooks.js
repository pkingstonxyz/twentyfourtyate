goog.provide('refx.hooks');
/**
 * Uses a Ref to track ClojureScript values as dependencies, yielding
 * a new JavaScript array whenever the dependencies change.  This is
 * useful as React does not know about ClojureScript's equality semantics,
 * but will check for identical objects instead, leading to false
 * re-renders and possible infinite loops.
 */
refx.hooks.cljs_deps = (function refx$hooks$cljs_deps(deps){
var ref = shadow.js.shim.module$react.useRef(deps);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref.current,deps)){
(ref.current = deps);
} else {
}

return [ref.current];
});
if((typeof refx !== 'undefined') && (typeof refx.hooks !== 'undefined') && (typeof refx.hooks.use_sub_counter !== 'undefined')){
} else {
refx.hooks.use_sub_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * React hook to subscribe to signals.
 */
refx.hooks.use_sub = (function refx$hooks$use_sub(query_v){
var sub = refx.subs.sub(query_v);
var vec__27308 = shadow.js.shim.module$react.useMemo((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (callback){
var key = ["use-sub-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refx.hooks.use_sub_counter,cljs.core.inc))].join('');
refx.subs._add_listener(sub,key,callback);

return (function (){
return refx.subs._remove_listener(sub,key);
});
}),(function (){
return refx.subs._value(sub);
})], null);
}),refx.hooks.cljs_deps(sub));
var subscribe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27308,(0),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27308,(1),null);
shadow.js.shim.module$react.useDebugValue(query_v,cljs.core.str);

return shadow.js.shim.module$use_sync_external_store$shim.useSyncExternalStore(subscribe,snapshot);
});

//# sourceMappingURL=refx.hooks.js.map