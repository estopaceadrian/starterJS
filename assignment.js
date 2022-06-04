

1. Write a JS program to find the power of a number using for loop.
  var exponent = 5;
  var mainNumber = 9;
  var prevNumber = mainNumber;
  for (let count = 1; count <exponent; count++) {
      prevNumber=(mainNumber*prevNumber);
  }   console.log(prevNumber);


2. Write a JS program to create this pattern given a number.
e.g. input is 8.

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8


var limit =8;
var char = ""
var temp= 1;
for (let i = 0; i<limit;i++){
    char += temp;
    console.log(char + "");
    temp += 1;
}


3. Write a JS program to print the Fibonacci series for a given value of N using for, while, and do -while loops.
// FOR
var input = 10;
var newNumber = 1;
var prevNumber = 0;
var storageNumber = 0;

for (let count = 0; count < input; count++) {
    storageNumber = prevNumber +newNumber;
    newNumber = prevNumber;
    console.log(newNumber);
    prevNumber = storageNumber;
} 

//WHILE
var input = 10;
var newNumber = 1;
var prevNumber = 0;
var storageNumber = 0;
var count= 0;
while (count!=input) {
    storageNumber = prevNumber +newNumber;
    newNumber = prevNumber;
    console.log(newNumber);
    prevNumber = storageNumber;
    count++;
} 

// DO WHILE
var input = 10;
var newNumber = 1;
var prevNumber = 0;
var storageNumber = 0;
var count= 0;

do {
    storageNumber = prevNumber +newNumber;
    newNumber = prevNumber;
    console.log(newNumber);
    prevNumber = storageNumber;
    count++;
} while ( count != input );


4. Write a JS program to find N value in the Fibonacci series for a given number e.g.N = 5 print out the 5th value in the sequence
var input = 5;
var newNumber = 1;
var prevNumber = 0;
var storageNumber = 0;

for (let count = 0; count < input; count++) {
    storageNumber = prevNumber +newNumber;
    newNumber = prevNumber;
    prevNumber = storageNumber;
   
} console.log(newNumber);

5. Write a JS program to find the Armstrong numbers of 3 digits. 
An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
For example, 371 is an Armstrong number since 3 ** 3 + 7 ** 3 + 1 ** 3 = 371.

6. Write a JS program to compute the greatest common divisor (GCD) of two positive integers.
7. Write a JS program to sum the multiples of 3 and 5 under 1000.
8. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
e.g. 4,9,1
output: 1, 4, 9



9. Write a JS program to find the factorial of a number.
e.g. 5
output: 120
var input = 5;
var factor = 1; 
for (let count = 0; count < input; count++) {
    factor +=factor*count;
    console.log(factor);
}  

10. Write a JS program that will allow someone to guess a four-digit pin exactly 4 times. If the user guesses the number correctly, it prints “That was correct!” Otherwise, it will print “Sorry that was wrong.” The program stops after the 4th attempt regardless if they got it right or wrong. Consider the 4-digit PIN to be a variable.
var x = parseInt(prompt('Enter Pin:'));
var pin = 1239
var count = 0;
while(count !== 3){
    if(x!=pin){
       x = prompt('Sorry that was wrong.');
    } else   {
         x = prompt('That was correct!');
    } 
    count++;
}

