var assert = require('chai').assert
var isPositiveDominant = require('../challenges/positive-dominant')

describe('Positive Dominant', function() {

  it('returns true if array contain more unique positive values than negative', function() {
    assert.equal(isPositiveDominant([1, 1, 1, 1, -3, -4]), false);
    assert.equal(isPositiveDominant([5, 99, 832, -3, -4]), true);
    assert.equal(isPositiveDominant([5, 0]), true);
    assert.equal(isPositiveDominant([0, -4, -1]), false);
    assert.equal(isPositiveDominant([1, 2, 3, -1]), true);
    assert.equal(isPositiveDominant([1, 0, 0, -1]), false);
    assert.equal(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]), true);
    assert.equal(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]), false);
    assert.equal(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]), false);
  });
});