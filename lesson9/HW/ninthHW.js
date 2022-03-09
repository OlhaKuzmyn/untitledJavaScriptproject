// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// document.body.append(div)
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// div.innerText = 'Lorem ipsum dolor sit amet.'
// div.style.background='red'
// div.style.color = 'pink'
// div.style.fontSize = '100px'
// let cloneDiv = div.cloneNode(true)
// document.body.append(cloneDiv)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main','Products','About us','Contacts']
// let menuEl = document.getElementsByClassName('menu')[0]
// for (let i = 0; i < arr.length; i++) {
//     let listItem = document.createElement('li')
//     listItem.innerText = arr[i]
//     menuEl.append(listItem)
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let coursesElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.innerText= `${coursesElement.title}, ${coursesElement.monthDuration}`
//     document.body.append(div)
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let coursesElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     let h2 = document.createElement('h2')
//     document.body.append(div)
//     div.append(h2)
//     div.classList.add('item')
//     h2.classList.add('heading')
//     h2.innerText = `${coursesElement.title}`
// }