// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// document.getElementById('main_header').classList.add('group_name')

// b) робить шириниу елементу ul 400px

// let ul_get = document.getElementsByTagName('ul')
// // console.log(ul_get)
// for (let ulElement of ul_get) {
//     ulElement.style.width = '400px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let link_list_el = document.getElementsByClassName('linkList')
// for (let Element of link_list_el) {
//     Element.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let listEl2= document.getElementsByClassName('listElement2')
// for (let listEl2Element of listEl2) {
//     console.log(listEl2Element.innerText)
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let li_elem = document.getElementsByTagName('li')
// for (let liElemElement of li_elem) {
//     liElemElement.style.background = 'silver'
//     console.log(liElemElement)
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let a_el = document.getElementsByTagName('a')
// for (let aElElement of a_el) {
//     aElElement.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a_el = document.getElementsByTagName('a')
// for (let aElElement of a_el) {
//     console.log(aElElement)
//     if (aElElement.innerText === 'link3'){
//         aElElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let xxx = []
// let a_el = document.getElementsByTagName('a')
// for (let i = 0; i < a_el.length; i++) {
//     xxx[i] = a_el[i].innerText
//     a_el[i].classList.add(`${xxx[i]}`)
// }
// console.log(xxx)

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let sub_header_el = document.getElementsByClassName('sub-header')
// for (let subHeaderElElement of sub_header_el) {
//     subHeaderElElement.style.background = 'lightblue'
//     console.log(subHeaderElElement)
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let colour_get = prompt("Input a color")
// let sub_header_el = document.getElementsByClassName('sub-header')
// for (let subHeaderElElement of sub_header_el) {
//     if (subHeaderElElement.innerText === 'content 2 segment'){
//         subHeaderElElement.style.color = `${colour_get}`
//     }
//     console.log(subHeaderElElement)
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let get_txt = prompt('input text')
// let cont_el = document.getElementsByClassName('content_1')
// for (let contElElement of cont_el) {
//     contElElement.innerText = `${get_txt}`
// }

// l) отримати елементи p та змінити їм padding на 20px

// let p_elem = document.getElementsByTagName('p')
// for (let pElemElement of p_elem) {
//     pElemElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let txt_elem = document.getElementsByClassName('text2')
// for (let txtElemElement of txt_elem) {
//     txtElemElement.innerText = 'mon-year'
// }

