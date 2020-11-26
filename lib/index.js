"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _dropdown = _interopRequireDefault(require("./dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormulaBar = /*#__PURE__*/function (_Component) {
  _inherits(FormulaBar, _Component);

  var _super = _createSuper(FormulaBar);

  function FormulaBar(_props) {
    var _this;

    _classCallCheck(this, FormulaBar);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "generateDoc", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "generateSuggestions", function (event, cursorPos) {
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
            props = _objectWithoutProperties(_ref3, ["items"]);

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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;

      _this.generateSuggestions(event);

      _this.setState({
        value: value
      }, function () {
        return onChange(value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var key = event.key;

      var _this$state = _this.state,
          results = _this$state.results,
          _this$state$highlight = _slicedToArray(_this$state.highlight, 2),
          currentGroupIndex = _this$state$highlight[0],
          currentItemIndex = _this$state$highlight[1],
          display = _this$state.display,
          value = _this$state.value;

      switch (key) {
        case 'ArrowDown':
          event.preventDefault();

          if (!(0, _lodash.isEmpty)(results)) {
            if ((0, _lodash.has)(results, [currentGroupIndex, 'items', currentItemIndex + 1])) {
              _this.setState({
                highlight: [currentGroupIndex, currentItemIndex + 1]
              });
            } else if ((0, _lodash.has)(results, [currentGroupIndex + 1])) {
              _this.setState({
                highlight: [currentGroupIndex + 1, 0]
              });
            }
          }

          break;

        case 'ArrowUp':
          event.preventDefault();

          if (!(0, _lodash.isEmpty)(results)) {
            if ((0, _lodash.gt)(currentItemIndex, 0)) {
              _this.setState({
                highlight: [currentGroupIndex, currentItemIndex - 1]
              });
            } else if ((0, _lodash.gt)(currentGroupIndex, 0)) {
              _this.setState({
                highlight: [currentGroupIndex - 1, (0, _lodash.size)((0, _lodash.get)(results, [currentGroupIndex - 1, 'items'])) - 1]
              });
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

    _defineProperty(_assertThisInitialized(_this), "onAutocomplete", function (groupIndex, itemIndex) {
      var _this$state2 = _this.state,
          results = _this$state2.results,
          value = _this$state2.value;
      var valueTail = (0, _lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
      var valueLast = (0, _lodash.last)(valueTail); // use autocomplete value or default to title

      var currentTitle = (0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'autocomplete']) || (0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'title']);
      var indexEnd = (0, _lodash.indexOf)((0, _lodash.split)((0, _lodash.toLower)(currentTitle), ''), (0, _lodash.toLower)(valueLast));
      var matchValue = currentTitle.substring(0, indexEnd + 1);
      var matchSize = (0, _lodash.size)(matchValue);
      var valueSize = (0, _lodash.size)(value);
      var startIndex = valueSize - matchSize;

      _this.setState({
        value: "".concat(value.substring(0, startIndex)).concat(currentTitle)
      }); // show docs if available


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

    _defineProperty(_assertThisInitialized(_this), "onClickSuggestion", function (groupIndex, itemIndex) {
      _this.onAutocomplete(groupIndex, itemIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (groupIndex, itemIndex) {
      _this.setState({
        highlight: [groupIndex, itemIndex]
      });
    });

    var _this$props = _this.props,
        _value = _this$props.value,
        _suggestions = _this$props.suggestions;
    _this.containerRef = (0, _react.createRef)();
    _this.state = {
      value: _value,
      display: 'none',
      results: _suggestions,
      currentDoc: null,
      highlight: [0, 0]
    };
    return _this;
  }

  _createClass(FormulaBar, [{
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
          _styles$docContainer = styles.docContainer,
          docContainerStyle = _styles$docContainer === void 0 ? function (styles) {
        return styles;
      } : _styles$docContainer,
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
        onBlur: function onBlur() {
          _this2.setState({
            display: 'none'
          });

          _onBlur(value);
        }
      }), /*#__PURE__*/_react["default"].createElement(_dropdown["default"], {
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
            }, (currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.example) ? "Example: ".concat(currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.example) : ''), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _lodash.map)(currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.args, function (argDesc, argName) {
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
                style: docDescriptionStyle({
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
                  className: classes.listItem,
                  key: (0, _lodash.join)(['suggestion', 'group', type, 'item', title], '-'),
                  style: listItemStyle({
                    marginLeft: 0,
                    padding: '0 6px',
                    lineHeight: '28px',
                    backgroundColor: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) && (0, _lodash.eq)(itemIndex, (0, _lodash.last)(highlight)) ? 'gainsboro' : 'white',
                    cursor: 'pointer'
                  }, {
                    groupIndex: groupIndex,
                    itemIndex: itemIndex,
                    highlight: highlight,
                    suggestions: suggestions
                  }),
                  onClick: (0, _lodash.partial)(_this2.onClickSuggestion, groupIndex, itemIndex),
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

  return FormulaBar;
}(_react.Component);

exports["default"] = FormulaBar;

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
  onBlur: function onBlur() {},
  readonly: false,
  type: 'text',
  dropdownPortalTarget: undefined
});