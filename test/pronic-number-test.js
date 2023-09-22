const assert = require('chai').assert
const isHeteromecic = require('../challenges/pronic-number')

describe('Pronic Number', function() {

  it('determines if number can be a product of two consecutive integers', function() {
    let [numVector, resVector] = [
      [0, 2, 7, 110, 136, 156, 182, 218, 250, 272, 306, 362, 380, 422, 462, 600],
      [true, true, false, true, false, true, true, false, false, true, true, false, true, false, true, true]
    ]
    for (let i in numVector) assert.equal(isHeteromecic(numVector[i]), resVector[i])
  })
})