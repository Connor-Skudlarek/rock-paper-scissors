function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = options[Math.floor(Math.random() * 3)];
  return choice;
}

function getPlayerChoice() {
  let option;
  switch (prompt("Type '1' (Rock), '2' (Paper), or '3' (Scissors)")) {
    case "1":
      option = "Rock";
      break;
    case "2":
      option = "Paper";
      break;
    case "3":
      option = "Scissors";
      break;
    default:
      option = "You didn't choose an option. You lose.";
  }
  return option;
}

function playRound(computerSelection, playerSelection) {
  let options = ["Rock", "Paper", "Scissors"];
  let result;
  // Confirms player choice is legitimate and in the the array of options
  if (options.indexOf(playerSelection) == -1) {
    console.log("Something went wrong!");
    console.log("Player chooses: " + playerSelection);
    console.log("Computer chooses: " + computerSelection);
    result = "You lose!";
    return result;
  }
  switch (options.indexOf(computerSelection)) {
    // Check if tie
    case options.indexOf(playerSelection):
      result = "You tie!";
      break;
    // Check if player choice is 1 further in list, if so player loses
    case options.indexOf(playerSelection) - 1:
      result = "You won!";
      break;
    // Check if player is 2 choices ahead in list, if so player loses
    case options.indexOf(playerSelection) - 2:
      result = "You lose!";
    // Check if computer choice is 1 ahead in list, if so player loses
    case options.indexOf(playerSelection) + 1:
      result = "You lose!";
      break;
    // Check if computer choice is 2 ahead in list, if so player wins
    case options.indexOf(playerSelection) + 2:
      result = "You won!";
      break;
    default:
      // Something went wrong, no case was met
      console.log("Something went wrong!");
      result = "You lose!";
      break;
  }

  console.log("Computer chooses: " + computerSelection);
  console.log("Player chooses: " + playerSelection);
  console.log(result);
  return result;
}

function checkScore(player, computer) {
  if (player > computer) {
    return "You won!";
  } else if (player < computer) {
    return "You lose!";
  }
  return "You tied!";
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let totalGames = 0;
//   while (totalGames < 5){
//       let result = playRound(getComputerChoice(), getPlayerChoice());
//       if (result == "You won!"){
//           playerScore += 1
//       } else if (result == "You lose!"){
//           computerScore += 1;
//       }
//       totalGames += 1;
//   }
//   console.log("Player score is: " + playerScore.toString());
//   console.log("Computer score is: " + computerScore.toString());
//   let finalScore = checkScore(playerScore, computerScore);
//   return finalScore;
// }

function updateScore(result) {
  if (result == "You won!") {
    playerScore += 1
  } else if (result == "You lose!"){
    computerScore += 1
  }
}


let playerScore = 0;
let totalGames = 0;
let computerScore = 0;


const rockButton = document.querySelector(".rock-button");
rockButton.addEventListener("click", function () {
  let roundResult = playRound(getComputerChoice(), rockButton.textContent);
  let roundResultDiv = document.querySelector(".round-results");
  let currentScore = document.querySelector(".score-tracker");
  let scoreBoard = document.querySelector(".games-until-over");
  updateScore(roundResult);
  totalGames++;
  let remainingGames = checkGameOver(playerScore, computerScore, totalGames)
  currentScore.textContent =
    "Current score is: " + playerScore + ". Total games: " + totalGames + ".";

  roundResultDiv.textContent = roundResult;
  scoreBoard.textContent = remainingGames;
});

const paperButton = document.querySelector(".paper-button");
paperButton.addEventListener("click", function () {
  let roundResult = playRound(getComputerChoice(), paperButton.textContent);
  let roundResultDiv = document.querySelector(".round-results");
  let currentScore = document.querySelector(".score-tracker");
  let scoreBoard = document.querySelector(".games-until-over");
  updateScore(roundResult);
  totalGames++;
  let remainingGames = checkGameOver(playerScore, computerScore, totalGames)
  currentScore.textContent =
    "Current score is: " + playerScore + ". Total games: " + totalGames + ".";

  roundResultDiv.textContent = roundResult;
  scoreBoard.textContent = remainingGames;
});

const scissorsButton = document.querySelector(".scissors-button");
scissorsButton.addEventListener("click", function () {
  let roundResult = playRound(getComputerChoice(), scissorsButton.textContent);
  let roundResultDiv = document.querySelector(".round-results");
  let currentScore = document.querySelector(".score-tracker");
  let scoreBoard = document.querySelector(".games-until-over");
  updateScore(roundResult);
  totalGames++;
  let remainingGames = checkGameOver(playerScore, computerScore, totalGames)
  currentScore.textContent =
    "Current score is: " + playerScore + ". Total games: " + totalGames + ".";

  roundResultDiv.textContent = roundResult;
  scoreBoard.textContent = remainingGames;
});

function checkGameOver(playerScore, computerScore, games){
  if (games > 5){
    return "The games are already over, but you can keep playing!"
  }
  if (games == 5){
    if (playerScore > computerScore){
      return "You win the games!"
    } else if (playerScore == computerScore) {
      return "You tied in the games!"
    } else {
      return "You lost the games!"
    }
  } else {
    let remainingGames = "There is still " + (5-games) + " more to go before a winner is called.";
    return remainingGames;
  }
}