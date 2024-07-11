goog.provide('app.merge');
app.merge.can_merge = (function app$merge$can_merge(a,b){
return ((typeof a === 'number') && (((typeof b === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)))));
});
app.merge.generate_row_moves = (function app$merge$generate_row_moves(p__33936,row){
var vec__33937 = p__33936;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33937,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33937,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33937,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33937,(3),null);
var ocr_33940 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(c0);
var ocr_33941 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(c1);
var ocr_33942 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(c2);
var ocr_33943 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(c3);
try{if((ocr_33943 === (0))){
try{if((ocr_33942 === (0))){
try{if((ocr_33941 === (0))){
try{if((ocr_33940 === (0))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e33969){if((e33969 instanceof Error)){
var e__27667__auto__ = e33969;
if((e__27667__auto__ === cljs.core.match.backtrack)){
var a = ocr_33940;
return null;
} else {
throw e__27667__auto__;
}
} else {
throw e33969;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33967){if((e33967 instanceof Error)){
var e__27667__auto__ = e33967;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_33940 === (0))){
var a = ocr_33941;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33968){if((e33968 instanceof Error)){
var e__27667__auto____$1 = e33968;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e33968;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e33967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33964){if((e33964 instanceof Error)){
var e__27667__auto__ = e33964;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_33940 === (0))){
try{if((ocr_33941 === (0))){
var a = ocr_33942;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33966){if((e33966 instanceof Error)){
var e__27667__auto____$1 = e33966;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e33966;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33965){if((e33965 instanceof Error)){
var e__27667__auto____$1 = e33965;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e33965;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e33964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33948){if((e33948 instanceof Error)){
var e__27667__auto__ = e33948;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_33942 === (0))){
try{if((ocr_33940 === (0))){
try{if((ocr_33941 === (0))){
var a = ocr_33943;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33963){if((e33963 instanceof Error)){
var e__27667__auto____$1 = e33963;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e33963;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33961){if((e33961 instanceof Error)){
var e__27667__auto____$1 = e33961;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_33943 === (0))){
var a = ocr_33940;
var b = ocr_33941;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null);
} else {
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33962){if((e33962 instanceof Error)){
var e__27667__auto____$2 = e33962;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$2;
}
} else {
throw e33962;

}
}} else {
throw e__27667__auto____$1;
}
} else {
throw e33961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33949){if((e33949 instanceof Error)){
var e__27667__auto____$1 = e33949;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_33941 === (0))){
try{if((ocr_33943 === (0))){
var b = ocr_33942;
var a = ocr_33940;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33959){if((e33959 instanceof Error)){
var e__27667__auto____$2 = e33959;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_33942 === (0))){
var b = ocr_33943;
var a = ocr_33940;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33960){if((e33960 instanceof Error)){
var e__27667__auto____$3 = e33960;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$3;
}
} else {
throw e33960;

}
}} else {
throw e__27667__auto____$2;
}
} else {
throw e33959;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33950){if((e33950 instanceof Error)){
var e__27667__auto____$2 = e33950;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_33940 === (0))){
try{if((ocr_33943 === (0))){
var a = ocr_33941;
var b = ocr_33942;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33956){if((e33956 instanceof Error)){
var e__27667__auto____$3 = e33956;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_33942 === (0))){
var b = ocr_33943;
var a = ocr_33941;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33957){if((e33957 instanceof Error)){
var e__27667__auto____$4 = e33957;
if((e__27667__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_33941 === (0))){
var a = ocr_33942;
var b = ocr_33943;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33958){if((e33958 instanceof Error)){
var e__27667__auto____$5 = e33958;
if((e__27667__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$5;
}
} else {
throw e33958;

}
}} else {
throw e__27667__auto____$4;
}
} else {
throw e33957;

}
}} else {
throw e__27667__auto____$3;
}
} else {
throw e33956;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33951){if((e33951 instanceof Error)){
var e__27667__auto____$3 = e33951;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_33943 === (0))){
var a = ocr_33940;
var b = ocr_33941;
var c = ocr_33942;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return null;

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33952){if((e33952 instanceof Error)){
var e__27667__auto____$4 = e33952;
if((e__27667__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_33942 === (0))){
var c = ocr_33943;
var a = ocr_33940;
var b = ocr_33941;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33953){if((e33953 instanceof Error)){
var e__27667__auto____$5 = e33953;
if((e__27667__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_33941 === (0))){
var b = ocr_33942;
var c = ocr_33943;
var a = ocr_33940;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33954){if((e33954 instanceof Error)){
var e__27667__auto____$6 = e33954;
if((e__27667__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_33940 === (0))){
var a = ocr_33941;
var b = ocr_33942;
var c = ocr_33943;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33955){if((e33955 instanceof Error)){
var e__27667__auto____$7 = e33955;
if((e__27667__auto____$7 === cljs.core.match.backtrack)){
var a = ocr_33940;
var b = ocr_33941;
var c = ocr_33942;
var d = ocr_33943;
if(app.merge.can_merge(a,b)){
if(app.merge.can_merge(c,d)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);

}
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),false], null)], null);
} else {
if(app.merge.can_merge(c,d)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merge","merge",-1804319409),true], null);
} else {
return null;

}
}
}
} else {
throw e__27667__auto____$7;
}
} else {
throw e33955;

}
}} else {
throw e__27667__auto____$6;
}
} else {
throw e33954;

}
}} else {
throw e__27667__auto____$5;
}
} else {
throw e33953;

}
}} else {
throw e__27667__auto____$4;
}
} else {
throw e33952;

}
}} else {
throw e__27667__auto____$3;
}
} else {
throw e33951;

}
}} else {
throw e__27667__auto____$2;
}
} else {
throw e33950;

}
}} else {
throw e__27667__auto____$1;
}
} else {
throw e33949;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e33948;

}
}});
app.merge.sub3 = (function app$merge$sub3(n){
return ((3) - n);
});
app.merge.fix_right = (function app$merge$fix_right(transform){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),(1)], null),app.merge.sub3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null),app.merge.sub3);
});
app.merge.fix_up = (function app$merge$fix_up(transform){
var vec__33970 = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(transform);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33970,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33970,(1),null);
var vec__33973 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(transform);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33973,(0),null);
var tc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33973,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transform,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fc,fr], null)),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,tr], null));
});
app.merge.transpose = (function app$merge$transpose(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,m);
});
app.merge.transpose(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0),(0)], null)], null));
app.merge.generate_board_moves = (function app$merge$generate_board_moves(board,direction){
var G__33976 = direction;
var G__33976__$1 = (((G__33976 instanceof cljs.core.Keyword))?G__33976.fqn:null);
switch (G__33976__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33976__$1)].join('')));

}
});

//# sourceMappingURL=app.merge.js.map
