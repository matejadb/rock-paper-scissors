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

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
}
