var assert = require('chai').assert
var doesBrickFit = require('../challenges/brick-in-the-wall')

describe('Check If the Brick Fits through the Hole', function() {

  it('takes heigth, width, depth of brick and returns boolean if it can fit through hole', function() {
    assert.equal(doesBrickFit(1,1,1, 1,1), true);
    assert.equal(doesBrickFit(1,2,1, 1,1), true);
    assert.equal(doesBrickFit(1,2,2, 1,1), false);
    assert.equal(doesBrickFit(1,2,2, 1,2), true);
    assert.equal(doesBrickFit(1,2,2, 2,1), true);
    assert.equal(doesBrickFit(2,2,2, 1,2), false);
  });
});