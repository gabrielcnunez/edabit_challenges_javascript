var assert = require('chai').assert
var isSpecialArray = require('../challenges/special-arrays')

describe('Special Arrays', function() {

  it('takes numbers array, determines if even indices have even numbers and odd indices have odd numbers', function () {
    assert.equal(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false);
    assert.equal(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true);
    assert.equal(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false);
    assert.equal(isSpecialArray([1, 1, 1, 2]), false);
    assert.equal(isSpecialArray([2, 2, 2, 2]), false);
    assert.equal(isSpecialArray([2, 1, 2, 1]), true);
    assert.equal(isSpecialArray([4, 5, 6, 7]), true);
    assert.equal(isSpecialArray([4, 5, 6, 7, 0, 5]), true);
  });
});