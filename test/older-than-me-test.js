var assert = require('chai').assert;
var Person = require('../challenges/older-than-me');

describe('compareAge', function() {

  it('should return a string stating who is the older of two people', function() {
    var p1 = new Person("Samuel", 24);
    var p2 = new Person("Joel", 36);
    var p3 = new Person("Lily", 24);
    assert.equal(p1.compareAge(p2), "Joel is older than me.");
    assert.equal(p1.compareAge(p3), "Lily is the same age as me.");
    
    assert.equal(p2.compareAge(p1), "Samuel is younger than me.");
    assert.equal(p2.compareAge(p3), "Lily is younger than me.");

    assert.equal(p3.compareAge(p1), "Samuel is the same age as me.");
    assert.equal(p3.compareAge(p2), "Joel is older than me.");
  });
});