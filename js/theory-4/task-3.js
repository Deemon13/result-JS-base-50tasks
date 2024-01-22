function getTimeUntilDate(date) {
  const now = new Date();
  const timeDifference = date.getTime() - now.getTime();

  if (timeDifference < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}

const targetDate = new Date("2027-12-31T23:59:59");
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }
