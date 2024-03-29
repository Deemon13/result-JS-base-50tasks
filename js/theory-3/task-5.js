const numbers1 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

const numbers2 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

const emptyArray = [];
console.log(removeDuplicates(emptyArray)); // []

function removeDuplicates(array) {
  let newArray = [];

  for (const number of array) {
    if (newArray.includes(number)) {
      continue;
    }
    newArray.push(number);
  }

  return newArray;
}
