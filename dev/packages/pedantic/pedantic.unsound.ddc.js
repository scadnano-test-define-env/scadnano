define(['dart_sdk'], (function load__packages__pedantic__pedantic(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var pedantic = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  pedantic.unawaited = function unawaited(future) {
  };
  dart.trackLibraries("packages/pedantic/pedantic", {
    "package:pedantic/pedantic.dart": pedantic
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pedantic.dart"],"names":[],"mappings":";;;;;;;;;;0CAsB6B;EAAS","file":"pedantic.unsound.ddc.js"}');
  // Exports:
  return {
    pedantic: pedantic
  };
}));

//# sourceMappingURL=pedantic.unsound.ddc.js.map
