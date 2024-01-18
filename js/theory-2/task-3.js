const fullName = "John Doe";

function getInitials(str) {
  let initials = "";
  const arr = str.split(" ");
  arr.forEach(el => {
    initials += `${el[0].toUpperCase()}. `
  });

  return initials.trim()
}

const initials = getInitials(fullName);
console.log(initials); // "J. D."
