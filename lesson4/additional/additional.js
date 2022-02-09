// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function two_args(a,b){
//     if (b!==undefined){
//         console.log(a+b)
//     } else {
//         console.log(a)
//     }
// }
// two_args(5, 'Hello')
// two_args(5)

//створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
// function sum_index(arr1,arr2){
//     let sum =[];
//     for (let i = 0, j=0; i < arr1.length , j<arr2.length ; i++, j++) {
//         sum.push(arr1[i]+arr2[i])
//     }
//     console.log(sum)
// }
// sum_index([1,2,3,4],[2,3,4,5])

//Створити функцію яка приймає масив будь яких обєктів, та повертає масив ключів всіх обєктів
// function key_output(obj){
//     for (let objElement of obj) {
//         for (let objElementKey in objElement) {
//             console.log(objElementKey)
//         }
//     }
// }
// key_output([{name: 'Dima', age: 13}, {model: 'Camry'}])

//Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function key_output(obj){
//     for (let objElement of obj) {
//         for (let objElementKey in objElement) {
//             console.log(objElement[objElementKey])
//         }
//     }
// }
// key_output([{name: 'Dima', age: 13}, {model: 'Camry'}])