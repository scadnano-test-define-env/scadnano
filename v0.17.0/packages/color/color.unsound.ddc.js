define(['dart_sdk'], (function load__packages__color__color(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var color$ = Object.create(dart.library);
  var $toInt = dartx.toInt;
  var $containsKey = dartx.containsKey;
  var $runtimeType = dartx.runtimeType;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $isNotEmpty = dartx.isNotEmpty;
  var $trim = dartx.trim;
  var $codeUnits = dartx.codeUnits;
  var $replaceFirst = dartx.replaceFirst;
  var $map = dartx.map;
  var $expand = dartx.expand;
  var $toLowerCase = dartx.toLowerCase;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $split = dartx.split;
  var $sublist = dartx.sublist;
  var $join = dartx.join;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $reduce = dartx.reduce;
  var $modulo = dartx['%'];
  var $isNaN = dartx.isNaN;
  var $isInfinite = dartx.isInfinite;
  var $abs = dartx.abs;
  var $toList = dartx.toList;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    IdentityMapOfString$num: () => (T.IdentityMapOfString$num = dart.constFn(_js_helper.IdentityMap$(core.String, core.num)))(),
    StringAndnumTovoid: () => (T.StringAndnumTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.num])))(),
    numL: () => (T.numL = dart.constFn(dart.legacy(core.num)))(),
    ListOfnum: () => (T.ListOfnum = dart.constFn(core.List$(core.num)))(),
    ColorAndListOfnumToColor: () => (T.ColorAndListOfnumToColor = dart.constFn(dart.fnType(color$.Color, [color$.Color], [T.ListOfnum()])))(),
    ColorAndListOfnumToCielabColor: () => (T.ColorAndListOfnumToCielabColor = dart.constFn(dart.fnType(color$.CielabColor, [color$.Color], [T.ListOfnum()])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(color$.Color)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    intToListOfint: () => (T.intToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [core.int])))(),
    ListOfintToListOfint: () => (T.ListOfintToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [T.ListOfint()])))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    TAndTToT: () => (T.TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))(),
    TAndTToT$1: () => (T.TAndTToT$1 = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    RgbColorL: () => (T.RgbColorL = dart.constFn(dart.legacy(color$.RgbColor)))(),
    JSArrayOfnum: () => (T.JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))(),
    numTodouble: () => (T.numTodouble = dart.constFn(dart.fnType(core.double, [core.num])))(),
    numTonum: () => (T.numTonum = dart.constFn(dart.fnType(core.num, [core.num])))(),
    numToint: () => (T.numToint = dart.constFn(dart.fnType(core.int, [core.num])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], T.numL());
    },
    get C1() {
      return C[1] = dart.fn(math.max, T.TAndTToT());
    },
    get C2() {
      return C[2] = dart.fn(math.min, T.TAndTToT$1());
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 248,
        [r$]: 240
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 215,
        [g$]: 235,
        [r$]: 250
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 255,
        [r$]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 212,
        [g$]: 255,
        [r$]: 127
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 255,
        [r$]: 240
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 220,
        [g$]: 245,
        [r$]: 245
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 196,
        [g$]: 228,
        [r$]: 255
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 0,
        [r$]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 205,
        [g$]: 235,
        [r$]: 255
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 0,
        [r$]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 226,
        [g$]: 43,
        [r$]: 138
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 42,
        [g$]: 42,
        [r$]: 165
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 135,
        [g$]: 184,
        [r$]: 222
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 160,
        [g$]: 158,
        [r$]: 95
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 255,
        [r$]: 127
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 30,
        [g$]: 105,
        [r$]: 210
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 80,
        [g$]: 127,
        [r$]: 255
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 237,
        [g$]: 149,
        [r$]: 100
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 220,
        [g$]: 248,
        [r$]: 255
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 60,
        [g$]: 20,
        [r$]: 220
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 139,
        [g$]: 0,
        [r$]: 0
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 139,
        [g$]: 139,
        [r$]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 11,
        [g$]: 134,
        [r$]: 184
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 169,
        [g$]: 169,
        [r$]: 169
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 100,
        [r$]: 0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 107,
        [g$]: 183,
        [r$]: 189
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 139,
        [g$]: 0,
        [r$]: 139
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 47,
        [g$]: 107,
        [r$]: 85
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 140,
        [r$]: 255
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 204,
        [g$]: 50,
        [r$]: 153
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 0,
        [r$]: 139
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 122,
        [g$]: 150,
        [r$]: 233
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 143,
        [g$]: 188,
        [r$]: 143
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 139,
        [g$]: 61,
        [r$]: 72
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 79,
        [g$]: 79,
        [r$]: 47
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 209,
        [g$]: 206,
        [r$]: 0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 211,
        [g$]: 0,
        [r$]: 148
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 147,
        [g$]: 20,
        [r$]: 255
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 191,
        [r$]: 0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 105,
        [g$]: 105,
        [r$]: 105
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 144,
        [r$]: 30
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 34,
        [g$]: 34,
        [r$]: 178
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 240,
        [g$]: 250,
        [r$]: 255
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 34,
        [g$]: 139,
        [r$]: 34
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 0,
        [r$]: 255
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 220,
        [g$]: 220,
        [r$]: 220
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 248,
        [r$]: 248
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 215,
        [r$]: 255
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 32,
        [g$]: 165,
        [r$]: 218
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 128,
        [g$]: 128,
        [r$]: 128
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 128,
        [r$]: 0
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 47,
        [g$]: 255,
        [r$]: 173
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 240,
        [g$]: 255,
        [r$]: 240
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 180,
        [g$]: 105,
        [r$]: 255
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 92,
        [g$]: 92,
        [r$]: 205
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 130,
        [g$]: 0,
        [r$]: 75
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 240,
        [g$]: 255,
        [r$]: 255
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 140,
        [g$]: 230,
        [r$]: 240
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 250,
        [g$]: 230,
        [r$]: 230
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 245,
        [g$]: 240,
        [r$]: 255
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 252,
        [r$]: 124
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 205,
        [g$]: 250,
        [r$]: 255
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 230,
        [g$]: 216,
        [r$]: 173
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 128,
        [g$]: 128,
        [r$]: 240
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 255,
        [r$]: 224
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 210,
        [g$]: 250,
        [r$]: 250
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 211,
        [g$]: 211,
        [r$]: 211
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 144,
        [g$]: 238,
        [r$]: 144
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 193,
        [g$]: 182,
        [r$]: 255
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 122,
        [g$]: 160,
        [r$]: 255
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 170,
        [g$]: 178,
        [r$]: 32
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 250,
        [g$]: 206,
        [r$]: 135
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 153,
        [g$]: 136,
        [r$]: 119
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 222,
        [g$]: 196,
        [r$]: 176
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 224,
        [g$]: 255,
        [r$]: 255
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 255,
        [r$]: 0
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 50,
        [g$]: 205,
        [r$]: 50
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 230,
        [g$]: 240,
        [r$]: 250
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 0,
        [r$]: 128
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 170,
        [g$]: 205,
        [r$]: 102
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 205,
        [g$]: 0,
        [r$]: 0
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 211,
        [g$]: 85,
        [r$]: 186
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 219,
        [g$]: 112,
        [r$]: 147
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 113,
        [g$]: 179,
        [r$]: 60
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 238,
        [g$]: 104,
        [r$]: 123
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 154,
        [g$]: 250,
        [r$]: 0
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 204,
        [g$]: 209,
        [r$]: 72
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 133,
        [g$]: 21,
        [r$]: 199
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 112,
        [g$]: 25,
        [r$]: 25
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 250,
        [g$]: 255,
        [r$]: 245
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 225,
        [g$]: 228,
        [r$]: 255
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 181,
        [g$]: 228,
        [r$]: 255
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 173,
        [g$]: 222,
        [r$]: 255
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 128,
        [g$]: 0,
        [r$]: 0
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 230,
        [g$]: 245,
        [r$]: 253
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 128,
        [r$]: 128
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 35,
        [g$]: 142,
        [r$]: 107
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 165,
        [r$]: 255
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 69,
        [r$]: 255
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 214,
        [g$]: 112,
        [r$]: 218
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 170,
        [g$]: 232,
        [r$]: 238
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 152,
        [g$]: 251,
        [r$]: 152
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 238,
        [g$]: 238,
        [r$]: 175
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 147,
        [g$]: 112,
        [r$]: 219
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 213,
        [g$]: 239,
        [r$]: 255
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 185,
        [g$]: 218,
        [r$]: 255
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 63,
        [g$]: 133,
        [r$]: 205
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 203,
        [g$]: 192,
        [r$]: 255
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 221,
        [g$]: 160,
        [r$]: 221
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 230,
        [g$]: 224,
        [r$]: 176
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 128,
        [g$]: 0,
        [r$]: 128
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 153,
        [g$]: 51,
        [r$]: 102
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 0,
        [r$]: 255
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 143,
        [g$]: 143,
        [r$]: 188
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 225,
        [g$]: 105,
        [r$]: 65
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 19,
        [g$]: 69,
        [r$]: 139
      });
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 114,
        [g$]: 128,
        [r$]: 250
      });
    },
    get C121() {
      return C[121] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 96,
        [g$]: 164,
        [r$]: 244
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 87,
        [g$]: 139,
        [r$]: 46
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 238,
        [g$]: 245,
        [r$]: 255
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 45,
        [g$]: 82,
        [r$]: 160
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 192,
        [g$]: 192,
        [r$]: 192
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 235,
        [g$]: 206,
        [r$]: 135
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 205,
        [g$]: 90,
        [r$]: 106
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 144,
        [g$]: 128,
        [r$]: 112
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 250,
        [g$]: 250,
        [r$]: 255
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 127,
        [g$]: 255,
        [r$]: 0
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 180,
        [g$]: 130,
        [r$]: 70
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 140,
        [g$]: 180,
        [r$]: 210
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 128,
        [g$]: 128,
        [r$]: 0
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 216,
        [g$]: 191,
        [r$]: 216
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 71,
        [g$]: 99,
        [r$]: 255
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 208,
        [g$]: 224,
        [r$]: 64
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 238,
        [g$]: 130,
        [r$]: 238
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 179,
        [g$]: 222,
        [r$]: 245
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 255,
        [g$]: 255,
        [r$]: 255
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 245,
        [g$]: 245,
        [r$]: 245
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 0,
        [g$]: 255,
        [r$]: 255
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: color$.RgbColor.prototype,
        [b$0]: 50,
        [g$]: 205,
        [r$]: 154
      });
    },
    get C3() {
      return C[3] = dart.constMap(T.StringL(), T.RgbColorL(), ["aliceblue", C[4] || CT.C4, "antiquewhite", C[5] || CT.C5, "aqua", C[6] || CT.C6, "aquamarine", C[7] || CT.C7, "azure", C[8] || CT.C8, "beige", C[9] || CT.C9, "bisque", C[10] || CT.C10, "black", C[11] || CT.C11, "blanchedalmond", C[12] || CT.C12, "blue", C[13] || CT.C13, "blueviolet", C[14] || CT.C14, "brown", C[15] || CT.C15, "burlywood", C[16] || CT.C16, "cadetblue", C[17] || CT.C17, "chartreuse", C[18] || CT.C18, "chocolate", C[19] || CT.C19, "coral", C[20] || CT.C20, "cornflowerblue", C[21] || CT.C21, "cornsilk", C[22] || CT.C22, "crimson", C[23] || CT.C23, "cyan", C[6] || CT.C6, "darkblue", C[24] || CT.C24, "darkcyan", C[25] || CT.C25, "darkgoldenrod", C[26] || CT.C26, "darkgray", C[27] || CT.C27, "darkgreen", C[28] || CT.C28, "darkgrey", C[27] || CT.C27, "darkkhaki", C[29] || CT.C29, "darkmagenta", C[30] || CT.C30, "darkolivegreen", C[31] || CT.C31, "darkorange", C[32] || CT.C32, "darkorchid", C[33] || CT.C33, "darkred", C[34] || CT.C34, "darksalmon", C[35] || CT.C35, "darkseagreen", C[36] || CT.C36, "darkslateblue", C[37] || CT.C37, "darkslategray", C[38] || CT.C38, "darkslategrey", C[38] || CT.C38, "darkturquoise", C[39] || CT.C39, "darkviolet", C[40] || CT.C40, "deeppink", C[41] || CT.C41, "deepskyblue", C[42] || CT.C42, "dimgray", C[43] || CT.C43, "dimgrey", C[43] || CT.C43, "dodgerblue", C[44] || CT.C44, "firebrick", C[45] || CT.C45, "floralwhite", C[46] || CT.C46, "forestgreen", C[47] || CT.C47, "fuchsia", C[48] || CT.C48, "gainsboro", C[49] || CT.C49, "ghostwhite", C[50] || CT.C50, "gold", C[51] || CT.C51, "goldenrod", C[52] || CT.C52, "gray", C[53] || CT.C53, "green", C[54] || CT.C54, "greenyellow", C[55] || CT.C55, "grey", C[53] || CT.C53, "honeydew", C[56] || CT.C56, "hotpink", C[57] || CT.C57, "indianred", C[58] || CT.C58, "indigo", C[59] || CT.C59, "ivory", C[60] || CT.C60, "khaki", C[61] || CT.C61, "lavender", C[62] || CT.C62, "lavenderblush", C[63] || CT.C63, "lawngreen", C[64] || CT.C64, "lemonchiffon", C[65] || CT.C65, "lightblue", C[66] || CT.C66, "lightcoral", C[67] || CT.C67, "lightcyan", C[68] || CT.C68, "lightgoldenrodyellow", C[69] || CT.C69, "lightgray", C[70] || CT.C70, "lightgreen", C[71] || CT.C71, "lightgrey", C[70] || CT.C70, "lightpink", C[72] || CT.C72, "lightsalmon", C[73] || CT.C73, "lightseagreen", C[74] || CT.C74, "lightskyblue", C[75] || CT.C75, "lightslategray", C[76] || CT.C76, "lightslategrey", C[76] || CT.C76, "lightsteelblue", C[77] || CT.C77, "lightyellow", C[78] || CT.C78, "lime", C[79] || CT.C79, "limegreen", C[80] || CT.C80, "linen", C[81] || CT.C81, "magenta", C[48] || CT.C48, "maroon", C[82] || CT.C82, "mediumaquamarine", C[83] || CT.C83, "mediumblue", C[84] || CT.C84, "mediumorchid", C[85] || CT.C85, "mediumpurple", C[86] || CT.C86, "mediumseagreen", C[87] || CT.C87, "mediumslateblue", C[88] || CT.C88, "mediumspringgreen", C[89] || CT.C89, "mediumturquoise", C[90] || CT.C90, "mediumvioletred", C[91] || CT.C91, "midnightblue", C[92] || CT.C92, "mintcream", C[93] || CT.C93, "mistyrose", C[94] || CT.C94, "moccasin", C[95] || CT.C95, "navajowhite", C[96] || CT.C96, "navy", C[97] || CT.C97, "oldlace", C[98] || CT.C98, "olive", C[99] || CT.C99, "olivedrab", C[100] || CT.C100, "orange", C[101] || CT.C101, "orangered", C[102] || CT.C102, "orchid", C[103] || CT.C103, "palegoldenrod", C[104] || CT.C104, "palegreen", C[105] || CT.C105, "paleturquoise", C[106] || CT.C106, "palevioletred", C[107] || CT.C107, "papayawhip", C[108] || CT.C108, "peachpuff", C[109] || CT.C109, "peru", C[110] || CT.C110, "pink", C[111] || CT.C111, "plum", C[112] || CT.C112, "powderblue", C[113] || CT.C113, "purple", C[114] || CT.C114, "rebeccapurple", C[115] || CT.C115, "red", C[116] || CT.C116, "rosybrown", C[117] || CT.C117, "royalblue", C[118] || CT.C118, "saddlebrown", C[119] || CT.C119, "salmon", C[120] || CT.C120, "sandybrown", C[121] || CT.C121, "seagreen", C[122] || CT.C122, "seashell", C[123] || CT.C123, "sienna", C[124] || CT.C124, "silver", C[125] || CT.C125, "skyblue", C[126] || CT.C126, "slateblue", C[127] || CT.C127, "slategray", C[128] || CT.C128, "slategrey", C[128] || CT.C128, "snow", C[129] || CT.C129, "springgreen", C[130] || CT.C130, "steelblue", C[131] || CT.C131, "tan", C[132] || CT.C132, "teal", C[133] || CT.C133, "thistle", C[134] || CT.C134, "tomato", C[135] || CT.C135, "turquoise", C[136] || CT.C136, "violet", C[137] || CT.C137, "wheat", C[138] || CT.C138, "white", C[139] || CT.C139, "whitesmoke", C[140] || CT.C140, "yellow", C[141] || CT.C141, "yellowgreen", C[142] || CT.C142]);
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: color$.XyzColor.prototype,
        [z$]: 108.883,
        [y$]: 100,
        [x$]: 95.047
      });
    }
  }, false);
  var C = Array(144).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/color/color.dart",
    "package:color/color.dart",
    "org-dartlang-app:///packages/color/cielab_color.dart",
    "org-dartlang-app:///packages/color/color_filter.dart",
    "org-dartlang-app:///packages/color/color_parser.dart",
    "org-dartlang-app:///packages/color/hex_color.dart",
    "org-dartlang-app:///packages/color/rgb_color.dart",
    "org-dartlang-app:///packages/color/hsl_color.dart",
    "org-dartlang-app:///packages/color/hsv_color.dart",
    "org-dartlang-app:///packages/color/xyz_color.dart"
  ];
  var _convert = dart.privateName(color$, "_convert");
  color$.Color = class Color extends core.Object {
    toHexColor() {
      return this.toRgbColor().toHexColor();
    }
    get hashCode() {
      let rgb = this.toRgbColor();
      return 256 * 256 * rgb.r[$toInt]() + 256 * rgb.g[$toInt]() + rgb.b[$toInt]();
    }
    _equals(other) {
      if (other == null) return false;
      return color$.Color.is(other) && this.hashCode == dart.hashCode(other);
    }
    _get(key) {
      if (key == null) dart.nullFailed(I[0], 53, 26, "key");
      let thisAsMap = this.toMap();
      if (!dart.test(thisAsMap[$containsKey](key))) {
        dart.throw(new core.ArgumentError.new("`" + dart.str(key) + "` is not a valid key for a " + dart.str(this[$runtimeType])));
      }
      return dart.nullCheck(thisAsMap[$_get](key));
    }
    [_convert](colorType) {
      if (colorType == null) dart.nullFailed(I[0], 61, 23, "colorType");
      if (color$.RgbColor.is(colorType)) {
        return this.toRgbColor();
      } else if (color$.HexColor.is(colorType)) {
        return this.toHexColor();
      } else if (color$.HslColor.is(colorType)) {
        return this.toHslColor();
      } else if (color$.HsvColor.is(colorType)) {
        return this.toHsvColor();
      } else if (color$.XyzColor.is(colorType)) {
        return this.toXyzColor();
      } else if (color$.CielabColor.is(colorType)) {
        return this.toCielabColor();
      } else {
        return this;
      }
    }
  };
  (color$.Color.new = function() {
    ;
  }).prototype = color$.Color.prototype;
  dart.addTypeTests(color$.Color);
  dart.addTypeCaches(color$.Color);
  dart.setMethodSignature(color$.Color, () => ({
    __proto__: dart.getMethods(color$.Color.__proto__),
    toHexColor: dart.fnType(color$.HexColor, []),
    _get: dart.fnType(core.num, [core.String]),
    [_convert]: dart.fnType(color$.Color, [core.Type])
  }));
  dart.setLibraryUri(color$.Color, I[1]);
  dart.defineExtensionMethods(color$.Color, ['_equals']);
  dart.defineExtensionAccessors(color$.Color, ['hashCode']);
  var l$ = dart.privateName(color$, "CielabColor.l");
  var a$ = dart.privateName(color$, "CielabColor.a");
  var b$ = dart.privateName(color$, "CielabColor.b");
  color$.CielabColor = class CielabColor extends color$.Color {
    get l() {
      return this[l$];
    }
    set l(value) {
      super.l = value;
    }
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    toRgbColor() {
      let xyz = this.toXyzColor();
      return xyz.toRgbColor();
    }
    toHslColor() {
      return this.toRgbColor().toHslColor();
    }
    toHsvColor() {
      return this.toRgbColor().toHsvColor();
    }
    toXyzColor() {
      let xyz = new (T.IdentityMapOfString$num()).from(["x", dart.notNull(this.a) / 500 + (dart.notNull(this.l) + 16) / 116, "y", (dart.notNull(this.l) + 16) / 116, "z", (dart.notNull(this.l) + 16) / 116 - dart.notNull(this.b) / 200]);
      xyz[$forEach](dart.fn((key, value) => {
        if (key == null) dart.nullFailed(I[2], 26, 18, "key");
        if (value == null) dart.nullFailed(I[2], 26, 23, "value");
        let cube = math.pow(value, 3);
        if (cube > 0.008856) {
          xyz[$_set](key, cube);
        } else {
          xyz[$_set](key, (dart.notNull(value) - 16 / 116) / 7.787);
        }
        xyz[$_set](key, dart.nullCheck(xyz[$_get](key)) * dart.notNull(color$.XyzColor.referenceWhite._get(key)));
      }, T.StringAndnumTovoid()));
      return new color$.XyzColor.new(dart.nullCheck(xyz[$_get]("x")), dart.nullCheck(xyz[$_get]("y")), dart.nullCheck(xyz[$_get]("z")));
    }
    toCielabColor() {
      return this;
    }
    toString() {
      return "l: " + dart.str(this.l) + ", a: " + dart.str(this.a) + ", b: " + dart.str(this.b);
    }
    toMap() {
      return new (T.IdentityMapOfString$num()).from(["l", this.l, "a", this.a, "b", this.b]);
    }
  };
  (color$.CielabColor.new = function(l, a, b) {
    if (l == null) dart.nullFailed(I[2], 8, 26, "l");
    if (a == null) dart.nullFailed(I[2], 8, 34, "a");
    if (b == null) dart.nullFailed(I[2], 8, 42, "b");
    this[l$] = l;
    this[a$] = a;
    this[b$] = b;
    color$.CielabColor.__proto__.new.call(this);
    ;
  }).prototype = color$.CielabColor.prototype;
  dart.addTypeTests(color$.CielabColor);
  dart.addTypeCaches(color$.CielabColor);
  dart.setMethodSignature(color$.CielabColor, () => ({
    __proto__: dart.getMethods(color$.CielabColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toHsvColor: dart.fnType(color$.HsvColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setLibraryUri(color$.CielabColor, I[1]);
  dart.setFieldSignature(color$.CielabColor, () => ({
    __proto__: dart.getFields(color$.CielabColor.__proto__),
    l: dart.finalFieldType(core.num),
    a: dart.finalFieldType(core.num),
    b: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.CielabColor, ['toString']);
  var filterFunction$ = dart.privateName(color$, "ColorFilter.filterFunction");
  var baseType$ = dart.privateName(color$, "ColorFilter.baseType");
  color$.ColorFilter = class ColorFilter extends core.Object {
    get filterFunction() {
      return this[filterFunction$];
    }
    set filterFunction(value) {
      super.filterFunction = value;
    }
    get baseType() {
      return this[baseType$];
    }
    set baseType(value) {
      super.baseType = value;
    }
    call(color, args) {
      let t1, t0, t1$, t0$;
      if (color == null) dart.nullFailed(I[3], 59, 20, "color");
      if (args == null) dart.nullFailed(I[3], 59, 37, "args");
      if (this.baseType != null) {
        let startingColorSpace = dart.runtimeType(color);
        color = color[_convert](dart.nullCheck(this.baseType));
        color = (t0 = color, t1 = args, this.filterFunction(t0, t1));
        return color[_convert](startingColorSpace);
      }
      t0$ = color;
      t1$ = args;
      return this.filterFunction(t0$, t1$);
    }
  };
  (color$.ColorFilter.new = function(filterFunction, baseType = null) {
    if (filterFunction == null) dart.nullFailed(I[3], 9, 20, "filterFunction");
    this[filterFunction$] = filterFunction;
    this[baseType$] = baseType;
    ;
  }).prototype = color$.ColorFilter.prototype;
  dart.addTypeTests(color$.ColorFilter);
  dart.addTypeCaches(color$.ColorFilter);
  dart.setMethodSignature(color$.ColorFilter, () => ({
    __proto__: dart.getMethods(color$.ColorFilter.__proto__),
    call: dart.fnType(color$.Color, [color$.Color, core.List$(core.num)])
  }));
  dart.setLibraryUri(color$.ColorFilter, I[1]);
  dart.setFieldSignature(color$.ColorFilter, () => ({
    __proto__: dart.getFields(color$.ColorFilter.__proto__),
    filterFunction: dart.finalFieldType(dart.fnType(color$.Color, [color$.Color], [core.List$(core.num)])),
    baseType: dart.finalFieldType(dart.nullable(core.Type))
  }));
  dart.defineLazy(color$.ColorFilter, {
    /*color$.ColorFilter.identity*/get identity() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args = C[0] || CT.C0) => {
        if (inputColor == null) dart.nullFailed(I[3], 11, 52, "inputColor");
        if (args == null) dart.nullFailed(I[3], 11, 75, "args");
        return inputColor;
      }, T.ColorAndListOfnumToColor()));
    },
    set identity(_) {},
    /*color$.ColorFilter.lighten*/get lighten() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args = C[0] || CT.C0) => {
        if (inputColor == null) dart.nullFailed(I[3], 16, 51, "inputColor");
        if (args == null) dart.nullFailed(I[3], 16, 74, "args");
        let color = inputColor.toCielabColor();
        let percent = 0.1;
        if (dart.test(args[$isNotEmpty])) {
          percent = args[$_get](0);
        }
        return new color$.CielabColor.new(dart.notNull(color.l) * (1 + dart.notNull(percent)), color.a, color.b);
      }, T.ColorAndListOfnumToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set lighten(_) {},
    /*color$.ColorFilter.darken*/get darken() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args = C[0] || CT.C0) => {
        if (inputColor == null) dart.nullFailed(I[3], 26, 50, "inputColor");
        if (args == null) dart.nullFailed(I[3], 26, 73, "args");
        let color = inputColor.toCielabColor();
        let percent = 0.1;
        if (dart.test(args[$isNotEmpty])) {
          percent = args[$_get](0);
        }
        return new color$.CielabColor.new(dart.notNull(color.l) * (1 - dart.notNull(percent)), color.a, color.b);
      }, T.ColorAndListOfnumToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set darken(_) {},
    /*color$.ColorFilter.sepia*/get sepia() {
      return new color$.ColorFilter.new(dart.fn((baseColor, args = C[0] || CT.C0) => {
        if (baseColor == null) dart.nullFailed(I[3], 36, 49, "baseColor");
        if (args == null) dart.nullFailed(I[3], 36, 71, "args");
        let color = baseColor.toRgbColor();
        return new color$.RgbColor.new(math.min(core.num, 255, dart.notNull(color.r) * 0.393 + dart.notNull(color.g) * 0.769 + dart.notNull(color.b) * 0.189), math.min(core.num, 255, dart.notNull(color.r) * 0.349 + dart.notNull(color.g) * 0.686 + dart.notNull(color.b) * 0.168), math.min(core.num, 255, dart.notNull(color.r) * 0.272 + dart.notNull(color.g) * 0.534 + dart.notNull(color.b) * 0.131)).toCielabColor();
      }, T.ColorAndListOfnumToCielabColor()), dart.wrapType(color$.RgbColor));
    },
    set sepia(_) {},
    /*color$.ColorFilter.greyscale*/get greyscale() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args = C[0] || CT.C0) => {
        if (inputColor == null) dart.nullFailed(I[3], 46, 53, "inputColor");
        if (args == null) dart.nullFailed(I[3], 46, 76, "args");
        let color = inputColor.toCielabColor();
        let rgbLevel = dart.notNull(color.l) * 255 / 100;
        return new color$.RgbColor.new(rgbLevel, rgbLevel, rgbLevel).toCielabColor();
      }, T.ColorAndListOfnumToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set greyscale(_) {},
    /*color$.ColorFilter.invert*/get invert() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args = C[0] || CT.C0) => {
        if (inputColor == null) dart.nullFailed(I[3], 53, 50, "inputColor");
        if (args == null) dart.nullFailed(I[3], 53, 73, "args");
        let color = inputColor.toCielabColor();
        return new color$.CielabColor.new(100 - dart.notNull(color.l), -1 * dart.notNull(color.a), -1 * dart.notNull(color.b));
      }, T.ColorAndListOfnumToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set invert(_) {}
  }, false);
  var _parseRgb = dart.privateName(color$, "_parseRgb");
  var _parseHex = dart.privateName(color$, "_parseHex");
  var _parseHsl = dart.privateName(color$, "_parseHsl");
  var _parseNamed = dart.privateName(color$, "_parseNamed");
  color$.ColorParser = class ColorParser extends core.Object {
    parse(toParse, opts) {
      let t0, t0$, t0$0, t0$1;
      if (toParse == null) dart.nullFailed(I[4], 11, 23, "toParse");
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      orElse == null ? orElse = dart.fn(() => null, T.VoidToNull()) : null;
      toParse = toParse[$trim]();
      return T.ColorN().as((t0$1 = (t0$0 = (t0$ = (t0 = this[_parseRgb](toParse), t0 == null ? this[_parseHex](toParse) : t0), t0$ == null ? this[_parseHsl](toParse) : t0$), t0$0 == null ? this[_parseNamed](toParse) : t0$0), t0$1 == null ? orElse() : t0$1));
    }
    [_parseHex](toParse) {
      if (toParse == null) dart.nullFailed(I[4], 17, 30, "toParse");
      if (dart.test(color$.ColorParser._hexColorRegExp.hasMatch(toParse))) {
        return color$.HexColor.new(toParse);
      }
      if (dart.test(color$.ColorParser._hexColorAbbreviatedRegExp.hasMatch(toParse))) {
        let _unAbbreviated = core.String.fromCharCodes(toParse[$replaceFirst](color$.ColorParser._beginsHash, "")[$codeUnits][$map](T.ListOfint(), dart.fn(c => {
          if (c == null) dart.nullFailed(I[4], 23, 102, "c");
          return T.JSArrayOfint().of([c, c]);
        }, T.intToListOfint()))[$expand](core.int, dart.fn(c => {
          if (c == null) dart.nullFailed(I[4], 23, 124, "c");
          return c;
        }, T.ListOfintToListOfint())));
        return color$.HexColor.new(_unAbbreviated);
      }
      return null;
    }
    [_parseHsl](toParse) {
      let t0, t0$;
      if (toParse == null) dart.nullFailed(I[4], 30, 30, "toParse");
      if (dart.test(color$.ColorParser._hslColorRegExp.hasMatch(toParse))) {
        let match = color$.ColorParser._hslColorRegExp.firstMatch(toParse);
        if (match != null && match.groupCount === 5) {
          return new color$.HslColor.new(core.int.parse(dart.nullCheck(match.group(1))), core.double.parse((t0 = match.group(2), t0 == null ? dart.nullCheck(match.group(3)) : t0)), core.double.parse((t0$ = match.group(4), t0$ == null ? dart.nullCheck(match.group(5)) : t0$)));
        }
      }
      return null;
    }
    [_parseRgb](toParse) {
      if (toParse == null) dart.nullFailed(I[4], 41, 30, "toParse");
      if (dart.test(color$.ColorParser._rgbColorImplicitRegExp.hasMatch(toParse))) {
        let match = color$.ColorParser._rgbColorImplicitRegExp.firstMatch(toParse);
        if (match != null && match.groupCount === 3) {
          return new color$.RgbColor.new(core.int.parse(dart.nullCheck(match.group(1))), core.int.parse(dart.nullCheck(match.group(2))), core.int.parse(dart.nullCheck(match.group(3))));
        }
      }
      if (dart.test(color$.ColorParser._rgbColorExplicitRegExp.hasMatch(toParse))) {
        let match = color$.ColorParser._rgbColorExplicitRegExp.firstMatch(toParse);
        if (match != null && match.groupCount === 3) {
          return new color$.RgbColor.new(core.int.parse(dart.nullCheck(match.group(1))), core.int.parse(dart.nullCheck(match.group(2))), core.int.parse(dart.nullCheck(match.group(3))));
        }
      }
      return null;
    }
    [_parseNamed](toParse) {
      if (toParse == null) dart.nullFailed(I[4], 59, 32, "toParse");
      try {
        return color$.RgbColor.name_(toParse[$toLowerCase]());
      } catch (e) {
        let argumentError = dart.getThrown(e);
        if (core.Object.is(argumentError)) {
          return null;
        } else
          throw e;
      }
    }
  };
  (color$.ColorParser.new = function() {
    ;
  }).prototype = color$.ColorParser.prototype;
  dart.addTypeTests(color$.ColorParser);
  dart.addTypeCaches(color$.ColorParser);
  dart.setMethodSignature(color$.ColorParser, () => ({
    __proto__: dart.getMethods(color$.ColorParser.__proto__),
    parse: dart.fnType(dart.nullable(color$.Color), [core.String], {orElse: dart.nullable(dart.fnType(dart.nullable(color$.Color), []))}, {}),
    [_parseHex]: dart.fnType(dart.nullable(color$.HexColor), [core.String]),
    [_parseHsl]: dart.fnType(dart.nullable(color$.HslColor), [core.String]),
    [_parseRgb]: dart.fnType(dart.nullable(color$.RgbColor), [core.String]),
    [_parseNamed]: dart.fnType(dart.nullable(color$.RgbColor), [core.String])
  }));
  dart.setLibraryUri(color$.ColorParser, I[1]);
  dart.defineLazy(color$.ColorParser, {
    /*color$.ColorParser._beginsHash*/get _beginsHash() {
      return core.RegExp.new("^#");
    },
    /*color$.ColorParser._hexColorRegExp*/get _hexColorRegExp() {
      return core.RegExp.new("^#?([\\da-fA-F]{6})$");
    },
    /*color$.ColorParser._hexColorAbbreviatedRegExp*/get _hexColorAbbreviatedRegExp() {
      return core.RegExp.new("^#?([\\da-fA-F]{3})$");
    },
    /*color$.ColorParser._rgbColorImplicitRegExp*/get _rgbColorImplicitRegExp() {
      return core.RegExp.new("^(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})$");
    },
    /*color$.ColorParser._rgbColorExplicitRegExp*/get _rgbColorExplicitRegExp() {
      return core.RegExp.new("^rgb\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$");
    },
    /*color$.ColorParser._hslColorRegExp*/get _hslColorRegExp() {
      return core.RegExp.new("^hsl\\(\\s*(\\d{1,3})\\s*,\\s*(\\d+(\\.\\d*)?|\\.\\d+)%\\s*,\\s*(\\d+(\\.\\d*)?|\\.\\d+)%\\s*\\)$");
    }
  }, false);
  color$.CssColorSpace = class CssColorSpace extends core.Object {};
  (color$.CssColorSpace.new = function() {
    ;
  }).prototype = color$.CssColorSpace.prototype;
  dart.addTypeTests(color$.CssColorSpace);
  dart.addTypeCaches(color$.CssColorSpace);
  dart.setLibraryUri(color$.CssColorSpace, I[1]);
  var r$ = dart.privateName(color$, "RgbColor.r");
  var g$ = dart.privateName(color$, "RgbColor.g");
  var b$0 = dart.privateName(color$, "RgbColor.b");
  color$.RgbColor = class RgbColor extends color$.Color {
    get r() {
      return this[r$];
    }
    set r(value) {
      super.r = value;
    }
    get g() {
      return this[g$];
    }
    set g(value) {
      super.g = value;
    }
    get b() {
      return this[b$0];
    }
    set b(value) {
      super.b = value;
    }
    static name_(name) {
      if (name == null) dart.nullFailed(I[6], 22, 32, "name");
      if (!dart.test(color$.RgbColor.namedColors[$containsKey](name))) {
        dart.throw(new core.ArgumentError.new("Only the color names defined by the CSS3 spec are supported. See http://www.w3.org/TR/css3-color/#svg-color for a list of valid color names."));
      }
      return dart.nullCheck(color$.RgbColor.namedColors[$_get](name));
    }
    toRgbColor() {
      return this;
    }
    toHslColor() {
      let rf = dart.notNull(this.r) / 255;
      let gf = dart.notNull(this.g) / 255;
      let bf = dart.notNull(this.b) / 255;
      let cMax = T.JSArrayOfdouble().of([rf, gf, bf])[$reduce](dart.gbind(C[1] || CT.C1, core.double));
      let cMin = T.JSArrayOfdouble().of([rf, gf, bf])[$reduce](dart.gbind(C[2] || CT.C2, core.double));
      let delta = dart.notNull(cMax) - dart.notNull(cMin);
      let hue = null;
      let saturation = null;
      let luminance = null;
      if (cMax === rf) {
        hue = 60 * ((gf - bf) / delta)[$modulo](6);
      } else if (cMax === gf) {
        hue = 60 * ((bf - rf) / delta + 2);
      } else {
        hue = 60 * ((rf - gf) / delta + 4);
      }
      if (hue[$isNaN] || hue[$isInfinite]) {
        hue = 0;
      }
      luminance = (dart.notNull(cMax) + dart.notNull(cMin)) / 2;
      if (delta === 0) {
        saturation = 0;
      } else {
        saturation = delta / (1 - (dart.notNull(luminance) * 2 - 1)[$abs]());
      }
      return new color$.HslColor.new(hue, dart.notNull(saturation) * 100, dart.notNull(luminance) * 100);
    }
    toHsvColor() {
      return this.toHslColor().toHsvColor();
    }
    toXyzColor() {
      let rgb = new (T.IdentityMapOfString$num()).from(["r", dart.notNull(this.r) / 255, "g", dart.notNull(this.g) / 255, "b", dart.notNull(this.b) / 255]);
      rgb[$forEach](dart.fn((key, value) => {
        if (key == null) dart.nullFailed(I[6], 75, 18, "key");
        if (value == null) dart.nullFailed(I[6], 75, 23, "value");
        if (dart.notNull(value) > 0.04045) {
          rgb[$_set](key, math.pow((dart.notNull(value) + 0.055) / 1.055, 2.4));
        } else {
          rgb[$_set](key, dart.notNull(value) / 12.92);
        }
        rgb[$_set](key, dart.nullCheck(rgb[$_get](key)) * 100);
      }, T.StringAndnumTovoid()));
      let x = dart.nullCheck(rgb[$_get]("r")) * 0.4124 + dart.nullCheck(rgb[$_get]("g")) * 0.3576 + dart.nullCheck(rgb[$_get]("b")) * 0.1805;
      let y = dart.nullCheck(rgb[$_get]("r")) * 0.2126 + dart.nullCheck(rgb[$_get]("g")) * 0.7152 + dart.nullCheck(rgb[$_get]("b")) * 0.0722;
      let z = dart.nullCheck(rgb[$_get]("r")) * 0.0193 + dart.nullCheck(rgb[$_get]("g")) * 0.1192 + dart.nullCheck(rgb[$_get]("b")) * 0.9505;
      return new color$.XyzColor.new(x, y, z);
    }
    toCielabColor() {
      return this.toXyzColor().toCielabColor();
    }
    toHexColor() {
      return new color$.HexColor.fromRgb(this.r, this.g, this.b);
    }
    toString() {
      return "r: " + dart.str(this.r) + ", g: " + dart.str(this.g) + ", b: " + dart.str(this.b);
    }
    toCssString() {
      return "rgb(" + dart.str(this.r[$toInt]()) + ", " + dart.str(this.g[$toInt]()) + ", " + dart.str(this.b[$toInt]()) + ")";
    }
    toMap() {
      return new (T.IdentityMapOfString$num()).from(["r", this.r, "g", this.g, "b", this.b]);
    }
  };
  (color$.RgbColor.new = function(r, g, b) {
    if (r == null) dart.nullFailed(I[6], 20, 23, "r");
    if (g == null) dart.nullFailed(I[6], 20, 31, "g");
    if (b == null) dart.nullFailed(I[6], 20, 39, "b");
    this[r$] = r;
    this[g$] = g;
    this[b$0] = b;
    color$.RgbColor.__proto__.new.call(this);
    ;
  }).prototype = color$.RgbColor.prototype;
  dart.addTypeTests(color$.RgbColor);
  dart.addTypeCaches(color$.RgbColor);
  color$.RgbColor[dart.implements] = () => [color$.CssColorSpace];
  dart.setMethodSignature(color$.RgbColor, () => ({
    __proto__: dart.getMethods(color$.RgbColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toHsvColor: dart.fnType(color$.HsvColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toCssString: dart.fnType(core.String, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setLibraryUri(color$.RgbColor, I[1]);
  dart.setFieldSignature(color$.RgbColor, () => ({
    __proto__: dart.getFields(color$.RgbColor.__proto__),
    r: dart.finalFieldType(core.num),
    g: dart.finalFieldType(core.num),
    b: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.RgbColor, ['toString']);
  dart.defineLazy(color$.RgbColor, {
    /*color$.RgbColor.rMin*/get rMin() {
      return 0;
    },
    /*color$.RgbColor.gMin*/get gMin() {
      return 0;
    },
    /*color$.RgbColor.bMin*/get bMin() {
      return 0;
    },
    /*color$.RgbColor.rMax*/get rMax() {
      return 255;
    },
    /*color$.RgbColor.gMax*/get gMax() {
      return 255;
    },
    /*color$.RgbColor.bMax*/get bMax() {
      return 255;
    },
    /*color$.RgbColor.namedColors*/get namedColors() {
      return C[3] || CT.C3;
    }
  }, false);
  color$.HexColor = class HexColor extends color$.RgbColor {
    static new(hexCode) {
      if (hexCode == null) dart.nullFailed(I[5], 13, 27, "hexCode");
      if (hexCode[$startsWith]("#")) {
        hexCode = hexCode[$substring](1);
      }
      let hexDigits = hexCode[$split]("");
      let r = core.int.parse(hexDigits[$sublist](0, 2)[$join](), {radix: 16});
      let g = core.int.parse(hexDigits[$sublist](2, 4)[$join](), {radix: 16});
      let b = core.int.parse(hexDigits[$sublist](4)[$join](), {radix: 16});
      return new color$.HexColor.fromRgb(r, g, b);
    }
    get rHex() {
      return this.r[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    get gHex() {
      return this.g[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    get bHex() {
      return this.b[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    toHexColor() {
      return this;
    }
    toString() {
      return dart.str(this.rHex) + dart.str(this.gHex) + dart.str(this.bHex);
    }
    toCssString() {
      return "#" + dart.str(this.rHex) + dart.str(this.gHex) + dart.str(this.bHex);
    }
  };
  (color$.HexColor.fromRgb = function(r, g, b) {
    if (r == null) dart.nullFailed(I[5], 24, 30, "r");
    if (g == null) dart.nullFailed(I[5], 24, 37, "g");
    if (b == null) dart.nullFailed(I[5], 24, 44, "b");
    color$.HexColor.__proto__.new.call(this, r, g, b);
    ;
  }).prototype = color$.HexColor.prototype;
  dart.addTypeTests(color$.HexColor);
  dart.addTypeCaches(color$.HexColor);
  color$.HexColor[dart.implements] = () => [color$.CssColorSpace];
  dart.setGetterSignature(color$.HexColor, () => ({
    __proto__: dart.getGetters(color$.HexColor.__proto__),
    rHex: core.String,
    gHex: core.String,
    bHex: core.String
  }));
  dart.setLibraryUri(color$.HexColor, I[1]);
  dart.defineExtensionMethods(color$.HexColor, ['toString']);
  var h$ = dart.privateName(color$, "HslColor.h");
  var s$ = dart.privateName(color$, "HslColor.s");
  var l$0 = dart.privateName(color$, "HslColor.l");
  color$.HslColor = class HslColor extends color$.Color {
    get h() {
      return this[h$];
    }
    set h(value) {
      super.h = value;
    }
    get s() {
      return this[s$];
    }
    set s(value) {
      super.s = value;
    }
    get l() {
      return this[l$0];
    }
    set l(value) {
      super.l = value;
    }
    toRgbColor() {
      let rgb = T.JSArrayOfnum().of([0, 0, 0]);
      let hue = (dart.notNull(this.h) / 360)[$modulo](1);
      let saturation = dart.notNull(this.s) / 100;
      let luminance = dart.notNull(this.l) / 100;
      if (hue < 1 / 6) {
        rgb[$_set](0, 1);
        rgb[$_set](1, hue * 6);
      } else if (hue < 2 / 6) {
        rgb[$_set](0, 2 - hue * 6);
        rgb[$_set](1, 1);
      } else if (hue < 3 / 6) {
        rgb[$_set](1, 1);
        rgb[$_set](2, hue * 6 - 2);
      } else if (hue < 4 / 6) {
        rgb[$_set](1, 4 - hue * 6);
        rgb[$_set](2, 1);
      } else if (hue < 5 / 6) {
        rgb[$_set](0, hue * 6 - 4);
        rgb[$_set](2, 1);
      } else {
        rgb[$_set](0, 1);
        rgb[$_set](2, 6 - hue * 6);
      }
      rgb = rgb[$map](core.double, dart.fn(val => {
        if (val == null) dart.nullFailed(I[7], 54, 20, "val");
        return dart.notNull(val) + (1 - saturation) * (0.5 - dart.notNull(val));
      }, T.numTodouble()))[$toList]();
      if (luminance < 0.5) {
        rgb = rgb[$map](core.num, dart.fn(val => {
          if (val == null) dart.nullFailed(I[7], 57, 22, "val");
          return luminance * 2 * dart.notNull(val);
        }, T.numTonum()))[$toList]();
      } else {
        rgb = rgb[$map](core.num, dart.fn(val => {
          if (val == null) dart.nullFailed(I[7], 59, 22, "val");
          return luminance * 2 * (1 - dart.notNull(val)) + 2 * dart.notNull(val) - 1;
        }, T.numTonum()))[$toList]();
      }
      rgb = rgb[$map](core.int, dart.fn(val => {
        if (val == null) dart.nullFailed(I[7], 62, 20, "val");
        return (dart.notNull(val) * 255)[$round]();
      }, T.numToint()))[$toList]();
      return new color$.RgbColor.new(rgb[$_get](0), rgb[$_get](1), rgb[$_get](2));
    }
    toHslColor() {
      return this;
    }
    toHsvColor() {
      let hslSaturation = dart.notNull(this.s) / 100;
      let lightness = dart.notNull(this.l) / 100;
      let value = lightness + hslSaturation * math.min(core.num, lightness, 1 - lightness);
      let saturation = value === 0 ? 0 : 2 * (1 - lightness / value);
      return new color$.HsvColor.new(this.h, saturation * 100, value * 100);
    }
    toXyzColor() {
      return this.toRgbColor().toXyzColor();
    }
    toCielabColor() {
      return this.toRgbColor().toXyzColor().toCielabColor();
    }
    toString() {
      return "h: " + dart.str(this.h) + ", s: " + dart.str(this.s) + "%, l: " + dart.str(this.l) + "%";
    }
    toCssString() {
      return "hsl(" + dart.str(this.h) + ", " + dart.str(this.s) + "%, " + dart.str(this.l) + "%)";
    }
    toMap() {
      return new (T.IdentityMapOfString$num()).from(["h", this.h, "s", this.s, "l", this.l]);
    }
  };
  (color$.HslColor.new = function(h, s, l) {
    if (h == null) dart.nullFailed(I[7], 24, 23, "h");
    if (s == null) dart.nullFailed(I[7], 24, 31, "s");
    if (l == null) dart.nullFailed(I[7], 24, 39, "l");
    this[h$] = h;
    this[s$] = s;
    this[l$0] = l;
    color$.HslColor.__proto__.new.call(this);
    ;
  }).prototype = color$.HslColor.prototype;
  dart.addTypeTests(color$.HslColor);
  dart.addTypeCaches(color$.HslColor);
  color$.HslColor[dart.implements] = () => [color$.CssColorSpace];
  dart.setMethodSignature(color$.HslColor, () => ({
    __proto__: dart.getMethods(color$.HslColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toHsvColor: dart.fnType(color$.HsvColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toCssString: dart.fnType(core.String, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setLibraryUri(color$.HslColor, I[1]);
  dart.setFieldSignature(color$.HslColor, () => ({
    __proto__: dart.getFields(color$.HslColor.__proto__),
    h: dart.finalFieldType(core.num),
    s: dart.finalFieldType(core.num),
    l: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.HslColor, ['toString']);
  dart.defineLazy(color$.HslColor, {
    /*color$.HslColor.hMin*/get hMin() {
      return 0;
    },
    /*color$.HslColor.sMin*/get sMin() {
      return 0;
    },
    /*color$.HslColor.lMin*/get lMin() {
      return 0;
    },
    /*color$.HslColor.hMax*/get hMax() {
      return 360;
    },
    /*color$.HslColor.sMax*/get sMax() {
      return 100;
    },
    /*color$.HslColor.lMax*/get lMax() {
      return 100;
    }
  }, false);
  var h$0 = dart.privateName(color$, "HsvColor.h");
  var s$0 = dart.privateName(color$, "HsvColor.s");
  var v$ = dart.privateName(color$, "HsvColor.v");
  color$.HsvColor = class HsvColor extends color$.Color {
    get h() {
      return this[h$0];
    }
    set h(value) {
      super.h = value;
    }
    get s() {
      return this[s$0];
    }
    set s(value) {
      super.s = value;
    }
    get v() {
      return this[v$];
    }
    set v(value) {
      super.v = value;
    }
    abs(value) {
      if (value == null) dart.nullFailed(I[8], 26, 15, "value");
      return dart.notNull(value) >= 0 ? value : -dart.notNull(value);
    }
    toRgbColor() {
      return this.toHslColor().toRgbColor();
    }
    toHslColor() {
      let hsvSaturation = dart.notNull(this.s) / 100;
      let value = dart.notNull(this.v) / 100;
      let lightness = value * (1 - hsvSaturation / 2);
      let saturation = lightness === 0 || lightness === 1 ? 0 : (value - lightness) / math.min(core.num, lightness, 1 - lightness);
      return new color$.HslColor.new(this.h, saturation * 100, lightness * 100);
    }
    toHsvColor() {
      return this;
    }
    toXyzColor() {
      return this.toRgbColor().toXyzColor();
    }
    toCielabColor() {
      return this.toRgbColor().toXyzColor().toCielabColor();
    }
    toString() {
      return "h: " + dart.str(this.h) + ", s: " + dart.str(this.s) + "%, v: " + dart.str(this.v) + "%";
    }
    toMap() {
      return new (T.IdentityMapOfString$num()).from(["h", this.h, "s", this.s, "v", this.v]);
    }
  };
  (color$.HsvColor.new = function(h, s, v) {
    if (h == null) dart.nullFailed(I[8], 24, 23, "h");
    if (s == null) dart.nullFailed(I[8], 24, 31, "s");
    if (v == null) dart.nullFailed(I[8], 24, 39, "v");
    this[h$0] = h;
    this[s$0] = s;
    this[v$] = v;
    color$.HsvColor.__proto__.new.call(this);
    ;
  }).prototype = color$.HsvColor.prototype;
  dart.addTypeTests(color$.HsvColor);
  dart.addTypeCaches(color$.HsvColor);
  dart.setMethodSignature(color$.HsvColor, () => ({
    __proto__: dart.getMethods(color$.HsvColor.__proto__),
    abs: dart.fnType(core.num, [core.num]),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toHsvColor: dart.fnType(color$.HsvColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setLibraryUri(color$.HsvColor, I[1]);
  dart.setFieldSignature(color$.HsvColor, () => ({
    __proto__: dart.getFields(color$.HsvColor.__proto__),
    h: dart.finalFieldType(core.num),
    s: dart.finalFieldType(core.num),
    v: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.HsvColor, ['toString']);
  dart.defineLazy(color$.HsvColor, {
    /*color$.HsvColor.hMin*/get hMin() {
      return 0;
    },
    /*color$.HsvColor.sMin*/get sMin() {
      return 0;
    },
    /*color$.HsvColor.vMin*/get vMin() {
      return 0;
    },
    /*color$.HsvColor.hMax*/get hMax() {
      return 360;
    },
    /*color$.HsvColor.sMax*/get sMax() {
      return 100;
    },
    /*color$.HsvColor.vMax*/get vMax() {
      return 100;
    }
  }, false);
  var x$ = dart.privateName(color$, "XyzColor.x");
  var y$ = dart.privateName(color$, "XyzColor.y");
  var z$ = dart.privateName(color$, "XyzColor.z");
  color$.XyzColor = class XyzColor extends color$.Color {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get z() {
      return this[z$];
    }
    set z(value) {
      super.z = value;
    }
    toRgbColor() {
      let x = dart.notNull(this.x) / 100;
      let y = dart.notNull(this.y) / 100;
      let z = dart.notNull(this.z) / 100;
      let rgb = new (T.IdentityMapOfString$num()).from(["r", x * 3.2406 + y * -1.5372 + z * -0.4986, "g", x * -0.9689 + y * 1.8758 + z * 0.0415, "b", x * 0.0557 + y * -0.204 + z * 1.057]);
      rgb[$forEach](dart.fn((key, value) => {
        if (key == null) dart.nullFailed(I[9], 24, 18, "key");
        if (value == null) dart.nullFailed(I[9], 24, 23, "value");
        if (dart.notNull(value) > 0.0031308) {
          rgb[$_set](key, 1.055 * math.pow(value, 1 / 2.4) - 0.055);
        } else {
          rgb[$_set](key, dart.notNull(value) * 12.92);
        }
        rgb[$_set](key, dart.nullCheck(rgb[$_get](key)) * 255);
      }, T.StringAndnumTovoid()));
      return new color$.RgbColor.new(dart.nullCheck(rgb[$_get]("r")), dart.nullCheck(rgb[$_get]("g")), dart.nullCheck(rgb[$_get]("b")));
    }
    toHslColor() {
      return this.toRgbColor().toHslColor();
    }
    toHsvColor() {
      return this.toRgbColor().toHsvColor();
    }
    toXyzColor() {
      return this;
    }
    toCielabColor() {
      let lab = new (T.IdentityMapOfString$num()).new();
      let xyz = new (T.IdentityMapOfString$num()).new();
      this.toMap()[$forEach](dart.fn((key, value) => {
        if (key == null) dart.nullFailed(I[9], 50, 29, "key");
        if (value == null) dart.nullFailed(I[9], 50, 38, "value");
        value = dart.notNull(value) / dart.notNull(color$.XyzColor.referenceWhite._get(key));
        if (dart.notNull(value) > 0.008856) {
          value = math.pow(value, 1 / 3);
        } else {
          value = 7.787 * dart.notNull(value) + 16 / 116;
        }
        xyz[$_set](key, value);
      }, T.StringAndnumTovoid()));
      lab[$_set]("l", 116 * dart.nullCheck(xyz[$_get]("y")) - 16);
      lab[$_set]("a", 500 * (dart.nullCheck(xyz[$_get]("x")) - dart.nullCheck(xyz[$_get]("y"))));
      lab[$_set]("b", 200 * (dart.nullCheck(xyz[$_get]("y")) - dart.nullCheck(xyz[$_get]("z"))));
      return new color$.CielabColor.new(dart.nullCheck(lab[$_get]("l")), dart.nullCheck(lab[$_get]("a")), dart.nullCheck(lab[$_get]("b")));
    }
    toString() {
      return "x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ", z: " + dart.str(this.z);
    }
    toMap() {
      return new (T.IdentityMapOfString$num()).from(["x", this.x, "y", this.y, "z", this.z]);
    }
  };
  (color$.XyzColor.new = function(x, y, z) {
    if (x == null) dart.nullFailed(I[9], 10, 23, "x");
    if (y == null) dart.nullFailed(I[9], 10, 31, "y");
    if (z == null) dart.nullFailed(I[9], 10, 39, "z");
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    color$.XyzColor.__proto__.new.call(this);
    ;
  }).prototype = color$.XyzColor.prototype;
  dart.addTypeTests(color$.XyzColor);
  dart.addTypeCaches(color$.XyzColor);
  dart.setMethodSignature(color$.XyzColor, () => ({
    __proto__: dart.getMethods(color$.XyzColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toHsvColor: dart.fnType(color$.HsvColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setLibraryUri(color$.XyzColor, I[1]);
  dart.setFieldSignature(color$.XyzColor, () => ({
    __proto__: dart.getFields(color$.XyzColor.__proto__),
    x: dart.finalFieldType(core.num),
    y: dart.finalFieldType(core.num),
    z: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.XyzColor, ['toString']);
  dart.defineLazy(color$.XyzColor, {
    /*color$.XyzColor.referenceWhite*/get referenceWhite() {
      return C[143] || CT.C143;
    }
  }, false);
  dart.trackLibraries("packages/color/color", {
    "package:color/color.dart": color$
  }, {
    "package:color/color.dart": ["cielab_color.dart", "color_filter.dart", "color_parser.dart", "css_color_space.dart", "hex_color.dart", "hsl_color.dart", "hsv_color.dart", "rgb_color.dart", "xyz_color.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["color.dart","cielab_color.dart","color_filter.dart","color_parser.dart","css_color_space.dart","rgb_color.dart","hex_color.dart","hsl_color.dart","hsv_color.dart","xyz_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"color.unsound.ddc.js"}');
  // Exports:
  return {
    color: color$
  };
}));

//# sourceMappingURL=color.unsound.ddc.js.map
