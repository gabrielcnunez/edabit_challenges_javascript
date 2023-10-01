const assert = require('chai').assert
const getCatalanNumber = require('../challenges/catalan-number')

describe('Catalan Number', function() {

  it('returns the nth catalan number', function() {
    assert.equal(getCatalanNumber(0), 1)
    assert.equal(getCatalanNumber(3), 5)
    assert.equal(getCatalanNumber(7), 429)
    assert.equal(getCatalanNumber(8), 1430)
    assert.equal(getCatalanNumber(9), 4862)
    assert.equal(getCatalanNumber(1), 1)
    assert.equal(getCatalanNumber(4), 14)
    assert.equal(getCatalanNumber(11), 58786)
    assert.equal(getCatalanNumber(17), 129644790)
  })
})