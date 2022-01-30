define(['dart_sdk'], (function load__packages__petitparser__src__context__context(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var delegate = Object.create(dart.library);
  var parser = Object.create(dart.library);
  var success = Object.create(dart.library);
  var result = Object.create(dart.library);
  var context = Object.create(dart.library);
  var failure = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var annotations = Object.create(dart.library);
  var token$ = Object.create(dart.library);
  var sequence = Object.create(dart.library);
  var list = Object.create(dart.library);
  var optional = Object.create(dart.library);
  var choice = Object.create(dart.library);
  var failure_joiner = Object.create(dart.library);
  var char$ = Object.create(dart.library);
  var predicate = Object.create(dart.library);
  var parser$ = Object.create(dart.library);
  var code = Object.create(dart.library);
  var token$0 = Object.create(dart.library);
  var matches_skipping = Object.create(dart.library);
  var matches = Object.create(dart.library);
  var possessive = Object.create(dart.library);
  var unbounded = Object.create(dart.library);
  var repeating = Object.create(dart.library);
  var any = Object.create(dart.library);
  var and = Object.create(dart.library);
  var map = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $hashCode = dartx.hashCode;
  var $iterator = dartx.iterator;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $codeUnitAt = dartx.codeUnitAt;
  var $toString = dartx.toString;
  var $round = dartx.round;
  var $codeUnits = dartx.codeUnits;
  var $map = dartx.map;
  var $join = dartx.join;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    JSArrayOfParser: () => (T$.JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser.Parser)))(),
    LinkedHashSetOfParser: () => (T$.LinkedHashSetOfParser = dart.constFn(collection.LinkedHashSet$(parser.Parser)))(),
    ParserL: () => (T$.ParserL = dart.constFn(dart.legacy(parser.Parser)))(),
    JSArrayOfint: () => (T$.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    ListOfParser: () => (T$.ListOfParser = dart.constFn(core.List$(parser.Parser)))(),
    ParserOfList: () => (T$.ParserOfList = dart.constFn(parser.Parser$(core.List)))(),
    ParserToParserOfList: () => (T$.ParserToParserOfList = dart.constFn(dart.fnType(T$.ParserOfList(), [parser.Parser])))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    FailureOfTAndFailureOfTToFailureOfT: () => (T$.FailureOfTAndFailureOfTToFailureOfT = dart.constFn(dart.gFnType(T => [failure.Failure$(T), [failure.Failure$(T), failure.Failure$(T)]], T => [T$.ObjectN()])))(),
    FailureAndFailureToFailure: () => (T$.FailureAndFailureToFailure = dart.constFn(dart.fnType(failure.Failure, [failure.Failure, failure.Failure])))(),
    FailureAndFailureToNFailure: () => (T$.FailureAndFailureToNFailure = dart.constFn(dart.nullable(T$.FailureAndFailureToFailure())))(),
    Parser__ToChoiceParser: () => (T$.Parser__ToChoiceParser = dart.constFn(dart.fnType(choice.ChoiceParser, [parser.Parser], {failureJoiner: T$.FailureAndFailureToNFailure()}, {})))(),
    intToString: () => (T$.intToString = dart.constFn(dart.fnType(core.String, [core.int])))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], T$.ParserL());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: core.pragma.prototype,
        [pragma_options]: null,
        [pragma_name]: "vm:prefer-inline"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: core.pragma.prototype,
        [pragma_options]: null,
        [pragma_name]: "dart2js:tryInline"
      });
    },
    get C3() {
      return C[3] = dart.fn(failure_joiner.selectLast, T$.FailureOfTAndFailureOfTToFailureOfT());
    },
    get C4() {
      return C[4] = dart.fn(code._toFormattedChar, T$.intToString());
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/delegate.dart",
    "org-dartlang-app:///packages/petitparser/src/core/parser.dart",
    "package:petitparser/src/core/parser.dart",
    "package:petitparser/src/parser/combinator/delegate.dart",
    "org-dartlang-app:///packages/petitparser/src/context/success.dart",
    "org-dartlang-app:///packages/petitparser/src/context/result.dart",
    "org-dartlang-app:///packages/petitparser/src/context/context.dart",
    "package:petitparser/src/context/context.dart",
    "package:petitparser/src/context/result.dart",
    "package:petitparser/src/context/success.dart",
    "org-dartlang-app:///packages/petitparser/src/context/failure.dart",
    "package:petitparser/src/context/failure.dart",
    "org-dartlang-app:///packages/petitparser/src/core/exception.dart",
    "package:petitparser/src/core/exception.dart",
    "org-dartlang-app:///packages/petitparser/src/core/token.dart",
    "package:petitparser/src/core/token.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/sequence.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/list.dart",
    "package:petitparser/src/parser/combinator/list.dart",
    "package:petitparser/src/parser/combinator/sequence.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/optional.dart",
    "package:petitparser/src/parser/combinator/optional.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/choice.dart",
    "package:petitparser/src/parser/combinator/choice.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/utils/failure_joiner.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/char.dart",
    "package:petitparser/src/parser/character/predicate.dart",
    "package:petitparser/src/parser/character/char.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/parser.dart",
    "package:petitparser/src/parser/character/parser.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/code.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/token.dart",
    "package:petitparser/src/parser/action/token.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/matches_skipping.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/matches.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/repeater/possessive.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/repeater/repeating.dart",
    "package:petitparser/src/parser/repeater/repeating.dart",
    "package:petitparser/src/parser/repeater/possessive.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/predicate/any.dart",
    "package:petitparser/src/parser/predicate/any.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/and.dart",
    "package:petitparser/src/parser/combinator/and.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/map.dart",
    "package:petitparser/src/parser/action/map.dart"
  ];
  var delegate$ = dart.privateName(delegate, "DelegateParser.delegate");
  const _is_Parser_default = Symbol('_is_Parser_default');
  parser.Parser$ = dart.generic(R => {
    class Parser extends core.Object {
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[1], 33, 26, "buffer");
        if (position == null) dart.nullFailed(I[1], 33, 38, "position");
        let result = this.parseOn(new context.Context.new(buffer, position));
        return dart.test(result.isSuccess) ? result.position : -1;
      }
      parse(input) {
        if (input == null) dart.nullFailed(I[1], 51, 26, "input");
        return this.parseOn(new context.Context.new(input, 0));
      }
      isEqualTo(other, seen = null) {
        if (other == null) dart.nullFailed(I[1], 64, 25, "other");
        if (this[$_equals](other)) {
          return true;
        }
        if (!dart.equals(this[$runtimeType], dart.runtimeType(other)) || !dart.test(this.hasEqualProperties(other))) {
          return false;
        }
        seen == null ? seen = T$.LinkedHashSetOfParser().new() : null;
        return !dart.test(seen.add(this)) || dart.test(this.hasEqualChildren(other, seen));
      }
      hasEqualProperties(other) {
        parser.Parser.as(other);
        if (other == null) dart.nullFailed(I[1], 80, 44, "other");
        return true;
      }
      hasEqualChildren(other, seen) {
        parser.Parser.as(other);
        if (other == null) dart.nullFailed(I[1], 88, 42, "other");
        if (seen == null) dart.nullFailed(I[1], 88, 61, "seen");
        let thisChildren = this.children;
        let otherChildren = other.children;
        if (thisChildren[$length] != otherChildren[$length]) {
          return false;
        }
        for (let i = 0; i < dart.notNull(thisChildren[$length]); i = i + 1) {
          if (!dart.test(thisChildren[$_get](i).isEqualTo(otherChildren[$_get](i), seen))) {
            return false;
          }
        }
        return true;
      }
      get children() {
        return C[0] || CT.C0;
      }
      replace(source, target) {
        if (source == null) dart.nullFailed(I[1], 130, 23, "source");
        if (target == null) dart.nullFailed(I[1], 130, 38, "target");
      }
      captureResultGeneric(T, callback) {
        if (callback == null) dart.nullFailed(I[1], 137, 59, "callback");
        return callback(R, this);
      }
    }
    (Parser.new = function() {
      ;
    }).prototype = Parser.prototype;
    dart.addTypeTests(Parser);
    Parser.prototype[_is_Parser_default] = true;
    dart.addTypeCaches(Parser);
    dart.setMethodSignature(Parser, () => ({
      __proto__: dart.getMethods(Parser.__proto__),
      fastParseOn: dart.fnType(core.int, [core.String, core.int]),
      parse: dart.fnType(result.Result$(R), [core.String]),
      isEqualTo: dart.fnType(core.bool, [parser.Parser], [dart.nullable(core.Set$(parser.Parser))]),
      hasEqualProperties: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      hasEqualChildren: dart.fnType(core.bool, [dart.nullable(core.Object), core.Set$(parser.Parser)]),
      replace: dart.fnType(dart.void, [parser.Parser, parser.Parser]),
      captureResultGeneric: dart.gFnType(T => [T, [dart.gFnType(R => [T, [parser.Parser$(R)]], R => [dart.nullable(core.Object)])]], T => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(Parser, () => ({
      __proto__: dart.getGetters(Parser.__proto__),
      children: core.List$(parser.Parser)
    }));
    dart.setLibraryUri(Parser, I[2]);
    return Parser;
  });
  parser.Parser = parser.Parser$();
  dart.addTypeTests(parser.Parser, _is_Parser_default);
  const _is_DelegateParser_default = Symbol('_is_DelegateParser_default');
  delegate.DelegateParser$ = dart.generic((T, R) => {
    var ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class DelegateParser extends parser.Parser$(R) {
      get delegate() {
        return this[delegate$];
      }
      set delegate(value) {
        this[delegate$] = ParserOfT().as(value);
      }
      get children() {
        return T$.JSArrayOfParser().of([this.delegate]);
      }
      replace(source, target) {
        if (source == null) dart.nullFailed(I[0], 14, 23, "source");
        if (target == null) dart.nullFailed(I[0], 14, 38, "target");
        super.replace(source, target);
        if (dart.equals(this.delegate, source)) {
          this.delegate = ParserOfT().as(target);
        }
      }
    }
    (DelegateParser.new = function(delegate) {
      if (delegate == null) dart.nullFailed(I[0], 5, 23, "delegate");
      this[delegate$] = delegate;
      DelegateParser.__proto__.new.call(this);
      ;
    }).prototype = DelegateParser.prototype;
    dart.addTypeTests(DelegateParser);
    DelegateParser.prototype[_is_DelegateParser_default] = true;
    dart.addTypeCaches(DelegateParser);
    dart.setLibraryUri(DelegateParser, I[3]);
    dart.setFieldSignature(DelegateParser, () => ({
      __proto__: dart.getFields(DelegateParser.__proto__),
      delegate: dart.fieldType(parser.Parser$(T))
    }));
    return DelegateParser;
  });
  delegate.DelegateParser = delegate.DelegateParser$();
  dart.addTypeTests(delegate.DelegateParser, _is_DelegateParser_default);
  var value$ = dart.privateName(success, "Success.value");
  var buffer$ = dart.privateName(context, "Context.buffer");
  var position$ = dart.privateName(context, "Context.position");
  context.Context = class Context extends core.Object {
    get buffer() {
      return this[buffer$];
    }
    set buffer(value) {
      super.buffer = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    success(R, result, position = null) {
      let t0;
      return new (success.Success$(R)).new(this.buffer, (t0 = position, t0 == null ? this.position : t0), result);
    }
    failure(R, message, position = null) {
      let t0;
      if (message == null) dart.nullFailed(I[6], 28, 32, "message");
      return new (failure.Failure$(R)).new(this.buffer, (t0 = position, t0 == null ? this.position : t0), message);
    }
    toPositionString() {
      return token$.Token.positionString(this.buffer, this.position);
    }
    toString() {
      return "Context[" + dart.str(this.toPositionString()) + "]";
    }
  };
  (context.Context.new = function(buffer, position) {
    if (buffer == null) dart.nullFailed(I[6], 11, 22, "buffer");
    if (position == null) dart.nullFailed(I[6], 11, 35, "position");
    this[buffer$] = buffer;
    this[position$] = position;
    ;
  }).prototype = context.Context.prototype;
  dart.addTypeTests(context.Context);
  dart.addTypeCaches(context.Context);
  dart.setMethodSignature(context.Context, () => ({
    __proto__: dart.getMethods(context.Context.__proto__),
    success: dart.gFnType(R => [success.Success$(R), [R], [dart.nullable(core.int)]], R => [dart.nullable(core.Object)]),
    failure: dart.gFnType(R => [failure.Failure$(R), [core.String], [dart.nullable(core.int)]], R => [dart.nullable(core.Object)]),
    toPositionString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(context.Context, I[7]);
  dart.setFieldSignature(context.Context, () => ({
    __proto__: dart.getFields(context.Context.__proto__),
    buffer: dart.finalFieldType(core.String),
    position: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(context.Context, ['toString']);
  const _is_Result_default = Symbol('_is_Result_default');
  result.Result$ = dart.generic(R => {
    class Result extends context.Context {
      get isSuccess() {
        return false;
      }
      get isFailure() {
        return false;
      }
    }
    (Result.new = function(buffer, position) {
      if (buffer == null) dart.nullFailed(I[5], 6, 23, "buffer");
      if (position == null) dart.nullFailed(I[5], 6, 35, "position");
      Result.__proto__.new.call(this, buffer, position);
      ;
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.addTypeCaches(Result);
    dart.setGetterSignature(Result, () => ({
      __proto__: dart.getGetters(Result.__proto__),
      isSuccess: core.bool,
      isFailure: core.bool
    }));
    dart.setLibraryUri(Result, I[8]);
    return Result;
  });
  result.Result = result.Result$();
  dart.addTypeTests(result.Result, _is_Result_default);
  const _is_Success_default = Symbol('_is_Success_default');
  success.Success$ = dart.generic(R => {
    class Success extends result.Result$(R) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isSuccess() {
        return true;
      }
      get message() {
        return dart.throw(new core.UnsupportedError.new("Successful parse results do not have a message."));
      }
      map(T, callback) {
        if (callback == null) dart.nullFailed(I[4], 19, 42, "callback");
        return this.success(T, callback(this.value));
      }
      toString() {
        return "Success[" + dart.str(this.toPositionString()) + "]: " + dart.str(this.value);
      }
    }
    (Success.new = function(buffer, position, value) {
      if (buffer == null) dart.nullFailed(I[4], 5, 24, "buffer");
      if (position == null) dart.nullFailed(I[4], 5, 36, "position");
      this[value$] = value;
      Success.__proto__.new.call(this, buffer, position);
      ;
    }).prototype = Success.prototype;
    dart.addTypeTests(Success);
    Success.prototype[_is_Success_default] = true;
    dart.addTypeCaches(Success);
    dart.setMethodSignature(Success, () => ({
      __proto__: dart.getMethods(Success.__proto__),
      map: dart.gFnType(T => [result.Result$(T), [dart.fnType(T, [R])]], T => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(Success, () => ({
      __proto__: dart.getGetters(Success.__proto__),
      message: core.String
    }));
    dart.setLibraryUri(Success, I[9]);
    dart.setFieldSignature(Success, () => ({
      __proto__: dart.getFields(Success.__proto__),
      value: dart.finalFieldType(R)
    }));
    dart.defineExtensionMethods(Success, ['toString']);
    return Success;
  });
  success.Success = success.Success$();
  dart.addTypeTests(success.Success, _is_Success_default);
  var message$ = dart.privateName(failure, "Failure.message");
  const _is_Failure_default = Symbol('_is_Failure_default');
  failure.Failure$ = dart.generic(R => {
    class Failure extends result.Result$(R) {
      get message() {
        return this[message$];
      }
      set message(value) {
        super.message = value;
      }
      get isFailure() {
        return true;
      }
      get value() {
        return dart.throw(new exception.ParserException.new(this));
      }
      map(T, callback) {
        if (callback == null) dart.nullFailed(I[10], 19, 42, "callback");
        return this.failure(T, this.message);
      }
      toString() {
        return "Failure[" + dart.str(this.toPositionString()) + "]: " + dart.str(this.message);
      }
    }
    (Failure.new = function(buffer, position, message) {
      if (buffer == null) dart.nullFailed(I[10], 6, 24, "buffer");
      if (position == null) dart.nullFailed(I[10], 6, 36, "position");
      if (message == null) dart.nullFailed(I[10], 6, 51, "message");
      this[message$] = message;
      Failure.__proto__.new.call(this, buffer, position);
      ;
    }).prototype = Failure.prototype;
    dart.addTypeTests(Failure);
    Failure.prototype[_is_Failure_default] = true;
    dart.addTypeCaches(Failure);
    dart.setMethodSignature(Failure, () => ({
      __proto__: dart.getMethods(Failure.__proto__),
      map: dart.gFnType(T => [result.Result$(T), [dart.fnType(T, [R])]], T => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(Failure, () => ({
      __proto__: dart.getGetters(Failure.__proto__),
      value: R
    }));
    dart.setLibraryUri(Failure, I[11]);
    dart.setFieldSignature(Failure, () => ({
      __proto__: dart.getFields(Failure.__proto__),
      message: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(Failure, ['toString']);
    return Failure;
  });
  failure.Failure = failure.Failure$();
  dart.addTypeTests(failure.Failure, _is_Failure_default);
  var failure$ = dart.privateName(exception, "ParserException.failure");
  exception.ParserException = class ParserException extends core.Object {
    get failure() {
      return this[failure$];
    }
    set failure(value) {
      super.failure = value;
    }
    get message() {
      return this.failure.message;
    }
    get offset() {
      return this.failure.position;
    }
    get source() {
      return this.failure.buffer;
    }
    toString() {
      return dart.str(this.failure.message) + " at " + dart.str(this.failure.toPositionString());
    }
  };
  (exception.ParserException.new = function(failure) {
    if (failure == null) dart.nullFailed(I[12], 7, 24, "failure");
    this[failure$] = failure;
    ;
  }).prototype = exception.ParserException.prototype;
  dart.addTypeTests(exception.ParserException);
  dart.addTypeCaches(exception.ParserException);
  exception.ParserException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(exception.ParserException, () => ({
    __proto__: dart.getGetters(exception.ParserException.__proto__),
    message: core.String,
    offset: core.int,
    source: core.String
  }));
  dart.setLibraryUri(exception.ParserException, I[13]);
  dart.setFieldSignature(exception.ParserException, () => ({
    __proto__: dart.getFields(exception.ParserException.__proto__),
    failure: dart.finalFieldType(failure.Failure)
  }));
  dart.defineExtensionMethods(exception.ParserException, ['toString']);
  var pragma_options = dart.privateName(core, "pragma.options");
  var pragma_name = dart.privateName(core, "pragma.name");
  dart.defineLazy(annotations, {
    /*annotations.inlineVm*/get inlineVm() {
      return C[1] || CT.C1;
    },
    /*annotations.inlineJs*/get inlineJs() {
      return C[2] || CT.C2;
    }
  }, false);
  var value$0 = dart.privateName(token$, "Token.value");
  var buffer$0 = dart.privateName(token$, "Token.buffer");
  var start$ = dart.privateName(token$, "Token.start");
  var stop$ = dart.privateName(token$, "Token.stop");
  const _is_Token_default = Symbol('_is_Token_default');
  token$.Token$ = dart.generic(T => {
    class Token extends core.Object {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get buffer() {
        return this[buffer$0];
      }
      set buffer(value) {
        super.buffer = value;
      }
      get start() {
        return this[start$];
      }
      set start(value) {
        super.start = value;
      }
      get stop() {
        return this[stop$];
      }
      set stop(value) {
        super.stop = value;
      }
      get input() {
        return this.buffer[$substring](this.start, this.stop);
      }
      get length() {
        return dart.notNull(this.stop) - dart.notNull(this.start);
      }
      get line() {
        return token$.Token.lineAndColumnOf(this.buffer, this.start)[$_get](0);
      }
      get column() {
        return token$.Token.lineAndColumnOf(this.buffer, this.start)[$_get](1);
      }
      map(R, mapper) {
        if (mapper == null) dart.nullFailed(I[14], 49, 39, "mapper");
        return new (token$.Token$(R)).new(mapper(this.value), this.buffer, this.start, this.stop);
      }
      toString() {
        return "Token[" + dart.str(token$.Token.positionString(this.buffer, this.start)) + "]: " + dart.str(this.value);
      }
      _equals(other) {
        if (other == null) return false;
        return token$.Token.is(other) && dart.equals(this.value, other.value) && this.start == other.start && this.stop == other.stop;
      }
      get hashCode() {
        return dart.notNull(dart.hashCode(this.value)) + dart.hashCode(this.start) + dart.hashCode(this.stop);
      }
      static join(T, token) {
        if (token == null) dart.nullFailed(I[14], 66, 52, "token");
        let iterator = token[$iterator];
        if (!dart.test(iterator.moveNext())) {
          dart.throw(new core.ArgumentError.value(token, "token", "Require at least one token"));
        }
        let value = _interceptors.JSArray$(T).of([iterator.current.value]);
        let buffer = iterator.current.buffer;
        let start = iterator.current.start;
        let stop = iterator.current.stop;
        while (dart.test(iterator.moveNext())) {
          if (buffer != iterator.current.buffer) {
            dart.throw(new core.ArgumentError.value(token, "token", "Token do not use same buffer"));
          }
          value[$add](iterator.current.value);
          start = math.min(core.int, start, iterator.current.start);
          stop = math.max(core.int, stop, iterator.current.stop);
        }
        return new (token$.Token$(core.List$(T))).new(value, buffer, start, stop);
      }
      static newlineParser() {
        return token$.Token._newlineParser;
      }
      static lineAndColumnOf(buffer, position) {
        if (buffer == null) dart.nullFailed(I[14], 93, 43, "buffer");
        if (position == null) dart.nullFailed(I[14], 93, 55, "position");
        let line = 1;
        let offset = 0;
        let iter = matches_skipping['MatchesSkippingParser|matchesSkipping'](token$.Token, token$0['TokenParserExtension|token'](dart.dynamic, token$.Token.newlineParser()), buffer);
        for (let token of iter) {
          if (dart.notNull(position) < dart.notNull(token.stop)) {
            return T$.JSArrayOfint().of([line, dart.notNull(position) - dart.notNull(offset) + 1]);
          }
          line = line + 1;
          offset = token.stop;
        }
        return T$.JSArrayOfint().of([line, dart.notNull(position) - dart.notNull(offset) + 1]);
      }
      static positionString(buffer, position) {
        if (buffer == null) dart.nullFailed(I[14], 107, 39, "buffer");
        if (position == null) dart.nullFailed(I[14], 107, 51, "position");
        let lineAndColumn = token$.Token.lineAndColumnOf(buffer, position);
        return dart.str(lineAndColumn[$_get](0)) + ":" + dart.str(lineAndColumn[$_get](1));
      }
    }
    (Token.new = function(value, buffer, start, stop) {
      if (buffer == null) dart.nullFailed(I[14], 22, 32, "buffer");
      if (start == null) dart.nullFailed(I[14], 22, 45, "start");
      if (stop == null) dart.nullFailed(I[14], 22, 57, "stop");
      this[value$0] = value;
      this[buffer$0] = buffer;
      this[start$] = start;
      this[stop$] = stop;
      ;
    }).prototype = Token.prototype;
    dart.addTypeTests(Token);
    Token.prototype[_is_Token_default] = true;
    dart.addTypeCaches(Token);
    dart.setMethodSignature(Token, () => ({
      __proto__: dart.getMethods(Token.__proto__),
      map: dart.gFnType(R => [token$.Token$(R), [dart.fnType(R, [T])]], R => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(Token, () => ({
      __proto__: dart.getGetters(Token.__proto__),
      input: core.String,
      length: core.int,
      line: core.int,
      column: core.int
    }));
    dart.setLibraryUri(Token, I[15]);
    dart.setFieldSignature(Token, () => ({
      __proto__: dart.getFields(Token.__proto__),
      value: dart.finalFieldType(T),
      buffer: dart.finalFieldType(core.String),
      start: dart.finalFieldType(core.int),
      stop: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionMethods(Token, ['toString', '_equals']);
    dart.defineExtensionAccessors(Token, ['hashCode']);
    return Token;
  });
  token$.Token = token$.Token$();
  dart.defineLazy(token$.Token, {
    /*token$.Token._newlineParser*/get _newlineParser() {
      return choice['ChoiceParserExtension||'](char$.char("\n"), sequence['SequenceParserExtension|&'](char$.char("\r"), optional['OptionalParserExtension|optional'](core.String, char$.char("\n"))));
    }
  }, false);
  dart.addTypeTests(token$.Token, _is_Token_default);
  var children$ = dart.privateName(list, "ListParser.children");
  const _is_ListParser_default = Symbol('_is_ListParser_default');
  list.ListParser$ = dart.generic((T, R) => {
    var ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    var ListOfParserOfT = () => (ListOfParserOfT = dart.constFn(core.List$(ParserOfT())))();
    class ListParser extends parser.Parser$(R) {
      get children() {
        return this[children$];
      }
      set children(value) {
        super.children = value;
      }
      replace(source, target) {
        if (source == null) dart.nullFailed(I[17], 13, 23, "source");
        if (target == null) dart.nullFailed(I[17], 13, 38, "target");
        super.replace(source, target);
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          if (dart.equals(this.children[$_get](i), source)) {
            this.children[$_set](i, ParserOfT().as(target));
          }
        }
      }
    }
    (ListParser.new = function(children) {
      if (children == null) dart.nullFailed(I[17], 5, 34, "children");
      this[children$] = ListOfParserOfT().of(children, {growable: false});
      ListParser.__proto__.new.call(this);
      ;
    }).prototype = ListParser.prototype;
    dart.addTypeTests(ListParser);
    ListParser.prototype[_is_ListParser_default] = true;
    dart.addTypeCaches(ListParser);
    dart.setLibraryUri(ListParser, I[18]);
    dart.setFieldSignature(ListParser, () => ({
      __proto__: dart.getFields(ListParser.__proto__),
      children: dart.finalFieldType(core.List$(parser.Parser$(T)))
    }));
    return ListParser;
  });
  list.ListParser = list.ListParser$();
  dart.addTypeTests(list.ListParser, _is_ListParser_default);
  const _is_SequenceParser_default = Symbol('_is_SequenceParser_default');
  sequence.SequenceParser$ = dart.generic(T => {
    var JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var SequenceParserOfT = () => (SequenceParserOfT = dart.constFn(sequence.SequenceParser$(T)))();
    class SequenceParser extends list.ListParser$(T, core.List$(T)) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[16], 35, 35, "context");
        let current = context;
        let elements = JSArrayOfT().of([]);
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          let result = this.children[$_get](i).parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfT(), result.message);
          }
          elements[$add](result.value);
          current = result;
        }
        return current.success(ListOfT(), elements);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[16], 50, 26, "buffer");
        if (position == null) dart.nullFailed(I[16], 50, 38, "position");
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          position = this.children[$_get](i).fastParseOn(buffer, position);
          if (dart.notNull(position) < 0) {
            return position;
          }
        }
        return position;
      }
      copy() {
        return new (SequenceParserOfT()).new(this.children);
      }
    }
    (SequenceParser.new = function(children) {
      if (children == null) dart.nullFailed(I[16], 32, 38, "children");
      SequenceParser.__proto__.new.call(this, children);
      ;
    }).prototype = SequenceParser.prototype;
    dart.addTypeTests(SequenceParser);
    SequenceParser.prototype[_is_SequenceParser_default] = true;
    dart.addTypeCaches(SequenceParser);
    dart.setMethodSignature(SequenceParser, () => ({
      __proto__: dart.getMethods(SequenceParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.List$(T)), [context.Context]),
      copy: dart.fnType(sequence.SequenceParser$(T), [])
    }));
    dart.setLibraryUri(SequenceParser, I[19]);
    return SequenceParser;
  });
  sequence.SequenceParser = sequence.SequenceParser$();
  dart.addTypeTests(sequence.SequenceParser, _is_SequenceParser_default);
  sequence['SequenceParserExtension|seq'] = function SequenceParserExtension$124seq($this, other) {
    if ($this == null) dart.nullFailed(I[16], 16, 16, "#this");
    if (other == null) dart.nullFailed(I[16], 16, 27, "other");
    return sequence.SequenceParser.is($this) ? new sequence.SequenceParser.new((() => {
      let t1 = T$.ListOfParser().of($this.children);
      t1[$add](other);
      return t1;
    })()) : new sequence.SequenceParser.new(T$.JSArrayOfParser().of([$this, other]));
  };
  sequence['SequenceParserExtension|get#seq'] = function SequenceParserExtension$124get$35seq($this) {
    if ($this == null) dart.nullFailed(I[16], 16, 16, "#this");
    return dart.fn(other => {
      if (other == null) dart.nullFailed(I[16], 16, 27, "other");
      return sequence['SequenceParserExtension|seq']($this, other);
    }, T$.ParserToParserOfList());
  };
  sequence['SequenceParserExtension|&'] = function SequenceParserExtension$124$38($this, other) {
    if ($this == null) dart.nullFailed(I[16], 22, 25, "#this");
    if (other == null) dart.nullFailed(I[16], 22, 34, "other");
    return sequence['SequenceParserExtension|seq']($this, other);
  };
  sequence['SequenceIterableExtension|toSequenceParser'] = function SequenceIterableExtension$124toSequenceParser(T, $this) {
    if ($this == null) dart.nullFailed(I[16], 27, 19, "#this");
    return new (sequence.SequenceParser$(T)).new($this);
  };
  sequence['SequenceIterableExtension|get#toSequenceParser'] = function SequenceIterableExtension$124get$35toSequenceParser(T, $this) {
    if ($this == null) dart.nullFailed(I[16], 27, 19, "#this");
    return dart.fn(() => sequence['SequenceIterableExtension|toSequenceParser'](T, $this), dart.fnType(parser.Parser$(core.List$(T)), []));
  };
  var otherwise$ = dart.privateName(optional, "OptionalParser.otherwise");
  const _is_OptionalParser_default = Symbol('_is_OptionalParser_default');
  optional.OptionalParser$ = dart.generic(R => {
    var OptionalParserOfR = () => (OptionalParserOfR = dart.constFn(optional.OptionalParser$(R)))();
    class OptionalParser extends delegate.DelegateParser$(R, R) {
      get otherwise() {
        return this[otherwise$];
      }
      set otherwise(value) {
        super.otherwise = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[20], 32, 29, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result;
        } else {
          return context.success(R, this.otherwise);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[20], 42, 26, "buffer");
        if (position == null) dart.nullFailed(I[20], 42, 38, "position");
        let result = this.delegate.fastParseOn(buffer, position);
        return dart.notNull(result) < 0 ? position : result;
      }
      copy() {
        return new (OptionalParserOfR()).new(this.delegate, this.otherwise);
      }
      hasEqualProperties(other) {
        OptionalParserOfR().as(other);
        if (other == null) dart.nullFailed(I[20], 51, 45, "other");
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.otherwise, other.otherwise);
      }
    }
    (OptionalParser.new = function(delegate, otherwise) {
      if (delegate == null) dart.nullFailed(I[20], 26, 28, "delegate");
      this[otherwise$] = otherwise;
      OptionalParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = OptionalParser.prototype;
    dart.addTypeTests(OptionalParser);
    OptionalParser.prototype[_is_OptionalParser_default] = true;
    dart.addTypeCaches(OptionalParser);
    dart.setMethodSignature(OptionalParser, () => ({
      __proto__: dart.getMethods(OptionalParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(optional.OptionalParser$(R), [])
    }));
    dart.setLibraryUri(OptionalParser, I[21]);
    dart.setFieldSignature(OptionalParser, () => ({
      __proto__: dart.getFields(OptionalParser.__proto__),
      otherwise: dart.finalFieldType(R)
    }));
    return OptionalParser;
  });
  optional.OptionalParser = optional.OptionalParser$();
  dart.addTypeTests(optional.OptionalParser, _is_OptionalParser_default);
  optional['OptionalParserExtension|optional'] = function OptionalParserExtension$124optional(T, $this) {
    if ($this == null) dart.nullFailed(I[20], 13, 14, "#this");
    return new (optional.OptionalParser$(dart.nullable(T))).new($this, null);
  };
  optional['OptionalParserExtension|get#optional'] = function OptionalParserExtension$124get$35optional(T, $this) {
    if ($this == null) dart.nullFailed(I[20], 13, 14, "#this");
    return dart.fn(() => optional['OptionalParserExtension|optional'](T, $this), dart.fnType(parser.Parser$(dart.nullable(T)), []));
  };
  optional['OptionalParserExtension|optionalWith'] = function OptionalParserExtension$124optionalWith(T, $this, value) {
    if ($this == null) dart.nullFailed(I[20], 21, 13, "#this");
    return new (optional.OptionalParser$(T)).new($this, value);
  };
  optional['OptionalParserExtension|get#optionalWith'] = function OptionalParserExtension$124get$35optionalWith(T, $this) {
    if ($this == null) dart.nullFailed(I[20], 21, 13, "#this");
    return dart.fn(value => optional['OptionalParserExtension|optionalWith'](T, $this, value), dart.fnType(parser.Parser$(T), [T]));
  };
  var failureJoiner$ = dart.privateName(choice, "ChoiceParser.failureJoiner");
  const _is_ChoiceParser_default = Symbol('_is_ChoiceParser_default');
  choice.ChoiceParser$ = dart.generic(T => {
    var FailureOfT = () => (FailureOfT = dart.constFn(failure.Failure$(T)))();
    var FailureOfTAndFailureOfTToFailureOfT = () => (FailureOfTAndFailureOfTToFailureOfT = dart.constFn(dart.fnType(FailureOfT(), [FailureOfT(), FailureOfT()])))();
    var ChoiceParserOfT = () => (ChoiceParserOfT = dart.constFn(choice.ChoiceParser$(T)))();
    class ChoiceParser extends list.ListParser$(T, T) {
      get failureJoiner() {
        return this[failureJoiner$];
      }
      set failureJoiner(value) {
        super.failureJoiner = value;
      }
      withFailureJoiner(failureJoiner) {
        FailureOfTAndFailureOfTToFailureOfT().as(failureJoiner);
        if (failureJoiner == null) dart.nullFailed(I[22], 62, 54, "failureJoiner");
        return new (ChoiceParserOfT()).new(this.children, {failureJoiner: failureJoiner});
      }
      parseOn(context) {
        let t11, t10;
        if (context == null) dart.nullFailed(I[22], 66, 29, "context");
        let failure = null;
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          let result = this.children[$_get](i).parseOn(context);
          if (FailureOfT().is(result)) {
            failure = failure == null ? result : (t10 = failure, t11 = result, this.failureJoiner(t10, t11));
          } else {
            return result;
          }
        }
        return dart.nullCheck(failure);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[22], 80, 26, "buffer");
        if (position == null) dart.nullFailed(I[22], 80, 38, "position");
        let result = -1;
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          result = this.children[$_get](i).fastParseOn(buffer, position);
          if (dart.notNull(result) >= 0) {
            return result;
          }
        }
        return result;
      }
      hasEqualProperties(other) {
        ChoiceParserOfT().as(other);
        if (other == null) dart.nullFailed(I[22], 92, 43, "other");
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.failureJoiner, FailureOfTAndFailureOfTToFailureOfT().as(other.failureJoiner));
      }
      copy() {
        return new (ChoiceParserOfT()).new(this.children, {failureJoiner: this.failureJoiner});
      }
    }
    (ChoiceParser.new = function(children, opts) {
      let t10;
      if (children == null) dart.nullFailed(I[22], 50, 36, "children");
      let failureJoiner = opts && 'failureJoiner' in opts ? opts.failureJoiner : null;
      this[failureJoiner$] = (t10 = failureJoiner, t10 == null ? dart.gbind(C[3] || CT.C3, T) : t10);
      ChoiceParser.__proto__.new.call(this, children);
      if (dart.test(children[$isEmpty])) {
        dart.throw(new core.ArgumentError.new("Choice parser cannot be empty."));
      }
    }).prototype = ChoiceParser.prototype;
    dart.addTypeTests(ChoiceParser);
    ChoiceParser.prototype[_is_ChoiceParser_default] = true;
    dart.addTypeCaches(ChoiceParser);
    dart.setMethodSignature(ChoiceParser, () => ({
      __proto__: dart.getMethods(ChoiceParser.__proto__),
      withFailureJoiner: dart.fnType(choice.ChoiceParser$(T), [dart.nullable(core.Object)]),
      parseOn: dart.fnType(result.Result$(T), [context.Context]),
      copy: dart.fnType(choice.ChoiceParser$(T), [])
    }));
    dart.setLibraryUri(ChoiceParser, I[23]);
    dart.setFieldSignature(ChoiceParser, () => ({
      __proto__: dart.getFields(ChoiceParser.__proto__),
      failureJoiner: dart.finalFieldType(dart.fnType(failure.Failure$(T), [failure.Failure$(T), failure.Failure$(T)]))
    }));
    return ChoiceParser;
  });
  choice.ChoiceParser = choice.ChoiceParser$();
  dart.addTypeTests(choice.ChoiceParser, _is_ChoiceParser_default);
  choice['ChoiceParserExtension|or'] = function ChoiceParserExtension$124or($this, other, opts) {
    let t12;
    if ($this == null) dart.nullFailed(I[22], 28, 16, "#this");
    if (other == null) dart.nullFailed(I[22], 28, 26, "other");
    let failureJoiner = opts && 'failureJoiner' in opts ? opts.failureJoiner : null;
    let self = $this;
    return choice.ChoiceParser.is(self) ? new choice.ChoiceParser.new((() => {
      let t11 = T$.ListOfParser().of(self.children);
      t11[$add](other);
      return t11;
    })(), {failureJoiner: (t12 = failureJoiner, t12 == null ? T$.FailureAndFailureToFailure().as(self.failureJoiner) : t12)}) : new choice.ChoiceParser.new(T$.JSArrayOfParser().of([$this, other]), {failureJoiner: failureJoiner});
  };
  choice['ChoiceParserExtension|get#or'] = function ChoiceParserExtension$124get$35or($this) {
    if ($this == null) dart.nullFailed(I[22], 28, 16, "#this");
    return dart.fn((other, opts) => {
      if (other == null) dart.nullFailed(I[22], 28, 26, "other");
      let failureJoiner = opts && 'failureJoiner' in opts ? opts.failureJoiner : null;
      return choice['ChoiceParserExtension|or']($this, other, {failureJoiner: failureJoiner});
    }, T$.Parser__ToChoiceParser());
  };
  choice['ChoiceParserExtension||'] = function ChoiceParserExtension$124$124($this, other) {
    if ($this == null) dart.nullFailed(I[22], 39, 25, "#this");
    if (other == null) dart.nullFailed(I[22], 39, 34, "other");
    return choice['ChoiceParserExtension|or']($this, other);
  };
  choice['ChoiceIterableExtension|toChoiceParser'] = function ChoiceIterableExtension$124toChoiceParser(T, $this, opts) {
    if ($this == null) dart.nullFailed(I[22], 44, 19, "#this");
    let failureJoiner = opts && 'failureJoiner' in opts ? opts.failureJoiner : null;
    return new (choice.ChoiceParser$(T)).new($this, {failureJoiner: failureJoiner});
  };
  choice['ChoiceIterableExtension|get#toChoiceParser'] = function ChoiceIterableExtension$124get$35toChoiceParser(T, $this) {
    if ($this == null) dart.nullFailed(I[22], 44, 19, "#this");
    return dart.fn(opts => {
      let failureJoiner = opts && 'failureJoiner' in opts ? opts.failureJoiner : null;
      return choice['ChoiceIterableExtension|toChoiceParser'](T, $this, {failureJoiner: failureJoiner});
    }, dart.fnType(choice.ChoiceParser$(T), [], {failureJoiner: dart.nullable(dart.fnType(failure.Failure$(T), [failure.Failure$(T), failure.Failure$(T)]))}, {}));
  };
  failure_joiner.selectFirst = function selectFirst(T, first, second) {
    if (first == null) dart.nullFailed(I[24], 8, 38, "first");
    if (second == null) dart.nullFailed(I[24], 8, 56, "second");
    return first;
  };
  failure_joiner.selectLast = function selectLast(T, first, second) {
    if (first == null) dart.nullFailed(I[24], 11, 37, "first");
    if (second == null) dart.nullFailed(I[24], 11, 55, "second");
    return second;
  };
  failure_joiner.selectFarthest = function selectFarthest(T, first, second) {
    if (first == null) dart.nullFailed(I[24], 15, 41, "first");
    if (second == null) dart.nullFailed(I[24], 15, 59, "second");
    return dart.notNull(first.position) <= dart.notNull(second.position) ? second : first;
  };
  failure_joiner.selectFarthestJoined = function selectFarthestJoined(T, first, second) {
    if (first == null) dart.nullFailed(I[24], 20, 47, "first");
    if (second == null) dart.nullFailed(I[24], 20, 65, "second");
    return dart.notNull(first.position) > dart.notNull(second.position) ? first : dart.notNull(first.position) < dart.notNull(second.position) ? second : first.failure(T, dart.str(first.message) + " OR " + dart.str(second.message));
  };
  var value$1 = dart.privateName(char$, "SingleCharPredicate.value");
  predicate.CharacterPredicate = class CharacterPredicate extends core.Object {};
  (predicate.CharacterPredicate.new = function() {
    ;
  }).prototype = predicate.CharacterPredicate.prototype;
  dart.addTypeTests(predicate.CharacterPredicate);
  dart.addTypeCaches(predicate.CharacterPredicate);
  dart.setLibraryUri(predicate.CharacterPredicate, I[26]);
  char$.SingleCharPredicate = class SingleCharPredicate extends predicate.CharacterPredicate {
    get value() {
      return this[value$1];
    }
    set value(value) {
      super.value = value;
    }
    test(value) {
      if (value == null) dart.nullFailed(I[25], 17, 17, "value");
      return this.value == value;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[25], 20, 37, "other");
      return char$.SingleCharPredicate.is(other) && other.value == this.value;
    }
  };
  (char$.SingleCharPredicate.new = function(value) {
    if (value == null) dart.nullFailed(I[25], 12, 34, "value");
    this[value$1] = value;
    char$.SingleCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = char$.SingleCharPredicate.prototype;
  dart.addTypeTests(char$.SingleCharPredicate);
  dart.addTypeCaches(char$.SingleCharPredicate);
  dart.setMethodSignature(char$.SingleCharPredicate, () => ({
    __proto__: dart.getMethods(char$.SingleCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(char$.SingleCharPredicate, I[27]);
  dart.setFieldSignature(char$.SingleCharPredicate, () => ({
    __proto__: dart.getFields(char$.SingleCharPredicate.__proto__),
    value: dart.finalFieldType(core.int)
  }));
  char$.char = function char(char, message = null) {
    let t16;
    if (char == null) dart.nullFailed(I[25], 7, 28, "char");
    return new parser$.CharacterParser.new(new char$.SingleCharPredicate.new(code.toCharCode(char)), (t16 = message, t16 == null ? "\"" + dart.str(code.toReadableString(char)) + "\" expected" : t16));
  };
  var predicate$ = dart.privateName(parser$, "CharacterParser.predicate");
  var message$0 = dart.privateName(parser$, "CharacterParser.message");
  parser$.CharacterParser = class CharacterParser extends parser.Parser$(core.String) {
    get predicate() {
      return this[predicate$];
    }
    set predicate(value) {
      super.predicate = value;
    }
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      if (context == null) dart.nullFailed(I[28], 17, 34, "context");
      let buffer = context.buffer;
      let position = context.position;
      if (dart.notNull(position) < buffer.length && dart.test(this.predicate.test(buffer[$codeUnitAt](position)))) {
        return context.success(core.String, buffer[$_get](position), dart.notNull(position) + 1);
      }
      return context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      if (buffer == null) dart.nullFailed(I[28], 28, 26, "buffer");
      if (position == null) dart.nullFailed(I[28], 28, 38, "position");
      return dart.notNull(position) < buffer.length && dart.test(this.predicate.test(buffer[$codeUnitAt](position))) ? dart.notNull(position) + 1 : -1;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new parser$.CharacterParser.new(this.predicate, this.message);
    }
    hasEqualProperties(other) {
      parser$.CharacterParser.as(other);
      if (other == null) dart.nullFailed(I[28], 40, 43, "other");
      return dart.test(super.hasEqualProperties(other)) && dart.test(this.predicate.isEqualTo(other.predicate)) && this.message == other.message;
    }
  };
  (parser$.CharacterParser.new = function(predicate, message) {
    if (predicate == null) dart.nullFailed(I[28], 8, 24, "predicate");
    if (message == null) dart.nullFailed(I[28], 8, 40, "message");
    this[predicate$] = predicate;
    this[message$0] = message;
    parser$.CharacterParser.__proto__.new.call(this);
    ;
  }).prototype = parser$.CharacterParser.prototype;
  dart.addTypeTests(parser$.CharacterParser);
  dart.addTypeCaches(parser$.CharacterParser);
  dart.setMethodSignature(parser$.CharacterParser, () => ({
    __proto__: dart.getMethods(parser$.CharacterParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
    copy: dart.fnType(parser$.CharacterParser, [])
  }));
  dart.setLibraryUri(parser$.CharacterParser, I[29]);
  dart.setFieldSignature(parser$.CharacterParser, () => ({
    __proto__: dart.getFields(parser$.CharacterParser.__proto__),
    predicate: dart.finalFieldType(predicate.CharacterPredicate),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(parser$.CharacterParser, ['toString']);
  code.toCharCode = function toCharCode(element) {
    if (element == null) dart.nullFailed(I[30], 2, 23, "element");
    if (typeof element == 'number') {
      return element[$round]();
    }
    let value = dart.toString(element);
    if (value.length !== 1) {
      dart.throw(new core.ArgumentError.new("\"" + dart.str(value) + "\" is not a character"));
    }
    return value[$codeUnitAt](0);
  };
  code.toReadableString = function toReadableString(element) {
    if (element == null) dart.nullFailed(I[30], 14, 32, "element");
    return typeof element == 'string' ? code._toFormattedString(element) : code._toFormattedChar(code.toCharCode(element));
  };
  code._toFormattedString = function _toFormattedString(input) {
    if (input == null) dart.nullFailed(I[30], 18, 34, "input");
    return input[$codeUnits][$map](core.String, C[4] || CT.C4)[$join]();
  };
  code._toFormattedChar = function _toFormattedChar(code) {
    if (code == null) dart.nullFailed(I[30], 21, 29, "code");
    switch (code) {
      case 8:
      {
        return "\\b";
      }
      case 9:
      {
        return "\\t";
      }
      case 10:
      {
        return "\\n";
      }
      case 11:
      {
        return "\\v";
      }
      case 12:
      {
        return "\\f";
      }
      case 13:
      {
        return "\\r";
      }
      case 34:
      {
        return "\\\"";
      }
      case 39:
      {
        return "\\'";
      }
      case 92:
      {
        return "\\\\";
      }
    }
    if (dart.notNull(code) < 32) {
      return "\\x" + code[$toRadixString](16)[$padLeft](2, "0");
    }
    return core.String.fromCharCode(code);
  };
  const _is_TokenParser_default = Symbol('_is_TokenParser_default');
  token$0.TokenParser$ = dart.generic(R => {
    var TokenOfR = () => (TokenOfR = dart.constFn(token$.Token$(R)))();
    var TokenParserOfR = () => (TokenParserOfR = dart.constFn(token$0.TokenParser$(R)))();
    class TokenParser extends delegate.DelegateParser$(R, token$.Token$(R)) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[31], 23, 36, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          let token = new (TokenOfR()).new(result.value, context.buffer, context.position, result.position);
          return result.success(TokenOfR(), token);
        } else {
          return result.failure(TokenOfR(), result.message);
        }
      }
      copy() {
        return new (TokenParserOfR()).new(this.delegate);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[31], 38, 26, "buffer");
        if (position == null) dart.nullFailed(I[31], 38, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
    }
    (TokenParser.new = function(delegate) {
      if (delegate == null) dart.nullFailed(I[31], 20, 25, "delegate");
      TokenParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = TokenParser.prototype;
    dart.addTypeTests(TokenParser);
    TokenParser.prototype[_is_TokenParser_default] = true;
    dart.addTypeCaches(TokenParser);
    dart.setMethodSignature(TokenParser, () => ({
      __proto__: dart.getMethods(TokenParser.__proto__),
      parseOn: dart.fnType(result.Result$(token$.Token$(R)), [context.Context]),
      copy: dart.fnType(token$0.TokenParser$(R), [])
    }));
    dart.setLibraryUri(TokenParser, I[32]);
    return TokenParser;
  });
  token$0.TokenParser = token$0.TokenParser$();
  dart.addTypeTests(token$0.TokenParser, _is_TokenParser_default);
  token$0['TokenParserExtension|token'] = function TokenParserExtension$124token(T, $this) {
    if ($this == null) dart.nullFailed(I[31], 15, 20, "#this");
    return new (token$0.TokenParser$(T)).new($this);
  };
  token$0['TokenParserExtension|get#token'] = function TokenParserExtension$124get$35token(T, $this) {
    if ($this == null) dart.nullFailed(I[31], 15, 20, "#this");
    return dart.fn(() => token$0['TokenParserExtension|token'](T, $this), dart.fnType(parser.Parser$(token$.Token$(T)), []));
  };
  matches_skipping['MatchesSkippingParser|matchesSkipping'] = function MatchesSkippingParser$124matchesSkipping(T, $this, input) {
    if ($this == null) dart.nullFailed(I[33], 14, 11, "#this");
    if (input == null) dart.nullFailed(I[33], 14, 34, "input");
    let list = _interceptors.JSArray$(T).of([]);
    possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, choice['ChoiceParserExtension|or'](map['MapParserExtension|map'](T, dart.void, $this, dart.bind(list, $add), {hasSideEffects: true}), any.any())).fastParseOn(input, 0);
    return list;
  };
  matches_skipping['MatchesSkippingParser|get#matchesSkipping'] = function MatchesSkippingParser$124get$35matchesSkipping(T, $this) {
    if ($this == null) dart.nullFailed(I[33], 14, 11, "#this");
    return dart.fn(input => {
      if (input == null) dart.nullFailed(I[33], 14, 34, "input");
      return matches_skipping['MatchesSkippingParser|matchesSkipping'](T, $this, input);
    }, dart.fnType(core.List$(T), [core.String]));
  };
  matches['MatchesParser|matches'] = function MatchesParser$124matches(T, $this, input) {
    if ($this == null) dart.nullFailed(I[34], 16, 11, "#this");
    if (input == null) dart.nullFailed(I[34], 16, 26, "input");
    let list = _interceptors.JSArray$(T).of([]);
    possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, choice['ChoiceParserExtension|or'](sequence['SequenceParserExtension|seq'](map['MapParserExtension|map'](T, dart.void, and['AndParserExtension|and'](T, $this), dart.bind(list, $add), {hasSideEffects: true}), any.any()), any.any())).fastParseOn(input, 0);
    return list;
  };
  matches['MatchesParser|get#matches'] = function MatchesParser$124get$35matches(T, $this) {
    if ($this == null) dart.nullFailed(I[34], 16, 11, "#this");
    return dart.fn(input => {
      if (input == null) dart.nullFailed(I[34], 16, 26, "input");
      return matches['MatchesParser|matches'](T, $this, input);
    }, dart.fnType(core.List$(T), [core.String]));
  };
  var min$ = dart.privateName(repeating, "RepeatingParser.min");
  var max$ = dart.privateName(repeating, "RepeatingParser.max");
  const _is_RepeatingParser_default = Symbol('_is_RepeatingParser_default');
  repeating.RepeatingParser$ = dart.generic(R => {
    var RepeatingParserOfR = () => (RepeatingParserOfR = dart.constFn(repeating.RepeatingParser$(R)))();
    class RepeatingParser extends delegate.DelegateParser$(R, core.List$(R)) {
      get min() {
        return this[min$];
      }
      set min(value) {
        super.min = value;
      }
      get max() {
        return this[max$];
      }
      set max(value) {
        super.max = value;
      }
      toString() {
        return dart.str(super[$toString]()) + "[" + dart.str(this.min) + ".." + dart.str(this.max === 9007199254740991.0 ? "*" : this.max) + "]";
      }
      hasEqualProperties(other) {
        RepeatingParserOfR().as(other);
        if (other == null) dart.nullFailed(I[36], 30, 46, "other");
        return dart.test(super.hasEqualProperties(other)) && this.min == other.min && this.max == other.max;
      }
    }
    (RepeatingParser.new = function(parser, min, max) {
      if (parser == null) dart.nullFailed(I[36], 8, 29, "parser");
      if (min == null) dart.nullFailed(I[36], 8, 42, "min");
      if (max == null) dart.nullFailed(I[36], 8, 52, "max");
      this[min$] = min;
      this[max$] = max;
      RepeatingParser.__proto__.new.call(this, parser);
      if (dart.notNull(this.min) < 0) {
        dart.throw(new core.ArgumentError.new("Minimum repetitions must be positive, but got " + dart.str(this.min) + "."));
      }
      if (dart.notNull(this.max) < dart.notNull(this.min)) {
        dart.throw(new core.ArgumentError.new("Maximum repetitions must be larger than " + dart.str(this.min) + ", but got " + dart.str(this.max) + "."));
      }
    }).prototype = RepeatingParser.prototype;
    dart.addTypeTests(RepeatingParser);
    RepeatingParser.prototype[_is_RepeatingParser_default] = true;
    dart.addTypeCaches(RepeatingParser);
    dart.setLibraryUri(RepeatingParser, I[37]);
    dart.setFieldSignature(RepeatingParser, () => ({
      __proto__: dart.getFields(RepeatingParser.__proto__),
      min: dart.finalFieldType(core.int),
      max: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionMethods(RepeatingParser, ['toString']);
    return RepeatingParser;
  });
  repeating.RepeatingParser = repeating.RepeatingParser$();
  dart.addTypeTests(repeating.RepeatingParser, _is_RepeatingParser_default);
  const _is_PossessiveRepeatingParser_default = Symbol('_is_PossessiveRepeatingParser_default');
  possessive.PossessiveRepeatingParser$ = dart.generic(R => {
    var JSArrayOfR = () => (JSArrayOfR = dart.constFn(_interceptors.JSArray$(R)))();
    var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
    var PossessiveRepeatingParserOfR = () => (PossessiveRepeatingParserOfR = dart.constFn(possessive.PossessiveRepeatingParser$(R)))();
    class PossessiveRepeatingParser extends repeating.RepeatingParser$(R) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[35], 55, 35, "context");
        let elements = JSArrayOfR().of([]);
        let current = context;
        while (dart.notNull(elements[$length]) < dart.notNull(this.min)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfR(), result.message);
          }
          elements[$add](result.value);
          current = result;
        }
        while (dart.notNull(elements[$length]) < dart.notNull(this.max)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return current.success(ListOfR(), elements);
          }
          elements[$add](result.value);
          current = result;
        }
        return current.success(ListOfR(), elements);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[35], 78, 26, "buffer");
        if (position == null) dart.nullFailed(I[35], 78, 38, "position");
        let count = 0;
        let current = position;
        while (count < dart.notNull(this.min)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            return -1;
          }
          current = result;
          count = count + 1;
        }
        while (count < dart.notNull(this.max)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            return current;
          }
          current = result;
          count = count + 1;
        }
        return current;
      }
      copy() {
        return new (PossessiveRepeatingParserOfR()).new(this.delegate, this.min, this.max);
      }
    }
    (PossessiveRepeatingParser.new = function(parser, min, max) {
      if (parser == null) dart.nullFailed(I[35], 51, 39, "parser");
      if (min == null) dart.nullFailed(I[35], 51, 51, "min");
      if (max == null) dart.nullFailed(I[35], 51, 60, "max");
      PossessiveRepeatingParser.__proto__.new.call(this, parser, min, max);
      ;
    }).prototype = PossessiveRepeatingParser.prototype;
    dart.addTypeTests(PossessiveRepeatingParser);
    PossessiveRepeatingParser.prototype[_is_PossessiveRepeatingParser_default] = true;
    dart.addTypeCaches(PossessiveRepeatingParser);
    dart.setMethodSignature(PossessiveRepeatingParser, () => ({
      __proto__: dart.getMethods(PossessiveRepeatingParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.List$(R)), [context.Context]),
      copy: dart.fnType(possessive.PossessiveRepeatingParser$(R), [])
    }));
    dart.setLibraryUri(PossessiveRepeatingParser, I[38]);
    return PossessiveRepeatingParser;
  });
  possessive.PossessiveRepeatingParser = possessive.PossessiveRepeatingParser$();
  dart.addTypeTests(possessive.PossessiveRepeatingParser, _is_PossessiveRepeatingParser_default);
  possessive['PossessiveRepeatingParserExtension|star'] = function PossessiveRepeatingParserExtension$124star(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 17, 19, "#this");
    return possessive['PossessiveRepeatingParserExtension|repeat'](T, $this, 0, 9007199254740991.0);
  };
  possessive['PossessiveRepeatingParserExtension|get#star'] = function PossessiveRepeatingParserExtension$124get$35star(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 17, 19, "#this");
    return dart.fn(() => possessive['PossessiveRepeatingParserExtension|star'](T, $this), dart.fnType(parser.Parser$(core.List$(T)), []));
  };
  possessive['PossessiveRepeatingParserExtension|plus'] = function PossessiveRepeatingParserExtension$124plus(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 27, 19, "#this");
    return possessive['PossessiveRepeatingParserExtension|repeat'](T, $this, 1, 9007199254740991.0);
  };
  possessive['PossessiveRepeatingParserExtension|get#plus'] = function PossessiveRepeatingParserExtension$124get$35plus(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 27, 19, "#this");
    return dart.fn(() => possessive['PossessiveRepeatingParserExtension|plus'](T, $this), dart.fnType(parser.Parser$(core.List$(T)), []));
  };
  possessive['PossessiveRepeatingParserExtension|times'] = function PossessiveRepeatingParserExtension$124times(T, $this, count) {
    if ($this == null) dart.nullFailed(I[35], 34, 19, "#this");
    if (count == null) dart.nullFailed(I[35], 34, 29, "count");
    return possessive['PossessiveRepeatingParserExtension|repeat'](T, $this, count, count);
  };
  possessive['PossessiveRepeatingParserExtension|get#times'] = function PossessiveRepeatingParserExtension$124get$35times(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 34, 19, "#this");
    return dart.fn(count => {
      if (count == null) dart.nullFailed(I[35], 34, 29, "count");
      return possessive['PossessiveRepeatingParserExtension|times'](T, $this, count);
    }, dart.fnType(parser.Parser$(core.List$(T)), [core.int]));
  };
  possessive['PossessiveRepeatingParserExtension|repeat'] = function PossessiveRepeatingParserExtension$124repeat(T, $this, min, max = null) {
    let t29;
    if ($this == null) dart.nullFailed(I[35], 44, 19, "#this");
    if (min == null) dart.nullFailed(I[35], 44, 30, "min");
    return new (possessive.PossessiveRepeatingParser$(T)).new($this, min, (t29 = max, t29 == null ? min : t29));
  };
  possessive['PossessiveRepeatingParserExtension|get#repeat'] = function PossessiveRepeatingParserExtension$124get$35repeat(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 44, 19, "#this");
    return dart.fn((min, max = null) => {
      if (min == null) dart.nullFailed(I[35], 44, 30, "min");
      return possessive['PossessiveRepeatingParserExtension|repeat'](T, $this, min, max);
    }, dart.fnType(parser.Parser$(core.List$(T)), [core.int], [T$.intN()]));
  };
  dart.defineLazy(unbounded, {
    /*unbounded.unbounded*/get unbounded() {
      return 9007199254740991.0;
    }
  }, false);
  var message$1 = dart.privateName(any, "AnyParser.message");
  any.AnyParser = class AnyParser extends parser.Parser$(core.String) {
    get message() {
      return this[message$1];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      if (context == null) dart.nullFailed(I[39], 19, 34, "context");
      let buffer = context.buffer;
      let position = context.position;
      return dart.notNull(position) < buffer.length ? context.success(core.String, buffer[$_get](position), dart.notNull(position) + 1) : context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      if (buffer == null) dart.nullFailed(I[39], 28, 26, "buffer");
      if (position == null) dart.nullFailed(I[39], 28, 38, "position");
      return dart.notNull(position) < buffer.length ? dart.notNull(position) + 1 : -1;
    }
    copy() {
      return new any.AnyParser.new(this.message);
    }
    hasEqualProperties(other) {
      any.AnyParser.as(other);
      if (other == null) dart.nullFailed(I[39], 35, 37, "other");
      return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
    }
  };
  (any.AnyParser.new = function(message) {
    if (message == null) dart.nullFailed(I[39], 13, 18, "message");
    this[message$1] = message;
    any.AnyParser.__proto__.new.call(this);
    ;
  }).prototype = any.AnyParser.prototype;
  dart.addTypeTests(any.AnyParser);
  dart.addTypeCaches(any.AnyParser);
  dart.setMethodSignature(any.AnyParser, () => ({
    __proto__: dart.getMethods(any.AnyParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
    copy: dart.fnType(any.AnyParser, [])
  }));
  dart.setLibraryUri(any.AnyParser, I[40]);
  dart.setFieldSignature(any.AnyParser, () => ({
    __proto__: dart.getFields(any.AnyParser.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  any.any = function any$(message = "input expected") {
    if (message == null) dart.nullFailed(I[39], 9, 28, "message");
    return new any.AnyParser.new(message);
  };
  const _is_AndParser_default = Symbol('_is_AndParser_default');
  and.AndParser$ = dart.generic(R => {
    var AndParserOfR = () => (AndParserOfR = dart.constFn(and.AndParser$(R)))();
    class AndParser extends delegate.DelegateParser$(R, R) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[41], 23, 29, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return context.success(R, result.value);
        } else {
          return result;
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[41], 33, 26, "buffer");
        if (position == null) dart.nullFailed(I[41], 33, 38, "position");
        let result = this.delegate.fastParseOn(buffer, position);
        return dart.notNull(result) < 0 ? -1 : position;
      }
      copy() {
        return new (AndParserOfR()).new(this.delegate);
      }
    }
    (AndParser.new = function(delegate) {
      if (delegate == null) dart.nullFailed(I[41], 20, 23, "delegate");
      AndParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = AndParser.prototype;
    dart.addTypeTests(AndParser);
    AndParser.prototype[_is_AndParser_default] = true;
    dart.addTypeCaches(AndParser);
    dart.setMethodSignature(AndParser, () => ({
      __proto__: dart.getMethods(AndParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(and.AndParser$(R), [])
    }));
    dart.setLibraryUri(AndParser, I[42]);
    return AndParser;
  });
  and.AndParser = and.AndParser$();
  dart.addTypeTests(and.AndParser, _is_AndParser_default);
  and['AndParserExtension|and'] = function AndParserExtension$124and(T, $this) {
    if ($this == null) dart.nullFailed(I[41], 14, 13, "#this");
    return new (and.AndParser$(T)).new($this);
  };
  and['AndParserExtension|get#and'] = function AndParserExtension$124get$35and(T, $this) {
    if ($this == null) dart.nullFailed(I[41], 14, 13, "#this");
    return dart.fn(() => and['AndParserExtension|and'](T, $this), dart.fnType(parser.Parser$(T), []));
  };
  var callback$ = dart.privateName(map, "MapParser.callback");
  var hasSideEffects$ = dart.privateName(map, "MapParser.hasSideEffects");
  const _is_MapParser_default = Symbol('_is_MapParser_default');
  map.MapParser$ = dart.generic((T, R) => {
    var MapParserOfT$R = () => (MapParserOfT$R = dart.constFn(map.MapParser$(T, R)))();
    var TToR = () => (TToR = dart.constFn(dart.fnType(R, [T])))();
    class MapParser extends delegate.DelegateParser$(T, R) {
      get callback() {
        return this[callback$];
      }
      set callback(value) {
        super.callback = value;
      }
      get hasSideEffects() {
        return this[hasSideEffects$];
      }
      set hasSideEffects(value) {
        super.hasSideEffects = value;
      }
      parseOn(context) {
        let t32;
        if (context == null) dart.nullFailed(I[43], 37, 29, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result.success(R, (t32 = result.value, this.callback(t32)));
        } else {
          return result.failure(R, result.message);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[43], 48, 26, "buffer");
        if (position == null) dart.nullFailed(I[43], 48, 38, "position");
        return dart.test(this.hasSideEffects) ? super.fastParseOn(buffer, position) : this.delegate.fastParseOn(buffer, position);
      }
      hasEqualProperties(other) {
        MapParserOfT$R().as(other);
        if (other == null) dart.nullFailed(I[43], 53, 43, "other");
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.callback, TToR().as(other.callback)) && this.hasSideEffects == other.hasSideEffects;
      }
      copy() {
        return new (MapParserOfT$R()).new(this.delegate, this.callback, this.hasSideEffects);
      }
    }
    (MapParser.new = function(delegate, callback, hasSideEffects = false) {
      if (delegate == null) dart.nullFailed(I[43], 27, 23, "delegate");
      if (callback == null) dart.nullFailed(I[43], 27, 38, "callback");
      if (hasSideEffects == null) dart.nullFailed(I[43], 27, 54, "hasSideEffects");
      this[callback$] = callback;
      this[hasSideEffects$] = hasSideEffects;
      MapParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = MapParser.prototype;
    dart.addTypeTests(MapParser);
    MapParser.prototype[_is_MapParser_default] = true;
    dart.addTypeCaches(MapParser);
    dart.setMethodSignature(MapParser, () => ({
      __proto__: dart.getMethods(MapParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(map.MapParser$(T, R), [])
    }));
    dart.setLibraryUri(MapParser, I[44]);
    dart.setFieldSignature(MapParser, () => ({
      __proto__: dart.getFields(MapParser.__proto__),
      callback: dart.finalFieldType(dart.fnType(R, [T])),
      hasSideEffects: dart.finalFieldType(core.bool)
    }));
    return MapParser;
  });
  map.MapParser = map.MapParser$();
  dart.addTypeTests(map.MapParser, _is_MapParser_default);
  map['MapParserExtension|map'] = function MapParserExtension$124map(T, R, $this, callback, opts) {
    if ($this == null) dart.nullFailed(I[43], 20, 13, "#this");
    if (callback == null) dart.nullFailed(I[43], 20, 38, "callback");
    let hasSideEffects = opts && 'hasSideEffects' in opts ? opts.hasSideEffects : false;
    if (hasSideEffects == null) dart.nullFailed(I[43], 20, 54, "hasSideEffects");
    return new (map.MapParser$(T, R)).new($this, callback, hasSideEffects);
  };
  map['MapParserExtension|get#map'] = function MapParserExtension$124get$35map(T, $this) {
    if ($this == null) dart.nullFailed(I[43], 20, 13, "#this");
    return dart.fn((R, callback, opts) => {
      if (callback == null) dart.nullFailed(I[43], 20, 38, "callback");
      let hasSideEffects = opts && 'hasSideEffects' in opts ? opts.hasSideEffects : false;
      if (hasSideEffects == null) dart.nullFailed(I[43], 20, 54, "hasSideEffects");
      return map['MapParserExtension|map'](T, R, $this, callback, {hasSideEffects: hasSideEffects});
    }, dart.gFnType(R => {
      var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
      return [ParserOfR(), [dart.fnType(R, [T])], {hasSideEffects: core.bool}, {}];
    }, R => {
      var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
      return [T$.ObjectN()];
    }));
  };
  dart.trackLibraries("packages/petitparser/src/context/context", {
    "package:petitparser/src/parser/combinator/delegate.dart": delegate,
    "package:petitparser/src/core/parser.dart": parser,
    "package:petitparser/src/context/success.dart": success,
    "package:petitparser/src/context/result.dart": result,
    "package:petitparser/src/context/context.dart": context,
    "package:petitparser/src/context/failure.dart": failure,
    "package:petitparser/src/core/exception.dart": exception,
    "package:petitparser/src/shared/annotations.dart": annotations,
    "package:petitparser/src/core/token.dart": token$,
    "package:petitparser/src/parser/combinator/sequence.dart": sequence,
    "package:petitparser/src/parser/combinator/list.dart": list,
    "package:petitparser/src/parser/combinator/optional.dart": optional,
    "package:petitparser/src/parser/combinator/choice.dart": choice,
    "package:petitparser/src/parser/utils/failure_joiner.dart": failure_joiner,
    "package:petitparser/src/parser/character/char.dart": char$,
    "package:petitparser/src/parser/character/predicate.dart": predicate,
    "package:petitparser/src/parser/character/parser.dart": parser$,
    "package:petitparser/src/parser/character/code.dart": code,
    "package:petitparser/src/parser/action/token.dart": token$0,
    "package:petitparser/src/matcher/matches_skipping.dart": matches_skipping,
    "package:petitparser/src/matcher/matches.dart": matches,
    "package:petitparser/src/parser/repeater/possessive.dart": possessive,
    "package:petitparser/src/parser/repeater/unbounded.dart": unbounded,
    "package:petitparser/src/parser/repeater/repeating.dart": repeating,
    "package:petitparser/src/parser/predicate/any.dart": any,
    "package:petitparser/src/parser/combinator/and.dart": and,
    "package:petitparser/src/parser/action/map.dart": map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../core/parser.dart","../parser/combinator/delegate.dart","context.dart","result.dart","success.dart","failure.dart","../core/exception.dart","../shared/annotations.dart","../core/token.dart","../parser/combinator/list.dart","../parser/combinator/sequence.dart","../parser/combinator/optional.dart","../parser/combinator/choice.dart","../parser/utils/failure_joiner.dart","../parser/character/predicate.dart","../parser/character/char.dart","../parser/character/parser.dart","../parser/character/code.dart","../parser/action/token.dart","../matcher/matches_skipping.dart","../matcher/matches.dart","../parser/repeater/repeating.dart","../parser/repeater/possessive.dart","../parser/repeater/unbounded.dart","../parser/predicate/any.dart","../parser/combinator/and.dart","../parser/action/map.dart"],"names":[],"mappings":"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","file":"context.unsound.ddc.js"}');
  // Exports:
  return {
    src__parser__combinator__delegate: delegate,
    src__core__parser: parser,
    src__context__success: success,
    src__context__result: result,
    src__context__context: context,
    src__context__failure: failure,
    src__core__exception: exception,
    src__shared__annotations: annotations,
    src__core__token: token$,
    src__parser__combinator__sequence: sequence,
    src__parser__combinator__list: list,
    src__parser__combinator__optional: optional,
    src__parser__combinator__choice: choice,
    src__parser__utils__failure_joiner: failure_joiner,
    src__parser__character__char: char$,
    src__parser__character__predicate: predicate,
    src__parser__character__parser: parser$,
    src__parser__character__code: code,
    src__parser__action__token: token$0,
    src__matcher__matches_skipping: matches_skipping,
    src__matcher__matches: matches,
    src__parser__repeater__possessive: possessive,
    src__parser__repeater__unbounded: unbounded,
    src__parser__repeater__repeating: repeating,
    src__parser__predicate__any: any,
    src__parser__combinator__and: and,
    src__parser__action__map: map
  };
}));

//# sourceMappingURL=context.unsound.ddc.js.map
