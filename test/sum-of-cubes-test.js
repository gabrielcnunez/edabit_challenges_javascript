var assert = require('chai').assert
var sumOfCubes = require('../challenges/sum-of-cubes')

describe('Sum of Cubes', function() {

  it('takes in an array of numbers and returns the sum of its cubes', function() {
    assert.equal(sumOfCubes([1, 5, 9]), 855);
    assert.equal(sumOfCubes([3, 4, 5]), 216);
    assert.equal(sumOfCubes([1, 1, 1]), 3);
    assert.equal(sumOfCubes([2]), 8);
    assert.equal(sumOfCubes([5, 1, 2]), 134);
    assert.equal(sumOfCubes([32]), 32768);
    assert.equal(sumOfCubes([5, 9, 4, 4, 9]), 1711);
    assert.equal(sumOfCubes([0, 1, 2]), 9);
    assert.equal(sumOfCubes([]), 0);
  });
});