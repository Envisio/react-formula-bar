"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var suggestions = [{
  type: 'keyword',
  color: 'red',
  items: [{
    title: 'SUM',
    description: 'this is summary function'
  }, {
    title: 'AVG',
    description: 'this is average function'
  }, {
    title: 'MIN',
    description: 'get the tiny one'
  }, {
    title: 'MAX',
    description: 'get the biggest one'
  }]
}, {
  type: 'variable',
  color: 'blue',
  items: [{
    title: 'SV1',
    description: 'summary variable'
  }, {
    title: 'IV2',
    description: 'indicator variable'
  }, {
    title: 'CV3',
    description: 'column variable'
  }]
}];

var FormularBar =
/*#__PURE__*/
function (_Component) {
  _inherits(FormularBar, _Component);

  function FormularBar(props) {
    var _this;

    _classCallCheck(this, FormularBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormularBar).call(this, props));
    var value = _this.props.value;
    _this.state = {
      value: value,
      display: 'none',
      results: suggestions,
      highlight: [0, 0]
    };
    return _this;
  }

  _createClass(FormularBar, [{
    key: "onChange",
    value: function onChange(event) {
      var inputValue = event.target.value;
      var matchValue = (0, _lodash.first)(inputValue.match(/[A-Za-z0-9]+$/));

      if ((0, _lodash.isEmpty)(matchValue)) {
        this.setState({
          display: 'none'
        });
        this.setState({
          highlight: [0, 0]
        });
      } else {
        var matchedGroups = (0, _lodash.reject)((0, _lodash.map)(suggestions, function (_ref) {
          var items = _ref.items,
              props = _objectWithoutProperties(_ref, ["items"]);

          return _objectSpread({
            items: (0, _lodash.filter)(items, function (_ref2) {
              var title = _ref2.title;
              return (0, _lodash.startsWith)((0, _lodash.lowerCase)(title), (0, _lodash.lowerCase)(matchValue) || matchValue);
            })
          }, props);
        }), function (_ref3) {
          var items = _ref3.items;
          return (0, _lodash.isEmpty)(items);
        });

        if ((0, _lodash.isEmpty)(matchedGroups)) {
          this.setState({
            display: 'none'
          });
          this.setState({
            highlight: [0, 0]
          });
        } else {
          this.setState({
            display: 'block'
          });
        }

        this.setState({
          results: matchedGroups
        });
      }

      this.setState({
        value: inputValue
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var key = event.key;

      var _this$state = this.state,
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
              this.setState({
                highlight: [currentGroupIndex, currentItemIndex + 1]
              });
            } else if ((0, _lodash.has)(results, [currentGroupIndex + 1])) {
              this.setState({
                highlight: [currentGroupIndex + 1, 0]
              });
            }
          }

          break;

        case 'ArrowUp':
          event.preventDefault();

          if (!(0, _lodash.isEmpty)(results)) {
            if ((0, _lodash.gt)(currentItemIndex, 0)) {
              this.setState({
                highlight: [currentGroupIndex, currentItemIndex - 1]
              });
            } else if ((0, _lodash.gt)(currentGroupIndex, 0)) {
              this.setState({
                highlight: [currentGroupIndex - 1, (0, _lodash.size)((0, _lodash.get)(results, [currentGroupIndex - 1, 'items'])) - 1]
              });
            }
          }

          break;

        case 'Enter':
          event.preventDefault();

          if (!(0, _lodash.isEmpty)((0, _lodash.first)(value.match(/[A-Za-z0-9]+$/)))) {
            if ((0, _lodash.eq)(display, 'block')) {
              this.setState({
                value: "".concat((0, _lodash.replace)(value, /[A-Za-z0-9]+$/, '')).concat((0, _lodash.get)(results, [currentGroupIndex, 'items', currentItemIndex, 'title']))
              });
            } else {
              this.setState({
                value: value
              });
            }

            this.setState({
              display: 'none'
            });
          }

          break;

        case 'Tab':
          event.preventDefault();

          if (!(0, _lodash.isEmpty)((0, _lodash.first)(value.match(/[A-Za-z0-9]+$/)))) {
            if ((0, _lodash.eq)(display, 'block')) {
              this.setState({
                value: "".concat((0, _lodash.replace)(value, /[A-Za-z0-9]+$/, '')).concat((0, _lodash.get)(results, [currentGroupIndex, 'items', currentItemIndex, 'title']))
              });
            } else {
              this.setState({
                value: value
              });
            }

            this.setState({
              display: 'none'
            });
          }

          break;

        case 'Backspace':
          this.setState({
            display: 'none'
          });
          break;

        case 'Escape':
          this.setState({
            display: 'none'
          });
          break;

        default:
          break;
      }
    }
  }, {
    key: "onClick",
    value: function onClick(groupIndex, itemIndex) {
      var _this$state2 = this.state,
          results = _this$state2.results,
          value = _this$state2.value;
      this.setState({
        value: "".concat((0, _lodash.replace)(value, /[A-Za-z0-9]+$/, '')).concat((0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'title']))
      });
      this.setState({
        display: 'none'
      });
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(groupIndex, itemIndex) {
      this.setState({
        highlight: [groupIndex, itemIndex]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          value = _this$state3.value,
          highlight = _this$state3.highlight,
          results = _this$state3.results,
          display = _this$state3.display;
      return _react["default"].createElement("div", {
        style: {
          width: '100%',
          height: '1rem',
          border: 'solid 1px black',
          position: 'relative',
          fontSize: '14px',
          fontFamily: 'Monaco'
        }
      }, _react["default"].createElement("section", {
        dangerouslySetInnerHTML: {
          __html: function () {
            var formula = value;
            (0, _lodash.each)(suggestions, function (_ref4) {
              var color = _ref4.color,
                  items = _ref4.items;
              (0, _lodash.each)(items, function (_ref5) {
                var title = _ref5.title;
                formula = (0, _lodash.replace)((0, _lodash.replace)(formula, new RegExp("\\b(".concat(title, ")\\b"), 'g'), "<span style=\"color:".concat(color, "\">$1</span>")), '  ', ' &nbsp;');
              });
            });
            return formula;
          }()
        }
      }), _react["default"].createElement("input", {
        onChange: this.onChange,
        value: value,
        onKeyDown: this.onKeyDown,
        style: {
          borderStyle: 'none',
          outline: 'none',
          width: '100%',
          padding: 0,
          height: '1rem',
          fontSize: '14px',
          fontFamily: 'Monaco',
          position: 'absolute',
          top: 0,
          color: 'white',
          caretColor: 'black',
          opacity: 0.3
        }
      }), _react["default"].createElement("dl", {
        style: {
          display: display,
          top: '1rem',
          position: 'absolute',
          width: '100%',
          margin: 0
        }
      }, (0, _lodash.map)(results, function (_ref6, groupIndex) {
        var type = _ref6.type,
            items = _ref6.items;
        return _react["default"].createElement(_react.Fragment, {
          key: (0, _lodash.join)(['suggestion', 'group', type], '-')
        }, _react["default"].createElement("dt", {
          style: {
            fontWeight: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) ? 'bold' : undefined
          }
        }, type), (0, _lodash.map)(items, function (_ref7, itemIndex) {
          var title = _ref7.title,
              description = _ref7.description;
          return _react["default"].createElement("dd", {
            key: (0, _lodash.join)(['suggestion', 'group', type, 'item', title], '-'),
            style: {
              marginLeft: 0
            },
            onClick: (0, _lodash.partial)(_this2.onClick, groupIndex, itemIndex),
            onMouseOver: (0, _lodash.partial)(_this2.onMouseOver, groupIndex, itemIndex)
          }, _react["default"].createElement("label", {
            style: {
              fontWeight: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) && (0, _lodash.eq)(itemIndex, (0, _lodash.last)(highlight)) ? 'bold' : undefined
            }
          }, title), _react["default"].createElement("i", {
            style: {
              paddingLeft: '1rem',
              margin: 0,
              color: 'grey'
            }
          }, description));
        }));
      })));
    }
  }]);

  return FormularBar;
}(_react.Component);

exports["default"] = FormularBar;

_defineProperty(FormularBar, "propTypes", {
  value: _propTypes["default"].string,
  suggestions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string.isRequired,
    color: _propTypes["default"].string,
    items: PropsTypes.arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string.isRequired,
      description: _propTypes["default"].string
    }))
  }))
});

_defineProperty(FormularBar, "defaultProps", {
  value: '',
  suggestions: []
});