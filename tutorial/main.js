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
  console.log('The value in cm is : ' + value * 2.54 + ' cm');
  return value;
}

const wallHeight = 80;
const width = calculate(36);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
