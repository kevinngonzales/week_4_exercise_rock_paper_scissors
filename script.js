//declaring global variables
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let roundNumber = 0;

// function to get rock, paper, or scissors from computer using math.random()
function getComputerChoice() { 
  var randomMove = Math.random();
  if (randomMove < 0.33) {
    return "rock";
  } else if (randomMove < 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}

// function to play a round. prompt user for input
function playRound() {
  const computerChoice = getComputerChoice();
  let playerChoice;
// used while loop to make sure user enters valid input
  while (true) {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    if (playerChoice === null) {
      return;
    } else if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      break;
    } else {
      alert("Please enter rock, paper, or scissors!");
      return;
    }
  }
// comparing player choice to computer choice and determining who wins or if it is a tie
// alert the outcome and round and then log the wins
// iterate player wins, computer wins, ties, and round number to alert user
  if (playerChoice === computerChoice) {
    alert("It is a tie!");
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    alert("You win!");
    playerWins++;
  } else {
    alert("Computer Wins");
    computerWins++;
  }
  roundNumber++;
  alert(`Round Number: ${roundNumber}, Ties: ${ties} Player: ${playerWins}, Computer: ${computerWins}`);   
}

// function to play multiple rounds depending on the wins
function playGame() {
// use while loop to continue the game if wins are less than 2
  while (playerWins < 2 && computerWins < 2) {
    playRound();
// if either player wins 2 times break and alert
    if (playerWins === 2) {
      alert("You have won!");
      break;
    } else if (computerWins === 2) {
      alert("You lost!");
      break;
    } 
  }  
}

// call the function to play the game
playGame();

