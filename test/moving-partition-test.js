const assert = require('chai').assert
const movingPartition = require('../challenges/moving-partition')

describe('Moving Partition', function() {

  it('partitions an arrays from left to right', function() {
    assert.deepEqual(movingPartition([1, 2, 3, 4, 5]), [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]])
    assert.deepEqual(movingPartition([-1, -1, -1, -1]), [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]])
    assert.deepEqual(movingPartition([8, 9, 10]), [[[8], [9, 10]], [[8, 9], [10]]])
    assert.deepEqual(movingPartition([]), [])
  })
})