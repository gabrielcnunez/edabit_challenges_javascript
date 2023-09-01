var assert = require('chai').assert
var sevenBoom = require('../challenges/seven-boom')

describe('Seven Boom!', function() {
  it('returns Boom! if digit 7 appears in an array', function() {
    assert.equal(sevenBoom([2, 6, 7, 9, 3]), "Boom!");
    assert.equal(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array");
    assert.equal(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array");
    assert.equal(sevenBoom([76, 55, 44, 32]), "Boom!");
    assert.equal(sevenBoom([35, 4, 9, 37]), "Boom!");
  });
});