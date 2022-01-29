define(['dart_sdk', 'packages/dialog/src/dialog_base'], (function load__packages__dialog__dialogs__confirm(dart_sdk, packages__dialog__src__dialog_base) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog_base = packages__dialog__src__dialog_base.src__dialog_base;
  var confirm = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $target = dartx.target;
  var $onKeyDown = dartx.onKeyDown;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JSArrayOfNode: () => (T.JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))(),
    MouseEventToNull: () => (T.MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))(),
    KeyboardEventTovoid: () => (T.KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))(),
    ElementTovoid: () => (T.ElementTovoid = dart.constFn(dart.fnType(dart.void, [html.Element])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["org-dartlang-app:///packages/dialog/dialogs/confirm.dart"];
  confirm.confirm = function confirm$(message = "") {
    if (message == null) dart.nullFailed(I[0], 7, 33, "message");
    return async.async(dart.dynamic, function* confirm() {
      let t0;
      let c = async.Completer.new();
      let confirmDialog = new dialog_base.Dialog.new("Confirm", T.JSArrayOfNode().of([html.Text.new(message)]), true);
      t0 = confirmDialog;
      (() => {
        t0.showDialog();
        t0.okButton.focus();
        t0.dialogBackdrop[$onClick].first.then(core.Null, dart.fn(_ => {
          if (_ == null) dart.nullFailed(I[0], 14, 42, "_");
          c.complete(false);
          confirmDialog.closeDialog();
        }, T.MouseEventToNull()));
        return t0;
      })();
      html.querySelectorAll(html.Element, ".modal button")[$forEach](dart.fn(buttons => {
        if (buttons == null) dart.nullFailed(I[0], 19, 54, "buttons");
        buttons[$onClick].first.then(core.Null, dart.fn(e => {
          if (e == null) dart.nullFailed(I[0], 20, 33, "e");
          if (dart.equals(e[$target], confirmDialog.okButton)) {
            c.complete(true);
          } else {
            c.complete(false);
          }
          confirmDialog.closeDialog();
        }, T.MouseEventToNull()));
        buttons[$onKeyDown].listen(dart.fn(e => {
          if (e == null) dart.nullFailed(I[0], 28, 31, "e");
          if (e.keyCode === 27) {
            c.complete(false);
            confirmDialog.closeDialog();
          }
        }, T.KeyboardEventTovoid()));
      }, T.ElementTovoid()));
      return c.future;
    });
  };
  dart.trackLibraries("packages/dialog/dialogs/confirm", {
    "package:dialog/dialogs/confirm.dart": confirm
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["confirm.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;QAMgC;AAAT;;AACX,cAAI;AACP,0BAAgB,2BAAO,WAAW,sBAAC,cAAK,OAAO,KAAI;AAQtD,WANJ,aAAa;MAAb;AACI;AACS,QAAT;AAC6B,QAA7B,AAAe,AAAQ,kDAAW;cAAC;AAClB,UAAjB,AAAE,CAAD,UAAU;AACgB,UAA3B,AAAc,aAAD;;;;AAkBf,MAfF,AAAkC,oCAAjB,2BAAyB;YAAS;AAQ/C,QAPF,AAAQ,AAAQ,AAAM,OAAf,iCAAoB;cAAC;AAC1B,cAAa,YAAT,AAAE,CAAD,WAAW,AAAc,aAAD;AACX,YAAhB,AAAE,CAAD,UAAU;;AAEM,YAAjB,AAAE,CAAD,UAAU;;AAEc,UAA3B,AAAc,aAAD;;AAOb,QALF,AAAQ,AAAU,OAAX,oBAAkB;cAAC;AACxB,cAAI,AAAE,AAAQ,CAAT;AACc,YAAjB,AAAE,CAAD,UAAU;AACgB,YAA3B,AAAc,aAAD;;;;AAKnB,YAAO,AAAE,EAAD;IACV","file":"confirm.unsound.ddc.js"}');
  // Exports:
  return {
    dialogs__confirm: confirm
  };
}));

//# sourceMappingURL=confirm.unsound.ddc.js.map
