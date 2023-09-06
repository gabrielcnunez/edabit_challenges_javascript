var assert = require('chai').assert
var isPandigital = require('../challenges/pandigitial-numbers')

describe('Pandigital Numbers', function() {

  it('returns boolean whether number contains all digits zero through nine', function() {
    assert.equal(isPandigital(84847473937), false);
    assert.equal(isPandigital(546732965015), false);
    assert.equal(isPandigital(6781235184590), true);
    assert.equal(isPandigital(9432821089765), true);
    assert.equal(isPandigital(629764), false);
    assert.equal(isPandigital(90864523148909), false);
    assert.equal(isPandigital(7296012), false);
    assert.equal(isPandigital(647380265483206), false);
    assert.equal(isPandigital(38165975424790), true);
    assert.equal(isPandigital(8146327815320), false);
    assert.equal(isPandigital(768431605430), false);
    assert.equal(isPandigital(4920124852367763), true);
    assert.equal(isPandigital(60543981597247), true);
    assert.equal(isPandigital(10282343456789), true);
  });
});