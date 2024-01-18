function isPrimeNumber(num) {
    if(num > 1) {
      for(i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    } else {
      return 'Число должно быть больше 1';
    }
  }