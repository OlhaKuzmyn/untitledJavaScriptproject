//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let textEl = document.getElementById('text');
// let btnDel = document.getElementsByTagName('button')[0]
// btnDel.onclick = function (e) {
//     e.preventDefault();
//     textEl.remove()
// }

//Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btnDelSelf = document.getElementsByTagName('button')[0]
// btnDelSelf.onclick = function (e) {
//     e.preventDefault();
//     btnDelSelf.remove()
// }

// let btnDelSelf = document.getElementsByTagName('button')[0]
// btnDelSelf.onclick = function (e) {
//     e.preventDefault();
//     btnDelSelf.style.display = 'none'
// }

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.forms[0]
// form.onsubmit = function (e){
//     e.preventDefault();
//     if (e.target.age.value < 18){
//         alert(`You are too young, your age is ${e.target.age.value}`)
//     } else {
//         alert(`You are old enough, your age is ${e.target.age.value}`)
//     }
// }

//Создайте меню, которое раскрывается/сворачивается при клике

// let dropDwn = document.getElementById('dropdwn')
// let anchors = document.getElementsByTagName('a')
// dropDwn.onclick = function (e){
//     e.preventDefault();
//     for (let anchor of anchors) {
//         if (anchor.style.display === 'none'){
//             anchor.style.display = 'block'
//         } else {
//             anchor.style.display = 'none'
//         }
//     }
// }

//Создать список комментариев ,
// пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'}
]

// let divContCom = document.createElement('div')   //без кнопки
// document.body.append(divContCom)
// for (let comment of comments) {
//     let commentDiv = document.createElement('div')
//     divContCom.append(commentDiv)
//     let headerComm = document.createElement('h3')
//     headerComm.innerText = `${comment.title}`
//     commentDiv.append(headerComm)
//     let bodyP = document.createElement('p')
//     bodyP.innerText = `${comment.body}`
//     bodyP.style.display = 'none'
//     commentDiv.append(bodyP)
//     headerComm.onclick = function (e){
//         e.preventDefault();
//         if (bodyP.style.display === 'none'){
//             bodyP.style.display = 'block'
//         } else {
//             bodyP.style.display = 'none'
//         }
//             }
// }

// let divContCom = document.createElement('div')     //з кнопкою
// document.body.append(divContCom)
// for (let comment of comments) {
//     let commentDiv = document.createElement('div')
//     divContCom.append(commentDiv)
//     let headerComm = document.createElement('h3')
//     headerComm.innerText = `${comment.title}`
//     commentDiv.append(headerComm)
//     let btnHide = document.createElement('button')
//     btnHide.innerText = 'show/hide'
//     commentDiv.append(btnHide)
//     let bodyP = document.createElement('p')
//     bodyP.innerText = `${comment.body}`
//     bodyP.style.display = 'none'
//     commentDiv.append(bodyP)
//     btnHide.onclick = function (e){
//         e.preventDefault();
//         if (bodyP.style.display === 'none'){
//             bodyP.style.display = 'block'
//         } else {
//             bodyP.style.display = 'none'
//         }
//     }
// }
