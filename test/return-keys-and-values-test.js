var assert = require('chai').assert
var keysAndValues = require('../challenges/return-keys-and-values')

describe('Return the Object Keys and Values', function() {

  it('takes an object and return keys and values as arrays', function() {
    assert.equal(keysAndValues({a: 1, b: 2, c: 3}), [["a", "b", "c"], [1, 2, 3]]);
    assert.equal(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}), [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]);
    assert.equal(keysAndValues({key1: true, key2: false, key3: undefined}), [["key1", "key2", "key3"], [true, false, undefined]]);
    assert.equal(keysAndValues({1: null, 2: null, 3: null}), [["1", "2", "3"], [null, null, null]]);
    assert.equal(keysAndValues({key1: "cat", key2: "dog", key3: null}), [["key1", "key2", "key3"], ["cat", "dog", null]]);
  });
});