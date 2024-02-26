/*
Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/
const readline = require('readline-sync');

console.log('Please enter an integer greater than 0:')
let num = Number(readline.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let sumOrProduct = readline.prompt();

let number = num;

if (sumOrProduct === 's') {
  let sum = 0;
  while (number > 0) {
    sum += number;
    number -= 1;
  }
  console.log('The sum of integers between 1 and ' + num + ' is ' + sum + '.');
} else {
  let product = 1;
  while (number > 0) {
    product *= number;
    number -= 1;
  }
  console.log(`The product of integers between 1 and ${num} is ${product}.`);
}