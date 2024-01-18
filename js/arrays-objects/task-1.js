const john = {
    name: 'John',
    age: 21,
    pet: "Kong"
  };
  
  const ann = {
    name: 'Ann',
    age: 18,
    pet: 'Limbo'
  }
  
  function printPersonInfo(obj) {
    console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`)
  }
  
  function incrementAge(obj) {
    obj.age += 1;
  }
  
  for (const key in john) {
    console.log(`${key}: ${john[key]}`);
  }