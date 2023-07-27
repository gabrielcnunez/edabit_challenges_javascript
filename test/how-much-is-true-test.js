var assert = require('chai').assert
var countTrue = require('../challenges/how-much-is-true')

describe('How Much is True?', function() {

  it('returns the number of true values in an array', function() {
    assert.equal(countTrue([true, false, false, true, false]), 2);
    assert.equal(countTrue([false, false, false, false]), 0);
    assert.equal(countTrue([]), 0);
    assert.equal(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8);
    assert.equal(countTrue([true, false, true, true, false, false, false, false, false]), 3);
    assert.equal(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8);
    assert.equal(countTrue([true, false, true, true, true, false, true, true, false, false]), 6);
    assert.equal(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3);
    assert.equal(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3);
    assert.equal(countTrue([true, true, false, true, false, false, false, false, true, false]), 4);
    assert.equal(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9);
    assert.equal(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8);
    assert.equal(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6);
  })
})