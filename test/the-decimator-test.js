var assert = require('chai').assert
var decimator = require('../challenges/the-decimator');

describe('The decimator', function() {

  it('takes a string and removes the last 1/10th of its characters', function() {
    assert.equal(decimator("1234567890"), "123456789");
    assert.equal(decimator("1234567890AB"), "1234567890");
    assert.equal(decimator("123"), "12");
    assert.equal(decimator("123456789012345678901"), "123456789012345678");
    assert.equal(decimator("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ABCDEFGHIJKLMNOPQRSTUVW");
    assert.equal(decimator("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst");
    assert.equal(decimator("A"), "");
    assert.equal(decimator(""), "");
  });
});