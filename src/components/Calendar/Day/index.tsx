import React from 'react';

import { Container } from './styles';

interface DayProps {
  day: string
  isToday: boolean;
  hasEvent: boolean;
  isADayOfTheCurrentMonth: boolean;
}

const Day: React.FC<DayProps> = ({ day, isToday, hasEvent, isADayOfTheCurrentMonth }) => {
  return (
    <Container 
      isToday={isToday} 
      hasEvent={hasEvent}
      isADayOfTheCurrentMonth={isADayOfTheCurrentMonth}
    >
      {day}
    </Container>
  );
}

export default Day;