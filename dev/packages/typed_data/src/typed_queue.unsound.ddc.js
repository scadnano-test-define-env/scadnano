define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/typed_data/src/typed_buffer'], (function load__packages__typed_data__src__typed_queue(dart_sdk, packages__collection__src__canonicalized_map, packages__typed_data__src__typed_buffer) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const queue_list = packages__collection__src__canonicalized_map.src__queue_list;
  const typed_buffer = packages__typed_data__src__typed_buffer.src__typed_buffer;
  var typed_data$ = Object.create(dart.library);
  var typed_queue = Object.create(dart.library);
  var $length = dartx.length;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $cast = dartx.cast;
  var $sublist = dartx.sublist;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfdoubleN: () => (T.ListOfdoubleN = dart.constFn(core.List$(T.doubleN())))(),
    Int32x4N: () => (T.Int32x4N = dart.constFn(dart.nullable(typed_data.Int32x4)))(),
    ListOfInt32x4N: () => (T.ListOfInt32x4N = dart.constFn(core.List$(T.Int32x4N())))(),
    Float32x4N: () => (T.Float32x4N = dart.constFn(dart.nullable(typed_data.Float32x4)))(),
    ListOfFloat32x4N: () => (T.ListOfFloat32x4N = dart.constFn(core.List$(T.Float32x4N())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _js_helper.PrivateSymbol.new('_head', _head$));
    },
    get C1() {
      return C[1] = dart.const(new _js_helper.PrivateSymbol.new('_writeToList', _writeToList));
    },
    get C2() {
      return C[2] = dart.const(new _js_helper.PrivateSymbol.new('_add', _add));
    },
    get C3() {
      return C[3] = dart.const(new _js_helper.PrivateSymbol.new('_grow', _grow));
    },
    get C4() {
      return C[4] = dart.const(new _js_helper.PrivateSymbol.new('_table', _table$));
    },
    get C5() {
      return C[5] = dart.const(new _js_helper.PrivateSymbol.new('_tail', _tail$));
    },
    get C6() {
      return C[6] = dart.const(new _js_helper.PrivateSymbol.new('_preGrow', _preGrow));
    },
    get C7() {
      return C[7] = dart.const(new _js_helper.PrivateSymbol.new('_head=', _head_));
    },
    get C8() {
      return C[8] = dart.const(new _js_helper.PrivateSymbol.new('_table=', _table_));
    },
    get C9() {
      return C[9] = dart.const(new _js_helper.PrivateSymbol.new('_tail=', _tail_));
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/typed_data/src/typed_queue.dart",
    "package:typed_data/src/typed_queue.dart"
  ];
  var _table = dart.privateName(typed_queue, "_TypedQueue._table");
  var _head = dart.privateName(typed_queue, "_TypedQueue._head");
  var _tail = dart.privateName(typed_queue, "_TypedQueue._tail");
  var _table$ = dart.privateName(typed_queue, "_table");
  var _head$ = dart.privateName(typed_queue, "_head");
  var _tail$ = dart.privateName(typed_queue, "_tail");
  var _createBuffer = dart.privateName(typed_queue, "_createBuffer");
  var _createList = dart.privateName(typed_queue, "_createList");
  var _writeToList = dart.privateName(typed_queue, "_writeToList");
  var _growAtCapacity = dart.privateName(typed_queue, "_growAtCapacity");
  var _growTo = dart.privateName(typed_queue, "_growTo");
  var _defaultValue = dart.privateName(typed_queue, "_defaultValue");
  const _is__TypedQueue_default = Symbol('_is__TypedQueue_default');
  typed_queue._TypedQueue$ = dart.generic((E, L) => {
    var IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    var ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    var EN = () => (EN = dart.constFn(dart.nullable(E)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class _TypedQueue extends Object_ListMixin$36 {
      get [_table$]() {
        return this[_table];
      }
      set [_table$](value) {
        this[_table] = value;
      }
      get [_head$]() {
        return this[_head];
      }
      set [_head$](value) {
        this[_head] = value;
      }
      get [_tail$]() {
        return this[_tail];
      }
      set [_tail$](value) {
        this[_tail] = value;
      }
      get length() {
        return (dart.notNull(this[_tail$]) - dart.notNull(this[_head$]) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        if (growable == null) dart.nullFailed(I[0], 33, 24, "growable");
        let list = dart.test(growable) ? this[_createBuffer](this.length) : this[_createList](this.length);
        this[_writeToList](list);
        return list;
      }
      cast(T) {
        if (queue_list.QueueList$(T).is(this)) return queue_list.QueueList$(T).as(this);
        dart.throw(new core.UnsupportedError.new(dart.str(this) + " cannot be cast to the desired type."));
      }
      retype(T) {
        return this.cast(T);
      }
      addLast(value) {
        E.as(value);
        this[_table$][$_set](this[_tail$], value);
        this[_tail$] = (dart.notNull(this[_tail$]) + 1 & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        if (this[_head$] == this[_tail$]) this[_growAtCapacity]();
      }
      addFirst(value) {
        E.as(value);
        this[_head$] = (dart.notNull(this[_head$]) - 1 & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        this[_table$][$_set](this[_head$], value);
        if (this[_head$] == this[_tail$]) this[_growAtCapacity]();
      }
      removeFirst() {
        if (this[_head$] == this[_tail$]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table$][$_get](this[_head$]);
        this[_head$] = (dart.notNull(this[_head$]) + 1 & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head$] == this[_tail$]) dart.throw(new core.StateError.new("No element"));
        this[_tail$] = (dart.notNull(this[_tail$]) - 1 & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        return this[_table$][$_get](this[_tail$]);
      }
      add(value) {
        E.as(value);
        return this.addLast(value);
      }
      set length(value) {
        if (value == null) dart.nullFailed(I[0], 78, 18, "value");
        core.RangeError.checkNotNegative(value, "length");
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          let needsToGrow = dart.notNull(this[_table$][$length]) <= dart.notNull(value);
          if (needsToGrow) this[_growTo](value);
          this[_tail$] = (dart.notNull(this[_tail$]) + delta & dart.notNull(this[_table$][$length]) - 1) >>> 0;
          if (!needsToGrow) this.fillRange(dart.notNull(value) - delta, value, this[_defaultValue]);
        } else {
          this.removeRange(value, this.length);
        }
      }
      _get(index) {
        if (index == null) dart.nullFailed(I[0], 96, 21, "index");
        core.RangeError.checkValidIndex(index, this, null, this.length);
        return this[_table$][$_get]((dart.notNull(this[_head$]) + dart.notNull(index) & dart.notNull(this[_table$][$length]) - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        if (index == null) dart.nullFailed(I[0], 101, 25, "index");
        E.as(value);
        core.RangeError.checkValidIndex(index, this);
        this[_table$][$_set]((dart.notNull(this[_head$]) + dart.notNull(index) & dart.notNull(this[_table$][$length]) - 1) >>> 0, value);
        return value$;
      }
      removeRange(start, end) {
        if (start == null) dart.nullFailed(I[0], 106, 24, "start");
        if (end == null) dart.nullFailed(I[0], 106, 35, "end");
        let length = this.length;
        core.RangeError.checkValidRange(start, end, length);
        if (start === 0) {
          this[_head$] = (dart.notNull(this[_head$]) + dart.notNull(end) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
          return;
        }
        let elementsAfter = dart.notNull(length) - dart.notNull(end);
        if (elementsAfter === 0) {
          this[_tail$] = (dart.notNull(this[_head$]) + dart.notNull(start) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
          return;
        }
        let removedElements = dart.notNull(end) - dart.notNull(start);
        if (dart.notNull(start) < elementsAfter) {
          this.setRange(removedElements, end, this);
          this[_head$] = (dart.notNull(this[_head$]) + removedElements & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        } else {
          this.setRange(start, dart.notNull(length) - removedElements, this, end);
          this[_tail$] = (dart.notNull(this[_tail$]) - removedElements & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        }
      }
      setRange(start, end, iterable, skipCount = 0) {
        if (start == null) dart.nullFailed(I[0], 135, 21, "start");
        if (end == null) dart.nullFailed(I[0], 135, 32, "end");
        IterableOfE().as(iterable);
        if (iterable == null) dart.nullFailed(I[0], 135, 49, "iterable");
        if (skipCount == null) dart.nullFailed(I[0], 135, 64, "skipCount");
        core.RangeError.checkValidRange(start, end, this.length);
        if (start == end) return;
        let targetStart = (dart.notNull(this[_head$]) + dart.notNull(start) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        let targetEnd = (dart.notNull(this[_head$]) + dart.notNull(end) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        let targetIsContiguous = targetStart < targetEnd;
        if (iterable === this) {
          let sourceStart = (dart.notNull(this[_head$]) + dart.notNull(skipCount) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
          let sourceEnd = (sourceStart + (dart.notNull(end) - dart.notNull(start)) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
          if (sourceStart === targetStart) return;
          let sourceIsContiguous = sourceStart < sourceEnd;
          if (targetIsContiguous && sourceIsContiguous) {
            this[_table$][$setRange](targetStart, targetEnd, this[_table$], sourceStart);
          } else if (!targetIsContiguous && !sourceIsContiguous) {
            if (sourceStart > targetStart) {
              let startGap = sourceStart - targetStart;
              let firstEnd = dart.notNull(this[_table$][$length]) - startGap;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, this[_table$][$length], this[_table$]);
              this[_table$][$setRange](0, targetEnd, this[_table$], startGap);
            } else if (sourceEnd < targetEnd) {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](0, firstStart, this[_table$], dart.notNull(this[_table$][$length]) - firstStart);
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            }
          } else if (sourceStart < targetEnd) {
            if (sourceIsContiguous) {
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (dart.notNull(this[_table$][$length]) - targetStart));
            } else {
              let firstEnd = dart.notNull(this[_table$][$length]) - sourceStart;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, targetEnd, this[_table$]);
            }
          } else {
            if (sourceIsContiguous) {
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (dart.notNull(this[_table$][$length]) - targetStart));
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            } else {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](targetStart, firstStart, this[_table$], sourceStart);
            }
          }
        } else if (targetIsContiguous) {
          this[_table$][$setRange](targetStart, targetEnd, iterable, skipCount);
        } else if (ListOfE().is(iterable)) {
          this[_table$][$setRange](targetStart, this[_table$][$length], iterable, skipCount);
          this[_table$][$setRange](0, targetEnd, iterable, dart.notNull(skipCount) + (dart.notNull(this[_table$][$length]) - targetStart));
        } else {
          super.setRange(start, end, iterable, skipCount);
        }
      }
      fillRange(start, end, value = null) {
        if (start == null) dart.nullFailed(I[0], 234, 22, "start");
        if (end == null) dart.nullFailed(I[0], 234, 33, "end");
        EN().as(value);
        let startInTable = (dart.notNull(this[_head$]) + dart.notNull(start) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        let endInTable = (dart.notNull(this[_head$]) + dart.notNull(end) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        if (startInTable <= endInTable) {
          this[_table$][$fillRange](startInTable, endInTable, value);
        } else {
          this[_table$][$fillRange](startInTable, this[_table$][$length], value);
          this[_table$][$fillRange](0, endInTable, value);
        }
      }
      sublist(start, end = null) {
        if (start == null) dart.nullFailed(I[0], 245, 17, "start");
        let length = this.length;
        let nonNullEnd = core.RangeError.checkValidRange(start, end, length);
        let list = this[_createList](dart.notNull(nonNullEnd) - dart.notNull(start));
        this[_writeToList](list, start, nonNullEnd);
        return list;
      }
      [_writeToList](target, start = null, end = null) {
        if (target == null) dart.nullFailed(I[0], 263, 28, "target");
        start == null ? start = 0 : null;
        end == null ? end = this.length : null;
        if (!(dart.notNull(target[$length]) >= dart.notNull(end) - dart.notNull(start))) dart.assertFailed(null, I[0], 266, 12, "target.length >= end - start");
        if (!(dart.notNull(start) <= dart.notNull(end))) dart.assertFailed(null, I[0], 267, 12, "start <= end");
        let elementsToWrite = dart.notNull(end) - dart.notNull(start);
        let startInTable = (dart.notNull(this[_head$]) + dart.notNull(start) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        let endInTable = (dart.notNull(this[_head$]) + dart.notNull(end) & dart.notNull(this[_table$][$length]) - 1) >>> 0;
        if (startInTable <= endInTable) {
          target[$setRange](0, elementsToWrite, this[_table$], startInTable);
        } else {
          let firstPartSize = dart.notNull(this[_table$][$length]) - startInTable;
          target[$setRange](0, firstPartSize, this[_table$], startInTable);
          target[$setRange](firstPartSize, firstPartSize + endInTable, this[_table$], 0);
        }
        return elementsToWrite;
      }
      [_growAtCapacity]() {
        if (!(this[_head$] == this[_tail$])) dart.assertFailed(null, I[0], 285, 12, "_head == _tail");
        let newTable = this[_createList](dart.notNull(this[_table$][$length]) * 2);
        let partitionPoint = dart.notNull(this[_table$][$length]) - dart.notNull(this[_head$]);
        newTable[$setRange](0, partitionPoint, this[_table$], this[_head$]);
        if (partitionPoint !== this[_table$][$length]) {
          newTable[$setRange](partitionPoint, this[_table$][$length], this[_table$]);
        }
        this[_head$] = 0;
        this[_tail$] = this[_table$][$length];
        this[_table$] = newTable;
      }
      [_growTo](newElementCount) {
        if (newElementCount == null) dart.nullFailed(I[0], 303, 20, "newElementCount");
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed(null, I[0], 304, 12, "newElementCount >= length");
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newTable = this[_createList](typed_queue._nextPowerOf2(newElementCount));
        this[_tail$] = this[_writeToList](newTable);
        this[_table$] = newTable;
        this[_head$] = 0;
      }
    }
    (_TypedQueue.new = function(table) {
      if (table == null) dart.nullFailed(I[0], 24, 23, "table");
      this[_table] = L.as(table);
      this[_head] = 0;
      this[_tail] = 0;
      ;
    }).prototype = _TypedQueue.prototype;
    dart.addTypeTests(_TypedQueue);
    _TypedQueue.prototype[_is__TypedQueue_default] = true;
    dart.addTypeCaches(_TypedQueue);
    dart.setMethodSignature(_TypedQueue, () => ({
      __proto__: dart.getMethods(_TypedQueue.__proto__),
      cast: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      sublist: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)], [dart.nullable(core.int), dart.nullable(core.int)]),
      [_growAtCapacity]: dart.fnType(dart.void, []),
      [_growTo]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(_TypedQueue, () => ({
      __proto__: dart.getGetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_TypedQueue, () => ({
      __proto__: dart.getSetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedQueue, I[1]);
    dart.setFieldSignature(_TypedQueue, () => ({
      __proto__: dart.getFields(_TypedQueue.__proto__),
      [_table$]: dart.fieldType(L),
      [_head$]: dart.fieldType(core.int),
      [_tail$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedQueue, [
      'toList',
      'cast',
      'removeLast',
      'add',
      '_get',
      '_set',
      'removeRange',
      'setRange',
      'fillRange',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_TypedQueue, ['length']);
    return _TypedQueue;
  });
  typed_queue._TypedQueue = typed_queue._TypedQueue$();
  dart.addTypeTests(typed_queue._TypedQueue, _is__TypedQueue_default);
  const _is__IntQueue_default = Symbol('_is__IntQueue_default');
  typed_queue._IntQueue$ = dart.generic(L => {
    class _IntQueue extends typed_queue._TypedQueue$(core.int, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_IntQueue.new = function(queue) {
      if (queue == null) dart.nullFailed(I[0], 328, 15, "queue");
      _IntQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _IntQueue.prototype;
    dart.addTypeTests(_IntQueue);
    _IntQueue.prototype[_is__IntQueue_default] = true;
    dart.addTypeCaches(_IntQueue);
    dart.setGetterSignature(_IntQueue, () => ({
      __proto__: dart.getGetters(_IntQueue.__proto__),
      [_defaultValue]: core.int
    }));
    dart.setLibraryUri(_IntQueue, I[1]);
    return _IntQueue;
  });
  typed_queue._IntQueue = typed_queue._IntQueue$();
  dart.addTypeTests(typed_queue._IntQueue, _is__IntQueue_default);
  const _is__FloatQueue_default = Symbol('_is__FloatQueue_default');
  typed_queue._FloatQueue$ = dart.generic(L => {
    class _FloatQueue extends typed_queue._TypedQueue$(core.double, L) {
      get [_defaultValue]() {
        return 0.0;
      }
    }
    (_FloatQueue.new = function(queue) {
      if (queue == null) dart.nullFailed(I[0], 335, 17, "queue");
      _FloatQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _FloatQueue.prototype;
    dart.addTypeTests(_FloatQueue);
    _FloatQueue.prototype[_is__FloatQueue_default] = true;
    dart.addTypeCaches(_FloatQueue);
    dart.setGetterSignature(_FloatQueue, () => ({
      __proto__: dart.getGetters(_FloatQueue.__proto__),
      [_defaultValue]: core.double
    }));
    dart.setLibraryUri(_FloatQueue, I[1]);
    return _FloatQueue;
  });
  typed_queue._FloatQueue = typed_queue._FloatQueue$();
  dart.addTypeTests(typed_queue._FloatQueue, _is__FloatQueue_default);
  var _head$0 = dart.privateName(queue_list, "_head");
  var _writeToList$ = dart.privateName(queue_list, "_writeToList");
  var _add = dart.privateName(typed_queue, "_add");
  var _add$ = dart.privateName(queue_list, "_add");
  var _grow = dart.privateName(typed_queue, "_grow");
  var _grow$ = dart.privateName(queue_list, "_grow");
  var _table$0 = dart.privateName(queue_list, "_table");
  var _tail$0 = dart.privateName(queue_list, "_tail");
  var _preGrow = dart.privateName(typed_queue, "_preGrow");
  var _preGrow$ = dart.privateName(queue_list, "_preGrow");
  var _head_ = dart.privateName(typed_queue, "_head=");
  var _table_ = dart.privateName(typed_queue, "_table=");
  var _tail_ = dart.privateName(typed_queue, "_tail=");
  typed_queue.Uint8Queue = class Uint8Queue extends typed_queue._IntQueue$(typed_data.Uint8List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 354, 41, "elements");
      t0 = new typed_queue.Uint8Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 357, 29, "size");
      return _native_typed_data.NativeUint8List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 358, 33, "size");
      return new typed_buffer.Uint8Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 347, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 347, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 347, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 347, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 347, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 347, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint8Queue.new = function(initialCapacity = null) {
    typed_queue.Uint8Queue.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8Queue.prototype;
  dart.addTypeTests(typed_queue.Uint8Queue);
  dart.addTypeCaches(typed_queue.Uint8Queue);
  typed_queue.Uint8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8Queue, I[1]);
  typed_queue.Int8Queue = class Int8Queue extends typed_queue._IntQueue$(typed_data.Int8List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 376, 40, "elements");
      t0 = new typed_queue.Int8Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 379, 28, "size");
      return _native_typed_data.NativeInt8List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 380, 32, "size");
      return new typed_buffer.Int8Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 369, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 369, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 369, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 369, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 369, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 369, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int8Queue.new = function(initialCapacity = null) {
    typed_queue.Int8Queue.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int8Queue.prototype;
  dart.addTypeTests(typed_queue.Int8Queue);
  dart.addTypeCaches(typed_queue.Int8Queue);
  typed_queue.Int8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int8Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int8Queue, I[1]);
  typed_queue.Uint8ClampedQueue = class Uint8ClampedQueue extends typed_queue._IntQueue$(typed_data.Uint8ClampedList) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 400, 48, "elements");
      t0 = new typed_queue.Uint8ClampedQueue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 403, 36, "size");
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 404, 40, "size");
      return new typed_buffer.Uint8ClampedBuffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 391, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 391, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 391, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 391, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 391, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 391, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint8ClampedQueue.new = function(initialCapacity = null) {
    typed_queue.Uint8ClampedQueue.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8ClampedQueue.prototype;
  dart.addTypeTests(typed_queue.Uint8ClampedQueue);
  dart.addTypeCaches(typed_queue.Uint8ClampedQueue);
  typed_queue.Uint8ClampedQueue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8ClampedQueue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8ClampedList, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8ClampedBuffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8ClampedQueue, I[1]);
  typed_queue.Uint16Queue = class Uint16Queue extends typed_queue._IntQueue$(typed_data.Uint16List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 421, 42, "elements");
      t0 = new typed_queue.Uint16Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 424, 30, "size");
      return _native_typed_data.NativeUint16List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 425, 34, "size");
      return new typed_buffer.Uint16Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 414, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 414, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 414, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 414, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 414, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 414, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint16Queue.new = function(initialCapacity = null) {
    typed_queue.Uint16Queue.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint16Queue.prototype;
  dart.addTypeTests(typed_queue.Uint16Queue);
  dart.addTypeCaches(typed_queue.Uint16Queue);
  typed_queue.Uint16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint16Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint16Queue, I[1]);
  typed_queue.Int16Queue = class Int16Queue extends typed_queue._IntQueue$(typed_data.Int16List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 443, 41, "elements");
      t0 = new typed_queue.Int16Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 446, 29, "size");
      return _native_typed_data.NativeInt16List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 447, 33, "size");
      return new typed_buffer.Int16Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 436, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 436, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 436, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 436, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 436, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 436, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int16Queue.new = function(initialCapacity = null) {
    typed_queue.Int16Queue.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int16Queue.prototype;
  dart.addTypeTests(typed_queue.Int16Queue);
  dart.addTypeCaches(typed_queue.Int16Queue);
  typed_queue.Int16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int16Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int16Queue, I[1]);
  typed_queue.Uint32Queue = class Uint32Queue extends typed_queue._IntQueue$(typed_data.Uint32List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 464, 42, "elements");
      t0 = new typed_queue.Uint32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 467, 30, "size");
      return _native_typed_data.NativeUint32List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 468, 34, "size");
      return new typed_buffer.Uint32Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 457, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 457, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 457, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 457, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 457, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 457, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint32Queue.new = function(initialCapacity = null) {
    typed_queue.Uint32Queue.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint32Queue.prototype;
  dart.addTypeTests(typed_queue.Uint32Queue);
  dart.addTypeCaches(typed_queue.Uint32Queue);
  typed_queue.Uint32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint32Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint32Queue, I[1]);
  typed_queue.Int32Queue = class Int32Queue extends typed_queue._IntQueue$(typed_data.Int32List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 486, 41, "elements");
      t0 = new typed_queue.Int32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 489, 29, "size");
      return _native_typed_data.NativeInt32List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 490, 33, "size");
      return new typed_buffer.Int32Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 479, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 479, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 479, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 479, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 479, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 479, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int32Queue.new = function(initialCapacity = null) {
    typed_queue.Int32Queue.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32Queue.prototype;
  dart.addTypeTests(typed_queue.Int32Queue);
  dart.addTypeCaches(typed_queue.Int32Queue);
  typed_queue.Int32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32Queue, I[1]);
  typed_queue.Uint64Queue = class Uint64Queue extends typed_queue._IntQueue$(typed_data.Uint64List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 508, 42, "elements");
      t0 = new typed_queue.Uint64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 511, 30, "size");
      return typed_data.Uint64List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 512, 34, "size");
      return new typed_buffer.Uint64Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 501, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 501, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 501, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 501, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 501, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 501, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint64Queue.new = function(initialCapacity = null) {
    typed_queue.Uint64Queue.__proto__.new.call(this, typed_data.Uint64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint64Queue.prototype;
  dart.addTypeTests(typed_queue.Uint64Queue);
  dart.addTypeCaches(typed_queue.Uint64Queue);
  typed_queue.Uint64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint64Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint64Queue, I[1]);
  typed_queue.Int64Queue = class Int64Queue extends typed_queue._IntQueue$(typed_data.Int64List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 530, 41, "elements");
      t0 = new typed_queue.Int64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 533, 29, "size");
      return typed_data.Int64List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 534, 33, "size");
      return new typed_buffer.Int64Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      if (target == null) dart.nullFailed(I[0], 523, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      if (element == null) dart.nullFailed(I[0], 523, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 523, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 523, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      if (value == null) dart.nullFailed(I[0], 523, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 523, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int64Queue.new = function(initialCapacity = null) {
    typed_queue.Int64Queue.__proto__.new.call(this, typed_data.Int64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int64Queue.prototype;
  dart.addTypeTests(typed_queue.Int64Queue);
  dart.addTypeCaches(typed_queue.Int64Queue);
  typed_queue.Int64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int64Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int64Queue, I[1]);
  typed_queue.Float32Queue = class Float32Queue extends typed_queue._FloatQueue$(typed_data.Float32List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 553, 46, "elements");
      t0 = new typed_queue.Float32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 556, 31, "size");
      return _native_typed_data.NativeFloat32List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 557, 35, "size");
      return new typed_buffer.Float32Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfdoubleN().as(target);
      if (target == null) dart.nullFailed(I[0], 545, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.double.as(element);
      if (element == null) dart.nullFailed(I[0], 545, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 545, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 545, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfdoubleN().as(value);
      if (value == null) dart.nullFailed(I[0], 545, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 545, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Float32Queue.new = function(initialCapacity = null) {
    typed_queue.Float32Queue.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32Queue.prototype;
  dart.addTypeTests(typed_queue.Float32Queue);
  dart.addTypeCaches(typed_queue.Float32Queue);
  typed_queue.Float32Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32Queue, I[1]);
  typed_queue.Float64Queue = class Float64Queue extends typed_queue._FloatQueue$(typed_data.Float64List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 573, 46, "elements");
      t0 = new typed_queue.Float64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 576, 31, "size");
      return _native_typed_data.NativeFloat64List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 577, 35, "size");
      return new typed_buffer.Float64Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfdoubleN().as(target);
      if (target == null) dart.nullFailed(I[0], 565, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.double.as(element);
      if (element == null) dart.nullFailed(I[0], 565, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 565, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 565, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfdoubleN().as(value);
      if (value == null) dart.nullFailed(I[0], 565, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 565, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Float64Queue.new = function(initialCapacity = null) {
    typed_queue.Float64Queue.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float64Queue.prototype;
  dart.addTypeTests(typed_queue.Float64Queue);
  dart.addTypeCaches(typed_queue.Float64Queue);
  typed_queue.Float64Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float64Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float64Queue, I[1]);
  typed_queue.Int32x4Queue = class Int32x4Queue extends typed_queue._TypedQueue$(typed_data.Int32x4, typed_data.Int32x4List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 594, 47, "elements");
      t0 = new typed_queue.Int32x4Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 597, 31, "size");
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 598, 35, "size");
      return new typed_buffer.Int32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return typed_queue.Int32x4Queue._zero;
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfInt32x4N().as(target);
      if (target == null) dart.nullFailed(I[0], 584, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      typed_data.Int32x4.as(element);
      if (element == null) dart.nullFailed(I[0], 584, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfInt32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 584, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 584, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfInt32x4N().as(value);
      if (value == null) dart.nullFailed(I[0], 584, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 584, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Int32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Int32x4Queue);
  dart.addTypeCaches(typed_queue.Int32x4Queue);
  typed_queue.Int32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Int32x4)];
  dart.setMethodSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32x4Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32x4Queue.__proto__),
    [_defaultValue]: typed_data.Int32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32x4Queue, I[1]);
  dart.defineLazy(typed_queue.Int32x4Queue, {
    /*typed_queue.Int32x4Queue._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_queue.Float32x4Queue = class Float32x4Queue extends typed_queue._TypedQueue$(typed_data.Float32x4, typed_data.Float32x4List) {
    static fromList(elements) {
      let t0;
      if (elements == null) dart.nullFailed(I[0], 614, 51, "elements");
      t0 = new typed_queue.Float32x4Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      if (size == null) dart.nullFailed(I[0], 617, 33, "size");
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
    [_createBuffer](size) {
      if (size == null) dart.nullFailed(I[0], 618, 37, "size");
      return new typed_buffer.Float32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfFloat32x4N().as(target);
      if (target == null) dart.nullFailed(I[0], 606, 7, "target");
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      typed_data.Float32x4.as(element);
      if (element == null) dart.nullFailed(I[0], 606, 7, "element");
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfFloat32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      if (newElementCount == null) dart.nullFailed(I[0], 606, 7, "newElementCount");
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      if (value == null) dart.nullFailed(I[0], 606, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfFloat32x4N().as(value);
      if (value == null) dart.nullFailed(I[0], 606, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      if (value == null) dart.nullFailed(I[0], 606, 7, "value");
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Float32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Float32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Float32x4Queue);
  dart.addTypeCaches(typed_queue.Float32x4Queue);
  typed_queue.Float32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Float32x4)];
  dart.setMethodSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32x4Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32x4Queue.__proto__),
    [_defaultValue]: typed_data.Float32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32x4Queue, I[1]);
  typed_queue._chooseRealInitialCapacity = function _chooseRealInitialCapacity(initialCapacity) {
    if (initialCapacity == null || dart.notNull(initialCapacity) < 16) {
      return 16;
    } else if (!dart.test(typed_queue._isPowerOf2(initialCapacity))) {
      return typed_queue._nextPowerOf2(initialCapacity);
    } else {
      return initialCapacity;
    }
  };
  typed_queue._isPowerOf2 = function _isPowerOf2(number) {
    if (number == null) dart.nullFailed(I[0], 640, 22, "number");
    return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
  };
  typed_queue._nextPowerOf2 = function _nextPowerOf2(number) {
    if (number == null) dart.nullFailed(I[0], 647, 23, "number");
    if (!(dart.notNull(number) > 0)) dart.assertFailed(null, I[0], 648, 10, "number > 0");
    number = (dart.notNull(number) << 1 >>> 0) - 1;
    for (;;) {
      let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
      if (nextNumber === 0) return number;
      number = nextNumber;
    }
  };
  dart.defineLazy(typed_queue, {
    /*typed_queue._defaultInitialCapacity*/get _defaultInitialCapacity() {
      return 16;
    }
  }, false);
  dart.trackLibraries("packages/typed_data/src/typed_queue", {
    "package:typed_data/typed_data.dart": typed_data$,
    "package:typed_data/src/typed_queue.dart": typed_queue
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_queue.dart"],"names":[],"mappings":"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","file":"typed_queue.unsound.ddc.js"}');
  // Exports:
  return {
    typed_data: typed_data$,
    src__typed_queue: typed_queue
  };
}));

//# sourceMappingURL=typed_queue.unsound.ddc.js.map
