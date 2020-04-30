import { difficulties } from './contants';

export default class Setup {

  constructor(difficulty) {
    this.difficulty = difficulty;

    // Cards quantity in game depending on difficulty
    this.cardsQuantity = difficulties[difficulty];
  }
}
