var assert = require('chai').assert
var testJackpot = require('../challenges/hitting-the-jackpot')

describe('Hitting the Jackpot', function() {

  it('takes an array and returns true if elements are same', function() {
    assert.equal(testJackpot(['@', '@', '@', '@']), true);
    assert.equal(testJackpot(['!', '!', '!', '!']), true);
    assert.equal(testJackpot(['abc', 'abc', 'abc', 'abc']), true);
    assert.equal(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true);
    assert.equal(testJackpot(['SS', 'SS', 'SS', 'SS']), true);
    assert.equal(testJackpot([':(', ':)', ':|', ':|']), false);
    assert.equal(testJackpot(['&&', '&', '&&&', '&&&&']), false);
    assert.equal(testJackpot(['hee', 'heh', 'heh', 'heh']), false);
    assert.equal(testJackpot(['SS', 'SS', 'SS', 'Ss']), false);
    assert.equal(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false);
  });
});