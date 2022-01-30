define(['dart_sdk', 'packages/codemirror/codemirror', 'packages/codemirror/src/js_utils'], (function load__packages__codemirror__hints(dart_sdk, packages__codemirror__codemirror, packages__codemirror__src__js_utils) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const codemirror = packages__codemirror__codemirror.codemirror;
  const js_utils = packages__codemirror__src__js_utils.src__js_utils;
  var hints = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JsObjectN: () => (T.JsObjectN = dart.constFn(dart.nullable(js.JsObject)))(),
    dynamicAnddynamicAnddynamic__Todynamic: () => (T.dynamicAnddynamicAnddynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.dynamic, dart.dynamic])))(),
    dynamicAnddynamicAnddynamic__ToJsObjectN: () => (T.dynamicAnddynamicAnddynamic__ToJsObjectN = dart.constFn(dart.fnType(T.JsObjectN(), [dart.dynamic, dart.dynamic, dart.dynamic], [dart.dynamic])))(),
    JSArrayOfJsObjectN: () => (T.JSArrayOfJsObjectN = dart.constFn(_interceptors.JSArray$(T.JsObjectN())))(),
    HintResultsN: () => (T.HintResultsN = dart.constFn(dart.nullable(hints.HintResults)))(),
    HintResultsNToNull: () => (T.HintResultsNToNull = dart.constFn(dart.fnType(core.Null, [T.HintResultsN()])))(),
    dynamicAnddynamicAnddynamic__ToNull: () => (T.dynamicAnddynamicAnddynamic__ToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic, dart.dynamic], [dart.dynamic])))(),
    IdentityMapOfString$JsObjectN: () => (T.IdentityMapOfString$JsObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.JsObjectN())))(),
    MapOfString$JsObjectN: () => (T.MapOfString$JsObjectN = dart.constFn(core.Map$(core.String, T.JsObjectN())))(),
    JSArrayOfJsObject: () => (T.JSArrayOfJsObject = dart.constFn(_interceptors.JSArray$(js.JsObject)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    dynamicAnddynamicToNull: () => (T.dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    dynamicAnddynamicAnddynamicToNull: () => (T.dynamicAnddynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic, dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(hints.Hints._showHint, T.dynamicAnddynamicAnddynamic__Todynamic());
    }
  }, false);
  var C = [void 0];
  var I = [
    "org-dartlang-app:///packages/codemirror/hints.dart",
    "package:codemirror/hints.dart"
  ];
  hints.Hints = class Hints extends core.Object {
    static get _cm() {
      return T.JsObjectN().as(js.context._get("CodeMirror"));
    }
    static _init() {
      if (dart.test(hints.Hints._inited)) return;
      hints.Hints._inited = true;
      dart.nullCheck(hints.Hints._cm)._set("showHint", js.JsFunction.withThis(C[0] || CT.C0));
      dart.dsend(dart.nullCheck(hints.Hints._cm)._get("commands"), '_set', ["autocomplete", dart.nullCheck(hints.Hints._cm)._get("showHint")]);
    }
    static registerHintsHelper(mode, helper) {
      if (mode == null) dart.nullFailed(I[0], 52, 42, "mode");
      if (helper == null) dart.nullFailed(I[0], 52, 60, "helper");
      hints.Hints._init();
      let $function = js.JsFunction.withThis(dart.fn((win, editor, showHints, options = null) => {
        let t0;
        let results = helper(codemirror.CodeMirror.fromJsObject(T.JsObjectN().as(editor)), hints.HintsOptions.fromProxy(js.JsObject.as(options)));
        t0 = results;
        return t0 == null ? null : t0.toProxy();
      }, T.dynamicAnddynamicAnddynamic__ToJsObjectN()));
      codemirror.CodeMirror.registerHelper("hint", mode, $function);
    }
    static registerHintsHelperAsync(mode, helper) {
      if (mode == null) dart.nullFailed(I[0], 64, 47, "mode");
      if (helper == null) dart.nullFailed(I[0], 64, 70, "helper");
      hints.Hints._init();
      let $function = js.JsFunction.withThis(dart.fn((win, editor, showHints, options = null) => {
        let results = helper(codemirror.CodeMirror.fromJsObject(T.JsObjectN().as(editor)), hints.HintsOptions.fromProxy(js.JsObject.as(options)));
        results.then(core.Null, dart.fn(r => {
          let t0;
          dart.dsend(showHints, 'apply', [T.JSArrayOfJsObjectN().of([(t0 = r, t0 == null ? null : t0.toProxy())])]);
        }, T.HintResultsNToNull()));
      }, T.dynamicAnddynamicAnddynamic__ToNull()));
      $function._set("async", true);
      codemirror.CodeMirror.registerHelper("hint", mode, $function);
    }
    static _showHint(myThis, editor, hintsFunc = null, opt = null) {
      let pos = dart.dsend(editor, 'callMethod', ["getCursor"]);
      let helper = T.JsObjectN().as(dart.dsend(editor, 'callMethod', ["getHelper", [pos, "hint"]]));
      helper == null ? helper = T.JsObjectN().as(dart.dsend(dart.nullCheck(hints.Hints._cm)._get("hint"), '_get', ["auto"])) : null;
      let options = new (T.IdentityMapOfString$JsObjectN()).from(["hint", helper]);
      if (opt != null) {
        options[$addAll](T.MapOfString$JsObjectN().as(opt));
      }
      return dart.dsend(editor, 'callMethod', ["showHint", T.JSArrayOfJsObject().of([js_utils.jsify(options)])]);
    }
  };
  (hints.Hints.new = function() {
    ;
  }).prototype = hints.Hints.prototype;
  dart.addTypeTests(hints.Hints);
  dart.addTypeCaches(hints.Hints);
  dart.setLibraryUri(hints.Hints, I[1]);
  dart.defineLazy(hints.Hints, {
    /*hints.Hints._inited*/get _inited() {
      return false;
    },
    set _inited(_) {}
  }, false);
  var _boolOption = dart.privateName(hints, "_boolOption");
  hints.HintsOptions = class HintsOptions extends codemirror.ProxyHolder {
    static fromProxy(jsProxy) {
      if (jsProxy == null) dart.nullFailed(I[0], 102, 43, "jsProxy");
      return new hints.HintsOptions.new(jsProxy);
    }
    get completeSingle() {
      return this[_boolOption]("completeSingle", true);
    }
    get alignWithWord() {
      return this[_boolOption]("alignWithWord", true);
    }
    get closeOnUnfocus() {
      return this[_boolOption]("closeOnUnfocus", true);
    }
    getOption(name) {
      if (name == null) dart.nullFailed(I[0], 121, 28, "name");
      return dart.nullCheck(this.jsProxy)._get(name);
    }
    [_boolOption](name, defaultValue) {
      let t0;
      if (name == null) dart.nullFailed(I[0], 123, 27, "name");
      if (defaultValue == null) dart.nullFailed(I[0], 123, 38, "defaultValue");
      let val = T.boolN().as(dart.nullCheck(this.jsProxy)._get(name));
      t0 = val;
      return t0 == null ? defaultValue : t0;
    }
  };
  (hints.HintsOptions.new = function(jsProxy) {
    if (jsProxy == null) dart.nullFailed(I[0], 100, 25, "jsProxy");
    hints.HintsOptions.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = hints.HintsOptions.prototype;
  dart.addTypeTests(hints.HintsOptions);
  dart.addTypeCaches(hints.HintsOptions);
  dart.setMethodSignature(hints.HintsOptions, () => ({
    __proto__: dart.getMethods(hints.HintsOptions.__proto__),
    getOption: dart.fnType(dart.dynamic, [core.String]),
    [_boolOption]: dart.fnType(core.bool, [core.String, core.bool])
  }));
  dart.setGetterSignature(hints.HintsOptions, () => ({
    __proto__: dart.getGetters(hints.HintsOptions.__proto__),
    completeSingle: core.bool,
    alignWithWord: core.bool,
    closeOnUnfocus: core.bool
  }));
  dart.setLibraryUri(hints.HintsOptions, I[1]);
  var from$ = dart.privateName(hints, "HintResults.from");
  var to$ = dart.privateName(hints, "HintResults.to");
  var _obj = dart.privateName(hints, "_obj");
  var _results = dart.privateName(hints, "_results");
  hints.HintResults = class HintResults extends core.Object {
    get from() {
      return this[from$];
    }
    set from(value) {
      super.from = value;
    }
    get to() {
      return this[to$];
    }
    set to(value) {
      super.to = value;
    }
    get results() {
      return this[_results];
    }
    registerOnShown(onShown) {
      if (onShown == null) dart.nullFailed(I[0], 148, 33, "onShown");
      dart.nullCheck(hints.Hints._cm).callMethod("on", [this.toProxy(), "shown", onShown]);
    }
    registerOnSelect(onSelect) {
      if (onSelect == null) dart.nullFailed(I[0], 157, 52, "onSelect");
      dart.nullCheck(hints.Hints._cm).callMethod("on", [this.toProxy(), "select", dart.fn((completion, element) => {
          if (typeof completion == 'string') {
            onSelect(new hints.HintResult.new(completion), html.Element.as(element));
          } else {
            onSelect(new hints.HintResult.fromProxy(js.JsObject.as(completion)), html.Element.as(element));
          }
        }, T.dynamicAnddynamicToNull())]);
    }
    registerOnPick(onPick) {
      if (onPick == null) dart.nullFailed(I[0], 175, 48, "onPick");
      dart.nullCheck(hints.Hints._cm).callMethod("on", [this.toProxy(), "pick", dart.fn(completion => {
          if (typeof completion == 'string') {
            onPick(new hints.HintResult.new(completion));
          } else {
            onPick(new hints.HintResult.fromProxy(js.JsObject.as(completion)));
          }
        }, T.dynamicToNull())]);
    }
    registerOnClose(onShown) {
      if (onShown == null) dart.nullFailed(I[0], 190, 33, "onShown");
      dart.nullCheck(hints.Hints._cm).callMethod("on", [this.toProxy(), "close", onShown]);
    }
    registerOnUpdate(onUpdate) {
      if (onUpdate == null) dart.nullFailed(I[0], 194, 34, "onUpdate");
      dart.nullCheck(hints.Hints._cm).callMethod("on", [this.toProxy(), "update", onUpdate]);
    }
    toProxy() {
      this[_obj] == null ? this[_obj] = js_utils.jsify(new (T.IdentityMapOfString$Object()).from(["list", this[_results][$map](dart.dynamic, dart.fn(r => hints.HintResult.is(r) ? r.toProxy() : r, T.dynamicTodynamic()))[$toList](), "from", this.from.toProxy(), "to", this.to.toProxy()])) : null;
      return this[_obj];
    }
  };
  (hints.HintResults.fromStrings = function(results, from, to) {
    if (results == null) dart.nullFailed(I[0], 137, 40, "results");
    if (from == null) dart.nullFailed(I[0], 137, 54, "from");
    if (to == null) dart.nullFailed(I[0], 137, 65, "to");
    this[_obj] = null;
    this[from$] = from;
    this[to$] = to;
    this[_results] = results;
    ;
  }).prototype = hints.HintResults.prototype;
  (hints.HintResults.fromHints = function(results, from, to) {
    if (results == null) dart.nullFailed(I[0], 140, 42, "results");
    if (from == null) dart.nullFailed(I[0], 140, 56, "from");
    if (to == null) dart.nullFailed(I[0], 140, 67, "to");
    this[_obj] = null;
    this[from$] = from;
    this[to$] = to;
    this[_results] = results;
    ;
  }).prototype = hints.HintResults.prototype;
  dart.addTypeTests(hints.HintResults);
  dart.addTypeCaches(hints.HintResults);
  dart.setMethodSignature(hints.HintResults, () => ({
    __proto__: dart.getMethods(hints.HintResults.__proto__),
    registerOnShown: dart.fnType(dart.void, [core.Function]),
    registerOnSelect: dart.fnType(dart.void, [dart.fnType(dart.void, [hints.HintResult, html.Element])]),
    registerOnPick: dart.fnType(dart.void, [dart.fnType(dart.void, [hints.HintResult])]),
    registerOnClose: dart.fnType(dart.void, [core.Function]),
    registerOnUpdate: dart.fnType(dart.void, [core.Function]),
    toProxy: dart.fnType(dart.nullable(js.JsObject), [])
  }));
  dart.setGetterSignature(hints.HintResults, () => ({
    __proto__: dart.getGetters(hints.HintResults.__proto__),
    results: core.List
  }));
  dart.setLibraryUri(hints.HintResults, I[1]);
  dart.setFieldSignature(hints.HintResults, () => ({
    __proto__: dart.getFields(hints.HintResults.__proto__),
    [_results]: dart.finalFieldType(core.List),
    from: dart.finalFieldType(codemirror.Position),
    to: dart.finalFieldType(codemirror.Position),
    [_obj]: dart.fieldType(dart.nullable(js.JsObject))
  }));
  var text$ = dart.privateName(hints, "HintResult.text");
  var displayText$ = dart.privateName(hints, "HintResult.displayText");
  var className$ = dart.privateName(hints, "HintResult.className");
  var from$0 = dart.privateName(hints, "HintResult.from");
  var to$0 = dart.privateName(hints, "HintResult.to");
  var hintRenderer$ = dart.privateName(hints, "HintResult.hintRenderer");
  var hintApplier$ = dart.privateName(hints, "HintResult.hintApplier");
  hints.HintResult = class HintResult extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get displayText() {
      return this[displayText$];
    }
    set displayText(value) {
      super.displayText = value;
    }
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    get from() {
      return this[from$0];
    }
    set from(value) {
      super.from = value;
    }
    get to() {
      return this[to$0];
    }
    set to(value) {
      super.to = value;
    }
    get hintRenderer() {
      return this[hintRenderer$];
    }
    set hintRenderer(value) {
      super.hintRenderer = value;
    }
    get hintApplier() {
      return this[hintApplier$];
    }
    set hintApplier(value) {
      super.hintApplier = value;
    }
    toProxy() {
      let m = new (T.IdentityMapOfString$dynamic()).from(["text", this.text]);
      if (this.displayText != null) m[$_set]("displayText", this.displayText);
      if (this.className != null) m[$_set]("className", this.className);
      if (this.from != null) m[$_set]("from", dart.nullCheck(this.from).toProxy());
      if (this.to != null) m[$_set]("to", dart.nullCheck(this.to).toProxy());
      if (this.hintApplier != null) {
        m[$_set]("hint", dart.fn((cm, data, completion) => {
          let from = hints.HintResult._createPos(T.JsObjectN().as(dart.dsend(data, '_get', ["from"])));
          let to = hints.HintResult._createPos(T.JsObjectN().as(dart.dsend(data, '_get', ["to"])));
          dart.nullCheck(this.hintApplier)(codemirror.CodeMirror.fromJsObject(T.JsObjectN().as(cm)), this, from, to);
        }, T.dynamicAnddynamicAnddynamicToNull()));
      }
      if (this.hintRenderer != null) {
        m[$_set]("render", dart.fn((element, data, completion) => {
          dart.nullCheck(this.hintRenderer)(html.Element.as(element), this);
        }, T.dynamicAnddynamicAnddynamicToNull()));
      }
      return js_utils.jsify(m);
    }
    toString() {
      return "[" + dart.str(this.text) + "]";
    }
    static _createPos(obj) {
      return obj == null ? null : new codemirror.Position.fromProxy(obj);
    }
  };
  (hints.HintResult.new = function(text, opts) {
    let displayText = opts && 'displayText' in opts ? opts.displayText : null;
    let className = opts && 'className' in opts ? opts.className : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let hintRenderer = opts && 'hintRenderer' in opts ? opts.hintRenderer : null;
    let hintApplier = opts && 'hintApplier' in opts ? opts.hintApplier : null;
    this[text$] = text;
    this[displayText$] = displayText;
    this[className$] = className;
    this[from$0] = from;
    this[to$0] = to;
    this[hintRenderer$] = hintRenderer;
    this[hintApplier$] = hintApplier;
    ;
  }).prototype = hints.HintResult.prototype;
  (hints.HintResult.fromProxy = function(m) {
    if (m == null) dart.nullFailed(I[0], 249, 33, "m");
    this[text$] = T.StringN().as(m._get("text"));
    this[displayText$] = T.StringN().as(m._get("displayText"));
    this[className$] = T.StringN().as(m._get("className"));
    this[from$0] = hints.HintResult._createPos(T.JsObjectN().as(m._get("from")));
    this[to$0] = hints.HintResult._createPos(T.JsObjectN().as(m._get("to")));
    this[hintRenderer$] = null;
    this[hintApplier$] = null;
    ;
  }).prototype = hints.HintResult.prototype;
  dart.addTypeTests(hints.HintResult);
  dart.addTypeCaches(hints.HintResult);
  dart.setMethodSignature(hints.HintResult, () => ({
    __proto__: dart.getMethods(hints.HintResult.__proto__),
    toProxy: dart.fnType(js.JsObject, [])
  }));
  dart.setLibraryUri(hints.HintResult, I[1]);
  dart.setFieldSignature(hints.HintResult, () => ({
    __proto__: dart.getFields(hints.HintResult.__proto__),
    text: dart.finalFieldType(dart.nullable(core.String)),
    displayText: dart.finalFieldType(dart.nullable(core.String)),
    className: dart.finalFieldType(dart.nullable(core.String)),
    from: dart.finalFieldType(dart.nullable(codemirror.Position)),
    to: dart.finalFieldType(dart.nullable(codemirror.Position)),
    hintRenderer: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [html.Element, hints.HintResult]))),
    hintApplier: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [codemirror.CodeMirror, hints.HintResult, dart.nullable(codemirror.Position), dart.nullable(codemirror.Position)])))
  }));
  dart.defineExtensionMethods(hints.HintResult, ['toString']);
  dart.trackLibraries("packages/codemirror/hints", {
    "package:codemirror/hints.dart": hints
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hints.dart"],"names":[],"mappings":"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","file":"hints.unsound.ddc.js"}');
  // Exports:
  return {
    hints: hints
  };
}));

//# sourceMappingURL=hints.unsound.ddc.js.map
