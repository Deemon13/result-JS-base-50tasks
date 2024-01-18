const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

const obj2 = {...obj, ...updateObj};
console.log(obj2);