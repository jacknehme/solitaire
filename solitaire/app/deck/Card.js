export class Card {
    constructor(num, rank, suit) {
        this.number = num;
        this.rank = rank;
        this.suit = suit;
        this.face = false;
        this.fullName,
            this.deck
    }

    get fullName() {
        if (this.number) {
            return this.rank + ' of ' + this.suit;
        } else {
            return 'Joker';
        }
    }
}

export class Suit {
    constructor(suit) {
        return [
            new Card(1, 'Ace', suit),
            new Card(2, 'Two', suit),
            new Card(3, 'Three', suit),
            new Card(4, 'Four', suit),
            new Card(5, 'Five', suit),
            new Card(6, 'Six', suit),
            new Card(7, 'Seven', suit),
            new Card(8, 'Eight', suit),
            new Card(9, 'Nine', suit),
            new Card(10, 'Ten', suit),
            new Card(11, 'Jack', suit),
            new Card(12, 'Queen', suit),
            new Card(13, 'King', suit),
        ];
    }

}

export class Joker {
    constructor() {
        return new Card(0, 'Joker', 'joker');
    }
}