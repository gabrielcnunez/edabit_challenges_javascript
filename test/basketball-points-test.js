var assert = require('chai').assert;
var points = require('../challenges/basketball-points')

describe ('points', function() {
  
  it ('should count points in a basketball game given the type of baskets scored', function() {
    assert.equal(points(1,1), 5);
    assert.equal(points(1,2), 8);
    assert.equal(points(2,1), 7);
    assert.equal(points(2,2), 10);
    assert.equal(points(69,420), 1398);
  })
})