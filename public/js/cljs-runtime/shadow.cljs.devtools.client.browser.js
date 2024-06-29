goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20977 = arguments.length;
var i__5727__auto___20978 = (0);
while(true){
if((i__5727__auto___20978 < len__5726__auto___20977)){
args__5732__auto__.push((arguments[i__5727__auto___20978]));

var G__20979 = (i__5727__auto___20978 + (1));
i__5727__auto___20978 = G__20979;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20697){
var G__20698 = cljs.core.first(seq20697);
var seq20697__$1 = cljs.core.next(seq20697);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20698,seq20697__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20699 = cljs.core.seq(sources);
var chunk__20700 = null;
var count__20701 = (0);
var i__20702 = (0);
while(true){
if((i__20702 < count__20701)){
var map__20709 = chunk__20700.cljs$core$IIndexed$_nth$arity$2(null, i__20702);
var map__20709__$1 = cljs.core.__destructure_map(map__20709);
var src = map__20709__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20710){var e_20980 = e20710;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20980);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20980.message)].join('')));
}

var G__20981 = seq__20699;
var G__20982 = chunk__20700;
var G__20983 = count__20701;
var G__20984 = (i__20702 + (1));
seq__20699 = G__20981;
chunk__20700 = G__20982;
count__20701 = G__20983;
i__20702 = G__20984;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20699);
if(temp__5804__auto__){
var seq__20699__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20699__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20699__$1);
var G__20985 = cljs.core.chunk_rest(seq__20699__$1);
var G__20986 = c__5525__auto__;
var G__20987 = cljs.core.count(c__5525__auto__);
var G__20988 = (0);
seq__20699 = G__20985;
chunk__20700 = G__20986;
count__20701 = G__20987;
i__20702 = G__20988;
continue;
} else {
var map__20711 = cljs.core.first(seq__20699__$1);
var map__20711__$1 = cljs.core.__destructure_map(map__20711);
var src = map__20711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20712){var e_20989 = e20712;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20989);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20989.message)].join('')));
}

var G__20990 = cljs.core.next(seq__20699__$1);
var G__20991 = null;
var G__20992 = (0);
var G__20993 = (0);
seq__20699 = G__20990;
chunk__20700 = G__20991;
count__20701 = G__20992;
i__20702 = G__20993;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20713 = cljs.core.seq(js_requires);
var chunk__20714 = null;
var count__20715 = (0);
var i__20716 = (0);
while(true){
if((i__20716 < count__20715)){
var js_ns = chunk__20714.cljs$core$IIndexed$_nth$arity$2(null, i__20716);
var require_str_20994 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20994);


var G__20995 = seq__20713;
var G__20996 = chunk__20714;
var G__20997 = count__20715;
var G__20998 = (i__20716 + (1));
seq__20713 = G__20995;
chunk__20714 = G__20996;
count__20715 = G__20997;
i__20716 = G__20998;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20713);
if(temp__5804__auto__){
var seq__20713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20713__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20713__$1);
var G__20999 = cljs.core.chunk_rest(seq__20713__$1);
var G__21000 = c__5525__auto__;
var G__21001 = cljs.core.count(c__5525__auto__);
var G__21002 = (0);
seq__20713 = G__20999;
chunk__20714 = G__21000;
count__20715 = G__21001;
i__20716 = G__21002;
continue;
} else {
var js_ns = cljs.core.first(seq__20713__$1);
var require_str_21003 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21003);


var G__21004 = cljs.core.next(seq__20713__$1);
var G__21005 = null;
var G__21006 = (0);
var G__21007 = (0);
seq__20713 = G__21004;
chunk__20714 = G__21005;
count__20715 = G__21006;
i__20716 = G__21007;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20718){
var map__20719 = p__20718;
var map__20719__$1 = cljs.core.__destructure_map(map__20719);
var msg = map__20719__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20720(s__20721){
return (new cljs.core.LazySeq(null,(function (){
var s__20721__$1 = s__20721;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20721__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20726 = cljs.core.first(xs__6360__auto__);
var map__20726__$1 = cljs.core.__destructure_map(map__20726);
var src = map__20726__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20726__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20726__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20721__$1,map__20726,map__20726__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20719,map__20719__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20720_$_iter__20722(s__20723){
return (new cljs.core.LazySeq(null,((function (s__20721__$1,map__20726,map__20726__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20719,map__20719__$1,msg,info,reload_info){
return (function (){
var s__20723__$1 = s__20723;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20723__$1);
if(temp__5804__auto____$1){
var s__20723__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20723__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20723__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20725 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20724 = (0);
while(true){
if((i__20724 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20724);
cljs.core.chunk_append(b__20725,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21008 = (i__20724 + (1));
i__20724 = G__21008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20725),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20720_$_iter__20722(cljs.core.chunk_rest(s__20723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20725),null);
}
} else {
var warning = cljs.core.first(s__20723__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20720_$_iter__20722(cljs.core.rest(s__20723__$2)));
}
} else {
return null;
}
break;
}
});})(s__20721__$1,map__20726,map__20726__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20719,map__20719__$1,msg,info,reload_info))
,null,null));
});})(s__20721__$1,map__20726,map__20726__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20719,map__20719__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20720(cljs.core.rest(s__20721__$1)));
} else {
var G__21009 = cljs.core.rest(s__20721__$1);
s__20721__$1 = G__21009;
continue;
}
} else {
var G__21010 = cljs.core.rest(s__20721__$1);
s__20721__$1 = G__21010;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20727_21011 = cljs.core.seq(warnings);
var chunk__20728_21012 = null;
var count__20729_21013 = (0);
var i__20730_21014 = (0);
while(true){
if((i__20730_21014 < count__20729_21013)){
var map__20733_21015 = chunk__20728_21012.cljs$core$IIndexed$_nth$arity$2(null, i__20730_21014);
var map__20733_21016__$1 = cljs.core.__destructure_map(map__20733_21015);
var w_21017 = map__20733_21016__$1;
var msg_21018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20733_21016__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20733_21016__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20733_21016__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20733_21016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21021)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21019),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21020),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21018__$1)].join(''));


var G__21022 = seq__20727_21011;
var G__21023 = chunk__20728_21012;
var G__21024 = count__20729_21013;
var G__21025 = (i__20730_21014 + (1));
seq__20727_21011 = G__21022;
chunk__20728_21012 = G__21023;
count__20729_21013 = G__21024;
i__20730_21014 = G__21025;
continue;
} else {
var temp__5804__auto___21026 = cljs.core.seq(seq__20727_21011);
if(temp__5804__auto___21026){
var seq__20727_21027__$1 = temp__5804__auto___21026;
if(cljs.core.chunked_seq_QMARK_(seq__20727_21027__$1)){
var c__5525__auto___21028 = cljs.core.chunk_first(seq__20727_21027__$1);
var G__21029 = cljs.core.chunk_rest(seq__20727_21027__$1);
var G__21030 = c__5525__auto___21028;
var G__21031 = cljs.core.count(c__5525__auto___21028);
var G__21032 = (0);
seq__20727_21011 = G__21029;
chunk__20728_21012 = G__21030;
count__20729_21013 = G__21031;
i__20730_21014 = G__21032;
continue;
} else {
var map__20734_21033 = cljs.core.first(seq__20727_21027__$1);
var map__20734_21034__$1 = cljs.core.__destructure_map(map__20734_21033);
var w_21035 = map__20734_21034__$1;
var msg_21036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734_21034__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734_21034__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734_21034__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734_21034__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21039)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21037),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21038),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21036__$1)].join(''));


var G__21040 = cljs.core.next(seq__20727_21027__$1);
var G__21041 = null;
var G__21042 = (0);
var G__21043 = (0);
seq__20727_21011 = G__21040;
chunk__20728_21012 = G__21041;
count__20729_21013 = G__21042;
i__20730_21014 = G__21043;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20717_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20717_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20735){
var map__20736 = p__20735;
var map__20736__$1 = cljs.core.__destructure_map(map__20736);
var msg = map__20736__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20737 = cljs.core.seq(updates);
var chunk__20739 = null;
var count__20740 = (0);
var i__20741 = (0);
while(true){
if((i__20741 < count__20740)){
var path = chunk__20739.cljs$core$IIndexed$_nth$arity$2(null, i__20741);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20851_21044 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20855_21045 = null;
var count__20856_21046 = (0);
var i__20857_21047 = (0);
while(true){
if((i__20857_21047 < count__20856_21046)){
var node_21048 = chunk__20855_21045.cljs$core$IIndexed$_nth$arity$2(null, i__20857_21047);
if(cljs.core.not(node_21048.shadow$old)){
var path_match_21049 = shadow.cljs.devtools.client.browser.match_paths(node_21048.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21049)){
var new_link_21050 = (function (){var G__20883 = node_21048.cloneNode(true);
G__20883.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21049),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20883;
})();
(node_21048.shadow$old = true);

(new_link_21050.onload = ((function (seq__20851_21044,chunk__20855_21045,count__20856_21046,i__20857_21047,seq__20737,chunk__20739,count__20740,i__20741,new_link_21050,path_match_21049,node_21048,path,map__20736,map__20736__$1,msg,updates,reload_info){
return (function (e){
var seq__20884_21051 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20886_21052 = null;
var count__20887_21053 = (0);
var i__20888_21054 = (0);
while(true){
if((i__20888_21054 < count__20887_21053)){
var map__20892_21055 = chunk__20886_21052.cljs$core$IIndexed$_nth$arity$2(null, i__20888_21054);
var map__20892_21056__$1 = cljs.core.__destructure_map(map__20892_21055);
var task_21057 = map__20892_21056__$1;
var fn_str_21058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20892_21056__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20892_21056__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21060 = goog.getObjectByName(fn_str_21058,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21059)].join(''));

(fn_obj_21060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21060.cljs$core$IFn$_invoke$arity$2(path,new_link_21050) : fn_obj_21060.call(null, path,new_link_21050));


var G__21061 = seq__20884_21051;
var G__21062 = chunk__20886_21052;
var G__21063 = count__20887_21053;
var G__21064 = (i__20888_21054 + (1));
seq__20884_21051 = G__21061;
chunk__20886_21052 = G__21062;
count__20887_21053 = G__21063;
i__20888_21054 = G__21064;
continue;
} else {
var temp__5804__auto___21065 = cljs.core.seq(seq__20884_21051);
if(temp__5804__auto___21065){
var seq__20884_21066__$1 = temp__5804__auto___21065;
if(cljs.core.chunked_seq_QMARK_(seq__20884_21066__$1)){
var c__5525__auto___21067 = cljs.core.chunk_first(seq__20884_21066__$1);
var G__21068 = cljs.core.chunk_rest(seq__20884_21066__$1);
var G__21069 = c__5525__auto___21067;
var G__21070 = cljs.core.count(c__5525__auto___21067);
var G__21071 = (0);
seq__20884_21051 = G__21068;
chunk__20886_21052 = G__21069;
count__20887_21053 = G__21070;
i__20888_21054 = G__21071;
continue;
} else {
var map__20893_21072 = cljs.core.first(seq__20884_21066__$1);
var map__20893_21073__$1 = cljs.core.__destructure_map(map__20893_21072);
var task_21074 = map__20893_21073__$1;
var fn_str_21075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893_21073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893_21073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21077 = goog.getObjectByName(fn_str_21075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21076)].join(''));

(fn_obj_21077.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21077.cljs$core$IFn$_invoke$arity$2(path,new_link_21050) : fn_obj_21077.call(null, path,new_link_21050));


var G__21078 = cljs.core.next(seq__20884_21066__$1);
var G__21079 = null;
var G__21080 = (0);
var G__21081 = (0);
seq__20884_21051 = G__21078;
chunk__20886_21052 = G__21079;
count__20887_21053 = G__21080;
i__20888_21054 = G__21081;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21048);
});})(seq__20851_21044,chunk__20855_21045,count__20856_21046,i__20857_21047,seq__20737,chunk__20739,count__20740,i__20741,new_link_21050,path_match_21049,node_21048,path,map__20736,map__20736__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21049], 0));

goog.dom.insertSiblingAfter(new_link_21050,node_21048);


var G__21082 = seq__20851_21044;
var G__21083 = chunk__20855_21045;
var G__21084 = count__20856_21046;
var G__21085 = (i__20857_21047 + (1));
seq__20851_21044 = G__21082;
chunk__20855_21045 = G__21083;
count__20856_21046 = G__21084;
i__20857_21047 = G__21085;
continue;
} else {
var G__21086 = seq__20851_21044;
var G__21087 = chunk__20855_21045;
var G__21088 = count__20856_21046;
var G__21089 = (i__20857_21047 + (1));
seq__20851_21044 = G__21086;
chunk__20855_21045 = G__21087;
count__20856_21046 = G__21088;
i__20857_21047 = G__21089;
continue;
}
} else {
var G__21090 = seq__20851_21044;
var G__21091 = chunk__20855_21045;
var G__21092 = count__20856_21046;
var G__21093 = (i__20857_21047 + (1));
seq__20851_21044 = G__21090;
chunk__20855_21045 = G__21091;
count__20856_21046 = G__21092;
i__20857_21047 = G__21093;
continue;
}
} else {
var temp__5804__auto___21094 = cljs.core.seq(seq__20851_21044);
if(temp__5804__auto___21094){
var seq__20851_21095__$1 = temp__5804__auto___21094;
if(cljs.core.chunked_seq_QMARK_(seq__20851_21095__$1)){
var c__5525__auto___21096 = cljs.core.chunk_first(seq__20851_21095__$1);
var G__21097 = cljs.core.chunk_rest(seq__20851_21095__$1);
var G__21098 = c__5525__auto___21096;
var G__21099 = cljs.core.count(c__5525__auto___21096);
var G__21100 = (0);
seq__20851_21044 = G__21097;
chunk__20855_21045 = G__21098;
count__20856_21046 = G__21099;
i__20857_21047 = G__21100;
continue;
} else {
var node_21101 = cljs.core.first(seq__20851_21095__$1);
if(cljs.core.not(node_21101.shadow$old)){
var path_match_21102 = shadow.cljs.devtools.client.browser.match_paths(node_21101.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21102)){
var new_link_21103 = (function (){var G__20894 = node_21101.cloneNode(true);
G__20894.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21102),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20894;
})();
(node_21101.shadow$old = true);

(new_link_21103.onload = ((function (seq__20851_21044,chunk__20855_21045,count__20856_21046,i__20857_21047,seq__20737,chunk__20739,count__20740,i__20741,new_link_21103,path_match_21102,node_21101,seq__20851_21095__$1,temp__5804__auto___21094,path,map__20736,map__20736__$1,msg,updates,reload_info){
return (function (e){
var seq__20895_21104 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20897_21105 = null;
var count__20898_21106 = (0);
var i__20899_21107 = (0);
while(true){
if((i__20899_21107 < count__20898_21106)){
var map__20903_21108 = chunk__20897_21105.cljs$core$IIndexed$_nth$arity$2(null, i__20899_21107);
var map__20903_21109__$1 = cljs.core.__destructure_map(map__20903_21108);
var task_21110 = map__20903_21109__$1;
var fn_str_21111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903_21109__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903_21109__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21113 = goog.getObjectByName(fn_str_21111,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21112)].join(''));

(fn_obj_21113.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21113.cljs$core$IFn$_invoke$arity$2(path,new_link_21103) : fn_obj_21113.call(null, path,new_link_21103));


var G__21114 = seq__20895_21104;
var G__21115 = chunk__20897_21105;
var G__21116 = count__20898_21106;
var G__21117 = (i__20899_21107 + (1));
seq__20895_21104 = G__21114;
chunk__20897_21105 = G__21115;
count__20898_21106 = G__21116;
i__20899_21107 = G__21117;
continue;
} else {
var temp__5804__auto___21118__$1 = cljs.core.seq(seq__20895_21104);
if(temp__5804__auto___21118__$1){
var seq__20895_21119__$1 = temp__5804__auto___21118__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20895_21119__$1)){
var c__5525__auto___21120 = cljs.core.chunk_first(seq__20895_21119__$1);
var G__21121 = cljs.core.chunk_rest(seq__20895_21119__$1);
var G__21122 = c__5525__auto___21120;
var G__21123 = cljs.core.count(c__5525__auto___21120);
var G__21124 = (0);
seq__20895_21104 = G__21121;
chunk__20897_21105 = G__21122;
count__20898_21106 = G__21123;
i__20899_21107 = G__21124;
continue;
} else {
var map__20904_21125 = cljs.core.first(seq__20895_21119__$1);
var map__20904_21126__$1 = cljs.core.__destructure_map(map__20904_21125);
var task_21127 = map__20904_21126__$1;
var fn_str_21128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20904_21126__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20904_21126__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21130 = goog.getObjectByName(fn_str_21128,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21129)].join(''));

(fn_obj_21130.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21130.cljs$core$IFn$_invoke$arity$2(path,new_link_21103) : fn_obj_21130.call(null, path,new_link_21103));


var G__21131 = cljs.core.next(seq__20895_21119__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__20895_21104 = G__21131;
chunk__20897_21105 = G__21132;
count__20898_21106 = G__21133;
i__20899_21107 = G__21134;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21101);
});})(seq__20851_21044,chunk__20855_21045,count__20856_21046,i__20857_21047,seq__20737,chunk__20739,count__20740,i__20741,new_link_21103,path_match_21102,node_21101,seq__20851_21095__$1,temp__5804__auto___21094,path,map__20736,map__20736__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21102], 0));

goog.dom.insertSiblingAfter(new_link_21103,node_21101);


var G__21135 = cljs.core.next(seq__20851_21095__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__20851_21044 = G__21135;
chunk__20855_21045 = G__21136;
count__20856_21046 = G__21137;
i__20857_21047 = G__21138;
continue;
} else {
var G__21139 = cljs.core.next(seq__20851_21095__$1);
var G__21140 = null;
var G__21141 = (0);
var G__21142 = (0);
seq__20851_21044 = G__21139;
chunk__20855_21045 = G__21140;
count__20856_21046 = G__21141;
i__20857_21047 = G__21142;
continue;
}
} else {
var G__21143 = cljs.core.next(seq__20851_21095__$1);
var G__21144 = null;
var G__21145 = (0);
var G__21146 = (0);
seq__20851_21044 = G__21143;
chunk__20855_21045 = G__21144;
count__20856_21046 = G__21145;
i__20857_21047 = G__21146;
continue;
}
}
} else {
}
}
break;
}


var G__21147 = seq__20737;
var G__21148 = chunk__20739;
var G__21149 = count__20740;
var G__21150 = (i__20741 + (1));
seq__20737 = G__21147;
chunk__20739 = G__21148;
count__20740 = G__21149;
i__20741 = G__21150;
continue;
} else {
var G__21151 = seq__20737;
var G__21152 = chunk__20739;
var G__21153 = count__20740;
var G__21154 = (i__20741 + (1));
seq__20737 = G__21151;
chunk__20739 = G__21152;
count__20740 = G__21153;
i__20741 = G__21154;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20737);
if(temp__5804__auto__){
var seq__20737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20737__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20737__$1);
var G__21155 = cljs.core.chunk_rest(seq__20737__$1);
var G__21156 = c__5525__auto__;
var G__21157 = cljs.core.count(c__5525__auto__);
var G__21158 = (0);
seq__20737 = G__21155;
chunk__20739 = G__21156;
count__20740 = G__21157;
i__20741 = G__21158;
continue;
} else {
var path = cljs.core.first(seq__20737__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20905_21159 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20909_21160 = null;
var count__20910_21161 = (0);
var i__20911_21162 = (0);
while(true){
if((i__20911_21162 < count__20910_21161)){
var node_21163 = chunk__20909_21160.cljs$core$IIndexed$_nth$arity$2(null, i__20911_21162);
if(cljs.core.not(node_21163.shadow$old)){
var path_match_21164 = shadow.cljs.devtools.client.browser.match_paths(node_21163.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21164)){
var new_link_21165 = (function (){var G__20937 = node_21163.cloneNode(true);
G__20937.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21164),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20937;
})();
(node_21163.shadow$old = true);

(new_link_21165.onload = ((function (seq__20905_21159,chunk__20909_21160,count__20910_21161,i__20911_21162,seq__20737,chunk__20739,count__20740,i__20741,new_link_21165,path_match_21164,node_21163,path,seq__20737__$1,temp__5804__auto__,map__20736,map__20736__$1,msg,updates,reload_info){
return (function (e){
var seq__20938_21166 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20940_21167 = null;
var count__20941_21168 = (0);
var i__20942_21169 = (0);
while(true){
if((i__20942_21169 < count__20941_21168)){
var map__20946_21170 = chunk__20940_21167.cljs$core$IIndexed$_nth$arity$2(null, i__20942_21169);
var map__20946_21171__$1 = cljs.core.__destructure_map(map__20946_21170);
var task_21172 = map__20946_21171__$1;
var fn_str_21173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946_21171__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946_21171__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21175 = goog.getObjectByName(fn_str_21173,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21174)].join(''));

(fn_obj_21175.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21175.cljs$core$IFn$_invoke$arity$2(path,new_link_21165) : fn_obj_21175.call(null, path,new_link_21165));


var G__21176 = seq__20938_21166;
var G__21177 = chunk__20940_21167;
var G__21178 = count__20941_21168;
var G__21179 = (i__20942_21169 + (1));
seq__20938_21166 = G__21176;
chunk__20940_21167 = G__21177;
count__20941_21168 = G__21178;
i__20942_21169 = G__21179;
continue;
} else {
var temp__5804__auto___21180__$1 = cljs.core.seq(seq__20938_21166);
if(temp__5804__auto___21180__$1){
var seq__20938_21181__$1 = temp__5804__auto___21180__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20938_21181__$1)){
var c__5525__auto___21182 = cljs.core.chunk_first(seq__20938_21181__$1);
var G__21183 = cljs.core.chunk_rest(seq__20938_21181__$1);
var G__21184 = c__5525__auto___21182;
var G__21185 = cljs.core.count(c__5525__auto___21182);
var G__21186 = (0);
seq__20938_21166 = G__21183;
chunk__20940_21167 = G__21184;
count__20941_21168 = G__21185;
i__20942_21169 = G__21186;
continue;
} else {
var map__20947_21187 = cljs.core.first(seq__20938_21181__$1);
var map__20947_21188__$1 = cljs.core.__destructure_map(map__20947_21187);
var task_21189 = map__20947_21188__$1;
var fn_str_21190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20947_21188__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20947_21188__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21192 = goog.getObjectByName(fn_str_21190,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21191)].join(''));

(fn_obj_21192.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21192.cljs$core$IFn$_invoke$arity$2(path,new_link_21165) : fn_obj_21192.call(null, path,new_link_21165));


var G__21193 = cljs.core.next(seq__20938_21181__$1);
var G__21194 = null;
var G__21195 = (0);
var G__21196 = (0);
seq__20938_21166 = G__21193;
chunk__20940_21167 = G__21194;
count__20941_21168 = G__21195;
i__20942_21169 = G__21196;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21163);
});})(seq__20905_21159,chunk__20909_21160,count__20910_21161,i__20911_21162,seq__20737,chunk__20739,count__20740,i__20741,new_link_21165,path_match_21164,node_21163,path,seq__20737__$1,temp__5804__auto__,map__20736,map__20736__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21164], 0));

goog.dom.insertSiblingAfter(new_link_21165,node_21163);


var G__21197 = seq__20905_21159;
var G__21198 = chunk__20909_21160;
var G__21199 = count__20910_21161;
var G__21200 = (i__20911_21162 + (1));
seq__20905_21159 = G__21197;
chunk__20909_21160 = G__21198;
count__20910_21161 = G__21199;
i__20911_21162 = G__21200;
continue;
} else {
var G__21201 = seq__20905_21159;
var G__21202 = chunk__20909_21160;
var G__21203 = count__20910_21161;
var G__21204 = (i__20911_21162 + (1));
seq__20905_21159 = G__21201;
chunk__20909_21160 = G__21202;
count__20910_21161 = G__21203;
i__20911_21162 = G__21204;
continue;
}
} else {
var G__21205 = seq__20905_21159;
var G__21206 = chunk__20909_21160;
var G__21207 = count__20910_21161;
var G__21208 = (i__20911_21162 + (1));
seq__20905_21159 = G__21205;
chunk__20909_21160 = G__21206;
count__20910_21161 = G__21207;
i__20911_21162 = G__21208;
continue;
}
} else {
var temp__5804__auto___21209__$1 = cljs.core.seq(seq__20905_21159);
if(temp__5804__auto___21209__$1){
var seq__20905_21210__$1 = temp__5804__auto___21209__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20905_21210__$1)){
var c__5525__auto___21211 = cljs.core.chunk_first(seq__20905_21210__$1);
var G__21212 = cljs.core.chunk_rest(seq__20905_21210__$1);
var G__21213 = c__5525__auto___21211;
var G__21214 = cljs.core.count(c__5525__auto___21211);
var G__21215 = (0);
seq__20905_21159 = G__21212;
chunk__20909_21160 = G__21213;
count__20910_21161 = G__21214;
i__20911_21162 = G__21215;
continue;
} else {
var node_21216 = cljs.core.first(seq__20905_21210__$1);
if(cljs.core.not(node_21216.shadow$old)){
var path_match_21217 = shadow.cljs.devtools.client.browser.match_paths(node_21216.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21217)){
var new_link_21218 = (function (){var G__20948 = node_21216.cloneNode(true);
G__20948.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21217),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20948;
})();
(node_21216.shadow$old = true);

(new_link_21218.onload = ((function (seq__20905_21159,chunk__20909_21160,count__20910_21161,i__20911_21162,seq__20737,chunk__20739,count__20740,i__20741,new_link_21218,path_match_21217,node_21216,seq__20905_21210__$1,temp__5804__auto___21209__$1,path,seq__20737__$1,temp__5804__auto__,map__20736,map__20736__$1,msg,updates,reload_info){
return (function (e){
var seq__20949_21219 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20951_21220 = null;
var count__20952_21221 = (0);
var i__20953_21222 = (0);
while(true){
if((i__20953_21222 < count__20952_21221)){
var map__20957_21223 = chunk__20951_21220.cljs$core$IIndexed$_nth$arity$2(null, i__20953_21222);
var map__20957_21224__$1 = cljs.core.__destructure_map(map__20957_21223);
var task_21225 = map__20957_21224__$1;
var fn_str_21226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957_21224__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957_21224__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21228 = goog.getObjectByName(fn_str_21226,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21227)].join(''));

(fn_obj_21228.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21228.cljs$core$IFn$_invoke$arity$2(path,new_link_21218) : fn_obj_21228.call(null, path,new_link_21218));


var G__21229 = seq__20949_21219;
var G__21230 = chunk__20951_21220;
var G__21231 = count__20952_21221;
var G__21232 = (i__20953_21222 + (1));
seq__20949_21219 = G__21229;
chunk__20951_21220 = G__21230;
count__20952_21221 = G__21231;
i__20953_21222 = G__21232;
continue;
} else {
var temp__5804__auto___21233__$2 = cljs.core.seq(seq__20949_21219);
if(temp__5804__auto___21233__$2){
var seq__20949_21234__$1 = temp__5804__auto___21233__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20949_21234__$1)){
var c__5525__auto___21235 = cljs.core.chunk_first(seq__20949_21234__$1);
var G__21236 = cljs.core.chunk_rest(seq__20949_21234__$1);
var G__21237 = c__5525__auto___21235;
var G__21238 = cljs.core.count(c__5525__auto___21235);
var G__21239 = (0);
seq__20949_21219 = G__21236;
chunk__20951_21220 = G__21237;
count__20952_21221 = G__21238;
i__20953_21222 = G__21239;
continue;
} else {
var map__20958_21240 = cljs.core.first(seq__20949_21234__$1);
var map__20958_21241__$1 = cljs.core.__destructure_map(map__20958_21240);
var task_21242 = map__20958_21241__$1;
var fn_str_21243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20958_21241__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20958_21241__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21245 = goog.getObjectByName(fn_str_21243,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21244)].join(''));

(fn_obj_21245.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21245.cljs$core$IFn$_invoke$arity$2(path,new_link_21218) : fn_obj_21245.call(null, path,new_link_21218));


var G__21246 = cljs.core.next(seq__20949_21234__$1);
var G__21247 = null;
var G__21248 = (0);
var G__21249 = (0);
seq__20949_21219 = G__21246;
chunk__20951_21220 = G__21247;
count__20952_21221 = G__21248;
i__20953_21222 = G__21249;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21216);
});})(seq__20905_21159,chunk__20909_21160,count__20910_21161,i__20911_21162,seq__20737,chunk__20739,count__20740,i__20741,new_link_21218,path_match_21217,node_21216,seq__20905_21210__$1,temp__5804__auto___21209__$1,path,seq__20737__$1,temp__5804__auto__,map__20736,map__20736__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21217], 0));

goog.dom.insertSiblingAfter(new_link_21218,node_21216);


var G__21250 = cljs.core.next(seq__20905_21210__$1);
var G__21251 = null;
var G__21252 = (0);
var G__21253 = (0);
seq__20905_21159 = G__21250;
chunk__20909_21160 = G__21251;
count__20910_21161 = G__21252;
i__20911_21162 = G__21253;
continue;
} else {
var G__21254 = cljs.core.next(seq__20905_21210__$1);
var G__21255 = null;
var G__21256 = (0);
var G__21257 = (0);
seq__20905_21159 = G__21254;
chunk__20909_21160 = G__21255;
count__20910_21161 = G__21256;
i__20911_21162 = G__21257;
continue;
}
} else {
var G__21258 = cljs.core.next(seq__20905_21210__$1);
var G__21259 = null;
var G__21260 = (0);
var G__21261 = (0);
seq__20905_21159 = G__21258;
chunk__20909_21160 = G__21259;
count__20910_21161 = G__21260;
i__20911_21162 = G__21261;
continue;
}
}
} else {
}
}
break;
}


var G__21262 = cljs.core.next(seq__20737__$1);
var G__21263 = null;
var G__21264 = (0);
var G__21265 = (0);
seq__20737 = G__21262;
chunk__20739 = G__21263;
count__20740 = G__21264;
i__20741 = G__21265;
continue;
} else {
var G__21266 = cljs.core.next(seq__20737__$1);
var G__21267 = null;
var G__21268 = (0);
var G__21269 = (0);
seq__20737 = G__21266;
chunk__20739 = G__21267;
count__20740 = G__21268;
i__20741 = G__21269;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20959){
var map__20960 = p__20959;
var map__20960__$1 = cljs.core.__destructure_map(map__20960);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20960__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20961,done,error){
var map__20962 = p__20961;
var map__20962__$1 = cljs.core.__destructure_map(map__20962);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20963,done,error){
var map__20964 = p__20963;
var map__20964__$1 = cljs.core.__destructure_map(map__20964);
var msg = map__20964__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20965){
var map__20966 = p__20965;
var map__20966__$1 = cljs.core.__destructure_map(map__20966);
var src = map__20966__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20966__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20967 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20967) : done.call(null, G__20967));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20968){
var map__20969 = p__20968;
var map__20969__$1 = cljs.core.__destructure_map(map__20969);
var msg__$1 = map__20969__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20969__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e20970){var ex = e20970;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20971){
var map__20972 = p__20971;
var map__20972__$1 = cljs.core.__destructure_map(map__20972);
var env = map__20972__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20973){
var map__20974 = p__20973;
var map__20974__$1 = cljs.core.__destructure_map(map__20974);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20975){
var map__20976 = p__20975;
var map__20976__$1 = cljs.core.__destructure_map(map__20976);
var svc = map__20976__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20976__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
