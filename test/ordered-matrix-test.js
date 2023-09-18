var assert = require('chai').assert;
var orderedMatrix = require('../challenges/ordered-matrix');

describe('An Ordered Matrix', function() {

  it('creates an ordered a by b matrix, where a and b are integers', function() {
    assert.deepEqual(orderedMatrix(1,2), [[1,2]]);
    assert.deepEqual(orderedMatrix(3,3), [[1,2,3],[4,5,6],[7,8,9]]);
    assert.deepEqual(orderedMatrix(5,5), [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]);
    assert.deepEqual(orderedMatrix(3,4), [[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
  });
});