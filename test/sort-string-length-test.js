var assert = require('chai').assert
var sortByLength = require('../challenges/sort-string-length')

describe('Sort by String Length', function() {

  it('returns an array of string sorted by length in ascending order', function() {
    assert.deepEqual(sortByLength(["a", "ccc", "dddd", "bb"]), ["a", "bb", "ccc", "dddd"]);
    assert.deepEqual(sortByLength(["apple", "pie", "shortcake"]), ["pie", "apple", "shortcake"]);
    assert.deepEqual(sortByLength(["may", "april", "september", "august"]), ["may", "april", "august", "september"]);
    assert.deepEqual(sortByLength(["maybe"]), ["maybe"]);
    assert.deepEqual(sortByLength([]), []);
  });
});