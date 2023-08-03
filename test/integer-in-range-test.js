var assert = require('chai').assert
var intWithinBounds = require('../challenges/integer-in-range')

describe('Integer in Range', function() {

  it('validates whether number is within bounds of lower and upper range', function() {
    assert.equal(intWithinBounds(3, 1, 9), true);
    assert.equal(intWithinBounds(6, 1, 6), false);
    assert.equal(intWithinBounds(4.5, 3, 8), false);
    assert.equal(intWithinBounds(-5, -10, 6), true);
    assert.equal(intWithinBounds(4, 0, 0), false);
    assert.equal(intWithinBounds(10, 9, 11), true);
    assert.equal(intWithinBounds(6.3, 2, 6), false);
    assert.equal(intWithinBounds(6.3, 2, 10), false);
    assert.equal(intWithinBounds(9, 2, 3), false);
    assert.equal(intWithinBounds(9, 9, 9), false);
    assert.equal(intWithinBounds(-3, -5, -2), true);
    assert.equal(intWithinBounds(-3, -5, -3), false);
    assert.equal(intWithinBounds(-3, -10, 10), true);
    assert.equal(intWithinBounds(0, -3, 3), true);
    assert.equal(intWithinBounds(0, 0, 1), true);
    assert.equal(intWithinBounds(7, 7, 12), true);
  })
})