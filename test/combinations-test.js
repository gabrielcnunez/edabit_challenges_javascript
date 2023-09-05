var assert = require('chai').assert
var combinations = require('../challenges/combinations')

describe('Combinations', function() {

  it('takes variable number arguments, returns combinations of choices', function() {
    assert.equal(combinations(2), 2);
    assert.equal(combinations(2, 3), 6);
    assert.equal(combinations(3, 5), 15);
    assert.equal(combinations(5, 6, 7), 210);
    assert.equal(combinations(5, 5, 5, 5), 625);
    assert.equal(combinations(3, 6, 9), 162);
    assert.equal(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10), 3628800);
    assert.equal(combinations(4, 5, 6), 120);
    assert.equal(combinations(5, 6, 7, 8), 1680);
    assert.equal(combinations(6, 7, 0), 42);
  });
});