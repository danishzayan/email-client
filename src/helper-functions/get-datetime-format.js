export const getDateTimeFormat = (dateTime) => {
  const currDateTime = new Date(dateTime);
  const padZero = (num) => num.toString().padStart(2, '0');

  const date = padZero(currDateTime.getDate());
  const month = padZero(currDateTime.getMonth() + 1);
  const year = currDateTime.getFullYear();

  let hours = currDateTime.getHours();
  const ampm = hours < 12 ? 'am' : 'pm';
  hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
  const minutes = padZero(currDateTime.getMinutes());

  return `${date}/${month}/${year} ${padZero(hours)}:${minutes}${ampm}`;
};
