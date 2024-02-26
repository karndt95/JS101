/*
Odd Numbers

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 1) {
    console.log(number);
  }
}

/*
Further Exploration
Repeat this exercise with a technique different from the one that you used, and different from the one provided. 
Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

const readline = require('readline-sync');
console.log('Min number?');
let minNumber = Number(readline.question());
console.log('Max number?');
let maxNumber = Number(readline.question());

while (minNumber <= maxNumber) {
  if (Math.abs(minNumber) % 2 === 1) {
    console.log(minNumber);
    minNumber += 2;
  } else {
    minNumber += 1;
  }
}