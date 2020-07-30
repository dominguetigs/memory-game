import Draw from './game/draw';
import Game from './game/game';

const container = document.querySelector('.container');
const gameContainer = document.getElementById("game-container");
const modalContainer = document.querySelector('.modal-container');
const gameStartButton = document.querySelector('.modal button');
const enemyScore = document.querySelector('.score.enemy');
const playerScore = document.querySelector('.score.player');

modalContainer.style.display = 'block';

gameStartButton.addEventListener('click', e => {
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    modalContainer.style.display = 'none';
    container.style.display = 'block';
    enemyScore.classList.remove('turn');
    playerScore.classList.remove('turn');

    (new Draw(gameContainer, 'easy')).init();

    setTimeout(() => (new Game(difficulty)).init(), 3300);
});
