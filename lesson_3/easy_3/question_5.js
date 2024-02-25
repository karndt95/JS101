/*
The following function unnecessarily uses two return statements to return boolean values. 
Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
*/
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}



/* SOLUTION:

We can simplify this function like this:

function isColorValid(color) {
  return color === "blue" || color === "green";
}

In functions that return a boolean value, you often don't need separate return statements for the true and false cases. 
Instead, you can return the value of a conditional expression directly.

We can also use an arrow function to simplify the code even more:

const isColorValid = color => color === "blue" || color === "green";

Another tweak you can make is to use the Array.prototype.includes method; 
this works especially well when you have more than 2 choices:

const isColorValid = color => ["blue", "green"].includes(color);

All of these functions have the same results.

*/