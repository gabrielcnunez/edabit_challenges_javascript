const assert = require('chai').assert
const allAboutStrings = require('../challenges/all-about-strings')

describe('All About Strings', function() {

  it('given a string with at least three characters, returns an array of information about string', function() {
    assert.deepEqual(allAboutStrings('LASA'), [4, 'L', 'A', 'AS', '@ index 3']);
    assert.deepEqual(allAboutStrings('Computer'), [8, 'C', 'r', 'pu', 'not found']);
    assert.deepEqual(allAboutStrings('Science'), [7, 'S', 'e', 'e', '@ index 5']);
    assert.deepEqual(allAboutStrings('homework'), [8, 'h', 'k', 'ew', '@ index 5']);
    assert.deepEqual(allAboutStrings('spring'), [6, 's', 'g', 'ri', 'not found']);
    assert.deepEqual(allAboutStrings('break'), [5, 'b', 'k', 'e', 'not found']);
    assert.deepEqual(allAboutStrings('programming'), [11, 'p', 'g', 'a', '@ index 4']);
    assert.deepEqual(allAboutStrings('bad'), [3, 'b', 'd', 'a', 'not found']);
  })
})