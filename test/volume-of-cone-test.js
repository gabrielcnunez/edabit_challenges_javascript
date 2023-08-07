var assert = require('chai').assert
var coneVolume = require('../challenges/volume-of-cone')

describe('Volume of Cone', function() {

  it('takes the height, radius of cone and returns volume', function() {
    assert.equal(coneVolume(3, 2), 12.57);
    assert.equal(coneVolume(15, 6), 565.49);
    assert.equal(coneVolume(18, 0), 0);
    assert.equal(coneVolume(100, 2), 418.88);
    assert.equal(coneVolume(1, 1), 1.05);
    assert.equal(coneVolume(0, 30), 0);
  });
});