// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// 34 because primitaves are immutable  so answer is not affected from the function invocation of messWithIt.


/* SOLUTION:

34

*/