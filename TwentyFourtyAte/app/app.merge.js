goog.provide('app.merge');
app.merge.can_merge = (function app$merge$can_merge(a,b){
return ((typeof a === 'number') && (((typeof b === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)))));
});
app.merge.generate_row_moves = (function app$merge$generate_row_moves(p__38009,row){
var vec__38010 = p__38009;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(3),null);
var ocr_38013 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c0);
var ocr_38014 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c1);
var ocr_38015 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c2);
var ocr_38016 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c3);
try{if((ocr_38016 === (0))){
try{if((ocr_38015 === (0))){
try{if((ocr_38014 === (0))){
try{if((ocr_38013 === (0))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e38042){if((e38042 instanceof Error)){
var e__27667__auto__ = e38042;
if((e__27667__auto__ === cljs.core.match.backtrack)){
var a = ocr_38013;
return null;
} else {
throw e__27667__auto__;
}
} else {
throw e38042;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38040){if((e38040 instanceof Error)){
var e__27667__auto__ = e38040;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_38013 === (0))){
var a = ocr_38014;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38041){if((e38041 instanceof Error)){
var e__27667__auto____$1 = e38041;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e38041;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e38040;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38037){if((e38037 instanceof Error)){
var e__27667__auto__ = e38037;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_38013 === (0))){
try{if((ocr_38014 === (0))){
var a = ocr_38015;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38039){if((e38039 instanceof Error)){
var e__27667__auto____$1 = e38039;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e38039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38038){if((e38038 instanceof Error)){
var e__27667__auto____$1 = e38038;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e38038;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e38037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38021){if((e38021 instanceof Error)){
var e__27667__auto__ = e38021;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_38015 === (0))){
try{if((ocr_38013 === (0))){
try{if((ocr_38014 === (0))){
var a = ocr_38016;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38036){if((e38036 instanceof Error)){
var e__27667__auto____$1 = e38036;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e38036;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38034){if((e38034 instanceof Error)){
var e__27667__auto____$1 = e38034;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_38016 === (0))){
var a = ocr_38013;
var b = ocr_38014;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38035){if((e38035 instanceof Error)){
var e__27667__auto____$2 = e38035;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$2;
}
} else {
throw e38035;

}
}} else {
throw e__27667__auto____$1;
}
} else {
throw e38034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38022){if((e38022 instanceof Error)){
var e__27667__auto____$1 = e38022;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_38014 === (0))){
try{if((ocr_38016 === (0))){
var b = ocr_38015;
var a = ocr_38013;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38032){if((e38032 instanceof Error)){
var e__27667__auto____$2 = e38032;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_38015 === (0))){
var b = ocr_38016;
var a = ocr_38013;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38033){if((e38033 instanceof Error)){
var e__27667__auto____$3 = e38033;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$3;
}
} else {
throw e38033;

}
}} else {
throw e__27667__auto____$2;
}
} else {
throw e38032;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38023){if((e38023 instanceof Error)){
var e__27667__auto____$2 = e38023;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_38013 === (0))){
try{if((ocr_38016 === (0))){
var a = ocr_38014;
var b = ocr_38015;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38029){if((e38029 instanceof Error)){
var e__27667__auto____$3 = e38029;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_38015 === (0))){
var b = ocr_38016;
var a = ocr_38014;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38030){if((e38030 instanceof Error)){
var e__27667__auto____$4 = e38030;
if((e__27667__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_38014 === (0))){
var a = ocr_38015;
var b = ocr_38016;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38031){if((e38031 instanceof Error)){
var e__27667__auto____$5 = e38031;
if((e__27667__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$5;
}
} else {
throw e38031;

}
}} else {
throw e__27667__auto____$4;
}
} else {
throw e38030;

}
}} else {
throw e__27667__auto____$3;
}
} else {
throw e38029;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38024){if((e38024 instanceof Error)){
var e__27667__auto____$3 = e38024;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_38016 === (0))){
var a = ocr_38013;
var b = ocr_38014;
var c = ocr_38015;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return null;

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38025){if((e38025 instanceof Error)){
var e__27667__auto____$4 = e38025;
if((e__27667__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_38015 === (0))){
var c = ocr_38016;
var a = ocr_38013;
var b = ocr_38014;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38026){if((e38026 instanceof Error)){
var e__27667__auto____$5 = e38026;
if((e__27667__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_38014 === (0))){
var b = ocr_38015;
var c = ocr_38016;
var a = ocr_38013;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38027){if((e38027 instanceof Error)){
var e__27667__auto____$6 = e38027;
if((e__27667__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_38013 === (0))){
var a = ocr_38014;
var b = ocr_38015;
var c = ocr_38016;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e38028){if((e38028 instanceof Error)){
var e__27667__auto____$7 = e38028;
if((e__27667__auto____$7 === cljs.core.match.backtrack)){
var a = ocr_38013;
var b = ocr_38014;
var c = ocr_38015;
var d = ocr_38016;
if(app.merge.can_merge(a,b)){
if(app.merge.can_merge(c,d)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);
} else {
if(app.merge.can_merge(c,d)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return null;

}
}
}
} else {
throw e__27667__auto____$7;
}
} else {
throw e38028;

}
}} else {
throw e__27667__auto____$6;
}
} else {
throw e38027;

}
}} else {
throw e__27667__auto____$5;
}
} else {
throw e38026;

}
}} else {
throw e__27667__auto____$4;
}
} else {
throw e38025;

}
}} else {
throw e__27667__auto____$3;
}
} else {
throw e38024;

}
}} else {
throw e__27667__auto____$2;
}
} else {
throw e38023;

}
}} else {
throw e__27667__auto____$1;
}
} else {
throw e38022;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e38021;

}
}});
app.merge.sub3 = (function app$merge$sub3(n){
return ((3) - n);
});
app.merge.fix_right = (function app$merge$fix_right(transform){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),(1)], null),app.merge.sub3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null),app.merge.sub3);
});
app.merge.fix_up = (function app$merge$fix_up(transform){
var vec__38043 = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(transform);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(1),null);
var vec__38046 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(transform);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38046,(0),null);
var tc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38046,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transform,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fc,fr], null)),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,tr], null));
});
app.merge.transpose = (function app$merge$transpose(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,m);
});
app.merge.transpose(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0),(0)], null)], null));
app.merge.generate_board_moves = (function app$merge$generate_board_moves(board,direction){
var G__38049 = direction;
var G__38049__$1 = (((G__38049 instanceof cljs.core.Keyword))?G__38049.fqn:null);
switch (G__38049__$1) {
case "left":
return cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return app.merge.generate_row_moves(row,idx);
}),board)));

break;
case "right":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.merge.fix_right,cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return app.merge.generate_row_moves(row,idx);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,board)))));

break;
case "up":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.merge.fix_up,cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return app.merge.generate_row_moves(row,idx);
}),app.merge.transpose(board)))));

break;
case "down":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.merge.fix_up,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.merge.fix_right,cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return app.merge.generate_row_moves(row,idx);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,app.merge.transpose(board)))))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38049__$1)].join('')));

}
});

//# sourceMappingURL=app.merge.js.map
