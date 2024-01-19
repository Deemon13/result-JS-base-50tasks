function isLeapYear(year) {
  let febDate = new Date(year, 2, 0);

  return febDate.getDate() === 29 ? true : false;
}

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
