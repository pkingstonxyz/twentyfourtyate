function Model2$$module$js$model2(props) {
  /** @const */ 
  var $jscomp$destructuring$var0 = (0,shadow.js.shim.module$$react_three$drei.useGLTF)("/assets/models/2.glb");
  /** @const */ 
  var nodes = $jscomp$destructuring$var0.nodes;
  /** @const */ 
  var materials = $jscomp$destructuring$var0.materials;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return React.createElement("group", _extends({}, props, {dispose:null}), React.createElement("group", {position:[0, -0.438, 0], scale:[0.5, 0.064, 0.5]}, React.createElement("mesh", {castShadow:true, receiveShadow:true, geometry:nodes.Cube003.geometry, material:materials["bun mat.001"]}), React.createElement("mesh", {castShadow:true, receiveShadow:true, geometry:nodes.Cube003_1.geometry, material:materials["bun mat"]})));
}
shadow.js.shim.module$$react_three$drei.useGLTF.preload("/assets/models/2.glb");
/** @const */ 
var module$js$model2 = {};
/** @const */ 
module$js$model2.Model2 = Model2$$module$js$model2;

$CLJS.module$js$model2=module$js$model2;
//# sourceMappingURL=module$js$model2.js.map
