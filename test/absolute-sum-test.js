var assert = require('chai').assert
var getAbsSum = require('../challenges/absolute-sum')

describe('Absolute Sum', function() {

  it('takes an array of integers and returns the absolute sum', function() {
    assert.equal(getAbsSum([2, -1, -3, 4, 8]), 18);
    assert.equal(getAbsSum([-1]), 1);
    assert.equal(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);
    assert.equal(getAbsSum([8, 9, 10, 32, 101, -10]), 170);
    assert.equal(getAbsSum([500]), 500);
  });
});