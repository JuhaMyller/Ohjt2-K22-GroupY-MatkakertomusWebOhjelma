import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import DatePickerCalendar from './DatepickerCalendar';
import { formatDate } from './Utils';

const DateTimespanPicker = ({ startDate, endDate, onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [mode, setMode] = useState('');

  const inputClick = (e) => {
    const { name } = e.target;

    if (!showCalendar) {
      setShowCalendar(true);
      return setMode(name);
    }
    if (mode === name) {
      setMode('');
      return setShowCalendar(false);
    }
    if (mode !== name) return setMode(name);
  };

  useLayoutEffect(() => {
    if (mode === 'startDate') return setMode('endDate');
    if (mode === 'endDate') {
      setMode('');
      setShowCalendar(false);
    }
  }, [startDate, endDate]);

  return (
    <Wrapper>
      <div className="calendar-inputs">
        <div
          style={mode === 'startDate' ? { background: '#f2f2f2' } : {}}
          className="startDate"
        >
          <button type="button" onClick={(e) => inputClick(e)} name="startDate">
            {formatDate(startDate)}
          </button>
        </div>
        <div className="icon">
          <BsArrowRight size={20} />
        </div>
        <div
          style={mode === 'endDate' ? { background: '#f2f2f2' } : {}}
          className="endDate"
        >
          <button type="button" onClick={(e) => inputClick(e)} name="endDate">
            {formatDate(endDate)}
          </button>
        </div>
      </div>
      <div className="calendar">
        {showCalendar && (
          <DatePickerCalendar
            onDateChange={onDateChange}
            mode={mode}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </div>
    </Wrapper>
  );
};
DateTimespanPicker.propTypes = {};

const Wrapper = styled.div`
  max-width: 230px;
  position: relative;
  margin: 50px auto;

  .calendar-inputs {
    border: 2px solid #f2f2f2;
    display: flex;
    height: 40px;
    width: 100%;
    white-space: nowrap;
    button {
      border: none;
      height: 100%;
      color: #6c757d;

      background: inherit;
      font-family: inherit;
      font-size: 1rem;
      padding: 0 5px;
      line-height: 36px;
      cursor: pointer;
    }
  }
  .startDate {
    height: 100%;
    :hover {
      background: #f2f2f2;
    }
  }
  .endDate {
    height: 100%;
    :hover {
      background: #f2f2f2;
    }
  }

  .icon {
    display: flex;
    place-items: center;
    margin: auto;
    margin-right: 20px;
    color: #6c757d;
  }
  .calendar {
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default DateTimespanPicker;
