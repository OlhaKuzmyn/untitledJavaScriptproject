let favourites = JSON.parse(localStorage.getItem('users'))
console.log(favourites)
for (let favourite of favourites) {
    let favDiv = document.createElement('div')
    favDiv.innerText = `name: ${favourite.name}, age: ${favourite.age}, status: ${favourite.status}`
    document.body.append(favDiv)
    console.log(favourite)
}