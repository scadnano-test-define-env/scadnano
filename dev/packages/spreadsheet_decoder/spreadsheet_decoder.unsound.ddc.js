define(['dart_sdk', 'packages/archive/src/archive', 'packages/xml/src/xml/entities/default_mapping', 'packages/xml/src/xml/builder'], (function load__packages__spreadsheet_decoder__spreadsheet_decoder(dart_sdk, packages__archive__src__archive, packages__xml__src__xml__entities__default_mapping, packages__xml__src__xml__builder) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const zip_decoder = packages__archive__src__archive.src__zip_decoder;
  const archive_file = packages__archive__src__archive.src__archive_file;
  const zip_encoder = packages__archive__src__archive.src__zip_encoder;
  const archive$ = packages__archive__src__archive.src__archive;
  const element = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__element;
  const document$ = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__document;
  const text = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__text;
  const node = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__node;
  const attribute = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__attribute;
  const name = packages__xml__src__xml__entities__default_mapping.src__xml__utils__name;
  const find = packages__xml__src__xml__builder.src__xml__navigation__find;
  var spreadsheet_decoder = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $insert = dartx.insert;
  var $forEach = dartx.forEach;
  var $removeAt = dartx.removeAt;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $length = dartx.length;
  var $toList = dartx.toList;
  var $contains = dartx.contains;
  var $clear = dartx.clear;
  var $removeRange = dartx.removeRange;
  var $add = dartx.add;
  var $fold = dartx.fold;
  var $first = dartx.first;
  var $reversed = dartx.reversed;
  var $remove = dartx.remove;
  var $skipWhile = dartx.skipWhile;
  var $toLowerCase = dartx.toLowerCase;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $toInt = dartx.toInt;
  var $replaceAll = dartx.replaceAll;
  var $codeUnitAt = dartx.codeUnitAt;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $runes = dartx.runes;
  var $map = dartx.map;
  var $where = dartx.where;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ListTovoid: () => (T.ListTovoid = dart.constFn(dart.fnType(dart.void, [core.List])))(),
    intToNull: () => (T.intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    ArchiveFileTovoid: () => (T.ArchiveFileTovoid = dart.constFn(dart.fnType(dart.void, [archive_file.ArchiveFile])))(),
    boolAnddynamicTobool: () => (T.boolAnddynamicTobool = dart.constFn(dart.fnType(core.bool, [core.bool, dart.dynamic])))(),
    JSArrayOfList: () => (T.JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    IdentityMapOfString$ListOfString: () => (T.IdentityMapOfString$ListOfString = dart.constFn(_js_helper.IdentityMap$(core.String, T.ListOfString())))(),
    IdentityMapOfString$SpreadsheetTable: () => (T.IdentityMapOfString$SpreadsheetTable = dart.constFn(_js_helper.IdentityMap$(core.String, spreadsheet_decoder.SpreadsheetTable)))(),
    IdentityMapOfString$ArchiveFile: () => (T.IdentityMapOfString$ArchiveFile = dart.constFn(_js_helper.IdentityMap$(core.String, archive_file.ArchiveFile)))(),
    IdentityMapOfString$XmlElement: () => (T.IdentityMapOfString$XmlElement = dart.constFn(_js_helper.IdentityMap$(core.String, element.XmlElement)))(),
    IdentityMapOfString$XmlDocument: () => (T.IdentityMapOfString$XmlDocument = dart.constFn(_js_helper.IdentityMap$(core.String, document$.XmlDocument)))(),
    XmlElementTovoid: () => (T.XmlElementTovoid = dart.constFn(dart.fnType(dart.void, [element.XmlElement])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    XmlElementTobool: () => (T.XmlElementTobool = dart.constFn(dart.fnType(core.bool, [element.XmlElement])))(),
    XmlNodeTovoid: () => (T.XmlNodeTovoid = dart.constFn(dart.fnType(dart.void, [node.XmlNode])))(),
    JSArrayOfXmlElement: () => (T.JSArrayOfXmlElement = dart.constFn(_interceptors.JSArray$(element.XmlElement)))(),
    JSArrayOfXmlAttribute: () => (T.JSArrayOfXmlAttribute = dart.constFn(_interceptors.JSArray$(attribute.XmlAttribute)))(),
    JSArrayOfXmlNode: () => (T.JSArrayOfXmlNode = dart.constFn(_interceptors.JSArray$(node.XmlNode)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    StringAndXmlElementTovoid: () => (T.StringAndXmlElementTovoid = dart.constFn(dart.fnType(dart.void, [core.String, element.XmlElement])))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    intTobool: () => (T.intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(spreadsheet_decoder._letterOnly, T.intToint());
    },
    get C1() {
      return C[1] = dart.constList(["mimetype", "Thumbnails/thumbnail.png"], T.StringL());
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/spreadsheet_decoder/src/spreadsheet.dart",
    "package:spreadsheet_decoder/spreadsheet_decoder.dart",
    "org-dartlang-app:///packages/spreadsheet_decoder/src/ods.dart",
    "org-dartlang-app:///packages/spreadsheet_decoder/src/xlsx.dart"
  ];
  var __SpreadsheetDecoder__update = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_update");
  var __SpreadsheetDecoder__update_isSet = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_update#isSet");
  var __SpreadsheetDecoder__archive = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_archive");
  var __SpreadsheetDecoder__archive_isSet = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_archive#isSet");
  var __SpreadsheetDecoder__sheets = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_sheets");
  var __SpreadsheetDecoder__sheets_isSet = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_sheets#isSet");
  var __SpreadsheetDecoder__xmlFiles = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_xmlFiles");
  var __SpreadsheetDecoder__xmlFiles_isSet = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_xmlFiles#isSet");
  var __SpreadsheetDecoder__archiveFiles = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_archiveFiles");
  var __SpreadsheetDecoder__archiveFiles_isSet = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_archiveFiles#isSet");
  var __SpreadsheetDecoder__tables = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_tables");
  var __SpreadsheetDecoder__tables_isSet = dart.privateName(spreadsheet_decoder, "_#SpreadsheetDecoder#_tables#isSet");
  var _update = dart.privateName(spreadsheet_decoder, "_update");
  var _archive = dart.privateName(spreadsheet_decoder, "_archive");
  var _sheets = dart.privateName(spreadsheet_decoder, "_sheets");
  var _xmlFiles = dart.privateName(spreadsheet_decoder, "_xmlFiles");
  var _archiveFiles = dart.privateName(spreadsheet_decoder, "_archiveFiles");
  var _tables = dart.privateName(spreadsheet_decoder, "_tables");
  var _checkSheetArguments = dart.privateName(spreadsheet_decoder, "_checkSheetArguments");
  var _maxCols = dart.privateName(spreadsheet_decoder, "_maxCols");
  var _maxRows = dart.privateName(spreadsheet_decoder, "_maxRows");
  var _cloneArchive = dart.privateName(spreadsheet_decoder, "_cloneArchive");
  var _rows = dart.privateName(spreadsheet_decoder, "_rows");
  var _normalizeTable = dart.privateName(spreadsheet_decoder, "_normalizeTable");
  var _isEmptyRow = dart.privateName(spreadsheet_decoder, "_isEmptyRow");
  var _isNotEmptyRow = dart.privateName(spreadsheet_decoder, "_isNotEmptyRow");
  var _countFilledRow = dart.privateName(spreadsheet_decoder, "_countFilledRow");
  var _countFilledColumn = dart.privateName(spreadsheet_decoder, "_countFilledColumn");
  spreadsheet_decoder.SpreadsheetDecoder = class SpreadsheetDecoder extends core.Object {
    get [_update]() {
      let t0;
      return dart.test(this[__SpreadsheetDecoder__update_isSet]) ? (t0 = this[__SpreadsheetDecoder__update], t0) : dart.throw(new _internal.LateError.fieldNI("_update"));
    }
    set [_update](t0) {
      if (t0 == null) dart.nullFailed(I[0], 54, 13, "null");
      this[__SpreadsheetDecoder__update_isSet] = true;
      this[__SpreadsheetDecoder__update] = t0;
    }
    get [_archive]() {
      let t1;
      return dart.test(this[__SpreadsheetDecoder__archive_isSet]) ? (t1 = this[__SpreadsheetDecoder__archive], t1) : dart.throw(new _internal.LateError.fieldNI("_archive"));
    }
    set [_archive](t1) {
      if (t1 == null) dart.nullFailed(I[0], 55, 16, "null");
      this[__SpreadsheetDecoder__archive_isSet] = true;
      this[__SpreadsheetDecoder__archive] = t1;
    }
    get [_sheets]() {
      let t2;
      return dart.test(this[__SpreadsheetDecoder__sheets_isSet]) ? (t2 = this[__SpreadsheetDecoder__sheets], t2) : dart.throw(new _internal.LateError.fieldNI("_sheets"));
    }
    set [_sheets](t2) {
      if (t2 == null) dart.nullFailed(I[0], 56, 32, "null");
      this[__SpreadsheetDecoder__sheets_isSet] = true;
      this[__SpreadsheetDecoder__sheets] = t2;
    }
    get [_xmlFiles]() {
      let t3;
      return dart.test(this[__SpreadsheetDecoder__xmlFiles_isSet]) ? (t3 = this[__SpreadsheetDecoder__xmlFiles], t3) : dart.throw(new _internal.LateError.fieldNI("_xmlFiles"));
    }
    set [_xmlFiles](t3) {
      if (t3 == null) dart.nullFailed(I[0], 57, 33, "null");
      this[__SpreadsheetDecoder__xmlFiles_isSet] = true;
      this[__SpreadsheetDecoder__xmlFiles] = t3;
    }
    get [_archiveFiles]() {
      let t4;
      return dart.test(this[__SpreadsheetDecoder__archiveFiles_isSet]) ? (t4 = this[__SpreadsheetDecoder__archiveFiles], t4) : dart.throw(new _internal.LateError.fieldNI("_archiveFiles"));
    }
    set [_archiveFiles](t4) {
      if (t4 == null) dart.nullFailed(I[0], 58, 33, "null");
      this[__SpreadsheetDecoder__archiveFiles_isSet] = true;
      this[__SpreadsheetDecoder__archiveFiles] = t4;
    }
    get [_tables]() {
      let t5;
      return dart.test(this[__SpreadsheetDecoder__tables_isSet]) ? (t5 = this[__SpreadsheetDecoder__tables], t5) : dart.throw(new _internal.LateError.fieldNI("_tables"));
    }
    set [_tables](t5) {
      if (t5 == null) dart.nullFailed(I[0], 60, 38, "null");
      this[__SpreadsheetDecoder__tables_isSet] = true;
      this[__SpreadsheetDecoder__tables] = t5;
    }
    get tables() {
      return this[_tables];
    }
    static decodeBytes(data, opts) {
      if (data == null) dart.nullFailed(I[0], 73, 52, "data");
      let update = opts && 'update' in opts ? opts.update : false;
      if (update == null) dart.nullFailed(I[0], 74, 13, "update");
      let verify = opts && 'verify' in opts ? opts.verify : false;
      if (verify == null) dart.nullFailed(I[0], 74, 34, "verify");
      let archive = new zip_decoder.ZipDecoder.new().decodeBytes(data, {verify: verify});
      return spreadsheet_decoder._newSpreadsheetDecoder(archive, update);
    }
    static decodeBuffer(input, opts) {
      if (input == null) dart.nullFailed(I[0], 79, 55, "input");
      let update = opts && 'update' in opts ? opts.update : false;
      if (update == null) dart.nullFailed(I[0], 80, 13, "update");
      let verify = opts && 'verify' in opts ? opts.verify : false;
      if (verify == null) dart.nullFailed(I[0], 80, 34, "verify");
      let archive = new zip_decoder.ZipDecoder.new().decodeBuffer(input, {verify: verify});
      return spreadsheet_decoder._newSpreadsheetDecoder(archive, update);
    }
    [_checkSheetArguments](sheet) {
      if (sheet == null) dart.nullFailed(I[0], 88, 36, "sheet");
      if (this[_update] !== true) {
        dart.throw(new core.ArgumentError.new("'update' should be set to 'true' on constructor"));
      }
      if (this[_sheets][$containsKey](sheet) === false) {
        dart.throw(new core.ArgumentError.new("'" + dart.str(sheet) + "' not found"));
      }
    }
    insertColumn(sheet, columnIndex) {
      let t6;
      if (sheet == null) dart.nullFailed(I[0], 98, 28, "sheet");
      if (columnIndex == null) dart.nullFailed(I[0], 98, 39, "columnIndex");
      this[_checkSheetArguments](sheet);
      let table = dart.nullCheck(this[_tables][$_get](sheet));
      if (dart.notNull(columnIndex) < 0 || dart.notNull(columnIndex) > dart.notNull(table[_maxCols])) {
        dart.throw(new core.RangeError.range(columnIndex, 0, table[_maxCols]));
      }
      table.rows[$forEach](dart.fn(row => {
        if (row == null) dart.nullFailed(I[0], 106, 25, "row");
        return row[$insert](columnIndex, null);
      }, T.ListTovoid()));
      t6 = table;
      t6[_maxCols] = dart.notNull(t6[_maxCols]) + 1;
    }
    removeColumn(sheet, columnIndex) {
      let t6;
      if (sheet == null) dart.nullFailed(I[0], 111, 28, "sheet");
      if (columnIndex == null) dart.nullFailed(I[0], 111, 39, "columnIndex");
      this[_checkSheetArguments](sheet);
      let table = dart.nullCheck(this[_tables][$_get](sheet));
      if (dart.notNull(columnIndex) < 0 || dart.notNull(columnIndex) >= dart.notNull(table[_maxCols])) {
        dart.throw(new core.RangeError.range(columnIndex, 0, dart.notNull(table[_maxCols]) - 1));
      }
      table.rows[$forEach](dart.fn(row => {
        if (row == null) dart.nullFailed(I[0], 119, 25, "row");
        return row[$removeAt](columnIndex);
      }, T.ListTovoid()));
      t6 = table;
      t6[_maxCols] = dart.notNull(t6[_maxCols]) - 1;
    }
    insertRow(sheet, rowIndex) {
      let t6;
      if (sheet == null) dart.nullFailed(I[0], 124, 25, "sheet");
      if (rowIndex == null) dart.nullFailed(I[0], 124, 36, "rowIndex");
      this[_checkSheetArguments](sheet);
      let table = dart.nullCheck(this[_tables][$_get](sheet));
      if (dart.notNull(rowIndex) < 0 || dart.notNull(rowIndex) > dart.notNull(table[_maxRows])) {
        dart.throw(new core.RangeError.range(rowIndex, 0, table[_maxRows]));
      }
      table.rows[$insert](rowIndex, core.List.generate(table[_maxCols], dart.fn(_ => {
        if (_ == null) dart.nullFailed(I[0], 132, 64, "_");
        return null;
      }, T.intToNull())));
      t6 = table;
      t6[_maxRows] = dart.notNull(t6[_maxRows]) + 1;
    }
    removeRow(sheet, rowIndex) {
      let t6;
      if (sheet == null) dart.nullFailed(I[0], 137, 25, "sheet");
      if (rowIndex == null) dart.nullFailed(I[0], 137, 36, "rowIndex");
      this[_checkSheetArguments](sheet);
      let table = dart.nullCheck(this[_tables][$_get](sheet));
      if (dart.notNull(rowIndex) < 0 || dart.notNull(rowIndex) >= dart.notNull(table[_maxRows])) {
        dart.throw(new core.RangeError.range(rowIndex, 0, dart.notNull(table[_maxRows]) - 1));
      }
      table.rows[$removeAt](rowIndex);
      t6 = table;
      t6[_maxRows] = dart.notNull(t6[_maxRows]) - 1;
    }
    updateCell(sheet, columnIndex, rowIndex, value) {
      if (sheet == null) dart.nullFailed(I[0], 150, 26, "sheet");
      if (columnIndex == null) dart.nullFailed(I[0], 150, 37, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[0], 150, 54, "rowIndex");
      this[_checkSheetArguments](sheet);
      let table = dart.nullCheck(this[_tables][$_get](sheet));
      if (dart.notNull(columnIndex) < 0 || dart.notNull(columnIndex) >= dart.notNull(table[_maxCols])) {
        dart.throw(new core.RangeError.range(columnIndex, 0, dart.notNull(table[_maxCols]) - 1));
      }
      if (dart.notNull(rowIndex) < 0 || dart.notNull(rowIndex) >= dart.notNull(table[_maxRows])) {
        dart.throw(new core.RangeError.range(rowIndex, 0, dart.notNull(table[_maxRows]) - 1));
      }
      table.rows[$_get](rowIndex)[$_set](columnIndex, dart.toString(value));
    }
    encode() {
      if (this[_update] !== true) {
        dart.throw(new core.ArgumentError.new("'update' should be set to 'true' on constructor"));
      }
      for (let xmlFile of this[_xmlFiles][$keys]) {
        let xml = dart.toString(this[_xmlFiles][$_get](xmlFile));
        let content = convert.utf8.encode(xml);
        this[_archiveFiles][$_set](xmlFile, new archive_file.ArchiveFile.new(xmlFile, content[$length], content));
      }
      return dart.nullCast(new zip_encoder.ZipEncoder.new().encode(this[_cloneArchive](this[_archive])), T.ListOfint());
    }
    dataUrl() {
      let buffer = new core.StringBuffer.new();
      buffer.write("data:" + dart.str(this.mediaType) + ";base64,");
      buffer.write(convert.base64Encode(this.encode()));
      return buffer.toString();
    }
    [_cloneArchive](archive) {
      if (archive == null) dart.nullFailed(I[0], 186, 33, "archive");
      let clone = new archive$.Archive.new();
      archive.files[$forEach](dart.fn(file => {
        let t6;
        if (file == null) dart.nullFailed(I[0], 188, 28, "file");
        if (dart.test(file.isFile)) {
          let copy = null;
          if (dart.test(this[_archiveFiles][$containsKey](file.name))) {
            copy = dart.nullCheck(this[_archiveFiles][$_get](file.name));
          } else {
            let content = typed_data.Uint8List.as(file.content)[$toList]();
            let compress = dart.test(spreadsheet_decoder._noCompression[$contains](file.name)) ? false : true;
            copy = (t6 = new archive_file.ArchiveFile.new(file.name, content[$length], content), (() => {
              t6.compress = compress;
              return t6;
            })());
          }
          clone.addFile(copy);
        }
      }, T.ArchiveFileTovoid()));
      return clone;
    }
    [_normalizeTable](table) {
      if (table == null) dart.nullFailed(I[0], 206, 41, "table");
      if (table[_maxRows] === 0) {
        table[_rows][$clear]();
      } else if (dart.notNull(table[_maxRows]) < dart.notNull(table[_rows][$length])) {
        table[_rows][$removeRange](table[_maxRows], table[_rows][$length]);
      }
      for (let row = 0; row < dart.notNull(table[_rows][$length]); row = row + 1) {
        if (table[_maxCols] === 0) {
          table[_rows][$_get](row)[$clear]();
        } else if (dart.notNull(table[_maxCols]) < dart.notNull(table[_rows][$_get](row)[$length])) {
          table[_rows][$_get](row)[$removeRange](table[_maxCols], table[_rows][$_get](row)[$length]);
        } else if (dart.notNull(table[_maxCols]) > dart.notNull(table[_rows][$_get](row)[$length])) {
          let repeat = dart.notNull(table[_maxCols]) - dart.notNull(table[_rows][$_get](row)[$length]);
          for (let index = 0; index < repeat; index = index + 1) {
            table[_rows][$_get](row)[$add](null);
          }
        }
      }
    }
    [_isEmptyRow](row) {
      if (row == null) dart.nullFailed(I[0], 226, 25, "row");
      return row[$fold](core.bool, true, dart.fn((value, element) => {
        if (value == null) dart.nullFailed(I[0], 227, 28, "value");
        return dart.test(value) && element == null;
      }, T.boolAnddynamicTobool()));
    }
    [_isNotEmptyRow](row) {
      if (row == null) dart.nullFailed(I[0], 230, 28, "row");
      return !dart.test(this[_isEmptyRow](row));
    }
    [_countFilledRow](table, row) {
      if (table == null) dart.nullFailed(I[0], 234, 41, "table");
      if (row == null) dart.nullFailed(I[0], 234, 53, "row");
      if (dart.test(this[_isNotEmptyRow](row))) {
        if (dart.notNull(table[_maxRows]) < dart.notNull(table[_rows][$length])) {
          table[_maxRows] = table[_rows][$length];
        }
      }
    }
    [_countFilledColumn](table, row, value) {
      if (table == null) dart.nullFailed(I[0], 242, 44, "table");
      if (row == null) dart.nullFailed(I[0], 242, 56, "row");
      if (value != null) {
        if (dart.notNull(table[_maxCols]) < dart.notNull(row[$length])) {
          table[_maxCols] = row[$length];
        }
      }
    }
  };
  (spreadsheet_decoder.SpreadsheetDecoder.new = function() {
    this[__SpreadsheetDecoder__update] = null;
    this[__SpreadsheetDecoder__update_isSet] = false;
    this[__SpreadsheetDecoder__archive] = null;
    this[__SpreadsheetDecoder__archive_isSet] = false;
    this[__SpreadsheetDecoder__sheets] = null;
    this[__SpreadsheetDecoder__sheets_isSet] = false;
    this[__SpreadsheetDecoder__xmlFiles] = null;
    this[__SpreadsheetDecoder__xmlFiles_isSet] = false;
    this[__SpreadsheetDecoder__archiveFiles] = null;
    this[__SpreadsheetDecoder__archiveFiles_isSet] = false;
    this[__SpreadsheetDecoder__tables] = null;
    this[__SpreadsheetDecoder__tables_isSet] = false;
    ;
  }).prototype = spreadsheet_decoder.SpreadsheetDecoder.prototype;
  dart.addTypeTests(spreadsheet_decoder.SpreadsheetDecoder);
  dart.addTypeCaches(spreadsheet_decoder.SpreadsheetDecoder);
  dart.setMethodSignature(spreadsheet_decoder.SpreadsheetDecoder, () => ({
    __proto__: dart.getMethods(spreadsheet_decoder.SpreadsheetDecoder.__proto__),
    [_checkSheetArguments]: dart.fnType(dart.void, [core.String]),
    insertColumn: dart.fnType(dart.void, [core.String, core.int]),
    removeColumn: dart.fnType(dart.void, [core.String, core.int]),
    insertRow: dart.fnType(dart.void, [core.String, core.int]),
    removeRow: dart.fnType(dart.void, [core.String, core.int]),
    updateCell: dart.fnType(dart.void, [core.String, core.int, core.int, dart.dynamic]),
    encode: dart.fnType(core.List$(core.int), []),
    dataUrl: dart.fnType(core.String, []),
    [_cloneArchive]: dart.fnType(archive$.Archive, [archive$.Archive]),
    [_normalizeTable]: dart.fnType(dart.void, [spreadsheet_decoder.SpreadsheetTable]),
    [_isEmptyRow]: dart.fnType(core.bool, [core.List]),
    [_isNotEmptyRow]: dart.fnType(core.bool, [core.List]),
    [_countFilledRow]: dart.fnType(dart.void, [spreadsheet_decoder.SpreadsheetTable, core.List]),
    [_countFilledColumn]: dart.fnType(dart.void, [spreadsheet_decoder.SpreadsheetTable, core.List, dart.dynamic])
  }));
  dart.setGetterSignature(spreadsheet_decoder.SpreadsheetDecoder, () => ({
    __proto__: dart.getGetters(spreadsheet_decoder.SpreadsheetDecoder.__proto__),
    [_update]: core.bool,
    [_archive]: archive$.Archive,
    [_sheets]: core.Map$(core.String, element.XmlElement),
    [_xmlFiles]: core.Map$(core.String, document$.XmlDocument),
    [_archiveFiles]: core.Map$(core.String, archive_file.ArchiveFile),
    [_tables]: core.Map$(core.String, spreadsheet_decoder.SpreadsheetTable),
    tables: core.Map$(core.String, spreadsheet_decoder.SpreadsheetTable)
  }));
  dart.setSetterSignature(spreadsheet_decoder.SpreadsheetDecoder, () => ({
    __proto__: dart.getSetters(spreadsheet_decoder.SpreadsheetDecoder.__proto__),
    [_update]: core.bool,
    [_archive]: archive$.Archive,
    [_sheets]: core.Map$(core.String, element.XmlElement),
    [_xmlFiles]: core.Map$(core.String, document$.XmlDocument),
    [_archiveFiles]: core.Map$(core.String, archive_file.ArchiveFile),
    [_tables]: core.Map$(core.String, spreadsheet_decoder.SpreadsheetTable)
  }));
  dart.setLibraryUri(spreadsheet_decoder.SpreadsheetDecoder, I[1]);
  dart.setFieldSignature(spreadsheet_decoder.SpreadsheetDecoder, () => ({
    __proto__: dart.getFields(spreadsheet_decoder.SpreadsheetDecoder.__proto__),
    [__SpreadsheetDecoder__update]: dart.fieldType(dart.nullable(core.bool)),
    [__SpreadsheetDecoder__update_isSet]: dart.fieldType(core.bool),
    [__SpreadsheetDecoder__archive]: dart.fieldType(dart.nullable(archive$.Archive)),
    [__SpreadsheetDecoder__archive_isSet]: dart.fieldType(core.bool),
    [__SpreadsheetDecoder__sheets]: dart.fieldType(dart.nullable(core.Map$(core.String, element.XmlElement))),
    [__SpreadsheetDecoder__sheets_isSet]: dart.fieldType(core.bool),
    [__SpreadsheetDecoder__xmlFiles]: dart.fieldType(dart.nullable(core.Map$(core.String, document$.XmlDocument))),
    [__SpreadsheetDecoder__xmlFiles_isSet]: dart.fieldType(core.bool),
    [__SpreadsheetDecoder__archiveFiles]: dart.fieldType(dart.nullable(core.Map$(core.String, archive_file.ArchiveFile))),
    [__SpreadsheetDecoder__archiveFiles_isSet]: dart.fieldType(core.bool),
    [__SpreadsheetDecoder__tables]: dart.fieldType(dart.nullable(core.Map$(core.String, spreadsheet_decoder.SpreadsheetTable))),
    [__SpreadsheetDecoder__tables_isSet]: dart.fieldType(core.bool)
  }));
  var name$ = dart.privateName(spreadsheet_decoder, "SpreadsheetTable.name");
  spreadsheet_decoder.SpreadsheetTable = class SpreadsheetTable extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get rows() {
      return this[_rows];
    }
    get maxRows() {
      return this[_maxRows];
    }
    get maxCols() {
      return this[_maxCols];
    }
  };
  (spreadsheet_decoder.SpreadsheetTable.new = function(name) {
    if (name == null) dart.nullFailed(I[0], 254, 25, "name");
    this[_maxRows] = 0;
    this[_maxCols] = 0;
    this[_rows] = T.JSArrayOfList().of([]);
    this[name$] = name;
    ;
  }).prototype = spreadsheet_decoder.SpreadsheetTable.prototype;
  dart.addTypeTests(spreadsheet_decoder.SpreadsheetTable);
  dart.addTypeCaches(spreadsheet_decoder.SpreadsheetTable);
  dart.setGetterSignature(spreadsheet_decoder.SpreadsheetTable, () => ({
    __proto__: dart.getGetters(spreadsheet_decoder.SpreadsheetTable.__proto__),
    rows: core.List$(core.List),
    maxRows: core.int,
    maxCols: core.int
  }));
  dart.setLibraryUri(spreadsheet_decoder.SpreadsheetTable, I[1]);
  dart.setFieldSignature(spreadsheet_decoder.SpreadsheetTable, () => ({
    __proto__: dart.getFields(spreadsheet_decoder.SpreadsheetTable.__proto__),
    name: dart.finalFieldType(core.String),
    [_maxRows]: dart.fieldType(core.int),
    [_maxCols]: dart.fieldType(core.int),
    [_rows]: dart.finalFieldType(core.List$(core.List))
  }));
  var _styleNames = dart.privateName(spreadsheet_decoder, "_styleNames");
  var _parseContent = dart.privateName(spreadsheet_decoder, "_parseContent");
  var _parseStyles = dart.privateName(spreadsheet_decoder, "_parseStyles");
  var _parseTable = dart.privateName(spreadsheet_decoder, "_parseTable");
  var _readCell = dart.privateName(spreadsheet_decoder, "_readCell");
  var _parseRow = dart.privateName(spreadsheet_decoder, "_parseRow");
  var _parseCell = dart.privateName(spreadsheet_decoder, "_parseCell");
  var _readString = dart.privateName(spreadsheet_decoder, "_readString");
  spreadsheet_decoder.OdsDecoder = class OdsDecoder extends spreadsheet_decoder.SpreadsheetDecoder {
    get mediaType() {
      return "application/vnd.oasis.opendocument.spreadsheet";
    }
    get extension() {
      return ".ods";
    }
    dumpXmlContent(sheet = null) {
      if (sheet == null) {
        return dart.nullCheck(this[_xmlFiles][$_get]("content.xml")).toXmlString({pretty: true});
      } else {
        return dart.nullCheck(this[_sheets][$_get](sheet)).toXmlString({pretty: true});
      }
    }
    insertColumn(sheet, columnIndex) {
      if (sheet == null) dart.nullFailed(I[2], 39, 28, "sheet");
      if (columnIndex == null) dart.nullFailed(I[2], 39, 39, "columnIndex");
      super.insertColumn(sheet, columnIndex);
      let rows = spreadsheet_decoder.OdsDecoder._findRows(dart.nullCheck(this[_sheets][$_get](sheet)))[$toList]();
      for (let row of rows) {
        let cell = spreadsheet_decoder.OdsDecoder._findCellByIndex(row, columnIndex);
        if (cell != null) {
          row.children.insert(row.children.indexOf(cell), spreadsheet_decoder.OdsDecoder._createCell(null));
        } else {
          row.children.add(spreadsheet_decoder.OdsDecoder._createCell(null));
        }
      }
    }
    removeColumn(sheet, columnIndex) {
      if (sheet == null) dart.nullFailed(I[2], 54, 28, "sheet");
      if (columnIndex == null) dart.nullFailed(I[2], 54, 39, "columnIndex");
      super.removeColumn(sheet, columnIndex);
      let rows = spreadsheet_decoder.OdsDecoder._findRows(dart.nullCheck(this[_sheets][$_get](sheet)))[$toList]();
      for (let row of rows) {
        let cell = spreadsheet_decoder.OdsDecoder._findCellByIndex(row, columnIndex);
        row.children.remove(cell);
      }
    }
    insertRow(sheet, rowIndex) {
      if (sheet == null) dart.nullFailed(I[2], 65, 25, "sheet");
      if (rowIndex == null) dart.nullFailed(I[2], 65, 36, "rowIndex");
      super.insertRow(sheet, rowIndex);
      let style = dart.nullCheck(this[_styleNames][$_get]("table-row"))[$first];
      let parent = dart.nullCheck(this[_sheets][$_get](sheet));
      let newRow = spreadsheet_decoder.OdsDecoder._createRow(dart.nullCheck(this[_tables][$_get](sheet))[_maxCols], style);
      let row = spreadsheet_decoder.OdsDecoder._findRowByIndex(parent, rowIndex);
      if (row != null) {
        parent.children.insert(parent.children.indexOf(row), newRow);
      } else {
        parent.children.add(newRow);
      }
    }
    removeRow(sheet, rowIndex) {
      if (sheet == null) dart.nullFailed(I[2], 80, 25, "sheet");
      if (rowIndex == null) dart.nullFailed(I[2], 80, 36, "rowIndex");
      super.removeRow(sheet, rowIndex);
      let parent = dart.nullCheck(this[_sheets][$_get](sheet));
      let row = spreadsheet_decoder.OdsDecoder._findRowByIndex(parent, rowIndex);
      parent.children.remove(row);
    }
    updateCell(sheet, columnIndex, rowIndex, value) {
      if (sheet == null) dart.nullFailed(I[2], 89, 26, "sheet");
      if (columnIndex == null) dart.nullFailed(I[2], 89, 37, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[2], 89, 54, "rowIndex");
      super.updateCell(sheet, columnIndex, rowIndex, value);
      let row = dart.nullCheck(spreadsheet_decoder.OdsDecoder._findRowByIndex(dart.nullCheck(this[_sheets][$_get](sheet)), rowIndex));
      let cell = dart.nullCheck(spreadsheet_decoder.OdsDecoder._findCellByIndex(row, columnIndex));
      spreadsheet_decoder.OdsDecoder._replaceCell(row, cell, value);
    }
    [_parseContent]() {
      let t6, t6$;
      let file = this[_archive].findFile("content.xml");
      t6 = file;
      t6 == null ? null : t6.decompress();
      let content = document$.XmlDocument.parse(convert.utf8.decode(T.ListOfint().as((t6$ = file, t6$ == null ? null : t6$.content))));
      if (this[_update] === true) {
        this[_archiveFiles] = new (T.IdentityMapOfString$ArchiveFile()).new();
        this[_sheets] = new (T.IdentityMapOfString$XmlElement()).new();
        this[_xmlFiles] = new (T.IdentityMapOfString$XmlDocument()).from(["content.xml", content]);
        this[_parseStyles](content);
      }
      find['XmlFindExtension|findAllElements'](content, "table:table")[$forEach](dart.fn(node => {
        if (node == null) dart.nullFailed(I[2], 109, 53, "node");
        let name = dart.nullCheck(node.getAttribute("table:name"));
        if (this[_update] === true) {
          this[_sheets][$_set](name, node);
        }
        this[_parseTable](node, name);
      }, T.XmlElementTovoid()));
    }
    [_parseStyles](document) {
      if (document == null) dart.nullFailed(I[2], 118, 33, "document");
      this[_styleNames][$clear]();
      find['XmlFindExtension|findAllElements'](document, "style:style")[$forEach](dart.fn(style => {
        let t7, t6;
        if (style == null) dart.nullFailed(I[2], 120, 54, "style");
        let name = dart.nullCheck(style.getAttribute("style:name"));
        let family = dart.nullCheck(style.getAttribute("style:family"));
        t6 = this[_styleNames];
        t7 = family;
        t6[$_get](t7) == null ? t6[$_set](t7, T.JSArrayOfString().of([])) : null;
        dart.nullCheck(this[_styleNames][$_get](family))[$add](name);
      }, T.XmlElementTovoid()));
    }
    [_parseTable](node, name) {
      let t8, t7, t6;
      if (node == null) dart.nullFailed(I[2], 128, 31, "node");
      if (name == null) dart.nullFailed(I[2], 128, 44, "name");
      let table = (t6 = this.tables, t7 = name, t8 = new spreadsheet_decoder.SpreadsheetTable.new(name), t6[$_set](t7, t8), t8);
      let rows = spreadsheet_decoder.OdsDecoder._findRows(node);
      let filledRows = rows[$toList]()[$reversed][$skipWhile](dart.fn(row => {
        let t6;
        if (row == null) dart.nullFailed(I[2], 133, 56, "row");
        let empty = true;
        for (let cell of spreadsheet_decoder.OdsDecoder._findCells(row)) {
          if (this[_readCell](cell) != null) {
            empty = false;
            break;
          }
        }
        if (empty) {
          t6 = row.parent;
          t6 == null ? null : t6.children[$remove](row);
        }
        return empty;
      }, T.XmlElementTobool()));
      filledRows[$toList]()[$reversed][$forEach](dart.fn(child => {
        if (child == null) dart.nullFailed(I[2], 148, 43, "child");
        this[_parseRow](child, table);
      }, T.XmlElementTovoid()));
      this[_normalizeTable](table);
    }
    [_parseRow](node, table) {
      if (node == null) dart.nullFailed(I[2], 155, 29, "node");
      if (table == null) dart.nullFailed(I[2], 155, 52, "table");
      let row = [];
      let cells = spreadsheet_decoder.OdsDecoder._findCells(node);
      let filledCells = cells[$toList]()[$reversed][$skipWhile](dart.fn(cell => {
        if (cell == null) dart.nullFailed(I[2], 161, 44, "cell");
        return this[_readCell](cell) == null;
      }, T.XmlElementTobool()));
      filledCells[$toList]()[$reversed][$forEach](dart.fn(child => {
        if (child == null) dart.nullFailed(I[2], 163, 44, "child");
        this[_parseCell](child, table, row);
      }, T.XmlElementTovoid()));
      let repeat = spreadsheet_decoder.OdsDecoder._getRowRepeated(node);
      for (let index = 0; index < dart.notNull(repeat); index = index + 1) {
        table[_rows][$add](core.List.from(row));
      }
      this[_countFilledRow](table, row);
    }
    [_parseCell](node, table, row) {
      if (node == null) dart.nullFailed(I[2], 175, 30, "node");
      if (table == null) dart.nullFailed(I[2], 175, 53, "table");
      if (row == null) dart.nullFailed(I[2], 175, 65, "row");
      let value = this[_readCell](node);
      let repeat = spreadsheet_decoder.OdsDecoder._getCellRepeated(node);
      for (let index = 0; index < dart.notNull(repeat); index = index + 1) {
        row[$add](value);
      }
      this[_countFilledColumn](table, row, value);
    }
    [_readCell](node) {
      if (node == null) dart.nullFailed(I[2], 185, 32, "node");
      let value = null;
      let type = node.getAttribute("office:value-type");
      switch (type) {
        case "float":
        case "percentage":
        case "currency":
        {
          value = core.num.parse(dart.nullCheck(node.getAttribute("office:value")));
          break;
        }
        case "boolean":
        {
          value = dart.nullCheck(node.getAttribute("office:boolean-value"))[$toLowerCase]() === "true";
          break;
        }
        case "date":
        {
          value = core.DateTime.parse(dart.nullCheck(node.getAttribute("office:date-value"))).toIso8601String();
          break;
        }
        case "time":
        {
          value = node.getAttribute("office:time-value");
          value = dart.dsend(value, 'substring', [2, dart.dsend(dart.dload(value, 'length'), '-', [1])]);
          value = dart.dsend(value, 'replaceAll', [core.RegExp.new("[H|M]"), ":"]);
          break;
        }
        case "string":
        default:
        {
          let list = T.JSArrayOfString().of([]);
          find['XmlFindExtension|findElements'](node, "text:p")[$forEach](dart.fn(child => {
            if (child == null) dart.nullFailed(I[2], 210, 46, "child");
            list[$add](this[_readString](child));
          }, T.XmlElementTovoid()));
          value = dart.test(list[$isNotEmpty]) ? list[$join]("\n") : null;
        }
      }
      return value;
    }
    [_readString](node) {
      if (node == null) dart.nullFailed(I[2], 218, 33, "node");
      let buffer = new core.StringBuffer.new();
      node.children.forEach(dart.fn(child => {
        if (child == null) dart.nullFailed(I[2], 221, 28, "child");
        if (element.XmlElement.is(child)) {
          buffer.write(spreadsheet_decoder._normalizeNewLine(this[_readString](child)));
        } else if (text.XmlText.is(child)) {
          buffer.write(spreadsheet_decoder._normalizeNewLine(child.text));
        }
      }, T.XmlNodeTovoid()));
      return buffer.toString();
    }
    static _findRows(table) {
      if (table == null) dart.nullFailed(I[2], 232, 52, "table");
      return find['XmlFindExtension|findElements'](table, "table:table-row");
    }
    static _findCells(row) {
      if (row == null) dart.nullFailed(I[2], 235, 53, "row");
      return find['XmlFindExtension|findElements'](row, "table:table-cell");
    }
    static _getRowRepeated(row) {
      if (row == null) dart.nullFailed(I[2], 238, 41, "row");
      let attr = row.getAttribute("table:number-rows-repeated");
      return attr != null ? core.int.parse(attr) : 1;
    }
    static _removeRowRepeated(row) {
      if (row == null) dart.nullFailed(I[2], 243, 44, "row");
      let node = dart.nullCheck(row.getAttributeNode("table:number-rows-repeated"));
      row.attributes.remove(node);
      return core.int.parse(node.value);
    }
    static _getCellRepeated(cell) {
      if (cell == null) dart.nullFailed(I[2], 249, 42, "cell");
      let attr = cell.getAttribute("table:number-columns-repeated");
      return attr != null ? core.int.parse(attr) : 1;
    }
    static _removeCellRepeated(cell) {
      if (cell == null) dart.nullFailed(I[2], 254, 45, "cell");
      let node = dart.nullCheck(cell.getAttributeNode("table:number-columns-repeated"));
      cell.attributes.remove(node);
      return core.int.parse(node.value);
    }
    static _findRowByIndex(table, rowIndex) {
      if (table == null) dart.nullFailed(I[2], 260, 49, "table");
      if (rowIndex == null) dart.nullFailed(I[2], 260, 60, "rowIndex");
      let row = null;
      let rows = spreadsheet_decoder.OdsDecoder._findRows(table);
      let currentIndex = -1;
      for (let currentRow of rows) {
        currentIndex = currentIndex + dart.notNull(spreadsheet_decoder.OdsDecoder._getRowRepeated(currentRow));
        if (currentIndex >= dart.notNull(rowIndex)) {
          row = currentRow;
          break;
        }
      }
      if (row != null) {
        let repeat = spreadsheet_decoder.OdsDecoder._getRowRepeated(row);
        if (repeat !== 1) {
          let rows = spreadsheet_decoder.OdsDecoder._expandRepeatedRows(table, row);
          row = rows[$_get](dart.notNull(rowIndex) - (currentIndex - dart.notNull(repeat) + 1));
        }
      }
      return row;
    }
    static _findCellByIndex(row, columnIndex) {
      if (row == null) dart.nullFailed(I[2], 285, 50, "row");
      if (columnIndex == null) dart.nullFailed(I[2], 285, 59, "columnIndex");
      let cell = null;
      let cells = spreadsheet_decoder.OdsDecoder._findCells(row);
      let currentIndex = -1;
      for (let currentCell of cells) {
        currentIndex = currentIndex + dart.notNull(spreadsheet_decoder.OdsDecoder._getCellRepeated(currentCell));
        if (currentIndex >= dart.notNull(columnIndex)) {
          cell = currentCell;
          break;
        }
      }
      if (cell != null) {
        let repeat = spreadsheet_decoder.OdsDecoder._getCellRepeated(cell);
        if (repeat !== 1) {
          let cells = spreadsheet_decoder.OdsDecoder._expandRepeatedCells(row, cell);
          cell = cells[$_get](dart.notNull(columnIndex) - (currentIndex - dart.notNull(repeat) + 1));
        }
      }
      return cell;
    }
    static _expandRepeatedRows(table, row) {
      let t6;
      if (table == null) dart.nullFailed(I[2], 311, 18, "table");
      if (row == null) dart.nullFailed(I[2], 311, 36, "row");
      let repeat = spreadsheet_decoder.OdsDecoder._removeRowRepeated(row);
      let index = table.children.indexOf(row);
      let rows = T.JSArrayOfXmlElement().of([]);
      for (let i = 0; i < dart.notNull(repeat); i = i + 1) {
        rows[$add](row.copy());
      }
      t6 = table.children;
      (() => {
        t6.removeAt(index);
        t6.insertAll(index, rows);
        return t6;
      })();
      return rows;
    }
    static _expandRepeatedCells(row, cell) {
      let t6;
      if (row == null) dart.nullFailed(I[2], 327, 18, "row");
      if (cell == null) dart.nullFailed(I[2], 327, 34, "cell");
      let repeat = spreadsheet_decoder.OdsDecoder._removeCellRepeated(cell);
      let index = row.children.indexOf(cell);
      let cells = T.JSArrayOfXmlElement().of([]);
      for (let i = 0; i < dart.notNull(repeat); i = i + 1) {
        cells[$add](cell.copy());
      }
      t6 = row.children;
      (() => {
        t6.removeAt(index);
        t6.insertAll(index, cells);
        return t6;
      })();
      return cells;
    }
    static _replaceCell(row, lastCell, value) {
      let t6;
      if (row == null) dart.nullFailed(I[2], 343, 18, "row");
      if (lastCell == null) dart.nullFailed(I[2], 343, 34, "lastCell");
      let index = row.children.indexOf(lastCell);
      let cell = spreadsheet_decoder.OdsDecoder._createCell(value);
      t6 = row.children;
      (() => {
        t6.removeAt(index);
        t6.insert(index, cell);
        return t6;
      })();
      return cell;
    }
    static _createRow(maxCols, style) {
      if (maxCols == null) dart.nullFailed(I[2], 352, 36, "maxCols");
      if (style == null) dart.nullFailed(I[2], 352, 52, "style");
      let attributes = T.JSArrayOfXmlAttribute().of([new attribute.XmlAttribute.new(name.XmlName.new("table:style-name"), style)]);
      let children = T.JSArrayOfXmlNode().of([new element.XmlElement.new(name.XmlName.new("table:table-cell"), T.JSArrayOfXmlAttribute().of([new attribute.XmlAttribute.new(name.XmlName.new("table:number-columns-repeated"), dart.toString(maxCols))]))]);
      return new element.XmlElement.new(name.XmlName.new("table:table-row"), attributes, children);
    }
    static _createCell(value) {
      let attributes = value == null ? T.JSArrayOfXmlAttribute().of([]) : T.JSArrayOfXmlAttribute().of([new attribute.XmlAttribute.new(name.XmlName.new("office:value-type"), "string"), new attribute.XmlAttribute.new(name.XmlName.new("calcext:value-type"), "string")]);
      let children = value == null ? T.JSArrayOfXmlNode().of([]) : T.JSArrayOfXmlNode().of([new element.XmlElement.new(name.XmlName.new("text:p"), T.JSArrayOfXmlAttribute().of([]), T.JSArrayOfXmlNode().of([new text.XmlText.new(dart.toString(value))]))]);
      return new element.XmlElement.new(name.XmlName.new("table:table-cell"), attributes, children);
    }
  };
  (spreadsheet_decoder.OdsDecoder.new = function(archive, opts) {
    if (archive == null) dart.nullFailed(I[2], 22, 22, "archive");
    let update = opts && 'update' in opts ? opts.update : false;
    if (update == null) dart.nullFailed(I[2], 22, 37, "update");
    this[_styleNames] = new (T.IdentityMapOfString$ListOfString()).new();
    spreadsheet_decoder.OdsDecoder.__proto__.new.call(this);
    this[_archive] = archive;
    this[_update] = update;
    this[_tables] = new (T.IdentityMapOfString$SpreadsheetTable()).new();
    this[_parseContent]();
  }).prototype = spreadsheet_decoder.OdsDecoder.prototype;
  dart.addTypeTests(spreadsheet_decoder.OdsDecoder);
  dart.addTypeCaches(spreadsheet_decoder.OdsDecoder);
  dart.setMethodSignature(spreadsheet_decoder.OdsDecoder, () => ({
    __proto__: dart.getMethods(spreadsheet_decoder.OdsDecoder.__proto__),
    dumpXmlContent: dart.fnType(core.String, [], [dart.nullable(core.String)]),
    [_parseContent]: dart.fnType(dart.void, []),
    [_parseStyles]: dart.fnType(dart.void, [document$.XmlDocument]),
    [_parseTable]: dart.fnType(dart.void, [element.XmlElement, core.String]),
    [_parseRow]: dart.fnType(dart.void, [element.XmlElement, spreadsheet_decoder.SpreadsheetTable]),
    [_parseCell]: dart.fnType(dart.void, [element.XmlElement, spreadsheet_decoder.SpreadsheetTable, core.List]),
    [_readCell]: dart.fnType(dart.dynamic, [element.XmlElement]),
    [_readString]: dart.fnType(core.String, [element.XmlElement])
  }));
  dart.setGetterSignature(spreadsheet_decoder.OdsDecoder, () => ({
    __proto__: dart.getGetters(spreadsheet_decoder.OdsDecoder.__proto__),
    mediaType: core.String,
    extension: core.String
  }));
  dart.setLibraryUri(spreadsheet_decoder.OdsDecoder, I[1]);
  dart.setFieldSignature(spreadsheet_decoder.OdsDecoder, () => ({
    __proto__: dart.getFields(spreadsheet_decoder.OdsDecoder.__proto__),
    [_styleNames]: dart.finalFieldType(core.Map$(core.String, core.List$(core.String)))
  }));
  var _sharedStrings = dart.privateName(spreadsheet_decoder, "_sharedStrings");
  var _numFormats = dart.privateName(spreadsheet_decoder, "_numFormats");
  var _stylesTarget = dart.privateName(spreadsheet_decoder, "_stylesTarget");
  var _sharedStringsTarget = dart.privateName(spreadsheet_decoder, "_sharedStringsTarget");
  var _worksheetTargets = dart.privateName(spreadsheet_decoder, "_worksheetTargets");
  var _parseRelations = dart.privateName(spreadsheet_decoder, "_parseRelations");
  var _parseSharedStrings = dart.privateName(spreadsheet_decoder, "_parseSharedStrings");
  var _parseSharedString = dart.privateName(spreadsheet_decoder, "_parseSharedString");
  var _parseValue = dart.privateName(spreadsheet_decoder, "_parseValue");
  spreadsheet_decoder.XlsxDecoder = class XlsxDecoder extends spreadsheet_decoder.SpreadsheetDecoder {
    get mediaType() {
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    }
    get extension() {
      return ".xlsx";
    }
    dumpXmlContent(sheet = null) {
      if (sheet == null) {
        let buffer = new core.StringBuffer.new();
        this[_sheets][$forEach](dart.fn((name, document) => {
          if (name == null) dart.nullFailed(I[3], 123, 24, "name");
          if (document == null) dart.nullFailed(I[3], 123, 30, "document");
          buffer.writeln(name);
          buffer.writeln(document.toXmlString({pretty: true}));
        }, T.StringAndXmlElementTovoid()));
        return buffer.toString();
      } else {
        return dart.nullCheck(this[_sheets][$_get](sheet)).toXmlString({pretty: true});
      }
    }
    insertColumn(sheet, columnIndex) {
      if (sheet == null) dart.nullFailed(I[3], 134, 28, "sheet");
      if (columnIndex == null) dart.nullFailed(I[3], 134, 39, "columnIndex");
      super.insertColumn(sheet, columnIndex);
      for (let row of spreadsheet_decoder.XlsxDecoder._findRows(dart.nullCheck(this[_sheets][$_get](sheet)))) {
        let cell = null;
        let cells = spreadsheet_decoder.XlsxDecoder._findCells(row);
        let currentIndex = 0;
        for (let currentCell of cells) {
          currentIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getCellNumber(currentCell)) - 1;
          if (currentIndex >= dart.notNull(columnIndex)) {
            cell = currentCell;
            break;
          }
        }
        if (cell != null) {
          cells[$skipWhile](dart.fn(c => {
            if (c == null) dart.nullFailed(I[3], 152, 25, "c");
            return !dart.equals(c, cell);
          }, T.XmlElementTobool()))[$forEach](dart.fn(c => {
            if (c == null) dart.nullFailed(I[3], 153, 23, "c");
            return spreadsheet_decoder.XlsxDecoder._setCellColNumber(c, dart.notNull(spreadsheet_decoder.XlsxDecoder._getCellNumber(c)) + 1);
          }, T.XmlElementTovoid()));
        }
      }
    }
    removeColumn(sheet, columnIndex) {
      if (sheet == null) dart.nullFailed(I[3], 160, 28, "sheet");
      if (columnIndex == null) dart.nullFailed(I[3], 160, 39, "columnIndex");
      super.removeColumn(sheet, columnIndex);
      for (let row of spreadsheet_decoder.XlsxDecoder._findRows(dart.nullCheck(this[_sheets][$_get](sheet)))) {
        let cell = null;
        let cells = spreadsheet_decoder.XlsxDecoder._findCells(row);
        let currentIndex = 0;
        for (let currentCell of cells) {
          currentIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getCellNumber(currentCell)) - 1;
          if (currentIndex >= dart.notNull(columnIndex)) {
            cell = currentCell;
            break;
          }
        }
        if (cell != null) {
          cells[$skipWhile](dart.fn(c => {
            if (c == null) dart.nullFailed(I[3], 178, 25, "c");
            return !dart.equals(c, cell);
          }, T.XmlElementTobool()))[$forEach](dart.fn(c => {
            if (c == null) dart.nullFailed(I[3], 179, 23, "c");
            return spreadsheet_decoder.XlsxDecoder._setCellColNumber(c, dart.notNull(spreadsheet_decoder.XlsxDecoder._getCellNumber(c)) - 1);
          }, T.XmlElementTovoid()));
          dart.nullCheck(cell.parent).children[$remove](cell);
        }
      }
    }
    insertRow(sheet, rowIndex) {
      if (sheet == null) dart.nullFailed(I[3], 186, 25, "sheet");
      if (rowIndex == null) dart.nullFailed(I[3], 186, 36, "rowIndex");
      super.insertRow(sheet, rowIndex);
      let parent = dart.nullCheck(this[_sheets][$_get](sheet));
      if (dart.notNull(rowIndex) < dart.notNull(dart.nullCheck(this[_tables][$_get](sheet))[_maxRows]) - 1) {
        let foundRow = spreadsheet_decoder.XlsxDecoder._findRowByIndex(dart.nullCheck(this[_sheets][$_get](sheet)), rowIndex);
        spreadsheet_decoder.XlsxDecoder._insertRow(parent, foundRow, rowIndex);
        parent.children.whereType(element.XmlElement)[$skipWhile](dart.fn(row => {
          if (row == null) dart.nullFailed(I[3], 195, 23, "row");
          return !dart.equals(row, foundRow);
        }, T.XmlElementTobool()))[$forEach](dart.fn(row => {
          if (row == null) dart.nullFailed(I[3], 196, 21, "row");
          let rIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getRowNumber(row)) + 1;
          spreadsheet_decoder.XlsxDecoder._setRowNumber(row, rIndex);
          spreadsheet_decoder.XlsxDecoder._findCells(row)[$forEach](dart.fn(cell => {
            if (cell == null) dart.nullFailed(I[3], 199, 34, "cell");
            spreadsheet_decoder.XlsxDecoder._setCellRowNumber(cell, rIndex);
          }, T.XmlElementTovoid()));
        }, T.XmlElementTovoid()));
      } else {
        spreadsheet_decoder.XlsxDecoder._insertRow(parent, null, rowIndex);
      }
    }
    removeRow(sheet, rowIndex) {
      if (sheet == null) dart.nullFailed(I[3], 209, 25, "sheet");
      if (rowIndex == null) dart.nullFailed(I[3], 209, 36, "rowIndex");
      super.removeRow(sheet, rowIndex);
      let parent = dart.nullCheck(this[_sheets][$_get](sheet));
      let foundRow = spreadsheet_decoder.XlsxDecoder._findRowByIndex(parent, rowIndex);
      parent.children.whereType(element.XmlElement)[$skipWhile](dart.fn(row => {
        if (row == null) dart.nullFailed(I[3], 216, 21, "row");
        return !dart.equals(row, foundRow);
      }, T.XmlElementTobool()))[$forEach](dart.fn(row => {
        if (row == null) dart.nullFailed(I[3], 217, 19, "row");
        let rIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getRowNumber(row)) - 1;
        spreadsheet_decoder.XlsxDecoder._setRowNumber(row, rIndex);
        spreadsheet_decoder.XlsxDecoder._findCells(row)[$forEach](dart.fn(cell => {
          if (cell == null) dart.nullFailed(I[3], 220, 32, "cell");
          spreadsheet_decoder.XlsxDecoder._setCellRowNumber(cell, rIndex);
        }, T.XmlElementTovoid()));
      }, T.XmlElementTovoid()));
      parent.children.remove(foundRow);
    }
    updateCell(sheet, columnIndex, rowIndex, value) {
      if (sheet == null) dart.nullFailed(I[3], 228, 26, "sheet");
      if (columnIndex == null) dart.nullFailed(I[3], 228, 37, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[3], 228, 54, "rowIndex");
      super.updateCell(sheet, columnIndex, rowIndex, value);
      let foundRow = spreadsheet_decoder.XlsxDecoder._findRowByIndex(dart.nullCheck(this[_sheets][$_get](sheet)), rowIndex);
      spreadsheet_decoder.XlsxDecoder._updateCell(foundRow, columnIndex, rowIndex, value);
    }
    [_parseRelations]() {
      let relations = this[_archive].findFile("xl/_rels/workbook.xml.rels");
      if (relations != null) {
        relations.decompress();
        let document = document$.XmlDocument.parse(convert.utf8.decode(T.ListOfint().as(relations.content)));
        find['XmlFindExtension|findAllElements'](document, "Relationship")[$forEach](dart.fn(node => {
          if (node == null) dart.nullFailed(I[3], 240, 57, "node");
          let attr = node.getAttribute("Target");
          switch (node.getAttribute("Type")) {
            case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":
            {
              this[_stylesTarget] = dart.nullCheck(attr);
              break;
            }
            case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":
            {
              this[_worksheetTargets][$_set](dart.nullCheck(node.getAttribute("Id")), dart.nullCheck(attr));
              break;
            }
            case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":
            {
              this[_sharedStringsTarget] = dart.nullCheck(attr);
              break;
            }
          }
        }, T.XmlElementTovoid()));
      }
    }
    [_parseStyles]() {
      let styles = this[_archive].findFile("xl/" + dart.str(this[_stylesTarget]));
      if (styles != null) {
        styles.decompress();
        let document = document$.XmlDocument.parse(convert.utf8.decode(T.ListOfint().as(styles.content)));
        find['XmlFindExtension|findElements'](find['XmlFindExtension|findAllElements'](document, "cellXfs")[$first], "xf")[$forEach](dart.fn(node => {
          if (node == null) dart.nullFailed(I[3], 266, 21, "node");
          let numFmtId = node.getAttribute("numFmtId");
          if (numFmtId != null) {
            this[_numFormats][$add](core.int.parse(numFmtId));
          } else {
            this[_numFormats][$add](0);
          }
        }, T.XmlElementTovoid()));
      }
    }
    [_parseSharedStrings]() {
      let sharedStrings = this[_archive].findFile("xl/" + dart.str(this[_sharedStringsTarget]));
      if (sharedStrings != null) {
        sharedStrings.decompress();
        let document = document$.XmlDocument.parse(convert.utf8.decode(T.ListOfint().as(sharedStrings.content)));
        find['XmlFindExtension|findAllElements'](document, "si")[$forEach](dart.fn(node => {
          if (node == null) dart.nullFailed(I[3], 282, 47, "node");
          this[_parseSharedString](node);
        }, T.XmlElementTovoid()));
      }
    }
    [_parseSharedString](node) {
      if (node == null) dart.nullFailed(I[3], 288, 38, "node");
      let list = [];
      find['XmlFindExtension|findAllElements'](node, "t")[$forEach](dart.fn(child => {
        if (child == null) dart.nullFailed(I[3], 290, 40, "child");
        list[$add](this[_parseValue](child));
      }, T.XmlElementTovoid()));
      this[_sharedStrings][$add](list[$join](""));
    }
    [_parseContent]() {
      let t6, t6$;
      let workbook = this[_archive].findFile("xl/workbook.xml");
      t6 = workbook;
      t6 == null ? null : t6.decompress();
      let document = document$.XmlDocument.parse(convert.utf8.decode(T.ListOfint().as((t6$ = workbook, t6$ == null ? null : t6$.content))));
      find['XmlFindExtension|findAllElements'](document, "sheet")[$forEach](dart.fn(node => {
        if (node == null) dart.nullFailed(I[3], 300, 48, "node");
        this[_parseTable](node);
      }, T.XmlElementTovoid()));
    }
    [_parseTable](node) {
      let t8, t7, t6, t6$, t6$0;
      if (node == null) dart.nullFailed(I[3], 305, 31, "node");
      let name = dart.nullCheck(node.getAttribute("name"));
      let target = this[_worksheetTargets][$_get](node.getAttribute("id", {namespace: spreadsheet_decoder._relationships}));
      let table = (t6 = this.tables, t7 = name, t8 = new spreadsheet_decoder.SpreadsheetTable.new(name), t6[$_set](t7, t8), t8);
      let file = this[_archive].findFile("xl/" + dart.str(target));
      t6$ = file;
      t6$ == null ? null : t6$.decompress();
      let content = document$.XmlDocument.parse(convert.utf8.decode(T.ListOfint().as((t6$0 = file, t6$0 == null ? null : t6$0.content))));
      let worksheet = find['XmlFindExtension|findElements'](content, "worksheet")[$first];
      let sheet = find['XmlFindExtension|findElements'](worksheet, "sheetData")[$first];
      spreadsheet_decoder.XlsxDecoder._findRows(sheet)[$forEach](dart.fn(child => {
        if (child == null) dart.nullFailed(I[3], 318, 31, "child");
        this[_parseRow](child, table);
      }, T.XmlElementTovoid()));
      if (this[_update] === true) {
        this[_sheets][$_set](name, sheet);
        this[_xmlFiles][$_set]("xl/" + dart.str(target), content);
      }
      this[_normalizeTable](table);
    }
    [_parseRow](node, table) {
      if (node == null) dart.nullFailed(I[3], 329, 29, "node");
      if (table == null) dart.nullFailed(I[3], 329, 52, "table");
      let row = [];
      spreadsheet_decoder.XlsxDecoder._findCells(node)[$forEach](dart.fn(child => {
        if (child == null) dart.nullFailed(I[3], 332, 31, "child");
        this[_parseCell](child, table, row);
      }, T.XmlElementTovoid()));
      let rowIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getRowNumber(node)) - 1;
      if (dart.test(this[_isNotEmptyRow](row)) && rowIndex > dart.notNull(table[_rows][$length])) {
        let repeat = rowIndex - dart.notNull(table[_rows][$length]);
        for (let index = 0; index < repeat; index = index + 1) {
          table[_rows][$add]([]);
        }
      }
      if (dart.test(this[_isNotEmptyRow](row))) {
        table[_rows][$add](row);
      } else {
        table[_rows][$add]([]);
      }
      this[_countFilledRow](table, row);
    }
    [_parseCell](node, table, row) {
      if (node == null) dart.nullFailed(I[3], 353, 30, "node");
      if (table == null) dart.nullFailed(I[3], 353, 53, "table");
      if (row == null) dart.nullFailed(I[3], 353, 65, "row");
      let colIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getCellNumber(node)) - 1;
      if (colIndex > dart.notNull(row[$length])) {
        let repeat = colIndex - dart.notNull(row[$length]);
        for (let index = 0; index < repeat; index = index + 1) {
          row[$add](null);
        }
      }
      if (dart.test(node.children.isEmpty)) {
        return;
      }
      let value = null;
      let type = node.getAttribute("t");
      switch (type) {
        case "s":
        {
          value = this[_sharedStrings][$_get](core.int.parse(this[_parseValue](find['XmlFindExtension|findElements'](node, "v")[$first])));
          break;
        }
        case "b":
        {
          value = this[_parseValue](find['XmlFindExtension|findElements'](node, "v")[$first]) === "1";
          break;
        }
        case "e":
        case "str":
        {
          value = this[_parseValue](find['XmlFindExtension|findElements'](node, "v")[$first]);
          break;
        }
        case "inlineStr":
        {
          value = this[_parseValue](find['XmlFindExtension|findAllElements'](node, "t")[$first]);
          break;
        }
        case "n":
        default:
        {
          let s = node.getAttribute("s");
          let valueNode = find['XmlFindExtension|findElements'](node, "v");
          let content = valueNode[$first];
          if (s != null) {
            let fmtId = this[_numFormats][$_get](core.int.parse(s));
            if (dart.notNull(fmtId) >= 14 && dart.notNull(fmtId) <= 17 || fmtId === 22) {
              let delta = dart.notNull(core.num.parse(this[_parseValue](content))) * 24 * 3600 * 1000;
              let date = new core.DateTime.new(1899, 12, 30);
              value = date.add(new core.Duration.new({milliseconds: delta[$toInt]()})).toIso8601String();
            } else if (dart.notNull(fmtId) >= 18 && dart.notNull(fmtId) <= 21 || dart.notNull(fmtId) >= 45 && dart.notNull(fmtId) <= 47) {
              let delta = dart.notNull(core.num.parse(this[_parseValue](content))) * 24 * 3600 * 1000;
              let date = new core.DateTime.new(0);
              date = date.add(new core.Duration.new({milliseconds: delta[$toInt]()}));
              value = dart.str(spreadsheet_decoder._twoDigits(date.hour)) + ":" + dart.str(spreadsheet_decoder._twoDigits(date.minute)) + ":" + dart.str(spreadsheet_decoder._twoDigits(date.second));
            } else {
              value = core.num.parse(this[_parseValue](content));
            }
          } else {
            value = core.num.parse(this[_parseValue](content));
          }
        }
      }
      row[$add](value);
      this[_countFilledColumn](table, row, value);
    }
    [_parseValue](node) {
      if (node == null) dart.nullFailed(I[3], 432, 33, "node");
      let buffer = new core.StringBuffer.new();
      node.children.forEach(dart.fn(child => {
        if (child == null) dart.nullFailed(I[3], 435, 28, "child");
        if (text.XmlText.is(child)) {
          buffer.write(spreadsheet_decoder._normalizeNewLine(child.text));
        }
      }, T.XmlNodeTovoid()));
      return buffer.toString();
    }
    static _findRows(table) {
      if (table == null) dart.nullFailed(I[3], 444, 52, "table");
      return find['XmlFindExtension|findElements'](table, "row");
    }
    static _findCells(row) {
      if (row == null) dart.nullFailed(I[3], 447, 53, "row");
      return find['XmlFindExtension|findElements'](row, "c");
    }
    static _getRowNumber(row) {
      if (row == null) dart.nullFailed(I[3], 450, 39, "row");
      return core.int.parse(dart.nullCheck(row.getAttribute("r")));
    }
    static _setRowNumber(row, index) {
      if (row == null) dart.nullFailed(I[3], 451, 40, "row");
      if (index == null) dart.nullFailed(I[3], 451, 49, "index");
      return dart.nullCheck(row.getAttributeNode("r")).value = dart.toString(index);
    }
    static _getCellNumber(cell) {
      if (cell == null) dart.nullFailed(I[3], 454, 40, "cell");
      let coords = spreadsheet_decoder.cellCoordsFromCellId(dart.nullCheck(cell.getAttribute("r")));
      return core.int.as(coords[$_get](0));
    }
    static _setCellColNumber(cell, colIndex) {
      if (cell == null) dart.nullFailed(I[3], 459, 44, "cell");
      if (colIndex == null) dart.nullFailed(I[3], 459, 54, "colIndex");
      let attr = dart.nullCheck(cell.getAttributeNode("r"));
      let coords = spreadsheet_decoder.cellCoordsFromCellId(attr.value);
      attr.value = dart.str(spreadsheet_decoder.numericToLetters(colIndex)) + dart.str(coords[$_get](1));
    }
    static _setCellRowNumber(cell, rowIndex) {
      if (cell == null) dart.nullFailed(I[3], 465, 44, "cell");
      if (rowIndex == null) dart.nullFailed(I[3], 465, 54, "rowIndex");
      let attr = dart.nullCheck(cell.getAttributeNode("r"));
      let coords = spreadsheet_decoder.cellCoordsFromCellId(attr.value);
      attr.value = dart.str(spreadsheet_decoder.numericToLetters(core.int.as(coords[$_get](0)))) + dart.str(rowIndex);
    }
    static _findRowByIndex(table, rowIndex) {
      if (table == null) dart.nullFailed(I[3], 471, 48, "table");
      if (rowIndex == null) dart.nullFailed(I[3], 471, 59, "rowIndex");
      let row = null;
      let rows = spreadsheet_decoder.XlsxDecoder._findRows(table);
      let currentIndex = 0;
      for (let currentRow of rows) {
        currentIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getRowNumber(currentRow)) - 1;
        if (currentIndex >= dart.notNull(rowIndex)) {
          row = currentRow;
          break;
        }
      }
      if (row == null || currentIndex !== rowIndex) {
        row = spreadsheet_decoder.XlsxDecoder._insertRow(table, row, rowIndex);
      }
      return row;
    }
    static _updateCell(node, columnIndex, rowIndex, value) {
      if (node == null) dart.nullFailed(I[3], 493, 18, "node");
      if (columnIndex == null) dart.nullFailed(I[3], 493, 28, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[3], 493, 45, "rowIndex");
      let cell = null;
      let cells = spreadsheet_decoder.XlsxDecoder._findCells(node);
      let currentIndex = 0;
      for (let currentCell of cells) {
        currentIndex = dart.notNull(spreadsheet_decoder.XlsxDecoder._getCellNumber(currentCell)) - 1;
        if (currentIndex >= dart.notNull(columnIndex)) {
          cell = currentCell;
          break;
        }
      }
      if (cell == null || currentIndex !== columnIndex) {
        cell = spreadsheet_decoder.XlsxDecoder._insertCell(node, cell, columnIndex, rowIndex, value);
      } else {
        cell = spreadsheet_decoder.XlsxDecoder._replaceCell(node, cell, columnIndex, rowIndex, value);
      }
      return cell;
    }
    static _createRow(rowIndex) {
      if (rowIndex == null) dart.nullFailed(I[3], 515, 36, "rowIndex");
      let attributes = T.JSArrayOfXmlAttribute().of([new attribute.XmlAttribute.new(name.XmlName.new("r"), (dart.notNull(rowIndex) + 1)[$toString]())]);
      return new element.XmlElement.new(name.XmlName.new("row"), attributes, T.JSArrayOfXmlNode().of([]));
    }
    static _insertRow(table, lastRow, rowIndex) {
      if (table == null) dart.nullFailed(I[3], 523, 18, "table");
      if (rowIndex == null) dart.nullFailed(I[3], 523, 50, "rowIndex");
      let row = spreadsheet_decoder.XlsxDecoder._createRow(rowIndex);
      if (lastRow == null) {
        table.children.add(row);
      } else {
        let index = table.children.indexOf(lastRow);
        table.children.insert(index, row);
      }
      return row;
    }
    static _insertCell(row, lastCell, columnIndex, rowIndex, value) {
      if (row == null) dart.nullFailed(I[3], 534, 44, "row");
      if (columnIndex == null) dart.nullFailed(I[3], 535, 11, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[3], 535, 28, "rowIndex");
      let cell = spreadsheet_decoder.XlsxDecoder._createCell(columnIndex, rowIndex, value);
      if (lastCell == null) {
        row.children.add(cell);
      } else {
        let index = row.children.indexOf(lastCell);
        row.children.insert(index, cell);
      }
      return cell;
    }
    static _replaceCell(row, lastCell, columnIndex, rowIndex, value) {
      let t6;
      if (row == null) dart.nullFailed(I[3], 546, 45, "row");
      if (columnIndex == null) dart.nullFailed(I[3], 547, 11, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[3], 547, 28, "rowIndex");
      let index = lastCell == null ? 0 : row.children.indexOf(lastCell);
      let cell = spreadsheet_decoder.XlsxDecoder._createCell(columnIndex, rowIndex, value);
      t6 = row.children;
      (() => {
        t6.removeAt(index);
        t6.insert(index, cell);
        return t6;
      })();
      return cell;
    }
    static _createCell(columnIndex, rowIndex, value) {
      if (columnIndex == null) dart.nullFailed(I[3], 557, 37, "columnIndex");
      if (rowIndex == null) dart.nullFailed(I[3], 557, 54, "rowIndex");
      let attributes = T.JSArrayOfXmlAttribute().of([new attribute.XmlAttribute.new(name.XmlName.new("r"), dart.str(spreadsheet_decoder.numericToLetters(dart.notNull(columnIndex) + 1)) + dart.str(dart.notNull(rowIndex) + 1)), new attribute.XmlAttribute.new(name.XmlName.new("t"), "inlineStr")]);
      let children = value == null ? T.JSArrayOfXmlElement().of([]) : T.JSArrayOfXmlElement().of([new element.XmlElement.new(name.XmlName.new("is"), T.JSArrayOfXmlAttribute().of([]), T.JSArrayOfXmlNode().of([new element.XmlElement.new(name.XmlName.new("t"), T.JSArrayOfXmlAttribute().of([]), T.JSArrayOfXmlNode().of([new text.XmlText.new(dart.toString(value))]))]))]);
      return new element.XmlElement.new(name.XmlName.new("c"), attributes, children);
    }
  };
  (spreadsheet_decoder.XlsxDecoder.new = function(archive, opts) {
    if (archive == null) dart.nullFailed(I[3], 104, 23, "archive");
    let update = opts && 'update' in opts ? opts.update : false;
    if (update == null) dart.nullFailed(I[3], 104, 38, "update");
    this[_sharedStrings] = T.JSArrayOfString().of([]);
    this[_numFormats] = T.JSArrayOfint().of([]);
    this[_stylesTarget] = null;
    this[_sharedStringsTarget] = null;
    this[_worksheetTargets] = new (T.IdentityMapOfString$String()).new();
    spreadsheet_decoder.XlsxDecoder.__proto__.new.call(this);
    this[_archive] = archive;
    this[_update] = update;
    if (this[_update] === true) {
      this[_archiveFiles] = new (T.IdentityMapOfString$ArchiveFile()).new();
      this[_sheets] = new (T.IdentityMapOfString$XmlElement()).new();
      this[_xmlFiles] = new (T.IdentityMapOfString$XmlDocument()).new();
    }
    this[_tables] = new (T.IdentityMapOfString$SpreadsheetTable()).new();
    this[_parseRelations]();
    this[_parseStyles]();
    this[_parseSharedStrings]();
    this[_parseContent]();
  }).prototype = spreadsheet_decoder.XlsxDecoder.prototype;
  dart.addTypeTests(spreadsheet_decoder.XlsxDecoder);
  dart.addTypeCaches(spreadsheet_decoder.XlsxDecoder);
  dart.setMethodSignature(spreadsheet_decoder.XlsxDecoder, () => ({
    __proto__: dart.getMethods(spreadsheet_decoder.XlsxDecoder.__proto__),
    dumpXmlContent: dart.fnType(core.String, [], [dart.nullable(core.String)]),
    [_parseRelations]: dart.fnType(dart.void, []),
    [_parseStyles]: dart.fnType(dart.void, []),
    [_parseSharedStrings]: dart.fnType(dart.void, []),
    [_parseSharedString]: dart.fnType(dart.void, [element.XmlElement]),
    [_parseContent]: dart.fnType(dart.void, []),
    [_parseTable]: dart.fnType(dart.void, [element.XmlElement]),
    [_parseRow]: dart.fnType(dart.void, [element.XmlElement, spreadsheet_decoder.SpreadsheetTable]),
    [_parseCell]: dart.fnType(dart.void, [element.XmlElement, spreadsheet_decoder.SpreadsheetTable, core.List]),
    [_parseValue]: dart.fnType(core.String, [element.XmlElement])
  }));
  dart.setGetterSignature(spreadsheet_decoder.XlsxDecoder, () => ({
    __proto__: dart.getGetters(spreadsheet_decoder.XlsxDecoder.__proto__),
    mediaType: core.String,
    extension: core.String
  }));
  dart.setLibraryUri(spreadsheet_decoder.XlsxDecoder, I[1]);
  dart.setFieldSignature(spreadsheet_decoder.XlsxDecoder, () => ({
    __proto__: dart.getFields(spreadsheet_decoder.XlsxDecoder.__proto__),
    [_sharedStrings]: dart.finalFieldType(core.List$(core.String)),
    [_numFormats]: dart.finalFieldType(core.List$(core.int)),
    [_stylesTarget]: dart.fieldType(dart.nullable(core.String)),
    [_sharedStringsTarget]: dart.fieldType(dart.nullable(core.String)),
    [_worksheetTargets]: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  spreadsheet_decoder._normalizeNewLine = function _normalizeNewLine(text) {
    if (text == null) dart.nullFailed(I[0], 12, 33, "text");
    return text[$replaceAll]("\r\n", "\n");
  };
  spreadsheet_decoder._newSpreadsheetDecoder = function _newSpreadsheetDecoder(archive, update) {
    if (archive == null) dart.nullFailed(I[0], 16, 51, "archive");
    if (update == null) dart.nullFailed(I[0], 16, 65, "update");
    let format = null;
    let mimetype = archive.findFile("mimetype");
    if (mimetype != null) {
      mimetype.decompress();
      let content = convert.utf8.decode(T.ListOfint().as(mimetype.content));
      if (content == spreadsheet_decoder._spreasheetExtensionMap[$_get]("ods")) {
        format = "ods";
      }
    } else {
      let xl = archive.findFile("xl/workbook.xml");
      format = xl != null ? "xlsx" : null;
    }
    switch (format) {
      case "ods":
      {
        return new spreadsheet_decoder.OdsDecoder.new(archive, {update: update});
      }
      case "xlsx":
      {
        return new spreadsheet_decoder.XlsxDecoder.new(archive, {update: update});
      }
      default:
      {
        dart.throw(new core.UnsupportedError.new("Spreadsheet format unsupported"));
      }
    }
  };
  spreadsheet_decoder.lettersToNumeric = function lettersToNumeric(letters) {
    if (letters == null) dart.nullFailed(I[3], 13, 29, "letters");
    let sum = 0;
    let mul = 1;
    for (let index = letters.length - 1; index >= 0; index = index - 1) {
      let c = letters[$_get](index)[$codeUnitAt](0);
      let n = 1;
      if (65 <= c && c <= 90) {
        n = n + (c - 65);
      } else if (97 <= c && c <= 122) {
        n = n + (c - 97);
      }
      sum = sum + n * mul;
      mul = mul * 26;
    }
    return sum;
  };
  spreadsheet_decoder.numericToLetters = function numericToLetters(number) {
    if (number == null) dart.nullFailed(I[3], 31, 29, "number");
    let letters = "";
    while (number !== 0) {
      let remainder = number[$modulo](26);
      if (remainder === 0) {
        remainder = 26;
      }
      let letter = core.String.fromCharCode(65 + remainder - 1);
      letters = dart.notNull(letter) + letters;
      number = ((dart.notNull(number) - 1) / 26)[$truncate]();
    }
    return letters;
  };
  spreadsheet_decoder._letterOnly = function _letterOnly(rune) {
    if (rune == null) dart.nullFailed(I[3], 54, 21, "rune");
    if (65 <= dart.notNull(rune) && dart.notNull(rune) <= 90) {
      return rune;
    } else if (97 <= dart.notNull(rune) && dart.notNull(rune) <= 122) {
      return dart.notNull(rune) - 32;
    }
    return 0;
  };
  spreadsheet_decoder._twoDigits = function _twoDigits(n) {
    if (n == null) dart.nullFailed(I[3], 71, 23, "n");
    if (dart.notNull(n) >= 10) {
      return dart.str(n);
    }
    return "0" + dart.str(n);
  };
  spreadsheet_decoder.cellCoordsFromCellId = function cellCoordsFromCellId(cellId) {
    if (cellId == null) dart.nullFailed(I[3], 80, 34, "cellId");
    let letters = cellId[$runes][$map](core.int, C[0] || CT.C0);
    let lettersPart = convert.utf8.decode(letters[$where](dart.fn(rune => {
      if (rune == null) dart.nullFailed(I[3], 83, 34, "rune");
      return dart.notNull(rune) > 0;
    }, T.intTobool()))[$toList]({growable: false}));
    let numericsPart = cellId[$substring](lettersPart.length);
    let x = spreadsheet_decoder.lettersToNumeric(lettersPart);
    let y = core.int.parse(numericsPart);
    return [x, y];
  };
  dart.defineLazy(spreadsheet_decoder, {
    /*spreadsheet_decoder._spreasheetOds*/get _spreasheetOds() {
      return "ods";
    },
    /*spreadsheet_decoder._spreasheetXlsx*/get _spreasheetXlsx() {
      return "xlsx";
    },
    /*spreadsheet_decoder._spreasheetExtensionMap*/get _spreasheetExtensionMap() {
      return new (T.IdentityMapOfString$String()).from(["ods", "application/vnd.oasis.opendocument.spreadsheet", "xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]);
    },
    /*spreadsheet_decoder._noCompression*/get _noCompression() {
      return C[1] || CT.C1;
    },
    /*spreadsheet_decoder.CONTENT_XML*/get CONTENT_XML() {
      return "content.xml";
    },
    /*spreadsheet_decoder._relationships*/get _relationships() {
      return "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
    },
    /*spreadsheet_decoder._relationshipsStyles*/get _relationshipsStyles() {
      return "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
    },
    /*spreadsheet_decoder._relationshipsWorksheet*/get _relationshipsWorksheet() {
      return "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";
    },
    /*spreadsheet_decoder._relationshipsSharedStrings*/get _relationshipsSharedStrings() {
      return "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
    }
  }, false);
  dart.trackLibraries("packages/spreadsheet_decoder/spreadsheet_decoder", {
    "package:spreadsheet_decoder/spreadsheet_decoder.dart": spreadsheet_decoder
  }, {
    "package:spreadsheet_decoder/spreadsheet_decoder.dart": ["src/spreadsheet.dart", "src/ods.dart", "src/xlsx.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/spreadsheet.dart","src/ods.dart","src/xlsx.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqDY;IAAO;;;AAAP;;IAAO;;;AACJ;IAAQ;;;AAAR;;IAAQ;;;AACQ;IAAO;;;AAAP;;IAAO;;;AACN;IAAS;;;AAAT;;IAAS;;;AACT;IAAa;;;AAAb;;IAAa;;;AAER;IAAO;;;AAAP;;IAAO;;AASE;IAAO;;UAIF;UACvC;;UAAqB;;AACzB,oBAAU,AAAa,6CAAY,IAAI,WAAU,MAAM;AAC3D,YAAO,4CAAuB,OAAO,EAAE,MAAM;IAC/C;;UAEoD;UAC1C;;UAAqB;;AACzB,oBAAU,AAAa,8CAAa,KAAK,WAAU,MAAM;AAC7D,YAAO,4CAAuB,OAAO,EAAE,MAAM;IAC/C;;UAKiC;AAC/B,UAAI,kBAAW;AACyD,QAAtE,WAAM,2BAAc;;AAEtB,UAAI,AAAQ,AAAmB,4BAAP,KAAK,MAAK;AACS,QAAzC,WAAM,2BAAc,AAAoB,eAAjB,KAAK;;IAEhC;iBAGyB,OAAW;;UAAX;UAAW;AACP,MAA3B,2BAAqB,KAAK;AACtB,kBAAsB,eAAd,AAAO,qBAAC,KAAK;AAEzB,UAAgB,aAAZ,WAAW,IAAG,KAAiB,aAAZ,WAAW,iBAAG,AAAM,KAAD;AACc,QAAtD,WAAiB,0BAAM,WAAW,EAAE,GAAG,AAAM,KAAD;;AAGY,MAA1D,AAAM,AAAK,KAAN,gBAAc;YAAC;AAAQ,cAAA,AAAI,IAAD,UAAQ,WAAW,EAAE;;AACpC,WAAhB,KAAK;MAAC,eAAQ,aAAR,gBAAQ;IAChB;iBAGyB,OAAW;;UAAX;UAAW;AACP,MAA3B,2BAAqB,KAAK;AACtB,kBAAsB,eAAd,AAAO,qBAAC,KAAK;AAEzB,UAAgB,aAAZ,WAAW,IAAG,KAAiB,aAAZ,WAAW,kBAAI,AAAM,KAAD;AACiB,QAA1D,WAAiB,0BAAM,WAAW,EAAE,GAAkB,aAAf,AAAM,KAAD,cAAY;;AAGJ,MAAtD,AAAM,AAAK,KAAN,gBAAc;YAAC;AAAQ,cAAA,AAAI,IAAD,YAAU,WAAW;;AACpC,WAAhB,KAAK;MAAC,eAAQ,aAAR,gBAAQ;IAChB;cAGsB,OAAW;;UAAX;UAAW;AACJ,MAA3B,2BAAqB,KAAK;AACtB,kBAAsB,eAAd,AAAO,qBAAC,KAAK;AAEzB,UAAa,aAAT,QAAQ,IAAG,KAAc,aAAT,QAAQ,iBAAG,AAAM,KAAD;AACiB,QAAnD,WAAiB,0BAAM,QAAQ,EAAE,GAAG,AAAM,KAAD;;AAG4B,MAAvE,AAAM,AAAK,KAAN,eAAa,QAAQ,EAAO,mBAAS,AAAM,KAAD,YAAW;YAAC;AAAM;;AACjD,WAAhB,KAAK;MAAC,eAAQ,aAAR,gBAAQ;IAChB;cAGsB,OAAW;;UAAX;UAAW;AACJ,MAA3B,2BAAqB,KAAK;AACtB,kBAAsB,eAAd,AAAO,qBAAC,KAAK;AAEzB,UAAa,aAAT,QAAQ,IAAG,KAAc,aAAT,QAAQ,kBAAI,AAAM,KAAD;AACoB,QAAvD,WAAiB,0BAAM,QAAQ,EAAE,GAAkB,aAAf,AAAM,KAAD,cAAY;;AAG1B,MAA7B,AAAM,AAAK,KAAN,iBAAe,QAAQ;AACZ,WAAhB,KAAK;MAAC,eAAQ,aAAR,gBAAQ;IAChB;eAGuB,OAAW,aAAiB,UAAkB;UAA9C;UAAW;UAAiB;AACtB,MAA3B,2BAAqB,KAAK;AACtB,kBAAsB,eAAd,AAAO,qBAAC,KAAK;AAEzB,UAAgB,aAAZ,WAAW,IAAG,KAAiB,aAAZ,WAAW,kBAAI,AAAM,KAAD;AACiB,QAA1D,WAAiB,0BAAM,WAAW,EAAE,GAAkB,aAAf,AAAM,KAAD,cAAY;;AAE1D,UAAa,aAAT,QAAQ,IAAG,KAAc,aAAT,QAAQ,kBAAI,AAAM,KAAD;AACoB,QAAvD,WAAiB,0BAAM,QAAQ,EAAE,GAAkB,aAAf,AAAM,KAAD,cAAY;;AAGH,MAApD,AAAM,AAAI,AAAU,KAAf,aAAM,QAAQ,SAAE,WAAW,EAAU,cAAN,KAAK;IAC3C;;AAIE,UAAI,kBAAW;AACyD,QAAtE,WAAM,2BAAc;;AAGtB,eAAS,UAAW,AAAU;AACxB,kBAAyB,cAAnB,AAAS,uBAAC,OAAO;AACvB,sBAAU,AAAK,oBAAO,GAAG;AACyC,QAAtE,AAAa,2BAAC,OAAO,EAAI,iCAAY,OAAO,EAAE,AAAQ,OAAD,WAAS,OAAO;;AAEvE,YAAoD,eAA7C,AAAa,wCAAO,oBAAc;IAC3C;;AAIM,mBAAS;AAC4B,MAAzC,AAAO,MAAD,OAAO,AAA2B,mBAAnB,kBAAU;AACK,MAApC,AAAO,MAAD,OAAO,qBAAa;AAC1B,YAAO,AAAO,OAAD;IACf;;UAE8B;AACxB,kBAAQ;AAeV,MAdF,AAAQ,AAAM,OAAP,iBAAe,QAAC;;;AACrB,sBAAI,AAAK,IAAD;AACM;AACZ,wBAAI,AAAc,kCAAY,AAAK,IAAD;AACA,YAAhC,OAA+B,eAAxB,AAAa,2BAAC,AAAK,IAAD;;AAErB,0BAAwB,AAAc,wBAA3B,AAAK,IAAD;AAEf,qCAAW,AAAe,8CAAS,AAAK,IAAD,UAAS,QAAQ;AAErC,YADvB,aAAO,iCAAY,AAAK,IAAD,OAAO,AAAQ,OAAD,WAAS,OAAO,GAA9C;AACH,4BAAW,QAAQ;;;;AAEN,UAAnB,AAAM,KAAD,SAAS,IAAI;;;AAGtB,YAAO,MAAK;IACd;;UAEsC;AACpC,UAAI,AAAM,AAAS,KAAV,eAAa;AACD,QAAnB,AAAM,AAAM,KAAP;YACA,KAAmB,aAAf,AAAM,KAAD,2BAAY,AAAM,AAAM,KAAP;AAC4B,QAA3D,AAAM,AAAM,KAAP,sBAAmB,AAAM,KAAD,YAAW,AAAM,AAAM,KAAP;;AAE/C,eAAS,MAAM,GAAG,AAAI,GAAD,gBAAG,AAAM,AAAM,KAAP,mBAAe,MAAA,AAAG,GAAA;AAC7C,YAAI,AAAM,AAAS,KAAV,eAAa;AACI,UAAxB,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG;cACV,KAAmB,aAAf,AAAM,KAAD,2BAAY,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG;AAC4B,UAArE,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG,gBAAc,AAAM,KAAD,YAAW,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG;cACvD,KAAmB,aAAf,AAAM,KAAD,2BAAY,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG;AACrC,uBAAwB,aAAf,AAAM,KAAD,2BAAY,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG;AAC7C,mBAAS,QAAQ,GAAG,AAAM,KAAD,GAAG,MAAM,EAAE,QAAA,AAAK,KAAA;AACb,YAA1B,AAAM,AAAK,AAAM,KAAZ,eAAO,GAAG,QAAM;;;;IAI7B;;UAEsB;AACpB,YAAO,AAAI,IAAD,mBAAM,MAAM,SAAC,OAAO;YAAP;AAAmB,cAAM,WAAN,KAAK,KAAK,AAAQ,OAAD;;IAC7D;;UAEyB;AACvB,YAAO,YAAC,kBAAY,GAAG;IACzB;sBAEsC,OAAY;UAAZ;UAAY;AAChD,oBAAI,qBAAe,GAAG;AACpB,YAAmB,aAAf,AAAM,KAAD,2BAAY,AAAM,AAAM,KAAP;AACW,UAAnC,AAAM,KAAD,aAAY,AAAM,AAAM,KAAP;;;IAG5B;yBAEyC,OAAY,KAAa;UAAzB;UAAY;AACnD,UAAI,KAAK;AACP,YAAmB,aAAf,AAAM,KAAD,2BAAY,AAAI,GAAD;AACK,UAA3B,AAAM,KAAD,aAAY,AAAI,GAAD;;;IAG1B;;;yCAlMU;;0CACG;;yCACgB;;2CACC;;+CACA;;yCAEK;;;EAWf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsLP;;;;;;;AASU;IAAK;;AAGT;IAAQ;;AAGR;IAAQ;;;QAdL;IAElB,iBAAW;IACX,iBAAW;IAEE,cAAc;IALT;;EAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;AC7OH;IAAgD;;AAEhD;IAAM;mBAWC;AAC7B,UAAI,AAAM,KAAD;AACP,cAA6B,AAAE,gBAAxB,AAAS,4DAAmC;;AAEnD,cAAqB,AAAE,gBAAhB,AAAO,qBAAC,KAAK,wBAAuB;;IAE/C;iBAGyB,OAAW;UAAX;UAAW;AACI,MAAhC,mBAAa,KAAK,EAAE,WAAW;AAEjC,iBAAO,AAA2B,yCAAH,eAAd,AAAO,qBAAC,KAAK;AAClC,eAAS,MAAO,KAAI;AACd,mBAAO,gDAAiB,GAAG,EAAE,WAAW;AAC5C,YAAI,IAAI;AAC4D,UAAlE,AAAI,AAAS,GAAV,iBAAiB,AAAI,AAAS,GAAV,kBAAkB,IAAI,GAAG,2CAAY;;AAEzB,UAAnC,AAAI,AAAS,GAAV,cAAc,2CAAY;;;IAGnC;iBAGyB,OAAW;UAAX;UAAW;AACI,MAAhC,mBAAa,KAAK,EAAE,WAAW;AAEjC,iBAAO,AAA2B,yCAAH,eAAd,AAAO,qBAAC,KAAK;AAClC,eAAS,MAAO,KAAI;AACd,mBAAO,gDAAiB,GAAG,EAAE,WAAW;AACnB,QAAzB,AAAI,AAAS,GAAV,iBAAiB,IAAI;;IAE5B;cAGsB,OAAW;UAAX;UAAW;AACC,MAA1B,gBAAU,KAAK,EAAE,QAAQ;AAE3B,kBAAgC,AAAE,eAA1B,AAAW,yBAAC;AACpB,mBAAuB,eAAd,AAAO,qBAAC,KAAK;AACtB,mBAAS,0CAAyB,AAAE,eAAhB,AAAO,qBAAC,KAAK,cAAa,KAAK;AACnD,gBAAM,+CAAgB,MAAM,EAAE,QAAQ;AAC1C,UAAI,GAAG;AACuD,QAA5D,AAAO,AAAS,MAAV,iBAAiB,AAAO,AAAS,MAAV,kBAAkB,GAAG,GAAG,MAAM;;AAEhC,QAA3B,AAAO,AAAS,MAAV,cAAc,MAAM;;IAE9B;cAGsB,OAAW;UAAX;UAAW;AACC,MAA1B,gBAAU,KAAK,EAAE,QAAQ;AAE3B,mBAAuB,eAAd,AAAO,qBAAC,KAAK;AACtB,gBAAM,+CAAgB,MAAM,EAAE,QAAQ;AACf,MAA3B,AAAO,AAAS,MAAV,iBAAiB,GAAG;IAC5B;eAGuB,OAAW,aAAiB,UAAkB;UAA9C;UAAW;UAAiB;AACI,MAA/C,iBAAW,KAAK,EAAE,WAAW,EAAE,QAAQ,EAAE,KAAK;AAEhD,gBAAgD,eAA1C,+CAA8B,eAAd,AAAO,qBAAC,KAAK,IAAI,QAAQ;AAC/C,iBAAyC,eAAlC,gDAAiB,GAAG,EAAE,WAAW;AACd,MAA9B,4CAAa,GAAG,EAAE,IAAI,EAAE,KAAK;IAC/B;;;AAGM,iBAAO,AAAS;AACF,WAAlB,IAAI;mBAAJ,OAAM;AACF,oBAAsB,4BAAM,AAAK,4CAAO,IAAI,gBAAJ,OAAM;AAClD,UAAI,AAAQ,kBAAG;AAC0B,QAAvC,sBAAqC;AACL,QAAhC,gBAA8B;AAG7B,QAFD,kBAAY,+DACG,OAAO;AAED,QAArB,mBAAa,OAAO;;AAQpB,MANM,AAA+B,yCAAvC,OAAO,EAAiB,yBAAuB;YAAC;AAC1C,mBAAsC,eAA/B,AAAK,IAAD,cAAc;AAC7B,YAAI,AAAQ,kBAAG;AACO,UAApB,AAAO,qBAAC,IAAI,EAAI,IAAI;;AAEC,QAAvB,kBAAY,IAAI,EAAE,IAAI;;IAE1B;;UAE8B;AACT,MAAnB,AAAY;AAMV,MALO,AAA+B,yCAAxC,QAAQ,EAAiB,yBAAuB,QAAC;;;AAC3C,mBAAuC,eAAhC,AAAM,KAAD,cAAc;AAC1B,qBAA2C,eAAlC,AAAM,KAAD,cAAc;AACE,aAAlC;aAAY,MAAM;QAAE,wBAAT,cAAqB,8BAAZ;AACU,QAAX,AAAE,eAArB,AAAW,yBAAC,MAAM,SAAO,IAAI;;IAEjC;kBAE4B,MAAa;;UAAb;UAAa;AACnC,mBAAc,KAAN,kBAAO,IAAI,OAAI,6CAAiB,IAAI,GAA9B;AACd,iBAAO,yCAAU,IAAI;AAGrB,uBAAa,AAAK,AAAS,AAAS,IAAnB,mCAA6B,QAAC;;;AAC7C,oBAAQ;AACZ,iBAAS,OAAQ,2CAAW,GAAG;AAC7B,cAAI,gBAAU,IAAI;AACH,YAAb,QAAQ;AACR;;;AAGJ,YAAI,KAAK;AACyB,eAAhC,AAAI,GAAD;uBAAC,OAAQ,AAAS,qBAAO,GAAG;;AAGjC,cAAO,MAAK;;AAKZ,MAFF,AAAW,AAAS,AAAS,UAAnB,iCAA2B;YAAC;AACb,QAAvB,gBAAU,KAAK,EAAE,KAAK;;AAGF,MAAtB,sBAAgB,KAAK;IACvB;gBAE0B,MAAuB;UAAvB;UAAuB;AAC3C,gBAAM;AACN,kBAAQ,0CAAW,IAAI;AAGvB,wBACA,AAAM,AAAS,AAAS,KAAnB,mCAA6B;YAAC;AAAS,cAAA,AAAgB,iBAAN,IAAI;;AAI5D,MAFF,AAAY,AAAS,AAAS,WAAnB,iCAA2B;YAAC;AACR,QAA7B,iBAAW,KAAK,EAAE,KAAK,EAAE,GAAG;;AAG1B,mBAAS,+CAAgB,IAAI;AACjC,eAAS,QAAQ,GAAG,AAAM,KAAD,gBAAG,MAAM,GAAE,QAAA,AAAK,KAAA;AACR,QAA/B,AAAM,AAAM,KAAP,cAAgB,eAAK,GAAG;;AAGJ,MAA3B,sBAAgB,KAAK,EAAE,GAAG;IAC5B;iBAE2B,MAAuB,OAAY;UAAnC;UAAuB;UAAY;AACxD,kBAAQ,gBAAU,IAAI;AACtB,mBAAS,gDAAiB,IAAI;AAClC,eAAS,QAAQ,GAAG,AAAM,KAAD,gBAAG,MAAM,GAAE,QAAA,AAAK,KAAA;AACzB,QAAd,AAAI,GAAD,OAAK,KAAK;;AAGsB,MAArC,yBAAmB,KAAK,EAAE,GAAG,EAAE,KAAK;IACtC;;UAE6B;AACvB;AACA,iBAAO,AAAK,IAAD,cAAc;AAC7B,cAAQ,IAAI;;;;;AAI6C,UAArD,QAAY,eAAuC,eAAjC,AAAK,IAAD,cAAc;AACpC;;;;AAGsE,UADtE,QAC6C,AAAE,AAAc,eAAzD,AAAK,IAAD,cAAc,6CAA0C;AAChE;;;;AAGsB,UADtB,QAAiB,AACZ,oBADwD,eAAtC,AAAK,IAAD,cAAc;AAEzC;;;;AAE8C,UAA9C,QAAQ,AAAK,IAAD,cAAc;AACkB,UAA5C,QAAc,WAAN,KAAK,gBAAW,GAAgB,WAAP,WAAN,KAAK,mBAAU;AACI,UAA9C,QAAc,WAAN,KAAK,iBAAY,gBAAO,UAAU;AAC1C;;;;;AAGI,qBAAe;AAGjB,UAFG,AAAuB,sCAA5B,IAAI,EAAc,oBAAkB;gBAAC;AACP,YAA5B,AAAK,IAAD,OAAK,kBAAY,KAAK;;AAEsB,UAAlD,kBAAS,AAAK,IAAD,iBAAe,AAAK,IAAD,QAAM,QAAQ;;;AAElD,YAAO,MAAK;IACd;;UAE8B;AACxB,mBAAS;AAQX,MANF,AAAK,AAAS,IAAV,kBAAkB;YAAC;AACrB,YAAU,sBAAN,KAAK;AAC4C,UAAnD,AAAO,MAAD,OAAO,sCAAkB,kBAAY,KAAK;cAC3C,KAAU,gBAAN,KAAK;AAC6B,UAA3C,AAAO,MAAD,OAAO,sCAAkB,AAAM,KAAD;;;AAIxC,YAAO,AAAO,OAAD;IACf;;UAEiD;AAC7C,YAAM,uCAAN,KAAK,EAAc;IAAkB;;UAES;AAC9C,YAAI,uCAAJ,GAAG,EAAc;IAAmB;;UAEF;AAChC,iBAAO,AAAI,GAAD,cAAc;AAC5B,YAAQ,AAAK,KAAD,WAAgB,eAAM,IAAI,IAAI;IAC5C;;UAEyC;AACnC,iBAAyD,eAAlD,AAAI,GAAD,kBAAkB;AACL,MAA3B,AAAI,AAAW,GAAZ,mBAAmB,IAAI;AAC1B,YAAW,gBAAM,AAAK,IAAD;IACvB;;UAEuC;AACjC,iBAAO,AAAK,IAAD,cAAc;AAC7B,YAAQ,AAAK,KAAD,WAAgB,eAAM,IAAI,IAAI;IAC5C;;UAE0C;AACpC,iBAA6D,eAAtD,AAAK,IAAD,kBAAkB;AACL,MAA5B,AAAK,AAAW,IAAZ,mBAAmB,IAAI;AAC3B,YAAW,gBAAM,AAAK,IAAD;IACvB;2BAE8C,OAAW;UAAX;UAAW;AAC3C;AACR,iBAAO,yCAAU,KAAK;AAEtB,yBAAe,CAAC;AACpB,eAAS,aAAc,KAAI;AACkB,QAA3C,eAAA,AAAa,YAAD,gBAAI,+CAAgB,UAAU;AAC1C,YAAI,AAAa,YAAD,iBAAI,QAAQ;AACV,UAAhB,MAAM,UAAU;AAChB;;;AAIJ,UAAI,GAAG;AAED,qBAAS,+CAAgB,GAAG;AAChC,YAAI,MAAM,KAAI;AACR,qBAAO,mDAAoB,KAAK,EAAE,GAAG;AACS,UAAlD,MAAM,AAAI,IAAA,QAAU,aAAT,QAAQ,KAAI,AAAa,AAAS,YAAV,gBAAG,MAAM,IAAG;;;AAInD,YAAO,IAAG;IACZ;4BAE+C,KAAS;UAAT;UAAS;AAC1C;AACR,kBAAQ,0CAAW,GAAG;AAEtB,yBAAe,CAAC;AACpB,eAAS,cAAe,MAAK;AACkB,QAA7C,eAAA,AAAa,YAAD,gBAAI,gDAAiB,WAAW;AAC5C,YAAI,AAAa,YAAD,iBAAI,WAAW;AACX,UAAlB,OAAO,WAAW;AAClB;;;AAIJ,UAAI,IAAI;AAEF,qBAAS,gDAAiB,IAAI;AAClC,YAAI,MAAM,KAAI;AACR,sBAAQ,oDAAqB,GAAG,EAAE,IAAI;AACa,UAAvD,OAAO,AAAK,KAAA,QAAa,aAAZ,WAAW,KAAI,AAAa,AAAS,YAAV,gBAAG,MAAM,IAAG;;;AAIxD,YAAO,KAAI;IACb;+BAGe,OAAkB;;UAAlB;UAAkB;AAC3B,mBAAS,kDAAmB,GAAG;AAC/B,kBAAQ,AAAM,AAAS,KAAV,kBAAkB,GAAG;AAClC,iBAAmB;AACvB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,IAAA,AAAC,CAAA;AACP,QAApB,AAAK,IAAD,OAAK,AAAI,GAAD;;AAKY,WAF1B,AAAM,KAAD;MAAC;AACF,oBAAS,KAAK;AACd,qBAAU,KAAK,EAAE,IAAI;;;AAEzB,YAAO,KAAI;IACb;gCAGe,KAAgB;;UAAhB;UAAgB;AACzB,mBAAS,mDAAoB,IAAI;AACjC,kBAAQ,AAAI,AAAS,GAAV,kBAAkB,IAAI;AACjC,kBAAoB;AACxB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,IAAA,AAAC,CAAA;AACL,QAAtB,AAAM,KAAD,OAAK,AAAK,IAAD;;AAKW,WAF3B,AAAI,GAAD;MAAC;AACA,oBAAS,KAAK;AACd,qBAAU,KAAK,EAAE,KAAK;;;AAE1B,YAAO,MAAK;IACd;wBAGe,KAAgB,UAAkB;;UAAlC;UAAgB;AACzB,kBAAQ,AAAI,AAAS,GAAV,kBAAkB,QAAQ;AACrC,iBAAO,2CAAY,KAAK;AAGL,WAFvB,AAAI,GAAD;MAAC;AACA,oBAAS,KAAK;AACd,kBAAO,KAAK,EAAE,IAAI;;;AACtB,YAAO,KAAI;IACb;sBAEiC,SAAgB;UAAhB;UAAgB;AAC3C,uBAA2B,8BAC7B,+BAAa,iBAAQ,qBAAqB,KAAK;AAE7C,qBAAoB,yBACtB,2BAAW,iBAAQ,qBAAqB,8BACtC,+BACI,iBAAQ,kCAA0C,cAAR,OAAO;AAGzD,YAAO,4BAAW,iBAAQ,oBAAoB,UAAU,EAAE,QAAQ;IACpE;uBAGsC;AAChC,uBAAa,AAAM,KAAD,WACF,mCACA,8BACZ,+BAAa,iBAAQ,sBAAsB,WAC3C,+BAAa,iBAAQ,uBAAuB;AAEhD,qBAAW,AAAM,KAAD,WACL,8BACA,yBACP,2BAAW,iBAAQ,WAAW,kCAAI,yBAAC,qBAAc,cAAN,KAAK;AAExD,YAAO,4BAAW,iBAAQ,qBAAqB,UAAU,EAAE,QAAQ;IACrE;;;QArWmB;QAAe;;IAFF,oBAAc;AAE9C;AACoB,IAAlB,iBAAW,OAAO;AACF,IAAhB,gBAAU,MAAM;AACsB,IAAtC,gBAAoC;AACrB,IAAf;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACmEI;IAAmE;;AAE/C;IAAO;mBAwBA;AAC7B,UAAI,AAAM,KAAD;AACH,qBAAS;AAIX,QAHF,AAAQ,wBAAQ,SAAC,MAAM;cAAN;cAAM;AACD,UAApB,AAAO,MAAD,SAAS,IAAI;AAC+B,UAAlD,AAAO,MAAD,SAAS,AAAS,QAAD,sBAAqB;;AAE9C,cAAO,AAAO,OAAD;;AAEb,cAAqB,AAAE,gBAAhB,AAAO,qBAAC,KAAK,wBAAuB;;IAE/C;iBAGyB,OAAW;UAAX;UAAW;AACI,MAAhC,mBAAa,KAAK,EAAE,WAAW;AAErC,eAAS,MAAO,2CAAwB,eAAd,AAAO,qBAAC,KAAK;AACzB;AACR,oBAAQ,2CAAW,GAAG;AAEtB,2BAAe;AACnB,iBAAS,cAAe,MAAK;AACmB,UAA9C,eAA2C,aAA5B,+CAAe,WAAW,KAAI;AAC7C,cAAI,AAAa,YAAD,iBAAI,WAAW;AACX,YAAlB,OAAO,WAAW;AAClB;;;AAIJ,YAAI,IAAI;AAG0D,UAFhE,AACK,AACA,KAFA,aACU;gBAAC;AAAM,kBAAE,cAAF,CAAC,EAAI,IAAI;8CAClB;gBAAC;AAAM,qEAAkB,CAAC,EAAoB,aAAlB,+CAAe,CAAC,KAAI;;;;IAInE;iBAGyB,OAAW;UAAX;UAAW;AACI,MAAhC,mBAAa,KAAK,EAAE,WAAW;AAErC,eAAS,MAAO,2CAAwB,eAAd,AAAO,qBAAC,KAAK;AACzB;AACR,oBAAQ,2CAAW,GAAG;AAEtB,2BAAe;AACnB,iBAAS,cAAe,MAAK;AACmB,UAA9C,eAA2C,aAA5B,+CAAe,WAAW,KAAI;AAC7C,cAAI,AAAa,YAAD,iBAAI,WAAW;AACX,YAAlB,OAAO,WAAW;AAClB;;;AAIJ,YAAI,IAAI;AAG0D,UAFhE,AACK,AACA,KAFA,aACU;gBAAC;AAAM,kBAAE,cAAF,CAAC,EAAI,IAAI;8CAClB;gBAAC;AAAM,qEAAkB,CAAC,EAAoB,aAAlB,+CAAe,CAAC,KAAI;;AAC3B,UAAvB,AAAE,AAAS,eAAtB,AAAK,IAAD,2BAAyB,IAAI;;;IAGvC;cAGsB,OAAW;UAAX;UAAW;AACC,MAA1B,gBAAU,KAAK,EAAE,QAAQ;AAE3B,mBAAuB,eAAd,AAAO,qBAAC,KAAK;AAC1B,UAAa,aAAT,QAAQ,IAA4B,aAAX,AAAE,eAAhB,AAAO,qBAAC,KAAK,gBAAc;AACpC,uBAAW,gDAA8B,eAAd,AAAO,qBAAC,KAAK,IAAI,QAAQ;AAClB,QAAtC,2CAAW,MAAM,EAAE,QAAQ,EAAE,QAAQ;AAUnC,QATF,AAAO,AACF,AACA,AACA,MAHC,oDAES;cAAC;AAAQ,gBAAI,cAAJ,GAAG,EAAI,QAAQ;4CAC1B;cAAC;AACR,uBAA4B,aAAnB,8CAAc,GAAG,KAAI;AACR,UAA1B,8CAAc,GAAG,EAAE,MAAM;AAGvB,UAFF,AAAgB,2CAAL,GAAG,YAAU;gBAAC;AACQ,YAA/B,kDAAkB,IAAI,EAAE,MAAM;;;;AAIA,QAAlC,2CAAW,MAAM,EAAE,MAAM,QAAQ;;IAErC;cAGsB,OAAW;UAAX;UAAW;AACC,MAA1B,gBAAU,KAAK,EAAE,QAAQ;AAE3B,mBAAuB,eAAd,AAAO,qBAAC,KAAK;AACtB,qBAAW,gDAAgB,MAAM,EAAE,QAAQ;AAU7C,MATF,AAAO,AACF,AACA,AACA,MAHC,oDAES;YAAC;AAAQ,cAAI,cAAJ,GAAG,EAAI,QAAQ;0CAC1B;YAAC;AACR,qBAA4B,aAAnB,8CAAc,GAAG,KAAI;AACR,QAA1B,8CAAc,GAAG,EAAE,MAAM;AAGvB,QAFF,AAAgB,2CAAL,GAAG,YAAU;cAAC;AACQ,UAA/B,kDAAkB,IAAI,EAAE,MAAM;;;AAGF,MAAhC,AAAO,AAAS,MAAV,iBAAiB,QAAQ;IACjC;eAGuB,OAAW,aAAiB,UAAkB;UAA9C;UAAW;UAAiB;AACI,MAA/C,iBAAW,KAAK,EAAE,WAAW,EAAE,QAAQ,EAAE,KAAK;AAEhD,qBAAW,gDAA8B,eAAd,AAAO,qBAAC,KAAK,IAAI,QAAQ;AACL,MAAnD,4CAAY,QAAQ,EAAE,WAAW,EAAE,QAAQ,EAAE,KAAK;IACpD;;AAGM,sBAAY,AAAS,wBAAS;AAClC,UAAI,SAAS;AACW,QAAtB,AAAU,SAAD;AACL,uBAAuB,4BAAM,AAAK,qCAAO,AAAU,SAAD;AAcpD,QAbO,AAAgC,yCAAzC,QAAQ,EAAiB,0BAAwB;cAAC;AAC5C,qBAAO,AAAK,IAAD,cAAc;AAC7B,kBAAQ,AAAK,IAAD,cAAc;;;AAED,cAArB,sBAAoB,eAAJ,IAAI;AACpB;;;;AAEmD,cAAnD,AAAiB,+BAAwB,eAAvB,AAAK,IAAD,cAAc,QAAc,eAAJ,IAAI;AAClD;;;;AAE4B,cAA5B,6BAA2B,eAAJ,IAAI;AAC3B;;;;;IAIV;;AAGM,mBAAS,AAAS,wBAAS,AAAmB,iBAAd;AACpC,UAAI,MAAM;AACW,QAAnB,AAAO,MAAD;AACF,uBAAuB,4BAAM,AAAK,qCAAO,AAAO,MAAD;AAYjD,QARG,AACA,sCAHA,AACA,yCAFL,QAAQ,EACa,oBAEH,gBACL;cAAC;AACR,yBAAW,AAAK,IAAD,cAAc;AACjC,cAAI,QAAQ;AAC0B,YAApC,AAAY,wBAAQ,eAAM,QAAQ;;AAEhB,YAAlB,AAAY,wBAAI;;;;IAIxB;;AAGM,0BAAgB,AAAS,wBAAS,AAA0B,iBAArB;AAC3C,UAAI,aAAa;AACW,QAA1B,AAAc,aAAD;AACT,uBAAuB,4BAAM,AAAK,qCAAO,AAAc,aAAD;AAGxD,QAFO,AAAsB,yCAA/B,QAAQ,EAAiB,gBAAc;cAAC;AACd,UAAxB,yBAAmB,IAAI;;;IAG7B;;UAEmC;AAC7B,iBAAO;AAGT,MAFG,AAAqB,yCAA1B,IAAI,EAAiB,eAAa;YAAC;AACL,QAA5B,AAAK,IAAD,OAAK,kBAAY,KAAK;;AAEK,MAAjC,AAAe,2BAAI,AAAK,IAAD,QAAM;IAC/B;;;AAGM,qBAAW,AAAS,wBAAS;AACX,WAAtB,QAAQ;mBAAR,OAAU;AACN,qBAAuB,4BAAM,AAAK,4CAAO,QAAQ,gBAAR,OAAU;AAGrD,MAFO,AAAyB,yCAAlC,QAAQ,EAAiB,mBAAiB;YAAC;AACxB,QAAjB,kBAAY,IAAI;;IAEpB;kBAE4B;;;AACtB,iBAAgC,eAAzB,AAAK,IAAD,cAAc;AACzB,mBACA,AAAiB,+BAAC,AAAK,IAAD,cAAc,kBAAiB;AACrD,mBAAc,KAAN,kBAAO,IAAI,OAAI,6CAAiB,IAAI,GAA9B;AAEd,iBAAO,AAAS,wBAAS,AAAY,iBAAP,MAAM;AACtB,YAAlB,IAAI;oBAAJ,OAAM;AAEF,oBAAsB,4BAAM,AAAK,6CAAO,IAAI,iBAAJ,OAAM;AAC9C,sBAAoB,AAA0B,sCAAlC,OAAO,EAAc;AACjC,kBAAkB,AAA0B,sCAApC,SAAS,EAAc;AAIjC,MAFF,AAAiB,0CAAP,KAAK,YAAU;YAAC;AACD,QAAvB,gBAAU,KAAK,EAAE,KAAK;;AAExB,UAAI,AAAQ,kBAAG;AACQ,QAArB,AAAO,qBAAC,IAAI,EAAI,KAAK;AACY,QAAjC,AAAS,uBAAC,AAAY,iBAAP,MAAM,GAAK,OAAO;;AAGb,MAAtB,sBAAgB,KAAK;IACvB;gBAE0B,MAAuB;UAAvB;UAAuB;AAC3C,gBAAM;AAIR,MAFF,AAAiB,2CAAN,IAAI,YAAU;YAAC;AACK,QAA7B,iBAAW,KAAK,EAAE,KAAK,EAAE,GAAG;;AAG1B,qBAA+B,aAApB,8CAAc,IAAI,KAAI;AACrC,oBAAI,qBAAe,GAAG,MAAK,AAAS,QAAD,gBAAG,AAAM,AAAM,KAAP;AACrC,qBAAS,AAAS,QAAD,gBAAG,AAAM,AAAM,KAAP;AAC7B,iBAAS,QAAQ,GAAG,AAAM,KAAD,GAAG,MAAM,EAAE,QAAA,AAAK,KAAA;AACpB,UAAnB,AAAM,AAAM,KAAP,cAAW;;;AAIpB,oBAAI,qBAAe,GAAG;AACA,QAApB,AAAM,AAAM,KAAP,cAAW,GAAG;;AAEA,QAAnB,AAAM,AAAM,KAAP,cAAW;;AAGS,MAA3B,sBAAgB,KAAK,EAAE,GAAG;IAC5B;iBAE2B,MAAuB,OAAY;UAAnC;UAAuB;UAAY;AACxD,qBAAgC,aAArB,+CAAe,IAAI,KAAI;AACtC,UAAI,AAAS,QAAD,gBAAG,AAAI,GAAD;AACZ,qBAAS,AAAS,QAAD,gBAAG,AAAI,GAAD;AAC3B,iBAAS,QAAQ,GAAG,AAAM,KAAD,GAAG,MAAM,EAAE,QAAA,AAAK,KAAA;AAC1B,UAAb,AAAI,GAAD,OAAK;;;AAIZ,oBAAI,AAAK,AAAS,IAAV;AACN;;AAGE;AACA,iBAAO,AAAK,IAAD,cAAc;AAE7B,cAAQ,IAAI;;;AAIiD,UADzD,QAAQ,AAAc,4BACd,eAAM,kBAAiB,AAAkB,sCAAvB,IAAI,EAAc;AAC5C;;;;AAGwD,UAAxD,QAAQ,AAA0C,kBAAzB,AAAkB,sCAAvB,IAAI,EAAc,kBAAe;AACrD;;;;;AASiD,UAAjD,QAAQ,kBAAiB,AAAkB,sCAAvB,IAAI,EAAc;AACtC;;;;AAMoD,UAApD,QAAQ,kBAAiB,AAAqB,yCAA1B,IAAI,EAAiB;AACzC;;;;;AAII,kBAAI,AAAK,IAAD,cAAc;AACtB,0BAAiB,sCAAL,IAAI,EAAc;AAC9B,wBAAU,AAAU,SAAD;AACvB,cAAI,CAAC;AACC,wBAAQ,AAAW,yBAAK,eAAM,CAAC;AAEnC,gBAAY,aAAN,KAAK,KAAI,MAAc,aAAN,KAAK,KAAI,MAAS,AAAM,KAAD,KAAI;AAC5C,0BAAwC,AAAK,AAAO,aAAxC,eAAM,kBAAY,OAAO,MAAK,KAAK,OAAO;AACtD,yBAAO,sBAAS,MAAM,IAAI;AAGR,cAFtB,QAAQ,AACH,AACA,IAFO,KACH,qCAAuB,AAAM,KAAD;kBAGhC,KAAY,aAAN,KAAK,KAAI,MAAc,aAAN,KAAK,KAAI,MAC3B,aAAN,KAAK,KAAI,MAAc,aAAN,KAAK,KAAI;AAC1B,0BAAwC,AAAK,AAAO,aAAxC,eAAM,kBAAY,OAAO,MAAK,KAAK,OAAO;AACtD,yBAAO,sBAAS;AACkC,cAAtD,OAAO,AAAK,IAAD,KAAK,qCAAuB,AAAM,KAAD;AAEwC,cADpF,QACoF,SAA7E,+BAAW,AAAK,IAAD,UAAO,eAAG,+BAAW,AAAK,IAAD,YAAS,eAAG,+BAAW,AAAK,IAAD;;AAGnC,cAAvC,QAAY,eAAM,kBAAY,OAAO;;;AAGA,YAAvC,QAAY,eAAM,kBAAY,OAAO;;;;AAG7B,MAAd,AAAI,GAAD,OAAK,KAAK;AAEwB,MAArC,yBAAmB,KAAK,EAAE,GAAG,EAAE,KAAK;IACtC;;UAE8B;AACxB,mBAAS;AAMX,MAJF,AAAK,AAAS,IAAV,kBAAkB;YAAC;AACrB,YAAU,gBAAN,KAAK;AACoC,UAA3C,AAAO,MAAD,OAAO,sCAAkB,AAAM,KAAD;;;AAIxC,YAAO,AAAO,OAAD;IACf;;UAEiD;AAC7C,YAAM,uCAAN,KAAK,EAAc;IAAM;;UAEqB;AAC9C,YAAI,uCAAJ,GAAG,EAAc;IAAI;;UAEW;AAAQ,YAAI,gBAA2B,eAArB,AAAI,GAAD,cAAc;IAAM;yBACxC,KAAS;UAAT;UAAS;AAC1C,YAAyB,AAAE,gBAA3B,AAAI,GAAD,kBAAkB,cAAoB,cAAN,KAAK;IAAW;;UAElB;AAC/B,mBAAS,yCAA2C,eAAtB,AAAK,IAAD,cAAc;AACpD,yBAAO,AAAM,MAAA,QAAC;IAChB;6BAEyC,MAAU;UAAV;UAAU;AAC7C,iBAAiC,eAA1B,AAAK,IAAD,kBAAkB;AAC7B,mBAAS,yCAAqB,AAAK,IAAD;AACkB,MAAxD,AAAK,IAAD,SAAoD,SAAxC,qCAAiB,QAAQ,cAAI,AAAM,MAAA,QAAC;IACtD;6BAEyC,MAAU;UAAV;UAAU;AAC7C,iBAAiC,eAA1B,AAAK,IAAD,kBAAkB;AAC7B,mBAAS,yCAAqB,AAAK,IAAD;AACkB,MAAxD,AAAK,IAAD,SAAoD,SAAxC,iDAAiB,AAAM,MAAA,QAAC,iBAAM,QAAQ;IACxD;2BAE6C,OAAW;UAAX;UAAW;AAC1C;AACR,iBAAO,0CAAU,KAAK;AAEtB,yBAAe;AACnB,eAAS,aAAc,KAAI;AACmB,QAA5C,eAAyC,aAA1B,8CAAc,UAAU,KAAI;AAC3C,YAAI,AAAa,YAAD,iBAAI,QAAQ;AACV,UAAhB,MAAM,UAAU;AAChB;;;AAKJ,UAAI,AAAI,GAAD,YAAY,YAAY,KAAI,QAAQ;AACH,QAAtC,MAAM,2CAAW,KAAK,EAAE,GAAG,EAAE,QAAQ;;AAGvC,YAAO,IAAG;IACZ;uBAGe,MAAU,aAAiB,UAAkB;UAA7C;UAAU;UAAiB;AAC5B;AACR,kBAAQ,2CAAW,IAAI;AAEvB,yBAAe;AACnB,eAAS,cAAe,MAAK;AACmB,QAA9C,eAA2C,aAA5B,+CAAe,WAAW,KAAI;AAC7C,YAAI,AAAa,YAAD,iBAAI,WAAW;AACX,UAAlB,OAAO,WAAW;AAClB;;;AAIJ,UAAI,AAAK,IAAD,YAAY,YAAY,KAAI,WAAW;AACe,QAA5D,OAAO,4CAAY,IAAI,EAAE,IAAI,EAAE,WAAW,EAAE,QAAQ,EAAE,KAAK;;AAEE,QAA7D,OAAO,6CAAa,IAAI,EAAE,IAAI,EAAE,WAAW,EAAE,QAAQ,EAAE,KAAK;;AAG9D,YAAO,KAAI;IACb;;UAEiC;AAC3B,uBAA2B,8BAC7B,+BAAa,iBAAQ,MAAqB,CAAL,aAAT,QAAQ,IAAG;AAEzC,YAAO,4BAAW,iBAAQ,QAAQ,UAAU,EAAE;IAChD;sBAGe,OAAmB,SAAa;UAAhC;UAAgC;AACzC,gBAAM,2CAAW,QAAQ;AAC7B,UAAI,AAAQ,OAAD;AACc,QAAvB,AAAM,AAAS,KAAV,cAAc,GAAG;;AAElB,oBAAQ,AAAM,AAAS,KAAV,kBAAkB,OAAO;AACT,QAAjC,AAAM,AAAS,KAAV,iBAAiB,KAAK,EAAE,GAAG;;AAElC,YAAO,IAAG;IACZ;uBAEyC,KAAiB,UAClD,aAAiB,UAAkB;UADF;UACjC;UAAiB;AACnB,iBAAO,4CAAY,WAAW,EAAE,QAAQ,EAAE,KAAK;AACnD,UAAI,AAAS,QAAD;AACY,QAAtB,AAAI,AAAS,GAAV,cAAc,IAAI;;AAEjB,oBAAQ,AAAI,AAAS,GAAV,kBAAkB,QAAQ;AACT,QAAhC,AAAI,AAAS,GAAV,iBAAiB,KAAK,EAAE,IAAI;;AAEjC,YAAO,KAAI;IACb;wBAE0C,KAAiB,UACnD,aAAiB,UAAkB;;UADD;UAClC;UAAiB;AACnB,kBAAQ,AAAS,QAAD,WAAW,IAAI,AAAI,AAAS,GAAV,kBAAkB,QAAQ;AAC5D,iBAAO,4CAAY,WAAW,EAAE,QAAQ,EAAE,KAAK;AAG5B,WAFvB,AAAI,GAAD;MAAC;AACA,oBAAS,KAAK;AACd,kBAAO,KAAK,EAAE,IAAI;;;AACtB,YAAO,KAAI;IACb;uBAGkC,aAAiB,UAAkB;UAAnC;UAAiB;AAC7C,uBAA2B,8BAC7B,+BACI,iBAAQ,MAA2D,SAAlD,qCAA6B,aAAZ,WAAW,IAAG,eAAc,aAAT,QAAQ,IAAG,KACpE,+BAAa,iBAAQ,MAAM;AAEzB,qBAAW,AAAM,KAAD,WACF,iCACA,4BACV,2BAAW,iBAAQ,OAAO,kCAAI,yBAC5B,2BAAW,iBAAQ,MAAM,kCAAI,yBAAC,qBAAc,cAAN,KAAK;AAGrD,YAAO,4BAAW,iBAAQ,MAAM,UAAU,EAAE,QAAQ;IACtD;;;QAndoB;QAAe;;IANhB,uBAAyB;IAC5B,oBAAmB;IAC3B;IACA;IACkB,0BAAoC;AAE9D;AACoB,IAAlB,iBAAW,OAAO;AACF,IAAhB,gBAAU,MAAM;AAChB,QAAI,AAAQ,kBAAG;AAC0B,MAAvC,sBAAqC;AACL,MAAhC,gBAA8B;AACK,MAAnC,kBAAiC;;AAEG,IAAtC,gBAAoC;AACnB,IAAjB;AACc,IAAd;AACqB,IAArB;AACe,IAAf;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QFzG8B;AAC9B,UAAO,AAAK,KAAD,cAAY,QAAQ;EACjC;+EAEkD,SAAc;QAAd;QAAc;AAE1D;AAGA,mBAAW,AAAQ,OAAD,UAAU;AAChC,QAAI,QAAQ;AACW,MAArB,AAAS,QAAD;AACJ,oBAAU,AAAK,qCAAO,AAAS,QAAD;AAClC,UAAI,AAAQ,OAAD,IAAI,AAAuB;AACb,QAAvB;;;AAKE,eAAK,AAAQ,OAAD,UAAU;AACkB,MAA5C,SAAS,AAAG,EAAD,oBAA6B;;AAG1C,YAAQ,MAAM;;;AAEV,cAAO,wCAAW,OAAO,WAAU,MAAM;;;;AAEzC,cAAO,yCAAY,OAAO,WAAU,MAAM;;;;AAEc,QAAxD,WAAM,8BAAiB;;;EAE7B;;QE9B4B;AACtB,cAAM;AACN,cAAM;AACV,aAAS,QAAQ,AAAQ,AAAO,OAAR,UAAU,GAAG,AAAM,KAAD,IAAI,GAAG,QAAA,AAAK,KAAA;AAChD,cAAI,AAAO,AAAQ,OAAR,QAAC,KAAK,eAAa;AAC9B,cAAI;AACR,UAAI,AAAG,MAAG,CAAC,IAAI,AAAE,CAAD,IAAI;AACP,QAAX,IAAA,AAAE,CAAD,IAAI,AAAE,CAAD,GAAG;YACJ,KAAI,AAAG,MAAG,CAAC,IAAI,AAAE,CAAD,IAAI;AACd,QAAX,IAAA,AAAE,CAAD,IAAI,AAAE,CAAD,GAAG;;AAEG,MAAd,MAAA,AAAI,GAAD,GAAI,AAAE,CAAD,GAAG,GAAG;AACA,MAAd,MAAM,AAAI,GAAD,GAAG;;AAEd,UAAO,IAAG;EACZ;;QAG4B;AACtB,kBAAU;AAEd,WAAO,MAAM,KAAI;AAEX,sBAAY,AAAO,MAAD,UAAG;AAEzB,UAAI,AAAU,SAAD,KAAI;AACD,QAAd,YAAY;;AAIV,mBAAgB,yBAAa,AAAG,AAAY,KAAV,SAAS,GAAG;AAGxB,MAA1B,UAAiB,aAAP,MAAM,IAAG,OAAO;AAGC,MAA3B,SAAsB,EAAL,aAAP,MAAM,IAAG,KAAM;;AAE3B,UAAO,QAAO;EAChB;;QAEoB;AAClB,QAAI,AAAG,mBAAG,IAAI,KAAS,aAAL,IAAI,KAAI;AACxB,YAAO,KAAI;UACN,KAAI,AAAG,mBAAG,IAAI,KAAS,aAAL,IAAI,KAAI;AAC/B,YAAY,cAAL,IAAI,IAAG;;AAEhB,UAAO;EACT;;QAUsB;AACpB,QAAM,aAAF,CAAC,KAAI;AACP,YAAa,UAAH,CAAC;;AAEb,UAAO,AAAO,gBAAH,CAAC;EACd;;QAIiC;AAC3B,kBAAU,AAAO,AAAM,MAAP;AAChB,sBACA,AAAK,oBAAO,AAAQ,AAA0B,OAA3B,SAAO;UAAC;AAAS,YAAK,cAAL,IAAI,IAAG;2CAAoB;AAC/D,uBAAe,AAAO,MAAD,aAAW,AAAY,WAAD;AAC3C,YAAI,qCAAiB,WAAW;AAChC,YAAQ,eAAM,YAAY;AAC9B,UAAO,EAAC,CAAC,EAAE,CAAC;EACd;;MFrFM,kCAAc;;;MACd,mCAAe;;;MACK,2CAAuB;YAAmB,mDAClD,0DAEZ;;MAuCa,kCAAc;;;MCnCpB,+BAAW;;;MCTX,kCAAc;;;MAEd,wCAAoB;;;MAEpB,2CAAuB;;;MAEvB,+CAA2B","file":"spreadsheet_decoder.unsound.ddc.js"}');
  // Exports:
  return {
    spreadsheet_decoder: spreadsheet_decoder
  };
}));

//# sourceMappingURL=spreadsheet_decoder.unsound.ddc.js.map
