class Game {
  constructor() {
    this.score = 0;
  }

  roll(pins) {
    this.score += pins;
  }

  getScore() {
    return this.score;
  }
}

// export default Game;
module.exports = Game;
