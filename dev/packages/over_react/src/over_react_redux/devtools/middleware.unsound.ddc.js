define(['dart_sdk', 'packages/over_react/component_base', 'packages/react/hooks', 'packages/redux/redux', 'packages/over_react/src/component/resize_sensor_constants', 'packages/memoize/memoize', 'packages/logging/logging', 'packages/redux_dev_tools/redux_dev_tools'], (function load__packages__over_react__src__over_react_redux__devtools__middleware(dart_sdk, packages__over_react__component_base, packages__react__hooks, packages__redux__redux, packages__over_react__src__component__resize_sensor_constants, packages__memoize__memoize, packages__logging__logging, packages__redux_dev_tools__redux_dev_tools) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component_base = packages__over_react__component_base.src__component_declaration__component_base;
  const builder_helpers = packages__over_react__component_base.src__component_declaration__builder_helpers;
  const component_type_checking = packages__over_react__component_base.src__component_declaration__component_type_checking;
  const js_backed_map = packages__react__hooks.react_client__js_backed_map;
  const react = packages__react__hooks.react;
  const component_factory = packages__react__hooks.react_client__component_factory;
  const store = packages__redux__redux.src__store;
  const equality = packages__over_react__src__component__resize_sensor_constants.src__util__equality;
  const memoize = packages__memoize__memoize.memoize;
  const logger = packages__logging__logging.src__logger;
  const level = packages__logging__logging.src__level;
  const log_record = packages__logging__logging.src__log_record;
  const actions = packages__redux_dev_tools__redux_dev_tools.src__actions;
  var over_react_redux = Object.create(dart.library);
  var middleware = Object.create(dart.library);
  var use_store = Object.create(dart.library);
  var use_selector = Object.create(dart.library);
  var use_dispatch = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $removeWhere = dartx.removeWhere;
  var $length = dartx.length;
  var $add = dartx.add;
  var $toString = dartx.toString;
  var $startsWith = dartx.startsWith;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    StringL: () => (T$.StringL = dart.constFn(dart.legacy(core.String)))(),
    PropDescriptorL: () => (T$.PropDescriptorL = dart.constFn(dart.legacy(component_base.PropDescriptor)))(),
    StoreL: () => (T$.StoreL = dart.constFn(dart.legacy(store.Store)))(),
    dynamicTodynamic: () => (T$.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    dynamicToLdynamic: () => (T$.dynamicToLdynamic = dart.constFn(dart.legacy(T$.dynamicTodynamic())))(),
    boolL: () => (T$.boolL = dart.constFn(dart.legacy(core.bool)))(),
    MapL: () => (T$.MapL = dart.constFn(dart.legacy(core.Map)))(),
    MapLAndMapLToboolL: () => (T$.MapLAndMapLToboolL = dart.constFn(dart.fnType(T$.boolL(), [T$.MapL(), T$.MapL()])))(),
    dynamicToboolL: () => (T$.dynamicToboolL = dart.constFn(dart.fnType(T$.boolL(), [dart.dynamic])))(),
    UiPropsL: () => (T$.UiPropsL = dart.constFn(dart.legacy(component_base.UiProps)))(),
    MapLToJsMapL: () => (T$.MapLToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.MapL()])))(),
    intL: () => (T$.intL = dart.constFn(dart.legacy(core.int)))(),
    IdentityMapOfStringL$intL: () => (T$.IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(T$.StringL(), T$.intL())))(),
    ObjectL: () => (T$.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    JSArrayOfObjectL: () => (T$.JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(T$.ObjectL())))(),
    FunctionL: () => (T$.FunctionL = dart.constFn(dart.legacy(core.Function)))(),
    TLAndintLToTL: () => (T$.TLAndintLToTL = dart.constFn(dart.gFnType(T => {
      var TL = () => (TL = dart.constFn(dart.legacy(T)))();
      return [TL(), [TL(), T$.intL()]];
    }, T => {
      var TL = () => (TL = dart.constFn(dart.legacy(T)))();
      return [T$.FunctionL()];
    })))(),
    ReactInteropValueL: () => (T$.ReactInteropValueL = dart.constFn(dart.legacy(over_react_redux.ReactInteropValue)))(),
    ReactInteropValueLToJsMapL: () => (T$.ReactInteropValueLToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.ReactInteropValueL()])))(),
    ReactInteropValueLAndJsMapLToJsMapL: () => (T$.ReactInteropValueLAndJsMapLToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.ReactInteropValueL(), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    ReactInteropValueLToLJsMapL: () => (T$.ReactInteropValueLToLJsMapL = dart.constFn(dart.legacy(T$.ReactInteropValueLToJsMapL())))(),
    ReactInteropValueLAndJsMapLToFn: () => (T$.ReactInteropValueLAndJsMapLToFn = dart.constFn(dart.fnType(T$.ReactInteropValueLToLJsMapL(), [T$.ReactInteropValueL(), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    ReactInteropValueLAndJsMapLToLJsMapL: () => (T$.ReactInteropValueLAndJsMapLToLJsMapL = dart.constFn(dart.legacy(T$.ReactInteropValueLAndJsMapLToJsMapL())))(),
    ReactInteropValueLAndJsMapLToFn$1: () => (T$.ReactInteropValueLAndJsMapLToFn$1 = dart.constFn(dart.fnType(T$.ReactInteropValueLAndJsMapLToLJsMapL(), [T$.ReactInteropValueL(), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    FnToJsMapL: () => (T$.FnToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.dynamicToLdynamic()])))(),
    FnAndJsMapLToJsMapL: () => (T$.FnAndJsMapLToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.dynamicToLdynamic(), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    FnToLJsMapL: () => (T$.FnToLJsMapL = dart.constFn(dart.legacy(T$.FnToJsMapL())))(),
    FnAndJsMapLToFn: () => (T$.FnAndJsMapLToFn = dart.constFn(dart.fnType(T$.FnToLJsMapL(), [T$.dynamicToLdynamic(), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    FnAndJsMapLToLJsMapL: () => (T$.FnAndJsMapLToLJsMapL = dart.constFn(dart.legacy(T$.FnAndJsMapLToJsMapL())))(),
    FnAndJsMapLToFn$1: () => (T$.FnAndJsMapLToFn$1 = dart.constFn(dart.fnType(T$.FnAndJsMapLToLJsMapL(), [T$.dynamicToLdynamic(), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    JsMapLAndJsMapLAndJsMapLToJsMapL: () => (T$.JsMapLAndJsMapLAndJsMapLToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    ReactInteropValueLAndReactInteropValueLToboolL: () => (T$.ReactInteropValueLAndReactInteropValueLToboolL = dart.constFn(dart.fnType(T$.boolL(), [T$.ReactInteropValueL(), T$.ReactInteropValueL()])))(),
    JsMapLAndJsMapLToboolL: () => (T$.JsMapLAndJsMapLToboolL = dart.constFn(dart.fnType(T$.boolL(), [dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    ReactInteropValueLAndReactInteropValueLToLboolL: () => (T$.ReactInteropValueLAndReactInteropValueLToLboolL = dart.constFn(dart.legacy(T$.ReactInteropValueLAndReactInteropValueLToboolL())))(),
    JsMapLAndJsMapLToLboolL: () => (T$.JsMapLAndJsMapLToLboolL = dart.constFn(dart.legacy(T$.JsMapLAndJsMapLToboolL())))(),
    VoidToFunctionL: () => (T$.VoidToFunctionL = dart.constFn(dart.fnType(T$.FunctionL(), [])))(),
    Component2L: () => (T$.Component2L = dart.constFn(dart.legacy(react.Component2)))(),
    ReactDartComponentFactoryProxy2OfComponent2L: () => (T$.ReactDartComponentFactoryProxy2OfComponent2L = dart.constFn(component_factory.ReactDartComponentFactoryProxy2$(T$.Component2L())))(),
    dynamicToReactInteropValueL: () => (T$.dynamicToReactInteropValueL = dart.constFn(dart.fnType(T$.ReactInteropValueL(), [dart.dynamic])))(),
    VoidToReactInteropValueL: () => (T$.VoidToReactInteropValueL = dart.constFn(dart.fnType(T$.ReactInteropValueL(), [])))(),
    VoidToLReactInteropValueL: () => (T$.VoidToLReactInteropValueL = dart.constFn(dart.legacy(T$.VoidToReactInteropValueL())))(),
    FunctionLToFunctionL: () => (T$.FunctionLToFunctionL = dart.constFn(dart.fnType(T$.FunctionL(), [T$.FunctionL()])))(),
    FunctionLToLFunctionL: () => (T$.FunctionLToLFunctionL = dart.constFn(dart.legacy(T$.FunctionLToFunctionL())))(),
    dynamicToNull: () => (T$.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    ReduxProviderPropsL: () => (T$.ReduxProviderPropsL = dart.constFn(dart.legacy(over_react_redux.ReduxProviderProps)))(),
    MapLToReduxProviderPropsL: () => (T$.MapLToReduxProviderPropsL = dart.constFn(dart.fnType(T$.ReduxProviderPropsL(), [], [T$.MapL()])))(),
    LogRecordL: () => (T$.LogRecordL = dart.constFn(dart.legacy(log_record.LogRecord)))(),
    LogRecordLToNull: () => (T$.LogRecordLToNull = dart.constFn(dart.fnType(core.Null, [T$.LogRecordL()])))(),
    JsMapLTodynamic: () => (T$.JsMapLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    JsMapLToLdynamic: () => (T$.JsMapLToLdynamic = dart.constFn(dart.legacy(T$.JsMapLTodynamic())))(),
    IdentityMapOfStringL$dynamic: () => (T$.IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(T$.StringL(), dart.dynamic)))(),
    IdentityMapOfStringL$StringL: () => (T$.IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(T$.StringL(), T$.StringL())))(),
    DevToolsActionL: () => (T$.DevToolsActionL = dart.constFn(dart.legacy(actions.DevToolsAction)))(),
    ReactInteropValueLToReactInteropValueL: () => (T$.ReactInteropValueLToReactInteropValueL = dart.constFn(dart.fnType(T$.ReactInteropValueL(), [T$.ReactInteropValueL()])))(),
    ReactInteropValueLToLReactInteropValueL: () => (T$.ReactInteropValueLToLReactInteropValueL = dart.constFn(dart.legacy(T$.ReactInteropValueLToReactInteropValueL())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.constList(["dispatch"], T$.StringL());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: component_base.PropDescriptor.prototype,
        [PropDescriptor_errorMessage]: "",
        [PropDescriptor_isNullable]: false,
        [PropDescriptor_isRequired]: false,
        [PropDescriptor_key]: "dispatch"
      });
    },
    get C2() {
      return C[2] = dart.constList([C[3] || CT.C3], T$.PropDescriptorL());
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: component_base.PropsMeta.prototype,
        [PropsMeta_keys]: C[1] || CT.C1,
        [PropsMeta_fields]: C[2] || CT.C2
      });
    },
    get C4() {
      return C[4] = dart.fn(equality.propsOrStateMapsEqual, T$.MapLAndMapLToboolL());
    },
    get C5() {
      return C[5] = dart.fn(over_react_redux.wrapInteropValue, T$.dynamicToReactInteropValueL());
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "package:over_react/src/over_react_redux/over_react_redux.dart",
    "package:over_react/src/over_react_redux/devtools/middleware.dart"
  ];
  var PropsMeta_keys = dart.privateName(component_base, "PropsMeta.keys");
  var PropDescriptor_errorMessage = dart.privateName(component_base, "PropDescriptor.errorMessage");
  var PropDescriptor_isNullable = dart.privateName(component_base, "PropDescriptor.isNullable");
  var PropDescriptor_isRequired = dart.privateName(component_base, "PropDescriptor.isRequired");
  var PropDescriptor_key = dart.privateName(component_base, "PropDescriptor.key");
  var PropsMeta_fields = dart.privateName(component_base, "PropsMeta.fields");
  over_react_redux.$ConnectPropsMixin = class $36ConnectPropsMixin extends core.Object {};
  (over_react_redux.$ConnectPropsMixin.new = function() {
    ;
  }).prototype = over_react_redux.$ConnectPropsMixin.prototype;
  dart.addTypeTests(over_react_redux.$ConnectPropsMixin);
  dart.addTypeCaches(over_react_redux.$ConnectPropsMixin);
  dart.setLibraryUri(over_react_redux.$ConnectPropsMixin, I[0]);
  dart.defineLazy(over_react_redux.$ConnectPropsMixin, {
    /*over_react_redux.$ConnectPropsMixin.meta*/get meta() {
      return C[0] || CT.C0;
    }
  }, true);
  over_react_redux._$ConnectPropsMixin = class _$36ConnectPropsMixin extends core.Object {};
  (over_react_redux._$ConnectPropsMixin.new = function() {
    this.dispatch = null;
    ;
  }).prototype = over_react_redux._$ConnectPropsMixin.prototype;
  dart.addTypeTests(over_react_redux._$ConnectPropsMixin);
  dart.addTypeCaches(over_react_redux._$ConnectPropsMixin);
  over_react_redux._$ConnectPropsMixin[dart.implements] = () => [component_base.UiProps];
  dart.setLibraryUri(over_react_redux._$ConnectPropsMixin, I[0]);
  dart.setFieldSignature(over_react_redux._$ConnectPropsMixin, () => ({
    __proto__: dart.getFields(over_react_redux._$ConnectPropsMixin.__proto__),
    dispatch: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])))
  }));
  var props$ = dart.privateName(over_react_redux, "ReduxProviderProps.props");
  over_react_redux.ReduxProviderProps = class ReduxProviderProps extends builder_helpers.UiProps {
    get props() {
      return this[props$];
    }
    set props(value) {
      super.props = value;
    }
    get componentFactory() {
      return new over_react_redux.ReactJsReactReduxComponentFactoryProxy.new(dart.global.ReactRedux.Provider, {isProvider: true});
    }
    set componentFactory(value) {
      super.componentFactory = value;
    }
    get propKeyNamespace() {
      return "";
    }
    get $isClassGenerated() {
      return true;
    }
    get store() {
      return T$.StoreL().as(this.props[$_get]("store"));
    }
    set store(v) {
      let t2, t1, t0;
      T$.StoreL().as(v);
      t0 = this.props;
      t1 = "store";
      t2 = v;
      t0[$_set](t1, t2);
      return t2;
    }
    get context() {
      return this.props[$_get]("context");
    }
    set context(v) {
      let t2, t1, t0;
      t0 = this.props;
      t1 = "context";
      t2 = v;
      t0[$_set](t1, t2);
      return t2;
    }
  };
  (over_react_redux.ReduxProviderProps.new = function(props = null) {
    let t0;
    this[props$] = (t0 = props, t0 == null ? new js_backed_map.JsBackedMap.new() : t0);
    over_react_redux.ReduxProviderProps.__proto__.new.call(this);
    ;
  }).prototype = over_react_redux.ReduxProviderProps.prototype;
  dart.addTypeTests(over_react_redux.ReduxProviderProps);
  dart.addTypeCaches(over_react_redux.ReduxProviderProps);
  dart.setGetterSignature(over_react_redux.ReduxProviderProps, () => ({
    __proto__: dart.getGetters(over_react_redux.ReduxProviderProps.__proto__),
    componentFactory: dart.legacy(react.ReactComponentFactoryProxy),
    store: dart.legacy(store.Store),
    context: dart.dynamic
  }));
  dart.setSetterSignature(over_react_redux.ReduxProviderProps, () => ({
    __proto__: dart.getSetters(over_react_redux.ReduxProviderProps.__proto__),
    store: dart.legacy(core.Object),
    context: dart.legacy(core.Object)
  }));
  dart.setLibraryUri(over_react_redux.ReduxProviderProps, I[0]);
  dart.setFieldSignature(over_react_redux.ReduxProviderProps, () => ({
    __proto__: dart.getFields(over_react_redux.ReduxProviderProps.__proto__),
    props: dart.finalFieldType(dart.legacy(core.Map))
  }));
  var _generateReduxJsProps = dart.privateName(over_react_redux, "_generateReduxJsProps");
  over_react_redux.ReactJsReactReduxComponentFactoryProxy = class ReactJsReactReduxComponentFactoryProxy extends component_factory.ReactJsContextComponentFactoryProxy {
    build(props, childrenArgs = null) {
      return super.build(this[_generateReduxJsProps](props), childrenArgs);
    }
    [_generateReduxJsProps](props) {
      let propsForJs = js_backed_map.JsBackedMap.from(props);
      if (propsForJs._get("store") != null) {
        propsForJs._set("store", over_react_redux._reduxifyStore(T$.StoreL().as(propsForJs._get("store"))));
      }
      if (propsForJs._get("context") != null) {
        propsForJs._set("context", dart.dload(propsForJs._get("context"), 'jsThis'));
      }
      return propsForJs;
    }
  };
  (over_react_redux.ReactJsReactReduxComponentFactoryProxy.new = function(jsClass, opts) {
    let shouldConvertDomProps = opts && 'shouldConvertDomProps' in opts ? opts.shouldConvertDomProps : true;
    let isConsumer = opts && 'isConsumer' in opts ? opts.isConsumer : false;
    let isProvider = opts && 'isProvider' in opts ? opts.isProvider : false;
    over_react_redux.ReactJsReactReduxComponentFactoryProxy.__proto__.new.call(this, jsClass, {isProvider: isProvider, isConsumer: isConsumer, shouldConvertDomProps: shouldConvertDomProps});
    ;
  }).prototype = over_react_redux.ReactJsReactReduxComponentFactoryProxy.prototype;
  dart.addTypeTests(over_react_redux.ReactJsReactReduxComponentFactoryProxy);
  dart.addTypeCaches(over_react_redux.ReactJsReactReduxComponentFactoryProxy);
  dart.setMethodSignature(over_react_redux.ReactJsReactReduxComponentFactoryProxy, () => ({
    __proto__: dart.getMethods(over_react_redux.ReactJsReactReduxComponentFactoryProxy.__proto__),
    [_generateReduxJsProps]: dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map)])
  }));
  dart.setLibraryUri(over_react_redux.ReactJsReactReduxComponentFactoryProxy, I[0]);
  var value$ = dart.privateName(over_react_redux, "ReactInteropValue.value");
  over_react_redux.ReactInteropValue = class ReactInteropValue extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
  };
  (over_react_redux.ReactInteropValue.new = function() {
    this[value$] = null;
    ;
  }).prototype = over_react_redux.ReactInteropValue.prototype;
  dart.addTypeTests(over_react_redux.ReactInteropValue);
  dart.addTypeCaches(over_react_redux.ReactInteropValue);
  dart.setLibraryUri(over_react_redux.ReactInteropValue, I[0]);
  dart.setFieldSignature(over_react_redux.ReactInteropValue, () => ({
    __proto__: dart.getFields(over_react_redux.ReactInteropValue.__proto__),
    value: dart.fieldType(dart.dynamic)
  }));
  over_react_redux.ConnectPropsMixin = class ConnectPropsMixin extends core.Object {
    get dispatch() {
      let t0;
      return T$.dynamicToLdynamic().as((t0 = this.props[$_get]("dispatch"), t0 == null ? null : t0));
    }
    set dispatch(value) {
      let t2, t1, t0;
      t0 = this.props;
      t1 = "dispatch";
      t2 = value;
      t0[$_set](t1, t2);
      return t2;
    }
  };
  (over_react_redux.ConnectPropsMixin.new = function() {
    ;
  }).prototype = over_react_redux.ConnectPropsMixin.prototype;
  dart.addTypeTests(over_react_redux.ConnectPropsMixin);
  dart.addTypeCaches(over_react_redux.ConnectPropsMixin);
  over_react_redux.ConnectPropsMixin[dart.implements] = () => [over_react_redux._$ConnectPropsMixin];
  dart.setGetterSignature(over_react_redux.ConnectPropsMixin, () => ({
    __proto__: dart.getGetters(over_react_redux.ConnectPropsMixin.__proto__),
    dispatch: dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))
  }));
  dart.setSetterSignature(over_react_redux.ConnectPropsMixin, () => ({
    __proto__: dart.getSetters(over_react_redux.ConnectPropsMixin.__proto__),
    dispatch: dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))
  }));
  dart.setLibraryUri(over_react_redux.ConnectPropsMixin, I[0]);
  dart.defineLazy(over_react_redux.ConnectPropsMixin, {
    /*over_react_redux.ConnectPropsMixin.meta*/get meta() {
      return C[0] || CT.C0;
    },
    /*over_react_redux.ConnectPropsMixin._$prop__dispatch___$ConnectPropsMixin*/get _$prop__dispatch___$ConnectPropsMixin() {
      return C[3] || CT.C3;
    },
    /*over_react_redux.ConnectPropsMixin._$key__dispatch___$ConnectPropsMixin*/get _$key__dispatch___$ConnectPropsMixin() {
      return "dispatch";
    },
    /*over_react_redux.ConnectPropsMixin.$props*/get $props() {
      return C[2] || CT.C2;
    },
    /*over_react_redux.ConnectPropsMixin.$propKeys*/get $propKeys() {
      return C[1] || CT.C1;
    }
  }, true);
  over_react_redux.connect = function connect(TReduxState, TProps, opts) {
    let t0, t0$;
    let mapStateToProps = opts && 'mapStateToProps' in opts ? opts.mapStateToProps : null;
    let mapStateToPropsWithOwnProps = opts && 'mapStateToPropsWithOwnProps' in opts ? opts.mapStateToPropsWithOwnProps : null;
    let makeMapStateToProps = opts && 'makeMapStateToProps' in opts ? opts.makeMapStateToProps : null;
    let makeMapStateToPropsWithOwnProps = opts && 'makeMapStateToPropsWithOwnProps' in opts ? opts.makeMapStateToPropsWithOwnProps : null;
    let mapDispatchToProps = opts && 'mapDispatchToProps' in opts ? opts.mapDispatchToProps : null;
    let mapDispatchToPropsWithOwnProps = opts && 'mapDispatchToPropsWithOwnProps' in opts ? opts.mapDispatchToPropsWithOwnProps : null;
    let makeMapDispatchToProps = opts && 'makeMapDispatchToProps' in opts ? opts.makeMapDispatchToProps : null;
    let makeMapDispatchToPropsWithOwnProps = opts && 'makeMapDispatchToPropsWithOwnProps' in opts ? opts.makeMapDispatchToPropsWithOwnProps : null;
    let mergeProps = opts && 'mergeProps' in opts ? opts.mergeProps : null;
    let areStatesEqual = opts && 'areStatesEqual' in opts ? opts.areStatesEqual : null;
    let areOwnPropsEqual = opts && 'areOwnPropsEqual' in opts ? opts.areOwnPropsEqual : C[4] || CT.C4;
    let areStatePropsEqual = opts && 'areStatePropsEqual' in opts ? opts.areStatePropsEqual : C[4] || CT.C4;
    let areMergedPropsEqual = opts && 'areMergedPropsEqual' in opts ? opts.areMergedPropsEqual : C[4] || CT.C4;
    let context = opts && 'context' in opts ? opts.context : null;
    let pure = opts && 'pure' in opts ? opts.pure : true;
    let forwardRef = opts && 'forwardRef' in opts ? opts.forwardRef : false;
    let mapStateToPropsCheck = (t0 = [mapStateToProps, mapStateToPropsWithOwnProps, makeMapStateToProps, makeMapStateToPropsWithOwnProps], (() => {
      t0[$removeWhere](dart.fn(x => x == null, T$.dynamicToboolL()));
      return t0;
    })());
    let mapDispatchToPropsCheck = (t0$ = [mapDispatchToProps, mapDispatchToPropsWithOwnProps, makeMapDispatchToProps, makeMapDispatchToPropsWithOwnProps], (() => {
      t0$[$removeWhere](dart.fn(x => x == null, T$.dynamicToboolL()));
      return t0$;
    })());
    if (dart.notNull(mapStateToPropsCheck[$length]) > 1) {
      dart.throw(new core.ArgumentError.new("Only one of the following arguments can be provided at a time: [mapStateToProps, mapStateToPropsWithOwnProps, makeMapStateToProps, makeMapStateToPropsWithOwnProps]"));
    }
    if (dart.notNull(mapDispatchToPropsCheck[$length]) > 1) {
      dart.throw(new core.ArgumentError.new("Only one of the following arguments can be provided at a time: [mapDispatchToProps, mapDispatchToPropsWithOwnProps, makeMapDispatchToProps, makeMapDispatchToPropsWithOwnProps]"));
    }
    function wrapWithConnect(factory) {
      let t0, t0$;
      let dartComponentFactory = factory().componentFactory;
      let dartComponentClass = dartComponentFactory.type;
      component_type_checking.enforceMinimumComponentVersionFor(dartComponentFactory);
      function jsMapFromProps(props) {
        return js_backed_map.jsBackingMapOrJsCopy(T$.UiPropsL().is(props) ? props.props : props);
      }
      dart.fn(jsMapFromProps, T$.MapLToJsMapL());
      function jsPropsToTProps(jsProps) {
        return factory(new js_backed_map.JsBackedMap.backedBy(jsProps));
      }
      dart.fn(jsPropsToTProps, dart.fnType(dart.legacy(TProps), [dart.legacy(dart.anonymousJSType("JsMap"))]));
      function allowInteropWithArgCount(T, dartFunction, count) {
        let interopFunction = js.allowInterop(dart.legacy(T), dartFunction);
        js_util.callMethod(html.window.Object, "defineProperty", T$.JSArrayOfObjectL().of([interopFunction, "length", js_util.jsify(new (T$.IdentityMapOfStringL$intL()).from(["value", count]))]));
        return interopFunction;
      }
      dart.fn(allowInteropWithArgCount, T$.TLAndintLToTL());
      function handleMapStateToProps(jsState) {
        return jsMapFromProps(mapStateToProps(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsState)));
      }
      dart.fn(handleMapStateToProps, T$.ReactInteropValueLToJsMapL());
      function handleMapStateToPropsWithOwnProps(jsState, jsOwnProps) {
        return jsMapFromProps(mapStateToPropsWithOwnProps(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsState), jsPropsToTProps(jsOwnProps)));
      }
      dart.fn(handleMapStateToPropsWithOwnProps, T$.ReactInteropValueLAndJsMapLToJsMapL());
      function handleMakeMapStateToProps(initialJsState, initialJsOwnProps) {
        let mapToFactory = makeMapStateToProps(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), initialJsState), jsPropsToTProps(initialJsOwnProps));
        function handleMakeMapStateToPropsFactory(jsState) {
          return jsMapFromProps(mapToFactory(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsState)));
        }
        dart.fn(handleMakeMapStateToPropsFactory, T$.ReactInteropValueLToJsMapL());
        return allowInteropWithArgCount(T$.ReactInteropValueLToLJsMapL(), handleMakeMapStateToPropsFactory, 1);
      }
      dart.fn(handleMakeMapStateToProps, T$.ReactInteropValueLAndJsMapLToFn());
      function handleMakeMapStateToPropsWithOwnProps(initialJsState, initialJsOwnProps) {
        let mapToFactory = makeMapStateToPropsWithOwnProps(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), initialJsState), jsPropsToTProps(initialJsOwnProps));
        function handleMakeMapStateToPropsWithOwnPropsFactory(jsState, jsOwnProps) {
          return jsMapFromProps(mapToFactory(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsState), jsPropsToTProps(jsOwnProps)));
        }
        dart.fn(handleMakeMapStateToPropsWithOwnPropsFactory, T$.ReactInteropValueLAndJsMapLToJsMapL());
        return allowInteropWithArgCount(T$.ReactInteropValueLAndJsMapLToLJsMapL(), handleMakeMapStateToPropsWithOwnPropsFactory, 2);
      }
      dart.fn(handleMakeMapStateToPropsWithOwnProps, T$.ReactInteropValueLAndJsMapLToFn$1());
      function handleMapDispatchToProps(dispatch) {
        return jsMapFromProps(mapDispatchToProps(dispatch));
      }
      dart.fn(handleMapDispatchToProps, T$.FnToJsMapL());
      function handleMapDispatchToPropsWithOwnProps(dispatch, jsOwnProps) {
        return jsMapFromProps(mapDispatchToPropsWithOwnProps(dispatch, jsPropsToTProps(jsOwnProps)));
      }
      dart.fn(handleMapDispatchToPropsWithOwnProps, T$.FnAndJsMapLToJsMapL());
      function handleMakeMapDispatchToProps(dispatch, initialJsOwnProps) {
        let mapToFactory = makeMapDispatchToProps(dispatch, jsPropsToTProps(initialJsOwnProps));
        function handleMakeMapDispatchToPropsFactory(dispatch) {
          return jsMapFromProps(mapToFactory(dispatch));
        }
        dart.fn(handleMakeMapDispatchToPropsFactory, T$.FnToJsMapL());
        return allowInteropWithArgCount(T$.FnToLJsMapL(), handleMakeMapDispatchToPropsFactory, 1);
      }
      dart.fn(handleMakeMapDispatchToProps, T$.FnAndJsMapLToFn());
      function handleMakeMapDispatchToPropsWithOwnProps(dispatch, initialJsOwnProps) {
        let mapToFactory = makeMapDispatchToPropsWithOwnProps(dispatch, jsPropsToTProps(initialJsOwnProps));
        function handleMakeMapDispatchToPropsWithOwnPropsFactory(dispatch, jsOwnProps) {
          return jsMapFromProps(mapToFactory(dispatch, jsPropsToTProps(jsOwnProps)));
        }
        dart.fn(handleMakeMapDispatchToPropsWithOwnPropsFactory, T$.FnAndJsMapLToJsMapL());
        return allowInteropWithArgCount(T$.FnAndJsMapLToLJsMapL(), handleMakeMapDispatchToPropsWithOwnPropsFactory, 2);
      }
      dart.fn(handleMakeMapDispatchToPropsWithOwnProps, T$.FnAndJsMapLToFn$1());
      function handleMergeProps(jsStateProps, jsDispatchProps, jsOwnProps) {
        return jsMapFromProps(mergeProps(jsPropsToTProps(jsStateProps), jsPropsToTProps(jsDispatchProps), jsPropsToTProps(jsOwnProps)));
      }
      dart.fn(handleMergeProps, T$.JsMapLAndJsMapLAndJsMapLToJsMapL());
      function handleAreStatesEqual(jsNext, jsPrev) {
        return areStatesEqual(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsNext), over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsPrev));
      }
      dart.fn(handleAreStatesEqual, T$.ReactInteropValueLAndReactInteropValueLToboolL());
      function handleAreOwnPropsEqual(jsNext, jsPrev) {
        return areOwnPropsEqual(jsPropsToTProps(jsNext), jsPropsToTProps(jsPrev));
      }
      dart.fn(handleAreOwnPropsEqual, T$.JsMapLAndJsMapLToboolL());
      function handleAreStatePropsEqual(jsNext, jsPrev) {
        return areStatePropsEqual(jsPropsToTProps(jsNext), jsPropsToTProps(jsPrev));
      }
      dart.fn(handleAreStatePropsEqual, T$.JsMapLAndJsMapLToboolL());
      function handleAreMergedPropsEqual(jsNext, jsPrev) {
        return areMergedPropsEqual(jsPropsToTProps(jsNext), jsPropsToTProps(jsPrev));
      }
      dart.fn(handleAreMergedPropsEqual, T$.JsMapLAndJsMapLToboolL());
      let connectOptions = {forwardRef: forwardRef, pure: pure, context: (t0$ = (t0 = context, t0 == null ? null : t0.jsThis), t0$ == null ? dart.global.ReactRedux.ReactReduxContext : t0$)};
      if (areStatesEqual != null) {
        connectOptions.areStatesEqual = js.allowInterop(T$.ReactInteropValueLAndReactInteropValueLToLboolL(), handleAreStatesEqual);
      }
      if (areOwnPropsEqual != null) {
        connectOptions.areOwnPropsEqual = js.allowInterop(T$.JsMapLAndJsMapLToLboolL(), handleAreOwnPropsEqual);
      }
      if (areStatePropsEqual != null) {
        connectOptions.areStatePropsEqual = js.allowInterop(T$.JsMapLAndJsMapLToLboolL(), handleAreStatePropsEqual);
      }
      if (areMergedPropsEqual != null) {
        connectOptions.areMergedPropsEqual = js.allowInterop(T$.JsMapLAndJsMapLToLboolL(), handleAreMergedPropsEqual);
      }
      function interopMapStateToPropsHandler() {
        if (mapStateToProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMapStateToProps, 1);
        }
        if (mapStateToPropsWithOwnProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMapStateToPropsWithOwnProps, 2);
        }
        if (makeMapStateToProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMakeMapStateToProps, 2);
        }
        if (makeMapStateToPropsWithOwnProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMakeMapStateToPropsWithOwnProps, 2);
        }
        return null;
      }
      dart.fn(interopMapStateToPropsHandler, T$.VoidToFunctionL());
      function interopMapDispatchToPropsHandler() {
        if (mapDispatchToProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMapDispatchToProps, 1);
        }
        if (mapDispatchToPropsWithOwnProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMapDispatchToPropsWithOwnProps, 2);
        }
        if (makeMapDispatchToProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMakeMapDispatchToProps, 2);
        }
        if (makeMapDispatchToPropsWithOwnProps != null) {
          return allowInteropWithArgCount(T$.FunctionL(), handleMakeMapDispatchToPropsWithOwnProps, 2);
        }
        return null;
      }
      dart.fn(interopMapDispatchToPropsHandler, T$.VoidToFunctionL());
      let hoc = over_react_redux.mockableJsConnect(interopMapStateToPropsHandler(), interopMapDispatchToPropsHandler(), mergeProps != null ? js.allowInterop(T$.FunctionL(), handleMergeProps) : null, connectOptions)(dart.legacy(dart.anonymousJSType("ReactClass")).as(dartComponentClass));
      let hocFactoryProxy = new (T$.ReactDartComponentFactoryProxy2OfComponent2L()).new(hoc);
      component_type_checking.setComponentTypeMeta(hocFactoryProxy.type, {isHoc: true, parentType: dartComponentFactory.type});
      function connectedFactory(props = null) {
        let t0;
        t0 = factory(props);
        return (() => {
          t0.componentFactory = hocFactoryProxy;
          return t0;
        })();
      }
      dart.fn(connectedFactory, dart.fnType(dart.legacy(TProps), [], [T$.MapL()]));
      return connectedFactory;
    }
    dart.fn(wrapWithConnect, dart.fnType(dart.legacy(dart.fnType(dart.legacy(TProps), [], [T$.MapL()])), [dart.legacy(dart.fnType(dart.legacy(TProps), [], [T$.MapL()]))]));
    return wrapWithConnect;
  };
  over_react_redux._reduxifyStore = function _reduxifyStore(store) {
    let memoizedWrapInteropValue = memoize.imemo1(dart.dynamic, T$.ReactInteropValueL(), C[5] || CT.C5);
    return {getState: js.allowInterop(T$.VoidToLReactInteropValueL(), dart.fn(() => memoizedWrapInteropValue(store.state), T$.VoidToReactInteropValueL())), subscribe: js.allowInterop(T$.FunctionLToLFunctionL(), dart.fn(cb => js.allowInterop(T$.FunctionL(), dart.bind(store.onChange.listen(dart.fn(_ => {
        dart.dcall(cb, []);
      }, T$.dynamicToNull())), 'cancel')), T$.FunctionLToFunctionL())), dispatch: js.allowInterop(T$.dynamicToLdynamic(), dart.fn(action => {
        store.dispatch(action);
      }, T$.dynamicToNull())), dartStore: store};
  };
  over_react_redux.unwrapInteropValue = function unwrapInteropValue(T, value) {
    return dart.legacy(T).as(value.value);
  };
  over_react_redux.wrapInteropValue = function wrapInteropValue(value) {
    let t0;
    t0 = new over_react_redux.ReactInteropValue.new();
    return (() => {
      t0.value = value;
      return t0;
    })();
  };
  dart.defineLazy(over_react_redux, {
    /*over_react_redux.mockableJsConnect*/get mockableJsConnect() {
      return dart.tearoffInterop(dart.global.ReactRedux.connect);
    },
    set mockableJsConnect(_) {},
    /*over_react_redux.ReduxProvider*/get ReduxProvider() {
      return dart.fn((map = null) => new over_react_redux.ReduxProviderProps.new(map), T$.MapLToReduxProviderPropsL());
    },
    set ReduxProvider(_) {},
    /*over_react_redux._$metaForConnectPropsMixin*/get _$metaForConnectPropsMixin() {
      return C[0] || CT.C0;
    }
  }, true);
  var _store = dart.privateName(middleware, "_store");
  var _encodeForTransit = dart.privateName(middleware, "_encodeForTransit");
  var _getActionType = dart.privateName(middleware, "_getActionType");
  var _encodeActionForTransit = dart.privateName(middleware, "_encodeActionForTransit");
  var _relay = dart.privateName(middleware, "_relay");
  var _handleDispatch = dart.privateName(middleware, "_handleDispatch");
  var _handleRemoteAction = dart.privateName(middleware, "_handleRemoteAction");
  middleware._OverReactReduxDevToolsMiddleware = class _OverReactReduxDevToolsMiddleware extends store.MiddlewareClass {
    set store(v) {
      this[_store] = v;
      this.devToolsExt.init(this[_encodeForTransit](v.state));
    }
    get store() {
      return this[_store];
    }
    [_encodeForTransit](content, opts) {
      let shouldRethrow = opts && 'shouldRethrow' in opts ? opts.shouldRethrow : false;
      try {
        return js_util.jsify(convert.jsonDecode(convert.jsonEncode(content)));
      } catch (e$) {
        let e = dart.getThrown(e$);
        this.log.warning(e);
        this.log.warning("You must implement a `toJson` method in your state and actions in order to view state changes in the redux dev tools.\n" + "If you are not sure what is causing this issue in DevTools, you can use \"pause on caught exceptions\" to pinpoint which part of your state/action is not able to be converted to json.");
        if (dart.test(shouldRethrow)) dart.rethrow(e$);
      }
    }
    [_encodeActionForTransit](action) {
      try {
        return this[_encodeForTransit](new (T$.IdentityMapOfStringL$dynamic()).from(["type", this[_getActionType](action), "payload", action]), {shouldRethrow: true});
      } catch (e) {
        let _ = dart.getThrown(e);
        return this[_encodeForTransit](new (T$.IdentityMapOfStringL$StringL()).from(["type", this[_getActionType](action)]));
      }
    }
    [_getActionType](action) {
      let actionString = dart.toString(action);
      if (actionString[$startsWith]("Instance of")) {
        return dart.toString(dart.runtimeType(action));
      }
      return actionString;
    }
    [_relay](type, state = null, action = null, nextActionId = null) {
      let message = new js_backed_map.JsBackedMap.new();
      message._set("type", type);
      if (state != null) {
        try {
          message._set("payload", this[_encodeForTransit](state, {shouldRethrow: true}));
        } catch (e) {
          let _ = dart.getThrown(e);
          message._set("payload", "Could not encode state. Ensure state is json encodable");
        }
      }
      if (type === "ACTION") {
        message._set("action", this[_encodeActionForTransit](action));
        message._set("nextActionId", nextActionId);
      } else if (action != null) {
        message._set("action", T$.StringL().as(action));
      }
      if (dart.test(message.containsKey("action"))) {
        this.devToolsExt.send(message._get("action"), message._get("payload"));
      } else {
        this.devToolsExt.send(message.jsObject);
      }
    }
    handleEventFromRemote(jsData) {
      let t6;
      let data = js_backed_map.JsBackedMap.fromJs(jsData);
      switch (T$.StringL().as(data._get("type"))) {
        case "DISPATCH":
        {
          this[_handleDispatch](js_backed_map.JsBackedMap.fromJs(dart.legacy(dart.anonymousJSType("JsMap")).as(data._get("payload"))));
          break;
        }
        case "ACTION":
        {
          this[_handleRemoteAction](T$.StringL().as(data._get("action")));
          break;
        }
        case "START":
        {
          break;
        }
        default:
        {
          this.log.warning("Unknown event from " + dart.str((t6 = data._get("source"), t6 == null ? "remote" : t6)) + ": " + dart.str(data._get("type")) + ". Ignoring", jsData);
        }
      }
    }
    [_handleDispatch](action) {
      if (this.store == null) {
        this.log.warning("No store reference set, cannot dispatch remote action");
        return;
      }
      switch (T$.StringL().as(dart.dsend(action, '_get', ["type"]))) {
        case "JUMP_TO_ACTION":
        case "JUMP_TO_STATE":
        {
          this.store.dispatch(actions.DevToolsAction.jumpToState(T$.intL().as(dart.dsend(action, '_get', ["actionId"]))));
          break;
        }
        default:
        {
          this.log.warning("Unknown command: " + dart.str(dart.dsend(action, '_get', ["type"])) + ". Ignoring");
        }
      }
    }
    [_handleRemoteAction](action) {
      if (this.store == null) {
        this.log.warning("No store reference set, cannot dispatch remote action");
        return;
      }
      this.store.dispatch(actions.DevToolsAction.perform(convert.jsonDecode(action)));
    }
    call(storeArg, action, next) {
      T$.StoreL().as(storeArg);
      next(action);
      if (this.devToolsExt == null) return;
      this.store == null ? this.store = storeArg : null;
      if (!T$.DevToolsActionL().is(action)) {
        this[_relay]("ACTION", this.store.state, action);
      }
    }
  };
  (middleware._OverReactReduxDevToolsMiddleware.new = function() {
    this[_store] = null;
    this.devToolsExt = null;
    this.log = logger.Logger.new("OverReactReduxDevToolsMiddleware");
    let windowConsole = html.window.console;
    this.log.onRecord.listen(dart.fn(rec => {
      if (rec.loggerName != this.log.name) return;
      if (dart.equals(rec.level, level.Level.WARNING)) {
        js_util.callMethod(windowConsole, "warn", (() => {
          let t0 = T$.JSArrayOfObjectL().of([dart.str(this.log.name) + " [" + dart.str(rec.level.name) + "]: " + dart.str(rec.message)]);
          if (rec.error != null) t0[$add](rec.error);
          return t0;
        })());
      } else {
        js_util.callMethod(windowConsole, "log", (() => {
          let t1 = T$.JSArrayOfObjectL().of([dart.str(this.log.name) + " [" + dart.str(rec.level.name) + "]: " + dart.str(rec.message)]);
          if (rec.error != null) t1[$add](rec.error);
          return t1;
        })());
      }
    }, T$.LogRecordLToNull()));
    try {
      this.devToolsExt = dart.global.__REDUX_DEVTOOLS_EXTENSION__.connect();
      this.devToolsExt.subscribe(js.allowInterop(T$.JsMapLToLdynamic(), dart.bind(this, 'handleEventFromRemote')));
    } catch (e$) {
      let e = dart.getThrown(e$);
      this.log.warning(e);
      this.log.warning("Unable to connect to the redux dev tools browser extension.\n" + "Please install it...\n" + "Chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en\n" + "Firefox: https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/");
    }
  }).prototype = middleware._OverReactReduxDevToolsMiddleware.prototype;
  dart.addTypeTests(middleware._OverReactReduxDevToolsMiddleware);
  dart.addTypeCaches(middleware._OverReactReduxDevToolsMiddleware);
  dart.setMethodSignature(middleware._OverReactReduxDevToolsMiddleware, () => ({
    __proto__: dart.getMethods(middleware._OverReactReduxDevToolsMiddleware.__proto__),
    [_encodeForTransit]: dart.fnType(dart.dynamic, [dart.dynamic], {shouldRethrow: dart.legacy(core.bool)}, {}),
    [_encodeActionForTransit]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_getActionType]: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    [_relay]: dart.fnType(dart.void, [dart.legacy(core.String)], [dart.legacy(core.Object), dart.dynamic, dart.legacy(core.String)]),
    handleEventFromRemote: dart.fnType(dart.void, [dart.legacy(dart.anonymousJSType("JsMap"))]),
    [_handleDispatch]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleRemoteAction]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    call: dart.fnType(dart.dynamic, [dart.legacy(core.Object), dart.dynamic, dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))])
  }));
  dart.setGetterSignature(middleware._OverReactReduxDevToolsMiddleware, () => ({
    __proto__: dart.getGetters(middleware._OverReactReduxDevToolsMiddleware.__proto__),
    store: dart.legacy(store.Store)
  }));
  dart.setSetterSignature(middleware._OverReactReduxDevToolsMiddleware, () => ({
    __proto__: dart.getSetters(middleware._OverReactReduxDevToolsMiddleware.__proto__),
    store: dart.legacy(store.Store)
  }));
  dart.setLibraryUri(middleware._OverReactReduxDevToolsMiddleware, I[1]);
  dart.setFieldSignature(middleware._OverReactReduxDevToolsMiddleware, () => ({
    __proto__: dart.getFields(middleware._OverReactReduxDevToolsMiddleware.__proto__),
    [_store]: dart.fieldType(dart.legacy(store.Store)),
    devToolsExt: dart.fieldType(dart.legacy(dart.anonymousJSType("_ReduxDevToolsExtensionConnection"))),
    log: dart.finalFieldType(dart.legacy(logger.Logger))
  }));
  dart.defineLazy(middleware, {
    /*middleware.overReactReduxDevToolsMiddleware*/get overReactReduxDevToolsMiddleware() {
      return new middleware._OverReactReduxDevToolsMiddleware.new();
    }
  }, true);
  use_store.useStore = function useStore(TReduxState) {
    return dart.legacy(store.Store$(dart.legacy(TReduxState))).as(dart.global.ReactRedux.useStore().dartStore);
  };
  use_store.createStoreHook = function createStoreHook(TReduxState, context = null) {
    let t6, t6$;
    let jsHook = dart.global.ReactRedux.createStoreHook((t6$ = (t6 = context, t6 == null ? null : t6.jsThis), t6$ == null ? dart.global.ReactRedux.ReactReduxContext : t6$));
    function dartHook() {
      return dart.legacy(store.Store$(dart.legacy(TReduxState))).as(jsHook().dartStore);
    }
    dart.fn(dartHook, dart.fnType(dart.legacy(store.Store$(dart.legacy(TReduxState))), []));
    return dartHook;
  };
  use_selector.useSelector = function useSelector(TReduxState, TValue, selector, equalityFn = null) {
    function jsSelector(jsState) {
      return over_react_redux.wrapInteropValue(selector(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsState)));
    }
    dart.fn(jsSelector, T$.ReactInteropValueLToReactInteropValueL());
    let jsEqualityFn = equalityFn == null ? null : js.allowInterop(T$.ReactInteropValueLAndReactInteropValueLToLboolL(), dart.fn((nextJsValue, prevJsValue) => equalityFn(over_react_redux.unwrapInteropValue(dart.legacy(TValue), nextJsValue), over_react_redux.unwrapInteropValue(dart.legacy(TValue), prevJsValue)), T$.ReactInteropValueLAndReactInteropValueLToboolL()));
    return over_react_redux.unwrapInteropValue(dart.legacy(TValue), dart.global.ReactRedux.useSelector(js.allowInterop(T$.ReactInteropValueLToLReactInteropValueL(), jsSelector), dart.assertInterop(jsEqualityFn)));
  };
  use_selector.createSelectorHook = function createSelectorHook(TReduxState, context = null) {
    let t6, t6$;
    let jsHook = dart.global.ReactRedux.createSelectorHook((t6$ = (t6 = context, t6 == null ? null : t6.jsThis), t6$ == null ? dart.global.ReactRedux.ReactReduxContext : t6$));
    function dartHook(TValue, selector, equalityFn = null) {
      function jsSelector(jsState) {
        return over_react_redux.wrapInteropValue(selector(over_react_redux.unwrapInteropValue(dart.legacy(TReduxState), jsState)));
      }
      dart.fn(jsSelector, T$.ReactInteropValueLToReactInteropValueL());
      let jsEqualityFn = equalityFn == null ? null : js.allowInterop(T$.ReactInteropValueLAndReactInteropValueLToLboolL(), dart.fn((nextJsValue, prevJsValue) => equalityFn(over_react_redux.unwrapInteropValue(dart.legacy(TValue), nextJsValue), over_react_redux.unwrapInteropValue(dart.legacy(TValue), prevJsValue)), T$.ReactInteropValueLAndReactInteropValueLToboolL()));
      return over_react_redux.unwrapInteropValue(dart.legacy(TValue), jsHook(js.allowInterop(T$.ReactInteropValueLToLReactInteropValueL(), jsSelector), jsEqualityFn));
    }
    dart.fn(dartHook, dart.gFnType(TValue => {
      var TValueL = () => (TValueL = dart.constFn(dart.legacy(TValue)))();
      var TValueLAndTValueLToboolL = () => (TValueLAndTValueLToboolL = dart.constFn(dart.fnType(T$.boolL(), [TValueL(), TValueL()])))();
      var TValueLAndTValueLToLboolL = () => (TValueLAndTValueLToLboolL = dart.constFn(dart.legacy(TValueLAndTValueLToboolL())))();
      return [TValueL(), [dart.legacy(dart.fnType(TValueL(), [dart.legacy(TReduxState)]))], [TValueLAndTValueLToLboolL()]];
    }));
    return dartHook;
  };
  use_dispatch.useDispatch = function useDispatch() {
    return dart.global.ReactRedux.useDispatch();
  };
  use_dispatch.createDispatchHook = function createDispatchHook(TReduxState, context = null) {
    let t6, t6$;
    return dart.global.ReactRedux.createDispatchHook((t6$ = (t6 = context, t6 == null ? null : t6.jsThis), t6$ == null ? dart.global.ReactRedux.ReactReduxContext : t6$));
  };
  dart.trackLibraries("packages/over_react/src/over_react_redux/devtools/middleware", {
    "package:over_react/src/over_react_redux/over_react_redux.dart": over_react_redux,
    "package:over_react/src/over_react_redux/devtools/middleware.dart": middleware,
    "package:over_react/src/over_react_redux/hooks/use_store.dart": use_store,
    "package:over_react/src/over_react_redux/hooks/use_selector.dart": use_selector,
    "package:over_react/src/over_react_redux/hooks/use_dispatch.dart": use_dispatch
  }, {
    "package:over_react/src/over_react_redux/over_react_redux.dart": ["over_react_redux.over_react.g.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["../over_react_redux.dart","../over_react_redux.over_react.g.dart","middleware.dart","../hooks/use_store.dart","../hooks/use_selector.dart","../hooks/use_dispatch.dart"],"names":[],"mappings":"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","file":"middleware.unsound.ddc.js"}');
  // Exports:
  return {
    src__over_react_redux__over_react_redux: over_react_redux,
    src__over_react_redux__devtools__middleware: middleware,
    src__over_react_redux__hooks__use_store: use_store,
    src__over_react_redux__hooks__use_selector: use_selector,
    src__over_react_redux__hooks__use_dispatch: use_dispatch
  };
}));

//# sourceMappingURL=middleware.unsound.ddc.js.map
