goog.provide('preload');
if((typeof preload !== 'undefined') && (typeof preload.__init_fast_refresh_BANG_ !== 'undefined')){
} else {
preload.__init_fast_refresh_BANG_ = (function (){
uix.dev.init_fast_refresh_BANG_();

return null;
})()
;
}
if((typeof preload !== 'undefined') && (typeof preload.__disable_react_native_hot_reloading_BANG_ !== 'undefined')){
} else {
preload.__disable_react_native_hot_reloading_BANG_ = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.js.shim.module$react_native.Platform.OS,"ios")){
shadow.js.shim.module$react_native.NativeModules.DevSettings.setHotLoadingEnabled(false);
} else {
}

return null;
})()
;
}
preload.refresh = (function preload$refresh(){
return uix.dev.refresh_BANG_();
});
goog.exportSymbol('preload.refresh', preload.refresh);
preload.build_notify = (function preload$build_notify(p__27700){
var map__27701 = p__27700;
var map__27701__$1 = cljs.core.__destructure_map(map__27701);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27701__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27701__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466),type)){
return console.error((new Error(report)));
} else {
return null;
}
});
goog.exportSymbol('preload.build_notify', preload.build_notify);

//# sourceMappingURL=preload.js.map
