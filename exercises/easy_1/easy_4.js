/*
How big is the room?

Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/
const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Will you be using meters or feet?');
let conversionFrom = readline.prompt().toLowerCase();
console.log(conversionFrom);

while (conversionFrom !== 'meters' && conversionFrom !== 'feet') {
  console.log('Please type "meters" or "feet"');
  conversionFrom = readline.prompt().toLowerCase();
}

console.log(`Enter the length of the room in ${conversionFrom}:`);
let length = readline.prompt();

console.log(`Enter the width of the room in ${conversionFrom}:`);
let width = readline.prompt();

let squareArea = Number(length) * Number(width);

if (conversionFrom === 'meters') {
  console.log(`The area of the room is ${squareArea.toFixed(2)} square ${conversionFrom} (${(squareArea * SQMETERS_TO_SQFEET).toFixed(2)} square feet).`);
} else {
  console.log(`The area of the room is ${squareArea.toFixed(2)} square ${conversionFrom} (${(squareArea / SQMETERS_TO_SQFEET).toFixed(2)} square meters).`);
}


