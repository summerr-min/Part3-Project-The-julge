function convertDate(date: Date) {
  const offset = date.getTimezoneOffset() * 60000;
  const localTime = date.getTime() - offset;
  const localDate = new Date(localTime);
  const fromattedDate = localDate.toISOString();

  return fromattedDate;
}

export default convertDate;
