var assert = require('chai').assert;
var isFirstSuperior = require('../challenges/slightly-superior');

describe('isFirstSuperior', function() {

  it('should return whether first array is superior to second', function() {
    assert.equal(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true);
    assert.equal(isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']), false);
    assert.equal(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false);
    assert.equal(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'ant']), true);
    assert.equal(isFirstSuperior([true, true, false, true], [true, true, true, true]), false);
    assert.equal(isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]), true);
    assert.equal(isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']), false);
    assert.equal(isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']), true);
    assert.equal(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]), false);
  });
});