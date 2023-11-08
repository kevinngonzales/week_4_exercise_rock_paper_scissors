let playerWins = 0;
let computerWins = 0;
let ties = 0;
let roundNumber = 0;
let score = document.getElementById("displayResults")
let winLossTitle = document.getElementById("title");

let roundCount = document.getElementById("roundCount");
let tieCount = document.getElementById("tieCount");
let winCount = document.getElementById("winCount");
let lossCount = document.getElementById("lossCount");

var newButton1 = document.createElement("button");
var newButton2 = document.createElement("button");
var newButton3 = document.createElement("button");

body.appendChild(newButton1);
newButton1.id = "button1";
newButton1.innerHTML = "Rock";
body.appendChild(newButton2);
newButton2.id = "button2";
newButton2.innerHTML = "Paper";
body.appendChild(newButton3);
newButton3.id = "button3";
newButton3.innerHTML = "Scissors";

newButton1.style.display = "none";
newButton2.style.display = "none";
newButton3.style.display = "none";

var playGameButton = document.createElement("button");


body.appendChild(playGameButton);
playGameButton.id = "playGameButton";
playGameButton.innerHTML = "Play";
playGameButton.addEventListener("click", removePlayButton);

newButton1.addEventListener("click", () => playRound("rock"));
newButton2.addEventListener("click", () => playRound("paper"));
newButton3.addEventListener("click", () => playRound("scissors"));

function removePlayButton() {
  roundNumber = 0;
  ties = 0;
  playerWins = 0;
  computerWins = 0;
  updateScore();
  title.innerText = " ";
playGameButton.style.display = "none";
  newButton1.style.display = "";
  newButton2.style.display = "";
  newButton3.style.display = "";
}


function removePlayButtons() {
  newButton1.style.display = "none";
  newButton2.style.display = "none";
  newButton3.style.display = "none";
  playGameButton.style.display = "";
}


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


function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    alert("It was a tie!")
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) { 
    alert("You won!");
    playerWins++;
  } else {
    alert("You lost!");
    computerWins++;
  }
  console.log(playerChoice);
  roundNumber++;
  updateScore();
  resetGame();
}


function resetGame() {
  if (playerWins === 5) {
  title.innerText = "You Win! Play Again?";
    removePlayButtons();
  }
  else if (computerWins === 5) {
    title.innerText = "You Lost! Play Again?";
    removePlayButtons();
    }
  }


function updateScore() {
  roundCount.innerText = roundNumber;
  tieCount.innerText = ties;
  winCount.innerText = playerWins;
  lossCount.innerText = computerWins;
}

