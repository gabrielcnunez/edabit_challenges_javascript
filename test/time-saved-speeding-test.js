const assert = require('chai').assert
const timeSaved = require('../challenges/time-saved-speeding')

describe('Return the Time Saved by Speeding', function() {

  it('returns time saved in minutes by going above the speed limit', function() {
    assert.equal(timeSaved(80, 90, 40), 3.3)
    assert.equal(timeSaved(80, 90, 4000), 333.3)
    assert.equal(timeSaved(80, 100, 40), 6.0)
    assert.equal(timeSaved(80, 100, 10), 1.5)
    assert.equal(timeSaved(60, 65, 25), 1.9)
    assert.equal(timeSaved(60, 60, 20), 0)
    assert.equal(timeSaved(80, 95, 200), 23.7)
    assert.equal(timeSaved(70, 92, 50), 10.2)
    assert.equal(timeSaved(70, 92, 20), 4.1)
    assert.equal(timeSaved(70, 100, 12), 3.1)
  })
})