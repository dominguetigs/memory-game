import { utils } from './utils';

export default class Enemy {

    constructor(cards, difficulty) {
        this.difficulty = difficulty;
        this.pointsElement = document.querySelector('.score.enemy small span');
        this.points = 0;

        /**
         * PC Memory
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

        let index1;
        let index2;

        if ((this.difficulty === 'hard' || this.difficulty === 'medium') && this.memory.pairs.length) {
            const cardsPair = this.memory.cards.filter(m => m.imageUrl === this.memory.pairs[0]);
            index1 = cardsPair[0].index;
            index2 = cardsPair[1].index;

            this._flipCards(index1, index2);

            return;
        }

        const notFlippedCards = [...Array(this.cards.length).keys()];

        if (this.memory.flipped.length) {
            for (const index of this.memory.flipped) {
                notFlippedCards.splice(notFlippedCards.indexOf(index), 1);
            }
        }

        if (this.difficulty === 'hard') {
            const indexes = this.memory.cards.map(m => m.index);

            for (const index of indexes) {
                notFlippedCards.splice(notFlippedCards.indexOf(index), 1);
            }
        }

        if (notFlippedCards.length) {
            while (index1 === index2) {
                index1 = notFlippedCards[utils.getRandomNumber(notFlippedCards.length)];

                if (this.difficulty === 'hard') {
                    const imageUrl = [...this.cards][index1].children[0].style.backgroundImage;
                    const card = this.memory.cards.filter(m => m.imageUrl === imageUrl);
                    index2 = card.length ? card[0].index : null;
                }

                index2 = index2 || notFlippedCards[utils.getRandomNumber(notFlippedCards.length)];
            }

            this._flipCards(index1, index2);
        }
    }

    addCardsToMemory(...cards) {
        const imageUrl1 = cards[0].children[0].style.backgroundImage;
        const imageUrl2 = cards[1].children[0].style.backgroundImage;

        if (imageUrl1 === imageUrl2) {
            this.memory.flipped.push(
                [...this.cards].indexOf(cards[0]),
                [...this.cards].indexOf(cards[1]),
            );

            const memoryCards = this.memory.cards.filter(m => m.imageUrl === imageUrl1);
            
            for (const card of memoryCards) {
                this.memory.cards.splice(this.memory.cards.indexOf(card), 1);
            }

            const memoryPairs = this.memory.pairs.filter(m => m === imageUrl1);
            
            if (memoryPairs.length) {
                this.memory.pairs.splice(this.memory.pairs.indexOf(memoryPairs[0]), 1);
            }

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
