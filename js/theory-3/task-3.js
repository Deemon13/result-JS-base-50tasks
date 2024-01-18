const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0

function calculateAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let average = array.reduce((acc, el) => {
    return acc + el;
  }, 0);

  return average/array.length;
}
