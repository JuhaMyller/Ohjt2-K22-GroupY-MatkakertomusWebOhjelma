import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import {
  Days,
  getMonth,
  setUpCalendar,
  changeCalendarMonth,
  hideDay,
  isDisabled,
  checkDateRange,
} from './Utils';

const DatePickerCalendar = ({ startDate, endDate, onDateChange, mode }) => {
  const [calendarDates, setCalendarDates] = useState(Array(7).fill(null));
  const [dates, setDates] = useState(() => {
    const d = new Date(mode === 'startDate' ? startDate : endDate);
    return {
      month: d.getMonth() + 1,
      year: d.getFullYear(),
    };
  });

  useEffect(() => {
    setUpCalendar(dates, setCalendarDates);
  }, [dates]);

  useEffect(() => {
    setDates(() => {
      const d = new Date(mode === 'startDate' ? startDate : endDate);
      return {
        month: d.getMonth() + 1,
        year: d.getFullYear(),
      };
    });
  }, [mode]);

  return (
    <Wrapper>
      <div className="title">
        <h2>
          {mode === 'startDate'
            ? 'Valitse tulopäiväsi'
            : 'Valitse lähtöpäiväsi'}
        </h2>
      </div>
      <div className="calendars">
        <div className="tulopaivaCalendar">
          <div className="month-container">
            <button
              type="button"
              onClick={() => changeCalendarMonth('PREV', setDates)}
              className="arrow"
            >
              <BsArrowLeft
                size={20}
                className="arrow-hover-left"
                color="#4f5d75"
              />
            </button>
            {`${getMonth(dates.month - 1)}, ${dates.year} `}
            <button
              type="button"
              onClick={() => changeCalendarMonth('NEXT', setDates)}
              className="arrow"
            >
              <BsArrowRight
                size={20}
                className="arrow-hover-right"
                color="#4f5d75"
              />
            </button>
          </div>
          <div className="days-container">
            {Days.map((day) => (
              <div key={day} className="day">
                <h2>{day}</h2>
              </div>
            ))}
          </div>
          <div className="dates-container">
            {calendarDates.map((day, index) => {
              const isdisabled = isDisabled(startDate, day, mode);
              return (
                <div
                  style={{ visibility: hideDay(day, calendarDates) }}
                  key={index}
                  className={`single-day ${isdisabled ? 'no-hover' : 'hover'}`}
                >
                  <button
                    type="button"
                    disabled={isdisabled}
                    onClick={() => onDateChange(day, mode)}
                    style={checkDateRange(day, startDate, endDate)}
                  >
                    {day?.getUTCDate()}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 300px;
  width: 80vw;
  background-color: #f2f2f2;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 20px;

  .title {
    margin-bottom: 10px;
    h2 {
      font-size: 1rem;
    }
  }
  .calendars {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
  .tulopaivaCalendar {
    flex-grow: 1;
    padding: 0 5px;
  }
  .lahtopaivaCalendar {
    flex-grow: 1;
    padding: 0 5px;
  }
  .month-container {
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .arrow {
    display: flex;
    justify-content: center;
    background: inherit;
    border: none;
  }
  .arrow-hover-left {
    :hover {
      transition: all 0.5s;
      transform: translateX(-3px);
    }
  }
  .arrow-hover-right {
    :hover {
      transition: all 0.5s;
      transform: translateX(3px);
    }
  }
  .days-container {
    display: grid;
    grid-template-columns: repeat(7, 35px);
    .day {
      text-align: center;
    }
  }
  .dates-container {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(7, 32px);
    grid-template-rows: repeat(5, 1fr);
    gap: 3px;
    text-align: center;
    .single-day {
      height: 32px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        :enabled {
          cursor: pointer;
        }
        border-radius: 50%;
        border: none;
        font-family: inherit;
        width: 100%;
        height: 100%;
        background: white;
      }
    }
  }
`;

export default DatePickerCalendar;
