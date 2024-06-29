goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13337){
var map__13338 = p__13337;
var map__13338__$1 = cljs.core.__destructure_map(map__13338);
var runtime = map__13338__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13338__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13742 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13742)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13345 = runtime;
var G__13346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13742);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13345,G__13346) : shadow.remote.runtime.shared.process.call(null, G__13345,G__13346));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13399,res){
var map__13401 = p__13399;
var map__13401__$1 = cljs.core.__destructure_map(map__13401);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13401__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13401__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13403 = res;
var G__13403__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13403,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13403);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13403__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13403__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13420 = arguments.length;
switch (G__13420) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13433,msg,handlers,timeout_after_ms){
var map__13436 = p__13433;
var map__13436__$1 = cljs.core.__destructure_map(map__13436);
var runtime = map__13436__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13436__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13784 = arguments.length;
var i__5727__auto___13785 = (0);
while(true){
if((i__5727__auto___13785 < len__5726__auto___13784)){
args__5732__auto__.push((arguments[i__5727__auto___13785]));

var G__13786 = (i__5727__auto___13785 + (1));
i__5727__auto___13785 = G__13786;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13483,ev,args){
var map__13485 = p__13483;
var map__13485__$1 = cljs.core.__destructure_map(map__13485);
var runtime = map__13485__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13485__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13486 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13489 = null;
var count__13490 = (0);
var i__13491 = (0);
while(true){
if((i__13491 < count__13490)){
var ext = chunk__13489.cljs$core$IIndexed$_nth$arity$2(null, i__13491);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13806 = seq__13486;
var G__13807 = chunk__13489;
var G__13808 = count__13490;
var G__13809 = (i__13491 + (1));
seq__13486 = G__13806;
chunk__13489 = G__13807;
count__13490 = G__13808;
i__13491 = G__13809;
continue;
} else {
var G__13814 = seq__13486;
var G__13815 = chunk__13489;
var G__13816 = count__13490;
var G__13817 = (i__13491 + (1));
seq__13486 = G__13814;
chunk__13489 = G__13815;
count__13490 = G__13816;
i__13491 = G__13817;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13486);
if(temp__5804__auto__){
var seq__13486__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13486__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13486__$1);
var G__13824 = cljs.core.chunk_rest(seq__13486__$1);
var G__13825 = c__5525__auto__;
var G__13826 = cljs.core.count(c__5525__auto__);
var G__13827 = (0);
seq__13486 = G__13824;
chunk__13489 = G__13825;
count__13490 = G__13826;
i__13491 = G__13827;
continue;
} else {
var ext = cljs.core.first(seq__13486__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13832 = cljs.core.next(seq__13486__$1);
var G__13833 = null;
var G__13834 = (0);
var G__13835 = (0);
seq__13486 = G__13832;
chunk__13489 = G__13833;
count__13490 = G__13834;
i__13491 = G__13835;
continue;
} else {
var G__13836 = cljs.core.next(seq__13486__$1);
var G__13837 = null;
var G__13838 = (0);
var G__13839 = (0);
seq__13486 = G__13836;
chunk__13489 = G__13837;
count__13490 = G__13838;
i__13491 = G__13839;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13471){
var G__13472 = cljs.core.first(seq13471);
var seq13471__$1 = cljs.core.next(seq13471);
var G__13473 = cljs.core.first(seq13471__$1);
var seq13471__$2 = cljs.core.next(seq13471__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13472,G__13473,seq13471__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13532,p__13533){
var map__13539 = p__13532;
var map__13539__$1 = cljs.core.__destructure_map(map__13539);
var runtime = map__13539__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13539__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13540 = p__13533;
var map__13540__$1 = cljs.core.__destructure_map(map__13540);
var msg = map__13540__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13540__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13545 = cljs.core.deref(state_ref);
var map__13545__$1 = cljs.core.__destructure_map(map__13545);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13545__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13545__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13552,msg){
var map__13554 = p__13552;
var map__13554__$1 = cljs.core.__destructure_map(map__13554);
var runtime = map__13554__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13606,key,p__13607){
var map__13612 = p__13606;
var map__13612__$1 = cljs.core.__destructure_map(map__13612);
var state = map__13612__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13612__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13621 = p__13607;
var map__13621__$1 = cljs.core.__destructure_map(map__13621);
var spec = map__13621__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13621__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13621__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13625,key,spec){
var map__13626 = p__13625;
var map__13626__$1 = cljs.core.__destructure_map(map__13626);
var runtime = map__13626__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___13860 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___13860 == null)){
} else {
var on_welcome_13861 = temp__5808__auto___13860;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_13861.cljs$core$IFn$_invoke$arity$0 ? on_welcome_13861.cljs$core$IFn$_invoke$arity$0() : on_welcome_13861.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13629_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13629_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13631_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13631_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13632_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13632_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13633_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13633_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13634_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13634_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13642,key){
var map__13646 = p__13642;
var map__13646__$1 = cljs.core.__destructure_map(map__13646);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13660,msg){
var map__13661 = p__13660;
var map__13661__$1 = cljs.core.__destructure_map(map__13661);
var runtime = map__13661__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13669,p__13670){
var map__13671 = p__13669;
var map__13671__$1 = cljs.core.__destructure_map(map__13671);
var runtime = map__13671__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13671__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13672 = p__13670;
var map__13672__$1 = cljs.core.__destructure_map(map__13672);
var msg = map__13672__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13682 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13684 = null;
var count__13685 = (0);
var i__13686 = (0);
while(true){
if((i__13686 < count__13685)){
var map__13717 = chunk__13684.cljs$core$IIndexed$_nth$arity$2(null, i__13686);
var map__13717__$1 = cljs.core.__destructure_map(map__13717);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13872 = seq__13682;
var G__13873 = chunk__13684;
var G__13874 = count__13685;
var G__13875 = (i__13686 + (1));
seq__13682 = G__13872;
chunk__13684 = G__13873;
count__13685 = G__13874;
i__13686 = G__13875;
continue;
} else {
var G__13876 = seq__13682;
var G__13877 = chunk__13684;
var G__13878 = count__13685;
var G__13879 = (i__13686 + (1));
seq__13682 = G__13876;
chunk__13684 = G__13877;
count__13685 = G__13878;
i__13686 = G__13879;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13682);
if(temp__5804__auto__){
var seq__13682__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13682__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13682__$1);
var G__13880 = cljs.core.chunk_rest(seq__13682__$1);
var G__13881 = c__5525__auto__;
var G__13882 = cljs.core.count(c__5525__auto__);
var G__13883 = (0);
seq__13682 = G__13880;
chunk__13684 = G__13881;
count__13685 = G__13882;
i__13686 = G__13883;
continue;
} else {
var map__13726 = cljs.core.first(seq__13682__$1);
var map__13726__$1 = cljs.core.__destructure_map(map__13726);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13726__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13884 = cljs.core.next(seq__13682__$1);
var G__13885 = null;
var G__13886 = (0);
var G__13887 = (0);
seq__13682 = G__13884;
chunk__13684 = G__13885;
count__13685 = G__13886;
i__13686 = G__13887;
continue;
} else {
var G__13888 = cljs.core.next(seq__13682__$1);
var G__13889 = null;
var G__13890 = (0);
var G__13891 = (0);
seq__13682 = G__13888;
chunk__13684 = G__13889;
count__13685 = G__13890;
i__13686 = G__13891;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
