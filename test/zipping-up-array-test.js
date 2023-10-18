const assert = require('chai').assert
const zipper = require('../challenges/zipping-up-array')

describe('Zipping Up an Array', function() {

  it('takes two arrays, returns boolean or index positions depending upon if arrays zip together', function() {
    assert.deepEqual(zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]), [4, 7])
    assert.deepEqual(zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]), [0, 0])
    assert.deepEqual(zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]), false)
    assert.deepEqual(zipper([1, 5, 4, 3], [9, 8, 7, 5, 4, 3]), [0, 2])
    assert.deepEqual(zipper([7, 8, 9, 9, 9], [8, 8, 9, 9, 9, 9, 9]), [1, 3])
    assert.deepEqual(zipper([7, 8, 5, 1, 5], [6, 6, 5, 1, 5]), [1, 1])
    assert.deepEqual(zipper([6, 6, 5, 1, 5], [6, 6, 5, 1, 5]), true)
    assert.deepEqual(zipper([1, 1, 2, 6, 6, 5, 1, 5], [7, 8, 9, 4, 4, 6, 6, 5, 1, 5]), [2, 4])
  })
})