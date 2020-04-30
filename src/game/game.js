const pointsElement = document.querySelector('.score-container small span');

export default class Game {

  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.points = 0;
  }

  init() {
    // Event listener to identify clicked front card
    this.gameContainer.addEventListener("click", (e) => {
      // Init game
      this._play(e.target);
    });
  }

  // Initialize memory game
  _play(clickedCard) {
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
          this._checkEqualCards(flippedCard[0], parentElement);
        }
      }
    }
  }

  // Check if flipped cards are equals
  _checkEqualCards(card1, card2) {
    if (
      card1.children[0].style.backgroundImage ===
      card2.children[0].style.backgroundImage
    ) {
      this._setSuccessToEqualFlippedCards(card1.parentElement, card2.parentElement);
      setTimeout(() => this._setPoints(), 1000);
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
      }, 1000);
    }
  }

  // Set success class to equal flipped cards
  _setSuccessToEqualFlippedCards(card1, card2) {
    setTimeout(() => {
      card1.classList.add("success");
      card2.classList.add("success");
    }, 500);
  }

  // Set points
  _setPoints() {
    this.points += 7;
    pointsElement.innerText = this.points;
  }
}
