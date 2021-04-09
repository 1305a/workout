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
//const testButton = document.querySelector('.testbutton')
const arrrayPlayers = [player1, player2, player3, player4, player5]
const arrrayTdPlayers = [tdPlayer1, tdPlayer2, tdPlayer3, tdPlayer4, tdPlayer5]

const bigArr = []
const arrTasks = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Эспандер','По желанию']
const tableItems = document.querySelector('.maintable')
const level = document.querySelector('.level')
const calculate = document.querySelector('.calculate')

const objectPlayer1 = {'Отжимание':0,'Планка (мин)':0,'Скакалка':0,'Бицепс':0,'Трицепс':0,'Приседания':0,'Колесо':0,'Пресс':0,'Эспандер':0,'По желанию':0}
const objectPlayer2 = {'Отжимание':0,'Планка (мин)':0,'Скакалка':0,'Бицепс':0,'Трицепс':0,'Приседания':0,'Колесо':0,'Пресс':0,'Эспандер':0,'По желанию':0}
const objectPlayer3 = {'Отжимание':0,'Планка (мин)':0,'Скакалка':0,'Бицепс':0,'Трицепс':0,'Приседания':0,'Колесо':0,'Пресс':0,'Эспандер':0,'По желанию':0}
const objectPlayer4 = {'Отжимание':0,'Планка (мин)':0,'Скакалка':0,'Бицепс':0,'Трицепс':0,'Приседания':0,'Колесо':0,'Пресс':0,'Эспандер':0,'По желанию':0}
const objectPlayer5 = {'Отжимание':0,'Планка (мин)':0,'Скакалка':0,'Бицепс':0,'Трицепс':0,'Приседания':0,'Колесо':0,'Пресс':0,'Эспандер':0,'По желанию':0}


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

calculate.addEventListener ('click', (event) => {
    event.preventDefault()
    for (let i = 1; i < bigArr.length; i++) {
        //const element = bigArr[i];
        for (let j = 0; j < bigArr[i].length; j++) {
            
            if (i===1) {
                objectPlayer1[bigArr[0][j]] = document.getElementById(bigArr[i][j]).valueAsNumber
            }
            if (i===2) {
                objectPlayer2[bigArr[0][j]] = document.getElementById(bigArr[i][j]).valueAsNumber
            }
            if (i===3) {
                objectPlayer3[bigArr[0][j]] = document.getElementById(bigArr[i][j]).valueAsNumber
            }
            if (i===4) {
                objectPlayer4[bigArr[0][j]] = document.getElementById(bigArr[i][j]).valueAsNumber
            }
            if (i===5) {
                objectPlayer5[bigArr[0][j]] = document.getElementById(bigArr[i][j]).valueAsNumber
            }
        }
    }
    //console.log(objectPlayer1)
    //console.log(inputQuantity.valueAsNumber)

    for (let index = 1; index < inputQuantity.valueAsNumber+1; index++) {
        
        let finalResult = 'Выполнить '
        if (index === 1) {
            const finalTask1 = calculateLevels(objectPlayer1)
            finalResult = finalResult + ' ' + finalTask1
        }
        else if (index === 2) {
            const finalTask2 = calculateLevels(objectPlayer2)
            finalResult = finalResult + ' ' + finalTask2
        }
        else if (index === 3) {
            const finalTask3 = calculateLevels(objectPlayer3)
        }
        else if (index === 4) {
            const finalTask4 = calculateLevels(objectPlayer4)
        }
        else if (index === 5) {
            const finalTask5 = calculateLevels(objectPlayer5)
        }
        console.log(finalResult)
    }
})

function calculateLevels(objectPlayer) {
    const copyArrTask = arrTasks.slice()
    copyArrTask.sort(function(){ 
        return 0.5 - Math.random()
        })
    let finalTask = ''
    if (level.value === 'easy') {
        for (let index = 0; index < 3; index++) {
            finalTask = finalTask + ' ' + copyArrTask[index] + ' ' + objectPlayer[copyArrTask[index]]
        }
    }
    else if (level.value === 'normal') {
        for (let index = 0; index < 5; index++) {
            finalTask = finalTask + ' ' + copyArrTask[index] + ' ' + objectPlayer[copyArrTask[index]]
        }
    }
    else if (level.value === 'hard') {
        for (let index = 0; index < 7; index++) {
            finalTask = finalTask + ' ' + copyArrTask[index] + ' ' + objectPlayer[copyArrTask[index]]
        }
    }
    //console.log(finalTask)
    return finalTask
}





function arrayForming (quantityPlayers) {
    bigArr.push(arrTasks)
    for (let i=0; i<quantityPlayers; i++) {
        const arrPlayer = []
        for (let index = 0; index < arrTasks.length; index++) {
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