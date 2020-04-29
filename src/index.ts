import { setup } from './game/setup'
import { draw } from './game/draw';
import { game } from './game/game';

export const gameContainer: any = document.getElementById("game-container");

// Event listener to identify clicked front card
gameContainer.addEventListener("click", (e: Event) => {
  // Init game
  game.init(e.target);
});

setup.addCardsToUI("easy");

draw.setImageInBackCards();
draw.setImageInFrontCards();
