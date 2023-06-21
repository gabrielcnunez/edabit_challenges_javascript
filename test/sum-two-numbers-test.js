var assert = require('chai').assert;
var sumTwoNumbers = require('../challenges/sum-two-numbers');

describe('sumTwoNumbers', function() {

  it('should return the sum of two given numbers', function() {
    assert.equal(sumTwoNumbers(2, 3), 5);
    assert.equal(sumTwoNumbers(-3, -6), -9);
    assert.equal(sumTwoNumbers(7, 3), 10);
    assert.equal(sumTwoNumbers(88, 2), 90);
  });
});