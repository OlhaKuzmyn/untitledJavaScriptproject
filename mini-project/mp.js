//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую
// происходит переход на страницу user-details.html, которая имеет детальную информацию
// про объект на который кликнули

let uCont = document.getElementById('usersContainer')

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(usersData => {
//         for (let userDatum of usersData) {
//             let divUser = document.createElement('div')
//             divUser.innerHTML = `
//             <p>ID: ${userDatum.id}</p>
//             <h3>Name: ${userDatum.name}</h3>
//             <h4>Username: ${userDatum.username}</h4>
//             `
//             divUser.classList.add('divUser')
//             uCont.append(divUser)
//             let btnUser = document.createElement('button')
//             btnUser.innerText = 'User Details'
//             divUser.append(btnUser)
//             btnUser.onclick = function (){
//                 // let userSession = sessionStorage.getItem('users')
//                 // if (!userSession){
//                 //     userSession = []
//                 //     userSession.push(userDatum)
//                 //     let strUserS = JSON.stringify(userSession)
//                 //     sessionStorage.setItem('users', strUserS)
//                 // } else {
//                 //     let objUserS = JSON.parse(userSession)
//                 //     objUserS.push(userDatum)
//                 //     sessionStorage.setItem('users', JSON.stringify(objUserS))
//                 // }
//                 let userSession = []
//                     userSession.push(userDatum)
//                     let strUserS = JSON.stringify(userSession)
//                     sessionStorage.setItem('users', strUserS)
//                 window.location = `user-details.html?id=${JSON.stringify(userDatum.id)}`
//             }
//         }
//     })


// without using array in session storage

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersData => {
        for (let userDatum of usersData) {
            let divUser = document.createElement('div')
            divUser.innerHTML = `
            <p>ID: ${userDatum.id}</p>
            <h3>Name: ${userDatum.name}</h3>
            <h4>Username: ${userDatum.username}</h4>
            `
            divUser.classList.add('divUser')
            uCont.append(divUser)
            let btnUser = document.createElement('button')
            btnUser.innerText = 'User Details'
            divUser.append(btnUser)
            btnUser.onclick = function (){
                let strUserS = JSON.stringify(userDatum)
                sessionStorage.setItem('user', strUserS)
                window.location = `user-details.html?id=${JSON.stringify(userDatum.id)}`
            }
        }
    })