goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__27735){
var map__27742 = p__27735;
var map__27742__$1 = cljs.core.__destructure_map(map__27742);
var runtime = map__27742__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_27894 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_27894)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__27750 = runtime;
var G__27752 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_27894);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__27750,G__27752) : shadow.remote.runtime.shared.process.call(null,G__27750,G__27752));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__27760,res){
var map__27762 = p__27760;
var map__27762__$1 = cljs.core.__destructure_map(map__27762);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27762__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27762__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__27763 = res;
var G__27763__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27763,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__27763);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27763__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__27763__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__27767 = arguments.length;
switch (G__27767) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__27768,msg,handlers,timeout_after_ms){
var map__27770 = p__27768;
var map__27770__$1 = cljs.core.__destructure_map(map__27770);
var runtime = map__27770__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var args__5775__auto__ = [];
var len__5769__auto___27906 = arguments.length;
var i__5770__auto___27907 = (0);
while(true){
if((i__5770__auto___27907 < len__5769__auto___27906)){
args__5775__auto__.push((arguments[i__5770__auto___27907]));

var G__27908 = (i__5770__auto___27907 + (1));
i__5770__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27775,ev,args){
var map__27776 = p__27775;
var map__27776__$1 = cljs.core.__destructure_map(map__27776);
var runtime = map__27776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__27777 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27780 = null;
var count__27781 = (0);
var i__27782 = (0);
while(true){
if((i__27782 < count__27781)){
var ext = chunk__27780.cljs$core$IIndexed$_nth$arity$2(null,i__27782);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27916 = seq__27777;
var G__27917 = chunk__27780;
var G__27918 = count__27781;
var G__27919 = (i__27782 + (1));
seq__27777 = G__27916;
chunk__27780 = G__27917;
count__27781 = G__27918;
i__27782 = G__27919;
continue;
} else {
var G__27920 = seq__27777;
var G__27921 = chunk__27780;
var G__27922 = count__27781;
var G__27923 = (i__27782 + (1));
seq__27777 = G__27920;
chunk__27780 = G__27921;
count__27781 = G__27922;
i__27782 = G__27923;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27777);
if(temp__5804__auto__){
var seq__27777__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27777__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27777__$1);
var G__27938 = cljs.core.chunk_rest(seq__27777__$1);
var G__27939 = c__5568__auto__;
var G__27940 = cljs.core.count(c__5568__auto__);
var G__27941 = (0);
seq__27777 = G__27938;
chunk__27780 = G__27939;
count__27781 = G__27940;
i__27782 = G__27941;
continue;
} else {
var ext = cljs.core.first(seq__27777__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27943 = cljs.core.next(seq__27777__$1);
var G__27944 = null;
var G__27945 = (0);
var G__27946 = (0);
seq__27777 = G__27943;
chunk__27780 = G__27944;
count__27781 = G__27945;
i__27782 = G__27946;
continue;
} else {
var G__27948 = cljs.core.next(seq__27777__$1);
var G__27949 = null;
var G__27950 = (0);
var G__27951 = (0);
seq__27777 = G__27948;
chunk__27780 = G__27949;
count__27781 = G__27950;
i__27782 = G__27951;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq27771){
var G__27772 = cljs.core.first(seq27771);
var seq27771__$1 = cljs.core.next(seq27771);
var G__27773 = cljs.core.first(seq27771__$1);
var seq27771__$2 = cljs.core.next(seq27771__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27772,G__27773,seq27771__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__27801,p__27802){
var map__27805 = p__27801;
var map__27805__$1 = cljs.core.__destructure_map(map__27805);
var runtime = map__27805__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27805__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27806 = p__27802;
var map__27806__$1 = cljs.core.__destructure_map(map__27806);
var msg = map__27806__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__27809 = cljs.core.deref(state_ref);
var map__27809__$1 = cljs.core.__destructure_map(map__27809);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27809__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27809__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__27811,msg){
var map__27812 = p__27811;
var map__27812__$1 = cljs.core.__destructure_map(map__27812);
var runtime = map__27812__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__27814,key,p__27815){
var map__27816 = p__27814;
var map__27816__$1 = cljs.core.__destructure_map(map__27816);
var state = map__27816__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27816__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__27821 = p__27815;
var map__27821__$1 = cljs.core.__destructure_map(map__27821);
var spec = map__27821__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27821__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__27823,key,spec){
var map__27824 = p__27823;
var map__27824__$1 = cljs.core.__destructure_map(map__27824);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27824__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__27825_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__27825_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__27826_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__27826_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__27827_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__27827_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__27828_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__27828_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__27829_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__27829_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__27835,key){
var map__27837 = p__27835;
var map__27837__$1 = cljs.core.__destructure_map(map__27837);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27837__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__27842,msg){
var map__27843 = p__27842;
var map__27843__$1 = cljs.core.__destructure_map(map__27843);
var runtime = map__27843__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27843__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__27847,p__27848){
var map__27850 = p__27847;
var map__27850__$1 = cljs.core.__destructure_map(map__27850);
var runtime = map__27850__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27851 = p__27848;
var map__27851__$1 = cljs.core.__destructure_map(map__27851);
var msg = map__27851__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27851__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27851__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
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
var seq__27858 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27860 = null;
var count__27861 = (0);
var i__27862 = (0);
while(true){
if((i__27862 < count__27861)){
var map__27878 = chunk__27860.cljs$core$IIndexed$_nth$arity$2(null,i__27862);
var map__27878__$1 = cljs.core.__destructure_map(map__27878);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27878__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28010 = seq__27858;
var G__28011 = chunk__27860;
var G__28012 = count__27861;
var G__28013 = (i__27862 + (1));
seq__27858 = G__28010;
chunk__27860 = G__28011;
count__27861 = G__28012;
i__27862 = G__28013;
continue;
} else {
var G__28014 = seq__27858;
var G__28015 = chunk__27860;
var G__28016 = count__27861;
var G__28017 = (i__27862 + (1));
seq__27858 = G__28014;
chunk__27860 = G__28015;
count__27861 = G__28016;
i__27862 = G__28017;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27858);
if(temp__5804__auto__){
var seq__27858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27858__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27858__$1);
var G__28020 = cljs.core.chunk_rest(seq__27858__$1);
var G__28021 = c__5568__auto__;
var G__28022 = cljs.core.count(c__5568__auto__);
var G__28023 = (0);
seq__27858 = G__28020;
chunk__27860 = G__28021;
count__27861 = G__28022;
i__27862 = G__28023;
continue;
} else {
var map__27880 = cljs.core.first(seq__27858__$1);
var map__27880__$1 = cljs.core.__destructure_map(map__27880);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28026 = cljs.core.next(seq__27858__$1);
var G__28027 = null;
var G__28028 = (0);
var G__28029 = (0);
seq__27858 = G__28026;
chunk__27860 = G__28027;
count__27861 = G__28028;
i__27862 = G__28029;
continue;
} else {
var G__28030 = cljs.core.next(seq__27858__$1);
var G__28031 = null;
var G__28032 = (0);
var G__28033 = (0);
seq__27858 = G__28030;
chunk__27860 = G__28031;
count__27861 = G__28032;
i__27862 = G__28033;
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
