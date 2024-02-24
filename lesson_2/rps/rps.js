const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'spock' && computerChoice === 'scissors');
}

function displayWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    prompt(MESSAGES["tie"]);
  } else if (playerWins(choice, computerChoice)) {
    prompt(MESSAGES['win']);
    playerScore += 1;
  } else {
    prompt(MESSAGES['lose']);
    computerScore += 1;
  }
}

function restoreToOrginalString(string) {
  switch (string) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 'l': return 'lizard';
    case 'sp': return 'spock';
    case 'sc': return 'scissors';
    default: return string;
  }
}

function checkGameOver() {
  if (playerScore === 3) {
    gameOver('Player');
    return true;
  } else if (computerScore === 3) {
    gameOver('Computer');
    return true;
  } 
  return false;
}

function gameOver(winner) {
  prompt(`Game Over! ${winner} wins!`);
  computerScore = 0;
  playerScore = 0;
}

function playAgain() {
  prompt(MESSAGES['playAgain']);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  if (choice.length <= 2) {
    choice = restoreToOrginalString(choice);
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt(MESSAGES['invalid']);
    choice = readline.question();
    if (choice.length <= 2) {
      choice = restoreToOrginalString(choice);
    }
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);
  prompt(`Player Score: ${playerScore} Computer Score: ${computerScore}`);

  if(checkGameOver) {
    let answer = playAgain();
  if (answer[0] !== 'y') break;
  }
    
  
}