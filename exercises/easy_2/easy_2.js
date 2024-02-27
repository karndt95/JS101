/*
Greeting a user

Write a program that will ask for user's name. 
The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.

Examples

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/
const readline = require(readline-sync);

let username = readline.question('What is your name?');

function greet(name) {
  if (name.endsWith('!')) {
    name = name.slice(0, -1);
    return `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;
  } else {
    return `Hello ${name}.`;
  }
}

console.log(greet(username));
console.log(greet('Bob'));
console.log(greet('Bob!'));