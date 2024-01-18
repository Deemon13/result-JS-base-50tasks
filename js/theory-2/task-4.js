function generateGoogleString(number) {
  let valueOfO = "";
  if (number <= 0) {
    return "Google";
  } else {
    for (let i = 0; i < number; i += 1) {
      valueOfO += "o";
    }
    return "Google".replace("oo", valueOfO);
  }
}

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google
