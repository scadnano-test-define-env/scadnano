define(['dart_sdk', 'packages/dialog/src/dialog_base'], (function load__packages__dialog__dialogs__modal(dart_sdk, packages__dialog__src__dialog_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog_base = packages__dialog__src__dialog_base.src__dialog_base;
  var modal = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $target = dartx.target;
  var $onKeyDown = dartx.onKeyDown;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    NodeL: () => (T.NodeL = dart.constFn(dart.legacy(html.Node)))(),
    boolTovoid: () => (T.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))(),
    MouseEventToNull: () => (T.MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))(),
    KeyboardEventTovoid: () => (T.KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))(),
    ElementTovoid: () => (T.ElementTovoid = dart.constFn(dart.fnType(dart.void, [html.Element])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], T.NodeL());
    }
  }, false);
  var C = [void 0];
  var I = ["org-dartlang-app:///packages/dialog/dialogs/modal.dart"];
  modal.modal = function modal$(title = "Modal", content = C[0] || CT.C0, successText = null, cancelText = null, onSuccess = null, onCancel = null, cancellable = null, whatToFocus = null) {
    if (title == null) dart.nullFailed(I[0], 8, 13, "title");
    if (content == null) dart.nullFailed(I[0], 9, 16, "content");
    return async.async(dart.dynamic, function* modal() {
      let c = async.Completer.new();
      let modalDialog = new dialog_base.Dialog.new(title, content, cancellable, successText, cancelText);
      whatToFocus == null ? whatToFocus = modalDialog.okButton : null;
      modalDialog.showDialog();
      whatToFocus.focus();
      function whatToReturn(howClosed) {
        if (howClosed == null) dart.nullFailed(I[0], 26, 26, "howClosed");
        if (howClosed === true) {
          c.complete(onSuccess);
        } else if (howClosed === false) {
          c.complete(onCancel);
        }
      }
      dart.fn(whatToReturn, T.boolTovoid());
      modalDialog.dialogBackdrop[$onClick].first.then(core.Null, dart.fn(_ => {
        if (_ == null) dart.nullFailed(I[0], 34, 50, "_");
        whatToReturn(false);
        modalDialog.closeDialog();
      }, T.MouseEventToNull()));
      html.querySelectorAll(html.Element, ".modal button")[$forEach](dart.fn(buttons => {
        if (buttons == null) dart.nullFailed(I[0], 39, 54, "buttons");
        buttons[$onClick].first.then(core.Null, dart.fn(e => {
          if (e == null) dart.nullFailed(I[0], 40, 33, "e");
          if (dart.equals(e[$target], modalDialog.okButton)) {
            whatToReturn(true);
          } else {
            whatToReturn(false);
          }
          modalDialog.closeDialog();
        }, T.MouseEventToNull()));
        buttons[$onKeyDown].listen(dart.fn(e => {
          if (e == null) dart.nullFailed(I[0], 48, 31, "e");
          if (e.keyCode === 27) {
            whatToReturn(false);
            modalDialog.closeDialog();
          }
        }, T.KeyboardEventTovoid()));
      }, T.ElementTovoid()));
      return c.future;
    });
  };
  dart.trackLibraries("packages/dialog/dialogs/modal", {
    "package:dialog/dialogs/modal.dart": modal
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gCAOY,iBACG,yBACH,oBACA,mBACA,kBACA,iBACF,oBACG;QAPD;QACG;AAFM;AAST,cAAI;AAEP,wBACH,2BAAO,KAAK,EAAE,OAAO,EAAE,WAAW,EAAE,WAAW,EAAE,UAAU;AAE3B,MAApC,AAAY,WAAD,WAAX,cAAgB,AAAY,WAAD,YAAf;AAEY,MAAxB,AAAY,WAAD;AACQ,MAAnB,AAAY,WAAD;AAEX,eAAK;YAAkB;AACrB,YAAI,AAAU,SAAD,KAAI;AACM,UAArB,AAAE,CAAD,UAAU,SAAS;cACf,KAAI,AAAU,SAAD,KAAI;AACF,UAApB,AAAE,CAAD,UAAU,QAAQ;;;;AAOrB,MAHF,AAAY,AAAe,AAAQ,AAAM,WAA9B,gDAAmC;YAAC;AAC1B,QAAnB,YAAY,CAAC;AACY,QAAzB,AAAY,WAAD;;AAkBX,MAfF,AAAkC,oCAAjB,2BAAyB;YAAS;AAQ/C,QAPF,AAAQ,AAAQ,AAAM,OAAf,iCAAoB;cAAC;AAC1B,cAAa,YAAT,AAAE,CAAD,WAAW,AAAY,WAAD;AACP,YAAlB,YAAY,CAAC;;AAEM,YAAnB,YAAY,CAAC;;AAEU,UAAzB,AAAY,WAAD;;AAOX,QALF,AAAQ,AAAU,OAAX,oBAAkB;cAAC;AACxB,cAAI,AAAE,AAAQ,CAAT;AACgB,YAAnB,YAAY,CAAC;AACY,YAAzB,AAAY,WAAD;;;;AAKjB,YAAO,AAAE,EAAD;IACV","file":"modal.unsound.ddc.js"}');
  // Exports:
  return {
    dialogs__modal: modal
  };
}));

//# sourceMappingURL=modal.unsound.ddc.js.map
