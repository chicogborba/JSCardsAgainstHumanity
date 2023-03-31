class Cards {
  #blackCards = [];
  #whiteCards = [];
  constructor (whiteCards, blackCards) {
    this.whiteCards = whiteCards;
    this.blackCards = blackCards;
  }
  
  get whiteCards () {
    return this.#whiteCards;
  }

  set whiteCards (whiteCards) {
    this.#whiteCards = whiteCards;
  }

  get blackCards () {
    return this.#blackCards;
  }

  set blackCards (blackCards) {
    this.#blackCards = blackCards;
  }

  getRandomBlackCard () {
    const randomIndex = Math.floor(Math.random() * this.blackCards.length);
    return this.blackCards[randomIndex];
  }

  get10RandomWhiteCards () {
    const randomWhiteCards = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * this.whiteCards.length);
      randomWhiteCards.push(this.whiteCards[randomIndex]);
    }
    return randomWhiteCards;
  }
}