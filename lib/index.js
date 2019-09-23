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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormularBar =
/*#__PURE__*/
function (_Component) {
  _inherits(FormularBar, _Component);

  function FormularBar(_props) {
    var _this;

    _classCallCheck(this, FormularBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormularBar).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          suggestions = _this$props.suggestions;
      var value = event.target.value;
      var valueTail = (0, _lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
      var valueLast;

      if (valueTail.match(/[A-Za-z\d]+$/g)) {
        valueLast = (0, _lodash.last)(valueTail.match(/[A-Za-z\d]+$/g));
      } else {
        valueLast = (0, _lodash.last)(valueTail);
      }

      var maxMatch = 0;
      var matchedGroups = (0, _lodash.reject)((0, _lodash.map)(suggestions, function (_ref) {
        var items = _ref.items,
            props = _objectWithoutProperties(_ref, ["items"]);

        return _objectSpread({
          items: (0, _lodash.compact)((0, _lodash.map)(items, function (_ref2) {
            var title = _ref2.title,
                description = _ref2.description;
            var indexEnd = (0, _lodash.toLower)(title).indexOf((0, _lodash.toLower)(valueLast));
            var matchValue = title.substring(0, indexEnd + (0, _lodash.size)(valueLast));
            var matchSize = (0, _lodash.size)(matchValue);

            if ((0, _lodash.gt)(matchSize, 0) && (0, _lodash.endsWith)((0, _lodash.toLower)(valueTail), (0, _lodash.toLower)(matchValue)) && matchSize < (0, _lodash.size)(title)) {
              maxMatch = matchSize > maxMatch ? matchSize : maxMatch;

              if (matchSize >= maxMatch) {
                return {
                  title: title,
                  matchSize: matchSize,
                  description: description
                };
              }

              return undefined;
            }

            return undefined;
          }))
        }, props);
      }), function (_ref3) {
        var items = _ref3.items;
        return (0, _lodash.isEmpty)((0, _lodash.filter)(items, function (_ref4) {
          var matchSize = _ref4.matchSize;
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
          display: 'block'
        });
      }

      _this.setState({
        results: matchedGroups
      });

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

          if ((0, _lodash.eq)(display, 'block')) {
            var valueTail = (0, _lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
            var valueLast = (0, _lodash.last)(valueTail);
            var currentTitle = (0, _lodash.get)(results, [currentGroupIndex, 'items', currentItemIndex, 'title']);
            var indexEnd = (0, _lodash.indexOf)((0, _lodash.split)((0, _lodash.toLower)(currentTitle), ''), (0, _lodash.toLower)(valueLast));
            var matchValue = currentTitle.substring(0, indexEnd + 1);
            var matchSize = (0, _lodash.size)(matchValue);
            var valueSize = (0, _lodash.size)(value);
            var startIndex = valueSize - matchSize;

            _this.setState({
              value: "".concat(value.substring(0, startIndex)).concat(currentTitle)
            });
          } else {
            _this.setState({
              value: value
            });
          }

          _this.setState({
            display: 'none'
          });

          break;

        case 'Tab':
          event.preventDefault();

          if ((0, _lodash.eq)(display, 'block')) {
            var _valueTail = (0, _lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));

            var _valueLast = (0, _lodash.last)(_valueTail);

            var _currentTitle = (0, _lodash.get)(results, [currentGroupIndex, 'items', currentItemIndex, 'title']);

            var _indexEnd = (0, _lodash.indexOf)((0, _lodash.split)((0, _lodash.toLower)(_currentTitle), ''), (0, _lodash.toLower)(_valueLast));

            var _matchValue = _currentTitle.substring(0, _indexEnd + 1);

            var _matchSize = (0, _lodash.size)(_matchValue);

            var _valueSize = (0, _lodash.size)(value);

            var _startIndex = _valueSize - _matchSize;

            _this.setState({
              value: "".concat(value.substring(0, _startIndex)).concat(_currentTitle)
            });
          } else {
            _this.setState({
              value: value
            });
          }

          _this.setState({
            display: 'none'
          });

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

    _defineProperty(_assertThisInitialized(_this), "onClick", function (groupIndex, itemIndex) {
      var _this$state2 = _this.state,
          results = _this$state2.results,
          value = _this$state2.value;
      var valueTail = (0, _lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
      var valueLast = (0, _lodash.last)(valueTail);
      var currentTitle = (0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'title']);
      var indexEnd = (0, _lodash.indexOf)((0, _lodash.split)((0, _lodash.toLower)(currentTitle), ''), (0, _lodash.toLower)(valueLast));
      var matchValue = currentTitle.substring(0, indexEnd + 1);
      var matchSize = (0, _lodash.size)(matchValue);
      var valueSize = (0, _lodash.size)(value);
      var startIndex = valueSize - matchSize;

      _this.setState({
        value: "".concat(value.substring(0, startIndex)).concat(currentTitle)
      });

      _this.setState({
        display: 'none'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (groupIndex, itemIndex) {
      _this.setState({
        highlight: [groupIndex, itemIndex]
      });
    });

    var _this$props2 = _this.props,
        _value = _this$props2.value,
        _suggestions = _this$props2.suggestions;
    _this.state = {
      value: _value,
      display: 'none',
      results: _suggestions,
      highlight: [0, 0]
    };
    return _this;
  }

  _createClass(FormularBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          suggestions = _this$props3.suggestions,
          classes = _this$props3.classes,
          styles = _this$props3.styles;
      var _this$state3 = this.state,
          value = _this$state3.value,
          highlight = _this$state3.highlight,
          results = _this$state3.results,
          display = _this$state3.display;
      return _react["default"].createElement("div", {
        className: classes.container,
        style: styles.container()
      }, _react["default"].createElement("section", {
        className: classes.value,
        style: styles.value(),
        dangerouslySetInnerHTML: {
          __html: function () {
            var formula = value;
            (0, _lodash.each)(suggestions, function (_ref5) {
              var color = _ref5.color,
                  items = _ref5.items;
              (0, _lodash.each)(items, function (_ref6) {
                var title = _ref6.title;
                formula = (0, _lodash.replace)((0, _lodash.replace)(formula, new RegExp("(".concat((0, _lodash.replace)(title, /[|\\{}()[\]^$+*?.-]/g, '\\$&'), ")"), 'g'), "<span style=\"color:".concat(color, "\">$1</span>")), '  ', ' &nbsp;');
              });
            });
            return formula;
          }()
        }
      }), _react["default"].createElement("input", {
        className: classes.input,
        onChange: this.onChange,
        value: value,
        onKeyDown: this.onKeyDown,
        style: styles.input()
      }), _react["default"].createElement("dl", {
        className: classes.listContainer,
        style: styles.listContainer({
          display: display
        })
      }, (0, _lodash.map)(results, function (_ref7, groupIndex) {
        var type = _ref7.type,
            items = _ref7.items;
        return _react["default"].createElement(_react.Fragment, {
          key: (0, _lodash.join)(['suggestion', 'group', type], '-')
        }, _react["default"].createElement("dt", {
          className: classes.listGroup,
          style: styles.listGroup({
            groupIndex: groupIndex,
            highlight: highlight
          })
        }, type), (0, _lodash.map)(items, function (_ref8, itemIndex) {
          var title = _ref8.title,
              description = _ref8.description;
          return _react["default"].createElement("dd", {
            className: classes.listItem,
            key: (0, _lodash.join)(['suggestion', 'group', type, 'item', title], '-'),
            style: styles.listItem(),
            onClick: (0, _lodash.partial)(_this2.onClick, groupIndex, itemIndex),
            onMouseOver: (0, _lodash.partial)(_this2.onMouseOver, groupIndex, itemIndex),
            onFocus: (0, _lodash.partial)(_this2.onMouseOver, groupIndex, itemIndex)
          }, _react["default"].createElement("label", {
            className: classes.listItemLabel,
            style: styles.listItemLabel({
              groupIndex: groupIndex,
              itemIndex: itemIndex,
              highlight: highlight
            })
          }, title), _react["default"].createElement("i", {
            className: classes.listItemDescription,
            style: styles.listItemDescription()
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
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string.isRequired,
      description: _propTypes["default"].string
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
    container: _propTypes["default"].obj,
    value: _propTypes["default"].obj,
    input: _propTypes["default"].obj,
    listItem: _propTypes["default"].obj,
    listItemLabel: _propTypes["default"].obj,
    listItemDescription: _propTypes["default"].obj,
    listGroup: _propTypes["default"].obj
  })
});

_defineProperty(FormularBar, "defaultProps", {
  value: '',
  suggestions: [],
  classes: {},
  styles: {
    container: function container() {
      return {
        width: '100%',
        height: '34px',
        border: 'solid 1px grey',
        position: 'relative',
        fontSize: '14px',
        fontFamily: 'Monaco',
        borderRadius: '5px',
        backgroundColor: 'white'
      };
    },
    value: function value() {
      return {
        height: '34px',
        lineHeight: '34px',
        padding: '0 6px'
      };
    },
    input: function input() {
      return {
        borderStyle: 'none',
        outline: 'none',
        width: '100%',
        padding: '0 6px',
        lineHeight: '34px',
        height: '34px',
        fontSize: '14px',
        fontFamily: 'Monaco',
        position: 'absolute',
        top: 0,
        color: 'transparent',
        caretColor: 'black',
        backgroundColor: 'transparent'
      };
    },
    listContainer: function listContainer(_ref9) {
      var display = _ref9.display;
      return {
        display: display,
        top: '34px',
        position: 'absolute',
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
        borderColor: 'grey',
        borderWidth: '1px'
      };
    },
    listItem: function listItem() {
      return {
        marginLeft: 0,
        borderBottom: 'solid 1px grey',
        padding: '0 6px'
      };
    },
    listItemLabel: function listItemLabel(_ref10) {
      var groupIndex = _ref10.groupIndex,
          highlight = _ref10.highlight,
          itemIndex = _ref10.itemIndex;
      return {
        fontWeight: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) && (0, _lodash.eq)(itemIndex, (0, _lodash.last)(highlight)) ? 'bold' : undefined
      };
    },
    listItemDescription: function listItemDescription() {
      return {
        paddingLeft: '14px',
        margin: 0,
        color: 'grey'
      };
    },
    listGroup: function listGroup(_ref11) {
      var groupIndex = _ref11.groupIndex,
          highlight = _ref11.highlight;
      return {
        fontWeight: (0, _lodash.eq)(groupIndex, (0, _lodash.first)(highlight)) ? 'bold' : undefined,
        padding: '0 6px',
        color: 'grey'
      };
    }
  },
  onChange: function onChange() {}
});