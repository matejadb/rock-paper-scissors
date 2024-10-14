function getComputerChoice() {
  /*
  Computer Choice can have 3 values (Rock, Paper or Scissors). They are represented by randomly generated numbers, like:
    1 - Rock
    2 - Paper
    3 - Scissors
  */

  return Math.floor(Math.random() * (3 - 2 + 1)) + 1;
}
