import { Suit, Joker, Card } from "./Card";

export class Deck {
    constructor() {

        this.deck = [];
        return this.createDeck();
    }

    createDeck() {
        this.deck = Array.prototype.concat(
            new Suit('Hearts'),
            new Suit('Clubs'),
            new Suit('Diamonds'),
            new Suit('Spades'),
        );
        this.deck.push(new Joker());
        this.deck.push(new Joker());
    }

    shuffleDeck() {
        // shuffle
        return this.deck;
    }

}