const assert = require('chai').assert
const lcm = require('../challenges/least-common-multiplier')

describe('GCD and LCM', function() {

  it('takes two numbers, returns least common multiplier', function() {
    // assert.equal(lcm(6, 10), 30)
    // assert.equal(lcm(30, 60), 60)
    assert.equal(lcm(10000, 333), 3330000)
    // assert.equal(lcm(75, 135), 675)
    // assert.equal(lcm(102, 2), 102)
  })
})