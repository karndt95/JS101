// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

let munstersCaseSwap = "";
for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === munstersDescription[i].toLowerCase()) {
    munstersCaseSwap += munstersDescription[i].toUpperCase();
  } else {
    munstersCaseSwap += munstersDescription[i].toLowerCase();
  }
}

console.log(munstersCaseSwap);