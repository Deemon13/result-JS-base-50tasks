const date1 = new Date("2027-06-01");
const date2 = new Date("2027-06-10");

function getDateDifference(date1, date2) {
  let difference = date2.getTime() - date1.getTime();
  difference = difference / (1000 * 60 * 60 * 24);
  return difference;
}

const difference = getDateDifference(date1, date2);
console.log(difference); // 9
