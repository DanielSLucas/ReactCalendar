import React, { useState, useMemo, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { add, sub, format, startOfMonth, startOfWeek, endOfWeek, getMonth, isToday } from 'date-fns';
import pt from 'date-fns/locale/pt-BR'

import './App.css';

import Day from './components/Day';

const App: React.FC = () => {
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
    const startOfTheFirstWeekOfTheMonth = startOfWeek(startOfMonth(selectedMonth), { weekStartsOn: 1});
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
      const startOfTheNextWeek = add(endOfWeek(startOfTheWeek), {days: 1});

      while (currentRenderingDay>= startOfTheWeek && currentRenderingDay <= startOfTheNextWeek) {
        let formatedDay = format(currentRenderingDay, 'd');
        let isADayOfTheCurrentMonth = getMonth(currentRenderingDay) === getMonth(selectedMonth);
        let isTheCurrentDay = isToday(currentRenderingDay);

        const day = {
          date: currentRenderingDay,
          formatedDay,
          isToday: isTheCurrentDay,
          hasEvent: false,
          isADayOfTheCurrentMonth,
        }

        days.push(day);
        currentRenderingDay = add(currentRenderingDay, { days: 1});
      }

      return days
    });

    return monthDays;
  }, [selectedMonth])

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="calendar">
          <header className="header">
            <button onClick={handlePreviousClick} className="button-left" type="button">
              <FiChevronLeft size={24} />
            </button>

            <div className="header-content">
              <button onClick={handleTodayClick} type="button">
                Hoje
              </button>

              <div className="month-year">
                {monthLabel}
              </div>
            </div>

            <button onClick={handleNextClick} className="button-right" type="button">
              <FiChevronRight size={24} />
            </button>
          </header>

          <div className="weekdays">
            <ul>
              <li>Seg</li>
              <li>Ter</li>
              <li>Qua</li>
              <li>Qui</li>
              <li >Sex</li>
              <li>Sab</li>
              <li>Dom</li>
            </ul>
          </div>

          <div className="month-days">
            
            {monthWeeksAndDays.map(week => {
              return (
                <div className="week">
                  <ul>
                    {week.map(day => (
                      <Day 
                        day={day.formatedDay}
                        isToday={day.isToday} 
                        hasEvent={day.hasEvent}
                        isADayOfTheCurrentMonth={day.isADayOfTheCurrentMonth}
                      />
                    ))}
                  </ul>
                </div>
              )
            })}            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
