"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureCalendarDay = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _moment = _interopRequireDefault(require("moment"));

var _defaultPhrases = require("../defaultPhrases");

var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));

var _getCalendarDaySettings = _interopRequireDefault(require("../utils/getCalendarDaySettings"));

var _ModifiersShape = _interopRequireDefault(require("../shapes/ModifiersShape"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function eqSet(as, bs) {
  if (as.size !== bs.size) return false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = as[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var a = _step.value;
      if (!bs.has(a)) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    if (x.size && y.size) {
      return eqSet(x, y);
    } // Step 6.a: NaN == NaN


    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (_typeof(objA) !== "object" || objA === null || _typeof(objB) !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  day: _reactMomentProptypes["default"].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes["default"].bool,
  modifiers: _ModifiersShape["default"],
  isFocused: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOf([0, -1]),
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  ariaLabelFormat: _propTypes["default"].string,
  // internationalization
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases))
})) : {};
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  renderDayContents: null,
  ariaLabelFormat: "dddd, LL",
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarDay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarDay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarDay)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.setButtonRef = _this.setButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CalendarDay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isFocused = _this$props.isFocused,
          tabIndex = _this$props.tabIndex;

      if (tabIndex === 0) {
        if (isFocused || tabIndex !== prevProps.tabIndex) {
          this.buttonRef.focus();
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var compare = shallowCompare(this, nextProps, nextState);
      return compare;
    }
  }, {
    key: "onDayClick",
    value: function onDayClick(day, e) {
      var onDayClick = this.props.onDayClick;
      onDayClick(day, e);
    }
  }, {
    key: "onDayMouseEnter",
    value: function onDayMouseEnter(day, e) {
      var onDayMouseEnter = this.props.onDayMouseEnter;
      onDayMouseEnter(day, e);
    }
  }, {
    key: "onDayMouseLeave",
    value: function onDayMouseLeave(day, e) {
      var onDayMouseLeave = this.props.onDayMouseLeave;
      onDayMouseLeave(day, e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(day, e) {
      var onDayClick = this.props.onDayClick;
      var key = e.key;

      if (key === "Enter" || key === " ") {
        onDayClick(day, e);
      }
    }
  }, {
    key: "setButtonRef",
    value: function setButtonRef(ref) {
      this.buttonRef = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          day = _this$props2.day,
          ariaLabelFormat = _this$props2.ariaLabelFormat,
          daySize = _this$props2.daySize,
          isOutsideDay = _this$props2.isOutsideDay,
          modifiers = _this$props2.modifiers,
          renderDayContents = _this$props2.renderDayContents,
          tabIndex = _this$props2.tabIndex,
          styles = _this$props2.styles,
          phrases = _this$props2.phrases;
      if (!day) return _react["default"].createElement("td", null);

      var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
          daySizeStyles = _getCalendarDaySettin.daySizeStyles,
          useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
          selected = _getCalendarDaySettin.selected,
          hoveredSpan = _getCalendarDaySettin.hoveredSpan,
          isOutsideRange = _getCalendarDaySettin.isOutsideRange,
          ariaLabel = _getCalendarDaySettin.ariaLabel;

      return _react["default"].createElement("td", _extends({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, styles.CalendarDay__default, isOutsideDay && styles.CalendarDay__outside, modifiers.has("today") && styles.CalendarDay__today, modifiers.has("first-day-of-week") && styles.CalendarDay__firstDayOfWeek, modifiers.has("last-day-of-week") && styles.CalendarDay__lastDayOfWeek, modifiers.has("hovered-offset") && styles.CalendarDay__hovered_offset, modifiers.has("highlighted-calendar") && styles.CalendarDay__highlighted_calendar, modifiers.has("blocked-minimum-nights") && styles.CalendarDay__blocked_minimum_nights, modifiers.has("blocked-calendar") && styles.CalendarDay__blocked_calendar, hoveredSpan && styles.CalendarDay__hovered_span, modifiers.has("selected-span") && styles.CalendarDay__selected_span, modifiers.has("last-in-range") && styles.CalendarDay__last_in_range, modifiers.has("selected-start") && styles.CalendarDay__selected_start, modifiers.has("selected-end") && styles.CalendarDay__selected_end, selected && styles.CalendarDay__selected, isOutsideRange && styles.CalendarDay__blocked_out_of_range, daySizeStyles), {
        role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
        ,
        ref: this.setButtonRef,
        "aria-label": ariaLabel,
        onMouseEnter: function onMouseEnter(e) {
          _this2.onDayMouseEnter(day, e);
        },
        onMouseLeave: function onMouseLeave(e) {
          _this2.onDayMouseLeave(day, e);
        },
        onMouseUp: function onMouseUp(e) {
          e.currentTarget.blur();
        },
        onClick: function onClick(e) {
          _this2.onDayClick(day, e);
        },
        onKeyDown: function onKeyDown(e) {
          _this2.onKeyDown(day, e);
        },
        tabIndex: tabIndex
      }), renderDayContents ? renderDayContents(day, modifiers) : day.format("D"));
    }
  }]);

  return CalendarDay;
}(_react["default"].Component);

exports.PureCalendarDay = CalendarDay;
CalendarDay.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CalendarDay.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      color = _ref$reactDates.color,
      font = _ref$reactDates.font;
  return {
    CalendarDay: {
      boxSizing: "border-box",
      cursor: "pointer",
      fontSize: font.size,
      textAlign: "center",
      ":active": {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: "default"
    },
    CalendarDay__default: {
      border: "1px solid ".concat(color.core.borderLight),
      color: color.text,
      background: color.background,
      ":hover": {
        background: color.core.borderLight,
        border: "1px solid ".concat(color.core.borderLight),
        color: "inherit"
      }
    },
    CalendarDay__hovered_offset: {
      background: color.core.borderBright,
      border: "1px double ".concat(color.core.borderLight),
      color: "inherit"
    },
    CalendarDay__outside: {
      border: 0,
      background: color.outside.backgroundColor,
      color: color.outside.color,
      ":hover": {
        border: 0
      }
    },
    CalendarDay__blocked_minimum_nights: {
      background: color.minimumNights.backgroundColor,
      border: "1px solid ".concat(color.minimumNights.borderColor),
      color: color.minimumNights.color,
      ":hover": {
        background: color.minimumNights.backgroundColor_hover,
        color: color.minimumNights.color_active
      },
      ":active": {
        background: color.minimumNights.backgroundColor_active,
        color: color.minimumNights.color_active
      }
    },
    CalendarDay__highlighted_calendar: {
      background: color.highlighted.backgroundColor,
      color: color.highlighted.color,
      ":hover": {
        background: color.highlighted.backgroundColor_hover,
        color: color.highlighted.color_active
      },
      ":active": {
        background: color.highlighted.backgroundColor_active,
        color: color.highlighted.color_active
      }
    },
    CalendarDay__selected_span: {
      background: color.selectedSpan.backgroundColor,
      border: "1px double ".concat(color.selectedSpan.borderColor),
      color: color.selectedSpan.color,
      ":hover": {
        background: color.selectedSpan.backgroundColor_hover,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      },
      ":active": {
        background: color.selectedSpan.backgroundColor_active,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      }
    },
    CalendarDay__last_in_range: {
      borderStyle: "solid",
      ":hover": {
        borderStyle: "solid"
      }
    },
    CalendarDay__selected: {
      background: color.selected.backgroundColor,
      border: "1px double ".concat(color.selected.borderColor),
      color: color.selected.color,
      ":hover": {
        background: color.selected.backgroundColor_hover,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      },
      ":active": {
        background: color.selected.backgroundColor_active,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      }
    },
    CalendarDay__hovered_span: {
      background: color.hoveredSpan.backgroundColor,
      border: "1px double ".concat(color.hoveredSpan.borderColor),
      color: color.hoveredSpan.color,
      ":hover": {
        background: color.hoveredSpan.backgroundColor_hover,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      },
      ":active": {
        background: color.hoveredSpan.backgroundColor_active,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      }
    },
    CalendarDay__blocked_calendar: {
      background: color.blocked_calendar.backgroundColor,
      border: "1px solid ".concat(color.blocked_calendar.borderColor),
      color: color.blocked_calendar.color,
      ":hover": {
        background: color.blocked_calendar.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      },
      ":active": {
        background: color.blocked_calendar.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      }
    },
    CalendarDay__blocked_out_of_range: {
      background: color.blocked_out_of_range.backgroundColor,
      border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
      color: color.blocked_out_of_range.color,
      ":hover": {
        background: color.blocked_out_of_range.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      },
      ":active": {
        background: color.blocked_out_of_range.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      }
    },
    CalendarDay__selected_start: {},
    CalendarDay__selected_end: {},
    CalendarDay__today: {},
    CalendarDay__firstDayOfWeek: {},
    CalendarDay__lastDayOfWeek: {}
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== "undefined"
})(CalendarDay);

exports["default"] = _default;