"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(require("react"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Arrow = function Arrow(_ref) {
  var arrowsScroll = _ref.arrowsScroll,
    clickHandler = _ref.clickHandler,
    type = _ref.type,
    prevArrow = _ref.prevArrow,
    nextArrow = _ref.nextArrow,
    arrowsdiv = _ref.arrowsdiv;
  var ClickHandler = function ClickHandler(options, e) {
    e.preventDefault();
    clickHandler(options, e);
  };
  var classes = {
    'carousel-arrow': true,
    'block': arrowsdiv
  };
  var arrowOptions = {
    arrowsScroll: arrowsScroll
  };
  if (type === 'prev') {
    Object.assign(classes, {
      'carousel-prev': true
    });
    if (prevArrow) {
      Object.assign(classes, {
        custom: true
      });
    }
    Object.assign(arrowOptions, {
      message: 'previous'
    });
  } else {
    Object.assign(classes, {
      'carousel-next': true
    });
    if (nextArrow) {
      Object.assign(classes, {
        custom: true
      });
    }
    Object.assign(arrowOptions, {
      message: 'next'
    });
  }
  var arrowProps = {
    'key': type === 'prev' ? 'carousel-arrow-left' : 'carousel-arrow-right',
    'data-qa': type === 'prev' ? 'carousel-arrow-left' : 'carousel-arrow-right',
    'className': "carousel-arrow carousel-arrow-".concat(type === 'prev' ? 'left' : 'right'),
    'onClick': function onClick(e) {
      return ClickHandler(arrowOptions, e);
    }
  };
  // const customProps = {
  //   currentSlide,
  //   slideCount,
  // };
  if (type === 'prev') {
    return /*#__PURE__*/_react["default"].createElement("span", arrowProps, /*#__PURE__*/_react["default"].createElement("svg", {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
    })));
  }
  return /*#__PURE__*/_react["default"].createElement("span", arrowProps, /*#__PURE__*/_react["default"].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })));
};
Arrow.propTypes = _types.arrowsPropTypes;
Arrow.defaultProps = _types.arrowsDefaultProps;
var PrevArrow = function PrevArrow(props) {
  return /*#__PURE__*/_react["default"].createElement(Arrow, _extends({
    key: "prevArrow",
    type: "prev"
  }, props));
};
exports.PrevArrow = PrevArrow;
var NextArrow = function NextArrow(props) {
  return /*#__PURE__*/_react["default"].createElement(Arrow, _extends({
    key: "nextArrow",
    type: "next"
  }, props));
};
exports.NextArrow = NextArrow;