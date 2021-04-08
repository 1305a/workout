const inputQuantity = document.querySelector('.input-quantity')
const buttonUp = document.querySelector('.button-up')
const buttonDown = document.querySelector('.button-down')

const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const player3 = document.querySelector('.player3')
const player4 = document.querySelector('.player4')
const player5 = document.querySelector('.player5')
const tdPlayer1 = document.querySelector('.td-player1')
const tdPlayer2 = document.querySelector('.td-player2')
const tdPlayer3 = document.querySelector('.td-player3')
const tdPlayer4 = document.querySelector('.td-player4')
const tdPlayer5 = document.querySelector('.td-player5')
const testButton = document.querySelector('.testbutton')
const arrrayPlayers = [player1, player2, player3, player4, player5]
const arrrayTdPlayers = [tdPlayer1, tdPlayer2, tdPlayer3, tdPlayer4, tdPlayer5]

const bigArr = []
const arrTasks = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Флекс','Боевой гапак']
const tableItems = document.querySelector('.maintable')

function hidePlayers(quantityPlayers) {
    for (let i = 0; i < quantityPlayers; i++) {
        if (arrrayPlayers[i].classList.contains('player-hide') === true)  {
            arrrayPlayers[i].classList.remove('player-hide')
        }
        if (arrrayTdPlayers[i].classList.contains('player-hide') === true)  {
            arrrayTdPlayers[i].classList.remove('player-hide')
        }
    }
    for (let i = quantityPlayers; i < 5; i++) {
        if (arrrayPlayers[i].classList.contains('player-hide') === false)  {
            arrrayPlayers[i].classList.add('player-hide')
        }
        if (arrrayTdPlayers[i].classList.contains('player-hide') === false)  {
            arrrayTdPlayers[i].classList.add('player-hide')
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

testButton.addEventListener ('click', (event) => {
    event.preventDefault()
    // idDoc = document.getElementById('10')
    // console.log(bigArr)
    for (let i = 1; i < bigArr.length; i++) {
        //const element = bigArr[i];
        for (let j = 0; j < bigArr[i].length; j++) {
            //console.log(document.getElementById(bigArr[i][j]))
            //bigArr[i][j] = document.getElementById(bigArr[i][j])
            bigArr[i][j] = document.getElementById(bigArr[i][j])
        }
        
    }
    console.log(bigArr)
})

function arrayForming (quantityPlayers) {
    bigArr.push(arrTasks)
    for (let i=0; i<quantityPlayers; i++) {
        const arrPlayer = []
        for (let index = 0; index < arrTasks.length; index++) {
                //const inputItem = document.createElement('input')
                //arrPlayer.push(inputItem)
                arrPlayer.push(0)
        }
        bigArr.push(arrPlayer)
    }
    displayTable()
}

function displayTable() {
    while (tableItems.firstChild) {
        tableItems.removeChild(tableItems.firstChild);
    }

    for (let iTen = 0; iTen < 10; iTen++) {
        let tr = document.createElement('tr')
        for (let i = 0; i < bigArr.length; i++) {
            let td = document.createElement('td')
            td.className = "td-input-item"
            if (i != 0) {
                tr.appendChild(td)
                const inputItem = document.createElement('input')
                inputItem.type = "number"
                const setId = `${i}${iTen}`
                inputItem.id = setId
                //inputItem.class = "input-item"
                inputItem.className = "input-item"
                td.appendChild(inputItem)
                bigArr[i][iTen] = setId
            }
            else {
                td.innerHTML = bigArr[i][iTen]
                td.className = "task-item"
                tr.appendChild(td)
            }
        }
        tableItems.appendChild(tr)
    }
    //console.log(bigArr)
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