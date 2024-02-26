/*
Tip Calculator

Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

const readline = require('readline-sync');
const TO_PERCENTAGE = 100;

console.log('What is the bill?');
let bill = Number(readline.prompt());

console.log('What is the tip percentage?');
let tip = Number(readline.prompt());
tip /= TO_PERCENTAGE;

console.log(`The tip is $${tip * bill}`);
console.log(`The total is $${bill + (tip * bill)}`);