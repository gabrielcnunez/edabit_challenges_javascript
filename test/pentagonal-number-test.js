const assert = require('chai').assert
const pentagonal = require('../challenges/pentagonal-number')

describe('Pentagonal Number', function() {

  it('return number of dots in whole pentagon on the nth iteration', function() {
    assert.equal(pentagonal(1), 1)
    assert.equal(pentagonal(3), 16)
    assert.equal(pentagonal(8), 141)
    assert.equal(pentagonal(10), 226)
    assert.equal(pentagonal(15), 526)
    assert.equal(pentagonal(33), 2641)
    assert.equal(pentagonal(43), 4516)
    assert.equal(pentagonal(13), 391)
    assert.equal(pentagonal(50), 6126)
    assert.equal(pentagonal(62), 9456)
    assert.equal(pentagonal(21), 1051)
  })
})