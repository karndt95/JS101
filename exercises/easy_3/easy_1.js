/*
ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value 
of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

function crunch(string) {
  let lastLetter = "";
  let newString = "";
  for (let index = 0; index < string.length; index += 1) {
    if (string.charAt(index) !== lastLetter) {
      lastLetter = string.charAt(index);
      newString += string.charAt(index);
    }
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log('a');
console.log('');