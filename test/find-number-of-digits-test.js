var assert = require('chai').assert
var numOfDigits = require('../challenges/find-number-of-digits')

describe('Find Number of Digits in Number', function() {

  it('returns an integer with amount of digits in given integer', function() {
    assert.equal(numOfDigits(13124), 5);
    assert.equal(numOfDigits(0), 1);
    assert.equal(numOfDigits(-12381428), 8);
    assert.equal(numOfDigits(12), 2);
    assert.equal(numOfDigits(42), 2);
    assert.equal(numOfDigits(1000), 4);
    assert.equal(numOfDigits(136), 3);
    assert.equal(numOfDigits(1000000000), 10);
    assert.equal(numOfDigits(2147483647), 10);
    assert.equal(numOfDigits(-2147483647), 10);
  });
});