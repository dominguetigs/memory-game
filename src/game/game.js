import Player from './player';
import Enemy from './enemy';
import { audios } from './contants';

const enemyScore = document.querySelector('.score.enemy');
const playerScore = document.querySelector('.score.player');

export default class Game {

  constructor(difficulty) {
    this.cards = document.querySelectorAll('.flip');
    this.player = new Player();
    this.enemy = new Enemy(this.cards, difficulty);
    // if turn is true Player plays, turn is false Enemy plays
    this.turn = !!Math.round(Math.random());
    this.sounds = {
      flippedCard: document.getElementById('flippedCardAudio'),
      points: document.getElementById('pointsAudio'),
      victory: document.getElementById('victoryAudio'),
    };
  }

  init() {
    playerScore.classList.remove('turn');
    enemyScore.classList.remove('turn');

    this.cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.isTrusted === this.turn) {
          this._play(e.target.parentElement);
        }
      });
    });

    if (!this.turn) {
      enemyScore.classList.toggle('turn');
      this.enemy.play();
    } else {
      playerScore.classList.toggle('turn');
    }
  }

  // Initialize memory game
  _play(clickedCard) {

    if (
      clickedCard.classList.contains("flip") &&
      !clickedCard.parentElement.classList.contains("success")
    ) {
      const flippedCard = document.querySelectorAll(
        ".flip-container:not(.success) .flipped"
      );

      if (flippedCard[0] === clickedCard) {
        return;
      }

      this.sounds.flippedCard.play();
      this.sounds.flippedCard.volume = 0.5;
      this.sounds.flippedCard.currentTime = 0;

      if (flippedCard.length < 2) {
        clickedCard.classList.toggle("flipped");

        if (flippedCard[0] && flippedCard[0] !== clickedCard) {
          this._checkEqualCards(flippedCard[0], clickedCard);
        }
      }

      this._checkEndGame();
    }
  }

  _checkEndGame() {
    const flippedCards = document.querySelectorAll('.flip-container .flipped');

    if (flippedCards.length === this.cards.length) {
      setTimeout(() => {
        playerScore.classList.add('turn');
        enemyScore.classList.add('turn');

        const modalContainer = document.querySelector('.modal-container');
        modalContainer.style.display = 'block';

        const text = this.player.points === this.enemy.points ? 'TIE!' :
          (this.player.points > this.enemy.points ? 'VICTORY!' : 'DEFEAT!');

        this.sounds.victory.play();

        modalContainer.children[0].children[0].children[0].innerText = text;
        modalContainer.children[0].children[2].children[0].innerText = 'PLAY AGAIN';
      }, 1500);
    }
  }

  // Check if flipped cards are equals
  _checkEqualCards(card1, card2) {
    this.enemy.addCardsToMemory(card1, card2);

    if (
      card1.children[0].style.backgroundImage ===
      card2.children[0].style.backgroundImage
    ) {
      this._setSuccessToEqualFlippedCards(card1.parentElement, card2.parentElement);
      setTimeout(() => {
        if (this.turn) {
          this.sounds.points.play();
          this.sounds.points.volume = 0.2;
        }
        this._setPoints();
      }, 1000);
      this._setTurn();
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
      }, 1000);
      this._setTurn(true);
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
    if (this.turn) {
      this.player.updatePoints(7);
    } else {
      this.enemy.updatePoints(7);
    }
  }

  // Set turn
  _setTurn(changedTurn) {
    if (changedTurn) {
      setTimeout(() => {
        playerScore.classList.toggle('turn');
        enemyScore.classList.toggle('turn');
      }, 1000);
      this.turn = !this.turn
    }

    if (!this.turn) {
      this.enemy.play();
    }
  }
}
