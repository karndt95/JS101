/*
Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, 
you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "
*/

function cleanUp(sentence) {
  return sentence.replace(/[^a-z]/gi, ' ').replace(/\s+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));