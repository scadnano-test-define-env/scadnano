define(['dart_sdk', 'packages/collection/src/comparators'], (function load__packages__built_value__json_object(dart_sdk, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__comparators.src__equality;
  var json_object = Object.create(dart.library);
  var $cast = dartx.cast;
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ListOfObjectN: () => (T.ListOfObjectN = dart.constFn(core.List$(T.ObjectN())))(),
    MapOfString$ObjectN: () => (T.MapOfString$ObjectN = dart.constFn(core.Map$(core.String, T.ObjectN())))(),
    UnmodifiableListViewOfObjectN: () => (T.UnmodifiableListViewOfObjectN = dart.constFn(collection.UnmodifiableListView$(T.ObjectN())))(),
    DefaultEqualityOfNeverL: () => (T.DefaultEqualityOfNeverL = dart.constFn(equality.DefaultEquality$(dart.legacy(dart.Never))))(),
    UnmodifiableMapViewOfString$ObjectN: () => (T.UnmodifiableMapViewOfString$ObjectN = dart.constFn(collection.UnmodifiableMapView$(core.String, T.ObjectN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: T.DefaultEqualityOfNeverL().prototype
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C[1] || CT.C1
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "package:built_value/json_object.dart",
    "org-dartlang-app:///packages/built_value/json_object.dart"
  ];
  json_object.JsonObject = class JsonObject extends core.Object {
    get isBool() {
      return false;
    }
    get asBool() {
      return dart.throw(new core.StateError.new("Not a bool."));
    }
    get isList() {
      return false;
    }
    get asList() {
      return dart.throw(new core.StateError.new("Not a List."));
    }
    get isMap() {
      return false;
    }
    get asMap() {
      return dart.throw(new core.StateError.new("Not a Map."));
    }
    get isNum() {
      return false;
    }
    get asNum() {
      return dart.throw(new core.StateError.new("Not a num."));
    }
    get isString() {
      return false;
    }
    get asString() {
      return dart.throw(new core.StateError.new("Not a String."));
    }
    static new(value) {
      if (typeof value == 'number') {
        return new json_object.NumJsonObject.new(value);
      } else if (typeof value == 'string') {
        return new json_object.StringJsonObject.new(value);
      } else if (typeof value == 'boolean') {
        return new json_object.BoolJsonObject.new(value);
      } else if (T.ListOfObjectN().is(value)) {
        return new json_object.ListJsonObject.new(value);
      } else if (T.MapOfString$ObjectN().is(value)) {
        return new json_object.MapJsonObject.new(value);
      } else if (core.Map.is(value)) {
        return new json_object.MapJsonObject.new(value[$cast](core.String, T.ObjectN()));
      } else {
        dart.throw(new core.ArgumentError.value(value, "value", "Must be bool, List<Object?>, Map<String?, Object?>, num or String"));
      }
    }
    toString() {
      return dart.toString(this.value);
    }
  };
  (json_object.JsonObject.__ = function() {
    ;
  }).prototype = json_object.JsonObject.prototype;
  dart.addTypeTests(json_object.JsonObject);
  dart.addTypeCaches(json_object.JsonObject);
  dart.setGetterSignature(json_object.JsonObject, () => ({
    __proto__: dart.getGetters(json_object.JsonObject.__proto__),
    isBool: core.bool,
    asBool: core.bool,
    isList: core.bool,
    asList: core.List,
    isMap: core.bool,
    asMap: core.Map,
    isNum: core.bool,
    asNum: core.num,
    isString: core.bool,
    asString: core.String
  }));
  dart.setLibraryUri(json_object.JsonObject, I[0]);
  dart.defineExtensionMethods(json_object.JsonObject, ['toString']);
  var value$ = dart.privateName(json_object, "BoolJsonObject.value");
  json_object.BoolJsonObject = class BoolJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get isBool() {
      return true;
    }
    get asBool() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.BoolJsonObject.is(other)) return false;
      return this.value == other.value;
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (json_object.BoolJsonObject.new = function(value) {
    if (value == null) dart.nullFailed(I[1], 91, 23, "value");
    this[value$] = value;
    json_object.BoolJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.BoolJsonObject.prototype;
  dart.addTypeTests(json_object.BoolJsonObject);
  dart.addTypeCaches(json_object.BoolJsonObject);
  dart.setMethodSignature(json_object.BoolJsonObject, () => ({
    __proto__: dart.getMethods(json_object.BoolJsonObject.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(json_object.BoolJsonObject, I[0]);
  dart.setFieldSignature(json_object.BoolJsonObject, () => ({
    __proto__: dart.getFields(json_object.BoolJsonObject.__proto__),
    value: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(json_object.BoolJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.BoolJsonObject, ['hashCode']);
  var value$0 = dart.privateName(json_object, "ListJsonObject.value");
  var DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  var DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  json_object.ListJsonObject = class ListJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get isList() {
      return true;
    }
    get asList() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.ListJsonObject.is(other)) return false;
      return (C[0] || CT.C0).equals(this.value, other.value);
    }
    get hashCode() {
      return (C[0] || CT.C0).hash(this.value);
    }
  };
  (json_object.ListJsonObject.new = function(value) {
    if (value == null) dart.nullFailed(I[1], 115, 32, "value");
    this[value$0] = new (T.UnmodifiableListViewOfObjectN()).new(value);
    json_object.ListJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.ListJsonObject.prototype;
  dart.addTypeTests(json_object.ListJsonObject);
  dart.addTypeCaches(json_object.ListJsonObject);
  dart.setMethodSignature(json_object.ListJsonObject, () => ({
    __proto__: dart.getMethods(json_object.ListJsonObject.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(json_object.ListJsonObject, () => ({
    __proto__: dart.getGetters(json_object.ListJsonObject.__proto__),
    asList: core.List$(dart.nullable(core.Object))
  }));
  dart.setLibraryUri(json_object.ListJsonObject, I[0]);
  dart.setFieldSignature(json_object.ListJsonObject, () => ({
    __proto__: dart.getFields(json_object.ListJsonObject.__proto__),
    value: dart.finalFieldType(core.List$(dart.nullable(core.Object)))
  }));
  dart.defineExtensionMethods(json_object.ListJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.ListJsonObject, ['hashCode']);
  var value$1 = dart.privateName(json_object, "MapJsonObject.value");
  json_object.MapJsonObject = class MapJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$1];
    }
    set value(value) {
      super.value = value;
    }
    get isMap() {
      return true;
    }
    get asMap() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.MapJsonObject.is(other)) return false;
      return (C[0] || CT.C0).equals(this.value, other.value);
    }
    get hashCode() {
      return (C[0] || CT.C0).hash(this.value);
    }
  };
  (json_object.MapJsonObject.new = function(value) {
    if (value == null) dart.nullFailed(I[1], 141, 38, "value");
    this[value$1] = new (T.UnmodifiableMapViewOfString$ObjectN()).new(value);
    json_object.MapJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.MapJsonObject.prototype;
  dart.addTypeTests(json_object.MapJsonObject);
  dart.addTypeCaches(json_object.MapJsonObject);
  dart.setMethodSignature(json_object.MapJsonObject, () => ({
    __proto__: dart.getMethods(json_object.MapJsonObject.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(json_object.MapJsonObject, () => ({
    __proto__: dart.getGetters(json_object.MapJsonObject.__proto__),
    asMap: core.Map$(core.String, dart.nullable(core.Object))
  }));
  dart.setLibraryUri(json_object.MapJsonObject, I[0]);
  dart.setFieldSignature(json_object.MapJsonObject, () => ({
    __proto__: dart.getFields(json_object.MapJsonObject.__proto__),
    value: dart.finalFieldType(core.Map$(core.String, dart.nullable(core.Object)))
  }));
  dart.defineExtensionMethods(json_object.MapJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.MapJsonObject, ['hashCode']);
  var value$2 = dart.privateName(json_object, "NumJsonObject.value");
  json_object.NumJsonObject = class NumJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$2];
    }
    set value(value) {
      super.value = value;
    }
    get isNum() {
      return true;
    }
    get asNum() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.NumJsonObject.is(other)) return false;
      return this.value == other.value;
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (json_object.NumJsonObject.new = function(value) {
    if (value == null) dart.nullFailed(I[1], 167, 22, "value");
    this[value$2] = value;
    json_object.NumJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.NumJsonObject.prototype;
  dart.addTypeTests(json_object.NumJsonObject);
  dart.addTypeCaches(json_object.NumJsonObject);
  dart.setMethodSignature(json_object.NumJsonObject, () => ({
    __proto__: dart.getMethods(json_object.NumJsonObject.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(json_object.NumJsonObject, I[0]);
  dart.setFieldSignature(json_object.NumJsonObject, () => ({
    __proto__: dart.getFields(json_object.NumJsonObject.__proto__),
    value: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(json_object.NumJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.NumJsonObject, ['hashCode']);
  var value$3 = dart.privateName(json_object, "StringJsonObject.value");
  json_object.StringJsonObject = class StringJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$3];
    }
    set value(value) {
      super.value = value;
    }
    get isString() {
      return true;
    }
    get asString() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.StringJsonObject.is(other)) return false;
      return this.value == other.value;
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (json_object.StringJsonObject.new = function(value) {
    if (value == null) dart.nullFailed(I[1], 191, 25, "value");
    this[value$3] = value;
    json_object.StringJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.StringJsonObject.prototype;
  dart.addTypeTests(json_object.StringJsonObject);
  dart.addTypeCaches(json_object.StringJsonObject);
  dart.setMethodSignature(json_object.StringJsonObject, () => ({
    __proto__: dart.getMethods(json_object.StringJsonObject.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(json_object.StringJsonObject, I[0]);
  dart.setFieldSignature(json_object.StringJsonObject, () => ({
    __proto__: dart.getFields(json_object.StringJsonObject.__proto__),
    value: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(json_object.StringJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.StringJsonObject, ['hashCode']);
  dart.trackLibraries("packages/built_value/json_object", {
    "package:built_value/json_object.dart": json_object
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["json_object.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0BqB;IAAK;;AAGL,wBAAM,wBAAW;IAAc;;AAG/B;IAAK;;AAGL,wBAAM,wBAAW;IAAc;;AAGhC;IAAK;;AAGN,wBAAM,wBAAW;IAAa;;AAG7B;IAAK;;AAGN,wBAAM,wBAAW;IAAa;;AAG1B;IAAK;;AAGH,wBAAM,wBAAW;IAAgB;eAI7B;AACzB,UAAU,OAAN,KAAK;AACP,cAAO,mCAAc,KAAK;YACrB,KAAU,OAAN,KAAK;AACd,cAAO,sCAAiB,KAAK;YACxB,KAAU,OAAN,KAAK;AACd,cAAO,oCAAe,KAAK;YACtB,KAAU,qBAAN,KAAK;AACd,cAAO,oCAAe,KAAK;YACtB,KAAU,2BAAN,KAAK;AACd,cAAO,mCAAc,KAAK;YACrB,KAAU,YAAN,KAAK;AAEd,cAAO,mCAAc,AAAM,KAAD;;AAG8C,QADxE,WAAoB,6BAAM,KAAK,EAAE,SAC7B;;IAER;;AAME,YAAa,eAAN;IACT;;;;EALc;;;;;;;;;;;;;;;;;;;;IAWH;;;;;;;AAKQ;IAAI;;AAGJ;IAAK;;UAGC;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,8BAAN,KAAK,GAAqB,MAAO;AACrC,YAAO,AAAM,eAAG,AAAM,KAAD;IACvB;;AAGoB,YAAM,eAAN;IAAc;;;QAhBd;;AAAe;;EAAG;;;;;;;;;;;;;;;;;;;IAsBlB;;;;;;;AAOD;IAAI;;AAGK;IAAK;;UAGR;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,8BAAN,KAAK,GAAqB,MAAO;AACrC,YAAsC,wBAAO,YAAO,AAAM,KAAD;IAC3D;;AAGoB,YAA+B,sBAAK;IAAM;;;QAlBjC;IACjB,gBAAE,4CAA8B,KAAK;AACrC;;EAAG;;;;;;;;;;;;;;;;;;;;;IAsBY;;;;;;;AAOT;IAAI;;AAGY;IAAK;;UAGd;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,6BAAN,KAAK,GAAoB,MAAO;AACpC,YAAsC,wBAAO,YAAO,AAAM,KAAD;IAC3D;;AAGoB,YAA+B,sBAAK;IAAM;;;QAlB3B;IACvB,gBAAE,kDAAoB,KAAK;AAC3B;;EAAG;;;;;;;;;;;;;;;;;;;;;IAsBL;;;;;;;AAKQ;IAAI;;AAGL;IAAK;;UAGG;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,6BAAN,KAAK,GAAoB,MAAO;AACpC,YAAO,AAAM,eAAG,AAAM,KAAD;IACvB;;AAGoB,YAAM,eAAN;IAAc;;;QAhBf;;AAAe;;EAAG;;;;;;;;;;;;;;;;;IAsBxB;;;;;;;AAKQ;IAAI;;AAGF;IAAK;;UAGH;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,gCAAN,KAAK,GAAuB,MAAO;AACvC,YAAO,AAAM,eAAG,AAAM,KAAD;IACvB;;AAGoB,YAAM,eAAN;IAAc;;;QAhBZ;;AAAe;;EAAG","file":"json_object.unsound.ddc.js"}');
  // Exports:
  return {
    json_object: json_object
  };
}));

//# sourceMappingURL=json_object.unsound.ddc.js.map
