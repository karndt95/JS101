/*
Grade Book

Write a function that determines the mean (average) of the three scores passed to it, 
and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100. 
There is no need to check for negative values or values greater than 100.

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
*/

function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;
  switch (true) {
    case (average >= 90):
      return 'A';
    case (average >= 80):
      return 'B';
    case (average >= 70):
      return 'C';
    case (average >= 60):
      return 'D';
    case (average < 60):
      return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));