define(['dart_sdk'], (function load__packages__memoize__memoize(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var memoize = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  memoize.memo0 = function memo0(R, func) {
    let prevResult = null;
    let isInitial = true;
    return dart.fn(() => {
      if (!isInitial) {
        return prevResult;
      } else {
        prevResult = func();
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), []));
  };
  memoize.memo1 = function memo1(A, R, func) {
    let prevArg = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn(arg => {
      if (!isInitial && dart.equals(arg, prevArg)) {
        return prevResult;
      } else {
        prevArg = arg;
        prevResult = func(arg);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A)]));
  };
  memoize.memo2 = function memo2(A, B, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevResult = func(argA, argB);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B)]));
  };
  memoize.memo3 = function memo3(A, B, C, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevResult = func(argA, argB, argC);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C)]));
  };
  memoize.memo4 = function memo4(A, B, C, D, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevResult = func(argA, argB, argC, argD);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D)]));
  };
  memoize.memo5 = function memo5(A, B, C, D, E, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevResult = func(argA, argB, argC, argD, argE);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E)]));
  };
  memoize.memo6 = function memo6(A, B, C, D, E, F, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevResult = func(argA, argB, argC, argD, argE, argF);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F)]));
  };
  memoize.memo7 = function memo7(A, B, C, D, E, F, G, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G)]));
  };
  memoize.memo8 = function memo8(A, B, C, D, E, F, G, H, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG) && dart.equals(argH, prevArgH)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G), dart.legacy(H)]));
  };
  memoize.memo9 = function memo9(A, B, C, D, E, F, G, H, I, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG) && dart.equals(argH, prevArgH) && dart.equals(argI, prevArgI)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G), dart.legacy(H), dart.legacy(I)]));
  };
  memoize.memo10 = function memo10(A, B, C, D, E, F, G, H, I, J, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevArgJ = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG) && dart.equals(argH, prevArgH) && dart.equals(argI, prevArgI) && dart.equals(argJ, prevArgJ)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevArgJ = argJ;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G), dart.legacy(H), dart.legacy(I), dart.legacy(J)]));
  };
  memoize.imemo1 = function imemo1(A, R, func) {
    let prevArg = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn(arg => {
      if (!isInitial && core.identical(arg, prevArg)) {
        return prevResult;
      } else {
        prevArg = arg;
        prevResult = func(arg);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A)]));
  };
  memoize.imemo2 = function imemo2(A, B, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevResult = func(argA, argB);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B)]));
  };
  memoize.imemo3 = function imemo3(A, B, C, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevResult = func(argA, argB, argC);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C)]));
  };
  memoize.imemo4 = function imemo4(A, B, C, D, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevResult = func(argA, argB, argC, argD);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D)]));
  };
  memoize.imemo5 = function imemo5(A, B, C, D, E, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevResult = func(argA, argB, argC, argD, argE);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E)]));
  };
  memoize.imemo6 = function imemo6(A, B, C, D, E, F, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevResult = func(argA, argB, argC, argD, argE, argF);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F)]));
  };
  memoize.imemo7 = function imemo7(A, B, C, D, E, F, G, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G)]));
  };
  memoize.imemo8 = function imemo8(A, B, C, D, E, F, G, H, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG) && core.identical(argH, prevArgH)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G), dart.legacy(H)]));
  };
  memoize.imemo9 = function imemo9(A, B, C, D, E, F, G, H, I, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG) && core.identical(argH, prevArgH) && core.identical(argI, prevArgI)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G), dart.legacy(H), dart.legacy(I)]));
  };
  memoize.imemo10 = function imemo10(A, B, C, D, E, F, G, H, I, J, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevArgJ = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG) && core.identical(argH, prevArgH) && core.identical(argI, prevArgI) && core.identical(argJ, prevArgJ)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevArgJ = argJ;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(dart.legacy(R), [dart.legacy(A), dart.legacy(B), dart.legacy(C), dart.legacy(D), dart.legacy(E), dart.legacy(F), dart.legacy(G), dart.legacy(H), dart.legacy(I), dart.legacy(J)]));
  };
  dart.trackLibraries("packages/memoize/memoize", {
    "package:memoize/memoize.dart": memoize
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["memoize.dart"],"names":[],"mappings":"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","file":"memoize.unsound.ddc.js"}');
  // Exports:
  return {
    memoize: memoize
  };
}));

//# sourceMappingURL=memoize.unsound.ddc.js.map
