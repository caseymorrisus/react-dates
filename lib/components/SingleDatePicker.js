"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureSingleDatePicker = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactWithStyles = require("react-with-styles");

var _reactPortal = require("react-portal");

var _airbnbPropTypes = require("airbnb-prop-types");

var _consolidatedEvents = require("consolidated-events");

var _isTouchDevice = _interopRequireDefault(require("is-touch-device"));

var _reactOutsideClickHandler = _interopRequireDefault(require("react-outside-click-handler"));

var _SingleDatePickerShape = _interopRequireDefault(require("../shapes/SingleDatePickerShape"));

var _defaultPhrases = require("../defaultPhrases");

var _getResponsiveContainerStyles = _interopRequireDefault(require("../utils/getResponsiveContainerStyles"));

var _getDetachedContainerStyles = _interopRequireDefault(require("../utils/getDetachedContainerStyles"));

var _getInputHeight = _interopRequireDefault(require("../utils/getInputHeight"));

var _isInclusivelyAfterDay = _interopRequireDefault(require("../utils/isInclusivelyAfterDay"));

var _disableScroll2 = _interopRequireDefault(require("../utils/disableScroll"));

var _noflip = _interopRequireDefault(require("../utils/noflip"));

var _SingleDatePickerInputController = _interopRequireDefault(require("./SingleDatePickerInputController"));

var _DayPickerSingleDateController = _interopRequireDefault(require("./DayPickerSingleDateController"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, _SingleDatePickerShape["default"])) : {};
var defaultProps = {
  // required props for a functional interactive SingleDatePicker
  date: null,
  focused: false,
  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // month presentation and interaction related props
  renderMonthText: null,
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked() {
    return false;
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  isDayHighlighted: function isDayHighlighted() {},
  // internationalization props
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.SingleDatePickerPhrases,
  dayAriaLabelFormat: undefined
};

var SingleDatePicker =
/*#__PURE__*/
function (_ref) {
  _inherits(SingleDatePicker, _ref);

  _createClass(SingleDatePicker, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }]);

  function SingleDatePicker(props) {
    var _this;

    _classCallCheck(this, SingleDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleDatePicker).call(this, props));
    _this.isTouchDevice = false;
    _this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false,
      showKeyboardShortcuts: false
    };
    _this.onOutsideClick = _this.onOutsideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.disableScroll = _this.disableScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /* istanbul ignore next */


  _createClass(SingleDatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.removeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
        passive: true
      });
      this.responsivizePickerPosition();
      this.disableScroll();
      var focused = this.props.focused;

      if (focused) {
        this.setState({
          isInputFocused: true
        });
      }

      this.isTouchDevice = (0, _isTouchDevice["default"])();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var focused = this.props.focused;

      if (!prevProps.focused && focused) {
        this.responsivizePickerPosition();
        this.disableScroll();
      } else if (prevProps.focused && !focused) {
        if (this.enableScroll) this.enableScroll();
      }
    }
    /* istanbul ignore next */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.removeEventListener) this.removeEventListener();
      if (this.enableScroll) this.enableScroll();
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(event) {
      var _this$props = this.props,
          focused = _this$props.focused,
          onFocusChange = _this$props.onFocusChange,
          onClose = _this$props.onClose,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          appendToBody = _this$props.appendToBody;
      if (!focused) return;
      if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
      this.setState({
        isInputFocused: false,
        isDayPickerFocused: false,
        showKeyboardShortcuts: false
      });
      onFocusChange({
        focused: false
      });
      onClose({
        startDate: startDate,
        endDate: endDate
      });
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(_ref2) {
      var focused = _ref2.focused;
      var _this$props2 = this.props,
          onFocusChange = _this$props2.onFocusChange,
          readOnly = _this$props2.readOnly,
          withPortal = _this$props2.withPortal,
          withFullScreenPortal = _this$props2.withFullScreenPortal,
          keepFocusOnInput = _this$props2.keepFocusOnInput;

      if (focused) {
        var withAnyPortal = withPortal || withFullScreenPortal;
        var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

        if (moveFocusToDayPicker) {
          this.onDayPickerFocus();
        } else {
          this.onDayPickerBlur();
        }
      }

      onFocusChange({
        focused: focused
      });
    }
  }, {
    key: "onDayPickerFocus",
    value: function onDayPickerFocus() {
      this.setState({
        isInputFocused: false,
        isDayPickerFocused: true,
        showKeyboardShortcuts: false
      });
    }
  }, {
    key: "onDayPickerBlur",
    value: function onDayPickerBlur() {
      this.setState({
        isInputFocused: true,
        isDayPickerFocused: false,
        showKeyboardShortcuts: false
      });
    }
  }, {
    key: "setDayPickerContainerRef",
    value: function setDayPickerContainerRef(ref) {
      this.dayPickerContainer = ref;
    }
  }, {
    key: "setContainerRef",
    value: function setContainerRef(ref) {
      this.container = ref;
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      var _this$props3 = this.props,
          appendToBody = _this$props3.appendToBody,
          propDisableScroll = _this$props3.disableScroll,
          focused = _this$props3.focused;
      if (!appendToBody && !propDisableScroll) return;
      if (!focused) return; // Disable scroll for every ancestor of this <SingleDatePicker> up to the
      // document level. This ensures the input and the picker never move. Other
      // sibling elements or the picker itself can scroll.

      this.enableScroll = (0, _disableScroll2["default"])(this.container);
    }
    /* istanbul ignore next */

  }, {
    key: "responsivizePickerPosition",
    value: function responsivizePickerPosition() {
      // It's possible the portal props have been changed in response to window resizes
      // So let's ensure we reset this back to the base state each time
      this.setState({
        dayPickerContainerStyles: {}
      });
      var _this$props4 = this.props,
          openDirection = _this$props4.openDirection,
          anchorDirection = _this$props4.anchorDirection,
          horizontalMargin = _this$props4.horizontalMargin,
          withPortal = _this$props4.withPortal,
          withFullScreenPortal = _this$props4.withFullScreenPortal,
          appendToBody = _this$props4.appendToBody,
          focused = _this$props4.focused;
      var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

      if (!focused) {
        return;
      }

      var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

      if (!withPortal && !withFullScreenPortal) {
        var containerRect = this.dayPickerContainer.getBoundingClientRect();
        var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
        var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
        this.setState({
          dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
        });
      }
    }
  }, {
    key: "showKeyboardShortcutsPanel",
    value: function showKeyboardShortcutsPanel() {
      this.setState({
        isInputFocused: false,
        isDayPickerFocused: true,
        showKeyboardShortcuts: true
      });
    }
  }, {
    key: "maybeRenderDayPickerWithPortal",
    value: function maybeRenderDayPickerWithPortal() {
      var _this$props5 = this.props,
          focused = _this$props5.focused,
          withPortal = _this$props5.withPortal,
          withFullScreenPortal = _this$props5.withFullScreenPortal,
          appendToBody = _this$props5.appendToBody;

      if (!focused) {
        return null;
      }

      if (withPortal || withFullScreenPortal || appendToBody) {
        return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
      }

      return this.renderDayPicker();
    }
  }, {
    key: "renderDayPicker",
    value: function renderDayPicker() {
      var _this$props6 = this.props,
          anchorDirection = _this$props6.anchorDirection,
          openDirection = _this$props6.openDirection,
          onDateChange = _this$props6.onDateChange,
          date = _this$props6.date,
          onFocusChange = _this$props6.onFocusChange,
          focused = _this$props6.focused,
          enableOutsideDays = _this$props6.enableOutsideDays,
          numberOfMonths = _this$props6.numberOfMonths,
          orientation = _this$props6.orientation,
          monthFormat = _this$props6.monthFormat,
          navPrev = _this$props6.navPrev,
          navNext = _this$props6.navNext,
          onPrevMonthClick = _this$props6.onPrevMonthClick,
          onNextMonthClick = _this$props6.onNextMonthClick,
          onClose = _this$props6.onClose,
          withPortal = _this$props6.withPortal,
          withFullScreenPortal = _this$props6.withFullScreenPortal,
          keepOpenOnDateSelect = _this$props6.keepOpenOnDateSelect,
          initialVisibleMonth = _this$props6.initialVisibleMonth,
          renderMonthText = _this$props6.renderMonthText,
          renderCalendarDay = _this$props6.renderCalendarDay,
          renderDayContents = _this$props6.renderDayContents,
          renderCalendarInfo = _this$props6.renderCalendarInfo,
          renderMonthElement = _this$props6.renderMonthElement,
          calendarInfoPosition = _this$props6.calendarInfoPosition,
          hideKeyboardShortcutsPanel = _this$props6.hideKeyboardShortcutsPanel,
          firstDayOfWeek = _this$props6.firstDayOfWeek,
          customCloseIcon = _this$props6.customCloseIcon,
          phrases = _this$props6.phrases,
          dayAriaLabelFormat = _this$props6.dayAriaLabelFormat,
          daySize = _this$props6.daySize,
          isRTL = _this$props6.isRTL,
          isOutsideRange = _this$props6.isOutsideRange,
          isDayBlocked = _this$props6.isDayBlocked,
          isDayHighlighted = _this$props6.isDayHighlighted,
          weekDayFormat = _this$props6.weekDayFormat,
          styles = _this$props6.styles,
          verticalHeight = _this$props6.verticalHeight,
          transitionDuration = _this$props6.transitionDuration,
          verticalSpacing = _this$props6.verticalSpacing,
          horizontalMonthPadding = _this$props6.horizontalMonthPadding,
          small = _this$props6.small,
          reactDates = _this$props6.theme.reactDates;
      var _this$state = this.state,
          dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
          isDayPickerFocused = _this$state.isDayPickerFocused,
          showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
      var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

      var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], null);

      var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
      var withAnyPortal = withPortal || withFullScreenPortal;
      return _react["default"].createElement("div", _extends({
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref: this.setDayPickerContainerRef
      }, (0, _reactWithStyles.css)(styles.SingleDatePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.SingleDatePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.SingleDatePicker_picker__directionRight, openDirection === _constants.OPEN_DOWN && styles.SingleDatePicker_picker__openDown, openDirection === _constants.OPEN_UP && styles.SingleDatePicker_picker__openUp, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
        top: inputHeight + verticalSpacing
      }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
        bottom: inputHeight + verticalSpacing
      }, orientation === _constants.HORIZONTAL_ORIENTATION && styles.SingleDatePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.SingleDatePicker_picker__vertical, withAnyPortal && styles.SingleDatePicker_picker__portal, withFullScreenPortal && styles.SingleDatePicker_picker__fullScreenPortal, isRTL && styles.SingleDatePicker_picker__rtl, dayPickerContainerStyles), {
        onClick: onOutsideClick
      }), _react["default"].createElement(_DayPickerSingleDateController["default"], {
        date: date,
        onDateChange: onDateChange,
        onFocusChange: onFocusChange,
        orientation: orientation,
        enableOutsideDays: enableOutsideDays,
        numberOfMonths: numberOfMonths,
        monthFormat: monthFormat,
        withPortal: withAnyPortal,
        focused: focused,
        keepOpenOnDateSelect: keepOpenOnDateSelect,
        hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
        initialVisibleMonth: initialVisibleMonth,
        navPrev: navPrev,
        navNext: navNext,
        onPrevMonthClick: onPrevMonthClick,
        onNextMonthClick: onNextMonthClick,
        onClose: onClose,
        renderMonthText: renderMonthText,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderCalendarInfo: renderCalendarInfo,
        renderMonthElement: renderMonthElement,
        calendarInfoPosition: calendarInfoPosition,
        isFocused: isDayPickerFocused,
        showKeyboardShortcuts: showKeyboardShortcuts,
        onBlur: this.onDayPickerBlur,
        phrases: phrases,
        dayAriaLabelFormat: dayAriaLabelFormat,
        daySize: daySize,
        isRTL: isRTL,
        isOutsideRange: isOutsideRange,
        isDayBlocked: isDayBlocked,
        isDayHighlighted: isDayHighlighted,
        firstDayOfWeek: firstDayOfWeek,
        weekDayFormat: weekDayFormat,
        verticalHeight: verticalHeight,
        transitionDuration: transitionDuration,
        horizontalMonthPadding: horizontalMonthPadding
      }), withFullScreenPortal && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton), {
        "aria-label": phrases.closeDatePicker,
        type: "button",
        onClick: this.onOutsideClick
      }), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton_svg), closeIcon)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          id = _this$props7.id,
          placeholder = _this$props7.placeholder,
          disabled = _this$props7.disabled,
          focused = _this$props7.focused,
          required = _this$props7.required,
          readOnly = _this$props7.readOnly,
          openDirection = _this$props7.openDirection,
          showClearDate = _this$props7.showClearDate,
          showDefaultInputIcon = _this$props7.showDefaultInputIcon,
          inputIconPosition = _this$props7.inputIconPosition,
          customCloseIcon = _this$props7.customCloseIcon,
          customInputIcon = _this$props7.customInputIcon,
          date = _this$props7.date,
          onDateChange = _this$props7.onDateChange,
          displayFormat = _this$props7.displayFormat,
          phrases = _this$props7.phrases,
          withPortal = _this$props7.withPortal,
          withFullScreenPortal = _this$props7.withFullScreenPortal,
          screenReaderInputMessage = _this$props7.screenReaderInputMessage,
          isRTL = _this$props7.isRTL,
          noBorder = _this$props7.noBorder,
          block = _this$props7.block,
          small = _this$props7.small,
          regular = _this$props7.regular,
          verticalSpacing = _this$props7.verticalSpacing,
          reopenPickerOnClearDate = _this$props7.reopenPickerOnClearDate,
          keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
          styles = _this$props7.styles,
          isOutsideRange = _this$props7.isOutsideRange;
      var isInputFocused = this.state.isInputFocused;
      var enableOutsideClick = !withPortal && !withFullScreenPortal;
      var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

      var input = _react["default"].createElement(_SingleDatePickerInputController["default"], {
        id: id,
        placeholder: placeholder,
        focused: focused,
        isFocused: isInputFocused,
        disabled: disabled,
        required: required,
        readOnly: readOnly,
        openDirection: openDirection,
        showCaret: !withPortal && !withFullScreenPortal && !hideFang,
        showClearDate: showClearDate,
        showDefaultInputIcon: showDefaultInputIcon,
        inputIconPosition: inputIconPosition,
        isOutsideRange: isOutsideRange,
        customCloseIcon: customCloseIcon,
        customInputIcon: customInputIcon,
        date: date,
        onDateChange: onDateChange,
        displayFormat: displayFormat,
        onFocusChange: this.onInputFocus,
        onKeyDownArrowDown: this.onDayPickerFocus,
        onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
        screenReaderMessage: screenReaderInputMessage,
        phrases: phrases,
        isRTL: isRTL,
        noBorder: noBorder,
        block: block,
        small: small,
        regular: regular,
        verticalSpacing: verticalSpacing,
        reopenPickerOnClearDate: reopenPickerOnClearDate,
        keepOpenOnDateSelect: keepOpenOnDateSelect
      });

      return _react["default"].createElement("div", _extends({
        ref: this.setContainerRef
      }, (0, _reactWithStyles.css)(styles.SingleDatePicker, block && styles.SingleDatePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
        onOutsideClick: this.onOutsideClick
      }, input, this.maybeRenderDayPickerWithPortal()), !enableOutsideClick && input, !enableOutsideClick && this.maybeRenderDayPickerWithPortal());
    }
  }]);

  return SingleDatePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureSingleDatePicker = SingleDatePicker;
SingleDatePicker.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
SingleDatePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      zIndex = _ref3$reactDates.zIndex;
  return {
    SingleDatePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    SingleDatePicker__block: {
      display: 'block'
    },
    SingleDatePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    SingleDatePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    SingleDatePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    SingleDatePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    SingleDatePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePicker);

exports["default"] = _default;