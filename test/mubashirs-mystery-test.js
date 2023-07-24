var assert = require('chai').assert
var mubashirFunction = require('../challenges/mubashirs-mystery')

describe('Mubashirs Mystery Challenge', function() {

  it('should take two numbers and return SPOOKY multiplication', function() {
    assert.equal(mubashirFunction(0,1), 0)
    assert.equal(mubashirFunction(1,2), 2)
    assert.equal(mubashirFunction(5,6), 30)
    assert.equal(mubashirFunction(10,10), 1)
    assert.equal(mubashirFunction(200,200), 4)
  });
});