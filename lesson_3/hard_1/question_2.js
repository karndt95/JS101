// What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);







/* SOLUTION:

{
  first: [1, 2];
}

Since numArray is a reference to the original array, [1], numArray.push(2) modifies this array. 
Thus, the original object referenced by object is changed. 
If, instead of modifying the original object, we want to modify numArray but not object, we have two options:

We can declare and initialize numArray with a reference to a copy of the original array:

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);

*/