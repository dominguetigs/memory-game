export default class Player {

    constructor() {
        this.pointsElement = document.querySelector('.score.player small span');
        this.points = 0;
        this._updatePointsUI();
    }

    updatePoints(points) {
        this.points += points;
        this._updatePointsUI();
    }

    _updatePointsUI() {
        this.pointsElement.innerText = this.points;
    }
}
