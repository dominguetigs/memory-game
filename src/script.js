const container = document.getElementById("container");

// Event listener to identify clicked front card
container.addEventListener("click", (e) => {
  // Init game
  game.init(e.target);
});

setup.addCardsToUI("easy");

const backCards = document.querySelectorAll(".back");
const frontCards = document.querySelectorAll(".front");

draw.setImageInBackCards();
draw.setImageInFrontCards();
