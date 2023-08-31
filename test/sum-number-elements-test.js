var assert = require('chai').assert
var numbersSum = require('../challenges/sum-number-elements')

describe('Sum of Number Elements in an Array', function() {

  it('returns sum of number elements in array of mixed elements', function() {
    assert.equal(numbersSum([1, 2, "13", "4", "645"]), 3);
    assert.equal(numbersSum([true, false, "123", "75"]), 0);
    assert.equal(numbersSum([1, 2, 3, 4, 5, true]), 15);
    assert.equal(numbersSum(["abcd", 1234, false, true, 564, "hii"]), 1798);
    assert.equal(numbersSum(["abcd", "abc45", "assssd", true]), 0);
    assert.equal(numbersSum([]), 0);
    assert.equal(numbersSum(["cghyki", "cd", 12114, 786, true, "me", "bey"]), 12900);
  });
});