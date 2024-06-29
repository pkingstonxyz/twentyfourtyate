goog.provide('tfa.core');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
tfa.core.init = (function tfa$core$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello"], 0));
});
tfa.core.scene = (new module$node_modules$three$build$three_cjs.Scene());
tfa.core.camera = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((75),(window.innerWidth / window.innerHeight),0.1,(1000)));
tfa.core.renderer = (new module$node_modules$three$build$three_cjs.WebGLRenderer());
tfa.core.renderer.setSize(window.innerWidth,window.innerHeight);
var body_15537 = document.body;
body_15537.appendChild(tfa.core.renderer.domElement);
tfa.core.geometry = (new module$node_modules$three$build$three_cjs.BoxGeometry((1),(1),(1)));
tfa.core.material = (new module$node_modules$three$build$three_cjs.MeshBasicMaterial(({"color": (65280)})));
tfa.core.cube = (new module$node_modules$three$build$three_cjs.Mesh(tfa.core.geometry,tfa.core.material));
tfa.core.scene.add(tfa.core.cube);
(tfa.core.camera.position.z = (5));
tfa.core.draw = (function tfa$core$draw(){
return tfa.core.renderer.render(tfa.core.scene,tfa.core.camera);
});

//# sourceMappingURL=tfa.core.js.map
