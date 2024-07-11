goog.provide("shadow.js");
shadow.js.files = {};
shadow.js.nativeProvides = {};
shadow.js.NODE_ENV = goog.define("shadow.js.NODE_ENV", "development");
shadow.js.requireStack = [];
shadow.js.exportCopy = function(module, other) {
  var copy = {};
  var exports = module["exports"];
  var $jscomp$loop$15 = {};
  for (var key in other) {
    $jscomp$loop$15.$jscomp$loop$prop$key$16 = key;
    $jscomp$loop$15: {
      if ($jscomp$loop$15.$jscomp$loop$prop$key$16 == "default" || $jscomp$loop$15.$jscomp$loop$prop$key$16 in exports || $jscomp$loop$15.$jscomp$loop$prop$key$16 in copy) {
        break $jscomp$loop$15;
      }
      copy[$jscomp$loop$15.$jscomp$loop$prop$key$16] = {enumerable:true, get:function($jscomp$loop$15) {
        return function() {
          return other[$jscomp$loop$15.$jscomp$loop$prop$key$16];
        };
      }($jscomp$loop$15)};
    }
    $jscomp$loop$15 = {$jscomp$loop$prop$key$16:$jscomp$loop$15.$jscomp$loop$prop$key$16};
  }
  Object.defineProperties(exports, copy);
};
shadow.js.jsRequire = function(name, opts) {
  var nativeObj = shadow.js.nativeProvides[name];
  if (nativeObj !== undefined) {
    return nativeObj;
  }
  try {
    if (goog.DEBUG) {
      if (name instanceof String && name.indexOf("/") != -1) {
        console.warn("Tried to dynamically require '" + name + "' from '" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + "'. This is not supported and may cause issues.");
      }
    }
    shadow.js.requireStack.push(name);
    var module = shadow.js.files[name];
    var moduleFn = shadow$provide[name];
    if (module === undefined) {
      if (moduleFn === undefined) {
        throw "Module not provided: " + name;
      }
      module = {};
      module["exports"] = {};
      shadow.js.files[name] = module;
    }
    if (moduleFn) {
      delete shadow$provide[name];
      try {
        moduleFn.call(module, goog.global, shadow.js.jsRequire, module, module["exports"]);
      } catch (e) {
        console.warn("shadow-cljs - failed to load", name);
        throw e;
      }
      if (opts) {
        var globals = opts["globals"];
        if (globals) {
          for (var i = 0; i < globals.length; i++) {
            window[globals[i]] = module["exports"];
          }
        }
      }
    }
  } finally {
    shadow.js.requireStack.pop();
  }
  return module["exports"];
};
shadow.js.jsRequire["cache"] = {};
shadow.js.jsRequire["resolve"] = function(name) {
  return name;
};
shadow.js.jsRequire["exportCopy"] = shadow.js.exportCopy;
shadow.js.jsRequire["esmDefault"] = function(mod) {
  return mod && mod["__esModule"] ? mod : {"default":mod};
};
shadow.js.modules = {};
shadow.js.require = function(name, opts) {
  return shadow.js.jsRequire(name, opts);
};

//# sourceMappingURL=shadow.js.js.map
