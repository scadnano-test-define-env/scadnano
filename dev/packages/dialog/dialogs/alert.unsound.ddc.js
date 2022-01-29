define(['dart_sdk', 'packages/dialog/src/dialog_base'], (function load__packages__dialog__dialogs__alert(dart_sdk, packages__dialog__src__dialog_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog_base = packages__dialog__src__dialog_base.src__dialog_base;
  var alert = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $onKeyDown = dartx.onKeyDown;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JSArrayOfNode: () => (T.JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    KeyboardEventTovoid: () => (T.KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))(),
    ElementTovoid: () => (T.ElementTovoid = dart.constFn(dart.fnType(dart.void, [html.Element])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["org-dartlang-app:///packages/dialog/dialogs/alert.dart"];
  alert.alert = function alert$(message = "") {
    let t0;
    if (message == null) dart.nullFailed(I[0], 6, 20, "message");
    let alertDialog = new dialog_base.Dialog.new("Alert", T.JSArrayOfNode().of([html.Text.new(message)]));
    t0 = alertDialog;
    (() => {
      t0.showDialog();
      t0.okButton.focus();
      t0.dialogBackdrop[$onClick].first.then(dart.void, dart.fn(_ => {
        if (_ == null) dart.nullFailed(I[0], 12, 42, "_");
        return alertDialog.closeDialog();
      }, T.MouseEventTovoid()));
      return t0;
    })();
    html.querySelectorAll(html.Element, ".modal button")[$forEach](dart.fn(buttons => {
      if (buttons == null) dart.nullFailed(I[0], 14, 54, "buttons");
      buttons[$onClick].first.then(dart.void, dart.fn(e => {
        if (e == null) dart.nullFailed(I[0], 15, 33, "e");
        return alertDialog.closeDialog();
      }, T.MouseEventTovoid()));
      buttons[$onKeyDown].listen(dart.fn(e => {
        if (e == null) dart.nullFailed(I[0], 16, 31, "e");
        if (e.keyCode === 27) {
          alertDialog.closeDialog();
        }
      }, T.KeyboardEventTovoid()));
    }, T.ElementTovoid()));
  };
  dart.trackLibraries("packages/dialog/dialogs/alert", {
    "package:dialog/dialogs/alert.dart": alert
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["alert.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;gCAKmB;;;AACV,sBAAc,2BAAO,SAAS,sBAAC,cAAK,OAAO;AAKqB,SAHvE,WAAW;IAAX;AACI;AACS,MAAT;AAC6B,MAA7B,AAAe,AAAQ,kDAAW;YAAC;AAAM,cAAA,AAAY,YAAD;;;;AAStD,IAPF,AAAkC,oCAAjB,2BAAyB;UAAS;AACW,MAA5D,AAAQ,AAAQ,AAAM,OAAf,iCAAoB;YAAC;AAAM,cAAA,AAAY,YAAD;;AAK3C,MAJF,AAAQ,AAAU,OAAX,oBAAkB;YAAC;AACxB,YAAI,AAAE,AAAQ,CAAT;AACsB,UAAzB,AAAY,WAAD;;;;EAInB","file":"alert.unsound.ddc.js"}');
  // Exports:
  return {
    dialogs__alert: alert
  };
}));

//# sourceMappingURL=alert.unsound.ddc.js.map
