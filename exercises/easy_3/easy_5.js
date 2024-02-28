/*
Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, 
and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

function triangle(num) {
  let string = "";
  for (let index = 1; index <= num; index += 1) {
    string += " ".repeat(num - index) + "*".repeat(index) + "\n";
  }
  return string;
}

console.log(triangle(5));
console.log(triangle(9));