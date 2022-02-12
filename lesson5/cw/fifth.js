// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let less_of_three = (a,b,c) => {
//     if (b>a && a<c){
//         console.log(a)
//     } else if (a>b && b<c){
//         console.log(b)
//     }else if (a>c && c<a){
//         console.log(c)
//     }
// }
// less_of_three(105,70,130)

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let most_of_three = (n1,n2,n3)=>{
//         if (n2<n1 && n1>n3){
//         console.log(n1)
//     } else if (n1<n2 && n2>n3){
//         console.log(n2)
//     }else if (n1<n3 && n3>n2){
//         console.log(n3)
//     }
// }
// most_of_three(205,170,130)

//створити функцію яка повертає найбільше число з масиву
// let most_of_arr = (arr) => {
//     let most_arr = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (most_arr<arr[i]){
//             most_arr=arr[i]
//         }
//     }
//     return most_arr
// }
// console.log(most_of_arr([30,57, 28, 62, 74]))

//створити функцію яка повертає найменьше число з масиву
// let least_of_arr = (arr) => {
//     let least_arr = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (least_arr>arr[i]){
//             least_arr=arr[i]
//         }
//     }
//     return least_arr
// }
// console.log(least_of_arr([30,57, 28, 62, 74]))

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr_iter = (arr)=>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(arr_iter([30,57, 28, 62, 74]))

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr_iter = (arr)=>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum/arr.length
// }
// console.log(arr_iter([30,57, 28, 62, 74]))

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr_most_least = (...arr) => {
//     let most = arr[0];
//     let least = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (most<arr[i]) {
//             most = arr[i]
//         } else if (least>arr[i]){
//             least=arr[i]
//         }
//     }
//     console.log(most)
//     return least
// }
// console.log(arr_most_least(30,57, 28, 62, 74))

//створити функцію яка заповнює масив рандомними числами
// let random_arr = (arr)=>{
//     for (let i = 0; i < 10; i++) {
//         arr[i]=Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(random_arr([]))

//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random_arr = (arr,num)=>{
//     for (let i = 0; i < num; i++) {
//         arr[i]=Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(random_arr([],12))

//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let rev_arr = (arr)=>{
//     let revArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         revArr.push(arr[i])
//     }
//     return revArr
// }
// console.log(rev_arr([49, 71, 85, 43, 56, 50, 73, 12, 76, 92, 21, 16]))