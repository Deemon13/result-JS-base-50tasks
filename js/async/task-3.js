function sumWithDelay(delay, a, b) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, delay);
  });
  return promise;
}

async function start() {
  const result = await sumWithDelay(1000, 5, 5);
  console.log(result);
}

start();
