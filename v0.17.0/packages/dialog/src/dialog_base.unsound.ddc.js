define(['dart_sdk'], (function load__packages__dialog__src__dialog_base(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dialog_base = Object.create(dart.library);
  var $color = dartx.color;
  var $isEmpty = dartx.isEmpty;
  var $insertAdjacentElement = dartx.insertAdjacentElement;
  var $classes = dartx.classes;
  var $display = dartx.display;
  var $zIndex = dartx.zIndex;
  var $children = dartx.children;
  var $add = dartx.add;
  var $border = dartx.border;
  var $text = dartx.text;
  var $nodes = dartx.nodes;
  var $addAll = dartx.addAll;
  var $paddingBottom = dartx.paddingBottom;
  var $paddingTop = dartx.paddingTop;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/dialog/src/dialog_base.dart",
    "package:dialog/src/dialog_base.dart"
  ];
  var title$ = dart.privateName(dialog_base, "Dialog.title");
  var content$ = dart.privateName(dialog_base, "Dialog.content");
  var successText$ = dart.privateName(dialog_base, "Dialog.successText");
  var cancelText$ = dart.privateName(dialog_base, "Dialog.cancelText");
  var cancellable$ = dart.privateName(dialog_base, "Dialog.cancellable");
  var dialog = dart.privateName(dialog_base, "Dialog.dialog");
  var dialogBackdrop = dart.privateName(dialog_base, "Dialog.dialogBackdrop");
  var xButton = dart.privateName(dialog_base, "Dialog.xButton");
  var cancelButton = dart.privateName(dialog_base, "Dialog.cancelButton");
  var okButton = dart.privateName(dialog_base, "Dialog.okButton");
  dialog_base.Dialog = class Dialog extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      this[content$] = value;
    }
    get successText() {
      return this[successText$];
    }
    set successText(value) {
      this[successText$] = value;
    }
    get cancelText() {
      return this[cancelText$];
    }
    set cancelText(value) {
      this[cancelText$] = value;
    }
    get cancellable() {
      return this[cancellable$];
    }
    set cancellable(value) {
      this[cancellable$] = value;
    }
    get dialog() {
      return this[dialog];
    }
    set dialog(value) {
      super.dialog = value;
    }
    get dialogBackdrop() {
      return this[dialogBackdrop];
    }
    set dialogBackdrop(value) {
      super.dialogBackdrop = value;
    }
    get xButton() {
      return this[xButton];
    }
    set xButton(value) {
      super.xButton = value;
    }
    get cancelButton() {
      return this[cancelButton];
    }
    set cancelButton(value) {
      super.cancelButton = value;
    }
    get okButton() {
      return this[okButton];
    }
    set okButton(value) {
      super.okButton = value;
    }
    showDialog() {
      if (dart.nullCheck(html.document.body)[$classes].contains("modal-open") === false) {
        dart.nullCheck(html.document.body)[$children][$add](this.dialog);
        this.dialogBackdrop[$classes].add("show");
        this.dialog[$classes].add("show");
        dart.nullCheck(html.document.body)[$classes].add("modal-open");
      }
    }
    closeDialog() {
      let t0;
      if (dart.nullCheck(html.document.body)[$classes].contains("modal-open") === true) {
        t0 = dart.nullCheck(html.document.body);
        (() => {
          t0[$children][$remove](this.dialog);
          t0[$children][$remove](this.dialogBackdrop);
          t0[$classes].remove("modal-open");
          return t0;
        })();
      }
    }
  };
  (dialog_base.Dialog.new = function(title, content, cancellable = false, successText = "OK", cancelText = "Cancel") {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
    if (title == null) dart.nullFailed(I[0], 17, 15, "title");
    if (content == null) dart.nullFailed(I[0], 17, 27, "content");
    this[dialog] = html.DivElement.new();
    this[dialogBackdrop] = html.DivElement.new();
    this[xButton] = html.ButtonElement.new();
    this[cancelButton] = html.ButtonElement.new();
    this[okButton] = html.ButtonElement.new();
    this[title$] = title;
    this[content$] = content;
    this[cancellable$] = cancellable;
    this[successText$] = successText;
    this[cancelText$] = cancelText;
    if (dart.nullCheck(html.document.querySelector("body")).style[$color] !== "rgb(51, 51, 51)" && dart.test(html.querySelectorAll(html.Element, "[href*='packages/dialog/bootstrap.css']")[$isEmpty])) {
      let link = (t0 = html.LinkElement.new(), (() => {
        t0.href = "packages/dialog/bootstrap.css";
        t0.rel = "stylesheet";
        t0.type = "text/css";
        return t0;
      })());
      dart.nullCheck(html.document.querySelector("head"))[$insertAdjacentElement]("beforeEnd", link);
    }
    t0$ = this.dialog;
    (() => {
      t0$[$classes].addAll(T.JSArrayOfString().of(["modal", "fade"]));
      t0$.style[$display] = "block";
      return t0$;
    })();
    t0$0 = this.dialogBackdrop;
    (() => {
      t0$0[$classes].addAll(T.JSArrayOfString().of(["modal-backdrop", "fade"]));
      t0$0.style[$zIndex] = "auto";
      return t0$0;
    })();
    this.dialog[$children][$add](this.dialogBackdrop);
    let dialogModal = (t0$1 = html.DivElement.new(), (() => {
      t0$1[$classes].addAll(T.JSArrayOfString().of(["modal-dialog", "modal-sm"]));
      return t0$1;
    })());
    this.dialog[$children][$add](dialogModal);
    let dialogContent = (t0$2 = html.DivElement.new(), (() => {
      t0$2[$classes].add("modal-content");
      return t0$2;
    })());
    dialogModal[$children][$add](dialogContent);
    let dialogHeader = (t0$3 = html.DivElement.new(), (() => {
      t0$3[$classes].add("modal-header");
      t0$3.style[$border] = "0";
      return t0$3;
    })());
    let dialogTitle = (t0$4 = html.HeadingElement.h5(), (() => {
      t0$4[$classes].add("modal-title");
      t0$4[$text] = this.title;
      return t0$4;
    })());
    dialogHeader[$children][$add](dialogTitle);
    t0$5 = this.xButton;
    (() => {
      t0$5[$classes].add("close");
      t0$5[$text] = core.String.fromCharCode(215);
      return t0$5;
    })();
    dialogHeader[$children][$add](this.xButton);
    dialogContent[$children][$add](dialogHeader);
    let dialogBody = (t0$6 = html.DivElement.new(), (() => {
      t0$6[$classes].add("modal-body");
      t0$6[$nodes][$addAll](this.content);
      t0$6.style[$paddingBottom] = "0";
      t0$6.style[$paddingTop] = "0";
      return t0$6;
    })());
    dialogContent[$children][$add](dialogBody);
    let dialogFooter = (t0$7 = html.DivElement.new(), (() => {
      t0$7[$classes].add("modal-footer");
      t0$7.style[$border] = "0";
      return t0$7;
    })());
    if (this.cancellable === true) {
      t0$8 = this.cancelButton;
      (() => {
        t0$8[$classes].addAll(T.JSArrayOfString().of(["btn", "btn-secondary"]));
        t0$8[$text] = this.cancelText;
        return t0$8;
      })();
      dialogFooter[$children][$add](this.cancelButton);
    }
    t0$9 = this.okButton;
    (() => {
      t0$9[$classes].addAll(T.JSArrayOfString().of(["btn", "btn-primary"]));
      t0$9[$text] = this.successText;
      return t0$9;
    })();
    dialogFooter[$children][$add](this.okButton);
    dialogContent[$children][$add](dialogFooter);
  }).prototype = dialog_base.Dialog.prototype;
  dart.addTypeTests(dialog_base.Dialog);
  dart.addTypeCaches(dialog_base.Dialog);
  dart.setMethodSignature(dialog_base.Dialog, () => ({
    __proto__: dart.getMethods(dialog_base.Dialog.__proto__),
    showDialog: dart.fnType(dart.void, []),
    closeDialog: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dialog_base.Dialog, I[1]);
  dart.setFieldSignature(dialog_base.Dialog, () => ({
    __proto__: dart.getFields(dialog_base.Dialog.__proto__),
    title: dart.fieldType(core.String),
    content: dart.fieldType(core.List$(html.Node)),
    successText: dart.fieldType(dart.nullable(core.String)),
    cancelText: dart.fieldType(dart.nullable(core.String)),
    cancellable: dart.fieldType(dart.nullable(core.bool)),
    dialog: dart.finalFieldType(html.DivElement),
    dialogBackdrop: dart.finalFieldType(html.DivElement),
    xButton: dart.finalFieldType(html.ButtonElement),
    cancelButton: dart.finalFieldType(html.ButtonElement),
    okButton: dart.finalFieldType(html.ButtonElement)
  }));
  dart.trackLibraries("packages/dialog/src/dialog_base", {
    "package:dialog/src/dialog_base.dart": dialog_base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dialog_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;IACI;;;;;;IACH;;;;;;IACA;;;;;;IACF;;;;;;IACW;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;;AAiElB,UAAiB,AAAE,AAAQ,AAAuB,eAA9C,AAAS,uCAAuB,kBAAiB;AAChB,QAAtB,AAAE,AAAS,eAAxB,AAAS,qCAAmB;AACM,QAAlC,AAAe,AAAQ,kCAAI;AACD,QAA1B,AAAO,AAAQ,0BAAI;AACqB,QAA3B,AAAE,AAAQ,eAAvB,AAAS,kCAAkB;;IAE/B;;;AAGE,UAAiB,AAAE,AAAQ,AAAuB,eAA9C,AAAS,uCAAuB,kBAAiB;AAInB,aAHnB,eAAb,AAAS;QAAI;AACA,UAAT,uBAAgB;AACP,UAAT,uBAAgB;AACR,UAAR,oBAAe;;;;IAEvB;;qCA9EY,OAAY,SACd,qBACD,oBACA;;QAHG;QAAY;IANP,eAAS;IACT,uBAAiB;IACd,gBAAU;IACV,qBAAe;IACf,iBAAW;IAEnB;IAAY;IACd;IACD;IACA;AACP,QAAkC,AAAE,AAAM,eAAtC,AAAS,4BAAc,2BAAwB,+BAC/C,AAA4D,oCAA3C;AACP,+CAAO;AACf,kBAAO;AACP,iBAAM;AACN,kBAAO;;;AAC6D,MAA1C,AAAE,eAAhC,AAAS,4BAAc,iCAA+B,aAAa,IAAI;;AAK9C,UAF3B;;AACY,MAAR,qBAAe,wBAAC,SAAS;AACnB,MAAN,sBAAgB;;;AAGK,WAFzB;;AACY,MAAR,sBAAe,wBAAC,kBAAkB;AAC5B,MAAN,sBAAe;;;AACgB,IAAnC,AAAO,AAAS,6BAAI;AACT,qDAAc;AACb,MAAR,sBAAe,wBAAC,gBAAgB;;;AACJ,IAAhC,AAAO,AAAS,6BAAI,WAAW;AACpB,uDAAgB;AAAsB,MAAR,mBAAY;;;AACd,IAAvC,AAAY,AAAS,WAAV,kBAAc,aAAa;AAE3B,sDAAe;AACd,MAAR,mBAAY;AACN,MAAN,sBAAe;;;AACJ,wDAA6B;AAChC,MAAR,mBAAY;AACZ,oBAAO;;;AAC2B,IAAtC,AAAa,AAAS,YAAV,kBAAc,WAAW;AAGF,WAFnC;;AACY,MAAR,mBAAY;AACZ,oBAAc,yBAAa;;;AACG,IAAlC,AAAa,AAAS,YAAV,kBAAc;AACc,IAAxC,AAAc,AAAS,aAAV,kBAAc,YAAY;AAE5B,oDAAa;AACZ,MAAR,mBAAY;AACN,MAAN,sBAAa;AACP,MAAN,6BAAsB;AAChB,MAAN,0BAAmB;;;AACe,IAAtC,AAAc,AAAS,aAAV,kBAAc,UAAU;AAE1B,sDAAe;AACd,MAAR,mBAAY;AACN,MAAN,sBAAe;;;AACnB,QAAI,AAAY,qBAAG;AAGI,aAFrB;;AACY,QAAR,sBAAe,wBAAC,OAAO;AACvB,sBAAO;;;AAC4B,MAAvC,AAAa,AAAS,YAAV,kBAAc;;AAIN,WAFtB;;AACY,MAAR,sBAAe,wBAAC,OAAO;AACvB,oBAAO;;;AACwB,IAAnC,AAAa,AAAS,YAAV,kBAAc;AACc,IAAxC,AAAc,AAAS,aAAV,kBAAc,YAAY;EACzC","file":"dialog_base.unsound.ddc.js"}');
  // Exports:
  return {
    src__dialog_base: dialog_base
  };
}));

//# sourceMappingURL=dialog_base.unsound.ddc.js.map
