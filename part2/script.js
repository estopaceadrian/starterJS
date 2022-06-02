'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive:)');

// const interface = 'Audio';
// const private = 543;

function logger() {
  console.log('My name is Adrian');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// declaration

const age1 = calcAge1(1992);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1992);
console.log(age1, age2);

//arrow
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires on ${retirement} years`;
};

console.log(yearsUntilRetirement(1992, 'Adrian'));
console.log(yearsUntilRetirement(1997, 'Bob'));
 
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 

let x = 2;
let y = 5;
let z = 10;

if (x > y && x > z) {
  console.log('x is largest');
} else if (y > z) {
  console.log('y is largest');
} else {
  console.log('z is largest');
}


var x = prompt('enter a number: ');
if (x % 5 == 0 && x % 3 == 0) {
  console.log('fiz buz');
} else if (x % 5 == 0) {
  console.log('fiz');
} else if (x % 3 == 0) {
  console.log('buz');
}
 
let x = 3;
let y = 1;
let z = 2;

if (x != y && x != z) {
  console.log('scalene');
} else if ((y == z && y == x) || z == x) {
  console.log('equilateral');
} else {
  console.log('isosceles');
}
*/

var x = prompt('Enter the 1st number.');
var y = prompt('Enter the 2nd number.');
var z = prompt('Enter the 3rd number.');

if (z > x && z < y) {
  console.log('true');
} else {
  console.log('false');
}
