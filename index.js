let player = {
    name:"Iqbal",
    chips: 145

}
let hasBlackJack = false
let sum = 0
let cards = []
let message =""
let isAlive = false
let newCardFlag = false

let messegeEL = document.getElementById("message-el")  
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent= player.name+": $"+player.chips

function getRandomCard() {
    let number = Math.ceil(Math.random()*13)
    if (number===1){
        number=11
    }
    return number
}

function startGame() {
    isAlive = true
    let firstCard =getRandomCard()
    let secondCard = getRandomCard()
    cards = [ firstCard, secondCard ]
    sum = firstCard + secondCard 
    renderGame()
}
function renderGame() {

    cardsEl.textContent="Card: "
    for (let i = 0 ; i<cards.length; i+=1){
        cardsEl.textContent +=" "+cards[i];
    }

    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message= "Do you want to draw a new card? "
        messegeEL.textContent=message
    } else if (sum === 21) {
        message= "You've got Blackjack! "
        messegeEL.textContent=message
        hasBlackJack = true
    } else {
        message= "You're out of the game! "
        messegeEL.textContent=message
        isAlive = false
    }
    
}


function newCard(){
    if (isAlive & !hasBlackJack ){
        newCardFlag = true
        let newCar = getRandomCard()
        sum += newCar
        cards.push(newCar)
        renderGame()
    }
   

}

