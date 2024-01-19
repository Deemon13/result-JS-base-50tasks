function getTimeUntilDate(date) {
  let currentDate = new Date();
  let diff = date.getTime() - currentDate.getTime();
  console.log("currentDate", currentDate, currentDate.getTime());
  console.log("date", date, date.getTime());
  let diffInDays = diff / (1000 * 60 * 60 * 24);
  let diffInHours = diff / (1000 * 60 * 60);
  let diffInMinutes = diff / (1000 * 60);
  let diffInSeconds = diff / (1000);

  console.log("diff:", diff);
  console.log("diffInDays:", diffInDays);
  console.log("diffInHours:", diffInHours);
  console.log("diffInMinutes:", diffInMinutes);
  console.log("diffInSeconds:", diffInSeconds);
}

const targetDate = new Date("2027-12-31T23:59:59");
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }
