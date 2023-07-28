var assert = require('chai').assert
var filterArray = require('../challenges/filter-strings')

describe('Filter out Strings from an Array', function() {

  it('returns an array of non-strings from an array of mixed data types', function() {
    assert.deepEqual(filterArray([1, 2, "a", "b"]), [1, 2]);
    assert.deepEqual(filterArray([1, "a", "b", 0, 15]), [1, 0, 15]);
    assert.deepEqual(filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
    assert.deepEqual(filterArray(["jsyt", 4, "yt", 6]), [4,6]);
    assert.deepEqual(filterArray(["r", 5, "y", "e", 8, 9]), [5, 8, 9]);
    assert.deepEqual(filterArray(["a", "e", "i", "o", "u"]), []);
    assert.deepEqual(filterArray([4, "z", "f", 5]), [4, 5]);
    assert.deepEqual(filterArray(["abc", 123]), [123]);
    assert.deepEqual(filterArray(["$%^", 567, "&&&"]), [567]);
    assert.deepEqual(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]), [43, 76, 88]);
  });
});