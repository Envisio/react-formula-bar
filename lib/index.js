"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = require("lodash");
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _excluded = ["items"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var isElementVisible = function isElementVisible(el, container) {
  if (!el || !container) {
    return false;
  }
  var top = el.offsetTop;
  var bottom = el.offsetTop + el.clientHeight;
  return top >= container.scrollTop && bottom <= container.scrollTop + container.clientHeight;
};
var FormulaBar = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormulaBar(_props) {
    var _this;
    _classCallCheck(this, FormulaBar);
    _this = _callSuper(this, FormulaBar, [_props]);
    _defineProperty(_this, "generateDoc", function (value) {
      var suggestions = _this.props.suggestions;
      var result;
      (0, _lodash.each)(suggestions, function (_ref) {
        var items = _ref.items;
        var foundItem = (0, _lodash.find)(items, function (_ref2) {
          var title = _ref2.title;
          return (0, _lodash.toLower)(title) === (0, _lodash.toLower)(value);
        });
        if (foundItem) {
          result = (0, _lodash.pickBy)(_objectSpread({
            description: foundItem.description
          }, foundItem.docs));
          return false;
        }
      });
      if (!(0, _lodash.isEmpty)(result)) {
        _this.setState({
          display: 'doc'
        });
      } else {
        _this.setState({
          display: 'none'
        });
      }
      _this.setState({
        highlight: [0, 0]
      });
      _this.setState({
        currentDoc: result
      });
    });
    _defineProperty(_this, "generateSuggestions", function (event) {
      var suggestions = _this.props.suggestions;
      var value = event.target.value;
      var valueTail = (0, _lodash.first)(value.match(/[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g));
      var valueLast;
      var insideFunc = false;
      if (valueTail.match(/[A-Za-z]+\d*$/g)) {
        valueLast = (0, _lodash.last)(valueTail.match(/[A-Za-z\d]+$/g));
      } else if (valueTail.match(/[A-Za-z]+\d*\([^\)]*/g)) {
        // in the context of a function
        valueLast = (0, _lodash.replace)((0, _lodash.last)(valueTail.match(/[A-Za-z]+\d*\(/g)), '(', '');
        insideFunc = true;
      } else {
        valueLast = (0, _lodash.last)(valueTail);
      }
      if (insideFunc) {
        _this.generateDoc(valueLast);
        return false;
      }
      var maxMatch = 0;
      var matchedGroups = (0, _lodash.reject)((0, _lodash.map)(suggestions, function (_ref3) {
        var items = _ref3.items,
          props = _objectWithoutProperties(_ref3, _excluded);
        return _objectSpread({
          items: (0, _lodash.compact)((0, _lodash.map)(items, function (_ref4) {
            var title = _ref4.title,
              description = _ref4.description,
              autocomplete = _ref4.autocomplete,
              docs = _ref4.docs;
            var indexEnd = (0, _lodash.toLower)(title).indexOf((0, _lodash.toLower)(valueLast));
            var matchValue = title.substring(0, indexEnd + (0, _lodash.size)(valueLast));
            var matchSize = (0, _lodash.size)(matchValue);
            if ((0, _lodash.gt)(matchSize, 0) && (0, _lodash.endsWith)((0, _lodash.toLower)(valueTail), (0, _lodash.toLower)(matchValue)) && matchSize < (0, _lodash.size)(title)) {
              maxMatch = matchSize > maxMatch ? matchSize : maxMatch;
              if (matchSize >= maxMatch) {
                return {
                  title: title,
                  matchSize: matchSize,
                  description: description,
                  autocomplete: autocomplete,
                  docs: (0, _lodash.pickBy)(_objectSpread({
                    description: description
                  }, docs))
                };
              }
              return undefined;
            }
            return undefined;
          }))
        }, props);
      }), function (_ref5) {
        var items = _ref5.items;
        return (0, _lodash.isEmpty)((0, _lodash.filter)(items, function (_ref6) {
          var matchSize = _ref6.matchSize;
          return (0, _lodash.eq)(matchSize, maxMatch);
        }));
      });
      if ((0, _lodash.isEmpty)(matchedGroups)) {
        _this.setState({
          display: 'none'
        });
        _this.setState({
          highlight: [0, 0]
        });
      } else {
        _this.setState({
          display: 'suggest'
        });
      }
      _this.setState({
        results: matchedGroups
      });
    });
    _defineProperty(_this, "onChange", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;
      _this.generateSuggestions(event);
      _this.setState({
        value: value
      }, function () {
        return onChange(value);
      });
    });
    _defineProperty(_this, "onKeyDown", function (event) {
      var key = event.key;
      var _this$state = _this.state,
        results = _this$state.results,
        _this$state$highlight = _slicedToArray(_this$state.highlight, 2),
        currentGroupIndex = _this$state$highlight[0],
        currentItemIndex = _this$state$highlight[1],
        display = _this$state.display,
        value = _this$state.value;
      var newGroupIndex = currentGroupIndex;
      var newItemIndex = currentItemIndex;
      switch (key) {
        case 'ArrowDown':
          if ((0, _lodash.eq)(display, 'suggest') && !(0, _lodash.isEmpty)(results)) {
            event.preventDefault();
            if ((0, _lodash.has)(results, [currentGroupIndex, 'items', currentItemIndex + 1])) {
              newItemIndex = currentItemIndex + 1;
            } else if ((0, _lodash.has)(results, [currentGroupIndex + 1])) {
              newGroupIndex = currentGroupIndex + 1;
              newItemIndex = 0;
            }
            _this.setState({
              highlight: [newGroupIndex, newItemIndex]
            });
            var _get = (0, _lodash.get)(results, newGroupIndex),
              type = _get.type;
            var _get2 = (0, _lodash.get)(results, [newGroupIndex, 'items', newItemIndex]),
              title = _get2.title;
            var highlightedItem = document.querySelector("[data-id=\"".concat((0, _lodash.join)([type, title], '-'), "\"]"));
            if (!isElementVisible(highlightedItem, _this.dropdownContainerRef.current)) {
              highlightedItem.scrollIntoView(false);
            }
          }
          break;
        case 'ArrowUp':
          if ((0, _lodash.eq)(display, 'suggest') && !(0, _lodash.isEmpty)(results)) {
            event.preventDefault();
            if ((0, _lodash.gt)(currentItemIndex, 0)) {
              newItemIndex = currentItemIndex - 1;
            } else if ((0, _lodash.gt)(currentGroupIndex, 0)) {
              newGroupIndex = currentGroupIndex - 1;
              newItemIndex = (0, _lodash.size)((0, _lodash.get)(results, [newGroupIndex, 'items'])) - 1;
            }
            _this.setState({
              highlight: [newGroupIndex, newItemIndex]
            });
            var _get3 = (0, _lodash.get)(results, newGroupIndex),
              _type = _get3.type;
            var _get4 = (0, _lodash.get)(results, [newGroupIndex, 'items', newItemIndex]),
              _title = _get4.title;
            var _highlightedItem = document.querySelector("[data-id=\"".concat((0, _lodash.join)([_type, _title], '-'), "\"]"));
            if (!isElementVisible(_highlightedItem, _this.dropdownContainerRef.current)) {
              _highlightedItem.scrollIntoView();
            }
          }
          break;
        case 'Enter':
          event.preventDefault();
          if ((0, _lodash.eq)(display, 'suggest')) {
            _this.onAutocomplete(currentGroupIndex, currentItemIndex);
          } else {
            _this.setState({
              value: value
            });
            _this.setState({
              display: 'none'
            });
          }
          break;
        case 'Tab':
          if ((0, _lodash.eq)(display, 'suggest')) {
            event.preventDefault();
            _this.onAutocomplete(currentGroupIndex, currentItemIndex);
          } else {
            _this.setState({
              value: value
            });
            _this.setState({
              display: 'none'
            });
          }
          break;
        case 'Backspace':
          _this.setState({
            display: 'none'
          });
          break;
        case 'Escape':
          _this.setState({
            display: 'none'
          });
          break;
        default:
          break;
      }
    });
    _defineProperty(_this, "onAutocomplete", function (groupIndex, itemIndex) {
      var _this$state2 = _this.state,
        results = _this$state2.results,
        value = _this$state2.value;
      var valueTail = (0, _lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
      var valueLast = (0, _lodash.last)(valueTail);
      // use autocomplete value or default to title
      var currentTitle = (0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'autocomplete']) || (0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'title']);
      var indexEnd = (0, _lodash.indexOf)((0, _lodash.split)((0, _lodash.toLower)(currentTitle), ''), (0, _lodash.toLower)(valueLast));
      var matchValue = currentTitle.substring(0, indexEnd + 1);
      var matchSize = (0, _lodash.size)(matchValue);
      var valueSize = (0, _lodash.size)(value);
      var startIndex = valueSize - matchSize;
      _this.setState({
        value: "".concat(value.substring(0, startIndex)).concat(currentTitle)
      });

      // show docs if available
      var currentDoc = (0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'docs']);
      if (!(0, _lodash.isEmpty)(currentDoc)) {
        _this.setState({
          display: 'doc'
        });
        _this.setState({
          currentDoc: currentDoc
        });
      } else {
        _this.setState({
          display: 'none'
        });
      }
    });
    _defineProperty(_this, "onClickSuggestion", function (groupIndex, itemIndex, event) {
      event.preventDefault();
      _this.onAutocomplete(groupIndex, itemIndex);
    });
    _defineProperty(_this, "onMouseOver", function (groupIndex, itemIndex) {
      _this.setState({
        highlight: [groupIndex, itemIndex]
      });
    });
    var _this$props = _this.props,
      _value = _this$props.value,
      _suggestions = _this$props.suggestions;
    _this.containerRef = /*#__PURE__*/(0, _react.createRef)();
    _this.dropdownContainerRef = /*#__PURE__*/(0, _react.createRef)();
    _this.state = {
      value: _value,
      display: 'none',
      results: _suggestions,
      currentDoc: null,
      highlight: [0, 0]
    };
    return _this;
  }
  _inherits(FormulaBar, _Component);
  return _createClass(FormulaBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        suggestions = _this$props2.suggestions,
        classes = _this$props2.classes,
        styles = _this$props2.styles,
        type = _this$props2.type,
        disabled = _this$props2.disabled,
        readonly = _this$props2.readonly,
        onFocus = _this$props2.onFocus,
        _onBlur = _this$props2.onBlur,
        placeholder = _this$props2.placeholder,
        dropdownPortalTarget = _this$props2.dropdownPortalTarget;
      var _styles$container = styles.container,
        containerStyle = _styles$container === void 0 ? function (styles) {
          return styles;
        } : _styles$container,
        _styles$value = styles.value,
        valueStyle = _styles$value === void 0 ? function (styles) {
          return styles;
        } : _styles$value,
        _styles$input = styles.input,
        inputStyle = _styles$input === void 0 ? function (styles) {
          return styles;
        } : _styles$input,
        _styles$dropdownConta = styles.dropdownContainer,
        dropdownContainerStyle = _styles$dropdownConta === void 0 ? function (styles) {
          return styles;
        } : _styles$dropdownConta,
        _styles$suggestConten = styles.suggestContent,
        suggestContentStyle = _styles$suggestConten === void 0 ? function (styles) {
          return styles;
        } : _styles$suggestConten,
        _styles$listItem = styles.listItem,
        listItemStyle = _styles$listItem === void 0 ? function (styles) {
          return styles;
        } : _styles$listItem,
        _styles$listItemLabel = styles.listItemLabel,
        listItemLabelStyle = _styles$listItemLabel === void 0 ? function (styles) {
          return styles;
        } : _styles$listItemLabel,
        _styles$listItemDescr = styles.listItemDescription,
        listItemDescriptionStyle = _styles$listItemDescr === void 0 ? function (styles) {
          return styles;
        } : _styles$listItemDescr,
        _styles$listGroup = styles.listGroup,
        listGroupStyle = _styles$listGroup === void 0 ? function (styles) {
          return styles;
        } : _styles$listGroup,
        _styles$docContent = styles.docContent,
        docContentStyle = _styles$docContent === void 0 ? function (styles) {
          return styles;
        } : _styles$docContent,
        _styles$docSignature = styles.docSignature,
        docSignatureStyle = _styles$docSignature === void 0 ? function (styles) {
          return styles;
        } : _styles$docSignature,
        _styles$docExample = styles.docExample,
        docExampleStyle = _styles$docExample === void 0 ? function (styles) {
          return styles;
        } : _styles$docExample,
        _styles$docDescriptio = styles.docDescription,
        docDescriptionStyle = _styles$docDescriptio === void 0 ? function (styles) {
          return styles;
        } : _styles$docDescriptio,
        _styles$docArg = styles.docArg,
        docArgStyle = _styles$docArg === void 0 ? function (styles) {
          return styles;
        } : _styles$docArg,
        _styles$docArgName = styles.docArgName,
        docArgNameStyle = _styles$docArgName === void 0 ? function (styles) {
          return styles;
        } : _styles$docArgName,
        _styles$docArgDescrip = styles.docArgDescription,
        docArgDescriptionStyle = _styles$docArgDescrip === void 0 ? function (styles) {
          return styles;
        } : _styles$docArgDescrip;
      var _this$state3 = this.state,
        value = _this$state3.value,
        highlight = _this$state3.highlight,
        results = _this$state3.results,
        display = _this$state3.display,
        currentDoc = _this$state3.currentDoc;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.containerRef,
        className: classes.container,
        style: containerStyle({
          width: '100%',
          height: '34px',
          border: 'solid 1px gray',
          position: 'relative',
          fontSize: '14px',
          fontFamily: 'Monaco, Courier, "Ubuntu Mono", monospace',
          borderRadius: '5px',
          backgroundColor: 'white'
        })
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: classes.input,
        onChange: this.onChange,
        value: value,
        onKeyDown: this.onKeyDown,
        style: inputStyle({
          borderStyle: 'none',
          outline: 'none',
          width: '100%',
          // padding: '0 6px',
          lineHeight: '34px',
          height: '34px',
          fontSize: '14px',
          fontFamily: 'Monaco, Courier',
          position: 'absolute',
          top: 0,
          // color: 'transparent',
          caretColor: 'black',
          backgroundColor: 'transparent',
          overflow: 'hidden'
        }),
        readOnly: readonly,
        disabled: disabled,
        placeholder: placeholder,
        type: type,
        onFocus: onFocus,
        onBlur: function onBlur() {
          _this2.setState({
            display: 'none'
          });
          _onBlur(value);
        }
      }), /*#__PURE__*/_react["default"].createElement(_dropdown["default"], {
        ref: this.dropdownContainerRef,
        container: dropdownPortalTarget,
        inputContainer: this.containerRef.current,
        className: classes.dropdownContainer,
        styles: dropdownContainerStyle,
        isOpen: display !== 'none'
      }, function () {
        switch (display) {
          case 'doc':
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docContent,
              style: docContentStyle({
                padding: '6px'
              })
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docSignature,
              style: docSignatureStyle({
                fontWeight: 'bold',
                lineHeight: '20px',
                color: 'gray'
              })
            }, currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.signature), /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docDescription,
              style: docDescriptionStyle({
                lineHeight: '15px',
                color: 'gray'
              })
            }, currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.description), /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docExample,
              style: docExampleStyle({
                color: 'gray',
                lineHeight: '20px'
              })
            }, currentDoc !== null && currentDoc !== void 0 && currentDoc.example ? "Example: ".concat(currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.example) : ''), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _lodash.map)(currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.args, function (argDesc, argName) {
              return /*#__PURE__*/_react["default"].createElement("div", {
                key: (0, _lodash.join)(['doc', 'arg', argName], '-'),
                className: classes.docArg,
                style: docArgStyle({
                  color: 'gray'
                })
              }, /*#__PURE__*/_react["default"].createElement("span", {
                className: classes.docArgName,
                style: docArgNameStyle({
                  fontWeight: 'bold'
                })
              }, "".concat(argName, ":")), /*#__PURE__*/_react["default"].createElement("span", {
                className: classes.docDescription,
                style: docArgDescriptionStyle({
                  paddingLeft: '5px'
                })
              }, argDesc));
            })));
          case 'suggest':
            return /*#__PURE__*/_react["default"].createElement("dl", {
              className: classes.suggestContent,
              style: suggestContentStyle({
                margin: 0
              })
            }, (0, _lodash.map)(results, function (_ref7, groupIndex) {
              var type = _ref7.type,
                items = _ref7.items;
              return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
                key: (0, _lodash.join)(['suggestion', 'group', type], '-')
              }, /*#__PURE__*/_react["default"].createElement("dt", {
                className: classes.listGroup,
                style: listGroupStyle({
                  fontWeight: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) ? 'bold' : undefined,
                  padding: '0 6px',
                  color: 'gray'
                })
              }, type), (0, _lodash.map)(items, function (_ref8, itemIndex) {
                var title = _ref8.title,
                  description = _ref8.description;
                return /*#__PURE__*/_react["default"].createElement("dd", {
                  "data-id": (0, _lodash.join)([type, title], '-'),
                  className: classes.listItem,
                  key: (0, _lodash.join)(['suggestion', 'group', type, 'item', title], '-'),
                  style: listItemStyle({
                    marginLeft: 0,
                    padding: '5px 6px',
                    backgroundColor: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) && (0, _lodash.eq)(itemIndex, (0, _lodash.last)(highlight)) ? 'gainsboro' : 'white',
                    cursor: 'pointer'
                  }, {
                    groupIndex: groupIndex,
                    itemIndex: itemIndex,
                    highlight: highlight,
                    suggestions: suggestions
                  }),
                  onMouseDown: (0, _lodash.partial)(_this2.onClickSuggestion, groupIndex, itemIndex),
                  onMouseOver: (0, _lodash.partial)(_this2.onMouseOver, groupIndex, itemIndex),
                  onFocus: (0, _lodash.partial)(_this2.onMouseOver, groupIndex, itemIndex)
                }, /*#__PURE__*/_react["default"].createElement("label", {
                  className: classes.listItemLabel,
                  style: listItemLabelStyle({
                    fontWeight: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) && (0, _lodash.eq)(itemIndex, (0, _lodash.last)(highlight)) ? 'bold' : undefined
                  }, {
                    groupIndex: groupIndex,
                    itemIndex: itemIndex,
                    highlight: highlight,
                    suggestions: suggestions
                  })
                }, title), /*#__PURE__*/_react["default"].createElement("i", {
                  className: classes.listItemDescription,
                  style: listItemDescriptionStyle({
                    paddingLeft: '14px',
                    margin: 0,
                    color: 'gray'
                  })
                }, description));
              }));
            }));
          default:
            return '';
        }
      }()));
    }
  }]);
}(_react.Component);
_defineProperty(FormulaBar, "propTypes", {
  value: _propTypes["default"].string,
  suggestions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string.isRequired,
    color: _propTypes["default"].string,
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string.isRequired,
      description: _propTypes["default"].string,
      autocomplete: _propTypes["default"].string,
      docs: _propTypes["default"].shape({
        signature: _propTypes["default"].string.isRequired,
        example: _propTypes["default"].string,
        args: _propTypes["default"].object
      })
    }))
  })),
  onChange: _propTypes["default"].func,
  classes: _propTypes["default"].shape({
    container: _propTypes["default"].string,
    value: _propTypes["default"].string,
    input: _propTypes["default"].string,
    listItem: _propTypes["default"].string,
    listItemLabel: _propTypes["default"].string,
    listItemDescription: _propTypes["default"].string,
    listGroup: _propTypes["default"].string
  }),
  styles: _propTypes["default"].shape({
    container: _propTypes["default"].func,
    value: _propTypes["default"].func,
    input: _propTypes["default"].func,
    listItem: _propTypes["default"].func,
    listItemLabel: _propTypes["default"].func,
    listItemDescription: _propTypes["default"].func,
    listGroup: _propTypes["default"].func
  }),
  disabled: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  readonly: _propTypes["default"].bool,
  type: _propTypes["default"].string,
  dropdownPortalTarget: _propTypes["default"].instanceOf(Element)
});
_defineProperty(FormulaBar, "defaultProps", {
  value: '',
  suggestions: [],
  classes: {},
  styles: {
    container: function container(styles) {
      return styles;
    },
    value: function value(styles) {
      return styles;
    },
    input: function input(styles) {
      return styles;
    },
    dropdownContainer: function dropdownContainer(styles) {
      return styles;
    },
    suggestContent: function suggestContent(styles) {
      return styles;
    },
    listItem: function listItem(styles) {
      return styles;
    },
    listItemLabel: function listItemLabel(styles) {
      return styles;
    },
    listItemDescription: function listItemDescription(styles) {
      return styles;
    },
    listGroup: function listGroup(styles) {
      return styles;
    },
    docContainer: function docContainer(styles) {
      return styles;
    },
    docContent: function docContent(styles) {
      return styles;
    },
    docSignature: function docSignature(styles) {
      return styles;
    },
    docExample: function docExample(styles) {
      return styles;
    },
    docDescription: function docDescription(styles) {
      return styles;
    },
    docArg: function docArg(styles) {
      return styles;
    },
    docArgName: function docArgName(styles) {
      return styles;
    },
    docArgDescription: function docArgDescription(styles) {
      return styles;
    }
  },
  onChange: function onChange() {},
  disabled: false,
  placeholder: '',
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  readonly: false,
  type: 'text',
  dropdownPortalTarget: undefined
});