var assert = require('chai').assert
var findNemo = require('../challenges/finding-nemo')

describe('Finding Nemo', function() {

  it('returns the order where the word Nemo is found, if possible', function() {
    assert.equal(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!");
    assert.equal(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!");
    assert.equal(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!");
    assert.equal(findNemo("Oh, hello !"), "I can't find Nemo :(");
    assert.equal(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"), "I can't find Nemo :(");
    assert.equal(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"), "I found Nemo at 1!");
  });
});