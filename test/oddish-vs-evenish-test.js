var assert = require('chai').assert
var oddishOrEvenish = require('../challenges/oddish-vs-evenish')

describe('Oddish vs. Evenish', function() {

  it('determines whether sum of digits of number is odd or even', function() {
    assert.equal(oddishOrEvenish(43), "Oddish");
    assert.equal(oddishOrEvenish(373), "Oddish");
    assert.equal(oddishOrEvenish(55551), "Oddish");
    assert.equal(oddishOrEvenish(694), "Oddish");
    assert.equal(oddishOrEvenish(4433), "Evenish");
    assert.equal(oddishOrEvenish(11), "Evenish");
    assert.equal(oddishOrEvenish(211112), "Evenish");
  });
});