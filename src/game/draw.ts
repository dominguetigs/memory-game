import { CONSTANTS } from './contants';
import { utils } from './utils';

const backCards: any = document.querySelectorAll(".back");
const frontCards: any = document.querySelectorAll(".front");

export const draw = {
  // Set image in background back cards
  setImageInBackCards: () => {
    const shuffledBackCardImagesURL = utils.shuffle(CONSTANTS.backCardImagesUrl);

    backCards.forEach((backCard: any) => {
      backCard.style.backgroundImage = `url("./assets/images/cards/back/${shuffledBackCardImagesURL[0]}")`;
    });
  },

  // Set image in background front cards
  setImageInFrontCards: () => {
    const shuffledFrontCardImagesURL = utils
      .shuffle(CONSTANTS.emojiImagesURL)
      .slice(0, CONSTANTS.cardsCount / 2);
    shuffledFrontCardImagesURL.push(...shuffledFrontCardImagesURL);
    const cards = utils.shuffle(shuffledFrontCardImagesURL);

    frontCards.forEach((frontCard: any, index: number) => {
      frontCard.style.backgroundImage = `url("./assets/images/cards/front/emojis/${cards[index]}")`;
      frontCard.style.backgroundPosition = "50% 50%";
      frontCard.style.backgroundSize = "cover";
    });
  },
};
