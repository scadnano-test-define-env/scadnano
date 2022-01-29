define(['dart_sdk', 'packages/scadnano/scadnano'], (function load__web__main(dart_sdk, packages__scadnano__scadnano) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__scadnano__scadnano.src__app;
  var main = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    app.app = new app.App.new();
    app.app.start();
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;AAGa,IAAX,UAAM;AACK,IAAX,AAAI;EACN","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
