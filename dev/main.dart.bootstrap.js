/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var _currentDirectory = (function () {
  var _url;
  var lines = new Error().stack.split('\n');
  function lookupUrl() {
    if (lines.length > 2) {
      var match = lines[1].match(/^\s+at (.+):\d+:\d+$/);
      // Chrome.
      if (match) return match[1];
      // Chrome nested eval case.
      match = lines[1].match(/^\s+at eval [(](.+):\d+:\d+[)]$/);
      if (match) return match[1];
      // Edge.
      match = lines[1].match(/^\s+at.+\((.+):\d+:\d+\)$/);
      if (match) return match[1];
      // Firefox.
      match = lines[0].match(/[<][@](.+):\d+:\d+$/)
      if (match) return match[1];
    }
    // Safari.
    return lines[0].match(/(.+):\d+:\d+$/)[1];
  }
  _url = lookupUrl();
  var lastSlash = _url.lastIndexOf('/');
  if (lastSlash == -1) return _url;
  var currentDirectory = _url.substring(0, lastSlash + 1);
  return currentDirectory;
})();

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/build_web_compilers/src/dev_compiler/dart_sdk",
 "packages/archive/archive": "packages/archive/archive.unsound.ddc",
 "packages/archive/src/archive": "packages/archive/src/archive.unsound.ddc",
 "packages/built_collection/built_collection": "packages/built_collection/built_collection.unsound.ddc",
 "packages/built_redux/built_redux": "packages/built_redux/built_redux.unsound.ddc",
 "packages/built_redux/src/action": "packages/built_redux/src/action.unsound.ddc",
 "packages/built_value/built_value": "packages/built_value/built_value.unsound.ddc",
 "packages/built_value/json_object": "packages/built_value/json_object.unsound.ddc",
 "packages/built_value/serializer": "packages/built_value/serializer.unsound.ddc",
 "packages/built_value/standard_json_plugin": "packages/built_value/standard_json_plugin.unsound.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.unsound.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.unsound.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.unsound.ddc",
 "packages/codemirror/codemirror": "packages/codemirror/codemirror.unsound.ddc",
 "packages/codemirror/hints": "packages/codemirror/hints.unsound.ddc",
 "packages/codemirror/src/js_utils": "packages/codemirror/src/js_utils.unsound.ddc",
 "packages/collection/collection": "packages/collection/collection.unsound.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.unsound.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.unsound.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.unsound.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.unsound.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.unsound.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.unsound.ddc",
 "packages/color/color": "packages/color/color.unsound.ddc",
 "packages/crypto/crypto": "packages/crypto/crypto.unsound.ddc",
 "packages/dialog/dialog": "packages/dialog/dialog.unsound.ddc",
 "packages/dialog/dialogs/alert": "packages/dialog/dialogs/alert.unsound.ddc",
 "packages/dialog/dialogs/confirm": "packages/dialog/dialogs/confirm.unsound.ddc",
 "packages/dialog/dialogs/modal": "packages/dialog/dialogs/modal.unsound.ddc",
 "packages/dialog/dialogs/prompt": "packages/dialog/dialogs/prompt.unsound.ddc",
 "packages/dialog/src/dialog_base": "packages/dialog/src/dialog_base.unsound.ddc",
 "packages/dnd/dnd": "packages/dnd/dnd.unsound.ddc",
 "packages/fixnum/fixnum": "packages/fixnum/fixnum.unsound.ddc",
 "packages/http/http": "packages/http/http.unsound.ddc",
 "packages/http/src/base_client": "packages/http/src/base_client.unsound.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.unsound.ddc",
 "packages/js/js": "packages/js/js.unsound.ddc",
 "packages/js/js_util": "packages/js/js_util.unsound.ddc",
 "packages/logging/logging": "packages/logging/logging.unsound.ddc",
 "packages/memoize/function_defs": "packages/memoize/function_defs.unsound.ddc",
 "packages/memoize/memoize": "packages/memoize/memoize.unsound.ddc",
 "packages/meta/meta": "packages/meta/meta.unsound.ddc",
 "packages/meta/meta_meta": "packages/meta/meta_meta.unsound.ddc",
 "packages/over_react/component_base": "packages/over_react/component_base.unsound.ddc",
 "packages/over_react/over_react_redux": "packages/over_react/over_react_redux.unsound.ddc",
 "packages/over_react/src/component/resize_sensor_constants": "packages/over_react/src/component/resize_sensor_constants.unsound.ddc",
 "packages/over_react/src/component_declaration/annotations": "packages/over_react/src/component_declaration/annotations.unsound.ddc",
 "packages/over_react/src/over_react_redux/devtools/middleware": "packages/over_react/src/over_react_redux/devtools/middleware.unsound.ddc",
 "packages/path/path": "packages/path/path.unsound.ddc",
 "packages/pedantic/pedantic": "packages/pedantic/pedantic.unsound.ddc",
 "packages/petitparser/context": "packages/petitparser/context.unsound.ddc",
 "packages/petitparser/core": "packages/petitparser/core.unsound.ddc",
 "packages/petitparser/definition": "packages/petitparser/definition.unsound.ddc",
 "packages/petitparser/expression": "packages/petitparser/expression.unsound.ddc",
 "packages/petitparser/matcher": "packages/petitparser/matcher.unsound.ddc",
 "packages/petitparser/parser": "packages/petitparser/parser.unsound.ddc",
 "packages/petitparser/petitparser": "packages/petitparser/petitparser.unsound.ddc",
 "packages/petitparser/src/context/context": "packages/petitparser/src/context/context.unsound.ddc",
 "packages/petitparser/src/definition/grammar": "packages/petitparser/src/definition/grammar.unsound.ddc",
 "packages/petitparser/src/expression/builder": "packages/petitparser/src/expression/builder.unsound.ddc",
 "packages/petitparser/src/matcher/accept": "packages/petitparser/src/matcher/accept.unsound.ddc",
 "packages/petitparser/src/parser/action/cast": "packages/petitparser/src/parser/action/cast.unsound.ddc",
 "packages/petitparser/src/parser/action/continuation": "packages/petitparser/src/parser/action/continuation.unsound.ddc",
 "packages/petitparser/src/parser/action/trimming": "packages/petitparser/src/parser/action/trimming.unsound.ddc",
 "packages/petitparser/src/parser/combinator/settable": "packages/petitparser/src/parser/combinator/settable.unsound.ddc",
 "packages/petitparser/src/parser/repeater/separated_by": "packages/petitparser/src/parser/repeater/separated_by.unsound.ddc",
 "packages/platform_detect/platform_detect": "packages/platform_detect/platform_detect.unsound.ddc",
 "packages/platform_detect/src/browser": "packages/platform_detect/src/browser.unsound.ddc",
 "packages/pub_semver/pub_semver": "packages/pub_semver/pub_semver.unsound.ddc",
 "packages/quiver/collection": "packages/quiver/collection.unsound.ddc",
 "packages/quiver/core": "packages/quiver/core.unsound.ddc",
 "packages/quiver/iterables": "packages/quiver/iterables.unsound.ddc",
 "packages/quiver/src/collection/bimap": "packages/quiver/src/collection/bimap.unsound.ddc",
 "packages/quiver/src/iterables/concat": "packages/quiver/src/iterables/concat.unsound.ddc",
 "packages/react/hooks": "packages/react/hooks.unsound.ddc",
 "packages/react/react_client/zone": "packages/react/react_client/zone.unsound.ddc",
 "packages/react/react_dom": "packages/react/react_dom.unsound.ddc",
 "packages/react/src/ddc_emulated_function_name_bug": "packages/react/src/ddc_emulated_function_name_bug.unsound.ddc",
 "packages/redux/redux": "packages/redux/redux.unsound.ddc",
 "packages/redux_dev_tools/redux_dev_tools": "packages/redux_dev_tools/redux_dev_tools.unsound.ddc",
 "packages/scadnano/scadnano": "packages/scadnano/scadnano.unsound.ddc",
 "packages/smart_dialogs/smart_dialogs": "packages/smart_dialogs/smart_dialogs.unsound.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.unsound.ddc",
 "packages/spreadsheet_decoder/spreadsheet_decoder": "packages/spreadsheet_decoder/spreadsheet_decoder.unsound.ddc",
 "packages/string_scanner/src/eager_span_scanner": "packages/string_scanner/src/eager_span_scanner.unsound.ddc",
 "packages/term_glyph/src/generated/ascii_glyph_set": "packages/term_glyph/src/generated/ascii_glyph_set.unsound.ddc",
 "packages/tuple/tuple": "packages/tuple/tuple.unsound.ddc",
 "packages/typed_data/src/typed_buffer": "packages/typed_data/src/typed_buffer.unsound.ddc",
 "packages/typed_data/src/typed_queue": "packages/typed_data/src/typed_queue.unsound.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.unsound.ddc",
 "packages/w_common/disposable": "packages/w_common/disposable.unsound.ddc",
 "packages/w_common/src/common/disposable": "packages/w_common/src/common/disposable.unsound.ddc",
 "packages/w_flux/src/action": "packages/w_flux/src/action.unsound.ddc",
 "packages/w_flux/src/component_client": "packages/w_flux/src/component_client.unsound.ddc",
 "packages/xml/src/xml/builder": "packages/xml/src/xml/builder.unsound.ddc",
 "packages/xml/src/xml/entities/default_mapping": "packages/xml/src/xml/entities/default_mapping.unsound.ddc",
 "web/main": "main.unsound.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     appDigests: _currentDirectory + 'main.digests',
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.unsound.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 12);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.unsound.ddc')) {
    return moduleMap.name + '.unsound.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("main.dart.bootstrap", ["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk.dart.nonNullAsserts(false);
  dart_sdk.dart.nativeNonNullAsserts(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
  var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  /* MAIN_EXTENSION_MARKER */
  (app.web__main || app.main).main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        // Special handling for the multi-root scheme uris. We need to strip
        // out the scheme and the top level directory, to match the source path
        // that chrome sees.
        if (childName.startsWith('org-dartlang-app:///')) {
          childName = childName.substring('org-dartlang-app:///'.length);
          var firstSlash = childName.indexOf('/');
          if (firstSlash == -1) return false;
          childName = childName.substring(firstSlash + 1);
        }
        if (childName === "main.dart") {
          // Clear static caches.
          dart_sdk.dart.hotRestart();
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("main.dart.bootstrap", {
    "main.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
