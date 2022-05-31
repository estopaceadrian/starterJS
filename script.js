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

//  type conversion
const inputYear = 1991;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" + "3");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

//truthy falsy

// 55 falsy values: 0, '', undefined, null, NAN (number)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Adrian"));
console.log(Boolean(""));

const money = 1;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age = "18";
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //'23'===23
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a ccool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
