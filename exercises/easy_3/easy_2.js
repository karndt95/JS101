/*
Bannerizer

Write a function that will take a short line of text, 
and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
*/

function logInBox(sentence) {
  let box = `+-${"-".repeat(sentence.length)}-+`;
  box += `\n| ${" ".repeat(sentence.length)} |`;
  box += `\n| ${sentence} |`;
  box += `\n| ${" ".repeat(sentence.length)} |`;
  box += `\n+-${"-".repeat(sentence.length)}-+`

  return box;
}

console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox(''));