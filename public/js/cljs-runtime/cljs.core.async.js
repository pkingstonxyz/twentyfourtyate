goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14396 = (function (f,blockable,meta14397){
this.f = f;
this.blockable = blockable;
this.meta14397 = meta14397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14398,meta14397__$1){
var self__ = this;
var _14398__$1 = this;
return (new cljs.core.async.t_cljs$core$async14396(self__.f,self__.blockable,meta14397__$1));
}));

(cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14398){
var self__ = this;
var _14398__$1 = this;
return self__.meta14397;
}));

(cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14397","meta14397",1045440440,null)], null);
}));

(cljs.core.async.t_cljs$core$async14396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14396");

(cljs.core.async.t_cljs$core$async14396.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14396.
 */
cljs.core.async.__GT_t_cljs$core$async14396 = (function cljs$core$async$__GT_t_cljs$core$async14396(f,blockable,meta14397){
return (new cljs.core.async.t_cljs$core$async14396(f,blockable,meta14397));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14393 = arguments.length;
switch (G__14393) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14424 = arguments.length;
switch (G__14424) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14438 = arguments.length;
switch (G__14438) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14450 = arguments.length;
switch (G__14450) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17725 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17725) : fn1.call(null, val_17725));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17725) : fn1.call(null, val_17725));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14470 = arguments.length;
switch (G__14470) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17756 = n;
var x_17757 = (0);
while(true){
if((x_17757 < n__5593__auto___17756)){
(a[x_17757] = x_17757);

var G__17758 = (x_17757 + (1));
x_17757 = G__17758;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14485 = (function (flag,meta14486){
this.flag = flag;
this.meta14486 = meta14486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14487,meta14486__$1){
var self__ = this;
var _14487__$1 = this;
return (new cljs.core.async.t_cljs$core$async14485(self__.flag,meta14486__$1));
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14487){
var self__ = this;
var _14487__$1 = this;
return self__.meta14486;
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14486","meta14486",-306925763,null)], null);
}));

(cljs.core.async.t_cljs$core$async14485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14485");

(cljs.core.async.t_cljs$core$async14485.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14485.
 */
cljs.core.async.__GT_t_cljs$core$async14485 = (function cljs$core$async$__GT_t_cljs$core$async14485(flag,meta14486){
return (new cljs.core.async.t_cljs$core$async14485(flag,meta14486));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14485(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14501 = (function (flag,cb,meta14502){
this.flag = flag;
this.cb = cb;
this.meta14502 = meta14502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14503,meta14502__$1){
var self__ = this;
var _14503__$1 = this;
return (new cljs.core.async.t_cljs$core$async14501(self__.flag,self__.cb,meta14502__$1));
}));

(cljs.core.async.t_cljs$core$async14501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14503){
var self__ = this;
var _14503__$1 = this;
return self__.meta14502;
}));

(cljs.core.async.t_cljs$core$async14501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14502","meta14502",-1915655201,null)], null);
}));

(cljs.core.async.t_cljs$core$async14501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14501");

(cljs.core.async.t_cljs$core$async14501.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14501.
 */
cljs.core.async.__GT_t_cljs$core$async14501 = (function cljs$core$async$__GT_t_cljs$core$async14501(flag,cb,meta14502){
return (new cljs.core.async.t_cljs$core$async14501(flag,cb,meta14502));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14501(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14514_SHARP_){
var G__14520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14514_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14520) : fret.call(null, G__14520));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14515_SHARP_){
var G__14526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14515_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14526) : fret.call(null, G__14526));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17769 = (i + (1));
i = G__17769;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17771 = arguments.length;
var i__5727__auto___17772 = (0);
while(true){
if((i__5727__auto___17772 < len__5726__auto___17771)){
args__5732__auto__.push((arguments[i__5727__auto___17772]));

var G__17773 = (i__5727__auto___17772 + (1));
i__5727__auto___17772 = G__17773;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14543){
var map__14544 = p__14543;
var map__14544__$1 = cljs.core.__destructure_map(map__14544);
var opts = map__14544__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14533){
var G__14534 = cljs.core.first(seq14533);
var seq14533__$1 = cljs.core.next(seq14533);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14534,seq14533__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14550 = arguments.length;
switch (G__14550) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14267__auto___17775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_14591){
var state_val_14592 = (state_14591[(1)]);
if((state_val_14592 === (7))){
var inst_14587 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14596_17776 = state_14591__$1;
(statearr_14596_17776[(2)] = inst_14587);

(statearr_14596_17776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (1))){
var state_14591__$1 = state_14591;
var statearr_14600_17777 = state_14591__$1;
(statearr_14600_17777[(2)] = null);

(statearr_14600_17777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (4))){
var inst_14565 = (state_14591[(7)]);
var inst_14565__$1 = (state_14591[(2)]);
var inst_14567 = (inst_14565__$1 == null);
var state_14591__$1 = (function (){var statearr_14608 = state_14591;
(statearr_14608[(7)] = inst_14565__$1);

return statearr_14608;
})();
if(cljs.core.truth_(inst_14567)){
var statearr_14609_17778 = state_14591__$1;
(statearr_14609_17778[(1)] = (5));

} else {
var statearr_14611_17779 = state_14591__$1;
(statearr_14611_17779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (13))){
var state_14591__$1 = state_14591;
var statearr_14612_17780 = state_14591__$1;
(statearr_14612_17780[(2)] = null);

(statearr_14612_17780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (6))){
var inst_14565 = (state_14591[(7)]);
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14591__$1,(11),to,inst_14565);
} else {
if((state_val_14592 === (3))){
var inst_14589 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14591__$1,inst_14589);
} else {
if((state_val_14592 === (12))){
var state_14591__$1 = state_14591;
var statearr_14619_17784 = state_14591__$1;
(statearr_14619_17784[(2)] = null);

(statearr_14619_17784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (2))){
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14591__$1,(4),from);
} else {
if((state_val_14592 === (11))){
var inst_14580 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
if(cljs.core.truth_(inst_14580)){
var statearr_14624_17785 = state_14591__$1;
(statearr_14624_17785[(1)] = (12));

} else {
var statearr_14625_17786 = state_14591__$1;
(statearr_14625_17786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (9))){
var state_14591__$1 = state_14591;
var statearr_14626_17787 = state_14591__$1;
(statearr_14626_17787[(2)] = null);

(statearr_14626_17787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (5))){
var state_14591__$1 = state_14591;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14627_17788 = state_14591__$1;
(statearr_14627_17788[(1)] = (8));

} else {
var statearr_14628_17791 = state_14591__$1;
(statearr_14628_17791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (14))){
var inst_14585 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14633_17792 = state_14591__$1;
(statearr_14633_17792[(2)] = inst_14585);

(statearr_14633_17792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (10))){
var inst_14577 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14634_17793 = state_14591__$1;
(statearr_14634_17793[(2)] = inst_14577);

(statearr_14634_17793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (8))){
var inst_14572 = cljs.core.async.close_BANG_(to);
var state_14591__$1 = state_14591;
var statearr_14635_17796 = state_14591__$1;
(statearr_14635_17796[(2)] = inst_14572);

(statearr_14635_17796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_14640 = [null,null,null,null,null,null,null,null];
(statearr_14640[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_14640[(1)] = (1));

return statearr_14640;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_14591){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_14591);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e14642){var ex__13239__auto__ = e14642;
var statearr_14643_17798 = state_14591;
(statearr_14643_17798[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_14591[(4)]))){
var statearr_14644_17799 = state_14591;
(statearr_14644_17799[(1)] = cljs.core.first((state_14591[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17801 = state_14591;
state_14591 = G__17801;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_14591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_14591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_14645 = f__14268__auto__();
(statearr_14645[(6)] = c__14267__auto___17775);

return statearr_14645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14655){
var vec__14656 = p__14655;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14656,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14656,(1),null);
var job = vec__14656;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14267__auto___17804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_14667){
var state_val_14668 = (state_14667[(1)]);
if((state_val_14668 === (1))){
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14667__$1,(2),res,v);
} else {
if((state_val_14668 === (2))){
var inst_14664 = (state_14667[(2)]);
var inst_14665 = cljs.core.async.close_BANG_(res);
var state_14667__$1 = (function (){var statearr_14669 = state_14667;
(statearr_14669[(7)] = inst_14664);

return statearr_14669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14667__$1,inst_14665);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0 = (function (){
var statearr_14672 = [null,null,null,null,null,null,null,null];
(statearr_14672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__);

(statearr_14672[(1)] = (1));

return statearr_14672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1 = (function (state_14667){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_14667);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e14674){var ex__13239__auto__ = e14674;
var statearr_14675_17810 = state_14667;
(statearr_14675_17810[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_14667[(4)]))){
var statearr_14676_17811 = state_14667;
(statearr_14676_17811[(1)] = cljs.core.first((state_14667[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17812 = state_14667;
state_14667 = G__17812;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = function(state_14667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1.call(this,state_14667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_14678 = f__14268__auto__();
(statearr_14678[(6)] = c__14267__auto___17804);

return statearr_14678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14681){
var vec__14682 = p__14681;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(1),null);
var job = vec__14682;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17815 = n;
var __17816 = (0);
while(true){
if((__17816 < n__5593__auto___17815)){
var G__14688_17817 = type;
var G__14688_17818__$1 = (((G__14688_17817 instanceof cljs.core.Keyword))?G__14688_17817.fqn:null);
switch (G__14688_17818__$1) {
case "compute":
var c__14267__auto___17820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17816,c__14267__auto___17820,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async){
return (function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = ((function (__17816,c__14267__auto___17820,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async){
return (function (state_14708){
var state_val_14709 = (state_14708[(1)]);
if((state_val_14709 === (1))){
var state_14708__$1 = state_14708;
var statearr_14710_17823 = state_14708__$1;
(statearr_14710_17823[(2)] = null);

(statearr_14710_17823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (2))){
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14708__$1,(4),jobs);
} else {
if((state_val_14709 === (3))){
var inst_14705 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14708__$1,inst_14705);
} else {
if((state_val_14709 === (4))){
var inst_14697 = (state_14708[(2)]);
var inst_14698 = process__$1(inst_14697);
var state_14708__$1 = state_14708;
if(cljs.core.truth_(inst_14698)){
var statearr_14713_17824 = state_14708__$1;
(statearr_14713_17824[(1)] = (5));

} else {
var statearr_14714_17826 = state_14708__$1;
(statearr_14714_17826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (5))){
var state_14708__$1 = state_14708;
var statearr_14715_17827 = state_14708__$1;
(statearr_14715_17827[(2)] = null);

(statearr_14715_17827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (6))){
var state_14708__$1 = state_14708;
var statearr_14717_17828 = state_14708__$1;
(statearr_14717_17828[(2)] = null);

(statearr_14717_17828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (7))){
var inst_14703 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14721_17829 = state_14708__$1;
(statearr_14721_17829[(2)] = inst_14703);

(statearr_14721_17829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17816,c__14267__auto___17820,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async))
;
return ((function (__17816,switch__13235__auto__,c__14267__auto___17820,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0 = (function (){
var statearr_14728 = [null,null,null,null,null,null,null];
(statearr_14728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__);

(statearr_14728[(1)] = (1));

return statearr_14728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1 = (function (state_14708){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_14708);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e14729){var ex__13239__auto__ = e14729;
var statearr_14730_17832 = state_14708;
(statearr_14730_17832[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_14708[(4)]))){
var statearr_14731_17835 = state_14708;
(statearr_14731_17835[(1)] = cljs.core.first((state_14708[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17838 = state_14708;
state_14708 = G__17838;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = function(state_14708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1.call(this,state_14708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__;
})()
;})(__17816,switch__13235__auto__,c__14267__auto___17820,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async))
})();
var state__14269__auto__ = (function (){var statearr_14732 = f__14268__auto__();
(statearr_14732[(6)] = c__14267__auto___17820);

return statearr_14732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
});})(__17816,c__14267__auto___17820,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async))
);


break;
case "async":
var c__14267__auto___17842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17816,c__14267__auto___17842,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async){
return (function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = ((function (__17816,c__14267__auto___17842,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async){
return (function (state_14745){
var state_val_14746 = (state_14745[(1)]);
if((state_val_14746 === (1))){
var state_14745__$1 = state_14745;
var statearr_14749_17844 = state_14745__$1;
(statearr_14749_17844[(2)] = null);

(statearr_14749_17844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (2))){
var state_14745__$1 = state_14745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14745__$1,(4),jobs);
} else {
if((state_val_14746 === (3))){
var inst_14743 = (state_14745[(2)]);
var state_14745__$1 = state_14745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14745__$1,inst_14743);
} else {
if((state_val_14746 === (4))){
var inst_14735 = (state_14745[(2)]);
var inst_14736 = async(inst_14735);
var state_14745__$1 = state_14745;
if(cljs.core.truth_(inst_14736)){
var statearr_14752_17849 = state_14745__$1;
(statearr_14752_17849[(1)] = (5));

} else {
var statearr_14753_17850 = state_14745__$1;
(statearr_14753_17850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (5))){
var state_14745__$1 = state_14745;
var statearr_14754_17851 = state_14745__$1;
(statearr_14754_17851[(2)] = null);

(statearr_14754_17851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (6))){
var state_14745__$1 = state_14745;
var statearr_14755_17855 = state_14745__$1;
(statearr_14755_17855[(2)] = null);

(statearr_14755_17855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14746 === (7))){
var inst_14741 = (state_14745[(2)]);
var state_14745__$1 = state_14745;
var statearr_14756_17858 = state_14745__$1;
(statearr_14756_17858[(2)] = inst_14741);

(statearr_14756_17858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17816,c__14267__auto___17842,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async))
;
return ((function (__17816,switch__13235__auto__,c__14267__auto___17842,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0 = (function (){
var statearr_14757 = [null,null,null,null,null,null,null];
(statearr_14757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__);

(statearr_14757[(1)] = (1));

return statearr_14757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1 = (function (state_14745){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_14745);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e14759){var ex__13239__auto__ = e14759;
var statearr_14760_17862 = state_14745;
(statearr_14760_17862[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_14745[(4)]))){
var statearr_14761_17864 = state_14745;
(statearr_14761_17864[(1)] = cljs.core.first((state_14745[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17865 = state_14745;
state_14745 = G__17865;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = function(state_14745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1.call(this,state_14745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__;
})()
;})(__17816,switch__13235__auto__,c__14267__auto___17842,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async))
})();
var state__14269__auto__ = (function (){var statearr_14765 = f__14268__auto__();
(statearr_14765[(6)] = c__14267__auto___17842);

return statearr_14765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
});})(__17816,c__14267__auto___17842,G__14688_17817,G__14688_17818__$1,n__5593__auto___17815,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14688_17818__$1)].join('')));

}

var G__17871 = (__17816 + (1));
__17816 = G__17871;
continue;
} else {
}
break;
}

var c__14267__auto___17872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_14797){
var state_val_14798 = (state_14797[(1)]);
if((state_val_14798 === (7))){
var inst_14792 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14805_17873 = state_14797__$1;
(statearr_14805_17873[(2)] = inst_14792);

(statearr_14805_17873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (1))){
var state_14797__$1 = state_14797;
var statearr_14809_17874 = state_14797__$1;
(statearr_14809_17874[(2)] = null);

(statearr_14809_17874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (4))){
var inst_14771 = (state_14797[(7)]);
var inst_14771__$1 = (state_14797[(2)]);
var inst_14772 = (inst_14771__$1 == null);
var state_14797__$1 = (function (){var statearr_14811 = state_14797;
(statearr_14811[(7)] = inst_14771__$1);

return statearr_14811;
})();
if(cljs.core.truth_(inst_14772)){
var statearr_14812_17875 = state_14797__$1;
(statearr_14812_17875[(1)] = (5));

} else {
var statearr_14820_17876 = state_14797__$1;
(statearr_14820_17876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (6))){
var inst_14771 = (state_14797[(7)]);
var inst_14779 = (state_14797[(8)]);
var inst_14779__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14784 = [inst_14771,inst_14779__$1];
var inst_14785 = (new cljs.core.PersistentVector(null,2,(5),inst_14783,inst_14784,null));
var state_14797__$1 = (function (){var statearr_14825 = state_14797;
(statearr_14825[(8)] = inst_14779__$1);

return statearr_14825;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14797__$1,(8),jobs,inst_14785);
} else {
if((state_val_14798 === (3))){
var inst_14794 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14797__$1,inst_14794);
} else {
if((state_val_14798 === (2))){
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14797__$1,(4),from);
} else {
if((state_val_14798 === (9))){
var inst_14789 = (state_14797[(2)]);
var state_14797__$1 = (function (){var statearr_14840 = state_14797;
(statearr_14840[(9)] = inst_14789);

return statearr_14840;
})();
var statearr_14845_17877 = state_14797__$1;
(statearr_14845_17877[(2)] = null);

(statearr_14845_17877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (5))){
var inst_14776 = cljs.core.async.close_BANG_(jobs);
var state_14797__$1 = state_14797;
var statearr_14854_17879 = state_14797__$1;
(statearr_14854_17879[(2)] = inst_14776);

(statearr_14854_17879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (8))){
var inst_14779 = (state_14797[(8)]);
var inst_14787 = (state_14797[(2)]);
var state_14797__$1 = (function (){var statearr_14856 = state_14797;
(statearr_14856[(10)] = inst_14787);

return statearr_14856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14797__$1,(9),results,inst_14779);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0 = (function (){
var statearr_14860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__);

(statearr_14860[(1)] = (1));

return statearr_14860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1 = (function (state_14797){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_14797);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e14862){var ex__13239__auto__ = e14862;
var statearr_14865_17882 = state_14797;
(statearr_14865_17882[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_14797[(4)]))){
var statearr_14867_17884 = state_14797;
(statearr_14867_17884[(1)] = cljs.core.first((state_14797[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17888 = state_14797;
state_14797 = G__17888;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = function(state_14797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1.call(this,state_14797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_14869 = f__14268__auto__();
(statearr_14869[(6)] = c__14267__auto___17872);

return statearr_14869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


var c__14267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_14914){
var state_val_14916 = (state_14914[(1)]);
if((state_val_14916 === (7))){
var inst_14907 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14926_17904 = state_14914__$1;
(statearr_14926_17904[(2)] = inst_14907);

(statearr_14926_17904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (20))){
var state_14914__$1 = state_14914;
var statearr_14928_17913 = state_14914__$1;
(statearr_14928_17913[(2)] = null);

(statearr_14928_17913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (1))){
var state_14914__$1 = state_14914;
var statearr_14931_17921 = state_14914__$1;
(statearr_14931_17921[(2)] = null);

(statearr_14931_17921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (4))){
var inst_14872 = (state_14914[(7)]);
var inst_14872__$1 = (state_14914[(2)]);
var inst_14873 = (inst_14872__$1 == null);
var state_14914__$1 = (function (){var statearr_14935 = state_14914;
(statearr_14935[(7)] = inst_14872__$1);

return statearr_14935;
})();
if(cljs.core.truth_(inst_14873)){
var statearr_14936_17922 = state_14914__$1;
(statearr_14936_17922[(1)] = (5));

} else {
var statearr_14937_17923 = state_14914__$1;
(statearr_14937_17923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (15))){
var inst_14888 = (state_14914[(8)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14914__$1,(18),to,inst_14888);
} else {
if((state_val_14916 === (21))){
var inst_14902 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14954_17924 = state_14914__$1;
(statearr_14954_17924[(2)] = inst_14902);

(statearr_14954_17924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (13))){
var inst_14904 = (state_14914[(2)]);
var state_14914__$1 = (function (){var statearr_14956 = state_14914;
(statearr_14956[(9)] = inst_14904);

return statearr_14956;
})();
var statearr_14958_17926 = state_14914__$1;
(statearr_14958_17926[(2)] = null);

(statearr_14958_17926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (6))){
var inst_14872 = (state_14914[(7)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14914__$1,(11),inst_14872);
} else {
if((state_val_14916 === (17))){
var inst_14897 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
if(cljs.core.truth_(inst_14897)){
var statearr_14963_17927 = state_14914__$1;
(statearr_14963_17927[(1)] = (19));

} else {
var statearr_14965_17931 = state_14914__$1;
(statearr_14965_17931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (3))){
var inst_14909 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14914__$1,inst_14909);
} else {
if((state_val_14916 === (12))){
var inst_14882 = (state_14914[(10)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14914__$1,(14),inst_14882);
} else {
if((state_val_14916 === (2))){
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14914__$1,(4),results);
} else {
if((state_val_14916 === (19))){
var state_14914__$1 = state_14914;
var statearr_14973_17935 = state_14914__$1;
(statearr_14973_17935[(2)] = null);

(statearr_14973_17935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (11))){
var inst_14882 = (state_14914[(2)]);
var state_14914__$1 = (function (){var statearr_14977 = state_14914;
(statearr_14977[(10)] = inst_14882);

return statearr_14977;
})();
var statearr_14978_17936 = state_14914__$1;
(statearr_14978_17936[(2)] = null);

(statearr_14978_17936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (9))){
var state_14914__$1 = state_14914;
var statearr_14980_17940 = state_14914__$1;
(statearr_14980_17940[(2)] = null);

(statearr_14980_17940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (5))){
var state_14914__$1 = state_14914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14984_17941 = state_14914__$1;
(statearr_14984_17941[(1)] = (8));

} else {
var statearr_14985_17942 = state_14914__$1;
(statearr_14985_17942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (14))){
var inst_14890 = (state_14914[(11)]);
var inst_14888 = (state_14914[(8)]);
var inst_14888__$1 = (state_14914[(2)]);
var inst_14889 = (inst_14888__$1 == null);
var inst_14890__$1 = cljs.core.not(inst_14889);
var state_14914__$1 = (function (){var statearr_14991 = state_14914;
(statearr_14991[(11)] = inst_14890__$1);

(statearr_14991[(8)] = inst_14888__$1);

return statearr_14991;
})();
if(inst_14890__$1){
var statearr_14993_17943 = state_14914__$1;
(statearr_14993_17943[(1)] = (15));

} else {
var statearr_14994_17944 = state_14914__$1;
(statearr_14994_17944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (16))){
var inst_14890 = (state_14914[(11)]);
var state_14914__$1 = state_14914;
var statearr_14997_17946 = state_14914__$1;
(statearr_14997_17946[(2)] = inst_14890);

(statearr_14997_17946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (10))){
var inst_14879 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_15001_17948 = state_14914__$1;
(statearr_15001_17948[(2)] = inst_14879);

(statearr_15001_17948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (18))){
var inst_14894 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_15003_17949 = state_14914__$1;
(statearr_15003_17949[(2)] = inst_14894);

(statearr_15003_17949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14916 === (8))){
var inst_14876 = cljs.core.async.close_BANG_(to);
var state_14914__$1 = state_14914;
var statearr_15008_17955 = state_14914__$1;
(statearr_15008_17955[(2)] = inst_14876);

(statearr_15008_17955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0 = (function (){
var statearr_15016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__);

(statearr_15016[(1)] = (1));

return statearr_15016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1 = (function (state_14914){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_14914);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e15019){var ex__13239__auto__ = e15019;
var statearr_15021_17960 = state_14914;
(statearr_15021_17960[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_14914[(4)]))){
var statearr_15022_17961 = state_14914;
(statearr_15022_17961[(1)] = cljs.core.first((state_14914[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17962 = state_14914;
state_14914 = G__17962;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_15038 = f__14268__auto__();
(statearr_15038[(6)] = c__14267__auto__);

return statearr_15038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

return c__14267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15048 = arguments.length;
switch (G__15048) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15064 = arguments.length;
switch (G__15064) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15084 = arguments.length;
switch (G__15084) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14267__auto___17984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_15125){
var state_val_15126 = (state_15125[(1)]);
if((state_val_15126 === (7))){
var inst_15120 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
var statearr_15131_17989 = state_15125__$1;
(statearr_15131_17989[(2)] = inst_15120);

(statearr_15131_17989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (1))){
var state_15125__$1 = state_15125;
var statearr_15135_17990 = state_15125__$1;
(statearr_15135_17990[(2)] = null);

(statearr_15135_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (4))){
var inst_15098 = (state_15125[(7)]);
var inst_15098__$1 = (state_15125[(2)]);
var inst_15099 = (inst_15098__$1 == null);
var state_15125__$1 = (function (){var statearr_15137 = state_15125;
(statearr_15137[(7)] = inst_15098__$1);

return statearr_15137;
})();
if(cljs.core.truth_(inst_15099)){
var statearr_15140_17995 = state_15125__$1;
(statearr_15140_17995[(1)] = (5));

} else {
var statearr_15142_17996 = state_15125__$1;
(statearr_15142_17996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (13))){
var state_15125__$1 = state_15125;
var statearr_15152_17997 = state_15125__$1;
(statearr_15152_17997[(2)] = null);

(statearr_15152_17997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (6))){
var inst_15098 = (state_15125[(7)]);
var inst_15107 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15098) : p.call(null, inst_15098));
var state_15125__$1 = state_15125;
if(cljs.core.truth_(inst_15107)){
var statearr_15160_17998 = state_15125__$1;
(statearr_15160_17998[(1)] = (9));

} else {
var statearr_15161_17999 = state_15125__$1;
(statearr_15161_17999[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (3))){
var inst_15122 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15125__$1,inst_15122);
} else {
if((state_val_15126 === (12))){
var state_15125__$1 = state_15125;
var statearr_15165_18001 = state_15125__$1;
(statearr_15165_18001[(2)] = null);

(statearr_15165_18001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (2))){
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15125__$1,(4),ch);
} else {
if((state_val_15126 === (11))){
var inst_15098 = (state_15125[(7)]);
var inst_15111 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15125__$1,(8),inst_15111,inst_15098);
} else {
if((state_val_15126 === (9))){
var state_15125__$1 = state_15125;
var statearr_15168_18003 = state_15125__$1;
(statearr_15168_18003[(2)] = tc);

(statearr_15168_18003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (5))){
var inst_15102 = cljs.core.async.close_BANG_(tc);
var inst_15104 = cljs.core.async.close_BANG_(fc);
var state_15125__$1 = (function (){var statearr_15170 = state_15125;
(statearr_15170[(8)] = inst_15102);

return statearr_15170;
})();
var statearr_15172_18004 = state_15125__$1;
(statearr_15172_18004[(2)] = inst_15104);

(statearr_15172_18004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (14))){
var inst_15118 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
var statearr_15175_18010 = state_15125__$1;
(statearr_15175_18010[(2)] = inst_15118);

(statearr_15175_18010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (10))){
var state_15125__$1 = state_15125;
var statearr_15176_18011 = state_15125__$1;
(statearr_15176_18011[(2)] = fc);

(statearr_15176_18011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (8))){
var inst_15113 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
if(cljs.core.truth_(inst_15113)){
var statearr_15179_18012 = state_15125__$1;
(statearr_15179_18012[(1)] = (12));

} else {
var statearr_15184_18013 = state_15125__$1;
(statearr_15184_18013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_15191 = [null,null,null,null,null,null,null,null,null];
(statearr_15191[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_15191[(1)] = (1));

return statearr_15191;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_15125){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_15125);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e15193){var ex__13239__auto__ = e15193;
var statearr_15194_18014 = state_15125;
(statearr_15194_18014[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_15125[(4)]))){
var statearr_15195_18015 = state_15125;
(statearr_15195_18015[(1)] = cljs.core.first((state_15125[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18016 = state_15125;
state_15125 = G__18016;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_15125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_15125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_15203 = f__14268__auto__();
(statearr_15203[(6)] = c__14267__auto___17984);

return statearr_15203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_15248){
var state_val_15249 = (state_15248[(1)]);
if((state_val_15249 === (7))){
var inst_15241 = (state_15248[(2)]);
var state_15248__$1 = state_15248;
var statearr_15259_18017 = state_15248__$1;
(statearr_15259_18017[(2)] = inst_15241);

(statearr_15259_18017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (1))){
var inst_15214 = init;
var inst_15215 = inst_15214;
var state_15248__$1 = (function (){var statearr_15263 = state_15248;
(statearr_15263[(7)] = inst_15215);

return statearr_15263;
})();
var statearr_15264_18018 = state_15248__$1;
(statearr_15264_18018[(2)] = null);

(statearr_15264_18018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (4))){
var inst_15219 = (state_15248[(8)]);
var inst_15219__$1 = (state_15248[(2)]);
var inst_15226 = (inst_15219__$1 == null);
var state_15248__$1 = (function (){var statearr_15269 = state_15248;
(statearr_15269[(8)] = inst_15219__$1);

return statearr_15269;
})();
if(cljs.core.truth_(inst_15226)){
var statearr_15272_18020 = state_15248__$1;
(statearr_15272_18020[(1)] = (5));

} else {
var statearr_15277_18021 = state_15248__$1;
(statearr_15277_18021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (6))){
var inst_15219 = (state_15248[(8)]);
var inst_15215 = (state_15248[(7)]);
var inst_15230 = (state_15248[(9)]);
var inst_15230__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15215,inst_15219) : f.call(null, inst_15215,inst_15219));
var inst_15232 = cljs.core.reduced_QMARK_(inst_15230__$1);
var state_15248__$1 = (function (){var statearr_15281 = state_15248;
(statearr_15281[(9)] = inst_15230__$1);

return statearr_15281;
})();
if(inst_15232){
var statearr_15283_18023 = state_15248__$1;
(statearr_15283_18023[(1)] = (8));

} else {
var statearr_15288_18024 = state_15248__$1;
(statearr_15288_18024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (3))){
var inst_15243 = (state_15248[(2)]);
var state_15248__$1 = state_15248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15248__$1,inst_15243);
} else {
if((state_val_15249 === (2))){
var state_15248__$1 = state_15248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15248__$1,(4),ch);
} else {
if((state_val_15249 === (9))){
var inst_15230 = (state_15248[(9)]);
var inst_15215 = inst_15230;
var state_15248__$1 = (function (){var statearr_15303 = state_15248;
(statearr_15303[(7)] = inst_15215);

return statearr_15303;
})();
var statearr_15304_18025 = state_15248__$1;
(statearr_15304_18025[(2)] = null);

(statearr_15304_18025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (5))){
var inst_15215 = (state_15248[(7)]);
var state_15248__$1 = state_15248;
var statearr_15311_18026 = state_15248__$1;
(statearr_15311_18026[(2)] = inst_15215);

(statearr_15311_18026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (10))){
var inst_15238 = (state_15248[(2)]);
var state_15248__$1 = state_15248;
var statearr_15313_18027 = state_15248__$1;
(statearr_15313_18027[(2)] = inst_15238);

(statearr_15313_18027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (8))){
var inst_15230 = (state_15248[(9)]);
var inst_15234 = cljs.core.deref(inst_15230);
var state_15248__$1 = state_15248;
var statearr_15317_18028 = state_15248__$1;
(statearr_15317_18028[(2)] = inst_15234);

(statearr_15317_18028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13236__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13236__auto____0 = (function (){
var statearr_15318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15318[(0)] = cljs$core$async$reduce_$_state_machine__13236__auto__);

(statearr_15318[(1)] = (1));

return statearr_15318;
});
var cljs$core$async$reduce_$_state_machine__13236__auto____1 = (function (state_15248){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_15248);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e15323){var ex__13239__auto__ = e15323;
var statearr_15327_18030 = state_15248;
(statearr_15327_18030[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_15248[(4)]))){
var statearr_15329_18038 = state_15248;
(statearr_15329_18038[(1)] = cljs.core.first((state_15248[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18040 = state_15248;
state_15248 = G__18040;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13236__auto__ = function(state_15248){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13236__auto____1.call(this,state_15248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13236__auto____0;
cljs$core$async$reduce_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13236__auto____1;
return cljs$core$async$reduce_$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_15335 = f__14268__auto__();
(statearr_15335[(6)] = c__14267__auto__);

return statearr_15335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

return c__14267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_15352){
var state_val_15353 = (state_15352[(1)]);
if((state_val_15353 === (1))){
var inst_15343 = cljs.core.async.reduce(f__$1,init,ch);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15352__$1,(2),inst_15343);
} else {
if((state_val_15353 === (2))){
var inst_15348 = (state_15352[(2)]);
var inst_15349 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15348) : f__$1.call(null, inst_15348));
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15352__$1,inst_15349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13236__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13236__auto____0 = (function (){
var statearr_15356 = [null,null,null,null,null,null,null];
(statearr_15356[(0)] = cljs$core$async$transduce_$_state_machine__13236__auto__);

(statearr_15356[(1)] = (1));

return statearr_15356;
});
var cljs$core$async$transduce_$_state_machine__13236__auto____1 = (function (state_15352){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_15352);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e15362){var ex__13239__auto__ = e15362;
var statearr_15366_18058 = state_15352;
(statearr_15366_18058[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_15352[(4)]))){
var statearr_15368_18059 = state_15352;
(statearr_15368_18059[(1)] = cljs.core.first((state_15352[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18060 = state_15352;
state_15352 = G__18060;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13236__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13236__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13236__auto____0;
cljs$core$async$transduce_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13236__auto____1;
return cljs$core$async$transduce_$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_15373 = f__14268__auto__();
(statearr_15373[(6)] = c__14267__auto__);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

return c__14267__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15388 = arguments.length;
switch (G__15388) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_15418){
var state_val_15419 = (state_15418[(1)]);
if((state_val_15419 === (7))){
var inst_15396 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15421_18064 = state_15418__$1;
(statearr_15421_18064[(2)] = inst_15396);

(statearr_15421_18064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (1))){
var inst_15390 = cljs.core.seq(coll);
var inst_15391 = inst_15390;
var state_15418__$1 = (function (){var statearr_15422 = state_15418;
(statearr_15422[(7)] = inst_15391);

return statearr_15422;
})();
var statearr_15423_18069 = state_15418__$1;
(statearr_15423_18069[(2)] = null);

(statearr_15423_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (4))){
var inst_15391 = (state_15418[(7)]);
var inst_15394 = cljs.core.first(inst_15391);
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15418__$1,(7),ch,inst_15394);
} else {
if((state_val_15419 === (13))){
var inst_15412 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15429_18078 = state_15418__$1;
(statearr_15429_18078[(2)] = inst_15412);

(statearr_15429_18078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (6))){
var inst_15399 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
if(cljs.core.truth_(inst_15399)){
var statearr_15433_18084 = state_15418__$1;
(statearr_15433_18084[(1)] = (8));

} else {
var statearr_15434_18085 = state_15418__$1;
(statearr_15434_18085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (3))){
var inst_15416 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15418__$1,inst_15416);
} else {
if((state_val_15419 === (12))){
var state_15418__$1 = state_15418;
var statearr_15438_18100 = state_15418__$1;
(statearr_15438_18100[(2)] = null);

(statearr_15438_18100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (2))){
var inst_15391 = (state_15418[(7)]);
var state_15418__$1 = state_15418;
if(cljs.core.truth_(inst_15391)){
var statearr_15439_18101 = state_15418__$1;
(statearr_15439_18101[(1)] = (4));

} else {
var statearr_15440_18106 = state_15418__$1;
(statearr_15440_18106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (11))){
var inst_15409 = cljs.core.async.close_BANG_(ch);
var state_15418__$1 = state_15418;
var statearr_15441_18107 = state_15418__$1;
(statearr_15441_18107[(2)] = inst_15409);

(statearr_15441_18107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (9))){
var state_15418__$1 = state_15418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15442_18110 = state_15418__$1;
(statearr_15442_18110[(1)] = (11));

} else {
var statearr_15443_18111 = state_15418__$1;
(statearr_15443_18111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (5))){
var inst_15391 = (state_15418[(7)]);
var state_15418__$1 = state_15418;
var statearr_15449_18120 = state_15418__$1;
(statearr_15449_18120[(2)] = inst_15391);

(statearr_15449_18120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (10))){
var inst_15414 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15452_18123 = state_15418__$1;
(statearr_15452_18123[(2)] = inst_15414);

(statearr_15452_18123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (8))){
var inst_15391 = (state_15418[(7)]);
var inst_15405 = cljs.core.next(inst_15391);
var inst_15391__$1 = inst_15405;
var state_15418__$1 = (function (){var statearr_15455 = state_15418;
(statearr_15455[(7)] = inst_15391__$1);

return statearr_15455;
})();
var statearr_15456_18128 = state_15418__$1;
(statearr_15456_18128[(2)] = null);

(statearr_15456_18128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_15457 = [null,null,null,null,null,null,null,null];
(statearr_15457[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_15457[(1)] = (1));

return statearr_15457;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_15418){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_15418);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e15458){var ex__13239__auto__ = e15458;
var statearr_15459_18129 = state_15418;
(statearr_15459_18129[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_15418[(4)]))){
var statearr_15460_18131 = state_15418;
(statearr_15460_18131[(1)] = cljs.core.first((state_15418[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18132 = state_15418;
state_15418 = G__18132;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_15418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_15418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_15461 = f__14268__auto__();
(statearr_15461[(6)] = c__14267__auto__);

return statearr_15461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

return c__14267__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15465 = arguments.length;
switch (G__15465) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18137 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18137(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18138 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18138(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18139 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18139(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18141 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18141(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15494 = (function (ch,cs,meta15495){
this.ch = ch;
this.cs = cs;
this.meta15495 = meta15495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15496,meta15495__$1){
var self__ = this;
var _15496__$1 = this;
return (new cljs.core.async.t_cljs$core$async15494(self__.ch,self__.cs,meta15495__$1));
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15496){
var self__ = this;
var _15496__$1 = this;
return self__.meta15495;
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15495","meta15495",1747836082,null)], null);
}));

(cljs.core.async.t_cljs$core$async15494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15494");

(cljs.core.async.t_cljs$core$async15494.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15494.
 */
cljs.core.async.__GT_t_cljs$core$async15494 = (function cljs$core$async$__GT_t_cljs$core$async15494(ch,cs,meta15495){
return (new cljs.core.async.t_cljs$core$async15494(ch,cs,meta15495));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15494(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14267__auto___18161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15708 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15725_18166 = state_15714__$1;
(statearr_15725_18166[(2)] = inst_15708);

(statearr_15725_18166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (20))){
var inst_15598 = (state_15714[(7)]);
var inst_15610 = cljs.core.first(inst_15598);
var inst_15611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15610,(0),null);
var inst_15612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15610,(1),null);
var state_15714__$1 = (function (){var statearr_15729 = state_15714;
(statearr_15729[(8)] = inst_15611);

return statearr_15729;
})();
if(cljs.core.truth_(inst_15612)){
var statearr_15731_18168 = state_15714__$1;
(statearr_15731_18168[(1)] = (22));

} else {
var statearr_15732_18169 = state_15714__$1;
(statearr_15732_18169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (27))){
var inst_15658 = (state_15714[(9)]);
var inst_15647 = (state_15714[(10)]);
var inst_15645 = (state_15714[(11)]);
var inst_15533 = (state_15714[(12)]);
var inst_15658__$1 = cljs.core._nth(inst_15645,inst_15647);
var inst_15659 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15658__$1,inst_15533,done);
var state_15714__$1 = (function (){var statearr_15735 = state_15714;
(statearr_15735[(9)] = inst_15658__$1);

return statearr_15735;
})();
if(cljs.core.truth_(inst_15659)){
var statearr_15736_18170 = state_15714__$1;
(statearr_15736_18170[(1)] = (30));

} else {
var statearr_15737_18171 = state_15714__$1;
(statearr_15737_18171[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (1))){
var state_15714__$1 = state_15714;
var statearr_15738_18172 = state_15714__$1;
(statearr_15738_18172[(2)] = null);

(statearr_15738_18172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (24))){
var inst_15598 = (state_15714[(7)]);
var inst_15618 = (state_15714[(2)]);
var inst_15621 = cljs.core.next(inst_15598);
var inst_15549 = inst_15621;
var inst_15550 = null;
var inst_15551 = (0);
var inst_15552 = (0);
var state_15714__$1 = (function (){var statearr_15739 = state_15714;
(statearr_15739[(13)] = inst_15618);

(statearr_15739[(14)] = inst_15551);

(statearr_15739[(15)] = inst_15550);

(statearr_15739[(16)] = inst_15549);

(statearr_15739[(17)] = inst_15552);

return statearr_15739;
})();
var statearr_15740_18176 = state_15714__$1;
(statearr_15740_18176[(2)] = null);

(statearr_15740_18176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (39))){
var state_15714__$1 = state_15714;
var statearr_15752_18177 = state_15714__$1;
(statearr_15752_18177[(2)] = null);

(statearr_15752_18177[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15533 = (state_15714[(12)]);
var inst_15533__$1 = (state_15714[(2)]);
var inst_15538 = (inst_15533__$1 == null);
var state_15714__$1 = (function (){var statearr_15757 = state_15714;
(statearr_15757[(12)] = inst_15533__$1);

return statearr_15757;
})();
if(cljs.core.truth_(inst_15538)){
var statearr_15758_18178 = state_15714__$1;
(statearr_15758_18178[(1)] = (5));

} else {
var statearr_15759_18179 = state_15714__$1;
(statearr_15759_18179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (15))){
var inst_15551 = (state_15714[(14)]);
var inst_15550 = (state_15714[(15)]);
var inst_15549 = (state_15714[(16)]);
var inst_15552 = (state_15714[(17)]);
var inst_15591 = (state_15714[(2)]);
var inst_15595 = (inst_15552 + (1));
var tmp15741 = inst_15551;
var tmp15742 = inst_15550;
var tmp15743 = inst_15549;
var inst_15549__$1 = tmp15743;
var inst_15550__$1 = tmp15742;
var inst_15551__$1 = tmp15741;
var inst_15552__$1 = inst_15595;
var state_15714__$1 = (function (){var statearr_15761 = state_15714;
(statearr_15761[(18)] = inst_15591);

(statearr_15761[(14)] = inst_15551__$1);

(statearr_15761[(15)] = inst_15550__$1);

(statearr_15761[(16)] = inst_15549__$1);

(statearr_15761[(17)] = inst_15552__$1);

return statearr_15761;
})();
var statearr_15762_18183 = state_15714__$1;
(statearr_15762_18183[(2)] = null);

(statearr_15762_18183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (21))){
var inst_15624 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15767_18184 = state_15714__$1;
(statearr_15767_18184[(2)] = inst_15624);

(statearr_15767_18184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (31))){
var inst_15658 = (state_15714[(9)]);
var inst_15662 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15658);
var state_15714__$1 = state_15714;
var statearr_15768_18185 = state_15714__$1;
(statearr_15768_18185[(2)] = inst_15662);

(statearr_15768_18185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (32))){
var inst_15646 = (state_15714[(19)]);
var inst_15644 = (state_15714[(20)]);
var inst_15647 = (state_15714[(10)]);
var inst_15645 = (state_15714[(11)]);
var inst_15664 = (state_15714[(2)]);
var inst_15666 = (inst_15647 + (1));
var tmp15764 = inst_15646;
var tmp15765 = inst_15644;
var tmp15766 = inst_15645;
var inst_15644__$1 = tmp15765;
var inst_15645__$1 = tmp15766;
var inst_15646__$1 = tmp15764;
var inst_15647__$1 = inst_15666;
var state_15714__$1 = (function (){var statearr_15770 = state_15714;
(statearr_15770[(19)] = inst_15646__$1);

(statearr_15770[(20)] = inst_15644__$1);

(statearr_15770[(10)] = inst_15647__$1);

(statearr_15770[(21)] = inst_15664);

(statearr_15770[(11)] = inst_15645__$1);

return statearr_15770;
})();
var statearr_15772_18186 = state_15714__$1;
(statearr_15772_18186[(2)] = null);

(statearr_15772_18186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (40))){
var inst_15681 = (state_15714[(22)]);
var inst_15685 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15681);
var state_15714__$1 = state_15714;
var statearr_15781_18187 = state_15714__$1;
(statearr_15781_18187[(2)] = inst_15685);

(statearr_15781_18187[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (33))){
var inst_15670 = (state_15714[(23)]);
var inst_15672 = cljs.core.chunked_seq_QMARK_(inst_15670);
var state_15714__$1 = state_15714;
if(inst_15672){
var statearr_15783_18188 = state_15714__$1;
(statearr_15783_18188[(1)] = (36));

} else {
var statearr_15784_18189 = state_15714__$1;
(statearr_15784_18189[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (13))){
var inst_15585 = (state_15714[(24)]);
var inst_15588 = cljs.core.async.close_BANG_(inst_15585);
var state_15714__$1 = state_15714;
var statearr_15785_18191 = state_15714__$1;
(statearr_15785_18191[(2)] = inst_15588);

(statearr_15785_18191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (22))){
var inst_15611 = (state_15714[(8)]);
var inst_15615 = cljs.core.async.close_BANG_(inst_15611);
var state_15714__$1 = state_15714;
var statearr_15788_18193 = state_15714__$1;
(statearr_15788_18193[(2)] = inst_15615);

(statearr_15788_18193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (36))){
var inst_15670 = (state_15714[(23)]);
var inst_15675 = cljs.core.chunk_first(inst_15670);
var inst_15676 = cljs.core.chunk_rest(inst_15670);
var inst_15677 = cljs.core.count(inst_15675);
var inst_15644 = inst_15676;
var inst_15645 = inst_15675;
var inst_15646 = inst_15677;
var inst_15647 = (0);
var state_15714__$1 = (function (){var statearr_15791 = state_15714;
(statearr_15791[(19)] = inst_15646);

(statearr_15791[(20)] = inst_15644);

(statearr_15791[(10)] = inst_15647);

(statearr_15791[(11)] = inst_15645);

return statearr_15791;
})();
var statearr_15793_18195 = state_15714__$1;
(statearr_15793_18195[(2)] = null);

(statearr_15793_18195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (41))){
var inst_15670 = (state_15714[(23)]);
var inst_15687 = (state_15714[(2)]);
var inst_15688 = cljs.core.next(inst_15670);
var inst_15644 = inst_15688;
var inst_15645 = null;
var inst_15646 = (0);
var inst_15647 = (0);
var state_15714__$1 = (function (){var statearr_15795 = state_15714;
(statearr_15795[(19)] = inst_15646);

(statearr_15795[(20)] = inst_15644);

(statearr_15795[(10)] = inst_15647);

(statearr_15795[(11)] = inst_15645);

(statearr_15795[(25)] = inst_15687);

return statearr_15795;
})();
var statearr_15796_18198 = state_15714__$1;
(statearr_15796_18198[(2)] = null);

(statearr_15796_18198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (43))){
var state_15714__$1 = state_15714;
var statearr_15799_18199 = state_15714__$1;
(statearr_15799_18199[(2)] = null);

(statearr_15799_18199[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (29))){
var inst_15696 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15800_18200 = state_15714__$1;
(statearr_15800_18200[(2)] = inst_15696);

(statearr_15800_18200[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (44))){
var inst_15705 = (state_15714[(2)]);
var state_15714__$1 = (function (){var statearr_15801 = state_15714;
(statearr_15801[(26)] = inst_15705);

return statearr_15801;
})();
var statearr_15802_18201 = state_15714__$1;
(statearr_15802_18201[(2)] = null);

(statearr_15802_18201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (6))){
var inst_15634 = (state_15714[(27)]);
var inst_15633 = cljs.core.deref(cs);
var inst_15634__$1 = cljs.core.keys(inst_15633);
var inst_15637 = cljs.core.count(inst_15634__$1);
var inst_15638 = cljs.core.reset_BANG_(dctr,inst_15637);
var inst_15643 = cljs.core.seq(inst_15634__$1);
var inst_15644 = inst_15643;
var inst_15645 = null;
var inst_15646 = (0);
var inst_15647 = (0);
var state_15714__$1 = (function (){var statearr_15807 = state_15714;
(statearr_15807[(19)] = inst_15646);

(statearr_15807[(20)] = inst_15644);

(statearr_15807[(10)] = inst_15647);

(statearr_15807[(11)] = inst_15645);

(statearr_15807[(28)] = inst_15638);

(statearr_15807[(27)] = inst_15634__$1);

return statearr_15807;
})();
var statearr_15808_18205 = state_15714__$1;
(statearr_15808_18205[(2)] = null);

(statearr_15808_18205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (28))){
var inst_15644 = (state_15714[(20)]);
var inst_15670 = (state_15714[(23)]);
var inst_15670__$1 = cljs.core.seq(inst_15644);
var state_15714__$1 = (function (){var statearr_15811 = state_15714;
(statearr_15811[(23)] = inst_15670__$1);

return statearr_15811;
})();
if(inst_15670__$1){
var statearr_15812_18206 = state_15714__$1;
(statearr_15812_18206[(1)] = (33));

} else {
var statearr_15814_18210 = state_15714__$1;
(statearr_15814_18210[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (25))){
var inst_15646 = (state_15714[(19)]);
var inst_15647 = (state_15714[(10)]);
var inst_15655 = (inst_15647 < inst_15646);
var inst_15656 = inst_15655;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15656)){
var statearr_15819_18211 = state_15714__$1;
(statearr_15819_18211[(1)] = (27));

} else {
var statearr_15820_18212 = state_15714__$1;
(statearr_15820_18212[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (34))){
var state_15714__$1 = state_15714;
var statearr_15821_18213 = state_15714__$1;
(statearr_15821_18213[(2)] = null);

(statearr_15821_18213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (17))){
var state_15714__$1 = state_15714;
var statearr_15825_18214 = state_15714__$1;
(statearr_15825_18214[(2)] = null);

(statearr_15825_18214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15714__$1,inst_15710);
} else {
if((state_val_15715 === (12))){
var inst_15629 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15829_18216 = state_15714__$1;
(statearr_15829_18216[(2)] = inst_15629);

(statearr_15829_18216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(4),ch);
} else {
if((state_val_15715 === (23))){
var state_15714__$1 = state_15714;
var statearr_15831_18220 = state_15714__$1;
(statearr_15831_18220[(2)] = null);

(statearr_15831_18220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (35))){
var inst_15694 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15836_18224 = state_15714__$1;
(statearr_15836_18224[(2)] = inst_15694);

(statearr_15836_18224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (19))){
var inst_15598 = (state_15714[(7)]);
var inst_15602 = cljs.core.chunk_first(inst_15598);
var inst_15603 = cljs.core.chunk_rest(inst_15598);
var inst_15604 = cljs.core.count(inst_15602);
var inst_15549 = inst_15603;
var inst_15550 = inst_15602;
var inst_15551 = inst_15604;
var inst_15552 = (0);
var state_15714__$1 = (function (){var statearr_15839 = state_15714;
(statearr_15839[(14)] = inst_15551);

(statearr_15839[(15)] = inst_15550);

(statearr_15839[(16)] = inst_15549);

(statearr_15839[(17)] = inst_15552);

return statearr_15839;
})();
var statearr_15840_18225 = state_15714__$1;
(statearr_15840_18225[(2)] = null);

(statearr_15840_18225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (11))){
var inst_15598 = (state_15714[(7)]);
var inst_15549 = (state_15714[(16)]);
var inst_15598__$1 = cljs.core.seq(inst_15549);
var state_15714__$1 = (function (){var statearr_15844 = state_15714;
(statearr_15844[(7)] = inst_15598__$1);

return statearr_15844;
})();
if(inst_15598__$1){
var statearr_15845_18226 = state_15714__$1;
(statearr_15845_18226[(1)] = (16));

} else {
var statearr_15846_18227 = state_15714__$1;
(statearr_15846_18227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (9))){
var inst_15631 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15847_18228 = state_15714__$1;
(statearr_15847_18228[(2)] = inst_15631);

(statearr_15847_18228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (5))){
var inst_15544 = cljs.core.deref(cs);
var inst_15545 = cljs.core.seq(inst_15544);
var inst_15549 = inst_15545;
var inst_15550 = null;
var inst_15551 = (0);
var inst_15552 = (0);
var state_15714__$1 = (function (){var statearr_15848 = state_15714;
(statearr_15848[(14)] = inst_15551);

(statearr_15848[(15)] = inst_15550);

(statearr_15848[(16)] = inst_15549);

(statearr_15848[(17)] = inst_15552);

return statearr_15848;
})();
var statearr_15849_18236 = state_15714__$1;
(statearr_15849_18236[(2)] = null);

(statearr_15849_18236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (14))){
var state_15714__$1 = state_15714;
var statearr_15850_18237 = state_15714__$1;
(statearr_15850_18237[(2)] = null);

(statearr_15850_18237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (45))){
var inst_15702 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15851_18241 = state_15714__$1;
(statearr_15851_18241[(2)] = inst_15702);

(statearr_15851_18241[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (26))){
var inst_15634 = (state_15714[(27)]);
var inst_15698 = (state_15714[(2)]);
var inst_15699 = cljs.core.seq(inst_15634);
var state_15714__$1 = (function (){var statearr_15852 = state_15714;
(statearr_15852[(29)] = inst_15698);

return statearr_15852;
})();
if(inst_15699){
var statearr_15853_18242 = state_15714__$1;
(statearr_15853_18242[(1)] = (42));

} else {
var statearr_15854_18243 = state_15714__$1;
(statearr_15854_18243[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (16))){
var inst_15598 = (state_15714[(7)]);
var inst_15600 = cljs.core.chunked_seq_QMARK_(inst_15598);
var state_15714__$1 = state_15714;
if(inst_15600){
var statearr_15855_18244 = state_15714__$1;
(statearr_15855_18244[(1)] = (19));

} else {
var statearr_15856_18245 = state_15714__$1;
(statearr_15856_18245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (38))){
var inst_15691 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15857_18249 = state_15714__$1;
(statearr_15857_18249[(2)] = inst_15691);

(statearr_15857_18249[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (30))){
var state_15714__$1 = state_15714;
var statearr_15858_18250 = state_15714__$1;
(statearr_15858_18250[(2)] = null);

(statearr_15858_18250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (10))){
var inst_15550 = (state_15714[(15)]);
var inst_15552 = (state_15714[(17)]);
var inst_15584 = cljs.core._nth(inst_15550,inst_15552);
var inst_15585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15584,(0),null);
var inst_15586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15584,(1),null);
var state_15714__$1 = (function (){var statearr_15861 = state_15714;
(statearr_15861[(24)] = inst_15585);

return statearr_15861;
})();
if(cljs.core.truth_(inst_15586)){
var statearr_15863_18251 = state_15714__$1;
(statearr_15863_18251[(1)] = (13));

} else {
var statearr_15868_18252 = state_15714__$1;
(statearr_15868_18252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (18))){
var inst_15627 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15869_18253 = state_15714__$1;
(statearr_15869_18253[(2)] = inst_15627);

(statearr_15869_18253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (42))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(45),dchan);
} else {
if((state_val_15715 === (37))){
var inst_15681 = (state_15714[(22)]);
var inst_15533 = (state_15714[(12)]);
var inst_15670 = (state_15714[(23)]);
var inst_15681__$1 = cljs.core.first(inst_15670);
var inst_15682 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15681__$1,inst_15533,done);
var state_15714__$1 = (function (){var statearr_15870 = state_15714;
(statearr_15870[(22)] = inst_15681__$1);

return statearr_15870;
})();
if(cljs.core.truth_(inst_15682)){
var statearr_15871_18258 = state_15714__$1;
(statearr_15871_18258[(1)] = (39));

} else {
var statearr_15872_18260 = state_15714__$1;
(statearr_15872_18260[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (8))){
var inst_15551 = (state_15714[(14)]);
var inst_15552 = (state_15714[(17)]);
var inst_15578 = (inst_15552 < inst_15551);
var inst_15579 = inst_15578;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15579)){
var statearr_15877_18270 = state_15714__$1;
(statearr_15877_18270[(1)] = (10));

} else {
var statearr_15878_18271 = state_15714__$1;
(statearr_15878_18271[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13236__auto__ = null;
var cljs$core$async$mult_$_state_machine__13236__auto____0 = (function (){
var statearr_15880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15880[(0)] = cljs$core$async$mult_$_state_machine__13236__auto__);

(statearr_15880[(1)] = (1));

return statearr_15880;
});
var cljs$core$async$mult_$_state_machine__13236__auto____1 = (function (state_15714){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_15714);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e15884){var ex__13239__auto__ = e15884;
var statearr_15885_18273 = state_15714;
(statearr_15885_18273[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_15714[(4)]))){
var statearr_15886_18274 = state_15714;
(statearr_15886_18274[(1)] = cljs.core.first((state_15714[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18277 = state_15714;
state_15714 = G__18277;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13236__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13236__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13236__auto____0;
cljs$core$async$mult_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13236__auto____1;
return cljs$core$async$mult_$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_15887 = f__14268__auto__();
(statearr_15887[(6)] = c__14267__auto___18161);

return statearr_15887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15890 = arguments.length;
switch (G__15890) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18288 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18288(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18293 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18293(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18297 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18297(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18298 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18298(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18300 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18300(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18301 = arguments.length;
var i__5727__auto___18302 = (0);
while(true){
if((i__5727__auto___18302 < len__5726__auto___18301)){
args__5732__auto__.push((arguments[i__5727__auto___18302]));

var G__18303 = (i__5727__auto___18302 + (1));
i__5727__auto___18302 = G__18303;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15929){
var map__15930 = p__15929;
var map__15930__$1 = cljs.core.__destructure_map(map__15930);
var opts = map__15930__$1;
var statearr_15932_18304 = state;
(statearr_15932_18304[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15933_18305 = state;
(statearr_15933_18305[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15934_18306 = state;
(statearr_15934_18306[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15915){
var G__15920 = cljs.core.first(seq15915);
var seq15915__$1 = cljs.core.next(seq15915);
var G__15921 = cljs.core.first(seq15915__$1);
var seq15915__$2 = cljs.core.next(seq15915__$1);
var G__15922 = cljs.core.first(seq15915__$2);
var seq15915__$3 = cljs.core.next(seq15915__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15920,G__15921,G__15922,seq15915__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15956 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15957){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15957 = meta15957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15958,meta15957__$1){
var self__ = this;
var _15958__$1 = this;
return (new cljs.core.async.t_cljs$core$async15956(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15957__$1));
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15958){
var self__ = this;
var _15958__$1 = this;
return self__.meta15957;
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15956.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15957","meta15957",-1588646161,null)], null);
}));

(cljs.core.async.t_cljs$core$async15956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15956");

(cljs.core.async.t_cljs$core$async15956.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15956.
 */
cljs.core.async.__GT_t_cljs$core$async15956 = (function cljs$core$async$__GT_t_cljs$core$async15956(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15957){
return (new cljs.core.async.t_cljs$core$async15956(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15957));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15956(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14267__auto___18313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_16078){
var state_val_16079 = (state_16078[(1)]);
if((state_val_16079 === (7))){
var inst_16016 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16016)){
var statearr_16088_18314 = state_16078__$1;
(statearr_16088_18314[(1)] = (8));

} else {
var statearr_16095_18315 = state_16078__$1;
(statearr_16095_18315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (20))){
var inst_16009 = (state_16078[(7)]);
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16078__$1,(23),out,inst_16009);
} else {
if((state_val_16079 === (1))){
var inst_15992 = calc_state();
var inst_15993 = cljs.core.__destructure_map(inst_15992);
var inst_15994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15993,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15993,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15993,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15997 = inst_15992;
var state_16078__$1 = (function (){var statearr_16103 = state_16078;
(statearr_16103[(8)] = inst_15996);

(statearr_16103[(9)] = inst_15994);

(statearr_16103[(10)] = inst_15995);

(statearr_16103[(11)] = inst_15997);

return statearr_16103;
})();
var statearr_16104_18316 = state_16078__$1;
(statearr_16104_18316[(2)] = null);

(statearr_16104_18316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (24))){
var inst_16000 = (state_16078[(12)]);
var inst_15997 = inst_16000;
var state_16078__$1 = (function (){var statearr_16105 = state_16078;
(statearr_16105[(11)] = inst_15997);

return statearr_16105;
})();
var statearr_16106_18317 = state_16078__$1;
(statearr_16106_18317[(2)] = null);

(statearr_16106_18317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (4))){
var inst_16011 = (state_16078[(13)]);
var inst_16009 = (state_16078[(7)]);
var inst_16008 = (state_16078[(2)]);
var inst_16009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16008,(0),null);
var inst_16010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16008,(1),null);
var inst_16011__$1 = (inst_16009__$1 == null);
var state_16078__$1 = (function (){var statearr_16112 = state_16078;
(statearr_16112[(13)] = inst_16011__$1);

(statearr_16112[(14)] = inst_16010);

(statearr_16112[(7)] = inst_16009__$1);

return statearr_16112;
})();
if(cljs.core.truth_(inst_16011__$1)){
var statearr_16113_18322 = state_16078__$1;
(statearr_16113_18322[(1)] = (5));

} else {
var statearr_16114_18323 = state_16078__$1;
(statearr_16114_18323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (15))){
var inst_16001 = (state_16078[(15)]);
var inst_16044 = (state_16078[(16)]);
var inst_16044__$1 = cljs.core.empty_QMARK_(inst_16001);
var state_16078__$1 = (function (){var statearr_16120 = state_16078;
(statearr_16120[(16)] = inst_16044__$1);

return statearr_16120;
})();
if(inst_16044__$1){
var statearr_16127_18324 = state_16078__$1;
(statearr_16127_18324[(1)] = (17));

} else {
var statearr_16128_18325 = state_16078__$1;
(statearr_16128_18325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (21))){
var inst_16000 = (state_16078[(12)]);
var inst_15997 = inst_16000;
var state_16078__$1 = (function (){var statearr_16129 = state_16078;
(statearr_16129[(11)] = inst_15997);

return statearr_16129;
})();
var statearr_16133_18327 = state_16078__$1;
(statearr_16133_18327[(2)] = null);

(statearr_16133_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (13))){
var inst_16031 = (state_16078[(2)]);
var inst_16038 = calc_state();
var inst_15997 = inst_16038;
var state_16078__$1 = (function (){var statearr_16136 = state_16078;
(statearr_16136[(11)] = inst_15997);

(statearr_16136[(17)] = inst_16031);

return statearr_16136;
})();
var statearr_16137_18329 = state_16078__$1;
(statearr_16137_18329[(2)] = null);

(statearr_16137_18329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (22))){
var inst_16071 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16138_18330 = state_16078__$1;
(statearr_16138_18330[(2)] = inst_16071);

(statearr_16138_18330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (6))){
var inst_16010 = (state_16078[(14)]);
var inst_16014 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16010,change);
var state_16078__$1 = state_16078;
var statearr_16139_18334 = state_16078__$1;
(statearr_16139_18334[(2)] = inst_16014);

(statearr_16139_18334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (25))){
var state_16078__$1 = state_16078;
var statearr_16143_18335 = state_16078__$1;
(statearr_16143_18335[(2)] = null);

(statearr_16143_18335[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (17))){
var inst_16002 = (state_16078[(18)]);
var inst_16010 = (state_16078[(14)]);
var inst_16046 = (inst_16002.cljs$core$IFn$_invoke$arity$1 ? inst_16002.cljs$core$IFn$_invoke$arity$1(inst_16010) : inst_16002.call(null, inst_16010));
var inst_16047 = cljs.core.not(inst_16046);
var state_16078__$1 = state_16078;
var statearr_16147_18343 = state_16078__$1;
(statearr_16147_18343[(2)] = inst_16047);

(statearr_16147_18343[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (3))){
var inst_16075 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16078__$1,inst_16075);
} else {
if((state_val_16079 === (12))){
var state_16078__$1 = state_16078;
var statearr_16156_18344 = state_16078__$1;
(statearr_16156_18344[(2)] = null);

(statearr_16156_18344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (2))){
var inst_16000 = (state_16078[(12)]);
var inst_15997 = (state_16078[(11)]);
var inst_16000__$1 = cljs.core.__destructure_map(inst_15997);
var inst_16001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16000__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16000__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16000__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16078__$1 = (function (){var statearr_16161 = state_16078;
(statearr_16161[(18)] = inst_16002);

(statearr_16161[(15)] = inst_16001);

(statearr_16161[(12)] = inst_16000__$1);

return statearr_16161;
})();
return cljs.core.async.ioc_alts_BANG_(state_16078__$1,(4),inst_16003);
} else {
if((state_val_16079 === (23))){
var inst_16061 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16061)){
var statearr_16162_18346 = state_16078__$1;
(statearr_16162_18346[(1)] = (24));

} else {
var statearr_16163_18347 = state_16078__$1;
(statearr_16163_18347[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (19))){
var inst_16050 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16164_18354 = state_16078__$1;
(statearr_16164_18354[(2)] = inst_16050);

(statearr_16164_18354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (11))){
var inst_16010 = (state_16078[(14)]);
var inst_16028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16010);
var state_16078__$1 = state_16078;
var statearr_16165_18357 = state_16078__$1;
(statearr_16165_18357[(2)] = inst_16028);

(statearr_16165_18357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (9))){
var inst_16001 = (state_16078[(15)]);
var inst_16041 = (state_16078[(19)]);
var inst_16010 = (state_16078[(14)]);
var inst_16041__$1 = (inst_16001.cljs$core$IFn$_invoke$arity$1 ? inst_16001.cljs$core$IFn$_invoke$arity$1(inst_16010) : inst_16001.call(null, inst_16010));
var state_16078__$1 = (function (){var statearr_16166 = state_16078;
(statearr_16166[(19)] = inst_16041__$1);

return statearr_16166;
})();
if(cljs.core.truth_(inst_16041__$1)){
var statearr_16167_18360 = state_16078__$1;
(statearr_16167_18360[(1)] = (14));

} else {
var statearr_16169_18361 = state_16078__$1;
(statearr_16169_18361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (5))){
var inst_16011 = (state_16078[(13)]);
var state_16078__$1 = state_16078;
var statearr_16170_18362 = state_16078__$1;
(statearr_16170_18362[(2)] = inst_16011);

(statearr_16170_18362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (14))){
var inst_16041 = (state_16078[(19)]);
var state_16078__$1 = state_16078;
var statearr_16171_18363 = state_16078__$1;
(statearr_16171_18363[(2)] = inst_16041);

(statearr_16171_18363[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (26))){
var inst_16066 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16172_18364 = state_16078__$1;
(statearr_16172_18364[(2)] = inst_16066);

(statearr_16172_18364[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (16))){
var inst_16052 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16052)){
var statearr_16178_18365 = state_16078__$1;
(statearr_16178_18365[(1)] = (20));

} else {
var statearr_16179_18366 = state_16078__$1;
(statearr_16179_18366[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (10))){
var inst_16073 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16184_18367 = state_16078__$1;
(statearr_16184_18367[(2)] = inst_16073);

(statearr_16184_18367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (18))){
var inst_16044 = (state_16078[(16)]);
var state_16078__$1 = state_16078;
var statearr_16186_18368 = state_16078__$1;
(statearr_16186_18368[(2)] = inst_16044);

(statearr_16186_18368[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (8))){
var inst_16009 = (state_16078[(7)]);
var inst_16026 = (inst_16009 == null);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16026)){
var statearr_16190_18369 = state_16078__$1;
(statearr_16190_18369[(1)] = (11));

} else {
var statearr_16191_18370 = state_16078__$1;
(statearr_16191_18370[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13236__auto__ = null;
var cljs$core$async$mix_$_state_machine__13236__auto____0 = (function (){
var statearr_16192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16192[(0)] = cljs$core$async$mix_$_state_machine__13236__auto__);

(statearr_16192[(1)] = (1));

return statearr_16192;
});
var cljs$core$async$mix_$_state_machine__13236__auto____1 = (function (state_16078){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_16078);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e16194){var ex__13239__auto__ = e16194;
var statearr_16195_18371 = state_16078;
(statearr_16195_18371[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_16078[(4)]))){
var statearr_16196_18372 = state_16078;
(statearr_16196_18372[(1)] = cljs.core.first((state_16078[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18373 = state_16078;
state_16078 = G__18373;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13236__auto__ = function(state_16078){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13236__auto____1.call(this,state_16078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13236__auto____0;
cljs$core$async$mix_$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13236__auto____1;
return cljs$core$async$mix_$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_16197 = f__14268__auto__();
(statearr_16197[(6)] = c__14267__auto___18313);

return statearr_16197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18390 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18390(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18391 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18391(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18396 = (function() {
var G__18397 = null;
var G__18397__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18397__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18397 = function(p,v){
switch(arguments.length){
case 1:
return G__18397__1.call(this,p);
case 2:
return G__18397__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18397.cljs$core$IFn$_invoke$arity$1 = G__18397__1;
G__18397.cljs$core$IFn$_invoke$arity$2 = G__18397__2;
return G__18397;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16244 = arguments.length;
switch (G__16244) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18396(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18396(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16270 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16271){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16271 = meta16271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16272,meta16271__$1){
var self__ = this;
var _16272__$1 = this;
return (new cljs.core.async.t_cljs$core$async16270(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16271__$1));
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16272){
var self__ = this;
var _16272__$1 = this;
return self__.meta16271;
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16271","meta16271",1663436169,null)], null);
}));

(cljs.core.async.t_cljs$core$async16270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16270");

(cljs.core.async.t_cljs$core$async16270.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16270.
 */
cljs.core.async.__GT_t_cljs$core$async16270 = (function cljs$core$async$__GT_t_cljs$core$async16270(ch,topic_fn,buf_fn,mults,ensure_mult,meta16271){
return (new cljs.core.async.t_cljs$core$async16270(ch,topic_fn,buf_fn,mults,ensure_mult,meta16271));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16255 = arguments.length;
switch (G__16255) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16247_SHARP_){
if(cljs.core.truth_((p1__16247_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16247_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16247_SHARP_.call(null, topic)))){
return p1__16247_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16247_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16270(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14267__auto___18417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_16356){
var state_val_16357 = (state_16356[(1)]);
if((state_val_16357 === (7))){
var inst_16352 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16366_18418 = state_16356__$1;
(statearr_16366_18418[(2)] = inst_16352);

(statearr_16366_18418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (20))){
var state_16356__$1 = state_16356;
var statearr_16370_18419 = state_16356__$1;
(statearr_16370_18419[(2)] = null);

(statearr_16370_18419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (1))){
var state_16356__$1 = state_16356;
var statearr_16374_18420 = state_16356__$1;
(statearr_16374_18420[(2)] = null);

(statearr_16374_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (24))){
var inst_16335 = (state_16356[(7)]);
var inst_16344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16335);
var state_16356__$1 = state_16356;
var statearr_16375_18421 = state_16356__$1;
(statearr_16375_18421[(2)] = inst_16344);

(statearr_16375_18421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (4))){
var inst_16282 = (state_16356[(8)]);
var inst_16282__$1 = (state_16356[(2)]);
var inst_16283 = (inst_16282__$1 == null);
var state_16356__$1 = (function (){var statearr_16377 = state_16356;
(statearr_16377[(8)] = inst_16282__$1);

return statearr_16377;
})();
if(cljs.core.truth_(inst_16283)){
var statearr_16378_18422 = state_16356__$1;
(statearr_16378_18422[(1)] = (5));

} else {
var statearr_16379_18423 = state_16356__$1;
(statearr_16379_18423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (15))){
var inst_16329 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16387_18430 = state_16356__$1;
(statearr_16387_18430[(2)] = inst_16329);

(statearr_16387_18430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (21))){
var inst_16349 = (state_16356[(2)]);
var state_16356__$1 = (function (){var statearr_16388 = state_16356;
(statearr_16388[(9)] = inst_16349);

return statearr_16388;
})();
var statearr_16392_18431 = state_16356__$1;
(statearr_16392_18431[(2)] = null);

(statearr_16392_18431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (13))){
var inst_16309 = (state_16356[(10)]);
var inst_16311 = cljs.core.chunked_seq_QMARK_(inst_16309);
var state_16356__$1 = state_16356;
if(inst_16311){
var statearr_16393_18432 = state_16356__$1;
(statearr_16393_18432[(1)] = (16));

} else {
var statearr_16394_18433 = state_16356__$1;
(statearr_16394_18433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (22))){
var inst_16341 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
if(cljs.core.truth_(inst_16341)){
var statearr_16395_18434 = state_16356__$1;
(statearr_16395_18434[(1)] = (23));

} else {
var statearr_16396_18435 = state_16356__$1;
(statearr_16396_18435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (6))){
var inst_16337 = (state_16356[(11)]);
var inst_16335 = (state_16356[(7)]);
var inst_16282 = (state_16356[(8)]);
var inst_16335__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16282) : topic_fn.call(null, inst_16282));
var inst_16336 = cljs.core.deref(mults);
var inst_16337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16336,inst_16335__$1);
var state_16356__$1 = (function (){var statearr_16400 = state_16356;
(statearr_16400[(11)] = inst_16337__$1);

(statearr_16400[(7)] = inst_16335__$1);

return statearr_16400;
})();
if(cljs.core.truth_(inst_16337__$1)){
var statearr_16405_18436 = state_16356__$1;
(statearr_16405_18436[(1)] = (19));

} else {
var statearr_16409_18437 = state_16356__$1;
(statearr_16409_18437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (25))){
var inst_16346 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16410_18438 = state_16356__$1;
(statearr_16410_18438[(2)] = inst_16346);

(statearr_16410_18438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (17))){
var inst_16309 = (state_16356[(10)]);
var inst_16319 = cljs.core.first(inst_16309);
var inst_16321 = cljs.core.async.muxch_STAR_(inst_16319);
var inst_16322 = cljs.core.async.close_BANG_(inst_16321);
var inst_16323 = cljs.core.next(inst_16309);
var inst_16292 = inst_16323;
var inst_16293 = null;
var inst_16294 = (0);
var inst_16295 = (0);
var state_16356__$1 = (function (){var statearr_16422 = state_16356;
(statearr_16422[(12)] = inst_16322);

(statearr_16422[(13)] = inst_16294);

(statearr_16422[(14)] = inst_16292);

(statearr_16422[(15)] = inst_16293);

(statearr_16422[(16)] = inst_16295);

return statearr_16422;
})();
var statearr_16424_18439 = state_16356__$1;
(statearr_16424_18439[(2)] = null);

(statearr_16424_18439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (3))){
var inst_16354 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16356__$1,inst_16354);
} else {
if((state_val_16357 === (12))){
var inst_16331 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16425_18440 = state_16356__$1;
(statearr_16425_18440[(2)] = inst_16331);

(statearr_16425_18440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (2))){
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16356__$1,(4),ch);
} else {
if((state_val_16357 === (23))){
var state_16356__$1 = state_16356;
var statearr_16428_18441 = state_16356__$1;
(statearr_16428_18441[(2)] = null);

(statearr_16428_18441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (19))){
var inst_16337 = (state_16356[(11)]);
var inst_16282 = (state_16356[(8)]);
var inst_16339 = cljs.core.async.muxch_STAR_(inst_16337);
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16356__$1,(22),inst_16339,inst_16282);
} else {
if((state_val_16357 === (11))){
var inst_16309 = (state_16356[(10)]);
var inst_16292 = (state_16356[(14)]);
var inst_16309__$1 = cljs.core.seq(inst_16292);
var state_16356__$1 = (function (){var statearr_16429 = state_16356;
(statearr_16429[(10)] = inst_16309__$1);

return statearr_16429;
})();
if(inst_16309__$1){
var statearr_16430_18445 = state_16356__$1;
(statearr_16430_18445[(1)] = (13));

} else {
var statearr_16431_18446 = state_16356__$1;
(statearr_16431_18446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (9))){
var inst_16333 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16432_18447 = state_16356__$1;
(statearr_16432_18447[(2)] = inst_16333);

(statearr_16432_18447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (5))){
var inst_16289 = cljs.core.deref(mults);
var inst_16290 = cljs.core.vals(inst_16289);
var inst_16291 = cljs.core.seq(inst_16290);
var inst_16292 = inst_16291;
var inst_16293 = null;
var inst_16294 = (0);
var inst_16295 = (0);
var state_16356__$1 = (function (){var statearr_16435 = state_16356;
(statearr_16435[(13)] = inst_16294);

(statearr_16435[(14)] = inst_16292);

(statearr_16435[(15)] = inst_16293);

(statearr_16435[(16)] = inst_16295);

return statearr_16435;
})();
var statearr_16436_18454 = state_16356__$1;
(statearr_16436_18454[(2)] = null);

(statearr_16436_18454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (14))){
var state_16356__$1 = state_16356;
var statearr_16440_18455 = state_16356__$1;
(statearr_16440_18455[(2)] = null);

(statearr_16440_18455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (16))){
var inst_16309 = (state_16356[(10)]);
var inst_16313 = cljs.core.chunk_first(inst_16309);
var inst_16315 = cljs.core.chunk_rest(inst_16309);
var inst_16316 = cljs.core.count(inst_16313);
var inst_16292 = inst_16315;
var inst_16293 = inst_16313;
var inst_16294 = inst_16316;
var inst_16295 = (0);
var state_16356__$1 = (function (){var statearr_16441 = state_16356;
(statearr_16441[(13)] = inst_16294);

(statearr_16441[(14)] = inst_16292);

(statearr_16441[(15)] = inst_16293);

(statearr_16441[(16)] = inst_16295);

return statearr_16441;
})();
var statearr_16442_18456 = state_16356__$1;
(statearr_16442_18456[(2)] = null);

(statearr_16442_18456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (10))){
var inst_16294 = (state_16356[(13)]);
var inst_16292 = (state_16356[(14)]);
var inst_16293 = (state_16356[(15)]);
var inst_16295 = (state_16356[(16)]);
var inst_16300 = cljs.core._nth(inst_16293,inst_16295);
var inst_16304 = cljs.core.async.muxch_STAR_(inst_16300);
var inst_16305 = cljs.core.async.close_BANG_(inst_16304);
var inst_16306 = (inst_16295 + (1));
var tmp16437 = inst_16294;
var tmp16438 = inst_16292;
var tmp16439 = inst_16293;
var inst_16292__$1 = tmp16438;
var inst_16293__$1 = tmp16439;
var inst_16294__$1 = tmp16437;
var inst_16295__$1 = inst_16306;
var state_16356__$1 = (function (){var statearr_16443 = state_16356;
(statearr_16443[(17)] = inst_16305);

(statearr_16443[(13)] = inst_16294__$1);

(statearr_16443[(14)] = inst_16292__$1);

(statearr_16443[(15)] = inst_16293__$1);

(statearr_16443[(16)] = inst_16295__$1);

return statearr_16443;
})();
var statearr_16444_18457 = state_16356__$1;
(statearr_16444_18457[(2)] = null);

(statearr_16444_18457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (18))){
var inst_16326 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16446_18458 = state_16356__$1;
(statearr_16446_18458[(2)] = inst_16326);

(statearr_16446_18458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (8))){
var inst_16294 = (state_16356[(13)]);
var inst_16295 = (state_16356[(16)]);
var inst_16297 = (inst_16295 < inst_16294);
var inst_16298 = inst_16297;
var state_16356__$1 = state_16356;
if(cljs.core.truth_(inst_16298)){
var statearr_16448_18459 = state_16356__$1;
(statearr_16448_18459[(1)] = (10));

} else {
var statearr_16449_18460 = state_16356__$1;
(statearr_16449_18460[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_16452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16452[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_16452[(1)] = (1));

return statearr_16452;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_16356){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_16356);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e16453){var ex__13239__auto__ = e16453;
var statearr_16454_18461 = state_16356;
(statearr_16454_18461[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_16356[(4)]))){
var statearr_16455_18462 = state_16356;
(statearr_16455_18462[(1)] = cljs.core.first((state_16356[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18465 = state_16356;
state_16356 = G__18465;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_16356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_16356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_16456 = f__14268__auto__();
(statearr_16456[(6)] = c__14267__auto___18417);

return statearr_16456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16460 = arguments.length;
switch (G__16460) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16469 = arguments.length;
switch (G__16469) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16484 = arguments.length;
switch (G__16484) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14267__auto___18483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_16545){
var state_val_16546 = (state_16545[(1)]);
if((state_val_16546 === (7))){
var state_16545__$1 = state_16545;
var statearr_16552_18484 = state_16545__$1;
(statearr_16552_18484[(2)] = null);

(statearr_16552_18484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (1))){
var state_16545__$1 = state_16545;
var statearr_16554_18485 = state_16545__$1;
(statearr_16554_18485[(2)] = null);

(statearr_16554_18485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (4))){
var inst_16494 = (state_16545[(7)]);
var inst_16495 = (state_16545[(8)]);
var inst_16497 = (inst_16495 < inst_16494);
var state_16545__$1 = state_16545;
if(cljs.core.truth_(inst_16497)){
var statearr_16555_18486 = state_16545__$1;
(statearr_16555_18486[(1)] = (6));

} else {
var statearr_16556_18487 = state_16545__$1;
(statearr_16556_18487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (15))){
var inst_16530 = (state_16545[(9)]);
var inst_16536 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16530);
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16545__$1,(17),out,inst_16536);
} else {
if((state_val_16546 === (13))){
var inst_16530 = (state_16545[(9)]);
var inst_16530__$1 = (state_16545[(2)]);
var inst_16532 = cljs.core.some(cljs.core.nil_QMARK_,inst_16530__$1);
var state_16545__$1 = (function (){var statearr_16563 = state_16545;
(statearr_16563[(9)] = inst_16530__$1);

return statearr_16563;
})();
if(cljs.core.truth_(inst_16532)){
var statearr_16565_18488 = state_16545__$1;
(statearr_16565_18488[(1)] = (14));

} else {
var statearr_16567_18489 = state_16545__$1;
(statearr_16567_18489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (6))){
var state_16545__$1 = state_16545;
var statearr_16568_18490 = state_16545__$1;
(statearr_16568_18490[(2)] = null);

(statearr_16568_18490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (17))){
var inst_16538 = (state_16545[(2)]);
var state_16545__$1 = (function (){var statearr_16580 = state_16545;
(statearr_16580[(10)] = inst_16538);

return statearr_16580;
})();
var statearr_16582_18491 = state_16545__$1;
(statearr_16582_18491[(2)] = null);

(statearr_16582_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (3))){
var inst_16543 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16545__$1,inst_16543);
} else {
if((state_val_16546 === (12))){
var _ = (function (){var statearr_16586 = state_16545;
(statearr_16586[(4)] = cljs.core.rest((state_16545[(4)])));

return statearr_16586;
})();
var state_16545__$1 = state_16545;
var ex16578 = (state_16545__$1[(2)]);
var statearr_16596_18492 = state_16545__$1;
(statearr_16596_18492[(5)] = ex16578);


if((ex16578 instanceof Object)){
var statearr_16605_18493 = state_16545__$1;
(statearr_16605_18493[(1)] = (11));

(statearr_16605_18493[(5)] = null);

} else {
throw ex16578;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (2))){
var inst_16493 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16494 = cnt;
var inst_16495 = (0);
var state_16545__$1 = (function (){var statearr_16609 = state_16545;
(statearr_16609[(7)] = inst_16494);

(statearr_16609[(11)] = inst_16493);

(statearr_16609[(8)] = inst_16495);

return statearr_16609;
})();
var statearr_16610_18494 = state_16545__$1;
(statearr_16610_18494[(2)] = null);

(statearr_16610_18494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (11))){
var inst_16504 = (state_16545[(2)]);
var inst_16505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16545__$1 = (function (){var statearr_16611 = state_16545;
(statearr_16611[(12)] = inst_16504);

return statearr_16611;
})();
var statearr_16618_18495 = state_16545__$1;
(statearr_16618_18495[(2)] = inst_16505);

(statearr_16618_18495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (9))){
var inst_16495 = (state_16545[(8)]);
var _ = (function (){var statearr_16621 = state_16545;
(statearr_16621[(4)] = cljs.core.cons((12),(state_16545[(4)])));

return statearr_16621;
})();
var inst_16513 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16495) : chs__$1.call(null, inst_16495));
var inst_16514 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16495) : done.call(null, inst_16495));
var inst_16516 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16513,inst_16514);
var ___$1 = (function (){var statearr_16627 = state_16545;
(statearr_16627[(4)] = cljs.core.rest((state_16545[(4)])));

return statearr_16627;
})();
var state_16545__$1 = state_16545;
var statearr_16628_18496 = state_16545__$1;
(statearr_16628_18496[(2)] = inst_16516);

(statearr_16628_18496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (5))){
var inst_16526 = (state_16545[(2)]);
var state_16545__$1 = (function (){var statearr_16631 = state_16545;
(statearr_16631[(13)] = inst_16526);

return statearr_16631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16545__$1,(13),dchan);
} else {
if((state_val_16546 === (14))){
var inst_16534 = cljs.core.async.close_BANG_(out);
var state_16545__$1 = state_16545;
var statearr_16637_18497 = state_16545__$1;
(statearr_16637_18497[(2)] = inst_16534);

(statearr_16637_18497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (16))){
var inst_16541 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16646_18500 = state_16545__$1;
(statearr_16646_18500[(2)] = inst_16541);

(statearr_16646_18500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (10))){
var inst_16495 = (state_16545[(8)]);
var inst_16519 = (state_16545[(2)]);
var inst_16520 = (inst_16495 + (1));
var inst_16495__$1 = inst_16520;
var state_16545__$1 = (function (){var statearr_16647 = state_16545;
(statearr_16647[(14)] = inst_16519);

(statearr_16647[(8)] = inst_16495__$1);

return statearr_16647;
})();
var statearr_16648_18501 = state_16545__$1;
(statearr_16648_18501[(2)] = null);

(statearr_16648_18501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (8))){
var inst_16524 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16649_18502 = state_16545__$1;
(statearr_16649_18502[(2)] = inst_16524);

(statearr_16649_18502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_16656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16656[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_16656[(1)] = (1));

return statearr_16656;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_16545){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_16545);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e16657){var ex__13239__auto__ = e16657;
var statearr_16661_18508 = state_16545;
(statearr_16661_18508[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_16545[(4)]))){
var statearr_16662_18509 = state_16545;
(statearr_16662_18509[(1)] = cljs.core.first((state_16545[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18510 = state_16545;
state_16545 = G__18510;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_16545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_16545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_16665 = f__14268__auto__();
(statearr_16665[(6)] = c__14267__auto___18483);

return statearr_16665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16669 = arguments.length;
switch (G__16669) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14267__auto___18516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_16726){
var state_val_16727 = (state_16726[(1)]);
if((state_val_16727 === (7))){
var inst_16682 = (state_16726[(7)]);
var inst_16687 = (state_16726[(8)]);
var inst_16682__$1 = (state_16726[(2)]);
var inst_16687__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16682__$1,(0),null);
var inst_16688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16682__$1,(1),null);
var inst_16700 = (inst_16687__$1 == null);
var state_16726__$1 = (function (){var statearr_16735 = state_16726;
(statearr_16735[(7)] = inst_16682__$1);

(statearr_16735[(9)] = inst_16688);

(statearr_16735[(8)] = inst_16687__$1);

return statearr_16735;
})();
if(cljs.core.truth_(inst_16700)){
var statearr_16736_18517 = state_16726__$1;
(statearr_16736_18517[(1)] = (8));

} else {
var statearr_16737_18518 = state_16726__$1;
(statearr_16737_18518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (1))){
var inst_16672 = cljs.core.vec(chs);
var inst_16673 = inst_16672;
var state_16726__$1 = (function (){var statearr_16750 = state_16726;
(statearr_16750[(10)] = inst_16673);

return statearr_16750;
})();
var statearr_16751_18519 = state_16726__$1;
(statearr_16751_18519[(2)] = null);

(statearr_16751_18519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (4))){
var inst_16673 = (state_16726[(10)]);
var state_16726__$1 = state_16726;
return cljs.core.async.ioc_alts_BANG_(state_16726__$1,(7),inst_16673);
} else {
if((state_val_16727 === (6))){
var inst_16714 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16754_18520 = state_16726__$1;
(statearr_16754_18520[(2)] = inst_16714);

(statearr_16754_18520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (3))){
var inst_16716 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16726__$1,inst_16716);
} else {
if((state_val_16727 === (2))){
var inst_16673 = (state_16726[(10)]);
var inst_16675 = cljs.core.count(inst_16673);
var inst_16676 = (inst_16675 > (0));
var state_16726__$1 = state_16726;
if(cljs.core.truth_(inst_16676)){
var statearr_16764_18521 = state_16726__$1;
(statearr_16764_18521[(1)] = (4));

} else {
var statearr_16767_18522 = state_16726__$1;
(statearr_16767_18522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (11))){
var inst_16673 = (state_16726[(10)]);
var inst_16707 = (state_16726[(2)]);
var tmp16762 = inst_16673;
var inst_16673__$1 = tmp16762;
var state_16726__$1 = (function (){var statearr_16775 = state_16726;
(statearr_16775[(11)] = inst_16707);

(statearr_16775[(10)] = inst_16673__$1);

return statearr_16775;
})();
var statearr_16776_18523 = state_16726__$1;
(statearr_16776_18523[(2)] = null);

(statearr_16776_18523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (9))){
var inst_16687 = (state_16726[(8)]);
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16726__$1,(11),out,inst_16687);
} else {
if((state_val_16727 === (5))){
var inst_16712 = cljs.core.async.close_BANG_(out);
var state_16726__$1 = state_16726;
var statearr_16787_18524 = state_16726__$1;
(statearr_16787_18524[(2)] = inst_16712);

(statearr_16787_18524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (10))){
var inst_16710 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16790_18525 = state_16726__$1;
(statearr_16790_18525[(2)] = inst_16710);

(statearr_16790_18525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (8))){
var inst_16682 = (state_16726[(7)]);
var inst_16688 = (state_16726[(9)]);
var inst_16687 = (state_16726[(8)]);
var inst_16673 = (state_16726[(10)]);
var inst_16702 = (function (){var cs = inst_16673;
var vec__16678 = inst_16682;
var v = inst_16687;
var c = inst_16688;
return (function (p1__16666_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16666_SHARP_);
});
})();
var inst_16703 = cljs.core.filterv(inst_16702,inst_16673);
var inst_16673__$1 = inst_16703;
var state_16726__$1 = (function (){var statearr_16805 = state_16726;
(statearr_16805[(10)] = inst_16673__$1);

return statearr_16805;
})();
var statearr_16806_18526 = state_16726__$1;
(statearr_16806_18526[(2)] = null);

(statearr_16806_18526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_16807 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16807[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_16807[(1)] = (1));

return statearr_16807;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_16726){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_16726);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e16809){var ex__13239__auto__ = e16809;
var statearr_16810_18527 = state_16726;
(statearr_16810_18527[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_16726[(4)]))){
var statearr_16814_18528 = state_16726;
(statearr_16814_18528[(1)] = cljs.core.first((state_16726[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18530 = state_16726;
state_16726 = G__18530;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_16726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_16726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_16819 = f__14268__auto__();
(statearr_16819[(6)] = c__14267__auto___18516);

return statearr_16819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16823 = arguments.length;
switch (G__16823) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14267__auto___18535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_16854){
var state_val_16856 = (state_16854[(1)]);
if((state_val_16856 === (7))){
var inst_16836 = (state_16854[(7)]);
var inst_16836__$1 = (state_16854[(2)]);
var inst_16837 = (inst_16836__$1 == null);
var inst_16838 = cljs.core.not(inst_16837);
var state_16854__$1 = (function (){var statearr_16860 = state_16854;
(statearr_16860[(7)] = inst_16836__$1);

return statearr_16860;
})();
if(inst_16838){
var statearr_16861_18536 = state_16854__$1;
(statearr_16861_18536[(1)] = (8));

} else {
var statearr_16862_18537 = state_16854__$1;
(statearr_16862_18537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (1))){
var inst_16831 = (0);
var state_16854__$1 = (function (){var statearr_16863 = state_16854;
(statearr_16863[(8)] = inst_16831);

return statearr_16863;
})();
var statearr_16864_18538 = state_16854__$1;
(statearr_16864_18538[(2)] = null);

(statearr_16864_18538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (4))){
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16854__$1,(7),ch);
} else {
if((state_val_16856 === (6))){
var inst_16849 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16866_18539 = state_16854__$1;
(statearr_16866_18539[(2)] = inst_16849);

(statearr_16866_18539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (3))){
var inst_16851 = (state_16854[(2)]);
var inst_16852 = cljs.core.async.close_BANG_(out);
var state_16854__$1 = (function (){var statearr_16867 = state_16854;
(statearr_16867[(9)] = inst_16851);

return statearr_16867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16854__$1,inst_16852);
} else {
if((state_val_16856 === (2))){
var inst_16831 = (state_16854[(8)]);
var inst_16833 = (inst_16831 < n);
var state_16854__$1 = state_16854;
if(cljs.core.truth_(inst_16833)){
var statearr_16869_18541 = state_16854__$1;
(statearr_16869_18541[(1)] = (4));

} else {
var statearr_16870_18542 = state_16854__$1;
(statearr_16870_18542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (11))){
var inst_16831 = (state_16854[(8)]);
var inst_16841 = (state_16854[(2)]);
var inst_16842 = (inst_16831 + (1));
var inst_16831__$1 = inst_16842;
var state_16854__$1 = (function (){var statearr_16883 = state_16854;
(statearr_16883[(10)] = inst_16841);

(statearr_16883[(8)] = inst_16831__$1);

return statearr_16883;
})();
var statearr_16884_18544 = state_16854__$1;
(statearr_16884_18544[(2)] = null);

(statearr_16884_18544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (9))){
var state_16854__$1 = state_16854;
var statearr_16885_18545 = state_16854__$1;
(statearr_16885_18545[(2)] = null);

(statearr_16885_18545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (5))){
var state_16854__$1 = state_16854;
var statearr_16886_18546 = state_16854__$1;
(statearr_16886_18546[(2)] = null);

(statearr_16886_18546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (10))){
var inst_16846 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16887_18547 = state_16854__$1;
(statearr_16887_18547[(2)] = inst_16846);

(statearr_16887_18547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (8))){
var inst_16836 = (state_16854[(7)]);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16854__$1,(11),out,inst_16836);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_16888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16888[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_16888[(1)] = (1));

return statearr_16888;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_16854){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_16854);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e16889){var ex__13239__auto__ = e16889;
var statearr_16890_18548 = state_16854;
(statearr_16890_18548[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_16854[(4)]))){
var statearr_16891_18549 = state_16854;
(statearr_16891_18549[(1)] = cljs.core.first((state_16854[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18552 = state_16854;
state_16854 = G__18552;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_16854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_16854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_16896 = f__14268__auto__();
(statearr_16896[(6)] = c__14267__auto___18535);

return statearr_16896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16915 = (function (f,ch,meta16899,_,fn1,meta16916){
this.f = f;
this.ch = ch;
this.meta16899 = meta16899;
this._ = _;
this.fn1 = fn1;
this.meta16916 = meta16916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16917,meta16916__$1){
var self__ = this;
var _16917__$1 = this;
return (new cljs.core.async.t_cljs$core$async16915(self__.f,self__.ch,self__.meta16899,self__._,self__.fn1,meta16916__$1));
}));

(cljs.core.async.t_cljs$core$async16915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16917){
var self__ = this;
var _16917__$1 = this;
return self__.meta16916;
}));

(cljs.core.async.t_cljs$core$async16915.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16897_SHARP_){
var G__16929 = (((p1__16897_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16897_SHARP_) : self__.f.call(null, p1__16897_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16929) : f1.call(null, G__16929));
});
}));

(cljs.core.async.t_cljs$core$async16915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16899","meta16899",585733530,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16898","cljs.core.async/t_cljs$core$async16898",-1920541753,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16916","meta16916",1524521426,null)], null);
}));

(cljs.core.async.t_cljs$core$async16915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16915");

(cljs.core.async.t_cljs$core$async16915.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16915.
 */
cljs.core.async.__GT_t_cljs$core$async16915 = (function cljs$core$async$__GT_t_cljs$core$async16915(f,ch,meta16899,_,fn1,meta16916){
return (new cljs.core.async.t_cljs$core$async16915(f,ch,meta16899,_,fn1,meta16916));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16898 = (function (f,ch,meta16899){
this.f = f;
this.ch = ch;
this.meta16899 = meta16899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16900,meta16899__$1){
var self__ = this;
var _16900__$1 = this;
return (new cljs.core.async.t_cljs$core$async16898(self__.f,self__.ch,meta16899__$1));
}));

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16900){
var self__ = this;
var _16900__$1 = this;
return self__.meta16899;
}));

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16915(self__.f,self__.ch,self__.meta16899,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16949 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16949) : self__.f.call(null, G__16949));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16899","meta16899",585733530,null)], null);
}));

(cljs.core.async.t_cljs$core$async16898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16898");

(cljs.core.async.t_cljs$core$async16898.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16898.
 */
cljs.core.async.__GT_t_cljs$core$async16898 = (function cljs$core$async$__GT_t_cljs$core$async16898(f,ch,meta16899){
return (new cljs.core.async.t_cljs$core$async16898(f,ch,meta16899));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16962 = (function (f,ch,meta16963){
this.f = f;
this.ch = ch;
this.meta16963 = meta16963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16964,meta16963__$1){
var self__ = this;
var _16964__$1 = this;
return (new cljs.core.async.t_cljs$core$async16962(self__.f,self__.ch,meta16963__$1));
}));

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16964){
var self__ = this;
var _16964__$1 = this;
return self__.meta16963;
}));

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16962.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16963","meta16963",1593437849,null)], null);
}));

(cljs.core.async.t_cljs$core$async16962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16962");

(cljs.core.async.t_cljs$core$async16962.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16962.
 */
cljs.core.async.__GT_t_cljs$core$async16962 = (function cljs$core$async$__GT_t_cljs$core$async16962(f,ch,meta16963){
return (new cljs.core.async.t_cljs$core$async16962(f,ch,meta16963));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16962(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16985 = (function (p,ch,meta16986){
this.p = p;
this.ch = ch;
this.meta16986 = meta16986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16987,meta16986__$1){
var self__ = this;
var _16987__$1 = this;
return (new cljs.core.async.t_cljs$core$async16985(self__.p,self__.ch,meta16986__$1));
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16987){
var self__ = this;
var _16987__$1 = this;
return self__.meta16986;
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16986","meta16986",-619046709,null)], null);
}));

(cljs.core.async.t_cljs$core$async16985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16985");

(cljs.core.async.t_cljs$core$async16985.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16985.
 */
cljs.core.async.__GT_t_cljs$core$async16985 = (function cljs$core$async$__GT_t_cljs$core$async16985(p,ch,meta16986){
return (new cljs.core.async.t_cljs$core$async16985(p,ch,meta16986));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16985(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17056 = arguments.length;
switch (G__17056) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14267__auto___18563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_17092){
var state_val_17093 = (state_17092[(1)]);
if((state_val_17093 === (7))){
var inst_17088 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17103_18564 = state_17092__$1;
(statearr_17103_18564[(2)] = inst_17088);

(statearr_17103_18564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (1))){
var state_17092__$1 = state_17092;
var statearr_17105_18565 = state_17092__$1;
(statearr_17105_18565[(2)] = null);

(statearr_17105_18565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (4))){
var inst_17074 = (state_17092[(7)]);
var inst_17074__$1 = (state_17092[(2)]);
var inst_17075 = (inst_17074__$1 == null);
var state_17092__$1 = (function (){var statearr_17114 = state_17092;
(statearr_17114[(7)] = inst_17074__$1);

return statearr_17114;
})();
if(cljs.core.truth_(inst_17075)){
var statearr_17116_18568 = state_17092__$1;
(statearr_17116_18568[(1)] = (5));

} else {
var statearr_17117_18569 = state_17092__$1;
(statearr_17117_18569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (6))){
var inst_17074 = (state_17092[(7)]);
var inst_17079 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17074) : p.call(null, inst_17074));
var state_17092__$1 = state_17092;
if(cljs.core.truth_(inst_17079)){
var statearr_17119_18570 = state_17092__$1;
(statearr_17119_18570[(1)] = (8));

} else {
var statearr_17121_18571 = state_17092__$1;
(statearr_17121_18571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (3))){
var inst_17090 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17092__$1,inst_17090);
} else {
if((state_val_17093 === (2))){
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17092__$1,(4),ch);
} else {
if((state_val_17093 === (11))){
var inst_17082 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17122_18572 = state_17092__$1;
(statearr_17122_18572[(2)] = inst_17082);

(statearr_17122_18572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (9))){
var state_17092__$1 = state_17092;
var statearr_17123_18573 = state_17092__$1;
(statearr_17123_18573[(2)] = null);

(statearr_17123_18573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (5))){
var inst_17077 = cljs.core.async.close_BANG_(out);
var state_17092__$1 = state_17092;
var statearr_17124_18578 = state_17092__$1;
(statearr_17124_18578[(2)] = inst_17077);

(statearr_17124_18578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (10))){
var inst_17085 = (state_17092[(2)]);
var state_17092__$1 = (function (){var statearr_17125 = state_17092;
(statearr_17125[(8)] = inst_17085);

return statearr_17125;
})();
var statearr_17126_18583 = state_17092__$1;
(statearr_17126_18583[(2)] = null);

(statearr_17126_18583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (8))){
var inst_17074 = (state_17092[(7)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17092__$1,(11),out,inst_17074);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_17130 = [null,null,null,null,null,null,null,null,null];
(statearr_17130[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_17130[(1)] = (1));

return statearr_17130;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_17092){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_17092);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e17132){var ex__13239__auto__ = e17132;
var statearr_17133_18585 = state_17092;
(statearr_17133_18585[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_17092[(4)]))){
var statearr_17134_18586 = state_17092;
(statearr_17134_18586[(1)] = cljs.core.first((state_17092[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18587 = state_17092;
state_17092 = G__18587;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_17092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_17092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_17137 = f__14268__auto__();
(statearr_17137[(6)] = c__14267__auto___18563);

return statearr_17137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17144 = arguments.length;
switch (G__17144) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_17216){
var state_val_17223 = (state_17216[(1)]);
if((state_val_17223 === (7))){
var inst_17212 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17229_18593 = state_17216__$1;
(statearr_17229_18593[(2)] = inst_17212);

(statearr_17229_18593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (20))){
var inst_17182 = (state_17216[(7)]);
var inst_17193 = (state_17216[(2)]);
var inst_17194 = cljs.core.next(inst_17182);
var inst_17163 = inst_17194;
var inst_17164 = null;
var inst_17165 = (0);
var inst_17166 = (0);
var state_17216__$1 = (function (){var statearr_17230 = state_17216;
(statearr_17230[(8)] = inst_17165);

(statearr_17230[(9)] = inst_17163);

(statearr_17230[(10)] = inst_17193);

(statearr_17230[(11)] = inst_17166);

(statearr_17230[(12)] = inst_17164);

return statearr_17230;
})();
var statearr_17231_18594 = state_17216__$1;
(statearr_17231_18594[(2)] = null);

(statearr_17231_18594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (1))){
var state_17216__$1 = state_17216;
var statearr_17232_18595 = state_17216__$1;
(statearr_17232_18595[(2)] = null);

(statearr_17232_18595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (4))){
var inst_17152 = (state_17216[(13)]);
var inst_17152__$1 = (state_17216[(2)]);
var inst_17153 = (inst_17152__$1 == null);
var state_17216__$1 = (function (){var statearr_17236 = state_17216;
(statearr_17236[(13)] = inst_17152__$1);

return statearr_17236;
})();
if(cljs.core.truth_(inst_17153)){
var statearr_17238_18596 = state_17216__$1;
(statearr_17238_18596[(1)] = (5));

} else {
var statearr_17239_18597 = state_17216__$1;
(statearr_17239_18597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (15))){
var state_17216__$1 = state_17216;
var statearr_17244_18598 = state_17216__$1;
(statearr_17244_18598[(2)] = null);

(statearr_17244_18598[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (21))){
var state_17216__$1 = state_17216;
var statearr_17245_18603 = state_17216__$1;
(statearr_17245_18603[(2)] = null);

(statearr_17245_18603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (13))){
var inst_17165 = (state_17216[(8)]);
var inst_17163 = (state_17216[(9)]);
var inst_17166 = (state_17216[(11)]);
var inst_17164 = (state_17216[(12)]);
var inst_17176 = (state_17216[(2)]);
var inst_17177 = (inst_17166 + (1));
var tmp17240 = inst_17165;
var tmp17241 = inst_17163;
var tmp17242 = inst_17164;
var inst_17163__$1 = tmp17241;
var inst_17164__$1 = tmp17242;
var inst_17165__$1 = tmp17240;
var inst_17166__$1 = inst_17177;
var state_17216__$1 = (function (){var statearr_17247 = state_17216;
(statearr_17247[(8)] = inst_17165__$1);

(statearr_17247[(14)] = inst_17176);

(statearr_17247[(9)] = inst_17163__$1);

(statearr_17247[(11)] = inst_17166__$1);

(statearr_17247[(12)] = inst_17164__$1);

return statearr_17247;
})();
var statearr_17249_18605 = state_17216__$1;
(statearr_17249_18605[(2)] = null);

(statearr_17249_18605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (22))){
var state_17216__$1 = state_17216;
var statearr_17250_18606 = state_17216__$1;
(statearr_17250_18606[(2)] = null);

(statearr_17250_18606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (6))){
var inst_17152 = (state_17216[(13)]);
var inst_17161 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17152) : f.call(null, inst_17152));
var inst_17162 = cljs.core.seq(inst_17161);
var inst_17163 = inst_17162;
var inst_17164 = null;
var inst_17165 = (0);
var inst_17166 = (0);
var state_17216__$1 = (function (){var statearr_17252 = state_17216;
(statearr_17252[(8)] = inst_17165);

(statearr_17252[(9)] = inst_17163);

(statearr_17252[(11)] = inst_17166);

(statearr_17252[(12)] = inst_17164);

return statearr_17252;
})();
var statearr_17253_18614 = state_17216__$1;
(statearr_17253_18614[(2)] = null);

(statearr_17253_18614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (17))){
var inst_17182 = (state_17216[(7)]);
var inst_17186 = cljs.core.chunk_first(inst_17182);
var inst_17187 = cljs.core.chunk_rest(inst_17182);
var inst_17188 = cljs.core.count(inst_17186);
var inst_17163 = inst_17187;
var inst_17164 = inst_17186;
var inst_17165 = inst_17188;
var inst_17166 = (0);
var state_17216__$1 = (function (){var statearr_17255 = state_17216;
(statearr_17255[(8)] = inst_17165);

(statearr_17255[(9)] = inst_17163);

(statearr_17255[(11)] = inst_17166);

(statearr_17255[(12)] = inst_17164);

return statearr_17255;
})();
var statearr_17257_18615 = state_17216__$1;
(statearr_17257_18615[(2)] = null);

(statearr_17257_18615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (3))){
var inst_17214 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17216__$1,inst_17214);
} else {
if((state_val_17223 === (12))){
var inst_17202 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17266_18619 = state_17216__$1;
(statearr_17266_18619[(2)] = inst_17202);

(statearr_17266_18619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (2))){
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17216__$1,(4),in$);
} else {
if((state_val_17223 === (23))){
var inst_17210 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17268_18620 = state_17216__$1;
(statearr_17268_18620[(2)] = inst_17210);

(statearr_17268_18620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (19))){
var inst_17197 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17270_18624 = state_17216__$1;
(statearr_17270_18624[(2)] = inst_17197);

(statearr_17270_18624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (11))){
var inst_17163 = (state_17216[(9)]);
var inst_17182 = (state_17216[(7)]);
var inst_17182__$1 = cljs.core.seq(inst_17163);
var state_17216__$1 = (function (){var statearr_17271 = state_17216;
(statearr_17271[(7)] = inst_17182__$1);

return statearr_17271;
})();
if(inst_17182__$1){
var statearr_17272_18625 = state_17216__$1;
(statearr_17272_18625[(1)] = (14));

} else {
var statearr_17277_18626 = state_17216__$1;
(statearr_17277_18626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (9))){
var inst_17204 = (state_17216[(2)]);
var inst_17205 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17216__$1 = (function (){var statearr_17278 = state_17216;
(statearr_17278[(15)] = inst_17204);

return statearr_17278;
})();
if(cljs.core.truth_(inst_17205)){
var statearr_17279_18627 = state_17216__$1;
(statearr_17279_18627[(1)] = (21));

} else {
var statearr_17284_18628 = state_17216__$1;
(statearr_17284_18628[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (5))){
var inst_17155 = cljs.core.async.close_BANG_(out);
var state_17216__$1 = state_17216;
var statearr_17285_18632 = state_17216__$1;
(statearr_17285_18632[(2)] = inst_17155);

(statearr_17285_18632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (14))){
var inst_17182 = (state_17216[(7)]);
var inst_17184 = cljs.core.chunked_seq_QMARK_(inst_17182);
var state_17216__$1 = state_17216;
if(inst_17184){
var statearr_17286_18633 = state_17216__$1;
(statearr_17286_18633[(1)] = (17));

} else {
var statearr_17287_18634 = state_17216__$1;
(statearr_17287_18634[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (16))){
var inst_17200 = (state_17216[(2)]);
var state_17216__$1 = state_17216;
var statearr_17288_18638 = state_17216__$1;
(statearr_17288_18638[(2)] = inst_17200);

(statearr_17288_18638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17223 === (10))){
var inst_17166 = (state_17216[(11)]);
var inst_17164 = (state_17216[(12)]);
var inst_17174 = cljs.core._nth(inst_17164,inst_17166);
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17216__$1,(13),out,inst_17174);
} else {
if((state_val_17223 === (18))){
var inst_17182 = (state_17216[(7)]);
var inst_17191 = cljs.core.first(inst_17182);
var state_17216__$1 = state_17216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17216__$1,(20),out,inst_17191);
} else {
if((state_val_17223 === (8))){
var inst_17165 = (state_17216[(8)]);
var inst_17166 = (state_17216[(11)]);
var inst_17168 = (inst_17166 < inst_17165);
var inst_17169 = inst_17168;
var state_17216__$1 = state_17216;
if(cljs.core.truth_(inst_17169)){
var statearr_17292_18643 = state_17216__$1;
(statearr_17292_18643[(1)] = (10));

} else {
var statearr_17293_18644 = state_17216__$1;
(statearr_17293_18644[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13236__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13236__auto____0 = (function (){
var statearr_17294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17294[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13236__auto__);

(statearr_17294[(1)] = (1));

return statearr_17294;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13236__auto____1 = (function (state_17216){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_17216);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e17295){var ex__13239__auto__ = e17295;
var statearr_17296_18645 = state_17216;
(statearr_17296_18645[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_17216[(4)]))){
var statearr_17297_18646 = state_17216;
(statearr_17297_18646[(1)] = cljs.core.first((state_17216[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18647 = state_17216;
state_17216 = G__18647;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13236__auto__ = function(state_17216){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13236__auto____1.call(this,state_17216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13236__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13236__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_17300 = f__14268__auto__();
(statearr_17300[(6)] = c__14267__auto__);

return statearr_17300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));

return c__14267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17302 = arguments.length;
switch (G__17302) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17304 = arguments.length;
switch (G__17304) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17309 = arguments.length;
switch (G__17309) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14267__auto___18658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_17340){
var state_val_17341 = (state_17340[(1)]);
if((state_val_17341 === (7))){
var inst_17331 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17345_18661 = state_17340__$1;
(statearr_17345_18661[(2)] = inst_17331);

(statearr_17345_18661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (1))){
var inst_17313 = null;
var state_17340__$1 = (function (){var statearr_17346 = state_17340;
(statearr_17346[(7)] = inst_17313);

return statearr_17346;
})();
var statearr_17347_18667 = state_17340__$1;
(statearr_17347_18667[(2)] = null);

(statearr_17347_18667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (4))){
var inst_17316 = (state_17340[(8)]);
var inst_17316__$1 = (state_17340[(2)]);
var inst_17317 = (inst_17316__$1 == null);
var inst_17318 = cljs.core.not(inst_17317);
var state_17340__$1 = (function (){var statearr_17351 = state_17340;
(statearr_17351[(8)] = inst_17316__$1);

return statearr_17351;
})();
if(inst_17318){
var statearr_17352_18668 = state_17340__$1;
(statearr_17352_18668[(1)] = (5));

} else {
var statearr_17353_18669 = state_17340__$1;
(statearr_17353_18669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (6))){
var state_17340__$1 = state_17340;
var statearr_17354_18671 = state_17340__$1;
(statearr_17354_18671[(2)] = null);

(statearr_17354_18671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (3))){
var inst_17334 = (state_17340[(2)]);
var inst_17335 = cljs.core.async.close_BANG_(out);
var state_17340__$1 = (function (){var statearr_17355 = state_17340;
(statearr_17355[(9)] = inst_17334);

return statearr_17355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17340__$1,inst_17335);
} else {
if((state_val_17341 === (2))){
var state_17340__$1 = state_17340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17340__$1,(4),ch);
} else {
if((state_val_17341 === (11))){
var inst_17316 = (state_17340[(8)]);
var inst_17325 = (state_17340[(2)]);
var inst_17313 = inst_17316;
var state_17340__$1 = (function (){var statearr_17356 = state_17340;
(statearr_17356[(10)] = inst_17325);

(statearr_17356[(7)] = inst_17313);

return statearr_17356;
})();
var statearr_17357_18672 = state_17340__$1;
(statearr_17357_18672[(2)] = null);

(statearr_17357_18672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (9))){
var inst_17316 = (state_17340[(8)]);
var state_17340__$1 = state_17340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17340__$1,(11),out,inst_17316);
} else {
if((state_val_17341 === (5))){
var inst_17313 = (state_17340[(7)]);
var inst_17316 = (state_17340[(8)]);
var inst_17320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17316,inst_17313);
var state_17340__$1 = state_17340;
if(inst_17320){
var statearr_17359_18673 = state_17340__$1;
(statearr_17359_18673[(1)] = (8));

} else {
var statearr_17360_18674 = state_17340__$1;
(statearr_17360_18674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (10))){
var inst_17328 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17361_18675 = state_17340__$1;
(statearr_17361_18675[(2)] = inst_17328);

(statearr_17361_18675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17341 === (8))){
var inst_17313 = (state_17340[(7)]);
var tmp17358 = inst_17313;
var inst_17313__$1 = tmp17358;
var state_17340__$1 = (function (){var statearr_17365 = state_17340;
(statearr_17365[(7)] = inst_17313__$1);

return statearr_17365;
})();
var statearr_17366_18680 = state_17340__$1;
(statearr_17366_18680[(2)] = null);

(statearr_17366_18680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_17369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17369[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_17369[(1)] = (1));

return statearr_17369;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_17340){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_17340);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e17371){var ex__13239__auto__ = e17371;
var statearr_17372_18681 = state_17340;
(statearr_17372_18681[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_17340[(4)]))){
var statearr_17373_18682 = state_17340;
(statearr_17373_18682[(1)] = cljs.core.first((state_17340[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18683 = state_17340;
state_17340 = G__18683;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_17340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_17340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_17374 = f__14268__auto__();
(statearr_17374[(6)] = c__14267__auto___18658);

return statearr_17374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17382 = arguments.length;
switch (G__17382) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14267__auto___18685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_17424){
var state_val_17425 = (state_17424[(1)]);
if((state_val_17425 === (7))){
var inst_17420 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17440_18686 = state_17424__$1;
(statearr_17440_18686[(2)] = inst_17420);

(statearr_17440_18686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (1))){
var inst_17387 = (new Array(n));
var inst_17388 = inst_17387;
var inst_17389 = (0);
var state_17424__$1 = (function (){var statearr_17441 = state_17424;
(statearr_17441[(7)] = inst_17388);

(statearr_17441[(8)] = inst_17389);

return statearr_17441;
})();
var statearr_17442_18687 = state_17424__$1;
(statearr_17442_18687[(2)] = null);

(statearr_17442_18687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (4))){
var inst_17392 = (state_17424[(9)]);
var inst_17392__$1 = (state_17424[(2)]);
var inst_17393 = (inst_17392__$1 == null);
var inst_17394 = cljs.core.not(inst_17393);
var state_17424__$1 = (function (){var statearr_17443 = state_17424;
(statearr_17443[(9)] = inst_17392__$1);

return statearr_17443;
})();
if(inst_17394){
var statearr_17444_18688 = state_17424__$1;
(statearr_17444_18688[(1)] = (5));

} else {
var statearr_17445_18689 = state_17424__$1;
(statearr_17445_18689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (15))){
var inst_17414 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17446_18690 = state_17424__$1;
(statearr_17446_18690[(2)] = inst_17414);

(statearr_17446_18690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (13))){
var state_17424__$1 = state_17424;
var statearr_17447_18691 = state_17424__$1;
(statearr_17447_18691[(2)] = null);

(statearr_17447_18691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (6))){
var inst_17389 = (state_17424[(8)]);
var inst_17410 = (inst_17389 > (0));
var state_17424__$1 = state_17424;
if(cljs.core.truth_(inst_17410)){
var statearr_17448_18692 = state_17424__$1;
(statearr_17448_18692[(1)] = (12));

} else {
var statearr_17449_18694 = state_17424__$1;
(statearr_17449_18694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (3))){
var inst_17422 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17424__$1,inst_17422);
} else {
if((state_val_17425 === (12))){
var inst_17388 = (state_17424[(7)]);
var inst_17412 = cljs.core.vec(inst_17388);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17424__$1,(15),out,inst_17412);
} else {
if((state_val_17425 === (2))){
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17424__$1,(4),ch);
} else {
if((state_val_17425 === (11))){
var inst_17404 = (state_17424[(2)]);
var inst_17405 = (new Array(n));
var inst_17388 = inst_17405;
var inst_17389 = (0);
var state_17424__$1 = (function (){var statearr_17451 = state_17424;
(statearr_17451[(10)] = inst_17404);

(statearr_17451[(7)] = inst_17388);

(statearr_17451[(8)] = inst_17389);

return statearr_17451;
})();
var statearr_17452_18698 = state_17424__$1;
(statearr_17452_18698[(2)] = null);

(statearr_17452_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (9))){
var inst_17388 = (state_17424[(7)]);
var inst_17402 = cljs.core.vec(inst_17388);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17424__$1,(11),out,inst_17402);
} else {
if((state_val_17425 === (5))){
var inst_17397 = (state_17424[(11)]);
var inst_17388 = (state_17424[(7)]);
var inst_17392 = (state_17424[(9)]);
var inst_17389 = (state_17424[(8)]);
var inst_17396 = (inst_17388[inst_17389] = inst_17392);
var inst_17397__$1 = (inst_17389 + (1));
var inst_17398 = (inst_17397__$1 < n);
var state_17424__$1 = (function (){var statearr_17453 = state_17424;
(statearr_17453[(11)] = inst_17397__$1);

(statearr_17453[(12)] = inst_17396);

return statearr_17453;
})();
if(cljs.core.truth_(inst_17398)){
var statearr_17456_18699 = state_17424__$1;
(statearr_17456_18699[(1)] = (8));

} else {
var statearr_17457_18700 = state_17424__$1;
(statearr_17457_18700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (14))){
var inst_17417 = (state_17424[(2)]);
var inst_17418 = cljs.core.async.close_BANG_(out);
var state_17424__$1 = (function (){var statearr_17464 = state_17424;
(statearr_17464[(13)] = inst_17417);

return statearr_17464;
})();
var statearr_17465_18701 = state_17424__$1;
(statearr_17465_18701[(2)] = inst_17418);

(statearr_17465_18701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (10))){
var inst_17408 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17467_18702 = state_17424__$1;
(statearr_17467_18702[(2)] = inst_17408);

(statearr_17467_18702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (8))){
var inst_17397 = (state_17424[(11)]);
var inst_17388 = (state_17424[(7)]);
var tmp17459 = inst_17388;
var inst_17388__$1 = tmp17459;
var inst_17389 = inst_17397;
var state_17424__$1 = (function (){var statearr_17471 = state_17424;
(statearr_17471[(7)] = inst_17388__$1);

(statearr_17471[(8)] = inst_17389);

return statearr_17471;
})();
var statearr_17472_18703 = state_17424__$1;
(statearr_17472_18703[(2)] = null);

(statearr_17472_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_17473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_17424){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_17424);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e17474){var ex__13239__auto__ = e17474;
var statearr_17475_18704 = state_17424;
(statearr_17475_18704[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_17424[(4)]))){
var statearr_17476_18705 = state_17424;
(statearr_17476_18705[(1)] = cljs.core.first((state_17424[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18710 = state_17424;
state_17424 = G__18710;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_17424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_17424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_17487 = f__14268__auto__();
(statearr_17487[(6)] = c__14267__auto___18685);

return statearr_17487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17493 = arguments.length;
switch (G__17493) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14267__auto___18717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14268__auto__ = (function (){var switch__13235__auto__ = (function (state_17544){
var state_val_17545 = (state_17544[(1)]);
if((state_val_17545 === (7))){
var inst_17540 = (state_17544[(2)]);
var state_17544__$1 = state_17544;
var statearr_17547_18718 = state_17544__$1;
(statearr_17547_18718[(2)] = inst_17540);

(statearr_17547_18718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (1))){
var inst_17494 = [];
var inst_17495 = inst_17494;
var inst_17496 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17544__$1 = (function (){var statearr_17552 = state_17544;
(statearr_17552[(7)] = inst_17495);

(statearr_17552[(8)] = inst_17496);

return statearr_17552;
})();
var statearr_17553_18719 = state_17544__$1;
(statearr_17553_18719[(2)] = null);

(statearr_17553_18719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (4))){
var inst_17499 = (state_17544[(9)]);
var inst_17499__$1 = (state_17544[(2)]);
var inst_17500 = (inst_17499__$1 == null);
var inst_17501 = cljs.core.not(inst_17500);
var state_17544__$1 = (function (){var statearr_17554 = state_17544;
(statearr_17554[(9)] = inst_17499__$1);

return statearr_17554;
})();
if(inst_17501){
var statearr_17559_18721 = state_17544__$1;
(statearr_17559_18721[(1)] = (5));

} else {
var statearr_17560_18722 = state_17544__$1;
(statearr_17560_18722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (15))){
var inst_17495 = (state_17544[(7)]);
var inst_17532 = cljs.core.vec(inst_17495);
var state_17544__$1 = state_17544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17544__$1,(18),out,inst_17532);
} else {
if((state_val_17545 === (13))){
var inst_17524 = (state_17544[(2)]);
var state_17544__$1 = state_17544;
var statearr_17564_18723 = state_17544__$1;
(statearr_17564_18723[(2)] = inst_17524);

(statearr_17564_18723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (6))){
var inst_17495 = (state_17544[(7)]);
var inst_17529 = inst_17495.length;
var inst_17530 = (inst_17529 > (0));
var state_17544__$1 = state_17544;
if(cljs.core.truth_(inst_17530)){
var statearr_17565_18725 = state_17544__$1;
(statearr_17565_18725[(1)] = (15));

} else {
var statearr_17566_18726 = state_17544__$1;
(statearr_17566_18726[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (17))){
var inst_17537 = (state_17544[(2)]);
var inst_17538 = cljs.core.async.close_BANG_(out);
var state_17544__$1 = (function (){var statearr_17568 = state_17544;
(statearr_17568[(10)] = inst_17537);

return statearr_17568;
})();
var statearr_17569_18727 = state_17544__$1;
(statearr_17569_18727[(2)] = inst_17538);

(statearr_17569_18727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (3))){
var inst_17542 = (state_17544[(2)]);
var state_17544__$1 = state_17544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17544__$1,inst_17542);
} else {
if((state_val_17545 === (12))){
var inst_17495 = (state_17544[(7)]);
var inst_17517 = cljs.core.vec(inst_17495);
var state_17544__$1 = state_17544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17544__$1,(14),out,inst_17517);
} else {
if((state_val_17545 === (2))){
var state_17544__$1 = state_17544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17544__$1,(4),ch);
} else {
if((state_val_17545 === (11))){
var inst_17499 = (state_17544[(9)]);
var inst_17505 = (state_17544[(11)]);
var inst_17495 = (state_17544[(7)]);
var inst_17514 = inst_17495.push(inst_17499);
var tmp17570 = inst_17495;
var inst_17495__$1 = tmp17570;
var inst_17496 = inst_17505;
var state_17544__$1 = (function (){var statearr_17571 = state_17544;
(statearr_17571[(12)] = inst_17514);

(statearr_17571[(7)] = inst_17495__$1);

(statearr_17571[(8)] = inst_17496);

return statearr_17571;
})();
var statearr_17572_18730 = state_17544__$1;
(statearr_17572_18730[(2)] = null);

(statearr_17572_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (9))){
var inst_17496 = (state_17544[(8)]);
var inst_17509 = cljs.core.keyword_identical_QMARK_(inst_17496,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17544__$1 = state_17544;
var statearr_17573_18734 = state_17544__$1;
(statearr_17573_18734[(2)] = inst_17509);

(statearr_17573_18734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (5))){
var inst_17499 = (state_17544[(9)]);
var inst_17505 = (state_17544[(11)]);
var inst_17506 = (state_17544[(13)]);
var inst_17496 = (state_17544[(8)]);
var inst_17505__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17499) : f.call(null, inst_17499));
var inst_17506__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17505__$1,inst_17496);
var state_17544__$1 = (function (){var statearr_17574 = state_17544;
(statearr_17574[(11)] = inst_17505__$1);

(statearr_17574[(13)] = inst_17506__$1);

return statearr_17574;
})();
if(inst_17506__$1){
var statearr_17575_18735 = state_17544__$1;
(statearr_17575_18735[(1)] = (8));

} else {
var statearr_17579_18736 = state_17544__$1;
(statearr_17579_18736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (14))){
var inst_17499 = (state_17544[(9)]);
var inst_17505 = (state_17544[(11)]);
var inst_17519 = (state_17544[(2)]);
var inst_17520 = [];
var inst_17521 = inst_17520.push(inst_17499);
var inst_17495 = inst_17520;
var inst_17496 = inst_17505;
var state_17544__$1 = (function (){var statearr_17580 = state_17544;
(statearr_17580[(7)] = inst_17495);

(statearr_17580[(14)] = inst_17521);

(statearr_17580[(15)] = inst_17519);

(statearr_17580[(8)] = inst_17496);

return statearr_17580;
})();
var statearr_17581_18737 = state_17544__$1;
(statearr_17581_18737[(2)] = null);

(statearr_17581_18737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (16))){
var state_17544__$1 = state_17544;
var statearr_17582_18738 = state_17544__$1;
(statearr_17582_18738[(2)] = null);

(statearr_17582_18738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (10))){
var inst_17512 = (state_17544[(2)]);
var state_17544__$1 = state_17544;
if(cljs.core.truth_(inst_17512)){
var statearr_17583_18739 = state_17544__$1;
(statearr_17583_18739[(1)] = (11));

} else {
var statearr_17584_18740 = state_17544__$1;
(statearr_17584_18740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (18))){
var inst_17534 = (state_17544[(2)]);
var state_17544__$1 = state_17544;
var statearr_17585_18741 = state_17544__$1;
(statearr_17585_18741[(2)] = inst_17534);

(statearr_17585_18741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17545 === (8))){
var inst_17506 = (state_17544[(13)]);
var state_17544__$1 = state_17544;
var statearr_17586_18743 = state_17544__$1;
(statearr_17586_18743[(2)] = inst_17506);

(statearr_17586_18743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13236__auto__ = null;
var cljs$core$async$state_machine__13236__auto____0 = (function (){
var statearr_17590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17590[(0)] = cljs$core$async$state_machine__13236__auto__);

(statearr_17590[(1)] = (1));

return statearr_17590;
});
var cljs$core$async$state_machine__13236__auto____1 = (function (state_17544){
while(true){
var ret_value__13237__auto__ = (function (){try{while(true){
var result__13238__auto__ = switch__13235__auto__(state_17544);
if(cljs.core.keyword_identical_QMARK_(result__13238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13238__auto__;
}
break;
}
}catch (e17591){var ex__13239__auto__ = e17591;
var statearr_17592_18744 = state_17544;
(statearr_17592_18744[(2)] = ex__13239__auto__);


if(cljs.core.seq((state_17544[(4)]))){
var statearr_17593_18745 = state_17544;
(statearr_17593_18745[(1)] = cljs.core.first((state_17544[(4)])));

} else {
throw ex__13239__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18746 = state_17544;
state_17544 = G__18746;
continue;
} else {
return ret_value__13237__auto__;
}
break;
}
});
cljs$core$async$state_machine__13236__auto__ = function(state_17544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13236__auto____1.call(this,state_17544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13236__auto____0;
cljs$core$async$state_machine__13236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13236__auto____1;
return cljs$core$async$state_machine__13236__auto__;
})()
})();
var state__14269__auto__ = (function (){var statearr_17594 = f__14268__auto__();
(statearr_17594[(6)] = c__14267__auto___18717);

return statearr_17594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
