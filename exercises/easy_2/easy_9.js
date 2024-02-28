/*
How Old is Teddy?

Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).

Example Output:

Teddy is 69 years old!
*/

function randomAge() {
  let floor = 20;
  let ceil = 120
  return Math.floor(Math.random() * (ceil - floor + 1) + floor);
}

console.log(`Teddy is ${randomAge()} years old!`);