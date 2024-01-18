function isPerfectNumber(number) {
    let sum = 0;
    if(number > 1) {
      for (let i = 1; i < number; i += 1)  {
        if(number % i === 0) {
          sum += i;
        }
      }
      
      if(sum === number) {
        return true;
      }
      return false;
    }
    return 'Совершенное число должно быть положительным и больше 1'
  }
  
  console.log(isPerfectNumber(1));   // "Совершенное число должно быть положительным и больше 1"
  console.log(isPerfectNumber(6));   // true
  console.log(isPerfectNumber(28));  // true
  console.log(isPerfectNumber(12));  // false
  console.log(isPerfectNumber(16));  // false