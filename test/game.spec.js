var Game = require('../src/Game');

describe("Bowling Game Kata", function() {

  it("final score is 0 when all rolls are missed", function() {
    var game = new Game();
    for (i = 0; i < 20; i++) { 
      game.roll(0);
    }
    expect(0).toBe(game.score());
  });

  it("final score is 20 when all rolls hit one pin", function() {
    var game = new Game();
    for (i = 0; i < 20; i++) { 
      game.roll(1);
    }
    expect(20).toBe(game.score());
  });  

});