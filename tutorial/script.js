// let text = 'Peter Jordan';
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(3));

// const fullName = function (firstName, lastName) {
//   let result = firstName + ' ' + lastName;
//   return result.toUpperCase();
// };

// const name1 = fullName('eduardo', 'bulsoni');
// const name2 = fullName('rodrigo', 'oliveira');
// const name3 = fullName('alisson', 'silva');

// console.log(name1);
// console.log(name2);
// console.log(name3);

// const fullNameObj = function ({ firstName, lastName }) {
//   const result = firstName + ' ' + lastName;
//   return result.toUpperCase();
// };

// const obj1 = { firstName: 'Eduardo', lastName: 'Bulsoni' };
// console.log(fullNameObj(obj1));

// const names = ['john', 'bobo', 'barry', 'olga', 'ben'];

// const lastNames = ['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);
// console.log(allNames.reverse());

// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);

// allNames.shift();
// allNames.shift();
// console.log(allNames);

// allNames.push('susy');
// allNames.push('anna');
// console.log(allNames);

// allNames.pop();
// allNames.pop();
// console.log(allNames);

// // splice - mutates original array
// const specificNames = allNames.splice(2);
// console.log(specificNames);

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';

let newArray = [];

// for loop
for (let i = 0; i < names.length; i++) {
  //   console.log(i);
  console.log(names[i]);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(calculateTotal(gas));
console.log(calculateTotal(food));
