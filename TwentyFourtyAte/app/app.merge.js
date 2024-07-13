goog.provide('app.merge');
app.merge.can_merge = (function app$merge$can_merge(a,b){
return ((typeof a === 'number') && (((typeof b === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)))));
});
app.merge.generate_row_moves = (function app$merge$generate_row_moves(p__28681,row){
var vec__28682 = p__28681;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28682,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28682,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28682,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28682,(3),null);
var ocr_28685 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c0);
var ocr_28686 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c1);
var ocr_28687 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c2);
var ocr_28688 = new cljs.core.Keyword(null,"tileval","tileval",252915903).cljs$core$IFn$_invoke$arity$1(c3);
try{if((ocr_28688 === (0))){
try{if((ocr_28687 === (0))){
try{if((ocr_28686 === (0))){
try{if((ocr_28685 === (0))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e28714){if((e28714 instanceof Error)){
var e__27667__auto__ = e28714;
if((e__27667__auto__ === cljs.core.match.backtrack)){
var a = ocr_28685;
return null;
} else {
throw e__27667__auto__;
}
} else {
throw e28714;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28712){if((e28712 instanceof Error)){
var e__27667__auto__ = e28712;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_28685 === (0))){
var a = ocr_28686;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28713){if((e28713 instanceof Error)){
var e__27667__auto____$1 = e28713;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e28713;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e28712;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28709){if((e28709 instanceof Error)){
var e__27667__auto__ = e28709;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_28685 === (0))){
try{if((ocr_28686 === (0))){
var a = ocr_28687;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28711){if((e28711 instanceof Error)){
var e__27667__auto____$1 = e28711;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e28711;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28710){if((e28710 instanceof Error)){
var e__27667__auto____$1 = e28710;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e28710;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e28709;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28693){if((e28693 instanceof Error)){
var e__27667__auto__ = e28693;
if((e__27667__auto__ === cljs.core.match.backtrack)){
try{if((ocr_28687 === (0))){
try{if((ocr_28685 === (0))){
try{if((ocr_28686 === (0))){
var a = ocr_28688;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28708){if((e28708 instanceof Error)){
var e__27667__auto____$1 = e28708;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$1;
}
} else {
throw e28708;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28706){if((e28706 instanceof Error)){
var e__27667__auto____$1 = e28706;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_28688 === (0))){
var a = ocr_28685;
var b = ocr_28686;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28707){if((e28707 instanceof Error)){
var e__27667__auto____$2 = e28707;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$2;
}
} else {
throw e28707;

}
}} else {
throw e__27667__auto____$1;
}
} else {
throw e28706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28694){if((e28694 instanceof Error)){
var e__27667__auto____$1 = e28694;
if((e__27667__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_28686 === (0))){
try{if((ocr_28688 === (0))){
var b = ocr_28687;
var a = ocr_28685;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28704){if((e28704 instanceof Error)){
var e__27667__auto____$2 = e28704;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_28687 === (0))){
var b = ocr_28688;
var a = ocr_28685;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28705){if((e28705 instanceof Error)){
var e__27667__auto____$3 = e28705;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$3;
}
} else {
throw e28705;

}
}} else {
throw e__27667__auto____$2;
}
} else {
throw e28704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28695){if((e28695 instanceof Error)){
var e__27667__auto____$2 = e28695;
if((e__27667__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_28685 === (0))){
try{if((ocr_28688 === (0))){
var a = ocr_28686;
var b = ocr_28687;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28701){if((e28701 instanceof Error)){
var e__27667__auto____$3 = e28701;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_28687 === (0))){
var b = ocr_28688;
var a = ocr_28686;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28702){if((e28702 instanceof Error)){
var e__27667__auto____$4 = e28702;
if((e__27667__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_28686 === (0))){
var a = ocr_28687;
var b = ocr_28688;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28703){if((e28703 instanceof Error)){
var e__27667__auto____$5 = e28703;
if((e__27667__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27667__auto____$5;
}
} else {
throw e28703;

}
}} else {
throw e__27667__auto____$4;
}
} else {
throw e28702;

}
}} else {
throw e__27667__auto____$3;
}
} else {
throw e28701;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28696){if((e28696 instanceof Error)){
var e__27667__auto____$3 = e28696;
if((e__27667__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_28688 === (0))){
var a = ocr_28685;
var b = ocr_28686;
var c = ocr_28687;
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
}catch (e28697){if((e28697 instanceof Error)){
var e__27667__auto____$4 = e28697;
if((e__27667__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_28687 === (0))){
var c = ocr_28688;
var a = ocr_28685;
var b = ocr_28686;
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
}catch (e28698){if((e28698 instanceof Error)){
var e__27667__auto____$5 = e28698;
if((e__27667__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_28686 === (0))){
var b = ocr_28687;
var c = ocr_28688;
var a = ocr_28685;
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
}catch (e28699){if((e28699 instanceof Error)){
var e__27667__auto____$6 = e28699;
if((e__27667__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_28685 === (0))){
var a = ocr_28686;
var b = ocr_28687;
var c = ocr_28688;
if(app.merge.can_merge(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);
} else {
if(app.merge.can_merge(b,c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(0)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(1)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(3)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(2)], null),new cljs.core.Keyword(null,"merged","merged",1648712643),false], null)], null);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28700){if((e28700 instanceof Error)){
var e__27667__auto____$7 = e28700;
if((e__27667__auto____$7 === cljs.core.match.backtrack)){
var a = ocr_28685;
var b = ocr_28686;
var c = ocr_28687;
var d = ocr_28688;
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
throw e28700;

}
}} else {
throw e__27667__auto____$6;
}
} else {
throw e28699;

}
}} else {
throw e__27667__auto____$5;
}
} else {
throw e28698;

}
}} else {
throw e__27667__auto____$4;
}
} else {
throw e28697;

}
}} else {
throw e__27667__auto____$3;
}
} else {
throw e28696;

}
}} else {
throw e__27667__auto____$2;
}
} else {
throw e28695;

}
}} else {
throw e__27667__auto____$1;
}
} else {
throw e28694;

}
}} else {
throw e__27667__auto__;
}
} else {
throw e28693;

}
}});
app.merge.sub3 = (function app$merge$sub3(n){
return ((3) - n);
});
app.merge.fix_right = (function app$merge$fix_right(transform){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),(1)], null),app.merge.sub3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null),app.merge.sub3);
});
app.merge.fix_up = (function app$merge$fix_up(transform){
var vec__28715 = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(transform);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28715,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28715,(1),null);
var vec__28718 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(transform);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28718,(0),null);
var tc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28718,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transform,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fc,fr], null)),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,tr], null));
});
app.merge.transpose = (function app$merge$transpose(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,m);
});
app.merge.transpose(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0),(0)], null)], null));
app.merge.generate_board_moves = (function app$merge$generate_board_moves(board,direction){
var G__28721 = direction;
var G__28721__$1 = (((G__28721 instanceof cljs.core.Keyword))?G__28721.fqn:null);
switch (G__28721__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28721__$1)].join('')));

}
});

//# sourceMappingURL=app.merge.js.map
