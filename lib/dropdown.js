"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var _default = exports["default"] = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Dropdown, _extends({}, props, {
    forwardedRef: ref
  }));
});