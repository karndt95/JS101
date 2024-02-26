// Given the following similar sets of code, what will each code snippet print?

// A)
function messWithVarsA(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVarsA(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// B)
function messWithVarsB(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVarsB(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// C)
function messWithVarsC(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVarsC(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


/* SOLUTION: 

A)

"one is: one"
"two is: two"
"three is: three"

The messWithVars function has three parameters, one, two, and three, that shadow their global counterparts. 
When the messWithVars function is invoked, it is passed the array references that are assigned to the one, two and three global variables.

Within the messWithVars function, the local versions of one, two and three are reassigned from lines 2 to 4. 
Due to variable shadowing, these reassignments have no effect on the global versions. 
Thus, lines 13 through 15 log the values of the global one, two and three variables.

B)

"one is: one"
"two is: two"
"three is: three"

As with the first snippet, this version of messWithVars has three parameters that shadow their global counterparts. 
Likewise, it only performs reassignments to local variables so 
that the values that are logged by lines 13 through 15 are the values of the global one, two and three variables.

Though this detail has no outcome on the final output, 
it's important to note that within the messWithVars function, the local variables of one, two and three are being reassigned to brand new arrays. 
Which means they don't use any of the references that were passed to the function when it was invoked on line 11.

C)

"one is: two"
"two is: three"
"three is: one"

As with the first two snippets, this version of messWithVars has three parameters that shadow their global counterparts. 
Unlike the other two snippets, this version invokes the splice method on each of its arguments. 
splice is a destructive operation and will mutate the arrays that are being passed into messWithVars.

Because arrays are passed by reference, when the messWithVars function executes splice, the changes to each array will be seen outside of the function's invocation. 
So, when the values for the one, two and three global variables are logged on lines 13 to 15, the mutated arrays are what get printed.

Each splice invocation deletes the first element in the array that it's called on and inserts a new string value in its place.

*/