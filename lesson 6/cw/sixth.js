//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let normalize_names = (name)=> {
//     let name_space = name.replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ')
//     let name_arr = name_space.split(' ')
//     let name_arr2 = []
//     for (let i = 0; i < name_arr.length; i++) {
//         if (name_arr[i].length>0){
//             name_arr2.push(name_arr[i])
//         }
//     }
//     return name_arr2.join(' ')
// }
// console.log(normalize_names('Ron---Weasley'))
// console.log(normalize_names('Harry..Potter'))
// console.log(normalize_names('Hermione__Granger'))

//створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let rando_arr = (length)=> {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random()*100))  // перший варіант
//         // arr[i] = Math.round(Math.random()*100)   // другий варіант
//     }
//     return arr
// }
// console.log(rando_arr(10))
//
// //створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let arr = [32, 48, 70, 8, 19, 41, 71, 64, 91, 58]
// console.log(rando_arr(10).sort(function (current,next){
//     return current - next  // від більшого до меншого
// }))

//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let evens_arr = rando_arr(10).filter(function (num){
//     return num %2 === 0
// })
// console.log(evens_arr)

//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let str_arr = rando_arr(10).map(function (num){
//     num = num.toString()
//     return num
// })
// console.log(str_arr)

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (direction, nums) => {
//     if (direction==='ascending') {
//         console.log(nums.sort(function (current, next){
//             return current -next
//         }))
//     } else if (direction==='descending'){
//         console.log(nums.sort(function (current, next){
//             return next-current
//         }))
//     }
// }
// sortNums('ascending', [11,21,3])
// sortNums('descending', [11,21,3])

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort(function (current, next){
//     return next.monthDuration - current.monthDuration
// }))
//
// console.log((coursesAndDurationArray.filter(function (course){
//     return course.monthDuration>5
// })))
