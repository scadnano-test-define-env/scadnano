define(['dart_sdk', 'packages/petitparser/src/context/context'], (function load__packages__petitparser__src__matcher__accept(dart_sdk, packages__petitparser__src__context__context) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = packages__petitparser__src__context__context.src__core__parser;
  var pattern = Object.create(dart.library);
  var parser_pattern = Object.create(dart.library);
  var pattern_iterable = Object.create(dart.library);
  var pattern_iterator = Object.create(dart.library);
  var parser_match = Object.create(dart.library);
  var accept = Object.create(dart.library);
  var $allMatches = dartx.allMatches;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $substring = dartx.substring;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $iterator = dartx.iterator;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    VoidToPattern: () => (T$.VoidToPattern = dart.constFn(dart.fnType(core.Pattern, [])))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringTobool: () => (T$.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/petitparser/src/matcher/pattern.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/pattern/parser_pattern.dart",
    "package:petitparser/src/matcher/pattern/parser_pattern.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/pattern/pattern_iterable.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/pattern/parser_match.dart",
    "package:petitparser/src/matcher/pattern/parser_match.dart",
    "package:petitparser/src/matcher/pattern/pattern_iterable.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/pattern/pattern_iterator.dart",
    "package:petitparser/src/matcher/pattern/pattern_iterator.dart",
    "org-dartlang-app:///packages/petitparser/src/matcher/accept.dart"
  ];
  pattern['PatternParser|toPattern'] = function PatternParser$124toPattern(T, $this) {
    if ($this == null) dart.nullFailed(I[0], 6, 11, "#this");
    return new parser_pattern.ParserPattern.new($this);
  };
  pattern['PatternParser|get#toPattern'] = function PatternParser$124get$35toPattern(T, $this) {
    if ($this == null) dart.nullFailed(I[0], 6, 11, "#this");
    return dart.fn(() => pattern['PatternParser|toPattern'](T, $this), T$.VoidToPattern());
  };
  var parser$ = dart.privateName(parser_pattern, "ParserPattern.parser");
  parser_pattern.ParserPattern = class ParserPattern extends core.Object {
    get parser() {
      return this[parser$];
    }
    set parser(value) {
      super.parser = value;
    }
    allMatches(string, start = 0) {
      if (string == null) dart.nullFailed(I[1], 22, 43, "string");
      if (start == null) dart.nullFailed(I[1], 22, 56, "start");
      return new pattern_iterable.PatternIterable.new(this, string, start);
    }
    matchAsPrefix(string, start = 0) {
      if (string == null) dart.nullFailed(I[1], 33, 37, "string");
      if (start == null) dart.nullFailed(I[1], 33, 50, "start");
      let end = this.parser.fastParseOn(string, start);
      return dart.notNull(end) < 0 ? null : new parser_match.ParserMatch.new(this, string, start, end);
    }
  };
  (parser_pattern.ParserPattern.new = function(parser) {
    if (parser == null) dart.nullFailed(I[1], 11, 28, "parser");
    this[parser$] = parser;
    ;
  }).prototype = parser_pattern.ParserPattern.prototype;
  dart.addTypeTests(parser_pattern.ParserPattern);
  dart.addTypeCaches(parser_pattern.ParserPattern);
  parser_pattern.ParserPattern[dart.implements] = () => [core.Pattern];
  dart.setMethodSignature(parser_pattern.ParserPattern, () => ({
    __proto__: dart.getMethods(parser_pattern.ParserPattern.__proto__),
    allMatches: dart.fnType(core.Iterable$(parser_match.ParserMatch), [core.String], [core.int]),
    [$allMatches]: dart.fnType(core.Iterable$(parser_match.ParserMatch), [core.String], [core.int]),
    matchAsPrefix: dart.fnType(dart.nullable(parser_match.ParserMatch), [core.String], [core.int]),
    [$matchAsPrefix]: dart.fnType(dart.nullable(parser_match.ParserMatch), [core.String], [core.int])
  }));
  dart.setLibraryUri(parser_pattern.ParserPattern, I[2]);
  dart.setFieldSignature(parser_pattern.ParserPattern, () => ({
    __proto__: dart.getFields(parser_pattern.ParserPattern.__proto__),
    parser: dart.finalFieldType(parser.Parser)
  }));
  dart.defineExtensionMethods(parser_pattern.ParserPattern, ['allMatches', 'matchAsPrefix']);
  var pattern$ = dart.privateName(pattern_iterable, "PatternIterable.pattern");
  var input$ = dart.privateName(pattern_iterable, "PatternIterable.input");
  var start$ = dart.privateName(pattern_iterable, "PatternIterable.start");
  var pattern$0 = dart.privateName(parser_match, "ParserMatch.pattern");
  var input$0 = dart.privateName(parser_match, "ParserMatch.input");
  var start$0 = dart.privateName(parser_match, "ParserMatch.start");
  var end$ = dart.privateName(parser_match, "ParserMatch.end");
  parser_match.ParserMatch = class ParserMatch extends core.Object {
    get pattern() {
      return this[pattern$0];
    }
    set pattern(value) {
      super.pattern = value;
    }
    get input() {
      return this[input$0];
    }
    set input(value) {
      super.input = value;
    }
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    group(group) {
      if (group == null) dart.nullFailed(I[4], 22, 21, "group");
      return this._get(group);
    }
    _get(group) {
      if (group == null) dart.nullFailed(I[4], 25, 27, "group");
      return group === 0 ? this.input[$substring](this.start, this.end) : null;
    }
    groups(groupIndices) {
      if (groupIndices == null) dart.nullFailed(I[4], 29, 34, "groupIndices");
      return groupIndices[$map](T$.StringN(), dart.bind(this, 'group'))[$toList]({growable: false});
    }
    get groupCount() {
      return 0;
    }
  };
  (parser_match.ParserMatch.new = function(pattern, input, start, end) {
    if (pattern == null) dart.nullFailed(I[4], 19, 26, "pattern");
    if (input == null) dart.nullFailed(I[4], 19, 40, "input");
    if (start == null) dart.nullFailed(I[4], 19, 52, "start");
    if (end == null) dart.nullFailed(I[4], 19, 64, "end");
    this[pattern$0] = pattern;
    this[input$0] = input;
    this[start$0] = start;
    this[end$] = end;
    ;
  }).prototype = parser_match.ParserMatch.prototype;
  dart.addTypeTests(parser_match.ParserMatch);
  dart.addTypeCaches(parser_match.ParserMatch);
  parser_match.ParserMatch[dart.implements] = () => [core.Match];
  dart.setMethodSignature(parser_match.ParserMatch, () => ({
    __proto__: dart.getMethods(parser_match.ParserMatch.__proto__),
    group: dart.fnType(dart.nullable(core.String), [core.int]),
    _get: dart.fnType(dart.nullable(core.String), [core.int]),
    groups: dart.fnType(core.List$(dart.nullable(core.String)), [core.List$(core.int)])
  }));
  dart.setGetterSignature(parser_match.ParserMatch, () => ({
    __proto__: dart.getGetters(parser_match.ParserMatch.__proto__),
    groupCount: core.int
  }));
  dart.setLibraryUri(parser_match.ParserMatch, I[5]);
  dart.setFieldSignature(parser_match.ParserMatch, () => ({
    __proto__: dart.getFields(parser_match.ParserMatch.__proto__),
    pattern: dart.finalFieldType(parser_pattern.ParserPattern),
    input: dart.finalFieldType(core.String),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  pattern_iterable.PatternIterable = class PatternIterable extends collection.IterableBase$(parser_match.ParserMatch) {
    get pattern() {
      return this[pattern$];
    }
    set pattern(value) {
      super.pattern = value;
    }
    get input() {
      return this[input$];
    }
    set input(value) {
      super.input = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new pattern_iterator.PatternIterator.new(this.pattern, this.pattern.parser, this.input, this.start);
    }
  };
  (pattern_iterable.PatternIterable.new = function(pattern, input, start) {
    if (pattern == null) dart.nullFailed(I[3], 15, 30, "pattern");
    if (input == null) dart.nullFailed(I[3], 15, 44, "input");
    if (start == null) dart.nullFailed(I[3], 15, 56, "start");
    this[pattern$] = pattern;
    this[input$] = input;
    this[start$] = start;
    pattern_iterable.PatternIterable.__proto__.new.call(this);
    ;
  }).prototype = pattern_iterable.PatternIterable.prototype;
  dart.addTypeTests(pattern_iterable.PatternIterable);
  dart.addTypeCaches(pattern_iterable.PatternIterable);
  dart.setGetterSignature(pattern_iterable.PatternIterable, () => ({
    __proto__: dart.getGetters(pattern_iterable.PatternIterable.__proto__),
    iterator: core.Iterator$(parser_match.ParserMatch),
    [$iterator]: core.Iterator$(parser_match.ParserMatch)
  }));
  dart.setLibraryUri(pattern_iterable.PatternIterable, I[6]);
  dart.setFieldSignature(pattern_iterable.PatternIterable, () => ({
    __proto__: dart.getFields(pattern_iterable.PatternIterable.__proto__),
    pattern: dart.finalFieldType(parser_pattern.ParserPattern),
    input: dart.finalFieldType(core.String),
    start: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionAccessors(pattern_iterable.PatternIterable, ['iterator']);
  var pattern$1 = dart.privateName(pattern_iterator, "PatternIterator.pattern");
  var parser$0 = dart.privateName(pattern_iterator, "PatternIterator.parser");
  var input$1 = dart.privateName(pattern_iterator, "PatternIterator.input");
  var start$1 = dart.privateName(pattern_iterator, "PatternIterator.start");
  var __PatternIterator_current = dart.privateName(pattern_iterator, "_#PatternIterator#current");
  var __PatternIterator_current_isSet = dart.privateName(pattern_iterator, "_#PatternIterator#current#isSet");
  pattern_iterator.PatternIterator = class PatternIterator extends core.Iterator$(parser_match.ParserMatch) {
    get pattern() {
      return this[pattern$1];
    }
    set pattern(value) {
      super.pattern = value;
    }
    get parser() {
      return this[parser$0];
    }
    set parser(value) {
      super.parser = value;
    }
    get input() {
      return this[input$1];
    }
    set input(value) {
      super.input = value;
    }
    get start() {
      return this[start$1];
    }
    set start(value) {
      this[start$1] = value;
    }
    get current() {
      let t2;
      return dart.test(this[__PatternIterator_current_isSet]) ? (t2 = this[__PatternIterator_current], t2) : dart.throw(new _internal.LateError.fieldNI("current"));
    }
    set current(t2) {
      if (t2 == null) dart.nullFailed(I[7], 14, 20, "null");
      this[__PatternIterator_current_isSet] = true;
      this[__PatternIterator_current] = t2;
    }
    moveNext() {
      while (dart.notNull(this.start) <= this.input.length) {
        let end = this.parser.fastParseOn(this.input, this.start);
        if (dart.notNull(end) < 0) {
          this.start = dart.notNull(this.start) + 1;
        } else {
          this.current = new parser_match.ParserMatch.new(this.pattern, this.input, this.start, end);
          if (this.start == end) {
            this.start = dart.notNull(this.start) + 1;
          } else {
            this.start = end;
          }
          return true;
        }
      }
      return false;
    }
  };
  (pattern_iterator.PatternIterator.new = function(pattern, parser, input, start) {
    if (pattern == null) dart.nullFailed(I[7], 11, 24, "pattern");
    if (parser == null) dart.nullFailed(I[7], 11, 38, "parser");
    if (input == null) dart.nullFailed(I[7], 11, 51, "input");
    if (start == null) dart.nullFailed(I[7], 11, 63, "start");
    this[__PatternIterator_current] = null;
    this[__PatternIterator_current_isSet] = false;
    this[pattern$1] = pattern;
    this[parser$0] = parser;
    this[input$1] = input;
    this[start$1] = start;
    ;
  }).prototype = pattern_iterator.PatternIterator.prototype;
  dart.addTypeTests(pattern_iterator.PatternIterator);
  dart.addTypeCaches(pattern_iterator.PatternIterator);
  dart.setMethodSignature(pattern_iterator.PatternIterator, () => ({
    __proto__: dart.getMethods(pattern_iterator.PatternIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(pattern_iterator.PatternIterator, () => ({
    __proto__: dart.getGetters(pattern_iterator.PatternIterator.__proto__),
    current: parser_match.ParserMatch
  }));
  dart.setSetterSignature(pattern_iterator.PatternIterator, () => ({
    __proto__: dart.getSetters(pattern_iterator.PatternIterator.__proto__),
    current: parser_match.ParserMatch
  }));
  dart.setLibraryUri(pattern_iterator.PatternIterator, I[8]);
  dart.setFieldSignature(pattern_iterator.PatternIterator, () => ({
    __proto__: dart.getFields(pattern_iterator.PatternIterator.__proto__),
    pattern: dart.finalFieldType(parser_pattern.ParserPattern),
    parser: dart.finalFieldType(parser.Parser),
    input: dart.finalFieldType(core.String),
    start: dart.fieldType(core.int),
    [__PatternIterator_current]: dart.fieldType(dart.nullable(parser_match.ParserMatch)),
    [__PatternIterator_current_isSet]: dart.fieldType(core.bool)
  }));
  accept['AcceptParser|accept'] = function AcceptParser$124accept(T, $this, input) {
    if ($this == null) dart.nullFailed(I[9], 8, 8, "#this");
    if (input == null) dart.nullFailed(I[9], 8, 22, "input");
    return dart.notNull($this.fastParseOn(input, 0)) >= 0;
  };
  accept['AcceptParser|get#accept'] = function AcceptParser$124get$35accept(T, $this) {
    if ($this == null) dart.nullFailed(I[9], 8, 8, "#this");
    return dart.fn(input => {
      if (input == null) dart.nullFailed(I[9], 8, 22, "input");
      return accept['AcceptParser|accept'](T, $this, input);
    }, T$.StringTobool());
  };
  dart.trackLibraries("packages/petitparser/src/matcher/accept", {
    "package:petitparser/src/matcher/pattern.dart": pattern,
    "package:petitparser/src/matcher/pattern/parser_pattern.dart": parser_pattern,
    "package:petitparser/src/matcher/pattern/pattern_iterable.dart": pattern_iterable,
    "package:petitparser/src/matcher/pattern/pattern_iterator.dart": pattern_iterator,
    "package:petitparser/src/matcher/pattern/parser_match.dart": parser_match,
    "package:petitparser/src/matcher/accept.dart": accept
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pattern.dart","pattern/parser_pattern.dart","pattern/parser_match.dart","pattern/pattern_iterable.dart","pattern/pattern_iterator.dart","accept.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKyB;EAAmB;;;AAAlC;EAAkC;;;ICG7B;;;;;;eAa2B,QAAa;UAAb;UAAa;AACjD,sDAAgB,MAAM,MAAM,EAAE,KAAK;IAAC;kBAUN,QAAa;UAAb;UAAa;AACvC,gBAAM,AAAO,wBAAY,MAAM,EAAE,KAAK;AAC5C,YAAW,cAAJ,GAAG,IAAG,IAAI,OAAO,iCAAY,MAAM,MAAM,EAAE,KAAK,EAAE,GAAG;IAC9D;;;QAzByB;;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;ICHZ;;;;;;IAGP;;;;;;IAGH;;;;;;IAGA;;;;;;;UAKQ;AAAU,YAAI,WAAC,KAAK;IAAC;;UAGf;AACpB,YAAA,AAAM,MAAD,KAAI,IAAI,AAAM,uBAAU,YAAO,YAAO;IAAI;;UAGpB;AAC3B,YAAA,AAAa,AAAW,aAAZ,+BAAK,oCAAwB;IAAM;;AAG7B;IAAC;;2CAdA,SAAc,OAAY,OAAY;QAAtC;QAAc;QAAY;QAAY;IAAtC;IAAc;IAAY;IAAY;;EAAI;;;;;;;;;;;;;;;;;;;;;;;ICR7C;;;;;;IACP;;;;;;IACH;;;;;;;AAMN,sDAAgB,cAAS,AAAQ,qBAAQ,YAAO;IAAM;;mDAJ/B,SAAc,OAAY;QAA1B;QAAc;QAAY;IAA1B;IAAc;IAAY;AAA/C;;EAAqD;;;;;;;;;;;;;;;;;;;;;;;ICTvC;;;;;;IACP;;;;;;IACA;;;;;;IACT;;;;;;;;AAKa;IAAO;;;AAAP;;IAAO;;AAItB,aAAa,aAAN,eAAS,AAAM;AACd,kBAAM,AAAO,wBAAY,YAAO;AACtC,YAAQ,aAAJ,GAAG,IAAG;AACD,UAAP,aAAK,aAAL,cAAK;;AAE4C,UAAjD,eAAU,iCAAY,cAAS,YAAO,YAAO,GAAG;AAChD,cAAI,AAAM,cAAG,GAAG;AACP,YAAP,aAAK,aAAL,cAAK;;AAEM,YAAX,aAAQ,GAAG;;AAEb,gBAAO;;;AAGX,YAAO;IACT;;mDAtBqB,SAAc,QAAa,OAAY;QAAvC;QAAc;QAAa;QAAY;sCAG3C;;IAHI;IAAc;IAAa;IAAY;;EAAM;;;;;;;;;;;;;;;;;;;;;;;;;4ECH/C;;;AAAU,UAAsB,cAAtB,kBAAY,KAAK,EAAE,OAAM;EAAC;;;AAAlD;UAAc;AAAd,0DAAK;;EAA6C","file":"accept.unsound.ddc.js"}');
  // Exports:
  return {
    src__matcher__pattern: pattern,
    src__matcher__pattern__parser_pattern: parser_pattern,
    src__matcher__pattern__pattern_iterable: pattern_iterable,
    src__matcher__pattern__pattern_iterator: pattern_iterator,
    src__matcher__pattern__parser_match: parser_match,
    src__matcher__accept: accept
  };
}));

//# sourceMappingURL=accept.unsound.ddc.js.map
