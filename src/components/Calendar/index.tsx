import React, { useState, useMemo, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { add, sub, format, startOfMonth, startOfWeek, endOfWeek, getMonth, getDate, isToday } from 'date-fns';
import pt from 'date-fns/locale/pt-BR'

import { 
  Container, 
  Header,
  HeaderContent,
  MonthYearLabel,
  TodayButton,
  PreviousButton,
  NextButton,
  WeekContainer,  
} from './styles';

import Day from './Day';
import WeekDays from './WeekDays';

interface CalendarProps {
  events: Date[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handlePreviousClick  = useCallback(() => {
    const previousMonth = sub(selectedMonth, {months: 1});
    setSelectedMonth(previousMonth);
  }, [selectedMonth])

  const handleNextClick  = useCallback(() => {
    const nextMonth = add(selectedMonth, {months: 1});
    setSelectedMonth(nextMonth);
  }, [selectedMonth])

  const handleTodayClick = useCallback(() => {
    setSelectedMonth(new Date());
  }, [])

  const monthLabel = useMemo(() => {
    const monthNYearString = format(selectedMonth, 'MMMM yyyy', { locale: pt });
    
    const capitalized = monthNYearString[0].toUpperCase() + monthNYearString.substr(1);
    
    return capitalized;
  }, [selectedMonth])

  const monthWeeksAndDays = useMemo(() => {
    let weeks = [];
    let finishedRenderingWeeks = false;
    const startOfTheFirstWeekOfTheMonth = startOfWeek(startOfMonth(selectedMonth));
    let currentRenderingWeek = startOfTheFirstWeekOfTheMonth;
    let count = 0
    let currentSelectedMonthIndex = getMonth(selectedMonth);

    while (!finishedRenderingWeeks) {
      weeks.push(currentRenderingWeek);

      currentRenderingWeek = add(currentRenderingWeek, { weeks: 1});
      finishedRenderingWeeks = count++ > 2 && currentSelectedMonthIndex !== getMonth(currentRenderingWeek);
      currentSelectedMonthIndex = getMonth(currentRenderingWeek);
    }

    const monthDays = weeks.map(date => {
      let days = [];
      let currentRenderingDay = date;
      const startOfTheWeek = date;
      const endOfTheWeek = endOfWeek(startOfTheWeek);

      while (currentRenderingDay>= startOfTheWeek && currentRenderingDay <= endOfTheWeek) {
        let formatedDay = format(currentRenderingDay, 'd');
        let isADayOfTheCurrentMonth = getMonth(currentRenderingDay) === getMonth(selectedMonth);
        let isTheCurrentDay = isToday(currentRenderingDay);
        let hasEvent = false;

        for (let i = 0; i < events.length; i++) {
          const isSameDay = getDate(events[i]) === getDate(currentRenderingDay);
          const isSameMonth = getMonth(events[i]) === getMonth(currentRenderingDay);

          if (isSameDay && isSameMonth) {
            hasEvent = true
          }
        }

        const day = {
          date: currentRenderingDay,
          formatedDay,
          isToday: isTheCurrentDay,
          hasEvent,
          isADayOfTheCurrentMonth,
        }

        days.push(day);
        currentRenderingDay = add(currentRenderingDay, { days: 1});
      }

      return days
    });

    return monthDays;
  }, [selectedMonth, events])

  return (
    <Container>
      <Header>
        <PreviousButton onClick={handlePreviousClick} type="button">
          <FiChevronLeft size={24} />
        </PreviousButton>

        <HeaderContent >
          <TodayButton onClick={handleTodayClick} type="button">
            Hoje
          </TodayButton>

          <MonthYearLabel>
            {monthLabel}
          </MonthYearLabel>
        </HeaderContent>

        <NextButton onClick={handleNextClick} type="button">
          <FiChevronRight size={24} />
        </NextButton>
      </Header>

      <div className="weekdays">
        <WeekDays selectedMonth={selectedMonth}/>
      </div>

      <div className="month-days">
        {monthWeeksAndDays.map((week, index) => {
          return (            
            <WeekContainer key={index}>
              {week.map(day => (
                <Day 
                  key={day.date.toString()}
                  day={day.formatedDay}
                  isToday={day.isToday} 
                  hasEvent={day.hasEvent}
                  isADayOfTheCurrentMonth={day.isADayOfTheCurrentMonth}
                />
              ))}
            </WeekContainer>            
          )
        })}            
      </div>
    </Container>
  );
}

export default Calendar;
