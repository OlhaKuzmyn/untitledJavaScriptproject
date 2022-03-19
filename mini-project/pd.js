// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post
// на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


document.body.onload = function (){
    sessionStorage.clear()
}

let postContainer = document.getElementById('postContainer')

// let postSelect = JSON.parse(sessionStorage.getItem('posts'))
// for (let postElement of postSelect) {
//     let postSel = document.createElement('div')
//     for (let postKey in postElement) {
//         if (postKey === 'title'){
//             let htitle = document.createElement('h3')
//             htitle.innerText = `${postKey.charAt(0).toUpperCase() + postKey.slice(1)}: ${postElement[postKey]}`
//             postSel.append(htitle)
//         } else {
//             let pDetail = document.createElement('p')
//             pDetail.innerText = `${postKey.charAt(0).toUpperCase() + postKey.slice(1)}: ${postElement[postKey]}`
//             postSel.append(pDetail)
//         }
//     }
//     postContainer.append(postSel)
//     let btnComments = document.createElement('button')
//     btnComments.innerText = 'Show comments'
//     btnComments.onclick = function (){
//         fetch('https://jsonplaceholder.typicode.com/posts/'+postElement.id+'/comments')
//             .then(response => response.json())
//             .then(comments => {
//                 for (let comment of comments) {
//                     let commDiv = document.createElement('div')
//                     for (let commentKey in comment) {
//                         if (commentKey === 'name'){
//                             let hName = document.createElement('h4')
//                             hName.innerText = `${commentKey.charAt(0).toUpperCase() + commentKey.slice(1)}: ${comment[commentKey]}`
//                             commDiv.append(hName)
//                         } else {
//                             let pDetail = document.createElement('p')
//                             pDetail.innerText = `${commentKey.charAt(0).toUpperCase() + commentKey.slice(1)}: ${comment[commentKey]}`
//                             commDiv.append(pDetail)
//                         }
//                     }
//                     postSel.append(commDiv)
//                     btnComments.disabled = true
//                 }
//             })
//     }
//     postSel.append(btnComments)
// }

//without using array in session storage

let postSelect = JSON.parse(sessionStorage.getItem('post'))

let postSel = document.createElement('div')
for (let postKey in postSelect) {
    if (postKey === 'title'){
        let htitle = document.createElement('h3')
        htitle.innerText = `${postKey.charAt(0).toUpperCase() + postKey.slice(1)}: ${postSelect[postKey]}`
        postSel.append(htitle)
    } else {
        let pDetail = document.createElement('p')
        pDetail.innerText = `${postKey.charAt(0).toUpperCase() + postKey.slice(1)}: ${postSelect[postKey]}`
        postSel.append(pDetail)
    }
}
postContainer.append(postSel)
let btnComments = document.createElement('button')
btnComments.innerText = 'Show comments'
btnComments.onclick = function (){
    fetch('https://jsonplaceholder.typicode.com/posts/'+postSelect


        .id+'/comments')
        .then(response => response.json())
        .then(comments => {
            for (let comment of comments) {
                let commDiv = document.createElement('div')
                for (let commentKey in comment) {
                    if (commentKey === 'name'){
                        let hName = document.createElement('h4')
                        hName.innerText = `${commentKey.charAt(0).toUpperCase() + commentKey.slice(1)}: ${comment[commentKey]}`
                        commDiv.append(hName)
                    } else {
                        let pDetail = document.createElement('p')
                        pDetail.innerText = `${commentKey.charAt(0).toUpperCase() + commentKey.slice(1)}: ${comment[commentKey]}`
                        commDiv.append(pDetail)
                    }
                }
                postSel.append(commDiv)
                btnComments.disabled = true
            }
        })
}
postSel.append(btnComments)
