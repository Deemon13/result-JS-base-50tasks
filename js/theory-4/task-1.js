const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

function calculateAge(date) {
   return (new Date()).getFullYear() - date.getFullYear();
}

console.log(age);