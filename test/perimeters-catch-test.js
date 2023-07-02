var assert = require('chai').assert
var perimeter = require('../challenges/perimeters-catch')

describe('perimeter', function() {

  it('should find perimeter of circle, square using only arithmetic or comparsion operators', function() {
    assert.equal(perimeter("s", 1), 4);
    assert.equal(perimeter("s", 4), 16);
    assert.equal(perimeter("s", 9), 36);
    assert.equal(perimeter("s", 13), 52);
    assert.equal(perimeter("s", 30), 120);
    assert.equal(perimeter("c", 1), 6.28);
    assert.equal(perimeter("c", 4), 25.12);
    assert.equal(perimeter("c", 9), 56.52);
    assert.equal(perimeter("c", 13), 81.64);
    assert.equal(perimeter("c", 30), 188.4);
  });
});