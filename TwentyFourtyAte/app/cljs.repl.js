goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31815){
var map__31816 = p__31815;
var map__31816__$1 = cljs.core.__destructure_map(map__31816);
var m = map__31816__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31816__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var seq__31828_32100 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31829_32101 = null;
var count__31830_32102 = (0);
var i__31831_32103 = (0);
while(true){
if((i__31831_32103 < count__31830_32102)){
var f_32106 = chunk__31829_32101.cljs$core$IIndexed$_nth$arity$2(null,i__31831_32103);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32106], 0));


var G__32108 = seq__31828_32100;
var G__32109 = chunk__31829_32101;
var G__32110 = count__31830_32102;
var G__32111 = (i__31831_32103 + (1));
seq__31828_32100 = G__32108;
chunk__31829_32101 = G__32109;
count__31830_32102 = G__32110;
i__31831_32103 = G__32111;
continue;
} else {
var temp__5804__auto___32113 = cljs.core.seq(seq__31828_32100);
if(temp__5804__auto___32113){
var seq__31828_32114__$1 = temp__5804__auto___32113;
if(cljs.core.chunked_seq_QMARK_(seq__31828_32114__$1)){
var c__5568__auto___32115 = cljs.core.chunk_first(seq__31828_32114__$1);
var G__32116 = cljs.core.chunk_rest(seq__31828_32114__$1);
var G__32117 = c__5568__auto___32115;
var G__32118 = cljs.core.count(c__5568__auto___32115);
var G__32119 = (0);
seq__31828_32100 = G__32116;
chunk__31829_32101 = G__32117;
count__31830_32102 = G__32118;
i__31831_32103 = G__32119;
continue;
} else {
var f_32120 = cljs.core.first(seq__31828_32114__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32120], 0));


var G__32121 = cljs.core.next(seq__31828_32114__$1);
var G__32122 = null;
var G__32123 = (0);
var G__32124 = (0);
seq__31828_32100 = G__32121;
chunk__31829_32101 = G__32122;
count__31830_32102 = G__32123;
i__31831_32103 = G__32124;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32127 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32127], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32127)))?cljs.core.second(arglists_32127):arglists_32127)], 0));
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
var seq__31859_32133 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31860_32134 = null;
var count__31861_32135 = (0);
var i__31862_32136 = (0);
while(true){
if((i__31862_32136 < count__31861_32135)){
var vec__31894_32137 = chunk__31860_32134.cljs$core$IIndexed$_nth$arity$2(null,i__31862_32136);
var name_32138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31894_32137,(0),null);
var map__31897_32139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31894_32137,(1),null);
var map__31897_32140__$1 = cljs.core.__destructure_map(map__31897_32139);
var doc_32141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31897_32140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31897_32140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32138], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32142], 0));

if(cljs.core.truth_(doc_32141)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32141], 0));
} else {
}


var G__32144 = seq__31859_32133;
var G__32145 = chunk__31860_32134;
var G__32146 = count__31861_32135;
var G__32147 = (i__31862_32136 + (1));
seq__31859_32133 = G__32144;
chunk__31860_32134 = G__32145;
count__31861_32135 = G__32146;
i__31862_32136 = G__32147;
continue;
} else {
var temp__5804__auto___32148 = cljs.core.seq(seq__31859_32133);
if(temp__5804__auto___32148){
var seq__31859_32149__$1 = temp__5804__auto___32148;
if(cljs.core.chunked_seq_QMARK_(seq__31859_32149__$1)){
var c__5568__auto___32152 = cljs.core.chunk_first(seq__31859_32149__$1);
var G__32153 = cljs.core.chunk_rest(seq__31859_32149__$1);
var G__32154 = c__5568__auto___32152;
var G__32155 = cljs.core.count(c__5568__auto___32152);
var G__32156 = (0);
seq__31859_32133 = G__32153;
chunk__31860_32134 = G__32154;
count__31861_32135 = G__32155;
i__31862_32136 = G__32156;
continue;
} else {
var vec__31902_32157 = cljs.core.first(seq__31859_32149__$1);
var name_32158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31902_32157,(0),null);
var map__31905_32159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31902_32157,(1),null);
var map__31905_32160__$1 = cljs.core.__destructure_map(map__31905_32159);
var doc_32161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31905_32160__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31905_32160__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32158], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32162], 0));

if(cljs.core.truth_(doc_32161)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32161], 0));
} else {
}


var G__32163 = cljs.core.next(seq__31859_32149__$1);
var G__32164 = null;
var G__32165 = (0);
var G__32166 = (0);
seq__31859_32133 = G__32163;
chunk__31860_32134 = G__32164;
count__31861_32135 = G__32165;
i__31862_32136 = G__32166;
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

var seq__31907 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31908 = null;
var count__31909 = (0);
var i__31910 = (0);
while(true){
if((i__31910 < count__31909)){
var role = chunk__31908.cljs$core$IIndexed$_nth$arity$2(null,i__31910);
var temp__5804__auto___32172__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___32172__$1)){
var spec_32173 = temp__5804__auto___32172__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32173)], 0));
} else {
}


var G__32174 = seq__31907;
var G__32175 = chunk__31908;
var G__32176 = count__31909;
var G__32177 = (i__31910 + (1));
seq__31907 = G__32174;
chunk__31908 = G__32175;
count__31909 = G__32176;
i__31910 = G__32177;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__31907);
if(temp__5804__auto____$1){
var seq__31907__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31907__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31907__$1);
var G__32178 = cljs.core.chunk_rest(seq__31907__$1);
var G__32179 = c__5568__auto__;
var G__32180 = cljs.core.count(c__5568__auto__);
var G__32181 = (0);
seq__31907 = G__32178;
chunk__31908 = G__32179;
count__31909 = G__32180;
i__31910 = G__32181;
continue;
} else {
var role = cljs.core.first(seq__31907__$1);
var temp__5804__auto___32182__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___32182__$2)){
var spec_32183 = temp__5804__auto___32182__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32183)], 0));
} else {
}


var G__32186 = cljs.core.next(seq__31907__$1);
var G__32187 = null;
var G__32188 = (0);
var G__32189 = (0);
seq__31907 = G__32186;
chunk__31908 = G__32187;
count__31909 = G__32188;
i__31910 = G__32189;
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
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32195 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32196 = cljs.core.ex_cause(t);
via = G__32195;
t = G__32196;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__31972 = datafied_throwable;
var map__31972__$1 = cljs.core.__destructure_map(map__31972);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31972__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31974 = cljs.core.last(via);
var map__31974__$1 = cljs.core.__destructure_map(map__31974);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31975 = data;
var map__31975__$1 = cljs.core.__destructure_map(map__31975);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31976 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31976__$1 = cljs.core.__destructure_map(map__31976);
var top_data = map__31976__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31977 = phase;
var G__31977__$1 = (((G__31977 instanceof cljs.core.Keyword))?G__31977.fqn:null);
switch (G__31977__$1) {
case "read-source":
var map__31984 = data;
var map__31984__$1 = cljs.core.__destructure_map(map__31984);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31984__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31984__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31986 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31986__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31986,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31986);
var G__31986__$2 = (cljs.core.truth_((function (){var fexpr__31990 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31990.cljs$core$IFn$_invoke$arity$1 ? fexpr__31990.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31990.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31986__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31986__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31986__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31986__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31991 = top_data;
var G__31991__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31991,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31991);
var G__31991__$2 = (cljs.core.truth_((function (){var fexpr__31996 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31996.cljs$core$IFn$_invoke$arity$1 ? fexpr__31996.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31996.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31991__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31991__$1);
var G__31991__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31991__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31991__$2);
var G__31991__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31991__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31991__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31991__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31991__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32002 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32002,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32002,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32002,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32002,(3),null);
var G__32005 = top_data;
var G__32005__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32005,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32005);
var G__32005__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32005__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32005__$1);
var G__32005__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32005__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32005__$2);
var G__32005__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32005__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32005__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32005__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32005__$4;
}

break;
case "execution":
var vec__32008 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32008,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32008,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32008,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32008,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31966_SHARP_){
var or__5045__auto__ = (p1__31966_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__32012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32012.cljs$core$IFn$_invoke$arity$1 ? fexpr__32012.cljs$core$IFn$_invoke$arity$1(p1__31966_SHARP_) : fexpr__32012.call(null,p1__31966_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__32013 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32013__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32013,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32013);
var G__32013__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32013__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32013__$1);
var G__32013__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32013__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32013__$2);
var G__32013__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32013__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32013__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32013__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32013__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31977__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32035){
var map__32037 = p__32035;
var map__32037__$1 = cljs.core.__destructure_map(map__32037);
var triage_data = map__32037__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32037__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32042 = phase;
var G__32042__$1 = (((G__32042 instanceof cljs.core.Keyword))?G__32042.fqn:null);
switch (G__32042__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32043 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32044 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32045 = loc;
var G__32046 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32050_32226 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32051_32227 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32052_32228 = true;
var _STAR_print_fn_STAR__temp_val__32053_32229 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32052_32228);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32053_32229);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32033_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32033_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32051_32227);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32050_32226);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32043,G__32044,G__32045,G__32046) : format.call(null,G__32043,G__32044,G__32045,G__32046));

break;
case "macroexpansion":
var G__32056 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32057 = cause_type;
var G__32058 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32059 = loc;
var G__32060 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32056,G__32057,G__32058,G__32059,G__32060) : format.call(null,G__32056,G__32057,G__32058,G__32059,G__32060));

break;
case "compile-syntax-check":
var G__32061 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32062 = cause_type;
var G__32063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32064 = loc;
var G__32065 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32061,G__32062,G__32063,G__32064,G__32065) : format.call(null,G__32061,G__32062,G__32063,G__32064,G__32065));

break;
case "compilation":
var G__32066 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32067 = cause_type;
var G__32068 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32069 = loc;
var G__32070 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32066,G__32067,G__32068,G__32069,G__32070) : format.call(null,G__32066,G__32067,G__32068,G__32069,G__32070));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32071 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32072 = symbol;
var G__32073 = loc;
var G__32074 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32075_32238 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32076_32239 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32077_32240 = true;
var _STAR_print_fn_STAR__temp_val__32078_32241 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32077_32240);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32078_32241);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32034_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32034_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32076_32239);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32075_32238);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32071,G__32072,G__32073,G__32074) : format.call(null,G__32071,G__32072,G__32073,G__32074));
} else {
var G__32084 = "Execution error%s at %s(%s).\n%s\n";
var G__32085 = cause_type;
var G__32086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32087 = loc;
var G__32088 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32084,G__32085,G__32086,G__32087,G__32088) : format.call(null,G__32084,G__32085,G__32086,G__32087,G__32088));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32042__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
