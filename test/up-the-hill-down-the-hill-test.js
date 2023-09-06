var assert = require('chai').assert
var aveSpd = require('../challenges/up-the-hill-down-the-hill')

describe('Up the Hill, Down the Hill', function() {

  it('returns the average speed given uphill time, rate, and downhill rate', function() {
    assert.equal(aveSpd(18, 10, 30), 15);
    assert.equal(aveSpd(18, 20, 60), 30);
    assert.equal(aveSpd(30, 10, 30), 15);
    assert.equal(aveSpd(30, 8, 24), 12);
  });
});