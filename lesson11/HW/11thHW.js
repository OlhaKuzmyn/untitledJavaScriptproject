//створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let form = document.getElementById('firsttask')
form.onsubmit = function (e) {
    e.preventDefault()
    localStorage.setItem(`Person`, `${e.target.age.value}, ${e.target.name.value}`)
}

//створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2 = document.getElementById('secondtask')
form2.onsubmit = function (e) {
    e.preventDefault()
    localStorage.setItem(`Car`, `${[e.target.model.value,e.target.type.value, e.target.volume.value]}`)
}