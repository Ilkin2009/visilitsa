

let letters = []
let word = ["АПЕЛЬСИН","ЯБЛОКО","НЕКТАРИН","БАНАН","ТОРТ","АБОБУС","ПРИВЕТ","ПУТИН","САЙТ","КОМПЪЮТЕР","НОУТБУК","КЛАВИАТУРА","ТЕЛЕФОН","ИГРА","ТРИДЦАТЬ","ДВА","ФУНЧЁЗА","МЫШЬ","ГЕЙМЕР","ХАЙПЕР","РУЛЬ","ИГРУШКА"]
let randomIndex = getRandomWord(0,word.length -1)
let secretWord = word[randomIndex]
let attemps = secretWord.length
document.querySelector("span").innerHTML = attemps
let finish = false

document.querySelector(".game").onclick = function(event) {
    if(event.target.classList.contains("button") && finish == false) {
        let userLetter = event.target.innerHTML
        event.target.disabled = true
        letters.push(userLetter)
        check(userLetter)
        if(secretWord.indexOf(userLetter) == -1) {
            attemps -= 1
            document.querySelector("span").innerHTML = attemps
           if(attemps == 0){
            finish = true
           }
        }
    }
    else if (event.target.classList.contains("newGame")) {
        newGame()
    }
}

function check(userLetter) {
    let outWord = ""
    for (const letter of secretWord) {
        if(letters.indexOf(letter) == -1) {
            outWord += " _ "
        }
        else {
            outWord += letter
        }
    }
    document.querySelector(".hint").innerHTML = outWord
}



function getRandomWord(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newGame () {
    randomIndex = getRandomWord(0,5)
    secretWord = word[randomIndex]
    attemps = secretWord.length
    document.querySelector("span").innerHTML = attemps
    finish = false
    for (const button of document.querySelectorAll(".button")) {
        button.disabled = false
    }
    letters = []
    document.querySelector(".hint").innerHTML = "Здесь будет новое слово"
}