// створити функцію яка обчислює та повертає площу прямокутника
// let area_rectangle = (a,b) => a*b
// console.log(area_rectangle(15,20))

//створити функцію яка обчислює та повертає площу кола
// let circle_area = (r) => 3.14*(r**2);
// console.log(circle_area(10))

//створити функцію яка обчислює та повертає площу циліндру
// let cylinder_area = (r,h) => 2*3.14*r*h+2*3.14*(r**2);
// console.log(cylinder_area(5,13))

//створити функцію яка приймає масив та виводить кожен його елемент
// let each_elem = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// each_elem([238, 143, 386, 86, 314, 583, 343])

//створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragraph_create = (txt) => document.write(`<p>${txt}</p>`)
// paragraph_create("Lorem ipsum dolor sit amet.")

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list_create = (txt) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list_create("Lorem ipsum dolor sit amet.")

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list_create = (txt, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list_create("Lorem ipsum dolor sit amet." , 3)

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list_create_2 = (arr) => {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list_create_2(['weekend', false, 'holiday',  48])

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr_templ= [
//     {
//         name: "Sarah",
//         age: 40,
//         id: true
//     },
//     {
//         name: "Noah",
//         age: 20,
//         id: false
//     },
//     {
//         name: "Leah",
//         age: 25,
//         id: true
//     }
// ]
// let obj_elem = (obj) => {
//     for (let objElement of obj) {
//         document.write(`<div>${objElement.name} ${objElement.age} ${objElement.id}</div>`)
//     }
// }
// obj_elem(arr_templ)