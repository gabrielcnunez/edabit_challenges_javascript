const assert = require('chai').assert
const textToNumberBinary = require('../challenges/convert-zeroes-and-ones')

describe("Convert 'Zero' and 'One' to '1' and '0'", function() {

  it('takes string and converts zeroes and ones to 0s and 1s', function() {
    assert.equal(textToNumberBinary('one one one one zero zero zero zero'), "11110000")
    assert.equal(textToNumberBinary('one Zero zero one zero zero one one one one one zero oNe one one zero one zerO'), "1001001111101110")
    assert.equal(textToNumberBinary('one zero one'), "")
    assert.equal(textToNumberBinary('one zero zero one zero ten one one one one two'), "10010111")
    assert.equal(textToNumberBinary('One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero'), "1001011101100001011101100001011101100001011101100001011101100001")
    assert.equal(textToNumberBinary('TWO one zero one one zero one zero'), "")
    assert.equal(textToNumberBinary('TWO one zero one one zero one zero one'), "10110101")
  })
})