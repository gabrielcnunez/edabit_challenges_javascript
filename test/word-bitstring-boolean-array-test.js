var assert = require('chai').assert
var toBoolArray = require('../challenges/word-bitstring-boolean-array')

describe('Word to Bitstring to Boolean Array', function() {

  it('converts word to bitstring to boolean array', function() {
    let [actualParam, expectedParam] = [
      [
        "charming", "exquisite", "admire", "deep", "loves", "tesh",
        "xavier", "adores", "tesha", "esquire", "randomize", "exotic"
      ],
      [
        [true, false, true, false, true, true, false, true],
        [true, false, true, true, true, true, true, false, true],
        [true, false, true, true, false, true],
        [false, true, true, false],
        [false, true, false, true, true],
        [false, true, true, false],
        [false, true, false, true, true, false],
        [true, false, true, false, true, true],
        [false, true, true, false, true],
        [true, true, true, true, true, false, true],
        [false, true, false, false, true, true, true, false, true],
        [true, false, true, false, true, true],
      ]
    ]

    for (let i in actualParam) assert.deepEqual(toBoolArray(actualParam[i]), expectedParam[i])
  })
})