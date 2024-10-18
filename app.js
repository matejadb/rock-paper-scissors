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

function playGame() {
  var humanScore = 0;
  var computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock!");
      humanScore++;
      console.log("Your score: " + humanScore);
      console.log("Computer score: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats paper!");
      computerScore++;
      console.log("Your score: " + humanScore);
      console.log("Computer score: " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors!");
      humanScore++;
      console.log("Your score: " + humanScore);
      console.log("Computer score: " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock!");
      computerScore++;
      console.log("Your score: " + humanScore);
      console.log("Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats paper!");
      humanScore++;
      console.log("Your score: " + humanScore);
      console.log("Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats scissors!");
      computerScore++;
      console.log("Your score: " + humanScore);
      console.log("Computer score: " + computerScore);
    } else {
      console.log("It's a draw!");
    }
  }

  for (var i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("You lose! The computer wins...");
  } else {
    console.log("The game ended in a draw!");
  }
}

playGame();
