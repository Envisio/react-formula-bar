"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = require("./Header");
require("./page.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Page = exports.Page = function Page() {
  var _React$useState = _react["default"].useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    user = _React$useState2[0],
    setUser = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("article", null, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
    user: user,
    onLogin: function onLogin() {
      return setUser({
        name: 'Jane Doe'
      });
    },
    onLogout: function onLogout() {
      return setUser(undefined);
    },
    onCreateAccount: function onCreateAccount() {
      return setUser({
        name: 'Jane Doe'
      });
    }
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "storybook-page"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Pages in Storybook"), /*#__PURE__*/_react["default"].createElement("p", null, "We recommend building UIs with a", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://componentdriven.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "component-driven")), ' ', "process starting with atomic components and ending with pages."), /*#__PURE__*/_react["default"].createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"), /*#__PURE__*/_react["default"].createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")), /*#__PURE__*/_react["default"].createElement("p", null, "Get a guided tutorial on component-driven development at", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://storybook.js.org/tutorials/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Storybook tutorials"), ". Read more in the", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://storybook.js.org/docs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "docs"), "."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tip-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tip"
  }, "Tip"), " Adjust the width of the canvas with the", ' ', /*#__PURE__*/_react["default"].createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
    id: "a",
    fill: "#999"
  }))), "Viewports addon in the toolbar")));
};