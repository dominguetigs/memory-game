import Setup from './setup';
import { utils } from './utils';
import { backCardImagesUrl, emojiImagesURL } from './contants';

export default class Draw extends Setup {

  constructor(gameContainer, difficulty) {
    super(difficulty);
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

    const backCards = document.querySelectorAll('.back');
    const frontCards = document.querySelectorAll('.front');

    this._setImageInBackCards(backCards);
    this._setImageInFrontCards(frontCards);
  }

  // Set image in background back cards
  _setImageInBackCards(backCards) {
    const shuffledBackCardImagesURL = utils.shuffle(backCardImagesUrl);

    backCards.forEach((backCard) => {
      backCard.style.backgroundImage = `url("./assets/images/cards/back/${shuffledBackCardImagesURL[0]}")`;
    });
  }

  // Set image in background front cards
  _setImageInFrontCards(frontCards) {
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
}
