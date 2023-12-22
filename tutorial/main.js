// document.querySelectorAll('.btn').forEach((item) => {
//   item.addEventListener('click', () => {
//     alert('this is awesome');
//   });
// });

// let name = 'john shrimp taco V';
// let address, zip, state;
// address = '101 main street';
// zip = '60612';
// state = 'CA';
// name = 'fish burrito';
// console.log(address, zip, state);
// console.log(name);

// let random123_$ = 'random';
// console.log(random123_$);

let firstName = 'Eduardo';
let last_name = 'Bulsoni';
let address = 'main street';
address = 'first street';
console.log(firstName, last_name, address);

const value = name - last_name;
console.log(value);

let number3 = '10';
let number4 = '23';

const result = number3 - number4;
console.log(result);

// let score1 = 63;
// let score2 = 39;
// let score3 = 21;
// let totalScore = score1 + score2 + score3;
// let averageScore = totalScore / 3;
// console.log(totalScore);
// console.log(averageScore);

// let plates = 20;
// let people = 7;
// let remainingPlates = plates % people;
// remainingPlates++;
// let msg = `There are ${remainingPlates} plates available`;
// console.log(msg);

let fruits = ['melon', 'grapes', 'strawberry', 'passion fruit', 'coconut', 5];

const firstFruit = fruits[0];
fruits[fruits.length - 1] = 'lemon';
console.log(firstFruit, fruits);

function calculate(value) {
  const newValue = value * 2.54;
  console.log('The value in cm is : ' + newValue + ' cm');
  return newValue;
}

const wallHeight = 80;
const width = calculate(36);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);

const calculateTotal = function (subtotal, tax) {
  return subtotal + tax;
};

let order1 = calculateTotal(120, 50);
let order2 = calculateTotal(345, 72);
let order3 = calculateTotal(600, 150);

console.log(order1, order2, order3);

const person = {
  name: 'john',
  lastName: 'peters',
  age: 40,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting() {
    console.log('Hello my name is JOHN');
  },
  // OR
  // greeting: function () {
  //   console.log('Hello my name is JOHN');
  // },
};

const age = person.age;
console.log(age);
person.name = 'bob';

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

let car = {
  make: 'BMW',
  model: 'X5',
  years: 2020,
  colors: ['red', 'grey', 'blue'],
  hybrid: true,
  drive() {
    console.log('Vroom vroom');
  },
  stop() {
    console.log('brrrr');
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

const dice = 1;

switch (dice) {
  case 1:
    console.log('you got one');
    break;
  case 2:
    console.log('you got two');
    break;
  case 3:
    console.log('you got three');
    break;
  default:
    console.log('you did not roll the dice');
    break;
}

let person1 = { name: 'edu', age: 22, status: 'resident' };
let person2 = { name: 'nick', age: 19, status: 'tourist' };

const isApproved = function (person) {
  if (person.age > 18 && person.status == 'resident') {
    console.log('good, you are approved');
  } else {
    console.log('you are not approved');
  }
};

isApproved(person1);
isApproved(person2);

let amount = 10;
while (amount > 0) {
  console.log('I have ' + amount + " dollars and I'm going to the mall");
  amount--;
}

let money = 0;

do {
  console.log('You have ' + money + ' dollars');
  money++;
} while (money < 10);

let i;
for (i = 0; i < 10; i++) {
  console.log('and the number is : ' + i);
}

for (let number = 11; number >= 0; number--) {
  console.log('and the number is : ' + number);
}
