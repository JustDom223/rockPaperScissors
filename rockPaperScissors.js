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
function compareHand(result, playerChoice, computerChoice){
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
// Manipulate the buttons to decide what the player picks
document.addEventListener("DOMContentLoaded", function(){
    const buttonContainerElement = document.getElementById("buttonContainerElement");
    const outcomeTextElement = document.getElementById("roundOutcome")
    const playerScoreElement = document.getElementById("playerScore")
    const computerScoreElement = document.getElementById("computerScore")

    buttonContainerElement.addEventListener("click", function(event){
        if (event.target.tagName === 'BUTTON') {
            let playerChoice = '';
            let computerChoice = getRandomChoice(possibleChoices);
            let roundOutcome = ''
            let roundResult = ''

            switch(event.target.id) {
                case "rockButton": 
                playerChoice = 'rock'
                roundOutcome = determineGameOutcome(playerChoice, computerChoice)
                roundResult = compareHand(roundOutcome, playerChoice, computerChoice)
                outcomeTextElement.textContent = roundResult
                if (roundOutcome === "win"){
                    playerScore++;
                    playerScoreElement.textContent = playerScore
                }else if (roundOutcome === "lose"){
                    computerScore++;
                    computerScoreElement.textContent = computerScore
                };
                break
                
                
                case "paperButton": 
                playerChoice = 'paper'
                roundOutcome = determineGameOutcome(playerChoice, computerChoice)
                roundResult = compareHand(roundOutcome, playerChoice, computerChoice)
                outcomeTextElement.textContent = roundResult
                if (roundOutcome === "win"){
                    playerScore++;
                    playerScoreElement.textContent = playerScore
                }else if (roundOutcome === "lose"){
                    computerScore ++;
                    computerScoreElement.textContent = computerScore
                }
                break
                
                
                case "scissorsButton": 
                playerChoice = 'scissors'
                roundOutcome = determineGameOutcome(playerChoice, computerChoice)
                roundResult = compareHand(roundOutcome, playerChoice, computerChoice)
                outcomeTextElement.textContent = roundResult
                if (roundOutcome === "win"){
                    playerScore++;
                    playerScoreElement.textContent = playerScore
                }else if (roundOutcome === "lose"){
                    computerScore ++;
                    computerScoreElement.textContent = computerScore
                }
                break
                
                
            }
        }
})

})
