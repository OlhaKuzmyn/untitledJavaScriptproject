//створити 2 форми по 2 інпути в кожній.
// створити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API.
// Отже дайте формі та інпутам всі необхідні атрибути.

// let info = []     //з кнопкою всередині
// let forms = document.forms
// for (let form of forms) {
//     form.onsubmit = function (e) {
//         e.preventDefault();
//         if (e.target.name.value!== undefined && e.target.age.value !== undefined){
//             info.push({name : e.target.name.value, age : e.target.age.value})
//         } else if (e.target.street.value!== undefined && e.target.building.value !== undefined){
//             info.push({street: e.target.street.value, building: e.target.building.value})
//         }
//         console.log(info)
//     }
// }

//Створити 3 інпута та кнопку.
//Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додаткова частина для завдання)

// let form = document.forms[0]
// form.onsubmit = function (e) {
//     e.preventDefault()
//     // let {rowNumber, cellNumber, content} = {rowNumber : e.target.rowNumber.value, cellNumber : e.target.cellNumber.value, content : e.target.content.value}
//     let rowNumber = +e.target.rowNumber.value
//     let cellNumber = +e.target.cellNumber.value
//     let content = e.target.content.value
//     console.log(rowNumber , cellNumber, content)
//     for (let i = 0; i < rowNumber; i++) {
//         let divContainer = document.createElement('div')
//         divContainer.style.display = 'flex'
//         document.body.append(divContainer)
//         for (let j = 0; j < cellNumber; j++) {
//             let cellDiv = document.createElement('div')
//             cellDiv.innerText = `${content}`
//             cellDiv.classList.add('cell')
//             divContainer.append(cellDiv)
//         }
//     }
// }

//Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let badWords = ['bumfuzzle', 'collywobbles', 'bumbershoot', 'lollygag', 'hullabaloo', 'gobbledygook', 'conundrum']
// let inputWord = document.getElementsByName("badwordcheck")[0]
// inputWord.oninput = function (e){
//     for (let badWord of badWords) {
//         if (e.target.value.toLowerCase().includes(badWord)){
//             alert("That's a bad word")
//         }
//     }
//     console.log(e.target.value)
// }

// let badWords = ['bumfuzzle', 'collywobbles', 'bumbershoot', 'lollygag', 'hullabaloo', 'gobbledygook', 'conundrum']
// let form = document.forms[0]
// form.onsubmit = function (e){
//     e.preventDefault()
//     for (let badWord of badWords) {
//         if (e.target.badwordcheck.value.toLowerCase().includes(badWord)){
//             alert("That's a bad word")
//         }
//     }
//     console.log(e.target.badwordcheck.value)
// }

//Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

//те ж саме, що і попереднє?
