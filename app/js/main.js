const inputQuantity = document.querySelector('.input-quantity')
const buttonUp = document.querySelector('.button-up')
const buttonDown = document.querySelector('.button-down')

const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const player3 = document.querySelector('.player3')
const player4 = document.querySelector('.player4')
const player5 = document.querySelector('.player5')
const arrrayPlayers = [player1, player2, player3, player4, player5]

const bigArr = []
const arrTasks = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Флекс','Боевой гапак']
const tableItems = document.querySelector('.testtable')

function hidePlayers(quantityPlayers) {
    for (let i = 0; i < quantityPlayers; i++) {
        if (arrrayPlayers[i].classList.contains('player-hide') === true)  {
            arrrayPlayers[i].classList.remove('player-hide')
        }
    }
    for (let i = quantityPlayers; i < 5; i++) {
        if (arrrayPlayers[i].classList.contains('player-hide') === false)  {
            arrrayPlayers[i].classList.add('player-hide')
        }
    }
}

buttonUp.addEventListener ('click', (event) => {
    event.preventDefault()
    if (inputQuantity.valueAsNumber < 5) {
        inputQuantity.valueAsNumber += 1
        hidePlayers(inputQuantity.valueAsNumber)
        bigArr.length = 0
        arrayForming (inputQuantity.valueAsNumber)
    }
    displayTable()
})

buttonDown.addEventListener ('click', (event) => {
    event.preventDefault()
    if (inputQuantity.valueAsNumber > 1) {
        inputQuantity.valueAsNumber -= 1
        hidePlayers(inputQuantity.valueAsNumber)
        bigArr.length = 0
        arrayForming (inputQuantity.valueAsNumber)
    }
})

function arrayForming (quantityPlayers) {
    bigArr.push(arrTasks)
    for (let i=0; i<quantityPlayers; i++) {
        const arrPlayer = []
        for (let index = 0; index < arrTasks.length; index++) {
                const inputItem = document.createElement('input')
                arrPlayer.push(inputItem)
        }
        bigArr.push(arrPlayer)
    }
}

function displayTable() {
    while (tableItems.firstChild) {
        tableItems.removeChild(tableItems.firstChild);
      }

    for (let iTen = 1; iTen < 10; iTen++) {
        let tr = document.createElement('tr')
        for (let i = 0; i < bigArr.length; i++) {
            let td = document.createElement('td')
            //let input = document.createElement('input')
            if (i != 0) {
                //td.innerHTML = bigArr[i][iTen]
                tr.appendChild(td)
                console.log(bigArr[i][iTen])
                td.appendChild(bigArr[i][iTen])
            }
            else {
                td.innerHTML = bigArr[i][iTen]
                tr.appendChild(td)
            }
        }
        tableItems.appendChild(tr)
    }
      
}


// const table = document.querySelector('.testtable')
// const arr = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Флекс','Боевой гапак']
// function fillTable(table,arr) {
//     console.log(table,arr)
//     for (let i=0; i < arr.length; i++) {
//         let tr = document.createElement('tr')

//         for (let j=0; j < arr[i].length; j++) {
//             let td = document.createElement('td')
//             td.innerHTML = arr[i][j]
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
// }
// fillTable(table,arr)

hidePlayers(inputQuantity.valueAsNumber)
arrayForming (inputQuantity.valueAsNumber)