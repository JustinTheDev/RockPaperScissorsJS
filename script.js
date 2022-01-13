
let computerDescision = ["rock","paper","scissors"];
let playerSelection;
let comSelection;
let playerScore = 0;
let computerScore = 0;
const displayDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const final = document.querySelector('#final-winner');
function computerPlay()
{
    return computerDescision[Math.floor(Math.random()*computerDescision.length)];
}
function playRound(computerSelection, userSelection)
{
    displayDiv.innerText  = "Game Started";
    switch(computerSelection)
    {
        case "rock":
            switch(userSelection)
            {
                case "rock":
                    return "Rock tied with Rock";
                    break;
                case "paper":
                    playerScore++;
                    return "Paper beats Rock, You Win!";
                    break;
                case "scissors":
                    computerScore++;
                    return "Rock beats Scissors, You Lose!";
                    break;
            }
            break;
        case "paper":
            switch(userSelection)
            {
                case "rock":
                    computerScore++;
                    return "Paper beats Rock, You Lose!";
                    break;
                case "paper":
                    return "Paper and Paper Tie!";
                    break;
                case "scissors":
                    playerScore++;
                    return "Scissors beats Paper, You Win!";
                    break;
            }
            break;
        case "scissors":
            switch(userSelection)
            {
                case "rock":
                    playerScore++;
                    return "Rock beats Scissors, You Win!";
                    break;
                case "paper":
                    computerScore++;
                    return "Scissors beats Paper, You Lose!";
                    break;
                case "scissors":
                    return "Scissors and Scissors Tie!";
                    break;
            }
            break;
    }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', function(){
        if(computerScore < 5 && playerScore <5)
        {
            comSelection=computerPlay();
            displayDiv.innerText = (playRound(comSelection, button.id));
            scoreDiv.innerText = "Player: " + playerScore + " Computer: " + computerScore;
            if(computerScore ===5 || playerScore === 5)
            {
                if(computerScore === 5)
                {
                    final.innerText = "The computer wins the game, refresh to play again!"
                }
                else if (playerScore === 5)
                {
                    final.innerText = "You win!  Refresh to play again."
                }
                else
                {
                    final.innerText = "Something went wrong, refresh to play again!";
                }
            }

        }
    });
});
