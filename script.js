/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let Jonas_Matilda = "JM";
let $function = 27;

let PI = 3.14;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1;

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);

let year;
year = 1991;
console.log(year);
console.log(typeof year);

let age = 30;
age = 23;

const birthYear = 1991;
// birthYear = 1990;

var job = "programmer";
job = "teacher";

lastName = "estopace";
console.log(lastName);

 

const now = 2035;
const ageAdrian = now - 1994;
const ageTdrian = now - 1992;
console.log(ageAdrian, ageTdrian);

console.log(ageAdrian * 2, ageAdrian / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2* 2* 2
const firstName = "Adrian";
const lastName = "Estopace";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// comparison operators

console.log(ageAdrian > ageTdrian);
console.log(ageTdrian >= 19);
 

const now = 2035;
const ageJonas = now - 1994;
const ageSarah = now - 1992;

console.log(now - 1991 > now - 2015);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);


//STRING
const firstName = "Adrian";
const job = "teacher";
const birthYear = 1992;
const year = 2022;
const adrian =
  "I'm" + firstName + ", a " + (year - birthYear) + " years old" + job + "!";

console.log(adrian);

const adrianNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(adrianNew);

console.log(`Just a regular string...`);
console.log("String with \n\
added");

console.log(`string
multiple
lines`);
*/

const age = 11;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗 ");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years!`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
