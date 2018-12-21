import React from 'react';
import { forbidExtraProps, or, childrenOfType } from 'airbnb-prop-types';

import CalendarDay from './CalendarDay';
import CustomizableCalendarDay from './CustomizableCalendarDay';

const propTypes = forbidExtraProps({
  children: or([childrenOfType(CalendarDay), childrenOfType(CustomizableCalendarDay)]).isRequired,
});

export default class CalendarWeek extends React.PureComponent {
  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
}

CalendarWeek.propTypes = propTypes;
