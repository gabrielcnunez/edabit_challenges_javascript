var assert = require('chai').assert;
var findNaN = require('../challenges/find-nan-in-array');

describe('Find Nan in an Array', function() {

  it('returns index of NaN in array', function() {
    assert.equal(findNaN([1, 2, NaN, 3]), 2);
    assert.equal(findNaN([1, 2, 3, NaN, 3, 4, 5, 3]), 3);
    assert.equal(findNaN([1, 2, 3, 4 ,5]), -1);
    assert.equal(findNaN([NaN, 2, 3, 4]), 0);
    assert.equal(findNaN([1, 2, 3]), -1);
  });
});