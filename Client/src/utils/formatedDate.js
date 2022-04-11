const formatDate = (d) => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
