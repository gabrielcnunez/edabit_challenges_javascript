var assert = require('chai').assert
var countOnes = require('../challenges/number-of-ones')

describe('Count Ones in Binary Representation of Integer', function() {

  it('counts amount of ones in binary representation of integer', function() {
    assert.equal(countOnes(12), 2);
    assert.equal(countOnes(0), 0);
    assert.equal(countOnes(100), 3);
    assert.equal(countOnes(101), 4);
    assert.equal(countOnes(999), 8);
    assert.equal(countOnes(1e9), 13);
    assert.equal(countOnes(123456789), 16);
    assert.equal(countOnes(1234567890), 12);
  });
});