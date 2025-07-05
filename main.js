// selector 
const appDivElement = document.querySelector('#app')
const playerScoreElement = document.querySelector('#player-score')
const computerScoreElement = document.querySelector('#computer-score')
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
function getComputerChoice() {
    const choices = ['paper', 'Rock', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

// winner functionality 
function win(playerChoice, computerChoice, buttonElement) {
    playerScore++
    playerScoreElement.textContent = playerScore
    computerScoreElement.textContent = computerScore
    resultAppElement.textContent = `${playerChoice} beats ${computerChoice}. You Win! 🔥`
    buttonElement.classList.add('winner')
    setTimeout(() => {
    buttonElement.classList.remove('winner');
    }, 1000);
}

// lose functionality 
function lose(playerChoice, computerChoice, buttonElement) {
    computerScore++
    playerScoreElement.textContent = playerScore
    computerScoreElement.textContent = computerScore
    resultAppElement.textContent = `${playerChoice} loses to ${computerChoice}. You Lost...😢`
    buttonElement.classList.add('loser')
    setTimeout(() => {
    buttonElement.classList.remove('loser');
    }, 1000);
}

// draw functionality 
function draw(playerChoice, computerChoice, buttonElement) { 
    resultAppElement.textContent = `${playerChoice} equels ${computerChoice}. It's a Draw:💤`
    buttonElement.classList.add('draw')
    setTimeout(() => {
    buttonElement.classList.remove('draw');
    }, 1000);
}

// player choice and game rules fixed
function getPlayerChoice(playerChoice, buttonElement) {
    const computerChoice = getComputerChoice()
    switch ( playerChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(playerChoice, computerChoice, buttonElement)
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(playerChoice, computerChoice,  buttonElement)
            break;

        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(playerChoice, computerChoice,  buttonElement)
            break;
    }
}

function main() {
    // Rock Buttom fixed 
    rockBtnElement.addEventListener('click', () => {
        getPlayerChoice('Rock', rockBtnElement)
    })

    // Paper Button fixed
    paperBtnElement.addEventListener('click', () => {
         getPlayerChoice('Paper', paperBtnElement)
    })

    // Scissors Button fixed
    scissorsBtnElement.addEventListener('click', () => {
        getPlayerChoice('Scissors', scissorsBtnElement)
    })
}
main()

resetBtnElement.addEventListener('click', () => {
    //reset value
    playerScore = 0
    computerScore = 0

    // update UI
    playerScoreElement.textContent = playerScore
    computerScoreElement.textContent = computerScore
    resultAppElement.textContent = ''

    // remove all button colors
    rockBtnElement.classList.remove('winner', 'loser', 'draw')
    paperBtnElement.classList.remove('winner', 'loser', 'draw')
    scissorsBtnElement.classList.remove('winner', 'loser', 'draw')

})