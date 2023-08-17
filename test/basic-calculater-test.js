var assert = require('chai').assert
var calculator = require('../challenges/basic-calculator')

describe('Basic Calculator', function() {

  it('takes two numbers and mathematical operator and performs calculation', function() {
    assert.equal(calculator(2, '/', 2), 1);
    assert.equal(calculator(10, '-', 7), 3);
    assert.equal(calculator(2, '*', 16), 32);
    assert.equal(calculator(2, '-', 2), 0);
    assert.equal(calculator(15, '+', 26), 41);
    assert.equal(calculator(2, '+', 2), 4);
    assert.equal(calculator(2, "/", 0), "Can't divide by 0!");
  });
});