var assert = require('chai').assert
var largestSwap = require('../challenges/largest-swap')

describe('Largest Swap', function() {

  it('should take a two-digit number and determine if it is the largest of two possible digit swaps', function() {
    assert.equal(largestSwap(27), false)
    assert.equal(largestSwap(43), true)
    assert.equal(largestSwap(14), false)
    assert.equal(largestSwap(53), true)
    assert.equal(largestSwap(99), true)
  });
});