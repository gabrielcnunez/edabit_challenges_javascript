var assert = require('chai').assert
var potatoes = require('../challenges/amount-of-potatoes')

describe('Amount of potatoes', function() {

  it('counts the number of times potato appears in a string', function() {
    assert.equal(potatoes("potato"), 1)
    assert.equal(potatoes("potatopotatocherry"), 2)
    assert.equal(potatoes("potatopotatopotatoorange"), 3)
    assert.equal(potatoes("potatopotatobananapotatopotato"), 4)
    assert.equal(potatoes("potatopotatomangopotatopotatopotato"), 5)
    assert.equal(potatoes("potatocucumberpotatopotatopotatopotatopotato"), 6)
    assert.equal(potatoes("tomato"), 0)
  })
})