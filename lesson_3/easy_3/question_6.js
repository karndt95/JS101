/*
Examine the following code carefully. 
Can you identify all of the variables, primitive values, 
and objects that exist when this code executes?
*/

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);







/* SOLUTION:

There are 6 variables, 9 primitive values, and 2 objects. 
If you counted less, you might want to have another look at the code before reading through the rest of the answer to find the ones you missed yourself.

The variables are as follows: 
arr declared on line 1, 
newArr on line 2, n
um and newNum declared on lines 4 and 5 respectively, 
double, which is the name of the function defined on lines 7-9, 
and num, the function parameter. 
Note that this num is different to the num declared on line 4, which is a global variable.

For primitives, we have the number elements of arr, 1, 2 and 3. 
On line 4, num is assigned to a copy of the first array element, 1. 
Note that the number 0 is used to access that element, which is also a primitive. 
On the next line, newNum is assigned yet another copy of the number 1. 
On line 8, inside the function body, the number 2 is used. 
Finally, on the last line, double is invoked with the value of newNum being passed as an argument. 
Remember that primitives are passed by value? This means that the parameter num receives a copy of the number 1. 
The function then returns the product of 1 * 2, which is the number 2.

There are only two objects in this code. 
The array referenced by arr and newArr, and the function double. 
There may be three pointers, but only two distinct objects.

*/