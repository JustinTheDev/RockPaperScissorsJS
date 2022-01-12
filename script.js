
let computerDescision = ["rock","paper","scissors"];
let playerSelection;
let comSelection;
const displayDiv = document.querySelector('#result');
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
                    return "Paper beats Rock, You Win!";
                    break;
                case "scissors":
                    return "Rock beats Scissors, You Lose!";
                    break;
            }
            break;
        case "paper":
            switch(userSelection)
            {
                case "rock":
                    return "Paper beats Rock, You Lose!";
                    break;
                case "paper":
                    return "Paper and Paper Tie!";
                    break;
                case "scissors":
                    return "Scissors beats Paper, You Win!";
                    break;
            }
            break;
        case "scissors":
            switch(userSelection)
            {
                case "rock":
                    return "Rock beats Scissors, You Win!";
                    break;
                case "paper":
                    return "Scissors beats Paper, You Lose!";
                    break;
                case "scissors":
                    return "Scissors and Scissors Tie!";
                    break;
            }
            break;
    }
}
function game()
{
    console.log("Playing the game");

    //for(let i = 0; i<5; i++)
    //{
    //comSelection = computerPlay();
    //playerSelection = window.prompt("Select Rock, Paper or Scissors: ").toLowerCase();
    //console.log(playRound(comSelection, playerSelection));
    //}
}

//game();

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', function(){
        comSelection=computerPlay();
        displayDiv.innerText = (playRound(comSelection, button.id));
    });
});
