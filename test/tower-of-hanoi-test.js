var assert = require('chai').assert;
var towerHanoi = require('../challenges/tower-of-hanoi')

describe('Tower of Hanoi', function() {

  it('takes in number of disks, returns minimum steps to win Tower of Hanoi game', function() {
    assert.equal(towerHanoi(3), 7);
    assert.equal(towerHanoi(5), 31);
    assert.equal(towerHanoi(8), 255);
    assert.equal(towerHanoi(19), 524287);
    assert.equal(towerHanoi(9), 511);
    assert.equal(towerHanoi(13), 8191);
    assert.equal(towerHanoi(0), 0);
  });
});