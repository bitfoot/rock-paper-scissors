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
    let message;
    const score = {
        player: 0,
        computer: 0
    };

    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            message = "Draw! Rock versus Rock."
        } else if (playerSelection === "paper") {
            message = "You Win! Paper beats Rock."
            score.player += 1;
        } else {
            message = "You Lose! Rock beats Scissors."
            score.computer += 1;
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            message = "You Lose! Paper beats Rock."
            score.computer += 1;
        } else if (playerSelection === "paper") {
            message = "Draw! Paper versus Paper."
        } else {
            message = "You Win! Scissors beats Paper."
            score.player += 1;
        }
    } else {
        if (playerSelection === "rock") {
            message = "You Win! Rock beats Scissors."
            score.player += 1;
        } else if (playerSelection === "paper") {
            message = "You Lose! Scissors beats Paper."
            score.computer += 1;
        } else {
            message = "Draw! Scissors versus Scissors."
        }
    }
    console.log(message);
    return score;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const roundScore = playRound(playerChoice, computerChoice);
        playerScore += roundScore.player;
        computerScore += roundScore.computer;
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! You win ${playerScore} to ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose ${playerScore} to ${computerScore}.`);
    } else {
        console.log(`It's a draw! ${playerScore} to ${computerScore}.`);
    }
}