define(['dart_sdk', 'packages/codemirror/src/js_utils'], (function load__packages__codemirror__codemirror(dart_sdk, packages__codemirror__src__js_utils) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js_utils = packages__codemirror__src__js_utils.src__js_utils;
  var codemirror = Object.create(dart.library);
  var $_set = dartx._set;
  var $where = dartx.where;
  var $add = dartx.add;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $remove = dartx.remove;
  var $hashCode = dartx.hashCode;
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $compareTo = dartx.compareTo;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    JsObjectN: () => (T$.JsObjectN = dart.constFn(dart.nullable(js.JsObject)))(),
    ListOfString: () => (T$.ListOfString = dart.constFn(core.List$(core.String)))(),
    dynamicTobool: () => (T$.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    JsObjectToNull: () => (T$.JsObjectToNull = dart.constFn(dart.fnType(core.Null, [js.JsObject])))(),
    boolN: () => (T$.boolN = dart.constFn(dart.nullable(core.bool)))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    ElementN: () => (T$.ElementN = dart.constFn(dart.nullable(html.Element)))(),
    ListOfToken: () => (T$.ListOfToken = dart.constFn(core.List$(codemirror.Token)))(),
    dynamicToToken: () => (T$.dynamicToToken = dart.constFn(dart.fnType(codemirror.Token, [dart.dynamic])))(),
    JSArrayOfToken: () => (T$.JSArrayOfToken = dart.constFn(_interceptors.JSArray$(codemirror.Token)))(),
    IdentityMapOfString$int: () => (T$.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))(),
    ListOfJsObject: () => (T$.ListOfJsObject = dart.constFn(core.List$(js.JsObject)))(),
    TextAreaElementN: () => (T$.TextAreaElementN = dart.constFn(dart.nullable(html.TextAreaElement)))(),
    IdentityMapOfString$JsEventListener: () => (T$.IdentityMapOfString$JsEventListener = dart.constFn(_js_helper.IdentityMap$(core.String, js_utils.JsEventListener)))(),
    dynamicAnddynamicAnddynamicTodynamic: () => (T$.dynamicAnddynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic])))(),
    dynamicAnddynamicTodynamic: () => (T$.dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))(),
    StringL: () => (T$.StringL = dart.constFn(dart.legacy(core.String)))(),
    LinkedMapOfJsObjectN$CodeMirror: () => (T$.LinkedMapOfJsObjectN$CodeMirror = dart.constFn(_js_helper.LinkedMap$(T$.JsObjectN(), codemirror.CodeMirror)))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    IterableOfString: () => (T$.IterableOfString = dart.constFn(core.Iterable$(core.String)))(),
    JsArrayOfJsObject: () => (T$.JsArrayOfJsObject = dart.constFn(js.JsArray$(js.JsObject)))(),
    SpanToJsObject: () => (T$.SpanToJsObject = dart.constFn(dart.fnType(js.JsObject, [codemirror.Span])))(),
    PositionToJsObject: () => (T$.PositionToJsObject = dart.constFn(dart.fnType(js.JsObject, [codemirror.Position])))(),
    JsObjectAndintToJsObject: () => (T$.JsObjectAndintToJsObject = dart.constFn(dart.fnType(js.JsObject, [js.JsObject, core.int])))(),
    JsObjectToSpan: () => (T$.JsObjectToSpan = dart.constFn(dart.fnType(codemirror.Span, [js.JsObject])))(),
    IterableOfSpan: () => (T$.IterableOfSpan = dart.constFn(core.Iterable$(codemirror.Span)))(),
    IterableNOfSpan: () => (T$.IterableNOfSpan = dart.constFn(dart.nullable(T$.IterableOfSpan())))(),
    IdentityMapOfString$intN: () => (T$.IdentityMapOfString$intN = dart.constFn(_js_helper.IdentityMap$(core.String, T$.intN())))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    JSArrayOfTextMarker: () => (T$.JSArrayOfTextMarker = dart.constFn(_interceptors.JSArray$(codemirror.TextMarker)))(),
    ListOfTextMarker: () => (T$.ListOfTextMarker = dart.constFn(core.List$(codemirror.TextMarker)))(),
    dynamicToTextMarker: () => (T$.dynamicToTextMarker = dart.constFn(dart.fnType(codemirror.TextMarker, [dart.dynamic])))(),
    JSArrayOfStringN: () => (T$.JSArrayOfStringN = dart.constFn(_interceptors.JSArray$(T$.StringN())))(),
    ListNOfString: () => (T$.ListNOfString = dart.constFn(dart.nullable(T$.ListOfString())))(),
    IdentityMapOfString$JsObject: () => (T$.IdentityMapOfString$JsObject = dart.constFn(_js_helper.IdentityMap$(core.String, js.JsObject)))(),
    JSArrayOfPosition: () => (T$.JSArrayOfPosition = dart.constFn(_interceptors.JSArray$(codemirror.Position)))(),
    numN: () => (T$.numN = dart.constFn(dart.nullable(core.num)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList(["3024-day", "3024-night", "abcdef", "ambiance-mobile", "ambiance", "ayu-dark", "ayu-mirage", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "darcula", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "idea", "isotope", "lesser-dark", "liquibyte", "lucario", "material-darker", "material-ocean", "material-palenight", "material", "mbo", "mdn-like", "midnight", "monokai", "moxer", "neat", "neo", "night", "nord", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "ssms", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "yonce", "zenburn"], T$.StringL());
    },
    get C1() {
      return C[1] = dart.constList(["default", "emacs", "sublime", "vim"], T$.StringL());
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/codemirror/codemirror.dart",
    "package:codemirror/codemirror.dart"
  ];
  var _doc = dart.privateName(codemirror, "_doc");
  var jsProxy$ = dart.privateName(codemirror, "ProxyHolder.jsProxy");
  var _events = dart.privateName(codemirror, "_events");
  codemirror.ProxyHolder = class ProxyHolder extends core.Object {
    get jsProxy() {
      return this[jsProxy$];
    }
    set jsProxy(value) {
      super.jsProxy = value;
    }
    call(methodName) {
      if (methodName == null) dart.nullFailed(I[0], 1266, 23, "methodName");
      return dart.nullCheck(this.jsProxy).callMethod(methodName);
    }
    callArg(methodName, arg) {
      if (methodName == null) dart.nullFailed(I[0], 1268, 26, "methodName");
      return dart.nullCheck(this.jsProxy).callMethod(methodName, [arg]);
    }
    callArgs(methodName, args) {
      if (methodName == null) dart.nullFailed(I[0], 1271, 27, "methodName");
      if (args == null) dart.nullFailed(I[0], 1271, 44, "args");
      return dart.nullCheck(this.jsProxy).callMethod(methodName, args);
    }
    onEvent(T, eventName, opts) {
      if (eventName == null) dart.nullFailed(I[0], 1274, 32, "eventName");
      let argCount = opts && 'argCount' in opts ? opts.argCount : 1;
      if (argCount == null) dart.nullFailed(I[0], 1274, 48, "argCount");
      let listener = this[_events][$_get](eventName);
      if (listener == null) {
        if (argCount === 4) {
          listener = new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName, {cvtEvent: dart.fn((a, b, c) => a, T$.dynamicAnddynamicAnddynamicTodynamic()), argCount: argCount});
        } else if (argCount === 3) {
          listener = new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName, {cvtEvent: dart.fn((a, b) => a, T$.dynamicAnddynamicTodynamic()), argCount: argCount});
        } else if (argCount === 2) {
          listener = new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName, {argCount: argCount});
        } else {
          listener = new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName);
        }
        this[_events][$_set](eventName, listener);
      }
      return async.Stream$(dart.nullable(T)).as(listener.stream);
    }
    get hashCode() {
      return dart.hashCode(this.jsProxy);
    }
    _equals(other) {
      if (other == null) return false;
      return codemirror.ProxyHolder.is(other) && dart.equals(this.jsProxy, other.jsProxy);
    }
    dispose() {
      if (dart.test(this[_events][$isNotEmpty])) {
        for (let event of this[_events][$values]) {
          event.dispose();
        }
      }
    }
  };
  (codemirror.ProxyHolder.new = function(jsProxy) {
    this[_events] = new (T$.IdentityMapOfString$JsEventListener()).new();
    this[jsProxy$] = jsProxy;
    ;
  }).prototype = codemirror.ProxyHolder.prototype;
  dart.addTypeTests(codemirror.ProxyHolder);
  dart.addTypeCaches(codemirror.ProxyHolder);
  dart.setMethodSignature(codemirror.ProxyHolder, () => ({
    __proto__: dart.getMethods(codemirror.ProxyHolder.__proto__),
    call: dart.fnType(dart.dynamic, [core.String]),
    callArg: dart.fnType(dart.dynamic, [core.String, dart.dynamic]),
    callArgs: dart.fnType(dart.dynamic, [core.String, core.List]),
    onEvent: dart.gFnType(T => [async.Stream$(dart.nullable(T)), [core.String], {argCount: core.int}, {}], T => [dart.nullable(core.Object)]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(codemirror.ProxyHolder, I[1]);
  dart.setFieldSignature(codemirror.ProxyHolder, () => ({
    __proto__: dart.getFields(codemirror.ProxyHolder.__proto__),
    jsProxy: dart.finalFieldType(dart.nullable(js.JsObject)),
    [_events]: dart.finalFieldType(core.Map$(core.String, js_utils.JsEventListener))
  }));
  dart.defineExtensionMethods(codemirror.ProxyHolder, ['_equals']);
  dart.defineExtensionAccessors(codemirror.ProxyHolder, ['hashCode']);
  codemirror.CodeMirror = class CodeMirror extends codemirror.ProxyHolder {
    static get _cm() {
      return T$.JsObjectN().as(js.context._get("CodeMirror"));
    }
    static get modes() {
      return T$.ListOfString().from(dart.nullCheck(js_utils.keys(T$.JsObjectN().as(dart.nullCheck(codemirror.CodeMirror._cm)._get("modes"))))[$where](dart.fn(modeName => !dart.equals(modeName, "null"), T$.dynamicTobool())));
    }
    static get MODES() {
      return codemirror.CodeMirror.modes;
    }
    static get mimeModes() {
      return T$.ListOfString().from(dart.nullCheck(js_utils.keys(T$.JsObjectN().as(dart.nullCheck(codemirror.CodeMirror._cm)._get("mimeModes")))));
    }
    static get MIME_MODES() {
      return codemirror.CodeMirror.mimeModes;
    }
    static get commands() {
      return T$.ListOfString().from(dart.nullCheck(js_utils.keys(T$.JsObjectN().as(dart.nullCheck(codemirror.CodeMirror._cm)._get("commands")))));
    }
    static get COMMANDS() {
      return codemirror.CodeMirror.commands;
    }
    static get version() {
      return T$.StringN().as(dart.nullCheck(codemirror.CodeMirror._cm)._get("version"));
    }
    static findModeByExtension(ext) {
      if (ext == null) dart.nullFailed(I[0], 129, 46, "ext");
      return codemirror.ModeInfo.new(js.JsObject.as(dart.nullCheck(codemirror.CodeMirror._cm).callMethod("findModeByExtension", [ext])));
    }
    static findModeByMime(mime) {
      if (mime == null) dart.nullFailed(I[0], 132, 41, "mime");
      return codemirror.ModeInfo.new(js.JsObject.as(dart.nullCheck(codemirror.CodeMirror._cm).callMethod("findModeByMIME", [mime])));
    }
    static findModeByFileName(name) {
      if (name == null) dart.nullFailed(I[0], 135, 45, "name");
      return codemirror.ModeInfo.new(js.JsObject.as(dart.nullCheck(codemirror.CodeMirror._cm).callMethod("findModeByFileName", [name])));
    }
    static findModeByName(name) {
      if (name == null) dart.nullFailed(I[0], 138, 41, "name");
      return codemirror.ModeInfo.new(js.JsObject.as(dart.nullCheck(codemirror.CodeMirror._cm).callMethod("findModeByName", [name])));
    }
    static defineExtension(name, value) {
      if (name == null) dart.nullFailed(I[0], 144, 38, "name");
      dart.nullCheck(codemirror.CodeMirror._cm).callMethod("defineExtension", [name, value]);
    }
    static defineDocExtension(name, value) {
      if (name == null) dart.nullFailed(I[0], 150, 41, "name");
      dart.nullCheck(codemirror.CodeMirror._cm).callMethod("defineDocExtension", [name, value]);
    }
    static registerHelper(type, mode, helper) {
      if (type == null) dart.nullFailed(I[0], 160, 37, "type");
      if (mode == null) dart.nullFailed(I[0], 160, 50, "mode");
      dart.nullCheck(codemirror.CodeMirror._cm).callMethod("registerHelper", [type, mode, helper]);
    }
    static _createFromElement(element, options) {
      if (element == null) dart.nullFailed(I[0], 175, 46, "element");
      if (options == null) {
        return js.JsObject.new(js.JsFunction.as(codemirror.CodeMirror._cm), [element]);
      } else {
        return js.JsObject.new(js.JsFunction.as(codemirror.CodeMirror._cm), [element, js_utils.jsify(options)]);
      }
    }
    static _createFromTextArea(textArea, options) {
      let args = [textArea];
      if (options != null) args[$add](js_utils.jsify(options));
      return T$.JsObjectN().as(dart.nullCheck(codemirror.CodeMirror._cm).callMethod("fromTextArea", args));
    }
    static addCommand(name, callback) {
      if (name == null) dart.nullFailed(I[0], 191, 33, "name");
      if (callback == null) dart.nullFailed(I[0], 191, 54, "callback");
      dart.dsend(dart.nullCheck(codemirror.CodeMirror._cm)._get("commands"), '_set', [name, dart.fn(obj => {
          if (obj == null) dart.nullFailed(I[0], 192, 40, "obj");
          let editor = codemirror.CodeMirror.fromJsObject(obj);
          callback(editor);
        }, T$.JsObjectToNull())]);
    }
    static fromJsObject(object) {
      if (dart.test(codemirror.CodeMirror._instances[$containsKey](object))) {
        return dart.nullCheck(codemirror.CodeMirror._instances[$_get](object));
      } else {
        return new codemirror.CodeMirror._fromJsObject(object);
      }
    }
    get onChange() {
      return this.onEvent(dart.dynamic, "change", {argCount: 2});
    }
    get onCursorActivity() {
      return this.onEvent(dart.dynamic, "cursorActivity");
    }
    get onMouseDown() {
      return this.onEvent(dart.dynamic, "mousedown", {argCount: 2}).cast(html.MouseEvent);
    }
    get onDoubleClick() {
      return this.onEvent(dart.dynamic, "dblclick", {argCount: 2}).cast(html.MouseEvent);
    }
    get onGutterClick() {
      return this.onEvent(core.int, "gutterClick", {argCount: 4});
    }
    get doc() {
      let doc = this[_doc];
      if (doc == null) {
        doc = new codemirror.Doc.fromProxy(T$.JsObjectN().as(this.call("getDoc")));
        this[_doc] = doc;
      }
      return doc;
    }
    getDoc() {
      return this.doc;
    }
    swapDoc(doc) {
      if (doc == null) dart.nullFailed(I[0], 269, 20, "doc");
      this[_doc] = doc;
      this.callArg("swapDoc", doc.jsProxy);
    }
    getOption(option) {
      if (option == null) dart.nullFailed(I[0], 275, 28, "option");
      return this.callArg("getOption", option);
    }
    setOption(option, value) {
      if (option == null) dart.nullFailed(I[0], 279, 25, "option");
      return this.callArgs("setOption", [option, value]);
    }
    getTheme() {
      return T$.StringN().as(this.getOption("theme"));
    }
    setTheme(theme) {
      if (theme == null) dart.nullFailed(I[0], 284, 24, "theme");
      return this.setOption("theme", theme);
    }
    getMode() {
      return T$.StringN().as(this.getOption("mode"));
    }
    setMode(mode) {
      if (mode == null) dart.nullFailed(I[0], 288, 23, "mode");
      return this.setOption("mode", mode);
    }
    getKeyMap() {
      return T$.StringN().as(this.getOption("keyMap"));
    }
    setKeyMap(value) {
      if (value == null) dart.nullFailed(I[0], 294, 25, "value");
      return this.setOption("keyMap", value);
    }
    getLineNumbers() {
      return T$.boolN().as(this.getOption("lineNumbers"));
    }
    setLineNumbers(value) {
      return this.setOption("lineNumbers", value);
    }
    getLine(n) {
      return T$.StringN().as(this.callArg("getLine", n));
    }
    getIndentWithTabs() {
      let t0;
      return core.bool.as((t0 = this.getOption("indentWithTabs"), t0 == null ? false : t0));
    }
    setIndentWithTabs(value) {
      return this.setOption("indentWithTabs", value);
    }
    getReadOnly() {
      return dart.equals(this.getOption("readOnly"), true) || dart.equals(this.getOption("readOnly"), "true") || dart.equals(this.getOption("readOnly"), "nocursor");
    }
    setReadOnly(value, noCursor = false) {
      if (value == null) dart.nullFailed(I[0], 320, 25, "value");
      if (noCursor == null) dart.nullFailed(I[0], 320, 38, "noCursor");
      if (dart.test(value)) {
        if (dart.test(noCursor)) {
          this.setOption("readOnly", "nocursor");
        } else {
          this.setOption("readOnly", value);
        }
      } else {
        this.setOption("readOnly", value);
      }
    }
    getTabSize() {
      let t0;
      return core.int.as((t0 = this.getOption("tabSize"), t0 == null ? 4 : t0));
    }
    setTabSize(value) {
      if (value == null) dart.nullFailed(I[0], 336, 23, "value");
      return this.setOption("tabSize", value);
    }
    getIndentUnit() {
      return T$.intN().as(this.getOption("indentUnit"));
    }
    setIndentUnit(value) {
      if (value == null) dart.nullFailed(I[0], 344, 26, "value");
      return this.setOption("indentUnit", value);
    }
    refresh() {
      return this.call("refresh");
    }
    focus() {
      return this.call("focus");
    }
    getInputField() {
      return T$.ElementN().as(this.call("getInputField"));
    }
    getCursor(start = null) {
      return new codemirror.Position.fromProxy(start == null ? this.call("getCursor") : this.callArg("getCursor", start));
    }
    execCommand(name) {
      if (name == null) dart.nullFailed(I[0], 370, 27, "name");
      this.callArg("execCommand", name);
    }
    setGutterMarker(line, gutterID, value) {
      if (line == null) dart.nullFailed(I[0], 378, 28, "line");
      if (gutterID == null) dart.nullFailed(I[0], 378, 41, "gutterID");
      if (value == null) dart.nullFailed(I[0], 378, 59, "value");
      this.callArgs("setGutterMarker", [line, gutterID, value]);
    }
    clearGutter(gutterID) {
      if (gutterID == null) dart.nullFailed(I[0], 383, 27, "gutterID");
      this.callArg("clearGutter", gutterID);
    }
    addWidget(pos, node, scrollIntoView = false) {
      if (pos == null) dart.nullFailed(I[0], 392, 27, "pos");
      if (node == null) dart.nullFailed(I[0], 392, 40, "node");
      if (scrollIntoView == null) dart.nullFailed(I[0], 392, 52, "scrollIntoView");
      this.callArgs("addWidget", [pos.toProxy(), node, scrollIntoView]);
    }
    addLineWidget(line, node, opts) {
      if (node == null) dart.nullFailed(I[0], 416, 50, "node");
      let coverGutter = opts && 'coverGutter' in opts ? opts.coverGutter : null;
      let noHScroll = opts && 'noHScroll' in opts ? opts.noHScroll : null;
      let above = opts && 'above' in opts ? opts.above : null;
      let handleMouseEvents = opts && 'handleMouseEvents' in opts ? opts.handleMouseEvents : null;
      let insertAt = opts && 'insertAt' in opts ? opts.insertAt : null;
      let className = opts && 'className' in opts ? opts.className : null;
      let options = new _js_helper.LinkedMap.new();
      if (coverGutter != null) options[$_set]("coverGutter", coverGutter);
      if (noHScroll != null) options[$_set]("noHScroll", noHScroll);
      if (above != null) options[$_set]("above", above);
      if (handleMouseEvents != null) {
        options[$_set]("handleMouseEvents", handleMouseEvents);
      }
      if (insertAt != null) options[$_set]("insertAt", insertAt);
      if (className != null) options[$_set]("className", className);
      let l = codemirror.LineHandle.is(line) ? line.jsProxy : line;
      return new codemirror.LineWidget.new(T$.JsObjectN().as(this.callArgs("addLineWidget", [l, node, js_utils.jsify(options)])));
    }
    addLineClass(line, where, cssClass) {
      if (where == null) dart.nullFailed(I[0], 445, 48, "where");
      if (cssClass == null) dart.nullFailed(I[0], 445, 62, "cssClass");
      let l = codemirror.LineHandle.is(line) ? line.jsProxy : line;
      return new codemirror.LineHandle.new(T$.JsObjectN().as(this.callArgs("addLineClass", [l, where, cssClass])));
    }
    removeLineClass(line, where, cssClass = null) {
      if (where == null) dart.nullFailed(I[0], 454, 51, "where");
      let l = codemirror.LineHandle.is(line) ? line.jsProxy : line;
      if (cssClass == null) {
        return new codemirror.LineHandle.new(T$.JsObjectN().as(this.callArgs("removeLineClass", [l, where])));
      } else {
        return new codemirror.LineHandle.new(T$.JsObjectN().as(this.callArgs("removeLineClass", [l, where, cssClass])));
      }
    }
    getTokenAt(pos, precise = null) {
      if (pos == null) dart.nullFailed(I[0], 470, 29, "pos");
      let r = precise == null ? this.callArg("getTokenAt", pos.toProxy()) : this.callArgs("getTokenAt", [pos.toProxy(), precise]);
      return new codemirror.Token.fromProxy(r);
    }
    getLineTokens(line, precise = null) {
      if (line == null) dart.nullFailed(I[0], 480, 33, "line");
      let result = precise != null ? this.callArgs("getLineTokens", [line, precise]) : this.callArg("getLineTokens", line);
      if (core.List.is(result)) {
        return T$.ListOfToken().of(result[$map](codemirror.Token, dart.fn(t => new codemirror.Token.fromProxy(t), T$.dynamicToToken())));
      } else {
        return T$.JSArrayOfToken().of([]);
      }
    }
    getTokenTypeAt(pos) {
      if (pos == null) dart.nullFailed(I[0], 495, 35, "pos");
      return T$.StringN().as(this.callArg("getTokenTypeAt", pos));
    }
    setSize(width, height) {
      if (width == null) dart.nullFailed(I[0], 501, 20, "width");
      if (height == null) dart.nullFailed(I[0], 501, 31, "height");
      return this.callArgs("setSize", [width, height]);
    }
    scrollTo(x, y) {
      if (x == null) dart.nullFailed(I[0], 505, 21, "x");
      if (y == null) dart.nullFailed(I[0], 505, 28, "y");
      return this.callArgs("scrollTo", [x, y]);
    }
    getScrollInfo() {
      return new codemirror.ScrollInfo.new(T$.JsObjectN().as(this.call("getScrollInfo")));
    }
    scrollIntoView(line, ch, opts) {
      if (line == null) dart.nullFailed(I[0], 515, 27, "line");
      if (ch == null) dart.nullFailed(I[0], 515, 37, "ch");
      let margin = opts && 'margin' in opts ? opts.margin : null;
      if (margin != null) {
        this.callArgs("scrollIntoView", [js.JsObject.jsify(new (T$.IdentityMapOfString$int()).from(["line", line, "ch", ch])), margin]);
      } else {
        this.callArgs("scrollIntoView", [js.JsObject.jsify(new (T$.IdentityMapOfString$int()).from(["line", line, "ch", ch]))]);
      }
    }
    getHelpers(pos, type) {
      if (pos == null) dart.nullFailed(I[0], 546, 38, "pos");
      if (type == null) dart.nullFailed(I[0], 546, 50, "type");
      return T$.ListOfJsObject().from(core.Iterable.as(this.callArgs("getHelpers", [pos.toProxy(), type])));
    }
    getHelper(pos, type) {
      if (pos == null) dart.nullFailed(I[0], 551, 32, "pos");
      if (type == null) dart.nullFailed(I[0], 551, 44, "type");
      return T$.JsObjectN().as(this.callArgs("getHelper", [pos.toProxy(), type]));
    }
    save() {
      return this.call("save");
    }
    toTextArea() {
      return this.call("toTextArea");
    }
    getTextArea() {
      return T$.TextAreaElementN().as(this.call("getTextArea"));
    }
    dispose() {
      super.dispose();
      codemirror.CodeMirror._instances[$remove](this.jsProxy);
    }
  };
  (codemirror.CodeMirror.fromElement = function(element, opts) {
    if (element == null) dart.nullFailed(I[0], 202, 34, "element");
    let options = opts && 'options' in opts ? opts.options : null;
    this[_doc] = null;
    codemirror.CodeMirror.__proto__.new.call(this, codemirror.CodeMirror._createFromElement(element, options));
    codemirror.CodeMirror._instances[$_set](this.jsProxy, this);
  }).prototype = codemirror.CodeMirror.prototype;
  (codemirror.CodeMirror._fromJsObject = function(object) {
    this[_doc] = null;
    codemirror.CodeMirror.__proto__.new.call(this, object);
    codemirror.CodeMirror._instances[$_set](this.jsProxy, this);
  }).prototype = codemirror.CodeMirror.prototype;
  (codemirror.CodeMirror.fromTextArea = function(textArea, opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    this[_doc] = null;
    codemirror.CodeMirror.__proto__.new.call(this, codemirror.CodeMirror._createFromTextArea(textArea, options));
    codemirror.CodeMirror._instances[$_set](this.jsProxy, this);
  }).prototype = codemirror.CodeMirror.prototype;
  dart.addTypeTests(codemirror.CodeMirror);
  dart.addTypeCaches(codemirror.CodeMirror);
  dart.setMethodSignature(codemirror.CodeMirror, () => ({
    __proto__: dart.getMethods(codemirror.CodeMirror.__proto__),
    getDoc: dart.fnType(codemirror.Doc, []),
    swapDoc: dart.fnType(dart.void, [codemirror.Doc]),
    getOption: dart.fnType(dart.dynamic, [core.String]),
    setOption: dart.fnType(dart.void, [core.String, dart.dynamic]),
    getTheme: dart.fnType(dart.nullable(core.String), []),
    setTheme: dart.fnType(dart.void, [core.String]),
    getMode: dart.fnType(dart.nullable(core.String), []),
    setMode: dart.fnType(dart.void, [core.String]),
    getKeyMap: dart.fnType(dart.nullable(core.String), []),
    setKeyMap: dart.fnType(dart.void, [core.String]),
    getLineNumbers: dart.fnType(dart.nullable(core.bool), []),
    setLineNumbers: dart.fnType(dart.void, [dart.nullable(core.bool)]),
    getLine: dart.fnType(dart.nullable(core.String), [dart.nullable(core.int)]),
    getIndentWithTabs: dart.fnType(core.bool, []),
    setIndentWithTabs: dart.fnType(dart.void, [dart.nullable(core.bool)]),
    getReadOnly: dart.fnType(core.bool, []),
    setReadOnly: dart.fnType(dart.void, [core.bool], [core.bool]),
    getTabSize: dart.fnType(core.int, []),
    setTabSize: dart.fnType(dart.void, [core.int]),
    getIndentUnit: dart.fnType(dart.nullable(core.int), []),
    setIndentUnit: dart.fnType(dart.void, [core.int]),
    refresh: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    getInputField: dart.fnType(dart.nullable(html.Element), []),
    getCursor: dart.fnType(codemirror.Position, [], [dart.nullable(core.String)]),
    execCommand: dart.fnType(dart.void, [core.String]),
    setGutterMarker: dart.fnType(dart.void, [core.int, core.String, html.Element]),
    clearGutter: dart.fnType(dart.void, [core.String]),
    addWidget: dart.fnType(dart.void, [codemirror.Position, html.Element], [core.bool]),
    addLineWidget: dart.fnType(codemirror.LineWidget, [dart.dynamic, html.Element], {above: dart.nullable(core.bool), className: dart.nullable(core.String), coverGutter: dart.nullable(core.bool), handleMouseEvents: dart.nullable(core.bool), insertAt: dart.nullable(core.int), noHScroll: dart.nullable(core.bool)}, {}),
    addLineClass: dart.fnType(codemirror.LineHandle, [dart.dynamic, core.String, core.String]),
    removeLineClass: dart.fnType(codemirror.LineHandle, [dart.dynamic, core.String], [dart.nullable(core.String)]),
    getTokenAt: dart.fnType(codemirror.Token, [codemirror.Position], [dart.nullable(core.bool)]),
    getLineTokens: dart.fnType(core.List$(codemirror.Token), [core.int], [dart.nullable(core.bool)]),
    getTokenTypeAt: dart.fnType(dart.nullable(core.String), [codemirror.Position]),
    setSize: dart.fnType(dart.void, [core.num, core.num]),
    scrollTo: dart.fnType(dart.void, [core.num, core.num]),
    getScrollInfo: dart.fnType(codemirror.ScrollInfo, []),
    scrollIntoView: dart.fnType(dart.void, [core.int, core.int], {margin: dart.nullable(core.int)}, {}),
    getHelpers: dart.fnType(core.List$(js.JsObject), [codemirror.Position, core.String]),
    getHelper: dart.fnType(dart.nullable(js.JsObject), [codemirror.Position, core.String]),
    save: dart.fnType(dart.void, []),
    toTextArea: dart.fnType(dart.void, []),
    getTextArea: dart.fnType(dart.nullable(html.TextAreaElement), [])
  }));
  dart.setGetterSignature(codemirror.CodeMirror, () => ({
    __proto__: dart.getGetters(codemirror.CodeMirror.__proto__),
    onChange: async.Stream,
    onCursorActivity: async.Stream,
    onMouseDown: async.Stream$(html.MouseEvent),
    onDoubleClick: async.Stream$(html.MouseEvent),
    onGutterClick: async.Stream$(dart.nullable(core.int)),
    doc: codemirror.Doc
  }));
  dart.setLibraryUri(codemirror.CodeMirror, I[1]);
  dart.setFieldSignature(codemirror.CodeMirror, () => ({
    __proto__: dart.getFields(codemirror.CodeMirror.__proto__),
    [_doc]: dart.fieldType(dart.nullable(codemirror.Doc))
  }));
  dart.defineLazy(codemirror.CodeMirror, {
    /*codemirror.CodeMirror.themes*/get themes() {
      return C[0] || CT.C0;
    },
    /*codemirror.CodeMirror.THEMES*/get THEMES() {
      return C[0] || CT.C0;
    },
    /*codemirror.CodeMirror.keyMaps*/get keyMaps() {
      return C[1] || CT.C1;
    },
    /*codemirror.CodeMirror.KEY_MAPS*/get KEY_MAPS() {
      return C[1] || CT.C1;
    },
    /*codemirror.CodeMirror._instances*/get _instances() {
      return new (T$.LinkedMapOfJsObjectN$CodeMirror()).new();
    }
  }, false);
  var __Doc__editor = dart.privateName(codemirror, "_#Doc#_editor");
  var __Doc__editor_isSet = dart.privateName(codemirror, "_#Doc#_editor#isSet");
  var _editor = dart.privateName(codemirror, "_editor");
  codemirror.Doc = class Doc extends codemirror.ProxyHolder {
    static _create(text, mode, firstLineNumber) {
      if (text == null) dart.nullFailed(I[0], 593, 34, "text");
      if (firstLineNumber == null) {
        return js.JsObject.new(js.JsFunction.as(dart.dsend(js.context._get("CodeMirror"), '_get', ["Doc"])), [text, mode]);
      } else {
        return js.JsObject.new(js.JsFunction.as(dart.dsend(js.context._get("CodeMirror"), '_get', ["Doc"])), [text, mode, firstLineNumber]);
      }
    }
    get [_editor]() {
      let t1;
      if (!dart.test(this[__Doc__editor_isSet])) {
        let t0 = codemirror.CodeMirror.fromJsObject(T$.JsObjectN().as(this.call("getEditor")));
        if (dart.test(this[__Doc__editor_isSet])) dart.throw(new _internal.LateError.fieldADI("_editor"));
        this[__Doc__editor] = t0;
        this[__Doc__editor_isSet] = true;
      }
      t1 = this[__Doc__editor];
      return t1;
    }
    get editor() {
      return this[_editor];
    }
    getEditor() {
      return this.editor;
    }
    getValue(separator = null) {
      return T$.StringN().as(this.callArg("getValue", separator));
    }
    setValue(value) {
      if (value == null) dart.nullFailed(I[0], 619, 24, "value");
      return this.callArg("setValue", value);
    }
    lineCount() {
      return T$.intN().as(this.call("lineCount"));
    }
    firstLine() {
      return T$.intN().as(this.call("firstLine"));
    }
    lastLine() {
      return T$.intN().as(this.call("lastLine"));
    }
    getLine(n) {
      return T$.StringN().as(this.callArg("getLine", n));
    }
    eachLine(callback, opts) {
      if (callback == null) dart.nullFailed(I[0], 641, 29, "callback");
      let start = opts && 'start' in opts ? opts.start : null;
      let end = opts && 'end' in opts ? opts.end : null;
      start == null ? start = this.firstLine() : null;
      end == null ? end = dart.nullCheck(this.lastLine()) + 1 : null;
      this.callArgs("eachLine", [start, end, dart.fn(line => {
          if (line == null) dart.nullFailed(I[0], 647, 17, "line");
          callback(new codemirror.LineHandle.new(line));
        }, T$.JsObjectToNull())]);
    }
    somethingSelected() {
      let t1;
      return core.bool.as((t1 = this.call("somethingSelected"), t1 == null ? false : t1));
    }
    getSelection(lineSep = null) {
      return T$.StringN().as(this.callArg("getSelection", lineSep));
    }
    setSelection(anchor, opts) {
      let t1;
      if (anchor == null) dart.nullFailed(I[0], 679, 30, "anchor");
      let head = opts && 'head' in opts ? opts.head : null;
      let options = opts && 'options' in opts ? opts.options : null;
      this.callArgs("setSelection", [anchor.toProxy(), (t1 = head, t1 == null ? null : t1.toProxy()), options]);
    }
    replaceSelection(replacement, select = null) {
      if (replacement == null) dart.nullFailed(I[0], 688, 32, "replacement");
      this.callArgs("replaceSelection", select != null ? [replacement, select] : [replacement]);
    }
    getSelections(lineSep = null) {
      let t1, t1$;
      return T$.IterableOfString().as((t1$ = (t1 = this.callArg("getSelections", lineSep), t1 == null ? null : dart.dgsend(t1, [core.String], 'cast', [])), t1$ == null ? T$.JSArrayOfString().of([]) : t1$));
    }
    setSelections(ranges, opts) {
      if (ranges == null) dart.nullFailed(I[0], 704, 37, "ranges");
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let options = opts && 'options' in opts ? opts.options : null;
      this.callArgs("setSelections", [T$.JsArrayOfJsObject().from(ranges[$map](js.JsObject, dart.fn(range => {
          if (range == null) dart.nullFailed(I[0], 706, 37, "range");
          return range.toProxy();
        }, T$.SpanToJsObject()))), primary, options]);
    }
    replaceSelections(replacement, opts) {
      if (replacement == null) dart.nullFailed(I[0], 715, 43, "replacement");
      let select = opts && 'select' in opts ? opts.select : null;
      this.callArgs("replaceSelections", select != null ? [js_utils.jsify(replacement), select] : [js_utils.jsify(replacement)]);
    }
    addSelection(opts) {
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      if (anchor == null) dart.nullFailed(I[0], 722, 40, "anchor");
      let head = opts && 'head' in opts ? opts.head : null;
      head == null ? head = anchor : null;
      this.callArgs("addSelection", [anchor.toProxy(), head.toProxy()]);
    }
    extendSelection(from, to = null, options = null) {
      let t1;
      if (from == null) dart.nullFailed(I[0], 734, 33, "from");
      this.callArgs("extendSelection", [from.toProxy(), (t1 = to, t1 == null ? null : t1.toProxy()), options]);
    }
    extendSelections(heads, options = null) {
      if (heads == null) dart.nullFailed(I[0], 739, 40, "heads");
      this.callArgs("extendSelections", [T$.JsArrayOfJsObject().from(heads[$map](js.JsObject, dart.fn(head => {
          if (head == null) dart.nullFailed(I[0], 741, 43, "head");
          return head.toProxy();
        }, T$.PositionToJsObject()))), options]);
    }
    extendSelectionsBy(f, options = null) {
      if (f == null) dart.nullFailed(I[0], 746, 45, "f");
      this.callArgs("extendSelectionsBy", [dart.fn((obj, i) => {
          if (obj == null) dart.nullFailed(I[0], 748, 17, "obj");
          if (i == null) dart.nullFailed(I[0], 748, 26, "i");
          return f(new codemirror.Span.fromProxy(obj), i).toProxy();
        }, T$.JsObjectAndintToJsObject()), options]);
    }
    setExtending(value) {
      if (value == null) dart.nullFailed(I[0], 756, 26, "value");
      this.callArg("setExtending", value);
    }
    getExtending() {
      return T$.boolN().as(this.call("getExtending"));
    }
    listSelections() {
      let t1;
      return T$.IterableNOfSpan().as((t1 = this.call("listSelections"), t1 == null ? null : dart.dsend(t1, 'map', [dart.fn(selection => {
          if (selection == null) dart.nullFailed(I[0], 770, 50, "selection");
          return new codemirror.Span.fromProxy(selection);
        }, T$.JsObjectToSpan())])));
    }
    replaceRange(replacement, from, to = null, origin = null) {
      let t1;
      if (replacement == null) dart.nullFailed(I[0], 782, 28, "replacement");
      if (from == null) dart.nullFailed(I[0], 782, 50, "from");
      this.callArgs("replaceRange", origin != null ? [replacement, from.toProxy(), dart.nullCheck(to).toProxy(), origin] : [replacement, from.toProxy(), (t1 = to, t1 == null ? null : t1.toProxy())]);
    }
    markClean() {
      return this.call("markClean");
    }
    changeGeneration(closeEvent = null) {
      return T$.intN().as(closeEvent == null ? this.call("changeGeneration") : this.callArg("changeGeneration", closeEvent));
    }
    isClean(generation = null) {
      let t1;
      return core.bool.as((t1 = generation == null ? this.call("isClean") : this.callArg("isClean", generation), t1 == null ? false : t1));
    }
    undo() {
      return this.call("undo");
    }
    redo() {
      return this.call("redo");
    }
    undoSelection() {
      return this.call("undoSelection");
    }
    redoSelection() {
      return this.call("redoSelection");
    }
    historySize() {
      let result = js.JsObject.as(this.call("historySize"));
      return new (T$.IdentityMapOfString$intN()).from(["undo", T$.intN().as(result._get("undo")), "redo", T$.intN().as(result._get("redo"))]);
    }
    clearHistory() {
      return this.call("clearHistory");
    }
    getHistory() {
      return T$.JsObjectN().as(this.call("getHistory"));
    }
    setHistory(history) {
      if (history == null) dart.nullFailed(I[0], 856, 28, "history");
      return this.callArg("setHistory", history);
    }
    getCursor(start = null) {
      return new codemirror.Position.fromProxy(start == null ? this.call("getCursor") : this.callArg("getCursor", start));
    }
    setCursor(pos, opts) {
      if (pos == null) dart.nullFailed(I[0], 870, 27, "pos");
      let options = opts && 'options' in opts ? opts.options : null;
      this.callArgs("setCursor", [pos.toProxy(), options]);
    }
    getRange(from, to, separator = null) {
      if (from == null) dart.nullFailed(I[0], 877, 29, "from");
      if (to == null) dart.nullFailed(I[0], 877, 44, "to");
      return T$.StringN().as(this.callArgs("getRange", [from.toProxy(), to.toProxy(), separator]));
    }
    posFromIndex(index) {
      if (index == null) dart.nullFailed(I[0], 885, 29, "index");
      return new codemirror.Position.fromProxy(this.callArg("posFromIndex", index));
    }
    indexFromPos(pos) {
      if (pos == null) dart.nullFailed(I[0], 889, 30, "pos");
      return T$.intN().as(this.callArg("indexFromPos", pos.toProxy()));
    }
    markText(from, to, opts) {
      if (from == null) dart.nullFailed(I[0], 936, 32, "from");
      if (to == null) dart.nullFailed(I[0], 936, 47, "to");
      let className = opts && 'className' in opts ? opts.className : null;
      let inclusiveLeft = opts && 'inclusiveLeft' in opts ? opts.inclusiveLeft : null;
      let inclusiveRight = opts && 'inclusiveRight' in opts ? opts.inclusiveRight : null;
      let atomic = opts && 'atomic' in opts ? opts.atomic : null;
      let collapsed = opts && 'collapsed' in opts ? opts.collapsed : null;
      let clearOnEnter = opts && 'clearOnEnter' in opts ? opts.clearOnEnter : null;
      let clearWhenEmpty = opts && 'clearWhenEmpty' in opts ? opts.clearWhenEmpty : null;
      let replacedWith = opts && 'replacedWith' in opts ? opts.replacedWith : null;
      let handleMouseEvents = opts && 'handleMouseEvents' in opts ? opts.handleMouseEvents : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
      let addToHistory = opts && 'addToHistory' in opts ? opts.addToHistory : null;
      let startStyle = opts && 'startStyle' in opts ? opts.startStyle : null;
      let endStyle = opts && 'endStyle' in opts ? opts.endStyle : null;
      let css = opts && 'css' in opts ? opts.css : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let shared = opts && 'shared' in opts ? opts.shared : null;
      let options = new (T$.IdentityMapOfString$dynamic()).new();
      if (className != null) options[$_set]("className", className);
      if (inclusiveLeft != null) options[$_set]("inclusiveLeft", inclusiveLeft);
      if (inclusiveRight != null) options[$_set]("inclusiveRight", inclusiveRight);
      if (atomic != null) options[$_set]("atomic", atomic);
      if (collapsed != null) options[$_set]("collapsed", collapsed);
      if (clearOnEnter != null) options[$_set]("clearOnEnter", clearOnEnter);
      if (clearWhenEmpty != null) options[$_set]("clearWhenEmpty", clearWhenEmpty);
      if (replacedWith != null) options[$_set]("replacedWith", replacedWith);
      if (handleMouseEvents != null) {
        options[$_set]("handleMouseEvents", handleMouseEvents);
      }
      if (readOnly != null) options[$_set]("readOnly", readOnly);
      if (addToHistory != null) options[$_set]("addToHistory", addToHistory);
      if (startStyle != null) options[$_set]("startStyle", startStyle);
      if (endStyle != null) options[$_set]("endStyle", endStyle);
      if (css != null) options[$_set]("css", css);
      if (title != null) options[$_set]("title", title);
      if (shared != null) options[$_set]("shared", shared);
      return new codemirror.TextMarker.new(T$.JsObjectN().as(this.callArgs("markText", [from.toProxy(), to.toProxy(), js_utils.jsify(options)])));
    }
    setBookmark(pos, opts) {
      if (pos == null) dart.nullFailed(I[0], 990, 35, "pos");
      let widget = opts && 'widget' in opts ? opts.widget : null;
      let insertLeft = opts && 'insertLeft' in opts ? opts.insertLeft : null;
      let shared = opts && 'shared' in opts ? opts.shared : null;
      let options = new (T$.IdentityMapOfString$dynamic()).new();
      if (widget != null) options[$_set]("widget", widget);
      if (insertLeft != null) options[$_set]("insertLeft", insertLeft);
      if (shared != null) options[$_set]("shared", shared);
      return new codemirror.TextMarker.new(T$.JsObjectN().as(this.callArgs("setBookmark", [pos.toProxy(), js_utils.jsify(options)])));
    }
    findMarks(from, to) {
      if (from == null) dart.nullFailed(I[0], 1003, 39, "from");
      if (to == null) dart.nullFailed(I[0], 1003, 54, "to");
      let result = this.callArgs("findMarks", [from.toProxy(), to.toProxy()]);
      if (!core.List.is(result)) return T$.JSArrayOfTextMarker().of([]);
      return T$.ListOfTextMarker().of(result[$map](codemirror.TextMarker, dart.fn(mark => new codemirror.TextMarker.new(T$.JsObjectN().as(mark)), T$.dynamicToTextMarker())));
    }
    findMarksAt(pos) {
      if (pos == null) dart.nullFailed(I[0], 1011, 41, "pos");
      let result = this.callArg("findMarksAt", pos.toProxy());
      if (!core.List.is(result)) return T$.JSArrayOfTextMarker().of([]);
      return T$.ListOfTextMarker().of(result[$map](codemirror.TextMarker, dart.fn(mark => new codemirror.TextMarker.new(T$.JsObjectN().as(mark)), T$.dynamicToTextMarker())));
    }
    getAllMarks() {
      let result = this.call("getAllMarks");
      if (!core.List.is(result)) return T$.JSArrayOfTextMarker().of([]);
      return T$.ListOfTextMarker().of(result[$map](codemirror.TextMarker, dart.fn(mark => new codemirror.TextMarker.new(T$.JsObjectN().as(mark)), T$.dynamicToTextMarker())));
    }
    getMode() {
      return this.call("getMode");
    }
    getModeName() {
      return T$.StringN().as(dart.dsend(this.getMode(), '_get', ["name"]));
    }
    getModeAt(pos) {
      if (pos == null) dart.nullFailed(I[0], 1039, 30, "pos");
      return this.editor.callArg("getModeAt", pos.toProxy());
    }
    getModeNameAt(pos) {
      if (pos == null) dart.nullFailed(I[0], 1042, 34, "pos");
      return T$.StringN().as(dart.dsend(this.getModeAt(pos), '_get', ["name"]));
    }
    getLineHandle(line) {
      return new codemirror.LineHandle.new(T$.JsObjectN().as(this.callArg("getLineHandle", line)));
    }
    getLineNumber(handle) {
      if (handle == null) dart.nullFailed(I[0], 1051, 33, "handle");
      return T$.intN().as(this.callArg("getLineNumber", handle.jsProxy));
    }
    get onChange() {
      return this.onEvent(dart.dynamic, "change", {argCount: 2});
    }
  };
  (codemirror.Doc.new = function(text, mode = null, firstLineNumber = null) {
    if (text == null) dart.nullFailed(I[0], 604, 14, "text");
    this[__Doc__editor] = null;
    this[__Doc__editor_isSet] = false;
    codemirror.Doc.__proto__.new.call(this, codemirror.Doc._create(text, mode, firstLineNumber));
    ;
  }).prototype = codemirror.Doc.prototype;
  (codemirror.Doc.fromProxy = function(proxy) {
    this[__Doc__editor] = null;
    this[__Doc__editor_isSet] = false;
    codemirror.Doc.__proto__.new.call(this, proxy);
    ;
  }).prototype = codemirror.Doc.prototype;
  dart.addTypeTests(codemirror.Doc);
  dart.addTypeCaches(codemirror.Doc);
  dart.setMethodSignature(codemirror.Doc, () => ({
    __proto__: dart.getMethods(codemirror.Doc.__proto__),
    getEditor: dart.fnType(codemirror.CodeMirror, []),
    getValue: dart.fnType(dart.nullable(core.String), [], [dart.nullable(core.String)]),
    setValue: dart.fnType(dart.void, [core.String]),
    lineCount: dart.fnType(dart.nullable(core.int), []),
    firstLine: dart.fnType(dart.nullable(core.int), []),
    lastLine: dart.fnType(dart.nullable(core.int), []),
    getLine: dart.fnType(dart.nullable(core.String), [dart.nullable(core.int)]),
    eachLine: dart.fnType(dart.void, [dart.fnType(dart.void, [codemirror.LineHandle])], {end: dart.nullable(core.int), start: dart.nullable(core.int)}, {}),
    somethingSelected: dart.fnType(core.bool, []),
    getSelection: dart.fnType(dart.nullable(core.String), [], [dart.nullable(core.String)]),
    setSelection: dart.fnType(dart.void, [codemirror.Position], {head: dart.nullable(codemirror.Position), options: dart.nullable(core.Map)}, {}),
    replaceSelection: dart.fnType(dart.void, [core.String], [dart.nullable(core.String)]),
    getSelections: dart.fnType(core.Iterable$(core.String), [], [dart.nullable(core.String)]),
    setSelections: dart.fnType(dart.void, [core.Iterable$(codemirror.Span)], {options: dart.nullable(core.Map), primary: dart.nullable(core.int)}, {}),
    replaceSelections: dart.fnType(dart.void, [core.Iterable$(core.String)], {select: dart.nullable(core.String)}, {}),
    addSelection: dart.fnType(dart.void, [], {head: dart.nullable(codemirror.Position)}, {anchor: codemirror.Position}),
    extendSelection: dart.fnType(dart.void, [codemirror.Position], [dart.nullable(codemirror.Position), dart.nullable(core.Map)]),
    extendSelections: dart.fnType(dart.void, [core.List$(codemirror.Position)], [dart.nullable(core.Map)]),
    extendSelectionsBy: dart.fnType(dart.void, [dart.fnType(codemirror.Position, [codemirror.Span, core.int])], [dart.nullable(core.Map)]),
    setExtending: dart.fnType(dart.void, [core.bool]),
    getExtending: dart.fnType(dart.nullable(core.bool), []),
    listSelections: dart.fnType(dart.nullable(core.Iterable$(codemirror.Span)), []),
    replaceRange: dart.fnType(dart.void, [core.String, codemirror.Position], [dart.nullable(codemirror.Position), dart.nullable(core.String)]),
    markClean: dart.fnType(dart.void, []),
    changeGeneration: dart.fnType(dart.nullable(core.int), [], [dart.nullable(core.bool)]),
    isClean: dart.fnType(core.bool, [], [dart.nullable(core.int)]),
    undo: dart.fnType(dart.void, []),
    redo: dart.fnType(dart.void, []),
    undoSelection: dart.fnType(dart.void, []),
    redoSelection: dart.fnType(dart.void, []),
    historySize: dart.fnType(core.Map$(core.String, dart.nullable(core.int)), []),
    clearHistory: dart.fnType(dart.void, []),
    getHistory: dart.fnType(dart.nullable(js.JsObject), []),
    setHistory: dart.fnType(dart.void, [js.JsObject]),
    getCursor: dart.fnType(codemirror.Position, [], [dart.nullable(core.String)]),
    setCursor: dart.fnType(dart.void, [codemirror.Position], {options: dart.nullable(core.Map)}, {}),
    getRange: dart.fnType(dart.nullable(core.String), [codemirror.Position, codemirror.Position], [dart.nullable(core.String)]),
    posFromIndex: dart.fnType(codemirror.Position, [core.int]),
    indexFromPos: dart.fnType(dart.nullable(core.int), [codemirror.Position]),
    markText: dart.fnType(codemirror.TextMarker, [codemirror.Position, codemirror.Position], {addToHistory: dart.nullable(core.bool), atomic: dart.nullable(core.bool), className: dart.nullable(core.String), clearOnEnter: dart.nullable(core.bool), clearWhenEmpty: dart.nullable(core.bool), collapsed: dart.nullable(core.bool), css: dart.nullable(core.String), endStyle: dart.nullable(core.String), handleMouseEvents: dart.nullable(core.bool), inclusiveLeft: dart.nullable(core.bool), inclusiveRight: dart.nullable(core.bool), readOnly: dart.nullable(core.bool), replacedWith: dart.nullable(html.Element), shared: dart.nullable(core.bool), startStyle: dart.nullable(core.String), title: dart.nullable(core.String)}, {}),
    setBookmark: dart.fnType(codemirror.TextMarker, [codemirror.Position], {insertLeft: dart.nullable(core.bool), shared: dart.nullable(core.bool), widget: dart.nullable(html.Element)}, {}),
    findMarks: dart.fnType(core.List$(codemirror.TextMarker), [codemirror.Position, codemirror.Position]),
    findMarksAt: dart.fnType(core.List$(codemirror.TextMarker), [codemirror.Position]),
    getAllMarks: dart.fnType(core.List$(codemirror.TextMarker), []),
    getMode: dart.fnType(dart.dynamic, []),
    getModeName: dart.fnType(dart.nullable(core.String), []),
    getModeAt: dart.fnType(dart.dynamic, [codemirror.Position]),
    getModeNameAt: dart.fnType(dart.nullable(core.String), [codemirror.Position]),
    getLineHandle: dart.fnType(codemirror.LineHandle, [dart.nullable(core.int)]),
    getLineNumber: dart.fnType(dart.nullable(core.int), [codemirror.LineHandle])
  }));
  dart.setGetterSignature(codemirror.Doc, () => ({
    __proto__: dart.getGetters(codemirror.Doc.__proto__),
    [_editor]: codemirror.CodeMirror,
    editor: codemirror.CodeMirror,
    onChange: async.Stream
  }));
  dart.setLibraryUri(codemirror.Doc, I[1]);
  dart.setFieldSignature(codemirror.Doc, () => ({
    __proto__: dart.getFields(codemirror.Doc.__proto__),
    [__Doc__editor]: dart.fieldType(dart.nullable(codemirror.CodeMirror)),
    [__Doc__editor_isSet]: dart.fieldType(core.bool)
  }));
  var line$ = dart.privateName(codemirror, "Position.line");
  var ch$ = dart.privateName(codemirror, "Position.ch");
  codemirror.Position = class Position extends core.Object {
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get ch() {
      return this[ch$];
    }
    set ch(value) {
      super.ch = value;
    }
    toProxy() {
      return js_utils.jsify(new (T$.IdentityMapOfString$intN()).from(["line", this.line, "ch", this.ch]));
    }
    _equals(other) {
      if (other == null) return false;
      return codemirror.Position.is(other) && this.line == other.line && this.ch == other.ch;
    }
    get hashCode() {
      return ((dart.nullCheck(this.line) << 8 | dart.nullCheck(this.ch)) >>> 0)[$hashCode];
    }
    compareTo(other) {
      codemirror.Position.as(other);
      if (other == null) dart.nullFailed(I[0], 1083, 26, "other");
      if (this.line == other.line) return dart.nullCheck(this.ch) - dart.nullCheck(other.ch);
      return dart.nullCheck(this.line) - dart.nullCheck(other.line);
    }
    ['<'](other) {
      if (other == null) dart.nullFailed(I[0], 1088, 28, "other");
      return dart.notNull(this.compareTo(other)) < 0;
    }
    ['<='](other) {
      if (other == null) dart.nullFailed(I[0], 1090, 29, "other");
      return dart.notNull(this.compareTo(other)) <= 0;
    }
    ['>='](other) {
      if (other == null) dart.nullFailed(I[0], 1092, 29, "other");
      return dart.notNull(this.compareTo(other)) >= 0;
    }
    ['>'](other) {
      if (other == null) dart.nullFailed(I[0], 1094, 28, "other");
      return dart.notNull(this.compareTo(other)) > 0;
    }
    toString() {
      return "[" + dart.str(this.line) + ":" + dart.str(this.ch) + "]";
    }
  };
  (codemirror.Position.new = function(line, ch) {
    this[line$] = line;
    this[ch$] = ch;
    ;
  }).prototype = codemirror.Position.prototype;
  (codemirror.Position.fromProxy = function(obj) {
    this[line$] = T$.intN().as(dart.dsend(obj, '_get', ["line"]));
    this[ch$] = T$.intN().as(dart.dsend(obj, '_get', ["ch"]));
    ;
  }).prototype = codemirror.Position.prototype;
  dart.addTypeTests(codemirror.Position);
  dart.addTypeCaches(codemirror.Position);
  codemirror.Position[dart.implements] = () => [core.Comparable$(codemirror.Position)];
  dart.setMethodSignature(codemirror.Position, () => ({
    __proto__: dart.getMethods(codemirror.Position.__proto__),
    toProxy: dart.fnType(js.JsObject, []),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    '<': dart.fnType(core.bool, [codemirror.Position]),
    '<=': dart.fnType(core.bool, [codemirror.Position]),
    '>=': dart.fnType(core.bool, [codemirror.Position]),
    '>': dart.fnType(core.bool, [codemirror.Position])
  }));
  dart.setLibraryUri(codemirror.Position, I[1]);
  dart.setFieldSignature(codemirror.Position, () => ({
    __proto__: dart.getFields(codemirror.Position.__proto__),
    line: dart.finalFieldType(dart.nullable(core.int)),
    ch: dart.finalFieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(codemirror.Position, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(codemirror.Position, ['hashCode']);
  codemirror.ModeInfo = class ModeInfo extends codemirror.ProxyHolder {
    static new(proxy) {
      if (proxy == null) dart.nullFailed(I[0], 1101, 29, "proxy");
      return new codemirror.ModeInfo.__(proxy);
    }
    get name() {
      return T$.StringN().as(dart.nullCheck(this.jsProxy)._get("name"));
    }
    get mime() {
      return T$.StringN().as(dart.nullCheck(this.jsProxy)._get("mime"));
    }
    get mimes() {
      return T$.ListNOfString().as(dart.test(dart.nullCheck(this.jsProxy).hasProperty("mimes")) ? dart.nullCheck(this.jsProxy)._get("mimes") : T$.JSArrayOfStringN().of([this.mime]));
    }
    get mode() {
      return T$.StringN().as(dart.nullCheck(this.jsProxy)._get("mode"));
    }
    get ext() {
      return T$.ListOfString().from(core.Iterable.as(dart.nullCheck(this.jsProxy)._get("ext")));
    }
    get alias() {
      return T$.ListNOfString().as(dart.test(dart.nullCheck(this.jsProxy).hasProperty("alias")) ? dart.nullCheck(this.jsProxy)._get("alias") : T$.JSArrayOfString().of([]));
    }
  };
  (codemirror.ModeInfo.__ = function(proxy) {
    if (proxy == null) dart.nullFailed(I[0], 1103, 23, "proxy");
    codemirror.ModeInfo.__proto__.new.call(this, proxy);
    ;
  }).prototype = codemirror.ModeInfo.prototype;
  dart.addTypeTests(codemirror.ModeInfo);
  dart.addTypeCaches(codemirror.ModeInfo);
  dart.setGetterSignature(codemirror.ModeInfo, () => ({
    __proto__: dart.getGetters(codemirror.ModeInfo.__proto__),
    name: dart.nullable(core.String),
    mime: dart.nullable(core.String),
    mimes: dart.nullable(core.List$(core.String)),
    mode: dart.nullable(core.String),
    ext: core.List$(core.String),
    alias: dart.nullable(core.List$(core.String))
  }));
  dart.setLibraryUri(codemirror.ModeInfo, I[1]);
  var head$ = dart.privateName(codemirror, "Span.head");
  var anchor$ = dart.privateName(codemirror, "Span.anchor");
  codemirror.Span = class Span extends core.Object {
    get head() {
      return this[head$];
    }
    set head(value) {
      super.head = value;
    }
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    toProxy() {
      return js_utils.jsify(new (T$.IdentityMapOfString$JsObject()).from(["head", this.head.toProxy(), "anchor", this.anchor.toProxy()]));
    }
    _equals(other) {
      if (other == null) return false;
      return codemirror.Span.is(other) && dart.equals(this.head, other.head) && dart.equals(this.anchor, other.anchor);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.head)) ^ dart.notNull(dart.hashCode(this.anchor))) >>> 0;
    }
    toString() {
      return dart.str(this.head) + "=>" + dart.str(this.anchor) + "]";
    }
  };
  (codemirror.Span.new = function(head, anchor) {
    if (head == null) dart.nullFailed(I[0], 1129, 13, "head");
    if (anchor == null) dart.nullFailed(I[0], 1129, 24, "anchor");
    this[head$] = head;
    this[anchor$] = anchor;
    ;
  }).prototype = codemirror.Span.prototype;
  (codemirror.Span.fromProxy = function(obj) {
    this[head$] = new codemirror.Position.fromProxy(dart.dsend(obj, '_get', ["head"]));
    this[anchor$] = new codemirror.Position.fromProxy(dart.dsend(obj, '_get', ["anchor"]));
    ;
  }).prototype = codemirror.Span.prototype;
  dart.addTypeTests(codemirror.Span);
  dart.addTypeCaches(codemirror.Span);
  dart.setMethodSignature(codemirror.Span, () => ({
    __proto__: dart.getMethods(codemirror.Span.__proto__),
    toProxy: dart.fnType(js.JsObject, [])
  }));
  dart.setLibraryUri(codemirror.Span, I[1]);
  dart.setFieldSignature(codemirror.Span, () => ({
    __proto__: dart.getFields(codemirror.Span.__proto__),
    head: dart.finalFieldType(codemirror.Position),
    anchor: dart.finalFieldType(codemirror.Position)
  }));
  dart.defineExtensionMethods(codemirror.Span, ['_equals', 'toString']);
  dart.defineExtensionAccessors(codemirror.Span, ['hashCode']);
  codemirror.TextMarker = class TextMarker extends codemirror.ProxyHolder {
    clear() {
      return this.call("clear");
    }
    find() {
      let result = this.call("find");
      if (!js.JsObject.is(result)) return null;
      try {
        if (dart.test(result.hasProperty("from"))) {
          return T$.JSArrayOfPosition().of([new codemirror.Position.fromProxy(result._get("from")), new codemirror.Position.fromProxy(result._get("to"))]);
        } else {
          return T$.JSArrayOfPosition().of([new codemirror.Position.fromProxy(result)]);
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          return null;
        } else
          throw e$;
      }
    }
    findStart() {
      let positions = this.find();
      return positions == null || dart.test(positions[$isEmpty]) ? null : positions[$first];
    }
    changed() {
      return this.call("changed");
    }
  };
  (codemirror.TextMarker.new = function(jsProxy) {
    codemirror.TextMarker.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.TextMarker.prototype;
  dart.addTypeTests(codemirror.TextMarker);
  dart.addTypeCaches(codemirror.TextMarker);
  dart.setMethodSignature(codemirror.TextMarker, () => ({
    __proto__: dart.getMethods(codemirror.TextMarker.__proto__),
    clear: dart.fnType(dart.void, []),
    find: dart.fnType(dart.nullable(core.List$(codemirror.Position)), []),
    findStart: dart.fnType(dart.nullable(codemirror.Position), []),
    changed: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(codemirror.TextMarker, I[1]);
  codemirror.LineWidget = class LineWidget extends codemirror.ProxyHolder {
    clear() {
      return this.call("clear");
    }
    changed() {
      return this.call("changed");
    }
  };
  (codemirror.LineWidget.new = function(jsProxy) {
    codemirror.LineWidget.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.LineWidget.prototype;
  dart.addTypeTests(codemirror.LineWidget);
  dart.addTypeCaches(codemirror.LineWidget);
  dart.setMethodSignature(codemirror.LineWidget, () => ({
    __proto__: dart.getMethods(codemirror.LineWidget.__proto__),
    clear: dart.fnType(dart.void, []),
    changed: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(codemirror.LineWidget, I[1]);
  codemirror.LineHandle = class LineHandle extends codemirror.ProxyHolder {
    get height() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("height"));
    }
    get text() {
      return T$.StringN().as(dart.nullCheck(this.jsProxy)._get("text"));
    }
  };
  (codemirror.LineHandle.new = function(jsProxy) {
    codemirror.LineHandle.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.LineHandle.prototype;
  dart.addTypeTests(codemirror.LineHandle);
  dart.addTypeCaches(codemirror.LineHandle);
  dart.setGetterSignature(codemirror.LineHandle, () => ({
    __proto__: dart.getGetters(codemirror.LineHandle.__proto__),
    height: dart.nullable(core.num),
    text: dart.nullable(core.String)
  }));
  dart.setLibraryUri(codemirror.LineHandle, I[1]);
  codemirror.ScrollInfo = class ScrollInfo extends codemirror.ProxyHolder {
    get left() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("left"));
    }
    get top() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("top"));
    }
    get width() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("width"));
    }
    get height() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("height"));
    }
    get clientWidth() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("clientWidth"));
    }
    get clientHeight() {
      return T$.numN().as(dart.nullCheck(this.jsProxy)._get("clientHeight"));
    }
  };
  (codemirror.ScrollInfo.new = function(jsProxy) {
    codemirror.ScrollInfo.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.ScrollInfo.prototype;
  dart.addTypeTests(codemirror.ScrollInfo);
  dart.addTypeCaches(codemirror.ScrollInfo);
  dart.setGetterSignature(codemirror.ScrollInfo, () => ({
    __proto__: dart.getGetters(codemirror.ScrollInfo.__proto__),
    left: dart.nullable(core.num),
    top: dart.nullable(core.num),
    width: dart.nullable(core.num),
    height: dart.nullable(core.num),
    clientWidth: dart.nullable(core.num),
    clientHeight: dart.nullable(core.num)
  }));
  dart.setLibraryUri(codemirror.ScrollInfo, I[1]);
  var start = dart.privateName(codemirror, "Token.start");
  var end = dart.privateName(codemirror, "Token.end");
  var string = dart.privateName(codemirror, "Token.string");
  var type = dart.privateName(codemirror, "Token.type");
  var state = dart.privateName(codemirror, "Token.state");
  codemirror.Token = class Token extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      super.end = value;
    }
    get string() {
      return this[string];
    }
    set string(value) {
      super.string = value;
    }
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      super.state = value;
    }
    toString() {
      return dart.nullCheck(this.string);
    }
  };
  (codemirror.Token.fromProxy = function(obj) {
    this[start] = T$.intN().as(dart.dsend(obj, '_get', ["start"]));
    this[end] = T$.intN().as(dart.dsend(obj, '_get', ["end"]));
    this[string] = T$.StringN().as(dart.dsend(obj, '_get', ["string"]));
    this[type] = T$.StringN().as(dart.dsend(obj, '_get', ["type"]));
    this[state] = T$.JsObjectN().as(dart.dsend(obj, '_get', ["state"]));
    ;
  }).prototype = codemirror.Token.prototype;
  dart.addTypeTests(codemirror.Token);
  dart.addTypeCaches(codemirror.Token);
  dart.setLibraryUri(codemirror.Token, I[1]);
  dart.setFieldSignature(codemirror.Token, () => ({
    __proto__: dart.getFields(codemirror.Token.__proto__),
    start: dart.finalFieldType(dart.nullable(core.int)),
    end: dart.finalFieldType(dart.nullable(core.int)),
    string: dart.finalFieldType(dart.nullable(core.String)),
    type: dart.finalFieldType(dart.nullable(core.String)),
    state: dart.finalFieldType(dart.nullable(js.JsObject))
  }));
  dart.defineExtensionMethods(codemirror.Token, ['toString']);
  dart.trackLibraries("packages/codemirror/codemirror", {
    "package:codemirror/codemirror.dart": codemirror
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["codemirror.dart"],"names":[],"mappings":"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","file":"codemirror.unsound.ddc.js"}');
  // Exports:
  return {
    codemirror: codemirror
  };
}));

//# sourceMappingURL=codemirror.unsound.ddc.js.map
