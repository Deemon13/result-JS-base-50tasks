const USERS = [
  { id: "001", name: "Алексей", age: 25 },
  { id: "002", name: "Иван", age: 28 },
  { id: "003", name: "Егор", age: 30 },
];

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Пользователь не найден"));
      }
    }, 2500);
  });
}

async function start() {
  try {
    const result = await fetchUser("001");
    console.log(result); // { id: '001', name: "Алексей", age: 25 }
  } catch (error) {
    console.error(error);
  }
}

start();
