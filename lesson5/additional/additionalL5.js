// Дано натуральное число n. Выведите все числа от 1 до n.
// let nums_before = (n)=>{
//     for (let i = 1; i < n; i++) {
//         console.log(i)
//     }
// }
// nums_before(10)

//Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let nums_between = (a,b)=>{
//     if (a>b){
//         for (let i = b; i < a+1; i++) {
//             console.log(i)
//         }
//     } else if (a<b){
//         for (let i = a; i < b+1; i++) {
//             console.log(i)
//         }
//     }
// }
// nums_between(25,10)

//функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let switch_arr = (arr,a)=> {
//     let s_arr = []
//     let switch_num = arr[a]
//     let switch_n_2 = arr[a+1]
//     for (let j = 0; j < arr.length ; j++) {
//         if (switch_num === arr[j]){
//             s_arr.push(switch_n_2)
//         } else if (switch_n_2 === arr[j]){
//             s_arr.push(switch_num)
//         } else {
//             s_arr.push(arr[j])
//         }
//     }
//     return s_arr
// }
// console.log(switch_arr([9,8,0,4], 0))
// console.log(switch_arr([9,8,0,4], 1))
// console.log(switch_arr([9,8,0,4], 2))

//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// let zero_last = (arr) => {
//     let z_arr = [];
//     let z_last = [];
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== 0) {
//             z_last.push(arr[j])
//         } else {
//             z_arr.push(arr[j])
//         }
//     }
//     for (let i=0 ; i<z_arr.length; i++) {
//         z_last.push(z_arr[i])
//     }
//     return z_last
// }
// console.log(zero_last([1,0,6,0,3]))
// console.log(zero_last([0,1,2,3,4]))
// console.log(zero_last([0,0,1,0]))

