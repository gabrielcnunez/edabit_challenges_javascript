var assert = require('chai').assert
var possibleBonus = require('../challenges/tile-teamwork-tactics')

describe('Tile Teamwork Tactics', function() {

  it('takes two positions and returns a boolean whether a bonus can be earned', function() {
    assert.equal(possibleBonus(3, 7), true);
    assert.equal(possibleBonus(0, 6), true);
    assert.equal(possibleBonus(1, 6), true);
    assert.equal(possibleBonus(2, 6), true);
    assert.equal(possibleBonus(3, 6), true);
    assert.equal(possibleBonus(4, 6), true);
    assert.equal(possibleBonus(5, 6), true);
    assert.equal(possibleBonus(6, 6), false);
    assert.equal(possibleBonus(7, 6), false);
    assert.equal(possibleBonus(23, 27), true);
    assert.equal(possibleBonus(1, 9), false);
    assert.equal(possibleBonus(5, 3), false);
  });
});