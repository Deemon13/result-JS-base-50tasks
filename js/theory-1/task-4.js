function getNumberDigit(number, digitPosition) {
    let str = ''+number;
    let arr = str.split('')
    let findNumber = arr[digitPosition]
    
    if(digitPosition > arr.length) {
       return undefined;
    }
    
    return  Number(findNumber);
  }
  
  console.log(getNumberDigit(123, 0)) // 1
  console.log(getNumberDigit(123, 1)) // 2
  console.log(getNumberDigit(123, 2)) // 3
  console.log(getNumberDigit(1, 2)) // undefined