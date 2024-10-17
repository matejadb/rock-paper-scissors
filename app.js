function getComputerChoice() {
  /*
  Computer Choice can have 3 values (Rock, Paper or Scissors). They are represented by randomly generated numbers, like:
    1 - Rock
    2 - Paper
    3 - Scissors
  */
  var computerInput;
  computerCase = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (computerCase === 1) {
    computerInput = "rock";
  } else if (computerCase == 2) {
    computerInput = "paper";
  } else {
    computerInput = "scissors";
  }
  return computerInput;
}

function getHumanChoice() {
  /*
    Human Choice also has 3 values. Human inputs the choice into the prompt window.
  */

  var userInput = prompt("Enter your choice: ");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats paper!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!");
    computerScore++;
  } else {
    console.log("It's a draw!");
  }
}

var humanScore = 0;
var computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
