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

	function checkScore(humanScore, computerScore) {
		if (humanScore == 5) {
			announcementOutput.textContent = "The player wins!";
		} else if (computerScore == 5) {
			announcementOutput.textContent = "The computer wins!";
		}
	}

	let scoreContainer = document.createElement("div");
	scoreContainer.classList.add("scoreContainer");

	let humanScoreOutput = document.createElement("p");
	let computerScoreOutput = document.createElement("p");
	let announcementOutput = document.createElement("p");

	function appendOutput(
		humanScoreOutput,
		computerScoreOutput,
		announcementOutput
	) {
		scoreContainer.appendChild(humanScoreOutput);
		scoreContainer.appendChild(computerScoreOutput);
		scoreContainer.appendChild(announcementOutput);
	}
	function playRound(humanChoice, computerChoice) {
		if (humanChoice === "paper" && computerChoice === "rock") {
			announcementOutput.textContent = "You win! Paper beats rock!";
			humanScore++;
			humanScoreOutput.textContent = "Your score: " + humanScore;
			computerScoreOutput.textContent = "Computer score: " + computerScore;
			appendOutput(humanScoreOutput, computerScoreOutput, announcementOutput);
		} else if (humanChoice === "paper" && computerChoice == "scissors") {
			announcementOutput.textContent = "You lose! Scissors beats paper!";
			computerScore++;
			humanScoreOutput.textContent = "Your score: " + humanScore;
			computerScoreOutput.textContent = "Computer score: " + computerScore;
			appendOutput(humanScoreOutput, computerScoreOutput, announcementOutput);
		} else if (humanChoice === "rock" && computerChoice === "scissors") {
			announcementOutput.textContent = "You win! Rock beats scissors!";
			humanScore++;
			humanScoreOutput.textContent = "Your score: " + humanScore;
			computerScoreOutput.textContent = "Computer score: " + computerScore;
			appendOutput(humanScoreOutput, computerScoreOutput, announcementOutput);
		} else if (humanChoice === "rock" && computerChoice === "paper") {
			announcementOutput.textContent = "You lose! Paper beats rock!";
			computerScore++;
			humanScoreOutput.textContent = "Your score: " + humanScore;
			computerScoreOutput.textContent = "Computer score: " + computerScore;
			appendOutput(humanScoreOutput, computerScoreOutput, announcementOutput);
		} else if (humanChoice === "scissors" && computerChoice === "paper") {
			announcementOutput.textContent = "You win! Scissors beats paper!";
			humanScore++;
			humanScoreOutput.textContent = "Your score: " + humanScore;
			computerScoreOutput.textContent = "Computer score: " + computerScore;
			appendOutput(humanScoreOutput, computerScoreOutput, announcementOutput);
		} else if (humanChoice === "scissors" && computerChoice === "rock") {
			announcementOutput.textContent = "You lose! Rock beats scissors!";
			computerScore++;
			humanScoreOutput.textContent = "Your score: " + humanScore;
			computerScoreOutput.textContent = "Computer score: " + computerScore;
			appendOutput(humanScoreOutput, computerScoreOutput, announcementOutput);
		} else {
			announcementOutput.textContent = "It's a draw!";
			scoreContainer.appendChild(announcementOutput);
		}
	}

	let rockButton = document.createElement("button");
	let paperButton = document.createElement("button");
	let scissorsButton = document.createElement("button");

	rockButton.textContent = "Rock";
	paperButton.textContent = "Paper";
	scissorsButton.textContent = "Scissors";

	document.body.appendChild(rockButton);
	document.body.appendChild(paperButton);
	document.body.appendChild(scissorsButton);
	document.body.append(scoreContainer);
	rockButton.addEventListener("click", () => {
		const computerChoice = getComputerChoice();
		console.log(computerChoice);
		playRound("rock", computerChoice);
		checkScore(humanScore, computerScore);
	});

	paperButton.addEventListener("click", () => {
		const computerChoice = getComputerChoice();
		console.log(computerChoice);
		playRound("paper", computerChoice);
		checkScore(humanScore, computerScore);
	});

	scissorsButton.addEventListener("click", () => {
		const computerChoice = getComputerChoice();
		console.log(computerChoice);
		playRound("scissors", computerChoice);
		checkScore(humanScore, computerScore);
	});
}

playGame();
