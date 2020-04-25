const draw = {
  // Set image in background back cards
  setImageInBackCards: () => {
    const shuffledBackCardImagesURL = utils.shuffle(CONSTANTS.backCardImagesUrl);

    console.log(backCards);

    backCards.forEach((backCard) => {
      backCard.style.backgroundImage = `url("./assets/images/cards/back/${shuffledBackCardImagesURL[0]}")`;
    });
  },

  // Set image in background front cards
  setImageInFrontCards: () => {
    const shuffledFrontCardImagesURL = utils
      .shuffle(CONSTANTS.emojiImagesURL)
      .slice(0, CONSTANTS.cardsLimit);
    shuffledFrontCardImagesURL.push(...shuffledFrontCardImagesURL);
    const cards = utils.shuffle(shuffledFrontCardImagesURL);

    frontCards.forEach((frontCard, index) => {
      frontCard.style.backgroundImage = `url("./assets/images/cards/front/emojis/${cards[index]}")`;
      frontCard.style.backgroundPosition = "50% 50%";
      frontCard.style.backgroundSize = "cover";
    });
  },
};
