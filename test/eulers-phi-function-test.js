const assert = require('chai').assert
const phi = require('../challenges/eulers-phi-function')

describe('Eulers Phi Function', function() {

  it('returns count of coprime integers of given positive integer', function() {
    assert.equal(phi(1), 1)
    assert.equal(phi(3), 2)
    assert.equal(phi(9), 6)
    assert.equal(phi(19), 18)
    assert.equal(phi(33), 20)
    assert.equal(phi(51), 32)
    assert.equal(phi(54), 18)
    assert.equal(phi(86), 42)
    assert.equal(phi(144), 48)
    assert.equal(phi(209), 180)
    assert.equal(phi(666), 216)
    assert.equal(phi(1000), 400)
  })
})