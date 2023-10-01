const options = ["rock", "paper", 'scissors'];


// get computers hand from rock papers or scissor


function getComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)]
}
function playRockPaperScissors() {
    const compHand = getComputerChoice(options)

    // ask what the user wants to Be

    const playerHand = prompt('Rock, Paper or Scissors?: ').toLowerCase();

    // compare hands

    if (playerHand === compHand) {
        console.log(`You both have ${compHand}, It\'s a Tie!`)
    } else if (playerHand === 'rock' && compHand === 'paper'){
        console.log(`You have rock and the computer has paper, You lose!`)
    } else if (playerHand === 'paper' && compHand === 'scissors'){
        console.log(`You have paper and the computer has scissors, You lose!`)
    } else if (playerHand === 'scissors' && compHand === 'rock'){
        console.log(`You have scissors and the computer has rock, You lose!`)
    } else if (playerHand === 'rock' && compHand === 'scissors'){
        console.log(`You have rock and the computer has scissors, You win!`)
    } else if (playerHand === 'paper' && compHand === 'rock'){
        console.log(`You have paper and the computer has rock, You win!`)
    } else if (playerHand === 'scissors' && compHand === 'paper'){
        console.log(`You have scissors and the computer has paper, win!`)
    } else if (playerHand === 'rock' && compHand === 'paper'){
        console.log(`You have rock and the computer has paper, You lose!`)
    };
}
// if the user wins tell them

// if the computer wins tell them
playRockPaperScissors()

