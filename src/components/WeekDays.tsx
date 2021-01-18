import { isThisMonth, getDay } from 'date-fns';
import React from 'react';

interface WeekDaysProps {
  selectedMonth: Date;
}

const WeekDays: React.FC<WeekDaysProps> = ({ selectedMonth }) => {
  const currentWeekDayIndex = getDay(new Date());
  const isCurrentMonth = isThisMonth(selectedMonth)
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  if (isCurrentMonth) {
    return (
      <ul>
        {
          weekDays.map((weekDay, index) => {
            if(currentWeekDayIndex === index) {            
              return <li key={weekDay} className="currentWeekDay">{weekDay}</li>
            }
            return <li key={weekDay}>{weekDay}</li>
          })
        }
      </ul>
    )
  }

  return <ul>{weekDays.map( weekDay => <li key={weekDay} >{weekDay}</li>)}</ul>
  
}

export default WeekDays;