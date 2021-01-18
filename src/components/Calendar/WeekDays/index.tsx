import { isThisMonth, getDay } from 'date-fns';
import React from 'react';

import { Container, List, ListItem } from './styles';

interface WeekDaysProps {
  selectedMonth: Date;
}

const WeekDays: React.FC<WeekDaysProps> = ({ selectedMonth }) => {
  const currentWeekDayIndex = getDay(new Date());
  const isCurrentMonth = isThisMonth(selectedMonth)
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  if (isCurrentMonth) {
    return (
      <Container>
        <List>
          {
            weekDays.map((weekDay, index) => {
              if(currentWeekDayIndex === index) {            
                return <ListItem key={weekDay} isCurrentWeekDay >{weekDay}</ListItem>
              }
              return <ListItem key={weekDay}>{weekDay}</ListItem>
            })
          }
        </List>
      </Container>
    )
  }

  return <Container><List>{weekDays.map( weekDay => <ListItem key={weekDay} >{weekDay}</ListItem>)}</List></Container>;
  
}

export default WeekDays;