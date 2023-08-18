var assert = require('chai').assert
var isRepdigit = require('../challenges/is-number-repdigit')

describe('Is the Number a Repdigit?', function() {

  it('takes an integer and returns whether its a repdigit', function() {
    assert.equal(isRepdigit(6), true);
    assert.equal(isRepdigit(66), true);
    assert.equal(isRepdigit(666), true);
    assert.equal(isRepdigit(6666), true);
    assert.equal(isRepdigit(1001), false);
    assert.equal(isRepdigit(-11), false, "The number must be >= 0");
  });
});