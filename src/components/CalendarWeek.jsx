import React from 'react';
import { forbidExtraProps, or, childrenOfType } from 'airbnb-prop-types';

import CalendarDay from './CalendarDay';
import CustomizableCalendarDay from './CustomizableCalendarDay';

const propTypes = forbidExtraProps({
  children: or([childrenOfType(CalendarDay), childrenOfType(CustomizableCalendarDay)]).isRequired,
});

function eqSet(as, bs) {
  if (as.size !== bs.size) return false;
  for (const a of as) if (!bs.has(a)) return false;
  return true;
}

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }
  if (x.size && y.size) {
    return eqSet(x, y);
  }
  // Step 6.a: NaN == NaN
  return x !== x && y !== y;
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

export default class CalendarWeek extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const compare = shallowCompare(this, nextProps, nextState);
    return compare;
  }

  render() {
    return <tr>{this.props.children}</tr>;
  }
}

CalendarWeek.propTypes = propTypes;
