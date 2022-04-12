const capitalizeString = (s) => {
  const string = s;

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeString;
