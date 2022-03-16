//1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста.
// при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postCont = document.getElementById('postContainer')
document.body.append(postCont)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        for (let rElement of response) {
            let id = rElement.id
            let divPost = document.createElement('div')
            divPost.innerText = `${rElement.title}`
            divPost.classList.add('divPost')
            postCont.append(divPost)
            let buttonComm = document.createElement('button')
            buttonComm.innerText = 'Comments'
            divPost.append(buttonComm)
            buttonComm.onclick = function (e){
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(response=>{
                        for (let responseEl of response) {
                            let postId = responseEl.postId
                            if (id === postId) {
                                let divComments = document.createElement('div')
                                divComments.innerText = `${responseEl.body}`
                                divComments.classList.add('divComments')
                                divPost.append(divComments)
                            }
                            buttonComm.disabled = true
                        }
                    })
            }

        }
    })

//dosnt work
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => {
//         // console.log(response)
//         for (let rElement of response) {
//             let id = rElement.id
//             let divPost = document.createElement('div')
//             divPost.innerText = `${rElement.title}`
//             divPost.classList.add('divPost')
//             postCont.append(divPost)
//             let buttonComm = document.createElement('button')
//             buttonComm.innerText = 'Comments'
//             divPost.append(buttonComm)
//             buttonComm.onclick = function (e){
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                     .then(response => response.json())
//                     .then(response=>{
//                         for (let responseEl of response) {
//                             let postId = responseEl.postId
//                             if (id === postId) {
//                                 let divComments = document.createElement('div')
//                                 divComments.innerText = `${responseEl.body}`
//                                 divComments.classList.add('divComments')
//                                 divPost.append(divComments)
//                                 if (divComments.style.display === 'none'){
//                                     divComments.style.display = 'block'
//                                 }
//                                 else {
//                                     divComments.style.display ='none'
//                                 }
//                             }
//                         }
//                     })
//             }
//
//         }
//     })

//dosnt work, shows only last comment
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => {
//         // console.log(response)
//         for (let rElement of response) {
//             let id = rElement.id
//             let divPost = document.createElement('div')
//             divPost.innerText = `${rElement.title}`
//             divPost.classList.add('divPost')
//             postCont.append(divPost)
//             let buttonComm = document.createElement('button')
//             buttonComm.innerText = 'Comments'
//             divPost.append(buttonComm)
//             fetch('https://jsonplaceholder.typicode.com/comments')
//                 .then(response => response.json())
//                 .then(response=>{
//                     for (let responseEl of response) {
//                         let postId = responseEl.postId
//                         if (id === postId) {
//                             let divComments = document.createElement('div')
//                             divComments.innerText = `${responseEl.body}`
//                             divComments.classList.add('divComments')
//                             // divComments.style.display ='none'
//                             divPost.append(divComments)
//                             buttonComm.onclick = function (){
//                                 if (divComments.style.display === 'none'){
//                                     divComments.style.display = 'block'
//                                 } else {
//                                     divComments.style.display ='none'
//                                 }
//                             }
//                         }
//                     }
//                 })
//
//
//         }
//     })




