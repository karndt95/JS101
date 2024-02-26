// Can you identify all of the variables, primitive values, and objects in the following code?
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);






/* SOLUTION:
There are 5 variables, 13 primitive values, and 2 objects. 
Re-examine the code if you found less before looking at the rest of the solution.

We counted 5 variables that are declared in this code snippet: 
the function name boo, 
the scare parameter of the function, 
myBoo declared on line 2, 
halloweenCollection declared as a constant on line 6, 
and the global myBoo variable, on line 12. 
Note that console is also technically a variable name, as console is a property of the global object.

The objects are pretty straightforward. 
There is the boo function object, and the object literal referenced by halloweenCollection. 
One could further include the log and toUpperCase methods, as well as the console object. 
Methods are just functions referenced by object properties.

There are a lot of primitive values, so we've made a list:

The keys and values from the halloweenCollection object are all strings. 
That includes "greet", "scare", "wish", "Happy Halloween", "Boo", and "May all your pumpkins be glowing".
On line 12, we're passing the value of the greet property to the boo function by value. 
Namely, we're passing a copy of the string "Happy Halloween". On that same line, the string "greet" is used to access that value.
Inside of the function body, on line 2, scare.toUpperCase() returns a new string, "HAPPY HALLOWEEN", 
which is going to be concatenated with another string, "!!!". 
Ultimately, the concatenation results in yet another string, "HAPPY HALLOWEEN!!!", which is what myBoo is initialized to.
On the next line, the value of myBoo is passed into console.log by value, i.e. a copy of that string is passed and logged to the console.
Finally, the function returns undefined, which is assigned to the global myBoo, on line 12.

*/