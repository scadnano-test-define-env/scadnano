define(['dart_sdk', 'packages/redux/redux'], (function load__packages__redux_dev_tools__redux_dev_tools(dart_sdk, packages__redux__redux) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const store = packages__redux__redux.src__store;
  var state$ = Object.create(dart.library);
  var actions = Object.create(dart.library);
  var store$ = Object.create(dart.library);
  var reducer = Object.create(dart.library);
  var middleware = Object.create(dart.library);
  var redux_dev_tools = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var $sublist = dartx.sublist;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    DevToolsStateL: () => (T.DevToolsStateL = dart.constFn(dart.legacy(state$.DevToolsState)))(),
    DevToolsActionL: () => (T.DevToolsActionL = dart.constFn(dart.legacy(actions.DevToolsAction)))(),
    DevToolsActionTypesL: () => (T.DevToolsActionTypesL = dart.constFn(dart.legacy(actions.DevToolsActionTypes)))(),
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    StoreOfObjectL: () => (T.StoreOfObjectL = dart.constFn(store.Store$(T.ObjectL())))(),
    StoreLOfObjectL: () => (T.StoreLOfObjectL = dart.constFn(dart.legacy(T.StoreOfObjectL())))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    dynamicToLdynamic: () => (T.dynamicToLdynamic = dart.constFn(dart.legacy(T.dynamicTodynamic())))(),
    StoreLOfObjectLAnddynamicAndFnTodynamic: () => (T.StoreLOfObjectLAnddynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.StoreLOfObjectL(), dart.dynamic, T.dynamicToLdynamic()])))(),
    StoreLOfObjectLAnddynamicAndFnToLdynamic: () => (T.StoreLOfObjectLAnddynamicAndFnToLdynamic = dart.constFn(dart.legacy(T.StoreLOfObjectLAnddynamicAndFnTodynamic())))(),
    intL: () => (T.intL = dart.constFn(dart.legacy(core.int)))(),
    ListOfdynamicToLdynamic: () => (T.ListOfdynamicToLdynamic = dart.constFn(core.List$(T.dynamicToLdynamic())))(),
    ListLOfdynamicToLdynamic: () => (T.ListLOfdynamicToLdynamic = dart.constFn(dart.legacy(T.ListOfdynamicToLdynamic())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.PerformAction",
        index: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.JumpToState",
        index: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.Save",
        index: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.Reset",
        index: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.Recompute",
        index: 4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.ToggleAction",
        index: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: actions.DevToolsActionTypes.prototype,
        [_name$]: "DevToolsActionTypes.Init",
        index: 6
      });
    },
    get C7() {
      return C[7] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6], T.DevToolsActionTypesL());
    },
    get C8() {
      return C[8] = dart.constList([], T.StoreLOfObjectLAnddynamicAndFnToLdynamic());
    },
    get C9() {
      return C[9] = dart.const(new _js_helper.PrivateSymbol.new('_state', _state));
    },
    get C10() {
      return C[10] = dart.const(new _js_helper.PrivateSymbol.new('_changeController', _changeController));
    },
    get C11() {
      return C[11] = dart.const(new _js_helper.PrivateSymbol.new('_createReduceAndNotify', _createReduceAndNotify));
    },
    get C12() {
      return C[12] = dart.const(new _js_helper.PrivateSymbol.new('_dispatchers', _dispatchers));
    },
    get C13() {
      return C[13] = dart.const(new _js_helper.PrivateSymbol.new('_createDispatchers', _createDispatchers));
    },
    get C14() {
      return C[14] = dart.const(new _js_helper.PrivateSymbol.new('_state=', _state_));
    },
    get C15() {
      return C[15] = dart.const(new _js_helper.PrivateSymbol.new('_dispatchers=', _dispatchers_));
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = [
    "package:redux_dev_tools/src/state.dart",
    "package:redux_dev_tools/src/actions.dart",
    "package:redux_dev_tools/src/store.dart",
    "org-dartlang-app:///packages/redux_dev_tools/src/reducer.dart",
    "package:redux_dev_tools/src/reducer.dart",
    "package:redux_dev_tools/src/middleware.dart"
  ];
  var computedStates$ = dart.privateName(state$, "DevToolsState.computedStates");
  var stagedActions$ = dart.privateName(state$, "DevToolsState.stagedActions");
  var currentPosition$ = dart.privateName(state$, "DevToolsState.currentPosition");
  const _is_DevToolsState_default = Symbol('_is_DevToolsState_default');
  state$.DevToolsState$ = dart.generic(S => {
    class DevToolsState extends core.Object {
      get computedStates() {
        return this[computedStates$];
      }
      set computedStates(value) {
        super.computedStates = value;
      }
      get stagedActions() {
        return this[stagedActions$];
      }
      set stagedActions(value) {
        super.stagedActions = value;
      }
      get currentPosition() {
        return this[currentPosition$];
      }
      set currentPosition(value) {
        super.currentPosition = value;
      }
      static fromApp(state, devToolsAction, computedStates, stagedActions, appReducer) {
        let t0, t0$;
        let newStates = (t0 = _interceptors.JSArray$(dart.legacy(S)).of([]), (() => {
          t0[$addAll](computedStates);
          return t0;
        })());
        let newActions = (t0$ = [], (() => {
          t0$[$addAll](stagedActions);
          return t0$;
        })());
        newStates[$add](appReducer(state.currentAppState, devToolsAction.appAction));
        newActions[$add](devToolsAction.appAction);
        return new (state$.DevToolsState$(dart.legacy(S))).new(newStates, newActions, dart.notNull(newStates[$length]) - 1);
      }
      get savedState() {
        return this.computedStates[$_get](0);
      }
      get currentAppState() {
        return this.computedStates[$_get](this.currentPosition);
      }
      get latestAction() {
        return this.stagedActions[$_get](this.currentPosition);
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || T.DevToolsStateL().is(other) && dart.equals(this.runtimeType, dart.runtimeType(other)) && dart.equals(this.computedStates, other.computedStates) && dart.equals(this.stagedActions, other.stagedActions) && this.currentPosition == other.currentPosition;
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.computedStates)) ^ dart.notNull(dart.hashCode(this.stagedActions)) ^ dart.hashCode(this.currentPosition)) >>> 0;
      }
      toString() {
        return "DevToolsState{\n" + ("  computedStates: " + dart.str(this.computedStates) + ",\n") + ("  stagedActions: " + dart.str(this.stagedActions) + ",\n") + ("  currentPosition: " + dart.str(this.currentPosition) + ",\n") + ("  currentAppState: " + dart.str(this.currentAppState) + ",\n") + ("  savedState: " + dart.str(this.savedState) + "\n") + "}";
      }
    }
    (DevToolsState.new = function(computedStates, stagedActions, currentPosition) {
      this[computedStates$] = computedStates;
      this[stagedActions$] = stagedActions;
      this[currentPosition$] = currentPosition;
      ;
    }).prototype = DevToolsState.prototype;
    dart.addTypeTests(DevToolsState);
    DevToolsState.prototype[_is_DevToolsState_default] = true;
    dart.addTypeCaches(DevToolsState);
    dart.setMethodSignature(DevToolsState, () => ({
      __proto__: dart.getMethods(DevToolsState.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(DevToolsState, () => ({
      __proto__: dart.getGetters(DevToolsState.__proto__),
      savedState: dart.legacy(S),
      currentAppState: dart.legacy(S),
      latestAction: dart.dynamic,
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(DevToolsState, I[0]);
    dart.setFieldSignature(DevToolsState, () => ({
      __proto__: dart.getFields(DevToolsState.__proto__),
      computedStates: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(S)))),
      stagedActions: dart.finalFieldType(dart.legacy(core.List)),
      currentPosition: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(DevToolsState, ['_equals', 'toString']);
    dart.defineExtensionAccessors(DevToolsState, ['hashCode']);
    return DevToolsState;
  });
  state$.DevToolsState = state$.DevToolsState$();
  dart.addTypeTests(state$.DevToolsState, _is_DevToolsState_default);
  var type$ = dart.privateName(actions, "DevToolsAction.type");
  var appAction$ = dart.privateName(actions, "DevToolsAction.appAction");
  var position$ = dart.privateName(actions, "DevToolsAction.position");
  actions.DevToolsAction = class DevToolsAction extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get appAction() {
      return this[appAction$];
    }
    set appAction(value) {
      super.appAction = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    static perform(appAction) {
      return new actions.DevToolsAction.__(actions.DevToolsActionTypes.PerformAction, appAction, null);
    }
    static jumpToState(index) {
      return new actions.DevToolsAction.__(actions.DevToolsActionTypes.JumpToState, null, index);
    }
    static save() {
      return new actions.DevToolsAction.__(actions.DevToolsActionTypes.Save, null, null);
    }
    static reset() {
      return new actions.DevToolsAction.__(actions.DevToolsActionTypes.Reset, null, null);
    }
    static recompute() {
      return new actions.DevToolsAction.__(actions.DevToolsActionTypes.Recompute, null, null);
    }
    static init() {
      return new actions.DevToolsAction.__(actions.DevToolsActionTypes.Init, null, null);
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || T.DevToolsActionL().is(other) && dart.equals(this.runtimeType, dart.runtimeType(other)) && this.type == other.type && dart.equals(this.appAction, other.appAction) && this.position == other.position;
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.type)) ^ dart.notNull(dart.hashCode(this.appAction)) ^ dart.hashCode(this.position)) >>> 0;
    }
    toString() {
      return "DevToolsAction{type: " + dart.str(this.type) + ", appAction: " + dart.str(this.appAction) + ", position: " + dart.str(this.position) + "}";
    }
  };
  (actions.DevToolsAction.__ = function(type, appAction, position) {
    this[type$] = type;
    this[appAction$] = appAction;
    this[position$] = position;
    ;
  }).prototype = actions.DevToolsAction.prototype;
  dart.addTypeTests(actions.DevToolsAction);
  dart.addTypeCaches(actions.DevToolsAction);
  dart.setMethodSignature(actions.DevToolsAction, () => ({
    __proto__: dart.getMethods(actions.DevToolsAction.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(actions.DevToolsAction, () => ({
    __proto__: dart.getGetters(actions.DevToolsAction.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(actions.DevToolsAction, I[1]);
  dart.setFieldSignature(actions.DevToolsAction, () => ({
    __proto__: dart.getFields(actions.DevToolsAction.__proto__),
    type: dart.finalFieldType(dart.legacy(actions.DevToolsActionTypes)),
    appAction: dart.finalFieldType(dart.dynamic),
    position: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(actions.DevToolsAction, ['_equals', 'toString']);
  dart.defineExtensionAccessors(actions.DevToolsAction, ['hashCode']);
  var _name$ = dart.privateName(actions, "_name");
  actions.DevToolsActionTypes = class DevToolsActionTypes extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (actions.DevToolsActionTypes.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = actions.DevToolsActionTypes.prototype;
  dart.addTypeTests(actions.DevToolsActionTypes);
  dart.addTypeCaches(actions.DevToolsActionTypes);
  dart.setMethodSignature(actions.DevToolsActionTypes, () => ({
    __proto__: dart.getMethods(actions.DevToolsActionTypes.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(actions.DevToolsActionTypes, I[1]);
  dart.setFieldSignature(actions.DevToolsActionTypes, () => ({
    __proto__: dart.getFields(actions.DevToolsActionTypes.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(actions.DevToolsActionTypes, ['toString']);
  actions.DevToolsActionTypes.PerformAction = C[0] || CT.C0;
  actions.DevToolsActionTypes.JumpToState = C[1] || CT.C1;
  actions.DevToolsActionTypes.Save = C[2] || CT.C2;
  actions.DevToolsActionTypes.Reset = C[3] || CT.C3;
  actions.DevToolsActionTypes.Recompute = C[4] || CT.C4;
  actions.DevToolsActionTypes.ToggleAction = C[5] || CT.C5;
  actions.DevToolsActionTypes.Init = C[6] || CT.C6;
  actions.DevToolsActionTypes.values = C[7] || CT.C7;
  var reducer$ = dart.privateName(store$, "DevToolsStore.reducer");
  var _devToolsStore = dart.privateName(store$, "_devToolsStore");
  var _distinct = dart.privateName(store$, "_distinct");
  var _state = dart.privateName(store$, "_state");
  var _state$ = dart.privateName(store, "_state");
  var _changeController = dart.privateName(store$, "_changeController");
  var _changeController$ = dart.privateName(store, "_changeController");
  var _createReduceAndNotify = dart.privateName(store$, "_createReduceAndNotify");
  var _createReduceAndNotify$ = dart.privateName(store, "_createReduceAndNotify");
  var _dispatchers = dart.privateName(store$, "_dispatchers");
  var _dispatchers$ = dart.privateName(store, "_dispatchers");
  var _createDispatchers = dart.privateName(store$, "_createDispatchers");
  var _createDispatchers$ = dart.privateName(store, "_createDispatchers");
  var _state_ = dart.privateName(store$, "_state=");
  var _dispatchers_ = dart.privateName(store$, "_dispatchers=");
  const _is_DevToolsStore_default = Symbol('_is_DevToolsStore_default');
  store$.DevToolsStore$ = dart.generic(S => {
    var SL = () => (SL = dart.constFn(dart.legacy(S)))();
    var DevToolsStateOfSL = () => (DevToolsStateOfSL = dart.constFn(state$.DevToolsState$(SL())))();
    var JSArrayOfSL = () => (JSArrayOfSL = dart.constFn(_interceptors.JSArray$(SL())))();
    var DevToolsReducerOfSL = () => (DevToolsReducerOfSL = dart.constFn(reducer.DevToolsReducer$(SL())))();
    var DevToolsStateLOfSL = () => (DevToolsStateLOfSL = dart.constFn(dart.legacy(DevToolsStateOfSL())))();
    var StoreOfDevToolsStateLOfSL = () => (StoreOfDevToolsStateLOfSL = dart.constFn(store.Store$(DevToolsStateLOfSL())))();
    var StoreLOfDevToolsStateLOfSL = () => (StoreLOfDevToolsStateLOfSL = dart.constFn(dart.legacy(StoreOfDevToolsStateLOfSL())))();
    var StoreLOfDevToolsStateLOfSLAnddynamicAndFnTodynamic = () => (StoreLOfDevToolsStateLOfSLAnddynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StoreLOfDevToolsStateLOfSL(), dart.dynamic, T.dynamicToLdynamic()])))();
    var StoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic = () => (StoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic = dart.constFn(dart.legacy(StoreLOfDevToolsStateLOfSLAnddynamicAndFnTodynamic())))();
    var ListOfStoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic = () => (ListOfStoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic = dart.constFn(core.List$(StoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic())))();
    var DevToolsMiddlewareOfSL = () => (DevToolsMiddlewareOfSL = dart.constFn(middleware.DevToolsMiddleware$(SL())))();
    var intLToFn = () => (intLToFn = dart.constFn(dart.fnType(StoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic(), [T.intL()])))();
    var SLAnddynamicToSL = () => (SLAnddynamicToSL = dart.constFn(dart.fnType(SL(), [SL(), dart.dynamic])))();
    var SLAnddynamicToLSL = () => (SLAnddynamicToLSL = dart.constFn(dart.legacy(SLAnddynamicToSL())))();
    var DevToolsStateLOfSLToSL = () => (DevToolsStateLOfSLToSL = dart.constFn(dart.fnType(SL(), [DevToolsStateLOfSL()])))();
    var StreamControllerOfSL = () => (StreamControllerOfSL = dart.constFn(async.StreamController$(SL())))();
    var StreamControllerLOfSL = () => (StreamControllerLOfSL = dart.constFn(dart.legacy(StreamControllerOfSL())))();
    class DevToolsStore extends core.Object {
      get reducer() {
        return this[reducer$];
      }
      set reducer(value) {
        this[reducer$] = SLAnddynamicToLSL().as(value);
      }
      get devToolsState() {
        return this[_devToolsStore].state;
      }
      dispatch(action) {
        if (T.DevToolsActionL().is(action)) {
          return this[_devToolsStore].dispatch(action);
        } else {
          return this[_devToolsStore].dispatch(actions.DevToolsAction.perform(action));
        }
      }
      get onChange() {
        let stream = this[_devToolsStore].onChange.map(SL(), dart.fn(devToolsState => devToolsState.currentAppState, DevToolsStateLOfSLToSL()));
        return dart.test(this[_distinct]) ? stream.distinct() : stream;
      }
      get state() {
        return this[_devToolsStore].state.currentAppState;
      }
      teardown() {
        return async.async(dart.dynamic, (function* teardown() {
          yield this[_devToolsStore].teardown();
          this[_devToolsStore] = null;
        }).bind(this));
      }
      get [_state$]() {
        return SL().as(this.noSuchMethod(new core._Invocation.getter(C[9] || CT.C9)));
      }
      get [_changeController$]() {
        return StreamControllerLOfSL().as(this.noSuchMethod(new core._Invocation.getter(C[10] || CT.C10)));
      }
      [_createReduceAndNotify$](distinct) {
        return T.dynamicToLdynamic().as(this.noSuchMethod(new core._Invocation.method(C[11] || CT.C11, null, [distinct])));
      }
      get [_dispatchers$]() {
        return T.ListLOfdynamicToLdynamic().as(this.noSuchMethod(new core._Invocation.getter(C[12] || CT.C12)));
      }
      [_createDispatchers$](middleware, reduceAndNotify) {
        return T.ListLOfdynamicToLdynamic().as(this.noSuchMethod(new core._Invocation.method(C[13] || CT.C13, null, [middleware, reduceAndNotify])));
      }
      set [_state$](value) {
        SL().as(value);
        return this.noSuchMethod(new core._Invocation.setter(C[14] || CT.C14, value));
      }
      set [_dispatchers$](value) {
        return this.noSuchMethod(new core._Invocation.setter(C[15] || CT.C15, value));
      }
    }
    (DevToolsStore.new = function(reducer, opts) {
      let t0;
      let initialState = opts && 'initialState' in opts ? opts.initialState : null;
      let middleware = opts && 'middleware' in opts ? opts.middleware : C[8] || CT.C8;
      let syncStream = opts && 'syncStream' in opts ? opts.syncStream : false;
      let distinct = opts && 'distinct' in opts ? opts.distinct : false;
      this[_devToolsStore] = null;
      this[reducer$] = null;
      this[_distinct] = distinct;
      let devToolsState = new (DevToolsStateOfSL()).new(JSArrayOfSL().of([initialState]), [], 0);
      let devToolsReducer = new (DevToolsReducerOfSL()).new(reducer);
      this[_devToolsStore] = new (StoreOfDevToolsStateLOfSL()).new((t0 = devToolsReducer, t0 === null ? null : dart.bind(t0, 'call')), {initialState: devToolsState, middleware: ListOfStoreLOfDevToolsStateLOfSLAnddynamicAndFnToLdynamic().generate(middleware[$length], dart.fn(index => {
          let t0;
          t0 = new (DevToolsMiddlewareOfSL()).new(this, middleware[$_get](index));
          return t0 === null ? null : dart.bind(t0, 'call');
        }, intLToFn())), syncStream: syncStream});
      this.dispatch(actions.DevToolsAction.init());
    }).prototype = DevToolsStore.prototype;
    dart.addTypeTests(DevToolsStore);
    DevToolsStore.prototype[_is_DevToolsStore_default] = true;
    dart.addTypeCaches(DevToolsStore);
    DevToolsStore[dart.implements] = () => [store.Store$(dart.legacy(S))];
    dart.setMethodSignature(DevToolsStore, () => ({
      __proto__: dart.getMethods(DevToolsStore.__proto__),
      dispatch: dart.fnType(dart.dynamic, [dart.dynamic]),
      teardown: dart.fnType(dart.legacy(async.Future), []),
      [_createReduceAndNotify$]: dart.fnType(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])), [dart.legacy(core.bool)]),
      [_createDispatchers$]: dart.fnType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])))), [dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(store.Store$(dart.legacy(S))), dart.dynamic, dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])))), dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])
    }));
    dart.setGetterSignature(DevToolsStore, () => ({
      __proto__: dart.getGetters(DevToolsStore.__proto__),
      devToolsState: dart.legacy(state$.DevToolsState$(dart.legacy(S))),
      onChange: dart.legacy(async.Stream$(dart.legacy(S))),
      state: dart.legacy(S),
      [_state$]: dart.legacy(S),
      [_changeController$]: dart.legacy(async.StreamController$(dart.legacy(S))),
      [_dispatchers$]: dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))))
    }));
    dart.setSetterSignature(DevToolsStore, () => ({
      __proto__: dart.getSetters(DevToolsStore.__proto__),
      [_state$]: dart.legacy(core.Object),
      [_dispatchers$]: dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))))
    }));
    dart.setLibraryUri(DevToolsStore, I[2]);
    dart.setFieldSignature(DevToolsStore, () => ({
      __proto__: dart.getFields(DevToolsStore.__proto__),
      [_distinct]: dart.finalFieldType(dart.legacy(core.bool)),
      [_devToolsStore]: dart.fieldType(dart.legacy(store.Store$(dart.legacy(state$.DevToolsState$(dart.legacy(S)))))),
      reducer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(S), [dart.legacy(S), dart.dynamic])))
    }));
    return DevToolsStore;
  });
  store$.DevToolsStore = store$.DevToolsStore$();
  dart.addTypeTests(store$.DevToolsStore, _is_DevToolsStore_default);
  var appReducer$ = dart.privateName(reducer, "DevToolsReducer.appReducer");
  const _is_DevToolsReducer_default = Symbol('_is_DevToolsReducer_default');
  reducer.DevToolsReducer$ = dart.generic(S => {
    var SL = () => (SL = dart.constFn(dart.legacy(S)))();
    var DevToolsStateOfSL = () => (DevToolsStateOfSL = dart.constFn(state$.DevToolsState$(SL())))();
    var DevToolsStateLOfSL = () => (DevToolsStateLOfSL = dart.constFn(dart.legacy(DevToolsStateOfSL())))();
    var JSArrayOfSL = () => (JSArrayOfSL = dart.constFn(_interceptors.JSArray$(SL())))();
    var ListOfSL = () => (ListOfSL = dart.constFn(core.List$(SL())))();
    var ListLOfSL = () => (ListLOfSL = dart.constFn(dart.legacy(ListOfSL())))();
    class DevToolsReducer extends store.ReducerClass$(dart.legacy(state$.DevToolsState$(dart.legacy(S)))) {
      get appReducer() {
        return this[appReducer$];
      }
      set appReducer(value) {
        super.appReducer = value;
      }
      call(state, action) {
        let t1, t0;
        DevToolsStateLOfSL().as(state);
        if (!T.DevToolsActionL().is(action)) dart.assertFailed("When using the Dev Tools, all actions must be wrapped as a DevToolsAction", I[3], 16, 12, "action is DevToolsAction");
        let devToolsAction = T.DevToolsActionL().as(action);
        switch (devToolsAction.type) {
          case C[6] || CT.C6:
          {
            let initialState = (t0 = state.currentAppState, t1 = action, this.appReducer(t0, t1));
            return new (DevToolsStateOfSL()).new(JSArrayOfSL().of([initialState]), [action], 0);
          }
          case C[0] || CT.C0:
          {
            let addToEnd = state.currentPosition === dart.notNull(state.computedStates[$length]) - 1;
            return DevToolsStateOfSL().fromApp(state, devToolsAction, addToEnd ? state.computedStates : state.computedStates[$sublist](0, dart.notNull(state.currentPosition) + 1), addToEnd ? state.stagedActions : state.stagedActions[$sublist](0, dart.notNull(state.currentPosition) + 1), this.appReducer);
          }
          case C[3] || CT.C3:
          {
            return new (DevToolsStateOfSL()).new(JSArrayOfSL().of([state.savedState]), [devToolsAction], 0);
          }
          case C[2] || CT.C2:
          {
            return new (DevToolsStateOfSL()).new(JSArrayOfSL().of([state.currentAppState]), [action], 0);
          }
          case C[1] || CT.C1:
          {
            return new (DevToolsStateOfSL()).new(state.computedStates, state.stagedActions, devToolsAction.position);
          }
          case C[4] || CT.C4:
          {
            return new (DevToolsStateOfSL()).new(this.recomputeStates(state.computedStates, state.stagedActions), state.stagedActions, state.currentPosition);
          }
          default:
          {
            return state;
          }
        }
      }
      recomputeStates(computedStates, stagedActions) {
        let t1, t0;
        ListLOfSL().as(computedStates);
        let recomputedStates = ListOfSL().new(computedStates[$length]);
        let currentState = computedStates[$_get](0);
        for (let i = 0; i < dart.notNull(computedStates[$length]); i = i + 1) {
          let currentAction = stagedActions[$_get](i);
          currentState = (t0 = currentState, t1 = currentAction, this.appReducer(t0, t1));
          recomputedStates[$_set](i, currentState);
        }
        return recomputedStates;
      }
    }
    (DevToolsReducer.new = function(appReducer) {
      this[appReducer$] = appReducer;
      ;
    }).prototype = DevToolsReducer.prototype;
    dart.addTypeTests(DevToolsReducer);
    DevToolsReducer.prototype[_is_DevToolsReducer_default] = true;
    dart.addTypeCaches(DevToolsReducer);
    dart.setMethodSignature(DevToolsReducer, () => ({
      __proto__: dart.getMethods(DevToolsReducer.__proto__),
      call: dart.fnType(dart.legacy(state$.DevToolsState$(dart.legacy(S))), [dart.legacy(core.Object), dart.dynamic]),
      recomputeStates: dart.fnType(dart.legacy(core.List$(dart.legacy(S))), [dart.legacy(core.Object), dart.legacy(core.List)])
    }));
    dart.setLibraryUri(DevToolsReducer, I[4]);
    dart.setFieldSignature(DevToolsReducer, () => ({
      __proto__: dart.getFields(DevToolsReducer.__proto__),
      appReducer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(S), [dart.legacy(S), dart.dynamic])))
    }));
    return DevToolsReducer;
  });
  reducer.DevToolsReducer = reducer.DevToolsReducer$();
  dart.addTypeTests(reducer.DevToolsReducer, _is_DevToolsReducer_default);
  var store$0 = dart.privateName(middleware, "DevToolsMiddleware.store");
  var appMiddleware$ = dart.privateName(middleware, "DevToolsMiddleware.appMiddleware");
  const _is_DevToolsMiddleware_default = Symbol('_is_DevToolsMiddleware_default');
  middleware.DevToolsMiddleware$ = dart.generic(S => {
    var SL = () => (SL = dart.constFn(dart.legacy(S)))();
    var DevToolsStateOfSL = () => (DevToolsStateOfSL = dart.constFn(state$.DevToolsState$(SL())))();
    var DevToolsStateLOfSL = () => (DevToolsStateLOfSL = dart.constFn(dart.legacy(DevToolsStateOfSL())))();
    var StoreOfDevToolsStateLOfSL = () => (StoreOfDevToolsStateLOfSL = dart.constFn(store.Store$(DevToolsStateLOfSL())))();
    var StoreLOfDevToolsStateLOfSL = () => (StoreLOfDevToolsStateLOfSL = dart.constFn(dart.legacy(StoreOfDevToolsStateLOfSL())))();
    class DevToolsMiddleware extends store.MiddlewareClass$(dart.legacy(state$.DevToolsState$(dart.legacy(S)))) {
      get store() {
        return this[store$0];
      }
      set store(value) {
        super.store = value;
      }
      get appMiddleware() {
        return this[appMiddleware$];
      }
      set appMiddleware(value) {
        super.appMiddleware = value;
      }
      call(_, action, next) {
        let t2, t1, t0;
        StoreLOfDevToolsStateLOfSL().as(_);
        let actionToDispatch = action;
        if (T.DevToolsActionL().is(action) && action.appAction != null) {
          actionToDispatch = action.appAction;
        }
        let dispatcher = dart.fn(action => {
          if (T.DevToolsActionL().is(action)) {
            return next(action);
          } else {
            return next(actions.DevToolsAction.perform(action));
          }
        }, T.dynamicTodynamic());
        t0 = this.store;
        t1 = actionToDispatch;
        t2 = dispatcher;
        return this.appMiddleware(t0, t1, t2);
      }
    }
    (DevToolsMiddleware.new = function(store, appMiddleware) {
      this[store$0] = store;
      this[appMiddleware$] = appMiddleware;
      ;
    }).prototype = DevToolsMiddleware.prototype;
    dart.addTypeTests(DevToolsMiddleware);
    DevToolsMiddleware.prototype[_is_DevToolsMiddleware_default] = true;
    dart.addTypeCaches(DevToolsMiddleware);
    dart.setMethodSignature(DevToolsMiddleware, () => ({
      __proto__: dart.getMethods(DevToolsMiddleware.__proto__),
      call: dart.fnType(dart.dynamic, [dart.legacy(core.Object), dart.dynamic, dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])
    }));
    dart.setLibraryUri(DevToolsMiddleware, I[5]);
    dart.setFieldSignature(DevToolsMiddleware, () => ({
      __proto__: dart.getFields(DevToolsMiddleware.__proto__),
      store: dart.finalFieldType(dart.legacy(store.Store$(dart.legacy(S)))),
      appMiddleware: dart.finalFieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(store.Store$(dart.legacy(S))), dart.dynamic, dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])))
    }));
    return DevToolsMiddleware;
  });
  middleware.DevToolsMiddleware = middleware.DevToolsMiddleware$();
  dart.addTypeTests(middleware.DevToolsMiddleware, _is_DevToolsMiddleware_default);
  dart.trackLibraries("packages/redux_dev_tools/redux_dev_tools", {
    "package:redux_dev_tools/src/state.dart": state$,
    "package:redux_dev_tools/src/actions.dart": actions,
    "package:redux_dev_tools/src/store.dart": store$,
    "package:redux_dev_tools/src/reducer.dart": reducer,
    "package:redux_dev_tools/src/middleware.dart": middleware,
    "package:redux_dev_tools/redux_dev_tools.dart": redux_dev_tools
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/state.dart","src/actions.dart","src/store.dart","src/reducer.dart","src/middleware.dart"],"names":[],"mappings":"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","file":"redux_dev_tools.unsound.ddc.js"}');
  // Exports:
  return {
    src__state: state$,
    src__actions: actions,
    src__store: store$,
    src__reducer: reducer,
    src__middleware: middleware,
    redux_dev_tools: redux_dev_tools
  };
}));

//# sourceMappingURL=redux_dev_tools.unsound.ddc.js.map
