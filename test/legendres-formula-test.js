var assert = require('chai').assert;
var legendre = require('../challenges/legendres-formula');

describe('Legendre\'s Formula', function() {

  it('returns exponent of largest power of prime number that divides factoral of given number', function() {
    assert.equal(legendre(5, 100), 24);
    assert.equal(legendre(2, 128), 127);
    assert.equal(legendre(3, 50), 22);
    assert.equal(legendre(7, 98), 16);
    assert.equal(legendre(11, 500), 49);
    assert.equal(legendre(3, 600), 297);
    assert.equal(legendre(7, 6), 0);
    assert.equal(legendre(3, 1385), 688);
    assert.equal(legendre(5, 4324), 1077);
    assert.equal(legendre(2, 8663), 8655);
  });
});