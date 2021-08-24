const form = document.getElementById('hand-cricket');
form.addEventListener('submit', e => {
    e.preventDefault();
    let userInput = form.userinput.value;
    calculateScore(userInput);
});

function calculateScore(userInput){
    let computerScore = Math.floor(Math.random() * 7);
    let userScore = userInput;

    if(user.role === 'batting'){
        if(computerScore === userScore){
            if(innings === 1){
                user.role = 'bowling';
                computer.role = 'batting';
                innings = 2;
            } else
                gameOver = true;
        } else if(userScore === 0)
            user.score += computerScore;
        else
            user.score += userScore;
    } else {
        if(computerScore === userScore){
            if(innings === 1){
                user.role = 'batting';
                computer.role = 'bowling';
                innings = 2;
            } else
                gameOver = true;
        } else if(computerScore === 0)
            computer.score += userScore;
        else
            computer.score += computerScore;
    }
}