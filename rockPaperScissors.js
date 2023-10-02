const options = ["rock", "paper", 'scissors'];

// get computers hand from rock papers or scissor


function getComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)]
}
function playRockPaperScissors(playerHand, compHand) {


    // compare hands

    if (playerHand === compHand) {
        return `tie`
    } else if (playerHand === 'rock' && compHand === 'paper'){
        return `lose`
    } else if (playerHand === 'paper' && compHand === 'scissors'){
        return `lose`
    } else if (playerHand === 'scissors' && compHand === 'rock'){
        return `lose`
    } else if (playerHand === 'rock' && compHand === 'scissors'){
        return`win`
    } else if (playerHand === 'paper' && compHand === 'rock'){
        return `win`
    } else if (playerHand === 'scissors' && compHand === 'paper'){
        return `win`
    };
}


// return the outcome depending on the outcome
function compareHand(result, playerHand, compHand){
    if (result === 'lose'){
        return `Your hand is ${playerHand} and the computer\'s hand is ${compHand}... You Lose!`
    }else if(result === 'win'){
        return `Your hand is ${playerHand} and the computer\'s hand is ${compHand}... You Win!`
    }else{
        return `Your hand is ${playerHand} and the computer\'s hand is ${compHand}... Its a Tie`
    };
}



// the gameplay loop
let playerScore = 0
let computerScore = 0
let bestOfFive = 5
let gameLoop = true

while (gameLoop) {
    if (bestOfFive < 1){
        gameLoop = false;
        break
    };
    bestOfFive -= 1
    const compHand = getComputerChoice(options);
    const playerHand = prompt('Rock, Paper or Scissors?: ').toLowerCase();

    outcome = playRockPaperScissors(playerHand, compHand)
    if (outcome === 'win'){
        playerScore += 1
    }else if (outcome === 'lose'){
        computerScore += 1
    }


    console.log(compareHand(outcome, playerHand, compHand))

}
if (playerScore > computerScore){
    console.log(`Your score is ${playerScore} and computer has a score of ${computerScore}, You win the competition`)
}else if (playerScore < computerScore){
    console.log(`Your score is ${playerScore} and computer has a score of ${computerScore}, You lose the competition`)
}else{
    console.log(`Your score is ${playerScore} and computer has a score of ${computerScore}, What a fierce competition!`)
}

// if the user wins tell them

// if the computer wins tell them

// if (playerHand === compHand) {
//     console.log(`You both have ${compHand}, It\'s a Tie!`)
// } else if (playerHand === 'rock' && compHand === 'paper'){
//     console.log(`You have rock and the computer has paper, You lose!`)
// } else if (playerHand === 'paper' && compHand === 'scissors'){
//     console.log(`You have paper and the computer has scissors, You lose!`)
// } else if (playerHand === 'scissors' && compHand === 'rock'){
//     console.log(`You have scissors and the computer has rock, You lose!`)
// } else if (playerHand === 'rock' && compHand === 'scissors'){
//     console.log(`You have rock and the computer has scissors, You win!`)
// } else if (playerHand === 'paper' && compHand === 'rock'){
//     console.log(`You have paper and the computer has rock, You win!`)
// } else if (playerHand === 'scissors' && compHand === 'paper'){
//     console.log(`You have scissors and the computer has paper, win!`)
// } else if (playerHand === 'rock' && compHand === 'paper'){
//     console.log(`You have rock and the computer has paper, You lose!`)
// };