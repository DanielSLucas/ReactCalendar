import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import moment from 'moment';
import 'moment/locale/pt-br';

import './App.css';

const App: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(moment());

  useEffect(() => {
    setSelectedMonth(moment())
  }, [])

  const handlePreviousClick  = useCallback(() => {
    // const previousMonth = selectedMonth.subtract(1, 'month');
    setSelectedMonth(state => state.subtract(1, "month"));
  }, [])

  const handleNextClick  = useCallback(() => {
    // const nextMonth = selectedMonth.add(1, 'month');
    setSelectedMonth(state => state.add(1, 'month'));
  }, [])

  const monthLabel = useMemo(() => {
    const monthNYearString = selectedMonth.format('MMMM YYYY');
    
    const capitalized = monthNYearString[0].toUpperCase() + monthNYearString.substr(1);
    
    return capitalized;
  }, [selectedMonth])

  const handleTodayClick = useCallback(() => {
    setSelectedMonth(moment());
  }, [])

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
              <li className="currentWeekDay">Sex</li>
              <li>Sab</li>
              <li>Dom</li>
            </ul>
          </div>

          <div className="month-days">
            <div className="week">
              <ul>
                <li className="not-a-current-month-day">28</li>
                <li className="not-a-current-month-day">29</li>
                <li className="not-a-current-month-day">30</li>
                <li className="not-a-current-month-day">31</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>

            <div className="week">
              <ul>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ul>
            </div>

            <div className="week">
              <ul>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li className="currentDay">15</li>
                <li>16</li>
                <li>17</li>
              </ul>
            </div>

            <div className="week">
              <ul>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li className="event">22</li>
                <li className="event">23</li>
                <li>24</li>
              </ul>
            </div>

            <div className="week">
              <ul>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li className="event">30</li>
                <li className="event">31</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
