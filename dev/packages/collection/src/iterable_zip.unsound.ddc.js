define(['dart_sdk'], (function load__packages__collection__src__iterable_zip(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var iterable_zip = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/collection/src/iterable_zip.dart",
    "package:collection/src/iterable_zip.dart"
  ];
  var _iterables = dart.privateName(iterable_zip, "_iterables");
  const _is_IterableZip_default = Symbol('_is_IterableZip_default');
  iterable_zip.IterableZip$ = dart.generic(T => {
    var IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    var _IteratorZipOfT = () => (_IteratorZipOfT = dart.constFn(iterable_zip._IteratorZip$(T)))();
    class IterableZip extends collection.IterableBase$(core.List$(T)) {
      get iterator() {
        let iterators = this[_iterables][$map](IteratorOfT(), dart.fn(x => {
          if (x == null) dart.nullFailed(I[0], 25, 37, "x");
          return x[$iterator];
        }, IterableOfTToIteratorOfT()))[$toList]({growable: false});
        return new (_IteratorZipOfT()).new(iterators);
      }
    }
    (IterableZip.new = function(iterables) {
      if (iterables == null) dart.nullFailed(I[0], 19, 37, "iterables");
      this[_iterables] = iterables;
      IterableZip.__proto__.new.call(this);
      ;
    }).prototype = IterableZip.prototype;
    dart.addTypeTests(IterableZip);
    IterableZip.prototype[_is_IterableZip_default] = true;
    dart.addTypeCaches(IterableZip);
    dart.setGetterSignature(IterableZip, () => ({
      __proto__: dart.getGetters(IterableZip.__proto__),
      iterator: core.Iterator$(core.List$(T)),
      [$iterator]: core.Iterator$(core.List$(T))
    }));
    dart.setLibraryUri(IterableZip, I[1]);
    dart.setFieldSignature(IterableZip, () => ({
      __proto__: dart.getFields(IterableZip.__proto__),
      [_iterables]: dart.finalFieldType(core.Iterable$(core.Iterable$(T)))
    }));
    dart.defineExtensionAccessors(IterableZip, ['iterator']);
    return IterableZip;
  });
  iterable_zip.IterableZip = iterable_zip.IterableZip$();
  dart.addTypeTests(iterable_zip.IterableZip, _is_IterableZip_default);
  var _current = dart.privateName(iterable_zip, "_current");
  var _iterators = dart.privateName(iterable_zip, "_iterators");
  const _is__IteratorZip_default = Symbol('_is__IteratorZip_default');
  iterable_zip._IteratorZip$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var intToT = () => (intToT = dart.constFn(dart.fnType(T, [core.int])))();
    class _IteratorZip extends core.Object {
      moveNext() {
        if (dart.test(this[_iterators][$isEmpty])) return false;
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i = i + 1) {
          if (!dart.test(this[_iterators][$_get](i).moveNext())) {
            this[_current] = null;
            return false;
          }
        }
        this[_current] = ListOfT().generate(this[_iterators][$length], dart.fn(i => {
          if (i == null) dart.nullFailed(I[0], 45, 50, "i");
          return this[_iterators][$_get](i).current;
        }, intToT()), {growable: false});
        return true;
      }
      get current() {
        let t0;
        t0 = this[_current];
        return t0 == null ? dart.throw(new core.StateError.new("No element")) : t0;
      }
    }
    (_IteratorZip.new = function(iterators) {
      if (iterators == null) dart.nullFailed(I[0], 34, 34, "iterators");
      this[_current] = null;
      this[_iterators] = iterators;
      ;
    }).prototype = _IteratorZip.prototype;
    dart.addTypeTests(_IteratorZip);
    _IteratorZip.prototype[_is__IteratorZip_default] = true;
    dart.addTypeCaches(_IteratorZip);
    _IteratorZip[dart.implements] = () => [core.Iterator$(core.List$(T))];
    dart.setMethodSignature(_IteratorZip, () => ({
      __proto__: dart.getMethods(_IteratorZip.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_IteratorZip, () => ({
      __proto__: dart.getGetters(_IteratorZip.__proto__),
      current: core.List$(T)
    }));
    dart.setLibraryUri(_IteratorZip, I[1]);
    dart.setFieldSignature(_IteratorZip, () => ({
      __proto__: dart.getFields(_IteratorZip.__proto__),
      [_iterators]: dart.finalFieldType(core.List$(core.Iterator$(T))),
      [_current]: dart.fieldType(dart.nullable(core.List$(T)))
    }));
    return _IteratorZip;
  });
  iterable_zip._IteratorZip = iterable_zip._IteratorZip$();
  dart.addTypeTests(iterable_zip._IteratorZip, _is__IteratorZip_default);
  dart.trackLibraries("packages/collection/src/iterable_zip", {
    "package:collection/src/iterable_zip.dart": iterable_zip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["iterable_zip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBQ,wBAAY,AAAW,AAAuB,sCAAnB;cAAC;AAAM,gBAAA,AAAE,EAAD;4DAA4B;AACnE,cAAO,6BAAgB,SAAS;MAClC;;;UARkC;MAAwB,mBAAE,SAAS;AAArE;;IAAqE;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBnE,sBAAI,AAAW,6BAAS,MAAO;AAC/B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAW,4BAAQ,IAAA,AAAC,CAAA;AACtC,yBAAK,AAAU,AAAI,wBAAH,CAAC;AACA,YAAf,iBAAW;AACX,kBAAO;;;AAIS,QADpB,iBAAgB,mBAAS,AAAW,2BAAQ;cAAC;AAAM,gBAAA,AAAU,AAAI,yBAAH,CAAC;iCACjD;AACd,cAAO;MACT;;;AAGuB;4BAAa,WAAM,wBAAW;MAAc;;;UAjBpC;MAFtB;MAE8C,mBAAE,SAAS","file":"iterable_zip.unsound.ddc.js"}');
  // Exports:
  return {
    src__iterable_zip: iterable_zip
  };
}));

//# sourceMappingURL=iterable_zip.unsound.ddc.js.map
