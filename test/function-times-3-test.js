const assert = require('chai').assert
const product = require('../challenges/function-times-3')

describe('Function Times 3', function() {

  it('takes three collections of arguments, returns sum of product of numbers', function() {
    assert.equal(product(1,2)(1,1)(2,3), 8)
    assert.equal(product(10,2)(5,0)(2,3), 100)
    assert.equal(product(1,2)(2,3)(3,4), 30)
    assert.equal(product(1,2)(0,3)(3,0), 0)
  })
})