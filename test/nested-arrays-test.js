var assert = require('chai').assert
var canNest = require('../challenges/nested-arrays')

describe('Check if one array can be nested in another', function() {

  it('returns boolean whether first array can nest into second array based in min and max values', function() {
    assert.equal(canNest([1, 2, 3, 4], [0, 6]), true);
    assert.equal(canNest([3, 1], [4, 0]), true);
    assert.equal(canNest([9, 9, 8], [8, 9, 10]), false);
    assert.equal(canNest([9, 9, 8], [8, 9]), false);
    assert.equal(canNest([1, 2, 3, 4], [2, 3]), false);
  });
});