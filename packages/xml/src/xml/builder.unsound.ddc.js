define(['dart_sdk', 'packages/xml/src/xml/entities/default_mapping'], (function load__packages__xml__src__xml__builder(dart_sdk, packages__xml__src__xml__entities__default_mapping) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text$ = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__text;
  const cdata = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__cdata;
  const declaration$ = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__declaration;
  const processing = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__processing;
  const comment = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__comment;
  const attribute$ = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__attribute;
  const attribute_type = packages__xml__src__xml__entities__default_mapping.src__xml__utils__attribute_type;
  const document_fragment = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__document_fragment;
  const document = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__document;
  const namespace = packages__xml__src__xml__entities__default_mapping.src__xml__utils__namespace;
  const name$ = packages__xml__src__xml__entities__default_mapping.src__xml__utils__name;
  const node$ = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__node;
  const element = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__element;
  const data = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__data;
  const entity_mapping = packages__xml__src__xml__entities__default_mapping.src__xml__entities__entity_mapping;
  const descendants = packages__xml__src__xml__entities__default_mapping.src__xml__navigation__descendants;
  const name_matcher = packages__xml__src__xml__entities__default_mapping.src__xml__utils__name_matcher;
  const parent = packages__xml__src__xml__entities__default_mapping.src__xml__navigation__parent;
  const node_type = packages__xml__src__xml__entities__default_mapping.src__xml__utils__node_type;
  const visitor = packages__xml__src__xml__entities__default_mapping.src__xml__visitors__visitor;
  const doctype = packages__xml__src__xml__entities__default_mapping.src__xml__nodes__doctype;
  var builder = Object.create(dart.library);
  var nodes = Object.create(dart.library);
  var flatten = Object.create(dart.library);
  var find = Object.create(dart.library);
  var sibling = Object.create(dart.library);
  var preceding = Object.create(dart.library);
  var following = Object.create(dart.library);
  var normalizer = Object.create(dart.library);
  var transformer = Object.create(dart.library);
  var xml = Object.create(dart.library);
  var ancestors = Object.create(dart.library);
  var null_mapping = Object.create(dart.library);
  var $last = dartx.last;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $firstWhere = dartx.firstWhere;
  var $remove = dartx.remove;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $any = dartx.any;
  var $values = dartx.values;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $lastWhere = dartx.lastWhere;
  var $isEmpty = dartx.isEmpty;
  var $expand = dartx.expand;
  var $whereType = dartx.whereType;
  var $where = dartx.where;
  var $iterator = dartx.iterator;
  var $clear = dartx.clear;
  var $reversed = dartx.reversed;
  var $addAll = dartx.addAll;
  var $indexOf = dartx.indexOf;
  var $sublist = dartx.sublist;
  var $removeAt = dartx.removeAt;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ListQueueOfNodeBuilder: () => (T.ListQueueOfNodeBuilder = dart.constFn(collection.ListQueue$(builder.NodeBuilder)))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    XmlAttributeTobool: () => (T.XmlAttributeTobool = dart.constFn(dart.fnType(core.bool, [attribute$.XmlAttribute])))(),
    StringAndNamespaceDataTovoid: () => (T.StringAndNamespaceDataTovoid = dart.constFn(dart.fnType(dart.void, [core.String, builder.NamespaceData])))(),
    NodeBuilderTobool: () => (T.NodeBuilderTobool = dart.constFn(dart.fnType(core.bool, [builder.NodeBuilder])))(),
    NamespaceDataTobool: () => (T.NamespaceDataTobool = dart.constFn(dart.fnType(core.bool, [builder.NamespaceData])))(),
    NodeBuilderToXmlDocument: () => (T.NodeBuilderToXmlDocument = dart.constFn(dart.fnType(document.XmlDocument, [builder.NodeBuilder])))(),
    NodeBuilderToXmlDocumentFragment: () => (T.NodeBuilderToXmlDocumentFragment = dart.constFn(dart.fnType(document_fragment.XmlDocumentFragment, [builder.NodeBuilder])))(),
    VoidToNever: () => (T.VoidToNever = dart.constFn(dart.fnType(dart.Never, [])))(),
    XmlNodeToXmlNode: () => (T.XmlNodeToXmlNode = dart.constFn(dart.fnType(node$.XmlNode, [node$.XmlNode])))(),
    IdentityMapOfString$NamespaceData: () => (T.IdentityMapOfString$NamespaceData = dart.constFn(_js_helper.IdentityMap$(core.String, builder.NamespaceData)))(),
    JSArrayOfXmlAttribute: () => (T.JSArrayOfXmlAttribute = dart.constFn(_interceptors.JSArray$(attribute$.XmlAttribute)))(),
    JSArrayOfXmlNode: () => (T.JSArrayOfXmlNode = dart.constFn(_interceptors.JSArray$(node$.XmlNode)))(),
    ListOfXmlNode: () => (T.ListOfXmlNode = dart.constFn(core.List$(node$.XmlNode)))(),
    JSArrayOfListOfXmlNode: () => (T.JSArrayOfListOfXmlNode = dart.constFn(_interceptors.JSArray$(T.ListOfXmlNode())))(),
    IterableOfXmlElement: () => (T.IterableOfXmlElement = dart.constFn(core.Iterable$(element.XmlElement)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    String__ToIterableOfXmlElement: () => (T.String__ToIterableOfXmlElement = dart.constFn(dart.fnType(T.IterableOfXmlElement(), [core.String], {namespace: T.StringN()}, {})))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(T.StringL(), T.StringL(), []);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: normalizer.XmlNormalizer.prototype
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/xml/src/xml/builder.dart",
    "package:xml/src/xml/builder.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/nodes.dart",
    "org-dartlang-app:///packages/xml/src/xml/utils/flatten.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/find.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/sibling.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/preceding.dart",
    "package:xml/src/xml/navigation/preceding.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/following.dart",
    "package:xml/src/xml/navigation/following.dart",
    "org-dartlang-app:///packages/xml/src/xml/visitors/normalizer.dart",
    "package:xml/src/xml/visitors/normalizer.dart",
    "org-dartlang-app:///packages/xml/src/xml/visitors/transformer.dart",
    "package:xml/src/xml/visitors/transformer.dart",
    "org-dartlang-app:///packages/xml/xml.dart",
    "org-dartlang-app:///packages/xml/src/xml/navigation/ancestors.dart",
    "package:xml/src/xml/navigation/ancestors.dart",
    "org-dartlang-app:///packages/xml/src/xml/entities/null_mapping.dart",
    "package:xml/src/xml/entities/null_mapping.dart"
  ];
  var optimizeNamespaces$ = dart.privateName(builder, "XmlBuilder.optimizeNamespaces");
  var _stack = dart.privateName(builder, "_stack");
  var _reset = dart.privateName(builder, "_reset");
  var _insert = dart.privateName(builder, "_insert");
  var _buildName = dart.privateName(builder, "_buildName");
  var _build = dart.privateName(builder, "_build");
  var _lookup = dart.privateName(builder, "_lookup");
  builder.XmlBuilder = class XmlBuilder extends core.Object {
    get optimizeNamespaces() {
      return this[optimizeNamespaces$];
    }
    set optimizeNamespaces(value) {
      super.optimizeNamespaces = value;
    }
    text(text) {
      if (text == null) dart.nullFailed(I[0], 49, 20, "text");
      let children = this[_stack][$last].children;
      if (dart.test(children[$isNotEmpty]) && text$.XmlText.is(children[$last])) {
        let previous = children[$removeLast]();
        children[$add](new text$.XmlText.new(dart.str(previous.text) + dart.str(dart.toString(text))));
      } else {
        children[$add](new text$.XmlText.new(dart.toString(text)));
      }
    }
    cdata(text) {
      if (text == null) dart.nullFailed(I[0], 67, 21, "text");
      this[_stack][$last].children[$add](new cdata.XmlCDATA.new(dart.toString(text)));
    }
    declaration(opts) {
      let t0;
      let version = opts && 'version' in opts ? opts.version : "1.0";
      if (version == null) dart.nullFailed(I[0], 79, 15, "version");
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      let attributes = opts && 'attributes' in opts ? opts.attributes : C[0] || CT.C0;
      if (attributes == null) dart.nullFailed(I[0], 81, 27, "attributes");
      let declaration = (t0 = new declaration$.XmlDeclaration.new(), (() => {
        t0.version = version;
        t0.encoding = encoding;
        return t0;
      })());
      attributes[$forEach](dart.bind(declaration, 'setAttribute'));
      this[_stack][$last].children[$add](declaration);
    }
    processing(target, text) {
      if (target == null) dart.nullFailed(I[0], 99, 26, "target");
      if (text == null) dart.nullFailed(I[0], 99, 41, "text");
      this[_stack][$last].children[$add](new processing.XmlProcessing.new(target, dart.toString(text)));
    }
    comment(text) {
      if (text == null) dart.nullFailed(I[0], 110, 23, "text");
      this[_stack][$last].children[$add](new comment.XmlComment.new(dart.toString(text)));
    }
    element(name, opts) {
      if (name == null) dart.nullFailed(I[0], 143, 23, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let namespaces = opts && 'namespaces' in opts ? opts.namespaces : C[0] || CT.C0;
      if (namespaces == null) dart.nullFailed(I[0], 145, 27, "namespaces");
      let attributes = opts && 'attributes' in opts ? opts.attributes : C[0] || CT.C0;
      if (attributes == null) dart.nullFailed(I[0], 146, 27, "attributes");
      let isSelfClosing = opts && 'isSelfClosing' in opts ? opts.isSelfClosing : true;
      if (isSelfClosing == null) dart.nullFailed(I[0], 147, 12, "isSelfClosing");
      let nest = opts && 'nest' in opts ? opts.nest : null;
      let element = new builder.NodeBuilder.new();
      this[_stack].addLast(element);
      namespaces[$forEach](dart.bind(this, 'namespace'));
      attributes[$forEach](dart.bind(this, 'attribute'));
      if (nest != null) {
        this[_insert](nest);
      }
      element.name = this[_buildName](name, namespace);
      element.isSelfClosing = isSelfClosing;
      if (dart.test(this.optimizeNamespaces)) {
        element.namespaces[$forEach](dart.fn((uri, meta) => {
          if (uri == null) dart.nullFailed(I[0], 161, 35, "uri");
          if (meta == null) dart.nullFailed(I[0], 161, 40, "meta");
          if (!dart.test(meta.used)) {
            let name = meta.name;
            let attribute = element.attributes[$firstWhere](dart.fn(attribute => {
              if (attribute == null) dart.nullFailed(I[0], 165, 28, "attribute");
              return dart.equals(attribute.name, name);
            }, T.XmlAttributeTobool()));
            element.attributes[$remove](attribute);
          }
        }, T.StringAndNamespaceDataTovoid()));
      }
      this[_stack].removeLast();
      this[_stack][$last].children[$add](element.buildElement());
    }
    attribute(name, value, opts) {
      let t0;
      if (name == null) dart.nullFailed(I[0], 186, 25, "name");
      if (value == null) dart.nullFailed(I[0], 186, 38, "value");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let attributeType = opts && 'attributeType' in opts ? opts.attributeType : null;
      let attribute = new attribute$.XmlAttribute.new(this[_buildName](name, namespace), dart.toString(value), (t0 = attributeType, t0 == null ? attribute_type.XmlAttributeType.DOUBLE_QUOTE : t0));
      this[_stack][$last].attributes[$add](attribute);
    }
    xml(input, opts) {
      if (input == null) dart.nullFailed(I[0], 204, 19, "input");
      let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
      let fragment = document_fragment.XmlDocumentFragment.parse(input, {entityMapping: entityMapping});
      this[_stack][$last].children[$add](fragment);
    }
    namespace(uri, prefix = null) {
      if (uri == null) dart.nullFailed(I[0], 213, 25, "uri");
      if (prefix === "xmlns" || prefix === "xml") {
        dart.throw(new core.ArgumentError.new("The \"" + dart.str(prefix) + "\" prefix cannot be bound."));
      }
      if (dart.test(this.optimizeNamespaces) && dart.test(this[_stack][$any](dart.fn(builder => {
        if (builder == null) dart.nullFailed(I[0], 218, 21, "builder");
        return dart.test(builder.namespaces[$containsKey](uri)) && dart.nullCheck(builder.namespaces[$_get](uri)).prefix == prefix;
      }, T.NodeBuilderTobool())))) {
        return;
      }
      if (dart.test(this[_stack][$last].namespaces[$values][$any](dart.fn(meta => {
        if (meta == null) dart.nullFailed(I[0], 224, 44, "meta");
        return meta.prefix == prefix;
      }, T.NamespaceDataTobool())))) {
        dart.throw(new core.ArgumentError.new("The \"" + dart.str(prefix) + "\" prefix conflicts with existing binding."));
      }
      let meta = new builder.NamespaceData.new(prefix, false);
      this[_stack][$last].attributes[$add](new attribute$.XmlAttribute.new(meta.name, uri, attribute_type.XmlAttributeType.DOUBLE_QUOTE));
      this[_stack][$last].namespaces[$_set](uri, meta);
    }
    build() {
      return this.buildDocument();
    }
    buildDocument() {
      return this[_build](document.XmlDocument, dart.fn(builder => {
        if (builder == null) dart.nullFailed(I[0], 239, 42, "builder");
        return builder.buildDocument();
      }, T.NodeBuilderToXmlDocument()));
    }
    buildFragment() {
      return this[_build](document_fragment.XmlDocumentFragment, dart.fn(builder => {
        if (builder == null) dart.nullFailed(I[0], 243, 15, "builder");
        return builder.buildFragment();
      }, T.NodeBuilderToXmlDocumentFragment()));
    }
    [_build](T, builder) {
      if (builder == null) dart.nullFailed(I[0], 246, 63, "builder");
      if (this[_stack][$length] !== 1) {
        dart.throw(new core.StateError.new("Unable to build an incomplete DOM element."));
      }
      try {
        return builder(this[_stack][$last]);
      } finally {
        this[_reset]();
      }
    }
    [_reset]() {
      this[_stack].clear();
      let node = new builder.NodeBuilder.new();
      node.namespaces[$_set](namespace.xmlUri, builder.NamespaceData.xmlData);
      this[_stack].addLast(node);
    }
    [_buildName](name, uri) {
      if (name == null) dart.nullFailed(I[0], 266, 29, "name");
      if (uri != null && uri[$isNotEmpty]) {
        let meta = this[_lookup](uri);
        meta.used = true;
        return name$.XmlName.new(name, meta.prefix);
      } else {
        return name$.XmlName.fromString(name);
      }
    }
    [_lookup](uri) {
      if (uri == null) dart.nullFailed(I[0], 277, 32, "uri");
      let builder = this[_stack][$lastWhere](dart.fn(builder => {
        if (builder == null) dart.nullFailed(I[0], 279, 10, "builder");
        return builder.namespaces[$containsKey](uri);
      }, T.NodeBuilderTobool()), {orElse: dart.fn(() => dart.throw(new core.ArgumentError.new("Undefined namespace: " + dart.str(uri))), T.VoidToNever())});
      return dart.nullCheck(builder.namespaces[$_get](uri));
    }
    [_insert](value) {
      if (core.Function.is(value)) {
        dart.dcall(value, []);
      } else if (core.Iterable.is(value)) {
        value[$forEach](dart.bind(this, _insert));
      } else if (node$.XmlNode.is(value)) {
        if (text$.XmlText.is(value)) {
          this.text(value.text);
        } else if (attribute$.XmlAttribute.is(value)) {
          this[_stack][$last].attributes[$add](value.copy());
        } else if (element.XmlElement.is(value) || data.XmlData.is(value)) {
          this[_stack][$last].children[$add](value.copy());
        } else if (document_fragment.XmlDocumentFragment.is(value)) {
          value.children.map(node$.XmlNode, dart.fn(element => {
            if (element == null) dart.nullFailed(I[0], 302, 29, "element");
            return element.copy();
          }, T.XmlNodeToXmlNode()))[$forEach](dart.bind(this, _insert));
        } else {
          dart.throw(new core.ArgumentError.new("Unable to add element of type " + dart.str(value.nodeType)));
        }
      } else {
        this.text(dart.toString(value));
      }
    }
  };
  (builder.XmlBuilder.new = function(opts) {
    let optimizeNamespaces = opts && 'optimizeNamespaces' in opts ? opts.optimizeNamespaces : false;
    if (optimizeNamespaces == null) dart.nullFailed(I[0], 39, 20, "optimizeNamespaces");
    this[_stack] = new (T.ListQueueOfNodeBuilder()).new();
    this[optimizeNamespaces$] = optimizeNamespaces;
    this[_reset]();
  }).prototype = builder.XmlBuilder.prototype;
  dart.addTypeTests(builder.XmlBuilder);
  dart.addTypeCaches(builder.XmlBuilder);
  dart.setMethodSignature(builder.XmlBuilder, () => ({
    __proto__: dart.getMethods(builder.XmlBuilder.__proto__),
    text: dart.fnType(dart.void, [core.Object]),
    cdata: dart.fnType(dart.void, [core.Object]),
    declaration: dart.fnType(dart.void, [], {attributes: core.Map$(core.String, core.String), encoding: dart.nullable(core.String), version: core.String}, {}),
    processing: dart.fnType(dart.void, [core.String, core.Object]),
    comment: dart.fnType(dart.void, [core.Object]),
    element: dart.fnType(dart.void, [core.String], {attributes: core.Map$(core.String, core.String), isSelfClosing: core.bool, namespace: dart.nullable(core.String), namespaces: core.Map$(core.String, core.String), nest: dart.nullable(core.Object)}, {}),
    attribute: dart.fnType(dart.void, [core.String, core.Object], {attributeType: dart.nullable(attribute_type.XmlAttributeType), namespace: dart.nullable(core.String)}, {}),
    xml: dart.fnType(dart.void, [core.String], {entityMapping: dart.nullable(entity_mapping.XmlEntityMapping)}, {}),
    namespace: dart.fnType(dart.void, [core.String], [dart.nullable(core.String)]),
    build: dart.fnType(node$.XmlNode, []),
    buildDocument: dart.fnType(document.XmlDocument, []),
    buildFragment: dart.fnType(document_fragment.XmlDocumentFragment, []),
    [_build]: dart.gFnType(T => [T, [dart.fnType(T, [builder.NodeBuilder])]], T => [node$.XmlNode]),
    [_reset]: dart.fnType(dart.void, []),
    [_buildName]: dart.fnType(name$.XmlName, [core.String, dart.nullable(core.String)]),
    [_lookup]: dart.fnType(builder.NamespaceData, [core.String]),
    [_insert]: dart.fnType(dart.void, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builder.XmlBuilder, I[1]);
  dart.setFieldSignature(builder.XmlBuilder, () => ({
    __proto__: dart.getFields(builder.XmlBuilder.__proto__),
    optimizeNamespaces: dart.finalFieldType(core.bool),
    [_stack]: dart.finalFieldType(collection.Queue$(builder.NodeBuilder))
  }));
  var prefix$ = dart.privateName(builder, "NamespaceData.prefix");
  var used$ = dart.privateName(builder, "NamespaceData.used");
  builder.NamespaceData = class NamespaceData extends core.Object {
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      super.prefix = value;
    }
    get used() {
      return this[used$];
    }
    set used(value) {
      this[used$] = value;
    }
    get name() {
      return this.prefix == null || dart.nullCheck(this.prefix)[$isEmpty] ? name$.XmlName.new("xmlns") : name$.XmlName.new(dart.nullCheck(this.prefix), "xmlns");
    }
  };
  (builder.NamespaceData.new = function(prefix, used = false) {
    if (used == null) dart.nullFailed(I[0], 318, 36, "used");
    this[prefix$] = prefix;
    this[used$] = used;
    ;
  }).prototype = builder.NamespaceData.prototype;
  dart.addTypeTests(builder.NamespaceData);
  dart.addTypeCaches(builder.NamespaceData);
  dart.setGetterSignature(builder.NamespaceData, () => ({
    __proto__: dart.getGetters(builder.NamespaceData.__proto__),
    name: name$.XmlName
  }));
  dart.setLibraryUri(builder.NamespaceData, I[1]);
  dart.setFieldSignature(builder.NamespaceData, () => ({
    __proto__: dart.getFields(builder.NamespaceData.__proto__),
    prefix: dart.finalFieldType(dart.nullable(core.String)),
    used: dart.fieldType(core.bool)
  }));
  dart.defineLazy(builder.NamespaceData, {
    /*builder.NamespaceData.xmlData*/get xmlData() {
      return new builder.NamespaceData.new("xml", true);
    }
  }, false);
  var namespaces = dart.privateName(builder, "NodeBuilder.namespaces");
  var attributes = dart.privateName(builder, "NodeBuilder.attributes");
  var children = dart.privateName(builder, "NodeBuilder.children");
  var isSelfClosing = dart.privateName(builder, "NodeBuilder.isSelfClosing");
  var __NodeBuilder_name = dart.privateName(builder, "_#NodeBuilder#name");
  var __NodeBuilder_name_isSet = dart.privateName(builder, "_#NodeBuilder#name#isSet");
  builder.NodeBuilder = class NodeBuilder extends core.Object {
    get namespaces() {
      return this[namespaces];
    }
    set namespaces(value) {
      super.namespaces = value;
    }
    get attributes() {
      return this[attributes];
    }
    set attributes(value) {
      super.attributes = value;
    }
    get children() {
      return this[children];
    }
    set children(value) {
      super.children = value;
    }
    get isSelfClosing() {
      return this[isSelfClosing];
    }
    set isSelfClosing(value) {
      this[isSelfClosing] = value;
    }
    get name() {
      let t0;
      return dart.test(this[__NodeBuilder_name_isSet]) ? (t0 = this[__NodeBuilder_name], t0) : dart.throw(new _internal.LateError.fieldNI("name"));
    }
    set name(t0) {
      if (t0 == null) dart.nullFailed(I[0], 334, 22, "null");
      if (dart.test(this[__NodeBuilder_name_isSet]))
        dart.throw(new _internal.LateError.fieldAI("name"));
      else {
        this[__NodeBuilder_name_isSet] = true;
        this[__NodeBuilder_name] = t0;
      }
    }
    buildElement() {
      return new element.XmlElement.new(this.name, this.attributes, this.children, this.isSelfClosing);
    }
    buildDocument() {
      return new document.XmlDocument.new(this.children);
    }
    buildFragment() {
      return new document_fragment.XmlDocumentFragment.new(this.children);
    }
  };
  (builder.NodeBuilder.new = function() {
    this[namespaces] = new (T.IdentityMapOfString$NamespaceData()).new();
    this[attributes] = T.JSArrayOfXmlAttribute().of([]);
    this[children] = T.JSArrayOfXmlNode().of([]);
    this[isSelfClosing] = true;
    this[__NodeBuilder_name] = null;
    this[__NodeBuilder_name_isSet] = false;
    ;
  }).prototype = builder.NodeBuilder.prototype;
  dart.addTypeTests(builder.NodeBuilder);
  dart.addTypeCaches(builder.NodeBuilder);
  dart.setMethodSignature(builder.NodeBuilder, () => ({
    __proto__: dart.getMethods(builder.NodeBuilder.__proto__),
    buildElement: dart.fnType(element.XmlElement, []),
    buildDocument: dart.fnType(document.XmlDocument, []),
    buildFragment: dart.fnType(document_fragment.XmlDocumentFragment, [])
  }));
  dart.setGetterSignature(builder.NodeBuilder, () => ({
    __proto__: dart.getGetters(builder.NodeBuilder.__proto__),
    name: name$.XmlName
  }));
  dart.setSetterSignature(builder.NodeBuilder, () => ({
    __proto__: dart.getSetters(builder.NodeBuilder.__proto__),
    name: name$.XmlName
  }));
  dart.setLibraryUri(builder.NodeBuilder, I[1]);
  dart.setFieldSignature(builder.NodeBuilder, () => ({
    __proto__: dart.getFields(builder.NodeBuilder.__proto__),
    namespaces: dart.finalFieldType(core.Map$(core.String, builder.NamespaceData)),
    attributes: dart.finalFieldType(core.List$(attribute$.XmlAttribute)),
    children: dart.finalFieldType(core.List$(node$.XmlNode)),
    isSelfClosing: dart.fieldType(core.bool),
    [__NodeBuilder_name]: dart.fieldType(dart.nullable(name$.XmlName)),
    [__NodeBuilder_name_isSet]: dart.fieldType(core.bool)
  }));
  nodes['XmlNodesExtension|get#nodes'] = function XmlNodesExtension$124get$35nodes($this) {
    if ($this == null) dart.nullFailed(I[2], 7, 25, "#this");
    return flatten['XmlFlattenIterableExtension|flatten'](node$.XmlNode, T.JSArrayOfListOfXmlNode().of([$this.attributes, $this.children]));
  };
  flatten['XmlFlattenIterableExtension|flatten'] = function XmlFlattenIterableExtension$124flatten(T, $this) {
    if ($this == null) dart.nullFailed(I[3], 4, 15, "#this");
    return $this[$expand](T, dart.fn(values => {
      if (values == null) dart.nullFailed(I[3], 4, 36, "values");
      return values;
    }, dart.fnType(core.Iterable$(T), [core.Iterable$(T)])));
  };
  flatten['XmlFlattenIterableExtension|get#flatten'] = function XmlFlattenIterableExtension$124get$35flatten(T, $this) {
    if ($this == null) dart.nullFailed(I[3], 4, 15, "#this");
    return dart.fn(() => flatten['XmlFlattenIterableExtension|flatten'](T, $this), dart.fnType(core.Iterable$(T), []));
  };
  find['XmlFindExtension|findElements'] = function XmlFindExtension$124findElements($this, name, opts) {
    if ($this == null) dart.nullFailed(I[4], 9, 24, "#this");
    if (name == null) dart.nullFailed(I[4], 9, 44, "name");
    let namespace = opts && 'namespace' in opts ? opts.namespace : null;
    return find.filterElements($this.children, name, namespace);
  };
  find['XmlFindExtension|get#findElements'] = function XmlFindExtension$124get$35findElements($this) {
    if ($this == null) dart.nullFailed(I[4], 9, 24, "#this");
    return dart.fn((name, opts) => {
      if (name == null) dart.nullFailed(I[4], 9, 44, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return find['XmlFindExtension|findElements']($this, name, {namespace: namespace});
    }, T.String__ToIterableOfXmlElement());
  };
  find['XmlFindExtension|findAllElements'] = function XmlFindExtension$124findAllElements($this, name, opts) {
    if ($this == null) dart.nullFailed(I[4], 14, 24, "#this");
    if (name == null) dart.nullFailed(I[4], 14, 47, "name");
    let namespace = opts && 'namespace' in opts ? opts.namespace : null;
    return find.filterElements(descendants['XmlDescendantsExtension|get#descendants']($this), name, namespace);
  };
  find['XmlFindExtension|get#findAllElements'] = function XmlFindExtension$124get$35findAllElements($this) {
    if ($this == null) dart.nullFailed(I[4], 14, 24, "#this");
    return dart.fn((name, opts) => {
      if (name == null) dart.nullFailed(I[4], 14, 47, "name");
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return find['XmlFindExtension|findAllElements']($this, name, {namespace: namespace});
    }, T.String__ToIterableOfXmlElement());
  };
  find.filterElements = function filterElements(iterable, name, namespace) {
    if (iterable == null) dart.nullFailed(I[4], 19, 23, "iterable");
    if (name == null) dart.nullFailed(I[4], 19, 40, "name");
    let matcher = name_matcher.createNameMatcher(name, namespace);
    return iterable[$whereType](element.XmlElement)[$where](matcher);
  };
  sibling['XmlSiblingExtension|get#previousSibling'] = function XmlSiblingExtension$124get$35previousSibling($this) {
    if ($this == null) dart.nullFailed(I[5], 5, 16, "#this");
    if ($this.parent != null) {
      let siblings = dart.nullCheck($this.parent).children;
      for (let i = dart.notNull(siblings[$length]) - 1; i > 0; i = i - 1) {
        if (siblings[$_get](i) == $this) {
          return siblings[$_get](i - 1);
        }
      }
    }
    return null;
  };
  sibling['XmlSiblingExtension|get#nextSibling'] = function XmlSiblingExtension$124get$35nextSibling($this) {
    if ($this == null) dart.nullFailed(I[5], 18, 16, "#this");
    if ($this.parent != null) {
      let siblings = dart.nullCheck($this.parent).children;
      for (let i = 0; i < dart.notNull(siblings[$length]) - 1; i = i + 1) {
        if (siblings[$_get](i) == $this) {
          return siblings[$_get](i + 1);
        }
      }
    }
    return null;
  };
  var _start$ = dart.privateName(preceding, "_start");
  preceding.XmlPrecedingIterable = class XmlPrecedingIterable extends collection.IterableBase$(node$.XmlNode) {
    get iterator() {
      return new preceding.XmlPrecedingIterator.new(this[_start$]);
    }
  };
  (preceding.XmlPrecedingIterable.new = function(_start) {
    if (_start == null) dart.nullFailed(I[6], 16, 29, "_start");
    this[_start$] = _start;
    preceding.XmlPrecedingIterable.__proto__.new.call(this);
    ;
  }).prototype = preceding.XmlPrecedingIterable.prototype;
  dart.addTypeTests(preceding.XmlPrecedingIterable);
  dart.addTypeCaches(preceding.XmlPrecedingIterable);
  dart.setGetterSignature(preceding.XmlPrecedingIterable, () => ({
    __proto__: dart.getGetters(preceding.XmlPrecedingIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(preceding.XmlPrecedingIterable, I[7]);
  dart.setFieldSignature(preceding.XmlPrecedingIterable, () => ({
    __proto__: dart.getFields(preceding.XmlPrecedingIterable.__proto__),
    [_start$]: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(preceding.XmlPrecedingIterable, ['iterator']);
  var _todo = dart.privateName(preceding, "_todo");
  var _current = dart.privateName(preceding, "_current");
  preceding.XmlPrecedingIterator = class XmlPrecedingIterator extends core.Iterator$(node$.XmlNode) {
    get current() {
      return dart.nullCheck(this[_current]);
    }
    moveNext() {
      if (dart.test(this[_todo][$isEmpty])) {
        this[_current] = null;
        return false;
      } else {
        this[_current] = this[_todo][$removeLast]();
        if (this[_current] == this[_start$]) {
          this[_current] = null;
          this[_todo][$clear]();
          return false;
        }
        this[_todo][$addAll](dart.nullCheck(this[_current]).children[$reversed]);
        this[_todo][$addAll](dart.nullCheck(this[_current]).attributes[$reversed]);
        return true;
      }
    }
  };
  (preceding.XmlPrecedingIterator.new = function(_start) {
    if (_start == null) dart.nullFailed(I[6], 28, 29, "_start");
    this[_todo] = T.JSArrayOfXmlNode().of([]);
    this[_current] = null;
    this[_start$] = _start;
    this[_todo][$add](parent['XmlParentExtension|get#root'](this[_start$]));
  }).prototype = preceding.XmlPrecedingIterator.prototype;
  dart.addTypeTests(preceding.XmlPrecedingIterator);
  dart.addTypeCaches(preceding.XmlPrecedingIterator);
  dart.setMethodSignature(preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getMethods(preceding.XmlPrecedingIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getGetters(preceding.XmlPrecedingIterator.__proto__),
    current: node$.XmlNode
  }));
  dart.setLibraryUri(preceding.XmlPrecedingIterator, I[7]);
  dart.setFieldSignature(preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getFields(preceding.XmlPrecedingIterator.__proto__),
    [_start$]: dart.finalFieldType(node$.XmlNode),
    [_todo]: dart.finalFieldType(core.List$(node$.XmlNode)),
    [_current]: dart.fieldType(dart.nullable(node$.XmlNode))
  }));
  preceding['XmlPrecedingExtension|get#preceding'] = function XmlPrecedingExtension$124get$35preceding($this) {
    if ($this == null) dart.nullFailed(I[6], 9, 25, "#this");
    return new preceding.XmlPrecedingIterable.new($this);
  };
  var _start$0 = dart.privateName(following, "_start");
  following.XmlFollowingIterable = class XmlFollowingIterable extends collection.IterableBase$(node$.XmlNode) {
    get iterator() {
      return new following.XmlFollowingIterator.new(this[_start$0]);
    }
  };
  (following.XmlFollowingIterable.new = function(_start) {
    if (_start == null) dart.nullFailed(I[8], 16, 29, "_start");
    this[_start$0] = _start;
    following.XmlFollowingIterable.__proto__.new.call(this);
    ;
  }).prototype = following.XmlFollowingIterable.prototype;
  dart.addTypeTests(following.XmlFollowingIterable);
  dart.addTypeCaches(following.XmlFollowingIterable);
  dart.setGetterSignature(following.XmlFollowingIterable, () => ({
    __proto__: dart.getGetters(following.XmlFollowingIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(following.XmlFollowingIterable, I[9]);
  dart.setFieldSignature(following.XmlFollowingIterable, () => ({
    __proto__: dart.getFields(following.XmlFollowingIterable.__proto__),
    [_start$0]: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(following.XmlFollowingIterable, ['iterator']);
  var _todo$ = dart.privateName(following, "_todo");
  var _current$ = dart.privateName(following, "_current");
  following.XmlFollowingIterator = class XmlFollowingIterator extends core.Iterator$(node$.XmlNode) {
    get current() {
      return dart.nullCheck(this[_current$]);
    }
    moveNext() {
      if (dart.test(this[_todo$][$isEmpty])) {
        this[_current$] = null;
        return false;
      } else {
        this[_current$] = this[_todo$][$removeLast]();
        this[_todo$][$addAll](dart.nullCheck(this[_current$]).children[$reversed]);
        this[_todo$][$addAll](dart.nullCheck(this[_current$]).attributes[$reversed]);
        return true;
      }
    }
  };
  (following.XmlFollowingIterator.new = function(start) {
    if (start == null) dart.nullFailed(I[8], 27, 32, "start");
    this[_todo$] = T.JSArrayOfXmlNode().of([]);
    this[_current$] = null;
    let following = T.JSArrayOfXmlNode().of([]);
    for (let parent = start.parent, child = start; parent != null; parent = parent.parent, child = dart.nullCheck(child.parent)) {
      if (attribute$.XmlAttribute.is(child)) {
        let attributesIndex = parent.attributes[$indexOf](child);
        following[$addAll](parent.attributes[$sublist](dart.notNull(attributesIndex) + 1));
        following[$addAll](parent.children);
      } else {
        let childrenIndex = parent.children[$indexOf](child);
        following[$addAll](parent.children[$sublist](dart.notNull(childrenIndex) + 1));
      }
    }
    this[_todo$][$addAll](following[$reversed]);
  }).prototype = following.XmlFollowingIterator.prototype;
  dart.addTypeTests(following.XmlFollowingIterator);
  dart.addTypeCaches(following.XmlFollowingIterator);
  dart.setMethodSignature(following.XmlFollowingIterator, () => ({
    __proto__: dart.getMethods(following.XmlFollowingIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(following.XmlFollowingIterator, () => ({
    __proto__: dart.getGetters(following.XmlFollowingIterator.__proto__),
    current: node$.XmlNode
  }));
  dart.setLibraryUri(following.XmlFollowingIterator, I[9]);
  dart.setFieldSignature(following.XmlFollowingIterator, () => ({
    __proto__: dart.getFields(following.XmlFollowingIterator.__proto__),
    [_todo$]: dart.finalFieldType(core.List$(node$.XmlNode)),
    [_current$]: dart.fieldType(dart.nullable(node$.XmlNode))
  }));
  following['XmlFollowingExtension|get#following'] = function XmlFollowingExtension$124get$35following($this) {
    if ($this == null) dart.nullFailed(I[8], 9, 25, "#this");
    return new following.XmlFollowingIterable.new($this);
  };
  var _normalize = dart.privateName(normalizer, "_normalize");
  var _removeEmpty = dart.privateName(normalizer, "_removeEmpty");
  var _mergeAdjacent = dart.privateName(normalizer, "_mergeAdjacent");
  const Object_XmlVisitor$36 = class Object_XmlVisitor extends core.Object {};
  (Object_XmlVisitor$36.new = function() {
  }).prototype = Object_XmlVisitor$36.prototype;
  dart.applyMixin(Object_XmlVisitor$36, visitor.XmlVisitor);
  normalizer.XmlNormalizer = class XmlNormalizer extends Object_XmlVisitor$36 {
    visitDocument(node) {
      if (node == null) dart.nullFailed(I[10], 22, 34, "node");
      return this[_normalize](node.children);
    }
    visitDocumentFragment(node) {
      if (node == null) dart.nullFailed(I[10], 25, 50, "node");
      return this[_normalize](node.children);
    }
    visitElement(node) {
      if (node == null) dart.nullFailed(I[10], 29, 32, "node");
      return this[_normalize](node.children);
    }
    [_normalize](children) {
      if (children == null) dart.nullFailed(I[10], 31, 33, "children");
      this[_removeEmpty](children);
      this[_mergeAdjacent](children);
      children[$forEach](dart.gbind(dart.bind(this, 'visit'), dart.void));
    }
    [_removeEmpty](children) {
      if (children == null) dart.nullFailed(I[10], 37, 35, "children");
      for (let i = 0; i < dart.notNull(children[$length]);) {
        let node = children[$_get](i);
        if (node.nodeType == node_type.XmlNodeType.TEXT && node.text[$isEmpty]) {
          children[$removeAt](i);
        } else {
          i = i + 1;
        }
      }
    }
    [_mergeAdjacent](children) {
      let t12;
      if (children == null) dart.nullFailed(I[10], 48, 37, "children");
      let previousText = null;
      for (let i = 0; i < dart.notNull(children[$length]);) {
        let node = children[$_get](i);
        if (text$.XmlText.is(node)) {
          if (previousText == null) {
            previousText = node;
            i = i + 1;
          } else {
            t12 = previousText;
            t12.text = dart.notNull(t12.text) + dart.notNull(node.text);
            children[$removeAt](i);
          }
        } else {
          previousText = null;
          i = i + 1;
        }
      }
    }
  };
  (normalizer.XmlNormalizer.new = function() {
    ;
  }).prototype = normalizer.XmlNormalizer.prototype;
  dart.addTypeTests(normalizer.XmlNormalizer);
  dart.addTypeCaches(normalizer.XmlNormalizer);
  dart.setMethodSignature(normalizer.XmlNormalizer, () => ({
    __proto__: dart.getMethods(normalizer.XmlNormalizer.__proto__),
    visitDocument: dart.fnType(dart.void, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.void, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.void, [element.XmlElement]),
    [_normalize]: dart.fnType(dart.void, [core.List$(node$.XmlNode)]),
    [_removeEmpty]: dart.fnType(dart.void, [core.List$(node$.XmlNode)]),
    [_mergeAdjacent]: dart.fnType(dart.void, [core.List$(node$.XmlNode)])
  }));
  dart.setLibraryUri(normalizer.XmlNormalizer, I[11]);
  dart.defineLazy(normalizer.XmlNormalizer, {
    /*normalizer.XmlNormalizer.defaultInstance*/get defaultInstance() {
      return C[1] || CT.C1;
    }
  }, false);
  normalizer['XmlNormalizerExtension|normalize'] = function XmlNormalizerExtension$124normalize($this) {
    if ($this == null) dart.nullFailed(I[10], 12, 8, "#this");
    return normalizer.XmlNormalizer.defaultInstance.visit(dart.void, $this);
  };
  normalizer['XmlNormalizerExtension|get#normalize'] = function XmlNormalizerExtension$124get$35normalize($this) {
    if ($this == null) dart.nullFailed(I[10], 12, 8, "#this");
    return dart.fn(() => normalizer['XmlNormalizerExtension|normalize']($this), T.VoidTovoid());
  };
  const Object_XmlVisitor$36$ = class Object_XmlVisitor extends core.Object {};
  (Object_XmlVisitor$36$.new = function() {
  }).prototype = Object_XmlVisitor$36$.prototype;
  dart.applyMixin(Object_XmlVisitor$36$, visitor.XmlVisitor);
  transformer.XmlTransformer = class XmlTransformer extends Object_XmlVisitor$36$ {
    visitAttribute(node) {
      if (node == null) dart.nullFailed(I[12], 22, 44, "node");
      return new attribute$.XmlAttribute.new(this.visit(name$.XmlName, node.name), node.value, node.attributeType);
    }
    visitCDATA(node) {
      if (node == null) dart.nullFailed(I[12], 26, 32, "node");
      return new cdata.XmlCDATA.new(node.text);
    }
    visitComment(node) {
      if (node == null) dart.nullFailed(I[12], 29, 38, "node");
      return new comment.XmlComment.new(node.text);
    }
    visitDeclaration(node) {
      if (node == null) dart.nullFailed(I[12], 32, 50, "node");
      return new declaration$.XmlDeclaration.new(node.attributes.map(attribute$.XmlAttribute, dart.gbind(dart.bind(this, 'visit'), attribute$.XmlAttribute)));
    }
    visitDoctype(node) {
      if (node == null) dart.nullFailed(I[12], 36, 38, "node");
      return new doctype.XmlDoctype.new(node.text);
    }
    visitDocument(node) {
      if (node == null) dart.nullFailed(I[12], 39, 41, "node");
      return new document.XmlDocument.new(node.children.map(node$.XmlNode, dart.gbind(dart.bind(this, 'visit'), node$.XmlNode)));
    }
    visitDocumentFragment(node) {
      if (node == null) dart.nullFailed(I[12], 43, 65, "node");
      return new document_fragment.XmlDocumentFragment.new(node.children.map(node$.XmlNode, dart.gbind(dart.bind(this, 'visit'), node$.XmlNode)));
    }
    visitElement(node) {
      if (node == null) dart.nullFailed(I[12], 47, 38, "node");
      return new element.XmlElement.new(this.visit(name$.XmlName, node.name), node.attributes.map(attribute$.XmlAttribute, dart.gbind(dart.bind(this, 'visit'), attribute$.XmlAttribute)), node.children.map(node$.XmlNode, dart.gbind(dart.bind(this, 'visit'), node$.XmlNode)), node.isSelfClosing);
    }
    visitName(name) {
      if (name == null) dart.nullFailed(I[12], 51, 29, "name");
      return name$.XmlName.fromString(name.qualified);
    }
    visitProcessing(node) {
      if (node == null) dart.nullFailed(I[12], 54, 47, "node");
      return new processing.XmlProcessing.new(node.target, node.text);
    }
    visitText(node) {
      if (node == null) dart.nullFailed(I[12], 58, 29, "node");
      return new text$.XmlText.new(node.text);
    }
  };
  (transformer.XmlTransformer.new = function() {
    ;
  }).prototype = transformer.XmlTransformer.prototype;
  dart.addTypeTests(transformer.XmlTransformer);
  dart.addTypeCaches(transformer.XmlTransformer);
  dart.setMethodSignature(transformer.XmlTransformer, () => ({
    __proto__: dart.getMethods(transformer.XmlTransformer.__proto__),
    visitAttribute: dart.fnType(attribute$.XmlAttribute, [attribute$.XmlAttribute]),
    visitCDATA: dart.fnType(cdata.XmlCDATA, [cdata.XmlCDATA]),
    visitComment: dart.fnType(comment.XmlComment, [comment.XmlComment]),
    visitDeclaration: dart.fnType(declaration$.XmlDeclaration, [declaration$.XmlDeclaration]),
    visitDoctype: dart.fnType(doctype.XmlDoctype, [doctype.XmlDoctype]),
    visitDocument: dart.fnType(document.XmlDocument, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(document_fragment.XmlDocumentFragment, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(element.XmlElement, [element.XmlElement]),
    visitName: dart.fnType(name$.XmlName, [name$.XmlName]),
    visitProcessing: dart.fnType(processing.XmlProcessing, [processing.XmlProcessing]),
    visitText: dart.fnType(text$.XmlText, [text$.XmlText])
  }));
  dart.setLibraryUri(transformer.XmlTransformer, I[13]);
  dart.defineLazy(transformer.XmlTransformer, {
    /*transformer.XmlTransformer.defaultInstance*/get defaultInstance() {
      return new transformer.XmlTransformer.new();
    }
  }, false);
  xml.parse = function parse(input, opts) {
    if (input == null) dart.nullFailed(I[14], 71, 26, "input");
    let entityMapping = opts && 'entityMapping' in opts ? opts.entityMapping : null;
    return document.XmlDocument.parse(input, {entityMapping: entityMapping});
  };
  var _start$1 = dart.privateName(ancestors, "_start");
  ancestors.XmlAncestorsIterable = class XmlAncestorsIterable extends collection.IterableBase$(node$.XmlNode) {
    get iterator() {
      return new ancestors.XmlAncestorsIterator.new(this[_start$1]);
    }
  };
  (ancestors.XmlAncestorsIterable.new = function(_start) {
    if (_start == null) dart.nullFailed(I[15], 15, 29, "_start");
    this[_start$1] = _start;
    ancestors.XmlAncestorsIterable.__proto__.new.call(this);
    ;
  }).prototype = ancestors.XmlAncestorsIterable.prototype;
  dart.addTypeTests(ancestors.XmlAncestorsIterable);
  dart.addTypeCaches(ancestors.XmlAncestorsIterable);
  dart.setGetterSignature(ancestors.XmlAncestorsIterable, () => ({
    __proto__: dart.getGetters(ancestors.XmlAncestorsIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(ancestors.XmlAncestorsIterable, I[16]);
  dart.setFieldSignature(ancestors.XmlAncestorsIterable, () => ({
    __proto__: dart.getFields(ancestors.XmlAncestorsIterable.__proto__),
    [_start$1]: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(ancestors.XmlAncestorsIterable, ['iterator']);
  var _current$0 = dart.privateName(ancestors, "_current");
  ancestors.XmlAncestorsIterator = class XmlAncestorsIterator extends core.Iterator$(node$.XmlNode) {
    get current() {
      return dart.nullCheck(this[_current$0]);
    }
    moveNext() {
      if (this[_current$0] != null) {
        this[_current$0] = dart.nullCheck(this[_current$0]).parent;
      }
      return this[_current$0] != null;
    }
  };
  (ancestors.XmlAncestorsIterator.new = function(_current) {
    this[_current$0] = _current;
    ;
  }).prototype = ancestors.XmlAncestorsIterator.prototype;
  dart.addTypeTests(ancestors.XmlAncestorsIterator);
  dart.addTypeCaches(ancestors.XmlAncestorsIterator);
  dart.setMethodSignature(ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getMethods(ancestors.XmlAncestorsIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getGetters(ancestors.XmlAncestorsIterator.__proto__),
    current: node$.XmlNode
  }));
  dart.setLibraryUri(ancestors.XmlAncestorsIterator, I[16]);
  dart.setFieldSignature(ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getFields(ancestors.XmlAncestorsIterator.__proto__),
    [_current$0]: dart.fieldType(dart.nullable(node$.XmlNode))
  }));
  ancestors['XmlAncestorsExtension|get#ancestors'] = function XmlAncestorsExtension$124get$35ancestors($this) {
    if ($this == null) dart.nullFailed(I[15], 8, 25, "#this");
    return new ancestors.XmlAncestorsIterable.new($this);
  };
  null_mapping.XmlNullEntityMapping = class XmlNullEntityMapping extends entity_mapping.XmlEntityMapping {
    decode(input) {
      if (input == null) dart.nullFailed(I[17], 14, 24, "input");
      return input;
    }
    decodeEntity(input) {
      if (input == null) dart.nullFailed(I[17], 17, 31, "input");
      return null;
    }
    encodeText(input) {
      if (input == null) dart.nullFailed(I[17], 20, 28, "input");
      return input;
    }
    encodeAttributeValue(input, type) {
      if (input == null) dart.nullFailed(I[17], 23, 38, "input");
      if (type == null) dart.nullFailed(I[17], 23, 62, "type");
      return input;
    }
  };
  (null_mapping.XmlNullEntityMapping.new = function() {
    null_mapping.XmlNullEntityMapping.__proto__.new.call(this);
    ;
  }).prototype = null_mapping.XmlNullEntityMapping.prototype;
  dart.addTypeTests(null_mapping.XmlNullEntityMapping);
  dart.addTypeCaches(null_mapping.XmlNullEntityMapping);
  dart.setMethodSignature(null_mapping.XmlNullEntityMapping, () => ({
    __proto__: dart.getMethods(null_mapping.XmlNullEntityMapping.__proto__),
    decodeEntity: dart.fnType(dart.nullable(core.String), [core.String]),
    encodeText: dart.fnType(core.String, [core.String]),
    encodeAttributeValue: dart.fnType(core.String, [core.String, attribute_type.XmlAttributeType])
  }));
  dart.setLibraryUri(null_mapping.XmlNullEntityMapping, I[18]);
  dart.trackLibraries("packages/xml/src/xml/builder", {
    "package:xml/src/xml/builder.dart": builder,
    "package:xml/src/xml/navigation/nodes.dart": nodes,
    "package:xml/src/xml/utils/flatten.dart": flatten,
    "package:xml/src/xml/navigation/find.dart": find,
    "package:xml/src/xml/navigation/sibling.dart": sibling,
    "package:xml/src/xml/navigation/preceding.dart": preceding,
    "package:xml/src/xml/navigation/following.dart": following,
    "package:xml/src/xml/visitors/normalizer.dart": normalizer,
    "package:xml/src/xml/visitors/transformer.dart": transformer,
    "package:xml/xml.dart": xml,
    "package:xml/src/xml/navigation/ancestors.dart": ancestors,
    "package:xml/src/xml/entities/null_mapping.dart": null_mapping
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["builder.dart","navigation/nodes.dart","utils/flatten.dart","navigation/find.dart","navigation/sibling.dart","navigation/preceding.dart","navigation/following.dart","visitors/normalizer.dart","visitors/transformer.dart","../../xml.dart","navigation/ancestors.dart","entities/null_mapping.dart"],"names":[],"mappings":"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","file":"builder.unsound.ddc.js"}');
  // Exports:
  return {
    src__xml__builder: builder,
    src__xml__navigation__nodes: nodes,
    src__xml__utils__flatten: flatten,
    src__xml__navigation__find: find,
    src__xml__navigation__sibling: sibling,
    src__xml__navigation__preceding: preceding,
    src__xml__navigation__following: following,
    src__xml__visitors__normalizer: normalizer,
    src__xml__visitors__transformer: transformer,
    xml: xml,
    src__xml__navigation__ancestors: ancestors,
    src__xml__entities__null_mapping: null_mapping
  };
}));

//# sourceMappingURL=builder.unsound.ddc.js.map
