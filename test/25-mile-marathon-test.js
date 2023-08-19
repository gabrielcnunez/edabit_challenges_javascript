var assert = require('chai').assert
var marathonDistance = require('../challenges/25-mile-marathon')

describe('25-Mile Marathon', function() {

  it('return boolean whether array of numbers equals 25', function() {
    assert.equal(marathonDistance([1, 2, 3, 4]), false);
    assert.equal(marathonDistance([-6, 15, 4]), true);
    assert.equal(marathonDistance([1, 9, 5, 8, 2]), true);
    assert.equal(marathonDistance([9, 7, 6, 5]), false);
    assert.equal(marathonDistance([4, 6, 8, 9, -4]), false);
    assert.equal(marathonDistance([-20, 9, -10, -11]), false);
    assert.equal(marathonDistance([-9, 15, 1]), true);
    assert.equal(marathonDistance([]), false);
  });
});