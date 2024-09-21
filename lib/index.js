"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _lodash = require("lodash");
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _excluded = ["items"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var suggestionWorker = function suggestionWorker() {
  // This must be ES3 and no importings
  self.onmessage = function (_ref) {
    var _ref$data = _ref.data,
      _ref$data$value = _ref$data.value,
      value = _ref$data$value === void 0 ? "" : _ref$data$value,
      _ref$data$suggestions = _ref$data.suggestions,
      suggestions = _ref$data$suggestions === void 0 ? [] : _ref$data$suggestions;
    var valueTail = value.match(/[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g)[0];
    if (valueTail) {
      var valueLast;
      var insideFunc = false;
      var valueLastMatch1 = valueTail.match(/[A-Za-z\d]+$/g);
      var valueLastMatch2 = valueTail.match(/[A-Za-z]+\d*\(/g);
      if (valueLastMatch1) {
        valueLast = valueLastMatch1.reverse()[0];
      } else if (valueLastMatch2) {
        // in the context of a function
        valueLast = valueLastMatch2.reverse()[0].replace("(", "");
        insideFunc = true;
      } else {
        valueLast = Array.from(valueTail).reverse()[0];
      }
      if (insideFunc) {
        suggestions.forEach(function (_ref2) {
          var items = _ref2.items;
          var foundItem = items.find(function (_ref3) {
            var title = _ref3.title;
            return title.toLowerCase() === valueLast.toLowerCase();
          });
          if (foundItem) {
            var itemDescription = foundItem.description,
              itemDocs = foundItem.docs;
            var result = Object.assign({
              description: itemDescription
            }, itemDocs);
            self.postMessage({
              result: result
            });
            return false;
          }
        });
        return false;
      }
      var maxMatch = 0;
      var matchedGroups = suggestions.map(function (_ref4) {
        var items = _ref4.items,
          type = _ref4.type,
          color = _ref4.color;
        return {
          items: items.map(function (_ref5) {
            var title = _ref5.title,
              description = _ref5.description,
              autocomplete = _ref5.autocomplete,
              docs = _ref5.docs;
            var indexEnd = title.toLowerCase().indexOf(valueLast.toLowerCase());
            var matchValue = title.substring(0, indexEnd + valueLast.length);
            var matchSize = matchValue.length;
            if (matchSize > 0 && valueTail.toLowerCase().endsWith(matchValue.toLowerCase()) && matchSize < title.length) {
              maxMatch = matchSize > maxMatch ? matchSize : maxMatch;
              if (matchSize >= maxMatch) {
                return {
                  title: title,
                  matchSize: matchSize,
                  description: description,
                  autocomplete: autocomplete,
                  docs: Object.assign({
                    description: description
                  }, docs)
                };
              }
              return undefined;
            }
            return undefined;
          }).filter(function (item) {
            return !!item;
          }),
          type: type,
          color: color
        };
      }).filter(function (_ref6) {
        var items = _ref6.items;
        return !!items.filter(function (_ref7) {
          var matchSize = _ref7.matchSize;
          return matchSize === maxMatch;
        }).length;
      });
      self.postMessage({
        matchedGroups: matchedGroups
      });
    }
  };
};
var FormulaBar = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormulaBar(_props) {
    var _this;
    _classCallCheck(this, FormulaBar);
    _this = _callSuper(this, FormulaBar, [_props]);
    _defineProperty(_this, "generateDoc", function (value) {
      var suggestions = _this.props.suggestions;
      var result;
      suggestions.forEach(function (_ref8) {
        var items = _ref8.items;
        var foundItem = items.find(function (_ref9) {
          var title = _ref9.title;
          return title.toLowerCase() === value.toLowerCase();
        });
        if (foundItem) {
          result = _objectSpread({
            description: foundItem.description
          }, foundItem.docs);
          return false;
        }
      });
      if (!(0, _lodash.isEmpty)(result)) {
        _this.setState({
          display: "doc"
        });
      } else {
        _this.setState({
          display: "none"
        });
      }
      _this.setState({
        highlight: [0, 0]
      });
      _this.setState({
        currentDoc: result
      });
    });
    _defineProperty(_this, "generateSuggestions", function (_ref10) {
      var _ref10$value = _ref10.value,
        value = _ref10$value === void 0 ? "" : _ref10$value,
        suggestions = _ref10.suggestions;
      var _value$match = value.match(/[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g),
        _value$match2 = _slicedToArray(_value$match, 1),
        valueTail = _value$match2[0];
      var valueLast;
      var insideFunc = false;
      var valueLastMatch1 = valueTail.match(/[A-Za-z\d]+$/g);
      var valueLastMatch2 = valueTail.match(/[A-Za-z]+\d*\(/g);
      if (valueTail.match(/[A-Za-z]+\d*$/g) && valueLastMatch1) {
        var _valueLastMatch1$reve = valueLastMatch1.reverse();
        var _valueLastMatch1$reve2 = _slicedToArray(_valueLastMatch1$reve, 1);
        valueLast = _valueLastMatch1$reve2[0];
      } else if (valueTail.match(/[A-Za-z]+\d*\([^\)]*/g) && valueTail.match(/[A-Za-z]+\d*\(/g)) {
        // in the context of a function
        valueLast = valueTail.match(/[A-Za-z]+\d*\(/g).reverse()[0].replace("(", "");
        insideFunc = true;
      } else {
        var _Array$from$reverse = Array.from(valueTail).reverse();
        var _Array$from$reverse2 = _slicedToArray(_Array$from$reverse, 1);
        valueLast = _Array$from$reverse2[0];
      }
      if (insideFunc) {
        _this.generateDoc(valueLast);
        return false;
      }
      var maxMatch = 0;
      var matchedGroups = suggestions.map(function (_ref11) {
        var items = _ref11.items,
          props = _objectWithoutProperties(_ref11, _excluded);
        return _objectSpread({
          items: items.map(function (_ref12) {
            var title = _ref12.title,
              description = _ref12.description,
              autocomplete = _ref12.autocomplete,
              docs = _ref12.docs;
            var indexEnd = title.toLowerCase().indexOf(valueLast.toLowerCase());
            var matchValue = title.substring(0, indexEnd + valueLast.length);
            var matchSize = matchValue.length;
            if (matchSize > 0 && valueTail.toLowerCase().endsWith(matchValue.toLowerCase()) && matchSize < title.length) {
              maxMatch = matchSize > maxMatch ? matchSize : maxMatch;
              if (matchSize >= maxMatch) {
                return {
                  title: title,
                  matchSize: matchSize,
                  description: description,
                  autocomplete: autocomplete,
                  docs: _objectSpread({
                    description: description
                  }, docs)
                };
              }
              return undefined;
            }
            return undefined;
          }).filter(function (item) {
            return !!item;
          })
        }, props);
      }).filter(function (_ref13) {
        var items = _ref13.items;
        return !!items.filter(function (_ref14) {
          var matchSize = _ref14.matchSize;
          return matchSize === maxMatch;
        }).length;
      });
      if (!matchedGroups.length) {
        _this.setState({
          display: "none"
        });
        _this.setState({
          highlight: [0, 0]
        });
      } else {
        _this.setState({
          display: "suggest"
        });
      }
      _this.setState({
        results: matchedGroups
      });
    });
    _defineProperty(_this, "onChange", function (_ref15) {
      var _ref15$target = _ref15.target,
        _ref15$target2 = _ref15$target === void 0 ? {} : _ref15$target,
        _ref15$target2$value = _ref15$target2.value,
        value = _ref15$target2$value === void 0 ? "" : _ref15$target2$value;
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        suggestions = _this$props.suggestions;
      if (window.Worker) {
        var suggestionWorkerString = suggestionWorker.toString();
        var startIndex = suggestionWorkerString.indexOf("{") + 1;
        var endIndex = suggestionWorkerString.lastIndexOf("}");
        var suggestionWorkerContent = suggestionWorkerString.substring(startIndex, endIndex);
        var blob = new Blob([suggestionWorkerContent], {
          type: "application/javascript"
        });
        var worker = new Worker(URL.createObjectURL(blob));
        worker.postMessage({
          value: value,
          suggestions: suggestions
        });
        worker.onmessage = function (_ref16) {
          var _ref16$data = _ref16.data,
            _ref16$data2 = _ref16$data === void 0 ? {} : _ref16$data,
            _ref16$data2$matchedG = _ref16$data2.matchedGroups,
            matchedGroups = _ref16$data2$matchedG === void 0 ? [] : _ref16$data2$matchedG,
            _ref16$data2$result = _ref16$data2.result,
            result = _ref16$data2$result === void 0 ? {} : _ref16$data2$result;
          if (!matchedGroups.length) {
            _this.setState({
              highlight: [0, 0]
            });
            if (Object.keys(result).length) {
              _this.setState({
                display: "doc"
              });
              _this.setState({
                currentDoc: result
              });
            } else {
              _this.setState({
                display: "none"
              });
            }
          } else {
            _this.setState({
              display: "suggest"
            });
          }
          _this.setState({
            results: matchedGroups
          });
          worker.terminate();
        };
      } else {
        _this.generateSuggestions({
          value: value,
          suggestions: suggestions
        });
      }
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
        case "ArrowDown":
          if (display === "suggest" && !(0, _lodash.isEmpty)(results)) {
            event.preventDefault();
            if ((0, _lodash.has)(results, [currentGroupIndex, "items", currentItemIndex + 1])) {
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
            var _get2 = (0, _lodash.get)(results, [newGroupIndex, "items", newItemIndex]),
              title = _get2.title;
            var highlightedItem = document.querySelector("[data-id=\"".concat([type, title].join("-"), "\"]"));
            if (!isElementVisible(highlightedItem, _this.dropdownContainerRef.current)) {
              highlightedItem.scrollIntoView(false);
            }
          }
          break;
        case "ArrowUp":
          if (display === "suggest" && !(0, _lodash.isEmpty)(results)) {
            event.preventDefault();
            if (currentItemIndex > 0) {
              newItemIndex = currentItemIndex - 1;
            } else if (currentGroupIndex > 0) {
              newGroupIndex = currentGroupIndex - 1;
              newItemIndex = (0, _lodash.get)(results, [newGroupIndex, "items"]).length - 1;
            }
            _this.setState({
              highlight: [newGroupIndex, newItemIndex]
            });
            var _get3 = (0, _lodash.get)(results, newGroupIndex),
              _type = _get3.type;
            var _get4 = (0, _lodash.get)(results, [newGroupIndex, "items", newItemIndex]),
              _title = _get4.title;
            var _highlightedItem = document.querySelector("[data-id=\"".concat([_type, _title].join("-"), "\"]"));
            if (!isElementVisible(_highlightedItem, _this.dropdownContainerRef.current)) {
              _highlightedItem.scrollIntoView();
            }
          }
          break;
        case "Enter":
          event.preventDefault();
          if (display === "suggest") {
            _this.onAutocomplete(currentGroupIndex, currentItemIndex);
          } else {
            _this.setState({
              value: value
            });
            _this.setState({
              display: "none"
            });
          }
          break;
        case "Tab":
          if (display === "suggest") {
            event.preventDefault();
            _this.onAutocomplete(currentGroupIndex, currentItemIndex);
          } else {
            _this.setState({
              value: value
            });
            _this.setState({
              display: "none"
            });
          }
          break;
        case "Backspace":
          _this.setState({
            display: "none"
          });
          break;
        case "Escape":
          _this.setState({
            display: "none"
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
      var _value$match3 = value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g),
        _value$match4 = _slicedToArray(_value$match3, 1),
        valueTail = _value$match4[0];
      var valueLast = (0, _lodash.last)(valueTail);
      // use autocomplete value or default to title
      var currentTitle = (0, _lodash.get)(results, [groupIndex, "items", itemIndex, "autocomplete"]) || (0, _lodash.get)(results, [groupIndex, "items", itemIndex, "title"]);
      var indexEnd = currentTitle.toLowerCase().split("").indexOf(valueLast.toLowerCase());
      var matchValue = currentTitle.substring(0, indexEnd + 1);
      var matchSize = matchValue.length;
      var valueSize = value.length;
      var startIndex = valueSize - matchSize;
      _this.setState({
        value: "".concat(value.substring(0, startIndex)).concat(currentTitle)
      });

      // show docs if available
      var currentDoc = (0, _lodash.get)(results, [groupIndex, "items", itemIndex, "docs"]);
      if (!(0, _lodash.isEmpty)(currentDoc)) {
        _this.setState({
          display: "doc"
        });
        _this.setState({
          currentDoc: currentDoc
        });
      } else {
        _this.setState({
          display: "none"
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
    var _this$props2 = _this.props,
      _value = _this$props2.value,
      _suggestions = _this$props2.suggestions;
    _this.containerRef = /*#__PURE__*/(0, _react.createRef)();
    _this.dropdownContainerRef = /*#__PURE__*/(0, _react.createRef)();
    _this.state = {
      value: _value,
      display: "none",
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
      var _this$props3 = this.props,
        suggestions = _this$props3.suggestions,
        classes = _this$props3.classes,
        styles = _this$props3.styles,
        type = _this$props3.type,
        disabled = _this$props3.disabled,
        readonly = _this$props3.readonly,
        onFocus = _this$props3.onFocus,
        _onBlur = _this$props3.onBlur,
        placeholder = _this$props3.placeholder,
        dropdownPortalTarget = _this$props3.dropdownPortalTarget;
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
          width: "100%",
          height: "34px",
          border: "solid 1px gray",
          position: "relative",
          fontSize: "14px",
          fontFamily: 'Monaco, Courier, "Ubuntu Mono", monospace',
          borderRadius: "5px",
          backgroundColor: "white"
        })
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: classes.input,
        onChange: this.onChange,
        value: value,
        onKeyDown: this.onKeyDown,
        style: inputStyle({
          borderStyle: "none",
          outline: "none",
          width: "100%",
          // padding: '0 6px',
          lineHeight: "34px",
          height: "34px",
          fontSize: "14px",
          fontFamily: "Monaco, Courier",
          position: "absolute",
          top: 0,
          // color: 'transparent',
          caretColor: "black",
          backgroundColor: "transparent",
          overflow: "hidden"
        }),
        readOnly: readonly,
        disabled: disabled,
        placeholder: placeholder,
        type: type,
        onFocus: onFocus,
        onBlur: function onBlur() {
          _this2.setState({
            display: "none"
          });
          _onBlur(value);
        }
      }), /*#__PURE__*/_react["default"].createElement(_dropdown["default"], {
        ref: this.dropdownContainerRef,
        container: dropdownPortalTarget,
        inputContainer: this.containerRef.current,
        className: classes.dropdownContainer,
        styles: dropdownContainerStyle,
        isOpen: display !== "none"
      }, function () {
        switch (display) {
          case "doc":
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docContent,
              style: docContentStyle({
                padding: "6px"
              })
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docSignature,
              style: docSignatureStyle({
                fontWeight: "bold",
                lineHeight: "20px",
                color: "gray"
              })
            }, currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.signature), /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docDescription,
              style: docDescriptionStyle({
                lineHeight: "15px",
                color: "gray"
              })
            }, currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.description), /*#__PURE__*/_react["default"].createElement("div", {
              className: classes.docExample,
              style: docExampleStyle({
                color: "gray",
                lineHeight: "20px"
              })
            }, currentDoc !== null && currentDoc !== void 0 && currentDoc.example ? "Example: ".concat(currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.example) : ""), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _lodash.map)(currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.args, function (argDesc, argName) {
              return /*#__PURE__*/_react["default"].createElement("div", {
                key: ["doc", "arg", argName].join("-"),
                className: classes.docArg,
                style: docArgStyle({
                  color: "gray"
                })
              }, /*#__PURE__*/_react["default"].createElement("span", {
                className: classes.docArgName,
                style: docArgNameStyle({
                  fontWeight: "bold"
                })
              }, "".concat(argName, ":")), /*#__PURE__*/_react["default"].createElement("span", {
                className: classes.docDescription,
                style: docArgDescriptionStyle({
                  paddingLeft: "5px"
                })
              }, argDesc));
            })));
          case "suggest":
            return /*#__PURE__*/_react["default"].createElement("dl", {
              className: classes.suggestContent,
              style: suggestContentStyle({
                margin: 0
              })
            }, results.map(function (_ref17, groupIndex) {
              var type = _ref17.type,
                items = _ref17.items;
              return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
                key: ["suggestion", "group", type].join("-")
              }, /*#__PURE__*/_react["default"].createElement("dt", {
                className: classes.listGroup,
                style: listGroupStyle({
                  fontWeight: groupIndex === highlight[0] ? "bold" : undefined,
                  padding: "0 6px",
                  color: "gray"
                })
              }, type), items.map(function (_ref18, itemIndex) {
                var title = _ref18.title,
                  description = _ref18.description;
                return /*#__PURE__*/_react["default"].createElement("dd", {
                  "data-id": [type, title].join("-"),
                  className: classes.listItem,
                  key: ["suggestion", "group", type, "item", title].join("-"),
                  style: listItemStyle({
                    marginLeft: 0,
                    padding: "5px 6px",
                    backgroundColor: groupIndex === highlight[0] && itemIndex === (0, _lodash.last)(highlight) ? "gainsboro" : "white",
                    cursor: "pointer"
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
                    fontWeight: groupIndex === highlight[0] && itemIndex === (0, _lodash.last)(highlight) ? "bold" : undefined
                  }, {
                    groupIndex: groupIndex,
                    itemIndex: itemIndex,
                    highlight: highlight,
                    suggestions: suggestions
                  })
                }, title), /*#__PURE__*/_react["default"].createElement("i", {
                  className: classes.listItemDescription,
                  style: listItemDescriptionStyle({
                    paddingLeft: "14px",
                    margin: 0,
                    color: "gray"
                  })
                }, description));
              }));
            }));
          default:
            return "";
        }
      }()));
    }
  }]);
}(_react.Component);
_defineProperty(FormulaBar, "propTypes", {
  value: _propTypes.string,
  suggestions: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    type: _propTypes.string.isRequired,
    color: _propTypes.string,
    items: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
      title: _propTypes.string.isRequired,
      description: _propTypes.string,
      autocomplete: _propTypes.string,
      docs: (0, _propTypes.shape)({
        signature: _propTypes.string.isRequired,
        example: _propTypes.string,
        args: _propTypes.object
      })
    }))
  })),
  onChange: _propTypes.func,
  classes: (0, _propTypes.shape)({
    container: _propTypes.string,
    value: _propTypes.string,
    input: _propTypes.string,
    listItem: _propTypes.string,
    listItemLabel: _propTypes.string,
    listItemDescription: _propTypes.string,
    listGroup: _propTypes.string
  }),
  styles: (0, _propTypes.shape)({
    container: _propTypes.func,
    value: _propTypes.func,
    input: _propTypes.func,
    listItem: _propTypes.func,
    listItemLabel: _propTypes.func,
    listItemDescription: _propTypes.func,
    listGroup: _propTypes.func
  }),
  disabled: _propTypes.bool,
  placeholder: _propTypes.string,
  onFocus: _propTypes.func,
  onBlur: _propTypes.func,
  readonly: _propTypes.bool,
  type: _propTypes.string,
  dropdownPortalTarget: (0, _propTypes.instanceOf)(Element)
});
_defineProperty(FormulaBar, "defaultProps", {
  value: "",
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
  placeholder: "",
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  readonly: false,
  type: "text",
  dropdownPortalTarget: undefined
});