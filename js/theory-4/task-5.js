function isLeapYear(year) {
  console.log(year);
  // let startYear = new Date().setFullYear(year, 0, 1);
  // let endYear = new Date().setFullYear(year, 11, 31);
  let startYear = new Date(year, 0, 2, 0, 0, 0, 0).getTime();
  let endYear = new Date(year, 11, 32, 0, 0, 0, 0).getTime();

  let testYearBegin = new Date("2023-01-01").getTime();
  let testYearEnd = new Date("2023-12-31").getTime();

  console.log("startYear:", startYear);
  console.log("testYearBegin:", testYearBegin);
  console.log("endYear:", endYear);
  console.log("testYearEnd:", testYearEnd);

  return (endYear - startYear) / (1000 * 3600 * 24) === 365 ? true : false;
}

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
