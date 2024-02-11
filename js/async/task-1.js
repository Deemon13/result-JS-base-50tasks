console.log("a"); // 1
new Promise((resolve, reject) => {
  console.log("b"); // 2
  setTimeout(() => {
    console.log("c"); // 6 --> 5
    resolve();
  }, 0);
}).then(() => console.log("d")); // 5 --> 6

console.log("e"); // 3
setTimeout(() => console.log("f"), 0); // 7
console.log("g"); // 4

/*
a
b
e
g
d --> c
c --> d
f
*/
