define(['dart_sdk', 'packages/petitparser/src/context/context', 'packages/petitparser/src/parser/repeater/separated_by', 'packages/petitparser/src/parser/combinator/settable'], (function load__packages__petitparser__src__expression__builder(dart_sdk, packages__petitparser__src__context__context, packages__petitparser__src__parser__repeater__separated_by, packages__petitparser__src__parser__combinator__settable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser$ = packages__petitparser__src__context__context.src__core__parser;
  const map = packages__petitparser__src__context__context.src__parser__action__map;
  const sequence = packages__petitparser__src__context__context.src__parser__combinator__sequence;
  const possessive = packages__petitparser__src__context__context.src__parser__repeater__possessive;
  const choice = packages__petitparser__src__context__context.src__parser__combinator__choice;
  const separated_by = packages__petitparser__src__parser__repeater__separated_by.src__parser__repeater__separated_by;
  const settable = packages__petitparser__src__parser__combinator__settable.src__parser__combinator__settable;
  const failure = packages__petitparser__src__parser__combinator__settable.src__parser__misc__failure;
  var group$ = Object.create(dart.library);
  var result$ = Object.create(dart.library);
  var builder = Object.create(dart.library);
  var $add = dartx.add;
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $length = dartx.length;
  var $fold = dartx.fold;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JSArrayOfParser: () => (T.JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser$.Parser)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))(),
    ListOfObjectN: () => (T.ListOfObjectN = dart.constFn(core.List$(T.ObjectN())))(),
    ListTodynamic: () => (T.ListTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.List])))(),
    ListOfParser: () => (T.ListOfParser = dart.constFn(core.List$(parser$.Parser)))(),
    dynamicAnddynamicTodynamic: () => (T.dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))(),
    JSArrayOfExpressionGroup: () => (T.JSArrayOfExpressionGroup = dart.constFn(_interceptors.JSArray$(group$.ExpressionGroup)))(),
    ParserAndExpressionGroupToParser: () => (T.ParserAndExpressionGroupToParser = dart.constFn(dart.fnType(parser$.Parser, [parser$.Parser, group$.ExpressionGroup])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/petitparser/src/expression/group.dart",
    "package:petitparser/src/expression/group.dart",
    "org-dartlang-app:///packages/petitparser/src/expression/result.dart",
    "package:petitparser/src/expression/result.dart",
    "org-dartlang-app:///packages/petitparser/src/expression/builder.dart",
    "package:petitparser/src/expression/builder.dart"
  ];
  var _primitives = dart.privateName(group$, "_primitives");
  var _wrappers = dart.privateName(group$, "_wrappers");
  var _prefix = dart.privateName(group$, "_prefix");
  var _postfix = dart.privateName(group$, "_postfix");
  var _right = dart.privateName(group$, "_right");
  var _left = dart.privateName(group$, "_left");
  var _loopback$ = dart.privateName(group$, "_loopback");
  var _buildChoice = dart.privateName(group$, "_buildChoice");
  var _buildPrimitive = dart.privateName(group$, "_buildPrimitive");
  var _buildWrapper = dart.privateName(group$, "_buildWrapper");
  var _buildPrefix = dart.privateName(group$, "_buildPrefix");
  var _buildPostfix = dart.privateName(group$, "_buildPostfix");
  var _buildRight = dart.privateName(group$, "_buildRight");
  var _buildLeft = dart.privateName(group$, "_buildLeft");
  group$.ExpressionGroup = class ExpressionGroup extends core.Object {
    primitive(V, parser, action = null) {
      if (parser == null) dart.nullFailed(I[0], 17, 31, "parser");
      this[_primitives][$add](action != null ? map['MapParserExtension|map'](V, dart.dynamic, parser, action) : parser);
    }
    [_buildPrimitive](inner) {
      if (inner == null) dart.nullFailed(I[0], 21, 33, "inner");
      return this[_buildChoice](this[_primitives], inner);
    }
    wrapper(O, V, left, right, action = null) {
      let t0;
      if (left == null) dart.nullFailed(I[0], 28, 32, "left");
      if (right == null) dart.nullFailed(I[0], 28, 48, "right");
      let callback = (t0 = action, t0 == null ? dart.fn((left, value, right) => T.JSArrayOfObjectN().of([left, value, right]), dart.fnType(T.ListOfObjectN(), [O, V, O])) : t0);
      this[_wrappers][$add](map['MapParserExtension|map'](core.List, dart.dynamic, sequence['SequenceIterableExtension|toSequenceParser'](dart.dynamic, T.JSArrayOfParser().of([left, this[_loopback$], right])), dart.fn(value => {
        if (value == null) dart.nullFailed(I[0], 33, 15, "value");
        return callback(O.as(value[$_get](0)), V.as(value[$_get](1)), O.as(value[$_get](2)));
      }, T.ListTodynamic())));
    }
    [_buildWrapper](inner) {
      if (inner == null) dart.nullFailed(I[0], 36, 31, "inner");
      return this[_buildChoice]((() => {
        let t0 = T.ListOfParser().of(this[_wrappers]);
        t0[$add](inner);
        return t0;
      })(), inner);
    }
    prefix(O, V, parser, action = null) {
      let t1;
      if (parser == null) dart.nullFailed(I[0], 43, 31, "parser");
      let callback = (t1 = action, t1 == null ? dart.fn((operator, value) => T.JSArrayOfObjectN().of([operator, value]), dart.fnType(T.ListOfObjectN(), [O, V])) : t1);
      this[_prefix][$add](map['MapParserExtension|map'](O, dart.dynamic, parser, dart.fn(operator => new result$.ExpressionResult.new(operator, callback), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildPrefix](inner) {
      if (inner == null) dart.nullFailed(I[0], 49, 30, "inner");
      if (dart.test(this[_prefix][$isEmpty])) {
        return inner;
      } else {
        return map['MapParserExtension|map'](core.List, dart.dynamic, sequence['SequenceIterableExtension|toSequenceParser'](dart.dynamic, T.JSArrayOfParser().of([possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, this[_buildChoice](this[_prefix])), inner])), dart.fn(tuple => {
          if (tuple == null) dart.nullFailed(I[0], 55, 17, "tuple");
          return dart.dsend(dart.dload(tuple[$first], 'reversed'), 'fold', [tuple[$last], dart.fn((value, result) => {
              let t3, t2, t1;
              let expressionResult = result$.ExpressionResult.as(result);
              t1 = expressionResult;
              t2 = expressionResult.operator;
              t3 = value;
              return dart.dsend(t1, 'action', [t2, t3]);
            }, T.dynamicAnddynamicTodynamic())]);
        }, T.ListTodynamic()));
      }
    }
    postfix(O, V, parser, action = null) {
      let t1;
      if (parser == null) dart.nullFailed(I[0], 68, 32, "parser");
      let callback = (t1 = action, t1 == null ? dart.fn((value, operator) => T.JSArrayOfObjectN().of([value, operator]), dart.fnType(T.ListOfObjectN(), [V, O])) : t1);
      this[_postfix][$add](map['MapParserExtension|map'](O, dart.dynamic, parser, dart.fn(operator => new result$.ExpressionResult.new(operator, callback), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildPostfix](inner) {
      if (inner == null) dart.nullFailed(I[0], 75, 31, "inner");
      if (dart.test(this[_postfix][$isEmpty])) {
        return inner;
      } else {
        return map['MapParserExtension|map'](core.List, dart.dynamic, sequence['SequenceIterableExtension|toSequenceParser'](dart.dynamic, T.JSArrayOfParser().of([inner, possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, this[_buildChoice](this[_postfix]))])), dart.fn(tuple => {
          if (tuple == null) dart.nullFailed(I[0], 81, 17, "tuple");
          return dart.dsend(tuple[$last], 'fold', [tuple[$first], dart.fn((value, result) => {
              let t3, t2, t1;
              let expressionResult = result$.ExpressionResult.as(result);
              t1 = expressionResult;
              t2 = value;
              t3 = expressionResult.operator;
              return dart.dsend(t1, 'action', [t2, t3]);
            }, T.dynamicAnddynamicTodynamic())]);
        }, T.ListTodynamic()));
      }
    }
    right(O, V, parser, action = null) {
      let t1;
      if (parser == null) dart.nullFailed(I[0], 94, 30, "parser");
      let callback = (t1 = action, t1 == null ? dart.fn((left, operator, right) => T.JSArrayOfObjectN().of([left, operator, right]), dart.fnType(T.ListOfObjectN(), [V, O, V])) : t1);
      this[_right][$add](map['MapParserExtension|map'](O, dart.dynamic, parser, dart.fn(operator => new result$.ExpressionResult.new(operator, callback), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildRight](inner) {
      if (inner == null) dart.nullFailed(I[0], 101, 29, "inner");
      if (dart.test(this[_right][$isEmpty])) {
        return inner;
      } else {
        return map['MapParserExtension|map'](core.List, dart.dynamic, separated_by['SeparatedBy|separatedBy'](dart.dynamic, dart.dynamic, inner, this[_buildChoice](this[_right])), dart.fn(sequence => {
          let t4, t3, t2, t1;
          if (sequence == null) dart.nullFailed(I[0], 105, 59, "sequence");
          let result = sequence[$last];
          for (let i = dart.notNull(sequence[$length]) - 2; i > 0; i = i - 2) {
            let expressionResult = result$.ExpressionResult.as(sequence[$_get](i));
            result = (t1 = expressionResult, t2 = sequence[$_get](i - 1), t3 = expressionResult.operator, t4 = result, dart.dsend(t1, 'action', [t2, t3, t4]));
          }
          return result;
        }, T.ListTodynamic()));
      }
    }
    left(O, V, parser, action = null) {
      let t1;
      if (parser == null) dart.nullFailed(I[0], 121, 29, "parser");
      let callback = (t1 = action, t1 == null ? dart.fn((left, operator, right) => T.JSArrayOfObjectN().of([left, operator, right]), dart.fnType(T.ListOfObjectN(), [V, O, V])) : t1);
      this[_left][$add](map['MapParserExtension|map'](O, dart.dynamic, parser, dart.fn(operator => new result$.ExpressionResult.new(operator, callback), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildLeft](inner) {
      if (inner == null) dart.nullFailed(I[0], 128, 28, "inner");
      if (dart.test(this[_left][$isEmpty])) {
        return inner;
      } else {
        return map['MapParserExtension|map'](core.List, dart.dynamic, separated_by['SeparatedBy|separatedBy'](dart.dynamic, dart.dynamic, inner, this[_buildChoice](this[_left])), dart.fn(sequence => {
          let t4, t3, t2, t1;
          if (sequence == null) dart.nullFailed(I[0], 132, 58, "sequence");
          let result = sequence[$first];
          for (let i = 1; i < dart.notNull(sequence[$length]); i = i + 2) {
            let expressionResult = result$.ExpressionResult.as(sequence[$_get](i));
            result = (t1 = expressionResult, t2 = result, t3 = expressionResult.operator, t4 = sequence[$_get](i + 1), dart.dsend(t1, 'action', [t2, t3, t4]));
          }
          return result;
        }, T.ListTodynamic()));
      }
    }
    [_buildChoice](parsers, otherwise = null) {
      if (parsers == null) dart.nullFailed(I[0], 147, 36, "parsers");
      if (dart.test(parsers[$isEmpty])) {
        return dart.nullCheck(otherwise);
      } else if (parsers[$length] === 1) {
        return parsers[$first];
      } else {
        return choice['ChoiceIterableExtension|toChoiceParser'](dart.dynamic, parsers);
      }
    }
    build(inner) {
      if (inner == null) dart.nullFailed(I[0], 158, 23, "inner");
      return this[_buildLeft](this[_buildRight](this[_buildPostfix](this[_buildPrefix](this[_buildWrapper](this[_buildPrimitive](inner))))));
    }
  };
  (group$.ExpressionGroup.new = function(_loopback) {
    if (_loopback == null) dart.nullFailed(I[0], 13, 24, "_loopback");
    this[_primitives] = T.JSArrayOfParser().of([]);
    this[_wrappers] = T.JSArrayOfParser().of([]);
    this[_prefix] = T.JSArrayOfParser().of([]);
    this[_postfix] = T.JSArrayOfParser().of([]);
    this[_right] = T.JSArrayOfParser().of([]);
    this[_left] = T.JSArrayOfParser().of([]);
    this[_loopback$] = _loopback;
    ;
  }).prototype = group$.ExpressionGroup.prototype;
  dart.addTypeTests(group$.ExpressionGroup);
  dart.addTypeCaches(group$.ExpressionGroup);
  dart.setMethodSignature(group$.ExpressionGroup, () => ({
    __proto__: dart.getMethods(group$.ExpressionGroup.__proto__),
    primitive: dart.gFnType(V => [dart.void, [parser$.Parser$(V)], [dart.nullable(dart.fnType(dart.dynamic, [V]))]], V => [dart.nullable(core.Object)]),
    [_buildPrimitive]: dart.fnType(parser$.Parser, [parser$.Parser]),
    wrapper: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O), parser$.Parser$(O)], [dart.nullable(dart.fnType(dart.dynamic, [O, V, O]))]], (O, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_buildWrapper]: dart.fnType(parser$.Parser, [parser$.Parser]),
    prefix: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.nullable(dart.fnType(dart.dynamic, [O, V]))]], (O, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_buildPrefix]: dart.fnType(parser$.Parser, [parser$.Parser]),
    postfix: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.nullable(dart.fnType(dart.dynamic, [V, O]))]], (O, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_buildPostfix]: dart.fnType(parser$.Parser, [parser$.Parser]),
    right: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.nullable(dart.fnType(dart.dynamic, [V, O, V]))]], (O, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_buildRight]: dart.fnType(parser$.Parser, [parser$.Parser]),
    left: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.nullable(dart.fnType(dart.dynamic, [V, O, V]))]], (O, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_buildLeft]: dart.fnType(parser$.Parser, [parser$.Parser]),
    [_buildChoice]: dart.fnType(parser$.Parser, [core.List$(parser$.Parser)], [dart.nullable(parser$.Parser)]),
    build: dart.fnType(parser$.Parser, [parser$.Parser])
  }));
  dart.setLibraryUri(group$.ExpressionGroup, I[1]);
  dart.setFieldSignature(group$.ExpressionGroup, () => ({
    __proto__: dart.getFields(group$.ExpressionGroup.__proto__),
    [_loopback$]: dart.finalFieldType(parser$.Parser),
    [_primitives]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_wrappers]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_prefix]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_postfix]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_right]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_left]: dart.finalFieldType(core.List$(parser$.Parser))
  }));
  var operator$ = dart.privateName(result$, "ExpressionResult.operator");
  var action$ = dart.privateName(result$, "ExpressionResult.action");
  result$.ExpressionResult = class ExpressionResult extends core.Object {
    get operator() {
      return this[operator$];
    }
    set operator(value) {
      super.operator = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
  };
  (result$.ExpressionResult.new = function(operator, action) {
    if (action == null) dart.nullFailed(I[2], 6, 40, "action");
    this[operator$] = operator;
    this[action$] = action;
    ;
  }).prototype = result$.ExpressionResult.prototype;
  dart.addTypeTests(result$.ExpressionResult);
  dart.addTypeCaches(result$.ExpressionResult);
  dart.setLibraryUri(result$.ExpressionResult, I[3]);
  dart.setFieldSignature(result$.ExpressionResult, () => ({
    __proto__: dart.getFields(result$.ExpressionResult.__proto__),
    operator: dart.finalFieldType(dart.dynamic),
    action: dart.finalFieldType(core.Function)
  }));
  var _groups = dart.privateName(builder, "_groups");
  var _loopback = dart.privateName(builder, "_loopback");
  builder.ExpressionBuilder = class ExpressionBuilder extends core.Object {
    group() {
      let group = new group$.ExpressionGroup.new(this[_loopback]);
      this[_groups][$add](group);
      return group;
    }
    build() {
      let parser = this[_groups][$fold](parser$.Parser, failure.failure(dart.dynamic, "Highest priority group should define a primitive parser."), dart.fn((a, b) => {
        if (a == null) dart.nullFailed(I[4], 74, 8, "a");
        if (b == null) dart.nullFailed(I[4], 74, 11, "b");
        return b.build(a);
      }, T.ParserAndExpressionGroupToParser()));
      this[_loopback].set(parser);
      return parser;
    }
  };
  (builder.ExpressionBuilder.new = function() {
    this[_groups] = T.JSArrayOfExpressionGroup().of([]);
    this[_loopback] = settable.undefined(dart.dynamic);
    ;
  }).prototype = builder.ExpressionBuilder.prototype;
  dart.addTypeTests(builder.ExpressionBuilder);
  dart.addTypeCaches(builder.ExpressionBuilder);
  dart.setMethodSignature(builder.ExpressionBuilder, () => ({
    __proto__: dart.getMethods(builder.ExpressionBuilder.__proto__),
    group: dart.fnType(group$.ExpressionGroup, []),
    build: dart.fnType(parser$.Parser, [])
  }));
  dart.setLibraryUri(builder.ExpressionBuilder, I[5]);
  dart.setFieldSignature(builder.ExpressionBuilder, () => ({
    __proto__: dart.getFields(builder.ExpressionBuilder.__proto__),
    [_groups]: dart.finalFieldType(core.List$(group$.ExpressionGroup)),
    [_loopback]: dart.finalFieldType(settable.SettableParser)
  }));
  dart.trackLibraries("packages/petitparser/src/expression/builder", {
    "package:petitparser/src/expression/group.dart": group$,
    "package:petitparser/src/expression/result.dart": result$,
    "package:petitparser/src/expression/builder.dart": builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["group.dart","result.dart","builder.dart"],"names":[],"mappings":"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","file":"builder.unsound.ddc.js"}');
  // Exports:
  return {
    src__expression__group: group$,
    src__expression__result: result$,
    src__expression__builder: builder
  };
}));

//# sourceMappingURL=builder.unsound.ddc.js.map
