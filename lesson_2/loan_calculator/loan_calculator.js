const READLINE = require('readline-sync');
const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
let loanAmount;
let monthlyInterestRate;
let durationInYears;
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

while (true) {
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

  while (invalidNumber(annualPercentageRate)) {
    prompt('Hmm... that does not look like a valid number. Try again');
    annualPercentageRate = cleanNumber(READLINE.question());
  }
  monthlyInterestRate = Number(annualPercentageRate / 100) / 12;

  prompt('Enter loan duration in years');
  durationInYears = READLINE.question();

  while (invalidNumber(durationInYears)) {
    prompt("Hmm... that does not look like  a valid number. Try again");
    durationInYears = READLINE.question();
  }
  durationInMonths = Number(durationInYears) * 12;

  monthlyPayment = Number(loanAmount) *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-durationInMonths))));

  prompt(`Your monthly payment is ${USD.format(monthlyPayment)}`);

  prompt('Another calculation?');
  let answer = READLINE.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = READLINE.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
