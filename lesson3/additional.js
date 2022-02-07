// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.

//вертає нулі
// let arr_empty = new Array(50).fill(0)
// console.log(arr_empty)
// for (let n of arr_empty) {
//     let rand = Math.floor(Math.random() * 100);
//     if (rand%2===0){
//         n=rand
//     }
// }
// console.log(arr_empty)

//парні і непарні
// let myList = [];
// for (let i=0; i<50; i++){
//     myList[i]=Math.floor(Math.random() * 100);
// }
// console.log(myList)

//парні числа
// let myList = [];
// for (let i=0; i<50; i++){
//     myList[i]=(Math.floor(Math.random() * 100)) *2;
// }
// console.log(myList)

//парні числа -2
// debugger
// let myList = [];
// for (let i=0; i<50; i++){
//     let rand = Math.floor(Math.random() * 100);
//     if (rand%2===0) {
//         myList[i] = rand;
//     } else if (rand%2!==0){
//         myList[i] = 2
//     }
// }
// console.log(myList)


// вертає багато empty і менше 50
// let myList_even = [];
// let myList_odd = [];
// for (let i=0; i<50; i++){
//     let rand = Math.floor(Math.random() * 100);
//     if (rand%2===0) {
//         myList_even[i] = rand;
//     } else if (rand%2!==0){
//         myList_odd[i] = rand
//     }
// }
// console.log(myList_even)
// console.log(myList_odd)

//непарні числа -1
// let myList = [];
// for (let i=0; i<50; i++){
//     let rand = Math.floor(Math.random() * 100);
//     if (rand%2!==0) {
//         myList[i] = rand;
//     } else if (rand%2===0){
//         myList[i] = 1
//     }
// }
// console.log(myList)

//c. Заповнити масив 20ма рандомними числами.
// let myList = [];
// for (let i=0; i<20; i++){
//     myList[i]=Math.floor(Math.random() * 100);
// }
// console.log(myList)

//Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
// let myList = [];
// for (let i=0; i<20; i++){
//     myList[i]=Math.floor(Math.random() * (8 - 732) + 732);
// }
// console.log(myList)

// 2. Вивести за допомогою console.log кожен третій елемент
// let arr1 = [112, 729, 58, 347, 27, 303, 9, 212, 586, 710, 518, 135, 430, 238, 143, 386, 86, 314, 583, 343]
// console.log(arr1)
// let i=2;
// while (i<arr1.length){
//     console.log(arr1[i])
//     i+=3
// }

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
// let arr1 = [112, 729, 58, 347, 27, 303, 9, 212, 586, 710, 518, 135, 430, 238, 143, 386, 86, 314, 583, 343]
// console.log(arr1)
// for (let i=2; i<arr1.length; i+=3){
//     if (arr1[i]%2===0){
//         console.log(arr1[i])
//     }
// }

//4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив

//не працює
// let arr1 = [112, 729, 58, 347, 27, 303, 9, 212, 586, 710, 518, 135, 430, 238, 143, 386, 86, 314, 583, 343]
// console.log(arr1)
// let arr_even = [];
// for (let i=2; i<arr1.length; i+=3){
//     if (arr1[i]%2===0){
//         arr_even += [arr1[i]];
//         // let arr_even = new Array(3).fill(arr1[i])
//         console.log(arr_even)
//
//     }
// }
// console.log(arr_even)
// console.log(typeof arr_even)

// let arr1 = [112, 729, 58, 347, 27, 303, 9, 212, 586, 710, 518, 135, 430, 238, 143, 386, 86, 314, 583, 343]
// console.log(arr1)

// вертає array кожного числа тричі
// let arr_even = new Array(3)
// for (let i=2; i<arr1.length; i+=3){
//     if (arr1[i]%2===0){
//         arr_even = arr_even.fill(arr1[i]);
//         console.log(arr_even)
//
//     }
// }
// console.log(arr_even)
// console.log(typeof arr_even)

//не працює
// let arr_even = []
// for (let i=2; i<arr1.length; i+=3){
//     if (arr1[i]%2===0){
//         arr_even+=arr1[i];
//         // arr_even = new Array(3).fill(arr1[i]);
//         // console.log(Array.from(arr1[1]))
//     }
// }
// console.log(Array.from(arr_even))
// // console.log(typeof arr_even)

//push не працює, while - зависає
// debugger
// let arr_even = new Array(0)
// for (let i=2; i<arr1.length; i+=3){
//     if (arr1[i]%2===0){
//         arr_even = arr_even.push(arr1[i])
//         // let j = 0;
//         // while (arr_even.length<4){
//         //     arr_even[j] = arr1[i]
//         // }
//     }
// }
// console.log(arr_even)

//вертає array з останнім парним
// let arr_even = new Array(3)
// for (let i=2; i<arr1.length; i+=3){
//     if (arr1[i]%2===0){
//         for (let j=0;j<arr_even.length; j++){
//             arr_even[j] = arr1[i];
//         }
//     }
// }
// console.log(arr_even)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr= [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for(let i=0; i<arr.length;i++){
//     if (arr[i]%2===0){
//         console.log(arr[i-1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i=0;i<arr.length;i++){
//     sum = sum+arr[i]
// }
// let result= sum/arr.length
// console.log(result)

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//виводить помножене лише останнє значення
// let myList = [];
// let new_arr = [];
// for (let i=0; i<10; i++){
//     myList[i]=Math.floor(Math.random() * 100);
//     for (let j=0;j<10;j++){
//         new_arr[j] = myList[i]*5
//     }
// }
// console.log(myList)
// console.log(new_arr)

