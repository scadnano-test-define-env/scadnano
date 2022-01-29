define(['dart_sdk', 'packages/collection/collection', 'packages/petitparser/src/context/context', 'packages/petitparser/src/parser/action/cast', 'packages/petitparser/src/definition/grammar', 'packages/petitparser/src/parser/repeater/separated_by', 'packages/petitparser/src/parser/action/trimming'], (function load__packages__xml__src__xml__entities__default_mapping(dart_sdk, packages__collection__collection, packages__petitparser__src__context__context, packages__petitparser__src__parser__action__cast, packages__petitparser__src__definition__grammar, packages__petitparser__src__parser__repeater__separated_by, packages__petitparser__src__parser__action__trimming) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const wrappers = packages__collection__collection.src__wrappers;
  const token$ = packages__petitparser__src__context__context.src__core__token;
  const parser = packages__petitparser__src__context__context.src__core__parser;
  const map = packages__petitparser__src__context__context.src__parser__action__map;
  const sequence = packages__petitparser__src__context__context.src__parser__combinator__sequence;
  const choice = packages__petitparser__src__context__context.src__parser__combinator__choice;
  const possessive = packages__petitparser__src__context__context.src__parser__repeater__possessive;
  const any = packages__petitparser__src__context__context.src__parser__predicate__any;
  const optional = packages__petitparser__src__context__context.src__parser__combinator__optional;
  const token = packages__petitparser__src__context__context.src__parser__action__token;
  const result = packages__petitparser__src__context__context.src__context__result;
  const context = packages__petitparser__src__context__context.src__context__context;
  const eof = packages__petitparser__src__parser__action__cast.src__parser__misc__eof;
  const cast = packages__petitparser__src__parser__action__cast.src__parser__action__cast;
  const string = packages__petitparser__src__parser__action__cast.src__parser__predicate__string;
  const pick = packages__petitparser__src__parser__action__cast.src__parser__action__pick;
  const flatten = packages__petitparser__src__parser__action__cast.src__parser__action__flatten;
  const lazy = packages__petitparser__src__parser__action__cast.src__parser__repeater__lazy;
  const pattern = packages__petitparser__src__parser__action__cast.src__parser__character__pattern;
  const reference = packages__petitparser__src__definition__grammar.src__definition__reference;
  const grammar = packages__petitparser__src__definition__grammar.src__definition__grammar;
  const separated_by = packages__petitparser__src__parser__repeater__separated_by.src__parser__repeater__separated_by;
  const whitespace = packages__petitparser__src__parser__action__trimming.src__parser__character__whitespace;
  var cdata = Object.create(dart.library);
  var data = Object.create(dart.library);
  var node = Object.create(dart.library);
  var node_type = Object.create(dart.library);
  var has_xml = Object.create(dart.library);
  var has_writer = Object.create(dart.library);
  var has_visitor = Object.create(dart.library);
  var visitor = Object.create(dart.library);
  var name$ = Object.create(dart.library);
  var token$0 = Object.create(dart.library);
  var simple_name = Object.create(dart.library);
  var namespace$ = Object.create(dart.library);
  var attribute = Object.create(dart.library);
  var attribute_type = Object.create(dart.library);
  var has_parent = Object.create(dart.library);
  var exceptions = Object.create(dart.library);
  var has_name = Object.create(dart.library);
  var prefix_name = Object.create(dart.library);
  var text$ = Object.create(dart.library);
  var processing = Object.create(dart.library);
  var element = Object.create(dart.library);
  var has_children = Object.create(dart.library);
  var node_list = Object.create(dart.library);
  var name_matcher = Object.create(dart.library);
  var has_attributes = Object.create(dart.library);
  var document_fragment = Object.create(dart.library);
  var cache = Object.create(dart.library);
  var parser$ = Object.create(dart.library);
  var document = Object.create(dart.library);
  var doctype = Object.create(dart.library);
  var declaration = Object.create(dart.library);
  var entity_mapping = Object.create(dart.library);
  var default_mapping = Object.create(dart.library);
  var named_entities = Object.create(dart.library);
  var comment = Object.create(dart.library);
  var grammar$ = Object.create(dart.library);
  var production = Object.create(dart.library);
  var character_data_parser = Object.create(dart.library);
  var writer$ = Object.create(dart.library);
  var pretty_writer = Object.create(dart.library);
  var predicate = Object.create(dart.library);
  var has_text = Object.create(dart.library);
  var descendants = Object.create(dart.library);
  var parent = Object.create(dart.library);
  var $where = dartx.where;
  var $map = dartx.map;
  var $join = dartx.join;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var $hashCode = dartx.hashCode;
  var $noSuchMethod = dartx.noSuchMethod;
  var $contains = dartx.contains;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var $first = dartx.first;
  var $keys = dartx.keys;
  var $remove = dartx.remove;
  var $cast = dartx.cast;
  var $codeUnitAt = dartx.codeUnitAt;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $iterator = dartx.iterator;
  var $times = dartx['*'];
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $trim = dartx.trim;
  var $replaceAll = dartx.replaceAll;
  var $last = dartx.last;
  var $reversed = dartx.reversed;
  var $removeLast = dartx.removeLast;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    XmlAttributeL: () => (T.XmlAttributeL = dart.constFn(dart.legacy(attribute.XmlAttribute)))(),
    XmlNodeL: () => (T.XmlNodeL = dart.constFn(dart.legacy(node.XmlNode)))(),
    XmlNodeTobool: () => (T.XmlNodeTobool = dart.constFn(dart.fnType(core.bool, [node.XmlNode])))(),
    XmlNodeToString: () => (T.XmlNodeToString = dart.constFn(dart.fnType(core.String, [node.XmlNode])))(),
    XmlNodeTypeL: () => (T.XmlNodeTypeL = dart.constFn(dart.legacy(node_type.XmlNodeType)))(),
    XmlAttributeTypeL: () => (T.XmlAttributeTypeL = dart.constFn(dart.legacy(attribute_type.XmlAttributeType)))(),
    XmlAttributeToXmlAttribute: () => (T.XmlAttributeToXmlAttribute = dart.constFn(dart.fnType(attribute.XmlAttribute, [attribute.XmlAttribute])))(),
    XmlNodeToXmlNode: () => (T.XmlNodeToXmlNode = dart.constFn(dart.fnType(node.XmlNode, [node.XmlNode])))(),
    XmlNodeListOfXmlAttribute: () => (T.XmlNodeListOfXmlAttribute = dart.constFn(node_list.XmlNodeList$(attribute.XmlAttribute)))(),
    XmlNodeN: () => (T.XmlNodeN = dart.constFn(dart.nullable(node.XmlNode)))(),
    XmlNodeListOfXmlNode: () => (T.XmlNodeListOfXmlNode = dart.constFn(node_list.XmlNodeList$(node.XmlNode)))(),
    XmlHasNameTobool: () => (T.XmlHasNameTobool = dart.constFn(dart.fnType(core.bool, [has_name.XmlHasName])))(),
    XmlCacheOfXmlEntityMapping$Parser: () => (T.XmlCacheOfXmlEntityMapping$Parser = dart.constFn(cache.XmlCache$(entity_mapping.XmlEntityMapping, parser.Parser)))(),
    dynamicToParser: () => (T.dynamicToParser = dart.constFn(dart.fnType(parser.Parser, [dart.dynamic])))(),
    IterableOfXmlNode: () => (T.IterableOfXmlNode = dart.constFn(core.Iterable$(node.XmlNode)))(),
    dynamicToList: () => (T.dynamicToList = dart.constFn(dart.fnType(core.List, [dart.dynamic])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    MatchToString: () => (T.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    JSArrayOfXmlNode: () => (T.JSArrayOfXmlNode = dart.constFn(_interceptors.JSArray$(node.XmlNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], T.XmlAttributeL());
    },
    get C1() {
      return C[1] = dart.constList([], T.XmlNodeL());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.ATTRIBUTE",
        index: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.CDATA",
        index: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.COMMENT",
        index: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.DECLARATION",
        index: 3
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.DOCUMENT_TYPE",
        index: 4
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.DOCUMENT",
        index: 5
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.DOCUMENT_FRAGMENT",
        index: 6
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.ELEMENT",
        index: 7
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.PROCESSING",
        index: 8
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$]: "XmlNodeType.TEXT",
        index: 9
      });
    },
    get C12() {
      return C[12] = dart.constList([C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11], T.XmlNodeTypeL());
    },
    get C13() {
      return C[13] = dart.const(new _js_helper.PrivateSymbol.new('_throwNoParent', _throwNoParent$));
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: attribute_type.XmlAttributeType.prototype,
        [_name$0]: "XmlAttributeType.DOUBLE_QUOTE",
        index: 1
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: attribute_type.XmlAttributeType.prototype,
        [_name$0]: "XmlAttributeType.SINGLE_QUOTE",
        index: 0
      });
    },
    get C16() {
      return C[16] = dart.constList([C[15] || CT.C15, C[14] || CT.C14], T.XmlAttributeTypeL());
    },
    get C17() {
      return C[17] = dart.const(new _js_helper.PrivateSymbol.new('_throwNoParent', _throwNoParent$0));
    },
    get C18() {
      return C[18] = dart.constSet(T.XmlNodeTypeL(), [C[3] || CT.C3, C[4] || CT.C4, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11]);
    },
    get C19() {
      return C[19] = dart.constSet(T.XmlNodeTypeL(), [C[2] || CT.C2]);
    },
    get C20() {
      return C[20] = dart.constSet(T.XmlNodeTypeL(), [C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11]);
    },
    get C21() {
      return C[21] = dart.constMap(T.XmlAttributeTypeL(), T.StringL(), [C[15] || CT.C15, "'", C[14] || CT.C14, "\""]);
    },
    get C22() {
      return C[22] = dart.fn(default_mapping._textReplace, T.MatchToString());
    },
    get C23() {
      return C[23] = dart.fn(default_mapping._singeQuoteAttributeReplace, T.MatchToString());
    },
    get C24() {
      return C[24] = dart.fn(default_mapping._doubleQuoteAttributeReplace, T.MatchToString());
    },
    get C26() {
      return C[26] = dart.constMap(T.StringL(), T.StringL(), ["amp", "&", "apos", "'", "gt", ">", "lt", "<", "quot", "\""]);
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: default_mapping.XmlDefaultEntityMapping.prototype,
        [entities$]: C[26] || CT.C26
      });
    },
    get C27() {
      return C[27] = dart.constMap(T.StringL(), T.StringL(), ["Aacute", "Á", "aacute", "á", "Acirc", "Â", "acirc", "â", "acute", "´", "AElig", "Æ", "aelig", "æ", "Agrave", "À", "agrave", "à", "alefsym", "ℵ", "Alpha", "Α", "alpha", "α", "amp", "&", "and", "∧", "ang", "∠", "apos", "'", "Aring", "Å", "aring", "å", "asymp", "≈", "Atilde", "Ã", "atilde", "ã", "Auml", "Ä", "auml", "ä", "bdquo", "„", "Beta", "Β", "beta", "β", "brvbar", "¦", "bull", "•", "cap", "∩", "Ccedil", "Ç", "ccedil", "ç", "cedil", "¸", "cent", "¢", "Chi", "Χ", "chi", "χ", "circ", "ˆ", "clubs", "♣", "cong", "≅", "copy", "©", "crarr", "↵", "cup", "∪", "curren", "¤", "dagger", "†", "Dagger", "‡", "darr", "↓", "dArr", "⇓", "deg", "°", "Delta", "Δ", "delta", "δ", "diams", "♦", "divide", "÷", "Eacute", "É", "eacute", "é", "Ecirc", "Ê", "ecirc", "ê", "Egrave", "È", "egrave", "è", "empty", "∅", "emsp", " ", "ensp", " ", "Epsilon", "Ε", "epsilon", "ε", "equiv", "≡", "Eta", "Η", "eta", "η", "ETH", "Ð", "eth", "ð", "Euml", "Ë", "euml", "ë", "euro", "€", "exist", "∃", "fnof", "ƒ", "forall", "∀", "frac12", "½", "frac14", "¼", "frac34", "¾", "frasl", "⁄", "Gamma", "Γ", "gamma", "γ", "ge", "≥", "gt", ">", "harr", "↔", "hArr", "⇔", "hearts", "♥", "hellip", "…", "Iacute", "Í", "iacute", "í", "Icirc", "Î", "icirc", "î", "iexcl", "¡", "Igrave", "Ì", "igrave", "ì", "image", "ℑ", "infin", "∞", "int", "∫", "Iota", "Ι", "iota", "ι", "iquest", "¿", "isin", "∈", "Iuml", "Ï", "iuml", "ï", "Kappa", "Κ", "kappa", "κ", "Lambda", "Λ", "lambda", "λ", "lang", "〈", "laquo", "«", "larr", "←", "lArr", "⇐", "lceil", "⌈", "ldquo", "“", "le", "≤", "lfloor", "⌊", "lowast", "∗", "loz", "◊", "lrm", "‎", "lsaquo", "‹", "lsquo", "‘", "lt", "<", "macr", "¯", "mdash", "—", "micro", "µ", "middot", "·", "minus", "−", "Mu", "Μ", "mu", "μ", "nabla", "∇", "nbsp", " ", "ndash", "–", "ne", "≠", "ni", "∋", "not", "¬", "notin", "∉", "nsub", "⊄", "Ntilde", "Ñ", "ntilde", "ñ", "Nu", "Ν", "nu", "ν", "Oacute", "Ó", "oacute", "ó", "Ocirc", "Ô", "ocirc", "ô", "OElig", "Œ", "oelig", "œ", "Ograve", "Ò", "ograve", "ò", "oline", "‾", "Omega", "Ω", "omega", "ω", "Omicron", "Ο", "omicron", "ο", "oplus", "⊕", "or", "∨", "ordf", "ª", "ordm", "º", "Oslash", "Ø", "oslash", "ø", "Otilde", "Õ", "otilde", "õ", "otimes", "⊗", "Ouml", "Ö", "ouml", "ö", "para", "¶", "part", "∂", "permil", "‰", "perp", "⊥", "Phi", "Φ", "phi", "φ", "Pi", "Π", "pi", "π", "piv", "ϖ", "plusmn", "±", "pound", "£", "prime", "′", "Prime", "″", "prod", "∏", "prop", "∝", "Psi", "Ψ", "psi", "ψ", "quot", "\"", "radic", "√", "rang", "〉", "raquo", "»", "rarr", "→", "rArr", "⇒", "rceil", "⌉", "rdquo", "”", "real", "ℜ", "reg", "®", "rfloor", "⌋", "Rho", "Ρ", "rho", "ρ", "rlm", "‏", "rsaquo", "›", "rsquo", "’", "sbquo", "‚", "Scaron", "Š", "scaron", "š", "sdot", "⋅", "sect", "§", "shy", "­", "Sigma", "Σ", "sigma", "σ", "sigmaf", "ς", "sim", "∼", "spades", "♠", "sub", "⊂", "sube", "⊆", "sum", "∑", "sup", "⊃", "sup1", "¹", "sup2", "²", "sup3", "³", "supe", "⊇", "szlig", "ß", "Tau", "Τ", "tau", "τ", "there4", "∴", "Theta", "Θ", "theta", "θ", "thetasym", "ϑ", "thinsp", " ", "THORN", "Þ", "thorn", "þ", "tilde", "˜", "times", "×", "trade", "™", "Uacute", "Ú", "uacute", "ú", "uarr", "↑", "uArr", "⇑", "Ucirc", "Û", "ucirc", "û", "Ugrave", "Ù", "ugrave", "ù", "uml", "¨", "upsih", "ϒ", "Upsilon", "Υ", "upsilon", "υ", "Uuml", "Ü", "uuml", "ü", "weierp", "℘", "Xi", "Ξ", "xi", "ξ", "Yacute", "Ý", "yacute", "ý", "yen", "¥", "yuml", "ÿ", "Yuml", "Ÿ", "Zeta", "Ζ", "zeta", "ζ", "zwj", "‍", "zwnj", "‌"]);
    },
    get C28() {
      return C[28] = dart.constMap(T.StringL(), T.StringL(), ["Aacute", "Á", "aacute", "á", "Abreve", "Ă", "abreve", "ă", "ac", "∾", "acd", "∿", "acE", "∾̳", "Acirc", "Â", "acirc", "â", "acute", "´", "Acy", "А", "acy", "а", "AElig", "Æ", "aelig", "æ", "af", "⁡", "Afr", "𝔄", "afr", "𝔞", "Agrave", "À", "agrave", "à", "alefsym", "ℵ", "aleph", "ℵ", "Alpha", "Α", "alpha", "α", "Amacr", "Ā", "amacr", "ā", "amalg", "⨿", "AMP", "&", "amp", "&", "and", "∧", "And", "⩓", "andand", "⩕", "andd", "⩜", "andslope", "⩘", "andv", "⩚", "ang", "∠", "ange", "⦤", "angle", "∠", "angmsd", "∡", "angmsdaa", "⦨", "angmsdab", "⦩", "angmsdac", "⦪", "angmsdad", "⦫", "angmsdae", "⦬", "angmsdaf", "⦭", "angmsdag", "⦮", "angmsdah", "⦯", "angrt", "∟", "angrtvb", "⊾", "angrtvbd", "⦝", "angsph", "∢", "angst", "Å", "angzarr", "⍼", "Aogon", "Ą", "aogon", "ą", "Aopf", "𝔸", "aopf", "𝕒", "ap", "≈", "apacir", "⩯", "ape", "≊", "apE", "⩰", "apid", "≋", "apos", "'", "ApplyFunction", "⁡", "approx", "≈", "approxeq", "≊", "Aring", "Å", "aring", "å", "Ascr", "𝒜", "ascr", "𝒶", "Assign", "≔", "ast", "*", "asymp", "≈", "asympeq", "≍", "Atilde", "Ã", "atilde", "ã", "Auml", "Ä", "auml", "ä", "awconint", "∳", "awint", "⨑", "backcong", "≌", "backepsilon", "϶", "backprime", "‵", "backsim", "∽", "backsimeq", "⋍", "Backslash", "∖", "Barv", "⫧", "barvee", "⊽", "barwed", "⌅", "Barwed", "⌆", "barwedge", "⌅", "bbrk", "⎵", "bbrktbrk", "⎶", "bcong", "≌", "Bcy", "Б", "bcy", "б", "bdquo", "„", "becaus", "∵", "Because", "∵", "because", "∵", "bemptyv", "⦰", "bepsi", "϶", "bernou", "ℬ", "Bernoullis", "ℬ", "Beta", "Β", "beta", "β", "beth", "ℶ", "between", "≬", "Bfr", "𝔅", "bfr", "𝔟", "bigcap", "⋂", "bigcirc", "◯", "bigcup", "⋃", "bigodot", "⨀", "bigoplus", "⨁", "bigotimes", "⨂", "bigsqcup", "⨆", "bigstar", "★", "bigtriangledown", "▽", "bigtriangleup", "△", "biguplus", "⨄", "bigvee", "⋁", "bigwedge", "⋀", "bkarow", "⤍", "blacklozenge", "⧫", "blacksquare", "▪", "blacktriangle", "▴", "blacktriangledown", "▾", "blacktriangleleft", "◂", "blacktriangleright", "▸", "blank", "␣", "blk12", "▒", "blk14", "░", "blk34", "▓", "block", "█", "bne", "=⃥", "bnequiv", "≡⃥", "bnot", "⌐", "bNot", "⫭", "Bopf", "𝔹", "bopf", "𝕓", "bot", "⊥", "bottom", "⊥", "bowtie", "⋈", "boxbox", "⧉", "boxdl", "┐", "boxdL", "╕", "boxDl", "╖", "boxDL", "╗", "boxdr", "┌", "boxdR", "╒", "boxDr", "╓", "boxDR", "╔", "boxh", "─", "boxH", "═", "boxhd", "┬", "boxHd", "╤", "boxhD", "╥", "boxHD", "╦", "boxhu", "┴", "boxHu", "╧", "boxhU", "╨", "boxHU", "╩", "boxminus", "⊟", "boxplus", "⊞", "boxtimes", "⊠", "boxul", "┘", "boxuL", "╛", "boxUl", "╜", "boxUL", "╝", "boxur", "└", "boxuR", "╘", "boxUr", "╙", "boxUR", "╚", "boxv", "│", "boxV", "║", "boxvh", "┼", "boxvH", "╪", "boxVh", "╫", "boxVH", "╬", "boxvl", "┤", "boxvL", "╡", "boxVl", "╢", "boxVL", "╣", "boxvr", "├", "boxvR", "╞", "boxVr", "╟", "boxVR", "╠", "bprime", "‵", "Breve", "˘", "breve", "˘", "brvbar", "¦", "Bscr", "ℬ", "bscr", "𝒷", "bsemi", "⁏", "bsim", "∽", "bsime", "⋍", "bsol", "\\", "bsolb", "⧅", "bsolhsub", "⟈", "bull", "•", "bullet", "•", "bump", "≎", "bumpe", "≏", "bumpE", "⪮", "Bumpeq", "≎", "bumpeq", "≏", "Cacute", "Ć", "cacute", "ć", "cap", "∩", "Cap", "⋒", "capand", "⩄", "capbrcup", "⩉", "capcap", "⩋", "capcup", "⩇", "capdot", "⩀", "CapitalDifferentialD", "ⅅ", "caps", "∩︀", "caret", "⁁", "caron", "ˇ", "Cayleys", "ℭ", "ccaps", "⩍", "Ccaron", "Č", "ccaron", "č", "Ccedil", "Ç", "ccedil", "ç", "Ccirc", "Ĉ", "ccirc", "ĉ", "Cconint", "∰", "ccups", "⩌", "ccupssm", "⩐", "Cdot", "Ċ", "cdot", "ċ", "cedil", "¸", "Cedilla", "¸", "cemptyv", "⦲", "cent", "¢", "CenterDot", "·", "centerdot", "·", "Cfr", "ℭ", "cfr", "𝔠", "CHcy", "Ч", "chcy", "ч", "check", "✓", "checkmark", "✓", "Chi", "Χ", "chi", "χ", "cir", "○", "circ", "ˆ", "circeq", "≗", "circlearrowleft", "↺", "circlearrowright", "↻", "circledast", "⊛", "circledcirc", "⊚", "circleddash", "⊝", "CircleDot", "⊙", "circledR", "®", "circledS", "Ⓢ", "CircleMinus", "⊖", "CirclePlus", "⊕", "CircleTimes", "⊗", "cire", "≗", "cirE", "⧃", "cirfnint", "⨐", "cirmid", "⫯", "cirscir", "⧂", "ClockwiseContourIntegral", "∲", "CloseCurlyDoubleQuote", "”", "CloseCurlyQuote", "’", "clubs", "♣", "clubsuit", "♣", "colon", ":", "Colon", "∷", "colone", "≔", "Colone", "⩴", "coloneq", "≔", "comma", ",", "commat", "@", "comp", "∁", "compfn", "∘", "complement", "∁", "complexes", "ℂ", "cong", "≅", "congdot", "⩭", "Congruent", "≡", "conint", "∮", "Conint", "∯", "ContourIntegral", "∮", "Copf", "ℂ", "copf", "𝕔", "coprod", "∐", "Coproduct", "∐", "COPY", "©", "copy", "©", "copysr", "℗", "CounterClockwiseContourIntegral", "∳", "crarr", "↵", "cross", "✗", "Cross", "⨯", "Cscr", "𝒞", "cscr", "𝒸", "csub", "⫏", "csube", "⫑", "csup", "⫐", "csupe", "⫒", "ctdot", "⋯", "cudarrl", "⤸", "cudarrr", "⤵", "cuepr", "⋞", "cuesc", "⋟", "cularr", "↶", "cularrp", "⤽", "cup", "∪", "Cup", "⋓", "cupbrcap", "⩈", "CupCap", "≍", "cupcap", "⩆", "cupcup", "⩊", "cupdot", "⊍", "cupor", "⩅", "cups", "∪︀", "curarr", "↷", "curarrm", "⤼", "curlyeqprec", "⋞", "curlyeqsucc", "⋟", "curlyvee", "⋎", "curlywedge", "⋏", "curren", "¤", "curvearrowleft", "↶", "curvearrowright", "↷", "cuvee", "⋎", "cuwed", "⋏", "cwconint", "∲", "cwint", "∱", "cylcty", "⌭", "dagger", "†", "Dagger", "‡", "daleth", "ℸ", "darr", "↓", "Darr", "↡", "dArr", "⇓", "dash", "‐", "dashv", "⊣", "Dashv", "⫤", "dbkarow", "⤏", "dblac", "˝", "Dcaron", "Ď", "dcaron", "ď", "Dcy", "Д", "dcy", "д", "DD", "ⅅ", "dd", "ⅆ", "ddagger", "‡", "ddarr", "⇊", "DDotrahd", "⤑", "ddotseq", "⩷", "deg", "°", "Del", "∇", "Delta", "Δ", "delta", "δ", "demptyv", "⦱", "dfisht", "⥿", "Dfr", "𝔇", "dfr", "𝔡", "dHar", "⥥", "dharl", "⇃", "dharr", "⇂", "DiacriticalAcute", "´", "DiacriticalDot", "˙", "DiacriticalDoubleAcute", "˝", "DiacriticalGrave", "`", "DiacriticalTilde", "˜", "diam", "⋄", "Diamond", "⋄", "diamond", "⋄", "diamondsuit", "♦", "diams", "♦", "die", "¨", "DifferentialD", "ⅆ", "digamma", "ϝ", "disin", "⋲", "div", "÷", "divide", "÷", "divideontimes", "⋇", "divonx", "⋇", "DJcy", "Ђ", "djcy", "ђ", "dlcorn", "⌞", "dlcrop", "⌍", "dollar", "$", "Dopf", "𝔻", "dopf", "𝕕", "Dot", "¨", "dot", "˙", "DotDot", "⃜", "doteq", "≐", "doteqdot", "≑", "DotEqual", "≐", "dotminus", "∸", "dotplus", "∔", "dotsquare", "⊡", "doublebarwedge", "⌆", "DoubleContourIntegral", "∯", "DoubleDot", "¨", "DoubleDownArrow", "⇓", "DoubleLeftArrow", "⇐", "DoubleLeftRightArrow", "⇔", "DoubleLeftTee", "⫤", "DoubleLongLeftArrow", "⟸", "DoubleLongLeftRightArrow", "⟺", "DoubleLongRightArrow", "⟹", "DoubleRightArrow", "⇒", "DoubleRightTee", "⊨", "DoubleUpArrow", "⇑", "DoubleUpDownArrow", "⇕", "DoubleVerticalBar", "∥", "DownArrow", "↓", "downarrow", "↓", "Downarrow", "⇓", "DownArrowBar", "⤓", "DownArrowUpArrow", "⇵", "DownBreve", "̑", "downdownarrows", "⇊", "downharpoonleft", "⇃", "downharpoonright", "⇂", "DownLeftRightVector", "⥐", "DownLeftTeeVector", "⥞", "DownLeftVector", "↽", "DownLeftVectorBar", "⥖", "DownRightTeeVector", "⥟", "DownRightVector", "⇁", "DownRightVectorBar", "⥗", "DownTee", "⊤", "DownTeeArrow", "↧", "drbkarow", "⤐", "drcorn", "⌟", "drcrop", "⌌", "Dscr", "𝒟", "dscr", "𝒹", "DScy", "Ѕ", "dscy", "ѕ", "dsol", "⧶", "Dstrok", "Đ", "dstrok", "đ", "dtdot", "⋱", "dtri", "▿", "dtrif", "▾", "duarr", "⇵", "duhar", "⥯", "dwangle", "⦦", "DZcy", "Џ", "dzcy", "џ", "dzigrarr", "⟿", "Eacute", "É", "eacute", "é", "easter", "⩮", "Ecaron", "Ě", "ecaron", "ě", "ecir", "≖", "Ecirc", "Ê", "ecirc", "ê", "ecolon", "≕", "Ecy", "Э", "ecy", "э", "eDDot", "⩷", "Edot", "Ė", "edot", "ė", "eDot", "≑", "ee", "ⅇ", "efDot", "≒", "Efr", "𝔈", "efr", "𝔢", "eg", "⪚", "Egrave", "È", "egrave", "è", "egs", "⪖", "egsdot", "⪘", "el", "⪙", "Element", "∈", "elinters", "⏧", "ell", "ℓ", "els", "⪕", "elsdot", "⪗", "Emacr", "Ē", "emacr", "ē", "empty", "∅", "emptyset", "∅", "EmptySmallSquare", "◻", "emptyv", "∅", "EmptyVerySmallSquare", "▫", "emsp", " ", "emsp13", " ", "emsp14", " ", "ENG", "Ŋ", "eng", "ŋ", "ensp", " ", "Eogon", "Ę", "eogon", "ę", "Eopf", "𝔼", "eopf", "𝕖", "epar", "⋕", "eparsl", "⧣", "eplus", "⩱", "epsi", "ε", "Epsilon", "Ε", "epsilon", "ε", "epsiv", "ϵ", "eqcirc", "≖", "eqcolon", "≕", "eqsim", "≂", "eqslantgtr", "⪖", "eqslantless", "⪕", "Equal", "⩵", "equals", "=", "EqualTilde", "≂", "equest", "≟", "Equilibrium", "⇌", "equiv", "≡", "equivDD", "⩸", "eqvparsl", "⧥", "erarr", "⥱", "erDot", "≓", "escr", "ℯ", "Escr", "ℰ", "esdot", "≐", "esim", "≂", "Esim", "⩳", "Eta", "Η", "eta", "η", "ETH", "Ð", "eth", "ð", "Euml", "Ë", "euml", "ë", "euro", "€", "excl", "!", "exist", "∃", "Exists", "∃", "expectation", "ℰ", "ExponentialE", "ⅇ", "exponentiale", "ⅇ", "fallingdotseq", "≒", "Fcy", "Ф", "fcy", "ф", "female", "♀", "ffilig", "ﬃ", "fflig", "ﬀ", "ffllig", "ﬄ", "Ffr", "𝔉", "ffr", "𝔣", "filig", "ﬁ", "FilledSmallSquare", "◼", "FilledVerySmallSquare", "▪", "fjlig", "fj", "flat", "♭", "fllig", "ﬂ", "fltns", "▱", "fnof", "ƒ", "Fopf", "𝔽", "fopf", "𝕗", "ForAll", "∀", "forall", "∀", "fork", "⋔", "forkv", "⫙", "Fouriertrf", "ℱ", "fpartint", "⨍", "frac12", "½", "frac13", "⅓", "frac14", "¼", "frac15", "⅕", "frac16", "⅙", "frac18", "⅛", "frac23", "⅔", "frac25", "⅖", "frac34", "¾", "frac35", "⅗", "frac38", "⅜", "frac45", "⅘", "frac56", "⅚", "frac58", "⅝", "frac78", "⅞", "frasl", "⁄", "frown", "⌢", "Fscr", "ℱ", "fscr", "𝒻", "gacute", "ǵ", "Gamma", "Γ", "gamma", "γ", "Gammad", "Ϝ", "gammad", "ϝ", "gap", "⪆", "Gbreve", "Ğ", "gbreve", "ğ", "Gcedil", "Ģ", "Gcirc", "Ĝ", "gcirc", "ĝ", "Gcy", "Г", "gcy", "г", "Gdot", "Ġ", "gdot", "ġ", "ge", "≥", "gE", "≧", "gel", "⋛", "gEl", "⪌", "geq", "≥", "geqq", "≧", "geqslant", "⩾", "ges", "⩾", "gescc", "⪩", "gesdot", "⪀", "gesdoto", "⪂", "gesdotol", "⪄", "gesl", "⋛︀", "gesles", "⪔", "Gfr", "𝔊", "gfr", "𝔤", "gg", "≫", "Gg", "⋙", "ggg", "⋙", "gimel", "ℷ", "GJcy", "Ѓ", "gjcy", "ѓ", "gl", "≷", "gla", "⪥", "glE", "⪒", "glj", "⪤", "gnap", "⪊", "gnapprox", "⪊", "gnE", "≩", "gne", "⪈", "gneq", "⪈", "gneqq", "≩", "gnsim", "⋧", "Gopf", "𝔾", "gopf", "𝕘", "grave", "`", "GreaterEqual", "≥", "GreaterEqualLess", "⋛", "GreaterFullEqual", "≧", "GreaterGreater", "⪢", "GreaterLess", "≷", "GreaterSlantEqual", "⩾", "GreaterTilde", "≳", "gscr", "ℊ", "Gscr", "𝒢", "gsim", "≳", "gsime", "⪎", "gsiml", "⪐", "GT", ">", "gt", ">", "Gt", "≫", "gtcc", "⪧", "gtcir", "⩺", "gtdot", "⋗", "gtlPar", "⦕", "gtquest", "⩼", "gtrapprox", "⪆", "gtrarr", "⥸", "gtrdot", "⋗", "gtreqless", "⋛", "gtreqqless", "⪌", "gtrless", "≷", "gtrsim", "≳", "gvertneqq", "≩︀", "gvnE", "≩︀", "Hacek", "ˇ", "hairsp", " ", "half", "½", "hamilt", "ℋ", "HARDcy", "Ъ", "hardcy", "ъ", "harr", "↔", "hArr", "⇔", "harrcir", "⥈", "harrw", "↭", "Hat", "^", "hbar", "ℏ", "Hcirc", "Ĥ", "hcirc", "ĥ", "hearts", "♥", "heartsuit", "♥", "hellip", "…", "hercon", "⊹", "Hfr", "ℌ", "hfr", "𝔥", "HilbertSpace", "ℋ", "hksearow", "⤥", "hkswarow", "⤦", "hoarr", "⇿", "homtht", "∻", "hookleftarrow", "↩", "hookrightarrow", "↪", "Hopf", "ℍ", "hopf", "𝕙", "horbar", "―", "HorizontalLine", "─", "Hscr", "ℋ", "hscr", "𝒽", "hslash", "ℏ", "Hstrok", "Ħ", "hstrok", "ħ", "HumpDownHump", "≎", "HumpEqual", "≏", "hybull", "⁃", "hyphen", "‐", "Iacute", "Í", "iacute", "í", "ic", "⁣", "Icirc", "Î", "icirc", "î", "Icy", "И", "icy", "и", "Idot", "İ", "IEcy", "Е", "iecy", "е", "iexcl", "¡", "iff", "⇔", "Ifr", "ℑ", "ifr", "𝔦", "Igrave", "Ì", "igrave", "ì", "ii", "ⅈ", "iiiint", "⨌", "iiint", "∭", "iinfin", "⧜", "iiota", "℩", "IJlig", "Ĳ", "ijlig", "ĳ", "Im", "ℑ", "Imacr", "Ī", "imacr", "ī", "image", "ℑ", "ImaginaryI", "ⅈ", "imagline", "ℐ", "imagpart", "ℑ", "imath", "ı", "imof", "⊷", "imped", "Ƶ", "Implies", "⇒", "in", "∈", "incare", "℅", "infin", "∞", "infintie", "⧝", "inodot", "ı", "int", "∫", "Int", "∬", "intcal", "⊺", "integers", "ℤ", "Integral", "∫", "intercal", "⊺", "Intersection", "⋂", "intlarhk", "⨗", "intprod", "⨼", "InvisibleComma", "⁣", "InvisibleTimes", "⁢", "IOcy", "Ё", "iocy", "ё", "Iogon", "Į", "iogon", "į", "Iopf", "𝕀", "iopf", "𝕚", "Iota", "Ι", "iota", "ι", "iprod", "⨼", "iquest", "¿", "Iscr", "ℐ", "iscr", "𝒾", "isin", "∈", "isindot", "⋵", "isinE", "⋹", "isins", "⋴", "isinsv", "⋳", "isinv", "∈", "it", "⁢", "Itilde", "Ĩ", "itilde", "ĩ", "Iukcy", "І", "iukcy", "і", "Iuml", "Ï", "iuml", "ï", "Jcirc", "Ĵ", "jcirc", "ĵ", "Jcy", "Й", "jcy", "й", "Jfr", "𝔍", "jfr", "𝔧", "jmath", "ȷ", "Jopf", "𝕁", "jopf", "𝕛", "Jscr", "𝒥", "jscr", "𝒿", "Jsercy", "Ј", "jsercy", "ј", "Jukcy", "Є", "jukcy", "є", "Kappa", "Κ", "kappa", "κ", "kappav", "ϰ", "Kcedil", "Ķ", "kcedil", "ķ", "Kcy", "К", "kcy", "к", "Kfr", "𝔎", "kfr", "𝔨", "kgreen", "ĸ", "KHcy", "Х", "khcy", "х", "KJcy", "Ќ", "kjcy", "ќ", "Kopf", "𝕂", "kopf", "𝕜", "Kscr", "𝒦", "kscr", "𝓀", "lAarr", "⇚", "Lacute", "Ĺ", "lacute", "ĺ", "laemptyv", "⦴", "lagran", "ℒ", "Lambda", "Λ", "lambda", "λ", "lang", "⟨", "Lang", "⟪", "langd", "⦑", "langle", "⟨", "lap", "⪅", "Laplacetrf", "ℒ", "laquo", "«", "larr", "←", "Larr", "↞", "lArr", "⇐", "larrb", "⇤", "larrbfs", "⤟", "larrfs", "⤝", "larrhk", "↩", "larrlp", "↫", "larrpl", "⤹", "larrsim", "⥳", "larrtl", "↢", "lat", "⪫", "latail", "⤙", "lAtail", "⤛", "late", "⪭", "lates", "⪭︀", "lbarr", "⤌", "lBarr", "⤎", "lbbrk", "❲", "lbrace", "{", "lbrack", "[", "lbrke", "⦋", "lbrksld", "⦏", "lbrkslu", "⦍", "Lcaron", "Ľ", "lcaron", "ľ", "Lcedil", "Ļ", "lcedil", "ļ", "lceil", "⌈", "lcub", "{", "Lcy", "Л", "lcy", "л", "ldca", "⤶", "ldquo", "“", "ldquor", "„", "ldrdhar", "⥧", "ldrushar", "⥋", "ldsh", "↲", "le", "≤", "lE", "≦", "LeftAngleBracket", "⟨", "LeftArrow", "←", "leftarrow", "←", "Leftarrow", "⇐", "LeftArrowBar", "⇤", "LeftArrowRightArrow", "⇆", "leftarrowtail", "↢", "LeftCeiling", "⌈", "LeftDoubleBracket", "⟦", "LeftDownTeeVector", "⥡", "LeftDownVector", "⇃", "LeftDownVectorBar", "⥙", "LeftFloor", "⌊", "leftharpoondown", "↽", "leftharpoonup", "↼", "leftleftarrows", "⇇", "LeftRightArrow", "↔", "leftrightarrow", "↔", "Leftrightarrow", "⇔", "leftrightarrows", "⇆", "leftrightharpoons", "⇋", "leftrightsquigarrow", "↭", "LeftRightVector", "⥎", "LeftTee", "⊣", "LeftTeeArrow", "↤", "LeftTeeVector", "⥚", "leftthreetimes", "⋋", "LeftTriangle", "⊲", "LeftTriangleBar", "⧏", "LeftTriangleEqual", "⊴", "LeftUpDownVector", "⥑", "LeftUpTeeVector", "⥠", "LeftUpVector", "↿", "LeftUpVectorBar", "⥘", "LeftVector", "↼", "LeftVectorBar", "⥒", "leg", "⋚", "lEg", "⪋", "leq", "≤", "leqq", "≦", "leqslant", "⩽", "les", "⩽", "lescc", "⪨", "lesdot", "⩿", "lesdoto", "⪁", "lesdotor", "⪃", "lesg", "⋚︀", "lesges", "⪓", "lessapprox", "⪅", "lessdot", "⋖", "lesseqgtr", "⋚", "lesseqqgtr", "⪋", "LessEqualGreater", "⋚", "LessFullEqual", "≦", "LessGreater", "≶", "lessgtr", "≶", "LessLess", "⪡", "lesssim", "≲", "LessSlantEqual", "⩽", "LessTilde", "≲", "lfisht", "⥼", "lfloor", "⌊", "Lfr", "𝔏", "lfr", "𝔩", "lg", "≶", "lgE", "⪑", "lHar", "⥢", "lhard", "↽", "lharu", "↼", "lharul", "⥪", "lhblk", "▄", "LJcy", "Љ", "ljcy", "љ", "ll", "≪", "Ll", "⋘", "llarr", "⇇", "llcorner", "⌞", "Lleftarrow", "⇚", "llhard", "⥫", "lltri", "◺", "Lmidot", "Ŀ", "lmidot", "ŀ", "lmoust", "⎰", "lmoustache", "⎰", "lnap", "⪉", "lnapprox", "⪉", "lnE", "≨", "lne", "⪇", "lneq", "⪇", "lneqq", "≨", "lnsim", "⋦", "loang", "⟬", "loarr", "⇽", "lobrk", "⟦", "LongLeftArrow", "⟵", "longleftarrow", "⟵", "Longleftarrow", "⟸", "LongLeftRightArrow", "⟷", "longleftrightarrow", "⟷", "Longleftrightarrow", "⟺", "longmapsto", "⟼", "LongRightArrow", "⟶", "longrightarrow", "⟶", "Longrightarrow", "⟹", "looparrowleft", "↫", "looparrowright", "↬", "lopar", "⦅", "Lopf", "𝕃", "lopf", "𝕝", "loplus", "⨭", "lotimes", "⨴", "lowast", "∗", "lowbar", "_", "LowerLeftArrow", "↙", "LowerRightArrow", "↘", "loz", "◊", "lozenge", "◊", "lozf", "⧫", "lpar", "(", "lparlt", "⦓", "lrarr", "⇆", "lrcorner", "⌟", "lrhar", "⇋", "lrhard", "⥭", "lrm", "‎", "lrtri", "⊿", "lsaquo", "‹", "Lscr", "ℒ", "lscr", "𝓁", "Lsh", "↰", "lsh", "↰", "lsim", "≲", "lsime", "⪍", "lsimg", "⪏", "lsqb", "[", "lsquo", "‘", "lsquor", "‚", "Lstrok", "Ł", "lstrok", "ł", "LT", "<", "lt", "<", "Lt", "≪", "ltcc", "⪦", "ltcir", "⩹", "ltdot", "⋖", "lthree", "⋋", "ltimes", "⋉", "ltlarr", "⥶", "ltquest", "⩻", "ltri", "◃", "ltrie", "⊴", "ltrif", "◂", "ltrPar", "⦖", "lurdshar", "⥊", "luruhar", "⥦", "lvertneqq", "≨︀", "lvnE", "≨︀", "macr", "¯", "male", "♂", "malt", "✠", "maltese", "✠", "map", "↦", "Map", "⤅", "mapsto", "↦", "mapstodown", "↧", "mapstoleft", "↤", "mapstoup", "↥", "marker", "▮", "mcomma", "⨩", "Mcy", "М", "mcy", "м", "mdash", "—", "mDDot", "∺", "measuredangle", "∡", "MediumSpace", " ", "Mellintrf", "ℳ", "Mfr", "𝔐", "mfr", "𝔪", "mho", "℧", "micro", "µ", "mid", "∣", "midast", "*", "midcir", "⫰", "middot", "·", "minus", "−", "minusb", "⊟", "minusd", "∸", "minusdu", "⨪", "MinusPlus", "∓", "mlcp", "⫛", "mldr", "…", "mnplus", "∓", "models", "⊧", "Mopf", "𝕄", "mopf", "𝕞", "mp", "∓", "Mscr", "ℳ", "mscr", "𝓂", "mstpos", "∾", "Mu", "Μ", "mu", "μ", "multimap", "⊸", "mumap", "⊸", "nabla", "∇", "Nacute", "Ń", "nacute", "ń", "nang", "∠⃒", "nap", "≉", "napE", "⩰̸", "napid", "≋̸", "napos", "ŉ", "napprox", "≉", "natur", "♮", "natural", "♮", "naturals", "ℕ", "nbsp", " ", "nbump", "≎̸", "nbumpe", "≏̸", "ncap", "⩃", "Ncaron", "Ň", "ncaron", "ň", "Ncedil", "Ņ", "ncedil", "ņ", "ncong", "≇", "ncongdot", "⩭̸", "ncup", "⩂", "Ncy", "Н", "ncy", "н", "ndash", "–", "ne", "≠", "nearhk", "⤤", "nearr", "↗", "neArr", "⇗", "nearrow", "↗", "nedot", "≐̸", "NegativeMediumSpace", "​", "NegativeThickSpace", "​", "NegativeThinSpace", "​", "NegativeVeryThinSpace", "​", "nequiv", "≢", "nesear", "⤨", "nesim", "≂̸", "NestedGreaterGreater", "≫", "NestedLessLess", "≪", "NewLine", "\n", "nexist", "∄", "nexists", "∄", "Nfr", "𝔑", "nfr", "𝔫", "ngE", "≧̸", "nge", "≱", "ngeq", "≱", "ngeqq", "≧̸", "ngeqslant", "⩾̸", "nges", "⩾̸", "nGg", "⋙̸", "ngsim", "≵", "nGt", "≫⃒", "ngt", "≯", "ngtr", "≯", "nGtv", "≫̸", "nharr", "↮", "nhArr", "⇎", "nhpar", "⫲", "ni", "∋", "nis", "⋼", "nisd", "⋺", "niv", "∋", "NJcy", "Њ", "njcy", "њ", "nlarr", "↚", "nlArr", "⇍", "nldr", "‥", "nlE", "≦̸", "nle", "≰", "nleftarrow", "↚", "nLeftarrow", "⇍", "nleftrightarrow", "↮", "nLeftrightarrow", "⇎", "nleq", "≰", "nleqq", "≦̸", "nleqslant", "⩽̸", "nles", "⩽̸", "nless", "≮", "nLl", "⋘̸", "nlsim", "≴", "nLt", "≪⃒", "nlt", "≮", "nltri", "⋪", "nltrie", "⋬", "nLtv", "≪̸", "nmid", "∤", "NoBreak", "⁠", "NonBreakingSpace", " ", "Nopf", "ℕ", "nopf", "𝕟", "not", "¬", "Not", "⫬", "NotCongruent", "≢", "NotCupCap", "≭", "NotDoubleVerticalBar", "∦", "NotElement", "∉", "NotEqual", "≠", "NotEqualTilde", "≂̸", "NotExists", "∄", "NotGreater", "≯", "NotGreaterEqual", "≱", "NotGreaterFullEqual", "≧̸", "NotGreaterGreater", "≫̸", "NotGreaterLess", "≹", "NotGreaterSlantEqual", "⩾̸", "NotGreaterTilde", "≵", "NotHumpDownHump", "≎̸", "NotHumpEqual", "≏̸", "notin", "∉", "notindot", "⋵̸", "notinE", "⋹̸", "notinva", "∉", "notinvb", "⋷", "notinvc", "⋶", "NotLeftTriangle", "⋪", "NotLeftTriangleBar", "⧏̸", "NotLeftTriangleEqual", "⋬", "NotLess", "≮", "NotLessEqual", "≰", "NotLessGreater", "≸", "NotLessLess", "≪̸", "NotLessSlantEqual", "⩽̸", "NotLessTilde", "≴", "NotNestedGreaterGreater", "⪢̸", "NotNestedLessLess", "⪡̸", "notni", "∌", "notniva", "∌", "notnivb", "⋾", "notnivc", "⋽", "NotPrecedes", "⊀", "NotPrecedesEqual", "⪯̸", "NotPrecedesSlantEqual", "⋠", "NotReverseElement", "∌", "NotRightTriangle", "⋫", "NotRightTriangleBar", "⧐̸", "NotRightTriangleEqual", "⋭", "NotSquareSubset", "⊏̸", "NotSquareSubsetEqual", "⋢", "NotSquareSuperset", "⊐̸", "NotSquareSupersetEqual", "⋣", "NotSubset", "⊂⃒", "NotSubsetEqual", "⊈", "NotSucceeds", "⊁", "NotSucceedsEqual", "⪰̸", "NotSucceedsSlantEqual", "⋡", "NotSucceedsTilde", "≿̸", "NotSuperset", "⊃⃒", "NotSupersetEqual", "⊉", "NotTilde", "≁", "NotTildeEqual", "≄", "NotTildeFullEqual", "≇", "NotTildeTilde", "≉", "NotVerticalBar", "∤", "npar", "∦", "nparallel", "∦", "nparsl", "⫽⃥", "npart", "∂̸", "npolint", "⨔", "npr", "⊀", "nprcue", "⋠", "npre", "⪯̸", "nprec", "⊀", "npreceq", "⪯̸", "nrarr", "↛", "nrArr", "⇏", "nrarrc", "⤳̸", "nrarrw", "↝̸", "nrightarrow", "↛", "nRightarrow", "⇏", "nrtri", "⋫", "nrtrie", "⋭", "nsc", "⊁", "nsccue", "⋡", "nsce", "⪰̸", "Nscr", "𝒩", "nscr", "𝓃", "nshortmid", "∤", "nshortparallel", "∦", "nsim", "≁", "nsime", "≄", "nsimeq", "≄", "nsmid", "∤", "nspar", "∦", "nsqsube", "⋢", "nsqsupe", "⋣", "nsub", "⊄", "nsube", "⊈", "nsubE", "⫅̸", "nsubset", "⊂⃒", "nsubseteq", "⊈", "nsubseteqq", "⫅̸", "nsucc", "⊁", "nsucceq", "⪰̸", "nsup", "⊅", "nsupe", "⊉", "nsupE", "⫆̸", "nsupset", "⊃⃒", "nsupseteq", "⊉", "nsupseteqq", "⫆̸", "ntgl", "≹", "Ntilde", "Ñ", "ntilde", "ñ", "ntlg", "≸", "ntriangleleft", "⋪", "ntrianglelefteq", "⋬", "ntriangleright", "⋫", "ntrianglerighteq", "⋭", "Nu", "Ν", "nu", "ν", "num", "#", "numero", "№", "numsp", " ", "nvap", "≍⃒", "nvdash", "⊬", "nvDash", "⊭", "nVdash", "⊮", "nVDash", "⊯", "nvge", "≥⃒", "nvgt", ">⃒", "nvHarr", "⤄", "nvinfin", "⧞", "nvlArr", "⤂", "nvle", "≤⃒", "nvlt", "<⃒", "nvltrie", "⊴⃒", "nvrArr", "⤃", "nvrtrie", "⊵⃒", "nvsim", "∼⃒", "nwarhk", "⤣", "nwarr", "↖", "nwArr", "⇖", "nwarrow", "↖", "nwnear", "⤧", "Oacute", "Ó", "oacute", "ó", "oast", "⊛", "ocir", "⊚", "Ocirc", "Ô", "ocirc", "ô", "Ocy", "О", "ocy", "о", "odash", "⊝", "Odblac", "Ő", "odblac", "ő", "odiv", "⨸", "odot", "⊙", "odsold", "⦼", "OElig", "Œ", "oelig", "œ", "ofcir", "⦿", "Ofr", "𝔒", "ofr", "𝔬", "ogon", "˛", "Ograve", "Ò", "ograve", "ò", "ogt", "⧁", "ohbar", "⦵", "ohm", "Ω", "oint", "∮", "olarr", "↺", "olcir", "⦾", "olcross", "⦻", "oline", "‾", "olt", "⧀", "Omacr", "Ō", "omacr", "ō", "Omega", "Ω", "omega", "ω", "Omicron", "Ο", "omicron", "ο", "omid", "⦶", "ominus", "⊖", "Oopf", "𝕆", "oopf", "𝕠", "opar", "⦷", "OpenCurlyDoubleQuote", "“", "OpenCurlyQuote", "‘", "operp", "⦹", "oplus", "⊕", "or", "∨", "Or", "⩔", "orarr", "↻", "ord", "⩝", "order", "ℴ", "orderof", "ℴ", "ordf", "ª", "ordm", "º", "origof", "⊶", "oror", "⩖", "orslope", "⩗", "orv", "⩛", "oS", "Ⓢ", "oscr", "ℴ", "Oscr", "𝒪", "Oslash", "Ø", "oslash", "ø", "osol", "⊘", "Otilde", "Õ", "otilde", "õ", "otimes", "⊗", "Otimes", "⨷", "otimesas", "⨶", "Ouml", "Ö", "ouml", "ö", "ovbar", "⌽", "OverBar", "‾", "OverBrace", "⏞", "OverBracket", "⎴", "OverParenthesis", "⏜", "par", "∥", "para", "¶", "parallel", "∥", "parsim", "⫳", "parsl", "⫽", "part", "∂", "PartialD", "∂", "Pcy", "П", "pcy", "п", "percnt", "%", "period", ".", "permil", "‰", "perp", "⊥", "pertenk", "‱", "Pfr", "𝔓", "pfr", "𝔭", "Phi", "Φ", "phi", "φ", "phiv", "ϕ", "phmmat", "ℳ", "phone", "☎", "Pi", "Π", "pi", "π", "pitchfork", "⋔", "piv", "ϖ", "planck", "ℏ", "planckh", "ℎ", "plankv", "ℏ", "plus", "+", "plusacir", "⨣", "plusb", "⊞", "pluscir", "⨢", "plusdo", "∔", "plusdu", "⨥", "pluse", "⩲", "PlusMinus", "±", "plusmn", "±", "plussim", "⨦", "plustwo", "⨧", "pm", "±", "Poincareplane", "ℌ", "pointint", "⨕", "Popf", "ℙ", "popf", "𝕡", "pound", "£", "pr", "≺", "Pr", "⪻", "prap", "⪷", "prcue", "≼", "pre", "⪯", "prE", "⪳", "prec", "≺", "precapprox", "⪷", "preccurlyeq", "≼", "Precedes", "≺", "PrecedesEqual", "⪯", "PrecedesSlantEqual", "≼", "PrecedesTilde", "≾", "preceq", "⪯", "precnapprox", "⪹", "precneqq", "⪵", "precnsim", "⋨", "precsim", "≾", "prime", "′", "Prime", "″", "primes", "ℙ", "prnap", "⪹", "prnE", "⪵", "prnsim", "⋨", "prod", "∏", "Product", "∏", "profalar", "⌮", "profline", "⌒", "profsurf", "⌓", "prop", "∝", "Proportion", "∷", "Proportional", "∝", "propto", "∝", "prsim", "≾", "prurel", "⊰", "Pscr", "𝒫", "pscr", "𝓅", "Psi", "Ψ", "psi", "ψ", "puncsp", " ", "Qfr", "𝔔", "qfr", "𝔮", "qint", "⨌", "Qopf", "ℚ", "qopf", "𝕢", "qprime", "⁗", "Qscr", "𝒬", "qscr", "𝓆", "quaternions", "ℍ", "quatint", "⨖", "quest", "?", "questeq", "≟", "QUOT", "\"", "quot", "\"", "rAarr", "⇛", "race", "∽̱", "Racute", "Ŕ", "racute", "ŕ", "radic", "√", "raemptyv", "⦳", "rang", "⟩", "Rang", "⟫", "rangd", "⦒", "range", "⦥", "rangle", "⟩", "raquo", "»", "rarr", "→", "Rarr", "↠", "rArr", "⇒", "rarrap", "⥵", "rarrb", "⇥", "rarrbfs", "⤠", "rarrc", "⤳", "rarrfs", "⤞", "rarrhk", "↪", "rarrlp", "↬", "rarrpl", "⥅", "rarrsim", "⥴", "rarrtl", "↣", "Rarrtl", "⤖", "rarrw", "↝", "ratail", "⤚", "rAtail", "⤜", "ratio", "∶", "rationals", "ℚ", "rbarr", "⤍", "rBarr", "⤏", "RBarr", "⤐", "rbbrk", "❳", "rbrace", "}", "rbrack", "]", "rbrke", "⦌", "rbrksld", "⦎", "rbrkslu", "⦐", "Rcaron", "Ř", "rcaron", "ř", "Rcedil", "Ŗ", "rcedil", "ŗ", "rceil", "⌉", "rcub", "}", "Rcy", "Р", "rcy", "р", "rdca", "⤷", "rdldhar", "⥩", "rdquo", "”", "rdquor", "”", "rdsh", "↳", "Re", "ℜ", "real", "ℜ", "realine", "ℛ", "realpart", "ℜ", "reals", "ℝ", "rect", "▭", "REG", "®", "reg", "®", "ReverseElement", "∋", "ReverseEquilibrium", "⇋", "ReverseUpEquilibrium", "⥯", "rfisht", "⥽", "rfloor", "⌋", "Rfr", "ℜ", "rfr", "𝔯", "rHar", "⥤", "rhard", "⇁", "rharu", "⇀", "rharul", "⥬", "Rho", "Ρ", "rho", "ρ", "rhov", "ϱ", "RightAngleBracket", "⟩", "RightArrow", "→", "rightarrow", "→", "Rightarrow", "⇒", "RightArrowBar", "⇥", "RightArrowLeftArrow", "⇄", "rightarrowtail", "↣", "RightCeiling", "⌉", "RightDoubleBracket", "⟧", "RightDownTeeVector", "⥝", "RightDownVector", "⇂", "RightDownVectorBar", "⥕", "RightFloor", "⌋", "rightharpoondown", "⇁", "rightharpoonup", "⇀", "rightleftarrows", "⇄", "rightleftharpoons", "⇌", "rightrightarrows", "⇉", "rightsquigarrow", "↝", "RightTee", "⊢", "RightTeeArrow", "↦", "RightTeeVector", "⥛", "rightthreetimes", "⋌", "RightTriangle", "⊳", "RightTriangleBar", "⧐", "RightTriangleEqual", "⊵", "RightUpDownVector", "⥏", "RightUpTeeVector", "⥜", "RightUpVector", "↾", "RightUpVectorBar", "⥔", "RightVector", "⇀", "RightVectorBar", "⥓", "ring", "˚", "risingdotseq", "≓", "rlarr", "⇄", "rlhar", "⇌", "rlm", "‏", "rmoust", "⎱", "rmoustache", "⎱", "rnmid", "⫮", "roang", "⟭", "roarr", "⇾", "robrk", "⟧", "ropar", "⦆", "Ropf", "ℝ", "ropf", "𝕣", "roplus", "⨮", "rotimes", "⨵", "RoundImplies", "⥰", "rpar", ")", "rpargt", "⦔", "rppolint", "⨒", "rrarr", "⇉", "Rrightarrow", "⇛", "rsaquo", "›", "Rscr", "ℛ", "rscr", "𝓇", "Rsh", "↱", "rsh", "↱", "rsqb", "]", "rsquo", "’", "rsquor", "’", "rthree", "⋌", "rtimes", "⋊", "rtri", "▹", "rtrie", "⊵", "rtrif", "▸", "rtriltri", "⧎", "RuleDelayed", "⧴", "ruluhar", "⥨", "rx", "℞", "Sacute", "Ś", "sacute", "ś", "sbquo", "‚", "sc", "≻", "Sc", "⪼", "scap", "⪸", "Scaron", "Š", "scaron", "š", "sccue", "≽", "sce", "⪰", "scE", "⪴", "Scedil", "Ş", "scedil", "ş", "Scirc", "Ŝ", "scirc", "ŝ", "scnap", "⪺", "scnE", "⪶", "scnsim", "⋩", "scpolint", "⨓", "scsim", "≿", "Scy", "С", "scy", "с", "sdot", "⋅", "sdotb", "⊡", "sdote", "⩦", "searhk", "⤥", "searr", "↘", "seArr", "⇘", "searrow", "↘", "sect", "§", "semi", ";", "seswar", "⤩", "setminus", "∖", "setmn", "∖", "sext", "✶", "Sfr", "𝔖", "sfr", "𝔰", "sfrown", "⌢", "sharp", "♯", "SHCHcy", "Щ", "shchcy", "щ", "SHcy", "Ш", "shcy", "ш", "ShortDownArrow", "↓", "ShortLeftArrow", "←", "shortmid", "∣", "shortparallel", "∥", "ShortRightArrow", "→", "ShortUpArrow", "↑", "shy", "­", "Sigma", "Σ", "sigma", "σ", "sigmaf", "ς", "sigmav", "ς", "sim", "∼", "simdot", "⩪", "sime", "≃", "simeq", "≃", "simg", "⪞", "simgE", "⪠", "siml", "⪝", "simlE", "⪟", "simne", "≆", "simplus", "⨤", "simrarr", "⥲", "slarr", "←", "SmallCircle", "∘", "smallsetminus", "∖", "smashp", "⨳", "smeparsl", "⧤", "smid", "∣", "smile", "⌣", "smt", "⪪", "smte", "⪬", "smtes", "⪬︀", "SOFTcy", "Ь", "softcy", "ь", "sol", "/", "solb", "⧄", "solbar", "⌿", "Sopf", "𝕊", "sopf", "𝕤", "spades", "♠", "spadesuit", "♠", "spar", "∥", "sqcap", "⊓", "sqcaps", "⊓︀", "sqcup", "⊔", "sqcups", "⊔︀", "Sqrt", "√", "sqsub", "⊏", "sqsube", "⊑", "sqsubset", "⊏", "sqsubseteq", "⊑", "sqsup", "⊐", "sqsupe", "⊒", "sqsupset", "⊐", "sqsupseteq", "⊒", "squ", "□", "Square", "□", "square", "□", "SquareIntersection", "⊓", "SquareSubset", "⊏", "SquareSubsetEqual", "⊑", "SquareSuperset", "⊐", "SquareSupersetEqual", "⊒", "SquareUnion", "⊔", "squarf", "▪", "squf", "▪", "srarr", "→", "Sscr", "𝒮", "sscr", "𝓈", "ssetmn", "∖", "ssmile", "⌣", "sstarf", "⋆", "Star", "⋆", "star", "☆", "starf", "★", "straightepsilon", "ϵ", "straightphi", "ϕ", "strns", "¯", "sub", "⊂", "Sub", "⋐", "subdot", "⪽", "sube", "⊆", "subE", "⫅", "subedot", "⫃", "submult", "⫁", "subne", "⊊", "subnE", "⫋", "subplus", "⪿", "subrarr", "⥹", "subset", "⊂", "Subset", "⋐", "subseteq", "⊆", "subseteqq", "⫅", "SubsetEqual", "⊆", "subsetneq", "⊊", "subsetneqq", "⫋", "subsim", "⫇", "subsub", "⫕", "subsup", "⫓", "succ", "≻", "succapprox", "⪸", "succcurlyeq", "≽", "Succeeds", "≻", "SucceedsEqual", "⪰", "SucceedsSlantEqual", "≽", "SucceedsTilde", "≿", "succeq", "⪰", "succnapprox", "⪺", "succneqq", "⪶", "succnsim", "⋩", "succsim", "≿", "SuchThat", "∋", "Sum", "∑", "sum", "∑", "sung", "♪", "sup", "⊃", "Sup", "⋑", "sup1", "¹", "sup2", "²", "sup3", "³", "supdot", "⪾", "supdsub", "⫘", "supe", "⊇", "supE", "⫆", "supedot", "⫄", "Superset", "⊃", "SupersetEqual", "⊇", "suphsol", "⟉", "suphsub", "⫗", "suplarr", "⥻", "supmult", "⫂", "supne", "⊋", "supnE", "⫌", "supplus", "⫀", "supset", "⊃", "Supset", "⋑", "supseteq", "⊇", "supseteqq", "⫆", "supsetneq", "⊋", "supsetneqq", "⫌", "supsim", "⫈", "supsub", "⫔", "supsup", "⫖", "swarhk", "⤦", "swarr", "↙", "swArr", "⇙", "swarrow", "↙", "swnwar", "⤪", "szlig", "ß", "Tab", "\t", "target", "⌖", "Tau", "Τ", "tau", "τ", "tbrk", "⎴", "Tcaron", "Ť", "tcaron", "ť", "Tcedil", "Ţ", "tcedil", "ţ", "Tcy", "Т", "tcy", "т", "tdot", "⃛", "telrec", "⌕", "Tfr", "𝔗", "tfr", "𝔱", "there4", "∴", "Therefore", "∴", "therefore", "∴", "Theta", "Θ", "theta", "θ", "thetasym", "ϑ", "thetav", "ϑ", "thickapprox", "≈", "thicksim", "∼", "ThickSpace", "  ", "thinsp", " ", "ThinSpace", " ", "thkap", "≈", "thksim", "∼", "THORN", "Þ", "thorn", "þ", "tilde", "˜", "Tilde", "∼", "TildeEqual", "≃", "TildeFullEqual", "≅", "TildeTilde", "≈", "times", "×", "timesb", "⊠", "timesbar", "⨱", "timesd", "⨰", "tint", "∭", "toea", "⤨", "top", "⊤", "topbot", "⌶", "topcir", "⫱", "Topf", "𝕋", "topf", "𝕥", "topfork", "⫚", "tosa", "⤩", "tprime", "‴", "TRADE", "™", "trade", "™", "triangle", "▵", "triangledown", "▿", "triangleleft", "◃", "trianglelefteq", "⊴", "triangleq", "≜", "triangleright", "▹", "trianglerighteq", "⊵", "tridot", "◬", "trie", "≜", "triminus", "⨺", "TripleDot", "⃛", "triplus", "⨹", "trisb", "⧍", "tritime", "⨻", "trpezium", "⏢", "Tscr", "𝒯", "tscr", "𝓉", "TScy", "Ц", "tscy", "ц", "TSHcy", "Ћ", "tshcy", "ћ", "Tstrok", "Ŧ", "tstrok", "ŧ", "twixt", "≬", "twoheadleftarrow", "↞", "twoheadrightarrow", "↠", "Uacute", "Ú", "uacute", "ú", "uarr", "↑", "Uarr", "↟", "uArr", "⇑", "Uarrocir", "⥉", "Ubrcy", "Ў", "ubrcy", "ў", "Ubreve", "Ŭ", "ubreve", "ŭ", "Ucirc", "Û", "ucirc", "û", "Ucy", "У", "ucy", "у", "udarr", "⇅", "Udblac", "Ű", "udblac", "ű", "udhar", "⥮", "ufisht", "⥾", "Ufr", "𝔘", "ufr", "𝔲", "Ugrave", "Ù", "ugrave", "ù", "uHar", "⥣", "uharl", "↿", "uharr", "↾", "uhblk", "▀", "ulcorn", "⌜", "ulcorner", "⌜", "ulcrop", "⌏", "ultri", "◸", "Umacr", "Ū", "umacr", "ū", "uml", "¨", "UnderBar", "_", "UnderBrace", "⏟", "UnderBracket", "⎵", "UnderParenthesis", "⏝", "Union", "⋃", "UnionPlus", "⊎", "Uogon", "Ų", "uogon", "ų", "Uopf", "𝕌", "uopf", "𝕦", "UpArrow", "↑", "uparrow", "↑", "Uparrow", "⇑", "UpArrowBar", "⤒", "UpArrowDownArrow", "⇅", "UpDownArrow", "↕", "updownarrow", "↕", "Updownarrow", "⇕", "UpEquilibrium", "⥮", "upharpoonleft", "↿", "upharpoonright", "↾", "uplus", "⊎", "UpperLeftArrow", "↖", "UpperRightArrow", "↗", "upsi", "υ", "Upsi", "ϒ", "upsih", "ϒ", "Upsilon", "Υ", "upsilon", "υ", "UpTee", "⊥", "UpTeeArrow", "↥", "upuparrows", "⇈", "urcorn", "⌝", "urcorner", "⌝", "urcrop", "⌎", "Uring", "Ů", "uring", "ů", "urtri", "◹", "Uscr", "𝒰", "uscr", "𝓊", "utdot", "⋰", "Utilde", "Ũ", "utilde", "ũ", "utri", "▵", "utrif", "▴", "uuarr", "⇈", "Uuml", "Ü", "uuml", "ü", "uwangle", "⦧", "vangrt", "⦜", "varepsilon", "ϵ", "varkappa", "ϰ", "varnothing", "∅", "varphi", "ϕ", "varpi", "ϖ", "varpropto", "∝", "varr", "↕", "vArr", "⇕", "varrho", "ϱ", "varsigma", "ς", "varsubsetneq", "⊊︀", "varsubsetneqq", "⫋︀", "varsupsetneq", "⊋︀", "varsupsetneqq", "⫌︀", "vartheta", "ϑ", "vartriangleleft", "⊲", "vartriangleright", "⊳", "vBar", "⫨", "Vbar", "⫫", "vBarv", "⫩", "Vcy", "В", "vcy", "в", "vdash", "⊢", "vDash", "⊨", "Vdash", "⊩", "VDash", "⊫", "Vdashl", "⫦", "vee", "∨", "Vee", "⋁", "veebar", "⊻", "veeeq", "≚", "vellip", "⋮", "verbar", "|", "Verbar", "‖", "vert", "|", "Vert", "‖", "VerticalBar", "∣", "VerticalLine", "|", "VerticalSeparator", "❘", "VerticalTilde", "≀", "VeryThinSpace", " ", "Vfr", "𝔙", "vfr", "𝔳", "vltri", "⊲", "vnsub", "⊂⃒", "vnsup", "⊃⃒", "Vopf", "𝕍", "vopf", "𝕧", "vprop", "∝", "vrtri", "⊳", "Vscr", "𝒱", "vscr", "𝓋", "vsubne", "⊊︀", "vsubnE", "⫋︀", "vsupne", "⊋︀", "vsupnE", "⫌︀", "Vvdash", "⊪", "vzigzag", "⦚", "Wcirc", "Ŵ", "wcirc", "ŵ", "wedbar", "⩟", "wedge", "∧", "Wedge", "⋀", "wedgeq", "≙", "weierp", "℘", "Wfr", "𝔚", "wfr", "𝔴", "Wopf", "𝕎", "wopf", "𝕨", "wp", "℘", "wr", "≀", "wreath", "≀", "Wscr", "𝒲", "wscr", "𝓌", "xcap", "⋂", "xcirc", "◯", "xcup", "⋃", "xdtri", "▽", "Xfr", "𝔛", "xfr", "𝔵", "xharr", "⟷", "xhArr", "⟺", "Xi", "Ξ", "xi", "ξ", "xlarr", "⟵", "xlArr", "⟸", "xmap", "⟼", "xnis", "⋻", "xodot", "⨀", "Xopf", "𝕏", "xopf", "𝕩", "xoplus", "⨁", "xotime", "⨂", "xrarr", "⟶", "xrArr", "⟹", "Xscr", "𝒳", "xscr", "𝓍", "xsqcup", "⨆", "xuplus", "⨄", "xutri", "△", "xvee", "⋁", "xwedge", "⋀", "Yacute", "Ý", "yacute", "ý", "YAcy", "Я", "yacy", "я", "Ycirc", "Ŷ", "ycirc", "ŷ", "Ycy", "Ы", "ycy", "ы", "yen", "¥", "Yfr", "𝔜", "yfr", "𝔶", "YIcy", "Ї", "yicy", "ї", "Yopf", "𝕐", "yopf", "𝕪", "Yscr", "𝒴", "yscr", "𝓎", "YUcy", "Ю", "yucy", "ю", "yuml", "ÿ", "Yuml", "Ÿ", "Zacute", "Ź", "zacute", "ź", "Zcaron", "Ž", "zcaron", "ž", "Zcy", "З", "zcy", "з", "Zdot", "Ż", "zdot", "ż", "zeetrf", "ℨ", "ZeroWidthSpace", "​", "Zeta", "Ζ", "zeta", "ζ", "Zfr", "ℨ", "zfr", "𝔷", "ZHcy", "Ж", "zhcy", "ж", "zigrarr", "⇝", "Zopf", "ℤ", "zopf", "𝕫", "Zscr", "𝒵", "zscr", "𝓏", "zwj", "‍", "zwnj", "‌"]);
    }
  }, false);
  var C = Array(29).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/xml/src/xml/nodes/cdata.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/data.dart",
    "org-dartlang-app:///packages/xml/src/xml/mixins/has_parent.dart",
    "package:xml/src/xml/mixins/has_parent.dart",
    "org-dartlang-app:///packages/xml/src/xml/mixins/has_attributes.dart",
    "package:xml/src/xml/mixins/has_attributes.dart",
    "org-dartlang-app:///packages/xml/src/xml/mixins/has_children.dart",
    "package:xml/src/xml/mixins/has_children.dart",
    "org-dartlang-app:///packages/xml/src/xml/mixins/has_text.dart",
    "package:xml/src/xml/mixins/has_text.dart",
    "package:xml/src/xml/mixins/has_visitor.dart",
    "org-dartlang-app:///packages/xml/src/xml/mixins/has_writer.dart",
    "package:xml/src/xml/mixins/has_writer.dart",
    "org-dartlang-app:///packages/xml/src/xml/mixins/has_xml.dart",
    "package:xml/src/xml/mixins/has_xml.dart",
    "package:xml/src/xml/nodes/node.dart",
    "package:xml/src/xml/nodes/data.dart",
    "package:xml/src/xml/nodes/cdata.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/node_type.dart",
    "package:xml/src/xml/utils/node_type.dart",
    "org-dartlang-app:///packages/xml/src/xml/visitors/visitor.dart",
    "package:xml/src/xml/visitors/visitor.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/name.dart",
    "package:xml/src/xml/utils/name.dart",
    "package:xml/src/xml/utils/token.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/simple_name.dart",
    "package:xml/src/xml/utils/simple_name.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/namespace.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/attribute.dart",
    "package:xml/src/xml/mixins/has_name.dart",
    "package:xml/src/xml/nodes/attribute.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/attribute_type.dart",
    "package:xml/src/xml/utils/attribute_type.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/exceptions.dart",
    "package:xml/src/xml/utils/exceptions.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/prefix_name.dart",
    "package:xml/src/xml/utils/prefix_name.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/text.dart",
    "package:xml/src/xml/nodes/text.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/processing.dart",
    "package:xml/src/xml/nodes/processing.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/element.dart",
    "package:xml/src/xml/nodes/element.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/node_list.dart",
    "package:xml/src/xml/utils/node_list.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/name_matcher.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/document_fragment.dart",
    "package:xml/src/xml/nodes/document_fragment.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/cache.dart",
    "package:xml/src/xml/utils/cache.dart",
    "org-dartlang-app:///packages/xml/src/xml/parser.dart",
    "org-dartlang-app:///packages/xml/src/xml/grammar.dart",
    "org-dartlang-app:///packages/xml/src/xml/production.dart",
    "package:xml/src/xml/production.dart",
    "package:xml/src/xml/grammar.dart",
    "package:xml/src/xml/parser.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/document.dart",
    "package:xml/src/xml/nodes/document.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/doctype.dart",
    "package:xml/src/xml/nodes/doctype.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/declaration.dart",
    "package:xml/src/xml/nodes/declaration.dart",
    "org-dartlang-app:///packages/xml/src/xml/entities/entity_mapping.dart",
    "package:xml/src/xml/entities/entity_mapping.dart",
    "org-dartlang-app:///packages/xml/src/xml/entities/default_mapping.dart",
    "package:xml/src/xml/entities/default_mapping.dart",
    "org-dartlang-app:///packages/xml/src/xml/nodes/comment.dart",
    "package:xml/src/xml/nodes/comment.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/character_data_parser.dart",
    "package:xml/src/xml/utils/character_data_parser.dart",
    "org-dartlang-app:///packages/xml/src/xml/visitors/writer.dart",
    "package:xml/src/xml/visitors/writer.dart",
    "org-dartlang-app:///packages/xml/src/xml/visitors/pretty_writer.dart",
    "package:xml/src/xml/visitors/pretty_writer.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/descendants.dart",
    "package:xml/src/xml/navigation/descendants.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/parent.dart"
  ];
  var text$0 = dart.privateName(data, "XmlData.text");
  var _throwNoParent = dart.privateName(has_parent, "_throwNoParent");
  has_parent.XmlParentBase = class XmlParentBase extends core.Object {};
  has_parent.XmlParentBase[dart.mixinOn] = Object => class XmlParentBase extends Object {
    get parent() {
      return null;
    }
    get hasParent() {
      return false;
    }
    replace(other) {
      if (other == null) dart.nullFailed(I[2], 15, 24, "other");
      return this[_throwNoParent]();
    }
    attachParent(parent) {
      node.XmlNode.as(parent);
      if (parent == null) dart.nullFailed(I[2], 19, 39, "parent");
      return this[_throwNoParent]();
    }
    detachParent(parent) {
      node.XmlNode.as(parent);
      if (parent == null) dart.nullFailed(I[2], 23, 39, "parent");
      return this[_throwNoParent]();
    }
    [_throwNoParent]() {
      return dart.throw(new core.UnsupportedError.new(dart.str(this) + " does not have a parent."));
    }
  };
  (has_parent.XmlParentBase[dart.mixinNew] = function() {
  }).prototype = has_parent.XmlParentBase.prototype;
  dart.addTypeTests(has_parent.XmlParentBase);
  dart.addTypeCaches(has_parent.XmlParentBase);
  has_parent.XmlParentBase[dart.implements] = () => [core.Object];
  dart.setMethodSignature(has_parent.XmlParentBase, () => ({
    __proto__: dart.getMethods(has_parent.XmlParentBase.__proto__),
    replace: dart.fnType(dart.void, [node.XmlNode]),
    attachParent: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    detachParent: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_throwNoParent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(has_parent.XmlParentBase, () => ({
    __proto__: dart.getGetters(has_parent.XmlParentBase.__proto__),
    parent: dart.nullable(node.XmlNode),
    hasParent: core.bool
  }));
  dart.setLibraryUri(has_parent.XmlParentBase, I[3]);
  has_attributes.XmlAttributesBase = class XmlAttributesBase extends core.Object {};
  has_attributes.XmlAttributesBase[dart.mixinOn] = Object => class XmlAttributesBase extends Object {
    get attributes() {
      return C[0] || CT.C0;
    }
    getAttribute(name, opts) {
      if (name == null) dart.nullFailed(I[4], 13, 31, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return null;
    }
    getAttributeNode(name, opts) {
      if (name == null) dart.nullFailed(I[4], 16, 41, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return null;
    }
    setAttribute(name, value, opts) {
      if (name == null) dart.nullFailed(I[4], 21, 28, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return dart.throw(new core.UnsupportedError.new(dart.str(this) + " has no attributes."));
    }
    removeAttribute(name, opts) {
      if (name == null) dart.nullFailed(I[4], 25, 31, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this.setAttribute(name, null, {namespace: namespace});
    }
  };
  (has_attributes.XmlAttributesBase[dart.mixinNew] = function() {
  }).prototype = has_attributes.XmlAttributesBase.prototype;
  dart.addTypeTests(has_attributes.XmlAttributesBase);
  dart.addTypeCaches(has_attributes.XmlAttributesBase);
  has_attributes.XmlAttributesBase[dart.implements] = () => [core.Object];
  dart.setMethodSignature(has_attributes.XmlAttributesBase, () => ({
    __proto__: dart.getMethods(has_attributes.XmlAttributesBase.__proto__),
    getAttribute: dart.fnType(dart.nullable(core.String), [core.String], {namespace: dart.nullable(core.String)}, {}),
    getAttributeNode: dart.fnType(dart.nullable(attribute.XmlAttribute), [core.String], {namespace: dart.nullable(core.String)}, {}),
    setAttribute: dart.fnType(dart.void, [core.String, dart.nullable(core.String)], {namespace: dart.nullable(core.String)}, {}),
    removeAttribute: dart.fnType(dart.void, [core.String], {namespace: dart.nullable(core.String)}, {})
  }));
  dart.setGetterSignature(has_attributes.XmlAttributesBase, () => ({
    __proto__: dart.getGetters(has_attributes.XmlAttributesBase.__proto__),
    attributes: core.List$(attribute.XmlAttribute)
  }));
  dart.setLibraryUri(has_attributes.XmlAttributesBase, I[5]);
  has_children.XmlChildrenBase = class XmlChildrenBase extends core.Object {};
  has_children.XmlChildrenBase[dart.mixinOn] = Object => class XmlChildrenBase extends Object {
    get children() {
      return C[1] || CT.C1;
    }
    getElement(name, opts) {
      if (name == null) dart.nullFailed(I[6], 12, 33, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return null;
    }
    get firstChild() {
      return null;
    }
    get firstElementChild() {
      return null;
    }
    get lastChild() {
      return null;
    }
    get lastElementChild() {
      return null;
    }
  };
  (has_children.XmlChildrenBase[dart.mixinNew] = function() {
  }).prototype = has_children.XmlChildrenBase.prototype;
  dart.addTypeTests(has_children.XmlChildrenBase);
  dart.addTypeCaches(has_children.XmlChildrenBase);
  has_children.XmlChildrenBase[dart.implements] = () => [core.Object];
  dart.setMethodSignature(has_children.XmlChildrenBase, () => ({
    __proto__: dart.getMethods(has_children.XmlChildrenBase.__proto__),
    getElement: dart.fnType(dart.nullable(element.XmlElement), [core.String], {namespace: dart.nullable(core.String)}, {})
  }));
  dart.setGetterSignature(has_children.XmlChildrenBase, () => ({
    __proto__: dart.getGetters(has_children.XmlChildrenBase.__proto__),
    children: core.List$(node.XmlNode),
    firstChild: dart.nullable(node.XmlNode),
    firstElementChild: dart.nullable(element.XmlElement),
    lastChild: dart.nullable(node.XmlNode),
    lastElementChild: dart.nullable(element.XmlElement)
  }));
  dart.setLibraryUri(has_children.XmlChildrenBase, I[7]);
  has_text.XmlHasText = class XmlHasText extends core.Object {};
  has_text.XmlHasText[dart.mixinOn] = Object => class XmlHasText extends Object {
    get text() {
      return this.innerText;
    }
    get innerText() {
      return new descendants.XmlDescendantsIterable.new(node.XmlNode.as(this))[$where](dart.fn(node => {
        if (node == null) dart.nullFailed(I[8], 16, 15, "node");
        return text$.XmlText.is(node) || cdata.XmlCDATA.is(node);
      }, T.XmlNodeTobool()))[$map](core.String, dart.fn(node => {
        if (node == null) dart.nullFailed(I[8], 17, 13, "node");
        return node.text;
      }, T.XmlNodeToString()))[$join]();
    }
    set innerText(value) {
      if (value == null) dart.nullFailed(I[8], 21, 24, "value");
      this.children[$clear]();
      if (value[$isNotEmpty]) {
        this.children[$add](new text$.XmlText.new(value));
      }
    }
  };
  (has_text.XmlHasText[dart.mixinNew] = function() {
  }).prototype = has_text.XmlHasText.prototype;
  dart.addTypeTests(has_text.XmlHasText);
  dart.addTypeCaches(has_text.XmlHasText);
  has_text.XmlHasText[dart.implements] = () => [has_children.XmlChildrenBase, core.Object];
  dart.setGetterSignature(has_text.XmlHasText, () => ({
    __proto__: dart.getGetters(has_text.XmlHasText.__proto__),
    text: core.String,
    innerText: core.String
  }));
  dart.setSetterSignature(has_text.XmlHasText, () => ({
    __proto__: dart.getSetters(has_text.XmlHasText.__proto__),
    innerText: core.String
  }));
  dart.setLibraryUri(has_text.XmlHasText, I[9]);
  has_visitor.XmlHasVisitor = class XmlHasVisitor extends core.Object {};
  has_visitor.XmlHasVisitor[dart.mixinOn] = Object => class XmlHasVisitor extends Object {};
  (has_visitor.XmlHasVisitor[dart.mixinNew] = function() {
  }).prototype = has_visitor.XmlHasVisitor.prototype;
  dart.addTypeTests(has_visitor.XmlHasVisitor);
  dart.addTypeCaches(has_visitor.XmlHasVisitor);
  has_visitor.XmlHasVisitor[dart.implements] = () => [core.Object];
  dart.setLibraryUri(has_visitor.XmlHasVisitor, I[10]);
  has_writer.XmlHasWriter = class XmlHasWriter extends core.Object {};
  has_writer.XmlHasWriter[dart.mixinOn] = Object => {
    class XmlHasWriter extends Object {
      toXmlString(opts) {
        let pretty = opts && 'pretty' in opts ? opts.pretty : false;
        if (pretty == null) dart.nullFailed(I[11], 37, 10, "pretty");
        let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
        let level = opts && 'level' in opts ? opts.level : null;
        let indent = opts && 'indent' in opts ? opts.indent : null;
        let newLine = opts && 'newLine' in opts ? opts.newLine : null;
        let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : null;
        let indentAttribute = opts && 'indentAttribute' in opts ? opts.indentAttribute : null;
        let sortAttributes = opts && 'sortAttributes' in opts ? opts.sortAttributes : null;
        let buffer = new core.StringBuffer.new();
        let writer = dart.test(pretty) ? new pretty_writer.XmlPrettyWriter.new(buffer, {entityMapping: entityMapping, level: level, indent: indent, newLine: newLine, preserveWhitespace: preserveWhitespace, indentAttribute: indentAttribute, sortAttributes: sortAttributes}) : new writer$.XmlWriter.new(buffer, {entityMapping: entityMapping});
        writer.visit(dart.dynamic, this);
        return buffer.toString();
      }
      toString() {
        return this.toXmlString();
      }
    }
    dart.defineExtensionMethods(XmlHasWriter, ['toString']);
    return XmlHasWriter;
  };
  (has_writer.XmlHasWriter[dart.mixinNew] = function() {
  }).prototype = has_writer.XmlHasWriter.prototype;
  dart.addTypeTests(has_writer.XmlHasWriter);
  dart.addTypeCaches(has_writer.XmlHasWriter);
  has_writer.XmlHasWriter[dart.implements] = () => [has_visitor.XmlHasVisitor, core.Object];
  dart.setMethodSignature(has_writer.XmlHasWriter, () => ({
    __proto__: dart.getMethods(has_writer.XmlHasWriter.__proto__),
    toXmlString: dart.fnType(core.String, [], {entityMapping: dart.nullable(entity_mapping.XmlEntityMapping), indent: dart.nullable(core.String), indentAttribute: dart.nullable(dart.fnType(core.bool, [attribute.XmlAttribute])), level: dart.nullable(core.int), newLine: dart.nullable(core.String), preserveWhitespace: dart.nullable(dart.fnType(core.bool, [node.XmlNode])), pretty: core.bool, sortAttributes: dart.nullable(dart.fnType(core.int, [attribute.XmlAttribute, attribute.XmlAttribute]))}, {})
  }));
  dart.setLibraryUri(has_writer.XmlHasWriter, I[12]);
  has_xml.XmlHasXml = class XmlHasXml extends core.Object {};
  has_xml.XmlHasXml[dart.mixinOn] = Object => class XmlHasXml extends Object {
    get outerXml() {
      return this.toXmlString();
    }
    set outerXml(value) {
      if (value == null) dart.nullFailed(I[13], 12, 23, "value");
      return this.replace(document_fragment.XmlDocumentFragment.parse(value));
    }
    get innerXml() {
      return this.children[$map](core.String, dart.fn(node => {
        if (node == null) dart.nullFailed(I[13], 15, 40, "node");
        return node.toXmlString();
      }, T.XmlNodeToString()))[$join]();
    }
    set innerXml(value) {
      let t0;
      if (value == null) dart.nullFailed(I[13], 18, 23, "value");
      t0 = this.children;
      return (() => {
        t0[$clear]();
        t0[$add](document_fragment.XmlDocumentFragment.parse(value));
        return t0;
      })();
    }
  };
  (has_xml.XmlHasXml[dart.mixinNew] = function() {
  }).prototype = has_xml.XmlHasXml.prototype;
  dart.addTypeTests(has_xml.XmlHasXml);
  dart.addTypeCaches(has_xml.XmlHasXml);
  has_xml.XmlHasXml[dart.implements] = () => [has_children.XmlChildrenBase, has_parent.XmlParentBase, has_writer.XmlHasWriter, core.Object];
  dart.setGetterSignature(has_xml.XmlHasXml, () => ({
    __proto__: dart.getGetters(has_xml.XmlHasXml.__proto__),
    outerXml: core.String,
    innerXml: core.String
  }));
  dart.setSetterSignature(has_xml.XmlHasXml, () => ({
    __proto__: dart.getSetters(has_xml.XmlHasXml.__proto__),
    outerXml: core.String,
    innerXml: core.String
  }));
  dart.setLibraryUri(has_xml.XmlHasXml, I[14]);
  const Object_XmlParentBase$36 = class Object_XmlParentBase extends core.Object {};
  (Object_XmlParentBase$36.new = function() {
  }).prototype = Object_XmlParentBase$36.prototype;
  dart.applyMixin(Object_XmlParentBase$36, has_parent.XmlParentBase);
  const Object_XmlAttributesBase$36 = class Object_XmlAttributesBase extends Object_XmlParentBase$36 {};
  (Object_XmlAttributesBase$36.new = function() {
  }).prototype = Object_XmlAttributesBase$36.prototype;
  dart.applyMixin(Object_XmlAttributesBase$36, has_attributes.XmlAttributesBase);
  const Object_XmlChildrenBase$36 = class Object_XmlChildrenBase extends Object_XmlAttributesBase$36 {};
  (Object_XmlChildrenBase$36.new = function() {
  }).prototype = Object_XmlChildrenBase$36.prototype;
  dart.applyMixin(Object_XmlChildrenBase$36, has_children.XmlChildrenBase);
  const Object_XmlHasText$36 = class Object_XmlHasText extends Object_XmlChildrenBase$36 {};
  (Object_XmlHasText$36.new = function() {
  }).prototype = Object_XmlHasText$36.prototype;
  dart.applyMixin(Object_XmlHasText$36, has_text.XmlHasText);
  const Object_XmlHasVisitor$36 = class Object_XmlHasVisitor extends Object_XmlHasText$36 {};
  (Object_XmlHasVisitor$36.new = function() {
  }).prototype = Object_XmlHasVisitor$36.prototype;
  dart.applyMixin(Object_XmlHasVisitor$36, has_visitor.XmlHasVisitor);
  const Object_XmlHasWriter$36 = class Object_XmlHasWriter extends Object_XmlHasVisitor$36 {};
  (Object_XmlHasWriter$36.new = function() {
  }).prototype = Object_XmlHasWriter$36.prototype;
  dart.applyMixin(Object_XmlHasWriter$36, has_writer.XmlHasWriter);
  const Object_XmlHasXml$36 = class Object_XmlHasXml extends Object_XmlHasWriter$36 {};
  (Object_XmlHasXml$36.new = function() {
  }).prototype = Object_XmlHasXml$36.prototype;
  dart.applyMixin(Object_XmlHasXml$36, has_xml.XmlHasXml);
  node.XmlNode = class XmlNode extends Object_XmlHasXml$36 {};
  (node.XmlNode.new = function() {
    ;
  }).prototype = node.XmlNode.prototype;
  dart.addTypeTests(node.XmlNode);
  dart.addTypeCaches(node.XmlNode);
  dart.setLibraryUri(node.XmlNode, I[15]);
  var _parent = dart.privateName(has_parent, "_parent");
  const _is_XmlHasParent_default = Symbol('_is_XmlHasParent_default');
  has_parent.XmlHasParent$ = dart.generic(T => {
    class XmlHasParent extends core.Object {}
    XmlHasParent[dart.mixinOn] = Object => class XmlHasParent extends Object {
      get parent() {
        return this[_parent];
      }
      get hasParent() {
        return this[_parent] != null;
      }
      replace(other) {
        if (other == null) dart.nullFailed(I[2], 41, 24, "other");
        if (this[_parent] != null) {
          let siblings = dart.nullCheck(this[_parent]).children;
          for (let i = 0; i < dart.notNull(siblings[$length]); i = i + 1) {
            if (siblings[$_get](i) === this) {
              siblings[$_set](i, other);
              break;
            }
          }
        }
      }
      attachParent(parent) {
        T.as(parent);
        if (parent == null) dart.nullFailed(I[2], 54, 23, "parent");
        exceptions.XmlParentException.checkNoParent(this);
        this[_parent] = parent;
      }
      detachParent(parent) {
        T.as(parent);
        if (parent == null) dart.nullFailed(I[2], 60, 23, "parent");
        exceptions.XmlParentException.checkMatchingParent(this, parent);
        this[_parent] = null;
      }
    };
    (XmlHasParent[dart.mixinNew] = function() {
      this[_parent] = null;
    }).prototype = XmlHasParent.prototype;
    dart.addTypeTests(XmlHasParent);
    XmlHasParent.prototype[_is_XmlHasParent_default] = true;
    dart.addTypeCaches(XmlHasParent);
    XmlHasParent[dart.implements] = () => [has_parent.XmlParentBase, core.Object];
    dart.setMethodSignature(XmlHasParent, () => ({
      __proto__: dart.getMethods(XmlHasParent.__proto__),
      replace: dart.fnType(dart.void, [node.XmlNode]),
      attachParent: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      detachParent: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(XmlHasParent, () => ({
      __proto__: dart.getGetters(XmlHasParent.__proto__),
      parent: dart.nullable(T),
      hasParent: core.bool
    }));
    dart.setLibraryUri(XmlHasParent, I[3]);
    dart.setFieldSignature(XmlHasParent, () => ({
      __proto__: dart.getFields(XmlHasParent.__proto__),
      [_parent]: dart.fieldType(dart.nullable(T))
    }));
    return XmlHasParent;
  });
  has_parent.XmlHasParent = has_parent.XmlHasParent$();
  dart.addTypeTests(has_parent.XmlHasParent, _is_XmlHasParent_default);
  const XmlNode_XmlHasParent$36 = class XmlNode_XmlHasParent extends node.XmlNode {};
  (XmlNode_XmlHasParent$36.new = function() {
    has_parent.XmlHasParent$(node.XmlNode)[dart.mixinNew].call(this);
  }).prototype = XmlNode_XmlHasParent$36.prototype;
  dart.applyMixin(XmlNode_XmlHasParent$36, has_parent.XmlHasParent$(node.XmlNode));
  data.XmlData = class XmlData extends XmlNode_XmlHasParent$36 {
    get text() {
      return this[text$0];
    }
    set text(value) {
      this[text$0] = value;
    }
  };
  (data.XmlData.new = function(text) {
    if (text == null) dart.nullFailed(I[1], 7, 16, "text");
    this[text$0] = text;
    data.XmlData.__proto__.new.call(this);
    ;
  }).prototype = data.XmlData.prototype;
  dart.addTypeTests(data.XmlData);
  dart.addTypeCaches(data.XmlData);
  dart.setLibraryUri(data.XmlData, I[16]);
  dart.setFieldSignature(data.XmlData, () => ({
    __proto__: dart.getFields(data.XmlData.__proto__),
    text: dart.fieldType(core.String)
  }));
  cdata.XmlCDATA = class XmlCDATA extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.CDATA;
    }
    copy() {
      return new cdata.XmlCDATA.new(this.text);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[0], 17, 29, "visitor");
      return visitor.visitCDATA(this);
    }
  };
  (cdata.XmlCDATA.new = function(text) {
    if (text == null) dart.nullFailed(I[0], 8, 19, "text");
    cdata.XmlCDATA.__proto__.new.call(this, text);
    ;
  }).prototype = cdata.XmlCDATA.prototype;
  dart.addTypeTests(cdata.XmlCDATA);
  dart.addTypeCaches(cdata.XmlCDATA);
  dart.setMethodSignature(cdata.XmlCDATA, () => ({
    __proto__: dart.getMethods(cdata.XmlCDATA.__proto__),
    copy: dart.fnType(cdata.XmlCDATA, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(cdata.XmlCDATA, () => ({
    __proto__: dart.getGetters(cdata.XmlCDATA.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(cdata.XmlCDATA, I[17]);
  var _name$ = dart.privateName(node_type, "_name");
  node_type.XmlNodeType = class XmlNodeType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (node_type.XmlNodeType.new = function(index, _name) {
    if (index == null) dart.nullFailed(I[18], 2, 6, "index");
    if (_name == null) dart.nullFailed(I[18], 2, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = node_type.XmlNodeType.prototype;
  dart.addTypeTests(node_type.XmlNodeType);
  dart.addTypeCaches(node_type.XmlNodeType);
  dart.setLibraryUri(node_type.XmlNodeType, I[19]);
  dart.setFieldSignature(node_type.XmlNodeType, () => ({
    __proto__: dart.getFields(node_type.XmlNodeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(node_type.XmlNodeType, ['toString']);
  node_type.XmlNodeType.ATTRIBUTE = C[2] || CT.C2;
  node_type.XmlNodeType.CDATA = C[3] || CT.C3;
  node_type.XmlNodeType.COMMENT = C[4] || CT.C4;
  node_type.XmlNodeType.DECLARATION = C[5] || CT.C5;
  node_type.XmlNodeType.DOCUMENT_TYPE = C[6] || CT.C6;
  node_type.XmlNodeType.DOCUMENT = C[7] || CT.C7;
  node_type.XmlNodeType.DOCUMENT_FRAGMENT = C[8] || CT.C8;
  node_type.XmlNodeType.ELEMENT = C[9] || CT.C9;
  node_type.XmlNodeType.PROCESSING = C[10] || CT.C10;
  node_type.XmlNodeType.TEXT = C[11] || CT.C11;
  node_type.XmlNodeType.values = C[12] || CT.C12;
  visitor.XmlVisitor = class XmlVisitor extends core.Object {};
  visitor.XmlVisitor[dart.mixinOn] = Object => class XmlVisitor extends Object {
    visit(T, visitable) {
      if (visitable == null) dart.nullFailed(I[20], 18, 28, "visitable");
      return T.as(visitable.accept(this));
    }
    visitName(name) {
      if (name == null) dart.nullFailed(I[20], 21, 29, "name");
      return null;
    }
    visitAttribute(node) {
      if (node == null) dart.nullFailed(I[20], 24, 39, "node");
      return null;
    }
    visitDeclaration(node) {
      if (node == null) dart.nullFailed(I[20], 27, 43, "node");
      return null;
    }
    visitDocument(node) {
      if (node == null) dart.nullFailed(I[20], 30, 37, "node");
      return null;
    }
    visitDocumentFragment(node) {
      if (node == null) dart.nullFailed(I[20], 33, 53, "node");
      return null;
    }
    visitElement(node) {
      if (node == null) dart.nullFailed(I[20], 36, 35, "node");
      return null;
    }
    visitCDATA(node) {
      if (node == null) dart.nullFailed(I[20], 39, 31, "node");
      return null;
    }
    visitComment(node) {
      if (node == null) dart.nullFailed(I[20], 42, 35, "node");
      return null;
    }
    visitDoctype(node) {
      if (node == null) dart.nullFailed(I[20], 45, 35, "node");
      return null;
    }
    visitProcessing(node) {
      if (node == null) dart.nullFailed(I[20], 48, 41, "node");
      return null;
    }
    visitText(node) {
      if (node == null) dart.nullFailed(I[20], 51, 29, "node");
      return null;
    }
  };
  (visitor.XmlVisitor[dart.mixinNew] = function() {
  }).prototype = visitor.XmlVisitor.prototype;
  dart.addTypeTests(visitor.XmlVisitor);
  dart.addTypeCaches(visitor.XmlVisitor);
  visitor.XmlVisitor[dart.implements] = () => [core.Object];
  dart.setMethodSignature(visitor.XmlVisitor, () => ({
    __proto__: dart.getMethods(visitor.XmlVisitor.__proto__),
    visit: dart.gFnType(T => [T, [has_visitor.XmlHasVisitor]], T => [dart.nullable(core.Object)]),
    visitName: dart.fnType(dart.dynamic, [name$.XmlName]),
    visitAttribute: dart.fnType(dart.dynamic, [attribute.XmlAttribute]),
    visitDeclaration: dart.fnType(dart.dynamic, [declaration.XmlDeclaration]),
    visitDocument: dart.fnType(dart.dynamic, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.dynamic, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.dynamic, [element.XmlElement]),
    visitCDATA: dart.fnType(dart.dynamic, [cdata.XmlCDATA]),
    visitComment: dart.fnType(dart.dynamic, [comment.XmlComment]),
    visitDoctype: dart.fnType(dart.dynamic, [doctype.XmlDoctype]),
    visitProcessing: dart.fnType(dart.dynamic, [processing.XmlProcessing]),
    visitText: dart.fnType(dart.dynamic, [text$.XmlText])
  }));
  dart.setLibraryUri(visitor.XmlVisitor, I[21]);
  const Object_XmlHasVisitor$36$ = class Object_XmlHasVisitor extends core.Object {};
  (Object_XmlHasVisitor$36$.new = function() {
  }).prototype = Object_XmlHasVisitor$36$.prototype;
  dart.applyMixin(Object_XmlHasVisitor$36$, has_visitor.XmlHasVisitor);
  const Object_XmlHasWriter$36$ = class Object_XmlHasWriter extends Object_XmlHasVisitor$36$ {};
  (Object_XmlHasWriter$36$.new = function() {
  }).prototype = Object_XmlHasWriter$36$.prototype;
  dart.applyMixin(Object_XmlHasWriter$36$, has_writer.XmlHasWriter);
  const Object_XmlHasParent$36 = class Object_XmlHasParent extends Object_XmlHasWriter$36$ {};
  (Object_XmlHasParent$36.new = function() {
    has_parent.XmlHasParent$(node.XmlNode)[dart.mixinNew].call(this);
  }).prototype = Object_XmlHasParent$36.prototype;
  dart.applyMixin(Object_XmlHasParent$36, has_parent.XmlHasParent$(node.XmlNode));
  name$.XmlName = class XmlName extends Object_XmlHasParent$36 {
    static new(local, prefix = null) {
      if (local == null) dart.nullFailed(I[22], 26, 26, "local");
      return prefix == null || prefix[$isEmpty] ? new simple_name.XmlSimpleName.new(local) : new prefix_name.XmlPrefixName.new(prefix, local, dart.str(prefix) + ":" + dart.str(local));
    }
    static fromString(qualified) {
      if (qualified == null) dart.nullFailed(I[22], 32, 37, "qualified");
      let index = qualified[$indexOf](":");
      if (index > 0) {
        let prefix = qualified[$substring](0, index);
        let local = qualified[$substring](index + 1);
        return new prefix_name.XmlPrefixName.new(prefix, local, qualified);
      } else {
        return new simple_name.XmlSimpleName.new(qualified);
      }
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[22], 48, 29, "visitor");
      return visitor.visitName(this);
    }
    _equals(other) {
      if (other == null) return false;
      return name$.XmlName.is(other) && other.qualified == this.qualified;
    }
    get hashCode() {
      return dart.hashCode(this.qualified);
    }
  };
  (name$.XmlName.internal = function() {
    name$.XmlName.__proto__.new.call(this);
    ;
  }).prototype = name$.XmlName.prototype;
  dart.addTypeTests(name$.XmlName);
  dart.addTypeCaches(name$.XmlName);
  dart.setMethodSignature(name$.XmlName, () => ({
    __proto__: dart.getMethods(name$.XmlName.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setLibraryUri(name$.XmlName, I[23]);
  dart.defineExtensionMethods(name$.XmlName, ['_equals']);
  dart.defineExtensionAccessors(name$.XmlName, ['hashCode']);
  token$0.XmlToken = class XmlToken extends core.Object {};
  (token$0.XmlToken.new = function() {
    ;
  }).prototype = token$0.XmlToken.prototype;
  dart.addTypeTests(token$0.XmlToken);
  dart.addTypeCaches(token$0.XmlToken);
  dart.setLibraryUri(token$0.XmlToken, I[24]);
  dart.defineLazy(token$0.XmlToken, {
    /*token$0.XmlToken.doubleQuote*/get doubleQuote() {
      return "\"";
    },
    /*token$0.XmlToken.singleQuote*/get singleQuote() {
      return "'";
    },
    /*token$0.XmlToken.equals*/get equals() {
      return "=";
    },
    /*token$0.XmlToken.namespace*/get namespace() {
      return ":";
    },
    /*token$0.XmlToken.whitespace*/get whitespace() {
      return " ";
    },
    /*token$0.XmlToken.openComment*/get openComment() {
      return "<!--";
    },
    /*token$0.XmlToken.closeComment*/get closeComment() {
      return "-->";
    },
    /*token$0.XmlToken.openCDATA*/get openCDATA() {
      return "<![CDATA[";
    },
    /*token$0.XmlToken.closeCDATA*/get closeCDATA() {
      return "]]>";
    },
    /*token$0.XmlToken.openElement*/get openElement() {
      return "<";
    },
    /*token$0.XmlToken.closeElement*/get closeElement() {
      return ">";
    },
    /*token$0.XmlToken.openEndElement*/get openEndElement() {
      return "</";
    },
    /*token$0.XmlToken.closeEndElement*/get closeEndElement() {
      return "/>";
    },
    /*token$0.XmlToken.openDeclaration*/get openDeclaration() {
      return "<?xml";
    },
    /*token$0.XmlToken.closeDeclaration*/get closeDeclaration() {
      return "?>";
    },
    /*token$0.XmlToken.openDoctype*/get openDoctype() {
      return "<!DOCTYPE";
    },
    /*token$0.XmlToken.closeDoctype*/get closeDoctype() {
      return ">";
    },
    /*token$0.XmlToken.openDoctypeBlock*/get openDoctypeBlock() {
      return "[";
    },
    /*token$0.XmlToken.closeDoctypeBlock*/get closeDoctypeBlock() {
      return "]";
    },
    /*token$0.XmlToken.openProcessing*/get openProcessing() {
      return "<?";
    },
    /*token$0.XmlToken.closeProcessing*/get closeProcessing() {
      return "?>";
    }
  }, false);
  var local$ = dart.privateName(simple_name, "XmlSimpleName.local");
  var _throwNoParent$ = dart.privateName(simple_name, "_throwNoParent");
  simple_name.XmlSimpleName = class XmlSimpleName extends name$.XmlName {
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get prefix() {
      return null;
    }
    get qualified() {
      return this.local;
    }
    get namespaceUri() {
      let t0;
      t0 = namespace$.lookupAttribute(this.parent, null, "xmlns");
      return t0 == null ? null : t0.value;
    }
    copy() {
      return new simple_name.XmlSimpleName.new(this.local);
    }
    [_throwNoParent]() {
      return this[$noSuchMethod](new core._Invocation.method(C[13] || CT.C13, null, []));
    }
  };
  (simple_name.XmlSimpleName.new = function(local) {
    if (local == null) dart.nullFailed(I[25], 18, 22, "local");
    this[local$] = local;
    simple_name.XmlSimpleName.__proto__.internal.call(this);
    ;
  }).prototype = simple_name.XmlSimpleName.prototype;
  dart.addTypeTests(simple_name.XmlSimpleName);
  dart.addTypeCaches(simple_name.XmlSimpleName);
  dart.setMethodSignature(simple_name.XmlSimpleName, () => ({
    __proto__: dart.getMethods(simple_name.XmlSimpleName.__proto__),
    copy: dart.fnType(simple_name.XmlSimpleName, []),
    [_throwNoParent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(simple_name.XmlSimpleName, () => ({
    __proto__: dart.getGetters(simple_name.XmlSimpleName.__proto__),
    prefix: dart.nullable(core.String),
    qualified: core.String,
    namespaceUri: dart.nullable(core.String)
  }));
  dart.setLibraryUri(simple_name.XmlSimpleName, I[26]);
  dart.setFieldSignature(simple_name.XmlSimpleName, () => ({
    __proto__: dart.getFields(simple_name.XmlSimpleName.__proto__),
    local: dart.finalFieldType(core.String)
  }));
  namespace$.lookupAttribute = function lookupAttribute(start, prefix, local) {
    if (local == null) dart.nullFailed(I[27], 12, 70, "local");
    for (let node = start; node != null; node = node.parent) {
      for (let attribute of node.attributes) {
        if (attribute.name.prefix == prefix && attribute.name.local == local) {
          return attribute;
        }
      }
    }
    return null;
  };
  namespace$.lookupNamespacePrefix = function lookupNamespacePrefix(start, uri) {
    if (uri == null) dart.nullFailed(I[27], 26, 54, "uri");
    for (let node = start; node != null; node = node.parent) {
      for (let attribute of node.attributes) {
        if (attribute.value == uri) {
          if (attribute.name.prefix === "xmlns") {
            return attribute.name.local;
          } else if (attribute.name.prefix == null && attribute.name.local === "xmlns") {
            return "";
          }
        }
      }
    }
    return null;
  };
  dart.defineLazy(namespace$, {
    /*namespace$.xml*/get xml() {
      return "xml";
    },
    /*namespace$.xmlUri*/get xmlUri() {
      return "http://www.w3.org/XML/1998/namespace";
    },
    /*namespace$.xmlns*/get xmlns() {
      return "xmlns";
    }
  }, false);
  var name$0 = dart.privateName(attribute, "XmlAttribute.name");
  var value$ = dart.privateName(attribute, "XmlAttribute.value");
  var attributeType$ = dart.privateName(attribute, "XmlAttribute.attributeType");
  var _name$0 = dart.privateName(attribute_type, "_name");
  has_name.XmlHasName = class XmlHasName extends core.Object {};
  has_name.XmlHasName[dart.mixinOn] = Object => class XmlHasName extends Object {};
  (has_name.XmlHasName[dart.mixinNew] = function() {
  }).prototype = has_name.XmlHasName.prototype;
  dart.addTypeTests(has_name.XmlHasName);
  dart.addTypeCaches(has_name.XmlHasName);
  has_name.XmlHasName[dart.implements] = () => [core.Object];
  dart.setLibraryUri(has_name.XmlHasName, I[29]);
  const XmlNode_XmlHasParent$36$ = class XmlNode_XmlHasParent extends node.XmlNode {};
  (XmlNode_XmlHasParent$36$.new = function() {
    has_parent.XmlHasParent$(node.XmlNode)[dart.mixinNew].call(this);
  }).prototype = XmlNode_XmlHasParent$36$.prototype;
  dart.applyMixin(XmlNode_XmlHasParent$36$, has_parent.XmlHasParent$(node.XmlNode));
  const XmlNode_XmlHasName$36 = class XmlNode_XmlHasName extends XmlNode_XmlHasParent$36$ {};
  (XmlNode_XmlHasName$36.new = function() {
    XmlNode_XmlHasName$36.__proto__.new.call(this);
  }).prototype = XmlNode_XmlHasName$36.prototype;
  dart.applyMixin(XmlNode_XmlHasName$36, has_name.XmlHasName);
  attribute.XmlAttribute = class XmlAttribute extends XmlNode_XmlHasName$36 {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get attributeType() {
      return this[attributeType$];
    }
    set attributeType(value) {
      super.attributeType = value;
    }
    get nodeType() {
      return node_type.XmlNodeType.ATTRIBUTE;
    }
    copy() {
      return new attribute.XmlAttribute.new(this.name.copy(), this.value, this.attributeType);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[28], 33, 29, "visitor");
      return visitor.visitAttribute(this);
    }
  };
  (attribute.XmlAttribute.new = function(name, value, attributeType = C[14] || CT.C14) {
    if (name == null) dart.nullFailed(I[28], 12, 21, "name");
    if (value == null) dart.nullFailed(I[28], 12, 32, "value");
    if (attributeType == null) dart.nullFailed(I[28], 13, 13, "attributeType");
    this[name$0] = name;
    this[value$] = value;
    this[attributeType$] = attributeType;
    attribute.XmlAttribute.__proto__.new.call(this);
    this.name.attachParent(this);
  }).prototype = attribute.XmlAttribute.prototype;
  dart.addTypeTests(attribute.XmlAttribute);
  dart.addTypeCaches(attribute.XmlAttribute);
  dart.setMethodSignature(attribute.XmlAttribute, () => ({
    __proto__: dart.getMethods(attribute.XmlAttribute.__proto__),
    copy: dart.fnType(attribute.XmlAttribute, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(attribute.XmlAttribute, () => ({
    __proto__: dart.getGetters(attribute.XmlAttribute.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(attribute.XmlAttribute, I[30]);
  dart.setFieldSignature(attribute.XmlAttribute, () => ({
    __proto__: dart.getFields(attribute.XmlAttribute.__proto__),
    name: dart.finalFieldType(name$.XmlName),
    value: dart.fieldType(core.String),
    attributeType: dart.finalFieldType(attribute_type.XmlAttributeType)
  }));
  attribute_type.XmlAttributeType = class XmlAttributeType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (attribute_type.XmlAttributeType.new = function(index, _name) {
    if (index == null) dart.nullFailed(I[31], 2, 6, "index");
    if (_name == null) dart.nullFailed(I[31], 2, 6, "_name");
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = attribute_type.XmlAttributeType.prototype;
  dart.addTypeTests(attribute_type.XmlAttributeType);
  dart.addTypeCaches(attribute_type.XmlAttributeType);
  dart.setLibraryUri(attribute_type.XmlAttributeType, I[32]);
  dart.setFieldSignature(attribute_type.XmlAttributeType, () => ({
    __proto__: dart.getFields(attribute_type.XmlAttributeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(attribute_type.XmlAttributeType, ['toString']);
  attribute_type.XmlAttributeType.SINGLE_QUOTE = C[15] || CT.C15;
  attribute_type.XmlAttributeType.DOUBLE_QUOTE = C[14] || CT.C14;
  attribute_type.XmlAttributeType.values = C[16] || CT.C16;
  var message$ = dart.privateName(exceptions, "XmlException.message");
  exceptions.XmlException = class XmlException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "XmlException: " + dart.str(this.message);
    }
  };
  (exceptions.XmlException.new = function(message) {
    if (message == null) dart.nullFailed(I[33], 11, 21, "message");
    this[message$] = message;
    ;
  }).prototype = exceptions.XmlException.prototype;
  dart.addTypeTests(exceptions.XmlException);
  dart.addTypeCaches(exceptions.XmlException);
  exceptions.XmlException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exceptions.XmlException, I[34]);
  dart.setFieldSignature(exceptions.XmlException, () => ({
    __proto__: dart.getFields(exceptions.XmlException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(exceptions.XmlException, ['toString']);
  var buffer$ = dart.privateName(exceptions, "XmlParserException.buffer");
  var position$ = dart.privateName(exceptions, "XmlParserException.position");
  var line$ = dart.privateName(exceptions, "XmlParserException.line");
  var column$ = dart.privateName(exceptions, "XmlParserException.column");
  exceptions.XmlParserException = class XmlParserException extends exceptions.XmlException {
    get buffer() {
      return this[buffer$];
    }
    set buffer(value) {
      super.buffer = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get source() {
      return this.buffer;
    }
    get offset() {
      return this.position;
    }
    toString() {
      return "XmlParserException: " + dart.str(this.message) + " at " + dart.str(this.line) + ":" + dart.str(this.column);
    }
  };
  (exceptions.XmlParserException.new = function(message, opts) {
    if (message == null) dart.nullFailed(I[33], 32, 29, "message");
    let buffer = opts && 'buffer' in opts ? opts.buffer : null;
    let position = opts && 'position' in opts ? opts.position : 0;
    if (position == null) dart.nullFailed(I[33], 33, 26, "position");
    let line = opts && 'line' in opts ? opts.line : 0;
    if (line == null) dart.nullFailed(I[33], 33, 45, "line");
    let column = opts && 'column' in opts ? opts.column : 0;
    if (column == null) dart.nullFailed(I[33], 33, 60, "column");
    this[buffer$] = buffer;
    this[position$] = position;
    this[line$] = line;
    this[column$] = column;
    exceptions.XmlParserException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlParserException.prototype;
  dart.addTypeTests(exceptions.XmlParserException);
  dart.addTypeCaches(exceptions.XmlParserException);
  exceptions.XmlParserException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(exceptions.XmlParserException, () => ({
    __proto__: dart.getGetters(exceptions.XmlParserException.__proto__),
    source: dart.nullable(core.String),
    offset: dart.nullable(core.int)
  }));
  dart.setLibraryUri(exceptions.XmlParserException, I[34]);
  dart.setFieldSignature(exceptions.XmlParserException, () => ({
    __proto__: dart.getFields(exceptions.XmlParserException.__proto__),
    buffer: dart.finalFieldType(dart.nullable(core.String)),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(exceptions.XmlParserException, ['toString']);
  exceptions.XmlNodeTypeException = class XmlNodeTypeException extends exceptions.XmlException {
    static checkValidType(node, types) {
      if (node == null) dart.nullFailed(I[33], 49, 38, "node");
      if (types == null) dart.nullFailed(I[33], 49, 66, "types");
      if (!dart.test(types[$contains](node.nodeType))) {
        dart.throw(new exceptions.XmlNodeTypeException.new("Expected node of type: " + dart.str(types)));
      }
    }
    toString() {
      return "XmlNodeTypeException: " + dart.str(this.message);
    }
  };
  (exceptions.XmlNodeTypeException.new = function(message) {
    if (message == null) dart.nullFailed(I[33], 56, 31, "message");
    exceptions.XmlNodeTypeException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlNodeTypeException.prototype;
  dart.addTypeTests(exceptions.XmlNodeTypeException);
  dart.addTypeCaches(exceptions.XmlNodeTypeException);
  dart.setLibraryUri(exceptions.XmlNodeTypeException, I[34]);
  dart.defineExtensionMethods(exceptions.XmlNodeTypeException, ['toString']);
  exceptions.XmlParentException = class XmlParentException extends exceptions.XmlException {
    static checkNoParent(node) {
      if (node == null) dart.nullFailed(I[33], 65, 43, "node");
      if (node.parent != null) {
        dart.throw(new exceptions.XmlParentException.new("Node already has a parent, copy or remove it first: " + dart.str(node)));
      }
    }
    static checkMatchingParent(node, parent) {
      if (node == null) dart.nullFailed(I[33], 73, 49, "node");
      if (parent == null) dart.nullFailed(I[33], 73, 63, "parent");
      if (!dart.equals(node.parent, parent)) {
        dart.throw(new exceptions.XmlParentException.new("Node already has a non-matching parent: " + dart.str(node)));
      }
    }
    toString() {
      return "XmlParentException: " + dart.str(this.message);
    }
  };
  (exceptions.XmlParentException.new = function(message) {
    if (message == null) dart.nullFailed(I[33], 82, 29, "message");
    exceptions.XmlParentException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlParentException.prototype;
  dart.addTypeTests(exceptions.XmlParentException);
  dart.addTypeCaches(exceptions.XmlParentException);
  dart.setLibraryUri(exceptions.XmlParentException, I[34]);
  dart.defineExtensionMethods(exceptions.XmlParentException, ['toString']);
  exceptions.XmlTagException = class XmlTagException extends exceptions.XmlException {
    static checkClosingTag(expected, actual) {
      if (expected == null) dart.nullFailed(I[33], 91, 38, "expected");
      if (actual == null) dart.nullFailed(I[33], 91, 55, "actual");
      if (expected != actual) {
        dart.throw(exceptions.XmlTagException.mismatchClosingTag(expected, actual));
      }
    }
    static mismatchClosingTag(expectedName, actualName) {
      if (expectedName == null) dart.nullFailed(I[33], 103, 18, "expectedName");
      if (actualName == null) dart.nullFailed(I[33], 103, 39, "actualName");
      return new exceptions.XmlTagException.new("Expected closing tag </" + dart.str(expectedName) + ">, " + "but found </" + dart.str(actualName) + ">.");
    }
    static unexpectedClosingTag(name) {
      if (name == null) dart.nullFailed(I[33], 108, 55, "name");
      return new exceptions.XmlTagException.new("Unexpected closing tag </" + dart.str(name) + ">.");
    }
    static missingClosingTag(name) {
      if (name == null) dart.nullFailed(I[33], 112, 52, "name");
      return new exceptions.XmlTagException.new("Missing closing tag </" + dart.str(name) + ">.");
    }
    toString() {
      return "XmlTagException: " + dart.str(this.message);
    }
  };
  (exceptions.XmlTagException.new = function(message) {
    if (message == null) dart.nullFailed(I[33], 98, 26, "message");
    exceptions.XmlTagException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlTagException.prototype;
  dart.addTypeTests(exceptions.XmlTagException);
  dart.addTypeCaches(exceptions.XmlTagException);
  dart.setLibraryUri(exceptions.XmlTagException, I[34]);
  dart.defineExtensionMethods(exceptions.XmlTagException, ['toString']);
  var prefix$ = dart.privateName(prefix_name, "XmlPrefixName.prefix");
  var local$0 = dart.privateName(prefix_name, "XmlPrefixName.local");
  var qualified$ = dart.privateName(prefix_name, "XmlPrefixName.qualified");
  var _throwNoParent$0 = dart.privateName(prefix_name, "_throwNoParent");
  prefix_name.XmlPrefixName = class XmlPrefixName extends name$.XmlName {
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      super.prefix = value;
    }
    get local() {
      return this[local$0];
    }
    set local(value) {
      super.local = value;
    }
    get qualified() {
      return this[qualified$];
    }
    set qualified(value) {
      super.qualified = value;
    }
    get namespaceUri() {
      let t0;
      t0 = namespace$.lookupAttribute(this.parent, "xmlns", this.prefix);
      return t0 == null ? null : t0.value;
    }
    copy() {
      return new prefix_name.XmlPrefixName.new(this.prefix, this.local, this.qualified);
    }
    [_throwNoParent]() {
      return this[$noSuchMethod](new core._Invocation.method(C[17] || CT.C17, null, []));
    }
  };
  (prefix_name.XmlPrefixName.new = function(prefix, local, qualified) {
    if (prefix == null) dart.nullFailed(I[35], 18, 22, "prefix");
    if (local == null) dart.nullFailed(I[35], 18, 35, "local");
    if (qualified == null) dart.nullFailed(I[35], 18, 47, "qualified");
    this[prefix$] = prefix;
    this[local$0] = local;
    this[qualified$] = qualified;
    prefix_name.XmlPrefixName.__proto__.internal.call(this);
    ;
  }).prototype = prefix_name.XmlPrefixName.prototype;
  dart.addTypeTests(prefix_name.XmlPrefixName);
  dart.addTypeCaches(prefix_name.XmlPrefixName);
  dart.setMethodSignature(prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getMethods(prefix_name.XmlPrefixName.__proto__),
    copy: dart.fnType(prefix_name.XmlPrefixName, []),
    [_throwNoParent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getGetters(prefix_name.XmlPrefixName.__proto__),
    namespaceUri: dart.nullable(core.String)
  }));
  dart.setLibraryUri(prefix_name.XmlPrefixName, I[36]);
  dart.setFieldSignature(prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getFields(prefix_name.XmlPrefixName.__proto__),
    prefix: dart.finalFieldType(core.String),
    local: dart.finalFieldType(core.String),
    qualified: dart.finalFieldType(core.String)
  }));
  text$.XmlText = class XmlText extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.TEXT;
    }
    copy() {
      return new text$.XmlText.new(this.text);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[37], 17, 29, "visitor");
      return visitor.visitText(this);
    }
  };
  (text$.XmlText.new = function(text) {
    if (text == null) dart.nullFailed(I[37], 8, 18, "text");
    text$.XmlText.__proto__.new.call(this, text);
    ;
  }).prototype = text$.XmlText.prototype;
  dart.addTypeTests(text$.XmlText);
  dart.addTypeCaches(text$.XmlText);
  dart.setMethodSignature(text$.XmlText, () => ({
    __proto__: dart.getMethods(text$.XmlText.__proto__),
    copy: dart.fnType(text$.XmlText, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(text$.XmlText, () => ({
    __proto__: dart.getGetters(text$.XmlText.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(text$.XmlText, I[38]);
  var target$ = dart.privateName(processing, "XmlProcessing.target");
  processing.XmlProcessing = class XmlProcessing extends data.XmlData {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get nodeType() {
      return node_type.XmlNodeType.PROCESSING;
    }
    copy() {
      return new processing.XmlProcessing.new(this.target, this.text);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[39], 20, 29, "visitor");
      return visitor.visitProcessing(this);
    }
  };
  (processing.XmlProcessing.new = function(target, text) {
    if (target == null) dart.nullFailed(I[39], 11, 22, "target");
    if (text == null) dart.nullFailed(I[39], 11, 37, "text");
    this[target$] = target;
    processing.XmlProcessing.__proto__.new.call(this, text);
    ;
  }).prototype = processing.XmlProcessing.prototype;
  dart.addTypeTests(processing.XmlProcessing);
  dart.addTypeCaches(processing.XmlProcessing);
  dart.setMethodSignature(processing.XmlProcessing, () => ({
    __proto__: dart.getMethods(processing.XmlProcessing.__proto__),
    copy: dart.fnType(processing.XmlProcessing, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(processing.XmlProcessing, () => ({
    __proto__: dart.getGetters(processing.XmlProcessing.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(processing.XmlProcessing, I[40]);
  dart.setFieldSignature(processing.XmlProcessing, () => ({
    __proto__: dart.getFields(processing.XmlProcessing.__proto__),
    target: dart.finalFieldType(core.String)
  }));
  var isSelfClosing$ = dart.privateName(element, "XmlElement.isSelfClosing");
  var name$1 = dart.privateName(element, "XmlElement.name");
  var attributes = dart.privateName(has_attributes, "XmlHasAttributes.attributes");
  has_attributes.XmlHasAttributes = class XmlHasAttributes extends core.Object {};
  has_attributes.XmlHasAttributes[dart.mixinOn] = Object => class XmlHasAttributes extends Object {
    get attributes() {
      return this[attributes];
    }
    set attributes(value) {
      super.attributes = value;
    }
    getAttribute(name, opts) {
      let t0;
      if (name == null) dart.nullFailed(I[4], 35, 31, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      t0 = this.getAttributeNode(name, {namespace: namespace});
      return t0 == null ? null : t0.value;
    }
    getAttributeNode(name, opts) {
      if (name == null) dart.nullFailed(I[4], 39, 41, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let tester = name_matcher.createNameMatcher(name, namespace);
      for (let attribute of this.attributes) {
        if (dart.test(tester(attribute))) {
          return attribute;
        }
      }
      return null;
    }
    setAttribute(name, value, opts) {
      if (name == null) dart.nullFailed(I[4], 50, 28, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let index = this.attributes.indexWhere(name_matcher.createNameMatcher(name, namespace));
      if (dart.notNull(index) < 0) {
        if (value != null) {
          let prefix = namespace == null ? null : namespace$.lookupNamespacePrefix(T.XmlNodeN().as(this), namespace);
          this.attributes.add(new attribute.XmlAttribute.new(name$.XmlName.new(name, prefix), value));
        }
      } else {
        if (value != null) {
          this.attributes._get(index).value = value;
        } else {
          this.attributes.removeAt(index);
        }
      }
    }
  };
  (has_attributes.XmlHasAttributes[dart.mixinNew] = function() {
    this[attributes] = new (T.XmlNodeListOfXmlAttribute()).new();
  }).prototype = has_attributes.XmlHasAttributes.prototype;
  dart.addTypeTests(has_attributes.XmlHasAttributes);
  dart.addTypeCaches(has_attributes.XmlHasAttributes);
  has_attributes.XmlHasAttributes[dart.implements] = () => [has_attributes.XmlAttributesBase, core.Object];
  dart.setMethodSignature(has_attributes.XmlHasAttributes, () => ({
    __proto__: dart.getMethods(has_attributes.XmlHasAttributes.__proto__),
    getAttribute: dart.fnType(dart.nullable(core.String), [core.String], {namespace: dart.nullable(core.String)}, {}),
    getAttributeNode: dart.fnType(dart.nullable(attribute.XmlAttribute), [core.String], {namespace: dart.nullable(core.String)}, {}),
    setAttribute: dart.fnType(dart.void, [core.String, dart.nullable(core.String)], {namespace: dart.nullable(core.String)}, {})
  }));
  dart.setLibraryUri(has_attributes.XmlHasAttributes, I[5]);
  dart.setFieldSignature(has_attributes.XmlHasAttributes, () => ({
    __proto__: dart.getFields(has_attributes.XmlHasAttributes.__proto__),
    attributes: dart.finalFieldType(node_list.XmlNodeList$(attribute.XmlAttribute))
  }));
  var children = dart.privateName(has_children, "XmlHasChildren.children");
  has_children.XmlHasChildren = class XmlHasChildren extends core.Object {};
  has_children.XmlHasChildren[dart.mixinOn] = Object => class XmlHasChildren extends Object {
    get children() {
      return this[children];
    }
    set children(value) {
      super.children = value;
    }
    getElement(name, opts) {
      if (name == null) dart.nullFailed(I[6], 33, 33, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let tester = name_matcher.createNameMatcher(name, namespace);
      for (let node of this.children) {
        if (element.XmlElement.is(node) && dart.test(tester(node))) {
          return node;
        }
      }
      return null;
    }
    get firstChild() {
      return dart.test(this.children.isEmpty) ? null : this.children.first;
    }
    get firstElementChild() {
      for (let node of this.children) {
        if (element.XmlElement.is(node)) {
          return node;
        }
      }
      return null;
    }
    get lastChild() {
      return dart.test(this.children.isEmpty) ? null : this.children.last;
    }
    get lastElementChild() {
      for (let node of this.children.reversed) {
        if (element.XmlElement.is(node)) {
          return node;
        }
      }
      return null;
    }
  };
  (has_children.XmlHasChildren[dart.mixinNew] = function() {
    this[children] = new (T.XmlNodeListOfXmlNode()).new();
  }).prototype = has_children.XmlHasChildren.prototype;
  dart.addTypeTests(has_children.XmlHasChildren);
  dart.addTypeCaches(has_children.XmlHasChildren);
  has_children.XmlHasChildren[dart.implements] = () => [has_children.XmlChildrenBase, core.Object];
  dart.setMethodSignature(has_children.XmlHasChildren, () => ({
    __proto__: dart.getMethods(has_children.XmlHasChildren.__proto__),
    getElement: dart.fnType(dart.nullable(element.XmlElement), [core.String], {namespace: dart.nullable(core.String)}, {})
  }));
  dart.setGetterSignature(has_children.XmlHasChildren, () => ({
    __proto__: dart.getGetters(has_children.XmlHasChildren.__proto__),
    firstChild: dart.nullable(node.XmlNode),
    firstElementChild: dart.nullable(element.XmlElement),
    lastChild: dart.nullable(node.XmlNode),
    lastElementChild: dart.nullable(element.XmlElement)
  }));
  dart.setLibraryUri(has_children.XmlHasChildren, I[7]);
  dart.setFieldSignature(has_children.XmlHasChildren, () => ({
    __proto__: dart.getFields(has_children.XmlHasChildren.__proto__),
    children: dart.finalFieldType(node_list.XmlNodeList$(node.XmlNode))
  }));
  const XmlNode_XmlHasParent$36$0 = class XmlNode_XmlHasParent extends node.XmlNode {};
  (XmlNode_XmlHasParent$36$0.new = function() {
    has_parent.XmlHasParent$(node.XmlNode)[dart.mixinNew].call(this);
  }).prototype = XmlNode_XmlHasParent$36$0.prototype;
  dart.applyMixin(XmlNode_XmlHasParent$36$0, has_parent.XmlHasParent$(node.XmlNode));
  const XmlNode_XmlHasName$36$ = class XmlNode_XmlHasName extends XmlNode_XmlHasParent$36$0 {};
  (XmlNode_XmlHasName$36$.new = function() {
    XmlNode_XmlHasName$36$.__proto__.new.call(this);
  }).prototype = XmlNode_XmlHasName$36$.prototype;
  dart.applyMixin(XmlNode_XmlHasName$36$, has_name.XmlHasName);
  const XmlNode_XmlHasAttributes$36 = class XmlNode_XmlHasAttributes extends XmlNode_XmlHasName$36$ {};
  (XmlNode_XmlHasAttributes$36.new = function() {
    has_attributes.XmlHasAttributes[dart.mixinNew].call(this);
    XmlNode_XmlHasAttributes$36.__proto__.new.call(this);
  }).prototype = XmlNode_XmlHasAttributes$36.prototype;
  dart.applyMixin(XmlNode_XmlHasAttributes$36, has_attributes.XmlHasAttributes);
  const XmlNode_XmlHasChildren$36 = class XmlNode_XmlHasChildren extends XmlNode_XmlHasAttributes$36 {};
  (XmlNode_XmlHasChildren$36.new = function() {
    has_children.XmlHasChildren[dart.mixinNew].call(this);
    XmlNode_XmlHasChildren$36.__proto__.new.call(this);
  }).prototype = XmlNode_XmlHasChildren$36.prototype;
  dart.applyMixin(XmlNode_XmlHasChildren$36, has_children.XmlHasChildren);
  element.XmlElement = class XmlElement extends XmlNode_XmlHasChildren$36 {
    get isSelfClosing() {
      return this[isSelfClosing$];
    }
    set isSelfClosing(value) {
      this[isSelfClosing$] = value;
    }
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    get nodeType() {
      return node_type.XmlNodeType.ELEMENT;
    }
    copy() {
      return new element.XmlElement.new(this.name.copy(), this.attributes.map(attribute.XmlAttribute, dart.fn(each => {
        if (each == null) dart.nullFailed(I[41], 39, 23, "each");
        return each.copy();
      }, T.XmlAttributeToXmlAttribute())), this.children.map(node.XmlNode, dart.fn(each => {
        if (each == null) dart.nullFailed(I[41], 40, 21, "each");
        return each.copy();
      }, T.XmlNodeToXmlNode())), this.isSelfClosing);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[41], 44, 29, "visitor");
      return visitor.visitElement(this);
    }
  };
  (element.XmlElement.new = function(name, attributesIterable = C[0] || CT.C0, childrenIterable = C[1] || CT.C1, isSelfClosing = true) {
    if (name == null) dart.nullFailed(I[41], 16, 19, "name");
    if (attributesIterable == null) dart.nullFailed(I[41], 17, 31, "attributesIterable");
    if (childrenIterable == null) dart.nullFailed(I[41], 18, 25, "childrenIterable");
    if (isSelfClosing == null) dart.nullFailed(I[41], 19, 12, "isSelfClosing");
    this[name$1] = name;
    this[isSelfClosing$] = isSelfClosing;
    element.XmlElement.__proto__.new.call(this);
    this.name.attachParent(this);
    this.attributes.initialize(this, element.attributeNodeTypes);
    this.attributes.addAll(attributesIterable);
    this.children.initialize(this, element.childrenNodeTypes);
    this.children.addAll(childrenIterable);
  }).prototype = element.XmlElement.prototype;
  dart.addTypeTests(element.XmlElement);
  dart.addTypeCaches(element.XmlElement);
  dart.setMethodSignature(element.XmlElement, () => ({
    __proto__: dart.getMethods(element.XmlElement.__proto__),
    copy: dart.fnType(element.XmlElement, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(element.XmlElement, () => ({
    __proto__: dart.getGetters(element.XmlElement.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(element.XmlElement, I[42]);
  dart.setFieldSignature(element.XmlElement, () => ({
    __proto__: dart.getFields(element.XmlElement.__proto__),
    isSelfClosing: dart.fieldType(core.bool),
    name: dart.finalFieldType(name$.XmlName)
  }));
  dart.defineLazy(element, {
    /*element.childrenNodeTypes*/get childrenNodeTypes() {
      return C[18] || CT.C18;
    },
    /*element.attributeNodeTypes*/get attributeNodeTypes() {
      return C[19] || CT.C19;
    }
  }, false);
  var __XmlNodeList__parent = dart.privateName(node_list, "_#XmlNodeList#_parent");
  var __XmlNodeList__parent_isSet = dart.privateName(node_list, "_#XmlNodeList#_parent#isSet");
  var __XmlNodeList__nodeTypes = dart.privateName(node_list, "_#XmlNodeList#_nodeTypes");
  var __XmlNodeList__nodeTypes_isSet = dart.privateName(node_list, "_#XmlNodeList#_nodeTypes#isSet");
  var _parent$ = dart.privateName(node_list, "_parent");
  var _nodeTypes = dart.privateName(node_list, "_nodeTypes");
  var _expandFragment = dart.privateName(node_list, "_expandFragment");
  var _expandNodes = dart.privateName(node_list, "_expandNodes");
  const _is_XmlNodeList_default = Symbol('_is_XmlNodeList_default');
  node_list.XmlNodeList$ = dart.generic(E => {
    var JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    var IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    var ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    var EN = () => (EN = dart.constFn(dart.nullable(E)))();
    var XmlNodeToE = () => (XmlNodeToE = dart.constFn(dart.fnType(E, [node.XmlNode])))();
    class XmlNodeList extends wrappers.DelegatingList$(E) {
      get [_parent$]() {
        let t0;
        return dart.test(this[__XmlNodeList__parent_isSet]) ? (t0 = this[__XmlNodeList__parent], t0) : dart.throw(new _internal.LateError.fieldNI("_parent"));
      }
      set [_parent$](t0) {
        if (t0 == null) dart.nullFailed(I[43], 9, 22, "null");
        if (dart.test(this[__XmlNodeList__parent_isSet]))
          dart.throw(new _internal.LateError.fieldAI("_parent"));
        else {
          this[__XmlNodeList__parent_isSet] = true;
          this[__XmlNodeList__parent] = t0;
        }
      }
      get [_nodeTypes]() {
        let t1;
        return dart.test(this[__XmlNodeList__nodeTypes_isSet]) ? (t1 = this[__XmlNodeList__nodeTypes], t1) : dart.throw(new _internal.LateError.fieldNI("_nodeTypes"));
      }
      set [_nodeTypes](t1) {
        if (t1 == null) dart.nullFailed(I[43], 10, 31, "null");
        if (dart.test(this[__XmlNodeList__nodeTypes_isSet]))
          dart.throw(new _internal.LateError.fieldAI("_nodeTypes"));
        else {
          this[__XmlNodeList__nodeTypes_isSet] = true;
          this[__XmlNodeList__nodeTypes] = t1;
        }
      }
      initialize(parent, nodeTypes) {
        if (parent == null) dart.nullFailed(I[43], 15, 27, "parent");
        if (nodeTypes == null) dart.nullFailed(I[43], 15, 52, "nodeTypes");
        this[_parent$] = parent;
        this[_nodeTypes] = nodeTypes;
      }
      _set(index, value$) {
        let value = value$;
        if (index == null) dart.nullFailed(I[43], 21, 25, "index");
        E.as(value);
        if (value == null) dart.nullFailed(I[43], 21, 34, "value");
        core.RangeError.checkValidIndex(index, this);
        if (value.nodeType == node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
          this.replaceRange(index, dart.notNull(index) + 1, this[_expandFragment](value));
        } else {
          exceptions.XmlNodeTypeException.checkValidType(value, this[_nodeTypes]);
          exceptions.XmlParentException.checkNoParent(value);
          this._get(index).detachParent(this[_parent$]);
          super._set(index, value);
          value.attachParent(this[_parent$]);
        }
        return value$;
      }
      set length(length) {
        if (length == null) dart.nullFailed(I[43], 35, 18, "length");
        return dart.throw(new core.UnsupportedError.new("Unsupported length change of node list."));
      }
      get length() {
        return super.length;
      }
      add(value) {
        E.as(value);
        if (value == null) dart.nullFailed(I[43], 39, 14, "value");
        if (value.nodeType == node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
          this.addAll(this[_expandFragment](value));
        } else {
          exceptions.XmlNodeTypeException.checkValidType(value, this[_nodeTypes]);
          exceptions.XmlParentException.checkNoParent(value);
          super.add(value);
          value.attachParent(this[_parent$]);
        }
      }
      addAll(iterable) {
        IterableOfE().as(iterable);
        if (iterable == null) dart.nullFailed(I[43], 51, 27, "iterable");
        let expanded = this[_expandNodes](iterable);
        super.addAll(expanded);
        for (let node of expanded) {
          node.attachParent(this[_parent$]);
        }
      }
      remove(value) {
        let removed = super.remove(value);
        if (dart.test(removed) && E.is(value)) {
          value.detachParent(this[_parent$]);
        }
        return removed;
      }
      removeWhere(test) {
        if (test == null) dart.nullFailed(I[43], 69, 45, "test");
        super.removeWhere(dart.fn(node => {
          if (node == null) dart.nullFailed(I[43], 70, 24, "node");
          let remove = test(node);
          if (dart.test(remove)) {
            node.detachParent(this[_parent$]);
          }
          return remove;
        }, ETobool()));
      }
      retainWhere(test) {
        if (test == null) dart.nullFailed(I[43], 80, 42, "test");
        super.retainWhere(dart.fn(node => {
          if (node == null) dart.nullFailed(I[43], 81, 24, "node");
          let retain = test(node);
          if (!dart.test(retain)) {
            node.detachParent(this[_parent$]);
          }
          return retain;
        }, ETobool()));
      }
      clear() {
        for (let node of this) {
          node.detachParent(this[_parent$]);
        }
        super.clear();
      }
      removeLast() {
        let node = super.removeLast();
        node.detachParent(this[_parent$]);
        return node;
      }
      removeRange(start, end) {
        if (start == null) dart.nullFailed(I[43], 106, 24, "start");
        if (end == null) dart.nullFailed(I[43], 106, 35, "end");
        core.RangeError.checkValidRange(start, end, this.length);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this[_parent$]);
        }
        super.removeRange(start, end);
      }
      fillRange(start, end, fillValue = null) {
        if (start == null) dart.nullFailed(I[43], 115, 22, "start");
        if (end == null) dart.nullFailed(I[43], 115, 33, "end");
        EN().as(fillValue);
        return dart.throw(new core.UnsupportedError.new("Unsupported range filling of node list."));
      }
      setRange(start, end, iterable, skipCount = 0) {
        if (start == null) dart.nullFailed(I[43], 119, 21, "start");
        if (end == null) dart.nullFailed(I[43], 119, 32, "end");
        IterableOfE().as(iterable);
        if (iterable == null) dart.nullFailed(I[43], 119, 49, "iterable");
        if (skipCount == null) dart.nullFailed(I[43], 119, 64, "skipCount");
        core.RangeError.checkValidRange(start, end, this.length);
        let expanded = this[_expandNodes](iterable);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this[_parent$]);
        }
        super.setRange(start, end, expanded, skipCount);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).attachParent(this[_parent$]);
        }
      }
      replaceRange(start, end, iterable) {
        if (start == null) dart.nullFailed(I[43], 132, 25, "start");
        if (end == null) dart.nullFailed(I[43], 132, 36, "end");
        IterableOfE().as(iterable);
        if (iterable == null) dart.nullFailed(I[43], 132, 53, "iterable");
        core.RangeError.checkValidRange(start, end, this.length);
        let expanded = this[_expandNodes](iterable);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this[_parent$]);
        }
        super.replaceRange(start, end, expanded);
        for (let node of expanded) {
          node.attachParent(this[_parent$]);
        }
      }
      setAll(index, iterable) {
        if (index == null) dart.nullFailed(I[43], 145, 19, "index");
        IterableOfE().as(iterable);
        if (iterable == null) dart.nullFailed(I[43], 145, 38, "iterable");
        return dart.throw(new core.UnimplementedError.new());
      }
      insert(index, element) {
        if (index == null) dart.nullFailed(I[43], 148, 19, "index");
        E.as(element);
        if (element == null) dart.nullFailed(I[43], 148, 28, "element");
        if (element.nodeType == node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
          this.insertAll(index, this[_expandFragment](element));
        } else {
          exceptions.XmlNodeTypeException.checkValidType(element, this[_nodeTypes]);
          exceptions.XmlParentException.checkNoParent(element);
          super.insert(index, element);
          element.attachParent(this[_parent$]);
        }
      }
      insertAll(index, iterable) {
        if (index == null) dart.nullFailed(I[43], 160, 22, "index");
        IterableOfE().as(iterable);
        if (iterable == null) dart.nullFailed(I[43], 160, 41, "iterable");
        let expanded = this[_expandNodes](iterable);
        super.insertAll(index, expanded);
        for (let node of expanded) {
          node.attachParent(this[_parent$]);
        }
      }
      removeAt(index) {
        if (index == null) dart.nullFailed(I[43], 169, 18, "index");
        core.RangeError.checkValidIndex(index, this);
        this._get(index).detachParent(this[_parent$]);
        return super.removeAt(index);
      }
      [_expandFragment](fragment) {
        if (fragment == null) dart.nullFailed(I[43], 175, 33, "fragment");
        return fragment.children[$map](E, dart.fn(node => {
          if (node == null) dart.nullFailed(I[43], 175, 69, "node");
          exceptions.XmlNodeTypeException.checkValidType(node, this[_nodeTypes]);
          return E.as(node.copy());
        }, XmlNodeToE()));
      }
      [_expandNodes](iterable) {
        if (iterable == null) dart.nullFailed(I[43], 180, 40, "iterable");
        let expanded = JSArrayOfE().of([]);
        for (let node of iterable) {
          if (node.nodeType == node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
            expanded[$addAll](this[_expandFragment](node));
          } else {
            exceptions.XmlNodeTypeException.checkValidType(node, this[_nodeTypes]);
            exceptions.XmlParentException.checkNoParent(node);
            expanded[$add](node);
          }
        }
        return expanded;
      }
    }
    (XmlNodeList.new = function() {
      this[__XmlNodeList__parent] = null;
      this[__XmlNodeList__parent_isSet] = false;
      this[__XmlNodeList__nodeTypes] = null;
      this[__XmlNodeList__nodeTypes_isSet] = false;
      XmlNodeList.__proto__.new.call(this, JSArrayOfE().of([]));
      ;
    }).prototype = XmlNodeList.prototype;
    dart.addTypeTests(XmlNodeList);
    XmlNodeList.prototype[_is_XmlNodeList_default] = true;
    dart.addTypeCaches(XmlNodeList);
    dart.setMethodSignature(XmlNodeList, () => ({
      __proto__: dart.getMethods(XmlNodeList.__proto__),
      initialize: dart.fnType(dart.void, [node.XmlNode, core.Set$(node_type.XmlNodeType)]),
      [_expandFragment]: dart.fnType(core.Iterable$(E), [E]),
      [_expandNodes]: dart.fnType(core.Iterable$(E), [core.Iterable$(E)])
    }));
    dart.setGetterSignature(XmlNodeList, () => ({
      __proto__: dart.getGetters(XmlNodeList.__proto__),
      [_parent$]: node.XmlNode,
      [_nodeTypes]: core.Set$(node_type.XmlNodeType)
    }));
    dart.setSetterSignature(XmlNodeList, () => ({
      __proto__: dart.getSetters(XmlNodeList.__proto__),
      [_parent$]: node.XmlNode,
      [_nodeTypes]: core.Set$(node_type.XmlNodeType)
    }));
    dart.setLibraryUri(XmlNodeList, I[44]);
    dart.setFieldSignature(XmlNodeList, () => ({
      __proto__: dart.getFields(XmlNodeList.__proto__),
      [__XmlNodeList__parent]: dart.fieldType(dart.nullable(node.XmlNode)),
      [__XmlNodeList__parent_isSet]: dart.fieldType(core.bool),
      [__XmlNodeList__nodeTypes]: dart.fieldType(dart.nullable(core.Set$(node_type.XmlNodeType))),
      [__XmlNodeList__nodeTypes_isSet]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(XmlNodeList, [
      '_set',
      'add',
      'addAll',
      'remove',
      'removeWhere',
      'retainWhere',
      'clear',
      'removeLast',
      'removeRange',
      'fillRange',
      'setRange',
      'replaceRange',
      'setAll',
      'insert',
      'insertAll',
      'removeAt'
    ]);
    dart.defineExtensionAccessors(XmlNodeList, ['length']);
    return XmlNodeList;
  });
  node_list.XmlNodeList = node_list.XmlNodeList$();
  dart.addTypeTests(node_list.XmlNodeList, _is_XmlNodeList_default);
  name_matcher.createNameMatcher = function createNameMatcher(name, namespace) {
    if (name == null) dart.nullFailed(I[45], 7, 41, "name");
    if (name === "*") {
      if (namespace == null || namespace === "*") {
        return dart.fn(named => {
          if (named == null) dart.nullFailed(I[45], 10, 15, "named");
          return true;
        }, T.XmlHasNameTobool());
      } else {
        return dart.fn(named => {
          if (named == null) dart.nullFailed(I[45], 12, 15, "named");
          return named.name.namespaceUri == namespace;
        }, T.XmlHasNameTobool());
      }
    } else {
      if (namespace == null) {
        return dart.fn(named => {
          if (named == null) dart.nullFailed(I[45], 16, 15, "named");
          return named.name.qualified == name;
        }, T.XmlHasNameTobool());
      } else if (namespace === "*") {
        return dart.fn(named => {
          if (named == null) dart.nullFailed(I[45], 18, 15, "named");
          return named.name.local == name;
        }, T.XmlHasNameTobool());
      } else {
        return dart.fn(named => {
          if (named == null) dart.nullFailed(I[45], 20, 15, "named");
          return named.name.local == name && named.name.namespaceUri == namespace;
        }, T.XmlHasNameTobool());
      }
    }
  };
  const XmlNode_XmlHasChildren$36$ = class XmlNode_XmlHasChildren extends node.XmlNode {};
  (XmlNode_XmlHasChildren$36$.new = function() {
    has_children.XmlHasChildren[dart.mixinNew].call(this);
  }).prototype = XmlNode_XmlHasChildren$36$.prototype;
  dart.applyMixin(XmlNode_XmlHasChildren$36$, has_children.XmlHasChildren);
  document_fragment.XmlDocumentFragment = class XmlDocumentFragment extends XmlNode_XmlHasChildren$36$ {
    static parse(input, opts) {
      let t2;
      if (input == null) dart.nullFailed(I[46], 20, 44, "input");
      let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
      let mapping = (t2 = entityMapping, t2 == null ? default_mapping.defaultEntityMapping : t2);
      let parser = document_fragment.documentFragmentParserCache._get(mapping);
      let result = parser.parse(input);
      if (dart.test(result.isFailure)) {
        let lineAndColumn = token$.Token.lineAndColumnOf(result.buffer, result.position);
        dart.throw(new exceptions.XmlParserException.new(result.message, {buffer: result.buffer, position: result.position, line: lineAndColumn[$_get](0), column: lineAndColumn[$_get](1)}));
      }
      return document_fragment.XmlDocumentFragment.as(result.value);
    }
    get nodeType() {
      return node_type.XmlNodeType.DOCUMENT_FRAGMENT;
    }
    copy() {
      return new document_fragment.XmlDocumentFragment.new(this.children.map(node.XmlNode, dart.fn(each => {
        if (each == null) dart.nullFailed(I[46], 48, 41, "each");
        return each.copy();
      }, T.XmlNodeToXmlNode())));
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[46], 51, 29, "visitor");
      return visitor.visitDocumentFragment(this);
    }
  };
  (document_fragment.XmlDocumentFragment.new = function(childrenIterable = C[1] || CT.C1) {
    if (childrenIterable == null) dart.nullFailed(I[46], 38, 42, "childrenIterable");
    document_fragment.XmlDocumentFragment.__proto__.new.call(this);
    this.children.initialize(this, document_fragment.childrenNodeTypes);
    this.children.addAll(childrenIterable);
  }).prototype = document_fragment.XmlDocumentFragment.prototype;
  dart.addTypeTests(document_fragment.XmlDocumentFragment);
  dart.addTypeCaches(document_fragment.XmlDocumentFragment);
  dart.setMethodSignature(document_fragment.XmlDocumentFragment, () => ({
    __proto__: dart.getMethods(document_fragment.XmlDocumentFragment.__proto__),
    copy: dart.fnType(document_fragment.XmlDocumentFragment, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(document_fragment.XmlDocumentFragment, () => ({
    __proto__: dart.getGetters(document_fragment.XmlDocumentFragment.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(document_fragment.XmlDocumentFragment, I[47]);
  dart.defineLazy(document_fragment, {
    /*document_fragment.childrenNodeTypes*/get childrenNodeTypes() {
      return C[20] || CT.C20;
    },
    /*document_fragment.documentFragmentParserCache*/get documentFragmentParserCache() {
      return new (T.XmlCacheOfXmlEntityMapping$Parser()).new(dart.fn(entityMapping => {
        let definition = new parser$.XmlParserDefinition.new(entity_mapping.XmlEntityMapping.as(entityMapping));
        return eof['EndOfInputParserExtension|end'](dart.dynamic, definition.build(dart.dynamic, {start: dart.bind(definition, 'documentFragment')}));
      }, T.dynamicToParser()), 5);
    }
  }, false);
  var _values = dart.privateName(cache, "_values");
  var _loader$ = dart.privateName(cache, "_loader");
  var _maxSize$ = dart.privateName(cache, "_maxSize");
  const _is_XmlCache_default = Symbol('_is_XmlCache_default');
  cache.XmlCache$ = dart.generic((K, V) => {
    var LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    class XmlCache extends core.Object {
      _get(key) {
        let t2;
        K.as(key);
        if (!dart.test(this[_values][$containsKey](key))) {
          let loaded = (t2 = key, this[_loader$](t2));
          this[_values][$_set](key, V.as(loaded));
          while (dart.notNull(this[_values][$length]) > dart.notNull(this[_maxSize$])) {
            this[_values][$remove](this[_values][$keys][$first]);
          }
        }
        return dart.nullCheck(this[_values][$_get](key));
      }
    }
    (XmlCache.new = function(_loader, _maxSize) {
      if (_loader == null) dart.nullFailed(I[48], 10, 17, "_loader");
      if (_maxSize == null) dart.nullFailed(I[48], 10, 31, "_maxSize");
      this[_values] = new (LinkedMapOfK$V()).new();
      this[_loader$] = _loader;
      this[_maxSize$] = _maxSize;
      ;
    }).prototype = XmlCache.prototype;
    dart.addTypeTests(XmlCache);
    XmlCache.prototype[_is_XmlCache_default] = true;
    dart.addTypeCaches(XmlCache);
    dart.setMethodSignature(XmlCache, () => ({
      __proto__: dart.getMethods(XmlCache.__proto__),
      _get: dart.fnType(V, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(XmlCache, I[49]);
    dart.setFieldSignature(XmlCache, () => ({
      __proto__: dart.getFields(XmlCache.__proto__),
      [_loader$]: dart.finalFieldType(dart.fnType(dart.dynamic, [dart.dynamic])),
      [_maxSize$]: dart.finalFieldType(core.int),
      [_values]: dart.finalFieldType(core.Map$(K, V))
    }));
    return XmlCache;
  });
  cache.XmlCache = cache.XmlCache$();
  dart.addTypeTests(cache.XmlCache, _is_XmlCache_default);
  var entityMapping$ = dart.privateName(production, "XmlProductionDefinition.entityMapping");
  production.XmlProductionDefinition = class XmlProductionDefinition extends grammar.GrammarDefinition {
    get entityMapping() {
      return this[entityMapping$];
    }
    set entityMapping(value) {
      super.entityMapping = value;
    }
    start() {
      return eof['EndOfInputParserExtension|end'](dart.dynamic, reference.ref0(dart.dynamic, dart.bind(this, 'document')), "Expected end of input");
    }
    attribute() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](reference.ref0(dart.dynamic, dart.bind(this, 'qualified')), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), string['PredicateStringExtension|toParser']("=")), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), reference.ref0(dart.dynamic, dart.bind(this, 'attributeValue')));
    }
    attributeValue() {
      return choice['ChoiceParserExtension|or'](reference.ref0(dart.dynamic, dart.bind(this, 'attributeValueDouble')), reference.ref0(dart.dynamic, dart.bind(this, 'attributeValueSingle')));
    }
    attributeValueDouble() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("\""), new character_data_parser.XmlCharacterDataParser.new(this.entityMapping, "\"", 0)), string['PredicateStringExtension|toParser']("\""));
    }
    attributeValueSingle() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("'"), new character_data_parser.XmlCharacterDataParser.new(this.entityMapping, "'", 0)), string['PredicateStringExtension|toParser']("'"));
    }
    attributes() {
      return possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, pick['PickParserExtension|pick'](dart.dynamic, sequence['SequenceParserExtension|seq'](reference.ref0(dart.dynamic, dart.bind(this, 'space')), reference.ref0(dart.dynamic, dart.bind(this, 'attribute'))), 1));
    }
    comment() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("<!--"), flatten['FlattenParserExtension|flatten'](T.ListOfString(), lazy['LazyRepeatingParserExtension|starLazy'](core.String, any.any(), string['PredicateStringExtension|toParser']("-->")), "Expected comment content")), string['PredicateStringExtension|toParser']("-->"));
    }
    cdata() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("<![CDATA["), flatten['FlattenParserExtension|flatten'](T.ListOfString(), lazy['LazyRepeatingParserExtension|starLazy'](core.String, any.any(), string['PredicateStringExtension|toParser']("]]>")), "Expected CDATA content")), string['PredicateStringExtension|toParser']("]]>"));
    }
    content() {
      return possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](reference.ref0(dart.dynamic, dart.bind(this, 'characterData')), reference.ref0(dart.dynamic, dart.bind(this, 'element'))), reference.ref0(dart.dynamic, dart.bind(this, 'processing'))), reference.ref0(dart.dynamic, dart.bind(this, 'comment'))), reference.ref0(dart.dynamic, dart.bind(this, 'cdata'))));
    }
    declaration() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("<?xml"), reference.ref0(dart.dynamic, dart.bind(this, 'attributes'))), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), string['PredicateStringExtension|toParser']("?>"));
    }
    doctype() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("<!DOCTYPE"), reference.ref0(dart.dynamic, dart.bind(this, 'space'))), flatten['FlattenParserExtension|flatten'](core.List, separated_by['SeparatedBy|separatedBy'](dart.dynamic, dart.dynamic, choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](reference.ref0(dart.dynamic, dart.bind(this, 'nameToken')), reference.ref0(dart.dynamic, dart.bind(this, 'attributeValue'))), sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("["), lazy['LazyRepeatingParserExtension|starLazy'](core.String, any.any(), string['PredicateStringExtension|toParser']("]"))), string['PredicateStringExtension|toParser']("]"))), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), "Expected doctype content")), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), string['PredicateStringExtension|toParser'](">"));
    }
    document() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](optional['OptionalParserExtension|optional'](dart.dynamic, reference.ref0(dart.dynamic, dart.bind(this, 'declaration'))), reference.ref0(dart.dynamic, dart.bind(this, 'misc'))), optional['OptionalParserExtension|optional'](dart.dynamic, reference.ref0(dart.dynamic, dart.bind(this, 'doctype')))), reference.ref0(dart.dynamic, dart.bind(this, 'misc'))), reference.ref0(dart.dynamic, dart.bind(this, 'element'))), reference.ref0(dart.dynamic, dart.bind(this, 'misc')));
    }
    documentFragment() {
      return pick['PickParserExtension|pick'](dart.dynamic, sequence['SequenceParserExtension|seq'](possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, reference.ref0(dart.dynamic, dart.bind(this, 'documentFragmentContent'))), choice['ChoiceParserExtension||'](eof.endOfInput("Expected end of input"), reference.ref0(dart.dynamic, dart.bind(this, 'element')))), 0);
    }
    documentFragmentContent() {
      return choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](reference.ref0(dart.dynamic, dart.bind(this, 'characterData')), reference.ref0(dart.dynamic, dart.bind(this, 'element'))), reference.ref0(dart.dynamic, dart.bind(this, 'comment'))), reference.ref0(dart.dynamic, dart.bind(this, 'cdata'))), reference.ref0(dart.dynamic, dart.bind(this, 'declaration'))), reference.ref0(dart.dynamic, dart.bind(this, 'processing'))), reference.ref0(dart.dynamic, dart.bind(this, 'doctype')));
    }
    element() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("<"), reference.ref0(dart.dynamic, dart.bind(this, 'qualified'))), reference.ref0(dart.dynamic, dart.bind(this, 'attributes'))), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), choice['ChoiceParserExtension|or'](string['PredicateStringExtension|toParser']("/>"), sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser'](">"), reference.ref0(dart.dynamic, dart.bind(this, 'content'))), token['TokenParserExtension|token'](core.String, string['PredicateStringExtension|toParser']("</"))), reference.ref0(dart.dynamic, dart.bind(this, 'qualified'))), reference.ref0(dart.dynamic, dart.bind(this, 'spaceOptional'))), string['PredicateStringExtension|toParser'](">"))));
    }
    processing() {
      return sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](sequence['SequenceParserExtension|seq'](string['PredicateStringExtension|toParser']("<?"), reference.ref0(dart.dynamic, dart.bind(this, 'nameToken'))), optional['OptionalParserExtension|optionalWith'](dart.dynamic, pick['PickParserExtension|pick'](dart.dynamic, sequence['SequenceParserExtension|seq'](reference.ref0(dart.dynamic, dart.bind(this, 'space')), flatten['FlattenParserExtension|flatten'](T.ListOfString(), lazy['LazyRepeatingParserExtension|starLazy'](core.String, any.any(), string['PredicateStringExtension|toParser']("?>")), "Expected processing instruction content")), 1), "")), string['PredicateStringExtension|toParser']("?>"));
    }
    qualified() {
      return reference.ref0(dart.dynamic, dart.bind(this, 'nameToken'));
    }
    characterData() {
      return new character_data_parser.XmlCharacterDataParser.new(this.entityMapping, "<", 1);
    }
    misc() {
      return possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, choice['ChoiceParserExtension|or'](choice['ChoiceParserExtension|or'](reference.ref0(dart.dynamic, dart.bind(this, 'spaceText')), reference.ref0(dart.dynamic, dart.bind(this, 'comment'))), reference.ref0(dart.dynamic, dart.bind(this, 'processing'))));
    }
    space() {
      return possessive['PossessiveRepeatingParserExtension|plus'](core.String, whitespace.whitespace());
    }
    spaceText() {
      return flatten['FlattenParserExtension|flatten'](dart.dynamic, reference.ref0(dart.dynamic, dart.bind(this, 'space')), "Expected whitespace");
    }
    spaceOptional() {
      return possessive['PossessiveRepeatingParserExtension|star'](core.String, whitespace.whitespace());
    }
    nameToken() {
      return flatten['FlattenParserExtension|flatten'](core.List, sequence['SequenceParserExtension|seq'](reference.ref0(dart.dynamic, dart.bind(this, 'nameStartChar')), possessive['PossessiveRepeatingParserExtension|star'](dart.dynamic, reference.ref0(dart.dynamic, dart.bind(this, 'nameChar')))), "Expected name");
    }
    nameStartChar() {
      return pattern.pattern(production.XmlProductionDefinition._nameStartChars);
    }
    nameChar() {
      return pattern.pattern(production.XmlProductionDefinition._nameChars);
    }
  };
  (production.XmlProductionDefinition.new = function(entityMapping) {
    if (entityMapping == null) dart.nullFailed(I[52], 30, 32, "entityMapping");
    this[entityMapping$] = entityMapping;
    production.XmlProductionDefinition.__proto__.new.call(this);
    ;
  }).prototype = production.XmlProductionDefinition.prototype;
  dart.addTypeTests(production.XmlProductionDefinition);
  dart.addTypeCaches(production.XmlProductionDefinition);
  dart.setMethodSignature(production.XmlProductionDefinition, () => ({
    __proto__: dart.getMethods(production.XmlProductionDefinition.__proto__),
    start: dart.fnType(parser.Parser, []),
    attribute: dart.fnType(parser.Parser, []),
    attributeValue: dart.fnType(parser.Parser, []),
    attributeValueDouble: dart.fnType(parser.Parser, []),
    attributeValueSingle: dart.fnType(parser.Parser, []),
    attributes: dart.fnType(parser.Parser, []),
    comment: dart.fnType(parser.Parser, []),
    cdata: dart.fnType(parser.Parser, []),
    content: dart.fnType(parser.Parser, []),
    declaration: dart.fnType(parser.Parser, []),
    doctype: dart.fnType(parser.Parser, []),
    document: dart.fnType(parser.Parser, []),
    documentFragment: dart.fnType(parser.Parser, []),
    documentFragmentContent: dart.fnType(parser.Parser, []),
    element: dart.fnType(parser.Parser, []),
    processing: dart.fnType(parser.Parser, []),
    qualified: dart.fnType(parser.Parser, []),
    characterData: dart.fnType(parser.Parser, []),
    misc: dart.fnType(parser.Parser, []),
    space: dart.fnType(parser.Parser, []),
    spaceText: dart.fnType(parser.Parser, []),
    spaceOptional: dart.fnType(parser.Parser, []),
    nameToken: dart.fnType(parser.Parser, []),
    nameStartChar: dart.fnType(parser.Parser, []),
    nameChar: dart.fnType(parser.Parser, [])
  }));
  dart.setLibraryUri(production.XmlProductionDefinition, I[53]);
  dart.setFieldSignature(production.XmlProductionDefinition, () => ({
    __proto__: dart.getFields(production.XmlProductionDefinition.__proto__),
    entityMapping: dart.finalFieldType(entity_mapping.XmlEntityMapping)
  }));
  dart.defineLazy(production.XmlProductionDefinition, {
    /*production.XmlProductionDefinition._nameStartChars*/get _nameStartChars() {
      return ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�";
    },
    /*production.XmlProductionDefinition._nameChars*/get _nameChars() {
      return ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�-.0-9·̀-ͯ‿-⁀";
    }
  }, false);
  const _is_XmlGrammarDefinition_default = Symbol('_is_XmlGrammarDefinition_default');
  grammar$.XmlGrammarDefinition$ = dart.generic((TNode, TName) => {
    var dynamicToTNode = () => (dynamicToTNode = dart.constFn(dart.fnType(TNode, [dart.dynamic])))();
    var IterableOfTNode = () => (IterableOfTNode = dart.constFn(core.Iterable$(TNode)))();
    var JSArrayOfTNode = () => (JSArrayOfTNode = dart.constFn(_interceptors.JSArray$(TNode)))();
    class XmlGrammarDefinition extends production.XmlProductionDefinition {
      attribute() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.attribute(), dart.fn(each => this.createAttribute(TName.as(dart.dsend(each, '_get', [0])), core.String.as(dart.dsend(dart.dsend(each, '_get', [4]), '_get', [0])), attribute_type.XmlAttributeType.as(dart.dsend(dart.dsend(each, '_get', [4]), '_get', [1]))), dynamicToTNode()));
      }
      attributeValueDouble() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.attributeValueDouble(), dart.fn(each => [dart.dsend(each, '_get', [1]), attribute_type.XmlAttributeType.DOUBLE_QUOTE], T.dynamicToList()));
      }
      attributeValueSingle() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.attributeValueSingle(), dart.fn(each => [dart.dsend(each, '_get', [1]), attribute_type.XmlAttributeType.SINGLE_QUOTE], T.dynamicToList()));
      }
      comment() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.comment(), dart.fn(each => this.createComment(core.String.as(dart.dsend(each, '_get', [1]))), dynamicToTNode()));
      }
      declaration() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.declaration(), dart.fn(each => this.createDeclaration(IterableOfTNode().as(dart.dgsend(dart.dsend(each, '_get', [1]), [TNode], 'cast', []))), dynamicToTNode()));
      }
      cdata() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.cdata(), dart.fn(each => this.createCDATA(core.String.as(dart.dsend(each, '_get', [1]))), dynamicToTNode()));
      }
      doctype() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.doctype(), dart.fn(each => this.createDoctype(core.String.as(dart.dsend(each, '_get', [2]))), dynamicToTNode()));
      }
      document() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.document(), dart.fn(each => {
          let nodes = [];
          if (dart.dsend(each, '_get', [0]) != null) {
            nodes[$add](dart.dsend(each, '_get', [0]));
          }
          nodes[$addAll](core.Iterable.as(dart.dsend(each, '_get', [1])));
          if (dart.dsend(each, '_get', [2]) != null) {
            nodes[$add](dart.dsend(each, '_get', [2]));
          }
          nodes[$addAll](core.Iterable.as(dart.dsend(each, '_get', [3])));
          nodes[$add](dart.dsend(each, '_get', [4]));
          nodes[$addAll](core.Iterable.as(dart.dsend(each, '_get', [5])));
          return this.createDocument(nodes[$cast](TNode));
        }, dynamicToTNode()));
      }
      documentFragment() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.documentFragment(), dart.fn(nodes => this.createDocumentFragment(IterableOfTNode().as(dart.dgsend(nodes, [TNode], 'cast', []))), dynamicToTNode()));
      }
      element() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.element(), dart.fn(list => {
          let name = TName.as(dart.dsend(list, '_get', [1]));
          let attributes = dart.dgsend(dart.dsend(list, '_get', [2]), [TNode], 'cast', []);
          if (dart.equals(dart.dsend(list, '_get', [4]), "/>")) {
            return this.createElement(name, IterableOfTNode().as(attributes), JSArrayOfTNode().of([]), true);
          } else {
            if (dart.equals(dart.dsend(list, '_get', [1]), dart.dsend(dart.dsend(list, '_get', [4]), '_get', [3]))) {
              let children = dart.dgsend(dart.dsend(dart.dsend(list, '_get', [4]), '_get', [1]), [TNode], 'cast', []);
              return this.createElement(name, IterableOfTNode().as(attributes), IterableOfTNode().as(children), core.bool.as(dart.dload(children, 'isNotEmpty')));
            } else {
              let token = token$.Token.as(dart.dsend(dart.dsend(list, '_get', [4]), '_get', [2]));
              let lineAndColumn = token$.Token.lineAndColumnOf(token.buffer, token.start);
              dart.throw(new exceptions.XmlParserException.new("Expected </" + dart.str(dart.dsend(list, '_get', [1])) + ">, but found </" + dart.str(dart.dsend(dart.dsend(list, '_get', [4]), '_get', [3])) + ">", {buffer: token.buffer, position: token.start, line: lineAndColumn[$_get](0), column: lineAndColumn[$_get](1)}));
            }
          }
        }, dynamicToTNode()));
      }
      processing() {
        return map['MapParserExtension|map'](dart.dynamic, dart.dynamic, super.processing(), dart.fn(each => this.createProcessing(core.String.as(dart.dsend(each, '_get', [1])), core.String.as(dart.dsend(each, '_get', [2]))), dynamicToTNode()));
      }
      qualified() {
        return map['MapParserExtension|map'](core.String, dart.dynamic, cast['CastParserExtension|cast'](dart.dynamic, core.String, super.qualified()), dart.bind(this, 'createQualified'));
      }
      characterData() {
        return map['MapParserExtension|map'](core.String, dart.dynamic, cast['CastParserExtension|cast'](dart.dynamic, core.String, super.characterData()), dart.bind(this, 'createText'));
      }
      spaceText() {
        return map['MapParserExtension|map'](core.String, dart.dynamic, cast['CastParserExtension|cast'](dart.dynamic, core.String, super.spaceText()), dart.bind(this, 'createText'));
      }
    }
    (XmlGrammarDefinition.new = function(entityMapping) {
      if (entityMapping == null) dart.nullFailed(I[51], 12, 41, "entityMapping");
      XmlGrammarDefinition.__proto__.new.call(this, entityMapping);
      ;
    }).prototype = XmlGrammarDefinition.prototype;
    dart.addTypeTests(XmlGrammarDefinition);
    XmlGrammarDefinition.prototype[_is_XmlGrammarDefinition_default] = true;
    dart.addTypeCaches(XmlGrammarDefinition);
    dart.setLibraryUri(XmlGrammarDefinition, I[54]);
    return XmlGrammarDefinition;
  });
  grammar$.XmlGrammarDefinition = grammar$.XmlGrammarDefinition$();
  dart.addTypeTests(grammar$.XmlGrammarDefinition, _is_XmlGrammarDefinition_default);
  parser$.XmlParserDefinition = class XmlParserDefinition extends grammar$.XmlGrammarDefinition$(node.XmlNode, name$.XmlName) {
    createAttribute(name, text, type) {
      name$.XmlName.as(name);
      if (name == null) dart.nullFailed(I[50], 23, 19, "name");
      if (text == null) dart.nullFailed(I[50], 23, 32, "text");
      if (type == null) dart.nullFailed(I[50], 23, 55, "type");
      return new attribute.XmlAttribute.new(name, text, type);
    }
    createComment(text) {
      if (text == null) dart.nullFailed(I[50], 27, 35, "text");
      return new comment.XmlComment.new(text);
    }
    createCDATA(text) {
      if (text == null) dart.nullFailed(I[50], 30, 31, "text");
      return new cdata.XmlCDATA.new(text);
    }
    createDeclaration(attributes) {
      T.IterableOfXmlNode().as(attributes);
      if (attributes == null) dart.nullFailed(I[50], 33, 54, "attributes");
      return new declaration.XmlDeclaration.new(attributes[$cast](attribute.XmlAttribute));
    }
    createDoctype(text) {
      if (text == null) dart.nullFailed(I[50], 37, 35, "text");
      return new doctype.XmlDoctype.new(text);
    }
    createDocument(children) {
      T.IterableOfXmlNode().as(children);
      if (children == null) dart.nullFailed(I[50], 40, 48, "children");
      return new document.XmlDocument.new(children);
    }
    createDocumentFragment(children) {
      T.IterableOfXmlNode().as(children);
      if (children == null) dart.nullFailed(I[50], 44, 52, "children");
      return new document_fragment.XmlDocumentFragment.new(children);
    }
    createElement(name, attributes, children, isSelfClosing = true) {
      name$.XmlName.as(name);
      if (name == null) dart.nullFailed(I[50], 48, 36, "name");
      T.IterableOfXmlNode().as(attributes);
      if (attributes == null) dart.nullFailed(I[50], 48, 60, "attributes");
      T.IterableOfXmlNode().as(children);
      if (children == null) dart.nullFailed(I[50], 49, 29, "children");
      if (isSelfClosing == null) dart.nullFailed(I[50], 49, 45, "isSelfClosing");
      return new element.XmlElement.new(name, attributes[$cast](attribute.XmlAttribute), children, isSelfClosing);
    }
    createProcessing(target, text) {
      if (target == null) dart.nullFailed(I[50], 54, 41, "target");
      if (text == null) dart.nullFailed(I[50], 54, 56, "text");
      return new processing.XmlProcessing.new(target, text);
    }
    createQualified(name) {
      if (name == null) dart.nullFailed(I[50], 58, 34, "name");
      return name$.XmlName.fromString(name);
    }
    createText(text) {
      if (text == null) dart.nullFailed(I[50], 61, 29, "text");
      return new text$.XmlText.new(text);
    }
  };
  (parser$.XmlParserDefinition.new = function(entityMapping) {
    if (entityMapping == null) dart.nullFailed(I[50], 19, 40, "entityMapping");
    parser$.XmlParserDefinition.__proto__.new.call(this, entityMapping);
    ;
  }).prototype = parser$.XmlParserDefinition.prototype;
  dart.addTypeTests(parser$.XmlParserDefinition);
  dart.addTypeCaches(parser$.XmlParserDefinition);
  dart.setMethodSignature(parser$.XmlParserDefinition, () => ({
    __proto__: dart.getMethods(parser$.XmlParserDefinition.__proto__),
    createAttribute: dart.fnType(attribute.XmlAttribute, [dart.nullable(core.Object), core.String, attribute_type.XmlAttributeType]),
    createComment: dart.fnType(comment.XmlComment, [core.String]),
    createCDATA: dart.fnType(cdata.XmlCDATA, [core.String]),
    createDeclaration: dart.fnType(declaration.XmlDeclaration, [dart.nullable(core.Object)]),
    createDoctype: dart.fnType(doctype.XmlDoctype, [core.String]),
    createDocument: dart.fnType(document.XmlDocument, [dart.nullable(core.Object)]),
    createDocumentFragment: dart.fnType(node.XmlNode, [dart.nullable(core.Object)]),
    createElement: dart.fnType(element.XmlElement, [dart.nullable(core.Object), dart.nullable(core.Object), dart.nullable(core.Object)], [core.bool]),
    createProcessing: dart.fnType(processing.XmlProcessing, [core.String, core.String]),
    createQualified: dart.fnType(name$.XmlName, [core.String]),
    createText: dart.fnType(text$.XmlText, [core.String])
  }));
  dart.setLibraryUri(parser$.XmlParserDefinition, I[55]);
  const XmlNode_XmlHasChildren$36$0 = class XmlNode_XmlHasChildren extends node.XmlNode {};
  (XmlNode_XmlHasChildren$36$0.new = function() {
    has_children.XmlHasChildren[dart.mixinNew].call(this);
  }).prototype = XmlNode_XmlHasChildren$36$0.prototype;
  dart.applyMixin(XmlNode_XmlHasChildren$36$0, has_children.XmlHasChildren);
  document.XmlDocument = class XmlDocument extends XmlNode_XmlHasChildren$36$0 {
    static parse(input, opts) {
      let t2;
      if (input == null) dart.nullFailed(I[56], 28, 36, "input");
      let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
      let mapping = (t2 = entityMapping, t2 == null ? default_mapping.defaultEntityMapping : t2);
      let parser = document.documentParserCache._get(mapping);
      let result = parser.parse(input);
      if (dart.test(result.isFailure)) {
        let lineAndColumn = token$.Token.lineAndColumnOf(result.buffer, result.position);
        dart.throw(new exceptions.XmlParserException.new(result.message, {buffer: result.buffer, position: result.position, line: lineAndColumn[$_get](0), column: lineAndColumn[$_get](1)}));
      }
      return document.XmlDocument.as(result.value);
    }
    get declaration() {
      for (let node of this.children) {
        if (declaration.XmlDeclaration.is(node)) {
          return node;
        }
      }
      return null;
    }
    get doctypeElement() {
      for (let node of this.children) {
        if (doctype.XmlDoctype.is(node)) {
          return node;
        }
      }
      return null;
    }
    get rootElement() {
      for (let node of this.children) {
        if (element.XmlElement.is(node)) {
          return node;
        }
      }
      dart.throw(new core.StateError.new("Empty XML document"));
    }
    get nodeType() {
      return node_type.XmlNodeType.DOCUMENT;
    }
    copy() {
      return new document.XmlDocument.new(this.children.map(node.XmlNode, dart.fn(each => {
        if (each == null) dart.nullFailed(I[56], 106, 51, "each");
        return each.copy();
      }, T.XmlNodeToXmlNode())));
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[56], 109, 29, "visitor");
      return visitor.visitDocument(this);
    }
  };
  (document.XmlDocument.new = function(childrenIterable = C[1] || CT.C1) {
    if (childrenIterable == null) dart.nullFailed(I[56], 45, 34, "childrenIterable");
    document.XmlDocument.__proto__.new.call(this);
    this.children.initialize(this, document.childrenNodeTypes);
    this.children.addAll(childrenIterable);
  }).prototype = document.XmlDocument.prototype;
  dart.addTypeTests(document.XmlDocument);
  dart.addTypeCaches(document.XmlDocument);
  dart.setMethodSignature(document.XmlDocument, () => ({
    __proto__: dart.getMethods(document.XmlDocument.__proto__),
    copy: dart.fnType(document.XmlDocument, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(document.XmlDocument, () => ({
    __proto__: dart.getGetters(document.XmlDocument.__proto__),
    declaration: dart.nullable(declaration.XmlDeclaration),
    doctypeElement: dart.nullable(doctype.XmlDoctype),
    rootElement: element.XmlElement,
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(document.XmlDocument, I[57]);
  dart.defineLazy(document, {
    /*document.childrenNodeTypes*/get childrenNodeTypes() {
      return C[20] || CT.C20;
    },
    /*document.documentParserCache*/get documentParserCache() {
      return new (T.XmlCacheOfXmlEntityMapping$Parser()).new(dart.fn(entityMapping => new parser$.XmlParserDefinition.new(entity_mapping.XmlEntityMapping.as(entityMapping)).build(dart.dynamic), T.dynamicToParser()), 5);
    }
  }, false);
  doctype.XmlDoctype = class XmlDoctype extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.DOCUMENT_TYPE;
    }
    copy() {
      return new doctype.XmlDoctype.new(this.text);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[58], 17, 29, "visitor");
      return visitor.visitDoctype(this);
    }
  };
  (doctype.XmlDoctype.new = function(text) {
    if (text == null) dart.nullFailed(I[58], 8, 21, "text");
    doctype.XmlDoctype.__proto__.new.call(this, text);
    ;
  }).prototype = doctype.XmlDoctype.prototype;
  dart.addTypeTests(doctype.XmlDoctype);
  dart.addTypeCaches(doctype.XmlDoctype);
  dart.setMethodSignature(doctype.XmlDoctype, () => ({
    __proto__: dart.getMethods(doctype.XmlDoctype.__proto__),
    copy: dart.fnType(doctype.XmlDoctype, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(doctype.XmlDoctype, () => ({
    __proto__: dart.getGetters(doctype.XmlDoctype.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(doctype.XmlDoctype, I[59]);
  const XmlNode_XmlHasParent$36$1 = class XmlNode_XmlHasParent extends node.XmlNode {};
  (XmlNode_XmlHasParent$36$1.new = function() {
    has_parent.XmlHasParent$(node.XmlNode)[dart.mixinNew].call(this);
  }).prototype = XmlNode_XmlHasParent$36$1.prototype;
  dart.applyMixin(XmlNode_XmlHasParent$36$1, has_parent.XmlHasParent$(node.XmlNode));
  const XmlNode_XmlHasAttributes$36$ = class XmlNode_XmlHasAttributes extends XmlNode_XmlHasParent$36$1 {};
  (XmlNode_XmlHasAttributes$36$.new = function() {
    has_attributes.XmlHasAttributes[dart.mixinNew].call(this);
    XmlNode_XmlHasAttributes$36$.__proto__.new.call(this);
  }).prototype = XmlNode_XmlHasAttributes$36$.prototype;
  dart.applyMixin(XmlNode_XmlHasAttributes$36$, has_attributes.XmlHasAttributes);
  declaration.XmlDeclaration = class XmlDeclaration extends XmlNode_XmlHasAttributes$36$ {
    get version() {
      return this.getAttribute("version");
    }
    set version(value) {
      return this.setAttribute("version", value);
    }
    get encoding() {
      return this.getAttribute("encoding");
    }
    set encoding(value) {
      return this.setAttribute("encoding", value);
    }
    get standalone() {
      return this.getAttribute("standalone") === "yes";
    }
    set standalone(value) {
      return this.setAttribute("standalone", value == null ? null : dart.test(value) ? "yes" : "no");
    }
    get nodeType() {
      return node_type.XmlNodeType.DECLARATION;
    }
    copy() {
      return new declaration.XmlDeclaration.new(this.attributes.map(attribute.XmlAttribute, dart.fn(each => {
        if (each == null) dart.nullFailed(I[60], 45, 38, "each");
        return each.copy();
      }, T.XmlAttributeToXmlAttribute())));
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[60], 48, 29, "visitor");
      return visitor.visitDeclaration(this);
    }
  };
  (declaration.XmlDeclaration.new = function(attributesIterable = C[0] || CT.C0) {
    if (attributesIterable == null) dart.nullFailed(I[60], 11, 42, "attributesIterable");
    declaration.XmlDeclaration.__proto__.new.call(this);
    this.attributes.initialize(this, declaration.attributeNodeTypes);
    this.attributes.addAll(attributesIterable);
  }).prototype = declaration.XmlDeclaration.prototype;
  dart.addTypeTests(declaration.XmlDeclaration);
  dart.addTypeCaches(declaration.XmlDeclaration);
  dart.setMethodSignature(declaration.XmlDeclaration, () => ({
    __proto__: dart.getMethods(declaration.XmlDeclaration.__proto__),
    copy: dart.fnType(declaration.XmlDeclaration, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(declaration.XmlDeclaration, () => ({
    __proto__: dart.getGetters(declaration.XmlDeclaration.__proto__),
    version: dart.nullable(core.String),
    encoding: dart.nullable(core.String),
    standalone: core.bool,
    nodeType: node_type.XmlNodeType
  }));
  dart.setSetterSignature(declaration.XmlDeclaration, () => ({
    __proto__: dart.getSetters(declaration.XmlDeclaration.__proto__),
    version: dart.nullable(core.String),
    encoding: dart.nullable(core.String),
    standalone: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(declaration.XmlDeclaration, I[61]);
  dart.defineLazy(declaration, {
    /*declaration.attributeNodeTypes*/get attributeNodeTypes() {
      return C[19] || CT.C19;
    },
    /*declaration.versionAttribute*/get versionAttribute() {
      return "version";
    },
    /*declaration.encodingAttribute*/get encodingAttribute() {
      return "encoding";
    },
    /*declaration.standaloneAttribute*/get standaloneAttribute() {
      return "standalone";
    }
  }, false);
  entity_mapping.XmlEntityMapping = class XmlEntityMapping extends core.Object {
    decode(input) {
      if (input == null) dart.nullFailed(I[62], 8, 24, "input");
      let output = new core.StringBuffer.new();
      let length = input.length;
      let position = 0;
      let start = position;
      while (position < length) {
        let value = input[$codeUnitAt](position);
        if (value === 38) {
          let index = input[$indexOf](";", position + 1);
          if (position + 1 < index) {
            let entity = input[$substring](position + 1, index);
            let value = this.decodeEntity(entity);
            if (value != null) {
              output.write(input[$substring](start, position));
              output.write(value);
              position = index + 1;
              start = position;
            } else {
              position = position + 1;
            }
          } else {
            position = position + 1;
          }
        } else {
          position = position + 1;
        }
      }
      output.write(input[$substring](start, position));
      return output.toString();
    }
    encodeAttributeValueWithQuotes(input, type) {
      if (input == null) dart.nullFailed(I[62], 51, 48, "input");
      if (type == null) dart.nullFailed(I[62], 51, 72, "type");
      let quote = entity_mapping._attributeQuote[$_get](type);
      return dart.str(quote) + dart.str(this.encodeAttributeValue(input, type)) + dart.str(quote);
    }
  };
  (entity_mapping.XmlEntityMapping.new = function() {
    ;
  }).prototype = entity_mapping.XmlEntityMapping.prototype;
  dart.addTypeTests(entity_mapping.XmlEntityMapping);
  dart.addTypeCaches(entity_mapping.XmlEntityMapping);
  dart.setMethodSignature(entity_mapping.XmlEntityMapping, () => ({
    __proto__: dart.getMethods(entity_mapping.XmlEntityMapping.__proto__),
    decode: dart.fnType(core.String, [core.String]),
    encodeAttributeValueWithQuotes: dart.fnType(core.String, [core.String, attribute_type.XmlAttributeType])
  }));
  dart.setLibraryUri(entity_mapping.XmlEntityMapping, I[63]);
  dart.defineLazy(entity_mapping, {
    /*entity_mapping._attributeQuote*/get _attributeQuote() {
      return C[21] || CT.C21;
    }
  }, false);
  var entities$ = dart.privateName(default_mapping, "XmlDefaultEntityMapping.entities");
  default_mapping.XmlDefaultEntityMapping = class XmlDefaultEntityMapping extends entity_mapping.XmlEntityMapping {
    get entities() {
      return this[entities$];
    }
    set entities(value) {
      super.entities = value;
    }
    decodeEntity(input) {
      if (input == null) dart.nullFailed(I[64], 26, 31, "input");
      if (input.length > 1 && input[$_get](0) === "#") {
        if (input.length > 2 && (input[$_get](1) === "x" || input[$_get](1) === "X")) {
          return core.String.fromCharCode(core.int.parse(input[$substring](2), {radix: 16}));
        } else {
          return core.String.fromCharCode(core.int.parse(input[$substring](1)));
        }
      } else {
        return this.entities[$_get](input);
      }
    }
    encodeText(input) {
      if (input == null) dart.nullFailed(I[64], 42, 28, "input");
      return input[$replaceAllMapped](default_mapping._textPattern, C[22] || CT.C22);
    }
    encodeAttributeValue(input, type) {
      if (input == null) dart.nullFailed(I[64], 46, 38, "input");
      if (type == null) dart.nullFailed(I[64], 46, 62, "type");
      switch (type) {
        case C[15] || CT.C15:
        {
          return input[$replaceAllMapped](default_mapping._singeQuoteAttributePattern, C[23] || CT.C23);
        }
        case C[14] || CT.C14:
        {
          return input[$replaceAllMapped](default_mapping._doubleQuoteAttributePattern, C[24] || CT.C24);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (default_mapping.XmlDefaultEntityMapping.xml = function() {
    default_mapping.XmlDefaultEntityMapping.new.call(this, named_entities.xmlEntities);
  }).prototype = default_mapping.XmlDefaultEntityMapping.prototype;
  (default_mapping.XmlDefaultEntityMapping.html = function() {
    default_mapping.XmlDefaultEntityMapping.new.call(this, named_entities.htmlEntities);
  }).prototype = default_mapping.XmlDefaultEntityMapping.prototype;
  (default_mapping.XmlDefaultEntityMapping.html5 = function() {
    default_mapping.XmlDefaultEntityMapping.new.call(this, named_entities.html5Entities);
  }).prototype = default_mapping.XmlDefaultEntityMapping.prototype;
  (default_mapping.XmlDefaultEntityMapping.new = function(entities) {
    if (entities == null) dart.nullFailed(I[64], 23, 38, "entities");
    this[entities$] = entities;
    default_mapping.XmlDefaultEntityMapping.__proto__.new.call(this);
    ;
  }).prototype = default_mapping.XmlDefaultEntityMapping.prototype;
  dart.addTypeTests(default_mapping.XmlDefaultEntityMapping);
  dart.addTypeCaches(default_mapping.XmlDefaultEntityMapping);
  dart.setMethodSignature(default_mapping.XmlDefaultEntityMapping, () => ({
    __proto__: dart.getMethods(default_mapping.XmlDefaultEntityMapping.__proto__),
    decodeEntity: dart.fnType(dart.nullable(core.String), [core.String]),
    encodeText: dart.fnType(core.String, [core.String]),
    encodeAttributeValue: dart.fnType(core.String, [core.String, attribute_type.XmlAttributeType])
  }));
  dart.setLibraryUri(default_mapping.XmlDefaultEntityMapping, I[65]);
  dart.setFieldSignature(default_mapping.XmlDefaultEntityMapping, () => ({
    __proto__: dart.getFields(default_mapping.XmlDefaultEntityMapping.__proto__),
    entities: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  default_mapping._textReplace = function _textReplace(match) {
    if (match == null) dart.nullFailed(I[64], 62, 27, "match");
    switch (match.group(0)) {
      case "<":
      {
        return "&lt;";
      }
      case "&":
      {
        return "&amp;";
      }
      case "]]>":
      {
        return "]]&gt;";
      }
    }
    dart.throw(new core.ArgumentError.value(match, "match"));
  };
  default_mapping._singeQuoteAttributeReplace = function _singeQuoteAttributeReplace(match) {
    if (match == null) dart.nullFailed(I[64], 78, 42, "match");
    switch (match.group(0)) {
      case "'":
      {
        return "&apos;";
      }
      case "&":
      {
        return "&amp;";
      }
      case "<":
      {
        return "&lt;";
      }
      case "\n":
      {
        return "&#xA;";
      }
      case "\r":
      {
        return "&#xD;";
      }
      case "\t":
      {
        return "&#x9;";
      }
    }
    dart.throw(new core.ArgumentError.value(match, "match"));
  };
  default_mapping._doubleQuoteAttributeReplace = function _doubleQuoteAttributeReplace(match) {
    if (match == null) dart.nullFailed(I[64], 100, 43, "match");
    switch (match.group(0)) {
      case "\"":
      {
        return "&quot;";
      }
      case "&":
      {
        return "&amp;";
      }
      case "<":
      {
        return "&lt;";
      }
      case "\n":
      {
        return "&#xA;";
      }
      case "\r":
      {
        return "&#xD;";
      }
      case "\t":
      {
        return "&#x9;";
      }
    }
    dart.throw(new core.ArgumentError.value(match, "match"));
  };
  dart.defineLazy(default_mapping, {
    /*default_mapping.defaultEntityMapping*/get defaultEntityMapping() {
      return C[25] || CT.C25;
    },
    set defaultEntityMapping(_) {},
    /*default_mapping._textPattern*/get _textPattern() {
      return core.RegExp.new("[&<]|]]>");
    },
    /*default_mapping._singeQuoteAttributePattern*/get _singeQuoteAttributePattern() {
      return core.RegExp.new("['&<\\n\\r\\t]");
    },
    /*default_mapping._doubleQuoteAttributePattern*/get _doubleQuoteAttributePattern() {
      return core.RegExp.new("[\"&<\\n\\r\\t]");
    }
  }, false);
  dart.defineLazy(named_entities, {
    /*named_entities.xmlEntities*/get xmlEntities() {
      return C[26] || CT.C26;
    },
    /*named_entities.htmlEntities*/get htmlEntities() {
      return C[27] || CT.C27;
    },
    /*named_entities.html5Entities*/get html5Entities() {
      return C[28] || CT.C28;
    }
  }, false);
  comment.XmlComment = class XmlComment extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.COMMENT;
    }
    copy() {
      return new comment.XmlComment.new(this.text);
    }
    accept(visitor) {
      if (visitor == null) dart.nullFailed(I[66], 17, 29, "visitor");
      return visitor.visitComment(this);
    }
  };
  (comment.XmlComment.new = function(text) {
    if (text == null) dart.nullFailed(I[66], 8, 21, "text");
    comment.XmlComment.__proto__.new.call(this, text);
    ;
  }).prototype = comment.XmlComment.prototype;
  dart.addTypeTests(comment.XmlComment);
  dart.addTypeCaches(comment.XmlComment);
  dart.setMethodSignature(comment.XmlComment, () => ({
    __proto__: dart.getMethods(comment.XmlComment.__proto__),
    copy: dart.fnType(comment.XmlComment, []),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(comment.XmlComment, () => ({
    __proto__: dart.getGetters(comment.XmlComment.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(comment.XmlComment, I[67]);
  var _entityMapping$ = dart.privateName(character_data_parser, "_entityMapping");
  var _stopper$ = dart.privateName(character_data_parser, "_stopper");
  var _minLength$ = dart.privateName(character_data_parser, "_minLength");
  var _stopperCode = dart.privateName(character_data_parser, "_stopperCode");
  character_data_parser.XmlCharacterDataParser = class XmlCharacterDataParser extends parser.Parser$(core.String) {
    parseOn(context) {
      if (context == null) dart.nullFailed(I[68], 16, 34, "context");
      let input = context.buffer;
      let length = input.length;
      let output = new core.StringBuffer.new();
      let position = context.position;
      let start = position;
      while (dart.notNull(position) < length) {
        let value = input[$codeUnitAt](position);
        if (value === this[_stopperCode]) {
          break;
        } else if (value === 38) {
          let index = input[$indexOf](";", dart.notNull(position) + 1);
          if (dart.notNull(position) + 1 < index) {
            let entity = input[$substring](dart.notNull(position) + 1, index);
            let value = this[_entityMapping$].decodeEntity(entity);
            if (value != null) {
              output.write(input[$substring](start, position));
              output.write(value);
              position = index + 1;
              start = position;
            } else {
              position = dart.notNull(position) + 1;
            }
          } else {
            position = dart.notNull(position) + 1;
          }
        } else {
          position = dart.notNull(position) + 1;
        }
      }
      output.write(input[$substring](start, position));
      return dart.notNull(output.length) < dart.notNull(this[_minLength$]) ? context.failure(core.String, "Unable to parse character data.") : context.success(core.String, output.toString(), position);
    }
    fastParseOn(buffer, position) {
      if (buffer == null) dart.nullFailed(I[68], 57, 26, "buffer");
      if (position == null) dart.nullFailed(I[68], 57, 38, "position");
      let start = position;
      let length = buffer.length;
      while (dart.notNull(position) < length) {
        let value = buffer[$codeUnitAt](position);
        if (value === this[_stopperCode]) {
          break;
        } else {
          position = dart.notNull(position) + 1;
        }
      }
      return dart.notNull(position) - dart.notNull(start) < dart.notNull(this[_minLength$]) ? -1 : position;
    }
    copy() {
      return new character_data_parser.XmlCharacterDataParser.new(this[_entityMapping$], this[_stopper$], this[_minLength$]);
    }
    hasEqualProperties(other) {
      character_data_parser.XmlCharacterDataParser.as(other);
      if (other == null) dart.nullFailed(I[68], 76, 50, "other");
      return dart.test(super.hasEqualProperties(other)) && dart.equals(this[_entityMapping$], other[_entityMapping$]) && this[_stopper$] == other[_stopper$] && this[_minLength$] == other[_minLength$];
    }
  };
  (character_data_parser.XmlCharacterDataParser.new = function(_entityMapping, _stopper, _minLength) {
    if (_entityMapping == null) dart.nullFailed(I[68], 12, 31, "_entityMapping");
    if (_stopper == null) dart.nullFailed(I[68], 12, 52, "_stopper");
    if (_minLength == null) dart.nullFailed(I[68], 12, 67, "_minLength");
    this[_entityMapping$] = _entityMapping;
    this[_stopper$] = _stopper;
    this[_minLength$] = _minLength;
    this[_stopperCode] = _stopper[$codeUnitAt](0);
    character_data_parser.XmlCharacterDataParser.__proto__.new.call(this);
    ;
  }).prototype = character_data_parser.XmlCharacterDataParser.prototype;
  dart.addTypeTests(character_data_parser.XmlCharacterDataParser);
  dart.addTypeCaches(character_data_parser.XmlCharacterDataParser);
  dart.setMethodSignature(character_data_parser.XmlCharacterDataParser, () => ({
    __proto__: dart.getMethods(character_data_parser.XmlCharacterDataParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
    copy: dart.fnType(character_data_parser.XmlCharacterDataParser, [])
  }));
  dart.setLibraryUri(character_data_parser.XmlCharacterDataParser, I[69]);
  dart.setFieldSignature(character_data_parser.XmlCharacterDataParser, () => ({
    __proto__: dart.getFields(character_data_parser.XmlCharacterDataParser.__proto__),
    [_entityMapping$]: dart.finalFieldType(entity_mapping.XmlEntityMapping),
    [_stopper$]: dart.finalFieldType(core.String),
    [_stopperCode]: dart.finalFieldType(core.int),
    [_minLength$]: dart.finalFieldType(core.int)
  }));
  var buffer$0 = dart.privateName(writer$, "XmlWriter.buffer");
  var entityMapping$0 = dart.privateName(writer$, "XmlWriter.entityMapping");
  const Object_XmlVisitor$36 = class Object_XmlVisitor extends core.Object {};
  (Object_XmlVisitor$36.new = function() {
  }).prototype = Object_XmlVisitor$36.prototype;
  dart.applyMixin(Object_XmlVisitor$36, visitor.XmlVisitor);
  writer$.XmlWriter = class XmlWriter extends Object_XmlVisitor$36 {
    get buffer() {
      return this[buffer$0];
    }
    set buffer(value) {
      super.buffer = value;
    }
    get entityMapping() {
      return this[entityMapping$0];
    }
    set entityMapping(value) {
      super.entityMapping = value;
    }
    visitAttribute(node) {
      if (node == null) dart.nullFailed(I[70], 28, 36, "node");
      this.visit(dart.dynamic, node.name);
      this.buffer.write("=");
      this.buffer.write(this.entityMapping.encodeAttributeValueWithQuotes(node.value, node.attributeType));
    }
    visitCDATA(node) {
      if (node == null) dart.nullFailed(I[70], 36, 28, "node");
      this.buffer.write("<![CDATA[");
      this.buffer.write(node.text);
      this.buffer.write("]]>");
    }
    visitComment(node) {
      if (node == null) dart.nullFailed(I[70], 43, 32, "node");
      this.buffer.write("<!--");
      this.buffer.write(node.text);
      this.buffer.write("-->");
    }
    visitDeclaration(node) {
      if (node == null) dart.nullFailed(I[70], 50, 40, "node");
      this.buffer.write("<?xml");
      this.writeAttributes(node);
      this.buffer.write("?>");
    }
    visitDoctype(node) {
      if (node == null) dart.nullFailed(I[70], 57, 32, "node");
      this.buffer.write("<!DOCTYPE");
      this.buffer.write(" ");
      this.buffer.write(node.text);
      this.buffer.write(">");
    }
    visitDocument(node) {
      if (node == null) dart.nullFailed(I[70], 65, 34, "node");
      this.writeIterable(node.children);
    }
    visitDocumentFragment(node) {
      if (node == null) dart.nullFailed(I[70], 70, 50, "node");
      this.buffer.write("#document-fragment");
    }
    visitElement(node) {
      if (node == null) dart.nullFailed(I[70], 75, 32, "node");
      this.buffer.write("<");
      this.visit(dart.dynamic, node.name);
      this.writeAttributes(node);
      if (dart.test(node.children.isEmpty) && dart.test(node.isSelfClosing)) {
        this.buffer.write("/>");
      } else {
        this.buffer.write(">");
        this.writeIterable(node.children);
        this.buffer.write("</");
        this.visit(dart.dynamic, node.name);
        this.buffer.write(">");
      }
    }
    visitName(name) {
      if (name == null) dart.nullFailed(I[70], 91, 26, "name");
      this.buffer.write(name.qualified);
    }
    visitProcessing(node) {
      if (node == null) dart.nullFailed(I[70], 96, 38, "node");
      this.buffer.write("<?");
      this.buffer.write(node.target);
      if (node.text[$isNotEmpty]) {
        this.buffer.write(" ");
        this.buffer.write(node.text);
      }
      this.buffer.write("?>");
    }
    visitText(node) {
      if (node == null) dart.nullFailed(I[70], 107, 26, "node");
      this.buffer.write(this.entityMapping.encodeText(node.text));
    }
    writeAttributes(node) {
      if (node == null) dart.nullFailed(I[70], 111, 41, "node");
      if (dart.test(node.attributes.isNotEmpty)) {
        this.buffer.write(" ");
        this.writeIterable(node.attributes, " ");
      }
    }
    writeIterable(nodes, separator = null) {
      if (nodes == null) dart.nullFailed(I[70], 118, 46, "nodes");
      let iterator = nodes[$iterator];
      if (dart.test(iterator.moveNext())) {
        if (separator == null || separator[$isEmpty]) {
          do {
            this.visit(dart.dynamic, iterator.current);
          } while (dart.test(iterator.moveNext()));
        } else {
          this.visit(dart.dynamic, iterator.current);
          while (dart.test(iterator.moveNext())) {
            this.buffer.write(separator);
            this.visit(dart.dynamic, iterator.current);
          }
        }
      }
    }
  };
  (writer$.XmlWriter.new = function(buffer, opts) {
    let t2;
    if (buffer == null) dart.nullFailed(I[70], 24, 18, "buffer");
    let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
    this[buffer$0] = buffer;
    this[entityMapping$0] = (t2 = entityMapping, t2 == null ? default_mapping.defaultEntityMapping : t2);
    ;
  }).prototype = writer$.XmlWriter.prototype;
  dart.addTypeTests(writer$.XmlWriter);
  dart.addTypeCaches(writer$.XmlWriter);
  dart.setMethodSignature(writer$.XmlWriter, () => ({
    __proto__: dart.getMethods(writer$.XmlWriter.__proto__),
    visitAttribute: dart.fnType(dart.void, [attribute.XmlAttribute]),
    visitCDATA: dart.fnType(dart.void, [cdata.XmlCDATA]),
    visitComment: dart.fnType(dart.void, [comment.XmlComment]),
    visitDeclaration: dart.fnType(dart.void, [declaration.XmlDeclaration]),
    visitDoctype: dart.fnType(dart.void, [doctype.XmlDoctype]),
    visitDocument: dart.fnType(dart.void, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.void, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.void, [element.XmlElement]),
    visitName: dart.fnType(dart.void, [name$.XmlName]),
    visitProcessing: dart.fnType(dart.void, [processing.XmlProcessing]),
    visitText: dart.fnType(dart.void, [text$.XmlText]),
    writeAttributes: dart.fnType(dart.void, [has_attributes.XmlHasAttributes]),
    writeIterable: dart.fnType(dart.void, [core.Iterable$(has_visitor.XmlHasVisitor)], [dart.nullable(core.String)])
  }));
  dart.setLibraryUri(writer$.XmlWriter, I[71]);
  dart.setFieldSignature(writer$.XmlWriter, () => ({
    __proto__: dart.getFields(writer$.XmlWriter.__proto__),
    buffer: dart.finalFieldType(core.StringSink),
    entityMapping: dart.finalFieldType(entity_mapping.XmlEntityMapping)
  }));
  var level$ = dart.privateName(pretty_writer, "XmlPrettyWriter.level");
  var pretty = dart.privateName(pretty_writer, "XmlPrettyWriter.pretty");
  var indent$ = dart.privateName(pretty_writer, "XmlPrettyWriter.indent");
  var newLine$ = dart.privateName(pretty_writer, "XmlPrettyWriter.newLine");
  var preserveWhitespace$ = dart.privateName(pretty_writer, "XmlPrettyWriter.preserveWhitespace");
  var indentAttribute$ = dart.privateName(pretty_writer, "XmlPrettyWriter.indentAttribute");
  var sortAttributes$ = dart.privateName(pretty_writer, "XmlPrettyWriter.sortAttributes");
  pretty_writer.XmlPrettyWriter = class XmlPrettyWriter extends writer$.XmlWriter {
    get level() {
      return this[level$];
    }
    set level(value) {
      this[level$] = value;
    }
    get pretty() {
      return this[pretty];
    }
    set pretty(value) {
      this[pretty] = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
    get newLine() {
      return this[newLine$];
    }
    set newLine(value) {
      super.newLine = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      super.preserveWhitespace = value;
    }
    get indentAttribute() {
      return this[indentAttribute$];
    }
    set indentAttribute(value) {
      super.indentAttribute = value;
    }
    get sortAttributes() {
      return this[sortAttributes$];
    }
    set sortAttributes(value) {
      super.sortAttributes = value;
    }
    visitDocument(node) {
      if (node == null) dart.nullFailed(I[72], 40, 34, "node");
      this.buffer.write(this.indent[$times](this.level));
      this.writeIterable(this.normalizeText(node.children), dart.notNull(this.newLine) + this.indent[$times](this.level));
    }
    visitElement(node) {
      if (node == null) dart.nullFailed(I[72], 46, 32, "node");
      this.buffer.write("<");
      this.visit(dart.dynamic, node.name);
      this.writeAttributes(node);
      if (dart.test(node.children.isEmpty) && dart.test(node.isSelfClosing)) {
        this.buffer.write("/>");
      } else {
        this.buffer.write(">");
        if (dart.test(node.children.isNotEmpty)) {
          if (dart.test(this.pretty)) {
            if (this.preserveWhitespace != null && dart.test(dart.nullCheck(this.preserveWhitespace)(node))) {
              this.pretty = false;
              this.writeIterable(node.children);
              this.pretty = true;
            } else if (dart.test(node.children.every(dart.fn(each => {
              if (each == null) dart.nullFailed(I[72], 60, 43, "each");
              return text$.XmlText.is(each);
            }, T.XmlNodeTobool())))) {
              this.writeIterable(this.normalizeText(node.children));
            } else {
              this.level = dart.notNull(this.level) + 1;
              this.buffer.write(this.newLine);
              this.buffer.write(this.indent[$times](this.level));
              this.writeIterable(this.normalizeText(node.children), dart.notNull(this.newLine) + this.indent[$times](this.level));
              this.level = dart.notNull(this.level) - 1;
              this.buffer.write(this.newLine);
              this.buffer.write(this.indent[$times](this.level));
            }
          } else {
            this.writeIterable(node.children);
          }
        }
        this.buffer.write("</");
        this.visit(dart.dynamic, node.name);
        this.buffer.write(">");
      }
    }
    writeAttributes(node) {
      if (node == null) dart.nullFailed(I[72], 83, 41, "node");
      for (let attribute of this.normalizeAttributes(node.attributes)) {
        if (dart.test(this.pretty) && this.indentAttribute != null && dart.test(dart.nullCheck(this.indentAttribute)(attribute))) {
          this.buffer.write(this.newLine);
          this.buffer.write(this.indent[$times](dart.notNull(this.level) + 1));
        } else {
          this.buffer.write(" ");
        }
        this.visit(dart.dynamic, attribute);
      }
    }
    normalizeAttributes(attributes) {
      if (attributes == null) dart.nullFailed(I[72], 96, 61, "attributes");
      let result = attributes[$toList]();
      if (this.sortAttributes != null) {
        result[$sort](this.sortAttributes);
      }
      return result;
    }
    normalizeText(nodes) {
      if (nodes == null) dart.nullFailed(I[72], 108, 45, "nodes");
      let result = T.JSArrayOfXmlNode().of([]);
      for (let node of nodes) {
        if (text$.XmlText.is(node)) {
          let text = node.text[$trim]()[$replaceAll](pretty_writer._whitespaceOrLineTerminators, " ");
          if (text[$isNotEmpty]) {
            if (dart.test(result[$isNotEmpty]) && text$.XmlText.is(result[$last])) {
              result[$last] = new text$.XmlText.new(dart.notNull(result[$last].text) + " " + text);
            } else if (node.text !== text) {
              result[$add](new text$.XmlText.new(text));
            } else {
              result[$add](node);
            }
          }
        } else {
          result[$add](node);
        }
      }
      return result;
    }
  };
  (pretty_writer.XmlPrettyWriter.new = function(buffer, opts) {
    let t2, t2$, t2$0;
    if (buffer == null) dart.nullFailed(I[72], 26, 16, "buffer");
    let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let indent = opts && 'indent' in opts ? opts.indent : null;
    let newLine = opts && 'newLine' in opts ? opts.newLine : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : null;
    let indentAttribute = opts && 'indentAttribute' in opts ? opts.indentAttribute : null;
    let sortAttributes = opts && 'sortAttributes' in opts ? opts.sortAttributes : null;
    this[pretty] = true;
    this[preserveWhitespace$] = preserveWhitespace;
    this[indentAttribute$] = indentAttribute;
    this[sortAttributes$] = sortAttributes;
    this[level$] = (t2 = level, t2 == null ? 0 : t2);
    this[indent$] = (t2$ = indent, t2$ == null ? "  " : t2$);
    this[newLine$] = (t2$0 = newLine, t2$0 == null ? "\n" : t2$0);
    pretty_writer.XmlPrettyWriter.__proto__.new.call(this, buffer, {entityMapping: entityMapping});
    ;
  }).prototype = pretty_writer.XmlPrettyWriter.prototype;
  dart.addTypeTests(pretty_writer.XmlPrettyWriter);
  dart.addTypeCaches(pretty_writer.XmlPrettyWriter);
  dart.setMethodSignature(pretty_writer.XmlPrettyWriter, () => ({
    __proto__: dart.getMethods(pretty_writer.XmlPrettyWriter.__proto__),
    normalizeAttributes: dart.fnType(core.List$(attribute.XmlAttribute), [core.List$(attribute.XmlAttribute)]),
    normalizeText: dart.fnType(core.List$(node.XmlNode), [core.List$(node.XmlNode)])
  }));
  dart.setLibraryUri(pretty_writer.XmlPrettyWriter, I[73]);
  dart.setFieldSignature(pretty_writer.XmlPrettyWriter, () => ({
    __proto__: dart.getFields(pretty_writer.XmlPrettyWriter.__proto__),
    level: dart.fieldType(core.int),
    pretty: dart.fieldType(core.bool),
    indent: dart.finalFieldType(core.String),
    newLine: dart.finalFieldType(core.String),
    preserveWhitespace: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [node.XmlNode]))),
    indentAttribute: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [attribute.XmlAttribute]))),
    sortAttributes: dart.finalFieldType(dart.nullable(dart.fnType(core.int, [attribute.XmlAttribute, attribute.XmlAttribute])))
  }));
  dart.defineLazy(pretty_writer, {
    /*pretty_writer._whitespaceOrLineTerminators*/get _whitespaceOrLineTerminators() {
      return core.RegExp.new("\\s+");
    }
  }, false);
  var _start$ = dart.privateName(descendants, "_start");
  descendants.XmlDescendantsIterable = class XmlDescendantsIterable extends collection.IterableBase$(node.XmlNode) {
    get iterator() {
      return new descendants.XmlDescendantsIterator.new(this[_start$]);
    }
  };
  (descendants.XmlDescendantsIterable.new = function(_start) {
    if (_start == null) dart.nullFailed(I[74], 15, 31, "_start");
    this[_start$] = _start;
    descendants.XmlDescendantsIterable.__proto__.new.call(this);
    ;
  }).prototype = descendants.XmlDescendantsIterable.prototype;
  dart.addTypeTests(descendants.XmlDescendantsIterable);
  dart.addTypeCaches(descendants.XmlDescendantsIterable);
  dart.setGetterSignature(descendants.XmlDescendantsIterable, () => ({
    __proto__: dart.getGetters(descendants.XmlDescendantsIterable.__proto__),
    iterator: core.Iterator$(node.XmlNode),
    [$iterator]: core.Iterator$(node.XmlNode)
  }));
  dart.setLibraryUri(descendants.XmlDescendantsIterable, I[75]);
  dart.setFieldSignature(descendants.XmlDescendantsIterable, () => ({
    __proto__: dart.getFields(descendants.XmlDescendantsIterable.__proto__),
    [_start$]: dart.finalFieldType(node.XmlNode)
  }));
  dart.defineExtensionAccessors(descendants.XmlDescendantsIterable, ['iterator']);
  var _todo = dart.privateName(descendants, "_todo");
  var __XmlDescendantsIterator__current = dart.privateName(descendants, "_#XmlDescendantsIterator#_current");
  var __XmlDescendantsIterator__current_isSet = dart.privateName(descendants, "_#XmlDescendantsIterator#_current#isSet");
  var _current = dart.privateName(descendants, "_current");
  descendants.XmlDescendantsIterator = class XmlDescendantsIterator extends core.Iterator$(node.XmlNode) {
    get [_current]() {
      let t2;
      return dart.test(this[__XmlDescendantsIterator__current_isSet]) ? (t2 = this[__XmlDescendantsIterator__current], t2) : dart.throw(new _internal.LateError.fieldNI("_current"));
    }
    set [_current](t2) {
      if (t2 == null) dart.nullFailed(I[74], 24, 16, "null");
      this[__XmlDescendantsIterator__current_isSet] = true;
      this[__XmlDescendantsIterator__current] = t2;
    }
    push(node) {
      if (node == null) dart.nullFailed(I[74], 30, 21, "node");
      this[_todo][$addAll](node.children[$reversed]);
      this[_todo][$addAll](node.attributes[$reversed]);
    }
    get current() {
      return this[_current];
    }
    moveNext() {
      if (dart.test(this[_todo][$isEmpty])) {
        return false;
      } else {
        this[_current] = this[_todo][$removeLast]();
        this.push(this[_current]);
        return true;
      }
    }
  };
  (descendants.XmlDescendantsIterator.new = function(start) {
    if (start == null) dart.nullFailed(I[74], 26, 34, "start");
    this[_todo] = T.JSArrayOfXmlNode().of([]);
    this[__XmlDescendantsIterator__current] = null;
    this[__XmlDescendantsIterator__current_isSet] = false;
    this.push(start);
  }).prototype = descendants.XmlDescendantsIterator.prototype;
  dart.addTypeTests(descendants.XmlDescendantsIterator);
  dart.addTypeCaches(descendants.XmlDescendantsIterator);
  dart.setMethodSignature(descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getMethods(descendants.XmlDescendantsIterator.__proto__),
    push: dart.fnType(dart.void, [node.XmlNode]),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getGetters(descendants.XmlDescendantsIterator.__proto__),
    [_current]: node.XmlNode,
    current: node.XmlNode
  }));
  dart.setSetterSignature(descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getSetters(descendants.XmlDescendantsIterator.__proto__),
    [_current]: node.XmlNode
  }));
  dart.setLibraryUri(descendants.XmlDescendantsIterator, I[75]);
  dart.setFieldSignature(descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getFields(descendants.XmlDescendantsIterator.__proto__),
    [_todo]: dart.finalFieldType(core.List$(node.XmlNode)),
    [__XmlDescendantsIterator__current]: dart.fieldType(dart.nullable(node.XmlNode)),
    [__XmlDescendantsIterator__current_isSet]: dart.fieldType(core.bool)
  }));
  descendants['XmlDescendantsExtension|get#descendants'] = function XmlDescendantsExtension$124get$35descendants($this) {
    if ($this == null) dart.nullFailed(I[74], 8, 25, "#this");
    return new descendants.XmlDescendantsIterable.new($this);
  };
  parent['XmlParentExtension|get#root'] = function XmlParentExtension$124get$35root($this) {
    if ($this == null) dart.nullFailed(I[76], 8, 15, "#this");
    let current = $this;
    while (current.parent != null) {
      current = dart.nullCheck(current.parent);
    }
    return current;
  };
  parent['XmlParentExtension|get#document'] = function XmlParentExtension$124get$35document($this) {
    if ($this == null) dart.nullFailed(I[76], 18, 20, "#this");
    let node = parent['XmlParentExtension|get#root']($this);
    return document.XmlDocument.is(node) ? node : null;
  };
  parent['XmlParentExtension|get#parentElement'] = function XmlParentExtension$124get$35parentElement($this) {
    if ($this == null) dart.nullFailed(I[76], 25, 19, "#this");
    for (let current = $this.parent; current != null; current = current.parent) {
      if (element.XmlElement.is(current)) {
        return current;
      }
    }
    return null;
  };
  parent['XmlParentExtension|get#depth'] = function XmlParentExtension$124get$35depth($this) {
    if ($this == null) dart.nullFailed(I[76], 35, 11, "#this");
    let result = 0;
    let current = $this;
    while (current.parent != null) {
      current = dart.nullCheck(current.parent);
      result = result + 1;
    }
    return result;
  };
  dart.trackLibraries("packages/xml/src/xml/entities/default_mapping", {
    "package:xml/src/xml/nodes/cdata.dart": cdata,
    "package:xml/src/xml/nodes/data.dart": data,
    "package:xml/src/xml/nodes/node.dart": node,
    "package:xml/src/xml/utils/node_type.dart": node_type,
    "package:xml/src/xml/mixins/has_xml.dart": has_xml,
    "package:xml/src/xml/mixins/has_writer.dart": has_writer,
    "package:xml/src/xml/mixins/has_visitor.dart": has_visitor,
    "package:xml/src/xml/visitors/visitor.dart": visitor,
    "package:xml/src/xml/utils/name.dart": name$,
    "package:xml/src/xml/utils/token.dart": token$0,
    "package:xml/src/xml/utils/simple_name.dart": simple_name,
    "package:xml/src/xml/utils/namespace.dart": namespace$,
    "package:xml/src/xml/nodes/attribute.dart": attribute,
    "package:xml/src/xml/utils/attribute_type.dart": attribute_type,
    "package:xml/src/xml/mixins/has_parent.dart": has_parent,
    "package:xml/src/xml/utils/exceptions.dart": exceptions,
    "package:xml/src/xml/mixins/has_name.dart": has_name,
    "package:xml/src/xml/utils/prefix_name.dart": prefix_name,
    "package:xml/src/xml/nodes/text.dart": text$,
    "package:xml/src/xml/nodes/processing.dart": processing,
    "package:xml/src/xml/nodes/element.dart": element,
    "package:xml/src/xml/mixins/has_children.dart": has_children,
    "package:xml/src/xml/utils/node_list.dart": node_list,
    "package:xml/src/xml/utils/name_matcher.dart": name_matcher,
    "package:xml/src/xml/mixins/has_attributes.dart": has_attributes,
    "package:xml/src/xml/nodes/document_fragment.dart": document_fragment,
    "package:xml/src/xml/utils/cache.dart": cache,
    "package:xml/src/xml/parser.dart": parser$,
    "package:xml/src/xml/nodes/document.dart": document,
    "package:xml/src/xml/nodes/doctype.dart": doctype,
    "package:xml/src/xml/nodes/declaration.dart": declaration,
    "package:xml/src/xml/entities/entity_mapping.dart": entity_mapping,
    "package:xml/src/xml/entities/default_mapping.dart": default_mapping,
    "package:xml/src/xml/entities/named_entities.dart": named_entities,
    "package:xml/src/xml/nodes/comment.dart": comment,
    "package:xml/src/xml/grammar.dart": grammar$,
    "package:xml/src/xml/production.dart": production,
    "package:xml/src/xml/utils/character_data_parser.dart": character_data_parser,
    "package:xml/src/xml/visitors/writer.dart": writer$,
    "package:xml/src/xml/visitors/pretty_writer.dart": pretty_writer,
    "package:xml/src/xml/utils/predicate.dart": predicate,
    "package:xml/src/xml/mixins/has_text.dart": has_text,
    "package:xml/src/xml/navigation/descendants.dart": descendants,
    "package:xml/src/xml/navigation/parent.dart": parent
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../mixins/has_parent.dart","../mixins/has_attributes.dart","../mixins/has_children.dart","../mixins/has_text.dart","../mixins/has_writer.dart","../mixins/has_xml.dart","../nodes/node.dart","../nodes/data.dart","../nodes/cdata.dart","../utils/node_type.dart","../visitors/visitor.dart","../utils/name.dart","../utils/token.dart","../utils/simple_name.dart","../utils/namespace.dart","../nodes/attribute.dart","../utils/attribute_type.dart","../utils/exceptions.dart","../utils/prefix_name.dart","../nodes/text.dart","../nodes/processing.dart","../nodes/element.dart","../utils/node_list.dart","../utils/name_matcher.dart","../nodes/document_fragment.dart","../utils/cache.dart","../production.dart","../grammar.dart","../parser.dart","../nodes/document.dart","../nodes/doctype.dart","../nodes/declaration.dart","entity_mapping.dart","default_mapping.dart","named_entities.dart","../nodes/comment.dart","../utils/character_data_parser.dart","../visitors/writer.dart","../visitors/pretty_writer.dart","../navigation/descendants.dart","../navigation/parent.dart"],"names":[],"mappings":"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","file":"default_mapping.unsound.ddc.js"}');
  // Exports:
  return {
    src__xml__nodes__cdata: cdata,
    src__xml__nodes__data: data,
    src__xml__nodes__node: node,
    src__xml__utils__node_type: node_type,
    src__xml__mixins__has_xml: has_xml,
    src__xml__mixins__has_writer: has_writer,
    src__xml__mixins__has_visitor: has_visitor,
    src__xml__visitors__visitor: visitor,
    src__xml__utils__name: name$,
    src__xml__utils__token: token$0,
    src__xml__utils__simple_name: simple_name,
    src__xml__utils__namespace: namespace$,
    src__xml__nodes__attribute: attribute,
    src__xml__utils__attribute_type: attribute_type,
    src__xml__mixins__has_parent: has_parent,
    src__xml__utils__exceptions: exceptions,
    src__xml__mixins__has_name: has_name,
    src__xml__utils__prefix_name: prefix_name,
    src__xml__nodes__text: text$,
    src__xml__nodes__processing: processing,
    src__xml__nodes__element: element,
    src__xml__mixins__has_children: has_children,
    src__xml__utils__node_list: node_list,
    src__xml__utils__name_matcher: name_matcher,
    src__xml__mixins__has_attributes: has_attributes,
    src__xml__nodes__document_fragment: document_fragment,
    src__xml__utils__cache: cache,
    src__xml__parser: parser$,
    src__xml__nodes__document: document,
    src__xml__nodes__doctype: doctype,
    src__xml__nodes__declaration: declaration,
    src__xml__entities__entity_mapping: entity_mapping,
    src__xml__entities__default_mapping: default_mapping,
    src__xml__entities__named_entities: named_entities,
    src__xml__nodes__comment: comment,
    src__xml__grammar: grammar$,
    src__xml__production: production,
    src__xml__utils__character_data_parser: character_data_parser,
    src__xml__visitors__writer: writer$,
    src__xml__visitors__pretty_writer: pretty_writer,
    src__xml__utils__predicate: predicate,
    src__xml__mixins__has_text: has_text,
    src__xml__navigation__descendants: descendants,
    src__xml__navigation__parent: parent
  };
}));

//# sourceMappingURL=default_mapping.unsound.ddc.js.map
