const btnEl = document.getElementById("btn")
btnEl.addEventListener("click", changeColor)

const spanEl = document.getElementById("color")
const bodyEl = document.getElementById("body")
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]


//function to change generate hex and change the background color
function changeColor() {
    let hexVal = "#"
    for (let i = 0; i < 6; i++) {
        hexVal += hex[randomNum()]
    }
    spanEl.innerHTML = hexVal
    bodyEl.style.backgroundColor = hexVal
}


//generate random number from 0 to hex.length
function randomNum() {
    return Math.floor(Math.random() * hex.length)
}