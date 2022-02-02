//
// let a = [Math.floor(Math.random() * 100) , Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),];
// // let a = Math.floor(Math.random() * 100);
// // let arr = [a, a, a, a, a, a, a, a, a, a];
// console.log(a);
// let result = a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6]+a[7]+a[8]+a[9];
// console.log(result);
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
console.log(arr);
let result = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9];
console.log(result);
//#2
let book = {name:"Dune", pages: 412, genre: "Science fiction"};
let book1 = {name:"The Hitchhiker's Guide to the Galaxy", pages: 208, genre: "Science fiction comedy", author:"Douglas Adams"};
// let book_arr = [book , book1];
let book_arr1 = [ {name:"Dune", pages: 412, genre: "Science fiction", author:"Frank Herbert"},{name:"The Hitchhiker's Guide to the Galaxy", pages: 208, genre: "Science fiction comedy", author:"Douglas Adams"}];
console.log(book_arr1[0])
console.log(book_arr1[1])
// console.log(book_arr[0])
// console.log(book_arr[1])

let height = 23;
let width = 10;
let s = height*width;
console.log(s)

let heightC = 10;
let dC = 4;
let v = 3.14*((dC/2)**2)*10;
console.log(v)


let n = 3;
let m = 4;
let k = Math.sqrt((n**2)*(m**2));
console.log(k)