/*
What Century is That?

Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
*/

function century(year) {
  let index = 0;

  while (index * 100 < year) {
    index += 1;
  }

  if (index % 100 === 11 ||
      index % 100 === 12 ||
      index % 100 === 13) {
        return `${index}th`;
      }

  let lastDigit = index % 10;
  switch (lastDigit) {
    case 1: return `${index}st`;
    case 2: return `${index}nd`;
    case 3: return `${index}rd`;
    default: return `${index}th`;
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
