var assert = require('chai').assert
var binary = require('../challenges/number-to-base2')

describe('Convert number to base2', function() {

  it('should convert a number to binary in string form', function() {
    assert.equal(binary(100), "1100100");
    assert.equal(binary(1), "1");
    assert.equal(binary(0), "0");
    assert.equal(binary(69), "1000101");
    assert.equal(binary(1023), "1111111111");
    assert.equal(binary(511), "111111111");
    assert.equal(binary(666), "1010011010");
    assert.equal(binary(123), "1111011");
  })
})