"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dropdown;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var INPUT_MARGIN = 4;
var MARGIN = 5;
var MAX_HEIGHT = 300;
var MIN_HEIGHT = 100;
var MAX_WIDTH = 700;

function Dropdown(_ref) {
  var container = _ref.container,
      inputContainer = _ref.inputContainer,
      children = _ref.children,
      className = _ref.className,
      styles = _ref.styles,
      isOpen = _ref.isOpen;

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
      className: className,
      style: styles({
        display: isOpen ? 'block' : 'none',
        top: bottom + INPUT_MARGIN,
        left: left,
        position: 'absolute',
        maxHeight: maxContainerHeight,
        maxWidth: maxContainerWidth,
        minHeight: MIN_HEIGHT,
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
        borderColor: 'dimgray',
        borderWidth: '1px',
        borderStyle: 'solid',
        overflow: 'hidden'
      })
    }, children);

    return (0, _reactDom.createPortal)(dropdown, container);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: styles({
      display: isOpen ? 'block' : 'none',
      top: '38px',
      left: '0px',
      position: 'absolute',
      maxHeight: maxContainerHeight,
      maxWidth: maxContainerWidth,
      minHeight: MIN_HEIGHT,
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
  isOpen: _propTypes["default"].bool.isRequired
};
Dropdown.defaultProps = {
  children: undefined,
  container: undefined,
  inputContainer: undefined,
  styles: function styles(_styles) {
    return _styles;
  },
  className: undefined
};