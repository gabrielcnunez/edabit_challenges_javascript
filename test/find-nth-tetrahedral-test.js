var assert = require('chai').assert
var tetra = require('../challenges/find-nth-tetrahedral')

describe('Find the nth Tetrahedral Number', function() {

  it('should take an integer and return the tetrahedral number', function() {
    assert.equal(tetra(1), 1);
    assert.equal(tetra(2), 4);
    assert.equal(tetra(3), 10);
    assert.equal(tetra(4), 20);
    assert.equal(tetra(5), 35);
    assert.equal(tetra(9), 165);
  });
});