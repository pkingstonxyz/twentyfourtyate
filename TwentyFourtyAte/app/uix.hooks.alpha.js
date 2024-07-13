goog.provide('uix.hooks.alpha');
uix.hooks.alpha.clojure_primitive_QMARK_ = (function uix$hooks$alpha$clojure_primitive_QMARK_(v){
return (((v instanceof cljs.core.Keyword)) || (((cljs.core.uuid_QMARK_(v)) || ((v instanceof cljs.core.Symbol)))));
});
uix.hooks.alpha.choose_value = (function uix$hooks$alpha$choose_value(nv,cv){
if(((uix.hooks.alpha.clojure_primitive_QMARK_(nv)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv,cv)))){
return cv;
} else {
return nv;
}
});
/**
 * Replicates React's behaviour when updating state with identical primitive JS type,
 *   but for keywords, UUIDs and symbols that are in fact non-primitives
 */
uix.hooks.alpha.use_clojure_primitive_aware_updater = (function uix$hooks$alpha$use_clojure_primitive_aware_updater(updater){
return shadow.js.shim.module$react.useCallback((function (v){
var G__28100 = (function (cv){
if(cljs.core.fn_QMARK_(v)){
return uix.hooks.alpha.choose_value((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(cv) : v.call(null,cv)),cv);
} else {
return uix.hooks.alpha.choose_value(v,cv);
}
});
return (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(G__28100) : updater.call(null,G__28100));
}),[updater]);
});
uix.hooks.alpha.use_state = (function uix$hooks$alpha$use_state(value){
var vec__28103 = shadow.js.shim.module$react.useState(value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(1),null);
var set_state__$1 = uix.hooks.alpha.use_clojure_primitive_aware_updater(set_state);
return [state,set_state__$1];
});
/**
 * Same as `use-clojure-primitive-aware-updater` but for `use-reducer`
 */
uix.hooks.alpha.clojure_primitive_aware_reducer_updater = (function uix$hooks$alpha$clojure_primitive_aware_reducer_updater(f){
return (function (state,action){
return uix.hooks.alpha.choose_value((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,action) : f.call(null,state,action)),state);
});
});
uix.hooks.alpha.use_reducer = (function uix$hooks$alpha$use_reducer(var_args){
var G__28134 = arguments.length;
switch (G__28134) {
case 2:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
var updater = uix.hooks.alpha.clojure_primitive_aware_reducer_updater(f);
return shadow.js.shim.module$react.useReducer(updater,value);
}));

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
var updater = uix.hooks.alpha.clojure_primitive_aware_reducer_updater(f);
return shadow.js.shim.module$react.useReducer(updater,value,init_state);
}));

(uix.hooks.alpha.use_reducer.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_ref = (function uix$hooks$alpha$use_ref(value){
return shadow.js.shim.module$react.useRef(value);
});
uix.hooks.alpha.with_return_value_check = (function uix$hooks$alpha$with_return_value_check(f){
return (function (){
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret)){
return ret;
} else {
return undefined;
}
});
});
uix.hooks.alpha.use_effect = (function uix$hooks$alpha$use_effect(var_args){
var G__28142 = arguments.length;
switch (G__28142) {
case 1:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return shadow.js.shim.module$react.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return shadow.js.shim.module$react.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_layout_effect = (function uix$hooks$alpha$use_layout_effect(var_args){
var G__28145 = arguments.length;
switch (G__28145) {
case 1:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return shadow.js.shim.module$react.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return shadow.js.shim.module$react.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_layout_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_insertion_effect = (function uix$hooks$alpha$use_insertion_effect(var_args){
var G__28147 = arguments.length;
switch (G__28147) {
case 1:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$react.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f));
}));

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return shadow.js.shim.module$react.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f),deps);
}));

(uix.hooks.alpha.use_insertion_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_callback = (function uix$hooks$alpha$use_callback(f,deps){
return shadow.js.shim.module$react.useCallback(f,deps);
});
uix.hooks.alpha.use_memo = (function uix$hooks$alpha$use_memo(f,deps){
return shadow.js.shim.module$react.useMemo(f,deps);
});
uix.hooks.alpha.use_context = (function uix$hooks$alpha$use_context(v){
return shadow.js.shim.module$react.useContext(v);
});
uix.hooks.alpha.use_imperative_handle = (function uix$hooks$alpha$use_imperative_handle(var_args){
var G__28158 = arguments.length;
switch (G__28158) {
case 2:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return shadow.js.shim.module$react.useImperativeHandle(ref,create_handle);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
return shadow.js.shim.module$react.useImperativeHandle(ref,create_handle,deps);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_debug = (function uix$hooks$alpha$use_debug(var_args){
var G__28164 = arguments.length;
switch (G__28164) {
case 1:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1 = (function (v){
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2 = (function (v,fmt){
return shadow.js.shim.module$react.useDebugValue(v,fmt);
}));

(uix.hooks.alpha.use_debug.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_deferred_value = (function uix$hooks$alpha$use_deferred_value(v){
return shadow.js.shim.module$react.useDeferredValue(v);
});
uix.hooks.alpha.use_transition = (function uix$hooks$alpha$use_transition(){
return shadow.js.shim.module$react.useTransition();
});
uix.hooks.alpha.use_id = (function uix$hooks$alpha$use_id(){
return shadow.js.shim.module$react.useId();
});
uix.hooks.alpha.use_sync_external_store = (function uix$hooks$alpha$use_sync_external_store(var_args){
var G__28166 = arguments.length;
switch (G__28166) {
case 2:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return shadow.js.shim.module$react.useSyncExternalStore(subscribe,get_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_snapshot){
return shadow.js.shim.module$react.useSyncExternalStore(subscribe,get_snapshot,get_server_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=uix.hooks.alpha.js.map
