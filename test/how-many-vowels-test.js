var assert = require('chai').assert
var countVowels = require('../challenges/how-many-vowels')

describe('How Many Vowels', function() {

  it('takes a string and returns the number of vowels', function() {
    assert.equal(countVowels("Celebration"), 5);
    assert.equal(countVowels("Palm"), 1);
    assert.equal(countVowels("Prediction"), 4);
    assert.equal(countVowels("Suite"), 3);
    assert.equal(countVowels("Quote"), 3);
    assert.equal(countVowels("Portrait"), 3);
    assert.equal(countVowels("Steam"), 2);
    assert.equal(countVowels("Tape"), 2);
    assert.equal(countVowels("Nightmare"), 3);
    assert.equal(countVowels("Convention"), 4);
  });
});