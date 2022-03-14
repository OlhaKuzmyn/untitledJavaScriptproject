//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// let postCont = document.getElementById('postContainer')
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => {
//         // console.log(response)
//         for (let rElement of response) {
//             let post = document.createElement('div')
//             post.innerText = `${rElement.body}`
//             postCont.append(post)
//         }
//     })

//2.
// Отримати з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commContainer = document.getElementById('commContainer')

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        for (let rElement of response) {
            let comment = document.createElement('div')
            commContainer.append(comment)
            let commHeader = document.createElement('h3')
            commHeader.innerText = `Name: ${rElement.name}`
            comment.append(commHeader)
            let commPostId = document.createElement('p')
            commPostId.innerText =`PostId: ${rElement.postId}`
            comment.append(commPostId)
            let commId = document.createElement('p')
            commId.innerText =`Id: ${rElement.id}`
            comment.append(commId)
            let commEmail = document.createElement('p')
            commEmail.innerText =`Email: ${rElement.email}`
            comment.append(commEmail)
            let commBody = document.createElement('p')
            commBody.innerText =`Body: ${rElement.body}`
            comment.append(commBody)
        }
    })