function sumNumbers() {
  let total = 0;
  [...arguments].forEach((el) => {
    total += el;
  });

  return total;
}

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60
