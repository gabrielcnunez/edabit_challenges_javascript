var assert = require('chai').assert
var tuckIn = require('../challenges/tuck-in-array')

describe('Tuck in Array', function() {

  it('takes elements from first array & tucks them into second array', function() {
    assert.equal(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.equal(tuckIn([15, 150], [45, 75, 35]), [15, 45, 75, 35, 150]);
    assert.equal(tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]), ["bottom", "tomatosauce", "vegetables", "cheese", "topping"]);
    assert.equal(tuckIn([[1, 2], [5, 6]], [[3, 4]]), [[1, 2], [3, 4], [5, 6]]);
    assert.equal(tuckIn([true, false], [false, true, null, undefined]), [true, false, true, null, undefined, false]);
  });
});