define(['dart_sdk'], (function load__packages__redux__redux(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var store = Object.create(dart.library);
  var redux = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var $add = dartx.add;
  var $reversed = dartx.reversed;
  var $last = dartx.last;
  var $toList = dartx.toList;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    StoreOfObjectL: () => (T.StoreOfObjectL = dart.constFn(store.Store$(T.ObjectL())))(),
    StoreLOfObjectL: () => (T.StoreLOfObjectL = dart.constFn(dart.legacy(T.StoreOfObjectL())))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    dynamicToLdynamic: () => (T.dynamicToLdynamic = dart.constFn(dart.legacy(T.dynamicTodynamic())))(),
    StoreLOfObjectLAnddynamicAndFnTodynamic: () => (T.StoreLOfObjectLAnddynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.StoreLOfObjectL(), dart.dynamic, T.dynamicToLdynamic()])))(),
    StoreLOfObjectLAnddynamicAndFnToLdynamic: () => (T.StoreLOfObjectLAnddynamicAndFnToLdynamic = dart.constFn(dart.legacy(T.StoreLOfObjectLAnddynamicAndFnTodynamic())))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    JSArrayOfdynamicToLdynamic: () => (T.JSArrayOfdynamicToLdynamic = dart.constFn(_interceptors.JSArray$(T.dynamicToLdynamic())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], T.StoreLOfObjectLAnddynamicAndFnToLdynamic());
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:redux/src/store.dart",
    "package:redux/src/utils.dart"
  ];
  const _is_ReducerClass_default = Symbol('_is_ReducerClass_default');
  store.ReducerClass$ = dart.generic(State => {
    class ReducerClass extends core.Object {}
    (ReducerClass.new = function() {
      ;
    }).prototype = ReducerClass.prototype;
    dart.addTypeTests(ReducerClass);
    ReducerClass.prototype[_is_ReducerClass_default] = true;
    dart.addTypeCaches(ReducerClass);
    dart.setLibraryUri(ReducerClass, I[0]);
    return ReducerClass;
  });
  store.ReducerClass = store.ReducerClass$();
  dart.addTypeTests(store.ReducerClass, _is_ReducerClass_default);
  const _is_MiddlewareClass_default = Symbol('_is_MiddlewareClass_default');
  store.MiddlewareClass$ = dart.generic(State => {
    class MiddlewareClass extends core.Object {}
    (MiddlewareClass.new = function() {
      ;
    }).prototype = MiddlewareClass.prototype;
    dart.addTypeTests(MiddlewareClass);
    MiddlewareClass.prototype[_is_MiddlewareClass_default] = true;
    dart.addTypeCaches(MiddlewareClass);
    dart.setLibraryUri(MiddlewareClass, I[0]);
    return MiddlewareClass;
  });
  store.MiddlewareClass = store.MiddlewareClass$();
  dart.addTypeTests(store.MiddlewareClass, _is_MiddlewareClass_default);
  var reducer$ = dart.privateName(store, "Store.reducer");
  var _state = dart.privateName(store, "_state");
  var _dispatchers = dart.privateName(store, "_dispatchers");
  var _changeController = dart.privateName(store, "_changeController");
  var _createReduceAndNotify = dart.privateName(store, "_createReduceAndNotify");
  var _createDispatchers = dart.privateName(store, "_createDispatchers");
  const _is_Store_default = Symbol('_is_Store_default');
  store.Store$ = dart.generic(State => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StreamControllerOfStateL = () => (StreamControllerOfStateL = dart.constFn(async.StreamController$(StateL())))();
    var StateLAnddynamicToStateL = () => (StateLAnddynamicToStateL = dart.constFn(dart.fnType(StateL(), [StateL(), dart.dynamic])))();
    var StateLAnddynamicToLStateL = () => (StateLAnddynamicToLStateL = dart.constFn(dart.legacy(StateLAnddynamicToStateL())))();
    class Store extends core.Object {
      get reducer() {
        return this[reducer$];
      }
      set reducer(value) {
        this[reducer$] = StateLAnddynamicToLStateL().as(value);
      }
      get state() {
        return this[_state];
      }
      get onChange() {
        return this[_changeController].stream;
      }
      [_createReduceAndNotify](distinct) {
        return dart.fn(action => {
          let t1, t0;
          let state = (t0 = this[_state], t1 = action, this.reducer(t0, t1));
          if (dart.test(distinct) && dart.equals(state, this[_state])) return;
          this[_state] = state;
          this[_changeController].add(state);
        }, T.dynamicToNull());
      }
      [_createDispatchers](middleware, reduceAndNotify) {
        let t0;
        let dispatchers = (t0 = T.JSArrayOfdynamicToLdynamic().of([]), (() => {
          t0[$add](reduceAndNotify);
          return t0;
        })());
        for (let nextMiddleware of middleware[$reversed]) {
          let next = dispatchers[$last];
          dispatchers[$add](dart.fn(action => nextMiddleware(this, action, next), T.dynamicTodynamic()));
        }
        return dispatchers[$reversed][$toList]();
      }
      dispatch(action) {
        return this[_dispatchers][$_get](0)(action);
      }
      teardown() {
        return async.async(dart.dynamic, (function* teardown() {
          this[_state] = null;
          return this[_changeController].close();
        }).bind(this));
      }
    }
    (Store.new = function(reducer, opts) {
      let initialState = opts && 'initialState' in opts ? opts.initialState : null;
      let middleware = opts && 'middleware' in opts ? opts.middleware : C[0] || CT.C0;
      let syncStream = opts && 'syncStream' in opts ? opts.syncStream : false;
      let distinct = opts && 'distinct' in opts ? opts.distinct : false;
      this[_state] = null;
      this[_dispatchers] = null;
      this[reducer$] = reducer;
      this[_changeController] = StreamControllerOfStateL().broadcast({sync: syncStream});
      this[_state] = initialState;
      this[_dispatchers] = this[_createDispatchers](middleware, this[_createReduceAndNotify](distinct));
    }).prototype = Store.prototype;
    dart.addTypeTests(Store);
    Store.prototype[_is_Store_default] = true;
    dart.addTypeCaches(Store);
    dart.setMethodSignature(Store, () => ({
      __proto__: dart.getMethods(Store.__proto__),
      [_createReduceAndNotify]: dart.fnType(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])), [dart.legacy(core.bool)]),
      [_createDispatchers]: dart.fnType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])))), [dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(store.Store$(dart.legacy(State))), dart.dynamic, dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])))), dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))]),
      dispatch: dart.fnType(dart.dynamic, [dart.dynamic]),
      teardown: dart.fnType(dart.legacy(async.Future), [])
    }));
    dart.setGetterSignature(Store, () => ({
      __proto__: dart.getGetters(Store.__proto__),
      state: dart.legacy(State),
      onChange: dart.legacy(async.Stream$(dart.legacy(State)))
    }));
    dart.setLibraryUri(Store, I[0]);
    dart.setFieldSignature(Store, () => ({
      __proto__: dart.getFields(Store.__proto__),
      reducer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(State), [dart.legacy(State), dart.dynamic]))),
      [_changeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(State)))),
      [_state]: dart.fieldType(dart.legacy(State)),
      [_dispatchers]: dart.fieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])))))
    }));
    return Store;
  });
  store.Store = store.Store$();
  dart.addTypeTests(store.Store, _is_Store_default);
  var reducer$0 = dart.privateName(utils, "TypedReducer.reducer");
  const _is_TypedReducer_default = Symbol('_is_TypedReducer_default');
  utils.TypedReducer$ = dart.generic((State, Action) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var ActionL = () => (ActionL = dart.constFn(dart.legacy(Action)))();
    class TypedReducer extends core.Object {
      get reducer() {
        return this[reducer$0];
      }
      set reducer(value) {
        super.reducer = value;
      }
      call(state, action) {
        let t1, t0;
        StateL().as(state);
        if (ActionL().is(action)) {
          t0 = state;
          t1 = action;
          return this.reducer(t0, t1);
        }
        return state;
      }
    }
    (TypedReducer.new = function(reducer) {
      this[reducer$0] = reducer;
      ;
    }).prototype = TypedReducer.prototype;
    dart.addTypeTests(TypedReducer);
    TypedReducer.prototype[_is_TypedReducer_default] = true;
    dart.addTypeCaches(TypedReducer);
    TypedReducer[dart.implements] = () => [store.ReducerClass$(dart.legacy(State))];
    dart.setMethodSignature(TypedReducer, () => ({
      __proto__: dart.getMethods(TypedReducer.__proto__),
      call: dart.fnType(dart.legacy(State), [dart.legacy(core.Object), dart.dynamic])
    }));
    dart.setLibraryUri(TypedReducer, I[1]);
    dart.setFieldSignature(TypedReducer, () => ({
      __proto__: dart.getFields(TypedReducer.__proto__),
      reducer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(State), [dart.legacy(State), dart.legacy(Action)])))
    }));
    return TypedReducer;
  });
  utils.TypedReducer = utils.TypedReducer$();
  dart.addTypeTests(utils.TypedReducer, _is_TypedReducer_default);
  var middleware$ = dart.privateName(utils, "TypedMiddleware.middleware");
  const _is_TypedMiddleware_default = Symbol('_is_TypedMiddleware_default');
  utils.TypedMiddleware$ = dart.generic((State, Action) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StoreOfStateL = () => (StoreOfStateL = dart.constFn(store.Store$(StateL())))();
    var StoreLOfStateL = () => (StoreLOfStateL = dart.constFn(dart.legacy(StoreOfStateL())))();
    var ActionL = () => (ActionL = dart.constFn(dart.legacy(Action)))();
    class TypedMiddleware extends core.Object {
      get middleware() {
        return this[middleware$];
      }
      set middleware(value) {
        super.middleware = value;
      }
      call(store, action, next) {
        let t2, t1, t0;
        StoreLOfStateL().as(store);
        if (ActionL().is(action)) {
          t0 = store;
          t1 = action;
          t2 = next;
          return this.middleware(t0, t1, t2);
        } else {
          return next(action);
        }
      }
    }
    (TypedMiddleware.new = function(middleware) {
      this[middleware$] = middleware;
      ;
    }).prototype = TypedMiddleware.prototype;
    dart.addTypeTests(TypedMiddleware);
    TypedMiddleware.prototype[_is_TypedMiddleware_default] = true;
    dart.addTypeCaches(TypedMiddleware);
    TypedMiddleware[dart.implements] = () => [store.MiddlewareClass$(dart.legacy(State))];
    dart.setMethodSignature(TypedMiddleware, () => ({
      __proto__: dart.getMethods(TypedMiddleware.__proto__),
      call: dart.fnType(dart.dynamic, [dart.legacy(core.Object), dart.dynamic, dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])
    }));
    dart.setLibraryUri(TypedMiddleware, I[1]);
    dart.setFieldSignature(TypedMiddleware, () => ({
      __proto__: dart.getFields(TypedMiddleware.__proto__),
      middleware: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(store.Store$(dart.legacy(State))), dart.legacy(Action), dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])))
    }));
    return TypedMiddleware;
  });
  utils.TypedMiddleware = utils.TypedMiddleware$();
  dart.addTypeTests(utils.TypedMiddleware, _is_TypedMiddleware_default);
  utils.combineReducers = function combineReducers(State, reducers) {
    return dart.fn((state, action) => {
      for (let reducer of reducers) {
        state = reducer(state, action);
      }
      return state;
    }, dart.fnType(dart.legacy(State), [dart.legacy(State), dart.dynamic]));
  };
  dart.trackLibraries("packages/redux/redux", {
    "package:redux/src/store.dart": store,
    "package:redux/redux.dart": redux,
    "package:redux/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/store.dart","src/utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkDA;;;;;;;;;;;;;;IAsDA;;;;;;;;;;;;;;;;;;;;;;MAsDiB;;;;;;;AA2CI;MAAM;;AAwBK,cAAA,AAAkB;MAAM;+BAOX;AACzC,cAAO,SAAS;;AACR,4BAAgB,mBAAQ,MAAM,EAAtB,AAAO;AAErB,wBAAI,QAAQ,KAAU,YAAN,KAAK,EAAI,eAAQ;AAEnB,UAAd,eAAS,KAAK;AACc,UAA5B,AAAkB,4BAAI,KAAK;;MAE/B;2BAG0B,YACT;;AAET,uEAA8B;AAAI,mBAAI,eAAe;;;AAG3D,iBAAS,iBAAkB,AAAW,WAAD;AAC7B,qBAAO,AAAY,WAAD;AAIvB,UAFD,AAAY,WAAD,OACT,QAAS,UAAW,AAAc,cAAA,CAAC,MAAM,MAAM,EAAE,IAAI;;AAIzD,cAAO,AAAY,AAAS,YAAV;MACpB;eAMyB;AACvB,cAAO,AAAY,AAAG,2BAAF,GAAG,MAAM;MAC/B;;AAMe;AACA,UAAb,eAAS;AACT,gBAAO,AAAkB;QAC3B;;;0BAhGO;UACC;UACkB;UACnB;UAQA;MA9BD;MACe;MAkBd;MAYgB,0BAAmB,4CAAgB,UAAU;AAC7C,MAArB,eAAS,YAAY;AAIpB,MAHD,qBAAe,yBACb,UAAU,EACV,6BAAuB,QAAQ;IAEnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCjGiD;;;;;;WAOhC,OAAe;;oBAAf;AACf,YAAW,aAAP,MAAM;AACR,eAAe,KAAK;eAAE,MAAM;gBAArB,AAAO;;AAGhB,cAAO,MAAK;MACd;;;MATkB;;IAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;MAkHxB;;;;;;WAOwB,OAAe,QAAuB;;4BAAtC;AACxB,YAAW,aAAP,MAAM;AACR,eAAkB,KAAK;eAAE,MAAM;eAAE,IAAI;gBAA9B,AAAU;;AAEjB,gBAAO,AAAI,KAAA,CAAC,MAAM;;MAEtB;;;MATqB;;IAAW;;;;;;;;;;;;;;;;;;0DAgC6B;AAC7D,UAAO,UAAO,OAAe;AAC3B,eAAW,UAAW,SAAQ;AACE,QAA9B,QAAQ,AAAO,OAAA,CAAC,KAAK,EAAE,MAAM;;AAE/B,YAAO,MAAK;;EAEhB","file":"redux.unsound.ddc.js"}');
  // Exports:
  return {
    src__store: store,
    redux: redux,
    src__utils: utils
  };
}));

//# sourceMappingURL=redux.unsound.ddc.js.map
