import Draw from './game/draw';
import Game from './game/game';

const container = document.querySelector('.container');
const gameContainer = document.getElementById("game-container");
const modalContainer = document.querySelector('.modal-container');
const gameStartButton = document.querySelector('.modal button');

modalContainer.style.display = 'block';

gameStartButton.addEventListener('click', e => {
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    modalContainer.style.display = 'none';
    container.style.display = 'block';

    (new Draw(gameContainer, 'easy')).init();

    setTimeout(() => (new Game(difficulty)).init(), 4000);
});
