define(['dart_sdk', 'packages/petitparser/src/context/context'], (function load__packages__petitparser__src__parser__repeater__separated_by(dart_sdk, packages__petitparser__src__context__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sequence = packages__petitparser__src__context__context.src__parser__combinator__sequence;
  const possessive = packages__petitparser__src__context__context.src__parser__repeater__possessive;
  const parser = packages__petitparser__src__context__context.src__core__parser;
  const optional = packages__petitparser__src__context__context.src__parser__combinator__optional;
  const map = packages__petitparser__src__context__context.src__parser__action__map;
  var separated_by = Object.create(dart.library);
  var $add = dartx.add;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    JSArrayOfParser: () => (T$.JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser.Parser)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    Parser__ToParserOfListOfR: () => (T$.Parser__ToParserOfListOfR = dart.constFn(dart.gFnType(R => {
      var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
      var ParserOfListOfR = () => (ParserOfListOfR = dart.constFn(parser.Parser$(ListOfR())))();
      return [ParserOfListOfR(), [parser.Parser], {includeSeparators: core.bool, optionalSeparatorAtEnd: core.bool}, {}];
    }, R => {
      var ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
      var ParserOfListOfR = () => (ParserOfListOfR = dart.constFn(parser.Parser$(ListOfR())))();
      return [T$.ObjectN()];
    })))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["org-dartlang-app:///packages/petitparser/src/parser/repeater/separated_by.dart"];
  separated_by['SeparatedBy|separatedBy'] = function SeparatedBy$124separatedBy(T, R, $this, separator, opts) {
    if ($this == null) dart.nullFailed(I[0], 22, 19, "#this");
    if (separator == null) dart.nullFailed(I[0], 22, 41, "separator");
    let includeSeparators = opts && 'includeSeparators' in opts ? opts.includeSeparators : true;
    if (includeSeparators == null) dart.nullFailed(I[0], 23, 13, "includeSeparators");
    let optionalSeparatorAtEnd = opts && 'optionalSeparatorAtEnd' in opts ? opts.optionalSeparatorAtEnd : false;
    if (optionalSeparatorAtEnd == null) dart.nullFailed(I[0], 23, 44, "optionalSeparatorAtEnd");
    let parser = sequence['SequenceIterableExtension|toSequenceParser'](dart.dynamic, (() => {
      let t1 = T$.JSArrayOfParser().of([$this, possessive['PossessiveRepeatingParserExtension|star'](core.List, sequence['SequenceIterableExtension|toSequenceParser'](dart.dynamic, T$.JSArrayOfParser().of([separator, $this])))]);
      if (dart.test(optionalSeparatorAtEnd)) t1[$add](optional['OptionalParserExtension|optional'](dart.dynamic, separator));
      return t1;
    })());
    return map['MapParserExtension|map'](core.List, core.List$(R), parser, dart.fn(list => {
      if (list == null) dart.nullFailed(I[0], 29, 24, "list");
      let result = _interceptors.JSArray$(R).of([]);
      result[$add](R.as(list[$_get](0)));
      for (let tuple of core.Iterable.as(list[$_get](1))) {
        if (dart.test(includeSeparators)) {
          result[$add](R.as(dart.dsend(tuple, '_get', [0])));
        }
        result[$add](R.as(dart.dsend(tuple, '_get', [1])));
      }
      if (dart.test(includeSeparators) && dart.test(optionalSeparatorAtEnd) && list[$_get](2) != null) {
        result[$add](R.as(list[$_get](2)));
      }
      return result;
    }, dart.fnType(core.List$(R), [core.List])));
  };
  separated_by['SeparatedBy|get#separatedBy'] = function SeparatedBy$124get$35separatedBy(T, $this) {
    if ($this == null) dart.nullFailed(I[0], 22, 19, "#this");
    return dart.fn((R, separator, opts) => {
      if (separator == null) dart.nullFailed(I[0], 22, 41, "separator");
      let includeSeparators = opts && 'includeSeparators' in opts ? opts.includeSeparators : true;
      if (includeSeparators == null) dart.nullFailed(I[0], 23, 13, "includeSeparators");
      let optionalSeparatorAtEnd = opts && 'optionalSeparatorAtEnd' in opts ? opts.optionalSeparatorAtEnd : false;
      if (optionalSeparatorAtEnd == null) dart.nullFailed(I[0], 23, 44, "optionalSeparatorAtEnd");
      return separated_by['SeparatedBy|separatedBy'](T, R, $this, separator, {includeSeparators: includeSeparators, optionalSeparatorAtEnd: optionalSeparatorAtEnd});
    }, T$.Parser__ToParserOfListOfR());
  };
  dart.trackLibraries("packages/petitparser/src/parser/repeater/separated_by", {
    "package:petitparser/src/parser/repeater/separated_by.dart": separated_by
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["separated_by.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6FAqBwC;;;QAC5B;;QAA+B;;AACjC,iBAIJ,qEAJa;+CAEwB,iEAAnB,qEAAlB,yBAAC,SAAS;AACV,oBAAI,sBAAsB,GAAY,oEAAV,SAAS;;;AAEvC,UAAc,yDAAP,MAAM,EAAK;UAAC;AACX,mBAAY;AACC,MAAnB,AAAO,MAAD,YAAK,AAAI,IAAA,QAAC;AAChB,eAAW,0BAAS,AAAI,IAAA,QAAC;AACvB,sBAAI,iBAAiB;AACC,UAApB,AAAO,MAAD,YAAU,WAAL,KAAK,WAAC;;AAEC,QAApB,AAAO,MAAD,YAAU,WAAL,KAAK,WAAC;;AAEnB,oBAAI,iBAAiB,eAAI,sBAAsB,KAAI,AAAI,IAAA,QAAC;AACnC,QAAnB,AAAO,MAAD,YAAK,AAAI,IAAA,QAAC;;AAElB,YAAO,OAAM;;EAEjB;;;AArBgB;UAAsB;UAC5B;;UAA+B;;AADzB,2EAAS,sBAAT,iBAAiB,0BAAjB,sBAAsB;;EAqBtC","file":"separated_by.unsound.ddc.js"}');
  // Exports:
  return {
    src__parser__repeater__separated_by: separated_by
  };
}));

//# sourceMappingURL=separated_by.unsound.ddc.js.map
