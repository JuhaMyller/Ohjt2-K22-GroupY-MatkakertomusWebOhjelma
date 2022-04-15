const formatDate = (d) => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
};

export const formatDateWithTime = (d) => {
  const date = new Date(d);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const day = date.getDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const time = date.toISOString().slice(11, 16);

  return `${day}.${month}.${year} ${time}`;
};

export default formatDate;
