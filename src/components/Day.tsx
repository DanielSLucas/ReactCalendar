import React from 'react';

interface DayProps {
  day: string
  isToday: boolean;
  hasEvent: boolean;
  isADayOfTheCurrentMonth: boolean;
}

const Day: React.FC<DayProps> = ({ day, isToday, hasEvent, isADayOfTheCurrentMonth }) => {

  if (isToday) {
    return <li className="currentDay">{day}</li>
  }

  if (hasEvent) {
    return <li className="event">{day}</li>
  }

  if (!isADayOfTheCurrentMonth) {
    return <li className="not-a-current-month-day">{day}</li>
  }

  return <li>{day}</li>;
}

export default Day;