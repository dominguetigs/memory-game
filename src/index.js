import Draw from './game/draw';
import Game from './game/game';

const gameContainer = document.getElementById("game-container");

(new Draw(gameContainer, 'easy')).init();
(new Game(gameContainer)).init();
