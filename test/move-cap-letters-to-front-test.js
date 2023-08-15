var assert = require('chai').assert
var capToFront = require('../challenges/move-cap-letters-to-front')

describe('Move Capitals Letters to the Front', function() {

  it('moves all capital letters in a word to the front of a word', function() {
    assert.equal(capToFront("hApPy"), "APhpy");
    assert.equal(capToFront("moveMENT"), "MENTmove");
    assert.equal(capToFront("aPPlE"), "PPEal");
    assert.equal(capToFront("shOrtCAKE"), "OCAKEshrt");
  });
});