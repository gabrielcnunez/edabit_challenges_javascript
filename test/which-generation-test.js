var assert = require('chai').assert
var generation = require('../challenges/which-generation')

describe('Which Generation Are You?', function() {

  it('returns the name of the ancestor/descendant based on a number and character', function() {
    assert.equal(generation(-3, "m"), "great grandfather");
    assert.equal(generation(1, "f"), "daughter");
    assert.equal(generation(-3, "f"), "great grandmother");
    assert.equal(generation(-2, "m"), "grandfather");
    assert.equal(generation(-2, "f"), "grandmother");
    assert.equal(generation(-1, "m"), "father");
    assert.equal(generation(-1, "f"), "mother");
    assert.equal(generation(0, "f"), "me!");
    assert.equal(generation(1, "m"), "son");
    assert.equal(generation(1, "f"), "daughter");
    assert.equal(generation(2, "m"), "grandson");
    assert.equal(generation(2, "f"), "granddaughter");
    assert.equal(generation(3, "m"), "great grandson");
    assert.equal(generation(3, "f"), "great granddaughter");
    assert.equal(generation(0, "m"), "me!");
    assert.equal(generation(4, "m"), "great great grandson");
    assert.equal(generation(6, "f"), "great great great great granddaughter");
    assert.equal(generation(-5, "m"), "great great great grandfather");
    assert.equal(generation(-4, "f"), "great great grandmother");
  });
});