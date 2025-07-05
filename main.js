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
let userScore = 0
let computerScore = 0

// Rock Buttom fixed 
rockBtnElement.addEventListener('click', () => {
    console.log('you clicked on rock button');
})

// Paper Button fixed
paperBtnElement.addEventListener('click', () => {
    console.log('you clicked on paper button');
})

// Scissors Button fixed
scissorsBtnElement.addEventListener('click', () => {
    console.log('you clicked on scissors button');
})