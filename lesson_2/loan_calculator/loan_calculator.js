const READLINE = require('readline-sync');
const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
let loanAmount;
let monthlyInterestRate;
let durationInMonths;
let monthlyPayment;
let annualPercentageRate;


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  number = cleanNumber(number);
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function cleanNumber(number) {
  number = number.replace('$', '');
  number = number.replace('%', '');
  return number;
}

prompt('Welcome to Loan Calculator!');
prompt('Please enter loan amount:');

loanAmount = READLINE.question();
loanAmount = cleanNumber(loanAmount);

while (invalidNumber(loanAmount)) {
  prompt("Hmm... that doesn't look like a valid number. Try again");
  loanAmount = READLINE.question();
}

prompt('Initial loan amount = ' + USD.format(loanAmount));
prompt('What is the annual percentage rate? Type in percentage format (ex. 5%)');
annualPercentageRate = cleanNumber(READLINE.question());

while(invalidNumber(annualPercentageRate)) {
  prompt('Hmm... that does not look like a valid number. Try again');
  annualPercentageRate = cleanNumber(READLINE.question());
}