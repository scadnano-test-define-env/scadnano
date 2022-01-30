define(['dart_sdk'], (function load__packages__react__src__ddc_emulated_function_name_bug(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var prop_validator = Object.create(dart.library);
  var ddc_emulated_function_name_bug = Object.create(dart.library);
  var synthetic_data_transfer = Object.create(dart.library);
  var synthetic_event_wrappers = Object.create(dart.library);
  var $noSuchMethod = dartx.noSuchMethod;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    VoidToboolL: () => (T.VoidToboolL = dart.constFn(dart.fnType(T.boolL(), [])))(),
    SyntheticDataTransferL: () => (T.SyntheticDataTransferL = dart.constFn(dart.legacy(synthetic_data_transfer.SyntheticDataTransfer)))(),
    DataTransferL: () => (T.DataTransferL = dart.constFn(dart.legacy(html.DataTransfer)))(),
    FileL: () => (T.FileL = dart.constFn(dart.legacy(html.File)))(),
    JSArrayOfFileL: () => (T.JSArrayOfFileL = dart.constFn(_interceptors.JSArray$(T.FileL())))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    JSArrayOfStringL: () => (T.JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(T.StringL())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _internal.Symbol.new('call'));
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:react/src/prop_validator.dart",
    "package:react/src/ddc_emulated_function_name_bug.dart",
    "package:react/src/react_client/synthetic_data_transfer.dart"
  ];
  var propName$ = dart.privateName(prop_validator, "PropValidatorInfo.propName");
  var componentName$ = dart.privateName(prop_validator, "PropValidatorInfo.componentName");
  var location$ = dart.privateName(prop_validator, "PropValidatorInfo.location");
  var propFullName$ = dart.privateName(prop_validator, "PropValidatorInfo.propFullName");
  prop_validator.PropValidatorInfo = class PropValidatorInfo extends core.Object {
    get propName() {
      return this[propName$];
    }
    set propName(value) {
      super.propName = value;
    }
    get componentName() {
      return this[componentName$];
    }
    set componentName(value) {
      super.componentName = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get propFullName() {
      return this[propFullName$];
    }
    set propFullName(value) {
      super.propFullName = value;
    }
  };
  (prop_validator.PropValidatorInfo.new = function(opts) {
    let propName = opts && 'propName' in opts ? opts.propName : null;
    let componentName = opts && 'componentName' in opts ? opts.componentName : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let propFullName = opts && 'propFullName' in opts ? opts.propFullName : null;
    this[propName$] = propName;
    this[componentName$] = componentName;
    this[location$] = location;
    this[propFullName$] = propFullName;
    ;
  }).prototype = prop_validator.PropValidatorInfo.prototype;
  dart.addTypeTests(prop_validator.PropValidatorInfo);
  dart.addTypeCaches(prop_validator.PropValidatorInfo);
  dart.setLibraryUri(prop_validator.PropValidatorInfo, I[0]);
  dart.setFieldSignature(prop_validator.PropValidatorInfo, () => ({
    __proto__: dart.getFields(prop_validator.PropValidatorInfo.__proto__),
    propName: dart.finalFieldType(dart.legacy(core.String)),
    componentName: dart.finalFieldType(dart.legacy(core.String)),
    location: dart.finalFieldType(dart.legacy(core.String)),
    propFullName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _name = dart.privateName(ddc_emulated_function_name_bug, "_name");
  ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty = class _NsmEmulatedFunctionWithNameProperty extends core.Object {
    call() {
      return this.noSuchMethod(new core._Invocation.method(C[0] || CT.C0, null, []));
    }
    noSuchMethod(i) {
    }
    get name() {
      return this[_name];
    }
    set name(value) {
      return this[_name] = value;
    }
  };
  (ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.new = function() {
    this[_name] = null;
    ;
  }).prototype = ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.prototype;
  dart.addTypeTests(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty);
  dart.addTypeCaches(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty);
  dart.setMethodSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getMethods(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    call: dart.fnType(dart.void, []),
    noSuchMethod: dart.fnType(dart.dynamic, [dart.legacy(core.Invocation)]),
    [$noSuchMethod]: dart.fnType(dart.dynamic, [dart.legacy(core.Invocation)])
  }));
  dart.setGetterSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getGetters(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    name: dart.legacy(core.String)
  }));
  dart.setSetterSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getSetters(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    name: dart.legacy(core.String)
  }));
  dart.setLibraryUri(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, I[1]);
  dart.setFieldSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getFields(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    [_name]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, ['noSuchMethod']);
  ddc_emulated_function_name_bug.patchName = function patchName(object) {
    let current = object;
    while ((current = dart.global.Object.getPrototypeOf(current)) != null) {
      let nameDescriptor = dart.global.Object.getOwnPropertyDescriptor(current, "name");
      if (nameDescriptor != null) {
        dart.global.Object.defineProperty(object, "name", nameDescriptor);
        return;
      }
    }
  };
  dart.defineLazy(ddc_emulated_function_name_bug, {
    /*ddc_emulated_function_name_bug.isBugPresent*/get isBugPresent() {
      return dart.fn(() => {
        let testObject = new ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.new();
        try {
          testObject.name = "test value";
        } catch (e) {
          let _ = dart.getThrown(e);
          return true;
        }
        try {
          return testObject.name !== "test value";
        } catch (e$) {
          let _ = dart.getThrown(e$);
          return true;
        }
      }, T.VoidToboolL())();
    }
  }, true);
  var dropEffect$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.dropEffect");
  var effectAllowed$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.effectAllowed");
  var files$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.files");
  var types$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.types");
  synthetic_data_transfer.SyntheticDataTransfer = class SyntheticDataTransfer extends core.Object {
    get dropEffect() {
      return this[dropEffect$];
    }
    set dropEffect(value) {
      super.dropEffect = value;
    }
    get effectAllowed() {
      return this[effectAllowed$];
    }
    set effectAllowed(value) {
      super.effectAllowed = value;
    }
    get files() {
      return this[files$];
    }
    set files(value) {
      super.files = value;
    }
    get types() {
      return this[types$];
    }
    set types(value) {
      super.types = value;
    }
  };
  (synthetic_data_transfer.SyntheticDataTransfer.new = function(dropEffect, effectAllowed, files, types) {
    this[dropEffect$] = dropEffect;
    this[effectAllowed$] = effectAllowed;
    this[files$] = files;
    this[types$] = types;
    ;
  }).prototype = synthetic_data_transfer.SyntheticDataTransfer.prototype;
  dart.addTypeTests(synthetic_data_transfer.SyntheticDataTransfer);
  dart.addTypeCaches(synthetic_data_transfer.SyntheticDataTransfer);
  dart.setLibraryUri(synthetic_data_transfer.SyntheticDataTransfer, I[2]);
  dart.setFieldSignature(synthetic_data_transfer.SyntheticDataTransfer, () => ({
    __proto__: dart.getFields(synthetic_data_transfer.SyntheticDataTransfer.__proto__),
    dropEffect: dart.finalFieldType(dart.legacy(core.String)),
    effectAllowed: dart.finalFieldType(dart.legacy(core.String)),
    files: dart.finalFieldType(dart.legacy(core.List)),
    types: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  synthetic_data_transfer.syntheticDataTransferFactory = function syntheticDataTransferFactory(dt) {
    if (dt == null) return null;
    if (T.SyntheticDataTransferL().is(dt)) return dt;
    let rawFiles = null;
    let rawTypes = null;
    let effectAllowed = null;
    let dropEffect = null;
    if (T.DataTransferL().is(dt)) {
      rawFiles = dt.files;
      rawTypes = dt.types;
      try {
        effectAllowed = dt.effectAllowed;
      } catch (e) {
        let _ = dart.getThrown(e);
        effectAllowed = "uninitialized";
      }
      try {
        dropEffect = dt.dropEffect;
      } catch (e$) {
        let _ = dart.getThrown(e$);
        dropEffect = "none";
      }
    } else {
      let castedDt = dart.legacy(dart.lazyJSType(() => dart.global.NonNativeDataTransfer, "NonNativeDataTransfer")).as(dt);
      rawFiles = castedDt.files;
      rawTypes = castedDt.types;
      try {
        effectAllowed = castedDt.effectAllowed;
      } catch (e$0) {
        let _ = dart.getThrown(e$0);
        effectAllowed = "uninitialized";
      }
      try {
        dropEffect = castedDt.dropEffect;
      } catch (e$1) {
        let _ = dart.getThrown(e$1);
        dropEffect = "none";
      }
    }
    let files = (() => {
      let t6 = T.JSArrayOfFileL().of([]);
      let t7 = rawFiles;
      if (t7 != null) for (let t9 of t7) {
        let t8 = T.FileL().as(t9);
        t6[$add](t8);
      }
      return t6;
    })();
    let types = (() => {
      let t10 = T.JSArrayOfStringL().of([]);
      let t11 = rawTypes;
      if (t11 != null) for (let t13 of t11) {
        let t12 = T.StringL().as(t13);
        t10[$add](t12);
      }
      return t10;
    })();
    return new synthetic_data_transfer.SyntheticDataTransfer.new(dropEffect, effectAllowed, files, types);
  };
  dart.trackLibraries("packages/react/src/ddc_emulated_function_name_bug", {
    "package:react/src/prop_validator.dart": prop_validator,
    "package:react/src/ddc_emulated_function_name_bug.dart": ddc_emulated_function_name_bug,
    "package:react/src/react_client/synthetic_data_transfer.dart": synthetic_data_transfer,
    "package:react/src/react_client/synthetic_event_wrappers.dart": synthetic_event_wrappers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["prop_validator.dart","ddc_emulated_function_name_bug.dart","react_client/synthetic_data_transfer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAGN;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;iBCLW;IAAI;;AAKE;IAAK;aAER;AAAU,2BAAQ,KAAK;;;;IALhC;;EAMT;;;;;;;;;;;;;;;;;;;;;;;gEAkDuB;AACjB,kBAAU,MAAM;AACpB,YAAQ,UAAU,kCAAgB,OAAO;AACnC,2BAAiB,4CAA0B,OAAO,EAAE;AAExD,UAAI,cAAc;AAC+B,QAA/C,kCAAgB,MAAM,EAAE,QAAQ,cAAc;AAC9C;;;EAGN;;MAtDW,2CAAY;YAAI,AAqBzB;AAlBI,yBAAiB;AAErB;AAK6B,UAA3B,AAAW,UAAD;;cACH;AACP,gBAAO;;AAGT;AAEE,gBAAO,AAAW,AAAK,WAAN;;cACV;AACP,gBAAO;;;;;;;;;;IChCI;;;;;;IAOA;;;;;;IAOF;;;;;;IAKQ;;;;;;;gEAEQ,YAAiB,eAAoB,OAAY;IAAjD;IAAiB;IAAoB;IAAY;;EAAM;;;;;;;;;;;+FAO1B;AACxD,QAAI,AAAG,EAAD,UAAU,MAAO;AAKvB,QAAO,8BAAH,EAAE,GAA2B,MAAO,GAAE;AAErC;AACA;AAEE;AACA;AAOP,QAAO,qBAAH,EAAE;AACe,MAAnB,WAAW,AAAG,EAAD;AACM,MAAnB,WAAW,AAAG,EAAD;AAEb;AAGkC,QAAhC,gBAAgB,AAAG,EAAD;;YACX;AACwB,QAA/B,gBAAgB;;AAElB;AAG4B,QAA1B,aAAa,AAAG,EAAD;;YACR;AACY,QAAnB,aAAa;;;AAMT,qBAAc,kGAAH,EAAE;AAEM,MAAzB,WAAW,AAAS,QAAD;AACM,MAAzB,WAAW,AAAS,QAAD;AAEnB;AAGwC,QAAtC,gBAAgB,AAAS,QAAD;;YACjB;AACwB,QAA/B,gBAAgB;;AAElB;AAGkC,QAAhC,aAAa,AAAS,QAAD;;YACd;AACY,QAAnB,aAAa;;;AAKX,gBAAc;;AAAK,uBAAQ;AAAR,sBAAJ;AAAI;;;;;AACnB,gBAAgB;;AAAK,wBAAQ;AAAR,uBAAJ;AAAI;;;;;AAE3B,UAAW,uDAAsB,UAAU,EAAE,aAAa,EAAE,KAAK,EAAE,KAAK;EAC1E","file":"ddc_emulated_function_name_bug.unsound.ddc.js"}');
  // Exports:
  return {
    src__prop_validator: prop_validator,
    src__ddc_emulated_function_name_bug: ddc_emulated_function_name_bug,
    src__react_client__synthetic_data_transfer: synthetic_data_transfer,
    src__react_client__synthetic_event_wrappers: synthetic_event_wrappers
  };
}));

//# sourceMappingURL=ddc_emulated_function_name_bug.unsound.ddc.js.map
