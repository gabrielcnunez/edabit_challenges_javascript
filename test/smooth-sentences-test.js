var assert = require('chai').assert
var isSmooth = require('../challenges/smooth-sentences')

describe('Smooth Sentences', function() {

  it('determines whether input sentence is smooth, returning boolean', function() {
    assert.equal(isSmooth("Marta appreciated deep perpendicular right trapezoids"), true);
    assert.equal(isSmooth("Someone is outside the doorway"), false);
    assert.equal(isSmooth("She eats super righteously"), true);
    assert.equal(isSmooth("Ben naps so often"), true);
    assert.equal(isSmooth("Cute triangles are cute"), false);
    assert.equal(isSmooth("Mad dislikes sharp pointy yoyos"), true);
    assert.equal(isSmooth("Rita asks Sam mean numbered dilemmas"), true);
    assert.equal(isSmooth("Marigold daffodils streaming happily."), false);
    assert.equal(isSmooth("Simply wonderful laughing."), false);
  });
});