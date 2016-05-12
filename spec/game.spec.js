// import Game from '../src/Game'; // not working
let Game = require('../src/Game');

describe("Bowling Game Kata", () => {

  let game;
  beforeEach(() => {
    game = new Game();
  });

  const rollMany = (rolls, scoredPins) => {
    for (i = 0; i < rolls; i++) { 
      game.roll(scoredPins);
    }
  };

  it("final score is 0 when all rolls are missed", () => {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0);
  });

  it("final score is 20 when all rolls hit one pin", () => {
    rollMany(20, 1);
    expect(game.getScore()).toBe(20);
  }); 

  // it("final score is 16 whe a spare is rolled", () => {
  //   game.roll(5);
  //   game.roll(5); // spare
  //   game.roll(3);
  //   rollMany(17, 0);
  //   expect(game.getScore()).toBe(16);
  // }); 


});
