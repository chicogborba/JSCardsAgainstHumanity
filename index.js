//DADOS
const whiteData = [
  {
    id: 1,
    text: "Bafo de rola.",
  },
  {
    id: 2,
    text: "Minha bunda preta.",
  },
  {
    id: 3,
    text: "Bolas.",
  },
  {
    id: 1,
    text: "Bafo de rola.",
  },
  {
    id: 2,
    text: "Minha bunda preta.",
  },
  {
    id: 3,
    text: "Bolas.",
  },
  {
    id: 3,
    text: "Bolas.",
  },
  {
    id: 1,
    text: "Bafo de rola.",
  },
  {
    id: 2,
    text: "Minha bunda preta.",
  },
  {
    id: 3,
    text: "Bolas.",
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
const game = new Cards(whiteData, blackData)

const BlackCard = game.getRandomBlackCard()
const whiteCards = game.get10RandomWhiteCards()


function createCardInUserHand(cardITem) {
  const cardElement = document.createElement("div")
  const cardType = "pick" in cardITem ? "black" : "white"
  const cardClass = cardType === "black" ? "black-card" : "white-card"
  cardElement.classList.add(cardClass)
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

whiteCards.forEach((card) => {
  createCardInUserHand(card)
})

createCardOnCenter(BlackCard)


const userHand = document.getElementById("userHand")
const centerCard = document.getElementById("center-card")

userHand.addEventListener("click", (event) => {
  const card = event.target
  // verify if the black card has reached the limit of picks and if the card is a white card
  if (centerCard.childElementCount <= BlackCard.pick && card.classList.contains("white-card")) {
    centerCard.appendChild(card)
  }
})

centerCard.addEventListener("click", (event) => {
  const card = event.target
  if (card.classList.contains("white-card")) {
    userHand.appendChild(card)
  }
})