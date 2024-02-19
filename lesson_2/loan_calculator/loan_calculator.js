const READLINE = require('readline-sync');
const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
let loanAmount;
let monthlyInterestRate;
let durationInMonths;
let monthlyPayment;


function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Loan Calculator!');

