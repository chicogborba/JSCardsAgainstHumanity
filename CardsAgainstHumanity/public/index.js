//DADOS
const whiteData = [
  {
    id: 1,
    text: "Silêncio.",
  },
  {
    id: 2,
    text: "A ilusão de escolha em uma sociedade altamente capitalista.",
  },
  {
    id: 3,
    text: "Fome extrema.",
  },
  {
    id: 4,
    text: "Bactéria comedora de carne.",
  },
  {
    id: 5,
    text: "Cobras sexuais voadoras.",
  },
  {
    id: 6,
    text: "Não dar a mínima para países de terceiro mundo.",
  },
  {
    id: 7,
    text: "Uma desculpa lamentável para um pai.",
  },
  {
    id: 8,
    text: "Vendo o que acontece quando você tranca pessoas em um quarto com gaivotas famintas.",
  },
  {
    id: 9,
    text: "A crucificação.",
  },
  {
    id: 10,
    text: "Polícia antidrogas.",
  }, 
]
const blackData = [
  {
    id: 1,
    text: "Qual é o meu poder secreto?",
    pick: 1,
  },
    {
    id: 1,
    text: "Minha pika doi pq? ______",
    pick: 1,
  }
]

//Jogo
const cards = new Cards(whiteData, blackData)
const player = new Player("João", 1, cards.get10RandomWhiteCards())

const BlackCard = cards.getRandomBlackCard()
const whiteCards = player.hand


function createCardInUserHand(cardITem) {
  const cardElement = document.createElement("div")
  const cardType = "pick" in cardITem ? "black" : "white"
  const cardClass = cardType === "black" ? "black-card" : "white-card"
  cardElement.classList.add(cardClass)
  cardElement.classList.add("hand-card")
  cardElement.innerHTML = cardITem.text
  document.getElementById("userHand")?.appendChild(cardElement)
}
function createCardOnCenter(cardITem) {
  const cardElement = document.createElement("div")
  const cardType = "pick" in cardITem ? "black" : "white"
  const cardClass = cardType === "black" ? "black-card" : "white-card"
  cardElement.classList.add(cardClass)
  cardElement.innerHTML = cardITem.text
  document.getElementById("center-card")?.appendChild(cardElement)
}



// A line counter with width of 820px that will decrease as the time goes by
const lineCounter = document.getElementById("line-counter")
const lineCounterWidth = 820
const lineCounterDecrease = lineCounterWidth / 260
let lineCounterCurrentWidth = lineCounterWidth

function decreaseLineCounter() {
  lineCounterCurrentWidth -= lineCounterDecrease
  lineCounter.style.width = `${lineCounterCurrentWidth}px`
}

setInterval(decreaseLineCounter, 100)




whiteCards.forEach((card) => {
  createCardInUserHand(card)
})

createCardOnCenter(BlackCard)


const userHand = document.getElementById("userHand")
const centerCard = document.getElementById("center-card")

function handleCardClick(event) {
  const card = event.target
  
  if (centerCard.contains(card) && card.classList.contains("white-card")) {
    userHand.appendChild(card)
    card.classList.add("hand-card")
    card.classList.remove("white-center-card")
  } else if (centerCard.childElementCount <= BlackCard.pick && card.classList.contains("white-card")) {
    centerCard.appendChild(card)
    card.classList.remove("hand-card")
    card.classList.add("white-center-card")
    card.style.transform = "scale(0)"
    setTimeout(() => {
      card.style.transform = "scale(1)"
    }, 50)
  }
}

userHand.addEventListener("click", handleCardClick)
centerCard.addEventListener("click", handleCardClick)