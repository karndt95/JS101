const MESSAGES = require('./calulator_messages.json');
const readline = require('readline-sync');
const LANGUAGE = 'en';

function messages(message, lang = LANGUAGE) {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages('welcome'));

while (true) {

  prompt(messages('firstNumber'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalidNumber'));
    number1 = readline.question();
  }

  prompt(messages('secondNumber'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalidNumber'));
    number2 = readline.question();
  }

  prompt(messages('operationNumber'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalidOperation'));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(messages('result') + output);

  prompt(messages('anotherCalc'));
  let anotherCalculation = readline.question().toLowerCase();

  while( anotherCalculation[0] !== 'y' && anotherCalculation[0] !== 'n') {
    prompt(messages('anotherInvalid'));
    anotherCalculation = readline.question().toLowerCase();
  }

  if (anotherCalculation[0] === 'n') {
    prompt(messages('exit'));
    process.exit(0);
  }
}