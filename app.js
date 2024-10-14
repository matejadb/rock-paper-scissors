function getComputerChoice() {
  /*
  Computer Choice can have 3 values (Rock, Paper or Scissors). They are represented by randomly generated numbers, like:
    1 - Rock
    2 - Paper
    3 - Scissors
  */

  return Math.floor(Math.random() * (3 - 2 + 1)) + 1;
}

function getHumanChoice() {
  /*
    Human Choice also has 3 values. Human inputs the choice into the prompt window.
    The choices have to be numbers in between 1 and 3. 
    IF the numbers are less than 1 OR higher than 3 THEN the user has to input the choice again 
  */

  function getUserInput() {
    var userInput = parseInt(
      prompt("Enter your choice: 1 - Rock, 2 - Paper, 3 - Scissors")
    );

    return userInput;
  }

  var input = getUserInput();

  while (input < 1 || input > 3) {
    input = getUserInput();
  }

  return input;
}

var humanScore = 0;
var computerScore = 0;
