var assert = require('chai').assert
var histogram = require('../challenges/histogram-function')

describe('Histrogram Function', function() {

  it('creates histrograms based on an array of numbers, character given', function() {
    assert.equal(histogram([2,4,5,6], "o"), 'oo\noooo\nooooo\noooooo');
    assert.equal(histogram([4,2], "*"), '****\n**');
    assert.equal(histogram([20,1,12], "H"), 'HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH');
    assert.equal(histogram([2,1,2,4,5,2,3], "#"), '##\n#\n##\n####\n#####\n##\n###');
  });
});