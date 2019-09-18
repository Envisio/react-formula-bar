"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RegularBar;

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function RegularBar() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)('none'),
      _useState4 = _slicedToArray(_useState3, 2),
      display = _useState4[0],
      toggleDisplay = _useState4[1];

  var _useState5 = (0, _react.useState)(suggestions),
      _useState6 = _slicedToArray(_useState5, 2),
      results = _useState6[0],
      setResults = _useState6[1];

  var _useState7 = (0, _react.useState)([0, 0]),
      _useState8 = _slicedToArray(_useState7, 2),
      highlight = _useState8[0],
      setHighlight = _useState8[1];

  var onChange = function onChange(event) {
    var inputValue = event.target.value;
    var matchValue = (0, _lodash.first)(inputValue.match(/[A-Za-z0-9]+$/));

    if ((0, _lodash.isEmpty)(matchValue)) {
      toggleDisplay('none');
      setHighlight([0, 0]);
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
        toggleDisplay('none');
        setHighlight([0, 0]);
      } else {
        toggleDisplay('block');
      }

      setResults(matchedGroups);
    }

    setValue(inputValue);
  };

  var onKeyDown = function onKeyDown(event) {
    var key = event.key;
    var currentGroupIndex = (0, _lodash.first)(highlight);
    var currentItemIndex = (0, _lodash.last)(highlight);

    switch (key) {
      case 'ArrowDown':
        event.preventDefault();

        if (!(0, _lodash.isEmpty)(results)) {
          if ((0, _lodash.has)(results, [currentGroupIndex, 'items', currentItemIndex + 1])) {
            setHighlight([currentGroupIndex, currentItemIndex + 1]);
          } else if ((0, _lodash.has)(results, [currentGroupIndex + 1])) {
            setHighlight([currentGroupIndex + 1, 0]);
          }
        }

        break;

      case 'ArrowUp':
        event.preventDefault();

        if (!(0, _lodash.isEmpty)(results)) {
          if ((0, _lodash.gt)(currentItemIndex, 0)) {
            setHighlight([currentGroupIndex, currentItemIndex - 1]);
          } else if ((0, _lodash.gt)(currentGroupIndex, 0)) {
            setHighlight([currentGroupIndex - 1, (0, _lodash.size)((0, _lodash.get)(results, [currentGroupIndex - 1, 'items'])) - 1]);
          }
        }

        break;

      case 'Enter':
        event.preventDefault();

        if (!(0, _lodash.isEmpty)((0, _lodash.first)(value.match(/[A-Za-z0-9]+$/)))) {
          if ((0, _lodash.eq)(display, 'block')) {
            setValue("".concat((0, _lodash.replace)(value, /[A-Za-z0-9]+$/, '')).concat((0, _lodash.get)(results, [currentGroupIndex, 'items', currentItemIndex, 'title'])));
          } else {
            setValue(value);
          }

          toggleDisplay('none');
        }

        break;

      case 'Tab':
        event.preventDefault();

        if (!(0, _lodash.isEmpty)((0, _lodash.first)(value.match(/[A-Za-z0-9]+$/)))) {
          if ((0, _lodash.eq)(display, 'block')) {
            setValue("".concat((0, _lodash.replace)(value, /[A-Za-z0-9]+$/, '')).concat((0, _lodash.get)(results, [currentGroupIndex, 'items', currentItemIndex, 'title'])));
          } else {
            setValue(value);
          }

          toggleDisplay('none');
        }

        break;

      case 'Backspace':
        toggleDisplay('none');
        break;

      case 'Escape':
        toggleDisplay('none');
        break;

      default:
        break;
    }
  };

  var onClick = function onClick(groupIndex, itemIndex) {
    setValue("".concat((0, _lodash.replace)(value, /[A-Za-z0-9]+$/, '')).concat((0, _lodash.get)(results, [groupIndex, 'items', itemIndex, 'title'])));
    toggleDisplay('none');
  };

  var onMouseOver = function onMouseOver(groupIndex, itemIndex) {
    setHighlight([groupIndex, itemIndex]);
  };

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
    onChange: onChange,
    value: value,
    onKeyDown: onKeyDown,
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
        onClick: (0, _lodash.partial)(onClick, groupIndex, itemIndex),
        onMouseOver: (0, _lodash.partial)(onMouseOver, groupIndex, itemIndex)
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