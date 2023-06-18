export function addDays(date, days) {
  let clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + days);
  return clone;
}

export default function getWeek(dateInput, offset = 0) {
  let date = new Date(dateInput);
  return {
    date,
    start: addDays(date, -date.getDay()),
    end: addDays(date, 6 - date.getDay()),
  };
}
