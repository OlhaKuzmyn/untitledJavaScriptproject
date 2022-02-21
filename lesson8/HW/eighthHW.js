//Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let txt_content = document.getElementById("content").innerText
// console.log(txt_content)
// let txt_rules = document.getElementById("rules").innerText
// console.log(txt_rules)
//
// document.getElementById("content").innerText = "Vox Machina, a band of eight unlikely heroes, find themselves on a quest to save the realm of Exandria from dark magical forces."
// document.getElementById("rules").innerText = "Vox Machina, a band of eight unlikely heroes, find themselves on a quest to save the realm of Exandria from dark magical forces."

// let background_change = document.body.children
// console.log(background_change)
// for (let backgroundChangeElement of background_change) {
//     backgroundChangeElement.style.background = 'red'
//     backgroundChangeElement.style.color = 'blue'
// }

// let txt_rules_class = document.getElementById("rules").classList
// console.log(txt_rules_class)

// let red_rules = document.getElementsByClassName('fc_rules')
// for (let redRule of red_rules) {
//     redRule.style.color = 'red'
// }