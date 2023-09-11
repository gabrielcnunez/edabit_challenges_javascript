var assert = require('chai').assert
var isDisarium = require('../challenges/disarium-number')

describe('Disarium Number', function() {

  it('returns boolean whether number is Disarium', function() {
    let [numVector, resVector] = [
      [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
      [true, false, true, false, false, true, true, false, false, true, true, true]
    ];
    for (let i in numVector) assert.equal(isDisarium(numVector[i]), resVector[i]);
  });
});