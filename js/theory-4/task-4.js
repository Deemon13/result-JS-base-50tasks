function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6 ? true : false;
}

const date1 = new Date("2027-07-10"); // Суббота
const date2 = new Date("2027-07-12"); // Понедельник

console.log(isWeekend(date1)); // true
console.log(isWeekend(date2)); // false
