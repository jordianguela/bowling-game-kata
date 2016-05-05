var Game = require('../src/Game');

describe("Bowling Game Kata", function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  var rollMany = function (scoredPins) {
    for (i = 0; i < 20; i++) { 
      game.roll(scoredPins);
    }
  };

  it("final score is 0 when all rolls are missed", function() {
    rollMany(0);
    expect(0).toBe(game.score());
  });

  it("final score is 20 when all rolls hit one pin", function() {
    rollMany(1);
    expect(20).toBe(game.score());
  }); 



});