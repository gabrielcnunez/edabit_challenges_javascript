var assert = require('chai').assert
var concat = require('../challenges/concatenate-arrays')

describe('Concatenate Variable Number of Input Arrays', function() {

  it('concatenates n input arrays, where n is variable', function() {
    assert.deepEqual(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(concat([1, 2], [3, 4]), [1, 2, 3, 4]);
    assert.deepEqual(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4]);
    assert.deepEqual(concat(['a'], ['b', 'c']), ['a', 'b', 'c']);
  });
});