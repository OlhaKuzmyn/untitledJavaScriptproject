//є масив -
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених
// обраних об'єктів в локальному сховищі.
// Створити сторінку favorites.html при переході на яку потрібно вивести
// в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let user of users) {
    let userDiv = document.createElement('div')
    userDiv.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`
    document.body.append(userDiv)
    let userBtn = document.createElement('button')
    userBtn.innerText = "додати до улюблених"
    userDiv.append(userBtn)
    userBtn.onclick = function (){
        let usersLocal = localStorage.getItem('users')
        if (!usersLocal){
            usersLocal = []
            usersLocal.push(user)
            let strUsers = JSON.stringify(usersLocal)
            localStorage.setItem('users', strUsers)
        } else {
            let objUsers = JSON.parse(usersLocal)
            objUsers.push(user)
            localStorage.setItem('users', JSON.stringify(objUsers))

        }
        window.location = `favourites.html?uf=${JSON.stringify(user)}`;
    }
}
