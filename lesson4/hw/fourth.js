//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle_area(a,b){
//     return a*b
// }
// let result = rectangle_area(50,30)
// console.log(result)

//створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle_area(r){
//     return 3.14*(r**2)
// }
// let result = circle_area(5)
// console.log(result)

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area_cylinder (r,h){
//     return 2*3.14159*r*h+2*3.14159*(r**2)
// }
// let result = area_cylinder(15.5,35.3)
// console.log(result)

//створити функцію яка приймає масив та виводить кожен його елемент
// function iterate_list (arr){
//     for (let item of arr){
//         console.log(item)
//     }
// }
// let nums = [111, 222, 333];
// iterate_list(nums)

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text_paragraph(txt){
//     document.write(`<p>${txt}</p>`)
// }
// text_paragraph("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sit?")

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul_li(item){
//     document.write(`<ul>`)
//     document.write(`<li>${item}</li>`)
//     document.write(`<li>${item}</li>`)
//     document.write(`<li>${item}</li>`)
//     document.write(`</ul>`)
// }
// ul_li ("Lorem ipsum dolor sit amet")

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function li_num (item, num){
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// li_num("Lorem ipsum dolor sit amet",3)

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//? list <li>?
// function list_arr(arr){
//     document.write(`<ul>`)
//     for (let item of arr){
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arr_mix_2 = ['weekend', false, 'holiday',  48, 'sunday', 'wednesday', 14, true, 30, 'party'];
// list_arr(arr_mix_2)

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
// array_elem(arr_templ)
// function array_elem (arr){
//     for (let element of arr){
//         document.write(`<div>${element.name} ${element.age} ${element.id}</div>`)
//         console.log(element)
//     }
// }

