var assert = require('chai').assert
var ascDesNone = require('../challenges/lets-sort-this-array')

describe('Lets Sort This Array', function() {

  it('takes array, string, returns array sorted by instructions in string', function() {
    assert.deepEqual(ascDesNone([4, 3, 2, 1], "Asc"), [1, 2, 3, 4]);
    assert.deepEqual(ascDesNone([7, 8, 11, 66], "Des"), [66, 11, 8, 7]);
    assert.deepEqual(ascDesNone([1, 2, 3, 4], "None"),[1, 2, 3, 4]);
    assert.deepEqual(ascDesNone([1, 0, 1, 0], "Asc"), [0, 0, 1, 1]);
    assert.deepEqual(ascDesNone([1, 2, 2, 2, 2, 2, 2], "Des"), [2, 2, 2, 2, 2, 2, 1]);
    assert.deepEqual(ascDesNone([9, 7, 43, 11, 16, 111, 19], "Asc"), [7, 9, 11, 16, 19, 43, 111]);
  });
});