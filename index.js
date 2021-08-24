let userRole = '';
let userScore = 0;
let computerRole = '';
let computerScore = 0;

let innings = 1;

let tossWon;
const tossForm = document.getElementById('toss-form');
const choiceForm = document.getElementById('choice-form');
tossForm.addEventListener('submit',e => {
    e.preventDefault();

    if(Math.floor(Math.random() * 2) == 1)
        tossWon = 'User';
    else
        tossWon = 'Computer';
    if(tossWon == 'User'){
        document.getElementById('choice').style.display = 'flex';
        
    } else {
        if(Math.floor(Math.random() * 2) == 1){
            userRole = 'Batting';
            computerRole = 'Bowling';
        } else{
            userRole = 'Bowling';
            computerRole = 'Batting';
        }
        document.getElementById('game-area').style.display = 'flex';
        document.getElementById('toss').style.display = 'none';
        document.getElementById('choice').style.display = 'none';
        document.getElementById('role').innerHTML = userRole;
    }
    
    
});
choiceForm.addEventListener('submit',ev => {
    ev.preventDefault();

    userRole = choiceForm.choice.value;
    if(userRole == 'Batting')
        computerRole = 'Bowling';
    else
        computerRole = 'Batting';
    document.getElementById('game-area').style.display = 'flex';
    document.getElementById('toss').style.display = 'none';
    document.getElementById('choice').style.display = 'none';
});



const handCricketForm = document.getElementById('hand-cricket');
handCricketForm.addEventListener('submit', e => {
    e.preventDefault();
    let userInput = Number(handCricketForm.userinput.value);
    calculateScore(userInput);
});

function calculateScore(userInput){
    let computerScoreTemp = Math.floor(Math.random() * 7);
    let userScoreTemp = userInput;

    console.log("You",userScoreTemp," Computer",computerScoreTemp);

    if(userRole == 'Batting'){
        if(computerScoreTemp == userScoreTemp){
            if(innings == 1){
                userRole = 'Bowling';
                computerRole = 'Batting';
                innings = 2;
            } else
                gameOver();
        } else if(userScoreTemp == 0){
            userScore += computerScoreTemp;
            if(innings == 2 && userScore > computerScore)
                gameOver();
        } else{
            userScore += userScoreTemp;
            if(innings == 2 && userScore > computerScore)
                gameOver();
        }
    } else {
        if(computerScoreTemp == userScoreTemp){
            if(innings == 1){
                userRole = 'Batting';
                computerRole = 'Bowling';
                innings = 2;
            } else
                gameOver();
        } else if(computerScoreTemp == 0){
            computerScore += userScoreTemp;
            if(innings == 2 && computerScore > userScore){
                gameOver();
            }
        } else{
            computerScore += computerScoreTemp;
            if(innings == 2 && computerScore > userScore)
                    gameOver();
        }
    }
}

function gameOver(){
    console.log("Game over");
    document.getElementById('result').style.display = 'flex';
    if(userScore > computerScore)
        document.getElementById('result').innerHTML = "You won";
    else if(computerScore > userScore)
        document.getElementById('result').innerHTML = "You lost";
    else
        document.getElementById('result').innerHTML = "Match Tied";
}

function updateScoreView(){
    document.getElementById('user-score').innerHTML = 'Your Score: '+userScore;
    document.getElementById('computer-score').innerHTML = "Computer's Score: "+computerScore;    
    document.getElementById('role').innerHTML = userRole;
    setTimeout(updateScoreView, 100);
}
document.getElementById('role').innerHTML = userRole;
updateScoreView();