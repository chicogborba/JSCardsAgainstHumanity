import express from "express"
import http from "http"
import Cards from "./public/Cards.js"
import cardData from './cardData.json' assert { type: 'json' };


const app = express()
const server = http.createServer(app)

app.use(express.static("public"))

const game = {
  players: [
    {
      id: 1,
      cards: [],
    },
    {
      id: 2,
      cards: [],
    },
  ],
  center_table: [],
}


// Cria uma cópia do array de cartas brancas e pretas e embaralha as cópias
const whiteCards = [...cardData.whiteCards]
const blackCards = [...cardData.blackCards]

shuffleArray(whiteCards)
shuffleArray(blackCards)

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Entrega 10 cartas para cada jogador
game.players.forEach((player) => {
  for (let i = 0; i < 10; i++) {
    player.cards.push(whiteCards.pop())
  }
})

// escolhe uma carta preta para o jogo e adiciona ao centro da mesa
game.center_table.push(blackCards.pop())


const cards = new Cards(cardData.whiteCards, cardData.blackCards)

console.log(whiteCards) 


server.listen(3000, () => {
  console.log("Server listening on port 3000")
})