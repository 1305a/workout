const inputQuantity = document.querySelector('.input-quantity')
const buttonUp = document.querySelector('.button-up')
const buttonDown = document.querySelector('.button-down')

const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const player3 = document.querySelector('.player3')
const player4 = document.querySelector('.player4')
const player5 = document.querySelector('.player5')
const arrrayPlayers = [player1, player2, player3, player4, player5]





function hidePlayers() {
    for (let i = 0; i < inputQuantity.valueAsNumber; i++) {
        if (arrrayPlayers[i].classList.contains('player-hide') === true)  {
            arrrayPlayers[i].classList.remove('player-hide')
        }
    }
    for (let i = inputQuantity.valueAsNumber; i < 5; i++) {
        if (arrrayPlayers[i].classList.contains('player-hide') === false)  {
            arrrayPlayers[i].classList.add('player-hide')
        }
    }
}

buttonUp.addEventListener ('click', (event) => {
    event.preventDefault()
    if (inputQuantity.valueAsNumber < 5) {
        inputQuantity.valueAsNumber += 1
        hidePlayers()
    }
})

buttonDown.addEventListener ('click', (event) => {
    event.preventDefault()
    if (inputQuantity.valueAsNumber > 1) {
        inputQuantity.valueAsNumber -= 1
        hidePlayers()
    }
})

hidePlayers()
