class Person {
  constructor() {
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  showFriends() {
    console.log(`${this.friends.join(", ")}`);
  }
}

const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь
