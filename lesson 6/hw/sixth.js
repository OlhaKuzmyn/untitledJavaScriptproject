//Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// let string_length = (str) => str.length
// console.log(string_length('hello world'))
// console.log(string_length('lorem ipsum'))
// console.log(string_length('javascript is cool'))

//Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// let str_upper = (str) => str.toUpperCase()
// console.log(str_upper('hello world'))
// console.log(str_upper('lorem ipsum'))
// console.log(str_upper('javascript is cool'))

//Перевести до нижнього регістру настипні стрінгові значення
// let str_lower = (str) => str.toLowerCase()
// console.log(str_lower('HELLO WORLD'))
// console.log(str_lower('LOREM IPSUM'))
// console.log(str_lower('JAVASCRIPT IS COOL'))

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let clean_str = (str) => str.replaceAll(" ", "")
// console.log(clean_str(' dirty string   '))

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToarray = (str) => str.split(' ');
// console.log(stringToarray('Каждый охотник желает знать'))

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));// Каждый
// let delete_char = (str,i) => str.substring(0, i)
// console.log(delete_char('Каждый охотник желает знать', 7))

//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash = (str) => str.replaceAll(" ", '-').toUpperCase()
// console.log(insert_dash("HTML JavaScript PHP"))

//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let capital_letter = (str) => str.charAt(0).toUpperCase()+str.slice(1)
// console.log(capital_letter('javascript is cool'))

//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str)=> {
//     let str_arr = str.split(' ');
//     for (let i = 0; i<str_arr.length; i++) {
//         str_arr[i] = (str_arr[i]).charAt(0).toUpperCase()+str_arr[i].slice(1)
//     }
//     console.log(str_arr.join(` `))
// }
// capitalize('javascript is cool')

// let capitalize = (str)=> {
//     let str_arr = str.split(' ');
//     let arr2 = []
//     for (let i = 0; i<str_arr.length; i++) {
//         arr2.push(str_arr[i].charAt(0).toUpperCase()+str_arr[i].slice(1))
//     }
//     return arr2.join(` `)
// }
// console.log(capitalize('javascript is cool'))
