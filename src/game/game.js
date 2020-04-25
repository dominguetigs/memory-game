const game = {
  // Set success class to equal flipped cards
  setSuccessToEqualFlippedCards: (card1, card2) => {
    setTimeout(() => {
      card1.classList.add("success");
      card2.classList.add("success");
    }, 500);
  },

  // Check if flipped cards are equals
  checkEqualCards: (card1, card2) => {
    if (
      card1.children[0].style.backgroundImage ===
      card2.children[0].style.backgroundImage
    ) {
      game.setSuccessToEqualFlippedCards(card1.parentElement, card2.parentElement);
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
      }, 1000);
    }
  },

  // Initialize memory game
  init: (clickedCard) => {
    const parentElement = clickedCard.parentElement;

    if (
      parentElement.classList.contains("flip") &&
      !parentElement.parentElement.classList.contains("success")
    ) {
      const flippedCard = document.querySelectorAll(
        ".flip-container:not(.success) .flipped"
      );

      if (flippedCard.length < 2) {
        parentElement.classList.toggle("flipped");

        if (flippedCard[0] && flippedCard[0] !== parentElement) {
          game.checkEqualCards(flippedCard[0], parentElement);
        }
      }
    }
  },
};
