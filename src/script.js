const gameContainer = document.getElementById("game-container");

// Event listener to identify clicked front card
gameContainer.addEventListener("click", (e) => {
  // Init game
  game.init(e.target);
});

setup.addCardsToUI("hard");

const backCards = document.querySelectorAll(".back");
const frontCards = document.querySelectorAll(".front");

draw.setImageInBackCards();
draw.setImageInFrontCards();
