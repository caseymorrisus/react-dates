function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { DayPickerNavigationPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import noflip from '../utils/noflip';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import ChevronUp from './ChevronUp';
import ChevronDown from './ChevronDown';
import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';
import { HORIZONTAL_ORIENTATION, VERTICAL_SCROLLABLE } from '../constants';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps(_objectSpread({}, withStylesPropTypes, {
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool,
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  orientation: ScrollableOrientationShape,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  // internationalization
  phrases: PropTypes.shape(getPhrasePropTypes(DayPickerNavigationPhrases)),
  isRTL: PropTypes.bool
})) : {};
var defaultProps = {
  disablePrev: false,
  disableNext: false,
  navPrev: null,
  navNext: null,
  orientation: HORIZONTAL_ORIENTATION,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  // internationalization
  phrases: DayPickerNavigationPhrases,
  isRTL: false
};

function DayPickerNavigation(_ref) {
  var disablePrev = _ref.disablePrev,
      disableNext = _ref.disableNext,
      navPrev = _ref.navPrev,
      navNext = _ref.navNext,
      onPrevMonthClick = _ref.onPrevMonthClick,
      onNextMonthClick = _ref.onNextMonthClick,
      orientation = _ref.orientation,
      phrases = _ref.phrases,
      isRTL = _ref.isRTL,
      styles = _ref.styles;
  var isHorizontal = orientation === HORIZONTAL_ORIENTATION;
  var isVertical = orientation !== HORIZONTAL_ORIENTATION;
  var isVerticalScrollable = orientation === VERTICAL_SCROLLABLE;
  var navPrevIcon = navPrev;
  var navNextIcon = navNext;
  var isDefaultNavPrev = false;
  var isDefaultNavNext = false;

  if (!navPrevIcon) {
    isDefaultNavPrev = true;
    var Icon = isVertical ? ChevronUp : LeftArrow;

    if (isRTL && !isVertical) {
      Icon = RightArrow;
    }

    navPrevIcon = React.createElement(Icon, css(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disablePrev && styles.DayPickerNavigation_svg__disabled));
  }

  if (!navNextIcon) {
    isDefaultNavNext = true;

    var _Icon = isVertical ? ChevronDown : RightArrow;

    if (isRTL && !isVertical) {
      _Icon = LeftArrow;
    }

    navNextIcon = React.createElement(_Icon, css(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disableNext && styles.DayPickerNavigation_svg__disabled));
  }

  var isDefaultNav = isVerticalScrollable ? isDefaultNavNext : isDefaultNavNext || isDefaultNavPrev;
  return React.createElement("div", css.apply(void 0, [styles.DayPickerNavigation, isHorizontal && styles.DayPickerNavigation__horizontal].concat(_toConsumableArray(isVertical ? [styles.DayPickerNavigation__vertical, isDefaultNav && styles.DayPickerNavigation__verticalDefault] : []), _toConsumableArray(isVerticalScrollable ? [styles.DayPickerNavigation__verticalScrollable, isDefaultNav && styles.DayPickerNavigation__verticalScrollableDefault] : []))), !isVerticalScrollable && React.createElement("div", _extends({
    role: "button",
    tabIndex: "0"
  }, css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavPrev && styles.DayPickerNavigation_button__default, disablePrev && styles.DayPickerNavigation_button__disabled].concat(_toConsumableArray(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat(_toConsumableArray(isDefaultNavPrev ? [styles.DayPickerNavigation_button__horizontalDefault, !isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), _toConsumableArray(isVertical ? [styles.DayPickerNavigation_button__vertical].concat(_toConsumableArray(isDefaultNavPrev ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_prevButton__verticalDefault] : [])) : []))), {
    "aria-disabled": disablePrev ? true : undefined,
    "aria-label": phrases.jumpToPrevMonth,
    onClick: disablePrev ? undefined : onPrevMonthClick,
    onKeyUp: disablePrev ? undefined : function (e) {
      var key = e.key;
      if (key === 'Enter' || key === ' ') onPrevMonthClick(e);
    },
    onMouseUp: disablePrev ? undefined : function (e) {
      e.currentTarget.blur();
    }
  }), navPrevIcon), React.createElement("div", _extends({
    role: "button",
    tabIndex: "0"
  }, css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavNext && styles.DayPickerNavigation_button__default, disableNext && styles.DayPickerNavigation_button__disabled].concat(_toConsumableArray(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat(_toConsumableArray(isDefaultNavNext ? [styles.DayPickerNavigation_button__horizontalDefault, isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, !isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), _toConsumableArray(isVertical ? [styles.DayPickerNavigation_button__vertical, styles.DayPickerNavigation_nextButton__vertical].concat(_toConsumableArray(isDefaultNavNext ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_nextButton__verticalDefault, isVerticalScrollable && styles.DayPickerNavigation_nextButton__verticalScrollableDefault] : [])) : []))), {
    "aria-disabled": disableNext ? true : undefined,
    "aria-label": phrases.jumpToNextMonth,
    onClick: disableNext ? undefined : onNextMonthClick,
    onKeyUp: disableNext ? undefined : function (e) {
      var key = e.key;
      if (key === 'Enter' || key === ' ') onNextMonthClick(e);
    },
    onMouseUp: disableNext ? undefined : function (e) {
      e.currentTarget.blur();
    }
  }), navNextIcon));
}

DayPickerNavigation.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DayPickerNavigation.defaultProps = defaultProps;
export default withStyles(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DayPickerNavigation: {
      position: 'relative',
      zIndex: zIndex + 2
    },
    DayPickerNavigation__horizontal: {
      height: 0
    },
    DayPickerNavigation__vertical: {},
    DayPickerNavigation__verticalScrollable: {},
    DayPickerNavigation__verticalDefault: {
      position: 'absolute',
      width: '100%',
      height: 52,
      bottom: 0,
      left: noflip(0)
    },
    DayPickerNavigation__verticalScrollableDefault: {
      position: 'relative'
    },
    DayPickerNavigation_button: {
      cursor: 'pointer',
      userSelect: 'none',
      border: 0,
      padding: 0,
      margin: 0
    },
    DayPickerNavigation_button__default: {
      border: "1px solid ".concat(color.core.borderLight),
      backgroundColor: color.background,
      color: color.placeholderText,
      ':focus': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':hover': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':active': {
        background: color.backgroundDark
      }
    },
    DayPickerNavigation_button__disabled: {
      cursor: 'default',
      border: "1px solid ".concat(color.disabled),
      ':focus': {
        border: "1px solid ".concat(color.disabled)
      },
      ':hover': {
        border: "1px solid ".concat(color.disabled)
      },
      ':active': {
        background: 'none'
      }
    },
    DayPickerNavigation_button__horizontal: {},
    DayPickerNavigation_button__horizontalDefault: {
      position: 'absolute',
      top: 18,
      lineHeight: 0.78,
      borderRadius: 3,
      padding: '6px 9px'
    },
    DayPickerNavigation_leftButton__horizontalDefault: {
      left: noflip(22)
    },
    DayPickerNavigation_rightButton__horizontalDefault: {
      right: noflip(22)
    },
    DayPickerNavigation_button__vertical: {},
    DayPickerNavigation_button__verticalDefault: {
      padding: 5,
      background: color.background,
      boxShadow: noflip('0 0 5px 2px rgba(0, 0, 0, 0.1)'),
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center',
      height: '100%',
      width: '50%'
    },
    DayPickerNavigation_prevButton__verticalDefault: {},
    DayPickerNavigation_nextButton__verticalDefault: {
      borderLeft: noflip(0)
    },
    DayPickerNavigation_nextButton__verticalScrollableDefault: {
      width: '100%'
    },
    DayPickerNavigation_svg__horizontal: {
      height: 19,
      width: 19,
      fill: color.core.grayLight,
      display: 'block'
    },
    DayPickerNavigation_svg__vertical: {
      height: 42,
      width: 42,
      fill: color.text
    },
    DayPickerNavigation_svg__disabled: {
      fill: color.disabled
    }
  };
}, {
  pureComponent: typeof React.PureComponent !== 'undefined'
})(DayPickerNavigation);