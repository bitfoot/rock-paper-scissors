function getComputerChoice() {
    const choices = [
        "rock",
        "paper",
        "scissors"
    ]
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getPlayerChoice() {
    let validChoice;
    while (!validChoice) {
        let choice = prompt("Rock, paper, or scissors?");
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            validChoice = choice;
        } else {
            console.log("That choice is not valid, please try again.");
        }
    }
    
    return validChoice;
}

function playRound(playerSelection, computerSelection) {
    let stringToReturn;
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            stringToReturn = "Draw! Rock versus Rock."
        } else if (playerSelection === "paper") {
            stringToReturn = "You Win! Paper beats Rock."
        } else {
            stringToReturn = "You Lose! Rock beats Scissors."
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            stringToReturn = "You Lose! Paper beats Rock."
        } else if (playerSelection === "paper") {
            stringToReturn = "Draw! Paper versus Paper."
        } else {
            stringToReturn = "You Win! Scissors beats Paper."
        }
    } else {
        if (playerSelection === "rock") {
            stringToReturn = "You Win! Rock beats Scissors."
        } else if (playerSelection === "paper") {
            stringToReturn = "You Lose! Scissors beats Paper."
        } else {
            stringToReturn = "Draw! Scissors versus Scissors."
        }
    }
    return stringToReturn;
}