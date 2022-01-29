define(['dart_sdk', 'packages/petitparser/src/parser/combinator/settable', 'packages/petitparser/src/context/context'], (function load__packages__petitparser__src__definition__grammar(dart_sdk, packages__petitparser__src__parser__combinator__settable, packages__petitparser__src__context__context) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const resolvable = packages__petitparser__src__parser__combinator__settable.src__parser__utils__resolvable;
  const parser$ = packages__petitparser__src__context__context.src__core__parser;
  const result = packages__petitparser__src__context__context.src__context__result;
  const context = packages__petitparser__src__context__context.src__context__context;
  const delegate = packages__petitparser__src__context__context.src__parser__combinator__delegate;
  var reference = Object.create(dart.library);
  var resolve = Object.create(dart.library);
  var undefined = Object.create(dart.library);
  var reference$ = Object.create(dart.library);
  var parser = Object.create(dart.library);
  var grammar = Object.create(dart.library);
  var $takeWhile = dartx.takeWhile;
  var $toList = dartx.toList;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $add = dartx.add;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $hashCode = dartx.hashCode;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    dynamicTobool: () => (T$.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    LinkedMapOfResolvableParser$Parser: () => (T$.LinkedMapOfResolvableParser$Parser = dart.constFn(_js_helper.LinkedMap$(resolvable.ResolvableParser, parser$.Parser)))(),
    JSArrayOfParser: () => (T$.JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser$.Parser)))(),
    LinkedHashSetOfParser: () => (T$.LinkedHashSetOfParser = dart.constFn(collection.LinkedHashSet$(parser$.Parser)))(),
    ObjectL: () => (T$.ObjectL = dart.constFn(dart.legacy(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: undefined._Undefined.prototype
      });
    },
    get C1() {
      return C[1] = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C[2] = dart.constList([], T$.ObjectL());
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/petitparser/src/definition/reference.dart",
    "org-dartlang-app:///packages/petitparser/src/definition/resolve.dart",
    "package:petitparser/src/definition/internal/undefined.dart",
    "org-dartlang-app:///packages/petitparser/src/definition/internal/reference.dart",
    "package:petitparser/src/definition/internal/reference.dart",
    "org-dartlang-app:///packages/petitparser/src/definition/parser.dart",
    "package:petitparser/src/definition/parser.dart",
    "org-dartlang-app:///packages/petitparser/src/definition/grammar.dart",
    "package:petitparser/src/definition/grammar.dart"
  ];
  reference.ref = function ref(T, $function, arg1 = C[0] || CT.C0, arg2 = C[0] || CT.C0, arg3 = C[0] || CT.C0, arg4 = C[0] || CT.C0, arg5 = C[0] || CT.C0, arg6 = C[0] || CT.C0, arg7 = C[0] || CT.C0, arg8 = C[0] || CT.C0, arg9 = C[0] || CT.C0) {
    if ($function == null) dart.nullFailed(I[0], 15, 12, "function");
    let $arguments = [arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9][$takeWhile](dart.fn(each => !dart.equals(each, undefined.undefined), T$.dynamicTobool()))[$toList]({growable: false});
    return new (reference$.ReferenceParser$(T)).new($function, $arguments);
  };
  reference.ref0 = function ref0(T, $function) {
    if ($function == null) dart.nullFailed(I[0], 40, 40, "function");
    return new (reference$.ReferenceParser$(T)).new($function, C[1] || CT.C1);
  };
  reference.ref1 = function ref1(T, A1, $function, arg1) {
    if ($function == null) dart.nullFailed(I[0], 47, 26, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1]);
  };
  reference.ref2 = function ref2(T, A1, A2, $function, arg1, arg2) {
    if ($function == null) dart.nullFailed(I[0], 56, 30, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2]);
  };
  reference.ref3 = function ref3(T, A1, A2, A3, $function, arg1, arg2, arg3) {
    if ($function == null) dart.nullFailed(I[0], 66, 34, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3]);
  };
  reference.ref4 = function ref4(T, A1, A2, A3, A4, $function, arg1, arg2, arg3, arg4) {
    if ($function == null) dart.nullFailed(I[0], 77, 38, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3, arg4]);
  };
  reference.ref5 = function ref5(T, A1, A2, A3, A4, A5, $function, arg1, arg2, arg3, arg4, arg5) {
    if ($function == null) dart.nullFailed(I[0], 89, 42, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3, arg4, arg5]);
  };
  reference.ref6 = function ref6(T, A1, A2, A3, A4, A5, A6, $function, arg1, arg2, arg3, arg4, arg5, arg6) {
    if ($function == null) dart.nullFailed(I[0], 102, 46, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3, arg4, arg5, arg6]);
  };
  reference.ref7 = function ref7(T, A1, A2, A3, A4, A5, A6, A7, $function, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    if ($function == null) dart.nullFailed(I[0], 116, 50, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3, arg4, arg5, arg6, arg7]);
  };
  reference.ref8 = function ref8(T, A1, A2, A3, A4, A5, A6, A7, A8, $function, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    if ($function == null) dart.nullFailed(I[0], 131, 54, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8]);
  };
  reference.ref9 = function ref9(T, A1, A2, A3, A4, A5, A6, A7, A8, A9, $function, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if ($function == null) dart.nullFailed(I[0], 148, 58, "function");
    return new (reference$.ReferenceParser$(T)).new($function, [arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9]);
  };
  resolve.resolve = function resolve$(T, parser) {
    if (parser == null) dart.nullFailed(I[1], 13, 32, "parser");
    let mapping = new (T$.LinkedMapOfResolvableParser$Parser()).new();
    parser = resolve._dereference(T, parser, mapping);
    let todo = T$.JSArrayOfParser().of([parser]);
    let seen = T$.LinkedHashSetOfParser().from([parser]);
    while (dart.test(todo[$isNotEmpty])) {
      let parent = todo[$removeLast]();
      for (let child of parent.children) {
        if (resolvable.ResolvableParser.is(child)) {
          let referenced = resolve._dereference(dart.dynamic, child, mapping);
          parent.replace(child, referenced);
          child = referenced;
        }
        if (dart.test(seen.add(child))) {
          todo[$add](child);
        }
      }
    }
    return parser;
  };
  resolve._dereference = function _dereference(T, parser, mapping) {
    if (parser == null) dart.nullFailed(I[1], 37, 37, "parser");
    if (mapping == null) dart.nullFailed(I[1], 37, 65, "mapping");
    let references = collection.LinkedHashSet$(resolvable.ResolvableParser$(T)).new();
    while (resolvable.ResolvableParser$(T).is(parser)) {
      if (dart.test(mapping[$containsKey](parser))) {
        return parser$.Parser$(T).as(dart.nullCheck(mapping[$_get](parser)));
      } else if (!dart.test(references.add(parser))) {
        dart.throw(new core.StateError.new("Recursive references detected: " + dart.str(references)));
      }
      parser = parser.resolve();
    }
    if (resolvable.ResolvableParser.is(parser)) {
      dart.throw(new core.StateError.new("Type error in reference parser: " + dart.str(parser)));
    }
    for (let reference of references) {
      mapping[$_set](reference, parser);
    }
    return parser;
  };
  undefined._Undefined = class _Undefined extends core.Object {};
  (undefined._Undefined.new = function() {
    ;
  }).prototype = undefined._Undefined.prototype;
  dart.addTypeTests(undefined._Undefined);
  dart.addTypeCaches(undefined._Undefined);
  dart.setLibraryUri(undefined._Undefined, I[2]);
  dart.defineLazy(undefined, {
    /*undefined.undefined*/get undefined() {
      return C[0] || CT.C0;
    }
  }, false);
  var $function$ = dart.privateName(reference$, "ReferenceParser.function");
  var $arguments$ = dart.privateName(reference$, "ReferenceParser.arguments");
  const _is_ReferenceParser_default = Symbol('_is_ReferenceParser_default');
  reference$.ReferenceParser$ = dart.generic(R => {
    var ParserOfR = () => (ParserOfR = dart.constFn(parser$.Parser$(R)))();
    class ReferenceParser extends parser$.Parser$(R) {
      get function() {
        return this[$function$];
      }
      set function(value) {
        super.function = value;
      }
      get arguments() {
        return this[$arguments$];
      }
      set arguments(value) {
        super.arguments = value;
      }
      resolve() {
        return ParserOfR().as(core.Function.apply(this.function, this.arguments));
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[3], 20, 29, "context");
        return dart.throw(new core.UnsupportedError.new("References cannot be parsed."));
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[3], 24, 26, "buffer");
        if (position == null) dart.nullFailed(I[3], 24, 38, "position");
        return dart.throw(new core.UnsupportedError.new("References cannot be parsed."));
      }
      copy() {
        return dart.throw(new core.UnsupportedError.new("References cannot be copied."));
      }
      _equals(other) {
        if (other == null) return false;
        if (reference$.ReferenceParser.is(other)) {
          if (!dart.equals(this.function, other.function) || this.arguments[$length] != other.arguments[$length]) {
            return false;
          }
          for (let i = 0; i < dart.notNull(this.arguments[$length]); i = i + 1) {
            let a = this.arguments[$_get](i);
            let b = other.arguments[$_get](i);
            if (parser$.Parser.is(a) && !reference$.ReferenceParser.is(a) && parser$.Parser.is(b) && !reference$.ReferenceParser.is(b)) {
              if (!dart.test(a.isEqualTo(b))) {
                return false;
              }
            } else {
              if (!dart.equals(a, b)) {
                return false;
              }
            }
          }
          return true;
        }
        return false;
      }
      get hashCode() {
        return dart.hashCode(this.function);
      }
    }
    (ReferenceParser.new = function($function, $arguments) {
      if ($function == null) dart.nullFailed(I[3], 11, 24, "function");
      if ($arguments == null) dart.nullFailed(I[3], 11, 39, "arguments");
      this[$function$] = $function;
      this[$arguments$] = $arguments;
      ReferenceParser.__proto__.new.call(this);
      ;
    }).prototype = ReferenceParser.prototype;
    dart.addTypeTests(ReferenceParser);
    ReferenceParser.prototype[_is_ReferenceParser_default] = true;
    dart.addTypeCaches(ReferenceParser);
    ReferenceParser[dart.implements] = () => [resolvable.ResolvableParser$(R)];
    dart.setMethodSignature(ReferenceParser, () => ({
      __proto__: dart.getMethods(ReferenceParser.__proto__),
      resolve: dart.fnType(parser$.Parser$(R), []),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(reference$.ReferenceParser$(R), [])
    }));
    dart.setLibraryUri(ReferenceParser, I[4]);
    dart.setFieldSignature(ReferenceParser, () => ({
      __proto__: dart.getFields(ReferenceParser.__proto__),
      function: dart.finalFieldType(core.Function),
      arguments: dart.finalFieldType(core.List)
    }));
    dart.defineExtensionMethods(ReferenceParser, ['_equals']);
    dart.defineExtensionAccessors(ReferenceParser, ['hashCode']);
    return ReferenceParser;
  });
  reference$.ReferenceParser = reference$.ReferenceParser$();
  dart.addTypeTests(reference$.ReferenceParser, _is_ReferenceParser_default);
  const _is_GrammarParser_default = Symbol('_is_GrammarParser_default');
  parser.GrammarParser$ = dart.generic(T => {
    var GrammarParserOfT = () => (GrammarParserOfT = dart.constFn(parser.GrammarParser$(T)))();
    class GrammarParser extends delegate.DelegateParser$(T, T) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[5], 17, 29, "context");
        return this.delegate.parseOn(context);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[5], 20, 26, "buffer");
        if (position == null) dart.nullFailed(I[5], 20, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (GrammarParserOfT()).__(this.delegate);
      }
    }
    (GrammarParser.new = function(definition) {
      if (definition == null) dart.nullFailed(I[5], 11, 35, "definition");
      GrammarParser.__.call(this, definition.build(T));
    }).prototype = GrammarParser.prototype;
    (GrammarParser.__ = function(parser) {
      if (parser == null) dart.nullFailed(I[5], 14, 29, "parser");
      GrammarParser.__proto__.new.call(this, parser);
      ;
    }).prototype = GrammarParser.prototype;
    dart.addTypeTests(GrammarParser);
    GrammarParser.prototype[_is_GrammarParser_default] = true;
    dart.addTypeCaches(GrammarParser);
    dart.setMethodSignature(GrammarParser, () => ({
      __proto__: dart.getMethods(GrammarParser.__proto__),
      parseOn: dart.fnType(result.Result$(T), [context.Context]),
      copy: dart.fnType(parser.GrammarParser$(T), [])
    }));
    dart.setLibraryUri(GrammarParser, I[6]);
    return GrammarParser;
  });
  parser.GrammarParser = parser.GrammarParser$();
  dart.addTypeTests(parser.GrammarParser, _is_GrammarParser_default);
  grammar.GrammarDefinition = class GrammarDefinition extends core.Object {
    ref(T, callback, arg1 = C[0] || CT.C0, arg2 = C[0] || CT.C0, arg3 = C[0] || CT.C0, arg4 = C[0] || CT.C0, arg5 = C[0] || CT.C0) {
      if (callback == null) dart.nullFailed(I[7], 77, 29, "callback");
      let $arguments = [arg1, arg2, arg3, arg4, arg5][$takeWhile](dart.fn(each => !dart.equals(each, undefined.undefined), T$.dynamicTobool()))[$toList]({growable: false});
      return new (reference$.ReferenceParser$(T)).new(callback, $arguments);
    }
    ref0(T, callback) {
      if (callback == null) dart.nullFailed(I[7], 90, 42, "callback");
      return new (reference$.ReferenceParser$(T)).new(callback, C[1] || CT.C1);
    }
    ref1(T, A1, callback, arg1) {
      if (callback == null) dart.nullFailed(I[7], 95, 48, "callback");
      return new (reference$.ReferenceParser$(T)).new(callback, [arg1]);
    }
    ref2(T, A1, A2, callback, arg1, arg2) {
      if (callback == null) dart.nullFailed(I[7], 101, 38, "callback");
      return new (reference$.ReferenceParser$(T)).new(callback, [arg1, arg2]);
    }
    ref3(T, A1, A2, A3, callback, arg1, arg2, arg3) {
      if (callback == null) dart.nullFailed(I[7], 107, 42, "callback");
      return new (reference$.ReferenceParser$(T)).new(callback, [arg1, arg2, arg3]);
    }
    ref4(T, A1, A2, A3, A4, callback, arg1, arg2, arg3, arg4) {
      if (callback == null) dart.nullFailed(I[7], 112, 72, "callback");
      return new (reference$.ReferenceParser$(T)).new(callback, [arg1, arg2, arg3, arg4]);
    }
    ref5(T, A1, A2, A3, A4, A5, callback, arg1, arg2, arg3, arg4, arg5) {
      if (callback == null) dart.nullFailed(I[7], 119, 50, "callback");
      return new (reference$.ReferenceParser$(T)).new(callback, [arg1, arg2, arg3, arg4, arg5]);
    }
    build(T, opts) {
      let start = opts && 'start' in opts ? opts.start : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : C[2] || CT.C2;
      if ($arguments == null) dart.nullFailed(I[7], 132, 53, "arguments");
      if (start != null) {
        return resolve.resolve(T, parser$.Parser$(T).as(core.Function.apply(start, $arguments)));
      } else if (dart.test($arguments[$isEmpty])) {
        return resolve.resolve(T, parser$.Parser$(T).as(this.start()));
      } else {
        dart.throw(new core.StateError.new("Invalid arguments passed."));
      }
    }
  };
  (grammar.GrammarDefinition.new = function() {
    ;
  }).prototype = grammar.GrammarDefinition.prototype;
  dart.addTypeTests(grammar.GrammarDefinition);
  dart.addTypeCaches(grammar.GrammarDefinition);
  dart.setMethodSignature(grammar.GrammarDefinition, () => ({
    __proto__: dart.getMethods(grammar.GrammarDefinition.__proto__),
    ref: dart.gFnType(T => [parser$.Parser$(T), [core.Function], [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]], T => [dart.nullable(core.Object)]),
    ref0: dart.gFnType(T => [parser$.Parser$(T), [dart.fnType(parser$.Parser$(T), [])]], T => [dart.nullable(core.Object)]),
    ref1: dart.gFnType((T, A1) => [parser$.Parser$(T), [dart.fnType(parser$.Parser$(T), [A1]), A1]], (T, A1) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    ref2: dart.gFnType((T, A1, A2) => [parser$.Parser$(T), [dart.fnType(parser$.Parser$(T), [A1, A2]), A1, A2]], (T, A1, A2) => [dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object)]),
    ref3: dart.gFnType((T, A1, A2, A3) => [parser$.Parser$(T), [dart.fnType(parser$.Parser$(T), [A1, A2, A3]), A1, A2, A3]], (T, A1, A2, A3) => [dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object)]),
    ref4: dart.gFnType((T, A1, A2, A3, A4) => [parser$.Parser$(T), [dart.fnType(parser$.Parser$(T), [A1, A2, A3, A4]), A1, A2, A3, A4]], (T, A1, A2, A3, A4) => [dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object)]),
    ref5: dart.gFnType((T, A1, A2, A3, A4, A5) => [parser$.Parser$(T), [dart.fnType(parser$.Parser$(T), [A1, A2, A3, A4, A5]), A1, A2, A3, A4, A5]], (T, A1, A2, A3, A4, A5) => [dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object)]),
    build: dart.gFnType(T => [parser$.Parser$(T), [], {arguments: core.List$(core.Object), start: dart.nullable(core.Function)}, {}], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(grammar.GrammarDefinition, I[8]);
  dart.trackLibraries("packages/petitparser/src/definition/grammar", {
    "package:petitparser/src/definition/reference.dart": reference,
    "package:petitparser/src/definition/resolve.dart": resolve,
    "package:petitparser/src/definition/internal/undefined.dart": undefined,
    "package:petitparser/src/definition/internal/reference.dart": reference$,
    "package:petitparser/src/definition/parser.dart": parser,
    "package:petitparser/src/definition/grammar.dart": grammar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reference.dart","resolve.dart","internal/undefined.dart","internal/reference.dart","parser.dart","grammar.dart"],"names":[],"mappings":"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","file":"grammar.unsound.ddc.js"}');
  // Exports:
  return {
    src__definition__reference: reference,
    src__definition__resolve: resolve,
    src__definition__internal__undefined: undefined,
    src__definition__internal__reference: reference$,
    src__definition__parser: parser,
    src__definition__grammar: grammar
  };
}));

//# sourceMappingURL=grammar.unsound.ddc.js.map
