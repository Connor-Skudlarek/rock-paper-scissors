function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*3)]
    return choice;
}

function getPlayerChoice(){
    let option;
    switch(prompt("Type '1' (Rock), '2' (Paper), or '3' (Scissors)")){
        case "1":
            option = "Rock";
            break;
        case "2":
            option = "Paper";
            break;
        case "3":
            option = "Scissors"
            break;
        default:
            option = "You didn't choose an option. You lose."
    }
    return option;
}

function playRound(computerSelection, playerSelection){
    let options = ["Rock", "Paper", "Scissors"];
    let result;
    // Confirms player choice is legitimate and in the the array of options
    if(options.indexOf(playerSelection) == -1){
        console.log("Something went wrong!");
        console.log("Player chooses: " + playerSelection);
        console.log("Computer chooses: " + computerSelection);
        result = "You lose!"
        return result;
    }
    switch(options.indexOf(computerSelection)){
        // Check if tie
        case options.indexOf(playerSelection):
            result = "You tie!";
            break;
        // Check if player choice is 1 further in list, if so player loses
        case options.indexOf(playerSelection) - 1:
            result = "You won!"
            break;
        // Check if player is 2 choices ahead in list, if so player loses
        case options.indexOf(playerSelection) - 2:
            result = "You lose!"
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
            result = "You lose!"
            break;
    }

    console.log("Computer chooses: " + computerSelection);
    console.log("Player chooses: " + playerSelection);
    console.log(result);
    return result;
}

function checkScore(player, computer){
    if (player > computer){
        return "You won!"
    } else if (player < computer){
        return "You lose!"
    }
    return "You tied!"
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let totalGames = 0;
    while (totalGames < 5){
        let result = playRound(getComputerChoice(), getPlayerChoice());
        if (result == "You won!"){
            playerScore += 1
        } else if (result == "You lose!"){
            computerScore += 1;
        }
        totalGames += 1;
    }
    console.log("Player score is: " + playerScore.toString())
    console.log("Computer score is: " + computerScore.toString())
    let finalScore = checkScore(playerScore, computerScore)
    return finalScore;
}