const assert = require('chai').assert
const plant = require('../challenges/harvest-festival')

describe('Harvest Festival', function() {

  it('given four parameters, return a string representing a plant', function() {
    assert.equal(plant("@", 3, 3, 25), "---@@@---@@@---@@@")
    assert.equal(plant("#", 1, 5, 30), "-#####")
    assert.equal(plant("§", 5, 1, 20), "-----§-----§-----§-----§-----§")
    assert.equal(plant("&", 3, 3, 15), "---------&")
    assert.equal(plant("🍁", 2, 6, 28), "--🍁🍁🍁🍁🍁🍁--🍁🍁🍁🍁🍁🍁")
    assert.equal(plant("🍃", 4, 2, 22), "----🍃🍃----🍃🍃----🍃🍃----🍃🍃")
    assert.equal(plant("€", 4, 10, 38), "----------------€")
  })
})