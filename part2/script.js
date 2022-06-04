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


var x = prompt('Enter the 1st number.');
var y = prompt('Enter the 2nd number.');
var z = prompt('Enter the 3rd number.');

if (z > x && z < y) {
  console.log('true');
} else {
  console.log('false');
}


// var x = parseInt(prompt('Enter the 1st number:'));
// var y = parseInt(prompt('Enter the 2st number:'));
// var operator = prompt('Enter the operator:');

if (operator == 'add') {
  console.log('the sum of 1st and 2nd is ' + (x + y));
} else if (operator == 'subtract') {
  console.log('the difference of 1st and 2nd is ' + (x - y));
} else if (operator == 'multiply') {
  console.log('the product of 1st and 2nd is ' + x * y);
} else if (operator == 'divide') {
  console.log('the quotient of 1st and 2nd is ' + x / y);
} else if (operator == 'modulo') {
  console.log('the remainder of 1st and 2nd is ' + (x % y));
} else {
  alert('enter either add, subtract, multiply, divide or modulo');
}


var row = parseInt(prompt('Enter number of pyramid row: '));
var string = '';
var count = 0;
while (count != row) {
  string += 'x';
  console.log(string);
  count++;
}

var x = parseInt(prompt('Enter the a number: '));
var ast = ' ';
while(x!=0){
     ast = ast+"*"
    console.log(ast);
    x--;
}

var x = '';
var count = 0;
while(count !== 3){
    x = prompt('write down the food:');
    confirm('are you sure?');
    count++;
}
alert('you are craving for' +x);

var row = 4
var x = '';
var count = 0;
while(count !== row){
    x += '*';
    console.log(x);
    count++;
}

var limit = parseInt(prompt('Enter number:'));
var counter = 0;
while(counter <= limit){
	if (counter%2 === 0){
		console.log('EVEN:',counter)
		counter++;
		counter++;
	}
}

var x= 30;
var counter = 0;

while(counter<=x){
    if((x%3===0)&&(x%5===0)){
        console.log(counter+'fizzBuzz');
  
    }else if (x%5===0){
        console.log('fiz');
 
    }else if(x%3===0){
        console.log('fiz');
     
    }
    
}

var limit = 30;
for(counter = 2; counter <= limit; counter++){
	if ((!(counter%3)) && (!(counter%5))){
		console.log(counter + '-' + 'fizzbuzz')
		} else if (!(counter%3)){
		console.log(counter + '-' + 'buzz')
		} else if (!(counter%5)){
		console.log(counter + '-' + 'fizz')
	}
}



//WHILE

var x = '';
var count = 0;
while(count !== 3){
    x = prompt('write down the food:');
    confirm('are you sure?');
    count++;
}

//DO WHILE
var limit = parseInt(prompt('Enter number: '));
var counter = 9;
do {
	console.log(counter);
	counter++;
} while (limit != counter)

// FOR
var limit = parseInt(prompt('Enter # of sequence:'));
var char = ""
for (let i = 0; i<limit;i++){
  char += "*"
  console.log(char + "");
}


var input = parseInt(prompt('Enter a number:'));
for(i=0; i<=input; i++){
    if(!(i%2)){
        console.log(i);
    }
}
*/
