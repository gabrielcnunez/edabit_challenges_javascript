var assert = require('chai').assert
var changeEnough = require('../challenges/convenience-store')

describe('Convenience Store', function() {

  it('given total and array representing change in pocket, determine if able to pay', function() {
    assert.equal(changeEnough([2, 100, 0, 0], 14.11), false);
    assert.equal(changeEnough([0, 0, 20, 5], 0.75), true);
    assert.equal(changeEnough([30, 40, 20, 5], 12.55), true);
    assert.equal(changeEnough([10, 0, 0, 50], 13.85), false);
    assert.equal(changeEnough([1, 0, 5, 219], 19.99), false);
    assert.equal(changeEnough([1, 0, 2555, 219], 127.75), true);
    assert.equal(changeEnough([1, 335, 0, 219], 35.21), true);
  });
});