var assert = require('chai').assert
var sortByLength = require('../challenges/sort-string-length')

describe('Sort by String Length', function() {

  it('returns an array of string sorted by length in ascending order', function() {
    assert.equal(sortByLength(["a", "ccc", "dddd", "bb"]), ["a", "bb", "ccc", "dddd"]);
    assert.equal(sortByLength(["apple", "pie", "shortcake"]), ["pie", "apple", "shortcake"]);
    assert.equal(sortByLength(["may", "april", "september", "august"]), ["may", "april", "august", "september"]);
    assert.equal(sortByLength(["maybe"]), ["maybe"]);
    assert.equal(sortByLength([]), []);
  });
});