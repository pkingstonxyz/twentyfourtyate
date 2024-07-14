function Model2$$module$js$model2(props) {
  /** @const */ 
  var $jscomp$destructuring$var0 = (0,shadow.js.shim.module$$react_three$drei.useGLTF)("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/2.glb");
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
  return shadow.js.shim.module$react.createElement("group", _extends({}, props, {dispose:null}), shadow.js.shim.module$react.createElement("group", {position:[0, -0.438, 0], scale:[0.5, 0.064, 0.5]}, shadow.js.shim.module$react.createElement("mesh", {castShadow:true, receiveShadow:true, geometry:nodes.Cube003.geometry,}), shadow.js.shim.module$react.createElement("mesh", {castShadow:true, receiveShadow:true, geometry:nodes.Cube003_1.geometry,})));
}
shadow.js.shim.module$$react_three$drei.useGLTF.preload("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/2.glb");
/** @const */ 
var module$js$model2 = {};
/** @const */ 
module$js$model2.Model2 = Model2$$module$js$model2;

$CLJS.module$js$model2=module$js$model2;
//# sourceMappingURL=module$js$model2.js.map
