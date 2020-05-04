import { difficulties } from './contants';
import { utils } from './utils';
import { backCardImagesUrl, emojiImagesURL } from './contants';

export default class Draw {

  constructor(gameContainer, difficulty) {
    this.cardsQuantity = difficulties[difficulty];
    this.gameContainer = gameContainer;
  }

  // Init draw construction
  init() {
    const rowsCount = 5;
    const columnsCount = this.cardsQuantity / rowsCount;

    // Reset UI
    this.gameContainer.innerHTML = "";

    for (let i = 0; i < rowsCount; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");

      for (let j = 0; j < columnsCount; j++) {
        const flipContainerElement = document.createElement("div");
        flipContainerElement.classList.add("flip-container");
        flipContainerElement.style.transform = 'scale(0)';

        const flipElement = document.createElement("div");
        flipElement.classList.add("flip");

        const frontCardElement = document.createElement("div");
        frontCardElement.classList.add("front");

        const backCardElement = document.createElement("div");
        backCardElement.classList.add("back");

        flipElement.append(...[frontCardElement, backCardElement]);
        flipContainerElement.appendChild(flipElement);
        rowElement.appendChild(flipContainerElement);
      }
      this.gameContainer.appendChild(rowElement);
    }

    this._setImageInBackCards();
    this._setImageInFrontCards();
    this._setCards();
  }

  // Set image in background back cards
  _setImageInBackCards() {
    const backCards = document.querySelectorAll('.back');
    const shuffledBackCardImagesURL = utils.shuffle(backCardImagesUrl);

    backCards.forEach((backCard) => {
      backCard.style.backgroundImage = `url("./assets/images/cards/back/${shuffledBackCardImagesURL[0]}")`;
    });
  }

  // Set image in background front cards
  _setImageInFrontCards() {
    const frontCards = document.querySelectorAll('.front');
    const shuffledFrontCardImagesURL = utils
      .shuffle(emojiImagesURL)
      .slice(0, this.cardsQuantity / 2);
    shuffledFrontCardImagesURL.push(...shuffledFrontCardImagesURL);
    const cards = utils.shuffle(shuffledFrontCardImagesURL);

    frontCards.forEach((frontCard, index) => {
      frontCard.style.backgroundImage = `url("./assets/images/cards/front/emojis/${cards[index]}")`;
      frontCard.style.backgroundPosition = "50% 50%";
      frontCard.style.backgroundSize = "cover";
    });
  }

  _setCards() {
    const flipContainerElement = [...document.querySelectorAll('.flip-container')];
    
    for (let i = 0; i < flipContainerElement.length; i++) {

      setTimeout(() => {
        
        flipContainerElement[i].style.transition = 'all 0.7s ease-in-out';
        flipContainerElement[i].style.transform = 'scale(1)';
      }, 200 * i);
    }
  }
}
