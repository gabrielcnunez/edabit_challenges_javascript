var assert = require('chai').assert
var charCount = require('../challenges/count-characters-in-string')

describe('Count Instances of Character in String', function() {

  it('takes two strings and returns a count of times a character in a string', function() {
    assert.equal(charCount('a', 'edabit'), 1);
    assert.equal(charCount('b', 'big fat bubble'), 4);
    assert.equal(charCount('c', 'Chamber of secrets'), 1);
    assert.equal(charCount('f', 'frank and his friends have offered five foxes for sale'), 7);
    assert.equal(charCount('x', 'edabit'), 0);
    assert.equal(charCount('a', 'Adam and Eve bit the apple and found a snake'), 6);
    assert.equal(charCount('s', 'sssssssssssssssssssssssss'), 25);
    assert.equal(charCount('7', '10795426697'), 2);
  });
});