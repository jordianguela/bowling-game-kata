import Game from '../src/Game';

describe("Bowling Game Kata", () => {

  let game;
  beforeEach(() => {
    game = new Game();
  });

  const rollMany = scoredPins => {
    for (i = 0; i < 20; i++) { 
      game.roll(scoredPins);
    }
  };

  it("final score is 0 when all rolls are missed", () => {
    rollMany(0);
    expect(0).toBe(game.score());
  });

  it("final score is 20 when all rolls hit one pin", () => {
    rollMany(1);
    expect(20).toBe(game.score());
  }); 



});
