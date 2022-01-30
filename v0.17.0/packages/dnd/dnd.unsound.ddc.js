define(['dart_sdk'], (function load__packages__dnd__dnd(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dnd = Object.create(dart.library);
  var $add = dartx.add;
  var $classes = dartx.classes;
  var $onClick = dartx.onClick;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $pointerEvents = dartx.pointerEvents;
  var $transform = dartx.transform;
  var $left = dartx.left;
  var $top = dartx.top;
  var $getComputedStyle = dartx.getComputedStyle;
  var $marginLeft = dartx.marginLeft;
  var $replaceFirst = dartx.replaceFirst;
  var $marginTop = dartx.marginTop;
  var $position = dartx.position;
  var $topLeft = dartx.topLeft;
  var $offset = dartx.offset;
  var $clone = dartx.clone;
  var $attributes = dartx.attributes;
  var $cursor = dartx.cursor;
  var $zIndex = dartx.zIndex;
  var $append = dartx.append;
  var $animationFrame = dartx.animationFrame;
  var $touchAction = dartx.touchAction;
  var $onKeyDown = dartx.onKeyDown;
  var $onBlur = dartx.onBlur;
  var $currentTarget = dartx.currentTarget;
  var $round = dartx.round;
  var $elementFromPoint = dartx.elementFromPoint;
  var $visibility = dartx.visibility;
  var $shadowRoot = dartx.shadowRoot;
  var $containsKey = dartx.containsKey;
  var $matchesWithAncestors = dartx.matchesWithAncestors;
  var $any = dartx.any;
  var $onTouchStart = dartx.onTouchStart;
  var $length = dartx.length;
  var $target = dartx.target;
  var $_get = dartx._get;
  var $page = dartx.page;
  var $onTouchMove = dartx.onTouchMove;
  var $client = dartx.client;
  var $onTouchEnd = dartx.onTouchEnd;
  var $onTouchCancel = dartx.onTouchCancel;
  var $abs = dartx.abs;
  var $onMouseDown = dartx.onMouseDown;
  var $onMouseMove = dartx.onMouseMove;
  var $onMouseUp = dartx.onMouseUp;
  var $on = dartx.on;
  var $relatedTarget = dartx.relatedTarget;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JSArrayOf_EventManager: () => (T.JSArrayOf_EventManager = dart.constFn(_interceptors.JSArray$(dnd._EventManager)))(),
    ListOfElement: () => (T.ListOfElement = dart.constFn(core.List$(html.Element)))(),
    JSArrayOfElement: () => (T.JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))(),
    StreamControllerOfDraggableEvent: () => (T.StreamControllerOfDraggableEvent = dart.constFn(async.StreamController$(dnd.DraggableEvent)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    _EventManagerTovoid: () => (T._EventManagerTovoid = dart.constFn(dart.fnType(dart.void, [dnd._EventManager])))(),
    PointOfnum: () => (T.PointOfnum = dart.constFn(math.Point$(core.num)))(),
    numTovoid: () => (T.numTovoid = dart.constFn(dart.fnType(dart.void, [core.num])))(),
    EventStreamProviderOfMouseEvent: () => (T.EventStreamProviderOfMouseEvent = dart.constFn(html.EventStreamProvider$(html.MouseEvent)))(),
    JSArrayOfStreamSubscription: () => (T.JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))(),
    ElementTovoid: () => (T.ElementTovoid = dart.constFn(dart.fnType(dart.void, [html.Element])))(),
    KeyboardEventTovoid: () => (T.KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))(),
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    StreamSubscriptionTovoid: () => (T.StreamSubscriptionTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))(),
    ElementTobool: () => (T.ElementTobool = dart.constFn(dart.fnType(core.bool, [html.Element])))(),
    TouchEventTovoid: () => (T.TouchEventTovoid = dart.constFn(dart.fnType(dart.void, [html.TouchEvent])))(),
    StreamControllerOfDropzoneEvent: () => (T.StreamControllerOfDropzoneEvent = dart.constFn(async.StreamController$(dnd.DropzoneEvent)))(),
    _IdentityHashSetOfint: () => (T._IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))(),
    DraggableTovoid: () => (T.DraggableTovoid = dart.constFn(dart.fnType(dart.void, [dnd.Draggable])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/dnd/src/draggable.dart",
    "package:dnd/dnd.dart",
    "org-dartlang-app:///packages/dnd/src/draggable_avatar.dart",
    "org-dartlang-app:///packages/dnd/src/draggable_dispatch.dart",
    "org-dartlang-app:///packages/dnd/src/draggable_manager.dart",
    "org-dartlang-app:///packages/dnd/src/dropzone.dart",
    "org-dartlang-app:///packages/dnd/src/dropzone_acceptor.dart"
  ];
  var id = dart.privateName(dnd, "Draggable.id");
  var avatarHandler$ = dart.privateName(dnd, "Draggable.avatarHandler");
  var horizontalOnly$ = dart.privateName(dnd, "Draggable.horizontalOnly");
  var verticalOnly$ = dart.privateName(dnd, "Draggable.verticalOnly");
  var handle$ = dart.privateName(dnd, "Draggable.handle");
  var cancel$ = dart.privateName(dnd, "Draggable.cancel");
  var draggingClass$ = dart.privateName(dnd, "Draggable.draggingClass");
  var draggingClassBody$ = dart.privateName(dnd, "Draggable.draggingClassBody");
  var minDragStartDistance$ = dart.privateName(dnd, "Draggable.minDragStartDistance");
  var _onDragStart = dart.privateName(dnd, "_onDragStart");
  var _onDrag = dart.privateName(dnd, "_onDrag");
  var _onDragEnd = dart.privateName(dnd, "_onDragEnd");
  var __Draggable__elements = dart.privateName(dnd, "_#Draggable#_elements");
  var __Draggable__elements_isSet = dart.privateName(dnd, "_#Draggable#_elements#isSet");
  var _eventManagers = dart.privateName(dnd, "_eventManagers");
  var _elements = dart.privateName(dnd, "_elements");
  var _handleDragEnd = dart.privateName(dnd, "_handleDragEnd");
  var _handleDragStart = dart.privateName(dnd, "_handleDragStart");
  var _clearTextSelections = dart.privateName(dnd, "_clearTextSelections");
  var _handleDrag = dart.privateName(dnd, "_handleDrag");
  var _suppressClickEvent = dart.privateName(dnd, "_suppressClickEvent");
  var _resetCurrentDrag = dart.privateName(dnd, "_resetCurrentDrag");
  dnd.Draggable = class Draggable extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get avatarHandler() {
      return this[avatarHandler$];
    }
    set avatarHandler(value) {
      this[avatarHandler$] = value;
    }
    get horizontalOnly() {
      return this[horizontalOnly$];
    }
    set horizontalOnly(value) {
      this[horizontalOnly$] = value;
    }
    get verticalOnly() {
      return this[verticalOnly$];
    }
    set verticalOnly(value) {
      this[verticalOnly$] = value;
    }
    get handle() {
      return this[handle$];
    }
    set handle(value) {
      this[handle$] = value;
    }
    get cancel() {
      return this[cancel$];
    }
    set cancel(value) {
      this[cancel$] = value;
    }
    get draggingClass() {
      return this[draggingClass$];
    }
    set draggingClass(value) {
      this[draggingClass$] = value;
    }
    get draggingClassBody() {
      return this[draggingClassBody$];
    }
    set draggingClassBody(value) {
      this[draggingClassBody$] = value;
    }
    get minDragStartDistance() {
      return this[minDragStartDistance$];
    }
    set minDragStartDistance(value) {
      this[minDragStartDistance$] = value;
    }
    get clickSuppression() {
      return this.minDragStartDistance;
    }
    set clickSuppression(distance) {
      if (distance == null) dart.nullFailed(I[0], 67, 28, "distance");
      return this.minDragStartDistance = distance;
    }
    get onDragStart() {
      if (this[_onDragStart] == null) {
        this[_onDragStart] = T.StreamControllerOfDraggableEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragStart] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDragStart]).stream;
    }
    get onDrag() {
      if (this[_onDrag] == null) {
        this[_onDrag] = T.StreamControllerOfDraggableEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDrag] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDrag]).stream;
    }
    get onDragEnd() {
      if (this[_onDragEnd] == null) {
        this[_onDragEnd] = T.StreamControllerOfDraggableEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragEnd] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDragEnd]).stream;
    }
    abort() {
      if (dnd._currentDrag != null && dart.nullCheck(dnd._currentDrag).draggableId == this.id) {
        this[_handleDragEnd](null, null, {cancelled: true});
      }
    }
    get [_elements]() {
      let t0;
      return dart.test(this[__Draggable__elements_isSet]) ? (t0 = this[__Draggable__elements], t0) : dart.throw(new _internal.LateError.fieldNI("_elements"));
    }
    set [_elements](t0) {
      if (t0 == null) dart.nullFailed(I[0], 119, 22, "null");
      this[__Draggable__elements_isSet] = true;
      this[__Draggable__elements] = t0;
    }
    [_handleDragStart](moveEvent) {
      if (moveEvent == null) dart.nullFailed(I[0], 197, 31, "moveEvent");
      dart.nullCheck(dnd._currentDrag).started = true;
      if (this.avatarHandler != null) {
        dart.nullCheck(this.avatarHandler)[_handleDragStart](dart.nullCheck(dnd._currentDrag).element, dart.nullCheck(dnd._currentDrag).position);
      }
      if (this[_onDragStart] != null) {
        dart.nullCheck(this[_onDragStart]).add(new dnd.DraggableEvent.__(moveEvent, dart.nullCheck(dnd._currentDrag)));
      }
      dart.nullCheck(dnd._currentDrag).element[$classes].add(this.draggingClass);
      dart.nullCheck(html.document.body)[$classes].add(this.draggingClassBody);
      this[_clearTextSelections]();
    }
    [_handleDrag](moveEvent, target) {
      if (moveEvent == null) dart.nullFailed(I[0], 226, 26, "moveEvent");
      if (this.avatarHandler != null) {
        dart.nullCheck(this.avatarHandler)[_handleDrag](dart.nullCheck(dnd._currentDrag).startPosition, dart.nullCheck(dnd._currentDrag).position);
      }
      dnd._DragEventDispatcher.dispatchEnterOverLeave(this, target);
      if (this[_onDrag] != null) {
        dart.nullCheck(this[_onDrag]).add(new dnd.DraggableEvent.__(moveEvent, dart.nullCheck(dnd._currentDrag)));
      }
    }
    [_handleDragEnd](event, target, opts) {
      let cancelled = opts && 'cancelled' in opts ? opts.cancelled : false;
      if (dnd._currentDrag != null && dart.test(dart.nullCheck(dnd._currentDrag).started)) {
        if (this.avatarHandler != null) {
          dart.nullCheck(this.avatarHandler)[_handleDragEnd](dart.nullCheck(dnd._currentDrag).startPosition, dart.nullCheck(dnd._currentDrag).position);
        }
        if (!dart.dtest(cancelled) && target != null) {
          dnd._DragEventDispatcher.dispatchDrop(this, target);
        }
        if (this[_onDragEnd] != null) {
          dart.nullCheck(this[_onDragEnd]).add(new dnd.DraggableEvent.__(event, dart.nullCheck(dnd._currentDrag), {cancelled: core.bool.as(cancelled)}));
        }
        if (event != null) {
          event.preventDefault();
        }
        if (html.MouseEvent.is(event)) {
          this[_suppressClickEvent](dart.nullCheck(dnd._currentDrag).element);
        }
        dart.nullCheck(dnd._currentDrag).element[$classes].remove(this.draggingClass);
        dart.nullCheck(html.document.body)[$classes].remove(this.draggingClassBody);
      }
      this[_resetCurrentDrag]();
    }
    [_suppressClickEvent](element) {
      if (element == null) dart.nullFailed(I[0], 293, 36, "element");
      let clickPreventer = element[$onClick].listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[0], 294, 65, "event");
        event.stopPropagation();
        event.preventDefault();
      }, T.MouseEventTovoid()));
      T.FutureOfNull().new(dart.fn(() => {
        clickPreventer.cancel();
      }, T.VoidToNull()));
    }
    destroy() {
      this[_resetCurrentDrag]();
      this[_eventManagers][$forEach](dart.fn(m => {
        if (m == null) dart.nullFailed(I[0], 313, 29, "m");
        return m.destroy();
      }, T._EventManagerTovoid()));
      this[_eventManagers][$clear]();
      if (this.avatarHandler != null && dart.nullCheck(this.avatarHandler).avatar != null) {
        dart.nullCheck(dart.nullCheck(this.avatarHandler).avatar)[$remove]();
      }
    }
    [_resetCurrentDrag]() {
      this[_eventManagers][$forEach](dart.fn(m => {
        if (m == null) dart.nullFailed(I[0], 323, 29, "m");
        return m.reset();
      }, T._EventManagerTovoid()));
      dnd._DragEventDispatcher.reset();
      dnd._currentDrag = null;
    }
    [_clearTextSelections]() {
      let t1;
      t1 = html.window.getSelection();
      t1 == null ? null : t1.removeAllRanges();
      try {
        let activeElement = html.document.activeElement;
        if (html.TextAreaElement.is(activeElement)) {
          activeElement.setSelectionRange(0, 0);
        } else if (html.InputElement.is(activeElement)) {
          activeElement.setSelectionRange(0, 0);
        }
      } catch (e) {
        let _ = dart.getThrown(e);
        if (core.Object.is(_)) {
        } else
          throw e;
      }
    }
  };
  (dnd.Draggable.new = function(elementOrElementList, opts) {
    let t0;
    let avatarHandler = opts && 'avatarHandler' in opts ? opts.avatarHandler : null;
    let horizontalOnly = opts && 'horizontalOnly' in opts ? opts.horizontalOnly : false;
    if (horizontalOnly == null) dart.nullFailed(I[0], 167, 12, "horizontalOnly");
    let verticalOnly = opts && 'verticalOnly' in opts ? opts.verticalOnly : false;
    if (verticalOnly == null) dart.nullFailed(I[0], 168, 12, "verticalOnly");
    let handle = opts && 'handle' in opts ? opts.handle : null;
    let cancel = opts && 'cancel' in opts ? opts.cancel : "input, textarea, button, select, option";
    if (cancel == null) dart.nullFailed(I[0], 170, 12, "cancel");
    let draggingClass = opts && 'draggingClass' in opts ? opts.draggingClass : "dnd-dragging";
    if (draggingClass == null) dart.nullFailed(I[0], 171, 12, "draggingClass");
    let draggingClassBody = opts && 'draggingClassBody' in opts ? opts.draggingClassBody : "dnd-drag-occurring";
    if (draggingClassBody == null) dart.nullFailed(I[0], 172, 12, "draggingClassBody");
    let minDragStartDistance = opts && 'minDragStartDistance' in opts ? opts.minDragStartDistance : 4;
    if (minDragStartDistance == null) dart.nullFailed(I[0], 173, 12, "minDragStartDistance");
    this[id] = (t0 = dnd.Draggable.idCounter, dnd.Draggable.idCounter = dart.notNull(t0) + 1, t0);
    this[_onDragStart] = null;
    this[_onDrag] = null;
    this[_onDragEnd] = null;
    this[__Draggable__elements] = null;
    this[__Draggable__elements_isSet] = false;
    this[_eventManagers] = T.JSArrayOf_EventManager().of([]);
    this[avatarHandler$] = avatarHandler;
    this[horizontalOnly$] = horizontalOnly;
    this[verticalOnly$] = verticalOnly;
    this[handle$] = handle;
    this[cancel$] = cancel;
    this[draggingClass$] = draggingClass;
    this[draggingClassBody$] = draggingClassBody;
    this[minDragStartDistance$] = minDragStartDistance;
    this[_elements] = T.ListOfElement().is(elementOrElementList) ? elementOrElementList : T.JSArrayOfElement().of([html.Element.as(elementOrElementList)]);
    let jsWindow = js.JsObject.fromBrowserObject(html.window);
    if (dart.test(jsWindow.hasProperty("PointerEvent"))) {
      this[_eventManagers][$add](new dnd._PointerManager.new(this));
    } else {
      if (dart.test(html.TouchEvent.supported)) {
        this[_eventManagers][$add](new dnd._TouchManager.new(this));
      }
      this[_eventManagers][$add](new dnd._MouseManager.new(this));
    }
  }).prototype = dnd.Draggable.prototype;
  dart.addTypeTests(dnd.Draggable);
  dart.addTypeCaches(dnd.Draggable);
  dart.setMethodSignature(dnd.Draggable, () => ({
    __proto__: dart.getMethods(dnd.Draggable.__proto__),
    abort: dart.fnType(dart.void, []),
    [_handleDragStart]: dart.fnType(dart.void, [html.Event]),
    [_handleDrag]: dart.fnType(dart.void, [html.Event, dart.nullable(html.EventTarget)]),
    [_handleDragEnd]: dart.fnType(dart.void, [dart.nullable(html.Event), dart.nullable(html.EventTarget)], {cancelled: dart.dynamic}, {}),
    [_suppressClickEvent]: dart.fnType(dart.void, [html.Element]),
    destroy: dart.fnType(dart.void, []),
    [_resetCurrentDrag]: dart.fnType(dart.void, []),
    [_clearTextSelections]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dnd.Draggable, () => ({
    __proto__: dart.getGetters(dnd.Draggable.__proto__),
    clickSuppression: core.int,
    onDragStart: async.Stream$(dnd.DraggableEvent),
    onDrag: async.Stream$(dnd.DraggableEvent),
    onDragEnd: async.Stream$(dnd.DraggableEvent),
    [_elements]: core.List$(html.Element)
  }));
  dart.setSetterSignature(dnd.Draggable, () => ({
    __proto__: dart.getSetters(dnd.Draggable.__proto__),
    clickSuppression: core.int,
    [_elements]: core.List$(html.Element)
  }));
  dart.setLibraryUri(dnd.Draggable, I[1]);
  dart.setFieldSignature(dnd.Draggable, () => ({
    __proto__: dart.getFields(dnd.Draggable.__proto__),
    id: dart.finalFieldType(core.int),
    avatarHandler: dart.fieldType(dart.nullable(dnd.AvatarHandler)),
    horizontalOnly: dart.fieldType(core.bool),
    verticalOnly: dart.fieldType(core.bool),
    handle: dart.fieldType(dart.nullable(core.String)),
    cancel: dart.fieldType(core.String),
    draggingClass: dart.fieldType(core.String),
    draggingClassBody: dart.fieldType(core.String),
    minDragStartDistance: dart.fieldType(core.int),
    [_onDragStart]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DraggableEvent))),
    [_onDrag]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DraggableEvent))),
    [_onDragEnd]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DraggableEvent))),
    [__Draggable__elements]: dart.fieldType(dart.nullable(core.List$(html.Element))),
    [__Draggable__elements_isSet]: dart.fieldType(core.bool),
    [_eventManagers]: dart.finalFieldType(core.List$(dnd._EventManager))
  }));
  dart.defineLazy(dnd.Draggable, {
    /*dnd.Draggable.idCounter*/get idCounter() {
      return 0;
    },
    set idCounter(_) {}
  }, false);
  var draggableElement = dart.privateName(dnd, "DraggableEvent.draggableElement");
  var avatarHandler = dart.privateName(dnd, "DraggableEvent.avatarHandler");
  var originalEvent$ = dart.privateName(dnd, "DraggableEvent.originalEvent");
  var startPosition = dart.privateName(dnd, "DraggableEvent.startPosition");
  var position = dart.privateName(dnd, "DraggableEvent.position");
  var cancelled$ = dart.privateName(dnd, "DraggableEvent.cancelled");
  dnd.DraggableEvent = class DraggableEvent extends core.Object {
    get draggableElement() {
      return this[draggableElement];
    }
    set draggableElement(value) {
      super.draggableElement = value;
    }
    get avatarHandler() {
      return this[avatarHandler];
    }
    set avatarHandler(value) {
      super.avatarHandler = value;
    }
    get originalEvent() {
      return this[originalEvent$];
    }
    set originalEvent(value) {
      super.originalEvent = value;
    }
    get startPosition() {
      return this[startPosition];
    }
    set startPosition(value) {
      super.startPosition = value;
    }
    get position() {
      return this[position];
    }
    set position(value) {
      super.position = value;
    }
    get cancelled() {
      return this[cancelled$];
    }
    set cancelled(value) {
      super.cancelled = value;
    }
  };
  (dnd.DraggableEvent.__ = function(originalEvent, dragInfo, opts) {
    if (dragInfo == null) dart.nullFailed(I[0], 383, 50, "dragInfo");
    let cancelled = opts && 'cancelled' in opts ? opts.cancelled : false;
    if (cancelled == null) dart.nullFailed(I[0], 384, 13, "cancelled");
    this[originalEvent$] = originalEvent;
    this[cancelled$] = cancelled;
    this[draggableElement] = dragInfo.element;
    this[avatarHandler] = dragInfo.avatarHandler;
    this[startPosition] = dragInfo.startPosition;
    this[position] = dragInfo.position;
    ;
  }).prototype = dnd.DraggableEvent.prototype;
  dart.addTypeTests(dnd.DraggableEvent);
  dart.addTypeCaches(dnd.DraggableEvent);
  dart.setLibraryUri(dnd.DraggableEvent, I[1]);
  dart.setFieldSignature(dnd.DraggableEvent, () => ({
    __proto__: dart.getFields(dnd.DraggableEvent.__proto__),
    draggableElement: dart.finalFieldType(html.Element),
    avatarHandler: dart.finalFieldType(dart.nullable(dnd.AvatarHandler)),
    originalEvent: dart.finalFieldType(dart.nullable(html.Event)),
    startPosition: dart.finalFieldType(math.Point$(core.num)),
    position: dart.finalFieldType(math.Point$(core.num)),
    cancelled: dart.finalFieldType(core.bool)
  }));
  var ___DragInfo__position = dart.privateName(dnd, "_#_DragInfo#_position");
  var ___DragInfo__position_isSet = dart.privateName(dnd, "_#_DragInfo#_position#isSet");
  var _position = dart.privateName(dnd, "_position");
  var _constrainAxis = dart.privateName(dnd, "_constrainAxis");
  dnd._DragInfo = class _DragInfo extends core.Object {
    get [_position]() {
      let t2;
      return dart.test(this[___DragInfo__position_isSet]) ? (t2 = this[___DragInfo__position], t2) : dart.throw(new _internal.LateError.fieldNI("_position"));
    }
    set [_position](t2) {
      if (t2 == null) dart.nullFailed(I[0], 407, 14, "null");
      this[___DragInfo__position_isSet] = true;
      this[___DragInfo__position] = t2;
    }
    get position() {
      return this[_position];
    }
    set position(pos) {
      if (pos == null) dart.nullFailed(I[0], 428, 22, "pos");
      return this[_position] = this[_constrainAxis](pos);
    }
    [_constrainAxis](pos) {
      if (pos == null) dart.nullFailed(I[0], 431, 30, "pos");
      if (dart.test(this.horizontalOnly)) {
        return new (T.PointOfnum()).new(pos.x, this.startPosition.y);
      }
      if (dart.test(this.verticalOnly)) {
        return new (T.PointOfnum()).new(this.startPosition.x, pos.y);
      }
      return pos;
    }
  };
  (dnd._DragInfo.new = function(draggableId, element, startPosition, opts) {
    if (draggableId == null) dart.nullFailed(I[0], 415, 18, "draggableId");
    if (element == null) dart.nullFailed(I[0], 415, 36, "element");
    if (startPosition == null) dart.nullFailed(I[0], 415, 50, "startPosition");
    let avatarHandler = opts && 'avatarHandler' in opts ? opts.avatarHandler : null;
    let horizontalOnly = opts && 'horizontalOnly' in opts ? opts.horizontalOnly : false;
    if (horizontalOnly == null) dart.nullFailed(I[0], 417, 12, "horizontalOnly");
    let verticalOnly = opts && 'verticalOnly' in opts ? opts.verticalOnly : false;
    if (verticalOnly == null) dart.nullFailed(I[0], 418, 12, "verticalOnly");
    this[___DragInfo__position] = null;
    this[___DragInfo__position_isSet] = false;
    this.started = false;
    this.draggableId = draggableId;
    this.element = element;
    this.startPosition = startPosition;
    this.avatarHandler = avatarHandler;
    this.horizontalOnly = horizontalOnly;
    this.verticalOnly = verticalOnly;
    this[_position] = this.startPosition;
  }).prototype = dnd._DragInfo.prototype;
  dart.addTypeTests(dnd._DragInfo);
  dart.addTypeCaches(dnd._DragInfo);
  dart.setMethodSignature(dnd._DragInfo, () => ({
    __proto__: dart.getMethods(dnd._DragInfo.__proto__),
    [_constrainAxis]: dart.fnType(math.Point$(core.num), [math.Point$(core.num)])
  }));
  dart.setGetterSignature(dnd._DragInfo, () => ({
    __proto__: dart.getGetters(dnd._DragInfo.__proto__),
    [_position]: math.Point$(core.num),
    position: math.Point$(core.num)
  }));
  dart.setSetterSignature(dnd._DragInfo, () => ({
    __proto__: dart.getSetters(dnd._DragInfo.__proto__),
    [_position]: math.Point$(core.num),
    position: math.Point$(core.num)
  }));
  dart.setLibraryUri(dnd._DragInfo, I[1]);
  dart.setFieldSignature(dnd._DragInfo, () => ({
    __proto__: dart.getFields(dnd._DragInfo.__proto__),
    draggableId: dart.finalFieldType(core.int),
    element: dart.finalFieldType(html.Element),
    startPosition: dart.finalFieldType(math.Point$(core.num)),
    avatarHandler: dart.finalFieldType(dart.nullable(dnd.AvatarHandler)),
    [___DragInfo__position]: dart.fieldType(dart.nullable(math.Point$(core.num))),
    [___DragInfo__position_isSet]: dart.fieldType(core.bool),
    started: dart.fieldType(core.bool),
    horizontalOnly: dart.finalFieldType(core.bool),
    verticalOnly: dart.finalFieldType(core.bool)
  }));
  var avatar = dart.privateName(dnd, "AvatarHandler.avatar");
  var _marginTop = dart.privateName(dnd, "_marginTop");
  var _marginLeft = dart.privateName(dnd, "_marginLeft");
  var _pointerEventsBeforeDrag = dart.privateName(dnd, "_pointerEventsBeforeDrag");
  dnd.AvatarHandler = class AvatarHandler extends core.Object {
    get avatar() {
      return this[avatar];
    }
    set avatar(value) {
      this[avatar] = value;
    }
    get marginTop() {
      if (this[_marginTop] == null) {
        this.cacheMargins();
      }
      return this[_marginTop];
    }
    get marginLeft() {
      if (this[_marginLeft] == null) {
        this.cacheMargins();
      }
      return this[_marginLeft];
    }
    static original() {
      return new dnd.OriginalAvatarHandler.new();
    }
    static clone() {
      return new dnd.CloneAvatarHandler.new();
    }
    [_handleDragStart](draggable, startPosition) {
      if (draggable == null) dart.nullFailed(I[2], 57, 33, "draggable");
      if (startPosition == null) dart.nullFailed(I[2], 57, 50, "startPosition");
      this.dragStart(draggable, startPosition);
      if (this.avatar != null) {
        this[_pointerEventsBeforeDrag] = dart.nullCheck(this.avatar).style[$pointerEvents];
        dart.nullCheck(this.avatar).style[$pointerEvents] = "none";
      }
    }
    [_handleDrag](startPosition, position) {
      if (startPosition == null) dart.nullFailed(I[2], 69, 26, "startPosition");
      if (position == null) dart.nullFailed(I[2], 69, 47, "position");
      this.drag(startPosition, position);
    }
    [_handleDragEnd](startPosition, position) {
      let t3;
      if (startPosition == null) dart.nullFailed(I[2], 74, 29, "startPosition");
      if (position == null) dart.nullFailed(I[2], 74, 50, "position");
      this.dragEnd(startPosition, position);
      if (this.avatar != null) {
        dart.nullCheck(this.avatar).style[$pointerEvents] = (t3 = this[_pointerEventsBeforeDrag], t3 == null ? "" : t3);
      }
      this[_pointerEventsBeforeDrag] = null;
      this.avatar = null;
      this[_marginTop] = null;
      this[_marginLeft] = null;
    }
    setTranslate(position) {
      if (position == null) dart.nullFailed(I[2], 119, 27, "position");
      dnd.AnimationHelper.requestUpdate(dart.fn(() => {
        if (this.avatar != null) {
          dart.nullCheck(this.avatar).style[$transform] = "translate3d(" + dart.str(position.x) + "px, " + dart.str(position.y) + "px, 0)";
        }
      }, T.VoidTovoid()));
    }
    removeTranslate() {
      dnd.AnimationHelper.stop();
      if (this.avatar != null) {
        dart.nullCheck(this.avatar).style[$transform] = "";
      }
    }
    setLeftTop(position) {
      let t3, t3$;
      if (position == null) dart.nullFailed(I[2], 144, 25, "position");
      if (this.avatar != null) {
        dart.nullCheck(this.avatar).style[$left] = dart.str(dart.notNull(position.x) - dart.notNull((t3 = this.marginLeft, t3 == null ? 0 : t3))) + "px";
        dart.nullCheck(this.avatar).style[$top] = dart.str(dart.notNull(position.y) - dart.notNull((t3$ = this.marginTop, t3$ == null ? 0 : t3$))) + "px";
      }
    }
    cacheMargins() {
      let t3, t3$;
      if (this.avatar != null) {
        let computedStyles = dart.nullCheck(this.avatar)[$getComputedStyle]();
        this[_marginLeft] = (t3 = core.num.tryParse(computedStyles[$marginLeft][$replaceFirst]("px", "")), t3 == null ? 0 : t3);
        this[_marginTop] = (t3$ = core.num.tryParse(computedStyles[$marginTop][$replaceFirst]("px", "")), t3$ == null ? 0 : t3$);
      }
    }
  };
  (dnd.AvatarHandler.new = function() {
    this[avatar] = null;
    this[_marginTop] = null;
    this[_marginLeft] = null;
    this[_pointerEventsBeforeDrag] = null;
    ;
  }).prototype = dnd.AvatarHandler.prototype;
  dart.addTypeTests(dnd.AvatarHandler);
  dart.addTypeCaches(dnd.AvatarHandler);
  dart.setMethodSignature(dnd.AvatarHandler, () => ({
    __proto__: dart.getMethods(dnd.AvatarHandler.__proto__),
    [_handleDragStart]: dart.fnType(dart.void, [html.Element, math.Point$(core.num)]),
    [_handleDrag]: dart.fnType(dart.void, [math.Point$(core.num), math.Point$(core.num)]),
    [_handleDragEnd]: dart.fnType(dart.void, [math.Point$(core.num), math.Point$(core.num)]),
    setTranslate: dart.fnType(dart.void, [math.Point$(core.num)]),
    removeTranslate: dart.fnType(dart.void, []),
    setLeftTop: dart.fnType(dart.void, [math.Point$(core.num)]),
    cacheMargins: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dnd.AvatarHandler, () => ({
    __proto__: dart.getGetters(dnd.AvatarHandler.__proto__),
    marginTop: dart.nullable(core.num),
    marginLeft: dart.nullable(core.num)
  }));
  dart.setLibraryUri(dnd.AvatarHandler, I[1]);
  dart.setFieldSignature(dnd.AvatarHandler, () => ({
    __proto__: dart.getFields(dnd.AvatarHandler.__proto__),
    avatar: dart.fieldType(dart.nullable(html.Element)),
    [_marginTop]: dart.fieldType(dart.nullable(core.num)),
    [_marginLeft]: dart.fieldType(dart.nullable(core.num)),
    [_pointerEventsBeforeDrag]: dart.fieldType(dart.nullable(core.String))
  }));
  var _draggableStartOffset = dart.privateName(dnd, "_draggableStartOffset");
  dnd.OriginalAvatarHandler = class OriginalAvatarHandler extends dnd.AvatarHandler {
    dragStart(draggable, startPosition) {
      if (draggable == null) dart.nullFailed(I[2], 173, 26, "draggable");
      if (startPosition == null) dart.nullFailed(I[2], 173, 43, "startPosition");
      this.avatar = draggable;
      if (this.avatar != null) {
        dart.nullCheck(this.avatar).style[$position] = "absolute";
      }
      this[_draggableStartOffset] = draggable[$offset][$topLeft];
      this.setLeftTop(dart.nullCheck(this[_draggableStartOffset]));
    }
    drag(startPosition, position) {
      if (startPosition == null) dart.nullFailed(I[2], 191, 19, "startPosition");
      if (position == null) dart.nullFailed(I[2], 191, 40, "position");
      this.setTranslate(position['-'](startPosition));
    }
    dragEnd(startPosition, position) {
      if (startPosition == null) dart.nullFailed(I[2], 196, 22, "startPosition");
      if (position == null) dart.nullFailed(I[2], 196, 43, "position");
      this.removeTranslate();
      let constrainedPosition = new (T.PointOfnum()).new(math.max(core.num, 1, position.x), math.max(core.num, 1, position.y));
      this.setLeftTop(constrainedPosition['-'](startPosition)['+'](dart.nullCheck(this[_draggableStartOffset])));
    }
  };
  (dnd.OriginalAvatarHandler.new = function() {
    this[_draggableStartOffset] = null;
    dnd.OriginalAvatarHandler.__proto__.new.call(this);
    ;
  }).prototype = dnd.OriginalAvatarHandler.prototype;
  dart.addTypeTests(dnd.OriginalAvatarHandler);
  dart.addTypeCaches(dnd.OriginalAvatarHandler);
  dart.setMethodSignature(dnd.OriginalAvatarHandler, () => ({
    __proto__: dart.getMethods(dnd.OriginalAvatarHandler.__proto__),
    dragStart: dart.fnType(dart.void, [html.Element, math.Point$(core.num)]),
    drag: dart.fnType(dart.void, [math.Point$(core.num), math.Point$(core.num)]),
    dragEnd: dart.fnType(dart.void, [math.Point$(core.num), math.Point$(core.num)])
  }));
  dart.setLibraryUri(dnd.OriginalAvatarHandler, I[1]);
  dart.setFieldSignature(dnd.OriginalAvatarHandler, () => ({
    __proto__: dart.getFields(dnd.OriginalAvatarHandler.__proto__),
    [_draggableStartOffset]: dart.fieldType(dart.nullable(math.Point$(core.num)))
  }));
  dnd.CloneAvatarHandler = class CloneAvatarHandler extends dnd.AvatarHandler {
    dragStart(draggable, startPosition) {
      let t3;
      if (draggable == null) dart.nullFailed(I[2], 213, 26, "draggable");
      if (startPosition == null) dart.nullFailed(I[2], 213, 43, "startPosition");
      this.avatar = (t3 = html.Element.as(draggable[$clone](true)), (() => {
        t3[$attributes][$remove]("id");
        t3.style[$cursor] = "inherit";
        return t3;
      })());
      dart.nullCheck(this.avatar).style[$position] = "absolute";
      dart.nullCheck(this.avatar).style[$zIndex] = "100";
      dart.nullCheck(draggable.parentNode)[$append](dart.nullCheck(this.avatar));
      this.setLeftTop(draggable[$offset][$topLeft]);
    }
    drag(startPosition, position) {
      if (startPosition == null) dart.nullFailed(I[2], 232, 19, "startPosition");
      if (position == null) dart.nullFailed(I[2], 232, 40, "position");
      this.setTranslate(position['-'](startPosition));
    }
    dragEnd(startPosition, position) {
      if (startPosition == null) dart.nullFailed(I[2], 237, 22, "startPosition");
      if (position == null) dart.nullFailed(I[2], 237, 43, "position");
      if (this.avatar != null) {
        dart.nullCheck(this.avatar)[$remove]();
      }
    }
  };
  (dnd.CloneAvatarHandler.new = function() {
    dnd.CloneAvatarHandler.__proto__.new.call(this);
    ;
  }).prototype = dnd.CloneAvatarHandler.prototype;
  dart.addTypeTests(dnd.CloneAvatarHandler);
  dart.addTypeCaches(dnd.CloneAvatarHandler);
  dart.setMethodSignature(dnd.CloneAvatarHandler, () => ({
    __proto__: dart.getMethods(dnd.CloneAvatarHandler.__proto__),
    dragStart: dart.fnType(dart.void, [html.Element, math.Point$(core.num)]),
    drag: dart.fnType(dart.void, [math.Point$(core.num), math.Point$(core.num)]),
    dragEnd: dart.fnType(dart.void, [math.Point$(core.num), math.Point$(core.num)])
  }));
  dart.setLibraryUri(dnd.CloneAvatarHandler, I[1]);
  dnd.AnimationHelper = class AnimationHelper extends core.Object {
    static requestUpdate(updateFunction) {
      if (updateFunction == null) dart.nullFailed(I[2], 252, 34, "updateFunction");
      dnd.AnimationHelper._lastUpdateFunction = updateFunction;
      if (!dart.test(dnd.AnimationHelper._updating)) {
        html.window[$animationFrame].then(dart.void, dart.fn(_ => {
          if (_ == null) dart.nullFailed(I[2], 256, 35, "_");
          return dnd.AnimationHelper._update();
        }, T.numTovoid()));
        dnd.AnimationHelper._updating = true;
      }
    }
    static stop() {
      dnd.AnimationHelper._updating = false;
    }
    static _update() {
      if (dart.test(dnd.AnimationHelper._updating)) {
        if (dnd.AnimationHelper._lastUpdateFunction != null) {
          dart.dcall(dart.nullCheck(dnd.AnimationHelper._lastUpdateFunction), []);
        }
        dnd.AnimationHelper._updating = false;
      }
    }
  };
  (dnd.AnimationHelper.new = function() {
    ;
  }).prototype = dnd.AnimationHelper.prototype;
  dart.addTypeTests(dnd.AnimationHelper);
  dart.addTypeCaches(dnd.AnimationHelper);
  dart.setLibraryUri(dnd.AnimationHelper, I[1]);
  dart.defineLazy(dnd.AnimationHelper, {
    /*dnd.AnimationHelper._lastUpdateFunction*/get _lastUpdateFunction() {
      return null;
    },
    set _lastUpdateFunction(_) {},
    /*dnd.AnimationHelper._updating*/get _updating() {
      return false;
    },
    set _updating(_) {}
  }, false);
  dnd._DragEventDispatcher = class _DragEventDispatcher extends core.Object {
    static dispatchEnterOverLeave(draggable, target) {
      if (draggable == null) dart.nullFailed(I[3], 45, 48, "draggable");
      if (target == null) {
        return;
      }
      if (dart.equals(dnd._DragEventDispatcher.previousTarget, target)) {
        let dragOverEvent = html.MouseEvent.new("_customDragOver");
        target.dispatchEvent(dragOverEvent);
      } else {
        let dragEnterEvent = html.MouseEvent.new("_customDragEnter", {relatedTarget: dnd._DragEventDispatcher.previousTarget});
        target.dispatchEvent(dragEnterEvent);
        if (dnd._DragEventDispatcher.previousTarget != null) {
          let dragLeaveEvent = html.MouseEvent.new("_customDragLeave", {relatedTarget: target});
          dart.nullCheck(dnd._DragEventDispatcher.previousTarget).dispatchEvent(dragLeaveEvent);
        }
        let dragOverEvent = html.MouseEvent.new("_customDragOver");
        target.dispatchEvent(dragOverEvent);
        dnd._DragEventDispatcher.previousTarget = target;
      }
    }
    static dispatchDrop(draggable, target) {
      if (draggable == null) dart.nullFailed(I[3], 81, 38, "draggable");
      if (target == null) {
        return;
      }
      let dropEvent = html.MouseEvent.new("_customDrop");
      target.dispatchEvent(dropEvent);
      dnd._DragEventDispatcher.reset();
    }
    static reset() {
      if (dnd._DragEventDispatcher.previousTarget != null) {
        let dragLeaveEvent = html.MouseEvent.new("_customDragLeave");
        dart.nullCheck(dnd._DragEventDispatcher.previousTarget).dispatchEvent(dragLeaveEvent);
        dnd._DragEventDispatcher.previousTarget = null;
      }
    }
  };
  (dnd._DragEventDispatcher.new = function() {
    ;
  }).prototype = dnd._DragEventDispatcher.prototype;
  dart.addTypeTests(dnd._DragEventDispatcher);
  dart.addTypeCaches(dnd._DragEventDispatcher);
  dart.setLibraryUri(dnd._DragEventDispatcher, I[1]);
  dart.defineLazy(dnd._DragEventDispatcher, {
    /*dnd._DragEventDispatcher.CUSTOM_DRAG_ENTER*/get CUSTOM_DRAG_ENTER() {
      return "_customDragEnter";
    },
    /*dnd._DragEventDispatcher.CUSTOM_DRAG_OVER*/get CUSTOM_DRAG_OVER() {
      return "_customDragOver";
    },
    /*dnd._DragEventDispatcher.CUSTOM_DRAG_LEAVE*/get CUSTOM_DRAG_LEAVE() {
      return "_customDragLeave";
    },
    /*dnd._DragEventDispatcher.CUSTOM_DROP*/get CUSTOM_DROP() {
      return "_customDrop";
    },
    /*dnd._DragEventDispatcher.enterEvent*/get enterEvent() {
      return new (T.EventStreamProviderOfMouseEvent()).new("_customDragEnter");
    },
    set enterEvent(_) {},
    /*dnd._DragEventDispatcher.overEvent*/get overEvent() {
      return new (T.EventStreamProviderOfMouseEvent()).new("_customDragOver");
    },
    set overEvent(_) {},
    /*dnd._DragEventDispatcher.leaveEvent*/get leaveEvent() {
      return new (T.EventStreamProviderOfMouseEvent()).new("_customDragLeave");
    },
    set leaveEvent(_) {},
    /*dnd._DragEventDispatcher.dropEvent*/get dropEvent() {
      return new (T.EventStreamProviderOfMouseEvent()).new("_customDrop");
    },
    set dropEvent(_) {},
    /*dnd._DragEventDispatcher.previousTarget*/get previousTarget() {
      return null;
    },
    set previousTarget(_) {}
  }, false);
  var _getRealTarget = dart.privateName(dnd, "_getRealTarget");
  var _getRealTargetFromPoint = dart.privateName(dnd, "_getRealTargetFromPoint");
  var _recursiveShadowDomTarget = dart.privateName(dnd, "_recursiveShadowDomTarget");
  var _isValidDragStartTarget = dart.privateName(dnd, "_isValidDragStartTarget");
  dnd._EventManager = class _EventManager extends core.Object {
    installEscAndBlur() {
      this.dragSubs[$add](html.window[$onKeyDown].listen(dart.fn(keyboardEvent => {
        if (keyboardEvent == null) dart.nullFailed(I[4], 56, 43, "keyboardEvent");
        if (keyboardEvent.keyCode === 27) {
          this.handleCancel(keyboardEvent);
        }
      }, T.KeyboardEventTovoid())));
      this.dragSubs[$add](html.window[$onBlur].listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[4], 63, 40, "event");
        this.handleCancel(event);
      }, T.EventTovoid())));
    }
    handleStart(event, position) {
      if (event == null) dart.nullFailed(I[4], 69, 26, "event");
      if (position == null) dart.nullFailed(I[4], 69, 39, "position");
      dnd._currentDrag = new dnd._DragInfo.new(this.drg.id, html.Element.as(event[$currentTarget]), position, {avatarHandler: this.drg.avatarHandler, horizontalOnly: this.drg.horizontalOnly, verticalOnly: this.drg.verticalOnly});
      this.installMove();
      this.installEnd();
      this.installCancel();
      this.installEscAndBlur();
    }
    handleMove(event, position, clientPosition) {
      if (event == null) dart.nullFailed(I[4], 85, 25, "event");
      if (position == null) dart.nullFailed(I[4], 85, 38, "position");
      if (clientPosition == null) dart.nullFailed(I[4], 85, 54, "clientPosition");
      dart.nullCheck(dnd._currentDrag).position = position;
      if (!dart.test(dart.nullCheck(dnd._currentDrag).started)) {
        if (dart.notNull(dart.nullCheck(dnd._currentDrag).startPosition.distanceTo(dart.nullCheck(dnd._currentDrag).position)) >= dart.notNull(this.drg.minDragStartDistance)) {
          this.drg[_handleDragStart](event);
        }
      } else {
        let realTarget = this[_getRealTarget](clientPosition);
        this.drg[_handleDrag](event, realTarget);
      }
    }
    handleEnd(event, target, position, clientPosition) {
      if (event == null) dart.nullFailed(I[4], 104, 24, "event");
      if (position != null && dnd._currentDrag != null) {
        dart.nullCheck(dnd._currentDrag).position = position;
      }
      if (clientPosition != null) {
        let realTarget = this[_getRealTarget](clientPosition, {target: target});
        this.drg[_handleDragEnd](event, realTarget);
      }
    }
    handleCancel(event) {
      if (event == null) dart.nullFailed(I[4], 118, 27, "event");
      this.drg[_handleDragEnd](event, null, {cancelled: true});
    }
    reset() {
      this.dragSubs[$forEach](dart.fn(sub => {
        if (sub == null) dart.nullFailed(I[4], 127, 23, "sub");
        return sub.cancel();
      }, T.StreamSubscriptionTovoid()));
      this.dragSubs[$clear]();
    }
    destroy() {
      this.reset();
      this.startSubs[$forEach](dart.fn(sub => {
        if (sub == null) dart.nullFailed(I[4], 136, 24, "sub");
        return sub.cancel();
      }, T.StreamSubscriptionTovoid()));
      this.startSubs[$clear]();
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 140, 28, "el");
        return el.style[$touchAction] = "";
      }, T.ElementTovoid()));
    }
    [_getRealTargetFromPoint](clientPosition) {
      let t3;
      if (clientPosition == null) dart.nullFailed(I[4], 146, 41, "clientPosition");
      t3 = html.document[$elementFromPoint](clientPosition.x[$round](), clientPosition.y[$round]());
      return t3 == null ? dart.nullCheck(html.document.body) : t3;
    }
    [_getRealTarget](clientPosition, opts) {
      if (clientPosition == null) dart.nullFailed(I[4], 158, 32, "clientPosition");
      let target = opts && 'target' in opts ? opts.target : null;
      if (target == null || !html.Element.is(target)) {
        target = this[_getRealTargetFromPoint](clientPosition);
      }
      if (this.drg.avatarHandler != null && dart.nullCheck(this.drg.avatarHandler).avatar != null && dart.test(dart.nullCheck(dart.nullCheck(this.drg.avatarHandler).avatar).contains(target))) {
        dart.nullCheck(dart.nullCheck(this.drg.avatarHandler).avatar).style[$visibility] = "hidden";
        target = this[_getRealTargetFromPoint](clientPosition);
        dart.nullCheck(dart.nullCheck(this.drg.avatarHandler).avatar).style[$visibility] = "visible";
      }
      target = this[_recursiveShadowDomTarget](clientPosition, target);
      return target;
    }
    [_recursiveShadowDomTarget](clientPosition, target) {
      if (clientPosition == null) dart.nullFailed(I[4], 181, 43, "clientPosition");
      if (target == null) dart.nullFailed(I[4], 181, 67, "target");
      if (html.Element.is(target) && target[$shadowRoot] != null && dart.test(target[$attributes][$containsKey]("dnd-retarget"))) {
        let newTarget = dart.nullCheck(target[$shadowRoot]).elementFromPoint(clientPosition.x[$round](), clientPosition.y[$round]());
        if (newTarget != null) {
          target = this[_recursiveShadowDomTarget](clientPosition, newTarget);
        }
      }
      return target;
    }
    [_isValidDragStartTarget](target) {
      if (target == null) dart.nullFailed(I[4], 201, 44, "target");
      if (html.Element.is(target) && dart.test(target[$matchesWithAncestors](this.drg.cancel))) {
        return false;
      }
      if (this.drg.handle != null) {
        if (html.Element.is(target)) {
          if (!dart.test(target[$matchesWithAncestors](dart.nullCheck(this.drg.handle)))) {
            return false;
          }
          if (dart.test(this.drg[_elements][$any](dart.fn(el => {
            if (el == null) dart.nullFailed(I[4], 216, 32, "el");
            return el.contains(target);
          }, T.ElementTobool())))) {
            return true;
          }
        }
        return false;
      }
      return true;
    }
  };
  (dnd._EventManager.new = function(drg) {
    if (drg == null) dart.nullFailed(I[4], 22, 22, "drg");
    this.startSubs = T.JSArrayOfStreamSubscription().of([]);
    this.dragSubs = T.JSArrayOfStreamSubscription().of([]);
    this.drg = drg;
    this.installStart();
    if (dart.test(this.drg.horizontalOnly)) {
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 30, 30, "el");
        return el.style[$touchAction] = "pan-y";
      }, T.ElementTovoid()));
    } else if (dart.test(this.drg.verticalOnly)) {
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 33, 30, "el");
        return el.style[$touchAction] = "pan-x";
      }, T.ElementTovoid()));
    } else {
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 36, 30, "el");
        return el.style[$touchAction] = "none";
      }, T.ElementTovoid()));
    }
  }).prototype = dnd._EventManager.prototype;
  dart.addTypeTests(dnd._EventManager);
  dart.addTypeCaches(dnd._EventManager);
  dart.setMethodSignature(dnd._EventManager, () => ({
    __proto__: dart.getMethods(dnd._EventManager.__proto__),
    installEscAndBlur: dart.fnType(dart.void, []),
    handleStart: dart.fnType(dart.void, [html.Event, math.Point$(core.num)]),
    handleMove: dart.fnType(dart.void, [html.Event, math.Point$(core.num), math.Point$(core.num)]),
    handleEnd: dart.fnType(dart.void, [html.Event, dart.nullable(html.EventTarget), dart.nullable(math.Point$(core.num)), dart.nullable(math.Point$(core.num))]),
    handleCancel: dart.fnType(dart.void, [html.Event]),
    reset: dart.fnType(dart.void, []),
    destroy: dart.fnType(dart.void, []),
    [_getRealTargetFromPoint]: dart.fnType(html.Element, [math.Point$(core.num)]),
    [_getRealTarget]: dart.fnType(html.Element, [math.Point$(core.num)], {target: dart.nullable(html.EventTarget)}, {}),
    [_recursiveShadowDomTarget]: dart.fnType(html.Element, [math.Point$(core.num), html.Element]),
    [_isValidDragStartTarget]: dart.fnType(core.bool, [html.EventTarget])
  }));
  dart.setLibraryUri(dnd._EventManager, I[1]);
  dart.setFieldSignature(dnd._EventManager, () => ({
    __proto__: dart.getFields(dnd._EventManager.__proto__),
    startSubs: dart.fieldType(core.List$(async.StreamSubscription)),
    dragSubs: dart.fieldType(core.List$(async.StreamSubscription)),
    drg: dart.finalFieldType(dnd.Draggable)
  }));
  dart.defineLazy(dnd._EventManager, {
    /*dnd._EventManager.SHADOW_DOM_RETARGET_ATTRIBUTE*/get SHADOW_DOM_RETARGET_ATTRIBUTE() {
      return "dnd-retarget";
    }
  }, false);
  dnd._TouchManager = class _TouchManager extends dnd._EventManager {
    installStart() {
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 235, 28, "el");
        this.startSubs[$add](el[$onTouchStart].listen(dart.fn(event => {
          if (event == null) dart.nullFailed(I[4], 236, 56, "event");
          if (dnd._currentDrag != null) {
            return;
          }
          if (event.touches != null && dart.notNull(dart.nullCheck(event.touches)[$length]) > 1) {
            return;
          }
          if (event.touches != null && !dart.test(this[_isValidDragStartTarget](dart.nullCheck(dart.nullCheck(event.touches)[$_get](0)[$target])))) {
            return;
          }
          if (event.touches != null) {
            this.handleStart(event, dart.nullCheck(event.touches)[$_get](0)[$page]);
          }
        }, T.TouchEventTovoid())));
      }, T.ElementTovoid()));
    }
    installMove() {
      this.dragSubs[$add](html.document[$onTouchMove].listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[4], 262, 58, "event");
        if (event.touches != null && dart.notNull(dart.nullCheck(event.touches)[$length]) > 1) {
          this.handleCancel(event);
          return;
        }
        if (event.changedTouches != null) {
          if (!dart.test(dart.nullCheck(dnd._currentDrag).started) && dart.test(this.isScrolling(dart.nullCheck(event.changedTouches)[$_get](0)[$page]))) {
            this.handleCancel(event);
            return;
          }
          this.handleMove(event, dart.nullCheck(event.changedTouches)[$_get](0)[$page], dart.nullCheck(event.changedTouches)[$_get](0)[$client]);
        }
        event.preventDefault();
      }, T.TouchEventTovoid())));
    }
    installEnd() {
      this.dragSubs[$add](html.document[$onTouchEnd].listen(dart.fn(event => {
        let t3, t3$;
        if (event == null) dart.nullFailed(I[4], 289, 57, "event");
        this.handleEnd(event, null, (t3 = event.changedTouches, t3 == null ? null : t3[$_get](0)[$page]), (t3$ = event.changedTouches, t3$ == null ? null : t3$[$_get](0)[$client]));
      }, T.TouchEventTovoid())));
    }
    installCancel() {
      this.dragSubs[$add](html.document[$onTouchCancel].listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[4], 297, 60, "event");
        this.handleCancel(event);
      }, T.TouchEventTovoid())));
    }
    isScrolling(currentPosition) {
      if (currentPosition == null) dart.nullFailed(I[4], 303, 26, "currentPosition");
      let delta = currentPosition['-'](dart.nullCheck(dnd._currentDrag).startPosition);
      if (dart.test(this.drg.horizontalOnly) && delta.y[$abs]() > delta.x[$abs]()) {
        return true;
      }
      if (dart.test(this.drg.verticalOnly) && delta.x[$abs]() > delta.y[$abs]()) {
        return true;
      }
      return false;
    }
  };
  (dnd._TouchManager.new = function(draggable) {
    if (draggable == null) dart.nullFailed(I[4], 231, 27, "draggable");
    dnd._TouchManager.__proto__.new.call(this, draggable);
    ;
  }).prototype = dnd._TouchManager.prototype;
  dart.addTypeTests(dnd._TouchManager);
  dart.addTypeCaches(dnd._TouchManager);
  dart.setMethodSignature(dnd._TouchManager, () => ({
    __proto__: dart.getMethods(dnd._TouchManager.__proto__),
    installStart: dart.fnType(dart.void, []),
    installMove: dart.fnType(dart.void, []),
    installEnd: dart.fnType(dart.void, []),
    installCancel: dart.fnType(dart.void, []),
    isScrolling: dart.fnType(core.bool, [math.Point$(core.num)])
  }));
  dart.setLibraryUri(dnd._TouchManager, I[1]);
  dnd._MouseManager = class _MouseManager extends dnd._EventManager {
    installStart() {
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 329, 28, "el");
        this.startSubs[$add](el[$onMouseDown].listen(dart.fn(event => {
          if (event == null) dart.nullFailed(I[4], 330, 55, "event");
          if (dnd._currentDrag != null) {
            return;
          }
          if (event.button !== 0) {
            return;
          }
          if (event[$target] != null && !dart.test(this[_isValidDragStartTarget](dart.nullCheck(event[$target])))) {
            return;
          }
          let target = event[$target];
          if (!(html.SelectElement.is(target) || html.InputElement.is(target) || html.TextAreaElement.is(target) || html.ButtonElement.is(target) || html.OptionElement.is(target))) {
            event.preventDefault();
          }
          this.handleStart(event, event[$page]);
        }, T.MouseEventTovoid())));
      }, T.ElementTovoid()));
    }
    installMove() {
      this.dragSubs[$add](html.document[$onMouseMove].listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[4], 370, 58, "event");
        this.handleMove(event, event[$page], event[$client]);
      }, T.MouseEventTovoid())));
    }
    installEnd() {
      this.dragSubs[$add](html.document[$onMouseUp].listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[4], 377, 56, "event");
        this.handleEnd(event, event[$target], event[$page], event[$client]);
      }, T.MouseEventTovoid())));
    }
    installCancel() {
    }
  };
  (dnd._MouseManager.new = function(draggable) {
    if (draggable == null) dart.nullFailed(I[4], 325, 27, "draggable");
    dnd._MouseManager.__proto__.new.call(this, draggable);
    ;
  }).prototype = dnd._MouseManager.prototype;
  dart.addTypeTests(dnd._MouseManager);
  dart.addTypeCaches(dnd._MouseManager);
  dart.setMethodSignature(dnd._MouseManager, () => ({
    __proto__: dart.getMethods(dnd._MouseManager.__proto__),
    installStart: dart.fnType(dart.void, []),
    installMove: dart.fnType(dart.void, []),
    installEnd: dart.fnType(dart.void, []),
    installCancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dnd._MouseManager, I[1]);
  dnd._PointerManager = class _PointerManager extends dnd._EventManager {
    installStart() {
      this.drg[_elements][$forEach](dart.fn(el => {
        if (el == null) dart.nullFailed(I[4], 394, 28, "el");
        this.startSubs[$add](el[$on]._get("pointerdown").listen(dart.fn(e => {
          if (e == null) dart.nullFailed(I[4], 395, 50, "e");
          let event = html.PointerEvent.as(e);
          if (dnd._currentDrag != null) {
            return;
          }
          if (event.button !== 0) {
            return;
          }
          if (event[$target] != null && !dart.test(this[_isValidDragStartTarget](dart.nullCheck(event[$target])))) {
            return;
          }
          let target = event[$target];
          if (!(html.SelectElement.is(target) || html.InputElement.is(target) || html.TextAreaElement.is(target) || html.ButtonElement.is(target) || html.OptionElement.is(target))) {
            event.preventDefault();
          }
          this.handleStart(event, event[$page]);
        }, T.EventTovoid())));
      }, T.ElementTovoid()));
    }
    installMove() {
      this.dragSubs[$add](html.document[$on]._get("pointermove").listen(dart.fn(e => {
        if (e == null) dart.nullFailed(I[4], 437, 53, "e");
        let event = html.PointerEvent.as(e);
        this.handleMove(event, event[$page], event[$client]);
      }, T.EventTovoid())));
    }
    installEnd() {
      this.dragSubs[$add](html.document[$on]._get("pointerup").listen(dart.fn(e => {
        if (e == null) dart.nullFailed(I[4], 445, 51, "e");
        let event = html.PointerEvent.as(e);
        this.handleEnd(event, null, event[$page], event[$client]);
      }, T.EventTovoid())));
    }
    installCancel() {
      this.dragSubs[$add](html.document[$on]._get("pointercancel").listen(dart.fn(event => {
        if (event == null) dart.nullFailed(I[4], 454, 55, "event");
        this.handleCancel(event);
      }, T.EventTovoid())));
    }
  };
  (dnd._PointerManager.new = function(draggable) {
    if (draggable == null) dart.nullFailed(I[4], 390, 29, "draggable");
    dnd._PointerManager.__proto__.new.call(this, draggable);
    ;
  }).prototype = dnd._PointerManager.prototype;
  dart.addTypeTests(dnd._PointerManager);
  dart.addTypeCaches(dnd._PointerManager);
  dart.setMethodSignature(dnd._PointerManager, () => ({
    __proto__: dart.getMethods(dnd._PointerManager.__proto__),
    installStart: dart.fnType(dart.void, []),
    installMove: dart.fnType(dart.void, []),
    installEnd: dart.fnType(dart.void, []),
    installCancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dnd._PointerManager, I[1]);
  var acceptor$ = dart.privateName(dnd, "Dropzone.acceptor");
  var overClass$ = dart.privateName(dnd, "Dropzone.overClass");
  var invalidClass$ = dart.privateName(dnd, "Dropzone.invalidClass");
  var _onDragEnter = dart.privateName(dnd, "_onDragEnter");
  var _onDragOver = dart.privateName(dnd, "_onDragOver");
  var _onDragLeave = dart.privateName(dnd, "_onDragLeave");
  var _onDrop = dart.privateName(dnd, "_onDrop");
  var __Dropzone__elements = dart.privateName(dnd, "_#Dropzone#_elements");
  var __Dropzone__elements_isSet = dart.privateName(dnd, "_#Dropzone#_elements#isSet");
  var _subs = dart.privateName(dnd, "_subs");
  var _installCustomDragListener = dart.privateName(dnd, "_installCustomDragListener");
  var _handleDragEnter = dart.privateName(dnd, "_handleDragEnter");
  var _handleDragOver = dart.privateName(dnd, "_handleDragOver");
  var _handleDragLeave = dart.privateName(dnd, "_handleDragLeave");
  var _handleDrop = dart.privateName(dnd, "_handleDrop");
  dnd.Dropzone = class Dropzone extends core.Object {
    get acceptor() {
      return this[acceptor$];
    }
    set acceptor(value) {
      this[acceptor$] = value;
    }
    get overClass() {
      return this[overClass$];
    }
    set overClass(value) {
      this[overClass$] = value;
    }
    get invalidClass() {
      return this[invalidClass$];
    }
    set invalidClass(value) {
      this[invalidClass$] = value;
    }
    get onDragEnter() {
      if (this[_onDragEnter] == null) {
        this[_onDragEnter] = T.StreamControllerOfDropzoneEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragEnter] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDragEnter]).stream;
    }
    get onDragOver() {
      if (this[_onDragOver] == null) {
        this[_onDragOver] = T.StreamControllerOfDropzoneEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragOver] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDragOver]).stream;
    }
    get onDragLeave() {
      if (this[_onDragLeave] == null) {
        this[_onDragLeave] = T.StreamControllerOfDropzoneEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragLeave] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDragLeave]).stream;
    }
    get onDrop() {
      if (this[_onDrop] == null) {
        this[_onDrop] = T.StreamControllerOfDropzoneEvent().broadcast({sync: true, onCancel: dart.fn(() => this[_onDrop] = null, T.VoidTovoid())});
      }
      return dart.nullCheck(this[_onDrop]).stream;
    }
    get [_elements]() {
      let t3;
      return dart.test(this[__Dropzone__elements_isSet]) ? (t3 = this[__Dropzone__elements], t3) : dart.throw(new _internal.LateError.fieldNI("_elements"));
    }
    set [_elements](t3) {
      if (t3 == null) dart.nullFailed(I[5], 80, 22, "null");
      this[__Dropzone__elements_isSet] = true;
      this[__Dropzone__elements] = t3;
    }
    [_installCustomDragListener](element) {
      if (element == null) dart.nullFailed(I[5], 115, 43, "element");
      this[_subs][$add](dnd._DragEventDispatcher.enterEvent.forTarget(element).listen(dart.bind(this, _handleDragEnter)));
      this[_subs][$add](dnd._DragEventDispatcher.overEvent.forTarget(element).listen(dart.bind(this, _handleDragOver)));
      this[_subs][$add](dnd._DragEventDispatcher.leaveEvent.forTarget(element).listen(dart.bind(this, _handleDragLeave)));
      this[_subs][$add](dnd._DragEventDispatcher.dropEvent.forTarget(element).listen(dart.bind(this, _handleDrop)));
    }
    [_handleDragEnter](event) {
      if (event == null) dart.nullFailed(I[5], 130, 36, "event");
      if (html.Element.is(event[$relatedTarget]) && dart.test(html.Element.as(event[$currentTarget]).contains(html.Element.as(event[$relatedTarget])))) {
        return;
      }
      if (this.acceptor == null || dart.test(dart.nullCheck(this.acceptor).accepts(dart.nullCheck(dnd._currentDrag).element, dart.nullCheck(dnd._currentDrag).draggableId, html.Element.as(event[$currentTarget])))) {
        if (this[_onDragEnter] != null) {
          dart.nullCheck(this[_onDragEnter]).add(new dnd.DropzoneEvent.__(html.Element.as(event[$currentTarget]), dart.nullCheck(dnd._currentDrag)));
        }
        html.Element.as(event[$currentTarget])[$classes].add(this.overClass);
      } else {
        html.Element.as(event[$currentTarget])[$classes].add(this.invalidClass);
      }
    }
    [_handleDragOver](event) {
      if (event == null) dart.nullFailed(I[5], 159, 35, "event");
      if (this.acceptor == null || dart.test(dart.nullCheck(this.acceptor).accepts(dart.nullCheck(dnd._currentDrag).element, dart.nullCheck(dnd._currentDrag).draggableId, html.Element.as(event[$currentTarget])))) {
        if (this[_onDragOver] != null) {
          dart.nullCheck(this[_onDragOver]).add(new dnd.DropzoneEvent.__(html.Element.as(event[$currentTarget]), dart.nullCheck(dnd._currentDrag)));
        }
      }
    }
    [_handleDragLeave](event) {
      if (event == null) dart.nullFailed(I[5], 174, 36, "event");
      if (html.Element.is(event[$relatedTarget]) && dart.test(html.Element.as(event[$currentTarget]).contains(html.Element.as(event[$relatedTarget])))) {
        return;
      }
      if (this.acceptor == null || dart.test(dart.nullCheck(this.acceptor).accepts(dart.nullCheck(dnd._currentDrag).element, dart.nullCheck(dnd._currentDrag).draggableId, html.Element.as(event[$currentTarget])))) {
        if (this[_onDragLeave] != null) {
          dart.nullCheck(this[_onDragLeave]).add(new dnd.DropzoneEvent.__(html.Element.as(event[$currentTarget]), dart.nullCheck(dnd._currentDrag)));
        }
        html.Element.as(event[$currentTarget])[$classes].remove(this.overClass);
      } else {
        html.Element.as(event[$currentTarget])[$classes].remove(this.invalidClass);
      }
    }
    [_handleDrop](event) {
      if (event == null) dart.nullFailed(I[5], 203, 31, "event");
      if (this.acceptor == null || dart.test(dart.nullCheck(this.acceptor).accepts(dart.nullCheck(dnd._currentDrag).element, dart.nullCheck(dnd._currentDrag).draggableId, html.Element.as(event[$currentTarget])))) {
        if (this[_onDrop] != null) {
          dart.nullCheck(this[_onDrop]).add(new dnd.DropzoneEvent.__(html.Element.as(event[$currentTarget]), dart.nullCheck(dnd._currentDrag)));
        }
      }
    }
    destroy() {
      this[_subs][$forEach](dart.fn(sub => {
        if (sub == null) dart.nullFailed(I[5], 219, 20, "sub");
        return sub.cancel();
      }, T.StreamSubscriptionTovoid()));
      this[_subs][$clear]();
    }
  };
  (dnd.Dropzone.new = function(elementOrElementList, opts) {
    let acceptor = opts && 'acceptor' in opts ? opts.acceptor : null;
    let overClass = opts && 'overClass' in opts ? opts.overClass : "dnd-over";
    if (overClass == null) dart.nullFailed(I[5], 102, 12, "overClass");
    let invalidClass = opts && 'invalidClass' in opts ? opts.invalidClass : "dnd-invalid";
    if (invalidClass == null) dart.nullFailed(I[5], 103, 12, "invalidClass");
    this[_onDragEnter] = null;
    this[_onDragOver] = null;
    this[_onDragLeave] = null;
    this[_onDrop] = null;
    this[__Dropzone__elements] = null;
    this[__Dropzone__elements_isSet] = false;
    this[_subs] = T.JSArrayOfStreamSubscription().of([]);
    this[acceptor$] = acceptor;
    this[overClass$] = overClass;
    this[invalidClass$] = invalidClass;
    this[_elements] = T.ListOfElement().is(elementOrElementList) ? elementOrElementList : T.JSArrayOfElement().of([html.Element.as(elementOrElementList)]);
    this[_elements][$forEach](dart.bind(this, _installCustomDragListener));
  }).prototype = dnd.Dropzone.prototype;
  dart.addTypeTests(dnd.Dropzone);
  dart.addTypeCaches(dnd.Dropzone);
  dart.setMethodSignature(dnd.Dropzone, () => ({
    __proto__: dart.getMethods(dnd.Dropzone.__proto__),
    [_installCustomDragListener]: dart.fnType(dart.void, [html.Element]),
    [_handleDragEnter]: dart.fnType(dart.void, [html.MouseEvent]),
    [_handleDragOver]: dart.fnType(dart.void, [html.MouseEvent]),
    [_handleDragLeave]: dart.fnType(dart.void, [html.MouseEvent]),
    [_handleDrop]: dart.fnType(dart.void, [html.MouseEvent]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dnd.Dropzone, () => ({
    __proto__: dart.getGetters(dnd.Dropzone.__proto__),
    onDragEnter: async.Stream$(dnd.DropzoneEvent),
    onDragOver: async.Stream$(dnd.DropzoneEvent),
    onDragLeave: async.Stream$(dnd.DropzoneEvent),
    onDrop: async.Stream$(dnd.DropzoneEvent),
    [_elements]: core.List$(html.Element)
  }));
  dart.setSetterSignature(dnd.Dropzone, () => ({
    __proto__: dart.getSetters(dnd.Dropzone.__proto__),
    [_elements]: core.List$(html.Element)
  }));
  dart.setLibraryUri(dnd.Dropzone, I[1]);
  dart.setFieldSignature(dnd.Dropzone, () => ({
    __proto__: dart.getFields(dnd.Dropzone.__proto__),
    acceptor: dart.fieldType(dart.nullable(dnd.Acceptor)),
    overClass: dart.fieldType(core.String),
    invalidClass: dart.fieldType(core.String),
    [_onDragEnter]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DropzoneEvent))),
    [_onDragOver]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DropzoneEvent))),
    [_onDragLeave]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DropzoneEvent))),
    [_onDrop]: dart.fieldType(dart.nullable(async.StreamController$(dnd.DropzoneEvent))),
    [__Dropzone__elements]: dart.fieldType(dart.nullable(core.List$(html.Element))),
    [__Dropzone__elements_isSet]: dart.fieldType(core.bool),
    [_subs]: dart.fieldType(core.List$(async.StreamSubscription))
  }));
  var dropzoneElement$ = dart.privateName(dnd, "DropzoneEvent.dropzoneElement");
  var draggableElement$ = dart.privateName(dnd, "DropzoneEvent.draggableElement");
  var avatarHandler$0 = dart.privateName(dnd, "DropzoneEvent.avatarHandler");
  var position$ = dart.privateName(dnd, "DropzoneEvent.position");
  dnd.DropzoneEvent = class DropzoneEvent extends core.Object {
    get dropzoneElement() {
      return this[dropzoneElement$];
    }
    set dropzoneElement(value) {
      super.dropzoneElement = value;
    }
    get draggableElement() {
      return this[draggableElement$];
    }
    set draggableElement(value) {
      super.draggableElement = value;
    }
    get avatarHandler() {
      return this[avatarHandler$0];
    }
    set avatarHandler(value) {
      super.avatarHandler = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
  };
  (dnd.DropzoneEvent.__ = function(dropzoneElement, dragInfo) {
    if (dropzoneElement == null) dart.nullFailed(I[5], 239, 24, "dropzoneElement");
    if (dragInfo == null) dart.nullFailed(I[5], 239, 51, "dragInfo");
    this[dropzoneElement$] = dropzoneElement;
    this[draggableElement$] = dragInfo.element;
    this[avatarHandler$0] = dragInfo.avatarHandler;
    this[position$] = dragInfo.position;
    ;
  }).prototype = dnd.DropzoneEvent.prototype;
  dart.addTypeTests(dnd.DropzoneEvent);
  dart.addTypeCaches(dnd.DropzoneEvent);
  dart.setLibraryUri(dnd.DropzoneEvent, I[1]);
  dart.setFieldSignature(dnd.DropzoneEvent, () => ({
    __proto__: dart.getFields(dnd.DropzoneEvent.__proto__),
    dropzoneElement: dart.finalFieldType(html.Element),
    draggableElement: dart.finalFieldType(html.Element),
    avatarHandler: dart.finalFieldType(dart.nullable(dnd.AvatarHandler)),
    position: dart.finalFieldType(math.Point$(core.num))
  }));
  dnd.Acceptor = class Acceptor extends core.Object {
    static draggables(draggables) {
      if (draggables == null) dart.nullFailed(I[6], 11, 47, "draggables");
      return new dnd.DraggablesAcceptor.new(draggables);
    }
  };
  (dnd.Acceptor.new = function() {
    ;
  }).prototype = dnd.Acceptor.prototype;
  dart.addTypeTests(dnd.Acceptor);
  dart.addTypeCaches(dnd.Acceptor);
  dart.setLibraryUri(dnd.Acceptor, I[1]);
  var draggableIds = dart.privateName(dnd, "DraggablesAcceptor.draggableIds");
  dnd.DraggablesAcceptor = class DraggablesAcceptor extends dnd.Acceptor {
    get draggableIds() {
      return this[draggableIds];
    }
    set draggableIds(value) {
      super.draggableIds = value;
    }
    accepts(draggableElement, draggableId, dropzoneElement) {
      if (draggableElement == null) dart.nullFailed(I[6], 32, 15, "draggableElement");
      if (draggableId == null) dart.nullFailed(I[6], 32, 37, "draggableId");
      if (dropzoneElement == null) dart.nullFailed(I[6], 32, 58, "dropzoneElement");
      return this.draggableIds.contains(draggableId);
    }
  };
  (dnd.DraggablesAcceptor.new = function(draggables) {
    if (draggables == null) dart.nullFailed(I[6], 26, 38, "draggables");
    this[draggableIds] = new (T._IdentityHashSetOfint()).new();
    dnd.DraggablesAcceptor.__proto__.new.call(this);
    draggables[$forEach](dart.fn(d => {
      if (d == null) dart.nullFailed(I[6], 27, 25, "d");
      return this.draggableIds.add(d.id);
    }, T.DraggableTovoid()));
  }).prototype = dnd.DraggablesAcceptor.prototype;
  dart.addTypeTests(dnd.DraggablesAcceptor);
  dart.addTypeCaches(dnd.DraggablesAcceptor);
  dart.setMethodSignature(dnd.DraggablesAcceptor, () => ({
    __proto__: dart.getMethods(dnd.DraggablesAcceptor.__proto__),
    accepts: dart.fnType(core.bool, [html.Element, core.int, html.Element])
  }));
  dart.setLibraryUri(dnd.DraggablesAcceptor, I[1]);
  dart.setFieldSignature(dnd.DraggablesAcceptor, () => ({
    __proto__: dart.getFields(dnd.DraggablesAcceptor.__proto__),
    draggableIds: dart.finalFieldType(core.Set$(core.int))
  }));
  dart.defineLazy(dnd, {
    /*dnd._currentDrag*/get _currentDrag() {
      return null;
    },
    set _currentDrag(_) {}
  }, false);
  dart.trackLibraries("packages/dnd/dnd", {
    "package:dnd/dnd.dart": dnd
  }, {
    "package:dnd/dnd.dart": ["src/draggable.dart", "src/draggable_avatar.dart", "src/draggable_dispatch.dart", "src/draggable_manager.dart", "src/dropzone.dart", "src/dropzone_acceptor.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/draggable.dart","src/draggable_avatar.dart","src/draggable_dispatch.dart","src/draggable_manager.dart","src/dropzone.dart","src/dropzone_acceptor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBY;;;;;;IAOK;;;;;;IAIV;;;;;;IAIA;;;;;;IAIG;;;;;;IAID;;;;;;IAIA;;;;;;IAIA;;;;;;IAIH;;;;;;;AAKwB;IAAoB;;UAIvB;AAAa,yCAAuB,QAAQ;;;AAenE,UAAI,AAAa;AAEqC,QADpD,qBAAe,sDACL,gBAAgB,cAAM,qBAAe;;AAEjD,YAAmB,AAAE,gBAAd;IACT;;AAIE,UAAI,AAAQ;AAEqC,QAD/C,gBAAU,sDACA,gBAAgB,cAAM,gBAAU;;AAE5C,YAAc,AAAE,gBAAT;IACT;;AAKE,UAAI,AAAW;AAEqC,QADlD,mBAAa,sDACH,gBAAgB,cAAM,mBAAa;;AAE/C,YAAiB,AAAE,gBAAZ;IACT;;AAIE,UAAI,4BAAoC,AAAE,AAAY,eAA1B,iCAAkC;AACjB,QAA3C,qBAAe,MAAM,kBAAiB;;IAE1C;;;AAMmB;IAAS;;;AAAT;;IAAS;;UA8EA;AAEE,MAAhB,AAAE,eAAd,4BAAwB;AAGxB,UAAI;AAEkE,QADvD,AACR,eADL,sCACkC,AAAE,eAAd,2BAAmC,AAAE,eAAd;;AAI/C,UAAI;AAE2D,QAAjD,AAAE,eAAd,wBAAiC,0BAAE,SAAS,EAAc,eAAZ;;AAIA,MAApC,AAAE,AAAQ,AAAQ,eAA9B,wCAAkC;AACW,MAAhC,AAAE,AAAQ,eAAvB,AAAS,kCAAkB;AAIL,MAAtB;IACF;kBAMuB,WAAwB;UAAxB;AAErB,UAAI;AAEmE,QADxD,AACR,eADL,iCAC6B,AAAE,eAAd,iCAAyC,AAAE,eAAd;;AAIS,MAApC,gDAAuB,MAAM,MAAM;AAGxD,UAAI;AACsD,QAAjD,AAAE,eAAT,mBAA4B,0BAAE,SAAS,EAAc,eAAZ;;IAE7C;qBAW2B,OAAoB;UAAS;AAEtD,UAAI,sCAAoC,AAAE,eAAd;AAE1B,YAAI;AAEsD,UAD3C,AAAE,eAAf,oCACgB,AAAE,eAAd,iCAAyC,AAAE,eAAd;;AAInC,wBAAK,SAAS,KAAI,MAAM;AACyB,UAA1B,sCAAa,MAAM,MAAM;;AAIhD,YAAI;AAEoE,UAD5D,AACL,eADL,sBACwB,0BAAE,KAAK,EAAc,eAAZ,4CAA0B,SAAS;;AAItE,YAAI,KAAK;AACe,UAAtB,AAAM,KAAD;;AAIP,YAAU,mBAAN,KAAK;AACmC,UAA1C,0BAAgC,AAAE,eAAd;;AAI6B,QAAvC,AAAE,AAAQ,AAAQ,eAA9B,2CAAqC;AACW,QAAnC,AAAE,AAAQ,eAAvB,AAAS,qCAAqB;;AAIb,MAAnB;IACF;;UAKiC;AACZ,2BAAiB,AAAQ,AAAQ,OAAT,kBAAgB;YAAC;AACnC,QAAvB,AAAM,KAAD;AACiB,QAAtB,AAAM,KAAD;;AAOL,MAFF,qBAAO;AACkB,QAAvB,AAAe,cAAD;;IAElB;;AAMqB,MAAnB;AAG0C,MAA1C,AAAe,+BAAQ;YAAC;AAAM,cAAA,AAAE,EAAD;;AACT,MAAtB,AAAe;AACf,UAAI,8BAAsC,AAAE,eAAf;AACI,QAAV,AAAE,eAAV,AAAE,eAAf;;IAEJ;;AAK0C,MAAxC,AAAe,+BAAQ;YAAC;AAAM,cAAA,AAAE,EAAD;;AAGH,MAAP;AAGF,MAAnB,mBAAe;IACjB;;;AAM0C,WAAxC,AAAO;mBAAA,OAAgB;AAGvB;AACM,4BAAgB,AAAS;AAC7B,YAAkB,wBAAd,aAAa;AACsB,UAArC,AAAc,aAAD,mBAAmB,GAAG;cAC9B,KAAkB,qBAAd,aAAa;AACe,UAArC,AAAc,aAAD,mBAAmB,GAAG;;;YAE9B;AAAP;;;;IAIJ;;gCAzLU;;QACA;QACD;;QACA;;QACA;QACA;;QACA;;QACA;;QACA;;IAtJC,YAAc,KAAT,sEAAS;IAiDU;IACA;IACA;kCA6Cf;;IAGO,uBAAiB;IA4CjC;IACD;IACA;IACA;IACA;IACA;IACA;IACA;AAIqB,IAF5B,kBAAiC,qBAArB,oBAAoB,IAC1B,oBAAoB,GACpB,yCAAC,oBAAoB;AAGlB,mBAAoB,8BAAkB;AAE/C,kBAAI,AAAS,QAAD,aAAa;AAEkB,MAAzC,AAAe,2BAAI,4BAAgB;;AAInC,oBAAe;AAC0B,QAAvC,AAAe,2BAAI,0BAAc;;AAEI,MAAvC,AAAe,2BAAI,0BAAc;;EAErC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA7KW,uBAAS;YAAG;;;;;;;;;;;IAgVT;;;;;;IAGO;;;;;;IAQR;;;;;;IAID;;;;;;IAIA;;;;;;IAKD;;;;;;;oCAGW;QAAyB;QACrC;;IADY;IACZ;IACa,yBAAE,AAAS,QAAD;IACb,sBAAE,AAAS,QAAD;IACV,sBAAE,AAAS,QAAD;IACf,iBAAE,AAAS,QAAD;;EAAS;;;;;;;;;;;;;;;;;;;;AAmBvB;IAAS;;;AAAT;;IAAS;;AAkBE;IAAS;;UAGZ;AAAQ,+BAAY,qBAAe,GAAG;IAAC;;UAG/B;AAEzB,oBAAI;AACF,cAAO,0BAAM,AAAI,GAAD,IAAI,AAAc;;AAIpC,oBAAI;AACF,cAAO,0BAAM,AAAc,sBAAG,AAAI,GAAD;;AAInC,YAAO,IAAG;IACZ;;gCA7Be,aAAkB,SAAc;QAAhC;QAAkB;QAAc;QACrC;QACD;;QACA;;kCAXE;;IAGN,eAAU;IAKA;IAAkB;IAAc;IACrC;IACD;IACA;AAEkB,IAAzB,kBAAY;EACd;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IC3ZS;;;;;;;AAOP,UAAI,AAAW;AACC,QAAd;;AAEF,YAAO;IACT;;AAOE,UAAI,AAAY;AACA,QAAd;;AAEF,YAAO;IACT;;AAaE,YAAO;IACT;;AAOE,YAAO;IACT;uBAG8B,WAAiB;UAAjB;UAAiB;AACV,MAAnC,eAAU,SAAS,EAAE,aAAa;AAIlC,UAAI;AACoD,QAAtD,iCAAiC,AAAE,AAAM,eAAd;AACS,QAA9B,AAAE,AAAM,eAAd,qCAA8B;;IAElC;kBAGuB,eAAqB;UAArB;UAAqB;AACb,MAA7B,UAAK,aAAa,EAAE,QAAQ;IAC9B;qBAG0B,eAAqB;;UAArB;UAAqB;AACb,MAAhC,aAAQ,aAAa,EAAE,QAAQ;AAG/B,UAAI;AAC0D,QAAtD,AAAE,AAAM,eAAd,sCAAuD,qCAAzB,aAA4B;;AAE7B,MAA/B,iCAA2B;AAGd,MAAb,cAAS;AAGQ,MAAjB,mBAAa;AACK,MAAlB,oBAAc;IAChB;;UA8BwB;AAQpB,MANc,kCAAc;AAE5B,YAAI;AAEoD,UADhD,AAAE,AAAM,eAAd,iCACI,AAAkD,0BAAnC,AAAS,QAAD,MAAG,kBAAM,AAAS,QAAD,MAAG;;;IAGrD;;AAKwB,MAAN;AAChB,UAAI;AAC0B,QAAtB,AAAE,AAAM,eAAd,iCAA0B;;IAE9B;eAOsB;;;AACpB,UAAI;AACwD,QAApD,AAAE,AAAM,eAAd,4BAA0D,SAAvB,aAAX,AAAS,QAAD,oBAAiB,sBAAX,aAAc,YAAG;AACC,QAAlD,AAAE,AAAM,eAAd,2BAAwD,SAAtB,aAAX,AAAS,QAAD,oBAAgB,sBAAV,cAAa,aAAG;;IAEzD;;;AAQE,UAAI;AACE,6BAAuB,AAAE,eAAR;AAEkD,QADvE,qBACmE,KAA3D,kBAAS,AAAe,AAAW,cAAZ,6BAAyB,MAAM,MAAtD,aAA8D;AAEA,QADtE,oBACkE,MAA1D,kBAAS,AAAe,AAAU,cAAX,4BAAwB,MAAM,MAArD,cAA6D;;IAEzE;;;IA1JS;IAGJ;IAWA;IAWG;;EAGO;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAuIQ,WAAiB;UAAjB;UAAiB;AAEpB,MAAlB,cAAS,SAAS;AAGlB,UAAI;AACiC,QAA7B,AAAE,AAAM,eAAd,gCAAyB;;AAKqB,MAAhD,8BAAwB,AAAU,AAAO,SAAR;AAGC,MAAlC,gBAAgC,eAArB;IACb;SAGgB,eAAqB;UAArB;UAAqB;AACG,MAAtC,kBAAa,AAAS,QAAD,MAAG,aAAa;IACvC;YAGmB,eAAqB;UAArB;UAAqB;AAErB,MAAjB;AAIM,gCACF,yBAAM,mBAAS,GAAG,AAAS,QAAD,KAAK,mBAAS,GAAG,AAAS,QAAD;AAEiB,MAAxE,gBAAW,AAAoB,AAAgB,mBAAjB,MAAG,aAAa,OAAwB,eAArB;IACnD;;;IApCO;;;EAqCT;;;;;;;;;;;;;;;cAMyB,WAAiB;;UAAjB;UAAiB;AAIV,MAF5B,oBAAgC,gBAAtB,AAAU,SAAD,SAAO,QAAM;AACjB,QAAX,yBAAkB;AACZ,QAAN,oBAAe;;;AAGgB,MAA7B,AAAE,AAAM,eAAd,gCAAyB;AACG,MAAtB,AAAE,AAAM,eAAd,8BAAuB;AAGc,MAAjB,AAAE,eAAtB,AAAU,SAAD,sBAA0B,eAAN;AAIO,MAApC,gBAAW,AAAU,AAAO,SAAR;IACtB;SAGgB,eAAqB;UAArB;UAAqB;AACG,MAAtC,kBAAa,AAAS,QAAD,MAAG,aAAa;IACvC;YAGmB,eAAqB;UAArB;UAAqB;AACtC,UAAI;AACc,QAAV,AAAE,eAAR;;IAEJ;;;;;EACF;;;;;;;;;;;;UAUiC;AACO,MAApC,0CAAsB,cAAc;AAEpC,qBAAK;AACyC,QAA5C,AAAO,AAAe,6CAAK;cAAC;AAAM;;AAClB,QAAhB,gCAAY;;IAEhB;;AAImB,MAAjB,gCAAY;IACd;;AAIE,oBAAI;AACF,YAAI;AACoB,UAAF,WAAD,eAAnB;;AAEe,QAAjB,gCAAY;;IAEhB;;;;EACF;;;;;MA7BmB,uCAAmB;;;;MACxB,6BAAS;YAAG;;;;;kCC1MqB,WAAwB;UAAxB;AAG3C,UAAI,AAAO,MAAD;AACR;;AAGF,UAAmB,YAAf,yCAAkB,MAAM;AAEf,4BAAgB;AACQ,QAAnC,AAAO,MAAD,eAAe,aAAa;;AAGvB,6BACP,wDAA6C;AACb,QAApC,AAAO,MAAD,eAAe,cAAc;AAGnC,YAAI;AACS,+BACP,wDAA6C,MAAM;AACV,UAA/B,AAAE,eAAhB,uDAA8B,cAAc;;AAInC,4BAAgB;AACQ,QAAnC,AAAO,MAAD,eAAe,aAAa;AAEX,QAAvB,0CAAiB,MAAM;;IAE3B;wBAMmC,WAAwB;UAAxB;AAGjC,UAAI,AAAO,MAAD;AACR;;AAGS,sBAAY;AACQ,MAA/B,AAAO,MAAD,eAAe,SAAS;AAEvB,MAAP;IACF;;AAKE,UAAI;AACS,6BAAiB;AACiB,QAA/B,AAAE,eAAhB,uDAA8B,cAAc;AACvB,QAArB,0CAAiB;;IAErB;;;;EACF;;;;;MA9FsB,0CAAiB;;;MAGjB,yCAAgB;;;MAGhB,0CAAiB;;;MAGjB,oCAAW;;;MAIQ,mCAAU;YAC7C;;;MAGmC,kCAAS;YAC5C;;;MAImC,mCAAU;YAC7C;;;MAGmC,kCAAS;YAC5C;;;MAGgB,uCAAc;;;;;;;;;;;ACqB7B,MAJH,AAAS,oBAAI,AAAO,AAAU,+BAAO;YAAC;AACpC,YAAI,AAAc,AAAQ,aAAT;AACY,UAA3B,kBAAa,aAAa;;;AAO3B,MAFH,AAAS,oBAAI,AAAO,AAAO,4BAAO;YAAC;AACd,QAAnB,kBAAa,KAAK;;IAEtB;gBAGuB,OAAa;UAAb;UAAa;AAMC,MAHnC,mBAAe,sBAAU,AAAI,aAAwB,gBAApB,AAAM,KAAD,mBAA2B,QAAQ,kBACtD,AAAI,wCACH,AAAI,uCACN,AAAI;AAGT,MAAb;AACY,MAAZ;AACe,MAAf;AACmB,MAAnB;IACF;eAGsB,OAAa,UAAgB;UAA7B;UAAa;UAAgB;AAEhB,MAArB,AAAE,eAAd,6BAAyB,QAAQ;AAEjC,qBAAiB,AAAE,eAAd;AAEH,YAAmE,aAAnD,AAAE,AAAc,eAA5B,2CAAmD,AAAE,eAAd,6CACvC,AAAI;AAEqB,UAA3B,AAAI,2BAAiB,KAAK;;;AAIpB,yBAAa,qBAAe,cAAc;AAChB,QAAlC,AAAI,sBAAY,KAAK,EAAE,UAAU;;IAErC;cAGqB,OAAoB,QAAe,UAC7C;UADU;AAGnB,UAAI,QAAQ,YAAY;AACW,QAArB,AAAE,eAAd,6BAAyB,QAAQ;;AAGnC,UAAI,cAAc;AACJ,yBAAa,qBAAe,cAAc,WAAU,MAAM;AACjC,QAArC,AAAI,yBAAe,KAAK,EAAE,UAAU;;IAExC;;UAGwB;AAE0B,MAAhD,AAAI,yBAAe,KAAK,EAAE,kBAAiB;IAC7C;;AAMyC,MAAvC,AAAS,wBAAQ;YAAC;AAAQ,cAAA,AAAI,IAAD;;AACb,MAAhB,AAAS;IACX;;AAIS,MAAP;AAGwC,MAAxC,AAAU,yBAAQ;YAAC;AAAQ,cAAA,AAAI,IAAD;;AACb,MAAjB,AAAU;AAG8C,MAAxD,AAAI,AAAU,8BAAQ;YAAC;AAAO,cAAA,AAAG,AAAM,GAAP,uBAAqB;;IACvD;8BAKsC;;;AACpC,WAAO,AAAS,iCACR,AAAe,AAAE,cAAH,cAAY,AAAe,AAAE,cAAH;YADhC,cAEC,eAAb,AAAS;IACf;;UAQ6B;UAA8B;AAEzD,UAAI,AAAO,MAAD,aAAmB,gBAAP,MAAM;AACsB,QAAhD,SAAS,8BAAwB,cAAc;;AAIjD,UAAI,AAAI,kCACa,AAAE,eAAnB,AAAI,oDACqB,AAAE,eAAV,AAAE,eAAnB,AAAI,yCAAgC,MAAM;AAEU,QAA7B,AAAE,AAAM,eAAhB,AAAE,eAAnB,AAAI,qDAA0C;AACE,QAAhD,SAAS,8BAAwB,cAAc;AACQ,QAA9B,AAAE,AAAM,eAAhB,AAAE,eAAnB,AAAI,qDAA0C;;AAGU,MAA1D,SAAS,gCAA0B,cAAc,EAAE,MAAM;AAEzD,YAAO,OAAM;IACf;gCAIwC,gBAAwB;UAAxB;UAAwB;AAE9D,UAAW,gBAAP,MAAM,KACN,AAAO,MAAD,mCACN,AAAO,AAAW,MAAZ;AACC,wBAA6B,AACjC,eADgB,AAAO,MAAD,gCACL,AAAe,AAAE,cAAH,cAAY,AAAe,AAAE,cAAH;AAG9D,YAAI,SAAS;AACkD,UAA7D,SAAS,gCAA0B,cAAc,EAAE,SAAS;;;AAIhE,YAAO,OAAM;IACf;;UAKyC;AAEvC,UAAW,gBAAP,MAAM,eAAe,AAAO,MAAD,wBAAsB,AAAI;AACvD,cAAO;;AAIT,UAAI,AAAI;AACN,YAAW,gBAAP,MAAM;AAER,yBAAK,AAAO,MAAD,wBAAgC,eAAV,AAAI;AACnC,kBAAO;;AAIT,wBAAI,AAAI,AAAU,0BAAI;gBAAC;AAAO,kBAAA,AAAG,GAAD,UAAU,MAAM;;AAC9C,kBAAO;;;AAKX,cAAO;;AAGT,YAAO;IACT;;;QA5MmB;IATM,iBAAY;IAIZ,gBAAW;IAKjB;AAEH,IAAd;AAIA,kBAAI,AAAI;AAEuD,MAA7D,AAAI,AAAU,8BAAQ;YAAC;AAAO,cAAA,AAAG,AAAM,GAAP,uBAAqB;;UAChD,eAAI,AAAI;AAEgD,MAA7D,AAAI,AAAU,8BAAQ;YAAC;AAAO,cAAA,AAAG,AAAM,GAAP,uBAAqB;;;AAGO,MAA5D,AAAI,AAAU,8BAAQ;YAAC;AAAO,cAAA,AAAG,AAAM,GAAP,uBAAqB;;;EAEzD;;;;;;;;;;;;;;;;;;;;;;;;;MA5BoB,+CAA6B;;;;;;AAuP7C,MAtBF,AAAI,AAAU,8BAAQ;YAAC;AAqBlB,QApBH,AAAU,qBAAI,AAAG,AAAa,EAAd,uBAAqB;cAAY;AAE/C,cAAI;AACF;;AAIF,cAAI,AAAM,KAAD,oBAA0C,aAAT,AAAE,eAAf,AAAM,KAAD,sBAAmB;AACnD;;AAIF,cAAI,AAAM,KAAD,+BACJ,8BAAgD,eAAX,AAAC,AAAI,eAAlB,AAAM,KAAD,iBAAU;AAC1C;;AAGF,cAAI,AAAM,KAAD;AACmC,YAA1C,iBAAY,KAAK,EAAe,AAAC,AAAI,eAAlB,AAAM,KAAD,iBAAU;;;;IAI1C;;AA0BK,MAtBH,AAAS,oBAAI,AAAS,AAAY,mCAAO;YAAY;AAEnD,YAAI,AAAM,KAAD,oBAA0C,aAAT,AAAE,eAAf,AAAM,KAAD,sBAAmB;AAChC,UAAnB,kBAAa,KAAK;AAClB;;AAIF,YAAI,AAAM,KAAD;AACP,yBAAiB,AAAE,eAAd,wCACD,iBAAgC,AAAC,AAAI,eAAzB,AAAM,KAAD,wBAAiB;AAEjB,YAAnB,kBAAa,KAAK;AAClB;;AAIkC,UADpC,gBAAW,KAAK,EAAsB,AAAC,AAAI,eAAzB,AAAM,KAAD,wBAAiB,WAChB,AAAC,AAAI,eAAzB,AAAM,KAAD,wBAAiB;;AAIN,QAAtB,AAAM,KAAD;;IAET;;AAOK,MAHH,AAAS,oBAAI,AAAS,AAAW,kCAAO,QAAY;;;AAEd,QADpC,eAAU,KAAK,EAAE,YAAM,AAAM,KAAD,8BAAC,OAAe,AAAI,UAAH,mBACzC,AAAM,KAAD,+BAAC,OAAe,AAAI,WAAH;;IAE9B;;AAMK,MAFH,AAAS,oBAAI,AAAS,AAAc,qCAAO;YAAY;AAClC,QAAnB,kBAAa,KAAK;;IAEtB;;UAGuB;AACf,kBAAQ,AAAgB,eAAD,MAAe,AAAE,eAAd;AAGhC,oBAAI,AAAI,4BAAkB,AAAM,AAAE,AAAM,KAAT,aAAW,AAAM,AAAE,KAAH;AAE7C,cAAO;;AAIT,oBAAI,AAAI,0BAAgB,AAAM,AAAE,AAAM,KAAT,aAAW,AAAM,AAAE,KAAH;AAE3C,cAAO;;AAIT,YAAO;IACT;;;QAzFwB;AAAa,+CAAM,SAAS;;EAAC;;;;;;;;;;;;;;AAsIjD,MApCF,AAAI,AAAU,8BAAQ;YAAC;AAmClB,QAlCH,AAAU,qBAAI,AAAG,AAAY,EAAb,sBAAoB;cAAY;AAE9C,cAAI;AACF;;AAIF,cAAI,AAAM,KAAD,YAAW;AAClB;;AAIF,cAAI,AAAM,KAAD,gCAAoB,8BAAoC,eAAZ,AAAM,KAAD;AACxD;;AAWW,uBAAS,AAAM,KAAD;AAC3B,gBAAa,sBAAP,MAAM,KACD,qBAAP,MAAM,KACC,wBAAP,MAAM,KACC,sBAAP,MAAM,KACC,sBAAP,MAAM;AACc,YAAtB,AAAM,KAAD;;AAGuB,UAA9B,iBAAY,KAAK,EAAE,AAAM,KAAD;;;IAG9B;;AAMK,MAFH,AAAS,oBAAI,AAAS,AAAY,mCAAO;YAAY;AACR,QAA3C,gBAAW,KAAK,EAAE,AAAM,KAAD,SAAO,AAAM,KAAD;;IAEvC;;AAMK,MAFH,AAAS,oBAAI,AAAS,AAAU,iCAAO;YAAY;AACO,QAAxD,eAAU,KAAK,EAAE,AAAM,KAAD,WAAS,AAAM,KAAD,SAAO,AAAM,KAAD;;IAEpD;;IAKA;;;QA5DwB;AAAa,+CAAM,SAAS;;EAAC;;;;;;;;;;;;;AA2GjD,MAtCF,AAAI,AAAU,8BAAQ;YAAC;AAqClB,QApCH,AAAU,qBAAI,AAAG,AAAE,AAAgB,EAAnB,WAAI,sBAAsB;cAAC;AACrC,sBAAU,qBAAF,CAAC;AAGb,cAAI;AACF;;AAIF,cAAI,AAAM,KAAD,YAAW;AAClB;;AAIF,cAAI,AAAM,KAAD,gCAAoB,8BAAoC,eAAZ,AAAM,KAAD;AACxD;;AAWW,uBAAS,AAAM,KAAD;AAC3B,gBAAa,sBAAP,MAAM,KACD,qBAAP,MAAM,KACC,wBAAP,MAAM,KACC,sBAAP,MAAM,KACC,sBAAP,MAAM;AACc,YAAtB,AAAM,KAAD;;AAGuB,UAA9B,iBAAY,KAAK,EAAE,AAAM,KAAD;;;IAG9B;;AAOK,MAHH,AAAS,oBAAI,AAAS,AAAE,AAAgB,wBAAf,sBAAsB;YAAC;AAC1C,oBAAU,qBAAF,CAAC;AAC8B,QAA3C,gBAAW,KAAK,EAAE,AAAM,KAAD,SAAO,AAAM,KAAD;;IAEvC;;AAQK,MAJH,AAAS,oBAAI,AAAS,AAAE,AAAc,wBAAb,oBAAoB;YAAC;AACxC,oBAAU,qBAAF,CAAC;AAEmC,QAAhD,eAAU,KAAK,EAAE,MAAM,AAAM,KAAD,SAAO,AAAM,KAAD;;IAE5C;;AAMK,MAFH,AAAS,oBAAI,AAAS,AAAE,AAAkB,wBAAjB,wBAAwB;YAAC;AAC7B,QAAnB,kBAAa,KAAK;;IAEtB;;;QAnE0B;AAAa,iDAAM,SAAS;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;ICjX7C;;;;;;IAIH;;;;;;IAIA;;;;;;;AAYL,UAAI,AAAa;AAEqC,QADpD,qBAAe,qDACL,gBAAgB,cAAM,qBAAe;;AAEjD,YAAmB,AAAE,gBAAd;IACT;;AAIE,UAAI,AAAY;AAEqC,QADnD,oBAAc,qDACJ,gBAAgB,cAAM,oBAAc;;AAEhD,YAAkB,AAAE,gBAAb;IACT;;AAIE,UAAI,AAAa;AAEqC,QADpD,qBAAe,qDACL,gBAAgB,cAAM,qBAAe;;AAEjD,YAAmB,AAAE,gBAAd;IACT;;AAKE,UAAI,AAAQ;AAEqC,QAD/C,gBAAU,qDACA,gBAAgB,cAAM,gBAAU;;AAE5C,YAAc,AAAE,gBAAT;IACT;;;AAMmB;IAAS;;;AAAT;;IAAS;;UAmCY;AAGR,MAF9B,AAAM,kBAAyB,AAC1B,AACA,8CADU,OAAO,mBACV;AAGiB,MAF7B,AAAM,kBAAyB,AAC1B,AACA,6CADU,OAAO,mBACV;AAGkB,MAF9B,AAAM,kBAAyB,AAC1B,AACA,8CADU,OAAO,mBACV;AAE8D,MAD1E,AAAM,kBACmB,AAAU,AAAmB,6CAAT,OAAO,mBAAS;IAC/D;;UAGiC;AAG/B,UAAwB,gBAApB,AAAM,KAAD,+BACgB,AAChB,gBADJ,AAAM,KAAD,2BAC4B,gBAApB,AAAM,KAAD;AACrB;;AAKF,UAAI,AAAS,mCACD,AAAE,eAAV,uBAA8B,AAAE,eAAd,2BAAmC,AAAE,eAAd,+BACjB,gBAApB,AAAM,KAAD;AAEX,YAAI;AAEiE,UADvD,AAAE,eAAd,wBACkB,yBAAsB,gBAApB,AAAM,KAAD,mBAAuC,eAAZ;;AAIC,QAAlC,AAAY,AAAQ,gBAAxC,AAAM,KAAD,gCAAuC;;AAGa,QAArC,AAAY,AAAQ,gBAAxC,AAAM,KAAD,gCAAuC;;IAEjD;;UAGgC;AAG9B,UAAI,AAAS,mCACD,AAAE,eAAV,uBAA8B,AAAE,eAAd,2BAAmC,AAAE,eAAd,+BACjB,gBAApB,AAAM,KAAD;AAEX,YAAI;AAEiE,UADxD,AAAE,eAAb,uBACkB,yBAAsB,gBAApB,AAAM,KAAD,mBAAuC,eAAZ;;;IAG1D;;UAGiC;AAG/B,UAAwB,gBAApB,AAAM,KAAD,+BACgB,AAChB,gBADJ,AAAM,KAAD,2BAC4B,gBAApB,AAAM,KAAD;AACrB;;AAKF,UAAI,AAAS,mCACD,AAAE,eAAV,uBAA8B,AAAE,eAAd,2BAAmC,AAAE,eAAd,+BACjB,gBAApB,AAAM,KAAD;AAEX,YAAI;AAEiE,UADvD,AAAE,eAAd,wBACkB,yBAAsB,gBAApB,AAAM,KAAD,mBAAuC,eAAZ;;AAII,QAArC,AAAY,AAAQ,gBAAxC,AAAM,KAAD,mCAA0C;;AAGa,QAAxC,AAAY,AAAQ,gBAAxC,AAAM,KAAD,mCAA0C;;IAEpD;;UAG4B;AAG1B,UAAI,AAAS,mCACD,AAAE,eAAV,uBAA8B,AAAE,eAAd,2BAAmC,AAAE,eAAd,+BACjB,gBAApB,AAAM,KAAD;AAEX,YAAI;AAEiE,UAD5D,AAAE,eAAT,mBACkB,yBAAsB,gBAApB,AAAM,KAAD,mBAAuC,eAAZ;;;IAG1D;;AAIsC,MAApC,AAAM,sBAAQ;YAAC;AAAQ,cAAA,AAAI,IAAD;;AACb,MAAb,AAAM;IACR;;+BAzHS;QACC;QACD;;QACA;;IArEwB;IACA;IACA;IACA;iCA2Cd;;IAGM,cAAQ;IAkBvB;IACD;IACA;AAIqB,IAF5B,kBAAiC,qBAArB,oBAAoB,IAC1B,oBAAoB,GACpB,yCAAC,oBAAoB;AAGkB,IAA7C,AAAU,oCAAQ;EACpB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoHc;;;;;;IAGA;;;;;;IAGO;;;;;;IAIT;;;;;;;mCAES,iBAA2B;QAA3B;QAA2B;IAA3B;IACE,0BAAE,AAAS,QAAD;IACb,wBAAE,AAAS,QAAD;IACf,kBAAE,AAAS,QAAD;;EAAS;;;;;;;;;;;;;UCvOU;AAC1C,YAAO,gCAAmB,UAAU;IACtC;;;;EARU;;;;;;IAmBK;;;;;;YAQH,kBAAsB,aAAqB;UAA3C;UAAsB;UAAqB;AACrD,YAAO,AAAa,4BAAS,WAAW;IAC1C;;;QARmC;IAFpB,qBAAe;AAE9B;AACmD,IAAjD,AAAW,UAAD,WAAS;UAAC;AAAM,YAAA,AAAa,uBAAI,AAAE,CAAD;;EAC9C;;;;;;;;;;;;;MLrBS,gBAAY","file":"dnd.unsound.ddc.js"}');
  // Exports:
  return {
    dnd: dnd
  };
}));

//# sourceMappingURL=dnd.unsound.ddc.js.map
