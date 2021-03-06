import shallowCompare from "react-addons-shallow-compare";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger, or } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import moment from 'moment';
import { CalendarDayPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import getCalendarDaySettings from '../utils/getCalendarDaySettings';
import { DAY_SIZE } from '../constants';
import DefaultTheme from '../theme/DefaultTheme';
var color = DefaultTheme.reactDates.color;

function getStyles(stylesObj, isHovered) {
  if (!stylesObj) return null;
  var hover = stylesObj.hover;

  if (isHovered && hover) {
    return hover;
  }

  return stylesObj;
}

var DayStyleShape = process.env.NODE_ENV !== "production" ? PropTypes.shape({
  background: PropTypes.string,
  border: or([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  hover: PropTypes.shape({
    background: PropTypes.string,
    border: or([PropTypes.string, PropTypes.number]),
    color: PropTypes.string
  })
}) : {};
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps(_objectSpread({}, withStylesPropTypes, {
  day: momentPropTypes.momentObj,
  daySize: nonNegativeInteger,
  isOutsideDay: PropTypes.bool,
  modifiers: PropTypes.instanceOf(Set),
  isFocused: PropTypes.bool,
  tabIndex: PropTypes.oneOf([0, -1]),
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  renderDayContents: PropTypes.func,
  ariaLabelFormat: PropTypes.string,
  // style overrides
  defaultStyles: DayStyleShape,
  outsideStyles: DayStyleShape,
  todayStyles: DayStyleShape,
  firstDayOfWeekStyles: DayStyleShape,
  lastDayOfWeekStyles: DayStyleShape,
  highlightedCalendarStyles: DayStyleShape,
  blockedMinNightsStyles: DayStyleShape,
  blockedCalendarStyles: DayStyleShape,
  blockedOutOfRangeStyles: DayStyleShape,
  hoveredSpanStyles: DayStyleShape,
  selectedSpanStyles: DayStyleShape,
  lastInRangeStyles: DayStyleShape,
  selectedStyles: DayStyleShape,
  selectedStartStyles: DayStyleShape,
  selectedEndStyles: DayStyleShape,
  afterHoveredStartStyles: DayStyleShape,
  // internationalization
  phrases: PropTypes.shape(getPhrasePropTypes(CalendarDayPhrases))
})) : {};
export var defaultStyles = {
  border: "1px solid ".concat(color.core.borderLight),
  color: color.text,
  background: color.background,
  hover: {
    background: color.core.borderLight,
    border: "1px solid ".concat(color.core.borderLight),
    color: 'inherit'
  }
};
export var outsideStyles = {
  background: color.outside.backgroundColor,
  border: 0,
  color: color.outside.color
};
export var highlightedCalendarStyles = {
  background: color.highlighted.backgroundColor,
  color: color.highlighted.color,
  hover: {
    background: color.highlighted.backgroundColor_hover,
    color: color.highlighted.color_active
  }
};
export var blockedMinNightsStyles = {
  background: color.minimumNights.backgroundColor,
  border: "1px solid ".concat(color.minimumNights.borderColor),
  color: color.minimumNights.color,
  hover: {
    background: color.minimumNights.backgroundColor_hover,
    color: color.minimumNights.color_active
  }
};
export var blockedCalendarStyles = {
  background: color.blocked_calendar.backgroundColor,
  border: "1px solid ".concat(color.blocked_calendar.borderColor),
  color: color.blocked_calendar.color,
  hover: {
    background: color.blocked_calendar.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_calendar.borderColor),
    color: color.blocked_calendar.color_active
  }
};
export var blockedOutOfRangeStyles = {
  background: color.blocked_out_of_range.backgroundColor,
  border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
  color: color.blocked_out_of_range.color,
  hover: {
    background: color.blocked_out_of_range.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
    color: color.blocked_out_of_range.color_active
  }
};
export var hoveredSpanStyles = {
  background: color.hoveredSpan.backgroundColor,
  border: "1px double ".concat(color.hoveredSpan.borderColor),
  color: color.hoveredSpan.color,
  hover: {
    background: color.hoveredSpan.backgroundColor_hover,
    border: "1px double ".concat(color.hoveredSpan.borderColor),
    color: color.hoveredSpan.color_active
  }
};
export var selectedSpanStyles = {
  background: color.selectedSpan.backgroundColor,
  border: "1px double ".concat(color.selectedSpan.borderColor),
  color: color.selectedSpan.color,
  hover: {
    background: color.selectedSpan.backgroundColor_hover,
    border: "1px double ".concat(color.selectedSpan.borderColor),
    color: color.selectedSpan.color_active
  }
};
export var lastInRangeStyles = {
  borderStyle: 'solid',
  hover: {
    borderStyle: 'solid'
  }
};
export var selectedStyles = {
  background: color.selected.backgroundColor,
  border: "1px double ".concat(color.selected.borderColor),
  color: color.selected.color,
  hover: {
    background: color.selected.backgroundColor_hover,
    border: "1px double ".concat(color.selected.borderColor),
    color: color.selected.color_active
  }
};
var defaultProps = {
  day: moment(),
  daySize: DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // style defaults
  defaultStyles: defaultStyles,
  outsideStyles: outsideStyles,
  todayStyles: {},
  highlightedCalendarStyles: highlightedCalendarStyles,
  blockedMinNightsStyles: blockedMinNightsStyles,
  blockedCalendarStyles: blockedCalendarStyles,
  blockedOutOfRangeStyles: blockedOutOfRangeStyles,
  hoveredSpanStyles: hoveredSpanStyles,
  selectedSpanStyles: selectedSpanStyles,
  lastInRangeStyles: lastInRangeStyles,
  selectedStyles: selectedStyles,
  selectedStartStyles: {},
  selectedEndStyles: {},
  afterHoveredStartStyles: {},
  firstDayOfWeekStyles: {},
  lastDayOfWeekStyles: {},
  // internationalization
  phrases: CalendarDayPhrases
};

var CustomizableCalendarDay =
/*#__PURE__*/
function (_ref) {
  _inherits(CustomizableCalendarDay, _ref);

  _createClass(CustomizableCalendarDay, [{
    key: !React.PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
  }]);

  function CustomizableCalendarDay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomizableCalendarDay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomizableCalendarDay)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isHovered: false
    };
    _this.setButtonRef = _this.setButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CustomizableCalendarDay, [{
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
    key: "onDayClick",
    value: function onDayClick(day, e) {
      var onDayClick = this.props.onDayClick;
      onDayClick(day, e);
    }
  }, {
    key: "onDayMouseEnter",
    value: function onDayMouseEnter(day, e) {
      var onDayMouseEnter = this.props.onDayMouseEnter;
      this.setState({
        isHovered: true
      });
      onDayMouseEnter(day, e);
    }
  }, {
    key: "onDayMouseLeave",
    value: function onDayMouseLeave(day, e) {
      var onDayMouseLeave = this.props.onDayMouseLeave;
      this.setState({
        isHovered: false
      });
      onDayMouseLeave(day, e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(day, e) {
      var onDayClick = this.props.onDayClick;
      var key = e.key;

      if (key === 'Enter' || key === ' ') {
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
          tabIndex = _this$props2.tabIndex,
          renderDayContents = _this$props2.renderDayContents,
          styles = _this$props2.styles,
          phrases = _this$props2.phrases,
          defaultStylesWithHover = _this$props2.defaultStyles,
          outsideStylesWithHover = _this$props2.outsideStyles,
          todayStylesWithHover = _this$props2.todayStyles,
          firstDayOfWeekStylesWithHover = _this$props2.firstDayOfWeekStyles,
          lastDayOfWeekStylesWithHover = _this$props2.lastDayOfWeekStyles,
          highlightedCalendarStylesWithHover = _this$props2.highlightedCalendarStyles,
          blockedMinNightsStylesWithHover = _this$props2.blockedMinNightsStyles,
          blockedCalendarStylesWithHover = _this$props2.blockedCalendarStyles,
          blockedOutOfRangeStylesWithHover = _this$props2.blockedOutOfRangeStyles,
          hoveredSpanStylesWithHover = _this$props2.hoveredSpanStyles,
          selectedSpanStylesWithHover = _this$props2.selectedSpanStyles,
          lastInRangeStylesWithHover = _this$props2.lastInRangeStyles,
          selectedStylesWithHover = _this$props2.selectedStyles,
          selectedStartStylesWithHover = _this$props2.selectedStartStyles,
          selectedEndStylesWithHover = _this$props2.selectedEndStyles,
          afterHoveredStartStylesWithHover = _this$props2.afterHoveredStartStyles;
      var isHovered = this.state.isHovered;
      if (!day) return React.createElement("td", null);

      var _getCalendarDaySettin = getCalendarDaySettings(day, ariaLabelFormat, daySize, modifiers, phrases),
          daySizeStyles = _getCalendarDaySettin.daySizeStyles,
          useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
          selected = _getCalendarDaySettin.selected,
          hoveredSpan = _getCalendarDaySettin.hoveredSpan,
          isOutsideRange = _getCalendarDaySettin.isOutsideRange,
          ariaLabel = _getCalendarDaySettin.ariaLabel;

      return React.createElement("td", _extends({}, css(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, daySizeStyles, getStyles(defaultStylesWithHover, isHovered), isOutsideDay && getStyles(outsideStylesWithHover, isHovered), modifiers.has('today') && getStyles(todayStylesWithHover, isHovered), modifiers.has('first-day-of-week') && getStyles(firstDayOfWeekStylesWithHover, isHovered), modifiers.has('last-day-of-week') && getStyles(lastDayOfWeekStylesWithHover, isHovered), modifiers.has('highlighted-calendar') && getStyles(highlightedCalendarStylesWithHover, isHovered), modifiers.has('blocked-minimum-nights') && getStyles(blockedMinNightsStylesWithHover, isHovered), modifiers.has('blocked-calendar') && getStyles(blockedCalendarStylesWithHover, isHovered), hoveredSpan && getStyles(hoveredSpanStylesWithHover, isHovered), modifiers.has('after-hovered-start') && getStyles(afterHoveredStartStylesWithHover, isHovered), modifiers.has('selected-span') && getStyles(selectedSpanStylesWithHover, isHovered), modifiers.has('last-in-range') && getStyles(lastInRangeStylesWithHover, isHovered), selected && getStyles(selectedStylesWithHover, isHovered), modifiers.has('selected-start') && getStyles(selectedStartStylesWithHover, isHovered), modifiers.has('selected-end') && getStyles(selectedEndStylesWithHover, isHovered), isOutsideRange && getStyles(blockedOutOfRangeStylesWithHover, isHovered)), {
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
      }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
    }
  }]);

  return CustomizableCalendarDay;
}(React.PureComponent || React.Component);

CustomizableCalendarDay.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CustomizableCalendarDay.defaultProps = defaultProps;
export { CustomizableCalendarDay as PureCustomizableCalendarDay };
export default withStyles(function (_ref2) {
  var font = _ref2.reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    }
  };
}, {
  pureComponent: typeof React.PureComponent !== 'undefined'
})(CustomizableCalendarDay);