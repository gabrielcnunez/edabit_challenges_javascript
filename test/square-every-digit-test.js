var assert = require('chai').assert
var squareDigits = require('../challenges/square-every-digit')

describe('Square Every Digit', function() {

  it('squares every digit of a number', function() {
    assert.equal(squareDigits(9119), 811181);
    assert.equal(squareDigits(8726), 6449436);
    assert.equal(squareDigits(9763), 8149369);
    assert.equal(squareDigits(2230), 4490);
    assert.equal(squareDigits(2797), 4498149);
    assert.equal(squareDigits(233), 499);
    assert.equal(squareDigits(7437), 4916949);
    assert.equal(squareDigits(2483), 416649);
    assert.equal(squareDigits(5742), 2549164);
    assert.equal(squareDigits(5636), 2536936);
    assert.equal(squareDigits(841), 64161);
  });
});