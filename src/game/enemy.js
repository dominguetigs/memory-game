import { utils } from './utils';

export default class Enemy {

    constructor(cards, difficulty) {
        this.difficulty = difficulty;
        this.pointsElement = document.querySelector('.score.enemy small span');
        this.points = 0;

        /**
         * PC Memory to store flipped cards
         * 
         * {
         *    index: 0,
         *    imageUrl: '',
         *    hasPair: false,
         * }
         */
        this.memory = {
            cards: [],
            pairs: [],
            flipped: [],
        };
        this.cards = cards;
        this._updatePointsUI();
    }

    play() {

        let index1 = 0
        let index2 = 0;

        if (this.difficulty === 'medium' && this.memory.pairs.length) {
            const cardsPair = this.memory.cards.filter(m => m.imageUrl === this.memory.pairs[0]);
            index1 = cardsPair[0].index;
            index2 = cardsPair[1].index;

            // Clear cards in memory
            this.memory.cards.splice(this.memory.cards.indexOf(cardsPair[0]), 1);
            this.memory.cards.splice(this.memory.cards.indexOf(cardsPair[1]), 1);
            this.memory.pairs.splice(0, 1);

            this._flipCards(index1, index2);

            return;
        }

        const notFlippedCards = [...Array(this.cards.length).keys()];

        if (this.memory.flipped.length) {
            for (const index of this.memory.flipped) {
                notFlippedCards.splice(notFlippedCards.indexOf(index), 1);
            }
        }

        if (notFlippedCards.length) {
            while(index1 === index2) {
                index1 = notFlippedCards[utils.getRandomNumber(notFlippedCards.length)];
                index2 = notFlippedCards[utils.getRandomNumber(notFlippedCards.length)];
            }
    
            this._flipCards(index1, index2);
        }
    }

    addCardsToMemory(...cards) {
        if (cards[0].children[0].style.backgroundImage === cards[1].children[0].style.backgroundImage) {
            this.memory.flipped.push(
                [...this.cards].indexOf(cards[0]),
                [...this.cards].indexOf(cards[1]),
            );
            return;
        }

        for (const card of cards) {
            this._addCardToMemory(card);
        }
    }

    updatePoints(points) {
        this.points += points;
        this._updatePointsUI();
    }

    _addCardToMemory(card) {
        const index = [...this.cards].indexOf(card);
        const imageUrl = card.children[0].style.backgroundImage;

        if (this._checkHasCardIndexInMemory(index)) {
            return;
        }

        const hasPairInMemory = this._getCardsPair(imageUrl);
        const cardInMemory = {
            index,
            imageUrl,
        };

        if (hasPairInMemory) {
            this.memory.pairs.push(imageUrl);
        }

        this.memory.cards.push(cardInMemory);
    }

    _checkHasCardIndexInMemory(cardIndex) {
        return this.memory.cards.filter(m => m.index === cardIndex).length;
    }

    _getCardsPair(imageUrl) {
        return this.memory.cards.filter(m => m.imageUrl === imageUrl).length;
    }

    _flipCards(indexCard1, indexCard2) {
        setTimeout(() => {
            this.cards[indexCard1].children[0].click();
            setTimeout(() => this.cards[indexCard2].children[0].click(), 1000);
        }, 1700);
    }

    _updatePointsUI() {
        this.pointsElement.innerText = this.points;
    }
}
