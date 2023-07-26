var assert = require('chai').assert
var tuckIn = require('../challenges/tuck-in-array')

describe('Tuck in Array', function() {

  it('takes elements from first array & tucks them into second array', function() {
    assert.deepEqual(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(tuckIn([15, 150], [45, 75, 35]), [15, 45, 75, 35, 150]);
    assert.deepEqual(tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]), ["bottom", "tomatosauce", "vegetables", "cheese", "topping"]);
    assert.deepEqual(tuckIn([[1, 2], [5, 6]], [[3, 4]]), [[1, 2], [3, 4], [5, 6]]);
    assert.deepEqual(tuckIn([true, false], [false, true, null, undefined]), [true, false, true, null, undefined, false]);
  });
});