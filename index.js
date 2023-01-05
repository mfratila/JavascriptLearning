let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let player = {
    Name: "Mihai",
    Chips: 200

}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.Name + ": $" + player.Chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 10) + 2
    return randomNumber
}


function startGame() {

    if (!isAlive) { 
        isAlive = true
        cards = []
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard
        renderGame() 
    }
}

function renderGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
}

function drawCard() { 
    if (isAlive && !hasBlackjack) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}

