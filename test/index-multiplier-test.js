var assert = require('chai').assert
var indexMultiplier = require('../challenges/index-multiplier')

describe('Index Multiplier', function() {

  it('returns sum of all items in array, each item is multiplied by index', function() {
    assert.equal(indexMultiplier([9, 3, 7, -7]), -4);
    assert.equal(indexMultiplier([3, 8, 6, -4]), 8);
    assert.equal(indexMultiplier([10, -9, -2, 0, 2]), -5);
    assert.equal(indexMultiplier([4, 4, 2, 2, -4]), -2);
    assert.equal(indexMultiplier([9, 4, 7, 5, -1, -3]), 14);
    assert.equal(indexMultiplier([-9, 5, 9, 5, -7, 7]), 45);
    assert.equal(indexMultiplier([-1, -2, 8, -5]), -1);
    assert.equal(indexMultiplier([7, 10, -5, -4, 6, 2]), 22);
    assert.equal(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16);
    assert.equal(indexMultiplier([-2, 5, -7, -23, 0, 14]), -8);
    assert.equal(indexMultiplier([53, -43, 39, -2, -11, 3]), 0);
    assert.equal(indexMultiplier([40, 32, -18, 48, -15]), 80);
    assert.equal(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170);
    assert.equal(indexMultiplier([-21, 30, 20, 6, -16]), 24);
    assert.equal(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183);
    assert.equal(indexMultiplier([]), 0);
  });
});