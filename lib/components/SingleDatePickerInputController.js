"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _OpenDirectionShape = _interopRequireDefault(require("../shapes/OpenDirectionShape"));

var _defaultPhrases = require("../defaultPhrases");

var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));

var _SingleDatePickerInput = _interopRequireDefault(require("./SingleDatePickerInput"));

var _IconPositionShape = _interopRequireDefault(require("../shapes/IconPositionShape"));

var _DisabledShape = _interopRequireDefault(require("../shapes/DisabledShape"));

var _toMomentObject = _interopRequireDefault(require("../utils/toMomentObject"));

var _toLocalizedDateString = _interopRequireDefault(require("../utils/toLocalizedDateString"));

var _isInclusivelyAfterDay = _interopRequireDefault(require("../utils/isInclusivelyAfterDay"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)({
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func.isRequired,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  // also used as label
  screenReaderMessage: _propTypes["default"].string,
  showClearDate: _propTypes["default"].bool,
  showCaret: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDate: _propTypes["default"].bool,
  isOutsideRange: _propTypes["default"].func,
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  onClose: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  customInputIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  // accessibility
  isFocused: _propTypes["default"].bool,
  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerInputPhrases)),
  isRTL: _propTypes["default"].bool
}) : {};
var defaultProps = {
  date: null,
  focused: false,
  placeholder: '',
  screenReaderMessage: 'Date',
  showClearDate: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  onClose: function onClose() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  customInputIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases,
  isRTL: false
};

var SingleDatePickerInputController =
/*#__PURE__*/
function (_ref) {
  _inherits(SingleDatePickerInputController, _ref);

  _createClass(SingleDatePickerInputController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }]);

  function SingleDatePickerInputController(props) {
    var _this;

    _classCallCheck(this, SingleDatePickerInputController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleDatePickerInputController).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClearFocus = _this.onClearFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearDate = _this.clearDate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SingleDatePickerInputController, [{
    key: "onChange",
    value: function onChange(dateString) {
      var _this$props = this.props,
          isOutsideRange = _this$props.isOutsideRange,
          keepOpenOnDateSelect = _this$props.keepOpenOnDateSelect,
          onDateChange = _this$props.onDateChange,
          onFocusChange = _this$props.onFocusChange,
          onClose = _this$props.onClose;
      var newDate = (0, _toMomentObject["default"])(dateString, this.getDisplayFormat());
      var isValid = newDate && !isOutsideRange(newDate);

      if (isValid) {
        onDateChange(newDate);

        if (!keepOpenOnDateSelect) {
          onFocusChange({
            focused: false
          });
          onClose({
            date: newDate
          });
        }
      } else {
        onDateChange(null);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this$props2 = this.props,
          onFocusChange = _this$props2.onFocusChange,
          disabled = _this$props2.disabled;

      if (!disabled) {
        onFocusChange({
          focused: true
        });
      }
    }
  }, {
    key: "onClearFocus",
    value: function onClearFocus() {
      var _this$props3 = this.props,
          focused = _this$props3.focused,
          onFocusChange = _this$props3.onFocusChange,
          onClose = _this$props3.onClose,
          date = _this$props3.date;
      if (!focused) return;
      onFocusChange({
        focused: false
      });
      onClose({
        date: date
      });
    }
  }, {
    key: "getDisplayFormat",
    value: function getDisplayFormat() {
      var displayFormat = this.props.displayFormat;
      return typeof displayFormat === 'string' ? displayFormat : displayFormat();
    }
  }, {
    key: "getDateString",
    value: function getDateString(date) {
      var displayFormat = this.getDisplayFormat();

      if (date && displayFormat) {
        return date && date.format(displayFormat);
      }

      return (0, _toLocalizedDateString["default"])(date);
    }
  }, {
    key: "clearDate",
    value: function clearDate() {
      var _this$props4 = this.props,
          onDateChange = _this$props4.onDateChange,
          reopenPickerOnClearDate = _this$props4.reopenPickerOnClearDate,
          onFocusChange = _this$props4.onFocusChange;
      onDateChange(null);

      if (reopenPickerOnClearDate) {
        onFocusChange({
          focused: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          id = _this$props5.id,
          placeholder = _this$props5.placeholder,
          disabled = _this$props5.disabled,
          focused = _this$props5.focused,
          isFocused = _this$props5.isFocused,
          required = _this$props5.required,
          readOnly = _this$props5.readOnly,
          openDirection = _this$props5.openDirection,
          showClearDate = _this$props5.showClearDate,
          showCaret = _this$props5.showCaret,
          showDefaultInputIcon = _this$props5.showDefaultInputIcon,
          inputIconPosition = _this$props5.inputIconPosition,
          customCloseIcon = _this$props5.customCloseIcon,
          customInputIcon = _this$props5.customInputIcon,
          date = _this$props5.date,
          phrases = _this$props5.phrases,
          onKeyDownArrowDown = _this$props5.onKeyDownArrowDown,
          onKeyDownQuestionMark = _this$props5.onKeyDownQuestionMark,
          screenReaderMessage = _this$props5.screenReaderMessage,
          isRTL = _this$props5.isRTL,
          noBorder = _this$props5.noBorder,
          block = _this$props5.block,
          small = _this$props5.small,
          regular = _this$props5.regular,
          verticalSpacing = _this$props5.verticalSpacing;
      var displayValue = this.getDateString(date);
      return _react["default"].createElement(_SingleDatePickerInput["default"], {
        id: id,
        placeholder: placeholder,
        focused: focused,
        isFocused: isFocused,
        disabled: disabled,
        required: required,
        readOnly: readOnly,
        openDirection: openDirection,
        showCaret: showCaret,
        onClearDate: this.clearDate,
        showClearDate: showClearDate,
        showDefaultInputIcon: showDefaultInputIcon,
        inputIconPosition: inputIconPosition,
        customCloseIcon: customCloseIcon,
        customInputIcon: customInputIcon,
        displayValue: displayValue,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onKeyDownShiftTab: this.onClearFocus,
        onKeyDownTab: this.onClearFocus,
        onKeyDownArrowDown: onKeyDownArrowDown,
        onKeyDownQuestionMark: onKeyDownQuestionMark,
        screenReaderMessage: screenReaderMessage,
        phrases: phrases,
        isRTL: isRTL,
        noBorder: noBorder,
        block: block,
        small: small,
        regular: regular,
        verticalSpacing: verticalSpacing
      });
    }
  }]);

  return SingleDatePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = SingleDatePickerInputController;
SingleDatePickerInputController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
SingleDatePickerInputController.defaultProps = defaultProps;