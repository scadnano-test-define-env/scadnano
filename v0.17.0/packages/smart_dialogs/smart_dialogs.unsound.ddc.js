define(['dart_sdk', 'packages/pedantic/pedantic'], (function load__packages__smart_dialogs__smart_dialogs(dart_sdk, packages__pedantic__pedantic) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pedantic = packages__pedantic__pedantic.pedantic;
  var dia_input = Object.create(dart.library);
  var smart_dialogs = Object.create(dart.library);
  var table_base = Object.create(dart.library);
  var table_attr = Object.create(dart.library);
  var popup = Object.create(dart.library);
  var dia_utils = Object.create(dart.library);
  var icon_panel = Object.create(dart.library);
  var dia_base = Object.create(dart.library);
  var dia_fileinput = Object.create(dart.library);
  var dia_button = Object.create(dart.library);
  var dia_attr = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $color = dartx.color;
  var $fontSize = dartx.fontSize;
  var $textAlign = dartx.textAlign;
  var $cursor = dartx.cursor;
  var $onClick = dartx.onClick;
  var $right = dartx.right;
  var $top = dartx.top;
  var $containsPoint = dartx.containsPoint;
  var $scrollTo = dartx.scrollTo;
  var $append = dartx.append;
  var $add = dartx.add;
  var $length = dartx.length;
  var $isEmpty = dartx.isEmpty;
  var $paddingTop = dartx.paddingTop;
  var $textDecoration = dartx.textDecoration;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $value = dartx.value;
  var $size = dartx.size;
  var $readOnly = dartx.readOnly;
  var $background = dartx.background;
  var $onMouseDown = dartx.onMouseDown;
  var $onKeyPress = dartx.onKeyPress;
  var $isNotEmpty = dartx.isNotEmpty;
  var $appendText = dartx.appendText;
  var $padding = dartx.padding;
  var $margin = dartx.margin;
  var $verticalAlign = dartx.verticalAlign;
  var $display = dartx.display;
  var $contains = dartx.contains;
  var $round = dartx.round;
  var $overflowY = dartx.overflowY;
  var $width = dartx.width;
  var $height = dartx.height;
  var $addEventListener = dartx.addEventListener;
  var $opacity = dartx.opacity;
  var $paddingBottom = dartx.paddingBottom;
  var $onKeyDown = dartx.onKeyDown;
  var $truncate = dartx.truncate;
  var $marginTop = dartx.marginTop;
  var $position = dartx.position;
  var $left = dartx.left;
  var $bottom = dartx.bottom;
  var $userSelect = dartx.userSelect;
  var $zIndex = dartx.zIndex;
  var $remove = dartx.remove;
  var $backgroundColor = dartx.backgroundColor;
  var $borderLeft = dartx.borderLeft;
  var $split = dartx.split;
  var $keys = dartx.keys;
  var $overflow = dartx.overflow;
  var $borderRadius = dartx.borderRadius;
  var $border = dartx.border;
  var $borderSpacing = dartx.borderSpacing;
  var $wordWrap = dartx.wordWrap;
  var $maxWidth = dartx.maxWidth;
  var $borderCollapse = dartx.borderCollapse;
  var $marginBottom = dartx.marginBottom;
  var $onTouchMove = dartx.onTouchMove;
  var $last = dartx.last;
  var $onMouseEnter = dartx.onMouseEnter;
  var $onMouseLeave = dartx.onMouseLeave;
  var $target = dartx.target;
  var $page = dartx.page;
  var $first = dartx.first;
  var $abs = dartx.abs;
  var $onTouchStart = dartx.onTouchStart;
  var $onTouchEnd = dartx.onTouchEnd;
  var $marginLeft = dartx.marginLeft;
  var $paddingLeft = dartx.paddingLeft;
  var $borderTop = dartx.borderTop;
  var $boxShadow = dartx.boxShadow;
  var $lineHeight = dartx.lineHeight;
  var $appendHtml = dartx.appendHtml;
  var $replaceFirst = dartx.replaceFirst;
  var $toLowerCase = dartx.toLowerCase;
  var $toInt = dartx.toInt;
  var $remainder = dartx.remainder;
  var $parent = dartx.parent;
  var $sublist = dartx.sublist;
  var $onChange = dartx.onChange;
  var $borderBottom = dartx.borderBottom;
  var $fontSmoothing = dartx.fontSmoothing;
  var $fontWeight = dartx.fontWeight;
  var $onMouseOver = dartx.onMouseOver;
  var $onFocus = dartx.onFocus;
  var $onBlur = dartx.onBlur;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ActButtonL: () => (T.ActButtonL = dart.constFn(dart.legacy(dia_button.ActButton)))(),
    JSArrayOfActButtonL: () => (T.JSArrayOfActButtonL = dart.constFn(_interceptors.JSArray$(T.ActButtonL())))(),
    intL: () => (T.intL = dart.constFn(dart.legacy(core.int)))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    ListOfStringL: () => (T.ListOfStringL = dart.constFn(core.List$(T.StringL())))(),
    ListLOfStringL: () => (T.ListLOfStringL = dart.constFn(dart.legacy(T.ListOfStringL())))(),
    ListOfListLOfStringL: () => (T.ListOfListLOfStringL = dart.constFn(core.List$(T.ListLOfStringL())))(),
    ListLOfListLOfStringL: () => (T.ListLOfListLOfStringL = dart.constFn(dart.legacy(T.ListOfListLOfStringL())))(),
    IdentityMapOfintL$ListLOfListLOfStringL: () => (T.IdentityMapOfintL$ListLOfListLOfStringL = dart.constFn(_js_helper.IdentityMap$(T.intL(), T.ListLOfListLOfStringL())))(),
    IdentityMapOfintL$ListLOfStringL: () => (T.IdentityMapOfintL$ListLOfStringL = dart.constFn(_js_helper.IdentityMap$(T.intL(), T.ListLOfStringL())))(),
    TableCellElementL: () => (T.TableCellElementL = dart.constFn(dart.legacy(html.TableCellElement)))(),
    ListOfTableCellElementL: () => (T.ListOfTableCellElementL = dart.constFn(core.List$(T.TableCellElementL())))(),
    numL: () => (T.numL = dart.constFn(dart.legacy(core.num)))(),
    RectangleOfnumL: () => (T.RectangleOfnumL = dart.constFn(math.Rectangle$(T.numL())))(),
    UIEventL: () => (T.UIEventL = dart.constFn(dart.legacy(html.UIEvent)))(),
    UIEventLToNull: () => (T.UIEventLToNull = dart.constFn(dart.fnType(core.Null, [T.UIEventL()])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    LinkedMapOfintL$ListLOfStringL: () => (T.LinkedMapOfintL$ListLOfStringL = dart.constFn(_js_helper.LinkedMap$(T.intL(), T.ListLOfStringL())))(),
    JSArrayOfStringL: () => (T.JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(T.StringL())))(),
    MapOfintL$ListLOfStringL: () => (T.MapOfintL$ListLOfStringL = dart.constFn(core.Map$(T.intL(), T.ListLOfStringL())))(),
    MapLOfintL$ListLOfStringL: () => (T.MapLOfintL$ListLOfStringL = dart.constFn(dart.legacy(T.MapOfintL$ListLOfStringL())))(),
    VoidToMapLOfintL$ListLOfStringL: () => (T.VoidToMapLOfintL$ListLOfStringL = dart.constFn(dart.fnType(T.MapLOfintL$ListLOfStringL(), [])))(),
    EventL: () => (T.EventL = dart.constFn(dart.legacy(html.Event)))(),
    intLAndEventLTovoid: () => (T.intLAndEventLTovoid = dart.constFn(dart.fnType(dart.void, [T.intL(), T.EventL()])))(),
    InputElementL: () => (T.InputElementL = dart.constFn(dart.legacy(html.InputElement)))(),
    ListOfInputElementL: () => (T.ListOfInputElementL = dart.constFn(core.List$(T.InputElementL())))(),
    KeyboardEventL: () => (T.KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))(),
    KeyboardEventLToNull: () => (T.KeyboardEventLToNull = dart.constFn(dart.fnType(core.Null, [T.KeyboardEventL()])))(),
    TextInputElementL: () => (T.TextInputElementL = dart.constFn(dart.legacy(html.TextInputElement)))(),
    StringLToTextInputElementL: () => (T.StringLToTextInputElementL = dart.constFn(dart.fnType(T.TextInputElementL(), [T.StringL()])))(),
    UserInputL: () => (T.UserInputL = dart.constFn(dart.legacy(dia_base.UserInput)))(),
    UserInputLToNull: () => (T.UserInputLToNull = dart.constFn(dart.fnType(core.Null, [T.UserInputL()])))(),
    EventLToNull: () => (T.EventLToNull = dart.constFn(dart.fnType(core.Null, [T.EventL()])))(),
    ListLOfInputElementL: () => (T.ListLOfInputElementL = dart.constFn(dart.legacy(T.ListOfInputElementL())))(),
    ListLOfListLOfStringLAndListLOfInputElementLTovoid: () => (T.ListLOfListLOfStringLAndListLOfInputElementLTovoid = dart.constFn(dart.fnType(dart.void, [T.ListLOfListLOfStringL(), T.ListLOfInputElementL()])))(),
    ListOfActButtonL: () => (T.ListOfActButtonL = dart.constFn(core.List$(T.ActButtonL())))(),
    CompleterOfUserInputL: () => (T.CompleterOfUserInputL = dart.constFn(async.Completer$(T.UserInputL())))(),
    UserInputLTovoid: () => (T.UserInputLTovoid = dart.constFn(dart.fnType(dart.void, [T.UserInputL()])))(),
    LinkedHashMapOfStringL$StringL: () => (T.LinkedHashMapOfStringL$StringL = dart.constFn(collection.LinkedHashMap$(T.StringL(), T.StringL())))(),
    IdentityMapOfStringL$StringL: () => (T.IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(T.StringL(), T.StringL())))(),
    TouchEventL: () => (T.TouchEventL = dart.constFn(dart.legacy(html.TouchEvent)))(),
    TouchEventLToNull: () => (T.TouchEventLToNull = dart.constFn(dart.fnType(core.Null, [T.TouchEventL()])))(),
    TableRowElementL: () => (T.TableRowElementL = dart.constFn(dart.legacy(html.TableRowElement)))(),
    JSArrayOfTableRowElementL: () => (T.JSArrayOfTableRowElementL = dart.constFn(_interceptors.JSArray$(T.TableRowElementL())))(),
    MouseEventL: () => (T.MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))(),
    MouseEventLToNull: () => (T.MouseEventLToNull = dart.constFn(dart.fnType(core.Null, [T.MouseEventL()])))(),
    StringLTovoid: () => (T.StringLTovoid = dart.constFn(dart.fnType(dart.void, [T.StringL()])))(),
    TouchEventLTovoid: () => (T.TouchEventLTovoid = dart.constFn(dart.fnType(dart.void, [T.TouchEventL()])))(),
    ElementL: () => (T.ElementL = dart.constFn(dart.legacy(html.Element)))(),
    PointOfintL: () => (T.PointOfintL = dart.constFn(math.Point$(T.intL())))(),
    PointLOfintL: () => (T.PointLOfintL = dart.constFn(dart.legacy(T.PointOfintL())))(),
    JSArrayOfPointLOfintL: () => (T.JSArrayOfPointLOfintL = dart.constFn(_interceptors.JSArray$(T.PointLOfintL())))(),
    ListOfPointLOfintL: () => (T.ListOfPointLOfintL = dart.constFn(core.List$(T.PointLOfintL())))(),
    ListOfTableRowElementL: () => (T.ListOfTableRowElementL = dart.constFn(core.List$(T.TableRowElementL())))(),
    ImageElementL: () => (T.ImageElementL = dart.constFn(dart.legacy(html.ImageElement)))(),
    UIEventLTovoid: () => (T.UIEventLTovoid = dart.constFn(dart.fnType(dart.void, [T.UIEventL()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:smart_dialogs/src/dia_base.dart",
    "package:smart_dialogs/src/dia_input.dart",
    "package:smart_dialogs/src/table_base.dart",
    "package:smart_dialogs/src/table_attr.dart",
    "package:smart_dialogs/src/popup.dart",
    "package:smart_dialogs/src/dia_utils.dart",
    "org-dartlang-app:///packages/smart_dialogs/src/icon_panel.dart",
    "package:smart_dialogs/src/icon_panel.dart",
    "org-dartlang-app:///packages/smart_dialogs/src/dia_fileinput.dart",
    "package:smart_dialogs/src/dia_fileinput.dart",
    "package:smart_dialogs/src/dia_button.dart",
    "package:smart_dialogs/src/dia_attr.dart"
  ];
  var popup$ = dart.privateName(dia_input, "InputDialog.popup");
  var diaTable = dart.privateName(dia_input, "InputDialog.diaTable");
  var RADIOGROUP1 = dart.privateName(dia_input, "InputDialog.RADIOGROUP1");
  var redcross_left = dart.privateName(dia_input, "InputDialog.redcross_left");
  var actButs = dart.privateName(dia_input, "InputDialog.actButs");
  var dia = dart.privateName(dia_base, "BaseDialog.dia");
  var diaContainer = dart.privateName(dia_base, "BaseDialog.diaContainer");
  var closeCallback$ = dart.privateName(dia_base, "BaseDialog.closeCallback");
  var isModal = dart.privateName(dia_base, "BaseDialog.isModal");
  var isopen = dart.privateName(dia_base, "BaseDialog.isopen");
  dia_base.BaseDialog = class BaseDialog extends core.Object {
    get dia() {
      return this[dia];
    }
    set dia(value) {
      this[dia] = value;
    }
    get diaContainer() {
      return this[diaContainer];
    }
    set diaContainer(value) {
      this[diaContainer] = value;
    }
    get closeCallback() {
      return this[closeCallback$];
    }
    set closeCallback(value) {
      this[closeCallback$] = value;
    }
    get isModal() {
      return this[isModal];
    }
    set isModal(value) {
      this[isModal] = value;
    }
    get isopen() {
      return this[isopen];
    }
    set isopen(value) {
      this[isopen] = value;
    }
    createShowDia() {
      let t0, t0$, t0$0;
      this.dia = html.DivElement.new();
      dia_attr.DiaAttr.setDialogStyle2(this.dia);
      if (dart.test(this.isModal)) {
        this.diaContainer = html.DivElement.new();
        t0 = this.diaContainer.style;
        (() => {
          t0[$position] = "absolute";
          t0[$top] = "0";
          t0[$left] = "0";
          t0[$bottom] = "0";
          t0[$right] = "0";
          t0[$width] = "100%";
          t0[$height] = "100%";
          t0[$margin] = "-50";
          t0[$padding] = "0";
          t0[$userSelect] = "none";
          t0[$zIndex] = dart.str(dia_attr.DiaAttr.ZINDEX_DIALOG);
          t0[$overflowY] = "auto";
          return t0;
        })();
        html.document.body[$append](this.diaContainer);
        t0$ = this.dia.style;
        (() => {
          t0$[$color] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR);
          return t0$;
        })();
        this.diaContainer[$append](this.dia);
      } else {
        t0$0 = this.dia.style;
        (() => {
          t0$0[$position] = "absolute";
          t0$0[$top] = "0";
          t0$0[$left] = "0";
          t0$0[$width] = "300px";
          return t0$0;
        })();
        html.document.body[$append](this.dia);
      }
      this.dia.style[$zIndex] = dart.str(dart.notNull(dia_attr.DiaAttr.ZINDEX_DIALOG) + 1);
      this.isopen = true;
    }
    close(userInput) {
      let t0;
      this.isopen = false;
      this.dia[$remove]();
      if (dart.test(this.isModal)) {
        this.diaContainer[$remove]();
      }
      if (this.closeCallback != null) {
        if (userInput == null) {
          userInput = new dia_base.UserInput.new("", null, this);
        }
        t0 = userInput;
        this.closeCallback(t0);
      }
    }
    isOpen() {
      return this.isopen;
    }
  };
  (dia_base.BaseDialog.new = function(closeCallback) {
    this[dia] = null;
    this[diaContainer] = null;
    this[isModal] = null;
    this[isopen] = false;
    this[closeCallback$] = closeCallback;
    this.isModal = true;
    this.createShowDia();
  }).prototype = dia_base.BaseDialog.prototype;
  (dia_base.BaseDialog.noModal = function(closeCallback) {
    this[dia] = null;
    this[diaContainer] = null;
    this[isModal] = null;
    this[isopen] = false;
    this[closeCallback$] = closeCallback;
    this.isModal = false;
    this.createShowDia();
  }).prototype = dia_base.BaseDialog.prototype;
  dart.addTypeTests(dia_base.BaseDialog);
  dart.addTypeCaches(dia_base.BaseDialog);
  dart.setMethodSignature(dia_base.BaseDialog, () => ({
    __proto__: dart.getMethods(dia_base.BaseDialog.__proto__),
    createShowDia: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, [dart.legacy(dia_base.UserInput)]),
    isOpen: dart.fnType(dart.legacy(core.bool), [])
  }));
  dart.setLibraryUri(dia_base.BaseDialog, I[0]);
  dart.setFieldSignature(dia_base.BaseDialog, () => ({
    __proto__: dart.getFields(dia_base.BaseDialog.__proto__),
    dia: dart.fieldType(dart.legacy(html.DivElement)),
    diaContainer: dart.fieldType(dart.legacy(html.DivElement)),
    closeCallback: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(dia_base.UserInput)]))),
    isModal: dart.fieldType(dart.legacy(core.bool)),
    isopen: dart.fieldType(dart.legacy(core.bool))
  }));
  dia_input.InputDialog = class InputDialog extends dia_base.BaseDialog {
    get popup() {
      return this[popup$];
    }
    set popup(value) {
      this[popup$] = value;
    }
    get diaTable() {
      return this[diaTable];
    }
    set diaTable(value) {
      this[diaTable] = value;
    }
    get RADIOGROUP1() {
      return this[RADIOGROUP1];
    }
    set RADIOGROUP1(value) {
      super.RADIOGROUP1 = value;
    }
    get redcross_left() {
      return this[redcross_left];
    }
    set redcross_left(value) {
      this[redcross_left] = value;
    }
    get actButs() {
      return this[actButs];
    }
    set actButs(value) {
      this[actButs] = value;
    }
    init(buttontype, htmlTitleText, inputTextLabelInfo, comboInfoND, defaultInputTextsND, sizes, isChecked, alternateRowColor, buttonLabels) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let defaultInputTexts = null;
      let defaultInputTexts2D = null;
      let comboInfo1D = null;
      let comboInfo2D = null;
      let attr = dia_attr.DiaAttr.attr;
      let hasDim1Combo = false;
      if (comboInfoND != null) {
        comboInfo1D = comboInfoND[$_get](dia_input.InputDialog.COL1);
        comboInfo2D = comboInfoND[$_get](dia_input.InputDialog.COL2);
        if (comboInfo1D != null) {
          for (let temp of comboInfo1D) {
            if (temp != null) {
              hasDim1Combo = true;
              break;
            }
          }
        }
      }
      let dim = 1;
      if (defaultInputTextsND != null) {
        defaultInputTexts = defaultInputTextsND[$_get](dia_input.InputDialog.COL1);
        defaultInputTexts2D = defaultInputTextsND[$_get](dia_input.InputDialog.COL2);
        if (defaultInputTexts2D != null) {
          dim = 2;
        }
      }
      if (dart.test(dia_utils.DiaUtils.isSafariIOS())) {
        this.redcross_left = true;
      }
      dia_input.InputDialog.inputDialogStatus = 1;
      let NCOLS = 4;
      if (dim === 2) {
        NCOLS = 6;
      }
      let showAbortIcon = true;
      let delIconSize = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_CROSS_FONTSIZE));
      let delCell = null;
      let fakeCells = T.ListOfTableCellElementL().new(NCOLS - 1);
      let alignCross = "right";
      if (dart.test(this.redcross_left)) {
        alignCross = "left";
      }
      if (showAbortIcon !== null && showAbortIcon) {
        delCell = html.TableCellElement.new();
        for (let i = 0; i < NCOLS - 1; i = i + 1) {
          fakeCells[$_set](i, html.TableCellElement.new());
        }
        t0 = delCell.style;
        (() => {
          t0[$color] = "red";
          t0[$fontSize] = dart.str(delIconSize) + "px";
          t0[$textAlign] = alignCross;
          t0[$cursor] = "pointer";
          return t0;
        })();
        dia_utils.DiaUtils.appendHtml2(delCell, dia_utils.DiaUtils.UNICODE_DELETE_CROSS);
        delCell[$onClick].listen(dart.fn(e => {
          let rect = delCell.getBoundingClientRect();
          let tpoint = dia_utils.DiaUtils.getTouchPoint(e);
          let iconRect = new (T.RectangleOfnumL()).new(dart.notNull(rect[$right]) - dart.notNull(delIconSize), rect[$top], delIconSize, delIconSize);
          if (dart.test(this.redcross_left)) {
            iconRect = rect;
          }
          if (dart.test(iconRect[$containsPoint](tpoint))) {
            if (this.dia != null) {
              this.close(new dia_base.UserInput.new(dia_attr.DiaAttr.DIA_ACT_ABORT, null, null));
              this.dia = null;
            }
            if (dart.test(dia_utils.DiaUtils.isTablet())) {
              html.window[$scrollTo](0, 0);
              dia_input.InputDialog.inputDialogStatus = 0;
            }
          }
        }, T.UIEventLToNull()));
      }
      let row = null;
      let cell = null;
      let nrows = 0;
      let checkBoxes = null;
      let tinputFields = null;
      let tinputFields2D = null;
      const addEmptyTableRow = () => {
        row = html.TableRowElement.new();
        cell = html.TableCellElement.new();
        dia_utils.DiaUtils.appendHtml2(cell, "&nbsp;");
        cell.colSpan = NCOLS;
        row[$append](cell);
        this.diaTable[$append](row);
      };
      dart.fn(addEmptyTableRow, T.VoidTovoid());
      function getResults() {
        let results = new (T.LinkedMapOfintL$ListLOfStringL()).new();
        let cboxResult = null;
        let inputResult = null;
        let inputResult2D = null;
        let resultLine = null;
        for (let i = 0; i < dart.notNull(nrows); i = i + 1) {
          resultLine = T.JSArrayOfStringL().of([]);
          let cbox = checkBoxes[$_get](i);
          cboxResult = "null";
          if (cbox != null) {
            cboxResult = dart.str(cbox.checked);
          }
          inputResult = "null";
          if (tinputFields[$_get](i) != null) {
            inputResult = tinputFields[$_get](i).value;
          }
          resultLine[$add](cboxResult);
          resultLine[$add](inputResult);
          if (dim === 2) {
            inputResult2D = "null";
            if (tinputFields2D[$_get](i) != null) {
              inputResult2D = tinputFields2D[$_get](i).value;
            }
            resultLine[$add](inputResult2D);
          }
          results[$_set](i, resultLine);
        }
        return results;
      }
      dart.fn(getResults, T.VoidToMapLOfintL$ListLOfStringL());
      const executeButton = (i, e) => {
        e.preventDefault();
        if (i === -1) {
          if (this.dia != null) {
            this.close(new dia_base.UserInput.new(dia_attr.DiaAttr.DIA_ACT_ABORT, null, null));
          }
        } else {
          if (this.dia != null) {
            this.close(new dia_base.UserInput.new(dia_attr.DiaAttr.DIA_ACTIONS[$_get](i), getResults(), null));
          }
        }
        this.dia = null;
        if (dart.test(dia_utils.DiaUtils.isTablet())) {
          html.window[$scrollTo](0, 0);
          dia_input.InputDialog.inputDialogStatus = 0;
        }
      };
      dart.fn(executeButton, T.intLAndEventLTovoid());
      row = html.TableRowElement.new();
      if (!dart.test(this.redcross_left)) {
        for (let i = 0; i < dart.notNull(fakeCells[$length]); i = i + 1) {
          row[$append](fakeCells[$_get](i));
        }
      }
      row[$append](delCell);
      this.diaTable[$append](row);
      let textfontSize = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE));
      let fontsize = textfontSize;
      row = html.TableRowElement.new();
      cell = html.TableCellElement.new();
      dia_utils.DiaUtils.appendHtml2(cell, htmlTitleText);
      let textalign = attr[$_get](dia_attr.DiaAttr.DIALOG_HEADER_TEXTALIGN);
      if (buttonLabels != null && dart.test(buttonLabels[$isEmpty]) && inputTextLabelInfo == null && buttontype == dia_input.InputDialog.ALIGN_LEFT) {
        textalign = "left";
        fontsize = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_HELP_TEXT_FONTSIZE));
      } else {
        fontsize = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_HEADER_FONTSIZE));
      }
      cell.colSpan = NCOLS;
      t0$ = cell.style;
      (() => {
        t0$[$textAlign] = dart.str(textalign);
        t0$[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_HEADER_COLOR);
        t0$[$fontSize] = dart.str(fontsize) + "px";
        t0$[$paddingTop] = "10px";
        return t0$;
      })();
      if (dart.test(dia_utils.DiaUtils.isPhone())) {
        cell.style[$paddingTop] = "6px";
      }
      if (inputTextLabelInfo != null) {
        cell.style[$textDecoration] = "underline";
      }
      row[$append](cell);
      this.diaTable[$append](row);
      addEmptyTableRow();
      if (inputTextLabelInfo != null) {
        nrows = inputTextLabelInfo[$length];
        checkBoxes = T.ListOfInputElementL().new(nrows);
        tinputFields = T.ListOfInputElementL().new(nrows);
        if (dim === 2) {
          tinputFields2D = T.ListOfInputElementL().new(nrows);
        }
        for (let i = 0; i < dart.notNull(nrows); i = i + 1) {
          row = html.TableRowElement.new();
          cell = html.TableCellElement.new();
          let cbox = null;
          if (isChecked != null && isChecked[$_get](i) != null && (isChecked[$_get](i) == dia_utils.DiaUtils.TRUE || isChecked[$_get](i) == dia_utils.DiaUtils.FALSE)) {
            cbox = html.InputElement.new({type: buttontype});
            cbox.checked = dia_utils.DiaUtils.getBoolFromString(isChecked[$_get](i));
            cbox.style[$fontSize] = dart.str(textfontSize) + "px";
            if (buttontype == dia_attr.DiaAttr.RADIO) {
              cbox.name = this.RADIOGROUP1;
            }
            cell[$append](cbox);
          }
          checkBoxes[$_set](i, cbox);
          row[$append](cell);
          cell = html.TableCellElement.new();
          dia_utils.DiaUtils.appendHtml2(cell, inputTextLabelInfo[$_get](i));
          t0$0 = cell.style;
          (() => {
            t0$0[$textAlign] = "left";
            t0$0[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR);
            return t0$0;
          })();
          if ((i & 1) !== 0 && dart.test(alternateRowColor)) {
            cell.style[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR2);
          }
          row[$append](cell);
          const appendTextInputField = text => {
            let t0;
            let textinputField = null;
            if (dart.notNull(sizes[$_get](i)) > 0) {
              let readOnly = false;
              if (text != null && text[$startsWith](dia_input.InputDialog.READ_ONLY)) {
                readOnly = true;
                text = text[$substring](dia_input.InputDialog.READ_ONLY.length);
              }
              cell = html.TableCellElement.new();
              textinputField = html.TextInputElement.new();
              textinputField[$value] = text;
              textinputField[$size] = sizes[$_get](i);
              if (readOnly) {
                textinputField[$readOnly] = readOnly;
              }
              t0 = textinputField.style;
              (() => {
                t0[$fontSize] = dart.str(dart.notNull(textfontSize) - 1) + "px";
                t0[$background] = attr[$_get](dia_attr.DiaAttr.DIALOG_INPUT_BG);
                return t0;
              })();
              cell[$append](textinputField);
              textinputField[$onMouseDown].listen(dart.fn(e => {
                if (checkBoxes[$_get](i) != null && checkBoxes[$_get](i).name == this.RADIOGROUP1) {
                  checkBoxes[$_get](i).checked = true;
                }
              }, T.UIEventLToNull()));
              textinputField[$onKeyPress].listen(dart.fn(e => {
                if (e.keyCode === 13 || e.keyCode === 3) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (dart.test(dia_utils.DiaUtils.isTablet())) {
                    executeButton(0, e);
                  }
                }
              }, T.KeyboardEventLToNull()));
            }
            row[$append](cell);
            return textinputField;
          };
          dart.fn(appendTextInputField, T.StringLToTextInputElementL());
          tinputFields[$_set](i, T.InputElementL().as(appendTextInputField(defaultInputTexts[$_get](i))));
          const appendComboBox = (comboInfo, textInFields) => {
            let t0, t0$;
            if (comboInfo != null && comboInfo[$_get](i) != null && dart.test(comboInfo[$_get](i)[$isNotEmpty])) {
              let cell2 = html.TableCellElement.new();
              let comboBut = new dia_button.ActButton.new().but;
              comboBut[$appendText](dia_utils.DiaUtils.UNICODE_COMBO_BOX);
              t0 = comboBut.style;
              (() => {
                t0[$padding] = "none";
                t0[$margin] = "none";
                t0[$verticalAlign] = "middle";
                t0[$textAlign] = "left";
                t0[$display] = "table-cell";
                t0[$fontSize] = dart.str(dart.notNull(textfontSize) - 6) + "px";
                return t0;
              })();
              let disableTextInputCombo = true;
              let firstItem = comboInfo[$_get](i)[$_get](0);
              if (firstItem[$startsWith](dia_input.InputDialog.ENABLE_TEXTINPUT_COMBO)) {
                disableTextInputCombo = false;
              }
              let disableComboSelection = false;
              if (firstItem[$contains](dia_input.InputDialog.DISABLE_COMBO_SELECTION)) {
                disableComboSelection = true;
              }
              comboBut[$addEventListener]("click", dart.fn(e => {
                let t0;
                e.preventDefault();
                e.stopPropagation();
                if (checkBoxes[$_get](i) != null && checkBoxes[$_get](i).name == this.RADIOGROUP1) {
                  checkBoxes[$_get](i).checked = true;
                }
                let combo_popup = T.JSArrayOfStringL().of([]);
                for (let k = 0; k < dart.notNull(comboInfo[$_get](i)[$length]); k = k + 1) {
                  let out = comboInfo[$_get](i)[$_get](k);
                  if (out[$startsWith](dia_input.InputDialog.ENABLE_TEXTINPUT_COMBO)) {
                    out = out[$substring](dia_input.InputDialog.ENABLE_TEXTINPUT_COMBO.length);
                  }
                  if (out[$startsWith](dia_input.InputDialog.DISABLE_COMBO_SELECTION)) {
                    out = out[$substring](dia_input.InputDialog.DISABLE_COMBO_SELECTION.length);
                  }
                  combo_popup[$add](dart.str(out) + dart.str(dia_utils.DiaUtils.SEP_STAN) + dart.str(k));
                }
                if (this.popup == null || !dart.test(this.popup.isOpen())) {
                  let tpoint = dia_utils.DiaUtils.getTouchPoint(T.UIEventL().as(e));
                  let x = dart.asNullableInt(dart.notNull(tpoint.x) + 12);
                  let y = dart.asNullableInt(dart.notNull(tpoint.y) + 12);
                  let nitems = comboInfo[$_get](i)[$length];
                  let preventDefault = true;
                  let N10 = 10;
                  let N15 = 15;
                  let WIDTH15 = 250;
                  let HEIGHT15 = (dart.notNull(this.diaContainer.clientHeight) * 0.75)[$round]();
                  if (dart.notNull(nitems) > N10 && dart.notNull(nitems) <= N15) {
                    y = 0;
                  }
                  if (dart.notNull(nitems) > N15) {
                    y = 10;
                    preventDefault = false;
                  }
                  this.popup = new popup.PopupMenu.new(this.diaTable, "", combo_popup, null, null, dart.fn(results => {
                    let actionCode = results.buttonCode;
                    if (actionCode != null && actionCode[$isNotEmpty]) {
                      let pattern = comboInfo[$_get](i)[$_get](core.int.parse(actionCode));
                      if (pattern[$startsWith](dia_input.InputDialog.ENABLE_TEXTINPUT_COMBO)) {
                        pattern = pattern[$substring](dia_input.InputDialog.ENABLE_TEXTINPUT_COMBO.length);
                      }
                      if (!disableComboSelection) {
                        textInFields[$_get](i).value = pattern;
                      }
                      if (checkBoxes[$_get](i) != null) {
                        checkBoxes[$_get](i).checked = true;
                      }
                    }
                  }, T.UserInputLToNull()), x, y, preventDefault);
                  if (dart.notNull(nitems) > N15) {
                    t0 = this.popup.dia.style;
                    (() => {
                      t0[$overflowY] = "scroll";
                      t0[$width] = dart.str(WIDTH15) + "px";
                      t0[$height] = dart.str(HEIGHT15) + "px";
                      return t0;
                    })();
                  }
                } else {
                  this.popup.close(null);
                }
              }, T.EventLToNull()));
              if (disableTextInputCombo && textInFields[$_get](i) != null) {
                textInFields[$_get](i).disabled = true;
              }
              cell2[$append](comboBut);
              row[$append](cell2);
            } else if (dim === 2 && hasDim1Combo && defaultInputTexts2D != null && defaultInputTexts2D[$_get](i) != null) {
              let cell2 = html.TableCellElement.new();
              let comboBut = new dia_button.ActButton.new().but;
              comboBut[$appendText](dia_utils.DiaUtils.UNICODE_COMBO_BOX);
              t0$ = comboBut.style;
              (() => {
                t0$[$background] = "white";
                t0$[$padding] = "none";
                t0$[$margin] = "none";
                t0$[$verticalAlign] = "middle";
                t0$[$textAlign] = "left";
                t0$[$display] = "table-cell";
                t0$[$fontSize] = dart.str(dart.notNull(textfontSize) - 6) + "px";
                t0$[$cursor] = "auto";
                t0$[$opacity] = "0.0";
                return t0$;
              })();
              comboBut[$addEventListener]("click", dart.fn(e => {
                e.preventDefault();
                e.stopPropagation();
              }, T.EventLToNull()));
              cell2[$append](comboBut);
              row[$append](cell2);
            }
          };
          dart.fn(appendComboBox, T.ListLOfListLOfStringLAndListLOfInputElementLTovoid());
          appendComboBox(comboInfo1D, tinputFields);
          if (dim === 2) {
            tinputFields2D[$_set](i, T.InputElementL().as(appendTextInputField(defaultInputTexts2D[$_get](i))));
            appendComboBox(comboInfo2D, tinputFields2D);
          }
          this.diaTable[$append](row);
        }
        this.diaTable.style[$paddingBottom] = "10px";
      }
      if (buttonLabels == null) {
        buttonLabels = T.JSArrayOfStringL().of([dia_attr.DiaAttr.DIA_BUT_OK]);
      }
      this.actButs = T.ListOfActButtonL().new(buttonLabels[$length]);
      let buttonFontsize = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_BUTTON_FONTSIZE));
      for (let i = 0; i < dart.notNull(buttonLabels[$length]); i = i + 1) {
        let actbut = new dia_button.ActButton.new();
        actbut.but[$appendText](buttonLabels[$_get](i));
        t0$1 = actbut.but.style;
        (() => {
          t0$1[$fontSize] = dart.str(buttonFontsize) + "px";
          return t0$1;
        })();
        actbut.but[$addEventListener]("click", dart.fn(e => {
          executeButton(i, e);
        }, T.EventLToNull()));
        this.actButs[$_set](i, actbut);
      }
      html.document[$onKeyDown].listen(dart.fn(e => {
        if (e.keyCode === 27) {
          executeButton(-1, e);
        }
      }, T.KeyboardEventLToNull()));
      dia_input.InputDialog.inputDialogStatus = 1;
      let form = html.FormElement.new();
      form[$append](this.diaTable);
      for (let i = 0; i < dart.notNull(this.actButs[$length]); i = i + 1) {
        if (buttonLabels[$_get](i) != null) {
          form[$append](this.actButs[$_get](i).but);
        }
      }
      this.dia[$append](form);
      if (this.diaContainer == null) {
        return;
      }
      let marginTop = (dart.notNull(this.diaContainer.clientHeight) / 2)[$truncate]() - (dart.notNull(this.dia.clientHeight) / 2)[$truncate]();
      if (marginTop < 0) {
        marginTop = 0;
      }
      marginTop = marginTop - (marginTop * 0.2)[$round]();
      if (dart.test(dia_utils.DiaUtils.isTablet()) && inputTextLabelInfo != null) {
        marginTop = 5;
      }
      let width = this.diaTable.clientWidth;
      if (dart.test(this.actButs[$isNotEmpty]) && this.actButs[$_get](0) != null && dart.notNull(this.diaTable.clientWidth) < dart.notNull(this.actButs[$_get](0).but.clientWidth)) {
        width = buttonLabels[$_get](0).length * dia_utils.DiaUtils.removePx(this.dia.style[$fontSize])[$round]();
      }
      t0$2 = this.dia.style;
      (() => {
        t0$2[$width] = dart.str(width) + "px";
        t0$2[$marginTop] = dart.str(marginTop) + "px";
        return t0$2;
      })();
    }
    static show(buttontype, htmlTitleText, inputTextLabelInfo, comboInfo, defaultInputTexts, sizes, isChecked, alternateRowColor, buttonLabels) {
      return async.async(T.UserInputL(), function* show() {
        let cpl = T.CompleterOfUserInputL().new();
        function closeCallback(results) {
          cpl.complete(results);
        }
        dart.fn(closeCallback, T.UserInputLTovoid());
        new dia_input.InputDialog.new(buttontype, htmlTitleText, inputTextLabelInfo, comboInfo, defaultInputTexts, sizes, isChecked, closeCallback, alternateRowColor, buttonLabels);
        return cpl.future;
      });
    }
    static show2D(buttontype, htmlTitleText, inputTextLabelInfo, comboInfoND, defaultInputTextsND, sizes, isChecked, alternateRowColor, buttonLabels) {
      return async.async(T.UserInputL(), function* show2D() {
        let cpl = T.CompleterOfUserInputL().new();
        function closeCallback(results) {
          cpl.complete(results);
        }
        dart.fn(closeCallback, T.UserInputLTovoid());
        new dia_input.InputDialog.twoD(buttontype, htmlTitleText, inputTextLabelInfo, comboInfoND, defaultInputTextsND, sizes, isChecked, closeCallback, alternateRowColor, buttonLabels);
        return cpl.future;
      });
    }
  };
  (dia_input.InputDialog.new = function(buttontype, htmlTitleText, textLabels, comboInfo, defaultInputTexts, widths, isChecked, closeCallback, alternateRowColor, buttonLabels) {
    this[popup$] = null;
    this[diaTable] = html.TableElement.new();
    this[RADIOGROUP1] = "radiogroup1";
    this[redcross_left] = false;
    this[actButs] = T.JSArrayOfActButtonL().of([]);
    dia_input.InputDialog.__proto__.new.call(this, closeCallback);
    this.init(buttontype, htmlTitleText, textLabels, new (T.IdentityMapOfintL$ListLOfListLOfStringL()).from([dia_input.InputDialog.COL1, comboInfo]), new (T.IdentityMapOfintL$ListLOfStringL()).from([dia_input.InputDialog.COL1, defaultInputTexts]), widths, isChecked, alternateRowColor, buttonLabels);
  }).prototype = dia_input.InputDialog.prototype;
  (dia_input.InputDialog.twoD = function(buttontype, htmlTitleText, defaultInputTexts, comboInfoND, defaultInputTextsND, sizes, isChecked, closeCallback, alternateRowColor, buttonLabels) {
    this[popup$] = null;
    this[diaTable] = html.TableElement.new();
    this[RADIOGROUP1] = "radiogroup1";
    this[redcross_left] = false;
    this[actButs] = T.JSArrayOfActButtonL().of([]);
    dia_input.InputDialog.__proto__.new.call(this, closeCallback);
    this.init(buttontype, htmlTitleText, defaultInputTexts, comboInfoND, defaultInputTextsND, sizes, isChecked, alternateRowColor, buttonLabels);
  }).prototype = dia_input.InputDialog.prototype;
  (dia_input.InputDialog.noModal = function(buttontype, htmlTitleText, inputTextLabelInfo, comboInfo, defaultInputTexts, sizes, isChecked, closeCallback, alternateRowColor, buttonLabels) {
    this[popup$] = null;
    this[diaTable] = html.TableElement.new();
    this[RADIOGROUP1] = "radiogroup1";
    this[redcross_left] = false;
    this[actButs] = T.JSArrayOfActButtonL().of([]);
    dia_input.InputDialog.__proto__.noModal.call(this, closeCallback);
    this.init(buttontype, htmlTitleText, inputTextLabelInfo, new (T.IdentityMapOfintL$ListLOfListLOfStringL()).from([dia_input.InputDialog.COL1, comboInfo]), new (T.IdentityMapOfintL$ListLOfStringL()).from([dia_input.InputDialog.COL1, defaultInputTexts]), sizes, isChecked, alternateRowColor, buttonLabels);
  }).prototype = dia_input.InputDialog.prototype;
  dart.addTypeTests(dia_input.InputDialog);
  dart.addTypeCaches(dia_input.InputDialog);
  dart.setMethodSignature(dia_input.InputDialog, () => ({
    __proto__: dart.getMethods(dia_input.InputDialog.__proto__),
    init: dart.fnType(dart.dynamic, [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String))), dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.String))))))), dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(core.List$(dart.legacy(core.String))))), dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.List$(dart.legacy(core.String))), dart.legacy(core.bool), dart.legacy(core.List$(dart.legacy(core.String)))])
  }));
  dart.setLibraryUri(dia_input.InputDialog, I[1]);
  dart.setFieldSignature(dia_input.InputDialog, () => ({
    __proto__: dart.getFields(dia_input.InputDialog.__proto__),
    popup: dart.fieldType(dart.legacy(popup.PopupMenu)),
    diaTable: dart.fieldType(dart.legacy(html.TableElement)),
    RADIOGROUP1: dart.finalFieldType(dart.legacy(core.String)),
    redcross_left: dart.fieldType(dart.legacy(core.bool)),
    actButs: dart.fieldType(dart.legacy(core.List$(dart.legacy(dia_button.ActButton))))
  }));
  dart.defineLazy(dia_input.InputDialog, {
    /*dia_input.InputDialog.COL1*/get COL1() {
      return 0;
    },
    /*dia_input.InputDialog.COL2*/get COL2() {
      return 1;
    },
    /*dia_input.InputDialog.ALIGN_LEFT*/get ALIGN_LEFT() {
      return "ALIGN_LEFT";
    },
    /*dia_input.InputDialog.READ_ONLY*/get READ_ONLY() {
      return "||++++||";
    },
    /*dia_input.InputDialog.ENABLE_TEXTINPUT_COMBO*/get ENABLE_TEXTINPUT_COMBO() {
      return "+||+";
    },
    /*dia_input.InputDialog.DISABLE_COMBO_SELECTION*/get DISABLE_COMBO_SELECTION() {
      return "?||?";
    },
    /*dia_input.InputDialog.inputDialogStatus*/get inputDialogStatus() {
      return 0;
    },
    set inputDialogStatus(_) {}
  }, true);
  dia_input.ConfirmDialog = class ConfirmDialog extends dia_input.InputDialog {
    static show(htmlTitleText, buttonLabels) {
      return async.async(T.UserInputL(), function* show() {
        return dia_input.InputDialog.show(null, htmlTitleText, null, null, null, null, null, false, buttonLabels);
      });
    }
  };
  (dia_input.ConfirmDialog.new = function(htmlTitleText, buttonLabels, closeCallback) {
    dia_input.ConfirmDialog.__proto__.new.call(this, null, htmlTitleText, null, null, null, null, null, closeCallback, false, buttonLabels);
    ;
  }).prototype = dia_input.ConfirmDialog.prototype;
  (dia_input.ConfirmDialog.noModal = function(htmlTitleText, buttonLabels, closeCallback) {
    dia_input.ConfirmDialog.__proto__.noModal.call(this, null, htmlTitleText, null, null, null, null, null, closeCallback, false, buttonLabels);
    ;
  }).prototype = dia_input.ConfirmDialog.prototype;
  dart.addTypeTests(dia_input.ConfirmDialog);
  dart.addTypeCaches(dia_input.ConfirmDialog);
  dart.setLibraryUri(dia_input.ConfirmDialog, I[1]);
  dia_input.InfoDialog = class InfoDialog extends dia_input.InputDialog {
    static show(htmlInfoText) {
      return async.async(T.UserInputL(), function* show() {
        let cpl = T.CompleterOfUserInputL().new();
        function closeCallback(results) {
          cpl.complete(results);
        }
        dart.fn(closeCallback, T.UserInputLTovoid());
        new dia_input.InfoDialog.new(htmlInfoText, closeCallback);
        return cpl.future;
      });
    }
  };
  (dia_input.InfoDialog.new = function(htmlInfoText, closeCallback) {
    dia_input.InfoDialog.__proto__.new.call(this, null, htmlInfoText, null, null, null, null, null, closeCallback, false, T.JSArrayOfStringL().of([]));
    ;
  }).prototype = dia_input.InfoDialog.prototype;
  (dia_input.InfoDialog.alignLeft = function(htmlInfoText, closeCallback) {
    dia_input.InfoDialog.__proto__.new.call(this, dia_input.InputDialog.ALIGN_LEFT, htmlInfoText, null, null, null, null, null, closeCallback, false, T.JSArrayOfStringL().of([]));
    ;
  }).prototype = dia_input.InfoDialog.prototype;
  (dia_input.InfoDialog.noModal = function(htmlInfoText, closeCallback) {
    dia_input.InfoDialog.__proto__.noModal.call(this, null, htmlInfoText, null, null, null, null, null, closeCallback, false, T.JSArrayOfStringL().of([]));
    ;
  }).prototype = dia_input.InfoDialog.prototype;
  (dia_input.InfoDialog.noModalAlignLeft = function(htmlInfoText, closeCallback) {
    dia_input.InfoDialog.__proto__.noModal.call(this, dia_input.InputDialog.ALIGN_LEFT, htmlInfoText, null, null, null, null, null, closeCallback, false, T.JSArrayOfStringL().of([]));
    ;
  }).prototype = dia_input.InfoDialog.prototype;
  dart.addTypeTests(dia_input.InfoDialog);
  dart.addTypeCaches(dia_input.InfoDialog);
  dart.setLibraryUri(dia_input.InfoDialog, I[1]);
  dia_input.Info = class Info extends core.Object {
    static show(htmlInfoText) {
      return async.async(T.UserInputL(), function* show() {
        return dia_input.InfoDialog.show(htmlInfoText);
      });
    }
    static showGo(htmlInfoText) {
      return async.async(dart.void, function* showGo() {
        pedantic.unawaited(dia_input.Info.show(htmlInfoText));
      });
    }
    static get(buttontype, htmlTitleText, textLabels, comboInfo, defaultInputTexts, widths, isChecked, alternateRowColor, buttonLabels) {
      return async.async(T.UserInputL(), function* get() {
        return dia_input.InputDialog.show(buttontype, htmlTitleText, textLabels, comboInfo, defaultInputTexts, widths, isChecked, alternateRowColor, buttonLabels);
      });
    }
    static get2D(buttontype, htmlTitleText, textLabels, comboInfoND, defaultInputTextsND, widths, isChecked, alternateRowColor, buttonLabels) {
      return async.async(T.UserInputL(), function* get2D() {
        return dia_input.InputDialog.show2D(buttontype, htmlTitleText, textLabels, comboInfoND, defaultInputTextsND, widths, isChecked, alternateRowColor, buttonLabels);
      });
    }
    static confirm(htmlInfoText, buttonLabels) {
      return async.async(T.UserInputL(), function* confirm() {
        return dia_input.ConfirmDialog.show(htmlInfoText, buttonLabels);
      });
    }
  };
  (dia_input.Info.new = function() {
    ;
  }).prototype = dia_input.Info.prototype;
  dart.addTypeTests(dia_input.Info);
  dart.addTypeCaches(dia_input.Info);
  dart.setLibraryUri(dia_input.Info, I[1]);
  var table = dart.privateName(table_base, "BasicTable.table");
  var tableData$ = dart.privateName(table_base, "BasicTable.tableData");
  var attr = dart.privateName(table_base, "BasicTable.attr");
  table_base.BasicTable = class BasicTable extends core.Object {
    get table() {
      return this[table];
    }
    set table(value) {
      this[table] = value;
    }
    get tableData() {
      return this[tableData$];
    }
    set tableData(value) {
      this[tableData$] = value;
    }
    get attr() {
      return this[attr];
    }
    set attr(value) {
      this[attr] = value;
    }
    get getTable() {
      return this.table;
    }
  };
  (table_base.BasicTable.new = function(tableData, buttonClickListener) {
    let t0, t0$, t0$0;
    this[table] = null;
    this[attr] = null;
    this[tableData$] = tableData;
    this.table = html.TableElement.new();
    table_attr.TableAttr.initAttrFromDefaults();
    this.attr = table_attr.TableAttr.attr;
    table_attr.TableAttr.setTableStyle(this.table);
    let row = null;
    let cell = null;
    let nrows = this.tableData[$length];
    let ncols = this.tableData[$_get](0)[$length];
    for (let i = 1; i < dart.notNull(nrows); i = i + 1) {
      row = html.TableRowElement.new();
      this.table[$append](row);
      t0 = row.style;
      (() => {
        t0[$padding] = "5px";
        return t0;
      })();
      if (i === 1) {
        table_attr.TableAttr.setRowStyleHeader(row);
      }
      if ((i & 1) === 0 && i !== 0) {
        t0$ = row.style;
        (() => {
          t0$[$backgroundColor] = this.attr[$_get](table_attr.TableAttr.TABLE_HIGHLIGHT_COLOR);
          return t0$;
        })();
      }
      for (let k = 1; k < dart.notNull(ncols); k = k + 1) {
        cell = html.TableCellElement.new();
        row[$append](cell);
        if (i === 1) {
          table_attr.TableAttr.setCellStyle(cell, "center");
        } else {
          table_attr.TableAttr.setCellStyle(cell, "left");
        }
        if (k > 1) {
          t0$0 = cell.style;
          (() => {
            t0$0[$borderLeft] = dart.notNull(this.attr[$_get](table_attr.TableAttr.TABLE_INNER_CELL_LEFT_BORDER_COLOR)) + " 1px solid";
            return t0$0;
          })();
        }
        if (i > 1 && k === 1) {
          cell.id = dart.str(this.tableData[$_get](i)[$_get](0));
        }
        if (this.tableData[$_get](i)[$_get](k) == table_base.BasicTable.EMPTY_INPUT_CELL) {
          let input = html.TextInputElement.new();
          input[$value] = "";
          cell[$append](input);
        } else if (this.tableData[$_get](i)[$_get](k) == table_base.BasicTable.EMPTY_TEXT_AREA) {
          let ta = html.TextAreaElement.new();
          ta.value = "";
          ta.rows = 4;
          cell[$append](ta);
        } else if (this.tableData[$_get](i)[$_get](k)[$startsWith](table_base.BasicTable.BUTTON)) {
          let butinfo = this.tableData[$_get](i)[$_get](k)[$split]("||");
          let but = html.ButtonElement.new();
          dia_utils.DiaUtils.appendHtml2(but, butinfo[$_get](1));
          but.id = butinfo[$_get](2);
          but[$onClick].listen(dart.fn(event => {
            buttonClickListener(but);
          }, T.EventLToNull()));
          cell[$append](but);
        } else {
          dia_utils.DiaUtils.appendHtml2(cell, this.tableData[$_get](i)[$_get](k));
        }
      }
    }
  }).prototype = table_base.BasicTable.prototype;
  dart.addTypeTests(table_base.BasicTable);
  dart.addTypeCaches(table_base.BasicTable);
  dart.setGetterSignature(table_base.BasicTable, () => ({
    __proto__: dart.getGetters(table_base.BasicTable.__proto__),
    getTable: dart.legacy(html.TableElement)
  }));
  dart.setLibraryUri(table_base.BasicTable, I[2]);
  dart.setFieldSignature(table_base.BasicTable, () => ({
    __proto__: dart.getFields(table_base.BasicTable.__proto__),
    table: dart.fieldType(dart.legacy(html.TableElement)),
    tableData: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.String)))))),
    attr: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))
  }));
  dart.defineLazy(table_base.BasicTable, {
    /*table_base.BasicTable.EMPTY_INPUT_CELL*/get EMPTY_INPUT_CELL() {
      return "EMPTY_INPUT_CELL";
    },
    /*table_base.BasicTable.EMPTY_TEXT_AREA*/get EMPTY_TEXT_AREA() {
      return "EMPTY_TEXT_AREA";
    },
    /*table_base.BasicTable.BUTTON*/get BUTTON() {
      return "BUTTON";
    }
  }, true);
  table_attr.TableAttr = class TableAttr extends core.Object {
    static initAttrFromDefaults() {
      if (table_attr.TableAttr.attr == null) table_attr.TableAttr.attr = T.LinkedHashMapOfStringL$StringL().from(table_attr.TableAttr.ATTR_DEFAULTS);
    }
    static setAttr(myAttr) {
      if (table_attr.TableAttr.attr == null) table_attr.TableAttr.initAttrFromDefaults();
      if (myAttr == null) return;
      for (let attrName of myAttr[$keys]) {
        table_attr.TableAttr.attr[$_set](attrName, myAttr[$_get](attrName));
      }
    }
    static setTableStyle(table) {
      let t0;
      if (table_attr.TableAttr.attr == null) {
        table_attr.TableAttr.initAttrFromDefaults();
      }
      t0 = table.style;
      (() => {
        t0[$margin] = "1em 0";
        t0[$overflow] = "hidden";
        t0[$backgroundColor] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_BACKGROUND_COLOR);
        t0[$background] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_BACKGROUND_COLOR);
        t0[$color] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_TEXT_COLOR);
        t0[$borderRadius] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_BORDER_RADIUS);
        t0[$border] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_OUTER_BORDER);
        t0[$borderSpacing] = "0";
        return t0;
      })();
    }
    static setRowStyleHeader(row) {
      let t0;
      if (table_attr.TableAttr.attr == null) {
        table_attr.TableAttr.initAttrFromDefaults();
      }
      t0 = row.style;
      (() => {
        t0[$backgroundColor] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_HEADER_BACKGROUND_COLOR);
        t0[$color] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_HEADER_TEXT_COLOR);
        t0[$padding] = "7px";
        t0[$textAlign] = table_attr.TableAttr.attr[$_get](table_attr.TableAttr.TABLE_HEADER_TEXT_ALIGN);
        t0[$margin] = ".5em 1em";
        return t0;
      })();
    }
    static setCellStyle(cell, textAlign) {
      let t0;
      t0 = cell.style;
      (() => {
        t0[$textAlign] = textAlign;
        t0[$margin] = ".5em 1em";
        t0[$padding] = "5px";
        t0[$wordWrap] = "break-word";
        t0[$maxWidth] = "15em";
        return t0;
      })();
    }
  };
  (table_attr.TableAttr.new = function() {
    ;
  }).prototype = table_attr.TableAttr.prototype;
  dart.addTypeTests(table_attr.TableAttr);
  dart.addTypeCaches(table_attr.TableAttr);
  dart.setLibraryUri(table_attr.TableAttr, I[3]);
  dart.defineLazy(table_attr.TableAttr, {
    /*table_attr.TableAttr.attr*/get attr() {
      return T.LinkedHashMapOfStringL$StringL().from(table_attr.TableAttr.ATTR_DEFAULTS);
    },
    set attr(_) {},
    /*table_attr.TableAttr.TABLE_BACKGROUND_COLOR*/get TABLE_BACKGROUND_COLOR() {
      return "TABLE_BACKGROUND_COLOR";
    },
    /*table_attr.TableAttr.TABLE_TEXT_COLOR*/get TABLE_TEXT_COLOR() {
      return "TABLE_TEXT_COLOR";
    },
    /*table_attr.TableAttr.TABLE_HEADER_FONTSIZE*/get TABLE_HEADER_FONTSIZE() {
      return "TABLE_HEADER_FONTSIZE";
    },
    /*table_attr.TableAttr.TABLE_BUTTON_FONTSIZE*/get TABLE_BUTTON_FONTSIZE() {
      return "TABLE_BUTTON_FONTSIZE";
    },
    /*table_attr.TableAttr.TABLE_OUTER_BORDER*/get TABLE_OUTER_BORDER() {
      return "TABLE_OUTER_BORDER";
    },
    /*table_attr.TableAttr.TABLE_BORDER_RADIUS*/get TABLE_BORDER_RADIUS() {
      return "TABLE_BORDER_RADIUS";
    },
    /*table_attr.TableAttr.TABLE_HIGHLIGHT_COLOR*/get TABLE_HIGHLIGHT_COLOR() {
      return "TABLE_HIGHLIGHT_COLOR";
    },
    /*table_attr.TableAttr.TABLE_HEADER_BACKGROUND_COLOR*/get TABLE_HEADER_BACKGROUND_COLOR() {
      return "TABLE_HEADER_BACKGROUND_COLOR";
    },
    /*table_attr.TableAttr.TABLE_HEADER_TEXT_COLOR*/get TABLE_HEADER_TEXT_COLOR() {
      return "TABLE_HEADER_TEXT_COLOR";
    },
    /*table_attr.TableAttr.TABLE_HEADER_TEXT_ALIGN*/get TABLE_HEADER_TEXT_ALIGN() {
      return "TABLE_HEADER_TEXT_ALIGN";
    },
    /*table_attr.TableAttr.TABLE_INNER_CELL_LEFT_BORDER_COLOR*/get TABLE_INNER_CELL_LEFT_BORDER_COLOR() {
      return "TABLE_INNER_CELL_LEFT_BORDER_COLOR";
    },
    /*table_attr.TableAttr.TABLE_BSPAN_COLOR*/get TABLE_BSPAN_COLOR() {
      return "TABLE_BSPAN_COLOR";
    },
    /*table_attr.TableAttr.TABLE_BSPAN_UNDERSCORE*/get TABLE_BSPAN_UNDERSCORE() {
      return "TABLE_BSPAN_UNDERSCORE";
    },
    /*table_attr.TableAttr.ATTR_DEFAULTS*/get ATTR_DEFAULTS() {
      return new (T.IdentityMapOfStringL$StringL()).from([table_attr.TableAttr.TABLE_BACKGROUND_COLOR, "#FFF", table_attr.TableAttr.TABLE_TEXT_COLOR, "#024457", table_attr.TableAttr.TABLE_HEADER_FONTSIZE, "16", table_attr.TableAttr.TABLE_BUTTON_FONTSIZE, "14", table_attr.TableAttr.TABLE_OUTER_BORDER, "rgb(52,120,188) 1px solid", table_attr.TableAttr.TABLE_BORDER_RADIUS, "0px", table_attr.TableAttr.TABLE_HIGHLIGHT_COLOR, "rgb(230,236,238)", table_attr.TableAttr.TABLE_HEADER_BACKGROUND_COLOR, "rgb(52,120,188)", table_attr.TableAttr.TABLE_HEADER_TEXT_COLOR, "#FFF", table_attr.TableAttr.TABLE_HEADER_TEXT_ALIGN, "left", table_attr.TableAttr.TABLE_INNER_CELL_LEFT_BORDER_COLOR, "white", table_attr.TableAttr.TABLE_BSPAN_COLOR, "<span style=\"color:rgb(52,120,188)\">", table_attr.TableAttr.TABLE_BSPAN_UNDERSCORE, "<span style=\"text-decoration: underline\">"]);
    }
  }, true);
  var diaTable$ = dart.privateName(popup, "PopupMenu.diaTable");
  var lastTouchedActionCode = dart.privateName(popup, "PopupMenu.lastTouchedActionCode");
  var lastTouchPoints = dart.privateName(popup, "PopupMenu.lastTouchPoints");
  popup.PopupMenu = class PopupMenu extends dia_base.BaseDialog {
    get diaTable() {
      return this[diaTable$];
    }
    set diaTable(value) {
      this[diaTable$] = value;
    }
    get lastTouchedActionCode() {
      return this[lastTouchedActionCode];
    }
    set lastTouchedActionCode(value) {
      this[lastTouchedActionCode] = value;
    }
    get lastTouchPoints() {
      return this[lastTouchPoints];
    }
    set lastTouchPoints(value) {
      this[lastTouchPoints] = value;
    }
    getId() {
      if (this.dia == null) return null;
      return this.dia.id;
    }
    setPopupStyle(dia, width) {
      let t0;
      t0 = dia.style;
      (() => {
        t0[$backgroundColor] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.POPUP_BACKGROUND);
        t0[$textAlign] = "center";
        t0[$padding] = "0.3em";
        t0[$margin] = "1em auto";
        t0[$border] = "0";
        t0[$borderTop] = "1px solid " + dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR));
        t0[$borderRadius] = "8px";
        t0[$boxShadow] = "0 6px 10px rgba(0, 0, 0, 0.4)";
        t0[$fontSize] = dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2)) + "px";
        t0[$lineHeight] = "110%";
        t0[$opacity] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_WIN_OPACITY);
        t0[$zIndex] = dart.str(dia_attr.DiaAttr.ZINDEX_POPUP);
        return t0;
      })();
    }
    static show(parent, id, htmlItemTexts, buttontypes, isChecked, x, y, preventDefault) {
      return async.async(T.UserInputL(), function* show() {
        let cpl = T.CompleterOfUserInputL().new();
        function popupCallback(results) {
          cpl.complete(results);
        }
        dart.fn(popupCallback, T.UserInputLTovoid());
        new popup.PopupMenu.new(parent, id, htmlItemTexts, buttontypes, isChecked, popupCallback, x, y, preventDefault);
        return cpl.future;
      });
    }
  };
  (popup.PopupMenu.new = function(parent, id, htmlItemTexts, buttontypes, isChecked, popupCallback, x, y, preventDefault) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3;
    this[diaTable$] = html.TableElement.new();
    this[lastTouchedActionCode] = null;
    this[lastTouchPoints] = null;
    popup.PopupMenu.__proto__.noModal.call(this, popupCallback);
    let NCOLS = 2;
    let nitems = htmlItemTexts[$length];
    this.dia.id = id;
    this.setPopupStyle(this.dia, null);
    let attr = dia_attr.DiaAttr.attr;
    parent[$append](this.dia);
    t0 = this.diaTable.style;
    (() => {
      t0[$borderCollapse] = "collapse";
      t0[$marginTop] = "6px";
      t0[$marginBottom] = "0px";
      return t0;
    })();
    t0$ = this.dia;
    (() => {
      t0$[$append](this.diaTable);
      t0$[$onTouchMove].listen(dart.fn(e => {
        if (dart.test(preventDefault)) e.preventDefault();
      }, T.TouchEventLToNull()));
      return t0$;
    })();
    let cell = null;
    let rows = T.JSArrayOfTableRowElementL().of([]);
    const addEmptyTableRow = () => {
      rows[$add](html.TableRowElement.new());
      cell = html.TableCellElement.new();
      dia_utils.DiaUtils.appendHtml2(cell, "&nbsp;");
      cell.colSpan = NCOLS;
      rows[$last][$append](cell);
      this.diaTable[$append](rows[$last]);
    };
    dart.fn(addEmptyTableRow, T.VoidTovoid());
    let displayedText = htmlItemTexts[$_get](0)[$split](dia_utils.DiaUtils.SEP_STAN)[$_get](0);
    let actionCode = htmlItemTexts[$_get](0)[$split](dia_utils.DiaUtils.SEP_STAN)[$_get](1);
    let itemstart = 0;
    if (actionCode === "TITLE") {
      rows[$add](html.TableRowElement.new());
      cell = html.TableCellElement.new();
      dia_utils.DiaUtils.appendHtml2(cell, displayedText);
      cell.colSpan = NCOLS;
      t0$0 = cell.style;
      (() => {
        t0$0[$textAlign] = "center";
        t0$0[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_HEADER_COLOR);
        t0$0[$fontSize] = dart.str(attr[$_get](dia_attr.DiaAttr.DIALOG_HEADER_FONTSIZE)) + "px";
        return t0$0;
      })();
      rows[$last][$append](cell);
      this.diaTable[$append](rows[$last]);
      addEmptyTableRow();
      itemstart = 1;
    }
    for (let i = itemstart; i < dart.notNull(nitems); i = i + 1) {
      rows[$add](html.TableRowElement.new());
      let row = rows[$last];
      row.style[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR);
      row[$onMouseEnter].listen(dart.fn(event => {
        let t0;
        t0 = row.style;
        (() => {
          t0[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.POPUP_SELECTION_COLOR);
          t0[$color] = "white";
          return t0;
        })();
      }, T.MouseEventLToNull()));
      row[$onMouseLeave].listen(dart.fn(event => {
        let t0;
        t0 = row.style;
        (() => {
          t0[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.POPUP_BACKGROUND);
          t0[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR);
          return t0;
        })();
      }, T.MouseEventLToNull()));
      let displayedText = htmlItemTexts[$_get](i)[$split](dia_utils.DiaUtils.SEP_STAN)[$_get](0);
      let actionCode = htmlItemTexts[$_get](i)[$split](dia_utils.DiaUtils.SEP_STAN)[$_get](1);
      let cell = html.TableCellElement.new();
      cell.id = actionCode;
      if (buttontypes != null && isChecked != null) {
        if (buttontypes[$_get](i) == dia_attr.DiaAttr.CHECKBOX && isChecked[$_get](i) != null && (isChecked[$_get](i) == dia_utils.DiaUtils.TRUE || isChecked[$_get](i) == dia_utils.DiaUtils.FALSE)) {
          let cbox = html.InputElement.new({type: dia_attr.DiaAttr.CHECKBOX});
          cbox.checked = dia_utils.DiaUtils.getBoolFromString(isChecked[$_get](i));
          cbox.style[$fontSize] = dart.str(attr[$_get](dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2)) + "px";
          cell[$append](cbox);
        }
      } else {
        cell[$appendText]("");
        t0$1 = cell.style;
        (() => {
          t0$1[$textAlign] = "left";
          t0$1[$cursor] = "pointer";
          t0$1[$padding] = "7px";
          t0$1[$margin] = ".5em 1em";
          return t0$1;
        })();
      }
      const execute = curaction => {
        if (this.dia != null && !displayedText[$contains](popup.PopupMenu.POPUP_SPAN_GREYOUT)) {
          this.close(new dia_base.UserInput.new(curaction, null, null));
          this.dia = null;
        }
      };
      dart.fn(execute, T.StringLTovoid());
      const handleTouchStart = e => {
        this.lastTouchPoints = dia_utils.DiaUtils.getTouchPoints(e);
      };
      dart.fn(handleTouchStart, T.TouchEventLTovoid());
      const handleTouchEnd = e => {
        let eventCell = T.ElementL().as(e[$target]);
        let curaction = eventCell.id;
        let tl = e.changedTouches;
        if (tl == null || dart.test(tl[$isEmpty])) return;
        let lastx = this.lastTouchPoints[$_get](0).x;
        let lasty = this.lastTouchPoints[$_get](0).y;
        if ((dart.notNull(lastx) - dart.notNull(tl[$first][$page].x))[$abs]() > 30 || (dart.notNull(lasty) - dart.notNull(tl[$first][$page].y))[$abs]() > 20) {
          return;
        }
        execute(curaction);
      };
      dart.fn(handleTouchEnd, T.TouchEventLTovoid());
      if (!dart.test(dia_utils.DiaUtils.hasMouse())) {
        cell[$onTouchStart].listen(dart.fn(e => {
          handleTouchStart(e);
        }, T.TouchEventLToNull()));
        cell[$onTouchEnd].listen(dart.fn(e => {
          handleTouchEnd(e);
        }, T.TouchEventLToNull()));
      } else {
        cell[$onClick].listen(dart.fn(e => {
          let eventCell = T.ElementL().as(e[$target]);
          let curaction = eventCell.id;
          execute(curaction);
        }, T.MouseEventLToNull()));
      }
      row[$append](cell);
      cell = html.TableCellElement.new();
      cell.id = actionCode;
      dia_utils.DiaUtils.appendHtml2(cell, displayedText);
      t0$2 = cell.style;
      (() => {
        t0$2[$textAlign] = "left";
        t0$2[$cursor] = "pointer";
        t0$2[$paddingBottom] = attr[$_get](dia_attr.DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING);
        t0$2[$paddingTop] = attr[$_get](dia_attr.DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING);
        t0$2[$fontSize] = dart.str(attr[$_get](dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2)) + "px";
        return t0$2;
      })();
      dia_utils.DiaUtils.appendHtml2(cell, "<br>");
      if (!dart.test(dia_utils.DiaUtils.hasMouse())) {
        cell[$onTouchStart].listen(dart.fn(e => {
          handleTouchStart(e);
        }, T.TouchEventLToNull()));
        cell[$onTouchEnd].listen(dart.fn(e => {
          handleTouchEnd(e);
        }, T.TouchEventLToNull()));
      } else {
        cell[$onClick].listen(dart.fn(e => {
          let eventCell = T.ElementL().as(e[$target]);
          let curaction = eventCell.id;
          execute(curaction);
        }, T.MouseEventLToNull()));
      }
      row[$append](cell);
      this.diaTable[$append](row);
    }
    t0$3 = this.dia.style;
    (() => {
      t0$3[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.POPUP_BACKGROUND);
      t0$3[$background] = attr[$_get](dia_attr.DiaAttr.POPUP_BACKGROUND);
      t0$3[$position] = "fixed";
      t0$3[$left] = dart.str(x) + "px";
      t0$3[$top] = dart.str(y) + "px";
      t0$3[$marginLeft] = "0px";
      t0$3[$marginTop] = "0px";
      t0$3[$paddingTop] = "0px";
      t0$3[$paddingLeft] = "0px";
      t0$3[$width] = dart.str(dart.notNull(this.diaTable.clientWidth) + 6) + "px";
      t0$3[$opacity] = "1";
      t0$3[$zIndex] = "10000000";
      return t0$3;
    })();
  }).prototype = popup.PopupMenu.prototype;
  dart.addTypeTests(popup.PopupMenu);
  dart.addTypeCaches(popup.PopupMenu);
  dart.setMethodSignature(popup.PopupMenu, () => ({
    __proto__: dart.getMethods(popup.PopupMenu.__proto__),
    getId: dart.fnType(dart.legacy(core.String), []),
    setPopupStyle: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(popup.PopupMenu, I[4]);
  dart.setFieldSignature(popup.PopupMenu, () => ({
    __proto__: dart.getFields(popup.PopupMenu.__proto__),
    diaTable: dart.fieldType(dart.legacy(html.TableElement)),
    lastTouchedActionCode: dart.fieldType(dart.legacy(core.String)),
    lastTouchPoints: dart.fieldType(dart.legacy(core.List$(dart.legacy(math.Point$(dart.legacy(core.int))))))
  }));
  dart.defineLazy(popup.PopupMenu, {
    /*popup.PopupMenu.POPUP_SPAN_GREYOUT*/get POPUP_SPAN_GREYOUT() {
      return "<span style='color:lightgrey'>";
    },
    /*popup.PopupMenu.POPUP_SPAN_END*/get POPUP_SPAN_END() {
      return "</span>";
    }
  }, true);
  dia_utils.DiaUtils = class DiaUtils extends core.Object {
    static getBoolFromString(s) {
      if (s == dia_utils.DiaUtils.TRUE) return true;
      return false;
    }
    static appendHtml2(el, htmlText) {
      el[$appendHtml](htmlText, {treeSanitizer: html.NodeTreeSanitizer.trusted});
    }
    static removePx(cssAttr) {
      if (cssAttr == null || cssAttr[$isEmpty]) return 28.0;
      return core.double.parse(cssAttr[$replaceFirst]("px", ""));
    }
    static isTablet() {
      let info = html.window.navigator.userAgent;
      let isTablet = false;
      if (info[$toLowerCase]()[$contains]("android") || info[$toLowerCase]()[$contains]("ipad") || info[$toLowerCase]()[$contains]("iphone")) {
        isTablet = true;
      } else if (info[$toLowerCase]()[$contains]("touch")) {
        isTablet = true;
      }
      return isTablet;
    }
    static isPhone() {
      let phone = false;
      if (html.window.navigator.userAgent[$toLowerCase]()[$contains]("iphone") && html.window.navigator.vendor[$contains]("Apple Computer")) phone = true;
      return phone;
    }
    static isSafariIOS() {
      let isIOS = false;
      if ((html.window.navigator.userAgent[$toLowerCase]()[$contains]("ipad") || html.window.navigator.userAgent[$toLowerCase]()[$contains]("iphone")) && html.window.navigator.vendor[$contains]("Apple Computer")) isIOS = true;
      return isIOS;
    }
    static hasMouse() {
      return !dart.test(dia_utils.DiaUtils.isTablet());
    }
    static getTouchPoint(e) {
      let x = null;
      let y = null;
      if (T.MouseEventL().is(e)) {
        x = e[$page].x[$toInt]();
        y = e[$page].y[$toInt]();
      } else if (T.TouchEventL().is(e) && dart.test(e.touches[$isNotEmpty])) {
        x = e.touches[$_get](0)[$page].x[$toInt]();
        y = e.touches[$_get](0)[$page].y[$toInt]();
      } else {
        x = 0;
        y = 0;
      }
      return new (T.PointOfintL()).new(x, y);
    }
    static getTouchPoints(e) {
      let x = null;
      let y = null;
      let tpoints = null;
      if (T.MouseEventL().is(e)) {
        x = dart.asNullableInt(e[$page].x);
        y = dart.asNullableInt(e[$page].y);
        tpoints = T.JSArrayOfPointLOfintL().of([new (T.PointOfintL()).new(x, y)]);
      } else if (!T.TouchEventL().is(e)) {
        tpoints = T.JSArrayOfPointLOfintL().of([new (T.PointOfintL()).new(0, 0)]);
      } else {
        let et = T.TouchEventL().as(e);
        if (et.touches == null || dart.test(et.touches[$isEmpty])) return null;
        tpoints = T.ListOfPointLOfintL().new(et.touches[$length]);
        for (let i = 0; i < dart.notNull(tpoints[$length]); i = i + 1) {
          x = dart.asNullableInt(et.touches[$_get](i)[$page].x);
          y = dart.asNullableInt(et.touches[$_get](i)[$page].y);
          tpoints[$_set](i, new (T.PointOfintL()).new(x, y));
        }
      }
      return tpoints;
    }
  };
  (dia_utils.DiaUtils.new = function() {
    ;
  }).prototype = dia_utils.DiaUtils.prototype;
  dart.addTypeTests(dia_utils.DiaUtils);
  dart.addTypeCaches(dia_utils.DiaUtils);
  dart.setLibraryUri(dia_utils.DiaUtils, I[5]);
  dart.defineLazy(dia_utils.DiaUtils, {
    /*dia_utils.DiaUtils.UNICODE_DELETE_CROSS*/get UNICODE_DELETE_CROSS() {
      return "✕";
    },
    /*dia_utils.DiaUtils.UNICODE_COMBO_BOX*/get UNICODE_COMBO_BOX() {
      return "▼";
    },
    /*dia_utils.DiaUtils.SEP_STAN*/get SEP_STAN() {
      return "||";
    },
    /*dia_utils.DiaUtils.TRUE*/get TRUE() {
      return "true";
    },
    /*dia_utils.DiaUtils.FALSE*/get FALSE() {
      return "false";
    }
  }, true);
  var diaTable$0 = dart.privateName(icon_panel, "IconPanel.diaTable");
  var lastTouchedActionCode$ = dart.privateName(icon_panel, "IconPanel.lastTouchedActionCode");
  var _lastTouchPoints = dart.privateName(icon_panel, "_lastTouchPoints");
  var _iconStyle = dart.privateName(icon_panel, "_iconStyle");
  icon_panel.IconPanel = class IconPanel extends dia_base.BaseDialog {
    get diaTable() {
      return this[diaTable$0];
    }
    set diaTable(value) {
      this[diaTable$0] = value;
    }
    get lastTouchedActionCode() {
      return this[lastTouchedActionCode$];
    }
    set lastTouchedActionCode(value) {
      this[lastTouchedActionCode$] = value;
    }
    getId() {
      if (this.dia == null) return null;
      return this.dia.id;
    }
    setStyle(dia, width) {
      let t0;
      t0 = dia.style;
      (() => {
        t0[$backgroundColor] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
        t0[$background] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
        t0[$textAlign] = "center";
        t0[$padding] = "0.3em";
        t0[$margin] = "1em auto";
        t0[$border] = "0";
        t0[$borderTop] = "1px solid " + dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR));
        t0[$borderRadius] = "8px";
        t0[$boxShadow] = "0 6px 10px rgba(0, 0, 0, 0.4)";
        t0[$fontSize] = dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2)) + "px";
        t0[$lineHeight] = "110%";
        t0[$zIndex] = dart.str(dia_attr.DiaAttr.ZINDEX_ICONPANEL);
        return t0;
      })();
    }
  };
  (icon_panel.IconPanel.new = function(parent, id, iconPath, iconNames, getIconCallbacks, closeCallback, x, y, panelWidth, iconSize, ncols, preventDefault) {
    let t0, t0$, t0$0, t0$1, t0$2;
    this[diaTable$0] = html.TableElement.new();
    this[lastTouchedActionCode$] = null;
    this[_lastTouchPoints] = null;
    this[_iconStyle] = null;
    icon_panel.IconPanel.__proto__.noModal.call(this, closeCallback);
    let nitems = iconNames[$length];
    this[_iconStyle] = "    alt=\"\" align=\"top\"\n      border=\"none\" height=\"" + dart.str(dart.notNull(iconSize) - 4) + "\" width=\"" + dart.str(dart.notNull(iconSize) - 4) + "\"\n    ";
    this.dia.id = id;
    this.setStyle(this.dia, null);
    let attr = dia_attr.DiaAttr.attr;
    parent[$append](this.dia);
    t0 = this.diaTable.style;
    (() => {
      t0[$cursor] = "pointer";
      t0[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
      t0[$background] = attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
      t0[$marginTop] = "6px";
      t0[$marginBottom] = "0px";
      return t0;
    })();
    t0$ = this.dia;
    (() => {
      t0$[$append](this.diaTable);
      t0$[$onTouchMove].listen(dart.fn(e => {
        if (dart.test(preventDefault)) e.preventDefault();
      }, T.TouchEventLToNull()));
      return t0$;
    })();
    let nrows = (dart.notNull(nitems) / dart.notNull(ncols))[$truncate]();
    if (nitems[$remainder](ncols) > 0) nrows = nrows + 1;
    let rows = T.ListOfTableRowElementL().new(nrows);
    let iconcount = 0;
    let iconPadding = 5;
    let iconName = null;
    let iconCallback = null;
    let cell = null;
    for (let i = 0; i < nrows; i = i + 1) {
      rows[$_set](i, html.TableRowElement.new());
      let row = rows[$_get](i);
      t0$0 = row.style;
      (() => {
        t0$0[$color] = attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR);
        t0$0[$cursor] = "pointer";
        t0$0[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
        return t0$0;
      })();
      const handleTouchStart = e => {
        this[_lastTouchPoints] = dia_utils.DiaUtils.getTouchPoints(e);
      };
      dart.fn(handleTouchStart, T.TouchEventLTovoid());
      function executIconFunction(e) {
        let eventCell = null;
        if (T.ImageElementL().is(e[$target])) {
          let icon = T.ImageElementL().as(e[$target]);
          eventCell = T.TableCellElementL().as(icon[$parent]);
        } else if (T.TableCellElementL().is(e[$target])) {
          eventCell = T.TableCellElementL().as(e[$target]);
        } else {
          return;
        }
        let touchedIconNo = core.int.parse(eventCell.id);
        let iconCallbacks = getIconCallbacks();
        if (!(iconNames[$length] == iconCallbacks[$length])) dart.assertFailed(null, I[6], 133, 16, "iconNames.length == iconCallbacks.length");
        iconCallback = iconCallbacks[$_get](touchedIconNo);
        if (iconCallback != null) iconCallback(e);
      }
      dart.fn(executIconFunction, T.UIEventLTovoid());
      const handleTouchEnd = e => {
        let tl = e.changedTouches;
        if (tl == null || dart.test(tl[$isEmpty])) return;
        let lastx = this[_lastTouchPoints][$_get](0).x;
        let lasty = this[_lastTouchPoints][$_get](0).y;
        if ((dart.notNull(lastx) - dart.notNull(tl[$first][$page].x))[$abs]() > 30 || (dart.notNull(lasty) - dart.notNull(tl[$first][$page].y))[$abs]() > 20) {
          return;
        }
        executIconFunction(e);
      };
      dart.fn(handleTouchEnd, T.TouchEventLTovoid());
      let iconCells = T.ListOfTableCellElementL().new(ncols);
      for (let k = 0; k < dart.notNull(ncols); k = k + 1) {
        iconName = iconNames[$_get](iconcount);
        iconCells[$_set](k, html.TableCellElement.new());
        cell = iconCells[$_get](k);
        cell.id = dart.str(iconcount);
        dia_utils.DiaUtils.appendHtml2(cell, "<img src=\"" + dart.str(iconPath) + "/" + dart.str(iconName) + "\" " + dart.str(this[_iconStyle]) + ">");
        t0$1 = cell.style;
        (() => {
          t0$1[$cursor] = "pointer";
          t0$1[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
          t0$1[$padding] = dart.str(iconPadding) + "px";
          return t0$1;
        })();
        cell[$onMouseEnter].listen(dart.fn(event => {
          let t0;
          t0 = iconCells[$_get](k).style;
          (() => {
            t0[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.POPUP_SELECTION_COLOR);
            return t0;
          })();
        }, T.MouseEventLToNull()));
        cell[$onMouseLeave].listen(dart.fn(event => {
          let t0;
          t0 = iconCells[$_get](k).style;
          (() => {
            t0[$backgroundColor] = attr[$_get](dia_attr.DiaAttr.ICONPANEL_BACKGROUND);
            return t0;
          })();
        }, T.MouseEventLToNull()));
        if (!dart.test(dia_utils.DiaUtils.hasMouse())) {
          cell[$onTouchStart].listen(dart.fn(e => {
            handleTouchStart(e);
          }, T.TouchEventLToNull()));
          cell[$onTouchEnd].listen(dart.fn(e => {
            handleTouchEnd(e);
          }, T.TouchEventLToNull()));
        } else {
          cell[$onClick].listen(dart.fn(e => {
            executIconFunction(e);
          }, T.MouseEventLToNull()));
        }
        row[$append](cell);
        this.diaTable[$append](row);
        if (iconcount >= dart.notNull(iconNames[$length]) - 1) break;
        iconcount = iconcount + 1;
      }
    }
    t0$2 = this.dia.style;
    (() => {
      t0$2[$position] = "fixed";
      t0$2[$left] = dart.str(x) + "px";
      t0$2[$top] = dart.str(y) + "px";
      t0$2[$marginLeft] = "0px";
      t0$2[$marginTop] = "0px";
      t0$2[$paddingTop] = "0px";
      t0$2[$paddingLeft] = "0px";
      t0$2[$width] = dart.str(panelWidth) + "px";
      t0$2[$opacity] = "1";
      return t0$2;
    })();
  }).prototype = icon_panel.IconPanel.prototype;
  dart.addTypeTests(icon_panel.IconPanel);
  dart.addTypeCaches(icon_panel.IconPanel);
  dart.setMethodSignature(icon_panel.IconPanel, () => ({
    __proto__: dart.getMethods(icon_panel.IconPanel.__proto__),
    getId: dart.fnType(dart.legacy(core.String), []),
    setStyle: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(icon_panel.IconPanel, I[7]);
  dart.setFieldSignature(icon_panel.IconPanel, () => ({
    __proto__: dart.getFields(icon_panel.IconPanel.__proto__),
    diaTable: dart.fieldType(dart.legacy(html.TableElement)),
    lastTouchedActionCode: dart.fieldType(dart.legacy(core.String)),
    [_lastTouchPoints]: dart.fieldType(dart.legacy(core.List$(dart.legacy(math.Point$(dart.legacy(core.int)))))),
    [_iconStyle]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(icon_panel.IconPanel, {
    /*icon_panel.IconPanel.POPUP_SPAN_GREYOUT*/get POPUP_SPAN_GREYOUT() {
      return "<span style='color:lightgrey'>";
    }
  }, true);
  var fields$ = dart.privateName(dia_base, "UserInput.fields");
  var dia$ = dart.privateName(dia_base, "UserInput.dia");
  var _buttonCode$ = dart.privateName(dia_base, "_buttonCode");
  dia_base.UserInput = class UserInput extends core.Object {
    get fields() {
      return this[fields$];
    }
    set fields(value) {
      this[fields$] = value;
    }
    get dia() {
      return this[dia$];
    }
    set dia(value) {
      this[dia$] = value;
    }
    getUserInput(line) {
      return this.fields[$_get](line)[$sublist](1);
    }
    getCheckedState(line) {
      return this.fields[$_get](line)[$_get](dia_base.UserInput.IX_CBUT);
    }
    get buttonCode() {
      if (this[_buttonCode$] == null) {
        return "";
      } else {
        return this[_buttonCode$];
      }
    }
  };
  (dia_base.UserInput.new = function(_buttonCode, fields, dia) {
    this[_buttonCode$] = _buttonCode;
    this[fields$] = fields;
    this[dia$] = dia;
    ;
  }).prototype = dia_base.UserInput.prototype;
  dart.addTypeTests(dia_base.UserInput);
  dart.addTypeCaches(dia_base.UserInput);
  dart.setMethodSignature(dia_base.UserInput, () => ({
    __proto__: dart.getMethods(dia_base.UserInput.__proto__),
    getUserInput: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [dart.legacy(core.int)]),
    getCheckedState: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(dia_base.UserInput, () => ({
    __proto__: dart.getGetters(dia_base.UserInput.__proto__),
    buttonCode: dart.legacy(core.String)
  }));
  dart.setLibraryUri(dia_base.UserInput, I[0]);
  dart.setFieldSignature(dia_base.UserInput, () => ({
    __proto__: dart.getFields(dia_base.UserInput.__proto__),
    [_buttonCode$]: dart.fieldType(dart.legacy(core.String)),
    fields: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(core.List$(dart.legacy(core.String)))))),
    dia: dart.fieldType(dart.legacy(dia_base.BaseDialog))
  }));
  dart.defineLazy(dia_base.UserInput, {
    /*dia_base.UserInput.IX_CBUT*/get IX_CBUT() {
      return 0;
    }
  }, true);
  dia_fileinput.FileSelectionDialog = class FileSelectionDialog extends dia_base.BaseDialog {};
  (dia_fileinput.FileSelectionDialog.new = function(htmlInfoText, fileSelectionCallback) {
    let t0, t0$, t0$0, t0$1, t0$2;
    dia_fileinput.FileSelectionDialog.__proto__.new.call(this, null);
    if (!(fileSelectionCallback != null)) dart.assertFailed(null, I[8], 23, 12, "fileSelectionCallback != null");
    let attr = dia_attr.DiaAttr.attr;
    let table = html.TableElement.new();
    t0 = table.style;
    (() => {
      t0[$padding] = "0px";
      t0[$margin] = "0px";
      t0[$width] = "100%";
      t0[$borderCollapse] = "collapse";
      return t0;
    })();
    let row1 = html.TableRowElement.new();
    let row2 = html.TableRowElement.new();
    let row3 = html.TableRowElement.new();
    table[$append](row1);
    table[$append](row2);
    table[$append](row3);
    let delCell = html.TableCellElement.new();
    let textCell = html.TableCellElement.new();
    let buttonCell = html.TableCellElement.new();
    row1[$append](delCell);
    row2[$append](textCell);
    row3[$append](buttonCell);
    this.dia[$append](table);
    let delIconSize = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_CROSS_FONTSIZE));
    t0$ = delCell.style;
    (() => {
      t0$[$color] = "red";
      t0$[$fontSize] = dart.str(delIconSize) + "px";
      t0$[$textAlign] = "right";
      t0$[$cursor] = "pointer";
      return t0$;
    })();
    dia_utils.DiaUtils.appendHtml2(delCell, dia_utils.DiaUtils.UNICODE_DELETE_CROSS);
    delCell[$onClick].listen(dart.fn(e => {
      if (this.dia != null) {
        this.close(new dia_base.UserInput.new(dia_attr.DiaAttr.DIA_ACT_ABORT, null, null));
        this.dia = null;
        fileSelectionCallback(null);
      }
    }, T.UIEventLToNull()));
    let fontsizeTxT = core.int.parse(attr[$_get](dia_attr.DiaAttr.DIALOG_HELP_TEXT_FONTSIZE));
    t0$0 = textCell.style;
    (() => {
      t0$0[$paddingTop] = "12px";
      t0$0[$paddingBottom] = "16px";
      t0$0[$fontSize] = dart.str(fontsizeTxT);
      return t0$0;
    })();
    dia_utils.DiaUtils.appendHtml2(textCell, htmlInfoText);
    this.dia.style[$color] = dart.str(attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_COLOR));
    let inputBut = html.InputElement.new({type: "file"});
    inputBut.multiple = true;
    t0$1 = inputBut.style;
    (() => {
      t0$1[$fontSize] = dart.str(attr[$_get](dia_attr.DiaAttr.DIALOG_BUTTON_FONTSIZE)) + "px";
      return t0$1;
    })();
    inputBut[$onChange].listen(dart.fn(e => {
      if (this.dia != null) {
        this.close(new dia_base.UserInput.new(dia_attr.DiaAttr.DIA_ACT_ABORT, null, null));
        this.dia = null;
      }
      let selectedFiles = inputBut.files;
      fileSelectionCallback(selectedFiles);
    }, T.EventLToNull()));
    let form = html.FormElement.new();
    form[$append](inputBut);
    buttonCell[$append](form);
    let marginTop = (dart.notNull(this.diaContainer.clientHeight) / 2)[$truncate]() - (dart.notNull(this.dia.clientHeight) / 2)[$truncate]();
    marginTop = marginTop - (marginTop * 0.2)[$round]();
    if (dart.test(dia_utils.DiaUtils.isTablet())) {
      marginTop = 0;
    }
    t0$2 = this.dia.style;
    (() => {
      t0$2[$width] = dart.str(dart.notNull(inputBut.clientWidth) + 30) + "px";
      t0$2[$marginTop] = dart.str(marginTop) + "px";
      return t0$2;
    })();
    html.document[$onKeyDown].listen(dart.fn(e => {
      if (e.keyCode === 27) {
        if (this.dia != null) {
          this.close(new dia_base.UserInput.new(dia_attr.DiaAttr.DIA_ACT_ABORT, null, null));
          this.dia = null;
        }
      }
    }, T.KeyboardEventLToNull()));
  }).prototype = dia_fileinput.FileSelectionDialog.prototype;
  dart.addTypeTests(dia_fileinput.FileSelectionDialog);
  dart.addTypeCaches(dia_fileinput.FileSelectionDialog);
  dart.setLibraryUri(dia_fileinput.FileSelectionDialog, I[9]);
  var but = dart.privateName(dia_button, "ActButton.but");
  dia_button.ActButton = class ActButton extends core.Object {
    get but() {
      return this[but];
    }
    set but(value) {
      this[but] = value;
    }
    static initAttrFromDefaults() {
      dia_button.ActButton.but_attr = T.LinkedHashMapOfStringL$StringL().from(dia_button.ActButton.ATTR_BUTTONS);
    }
    static setAttr(myAttr) {
      if (dia_button.ActButton.but_attr == null) dia_button.ActButton.initAttrFromDefaults();
      if (myAttr == null) return;
      for (let attrName of myAttr[$keys]) {
        dia_button.ActButton.but_attr[$_set](attrName, myAttr[$_get](attrName));
      }
    }
    setButtonStyle() {
      let t0;
      t0 = this.but.style;
      (() => {
        t0[$display] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_DISPLAY);
        t0[$borderRadius] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_BORDER_RADIUS);
        t0[$border] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_BORDER);
        t0[$fontSize] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_FONT_SIZE);
        t0[$padding] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_PADDING);
        t0[$background] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_BACKGROUND);
        t0[$color] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_COLOR);
        t0[$borderBottom] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_BORDER_BOTTOM);
        t0[$fontSmoothing] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_FONT_SMOOTHING);
        t0[$fontWeight] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_FONT_WEIGHT);
        t0[$margin] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_MARGIN);
        t0[$textAlign] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_TEXT_ALIGN);
        t0[$opacity] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_OPACITY_LEAVE);
        return t0;
      })();
      this.but[$onMouseOver].listen(dart.fn(e => {
        let t0;
        t0 = this.but.style;
        (() => {
          t0[$opacity] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_OPACITY_OVER);
          t0[$cursor] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_CURSOR_POINTER);
          return t0;
        })();
      }, T.MouseEventLToNull()));
      this.but[$onMouseLeave].listen(dart.fn(e => {
        let t0;
        t0 = this.but.style;
        (() => {
          t0[$opacity] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_OPACITY_LEAVE);
          t0[$cursor] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_CURSOR_AUTO);
          return t0;
        })();
      }, T.MouseEventLToNull()));
      this.but[$onFocus].listen(dart.fn(e => {
        let t0;
        t0 = this.but.style;
        (() => {
          t0[$opacity] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_OPACITY_OVER);
          t0[$cursor] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_CURSOR_POINTER);
          return t0;
        })();
      }, T.EventLToNull()));
      this.but[$onBlur].listen(dart.fn(e => {
        let t0;
        t0 = this.but.style;
        (() => {
          t0[$opacity] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_OPACITY_LEAVE);
          t0[$cursor] = dia_button.ActButton.but_attr[$_get](dia_button.ActButton.BUT_CURSOR_AUTO);
          return t0;
        })();
      }, T.EventLToNull()));
    }
  };
  (dia_button.ActButton.new = function() {
    this[but] = null;
    if (dia_button.ActButton.but_attr == null) dia_button.ActButton.initAttrFromDefaults();
    this.but = html.ButtonElement.new();
    this.setButtonStyle();
  }).prototype = dia_button.ActButton.prototype;
  dart.addTypeTests(dia_button.ActButton);
  dart.addTypeCaches(dia_button.ActButton);
  dart.setMethodSignature(dia_button.ActButton, () => ({
    __proto__: dart.getMethods(dia_button.ActButton.__proto__),
    setButtonStyle: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dia_button.ActButton, I[10]);
  dart.setFieldSignature(dia_button.ActButton, () => ({
    __proto__: dart.getFields(dia_button.ActButton.__proto__),
    but: dart.fieldType(dart.legacy(html.ButtonElement))
  }));
  dart.defineLazy(dia_button.ActButton, {
    /*dia_button.ActButton.but_attr*/get but_attr() {
      return null;
    },
    set but_attr(_) {},
    /*dia_button.ActButton.BUT_BACKGROUND*/get BUT_BACKGROUND() {
      return "BUT_BACKGROUND";
    },
    /*dia_button.ActButton.BUT_BORDER*/get BUT_BORDER() {
      return "BUT_BORDER";
    },
    /*dia_button.ActButton.BUT_BORDER_BOTTOM*/get BUT_BORDER_BOTTOM() {
      return "BUT_BORDER_BOTTOM";
    },
    /*dia_button.ActButton.BUT_BORDER_RADIUS*/get BUT_BORDER_RADIUS() {
      return "BUT_BORDER_RADIUS";
    },
    /*dia_button.ActButton.BUT_COLOR*/get BUT_COLOR() {
      return "BUT_COLOR";
    },
    /*dia_button.ActButton.BUT_CURSOR_AUTO*/get BUT_CURSOR_AUTO() {
      return "BUT_CURSOR_AUTO";
    },
    /*dia_button.ActButton.BUT_CURSOR_POINTER*/get BUT_CURSOR_POINTER() {
      return "BUT_CURSOR_POINTER";
    },
    /*dia_button.ActButton.BUT_DISPLAY*/get BUT_DISPLAY() {
      return "BUT_DISPLAY";
    },
    /*dia_button.ActButton.BUT_FONT_SIZE*/get BUT_FONT_SIZE() {
      return "BUT_FONT_SIZE";
    },
    /*dia_button.ActButton.BUT_FONT_SMOOTHING*/get BUT_FONT_SMOOTHING() {
      return "BUT_FONT_SMOOTHING";
    },
    /*dia_button.ActButton.BUT_FONT_WEIGHT*/get BUT_FONT_WEIGHT() {
      return "BUT_FONT_WEIGHT";
    },
    /*dia_button.ActButton.BUT_MARGIN*/get BUT_MARGIN() {
      return "BUT_MARGIN";
    },
    /*dia_button.ActButton.BUT_OPACITY_LEAVE*/get BUT_OPACITY_LEAVE() {
      return "BUT_OPACITY_LEAVE";
    },
    /*dia_button.ActButton.BUT_OPACITY_OVER*/get BUT_OPACITY_OVER() {
      return "BUT_OPACITY_OVER";
    },
    /*dia_button.ActButton.BUT_PADDING*/get BUT_PADDING() {
      return "BUT_PADDING";
    },
    /*dia_button.ActButton.BUT_TEXT_ALIGN*/get BUT_TEXT_ALIGN() {
      return "BUT_TEXT_ALIGN";
    },
    /*dia_button.ActButton.ATTR_BUTTONS*/get ATTR_BUTTONS() {
      return new (T.IdentityMapOfStringL$StringL()).from([dia_button.ActButton.BUT_BACKGROUND, "#71A0D0", dia_button.ActButton.BUT_BORDER, "none", dia_button.ActButton.BUT_BORDER_BOTTOM, "1px solid rgb(52,120,188)", dia_button.ActButton.BUT_BORDER_RADIUS, "3px", dia_button.ActButton.BUT_COLOR, "white", dia_button.ActButton.BUT_CURSOR_AUTO, "auto", dia_button.ActButton.BUT_CURSOR_POINTER, "pointer", dia_button.ActButton.BUT_DISPLAY, "inline-block", dia_button.ActButton.BUT_FONT_SIZE, "0.9rem", dia_button.ActButton.BUT_FONT_SMOOTHING, "antialiased", dia_button.ActButton.BUT_FONT_WEIGHT, "bold", dia_button.ActButton.BUT_MARGIN, "0 0.25rem", dia_button.ActButton.BUT_OPACITY_LEAVE, "0.8", dia_button.ActButton.BUT_OPACITY_OVER, "1.0", dia_button.ActButton.BUT_PADDING, "0.4rem 0.8em", dia_button.ActButton.BUT_TEXT_ALIGN, "center"]);
    }
  }, true);
  dia_attr.DiaAttr = class DiaAttr extends core.Object {
    static initAttrFromDefaults() {
      dia_attr.DiaAttr.attr = T.LinkedHashMapOfStringL$StringL().from(dia_attr.DiaAttr.ATTR_DIALOGS_DESKTOP);
      if (dart.test(dia_utils.DiaUtils.isPhone())) {
        dia_attr.DiaAttr.attr = T.LinkedHashMapOfStringL$StringL().from(dia_attr.DiaAttr.ATTR_DIALOGS_PHONE);
      } else if (dart.test(dia_utils.DiaUtils.isTablet())) {
        dia_attr.DiaAttr.attr = T.LinkedHashMapOfStringL$StringL().from(dia_attr.DiaAttr.ATTR_DIALOGS_TABLET);
      }
    }
    static setAttr(myAttr) {
      if (dia_attr.DiaAttr.attr == null) dia_attr.DiaAttr.initAttrFromDefaults();
      if (myAttr == null) return;
      for (let attrName of myAttr[$keys]) {
        dia_attr.DiaAttr.attr[$_set](attrName, myAttr[$_get](attrName));
      }
    }
    static setDialogStyle(dia) {
      let t0;
      if (dia_attr.DiaAttr.attr == null) {
        dia_attr.DiaAttr.initAttrFromDefaults();
      }
      t0 = dia.style;
      (() => {
        t0[$background] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_BACKGROUND);
        t0[$padding] = "12px 16px 12px 16px";
        t0[$margin] = "1em auto";
        t0[$border] = "0";
        t0[$borderTop] = "1px solid " + dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR));
        t0[$borderRadius] = dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_BORDER_RADIUS)) + "px";
        t0[$boxShadow] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_BOX_SHADOW);
        t0[$fontSize] = dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE)) + "px";
        t0[$lineHeight] = "100%";
        t0[$opacity] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_WIN_OPACITY);
        return t0;
      })();
    }
    static setDialogStyle2(dia) {
      let t0;
      if (dia_attr.DiaAttr.attr == null) {
        dia_attr.DiaAttr.initAttrFromDefaults();
      }
      t0 = dia.style;
      (() => {
        t0[$background] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_BACKGROUND);
        t0[$textAlign] = "center";
        t0[$padding] = "1.0em";
        t0[$paddingTop] = "0.5em";
        t0[$margin] = "1em auto";
        t0[$border] = "0";
        t0[$borderTop] = "1px solid " + dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR));
        t0[$borderRadius] = dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_BORDER_RADIUS)) + "px";
        t0[$boxShadow] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_BOX_SHADOW);
        t0[$fontSize] = dart.str(dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE)) + "px";
        t0[$lineHeight] = "100%";
        t0[$opacity] = dia_attr.DiaAttr.attr[$_get](dia_attr.DiaAttr.DIALOG_WIN_OPACITY);
        return t0;
      })();
    }
  };
  (dia_attr.DiaAttr.new = function() {
    ;
  }).prototype = dia_attr.DiaAttr.prototype;
  dart.addTypeTests(dia_attr.DiaAttr);
  dart.addTypeCaches(dia_attr.DiaAttr);
  dart.setLibraryUri(dia_attr.DiaAttr, I[11]);
  dart.defineLazy(dia_attr.DiaAttr, {
    /*dia_attr.DiaAttr.ZINDEX_POPUP*/get ZINDEX_POPUP() {
      return 1000 * 1000 * 100;
    },
    /*dia_attr.DiaAttr.ZINDEX_DIALOG*/get ZINDEX_DIALOG() {
      return 1000 * 1000 * 90;
    },
    /*dia_attr.DiaAttr.ZINDEX_ICONPANEL*/get ZINDEX_ICONPANEL() {
      return 1000 * 1000 * 80;
    },
    /*dia_attr.DiaAttr.attr*/get attr() {
      return null;
    },
    set attr(_) {},
    /*dia_attr.DiaAttr.DIA_ACT_OK*/get DIA_ACT_OK() {
      return "DIA_ACT_OK";
    },
    /*dia_attr.DiaAttr.DIA_ACT_BUT1*/get DIA_ACT_BUT1() {
      return dia_attr.DiaAttr.DIA_ACT_OK;
    },
    /*dia_attr.DiaAttr.DIA_ACT_CANCEL*/get DIA_ACT_CANCEL() {
      return "DIA_ACT_CANCEL";
    },
    /*dia_attr.DiaAttr.DIA_ACT_BUT2*/get DIA_ACT_BUT2() {
      return dia_attr.DiaAttr.DIA_ACT_CANCEL;
    },
    /*dia_attr.DiaAttr.DIA_ACT_ABORT*/get DIA_ACT_ABORT() {
      return "DIA_ACT_ABORT";
    },
    /*dia_attr.DiaAttr.DIA_ACT_BUT3*/get DIA_ACT_BUT3() {
      return "DIA_ACT_BUT3";
    },
    /*dia_attr.DiaAttr.DIA_ACT_ATOMS*/get DIA_ACT_ATOMS() {
      return "Atoms";
    },
    /*dia_attr.DiaAttr.DIA_ACT_REGION*/get DIA_ACT_REGION() {
      return "Region";
    },
    /*dia_attr.DiaAttr.DIA_BUT_OK*/get DIA_BUT_OK() {
      return "OK";
    },
    /*dia_attr.DiaAttr.DIA_BUT_CANCEL*/get DIA_BUT_CANCEL() {
      return "Cancel";
    },
    /*dia_attr.DiaAttr.DIA_BUT_OPT*/get DIA_BUT_OPT() {
      return "Options";
    },
    /*dia_attr.DiaAttr.DIA_BUT_YES*/get DIA_BUT_YES() {
      return "Yes";
    },
    /*dia_attr.DiaAttr.DIA_BUT_NO*/get DIA_BUT_NO() {
      return "No";
    },
    /*dia_attr.DiaAttr.DIA_ACTIONS*/get DIA_ACTIONS() {
      return T.JSArrayOfStringL().of([dia_attr.DiaAttr.DIA_ACT_BUT1, dia_attr.DiaAttr.DIA_ACT_BUT2, dia_attr.DiaAttr.DIA_ACT_BUT3]);
    },
    /*dia_attr.DiaAttr.RADIO*/get RADIO() {
      return "radio";
    },
    /*dia_attr.DiaAttr.CHECKBOX*/get CHECKBOX() {
      return "checkbox";
    },
    /*dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE*/get DIALOG_TEXT_FONTSIZE() {
      return "DIALOG_TEXT_FONTSIZE";
    },
    /*dia_attr.DiaAttr.DIALOG_HELP_TEXT_FONTSIZE*/get DIALOG_HELP_TEXT_FONTSIZE() {
      return "DIALOG_HELP_TEXT_FONTSIZE";
    },
    /*dia_attr.DiaAttr.DIALOG_HEADER_FONTSIZE*/get DIALOG_HEADER_FONTSIZE() {
      return "DIALOG_HEADER_FONTSIZE";
    },
    /*dia_attr.DiaAttr.DIALOG_HEADER_TEXTALIGN*/get DIALOG_HEADER_TEXTALIGN() {
      return "DIALOG_HEADER_TEXTALIGN";
    },
    /*dia_attr.DiaAttr.DIALOG_BUTTON_FONTSIZE*/get DIALOG_BUTTON_FONTSIZE() {
      return "DIALOG_BUTTON_FONTSIZE";
    },
    /*dia_attr.DiaAttr.DIALOG_TEXT_COLOR*/get DIALOG_TEXT_COLOR() {
      return "DIALOG_TEXT_COLOR";
    },
    /*dia_attr.DiaAttr.DIALOG_TEXT_COLOR2*/get DIALOG_TEXT_COLOR2() {
      return "DIALOG_TEXT_COLOR2";
    },
    /*dia_attr.DiaAttr.DIALOG_INPUT_BG*/get DIALOG_INPUT_BG() {
      return "DIALOG_INPUT_BG";
    },
    /*dia_attr.DiaAttr.DIALOG_BORDER_COLOR*/get DIALOG_BORDER_COLOR() {
      return "DIALOG_BORDER_COLOR";
    },
    /*dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR*/get DIALOG_TOPBAR_COLOR() {
      return "DIALOG_TOPBAR_COLOR";
    },
    /*dia_attr.DiaAttr.DIALOG_HEADER_COLOR*/get DIALOG_HEADER_COLOR() {
      return "DIALOG_HEADER_COLOR";
    },
    /*dia_attr.DiaAttr.DIALOG_WIN_OPACITY*/get DIALOG_WIN_OPACITY() {
      return "DIALOG_WIN_OPACITY";
    },
    /*dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE1*/get DIALOG_POPUP_FONTSIZE1() {
      return "DIALOG_POPUP_FONTSIZE1";
    },
    /*dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2*/get DIALOG_POPUP_FONTSIZE2() {
      return "DIALOG_POPUP_FONTSIZE2";
    },
    /*dia_attr.DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING*/get DIALOG_POPUP_TEXT_CELL_PADDING() {
      return "DIALOG_POPUP_TEXT_CELL_PADDING";
    },
    /*dia_attr.DiaAttr.DIALOG_CROSS_FONTSIZE*/get DIALOG_CROSS_FONTSIZE() {
      return "DIALOG_CROSS_FONTSIZE";
    },
    /*dia_attr.DiaAttr.DIALOG_BACKGROUND*/get DIALOG_BACKGROUND() {
      return "DIALOG_BACKGROUND";
    },
    /*dia_attr.DiaAttr.DIALOG_BOX_SHADOW*/get DIALOG_BOX_SHADOW() {
      return "DIALOG_BOX_SHADOW";
    },
    /*dia_attr.DiaAttr.DIALOG_BORDER_RADIUS*/get DIALOG_BORDER_RADIUS() {
      return "DIALOG_BORDER_RADIUS";
    },
    /*dia_attr.DiaAttr.OPTIONS_BUTTON_FONTSIZE*/get OPTIONS_BUTTON_FONTSIZE() {
      return "OPTIONS_BUTTON_FONTSIZE";
    },
    /*dia_attr.DiaAttr.POPUP_BACKGROUND*/get POPUP_BACKGROUND() {
      return "POPUP_BACKGROUND";
    },
    /*dia_attr.DiaAttr.POPUP_SELECTION_COLOR*/get POPUP_SELECTION_COLOR() {
      return "POPUP_SELECTION_COLOR";
    },
    /*dia_attr.DiaAttr.ICONPANEL_BACKGROUND*/get ICONPANEL_BACKGROUND() {
      return "ICONPANEL_BACKGROUND";
    },
    /*dia_attr.DiaAttr.DIA_BUTTON_BG_COLOR*/get DIA_BUTTON_BG_COLOR() {
      return "DIA_BUTTON_BG_COLOR";
    },
    /*dia_attr.DiaAttr.DIA_BUTTON_TEXT_COLOR*/get DIA_BUTTON_TEXT_COLOR() {
      return "DIA_BUTTON_TEXT_COLOR";
    },
    /*dia_attr.DiaAttr.DIA_BUTTON_BG_COLOR_DEF*/get DIA_BUTTON_BG_COLOR_DEF() {
      return "#71A0D0";
    },
    /*dia_attr.DiaAttr.DIA_BUTTON_TEXT_COLOR_DEF*/get DIA_BUTTON_TEXT_COLOR_DEF() {
      return "white";
    },
    /*dia_attr.DiaAttr.DIA_BUTTON_RADIUS*/get DIA_BUTTON_RADIUS() {
      return "5";
    },
    /*dia_attr.DiaAttr.DIA_TEX_COL*/get DIA_TEX_COL() {
      return "#2C3944";
    },
    /*dia_attr.DiaAttr.DEF_POPUP_SELECTION_COLOR*/get DEF_POPUP_SELECTION_COLOR() {
      return "rgb(139,177,211)";
    },
    /*dia_attr.DiaAttr.TITLEBAR_BACKGROUND*/get TITLEBAR_BACKGROUND() {
      return "rgb(52,120,188)";
    },
    /*dia_attr.DiaAttr.ATTR_DIALOGS_DESKTOP*/get ATTR_DIALOGS_DESKTOP() {
      return new (T.IdentityMapOfStringL$StringL()).from([dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE, "16", dia_attr.DiaAttr.DIALOG_HELP_TEXT_FONTSIZE, "14", dia_attr.DiaAttr.DIALOG_HEADER_FONTSIZE, "16", dia_attr.DiaAttr.DIALOG_HEADER_TEXTALIGN, "center", dia_attr.DiaAttr.DIALOG_BUTTON_FONTSIZE, "14", dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE1, "18", dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2, "14", dia_attr.DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING, "6px", dia_attr.DiaAttr.DIALOG_TEXT_COLOR, dia_attr.DiaAttr.DIA_TEX_COL, dia_attr.DiaAttr.DIALOG_TEXT_COLOR2, "DarkCyan", dia_attr.DiaAttr.DIALOG_INPUT_BG, "WhiteSmoke", dia_attr.DiaAttr.DIALOG_BORDER_COLOR, "rgb(62, 70, 75)", dia_attr.DiaAttr.DIALOG_HEADER_COLOR, dia_attr.DiaAttr.DIA_TEX_COL, dia_attr.DiaAttr.DIALOG_WIN_OPACITY, "0.95", dia_attr.DiaAttr.DIALOG_CROSS_FONTSIZE, "24", dia_attr.DiaAttr.DIALOG_BACKGROUND, "linear-gradient(to bottom, #EEEEEE, white)", dia_attr.DiaAttr.DIALOG_BOX_SHADOW, "0 6px 10px rgba(0, 0, 0, 0.4)", dia_attr.DiaAttr.DIALOG_BORDER_RADIUS, "8", dia_attr.DiaAttr.OPTIONS_BUTTON_FONTSIZE, "12", dia_attr.DiaAttr.POPUP_BACKGROUND, "#F8F8F8", dia_attr.DiaAttr.POPUP_SELECTION_COLOR, dia_attr.DiaAttr.DEF_POPUP_SELECTION_COLOR, dia_attr.DiaAttr.ICONPANEL_BACKGROUND, dia_attr.DiaAttr.DIA_BUTTON_BG_COLOR_DEF]);
    },
    /*dia_attr.DiaAttr.ATTR_DIALOGS_TABLET*/get ATTR_DIALOGS_TABLET() {
      return new (T.IdentityMapOfStringL$StringL()).from([dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE, "18", dia_attr.DiaAttr.DIALOG_HELP_TEXT_FONTSIZE, "16", dia_attr.DiaAttr.DIALOG_HEADER_FONTSIZE, "20", dia_attr.DiaAttr.DIALOG_HEADER_TEXTALIGN, "center", dia_attr.DiaAttr.DIALOG_BUTTON_FONTSIZE, "18", dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE1, "20", dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2, "18", dia_attr.DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING, "10px", dia_attr.DiaAttr.DIALOG_TEXT_COLOR, dia_attr.DiaAttr.DIA_TEX_COL, dia_attr.DiaAttr.DIALOG_TEXT_COLOR2, "DarkCyan", dia_attr.DiaAttr.DIALOG_INPUT_BG, "WhiteSmoke", dia_attr.DiaAttr.DIALOG_BORDER_COLOR, "rgba(0,0,0,0.8)", dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR, "WhiteSmoke", dia_attr.DiaAttr.DIALOG_HEADER_COLOR, dia_attr.DiaAttr.DIA_TEX_COL, dia_attr.DiaAttr.DIALOG_WIN_OPACITY, "0.95", dia_attr.DiaAttr.DIALOG_CROSS_FONTSIZE, "28", dia_attr.DiaAttr.DIALOG_BACKGROUND, "linear-gradient(to bottom, #EEEEEE, white)", dia_attr.DiaAttr.DIALOG_BOX_SHADOW, "0 6px 10px rgba(0, 0, 0, 0.4)", dia_attr.DiaAttr.DIALOG_BORDER_RADIUS, "8", dia_attr.DiaAttr.OPTIONS_BUTTON_FONTSIZE, "16", dia_attr.DiaAttr.POPUP_BACKGROUND, "#F8F8F8", dia_attr.DiaAttr.POPUP_SELECTION_COLOR, dia_attr.DiaAttr.DEF_POPUP_SELECTION_COLOR, dia_attr.DiaAttr.ICONPANEL_BACKGROUND, dia_attr.DiaAttr.DIA_BUTTON_BG_COLOR_DEF]);
    },
    /*dia_attr.DiaAttr.ATTR_DIALOGS_PHONE*/get ATTR_DIALOGS_PHONE() {
      return new (T.IdentityMapOfStringL$StringL()).from([dia_attr.DiaAttr.DIALOG_TEXT_FONTSIZE, "12", dia_attr.DiaAttr.DIALOG_HELP_TEXT_FONTSIZE, "14", dia_attr.DiaAttr.DIALOG_HEADER_FONTSIZE, "12", dia_attr.DiaAttr.DIALOG_HEADER_TEXTALIGN, "center", dia_attr.DiaAttr.DIALOG_BUTTON_FONTSIZE, "10", dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE1, "14", dia_attr.DiaAttr.DIALOG_POPUP_FONTSIZE2, "12", dia_attr.DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING, "4px", dia_attr.DiaAttr.DIALOG_TEXT_COLOR, dia_attr.DiaAttr.DIA_TEX_COL, dia_attr.DiaAttr.DIALOG_TEXT_COLOR2, "DarkCyan", dia_attr.DiaAttr.DIALOG_INPUT_BG, "WhiteSmoke", dia_attr.DiaAttr.DIALOG_BORDER_COLOR, "rgba(0,0,0,0.8)", dia_attr.DiaAttr.DIALOG_TOPBAR_COLOR, "WhiteSmoke", dia_attr.DiaAttr.DIALOG_HEADER_COLOR, dia_attr.DiaAttr.DIA_TEX_COL, dia_attr.DiaAttr.DIALOG_WIN_OPACITY, "0.95", dia_attr.DiaAttr.DIALOG_CROSS_FONTSIZE, "16", dia_attr.DiaAttr.DIALOG_BACKGROUND, "linear-gradient(to bottom, #EEEEEE, white)", dia_attr.DiaAttr.DIALOG_BOX_SHADOW, "0 6px 10px rgba(0, 0, 0, 0.4)", dia_attr.DiaAttr.DIALOG_BORDER_RADIUS, "8", dia_attr.DiaAttr.OPTIONS_BUTTON_FONTSIZE, "12", dia_attr.DiaAttr.POPUP_BACKGROUND, "#F8F8F8", dia_attr.DiaAttr.POPUP_SELECTION_COLOR, dia_attr.DiaAttr.DEF_POPUP_SELECTION_COLOR, dia_attr.DiaAttr.ICONPANEL_BACKGROUND, dia_attr.DiaAttr.DIA_BUTTON_BG_COLOR_DEF]);
    }
  }, true);
  dart.trackLibraries("packages/smart_dialogs/smart_dialogs", {
    "package:smart_dialogs/src/dia_input.dart": dia_input,
    "package:smart_dialogs/smart_dialogs.dart": smart_dialogs,
    "package:smart_dialogs/src/table_base.dart": table_base,
    "package:smart_dialogs/src/table_attr.dart": table_attr,
    "package:smart_dialogs/src/popup.dart": popup,
    "package:smart_dialogs/src/dia_utils.dart": dia_utils,
    "package:smart_dialogs/src/icon_panel.dart": icon_panel,
    "package:smart_dialogs/src/dia_base.dart": dia_base,
    "package:smart_dialogs/src/dia_fileinput.dart": dia_fileinput,
    "package:smart_dialogs/src/dia_button.dart": dia_button,
    "package:smart_dialogs/src/dia_attr.dart": dia_attr
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/dia_base.dart","src/dia_input.dart","src/table_base.dart","src/table_attr.dart","src/popup.dart","src/dia_utils.dart","src/icon_panel.dart","src/dia_fileinput.dart","src/dia_button.dart","src/dia_attr.dart"],"names":[],"mappings":"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","file":"smart_dialogs.unsound.ddc.js"}');
  // Exports:
  return {
    src__dia_input: dia_input,
    smart_dialogs: smart_dialogs,
    src__table_base: table_base,
    src__table_attr: table_attr,
    src__popup: popup,
    src__dia_utils: dia_utils,
    src__icon_panel: icon_panel,
    src__dia_base: dia_base,
    src__dia_fileinput: dia_fileinput,
    src__dia_button: dia_button,
    src__dia_attr: dia_attr
  };
}));

//# sourceMappingURL=smart_dialogs.unsound.ddc.js.map
