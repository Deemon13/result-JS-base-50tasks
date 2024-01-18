console.log(isPalindrome("level")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false

function isPalindrome(str) {
  return str === str.split("").reverse().join("") ? true : false;
}
