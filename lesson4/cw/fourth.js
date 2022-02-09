//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function less_of_three(a,b,c){
//     if (b > a && a < c){
//         console.log(a)
//     } else if (a > b && b < c){
//         console.log(b)
//     } else if (a > c && c < a){
//         console.log(c)
//     }
// }
// less_of_three(5,10,20)

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function most_of_three(a,b,c){
//     if (b < a && a > c){
//         console.log(a)
//     } else if (a < b && b > c){
//         console.log(b)
//     } else if (a < c && c > a){
//         console.log(c)
//     }
// }
// most_of_three(50,100,20)

//створити функцію яка повертає найбільше число з масиву
// let list = [55,44, 30,57, 28, 62, 74, 48, 14, 30]
// function most_of_array(arr){
//     let largest = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (largest<arr[i]){
//             largest=arr[i]
//         }
//     }
//     console.log(largest)
// }
// most_of_array(list)

//створити функцію яка повертає найменше число з масиву
// let list = [55,44, 30,57, 28, 62, 74, 48, 14, 30]
// function most_of_array(arr){
//     let smallest = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (smallest>arr[i]){
//             smallest=arr[i]
//         }
//     }
//     return smallest
// }
// smallest_num = most_of_array(list)
// console.log(smallest_num)

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum_arr(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum
// }
// let list = [55,44, 30,57, 28, 62, 74, 48, 14, 30]
// result = sum_arr(list)
// console.log(result)

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sum_arr(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum/arr.length
// }
// let list = [55,44, 30,57, 28, 62, 74, 48, 14, 30]
// result = sum_arr(list)
// console.log(result)

//створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше (Math використовувати заборонено);
// function most_of (...arr){
//     let largest = arr[0]
//     let smallest = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (largest<arr[i]){
//             largest=arr[i]
//         } else if (smallest>arr[i]){
//             smallest=arr[i]
//         }
//     }
//     console.log(largest)
//     return smallest
// }
// console.log(most_of(1, 2, 3, 5, 7, 9, 56, 8, 67 ))

//створити функцію яка заповнює масив рандомними числами
// let list = []
// function fill_rando(arr){
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(fill_rando(list))

//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let list = []
// function fill_rando(arr,limit){
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(fill_rando(list,12))

//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr1 = [5, 7, 9, 56, 8]
// function rev_arr(arr){
//     let arrRev = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrRev.push(arr[i])
//     }
//     return arrRev
// }
// console.log(rev_arr(arr1))