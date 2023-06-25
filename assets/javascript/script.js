let myChoice = document.getElementById('my-choice');
let choices = Array.from(document.getElementsByTagName('button'));
let myPick;

choices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    myPick = event.target.id;
    myChoice.innerHTML = myPick;
    computerSelection();
    compareAnswers();
    incrementScores();
}));

function runGame() { };

function computerSelection() {

    let computerChoiceDisplay = document.getElementById('computer-choice');

    /* code for generating random number for computer selection */
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } if (randomNumber === 2) {
        computerChoice = 'Paper';
    } if (randomNumber === 3) {
        computerChoice = 'Scissors';
    } if (randomNumber === 4) {
        computerChoice = 'Lizard';
    } if (randomNumber === 5) {
        computerChoice = 'Spock';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function compareAnswers() {
    let result;
    let resultDisplay = document.getElementById('result');

    if (computerChoice === myPick) {
        result = 'Draw!!';
    }
    if (computerChoice === 'Rock' && myPick === 'Paper') {
        result = `${computerChoice} cover ${myPick}, You Win!`;
    }
    if (computerChoice === 'Rock' && myPick === 'Scissors') {
        result = `${computerChoice} crushes ${myPick}, You lose :(`;
    }
    if (computerChoice === 'Rock' && myPick === 'Lizard') {
        result = `${computerChoice} crushes ${myPick}, You lose :(`;
    }
    if (computerChoice === 'Rock' && myPick === 'Spock') {
        result = `${myPick} vaporises ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Paper' && myPick === 'Rock') {
        result = `${computerChoice} cover ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Paper' && myPick === 'Scissors') {
        result = `${myPick} cuts ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Paper' && myPick === 'Lizard') {
        result = `${myPick} eats ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Paper' && myPick === 'Spock') {
        result = `${computerChoice} disproves ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Scissors' && myPick === 'Rock') {
        result = `${myPick} crushes ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Scissors' && myPick === 'Paper') {
        result = `${computerChoice} cuts ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Scissors' && myPick === 'Lizard') {
        result = `${computerChoice} decapitates ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Scissors' && myPick === 'Spock') {
        result = `${myPick} smashes ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Lizard' && myPick === 'Rock') {
        result = `${myPick} crushes ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Lizard' && myPick === 'Paper') {
        result = `${computerChoice} eats ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Lizard' && myPick === 'Scissors') {
        result = `${myPick} decapitates ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Lizard' && myPick === 'Spock') {
        result = `${computerChoice} poisons ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Spock' && myPick === 'Rock') {
        result = `${computerChoice} vaporises ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Spock' && myPick === 'Paper') {
        result = `${myPick} disproves ${computerChoice}, You Win!`;
    }
    if (computerChoice === 'Spock' && myPick === 'Scissors') {
        result = `${computerChoice} smashes ${myPick}, Computer Wins :(`;
    }
    if (computerChoice === 'Spock' && myPick === 'Lizard') {
        result = `${myPick} poisons ${computerChoice}, You Win!`;
    }

    resultDisplay.innerHTML = result;

};


function incrementScores() {
    let myScore = parseInt(document.getElementById('my-score').innerText);
    let computerScore = parseInt(document.getElementById('computer-score').innerText);

    if (myPick === computerChoice) {
        document.getElementById('my-score').innerText = ++myScore;
        document.getElementById('computer-score').innerText = ++computerScore;
    } else (myPick === 'Rock' && computerChoice === 'Paper') {
        document.getElementById('computer-score').innerText = ++computerScore;
    }

};
function incrementAttempts() { };

