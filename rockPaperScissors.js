const possibleChoices = ["rock", "paper", 'scissors'];



// Pick a random choice for computer
function getRandomChoice(possibleChoices) {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
}

// compare hands
function determineGameOutcome(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return `tie`
    } else if (playerChoice === 'rock' && computerChoice === 'paper'){
        return `lose`
    } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        return `lose`
    } else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        return `lose`
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        return`win`
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        return `win`
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        return `win`
    };
}

// return the appropriate roundOutcome
function generateOutcomeMessage(result, playerChoice, computerChoice){
    if (result === 'lose'){
        return `Your hand is ${playerChoice} and the computer\'s hand is ${computerChoice}... You Lose!`
    }else if(result === 'win'){
        return `Your hand is ${playerChoice} and the computer\'s hand is ${computerChoice}... You Win!`
    }else{
        return `Your hand is ${playerChoice} and the computer\'s hand is ${computerChoice}... Its a Tie`
    };
}


// the gameplay loop
let playerScore = 0
let computerScore = 0
let totalRounds = 5
let playerChoice = '';
let roundOutcome = '';
let roundResult = '';
// Manipulate the buttons to decide what the player picks
document.addEventListener("DOMContentLoaded", function(){
    const buttonContainerElement = document.getElementById("buttonContainer");
    const outcomeTextElement = document.getElementById("outcome")
    const playerScoreElement = document.getElementById("playerScore")
    const computerScoreElement = document.getElementById("computerScore")
    
    function updateScores(roundOutcome){
        if (roundOutcome === "win"){
            playerScore++;
            playerScoreElement.textContent = `Player\'s score: ${playerScore}`
            totalRounds--;
        }else if (roundOutcome === "lose"){
            computerScore ++;
            computerScoreElement.textContent = `Computer\'s score: ${computerScore}`
            totalRounds--;
        }
    }
    

    function gameOver(totalRounds, playerScore, computerScore){
        if(totalRounds <= 0){
            if(playerScore > computerScore){
                outcomeTextElement.textContent = `HEY! Your score is ${playerScore} and the computer 
                only has ${computerScore}. YOU WIN!!!`
            }else{
                outcomeTextElement.textContent = `HEY! Your score is ${playerScore} and the computer 
                has ${computerScore}. Better luck next time!!!`
            }
            // outcomeTextElement.textContent = roundResult
            
        }
        
    }


    buttonContainerElement.addEventListener("click", function(event){
        if (event.target.tagName === 'BUTTON') {
            let computerChoice = getRandomChoice(possibleChoices);


            switch(event.target.id) {
                case "rockButton": 
                playerChoice = 'rock'
                roundOutcome = determineGameOutcome(playerChoice, computerChoice)
                roundResult = generateOutcomeMessage(roundOutcome, playerChoice, computerChoice)
                outcomeTextElement.textContent = roundResult
                updateScores(roundOutcome)               
                break
                
                
                case "paperButton": 
                playerChoice = 'paper'
                roundOutcome = determineGameOutcome(playerChoice, computerChoice)
                roundResult = generateOutcomeMessage(roundOutcome, playerChoice, computerChoice)
                outcomeTextElement.textContent = roundResult
                updateScores(roundOutcome)   
                break
                
                
                case "scissorsButton": 
                playerChoice = 'scissors'
                roundOutcome = determineGameOutcome(playerChoice, computerChoice)
                roundResult = generateOutcomeMessage(roundOutcome, playerChoice, computerChoice)
                outcomeTextElement.textContent = roundResult
                updateScores(roundOutcome)
                break
                
                
            }
        }
        if(totalRounds <= 0){
            if(playerScore > computerScore){
                outcomeTextElement.textContent = `HEY! Your score is ${playerScore} and the computer 
                only has ${computerScore}. YOU WIN!!!`
            }else{
                outcomeTextElement.textContent = `HEY! Your score is ${playerScore} and the computer 
                only has ${computerScore}. Better luck next time!!!`
            }
            computerScore = 0
            playerScore = 0
            totalRounds = 5
            computerScoreElement.textContent = `Computer\'s score: ${computerScore}`
            playerScoreElement.textContent = `Player\'s score: ${playerScore}`
            // outcomeTextElement.textContent = roundResult
            
        }
})

})
