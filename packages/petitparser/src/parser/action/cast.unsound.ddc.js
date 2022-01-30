define(['dart_sdk', 'packages/petitparser/src/context/context', 'packages/petitparser/src/parser/action/trimming'], (function load__packages__petitparser__src__parser__action__cast(dart_sdk, packages__petitparser__src__context__context, packages__petitparser__src__parser__action__trimming) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = packages__petitparser__src__context__context.src__core__parser;
  const repeating = packages__petitparser__src__context__context.src__parser__repeater__repeating;
  const predicate = packages__petitparser__src__context__context.src__parser__character__predicate;
  const parser$ = packages__petitparser__src__context__context.src__parser__character__parser;
  const delegate = packages__petitparser__src__context__context.src__parser__combinator__delegate;
  const result = packages__petitparser__src__context__context.src__context__result;
  const context = packages__petitparser__src__context__context.src__context__context;
  const code = packages__petitparser__src__context__context.src__parser__character__code;
  const char = packages__petitparser__src__context__context.src__parser__character__char;
  const map = packages__petitparser__src__context__context.src__parser__action__map;
  const any = packages__petitparser__src__context__context.src__parser__predicate__any;
  const sequence = packages__petitparser__src__context__context.src__parser__combinator__sequence;
  const possessive = packages__petitparser__src__context__context.src__parser__repeater__possessive;
  const choice = packages__petitparser__src__context__context.src__parser__combinator__choice;
  const optional = packages__petitparser__src__context__context.src__parser__combinator__optional;
  const failure = packages__petitparser__src__context__context.src__context__failure;
  const epsilon = packages__petitparser__src__parser__action__trimming.src__parser__misc__epsilon;
  var limited = Object.create(dart.library);
  var digit = Object.create(dart.library);
  var permute = Object.create(dart.library);
  var none_of = Object.create(dart.library);
  var optimize = Object.create(dart.library);
  var range = Object.create(dart.library);
  var lookup = Object.create(dart.library);
  var constant$ = Object.create(dart.library);
  var not = Object.create(dart.library);
  var flatten = Object.create(dart.library);
  var letter = Object.create(dart.library);
  var string = Object.create(dart.library);
  var predicate$ = Object.create(dart.library);
  var pattern = Object.create(dart.library);
  var any_of = Object.create(dart.library);
  var word = Object.create(dart.library);
  var greedy = Object.create(dart.library);
  var lazy = Object.create(dart.library);
  var uppercase = Object.create(dart.library);
  var cast_list = Object.create(dart.library);
  var pick = Object.create(dart.library);
  var position = Object.create(dart.library);
  var cast = Object.create(dart.library);
  var not$ = Object.create(dart.library);
  var lowercase = Object.create(dart.library);
  var eof = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $codeUnits = dartx.codeUnits;
  var $sort = dartx.sort;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $last = dartx.last;
  var $_set = dartx._set;
  var $fold = dartx.fold;
  var $first = dartx.first;
  var $rightShift = dartx['>>'];
  var $substring = dartx.substring;
  var $toLowerCase = dartx.toLowerCase;
  var $toUpperCase = dartx.toUpperCase;
  var $toString = dartx.toString;
  var $startsWith = dartx.startsWith;
  var $endsWith = dartx.endsWith;
  var $cast = dartx.cast;
  var $removeLast = dartx.removeLast;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    JSArrayOfParser: () => (T$.JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser.Parser)))(),
    ListOfint: () => (T$.ListOfint = dart.constFn(core.List$(core.int)))(),
    intToRangeCharPredicate: () => (T$.intToRangeCharPredicate = dart.constFn(dart.fnType(range.RangeCharPredicate, [core.int])))(),
    ListOfRangeCharPredicate: () => (T$.ListOfRangeCharPredicate = dart.constFn(core.List$(range.RangeCharPredicate)))(),
    RangeCharPredicateAndRangeCharPredicateToint: () => (T$.RangeCharPredicateAndRangeCharPredicateToint = dart.constFn(dart.fnType(core.int, [range.RangeCharPredicate, range.RangeCharPredicate])))(),
    JSArrayOfRangeCharPredicate: () => (T$.JSArrayOfRangeCharPredicate = dart.constFn(_interceptors.JSArray$(range.RangeCharPredicate)))(),
    intAndRangeCharPredicateToint: () => (T$.intAndRangeCharPredicateToint = dart.constFn(dart.fnType(core.int, [core.int, range.RangeCharPredicate])))(),
    intL: () => (T$.intL = dart.constFn(dart.legacy(core.int)))(),
    ParserOfString: () => (T$.ParserOfString = dart.constFn(parser.Parser$(core.String)))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToParserOfString: () => (T$.StringNToParserOfString = dart.constFn(dart.fnType(T$.ParserOfString(), [], [T$.StringN()])))(),
    __ToParserOfString: () => (T$.__ToParserOfString = dart.constFn(dart.fnType(T$.ParserOfString(), [], {caseInsensitive: core.bool, isPattern: core.bool, message: T$.StringN()}, {})))(),
    StringTobool: () => (T$.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    StringToRangeCharPredicate: () => (T$.StringToRangeCharPredicate = dart.constFn(dart.fnType(range.RangeCharPredicate, [core.String])))(),
    ListToRangeCharPredicate: () => (T$.ListToRangeCharPredicate = dart.constFn(dart.fnType(range.RangeCharPredicate, [core.List])))(),
    ListToCharacterPredicate: () => (T$.ListToCharacterPredicate = dart.constFn(dart.fnType(predicate.CharacterPredicate, [core.List])))(),
    JSArrayOfContext: () => (T$.JSArrayOfContext = dart.constFn(_interceptors.JSArray$(context.Context)))(),
    JSArrayOfint: () => (T$.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    ParserOfvoid: () => (T$.ParserOfvoid = dart.constFn(parser.Parser$(dart.void)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidToParserOfListOfR: () => (T$.VoidToParserOfListOfR = dart.constFn(dart.gFnType(R => {
      var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
      var ParserOfListOfR = () => (ParserOfListOfR = dart.constFn(parser.Parser$(ListOfR())))();
      return [ParserOfListOfR(), []];
    }, R => {
      var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
      var ParserOfListOfR = () => (ParserOfListOfR = dart.constFn(parser.Parser$(ListOfR())))();
      return [T$.ObjectN()];
    })))(),
    VoidToParserOfR: () => (T$.VoidToParserOfR = dart.constFn(dart.gFnType(R => {
      var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
      return [ParserOfR(), []];
    }, R => {
      var ParserOfR = () => (ParserOfR = dart.constFn(parser.Parser$(R)))();
      return [T$.ObjectN()];
    })))(),
    ParserOfObject: () => (T$.ParserOfObject = dart.constFn(parser.Parser$(core.Object)))(),
    JSArrayOfParserOfObject: () => (T$.JSArrayOfParserOfObject = dart.constFn(_interceptors.JSArray$(T$.ParserOfObject())))(),
    StringToParserOfString: () => (T$.StringToParserOfString = dart.constFn(dart.fnType(T$.ParserOfString(), [], [core.String])))(),
    JSArrayOfParserOfvoid: () => (T$.JSArrayOfParserOfvoid = dart.constFn(_interceptors.JSArray$(T$.ParserOfvoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: digit.DigitCharPredicate.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: constant$.ConstantCharPredicate.prototype,
        [ConstantCharPredicate_constant]: false
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: constant$.ConstantCharPredicate.prototype,
        [ConstantCharPredicate_constant]: true
      });
    },
    get C3() {
      return C[3] = dart.constList([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648.0], T$.intL());
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: letter.LetterCharPredicate.prototype
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: word.WordCharPredicate.prototype
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: uppercase.UppercaseCharPredicate.prototype
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: lowercase.LowercaseCharPredicate.prototype
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/petitparser/src/parser/repeater/limited.dart",
    "package:petitparser/src/parser/repeater/limited.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/digit.dart",
    "package:petitparser/src/parser/character/digit.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/permute.dart",
    "package:petitparser/src/parser/action/permute.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/none_of.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/optimize.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/range.dart",
    "package:petitparser/src/parser/character/range.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/lookup.dart",
    "package:petitparser/src/parser/character/lookup.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/constant.dart",
    "package:petitparser/src/parser/character/constant.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/not.dart",
    "package:petitparser/src/parser/character/not.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/flatten.dart",
    "package:petitparser/src/parser/action/flatten.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/letter.dart",
    "package:petitparser/src/parser/character/letter.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/predicate/string.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/predicate/predicate.dart",
    "package:petitparser/src/parser/predicate/predicate.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/pattern.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/any_of.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/word.dart",
    "package:petitparser/src/parser/character/word.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/repeater/greedy.dart",
    "package:petitparser/src/parser/repeater/greedy.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/repeater/lazy.dart",
    "package:petitparser/src/parser/repeater/lazy.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/uppercase.dart",
    "package:petitparser/src/parser/character/uppercase.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/cast_list.dart",
    "package:petitparser/src/parser/action/cast_list.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/pick.dart",
    "package:petitparser/src/parser/action/pick.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/misc/position.dart",
    "package:petitparser/src/parser/misc/position.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/cast.dart",
    "package:petitparser/src/parser/action/cast.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/combinator/not.dart",
    "package:petitparser/src/parser/combinator/not.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/character/lowercase.dart",
    "package:petitparser/src/parser/character/lowercase.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/misc/eof.dart",
    "package:petitparser/src/parser/misc/eof.dart"
  ];
  var limit$ = dart.privateName(limited, "LimitedRepeatingParser.limit");
  const _is_LimitedRepeatingParser_default = Symbol('_is_LimitedRepeatingParser_default');
  limited.LimitedRepeatingParser$ = dart.generic(R => {
    class LimitedRepeatingParser extends repeating.RepeatingParser$(R) {
      get limit() {
        return this[limit$];
      }
      set limit(value) {
        this[limit$] = value;
      }
      get children() {
        return T$.JSArrayOfParser().of([this.delegate, this.limit]);
      }
      replace(source, target) {
        if (source == null) dart.nullFailed(I[0], 19, 23, "source");
        if (target == null) dart.nullFailed(I[0], 19, 38, "target");
        super.replace(source, target);
        if (dart.equals(this.limit, source)) {
          this.limit = target;
        }
      }
    }
    (LimitedRepeatingParser.new = function(delegate, limit, min, max) {
      if (delegate == null) dart.nullFailed(I[0], 9, 36, "delegate");
      if (limit == null) dart.nullFailed(I[0], 9, 51, "limit");
      if (min == null) dart.nullFailed(I[0], 9, 62, "min");
      if (max == null) dart.nullFailed(I[0], 9, 71, "max");
      this[limit$] = limit;
      LimitedRepeatingParser.__proto__.new.call(this, delegate, min, max);
      ;
    }).prototype = LimitedRepeatingParser.prototype;
    dart.addTypeTests(LimitedRepeatingParser);
    LimitedRepeatingParser.prototype[_is_LimitedRepeatingParser_default] = true;
    dart.addTypeCaches(LimitedRepeatingParser);
    dart.setLibraryUri(LimitedRepeatingParser, I[1]);
    dart.setFieldSignature(LimitedRepeatingParser, () => ({
      __proto__: dart.getFields(LimitedRepeatingParser.__proto__),
      limit: dart.fieldType(parser.Parser$(dart.void))
    }));
    return LimitedRepeatingParser;
  });
  limited.LimitedRepeatingParser = limited.LimitedRepeatingParser$();
  dart.addTypeTests(limited.LimitedRepeatingParser, _is_LimitedRepeatingParser_default);
  digit.DigitCharPredicate = class DigitCharPredicate extends predicate.CharacterPredicate {
    test(value) {
      if (value == null) dart.nullFailed(I[2], 13, 17, "value");
      return 48 <= dart.notNull(value) && dart.notNull(value) <= 57;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[2], 16, 37, "other");
      return digit.DigitCharPredicate.is(other);
    }
  };
  (digit.DigitCharPredicate.new = function() {
    digit.DigitCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = digit.DigitCharPredicate.prototype;
  dart.addTypeTests(digit.DigitCharPredicate);
  dart.addTypeCaches(digit.DigitCharPredicate);
  dart.setMethodSignature(digit.DigitCharPredicate, () => ({
    __proto__: dart.getMethods(digit.DigitCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(digit.DigitCharPredicate, I[3]);
  digit.digit = function digit$(message = "digit expected") {
    if (message == null) dart.nullFailed(I[2], 6, 30, "message");
    return new parser$.CharacterParser.new(C[0] || CT.C0, message);
  };
  var indexes$ = dart.privateName(permute, "PermuteParser.indexes");
  const _is_PermuteParser_default = Symbol('_is_PermuteParser_default');
  permute.PermuteParser$ = dart.generic(R => {
    var intToR = () => (intToR = dart.constFn(dart.fnType(R, [core.int])))();
    var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
    var PermuteParserOfR = () => (PermuteParserOfR = dart.constFn(permute.PermuteParser$(R)))();
    class PermuteParser extends delegate.DelegateParser$(core.List$(R), core.List$(R)) {
      get indexes() {
        return this[indexes$];
      }
      set indexes(value) {
        super.indexes = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[4], 26, 35, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          let value = result.value;
          let values = this.indexes[$map](R, dart.fn(index => {
            if (index == null) dart.nullFailed(I[4], 31, 17, "index");
            return value[$_get](dart.notNull(index) < 0 ? dart.notNull(value[$length]) + dart.notNull(index) : index);
          }, intToR()))[$toList]({growable: false});
          return result.success(ListOfR(), values);
        } else {
          return result.failure(ListOfR(), result.message);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[4], 40, 26, "buffer");
        if (position == null) dart.nullFailed(I[4], 40, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (PermuteParserOfR()).new(this.delegate, this.indexes);
      }
      hasEqualProperties(other) {
        PermuteParserOfR().as(other);
        if (other == null) dart.nullFailed(I[4], 47, 44, "other");
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.indexes, other.indexes);
      }
    }
    (PermuteParser.new = function(delegate, indexes) {
      if (delegate == null) dart.nullFailed(I[4], 20, 33, "delegate");
      if (indexes == null) dart.nullFailed(I[4], 20, 48, "indexes");
      this[indexes$] = indexes;
      PermuteParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = PermuteParser.prototype;
    dart.addTypeTests(PermuteParser);
    PermuteParser.prototype[_is_PermuteParser_default] = true;
    dart.addTypeCaches(PermuteParser);
    dart.setMethodSignature(PermuteParser, () => ({
      __proto__: dart.getMethods(PermuteParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.List$(R)), [context.Context]),
      copy: dart.fnType(permute.PermuteParser$(R), [])
    }));
    dart.setLibraryUri(PermuteParser, I[5]);
    dart.setFieldSignature(PermuteParser, () => ({
      __proto__: dart.getFields(PermuteParser.__proto__),
      indexes: dart.finalFieldType(core.List$(core.int))
    }));
    return PermuteParser;
  });
  permute.PermuteParser = permute.PermuteParser$();
  dart.addTypeTests(permute.PermuteParser, _is_PermuteParser_default);
  permute['PermuteParserExtension|permute'] = function PermuteParserExtension$124permute(T, $this, indexes) {
    if ($this == null) dart.nullFailed(I[4], 14, 19, "#this");
    if (indexes == null) dart.nullFailed(I[4], 14, 37, "indexes");
    return new (permute.PermuteParser$(T)).new($this, indexes);
  };
  permute['PermuteParserExtension|get#permute'] = function PermuteParserExtension$124get$35permute(T, $this) {
    if ($this == null) dart.nullFailed(I[4], 14, 19, "#this");
    return dart.fn(indexes => {
      if (indexes == null) dart.nullFailed(I[4], 14, 37, "indexes");
      return permute['PermuteParserExtension|permute'](T, $this, indexes);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ListOfint()]));
  };
  none_of.noneOf = function noneOf(chars, message = null) {
    let t2;
    if (chars == null) dart.nullFailed(I[6], 8, 30, "chars");
    return new parser$.CharacterParser.new(new not.NotCharacterPredicate.new(optimize.optimizedString(chars)), (t2 = message, t2 == null ? "none of \"" + dart.str(code.toReadableString(chars)) + "\" expected" : t2));
  };
  var ConstantCharPredicate_constant = dart.privateName(constant$, "ConstantCharPredicate.constant");
  optimize.optimizedString = function optimizedString(string) {
    if (string == null) dart.nullFailed(I[7], 8, 43, "string");
    return optimize.optimizedRanges(string[$codeUnits][$map](range.RangeCharPredicate, dart.fn(value => {
      if (value == null) dart.nullFailed(I[7], 9, 27, "value");
      return new range.RangeCharPredicate.new(value, value);
    }, T$.intToRangeCharPredicate())));
  };
  optimize.optimizedRanges = function optimizedRanges(ranges) {
    if (ranges == null) dart.nullFailed(I[7], 12, 65, "ranges");
    let sortedRanges = T$.ListOfRangeCharPredicate().of(ranges, {growable: false});
    sortedRanges[$sort](dart.fn((first, second) => {
      if (first == null) dart.nullFailed(I[7], 15, 22, "first");
      if (second == null) dart.nullFailed(I[7], 15, 29, "second");
      return first.start != second.start ? dart.notNull(first.start) - dart.notNull(second.start) : dart.notNull(first.stop) - dart.notNull(second.stop);
    }, T$.RangeCharPredicateAndRangeCharPredicateToint()));
    let mergedRanges = T$.JSArrayOfRangeCharPredicate().of([]);
    for (let thisRange of sortedRanges) {
      if (dart.test(mergedRanges[$isEmpty])) {
        mergedRanges[$add](thisRange);
      } else {
        let lastRange = mergedRanges[$last];
        if (dart.notNull(lastRange.stop) + 1 >= dart.notNull(thisRange.start)) {
          let characterRange = new range.RangeCharPredicate.new(lastRange.start, thisRange.stop);
          mergedRanges[$_set](dart.notNull(mergedRanges[$length]) - 1, characterRange);
        } else {
          mergedRanges[$add](thisRange);
        }
      }
    }
    let matchingCount = mergedRanges[$fold](core.int, 0, dart.fn((current, range) => {
      if (current == null) dart.nullFailed(I[7], 40, 11, "current");
      if (range == null) dart.nullFailed(I[7], 40, 20, "range");
      return dart.notNull(current) + (dart.notNull(range.stop) - dart.notNull(range.start) + 1);
    }, T$.intAndRangeCharPredicateToint()));
    if (matchingCount === 0) {
      return C[1] || CT.C1;
    } else if (dart.notNull(matchingCount) - 1 === 65535) {
      return C[2] || CT.C2;
    } else if (mergedRanges[$length] === 1) {
      return mergedRanges[$_get](0).start == mergedRanges[$_get](0).stop ? new char.SingleCharPredicate.new(mergedRanges[$_get](0).start) : mergedRanges[$_get](0);
    } else {
      return new lookup.LookupCharPredicate.new(mergedRanges);
    }
  };
  var start$ = dart.privateName(range, "RangeCharPredicate.start");
  var stop$ = dart.privateName(range, "RangeCharPredicate.stop");
  range.RangeCharPredicate = class RangeCharPredicate extends core.Object {
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
    test(value) {
      if (value == null) dart.nullFailed(I[8], 25, 17, "value");
      return dart.notNull(this.start) <= dart.notNull(value) && dart.notNull(value) <= dart.notNull(this.stop);
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[8], 28, 37, "other");
      return range.RangeCharPredicate.is(other) && other.start == this.start && other.stop == this.stop;
    }
  };
  (range.RangeCharPredicate.new = function(start, stop) {
    if (start == null) dart.nullFailed(I[8], 15, 27, "start");
    if (stop == null) dart.nullFailed(I[8], 15, 39, "stop");
    this[start$] = start;
    this[stop$] = stop;
    if (dart.notNull(this.start) > dart.notNull(this.stop)) {
      dart.throw(new core.ArgumentError.new("Invalid range: " + dart.str(this.start) + "-" + dart.str(this.stop)));
    }
  }).prototype = range.RangeCharPredicate.prototype;
  dart.addTypeTests(range.RangeCharPredicate);
  dart.addTypeCaches(range.RangeCharPredicate);
  range.RangeCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(range.RangeCharPredicate, () => ({
    __proto__: dart.getMethods(range.RangeCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(range.RangeCharPredicate, I[9]);
  dart.setFieldSignature(range.RangeCharPredicate, () => ({
    __proto__: dart.getFields(range.RangeCharPredicate.__proto__),
    start: dart.finalFieldType(core.int),
    stop: dart.finalFieldType(core.int)
  }));
  range.range = function range$(start, stop, message = null) {
    let t2;
    if (start == null) dart.nullFailed(I[8], 8, 29, "start");
    if (stop == null) dart.nullFailed(I[8], 8, 43, "stop");
    return new parser$.CharacterParser.new(new range.RangeCharPredicate.new(code.toCharCode(start), code.toCharCode(stop)), (t2 = message, t2 == null ? dart.str(code.toReadableString(start)) + ".." + dart.str(code.toReadableString(stop)) + " expected" : t2));
  };
  var start = dart.privateName(lookup, "LookupCharPredicate.start");
  var stop = dart.privateName(lookup, "LookupCharPredicate.stop");
  var bits = dart.privateName(lookup, "LookupCharPredicate.bits");
  var _testBit = dart.privateName(lookup, "_testBit");
  lookup.LookupCharPredicate = class LookupCharPredicate extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get stop() {
      return this[stop];
    }
    set stop(value) {
      super.stop = value;
    }
    get bits() {
      return this[bits];
    }
    set bits(value) {
      super.bits = value;
    }
    test(value) {
      if (value == null) dart.nullFailed(I[10], 26, 17, "value");
      return dart.notNull(this.start) <= dart.notNull(value) && dart.notNull(value) <= dart.notNull(this.stop) && dart.test(this[_testBit](dart.notNull(value) - dart.notNull(this.start)));
    }
    [_testBit](value) {
      if (value == null) dart.nullFailed(I[10], 29, 21, "value");
      return (dart.notNull(this.bits[$_get](value[$rightShift](5))) & dart.notNull(lookup.LookupCharPredicate.mask[$_get]((dart.notNull(value) & 31) >>> 0))) !== 0;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[10], 33, 37, "other");
      return lookup.LookupCharPredicate.is(other) && other.start == this.start && other.stop == this.stop && dart.equals(other.bits, this.bits);
    }
  };
  (lookup.LookupCharPredicate.new = function(ranges) {
    let t3, t2;
    if (ranges == null) dart.nullFailed(I[10], 7, 48, "ranges");
    this[start] = ranges[$first].start;
    this[stop] = ranges[$last].stop;
    this[bits] = _native_typed_data.NativeUint32List.new((dart.notNull(ranges[$last].stop) - dart.notNull(ranges[$first].start) + 1 + 31)[$rightShift](5));
    for (let range of ranges) {
      for (let index = dart.notNull(range.start) - dart.notNull(this.start); index <= dart.notNull(range.stop) - dart.notNull(this.start); index = index + 1) {
        t2 = this.bits;
        t3 = index[$rightShift](5);
        t2[$_set](t3, (dart.notNull(t2[$_get](t3)) | dart.notNull(lookup.LookupCharPredicate.mask[$_get]((index & 31) >>> 0))) >>> 0);
      }
    }
  }).prototype = lookup.LookupCharPredicate.prototype;
  dart.addTypeTests(lookup.LookupCharPredicate);
  dart.addTypeCaches(lookup.LookupCharPredicate);
  lookup.LookupCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(lookup.LookupCharPredicate, () => ({
    __proto__: dart.getMethods(lookup.LookupCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    [_testBit]: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(lookup.LookupCharPredicate, I[11]);
  dart.setFieldSignature(lookup.LookupCharPredicate, () => ({
    __proto__: dart.getFields(lookup.LookupCharPredicate.__proto__),
    start: dart.finalFieldType(core.int),
    stop: dart.finalFieldType(core.int),
    bits: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(lookup.LookupCharPredicate, {
    /*lookup.LookupCharPredicate.shift*/get shift() {
      return 5;
    },
    /*lookup.LookupCharPredicate.offset*/get offset() {
      return 31;
    },
    /*lookup.LookupCharPredicate.mask*/get mask() {
      return C[3] || CT.C3;
    }
  }, false);
  const constant$0 = ConstantCharPredicate_constant;
  constant$.ConstantCharPredicate = class ConstantCharPredicate extends predicate.CharacterPredicate {
    get constant() {
      return this[constant$0];
    }
    set constant(value) {
      super.constant = value;
    }
    test(value) {
      if (value == null) dart.nullFailed(I[12], 9, 17, "value");
      return this.constant;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[12], 12, 37, "other");
      return constant$.ConstantCharPredicate.is(other) && other.constant == this.constant;
    }
  };
  (constant$.ConstantCharPredicate.new = function(constant) {
    if (constant == null) dart.nullFailed(I[12], 4, 36, "constant");
    this[constant$0] = constant;
    constant$.ConstantCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = constant$.ConstantCharPredicate.prototype;
  dart.addTypeTests(constant$.ConstantCharPredicate);
  dart.addTypeCaches(constant$.ConstantCharPredicate);
  dart.setMethodSignature(constant$.ConstantCharPredicate, () => ({
    __proto__: dart.getMethods(constant$.ConstantCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(constant$.ConstantCharPredicate, I[13]);
  dart.setFieldSignature(constant$.ConstantCharPredicate, () => ({
    __proto__: dart.getFields(constant$.ConstantCharPredicate.__proto__),
    constant: dart.finalFieldType(core.bool)
  }));
  var predicate$0 = dart.privateName(not, "NotCharacterPredicate.predicate");
  not.NotCharacterPredicate = class NotCharacterPredicate extends predicate.CharacterPredicate {
    get predicate() {
      return this[predicate$0];
    }
    set predicate(value) {
      super.predicate = value;
    }
    test(value) {
      if (value == null) dart.nullFailed(I[14], 10, 17, "value");
      return !dart.test(this.predicate.test(value));
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[14], 13, 37, "other");
      return not.NotCharacterPredicate.is(other) && dart.test(other.predicate.isEqualTo(other.predicate));
    }
  };
  (not.NotCharacterPredicate.new = function(predicate) {
    if (predicate == null) dart.nullFailed(I[14], 5, 36, "predicate");
    this[predicate$0] = predicate;
    not.NotCharacterPredicate.__proto__.new.call(this);
    ;
  }).prototype = not.NotCharacterPredicate.prototype;
  dart.addTypeTests(not.NotCharacterPredicate);
  dart.addTypeCaches(not.NotCharacterPredicate);
  dart.setMethodSignature(not.NotCharacterPredicate, () => ({
    __proto__: dart.getMethods(not.NotCharacterPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(not.NotCharacterPredicate, I[15]);
  dart.setFieldSignature(not.NotCharacterPredicate, () => ({
    __proto__: dart.getFields(not.NotCharacterPredicate.__proto__),
    predicate: dart.finalFieldType(predicate.CharacterPredicate)
  }));
  var message$ = dart.privateName(flatten, "FlattenParser.message");
  const _is_FlattenParser_default = Symbol('_is_FlattenParser_default');
  flatten.FlattenParser$ = dart.generic(T => {
    var FlattenParserOfT = () => (FlattenParserOfT = dart.constFn(flatten.FlattenParser$(T)))();
    class FlattenParser extends delegate.DelegateParser$(T, core.String) {
      get message() {
        return this[message$];
      }
      set message(value) {
        super.message = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[16], 29, 34, "context");
        if (this.message == null) {
          let result = this.delegate.parseOn(context);
          if (dart.test(result.isSuccess)) {
            let output = context.buffer[$substring](context.position, result.position);
            return result.success(core.String, output);
          }
          return result.failure(core.String, result.message);
        } else {
          let position = this.delegate.fastParseOn(context.buffer, context.position);
          if (dart.notNull(position) < 0) {
            return context.failure(core.String, dart.nullCheck(this.message));
          }
          let output = context.buffer[$substring](context.position, position);
          return context.success(core.String, output, position);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[16], 50, 26, "buffer");
        if (position == null) dart.nullFailed(I[16], 50, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      hasEqualProperties(other) {
        FlattenParserOfT().as(other);
        if (other == null) dart.nullFailed(I[16], 54, 44, "other");
        return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
      }
      copy() {
        return new (FlattenParserOfT()).new(this.delegate, this.message);
      }
    }
    (FlattenParser.new = function(delegate, message = null) {
      if (delegate == null) dart.nullFailed(I[16], 23, 27, "delegate");
      this[message$] = message;
      FlattenParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = FlattenParser.prototype;
    dart.addTypeTests(FlattenParser);
    FlattenParser.prototype[_is_FlattenParser_default] = true;
    dart.addTypeCaches(FlattenParser);
    dart.setMethodSignature(FlattenParser, () => ({
      __proto__: dart.getMethods(FlattenParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
      copy: dart.fnType(flatten.FlattenParser$(T), [])
    }));
    dart.setLibraryUri(FlattenParser, I[17]);
    dart.setFieldSignature(FlattenParser, () => ({
      __proto__: dart.getFields(FlattenParser.__proto__),
      message: dart.finalFieldType(dart.nullable(core.String))
    }));
    return FlattenParser;
  });
  flatten.FlattenParser = flatten.FlattenParser$();
  dart.addTypeTests(flatten.FlattenParser, _is_FlattenParser_default);
  flatten['FlattenParserExtension|flatten'] = function FlattenParserExtension$124flatten(T, $this, message = null) {
    if ($this == null) dart.nullFailed(I[16], 17, 18, "#this");
    return new (flatten.FlattenParser$(T)).new($this, message);
  };
  flatten['FlattenParserExtension|get#flatten'] = function FlattenParserExtension$124get$35flatten(T, $this) {
    if ($this == null) dart.nullFailed(I[16], 17, 18, "#this");
    return dart.fn((message = null) => flatten['FlattenParserExtension|flatten'](T, $this, message), T$.StringNToParserOfString());
  };
  letter.LetterCharPredicate = class LetterCharPredicate extends predicate.CharacterPredicate {
    test(value) {
      if (value == null) dart.nullFailed(I[18], 13, 17, "value");
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90 || 97 <= dart.notNull(value) && dart.notNull(value) <= 122;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[18], 17, 37, "other");
      return letter.LetterCharPredicate.is(other);
    }
  };
  (letter.LetterCharPredicate.new = function() {
    letter.LetterCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = letter.LetterCharPredicate.prototype;
  dart.addTypeTests(letter.LetterCharPredicate);
  dart.addTypeCaches(letter.LetterCharPredicate);
  dart.setMethodSignature(letter.LetterCharPredicate, () => ({
    __proto__: dart.getMethods(letter.LetterCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(letter.LetterCharPredicate, I[19]);
  letter.letter = function letter$(message = "letter expected") {
    if (message == null) dart.nullFailed(I[18], 6, 31, "message");
    return new parser$.CharacterParser.new(C[4] || CT.C4, message);
  };
  string['PredicateStringExtension|toParser'] = function PredicateStringExtension$124toParser($this, opts) {
    if ($this == null) dart.nullFailed(I[20], 10, 18, "#this");
    let isPattern = opts && 'isPattern' in opts ? opts.isPattern : false;
    if (isPattern == null) dart.nullFailed(I[20], 11, 10, "isPattern");
    let caseInsensitive = opts && 'caseInsensitive' in opts ? opts.caseInsensitive : false;
    if (caseInsensitive == null) dart.nullFailed(I[20], 12, 10, "caseInsensitive");
    let message = opts && 'message' in opts ? opts.message : null;
    if ($this[$isEmpty]) {
      return epsilon.epsilonWith(core.String, $this);
    } else if ($this.length === 1) {
      return dart.test(caseInsensitive) ? any_of.anyOf($this[$toLowerCase]() + $this[$toUpperCase](), message) : char.char($this, message);
    } else {
      if (dart.test(isPattern)) {
        return dart.test(caseInsensitive) ? pattern.patternIgnoreCase($this, message) : pattern.pattern($this, message);
      } else {
        return dart.test(caseInsensitive) ? string.stringIgnoreCase($this, message) : string.string($this, message);
      }
    }
  };
  string['PredicateStringExtension|get#toParser'] = function PredicateStringExtension$124get$35toParser($this) {
    if ($this == null) dart.nullFailed(I[20], 10, 18, "#this");
    return dart.fn(opts => {
      let isPattern = opts && 'isPattern' in opts ? opts.isPattern : false;
      if (isPattern == null) dart.nullFailed(I[20], 11, 10, "isPattern");
      let caseInsensitive = opts && 'caseInsensitive' in opts ? opts.caseInsensitive : false;
      if (caseInsensitive == null) dart.nullFailed(I[20], 12, 10, "caseInsensitive");
      let message = opts && 'message' in opts ? opts.message : null;
      return string['PredicateStringExtension|toParser']($this, {isPattern: isPattern, caseInsensitive: caseInsensitive, message: message});
    }, T$.__ToParserOfString());
  };
  string.string = function string$(element, message = null) {
    let t6;
    if (element == null) dart.nullFailed(I[20], 39, 30, "element");
    return predicate$.predicate(element.length, dart.fn(each => {
      if (each == null) dart.nullFailed(I[20], 40, 22, "each");
      return element == each;
    }, T$.StringTobool()), (t6 = message, t6 == null ? dart.str(element) + " expected" : t6));
  };
  string.stringIgnoreCase = function stringIgnoreCase(element, message = null) {
    let t6;
    if (element == null) dart.nullFailed(I[20], 46, 40, "element");
    let lowerElement = element[$toLowerCase]();
    return predicate$.predicate(element.length, dart.fn(each => {
      if (each == null) dart.nullFailed(I[20], 48, 37, "each");
      return lowerElement === each[$toLowerCase]();
    }, T$.StringTobool()), (t6 = message, t6 == null ? dart.str(element) + " expected" : t6));
  };
  var length$ = dart.privateName(predicate$, "PredicateParser.length");
  var predicate$1 = dart.privateName(predicate$, "PredicateParser.predicate");
  var message$0 = dart.privateName(predicate$, "PredicateParser.message");
  predicate$.PredicateParser = class PredicateParser extends parser.Parser$(core.String) {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get predicate() {
      return this[predicate$1];
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
      let t6;
      if (context == null) dart.nullFailed(I[21], 29, 34, "context");
      let start = context.position;
      let stop = dart.notNull(start) + dart.notNull(this.length);
      if (stop <= context.buffer.length) {
        let result = context.buffer[$substring](start, stop);
        if (dart.test((t6 = result, this.predicate(t6)))) {
          return context.success(core.String, result, stop);
        }
      }
      return context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      let t6;
      if (buffer == null) dart.nullFailed(I[21], 42, 26, "buffer");
      if (position == null) dart.nullFailed(I[21], 42, 38, "position");
      let stop = dart.notNull(position) + dart.notNull(this.length);
      return stop <= buffer.length && dart.test((t6 = buffer[$substring](position, stop), this.predicate(t6))) ? stop : -1;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new predicate$.PredicateParser.new(this.length, this.predicate, this.message);
    }
    hasEqualProperties(other) {
      predicate$.PredicateParser.as(other);
      if (other == null) dart.nullFailed(I[21], 56, 43, "other");
      return dart.test(super.hasEqualProperties(other)) && this.length == other.length && dart.equals(this.predicate, other.predicate) && this.message == other.message;
    }
  };
  (predicate$.PredicateParser.new = function(length, predicate, message) {
    if (length == null) dart.nullFailed(I[21], 16, 24, "length");
    if (predicate == null) dart.nullFailed(I[21], 16, 37, "predicate");
    if (message == null) dart.nullFailed(I[21], 16, 53, "message");
    this[length$] = length;
    this[predicate$1] = predicate;
    this[message$0] = message;
    if (!(dart.notNull(length) > 0)) dart.assertFailed("length must be positive", I[21], 17, 16, "length > 0");
    predicate$.PredicateParser.__proto__.new.call(this);
    ;
  }).prototype = predicate$.PredicateParser.prototype;
  dart.addTypeTests(predicate$.PredicateParser);
  dart.addTypeCaches(predicate$.PredicateParser);
  dart.setMethodSignature(predicate$.PredicateParser, () => ({
    __proto__: dart.getMethods(predicate$.PredicateParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
    copy: dart.fnType(predicate$.PredicateParser, [])
  }));
  dart.setLibraryUri(predicate$.PredicateParser, I[22]);
  dart.setFieldSignature(predicate$.PredicateParser, () => ({
    __proto__: dart.getFields(predicate$.PredicateParser.__proto__),
    length: dart.finalFieldType(core.int),
    predicate: dart.finalFieldType(dart.fnType(core.bool, [core.String])),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(predicate$.PredicateParser, ['toString']);
  predicate$.predicate = function predicate$2(length, predicate, message) {
    if (length == null) dart.nullFailed(I[21], 11, 30, "length");
    if (predicate == null) dart.nullFailed(I[21], 11, 48, "predicate");
    if (message == null) dart.nullFailed(I[21], 11, 66, "message");
    return new predicate$.PredicateParser.new(length, predicate, message);
  };
  pattern.pattern = function pattern$(element, message = null) {
    let t6;
    if (element == null) dart.nullFailed(I[23], 27, 31, "element");
    return new parser$.CharacterParser.new(pattern._pattern.parse(element).value, (t6 = message, t6 == null ? "[" + dart.str(code.toReadableString(element)) + "] expected" : t6));
  };
  pattern.patternIgnoreCase = function patternIgnoreCase(element, message = null) {
    if (element == null) dart.nullFailed(I[23], 42, 41, "element");
    let isNegated = element[$startsWith]("^");
    if (isNegated) {
      element = element[$substring](1);
    }
    let isDashed = element[$endsWith]("-");
    if (isDashed) {
      element = element[$substring](0, element.length - 1);
    }
    return pattern.pattern((isNegated ? "^" : "") + element[$toLowerCase]() + element[$toUpperCase]() + (isDashed ? "-" : ""), message);
  };
  dart.defineLazy(pattern, {
    /*pattern._single*/get _single() {
      return map['MapParserExtension|map'](core.String, range.RangeCharPredicate, any.any(), dart.fn(element => {
        if (element == null) dart.nullFailed(I[23], 60, 16, "element");
        return new range.RangeCharPredicate.new(code.toCharCode(element), code.toCharCode(element));
      }, T$.StringToRangeCharPredicate()));
    },
    /*pattern._range*/get _range() {
      return map['MapParserExtension|map'](core.List, range.RangeCharPredicate, sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](any.any(), char.char("-")), any.any()), dart.fn(elements => {
        if (elements == null) dart.nullFailed(I[23], 67, 42, "elements");
        return new range.RangeCharPredicate.new(code.toCharCode(core.Object.as(elements[$_get](0))), code.toCharCode(core.Object.as(elements[$_get](2))));
      }, T$.ListToRangeCharPredicate()));
    },
    /*pattern._sequence*/get _sequence() {
      return map['MapParserExtension|map'](core.List, predicate.CharacterPredicate, possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, choice['ChoiceParserExtension|or'](pattern._range, pattern._single)), dart.fn(predicates => {
        if (predicates == null) dart.nullFailed(I[23], 74, 6, "predicates");
        return optimize.optimizedRanges(predicates[$cast](range.RangeCharPredicate));
      }, T$.ListToCharacterPredicate()));
    },
    /*pattern._pattern*/get _pattern() {
      return map['MapParserExtension|map'](core.List, predicate.CharacterPredicate, sequence['SequenceParserExtension|seq'](optional['OptionalParserExtension|optional'](core.String, char.char("^")), pattern._sequence), dart.fn(predicates => {
        if (predicates == null) dart.nullFailed(I[23], 80, 11, "predicates");
        return predicate.CharacterPredicate.as(predicates[$_get](0) == null ? predicates[$_get](1) : new not.NotCharacterPredicate.new(predicate.CharacterPredicate.as(predicates[$_get](1))));
      }, T$.ListToCharacterPredicate()));
    }
  }, false);
  any_of.anyOf = function anyOf(chars, message = null) {
    let t6;
    if (chars == null) dart.nullFailed(I[24], 7, 29, "chars");
    return new parser$.CharacterParser.new(optimize.optimizedString(chars), (t6 = message, t6 == null ? "any of \"" + dart.str(code.toReadableString(chars)) + "\" expected" : t6));
  };
  word.WordCharPredicate = class WordCharPredicate extends core.Object {
    test(value) {
      if (value == null) dart.nullFailed(I[25], 13, 17, "value");
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90 || 97 <= dart.notNull(value) && dart.notNull(value) <= 122 || 48 <= dart.notNull(value) && dart.notNull(value) <= 57 || value === 95;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[25], 20, 37, "other");
      return word.WordCharPredicate.is(other);
    }
  };
  (word.WordCharPredicate.new = function() {
    ;
  }).prototype = word.WordCharPredicate.prototype;
  dart.addTypeTests(word.WordCharPredicate);
  dart.addTypeCaches(word.WordCharPredicate);
  word.WordCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(word.WordCharPredicate, () => ({
    __proto__: dart.getMethods(word.WordCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(word.WordCharPredicate, I[26]);
  word.word = function word$(message = "letter or digit expected") {
    if (message == null) dart.nullFailed(I[25], 6, 29, "message");
    return new parser$.CharacterParser.new(C[5] || CT.C5, message);
  };
  const _is_GreedyRepeatingParser_default = Symbol('_is_GreedyRepeatingParser_default');
  greedy.GreedyRepeatingParser$ = dart.generic(R => {
    var JSArrayOfR = () => (JSArrayOfR = dart.constFn(_interceptors.JSArray$(R)))();
    var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
    var GreedyRepeatingParserOfR = () => (GreedyRepeatingParserOfR = dart.constFn(greedy.GreedyRepeatingParser$(R)))();
    class GreedyRepeatingParser extends limited.LimitedRepeatingParser$(R) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[27], 52, 35, "context");
        let current = context;
        let elements = JSArrayOfR().of([]);
        while (dart.notNull(elements[$length]) < dart.notNull(this.min)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfR(), result.message);
          }
          elements[$add](result.value);
          current = result;
        }
        let contexts = T$.JSArrayOfContext().of([current]);
        while (dart.notNull(elements[$length]) < dart.notNull(this.max)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            break;
          }
          elements[$add](result.value);
          contexts[$add](current = result);
        }
        for (;;) {
          let limiter = this.limit.parseOn(contexts[$last]);
          if (dart.test(limiter.isSuccess)) {
            return contexts[$last].success(ListOfR(), elements);
          }
          if (dart.test(elements[$isEmpty])) {
            return limiter.failure(ListOfR(), limiter.message);
          }
          contexts[$removeLast]();
          elements[$removeLast]();
          if (dart.test(contexts[$isEmpty])) {
            return limiter.failure(ListOfR(), limiter.message);
          }
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[27], 89, 26, "buffer");
        if (position == null) dart.nullFailed(I[27], 89, 38, "position");
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
        let positions = T$.JSArrayOfint().of([current]);
        while (count < dart.notNull(this.max)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            break;
          }
          positions[$add](current = result);
          count = count + 1;
        }
        for (;;) {
          let limiter = this.limit.fastParseOn(buffer, positions[$last]);
          if (dart.notNull(limiter) >= 0) {
            return positions[$last];
          }
          if (count === 0) {
            return -1;
          }
          positions[$removeLast]();
          count = count - 1;
          if (dart.test(positions[$isEmpty])) {
            return -1;
          }
        }
      }
      copy() {
        return new (GreedyRepeatingParserOfR()).new(this.delegate, this.limit, this.min, this.max);
      }
    }
    (GreedyRepeatingParser.new = function(parser, limit, min, max) {
      if (parser == null) dart.nullFailed(I[27], 48, 35, "parser");
      if (limit == null) dart.nullFailed(I[27], 48, 56, "limit");
      if (min == null) dart.nullFailed(I[27], 48, 67, "min");
      if (max == null) dart.nullFailed(I[27], 48, 76, "max");
      GreedyRepeatingParser.__proto__.new.call(this, parser, limit, min, max);
      ;
    }).prototype = GreedyRepeatingParser.prototype;
    dart.addTypeTests(GreedyRepeatingParser);
    GreedyRepeatingParser.prototype[_is_GreedyRepeatingParser_default] = true;
    dart.addTypeCaches(GreedyRepeatingParser);
    dart.setMethodSignature(GreedyRepeatingParser, () => ({
      __proto__: dart.getMethods(GreedyRepeatingParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.List$(R)), [context.Context]),
      copy: dart.fnType(greedy.GreedyRepeatingParser$(R), [])
    }));
    dart.setLibraryUri(GreedyRepeatingParser, I[28]);
    return GreedyRepeatingParser;
  });
  greedy.GreedyRepeatingParser = greedy.GreedyRepeatingParser$();
  dart.addTypeTests(greedy.GreedyRepeatingParser, _is_GreedyRepeatingParser_default);
  greedy['GreedyRepeatingParserExtension|starGreedy'] = function GreedyRepeatingParserExtension$124starGreedy(T, $this, limit) {
    if ($this == null) dart.nullFailed(I[27], 19, 19, "#this");
    if (limit == null) dart.nullFailed(I[27], 19, 43, "limit");
    return greedy['GreedyRepeatingParserExtension|repeatGreedy'](T, $this, limit, 0, 9007199254740991.0);
  };
  greedy['GreedyRepeatingParserExtension|get#starGreedy'] = function GreedyRepeatingParserExtension$124get$35starGreedy(T, $this) {
    if ($this == null) dart.nullFailed(I[27], 19, 19, "#this");
    return dart.fn(limit => {
      if (limit == null) dart.nullFailed(I[27], 19, 43, "limit");
      return greedy['GreedyRepeatingParserExtension|starGreedy'](T, $this, limit);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ParserOfvoid()]));
  };
  greedy['GreedyRepeatingParserExtension|plusGreedy'] = function GreedyRepeatingParserExtension$124plusGreedy(T, $this, limit) {
    if ($this == null) dart.nullFailed(I[27], 31, 19, "#this");
    if (limit == null) dart.nullFailed(I[27], 31, 43, "limit");
    return greedy['GreedyRepeatingParserExtension|repeatGreedy'](T, $this, limit, 1, 9007199254740991.0);
  };
  greedy['GreedyRepeatingParserExtension|get#plusGreedy'] = function GreedyRepeatingParserExtension$124get$35plusGreedy(T, $this) {
    if ($this == null) dart.nullFailed(I[27], 31, 19, "#this");
    return dart.fn(limit => {
      if (limit == null) dart.nullFailed(I[27], 31, 43, "limit");
      return greedy['GreedyRepeatingParserExtension|plusGreedy'](T, $this, limit);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ParserOfvoid()]));
  };
  greedy['GreedyRepeatingParserExtension|repeatGreedy'] = function GreedyRepeatingParserExtension$124repeatGreedy(T, $this, limit, min, max) {
    if ($this == null) dart.nullFailed(I[27], 40, 19, "#this");
    if (limit == null) dart.nullFailed(I[27], 40, 45, "limit");
    if (min == null) dart.nullFailed(I[27], 40, 56, "min");
    if (max == null) dart.nullFailed(I[27], 40, 65, "max");
    return new (greedy.GreedyRepeatingParser$(T)).new($this, limit, min, max);
  };
  greedy['GreedyRepeatingParserExtension|get#repeatGreedy'] = function GreedyRepeatingParserExtension$124get$35repeatGreedy(T, $this) {
    if ($this == null) dart.nullFailed(I[27], 40, 19, "#this");
    return dart.fn((limit, min, max) => {
      if (limit == null) dart.nullFailed(I[27], 40, 45, "limit");
      if (min == null) dart.nullFailed(I[27], 40, 56, "min");
      if (max == null) dart.nullFailed(I[27], 40, 65, "max");
      return greedy['GreedyRepeatingParserExtension|repeatGreedy'](T, $this, limit, min, max);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ParserOfvoid(), core.int, core.int]));
  };
  const _is_LazyRepeatingParser_default = Symbol('_is_LazyRepeatingParser_default');
  lazy.LazyRepeatingParser$ = dart.generic(R => {
    var JSArrayOfR = () => (JSArrayOfR = dart.constFn(_interceptors.JSArray$(R)))();
    var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
    var LazyRepeatingParserOfR = () => (LazyRepeatingParserOfR = dart.constFn(lazy.LazyRepeatingParser$(R)))();
    class LazyRepeatingParser extends limited.LimitedRepeatingParser$(R) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[29], 52, 35, "context");
        let current = context;
        let elements = JSArrayOfR().of([]);
        while (dart.notNull(elements[$length]) < dart.notNull(this.min)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfR(), result.message);
          }
          elements[$add](result.value);
          current = result;
        }
        for (;;) {
          let limiter = this.limit.parseOn(current);
          if (dart.test(limiter.isSuccess)) {
            return current.success(ListOfR(), elements);
          } else {
            if (dart.notNull(elements[$length]) >= dart.notNull(this.max)) {
              return limiter.failure(ListOfR(), limiter.message);
            }
            let result = this.delegate.parseOn(current);
            if (dart.test(result.isFailure)) {
              return limiter.failure(ListOfR(), limiter.message);
            }
            elements[$add](result.value);
            current = result;
          }
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[29], 82, 26, "buffer");
        if (position == null) dart.nullFailed(I[29], 82, 38, "position");
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
        for (;;) {
          let limiter = this.limit.fastParseOn(buffer, current);
          if (dart.notNull(limiter) >= 0) {
            return current;
          } else {
            if (count >= dart.notNull(this.max)) {
              return -1;
            }
            let result = this.delegate.fastParseOn(buffer, current);
            if (dart.notNull(result) < 0) {
              return -1;
            }
            current = result;
            count = count + 1;
          }
        }
      }
      copy() {
        return new (LazyRepeatingParserOfR()).new(this.delegate, this.limit, this.min, this.max);
      }
    }
    (LazyRepeatingParser.new = function(parser, limit, min, max) {
      if (parser == null) dart.nullFailed(I[29], 48, 33, "parser");
      if (limit == null) dart.nullFailed(I[29], 48, 54, "limit");
      if (min == null) dart.nullFailed(I[29], 48, 65, "min");
      if (max == null) dart.nullFailed(I[29], 48, 74, "max");
      LazyRepeatingParser.__proto__.new.call(this, parser, limit, min, max);
      ;
    }).prototype = LazyRepeatingParser.prototype;
    dart.addTypeTests(LazyRepeatingParser);
    LazyRepeatingParser.prototype[_is_LazyRepeatingParser_default] = true;
    dart.addTypeCaches(LazyRepeatingParser);
    dart.setMethodSignature(LazyRepeatingParser, () => ({
      __proto__: dart.getMethods(LazyRepeatingParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.List$(R)), [context.Context]),
      copy: dart.fnType(lazy.LazyRepeatingParser$(R), [])
    }));
    dart.setLibraryUri(LazyRepeatingParser, I[30]);
    return LazyRepeatingParser;
  });
  lazy.LazyRepeatingParser = lazy.LazyRepeatingParser$();
  dart.addTypeTests(lazy.LazyRepeatingParser, _is_LazyRepeatingParser_default);
  lazy['LazyRepeatingParserExtension|starLazy'] = function LazyRepeatingParserExtension$124starLazy(T, $this, limit) {
    if ($this == null) dart.nullFailed(I[29], 19, 19, "#this");
    if (limit == null) dart.nullFailed(I[29], 19, 41, "limit");
    return lazy['LazyRepeatingParserExtension|repeatLazy'](T, $this, limit, 0, 9007199254740991.0);
  };
  lazy['LazyRepeatingParserExtension|get#starLazy'] = function LazyRepeatingParserExtension$124get$35starLazy(T, $this) {
    if ($this == null) dart.nullFailed(I[29], 19, 19, "#this");
    return dart.fn(limit => {
      if (limit == null) dart.nullFailed(I[29], 19, 41, "limit");
      return lazy['LazyRepeatingParserExtension|starLazy'](T, $this, limit);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ParserOfvoid()]));
  };
  lazy['LazyRepeatingParserExtension|plusLazy'] = function LazyRepeatingParserExtension$124plusLazy(T, $this, limit) {
    if ($this == null) dart.nullFailed(I[29], 31, 19, "#this");
    if (limit == null) dart.nullFailed(I[29], 31, 41, "limit");
    return lazy['LazyRepeatingParserExtension|repeatLazy'](T, $this, limit, 1, 9007199254740991.0);
  };
  lazy['LazyRepeatingParserExtension|get#plusLazy'] = function LazyRepeatingParserExtension$124get$35plusLazy(T, $this) {
    if ($this == null) dart.nullFailed(I[29], 31, 19, "#this");
    return dart.fn(limit => {
      if (limit == null) dart.nullFailed(I[29], 31, 41, "limit");
      return lazy['LazyRepeatingParserExtension|plusLazy'](T, $this, limit);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ParserOfvoid()]));
  };
  lazy['LazyRepeatingParserExtension|repeatLazy'] = function LazyRepeatingParserExtension$124repeatLazy(T, $this, limit, min, max) {
    if ($this == null) dart.nullFailed(I[29], 40, 19, "#this");
    if (limit == null) dart.nullFailed(I[29], 40, 43, "limit");
    if (min == null) dart.nullFailed(I[29], 40, 54, "min");
    if (max == null) dart.nullFailed(I[29], 40, 63, "max");
    return new (lazy.LazyRepeatingParser$(T)).new($this, limit, min, max);
  };
  lazy['LazyRepeatingParserExtension|get#repeatLazy'] = function LazyRepeatingParserExtension$124get$35repeatLazy(T, $this) {
    if ($this == null) dart.nullFailed(I[29], 40, 19, "#this");
    return dart.fn((limit, min, max) => {
      if (limit == null) dart.nullFailed(I[29], 40, 43, "limit");
      if (min == null) dart.nullFailed(I[29], 40, 54, "min");
      if (max == null) dart.nullFailed(I[29], 40, 63, "max");
      return lazy['LazyRepeatingParserExtension|repeatLazy'](T, $this, limit, min, max);
    }, dart.fnType(parser.Parser$(core.List$(T)), [T$.ParserOfvoid(), core.int, core.int]));
  };
  uppercase.UppercaseCharPredicate = class UppercaseCharPredicate extends core.Object {
    test(value) {
      if (value == null) dart.nullFailed(I[31], 13, 17, "value");
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[31], 16, 37, "other");
      return uppercase.UppercaseCharPredicate.is(other);
    }
  };
  (uppercase.UppercaseCharPredicate.new = function() {
    ;
  }).prototype = uppercase.UppercaseCharPredicate.prototype;
  dart.addTypeTests(uppercase.UppercaseCharPredicate);
  dart.addTypeCaches(uppercase.UppercaseCharPredicate);
  uppercase.UppercaseCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(uppercase.UppercaseCharPredicate, () => ({
    __proto__: dart.getMethods(uppercase.UppercaseCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(uppercase.UppercaseCharPredicate, I[32]);
  uppercase.uppercase = function uppercase$(message = "uppercase letter expected") {
    if (message == null) dart.nullFailed(I[31], 6, 34, "message");
    return new parser$.CharacterParser.new(C[6] || CT.C6, message);
  };
  const _is_CastListParser_default = Symbol('_is_CastListParser_default');
  cast_list.CastListParser$ = dart.generic((T, R) => {
    var CastListParserOfT$R = () => (CastListParserOfT$R = dart.constFn(cast_list.CastListParser$(T, R)))();
    var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
    class CastListParser extends delegate.DelegateParser$(T, core.List$(R)) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[33], 17, 35, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result.success(ListOfR(), core.List.as(result.value)[$cast](R));
        } else {
          return result.failure(ListOfR(), result.message);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[33], 27, 26, "buffer");
        if (position == null) dart.nullFailed(I[33], 27, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (CastListParserOfT$R()).new(this.delegate);
      }
    }
    (CastListParser.new = function(delegate) {
      if (delegate == null) dart.nullFailed(I[33], 14, 28, "delegate");
      CastListParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = CastListParser.prototype;
    dart.addTypeTests(CastListParser);
    CastListParser.prototype[_is_CastListParser_default] = true;
    dart.addTypeCaches(CastListParser);
    dart.setMethodSignature(CastListParser, () => ({
      __proto__: dart.getMethods(CastListParser.__proto__),
      parseOn: dart.fnType(result.Result$(core.List$(R)), [context.Context]),
      copy: dart.fnType(cast_list.CastListParser$(T, R), [])
    }));
    dart.setLibraryUri(CastListParser, I[34]);
    return CastListParser;
  });
  cast_list.CastListParser = cast_list.CastListParser$();
  dart.addTypeTests(cast_list.CastListParser, _is_CastListParser_default);
  cast_list['CastListParserExtension|castList'] = function CastListParserExtension$124castList(T, R, $this) {
    if ($this == null) dart.nullFailed(I[33], 9, 19, "#this");
    return new (cast_list.CastListParser$(T, R)).new($this);
  };
  cast_list['CastListParserExtension|get#castList'] = function CastListParserExtension$124get$35castList(T, $this) {
    if ($this == null) dart.nullFailed(I[33], 9, 19, "#this");
    return dart.fn(R => cast_list['CastListParserExtension|castList'](T, R, $this), T$.VoidToParserOfListOfR());
  };
  var index$ = dart.privateName(pick, "PickParser.index");
  const _is_PickParser_default = Symbol('_is_PickParser_default');
  pick.PickParser$ = dart.generic(R => {
    var PickParserOfR = () => (PickParserOfR = dart.constFn(pick.PickParser$(R)))();
    class PickParser extends delegate.DelegateParser$(core.List$(R), R) {
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[35], 25, 29, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          let value = result.value;
          let picked = value[$_get](dart.notNull(this.index) < 0 ? dart.notNull(value[$length]) + dart.notNull(this.index) : this.index);
          return result.success(R, picked);
        } else {
          return result.failure(R, result.message);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[35], 37, 26, "buffer");
        if (position == null) dart.nullFailed(I[35], 37, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (PickParserOfR()).new(this.delegate, this.index);
      }
      hasEqualProperties(other) {
        PickParserOfR().as(other);
        if (other == null) dart.nullFailed(I[35], 44, 41, "other");
        return dart.test(super.hasEqualProperties(other)) && this.index == other.index;
      }
    }
    (PickParser.new = function(delegate, index) {
      if (delegate == null) dart.nullFailed(I[35], 19, 30, "delegate");
      if (index == null) dart.nullFailed(I[35], 19, 45, "index");
      this[index$] = index;
      PickParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = PickParser.prototype;
    dart.addTypeTests(PickParser);
    PickParser.prototype[_is_PickParser_default] = true;
    dart.addTypeCaches(PickParser);
    dart.setMethodSignature(PickParser, () => ({
      __proto__: dart.getMethods(PickParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(pick.PickParser$(R), [])
    }));
    dart.setLibraryUri(PickParser, I[36]);
    dart.setFieldSignature(PickParser, () => ({
      __proto__: dart.getFields(PickParser.__proto__),
      index: dart.finalFieldType(core.int)
    }));
    return PickParser;
  });
  pick.PickParser = pick.PickParser$();
  dart.addTypeTests(pick.PickParser, _is_PickParser_default);
  pick['PickParserExtension|pick'] = function PickParserExtension$124pick(T, $this, index) {
    if ($this == null) dart.nullFailed(I[35], 13, 13, "#this");
    if (index == null) dart.nullFailed(I[35], 13, 22, "index");
    return new (pick.PickParser$(T)).new($this, index);
  };
  pick['PickParserExtension|get#pick'] = function PickParserExtension$124get$35pick(T, $this) {
    if ($this == null) dart.nullFailed(I[35], 13, 13, "#this");
    return dart.fn(index => {
      if (index == null) dart.nullFailed(I[35], 13, 22, "index");
      return pick['PickParserExtension|pick'](T, $this, index);
    }, dart.fnType(parser.Parser$(T), [core.int]));
  };
  position.PositionParser = class PositionParser extends parser.Parser$(core.int) {
    parseOn(context) {
      if (context == null) dart.nullFailed(I[37], 13, 31, "context");
      return context.success(core.int, context.position);
    }
    fastParseOn(buffer, position) {
      if (buffer == null) dart.nullFailed(I[37], 16, 26, "buffer");
      if (position == null) dart.nullFailed(I[37], 16, 38, "position");
      return position;
    }
    copy() {
      return new position.PositionParser.new();
    }
  };
  (position.PositionParser.new = function() {
    position.PositionParser.__proto__.new.call(this);
    ;
  }).prototype = position.PositionParser.prototype;
  dart.addTypeTests(position.PositionParser);
  dart.addTypeCaches(position.PositionParser);
  dart.setMethodSignature(position.PositionParser, () => ({
    __proto__: dart.getMethods(position.PositionParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.int), [context.Context]),
    copy: dart.fnType(position.PositionParser, [])
  }));
  dart.setLibraryUri(position.PositionParser, I[38]);
  position.position = function position$() {
    return new position.PositionParser.new();
  };
  const _is_CastParser_default = Symbol('_is_CastParser_default');
  cast.CastParser$ = dart.generic((T, R) => {
    var CastParserOfT$R = () => (CastParserOfT$R = dart.constFn(cast.CastParser$(T, R)))();
    class CastParser extends delegate.DelegateParser$(T, R) {
      parseOn(context) {
        if (context == null) dart.nullFailed(I[39], 16, 29, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result.success(R, R.as(result.value));
        } else {
          return result.failure(R, result.message);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[39], 26, 26, "buffer");
        if (position == null) dart.nullFailed(I[39], 26, 38, "position");
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (CastParserOfT$R()).new(this.delegate);
      }
    }
    (CastParser.new = function(delegate) {
      if (delegate == null) dart.nullFailed(I[39], 13, 24, "delegate");
      CastParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = CastParser.prototype;
    dart.addTypeTests(CastParser);
    CastParser.prototype[_is_CastParser_default] = true;
    dart.addTypeCaches(CastParser);
    dart.setMethodSignature(CastParser, () => ({
      __proto__: dart.getMethods(CastParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context.Context]),
      copy: dart.fnType(cast.CastParser$(T, R), [])
    }));
    dart.setLibraryUri(CastParser, I[40]);
    return CastParser;
  });
  cast.CastParser = cast.CastParser$();
  dart.addTypeTests(cast.CastParser, _is_CastParser_default);
  cast['CastParserExtension|cast'] = function CastParserExtension$124cast(T, R, $this) {
    if ($this == null) dart.nullFailed(I[39], 8, 13, "#this");
    return new (cast.CastParser$(T, R)).new($this);
  };
  cast['CastParserExtension|get#cast'] = function CastParserExtension$124get$35cast(T, $this) {
    if ($this == null) dart.nullFailed(I[39], 8, 13, "#this");
    return dart.fn(R => cast['CastParserExtension|cast'](T, R, $this), T$.VoidToParserOfR());
  };
  var message$1 = dart.privateName(not$, "NotParser.message");
  const _is_NotParser_default = Symbol('_is_NotParser_default');
  not$.NotParser$ = dart.generic(R => {
    var FailureOfR = () => (FailureOfR = dart.constFn(failure.Failure$(R)))();
    var NotParserOfR = () => (NotParserOfR = dart.constFn(not$.NotParser$(R)))();
    class NotParser extends delegate.DelegateParser$(R, failure.Failure$(R)) {
      get message() {
        return this[message$1];
      }
      set message(value) {
        super.message = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[41], 42, 38, "context");
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isFailure)) {
          return context.success(FailureOfR(), FailureOfR().as(result));
        } else {
          return context.failure(FailureOfR(), this.message);
        }
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[41], 52, 26, "buffer");
        if (position == null) dart.nullFailed(I[41], 52, 38, "position");
        let result = this.delegate.fastParseOn(buffer, position);
        return dart.notNull(result) < 0 ? position : -1;
      }
      toString() {
        return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
      }
      copy() {
        return new (NotParserOfR()).new(this.delegate, this.message);
      }
      hasEqualProperties(other) {
        NotParserOfR().as(other);
        if (other == null) dart.nullFailed(I[41], 64, 40, "other");
        return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
      }
    }
    (NotParser.new = function(delegate, message) {
      if (delegate == null) dart.nullFailed(I[41], 36, 23, "delegate");
      if (message == null) dart.nullFailed(I[41], 36, 38, "message");
      this[message$1] = message;
      NotParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = NotParser.prototype;
    dart.addTypeTests(NotParser);
    NotParser.prototype[_is_NotParser_default] = true;
    dart.addTypeCaches(NotParser);
    dart.setMethodSignature(NotParser, () => ({
      __proto__: dart.getMethods(NotParser.__proto__),
      parseOn: dart.fnType(result.Result$(failure.Failure$(R)), [context.Context]),
      copy: dart.fnType(not$.NotParser$(R), [])
    }));
    dart.setLibraryUri(NotParser, I[42]);
    dart.setFieldSignature(NotParser, () => ({
      __proto__: dart.getFields(NotParser.__proto__),
      message: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(NotParser, ['toString']);
    return NotParser;
  });
  not$.NotParser = not$.NotParser$();
  dart.addTypeTests(not$.NotParser, _is_NotParser_default);
  not$['NotParserExtension|not'] = function NotParserExtension$124not(T, $this, message = "success not expected") {
    if ($this == null) dart.nullFailed(I[41], 20, 22, "#this");
    if (message == null) dart.nullFailed(I[41], 20, 34, "message");
    return new (not$.NotParser$(T)).new($this, message);
  };
  not$['NotParserExtension|get#not'] = function NotParserExtension$124get$35not(T, $this) {
    if ($this == null) dart.nullFailed(I[41], 20, 22, "#this");
    return dart.fn((message = "success not expected") => {
      if (message == null) dart.nullFailed(I[41], 20, 34, "message");
      return not$['NotParserExtension|not'](T, $this, message);
    }, dart.fnType(parser.Parser$(failure.Failure$(T)), [], [core.String]));
  };
  not$['NotParserExtension|neg'] = function NotParserExtension$124neg(T, $this, message = "input not expected") {
    if ($this == null) dart.nullFailed(I[41], 29, 18, "#this");
    if (message == null) dart.nullFailed(I[41], 29, 30, "message");
    return cast['CastParserExtension|cast'](core.Object, core.String, pick['PickParserExtension|pick'](core.Object, sequence['SequenceIterableExtension|toSequenceParser'](core.Object, T$.JSArrayOfParserOfObject().of([not$['NotParserExtension|not'](T, $this, message), any.any()])), 1));
  };
  not$['NotParserExtension|get#neg'] = function NotParserExtension$124get$35neg(T, $this) {
    if ($this == null) dart.nullFailed(I[41], 29, 18, "#this");
    return dart.fn((message = "input not expected") => {
      if (message == null) dart.nullFailed(I[41], 29, 30, "message");
      return not$['NotParserExtension|neg'](T, $this, message);
    }, T$.StringToParserOfString());
  };
  lowercase.LowercaseCharPredicate = class LowercaseCharPredicate extends predicate.CharacterPredicate {
    test(value) {
      if (value == null) dart.nullFailed(I[43], 13, 17, "value");
      return 97 <= dart.notNull(value) && dart.notNull(value) <= 122;
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[43], 16, 37, "other");
      return lowercase.LowercaseCharPredicate.is(other);
    }
  };
  (lowercase.LowercaseCharPredicate.new = function() {
    lowercase.LowercaseCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = lowercase.LowercaseCharPredicate.prototype;
  dart.addTypeTests(lowercase.LowercaseCharPredicate);
  dart.addTypeCaches(lowercase.LowercaseCharPredicate);
  dart.setMethodSignature(lowercase.LowercaseCharPredicate, () => ({
    __proto__: dart.getMethods(lowercase.LowercaseCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(lowercase.LowercaseCharPredicate, I[44]);
  lowercase.lowercase = function lowercase$(message = "lowercase letter expected") {
    if (message == null) dart.nullFailed(I[43], 6, 34, "message");
    return new parser$.CharacterParser.new(C[7] || CT.C7, message);
  };
  var message$2 = dart.privateName(eof, "EndOfInputParser.message");
  eof.EndOfInputParser = class EndOfInputParser extends parser.Parser$(dart.void) {
    get message() {
      return this[message$2];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      if (context == null) dart.nullFailed(I[45], 31, 32, "context");
      return dart.notNull(context.position) < context.buffer.length ? context.failure(dart.void, this.message) : context.success(dart.void, null);
    }
    fastParseOn(buffer, position) {
      if (buffer == null) dart.nullFailed(I[45], 37, 26, "buffer");
      if (position == null) dart.nullFailed(I[45], 37, 38, "position");
      return dart.notNull(position) < buffer.length ? -1 : position;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new eof.EndOfInputParser.new(this.message);
    }
    hasEqualProperties(other) {
      eof.EndOfInputParser.as(other);
      if (other == null) dart.nullFailed(I[45], 47, 44, "other");
      return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
    }
  };
  (eof.EndOfInputParser.new = function(message) {
    if (message == null) dart.nullFailed(I[45], 25, 25, "message");
    this[message$2] = message;
    eof.EndOfInputParser.__proto__.new.call(this);
    ;
  }).prototype = eof.EndOfInputParser.prototype;
  dart.addTypeTests(eof.EndOfInputParser);
  dart.addTypeCaches(eof.EndOfInputParser);
  dart.setMethodSignature(eof.EndOfInputParser, () => ({
    __proto__: dart.getMethods(eof.EndOfInputParser.__proto__),
    parseOn: dart.fnType(result.Result$(dart.void), [context.Context]),
    copy: dart.fnType(eof.EndOfInputParser, [])
  }));
  dart.setLibraryUri(eof.EndOfInputParser, I[46]);
  dart.setFieldSignature(eof.EndOfInputParser, () => ({
    __proto__: dart.getFields(eof.EndOfInputParser.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(eof.EndOfInputParser, ['toString']);
  eof['EndOfInputParserExtension|end'] = function EndOfInputParserExtension$124end(T, $this, message = "end of input expected") {
    if ($this == null) dart.nullFailed(I[45], 15, 13, "#this");
    if (message == null) dart.nullFailed(I[45], 15, 25, "message");
    return cast['CastParserExtension|cast'](dart.void, T, pick['PickParserExtension|pick'](dart.void, sequence['SequenceIterableExtension|toSequenceParser'](dart.void, T$.JSArrayOfParserOfvoid().of([$this, eof.endOfInput(message)])), 0));
  };
  eof['EndOfInputParserExtension|get#end'] = function EndOfInputParserExtension$124get$35end(T, $this) {
    if ($this == null) dart.nullFailed(I[45], 15, 13, "#this");
    return dart.fn((message = "end of input expected") => {
      if (message == null) dart.nullFailed(I[45], 15, 25, "message");
      return eof['EndOfInputParserExtension|end'](T, $this, message);
    }, dart.fnType(parser.Parser$(T), [], [core.String]));
  };
  eof.endOfInput = function endOfInput(message = "end of input expected") {
    if (message == null) dart.nullFailed(I[45], 20, 33, "message");
    return new eof.EndOfInputParser.new(message);
  };
  dart.trackLibraries("packages/petitparser/src/parser/action/cast", {
    "package:petitparser/src/parser/repeater/limited.dart": limited,
    "package:petitparser/src/parser/character/digit.dart": digit,
    "package:petitparser/src/parser/action/permute.dart": permute,
    "package:petitparser/src/parser/character/none_of.dart": none_of,
    "package:petitparser/src/parser/character/optimize.dart": optimize,
    "package:petitparser/src/parser/character/range.dart": range,
    "package:petitparser/src/parser/character/lookup.dart": lookup,
    "package:petitparser/src/parser/character/constant.dart": constant$,
    "package:petitparser/src/parser/character/not.dart": not,
    "package:petitparser/src/parser/action/flatten.dart": flatten,
    "package:petitparser/src/parser/character/letter.dart": letter,
    "package:petitparser/src/parser/predicate/string.dart": string,
    "package:petitparser/src/parser/predicate/predicate.dart": predicate$,
    "package:petitparser/src/parser/character/pattern.dart": pattern,
    "package:petitparser/src/parser/character/any_of.dart": any_of,
    "package:petitparser/src/parser/character/word.dart": word,
    "package:petitparser/src/parser/repeater/greedy.dart": greedy,
    "package:petitparser/src/parser/repeater/lazy.dart": lazy,
    "package:petitparser/src/parser/character/uppercase.dart": uppercase,
    "package:petitparser/src/parser/action/cast_list.dart": cast_list,
    "package:petitparser/src/parser/action/pick.dart": pick,
    "package:petitparser/src/parser/misc/position.dart": position,
    "package:petitparser/src/parser/action/cast.dart": cast,
    "package:petitparser/src/parser/combinator/not.dart": not$,
    "package:petitparser/src/parser/character/lowercase.dart": lowercase,
    "package:petitparser/src/parser/misc/eof.dart": eof
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../repeater/limited.dart","../character/digit.dart","permute.dart","../character/none_of.dart","../character/optimize.dart","../character/range.dart","../character/lookup.dart","../character/constant.dart","../character/not.dart","flatten.dart","../character/letter.dart","../predicate/string.dart","../predicate/predicate.dart","../character/pattern.dart","../character/any_of.dart","../character/word.dart","../repeater/greedy.dart","../repeater/lazy.dart","../character/uppercase.dart","cast_list.dart","pick.dart","../misc/position.dart","cast.dart","../combinator/not.dart","../character/lowercase.dart","../misc/eof.dart"],"names":[],"mappings":"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","file":"cast.unsound.ddc.js"}');
  // Exports:
  return {
    src__parser__repeater__limited: limited,
    src__parser__character__digit: digit,
    src__parser__action__permute: permute,
    src__parser__character__none_of: none_of,
    src__parser__character__optimize: optimize,
    src__parser__character__range: range,
    src__parser__character__lookup: lookup,
    src__parser__character__constant: constant$,
    src__parser__character__not: not,
    src__parser__action__flatten: flatten,
    src__parser__character__letter: letter,
    src__parser__predicate__string: string,
    src__parser__predicate__predicate: predicate$,
    src__parser__character__pattern: pattern,
    src__parser__character__any_of: any_of,
    src__parser__character__word: word,
    src__parser__repeater__greedy: greedy,
    src__parser__repeater__lazy: lazy,
    src__parser__character__uppercase: uppercase,
    src__parser__action__cast_list: cast_list,
    src__parser__action__pick: pick,
    src__parser__misc__position: position,
    src__parser__action__cast: cast,
    src__parser__combinator__not: not$,
    src__parser__character__lowercase: lowercase,
    src__parser__misc__eof: eof
  };
}));

//# sourceMappingURL=cast.unsound.ddc.js.map
