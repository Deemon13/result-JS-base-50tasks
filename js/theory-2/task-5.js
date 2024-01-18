const arrayOfVowels = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "y",
  "а",
  "е",
  "ё",
  "и",
  "о",
  "у",
  "ы",
  "э",
  "ю",
  "я",
];

function countVowels(str) {
    let count = 0;
    for (const el of str) {
        if (arrayOfVowels.includes(el.toLowerCase()) ) {
            count += 1;
        }
    }

    return count;
}

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4
