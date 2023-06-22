var assert = require('chai').assert;
var addUp = require('../challenges/add-up-numbers');

describe('addUp', function() {

  it ('should sum all numbers from 1 to a given number', function() {
    assert.equal(addUp(4), 10);
    assert.equal(addUp(13), 91);
    assert.equal(addUp(600), 180300);
    assert.equal(addUp(392), 77028);
    assert.equal(addUp(53), 1431);
    assert.equal(addUp(897), 402753);
    assert.equal(addUp(23), 276);
    assert.equal(addUp(1000), 500500);
    assert.equal(addUp(738), 272691);
    assert.equal(addUp(100), 5050);
    assert.equal(addUp(925), 428275);
    assert.equal(addUp(1), 1);
    assert.equal(addUp(999), 499500);
    assert.equal(addUp(175), 15400);
    assert.equal(addUp(111), 6216);
  });
});