goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17598){
var map__17599 = p__17598;
var map__17599__$1 = cljs.core.__destructure_map(map__17599);
var m = map__17599__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17603_18034 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17604_18035 = null;
var count__17605_18036 = (0);
var i__17606_18037 = (0);
while(true){
if((i__17606_18037 < count__17605_18036)){
var f_18039 = chunk__17604_18035.cljs$core$IIndexed$_nth$arity$2(null, i__17606_18037);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18039], 0));


var G__18041 = seq__17603_18034;
var G__18042 = chunk__17604_18035;
var G__18043 = count__17605_18036;
var G__18044 = (i__17606_18037 + (1));
seq__17603_18034 = G__18041;
chunk__17604_18035 = G__18042;
count__17605_18036 = G__18043;
i__17606_18037 = G__18044;
continue;
} else {
var temp__5804__auto___18045 = cljs.core.seq(seq__17603_18034);
if(temp__5804__auto___18045){
var seq__17603_18046__$1 = temp__5804__auto___18045;
if(cljs.core.chunked_seq_QMARK_(seq__17603_18046__$1)){
var c__5525__auto___18047 = cljs.core.chunk_first(seq__17603_18046__$1);
var G__18048 = cljs.core.chunk_rest(seq__17603_18046__$1);
var G__18049 = c__5525__auto___18047;
var G__18050 = cljs.core.count(c__5525__auto___18047);
var G__18051 = (0);
seq__17603_18034 = G__18048;
chunk__17604_18035 = G__18049;
count__17605_18036 = G__18050;
i__17606_18037 = G__18051;
continue;
} else {
var f_18052 = cljs.core.first(seq__17603_18046__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18052], 0));


var G__18053 = cljs.core.next(seq__17603_18046__$1);
var G__18054 = null;
var G__18055 = (0);
var G__18056 = (0);
seq__17603_18034 = G__18053;
chunk__17604_18035 = G__18054;
count__17605_18036 = G__18055;
i__17606_18037 = G__18056;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18057 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18057], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18057)))?cljs.core.second(arglists_18057):arglists_18057)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17623_18065 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17624_18066 = null;
var count__17625_18067 = (0);
var i__17626_18068 = (0);
while(true){
if((i__17626_18068 < count__17625_18067)){
var vec__17662_18070 = chunk__17624_18066.cljs$core$IIndexed$_nth$arity$2(null, i__17626_18068);
var name_18071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17662_18070,(0),null);
var map__17665_18072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17662_18070,(1),null);
var map__17665_18073__$1 = cljs.core.__destructure_map(map__17665_18072);
var doc_18074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17665_18073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17665_18073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18071], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18075], 0));

if(cljs.core.truth_(doc_18074)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18074], 0));
} else {
}


var G__18079 = seq__17623_18065;
var G__18080 = chunk__17624_18066;
var G__18081 = count__17625_18067;
var G__18082 = (i__17626_18068 + (1));
seq__17623_18065 = G__18079;
chunk__17624_18066 = G__18080;
count__17625_18067 = G__18081;
i__17626_18068 = G__18082;
continue;
} else {
var temp__5804__auto___18083 = cljs.core.seq(seq__17623_18065);
if(temp__5804__auto___18083){
var seq__17623_18086__$1 = temp__5804__auto___18083;
if(cljs.core.chunked_seq_QMARK_(seq__17623_18086__$1)){
var c__5525__auto___18087 = cljs.core.chunk_first(seq__17623_18086__$1);
var G__18088 = cljs.core.chunk_rest(seq__17623_18086__$1);
var G__18089 = c__5525__auto___18087;
var G__18090 = cljs.core.count(c__5525__auto___18087);
var G__18091 = (0);
seq__17623_18065 = G__18088;
chunk__17624_18066 = G__18089;
count__17625_18067 = G__18090;
i__17626_18068 = G__18091;
continue;
} else {
var vec__17698_18092 = cljs.core.first(seq__17623_18086__$1);
var name_18093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698_18092,(0),null);
var map__17701_18094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698_18092,(1),null);
var map__17701_18095__$1 = cljs.core.__destructure_map(map__17701_18094);
var doc_18096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701_18095__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701_18095__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18093], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18097], 0));

if(cljs.core.truth_(doc_18096)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18096], 0));
} else {
}


var G__18102 = cljs.core.next(seq__17623_18086__$1);
var G__18103 = null;
var G__18104 = (0);
var G__18105 = (0);
seq__17623_18065 = G__18102;
chunk__17624_18066 = G__18103;
count__17625_18067 = G__18104;
i__17626_18068 = G__18105;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17741 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17742 = null;
var count__17743 = (0);
var i__17744 = (0);
while(true){
if((i__17744 < count__17743)){
var role = chunk__17742.cljs$core$IIndexed$_nth$arity$2(null, i__17744);
var temp__5804__auto___18108__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18108__$1)){
var spec_18109 = temp__5804__auto___18108__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18109)], 0));
} else {
}


var G__18112 = seq__17741;
var G__18113 = chunk__17742;
var G__18114 = count__17743;
var G__18115 = (i__17744 + (1));
seq__17741 = G__18112;
chunk__17742 = G__18113;
count__17743 = G__18114;
i__17744 = G__18115;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17741);
if(temp__5804__auto____$1){
var seq__17741__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17741__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17741__$1);
var G__18116 = cljs.core.chunk_rest(seq__17741__$1);
var G__18117 = c__5525__auto__;
var G__18118 = cljs.core.count(c__5525__auto__);
var G__18119 = (0);
seq__17741 = G__18116;
chunk__17742 = G__18117;
count__17743 = G__18118;
i__17744 = G__18119;
continue;
} else {
var role = cljs.core.first(seq__17741__$1);
var temp__5804__auto___18121__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18121__$2)){
var spec_18122 = temp__5804__auto___18121__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18122)], 0));
} else {
}


var G__18124 = cljs.core.next(seq__17741__$1);
var G__18125 = null;
var G__18126 = (0);
var G__18127 = (0);
seq__17741 = G__18124;
chunk__17742 = G__18125;
count__17743 = G__18126;
i__17744 = G__18127;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17805 = datafied_throwable;
var map__17805__$1 = cljs.core.__destructure_map(map__17805);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17805__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17805__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17805__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17806 = cljs.core.last(via);
var map__17806__$1 = cljs.core.__destructure_map(map__17806);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17806__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17806__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17806__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17807 = data;
var map__17807__$1 = cljs.core.__destructure_map(map__17807);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17807__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17807__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17807__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17809 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17809__$1 = cljs.core.__destructure_map(map__17809);
var top_data = map__17809__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17809__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17814 = phase;
var G__17814__$1 = (((G__17814 instanceof cljs.core.Keyword))?G__17814.fqn:null);
switch (G__17814__$1) {
case "read-source":
var map__17821 = data;
var map__17821__$1 = cljs.core.__destructure_map(map__17821);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17822 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17822__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17822,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17822);
var G__17822__$2 = (cljs.core.truth_((function (){var fexpr__17825 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17825.cljs$core$IFn$_invoke$arity$1 ? fexpr__17825.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17825.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17822__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17822__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17822__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17822__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17830 = top_data;
var G__17830__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17830,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17830);
var G__17830__$2 = (cljs.core.truth_((function (){var fexpr__17831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17831.cljs$core$IFn$_invoke$arity$1 ? fexpr__17831.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17831.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17830__$1);
var G__17830__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17830__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17830__$2);
var G__17830__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17830__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17830__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17830__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17830__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17839 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(3),null);
var G__17843 = top_data;
var G__17843__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17843);
var G__17843__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17843__$1);
var G__17843__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17843__$2);
var G__17843__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17843__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17843__$4;
}

break;
case "execution":
var vec__17859 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17802_SHARP_){
var or__5002__auto__ = (p1__17802_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__17863 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17863.cljs$core$IFn$_invoke$arity$1 ? fexpr__17863.cljs$core$IFn$_invoke$arity$1(p1__17802_SHARP_) : fexpr__17863.call(null, p1__17802_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__17867 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17867__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17867,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17867);
var G__17867__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17867__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17867__$1);
var G__17867__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17867__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17867__$2);
var G__17867__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17867__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17867__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17867__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17867__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17814__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17881){
var map__17883 = p__17881;
var map__17883__$1 = cljs.core.__destructure_map(map__17883);
var triage_data = map__17883__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17945 = phase;
var G__17945__$1 = (((G__17945 instanceof cljs.core.Keyword))?G__17945.fqn:null);
switch (G__17945__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17951 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17952 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17953 = loc;
var G__17954 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17956_18143 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17957_18144 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17958_18145 = true;
var _STAR_print_fn_STAR__temp_val__17959_18146 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17958_18145);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17959_18146);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17878_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17878_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17957_18144);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17956_18143);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17951,G__17952,G__17953,G__17954) : format.call(null, G__17951,G__17952,G__17953,G__17954));

break;
case "macroexpansion":
var G__17967 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17968 = cause_type;
var G__17969 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17970 = loc;
var G__17971 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17967,G__17968,G__17969,G__17970,G__17971) : format.call(null, G__17967,G__17968,G__17969,G__17970,G__17971));

break;
case "compile-syntax-check":
var G__17973 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17974 = cause_type;
var G__17975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17976 = loc;
var G__17977 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17973,G__17974,G__17975,G__17976,G__17977) : format.call(null, G__17973,G__17974,G__17975,G__17976,G__17977));

break;
case "compilation":
var G__17979 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17980 = cause_type;
var G__17981 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17982 = loc;
var G__17983 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17979,G__17980,G__17981,G__17982,G__17983) : format.call(null, G__17979,G__17980,G__17981,G__17982,G__17983));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17985 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17986 = symbol;
var G__17987 = loc;
var G__17988 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17991_18148 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17992_18149 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17993_18150 = true;
var _STAR_print_fn_STAR__temp_val__17994_18151 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17993_18150);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17994_18151);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17880_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17880_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17992_18149);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17991_18148);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17985,G__17986,G__17987,G__17988) : format.call(null, G__17985,G__17986,G__17987,G__17988));
} else {
var G__18005 = "Execution error%s at %s(%s).\n%s\n";
var G__18006 = cause_type;
var G__18007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18008 = loc;
var G__18009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18005,G__18006,G__18007,G__18008,G__18009) : format.call(null, G__18005,G__18006,G__18007,G__18008,G__18009));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17945__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
