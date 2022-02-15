//Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str,n)=>{
//     for (let i = 0 , j=n ; i < str.length+n , j<str.length+n; i+=n, j+=n) {
//         console.log(str.substring(i,j))
//     }
// }
// cutString('vaccination',3)

// let cutString = (str,n)=>{
//     let cut_str_arr = []
//     for (let i = 0 , j=n ; i < str.length+n , j<str.length+n; i+=n, j+=n) {
//         cut_str_arr.push(str.substring(i,j))
//     }
//     console.log(cut_str_arr)
// }
// cutString('vaccination',3)

//Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :дані до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// 1) lowercase
// 2) begins with -> if with @ -> false
// 3) includes @
// 4) includes .
// 5) . at least one char after @ --- @ = i , . - i>=2

// let mail_check = (mail) => {
//     mail = mail.toLowerCase();
//     if (mail.startsWith(".") || !mail.includes(".")){
//         return "Wrong email"
//     } else if(mail.startsWith("@") || !mail.includes('@')){
//         return "Wrong email"
//     } else if (mail.indexOf('.') - mail.indexOf('@') < 2){
//         return "Wrong email"
//     }
//     return `Yor email is ${mail}`
// }
// console.log(mail_check('someeMAIL@i.ua'))
// console.log(mail_check('.some.email@gmail.com'))
// console.log(mail_check('some.email@gmail.com'))
// console.log(mail_check('someeMAIL@gmail.com'))

//відсортувати масив в спадаючому порядку за кількістю елементів в полі modules
// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.sort(function (current, next){
//     return next.modules.length - current.modules.length
// }))

//Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let str1 = "Астрономия это наука о небесных объектах"
// console.log(str1.search("о"))
// let count_char = (str, char) => {
//     let str_arr = str.split(char)
//     console.log(str_arr)
//     return str_arr.length-1
// }
// console.log(count_char(str1, "н"))

//Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let cut_String = (str , n) => {
//     str = str.split(' ');
//     let new_str = [];
//     for (let i = 0; i < n; i++) {
//         new_str.push(str[i])
//     }
//     return new_str.join(' ')
// }
// console.log(cut_String("Сила тяжести приложена к центру масс тела", 5))

