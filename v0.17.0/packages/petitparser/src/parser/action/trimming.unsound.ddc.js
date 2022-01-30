define(['dart_sdk', 'packages/petitparser/src/context/context'], (function load__packages__petitparser__src__parser__action__trimming(dart_sdk, packages__petitparser__src__context__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const predicate = packages__petitparser__src__context__context.src__parser__character__predicate;
  const parser = packages__petitparser__src__context__context.src__parser__character__parser;
  const parser$ = packages__petitparser__src__context__context.src__core__parser;
  const result = packages__petitparser__src__context__context.src__context__result;
  const context$ = packages__petitparser__src__context__context.src__context__context;
  const delegate = packages__petitparser__src__context__context.src__parser__combinator__delegate;
  var whitespace = Object.create(dart.library);
  var epsilon = Object.create(dart.library);
  var trimming = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    JSArrayOfParser: () => (T$.JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser$.Parser)))(),
    ParserOfvoid: () => (T$.ParserOfvoid = dart.constFn(parser$.Parser$(dart.void)))(),
    ParserNOfvoid: () => (T$.ParserNOfvoid = dart.constFn(dart.nullable(T$.ParserOfvoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: whitespace.WhitespaceCharPredicate.prototype
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "org-dartlang-app:///packages/petitparser/src/parser/character/whitespace.dart",
    "package:petitparser/src/parser/character/whitespace.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/misc/epsilon.dart",
    "package:petitparser/src/parser/misc/epsilon.dart",
    "org-dartlang-app:///packages/petitparser/src/parser/action/trimming.dart",
    "package:petitparser/src/parser/action/trimming.dart"
  ];
  whitespace.WhitespaceCharPredicate = class WhitespaceCharPredicate extends core.Object {
    test(value) {
      if (value == null) dart.nullFailed(I[0], 13, 17, "value");
      if (dart.notNull(value) < 256) {
        switch (value) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 133:
          case 160:
          {
            return true;
          }
          default:
          {
            return false;
          }
        }
      } else {
        switch (value) {
          case 5760:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8232:
          case 8233:
          case 8239:
          case 8287:
          case 12288:
          case 65279:
          {
            return true;
          }
          default:
          {
            return false;
          }
        }
      }
    }
    isEqualTo(other) {
      if (other == null) dart.nullFailed(I[0], 56, 37, "other");
      return whitespace.WhitespaceCharPredicate.is(other);
    }
  };
  (whitespace.WhitespaceCharPredicate.new = function() {
    ;
  }).prototype = whitespace.WhitespaceCharPredicate.prototype;
  dart.addTypeTests(whitespace.WhitespaceCharPredicate);
  dart.addTypeCaches(whitespace.WhitespaceCharPredicate);
  whitespace.WhitespaceCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(whitespace.WhitespaceCharPredicate, () => ({
    __proto__: dart.getMethods(whitespace.WhitespaceCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(whitespace.WhitespaceCharPredicate, I[1]);
  whitespace.whitespace = function whitespace$(message = "whitespace expected") {
    if (message == null) dart.nullFailed(I[0], 6, 35, "message");
    return new parser.CharacterParser.new(C[0] || CT.C0, message);
  };
  var result$ = dart.privateName(epsilon, "EpsilonParser.result");
  const _is_EpsilonParser_default = Symbol('_is_EpsilonParser_default');
  epsilon.EpsilonParser$ = dart.generic(R => {
    var EpsilonParserOfR = () => (EpsilonParserOfR = dart.constFn(epsilon.EpsilonParser$(R)))();
    class EpsilonParser extends parser$.Parser$(R) {
      get result() {
        return this[result$];
      }
      set result(value) {
        super.result = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[2], 22, 29, "context");
        return context.success(R, this.result);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[2], 25, 26, "buffer");
        if (position == null) dart.nullFailed(I[2], 25, 38, "position");
        return position;
      }
      copy() {
        return new (EpsilonParserOfR()).new(this.result);
      }
      hasEqualProperties(other) {
        EpsilonParserOfR().as(other);
        if (other == null) dart.nullFailed(I[2], 31, 44, "other");
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.result, other.result);
      }
    }
    (EpsilonParser.new = function(result) {
      this[result$] = result;
      EpsilonParser.__proto__.new.call(this);
      ;
    }).prototype = EpsilonParser.prototype;
    dart.addTypeTests(EpsilonParser);
    EpsilonParser.prototype[_is_EpsilonParser_default] = true;
    dart.addTypeCaches(EpsilonParser);
    dart.setMethodSignature(EpsilonParser, () => ({
      __proto__: dart.getMethods(EpsilonParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context$.Context]),
      copy: dart.fnType(epsilon.EpsilonParser$(R), [])
    }));
    dart.setLibraryUri(EpsilonParser, I[3]);
    dart.setFieldSignature(EpsilonParser, () => ({
      __proto__: dart.getFields(EpsilonParser.__proto__),
      result: dart.finalFieldType(R)
    }));
    return EpsilonParser;
  });
  epsilon.EpsilonParser = epsilon.EpsilonParser$();
  dart.addTypeTests(epsilon.EpsilonParser, _is_EpsilonParser_default);
  epsilon.epsilon = function epsilon$() {
    return epsilon.epsilonWith(dart.void, null);
  };
  epsilon.epsilonWith = function epsilonWith(R, result) {
    return new (epsilon.EpsilonParser$(R)).new(result);
  };
  var left$ = dart.privateName(trimming, "TrimmingParser.left");
  var right$ = dart.privateName(trimming, "TrimmingParser.right");
  var _trim = dart.privateName(trimming, "_trim");
  const _is_TrimmingParser_default = Symbol('_is_TrimmingParser_default');
  trimming.TrimmingParser$ = dart.generic(R => {
    var TrimmingParserOfR = () => (TrimmingParserOfR = dart.constFn(trimming.TrimmingParser$(R)))();
    class TrimmingParser extends delegate.DelegateParser$(R, R) {
      get left() {
        return this[left$];
      }
      set left(value) {
        this[left$] = value;
      }
      get right() {
        return this[right$];
      }
      set right(value) {
        this[right$] = value;
      }
      parseOn(context) {
        if (context == null) dart.nullFailed(I[4], 33, 29, "context");
        let buffer = context.buffer;
        let before = this[_trim](this.left, buffer, context.position);
        if (before != context.position) {
          context = new context$.Context.new(buffer, before);
        }
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isFailure)) {
          return result;
        }
        let after = this[_trim](this.right, buffer, result.position);
        return after == result.position ? result : result.success(R, result.value, after);
      }
      fastParseOn(buffer, position) {
        if (buffer == null) dart.nullFailed(I[4], 56, 26, "buffer");
        if (position == null) dart.nullFailed(I[4], 56, 38, "position");
        let result = this.delegate.fastParseOn(buffer, this[_trim](this.left, buffer, position));
        return dart.notNull(result) < 0 ? -1 : this[_trim](this.right, buffer, result);
      }
      [_trim](parser, buffer, position) {
        if (parser == null) dart.nullFailed(I[4], 63, 20, "parser");
        if (buffer == null) dart.nullFailed(I[4], 63, 35, "buffer");
        if (position == null) dart.nullFailed(I[4], 63, 47, "position");
        for (;;) {
          let result = parser.fastParseOn(buffer, position);
          if (dart.notNull(result) < 0) {
            break;
          }
          position = result;
        }
        return position;
      }
      copy() {
        return new (TrimmingParserOfR()).new(this.delegate, this.left, this.right);
      }
      get children() {
        return T$.JSArrayOfParser().of([this.delegate, this.left, this.right]);
      }
      replace(source, target) {
        parser$.Parser.as(source);
        if (source == null) dart.nullFailed(I[4], 81, 33, "source");
        parser$.Parser.as(target);
        if (target == null) dart.nullFailed(I[4], 81, 58, "target");
        super.replace(source, target);
        if (dart.equals(this.left, source)) {
          this.left = target;
        }
        if (dart.equals(this.right, source)) {
          this.right = target;
        }
      }
    }
    (TrimmingParser.new = function(delegate, left, right) {
      if (delegate == null) dart.nullFailed(I[4], 24, 28, "delegate");
      if (left == null) dart.nullFailed(I[4], 24, 43, "left");
      if (right == null) dart.nullFailed(I[4], 24, 54, "right");
      this[left$] = left;
      this[right$] = right;
      TrimmingParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = TrimmingParser.prototype;
    dart.addTypeTests(TrimmingParser);
    TrimmingParser.prototype[_is_TrimmingParser_default] = true;
    dart.addTypeCaches(TrimmingParser);
    dart.setMethodSignature(TrimmingParser, () => ({
      __proto__: dart.getMethods(TrimmingParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context$.Context]),
      [_trim]: dart.fnType(core.int, [parser$.Parser, core.String, core.int]),
      copy: dart.fnType(trimming.TrimmingParser$(R), []),
      replace: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(TrimmingParser, I[5]);
    dart.setFieldSignature(TrimmingParser, () => ({
      __proto__: dart.getFields(TrimmingParser.__proto__),
      left: dart.fieldType(parser$.Parser$(dart.void)),
      right: dart.fieldType(parser$.Parser$(dart.void))
    }));
    return TrimmingParser;
  });
  trimming.TrimmingParser = trimming.TrimmingParser$();
  dart.addTypeTests(trimming.TrimmingParser, _is_TrimmingParser_default);
  trimming['TrimmingParserExtension|trim'] = function TrimmingParserExtension$124trim(T, $this, left = null, right = null) {
    let t1, t1$;
    if ($this == null) dart.nullFailed(I[4], 17, 13, "#this");
    return new (trimming.TrimmingParser$(T)).new($this, (t1 = left, t1 == null ? left = whitespace.whitespace() : t1), (t1$ = right, t1$ == null ? right = left : t1$));
  };
  trimming['TrimmingParserExtension|get#trim'] = function TrimmingParserExtension$124get$35trim(T, $this) {
    if ($this == null) dart.nullFailed(I[4], 17, 13, "#this");
    return dart.fn((left = null, right = null) => trimming['TrimmingParserExtension|trim'](T, $this, left, right), dart.fnType(parser$.Parser$(T), [], [T$.ParserNOfvoid(), T$.ParserNOfvoid()]));
  };
  dart.trackLibraries("packages/petitparser/src/parser/action/trimming", {
    "package:petitparser/src/parser/character/whitespace.dart": whitespace,
    "package:petitparser/src/parser/misc/epsilon.dart": epsilon,
    "package:petitparser/src/parser/action/trimming.dart": trimming
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../character/whitespace.dart","../misc/epsilon.dart","trimming.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYgB;AACZ,UAAU,aAAN,KAAK,IAAG;AACV,gBAAQ,KAAK;;;;;;;;;;AAST,kBAAO;;;;AAEP,kBAAO;;;;AAGX,gBAAQ,KAAK;;;;;;;;;;;;;;;;;;;;AAmBT,kBAAO;;;;AAEP,kBAAO;;;;IAGf;;UAGkC;AAAU,YAAM,uCAAN,KAAK;IAA2B;;;;EA9C7C;;;;;;;;;;;QAJC;AAC9B,yDAAiD,OAAO;EAAC;;;;;;MCYnD;;;;;;;YAGkB;AAAY,cAAA,AAAQ,QAAD,YAAS;MAAO;kBAGtC,QAAY;YAAZ;YAAY;AAAa,uBAAQ;;;AAG7B,4CAAiB;MAAO;;8BAGV;;AACrC,cAAgC,WAA1B,yBAAmB,KAAK,MAAY,YAAP,aAAU,AAAM,KAAD;MAAO;;;MAhB1C;AAAnB;;IAA0B;;;;;;;;;;;;;;;;;;;AAPF,0CAAkB;EAAK;gDAGtB;AAAW,+CAAiB,MAAM;EAAC;;;;;;;;MCe/C;;;;;;MAGA;;;;;;;YAGa;AAClB,qBAAS,AAAQ,OAAD;AAGhB,qBAAS,YAAM,WAAM,MAAM,EAAE,AAAQ,OAAD;AAC1C,YAAI,MAAM,IAAI,AAAQ,OAAD;AACc,UAAjC,UAAU,yBAAQ,MAAM,EAAE,MAAM;;AAI5B,qBAAS,AAAS,sBAAQ,OAAO;AACvC,sBAAI,AAAO,MAAD;AACR,gBAAO,OAAM;;AAIT,oBAAQ,YAAM,YAAO,MAAM,EAAE,AAAO,MAAD;AACzC,cAAO,AAAM,MAAD,IAAI,AAAO,MAAD,YAChB,MAAM,GACN,AAAO,MAAD,YAAS,AAAO,MAAD,QAAQ,KAAK;MAC1C;kBAGuB,QAAY;YAAZ;YAAY;AAC3B,qBAAS,AAAS,0BAAY,MAAM,EAAE,YAAM,WAAM,MAAM,EAAE,QAAQ;AACxE,cAAc,cAAP,MAAM,IAAG,IAAI,CAAC,IAAI,YAAM,YAAO,MAAM,EAAE,MAAM;MACtD;cAIiB,QAAe,QAAY;YAA3B;YAAe;YAAY;AAC1C;AACQ,uBAAS,AAAO,MAAD,aAAa,MAAM,EAAE,QAAQ;AAClD,cAAW,aAAP,MAAM,IAAG;AACX;;AAEe,UAAjB,WAAW,MAAM;;AAEnB,cAAO,SAAQ;MACjB;;AAG4B,6CAAkB,eAAU,WAAM;MAAM;;AAGvC,wCAAC,eAAU,WAAM;MAAM;cAGtB,QAAyB;0BAAzB;;0BAAyB;;AACxB,QAAvB,cAAQ,MAAM,EAAE,MAAM;AAC5B,YAAS,YAAL,WAAQ,MAAM;AACH,UAAb,YAAO,MAAM;;AAEf,YAAU,YAAN,YAAS,MAAM;AACH,UAAd,aAAQ,MAAM;;MAElB;;mCAjEyB,UAAe,MAAW;UAA1B;UAAe;UAAW;MAAX;MAAW;AAAS,8CAAM,QAAQ;;IAAC;;;;;;;;;;;;;;;;;;;;;gGAP7C,aAAoB;;;AAC9C,yDAA6B,KAAL,IAAI,EAAC,aAAL,OAAS,gCAAoB,MAAN,KAAK,EAAC,cAAN,QAAU,IAAI;EAAC;;;AADxD,oBAAoB,aAAoB,oEAAxC,IAAI,EAAJ,KAAK;EACmD","file":"trimming.unsound.ddc.js"}');
  // Exports:
  return {
    src__parser__character__whitespace: whitespace,
    src__parser__misc__epsilon: epsilon,
    src__parser__action__trimming: trimming
  };
}));

//# sourceMappingURL=trimming.unsound.ddc.js.map
