// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone){
//     this['id'] = id;
//     this['name'] = name;
//     this['surname'] = surname;
//     this['email'] = email;
//     this['phone'] = phone;
// }
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// // let user = new User(25, "Sam", "Riegel", "sam@g.com", 105786425)
// // console.log(user)
// // // let user_arr = []
// // // for (let i = 0; i < 10; i++) {
// // //     user_arr[i] = user
// // // }
// // // console.log(user_arr)
// //
// // let user_arr = []
// // for (let i = 0; i < 10; i++) {
// //     user_arr[i] = new User(i+1, "Matthew", "Mercer", "mattm@g.com", 15465898754)
// // }
// // console.log(user_arr)
//
// let user1 = new User(Math.round(Math.random()*100), "Sam", "Riegel", "sam@g.com", 10578642507)
// let user2 = new User(Math.round(Math.random()*100), "Matthew", "Mercer", "mattm@g.com", 15465898754)
// let user3 = new User(Math.round(Math.random()*100), "Ashley", "Johnson", "aj@g.com", 15465896554)
// let user4 = new User(Math.round(Math.random()*100), "Travis", "Willingham", "tw@g.com", 15867896554)
// let user5 = new User(Math.round(Math.random()*100), "Laura", "Bailey", "lb@g.com", 15867896578)
// let user6 = new User(Math.round(Math.random()*100), "Liam", "O'Brien", "lob@g.com", 15557896578)
// let user7 = new User(Math.round(Math.random()*100), "Taliesin", "Jaffe", "tj@g.com", 15597896978)
// let user8 = new User(Math.round(Math.random()*100), "Marisha", "Ray", "mr@g.com", 15597897578)
// let user9 = new User(Math.round(Math.random()*100), "Robbie", "Daymond", "rd@g.com", 15597890548)
// let user10 = new User(Math.round(Math.random()*100), "Ariks", "Eshteross", "ae@g.com", 15500070548)
// let user_arr = [user1,user2, user3, user4, user5, user6, user7, user8, user9, user10]
// console.log(user_arr)
//
// // Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let even_id = user_arr.filter(function (user) {
//     return user.id %2 === 0
// })
// console.log(even_id)
//
// // Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let ascend_id = user_arr.sort(function (current, next){
//     return current['id'] - next["id"]
// })
// console.log(ascend_id)

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let client1 = new Client(Math.round(Math.random()*100), "Sam", "Riegel", "sam@g.com", 10578642507, ['shirt', 'pants', 'hoodie', 'candies'])
// let client2 = new Client(Math.round(Math.random()*100), "Matthew", "Mercer", "mattm@g.com", 15465898754, ['shirt', 'pants', 'nail polish'])
// let client3 = new Client(Math.round(Math.random()*100), "Ashley", "Johnson", "aj@g.com", 15465896554, ['shirt',  'apple'])
// let client4 = new Client(Math.round(Math.random()*100), "Travis", "Willingham", "tw@g.com", 15867896554, ['shirt', 'pants', 'hoodie'])
// let client5 = new Client(Math.round(Math.random()*100), "Laura", "Bailey", "lb@g.com", 15867896578, ['shirt', 'pants', 'apple'])
// let client6 = new Client(Math.round(Math.random()*100), "Liam", "O'Brien", "lob@g.com", 15557896578, ['shirt', 'candies'])
// let client7 = new Client(Math.round(Math.random()*100), "Taliesin", "Jaffe", "tj@g.com", 15597896978, ['shirt', 'pants', 'hair dye', 'apple'])
// let client8 = new Client(Math.round(Math.random()*100), "Marisha", "Ray", "mr@g.com", 15597897578, ['shirt', 'pants', 'nail polish'])
// let client9 = new Client(Math.round(Math.random()*100), "Robbie", "Daymond", "rd@g.com", 15597890548, [ 'hat'])
// let client10 = new Client(Math.round(Math.random()*100), "Ariks", "Eshteross", "ae@g.com", 15500070548, ['shirt', 'pants', 'books', 'hair dye', 'apple'])
// let client_arr = [client1,client2, client3, client4, client5, client6, client7, client8, client9, client10]
// console.log(client_arr)
//
// //Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let ascend_order = client_arr.sort(function (current,next){
//     return current["order"].length - next['order'].length
// })
// console.log(ascend_order)