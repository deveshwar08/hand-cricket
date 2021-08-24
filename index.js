let userRole;
let userScore;
let computerRole;
let computerScore;
let innings;
let tossWon;
const tossForm = document.getElementById('toss-form');
const choiceForm = document.getElementById('choice-form');
const handCricketForm = document.getElementById('hand-cricket');

function start() {
    document.getElementById('toss').style.display = 'flex';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('choice').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('computer-hand').innerHTML = '';
    innings = 1;
    tossWon = '';
    userRole = '';
    userScore = 0;
    computerRole = '';
    computerScore = 0;

}

function toss() {

    if (Math.floor(Math.random() * 2) == 1)
        tossWon = 'User';
    else
        tossWon = 'Computer';
    if (tossWon == 'User') {
        document.getElementById('choice').style.display = 'flex';

    } else {
        if (Math.floor(Math.random() * 2) == 1) {
            userRole = 'Batting';
            computerRole = 'Bowling';
        } else {
            userRole = 'Bowling';
            computerRole = 'Batting';
        }
        document.getElementById('game-area').style.display = 'flex';
        document.getElementById('toss').style.display = 'none';
        document.getElementById('choice').style.display = 'none';
        document.getElementById('role').innerHTML = userRole;
    }


}
function choice() {

    const choices = document.querySelectorAll('input[name="choice"]');
    for (const choice of choices) {
        if (choice.checked) {
            userRole = choice.value;
            break;
        }
    }
    if (userRole == 'Batting')
        computerRole = 'Bowling';
    else
        computerRole = 'Batting';
    document.getElementById('game-area').style.display = 'flex';
    document.getElementById('toss').style.display = 'none';
    document.getElementById('choice').style.display = 'none';
    document.getElementById('role').innerHTML = userRole;
}


handCricketForm.addEventListener('submit', e => {
    e.preventDefault();
    let userInput = Number(handCricketForm.userinput.value);
    calculateScore(userInput);
});

function calculateScore(userInput) {
    let computerScoreTemp = Math.floor(Math.random() * 7);
    let userScoreTemp = userInput;

    document.getElementById('computer-hand').innerHTML = computerScoreTemp;

    if (userRole == 'Batting') {
        if (computerScoreTemp == userScoreTemp) {
            if (innings == 1) {
                userRole = 'Bowling';
                computerRole = 'Batting';
                alert("You are out");
                innings = 2;
            } else
                gameOver();
        } else if (userScoreTemp == 0) {
            userScore += computerScoreTemp;
            if (innings == 2 && userScore > computerScore)
                gameOver();
        } else {
            userScore += userScoreTemp;
            if (innings == 2 && userScore > computerScore)
                gameOver();
        }
    } else {
        if (computerScoreTemp == userScoreTemp) {
            if (innings == 1) {
                userRole = 'Batting';
                computerRole = 'Bowling';
                alert("You took a wicket");
                innings = 2;
            } else
                gameOver();
        } else if (computerScoreTemp == 0) {
            computerScore += userScoreTemp;
            if (innings == 2 && computerScore > userScore) {
                gameOver();
            }
        } else {
            computerScore += computerScoreTemp;
            if (innings == 2 && computerScore > userScore)
                gameOver();
        }
    }
}

function gameOver() {
    console.log("Game over");
    document.getElementById('result').style.display = 'inline';
    if (userScore > computerScore)
        document.getElementById('result').innerHTML = "You won";
    else if (computerScore > userScore)
        document.getElementById('result').innerHTML = "You lost";
    else
        document.getElementById('result').innerHTML = "Match Tied";
}

function updateScoreView() {
    document.getElementById('user-score').innerHTML = 'Your Score: ' + userScore;
    document.getElementById('computer-score').innerHTML = "Computer's Score: " + computerScore;
    document.getElementById('role').innerHTML = userRole;
    setTimeout(updateScoreView, 100);
}
start();
updateScoreView();