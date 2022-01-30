define(['dart_sdk', 'packages/petitparser/src/context/context'], (function load__packages__petitparser__src__parser__action__continuation(dart_sdk, packages__petitparser__src__context__context) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const result = packages__petitparser__src__context__context.src__context__result;
  const context = packages__petitparser__src__context__context.src__context__context;
  const delegate = packages__petitparser__src__context__context.src__parser__combinator__delegate;
  const parser = packages__petitparser__src__context__context.src__core__parser;
  var continuation = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/petitparser/src/parser/action/continuation.dart",
    "package:petitparser/src/parser/action/continuation.dart"
  ];
  var handler$ = dart.privateName(continuation, "ContinuationParser.handler");
  var _parseDelegateOn = dart.privateName(continuation, "_parseDelegateOn");
  const _is_ContinuationParser_default = Symbol('_is_ContinuationParser_default');
  continuation.ContinuationParser$ = dart.generic((T, R) => {
    var ContinuationParserOfT$R = () => (ContinuationParserOfT$R = dart.constFn(continuation.ContinuationParser$(T, R)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var ContextToResultOfT = () => (ContextToResultOfT = dart.constFn(dart.fnType(ResultOfT(), [context.Context])))();
    var FnAndContextToResultOfR = () => (FnAndContextToResultOfR = dart.constFn(dart.fnType(ResultOfR(), [ContextToResultOfT(), context.Context])))();
    var ResultOfR = () => (ResultOfR = dart.constFn(result.Result$(R)))();
    class ContinuationParser extends delegate.DelegateParser$(T, R) {
      get handler() {
        return this[handler$];
      }
      set handler(value) {
        super.handler = value;
      }
      parseOn(context) {
        let t1, t0;
        if (context == null) dart.nullFailed(I[0], 44, 29, "context");
        t0 = dart.bind(this, _parseDelegateOn);
        t1 = context;
        return this.handler(t0, t1);
      }
      [_parseDelegateOn](context) {
        if (context == null) dart.nullFailed(I[0], 46, 38, "context");
        return this.delegate.parseOn(context);
      }
      copy() {
        return new (ContinuationParserOfT$R()).new(this.delegate, this.handler);
      }
      hasEqualProperties(other) {
        ContinuationParserOfT$R().as(other);
        if (other == null) dart.nullFailed(I[0], 53, 52, "other");
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.handler, FnAndContextToResultOfR().as(other.handler));
      }
    }
    (ContinuationParser.new = function(delegate, handler) {
      if (delegate == null) dart.nullFailed(I[0], 38, 32, "delegate");
      if (handler == null) dart.nullFailed(I[0], 38, 47, "handler");
      this[handler$] = handler;
      ContinuationParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = ContinuationParser.prototype;
    dart.addTypeTests(ContinuationParser);
    ContinuationParser.prototype[_is_ContinuationParser_default] = true;
    dart.addTypeCaches(ContinuationParser);
    dart.setMethodSignature(ContinuationParser, () => ({
      __proto__: dart.getMethods(ContinuationParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      [_parseDelegateOn]: dart.fnType(result.Result$(T), [context.Context]),
      copy: dart.fnType(continuation.ContinuationParser$(T, R), [])
    }));
    dart.setLibraryUri(ContinuationParser, I[1]);
    dart.setFieldSignature(ContinuationParser, () => ({
      __proto__: dart.getFields(ContinuationParser.__proto__),
      handler: dart.finalFieldType(dart.fnType(result.Result$(R), [dart.fnType(result.Result$(T), [context.Context]), context.Context]))
    }));
    return ContinuationParser;
  });
  continuation.ContinuationParser = continuation.ContinuationParser$();
  dart.addTypeTests(continuation.ContinuationParser, _is_ContinuationParser_default);
  continuation['ContinuationParserExtension|callCC'] = function ContinuationParserExtension$124callCC(T, R, $this, handler) {
    if ($this == null) dart.nullFailed(I[0], 31, 13, "#this");
    if (handler == null) dart.nullFailed(I[0], 31, 49, "handler");
    return new (continuation.ContinuationParser$(T, R)).new($this, handler);
  };
  continuation['ContinuationParserExtension|get#callCC'] = function ContinuationParserExtension$124get$35callCC(T, $this) {
    if ($this == null) dart.nullFailed(I[0], 31, 13, "#this");
    return dart.fn((R, handler) => {
      if (handler == null) dart.nullFailed(I[0], 31, 49, "handler");
      return continuation['ContinuationParserExtension|callCC'](T, R, $this, handler);
    }, dart.gFnType(R => {
      var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
      var ResultOfR = () => (ResultOfR = dart.constFn(result.Result$(R)))();
      return [ParserOfR(), [dart.fnType(ResultOfR(), [dart.fnType(result.Result$(T), [context.Context]), context.Context])]];
    }, R => {
      var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
      var ResultOfR = () => (ResultOfR = dart.constFn(result.Result$(R)))();
      return [T$.ObjectN()];
    }));
  };
  dart.trackLibraries("packages/petitparser/src/parser/action/continuation", {
    "package:petitparser/src/parser/action/continuation.dart": continuation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["continuation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAwCkC;;;;;;cAGN;;;AAAY,uBAAQ;aAAkB,OAAO;cAAjC,AAAO;MAA2B;;YAErC;AAAY,cAAA,AAAS,uBAAQ,OAAO;MAAC;;AAIpE,mDAAyB,eAAU;MAAQ;;qCAGE;;AAC7C,cAAgC,WAA1B,yBAAmB,KAAK,MAAa,YAAR,2CAAW,AAAM,KAAD;MAAQ;;uCAhBlC,UAAe;UAAf;UAAe;;AAAW,kDAAM,QAAQ;;IAAC;;;;;;;;;;;;;;;;;;;mHAPxB;;;AAC1C,mEAA+B,OAAO;EAAC;;;AADjC;UAAoC;AAApC,oFAAO;;;;;;;;;;EAC0B","file":"continuation.unsound.ddc.js"}');
  // Exports:
  return {
    src__parser__action__continuation: continuation
  };
}));

//# sourceMappingURL=continuation.unsound.ddc.js.map
