//Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// class PersonalDetails {
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
// class PersonalDetailsAddress extends PersonalDetails{
//     constructor(id, name, username, email, address, phone, website, company) {
//         super(id, name, username, email, address, phone, website, company);
//         this.address = function (street, suite, city, zipcode, geo){
//             this.street = street;
//             this.suite = suite;
//             this.city = city;
//             this.zipcode = zipcode;
//             this.geo = geo;
//         }
//     }
// }
// class PersonalDetails {
//     constructor(id, name, username, email) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//     }
// }
// class PersonalDetailsAddress extends PersonalDetails{
//     constructor(id, name, username, email, address) {
//         super(id, name, username, email, address);
//         this.address = function (street, suite, city, zipcode, geo){
//             this.street = street;
//             this.suite = suite;
//             this.city = city;
//             this.zipcode = zipcode;
//             this.geo = geo;
//         }
//     }
// }

// class PersonalDetails {
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = function (street, suite, city, zipcode, geo){
//             this.street = street;
//             this.suite = suite;
//             this.city = city;
//             this.zipcode = zipcode;
//             this.geo = geo;
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }

// function PersonalDetails (id, name, username, email, address, phone, website, company){
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.Address = function Address (street, suite, city, zipcode, geo){
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.Geo = function Geo (lat,lng) {
//             this.lat = lat;
//             this.lng = lng;
//         };
//         }
//     this.phone = phone;
//     this.website = website;
//     this.company = company;
// }
//
// let person = new PersonalDetails(1,'Leanne Graham','Bret','Sincere@april.biz', '', '1-770-736-8031 x56442', 'hildegard.org', '')
// let person_address = new person.Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '')
// // let person_geo = new person.Address.Geo('-37.3159', '81.1496')
// console.log(person_address)
// // console.log(person_geo)
// console.log(person)


//works
// function PersonalDetails (id, name, username, email, street,suite,city, zipcode, lat,lng , phone, website, companyName, catchPhrase, bs){
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street : street,
//         suite : suite,
//         city : city,
//         zipcode : zipcode,
//         geo : {
//             lat: lat,
//             lng: lng
//         }
//     }
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         name: companyName,
//         catchPhrase: catchPhrase,
//         bs: bs
//     };
// }
// let person = new PersonalDetails(1,'Leanne Graham','Bret','Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(person)

//-  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// class TagDescription {
//     constructor(tagTitle, action, attributeName1, attributeAction1, attributeName2, attributeAction2) {
//         this.tagTitle = tagTitle;
//         this.action = action;
//         this.attributes = [
//             {
//                 name1: attributeName1,
//                 action1: attributeAction1
//             },
//             {
//                 name2: attributeName2,
//                 action2: attributeAction2
//             }
//         ]
//     }
// }
// let a_tag = new TagDescription('The Anchor element', "defines a hyperlink, which is used to link from one page to another", 'download', 'Specifies that the target will be downloaded when a user clicks on the hyperlink', 'href', 'Specifies the URL of the page the link goes to')
// let div_tag = new TagDescription('The Content Division element', 'defines a division or a section in an HTML document', 'class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
// let h1_tag = new TagDescription('Heading element', 'defines the most important heading','class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
// let span_tag = new TagDescription('The Content Span element', 'generic inline container for phrasing content, which does not inherently represent anything','class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
// let input_tag = new TagDescription('The Input (Form Input) element', ' is used to create interactive controls for web-based forms in order to accept data from the user', 'class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
// let form_tag = new TagDescription('The Form element', 'represents a document section containing interactive controls for submitting information', 'class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
// let option_tag = new TagDescription('The HTML Option element', 'is used to define an item contained in a select, an optgroup, or a datalist element.', 'class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
// let select_tag = new TagDescription('The HTML Select element', 'element represents a control that provides a menu of options', 'class', 'allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method', 'id', 'identify the element when linking (using a fragment identifier), scripting, or styling ')
//
// console.log(a_tag, div_tag, h1_tag, span_tag, input_tag, form_tag, option_tag, select_tag)