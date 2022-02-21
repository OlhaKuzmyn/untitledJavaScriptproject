// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//(Те саме, тільки через клас)

// class Car {
//     constructor(model, manufacturer, manuf_year, max_speed, engine_displacement) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.manuf_year = manuf_year;
//         this.max_speed = max_speed;
//         this.engine_displacement = engine_displacement;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`)
//     }
//     info(){
//         console.log(`Model - ${this.model}\nManufacturer - ${this.manufacturer}\nYear manufactured - ${this.manuf_year}\nMax speed - ${this.max_speed}\nEngine displacement - ${this.engine_displacement}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.max_speed = newSpeed
//     }
//     changeYear (newYear){
//         this.manuf_year= newYear
//     }
//     addDriver (newDriver){
//         this.driver = newDriver
//     }
// }
// function Car (model, manufacturer, manuf_year, max_speed, engine_displacement) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.manuf_year = manuf_year;
//     this.max_speed = max_speed;
//     this.engine_displacement = engine_displacement;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${max_speed} км на годину`)
//     }
//     this.info = function (){
//         console.log(`Model - ${model}\nManufacturer - ${manufacturer}\nYear manufactured - ${manuf_year}\nMax speed - ${max_speed}\nEngine displacement - ${engine_displacement}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.max_speed = newSpeed
//     }
//     this.changeYear = function (newYear){
//         this.manuf_year= newYear
//     }
//     this.addDriver = function (newDriver){
//         this.driver = newDriver
//     }
// }
// let jaguar_f = new Car ('F-TYPE', 'Jaguar', 2013, 250, 5000)
// console.log(jaguar_f)
// jaguar_f.drive()
// jaguar_f.info()
// jaguar_f.increaseMaxSpeed(300)
// jaguar_f.changeYear(2022)
// jaguar_f.addDriver({name: 'Alexandra Ellington', age: 27, experience: 2})
// console.log(jaguar_f)

//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



// class Cinderella {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
// let cinderella1 = new Cinderella('Isabell', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella2 = new Cinderella('Rose', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella3 = new Cinderella('Jasmine', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella4 = new Cinderella('Allison', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella5 = new Cinderella('Cinderella', Math.round(Math.random()*(24-18)+18), 35)
// let cinderella6 = new Cinderella('Vivienne', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella7 = new Cinderella('Jacqueline', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella8 = new Cinderella('Gracie', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella9 = new Cinderella('Amelia', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella10 = new Cinderella('Evelyn', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cind_arr = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]
// console.log(cind_arr)

// let prince = {name: 'Prince', age: 24, shoe_size_found: 35}      //перший варіант
// let prince_love = (cinderellas) => {
//     for (let i = 0; i < cinderellas.length; i++) {
//         if (cinderellas[i].foot_size === prince.shoe_size_found){
//             return `Prince found his love ${cinderellas[i].name}`
//         }
//     }
// }
// console.log(prince_love(cind_arr))

// let prince = {                                      //другий варіант
//     name: 'Prince',
//     age: 24,
//     shoe_size_found: 35,
//     prince_love: function (cinderellas){
//         for (let i = 0; i < cinderellas.length; i++) {
//         if (cinderellas[i].foot_size === prince.shoe_size_found){
//             return `Prince has found his love ${cinderellas[i].name}`
//         }
//         }
//     }
// }
// console.log(prince.prince_love(cind_arr))
//
//
// console.log(cind_arr.find(value => value.foot_size === prince.shoe_size_found))
// let prince_love = cind_arr.find(value => value.foot_size === prince.shoe_size_found)
// console.log(prince_love)


// class Cinderella {                                                             //третій варіант
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//         this.prince = {
//             name: 'Prince',
//             age: 24,
//             shoe_size_found: 35,
//         }
//     }
//     prince_love (cinderellas){
//         for (let i = 0; i < cinderellas.length; i++) {
//             if (cinderellas[i].foot_size === this.prince.shoe_size_found){
//                 return `${this.prince.name} has found his love ${cinderellas[i].name}`
//             }
//         }
//     }
// }
//
// let cinderella1 = new Cinderella('Isabell', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella2 = new Cinderella('Rose', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella3 = new Cinderella('Jasmine', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella4 = new Cinderella('Allison', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella5 = new Cinderella('Cinderella', Math.round(Math.random()*(24-18)+18), 35)
// let cinderella6 = new Cinderella('Vivienne', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella7 = new Cinderella('Jacqueline', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella8 = new Cinderella('Gracie', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella9 = new Cinderella('Amelia', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cinderella10 = new Cinderella('Evelyn', Math.round(Math.random()*(24-18)+18), Math.round(Math.random()*(40-36)+36))
// let cind_arr = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]
// console.log(cind_arr)
// console.log(cinderella1.prince_love(cind_arr))
