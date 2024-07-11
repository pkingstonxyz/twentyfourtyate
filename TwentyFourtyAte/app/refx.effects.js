goog.provide('refx.effects');
refx.effects.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
refx.effects.register = (function refx$effects$register(id,handler){
return refx.registry.add_BANG_(refx.effects.kind,id,handler);
});
refx.effects.db_effect = (function refx$effects$db_effect(db){
if((cljs.core.deref(refx.db.app_db) === db)){
return null;
} else {
return cljs.core.reset_BANG_(refx.db.app_db,db);
}
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
refx.effects.do_fx = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function refx$effects$do_fx_after(context){
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___27415 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___27415)){
var new_db_27416 = temp__5804__auto___27415;
refx.effects.db_effect(new_db_27416);
} else {
}

var seq__27354 = cljs.core.seq(effects_without_db);
var chunk__27355 = null;
var count__27356 = (0);
var i__27357 = (0);
while(true){
if((i__27357 < count__27356)){
var vec__27367 = chunk__27355.cljs$core$IIndexed$_nth$arity$2(null,i__27357);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27367,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27367,(1),null);
var temp__5802__auto___27417 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27417)){
var effect_fn_27418 = temp__5802__auto___27417;
(effect_fn_27418.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27418.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27418.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__27419 = seq__27354;
var G__27420 = chunk__27355;
var G__27421 = count__27356;
var G__27422 = (i__27357 + (1));
seq__27354 = G__27419;
chunk__27355 = G__27420;
count__27356 = G__27421;
i__27357 = G__27422;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27354);
if(temp__5804__auto__){
var seq__27354__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27354__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27354__$1);
var G__27423 = cljs.core.chunk_rest(seq__27354__$1);
var G__27424 = c__5568__auto__;
var G__27425 = cljs.core.count(c__5568__auto__);
var G__27426 = (0);
seq__27354 = G__27423;
chunk__27355 = G__27424;
count__27356 = G__27425;
i__27357 = G__27426;
continue;
} else {
var vec__27370 = cljs.core.first(seq__27354__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(1),null);
var temp__5802__auto___27427 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27427)){
var effect_fn_27428 = temp__5802__auto___27427;
(effect_fn_27428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27428.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__27429 = cljs.core.next(seq__27354__$1);
var G__27430 = null;
var G__27431 = (0);
var G__27432 = (0);
seq__27354 = G__27429;
chunk__27355 = G__27430;
count__27356 = G__27431;
i__27357 = G__27432;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__27373){
var map__27374 = p__27373;
var map__27374__$1 = cljs.core.__destructure_map(map__27374);
var effect = map__27374__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27374__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27374__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-later value:",effect], 0));
} else {
return refx.interop.set_timeout_BANG_((function (){
return refx.dispatch.dispatch(dispatch);
}),ms);
}
});
refx.effects.register(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return refx.effects.dispatch_later(value);
} else {
var seq__27387 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27388 = null;
var count__27389 = (0);
var i__27390 = (0);
while(true){
if((i__27390 < count__27389)){
var effect = chunk__27388.cljs$core$IIndexed$_nth$arity$2(null,i__27390);
refx.effects.dispatch_later(effect);


var G__27433 = seq__27387;
var G__27434 = chunk__27388;
var G__27435 = count__27389;
var G__27436 = (i__27390 + (1));
seq__27387 = G__27433;
chunk__27388 = G__27434;
count__27389 = G__27435;
i__27390 = G__27436;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27387);
if(temp__5804__auto__){
var seq__27387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27387__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27387__$1);
var G__27437 = cljs.core.chunk_rest(seq__27387__$1);
var G__27438 = c__5568__auto__;
var G__27439 = cljs.core.count(c__5568__auto__);
var G__27440 = (0);
seq__27387 = G__27437;
chunk__27388 = G__27438;
count__27389 = G__27439;
i__27390 = G__27440;
continue;
} else {
var effect = cljs.core.first(seq__27387__$1);
refx.effects.dispatch_later(effect);


var G__27441 = cljs.core.next(seq__27387__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27387 = G__27441;
chunk__27388 = G__27442;
count__27389 = G__27443;
i__27390 = G__27444;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__27391 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__27392 = null;
var count__27393 = (0);
var i__27394 = (0);
while(true){
if((i__27394 < count__27393)){
var vec__27401 = chunk__27392.cljs$core$IIndexed$_nth$arity$2(null,i__27394);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___27445 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27445)){
var effect_fn_27446 = temp__5802__auto___27445;
(effect_fn_27446.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27446.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27446.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__27447 = seq__27391;
var G__27448 = chunk__27392;
var G__27449 = count__27393;
var G__27450 = (i__27394 + (1));
seq__27391 = G__27447;
chunk__27392 = G__27448;
count__27393 = G__27449;
i__27394 = G__27450;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27391);
if(temp__5804__auto__){
var seq__27391__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27391__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27391__$1);
var G__27451 = cljs.core.chunk_rest(seq__27391__$1);
var G__27452 = c__5568__auto__;
var G__27453 = cljs.core.count(c__5568__auto__);
var G__27454 = (0);
seq__27391 = G__27451;
chunk__27392 = G__27452;
count__27393 = G__27453;
i__27394 = G__27454;
continue;
} else {
var vec__27404 = cljs.core.first(seq__27391__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27404,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27404,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___27456 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27456)){
var effect_fn_27457 = temp__5802__auto___27456;
(effect_fn_27457.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27457.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27457.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__27458 = cljs.core.next(seq__27391__$1);
var G__27459 = null;
var G__27460 = (0);
var G__27461 = (0);
seq__27391 = G__27458;
chunk__27392 = G__27459;
count__27393 = G__27460;
i__27394 = G__27461;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return refx.dispatch.dispatch(value);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__27407 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27408 = null;
var count__27409 = (0);
var i__27410 = (0);
while(true){
if((i__27410 < count__27409)){
var event = chunk__27408.cljs$core$IIndexed$_nth$arity$2(null,i__27410);
refx.dispatch.dispatch(event);


var G__27463 = seq__27407;
var G__27464 = chunk__27408;
var G__27465 = count__27409;
var G__27466 = (i__27410 + (1));
seq__27407 = G__27463;
chunk__27408 = G__27464;
count__27409 = G__27465;
i__27410 = G__27466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27407);
if(temp__5804__auto__){
var seq__27407__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27407__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27407__$1);
var G__27467 = cljs.core.chunk_rest(seq__27407__$1);
var G__27468 = c__5568__auto__;
var G__27469 = cljs.core.count(c__5568__auto__);
var G__27470 = (0);
seq__27407 = G__27467;
chunk__27408 = G__27468;
count__27409 = G__27469;
i__27410 = G__27470;
continue;
} else {
var event = cljs.core.first(seq__27407__$1);
refx.dispatch.dispatch(event);


var G__27471 = cljs.core.next(seq__27407__$1);
var G__27472 = null;
var G__27473 = (0);
var G__27474 = (0);
seq__27407 = G__27471;
chunk__27408 = G__27472;
count__27409 = G__27473;
i__27410 = G__27474;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
if(cljs.core.sequential_QMARK_(value)){
var seq__27411 = cljs.core.seq(value);
var chunk__27412 = null;
var count__27413 = (0);
var i__27414 = (0);
while(true){
if((i__27414 < count__27413)){
var event_id = chunk__27412.cljs$core$IIndexed$_nth$arity$2(null,i__27414);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__27475 = seq__27411;
var G__27476 = chunk__27412;
var G__27477 = count__27413;
var G__27478 = (i__27414 + (1));
seq__27411 = G__27475;
chunk__27412 = G__27476;
count__27413 = G__27477;
i__27414 = G__27478;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27411);
if(temp__5804__auto__){
var seq__27411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27411__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27411__$1);
var G__27479 = cljs.core.chunk_rest(seq__27411__$1);
var G__27480 = c__5568__auto__;
var G__27481 = cljs.core.count(c__5568__auto__);
var G__27482 = (0);
seq__27411 = G__27479;
chunk__27412 = G__27480;
count__27413 = G__27481;
i__27414 = G__27482;
continue;
} else {
var event_id = cljs.core.first(seq__27411__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__27484 = cljs.core.next(seq__27411__$1);
var G__27485 = null;
var G__27486 = (0);
var G__27487 = (0);
seq__27411 = G__27484;
chunk__27412 = G__27485;
count__27413 = G__27486;
i__27414 = G__27487;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return refx.registry.clear_BANG_(refx.events.kind);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"db","db",993250759),refx.effects.db_effect);

//# sourceMappingURL=refx.effects.js.map
