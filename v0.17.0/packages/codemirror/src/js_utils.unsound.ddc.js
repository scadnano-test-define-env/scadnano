define(['dart_sdk'], (function load__packages__codemirror__src__js_utils(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var js_utils = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    dynamicAnddynamicAnddynamic__ToNull: () => (T$.dynamicAnddynamicAnddynamic__ToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))(),
    JsFunctionN: () => (T$.JsFunctionN = dart.constFn(dart.nullable(js.JsFunction)))(),
    dynamicAnddynamicAnddynamicToNull: () => (T$.dynamicAnddynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic, dart.dynamic])))(),
    dynamicAnddynamicToNull: () => (T$.dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))(),
    dynamicToNull: () => (T$.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    MapN: () => (T$.MapN = dart.constFn(dart.nullable(core.Map)))(),
    ListN: () => (T$.ListN = dart.constFn(dart.nullable(core.List)))(),
    JsObjectN: () => (T$.JsObjectN = dart.constFn(dart.nullable(js.JsObject)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/codemirror/src/js_utils.dart",
    "package:codemirror/src/js_utils.dart"
  ];
  var cvtEvent$ = dart.privateName(js_utils, "JsEventListener.cvtEvent");
  var argCount$ = dart.privateName(js_utils, "JsEventListener.argCount");
  var _controller = dart.privateName(js_utils, "_controller");
  var _callback = dart.privateName(js_utils, "_callback");
  var _proxy$ = dart.privateName(js_utils, "_proxy");
  var _name$ = dart.privateName(js_utils, "_name");
  const _is_JsEventListener_default = Symbol('_is_JsEventListener_default');
  js_utils.JsEventListener$ = dart.generic(T => {
    var TN = () => (TN = dart.constFn(dart.nullable(T)))();
    var StreamControllerOfTN = () => (StreamControllerOfTN = dart.constFn(async.StreamController$(TN())))();
    class JsEventListener extends core.Object {
      get cvtEvent() {
        return this[cvtEvent$];
      }
      set cvtEvent(value) {
        super.cvtEvent = value;
      }
      get argCount() {
        return this[argCount$];
      }
      set argCount(value) {
        super.argCount = value;
      }
      get stream() {
        let controller = this[_controller];
        if (controller == null) {
          controller = StreamControllerOfTN().broadcast({onListen: dart.fn(() => {
              if (this.argCount === 4) {
                this[_callback] = T$.JsFunctionN().as(dart.nullCheck(this[_proxy$]).callMethod("on", [this[_name$], dart.fn((obj, a, b, c) => {
                    dart.nullCheck(this[_controller]).add(TN().as(this.cvtEvent == null ? a : dart.dcall(dart.nullCheck(this.cvtEvent), [a, b, c])));
                  }, T$.dynamicAnddynamicAnddynamic__ToNull())]));
              } else if (this.argCount === 3) {
                this[_callback] = T$.JsFunctionN().as(dart.nullCheck(this[_proxy$]).callMethod("on", [this[_name$], dart.fn((obj, a, b) => {
                    dart.nullCheck(this[_controller]).add(TN().as(this.cvtEvent == null ? a : dart.dcall(dart.nullCheck(this.cvtEvent), [a, b])));
                  }, T$.dynamicAnddynamicAnddynamicToNull())]));
              } else if (this.argCount === 2) {
                this[_callback] = T$.JsFunctionN().as(dart.nullCheck(this[_proxy$]).callMethod("on", [this[_name$], dart.fn((obj, a) => {
                    dart.nullCheck(this[_controller]).add(TN().as(this.cvtEvent == null ? a : dart.dcall(dart.nullCheck(this.cvtEvent), [a])));
                  }, T$.dynamicAnddynamicToNull())]));
              } else {
                this[_callback] = T$.JsFunctionN().as(dart.nullCheck(this[_proxy$]).callMethod("on", [this[_name$], dart.fn(obj => {
                    dart.nullCheck(this[_controller]).add(TN().as(this.cvtEvent == null ? null : dart.dcall(dart.nullCheck(this.cvtEvent), [obj])));
                  }, T$.dynamicToNull())]));
              }
            }, T$.VoidTovoid()), onCancel: dart.fn(() => {
              dart.nullCheck(this[_proxy$]).callMethod("off", [this[_name$], this[_callback]]);
              this[_callback] = null;
            }, T$.VoidTovoid()), sync: true});
          this[_controller] = controller;
        }
        return controller.stream;
      }
      dispose() {
        let controller = this[_controller];
        if (controller == null) return async.Future.value();
        return controller.close();
      }
    }
    (JsEventListener.new = function(_proxy, _name, opts) {
      if (_name == null) dart.nullFailed(I[0], 42, 10, "_name");
      let cvtEvent = opts && 'cvtEvent' in opts ? opts.cvtEvent : null;
      let argCount = opts && 'argCount' in opts ? opts.argCount : 1;
      if (argCount == null) dart.nullFailed(I[0], 44, 10, "argCount");
      this[_controller] = null;
      this[_callback] = null;
      this[_proxy$] = _proxy;
      this[_name$] = _name;
      this[cvtEvent$] = cvtEvent;
      this[argCount$] = argCount;
      ;
    }).prototype = JsEventListener.prototype;
    dart.addTypeTests(JsEventListener);
    JsEventListener.prototype[_is_JsEventListener_default] = true;
    dart.addTypeCaches(JsEventListener);
    dart.setMethodSignature(JsEventListener, () => ({
      __proto__: dart.getMethods(JsEventListener.__proto__),
      dispose: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(JsEventListener, () => ({
      __proto__: dart.getGetters(JsEventListener.__proto__),
      stream: async.Stream$(dart.nullable(T))
    }));
    dart.setLibraryUri(JsEventListener, I[1]);
    dart.setFieldSignature(JsEventListener, () => ({
      __proto__: dart.getFields(JsEventListener.__proto__),
      [_proxy$]: dart.finalFieldType(dart.nullable(js.JsObject)),
      [_name$]: dart.finalFieldType(core.String),
      cvtEvent: dart.finalFieldType(dart.nullable(core.Function)),
      argCount: dart.finalFieldType(core.int),
      [_controller]: dart.fieldType(dart.nullable(async.StreamController$(dart.nullable(T)))),
      [_callback]: dart.fieldType(dart.nullable(js.JsFunction))
    }));
    return JsEventListener;
  });
  js_utils.JsEventListener = js_utils.JsEventListener$();
  dart.addTypeTests(js_utils.JsEventListener, _is_JsEventListener_default);
  js_utils.jsify = function jsify(object) {
    return js.JsObject.jsify(core.Object.as(object));
  };
  js_utils.mapify = function mapify(obj) {
    if (obj == null) return null;
    return T$.MapN().as(convert.jsonDecode(core.String.as(dart.nullCheck(js_utils._jsJSON).callMethod("stringify", [obj]))));
  };
  js_utils.keys = function keys(obj) {
    return T$.ListN().as(dart.nullCheck(js_utils._Object).callMethod("keys", [obj]));
  };
  dart.defineLazy(js_utils, {
    /*js_utils._jsJSON*/get _jsJSON() {
      return T$.JsObjectN().as(js.context._get("JSON"));
    },
    /*js_utils._Object*/get _Object() {
      return T$.JsObjectN().as(js.context._get("Object"));
    }
  }, false);
  dart.trackLibraries("packages/codemirror/src/js_utils", {
    "package:codemirror/src/js_utils.dart": js_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAiCkB;;;;;;MACN;;;;;;;AAaJ,yBAAa;AACjB,YAAI,AAAW,UAAD;AAqCG,UApCf,aAA8B,4CAChB;AACR,kBAAI,AAAS,kBAAG;AAMZ,kCALF,oBAAkB,AAAE,eAAR,0BAAmB,MAAM,CACnC,cACA,SAAC,KAAK,GAAG,GAAG;AACiD,oBAAhD,AAAE,eAAb,uBAAkC,QAAjB,AAAS,wBAAU,CAAC,GAAY,WAAD,eAAR,iBAAU,CAAC,EAAE,CAAC,EAAE,CAAC;;oBAGxD,KAAI,AAAS,kBAAG;AAMnB,kCALF,oBAAkB,AAAE,eAAR,0BAAmB,MAAM,CACnC,cACA,SAAC,KAAK,GAAG;AACiD,oBAA7C,AAAE,eAAb,uBAAkC,QAAjB,AAAS,wBAAU,CAAC,GAAY,WAAD,eAAR,iBAAU,CAAC,EAAE,CAAC;;oBAGrD,KAAI,AAAS,kBAAG;AAMnB,kCALF,oBAAkB,AAAE,eAAR,0BAAmB,MAAM,CACnC,cACA,SAAC,KAAK;AACiD,oBAA1C,AAAE,eAAb,uBAAkC,QAAjB,AAAS,wBAAU,CAAC,GAAY,WAAD,eAAR,iBAAU,CAAC;;;AASrD,kCALF,oBAAkB,AAAE,eAAR,0BAAmB,MAAM,CACnC,cACA,QAAC;AAC2D,oBAA/C,AAAE,eAAb,uBAAkC,QAAjB,AAAS,wBAAU,OAAgB,WAAD,eAAR,iBAAU,GAAG;;;2CAKtD;AACqC,cAAvC,AAAE,eAAR,0BAAmB,OAAO,CAAC,cAAO;AAClB,cAAhB,kBAAY;uCAER;AACc,UAAxB,oBAAc,UAAU;;AAE1B,cAAO,AAAW,WAAD;MACnB;;AAGQ,yBAAa;AACnB,YAAI,AAAW,UAAD,UAAU,MAAc;AACtC,cAAO,AAAW,WAAD;MACnB;;oCAvDO;UACA;UACA;UACA;;MAPe;MACV;MAGL;MACA;MACA;MACA;;IACL;;;;;;;;;;;;;;;;;;;;;;;;;;kCA7BW;AAAW,UAAS,kCAAM,MAAM;EAAC;oCAG1B;AACpB,QAAI,AAAI,GAAD,UAAU,MAAO;AACxB,wBAAO,kCAAkB,AAAE,eAAT,6BAAoB,aAAa,CAAC,GAAG;EACzD;gCAGqB;AAAQ,yBAAO,AAAE,eAAT,6BAAoB,QAAQ,CAAC,GAAG;EAAE;;MAb/C,gBAAO;+BAAG,AAAO,gBAAC;;MAClB,gBAAO;+BAAG,AAAO,gBAAC","file":"js_utils.unsound.ddc.js"}');
  // Exports:
  return {
    src__js_utils: js_utils
  };
}));

//# sourceMappingURL=js_utils.unsound.ddc.js.map
