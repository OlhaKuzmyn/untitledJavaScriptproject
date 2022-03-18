// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user
// на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую,
// появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт
// https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход
// на страницу post-details.html, которая имеет детальную информацию про текущий пост.


document.body.onload = function (){
    sessionStorage.clear()
}

let sUsers = document.getElementById('selectedUsers')
let usersSelects = JSON.parse(sessionStorage.getItem('users'))
for (let userSelect of usersSelects) {
    let selDiv = document.createElement('div')
    for (let selKey in userSelect) {
        if (selKey === 'name' || selKey === 'username'){
            let hName = document.createElement('h3')
            hName.innerText = `${selKey.charAt(0).toUpperCase() + selKey.slice(1)}: ${userSelect[selKey]}`
            selDiv.append(hName)
        } else if (selKey === 'address'){
            let ulAddress = document.createElement('ul')
            ulAddress.innerText = 'Address:'
            selDiv.append(ulAddress)
            for (let addressD in userSelect[selKey]) {
                if (addressD === 'geo'){
                    let ligAddress = document.createElement('li')
                    ligAddress.innerText = `${addressD.charAt(0).toUpperCase() + addressD.slice(1)}:`
                    ulAddress.append(ligAddress)
                    let ulGeoAddress = document.createElement('ul')
                    ligAddress.append(ulGeoAddress)
                    for (let gAddress in userSelect[selKey][addressD]) {
                        let liGeoAddress = document.createElement('li')
                        liGeoAddress.innerText =`${gAddress.charAt(0).toUpperCase() + gAddress.slice(1)}: ${userSelect[selKey][addressD][gAddress]}`
                        ulGeoAddress.append(liGeoAddress)
                    }
                } else {
                    let liAddress = document.createElement('li')
                    liAddress.innerText = `${addressD.charAt(0).toUpperCase() + addressD.slice(1)}: ${userSelect[selKey][addressD]}`
                    ulAddress.append(liAddress)
                }
            }
        } else if (selKey === 'company'){
            let ulCompany = document.createElement('ul')
            ulCompany.innerText = 'Company:'
            selDiv.append(ulCompany)
            for (let companyD in userSelect[selKey]) {
                let liCompany = document.createElement('li')
                liCompany.innerText= `${companyD.charAt(0).toUpperCase() + companyD.slice(1)}: ${userSelect[selKey][companyD]}`
                ulCompany.append(liCompany)
            }
        } else {
            let pSel = document.createElement('p')
            pSel.innerText = `${selKey.charAt(0).toUpperCase() + selKey.slice(1)}: ${userSelect[selKey]}`
            selDiv.append(pSel)
        }
    }
    sUsers.append(selDiv)
    let btnUserPost = document.createElement('button')
    btnUserPost.innerText = 'Posts of current user'
    selDiv.append(btnUserPost)
    btnUserPost.onclick = function (){
        fetch('https://jsonplaceholder.typicode.com/users/'+userSelect.id+'/posts')
            .then(response => response.json())
            .then(posts => {
                for (let post of posts) {
                    let postTitleDiv = document.createElement('div')
                    postTitleDiv.innerText = `${post.title}`
                    selDiv.append(postTitleDiv)
                    let showPostButton = document.createElement('button')
                    showPostButton.innerText = 'Show Post'
                    selDiv.append(showPostButton)
                    showPostButton.onclick = function (){
                        let postSession = []
                        postSession.push(post)
                        let strPostS = JSON.stringify(postSession)
                        sessionStorage.setItem('posts', strPostS)
                        window.location = `post-details.html?pd=${post.id}`
                    }
                }
            })
    }
}