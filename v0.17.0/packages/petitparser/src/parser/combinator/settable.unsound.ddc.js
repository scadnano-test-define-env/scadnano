define(['dart_sdk', 'packages/petitparser/src/context/context'], (function load__packages__petitparser__src__parser__combinator__settable(dart_sdk, packages__petitparser__src__context__context) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = packages__petitparser__src__context__context.src__core__parser;
  const delegate = packages__petitparser__src__context__context.src__parser__combinator__delegate;
  const result = packages__petitparser__src__context__context.src__context__result;
  const context = packages__petitparser__src__context__context.src__context__context;
  var resolvable = Object.create(dart.library);
  var settable = Object.create(dart.library);
  var failure = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:petitparser/src/parser/utils/resolvable.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/settable.dart",
    "package:petitparser/src/parser/combinator/settable.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/misc/failure.dart",
    "package:petitparser/src/parser/misc/failure.dart"
  ];
  const _is_ResolvableParser_default = Symbol('_is_ResolvableParser_default');
  resolvable.ResolvableParser$ = dart.generic(R => {
    class ResolvableParser extends core.Object {}
    (ResolvableParser.new = function() {
      ;
    }).prototype = ResolvableParser.prototype;
    dart.addTypeTests(ResolvableParser);
    ResolvableParser.prototype[_is_ResolvableParser_default] = true;
    dart.addTypeCaches(ResolvableParser);
    ResolvableParser[dart.implements] = () => [parser.Parser$(R)];
    dart.setLibraryUri(ResolvableParser, I[0]);
    return ResolvableParser;
  });
  resolvable.ResolvableParser = resolvable.ResolvableParser$();
  dart.addTypeTests(resolvable.ResolvableParser, _is_ResolvableParser_default);
  const _is_SettableParser_default = Symbol('_is_SettableParser_default');
  settable.SettableParser$ = dart.generic(R => {
    var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
    var SettableParserOfR = () => (SettableParserOfR = dart.constFn(settable.SettableParser$(R)))();
    class SettableParser extends delegate.DelegateParser$(R, R) {
      set(parser) {
        ParserOfR().as(parser);
        if (parser == null) dart.nullFailed(I[1], 36, 22, "parser");
        return this.replace(this.children[$_get](0), parser);
      }
      resolve() {
        return this.delegate;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[1], 42, 29, "context");
        return this.delegate.parseOn(context);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[1], 45, 26, "buffer");
        if (position == null) dart.nullFailed(I[1], 45, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (SettableParserOfR()).new(this.delegate);
      }
    }
    (SettableParser.new = function(delegate) {
      if (delegate == null) dart.nullFailed(I[1], 33, 28, "delegate");
      SettableParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = SettableParser.prototype;
    dart.addTypeTests(SettableParser);
    SettableParser.prototype[_is_SettableParser_default] = true;
    dart.addTypeCaches(SettableParser);
    SettableParser[dart.implements] = () => [resolvable.ResolvableParser$(R)];
    dart.setMethodSignature(SettableParser, () => ({
      __proto__: dart.getMethods(SettableParser.__proto__),
      set: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      resolve: dart.fnType(parser.Parser$(R), []),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(settable.SettableParser$(R), [])
    }));
    dart.setLibraryUri(SettableParser, I[2]);
    return SettableParser;
  });
  settable.SettableParser = settable.SettableParser$();
  dart.addTypeTests(settable.SettableParser, _is_SettableParser_default);
  settable['SettableParserExtension|settable'] = function SettableParserExtension$124settable(T, $this) {
    if ($this == null) dart.nullFailed(I[1], 15, 21, "#this");
    return new (settable.SettableParser$(T)).new($this);
  };
  settable['SettableParserExtension|get#settable'] = function SettableParserExtension$124get$35settable(T, $this) {
    if ($this == null) dart.nullFailed(I[1], 15, 21, "#this");
    return dart.fn(() => settable['SettableParserExtension|settable'](T, $this), dart.fnType(settable.SettableParser$(T), []));
  };
  settable.undefined = function undefined(R, message = "undefined parser") {
    if (message == null) dart.nullFailed(I[1], 26, 40, "message");
    return settable['SettableParserExtension|settable'](R, failure.failure(R, message));
  };
  var message$ = dart.privateName(failure, "FailureParser.message");
  const _is_FailureParser_default = Symbol('_is_FailureParser_default');
  failure.FailureParser$ = dart.generic(R => {
    var FailureParserOfR = () => (FailureParserOfR = dart.constFn(failure.FailureParser$(R)))();
    class FailureParser extends parser.Parser$(R) {
      get message() {
        return this[message$];
      }
      set message(value) {
        super.message = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[3], 19, 29, "context");
        return context.failure(R, this.message);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[3], 22, 26, "buffer");
        if (position == null) dart.nullFailed(I[3], 22, 38, "position");
        return -1;
      }
      toString() {
        return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
      }
      copy() {
        return new (FailureParserOfR()).new(this.message);
      }
      hasEqualProperties(other) {
        FailureParserOfR().as(other);
        if (other == null) dart.nullFailed(I[3], 31, 44, "other");
        return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
      }
    }
    (FailureParser.new = function(message) {
      if (message == null) dart.nullFailed(I[3], 13, 22, "message");
      this[message$] = message;
      FailureParser.__proto__.new.call(this);
      ;
    }).prototype = FailureParser.prototype;
    dart.addTypeTests(FailureParser);
    FailureParser.prototype[_is_FailureParser_default] = true;
    dart.addTypeCaches(FailureParser);
    dart.setMethodSignature(FailureParser, () => ({
      __proto__: dart.getMethods(FailureParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(failure.FailureParser$(R), [])
    }));
    dart.setLibraryUri(FailureParser, I[4]);
    dart.setFieldSignature(FailureParser, () => ({
      __proto__: dart.getFields(FailureParser.__proto__),
      message: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(FailureParser, ['toString']);
    return FailureParser;
  });
  failure.FailureParser = failure.FailureParser$();
  dart.addTypeTests(failure.FailureParser, _is_FailureParser_default);
  failure.failure = function failure$(R, message = "unable to parse") {
    if (message == null) dart.nullFailed(I[3], 8, 30, "message");
    return new (failure.FailureParser$(R)).new(message);
  };
  dart.trackLibraries("packages/petitparser/src/parser/combinator/settable", {
    "package:petitparser/src/parser/utils/resolvable.dart": resolvable,
    "package:petitparser/src/parser/combinator/settable.dart": settable,
    "package:petitparser/src/parser/misc/failure.dart": failure
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../utils/resolvable.dart","settable.dart","../misc/failure.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMA;;;;;;;;;;;;;;;;uBC6BqB;;AAAW,4BAAQ,AAAQ,qBAAC,IAAI,MAAM;MAAC;;AAGnC;MAAQ;;YAGL;AAAY,cAAA,AAAS,uBAAQ,OAAO;MAAC;kBAGxC,QAAY;YAAZ;YAAY;AAC/B,cAAA,AAAS,2BAAY,MAAM,EAAE,QAAQ;MAAC;;AAGd,6CAAkB;MAAS;;;UAhB9B;AAAY,8CAAM,QAAQ;;IAAC;;;;;;;;;;;;;;;;;;;AAlBpB;EAAuB;;;AAArC;EAAqC;;QAWlB;AACnC,UAAoB,iDAApB,mBAAW,OAAO;EAAY;;;;;;MCXnB;;;;;;;YAGa;AAAY,cAAA,AAAQ,QAAD,YAAY;MAAQ;kBAG1C,QAAY;YAAZ;YAAY;AAAa,gBAAC;MAAC;;AAG7B,cAA+B,UAAtB,sBAAW,eAAE,gBAAO;MAAE;;AAGzB,4CAAiB;MAAQ;;8BAGX;;AACrC,cAAgC,WAA1B,yBAAmB,KAAK,MAAK,AAAQ,gBAAG,AAAM,KAAD;MAAQ;;;UAnB5C;;AAAnB;;IAA2B;;;;;;;;;;;;;;;;;;;;QALA;AACzB,+CAAiB,OAAO;EAAC","file":"settable.unsound.ddc.js"}');
  // Exports:
  return {
    src__parser__utils__resolvable: resolvable,
    src__parser__combinator__settable: settable,
    src__parser__misc__failure: failure
  };
}));

//# sourceMappingURL=settable.unsound.ddc.js.map
