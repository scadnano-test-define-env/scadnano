define(['dart_sdk', 'packages/built_collection/built_collection', 'packages/built_value/json_object', 'packages/built_value/serializer'], (function load__packages__built_value__standard_json_plugin(dart_sdk, packages__built_collection__built_collection, packages__built_value__json_object, packages__built_value__serializer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const list = packages__built_collection__built_collection.src__list;
  const set = packages__built_collection__built_collection.src__set;
  const map = packages__built_collection__built_collection.src__map;
  const list_multimap = packages__built_collection__built_collection.src__list_multimap;
  const set_multimap = packages__built_collection__built_collection.src__set_multimap;
  const json_object = packages__built_value__json_object.json_object;
  const serializer = packages__built_value__serializer.serializer;
  var standard_json_plugin = Object.create(dart.library);
  var $_get = dartx._get;
  var $length = dartx.length;
  var $truncate = dartx.truncate;
  var $_set = dartx._set;
  var $sublist = dartx.sublist;
  var $values = dartx.values;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))(),
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    dynamicTobool: () => (T.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    ListOfObjectN: () => (T.ListOfObjectN = dart.constFn(core.List$(T.ObjectN())))(),
    dynamicAnddynamicTovoid: () => (T.dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))(),
    ListOfObject: () => (T.ListOfObject = dart.constFn(core.List$(core.Object)))(),
    BuiltSetOfType: () => (T.BuiltSetOfType = dart.constFn(set.BuiltSet$(core.Type)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/built_value/standard_json_plugin.dart",
    "package:built_value/standard_json_plugin.dart"
  ];
  var discriminator$ = dart.privateName(standard_json_plugin, "StandardJsonPlugin.discriminator");
  var valueKey$ = dart.privateName(standard_json_plugin, "StandardJsonPlugin.valueKey");
  var _toMapWithDiscriminator = dart.privateName(standard_json_plugin, "_toMapWithDiscriminator");
  var _needsEncodedKeys = dart.privateName(standard_json_plugin, "_needsEncodedKeys");
  var _toMap = dart.privateName(standard_json_plugin, "_toMap");
  var _toListUsingDiscriminator = dart.privateName(standard_json_plugin, "_toListUsingDiscriminator");
  var _toList = dart.privateName(standard_json_plugin, "_toList");
  var _encodeKey = dart.privateName(standard_json_plugin, "_encodeKey");
  var _decodeKey = dart.privateName(standard_json_plugin, "_decodeKey");
  standard_json_plugin.StandardJsonPlugin = class StandardJsonPlugin extends core.Object {
    get discriminator() {
      return this[discriminator$];
    }
    set discriminator(value) {
      super.discriminator = value;
    }
    get valueKey() {
      return this[valueKey$];
    }
    set valueKey(value) {
      super.valueKey = value;
    }
    beforeSerialize(object, specifiedType) {
      if (specifiedType == null) dart.nullFailed(I[0], 34, 52, "specifiedType");
      if (dart.test(standard_json_plugin.StandardJsonPlugin._unsupportedTypes.contains(specifiedType.root))) {
        dart.throw(new core.ArgumentError.new("Standard JSON cannot serialize type " + dart.str(specifiedType.root) + "."));
      }
      return object;
    }
    afterSerialize(object, specifiedType) {
      if (specifiedType == null) dart.nullFailed(I[0], 43, 51, "specifiedType");
      if (core.List.is(object) && !dart.equals(specifiedType.root, dart.wrapType(list.BuiltList)) && !dart.equals(specifiedType.root, dart.wrapType(set.BuiltSet)) && !dart.equals(specifiedType.root, dart.wrapType(json_object.JsonObject))) {
        if (dart.test(specifiedType.isUnspecified)) {
          return this[_toMapWithDiscriminator](object);
        } else {
          return this[_toMap](object, this[_needsEncodedKeys](specifiedType));
        }
      } else {
        return object;
      }
    }
    beforeDeserialize(object, specifiedType) {
      if (specifiedType == null) dart.nullFailed(I[0], 59, 54, "specifiedType");
      if (core.Map.is(object) && !dart.equals(specifiedType.root, dart.wrapType(json_object.JsonObject))) {
        if (dart.test(specifiedType.isUnspecified)) {
          return this[_toListUsingDiscriminator](object);
        } else {
          return this[_toList](object, this[_needsEncodedKeys](specifiedType), {keepNulls: dart.equals(specifiedType.root, dart.wrapType(map.BuiltMap))});
        }
      } else {
        return object;
      }
    }
    afterDeserialize(object, specifiedType) {
      if (specifiedType == null) dart.nullFailed(I[0], 73, 53, "specifiedType");
      return object;
    }
    [_needsEncodedKeys](specifiedType) {
      if (specifiedType == null) dart.nullFailed(I[0], 79, 35, "specifiedType");
      return dart.equals(specifiedType.root, dart.wrapType(map.BuiltMap)) && !dart.equals(specifiedType.parameters[$_get](0).root, dart.wrapType(core.String));
    }
    [_toMap](list, needsEncodedKeys) {
      if (list == null) dart.nullFailed(I[0], 85, 19, "list");
      if (needsEncodedKeys == null) dart.nullFailed(I[0], 85, 30, "needsEncodedKeys");
      let result = new (T.IdentityMapOfString$ObjectN()).new();
      for (let i = 0; i !== (dart.notNull(list[$length]) / 2)[$truncate](); i = i + 1) {
        let key = list[$_get](i * 2);
        let value = list[$_get](i * 2 + 1);
        result[$_set](dart.test(needsEncodedKeys) ? this[_encodeKey](core.Object.as(key)) : core.String.as(key), value);
      }
      return result;
    }
    [_toMapWithDiscriminator](list) {
      if (list == null) dart.nullFailed(I[0], 98, 36, "list");
      let type = list[$_get](0);
      if (dart.equals(type, "list")) {
        return new (T.IdentityMapOfString$Object()).from([this.discriminator, core.Object.as(type), this.valueKey, list[$sublist](1)]);
      }
      if (list[$length] === 2) {
        return new (T.IdentityMapOfString$ObjectN()).from([this.discriminator, type, this.valueKey, list[$_get](1)]);
      }
      let needToEncodeKeys = false;
      if (dart.equals(type, "map")) {
        for (let i = 0; i !== ((dart.notNull(list[$length]) - 1) / 2)[$truncate](); i = i + 1) {
          if (!(typeof list[$_get](i * 2 + 1) == 'string')) {
            needToEncodeKeys = true;
            type = "encoded_map";
            break;
          }
        }
      }
      let result = new (T.IdentityMapOfString$Object()).from([this.discriminator, core.Object.as(type)]);
      for (let i = 0; i !== ((dart.notNull(list[$length]) - 1) / 2)[$truncate](); i = i + 1) {
        let key = needToEncodeKeys ? this[_encodeKey](core.Object.as(list[$_get](i * 2 + 1))) : core.String.as(list[$_get](i * 2 + 1));
        let value = list[$_get](i * 2 + 2);
        result[$_set](key, core.Object.as(value));
      }
      return result;
    }
    [_encodeKey](key) {
      if (key == null) dart.nullFailed(I[0], 141, 28, "key");
      return convert.json.encode(key);
    }
    [_toList](map, hasEncodedKeys, opts) {
      if (map == null) dart.nullFailed(I[0], 150, 29, "map");
      if (hasEncodedKeys == null) dart.nullFailed(I[0], 150, 39, "hasEncodedKeys");
      let keepNulls = opts && 'keepNulls' in opts ? opts.keepNulls : false;
      if (keepNulls == null) dart.nullFailed(I[0], 151, 13, "keepNulls");
      let nullValueCount = dart.test(keepNulls) ? 0 : map[$values][$where](dart.fn(value => value == null, T.dynamicTobool()))[$length];
      let result = T.ListOfObjectN().filled((dart.notNull(map[$length]) - dart.notNull(nullValueCount)) * 2, 0);
      let i = 0;
      map[$forEach](dart.fn((key, value) => {
        if (!dart.test(keepNulls) && value == null) return;
        result[$_set](i, dart.test(hasEncodedKeys) ? this[_decodeKey](core.String.as(key)) : key);
        result[$_set](i + 1, value);
        i = i + 2;
      }, T.dynamicAnddynamicTovoid()));
      return result;
    }
    [_toListUsingDiscriminator](map) {
      if (map == null) dart.nullFailed(I[0], 171, 47, "map");
      let type = map[$_get](this.discriminator);
      if (type == null) {
        dart.throw(new core.ArgumentError.new("Unknown type on deserialization. " + "Need either specifiedType or discriminator field."));
      }
      if (dart.equals(type, "list")) {
        return (() => {
          let t0 = T.JSArrayOfObjectN().of([type]);
          t0[$addAll](core.Iterable.as(map[$_get](this.valueKey)));
          return t0;
        })();
      }
      if (dart.test(map[$containsKey](this.valueKey))) {
        let result = T.ListOfObjectN().filled(2, 0);
        result[$_set](0, type);
        result[$_set](1, map[$_get](this.valueKey));
        return result;
      }
      let needToDecodeKeys = dart.equals(type, "encoded_map");
      if (needToDecodeKeys) {
        type = "map";
      }
      let nullValueCount = map[$values][$where](dart.fn(value => value == null, T.dynamicTobool()))[$length];
      let result = T.ListOfObject().filled((dart.notNull(map[$length]) - dart.notNull(nullValueCount)) * 2 - 1, 0);
      result[$_set](0, core.Object.as(type));
      let i = 1;
      map[$forEach](dart.fn((key, value) => {
        if (dart.equals(key, this.discriminator)) return;
        if (value == null) return;
        result[$_set](i, core.Object.as(needToDecodeKeys ? this[_decodeKey](core.String.as(key)) : key));
        result[$_set](i + 1, core.Object.as(value));
        i = i + 2;
      }, T.dynamicAnddynamicTovoid()));
      return result;
    }
    [_decodeKey](key) {
      if (key == null) dart.nullFailed(I[0], 219, 29, "key");
      return convert.json.decode(key);
    }
  };
  (standard_json_plugin.StandardJsonPlugin.new = function(opts) {
    let discriminator = opts && 'discriminator' in opts ? opts.discriminator : "$";
    if (discriminator == null) dart.nullFailed(I[0], 31, 28, "discriminator");
    let valueKey = opts && 'valueKey' in opts ? opts.valueKey : "";
    if (valueKey == null) dart.nullFailed(I[0], 31, 55, "valueKey");
    this[discriminator$] = discriminator;
    this[valueKey$] = valueKey;
    ;
  }).prototype = standard_json_plugin.StandardJsonPlugin.prototype;
  dart.addTypeTests(standard_json_plugin.StandardJsonPlugin);
  dart.addTypeCaches(standard_json_plugin.StandardJsonPlugin);
  standard_json_plugin.StandardJsonPlugin[dart.implements] = () => [serializer.SerializerPlugin];
  dart.setMethodSignature(standard_json_plugin.StandardJsonPlugin, () => ({
    __proto__: dart.getMethods(standard_json_plugin.StandardJsonPlugin.__proto__),
    beforeSerialize: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object), serializer.FullType]),
    afterSerialize: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object), serializer.FullType]),
    beforeDeserialize: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object), serializer.FullType]),
    afterDeserialize: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object), serializer.FullType]),
    [_needsEncodedKeys]: dart.fnType(core.bool, [serializer.FullType]),
    [_toMap]: dart.fnType(core.Map, [core.List, core.bool]),
    [_toMapWithDiscriminator]: dart.fnType(core.Map, [core.List]),
    [_encodeKey]: dart.fnType(core.String, [core.Object]),
    [_toList]: dart.fnType(core.List$(dart.nullable(core.Object)), [core.Map, core.bool], {keepNulls: core.bool}, {}),
    [_toListUsingDiscriminator]: dart.fnType(core.List$(dart.nullable(core.Object)), [core.Map]),
    [_decodeKey]: dart.fnType(dart.nullable(core.Object), [core.String])
  }));
  dart.setLibraryUri(standard_json_plugin.StandardJsonPlugin, I[1]);
  dart.setFieldSignature(standard_json_plugin.StandardJsonPlugin, () => ({
    __proto__: dart.getFields(standard_json_plugin.StandardJsonPlugin.__proto__),
    discriminator: dart.finalFieldType(core.String),
    valueKey: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(standard_json_plugin.StandardJsonPlugin, {
    /*standard_json_plugin.StandardJsonPlugin._unsupportedTypes*/get _unsupportedTypes() {
      return T.BuiltSetOfType().new([dart.wrapType(list_multimap.BuiltListMultimap), dart.wrapType(set_multimap.BuiltSetMultimap)]);
    }
  }, false);
  dart.trackLibraries("packages/built_value/standard_json_plugin", {
    "package:built_value/standard_json_plugin.dart": standard_json_plugin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["standard_json_plugin.dart"],"names":[],"mappings":"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","file":"standard_json_plugin.unsound.ddc.js"}');
  // Exports:
  return {
    standard_json_plugin: standard_json_plugin
  };
}));

//# sourceMappingURL=standard_json_plugin.unsound.ddc.js.map
