var assert = require('chai').assert
var nextEdge = require('../challenges/max-edge-of-triangle')

describe('Maximum edge of a triangle', function() {

  it('should find the maximum range of third edge of triange', function() {
    assert.equal(nextEdge(5, 4), 8);
    assert.equal(nextEdge(8, 3), 10);
    assert.equal(nextEdge(7, 9), 15);
    assert.equal(nextEdge(10, 4), 13);
    assert.equal(nextEdge(7, 2), 8);
  });
});