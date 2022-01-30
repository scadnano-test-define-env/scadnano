define(['dart_sdk', 'packages/dialog/src/dialog_base'], (function load__packages__dialog__dialogs__prompt(dart_sdk, packages__dialog__src__dialog_base) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog_base = packages__dialog__src__dialog_base.src__dialog_base;
  var prompt = Object.create(dart.library);
  var $classes = dartx.classes;
  var $text = dartx.text;
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
  var I = ["org-dartlang-app:///packages/dialog/dialogs/prompt.dart"];
  prompt.prompt = function prompt$(message = "", value = "") {
    if (message == null) dart.nullFailed(I[0], 7, 32, "message");
    if (value == null) dart.nullFailed(I[0], 7, 53, "value");
    return async.async(dart.dynamic, function* prompt() {
      let t0, t0$;
      let c = async.Completer.new();
      let label = (t0 = html.LabelElement.new(), (() => {
        t0[$classes].add("control-label");
        t0.htmlFor = "dialogInput";
        t0[$text] = message;
        return t0;
      })());
      let input = (t0$ = html.InputElement.new({type: "text"}), (() => {
        t0$[$classes].add("form-control");
        t0$.id = "dialogInput";
        t0$.value = value;
        return t0$;
      })());
      let promptDialog = new dialog_base.Dialog.new("Prompt", T.JSArrayOfNode().of([label, input]), true);
      promptDialog.showDialog();
      input.focus();
      promptDialog.dialogBackdrop[$onClick].first.then(core.Null, dart.fn(_ => {
        if (_ == null) dart.nullFailed(I[0], 24, 51, "_");
        c.complete(null);
        promptDialog.closeDialog();
      }, T.MouseEventToNull()));
      html.querySelectorAll(html.Element, ".modal button")[$forEach](dart.fn(buttons => {
        if (buttons == null) dart.nullFailed(I[0], 29, 54, "buttons");
        buttons[$onClick].first.then(core.Null, dart.fn(e => {
          if (e == null) dart.nullFailed(I[0], 30, 33, "e");
          if (dart.equals(e[$target], promptDialog.okButton)) {
            c.complete(input.value);
          } else {
            c.complete(null);
          }
          promptDialog.closeDialog();
        }, T.MouseEventToNull()));
        buttons[$onKeyDown].listen(dart.fn(e => {
          if (e == null) dart.nullFailed(I[0], 38, 31, "e");
          if (e.keyCode === 27) {
            c.complete(null);
            promptDialog.closeDialog();
          }
        }, T.KeyboardEventTovoid()));
      }, T.ElementTovoid()));
      input[$onKeyDown].listen(dart.fn(e => {
        if (e == null) dart.nullFailed(I[0], 46, 27, "e");
        if (e.keyCode === 13) {
          e.preventDefault();
          c.complete(input.value);
          promptDialog.closeDialog();
        } else if (e.keyCode === 27) {
          c.complete(null);
          promptDialog.closeDialog();
        }
      }, T.KeyboardEventTovoid()));
      return c.future;
    });
  };
  dart.trackLibraries("packages/dialog/dialogs/prompt", {
    "package:dialog/dialogs/prompt.dart": prompt
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["prompt.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;mCAM+B,cAAqB;QAArB;QAAqB;AAA9B;;AACV,cAAI;AAED,iDAAQ;AACT,QAAR,iBAAY;AACZ,qBAAU;AACV,oBAAO,OAAO;;;AACL,yBAAQ,6BAAmB,UAAnB;AACT,QAAR,kBAAY;AACZ,iBAAK;AACL,oBAAQ,KAAK;;;AAEV,yBAAe,2BAAO,UAAU,sBAAC,KAAK,EAAE,KAAK,IAAG;AAE9B,MAAzB,AAAa,YAAD;AACC,MAAb,AAAM,KAAD;AAKH,MAHF,AAAa,AAAe,AAAQ,AAAM,YAA9B,gDAAmC;YAAC;AAC9B,QAAhB,AAAE,CAAD,UAAU;AACe,QAA1B,AAAa,YAAD;;AAkBZ,MAfF,AAAkC,oCAAjB,2BAAyB;YAAS;AAQ/C,QAPF,AAAQ,AAAQ,AAAM,OAAf,iCAAoB;cAAC;AAC1B,cAAa,YAAT,AAAE,CAAD,WAAW,AAAa,YAAD;AACH,YAAvB,AAAE,CAAD,UAAU,AAAM,KAAD;;AAEA,YAAhB,AAAE,CAAD,UAAU;;AAEa,UAA1B,AAAa,YAAD;;AAOZ,QALF,AAAQ,AAAU,OAAX,oBAAkB;cAAC;AACxB,cAAI,AAAE,AAAQ,CAAT;AACa,YAAhB,AAAE,CAAD,UAAU;AACe,YAA1B,AAAa,YAAD;;;;AAchB,MATF,AAAM,AAAU,KAAX,oBAAkB;YAAC;AACtB,YAAI,AAAE,AAAQ,CAAT;AACe,UAAlB,AAAE,CAAD;AACsB,UAAvB,AAAE,CAAD,UAAU,AAAM,KAAD;AACU,UAA1B,AAAa,YAAD;cACP,KAAI,AAAE,AAAQ,CAAT;AACM,UAAhB,AAAE,CAAD,UAAU;AACe,UAA1B,AAAa,YAAD;;;AAIhB,YAAO,AAAE,EAAD;IACV","file":"prompt.unsound.ddc.js"}');
  // Exports:
  return {
    dialogs__prompt: prompt
  };
}));

//# sourceMappingURL=prompt.unsound.ddc.js.map
