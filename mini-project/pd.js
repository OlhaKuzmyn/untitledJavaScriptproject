// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post
// на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


// document.body.onload = function (){
//     sessionStorage.clear()
// }

let postContainer = document.getElementById('postContainer')
let postSelect = JSON.parse(sessionStorage.getItem('posts'))