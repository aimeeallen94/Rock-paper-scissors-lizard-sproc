let myChoice = document.getElementById('my-choice');
let choices = Array.from(document.getElementsByTagName('button'));
let myPick;

choices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    myPick = event.target.id;
    myChoice.innerHTML = myPick;
}));

function runGame() { };

function computerSelection() {

    let computerChoice = document.getElementById('computer-choice'); {

        /* code for generating random number for computer selection */
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        if (randomNumber === 1) {
            computerChoice = 'rock';
        } if (randomNumber === 2) {
            computerChoice = 'paper';
        } if (randomNumber === 3) {
            computerChoice = 'scissors';
        } if (randomNumber === 4) {
            computerChoice = 'lizard';
        } if (randomNumber === 5) {
            computerChoice = 'spock';
        }
    }
}

function compareAnswers() { };


function incrementMyScore() { };


function incrementComputerScore() { };


function incrementAttempts() { };

