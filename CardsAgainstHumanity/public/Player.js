class Player {
  #name = "";
  #id = 0;
  #hand = [];
  #isCzar = false;
    constructor(name, id, hand) {
        this.name = name;
        this.id = id;
        this.hand = hand;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get hand() {
        return this.#hand;
    }

    set hand(hand) {
        this.#hand = hand;
    }

    get isCzar() {
        return this.#isCzar;
    }

    set isCzar(isCzar) {
        this.#isCzar = isCzar;
    }

}