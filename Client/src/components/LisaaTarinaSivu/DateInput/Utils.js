export const Days = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];
export const getMonth = (month) => {
  switch (month) {
    case 0:
      return 'Tammikuu';
    case 1:
      return 'Helmikuu';
    case 2:
      return 'Maaliskuu';
    case 3:
      return 'Huuhtikuu';
    case 4:
      return 'Toukokuu';
    case 5:
      return 'Kesäkuu';
    case 6:
      return 'Heinäkuu';
    case 7:
      return 'Elokuu';
    case 8:
      return 'Syyskuu';
    case 9:
      return 'Lokakuu';
    case 10:
      return 'Marraskuu';
    case 11:
      return 'Joulukuu';
    default:
      throw new Error('Not valid month');
  }
};

export const setUpCalendar = (options, setCalendar) => {
  const date = new Date(Date.UTC(options.year, options.month - 1, 1));
  const calendarFirstDay = date.getDay() === 0 ? 6 : date.getDay() - 1;
  const dateArr = Array(7).fill(null);
  let i = calendarFirstDay;

  while (date.getMonth() === options.month - 1) {
    dateArr[i] = new Date(date);
    date.setUTCDate(date.getUTCDate() + 1);
    i++;
  }

  setCalendar(dateArr);
};

export const formatDate = (date) => {
  if (!date) return;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const setDate = () => {
  const date = new Date();
  date.setHours(0, 0, 0);
  return date;
};

export const hideDay = (currDay, array) => {
  const month = array[array.length - 1];
  if (currDay?.getMonth() !== month?.getMonth()) return 'hidden';
};

export const isDisabled = (startDay, currDay, mode) => {
  if (!currDay) return;
  const date = setDate();
  if (mode === 'endDate' && currDay.getTime() < startDay.getTime()) return true;

  if (currDay.getTime() < date.getTime()) return true;
};

export const checkDateRange = (currDay, startDay, endDay) => {
  if (!currDay) return;
  startDay.setHours(0, 0, 0);
  endDay.setHours(3, 0, 0);

  if (
    currDay.getTime() >= startDay.getTime() &&
    currDay.getTime() <= endDay.getTime()
  ) {
    return { color: 'white', background: '#4f5d75' };
  }
};

export const changeCalendarMonth = (option, setDates) => {
  if (option === 'NEXT' || option === 'PREV')
    setDates((dates) => {
      const m = dates.month;
      const y = dates.year;

      if (option === 'NEXT') {
        return m === 12 ? { month: 1, year: y + 1 } : { month: m + 1, year: y };
      }
      return m === 1 ? { month: 12, year: y - 1 } : { month: m - 1, year: y };
    });
  else throw new Error('Not valid option');
};
