"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var INPUT_MARGIN = 4;
var MARGIN = 5;
var MAX_HEIGHT = 300;
var MAX_WIDTH = 700;

function Dropdown(_ref) {
  var container = _ref.container,
      inputContainer = _ref.inputContainer,
      children = _ref.children,
      className = _ref.className,
      styles = _ref.styles,
      isOpen = _ref.isOpen,
      forwardedRef = _ref.forwardedRef;

  if (!inputContainer) {
    return '';
  }

  var _inputContainer$getBo = inputContainer.getBoundingClientRect(),
      left = _inputContainer$getBo.left,
      bottom = _inputContainer$getBo.bottom;

  var pageWidthMax = document.documentElement.clientWidth;
  var pageHeightMax = document.documentElement.clientHeight;
  var maxContainerWidth = Math.min(pageWidthMax - left - MARGIN, MAX_WIDTH);
  var maxContainerHeight = Math.min(MAX_HEIGHT, pageHeightMax - bottom - INPUT_MARGIN - MARGIN);

  if (container && inputContainer) {
    var dropdown = /*#__PURE__*/_react["default"].createElement("div", {
      ref: forwardedRef,
      className: className,
      style: styles({
        display: isOpen ? 'block' : 'none',
        top: bottom + INPUT_MARGIN,
        left: left,
        position: 'absolute',
        maxHeight: maxContainerHeight,
        maxWidth: maxContainerWidth,
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
        borderColor: 'dimgray',
        borderWidth: '1px',
        borderStyle: 'solid',
        overflowX: 'hidden'
      })
    }, children);

    return /*#__PURE__*/(0, _reactDom.createPortal)(dropdown, container);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: forwardedRef,
    className: className,
    style: styles({
      display: isOpen ? 'block' : 'none',
      top: '38px',
      left: '0px',
      position: 'absolute',
      maxHeight: maxContainerHeight,
      maxWidth: maxContainerWidth,
      width: '100%',
      margin: 0,
      backgroundColor: 'white',
      borderRadius: '5px',
      borderColor: 'dimgray',
      borderWidth: '1px',
      borderStyle: 'solid',
      overflowX: 'hidden'
    })
  }, children);
}

Dropdown.propTypes = {
  children: _propTypes["default"].node,
  container: _propTypes["default"].instanceOf(Element),
  inputContainer: _propTypes["default"].instanceOf(Element),
  styles: _propTypes["default"].func,
  className: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool.isRequired,
  forwardedRef: _propTypes["default"].shape({
    current: _propTypes["default"].any
  })
};
Dropdown.defaultProps = {
  children: undefined,
  container: undefined,
  inputContainer: undefined,
  styles: function styles(_styles) {
    return _styles;
  },
  className: undefined,
  forwardedRef: undefined
};

var _default = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Dropdown, _extends({}, props, {
    forwardedRef: ref
  }));
});

exports["default"] = _default;