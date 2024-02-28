/*
When Will I Retire?

Build a program that logs when the user will retire and 
how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const date = new Date();
const readline = require('readline-sync');
let year = date.getFullYear();

let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));
let yearsUntilRetirement = retirementAge - age;

console.log(`It's ${year}. You will retire in ${year + yearsUntilRetirement}.`);
console.log(`You only have ${yearsUntilRetirement} of work to go!`);
