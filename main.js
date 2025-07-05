// selector 
const appDivElement = document.querySelector('#app')
const playerScorrElement = document.querySelector('.player-score')
const computerScorrElement = document.querySelector('.computer-score')
const scoreBoardElement = document.querySelector('.score-board')
const resultAppElement = document.querySelector('#result')
const choicBtnElement = document.querySelector('.choice-btn')
const rockBtnElement = document.querySelector('#rock-btn')
const paperBtnElement = document.querySelector('#paper-btn')
const scissorsBtnElement = document.querySelector('#scissors-btn')
const resetBtnElement = document.querySelector('#reset')

// datastore 
let playerScore = 0
let computerScore = 0

// coputer random choice 
function getCoputerChoice() {
    const choices = ['paper', 'Rock', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

// user choice 
function getPlayerChoice(playerChoice) {
    const computerChoice = getCoputerChoice()
    switch ( playerChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            console.log('Player win!')
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            console.log('Player loses!')
            break;

        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            console.log('Game is draw!')
            break;
    }
}

function main() {
    // Rock Buttom fixed 
    rockBtnElement.addEventListener('click', () => {
        getPlayerChoice('Rock')
})

// Paper Button fixed
    paperBtnElement.addEventListener('click', () => {
         getPlayerChoice('Paper')
})

// Scissors Button fixed
    scissorsBtnElement.addEventListener('click', () => {
        getPlayerChoice('Scissors')
})
}

main()