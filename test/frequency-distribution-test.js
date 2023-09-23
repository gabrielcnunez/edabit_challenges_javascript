const assert = require('chai').assert
const getFrequencies = require('../challenges/frequency-distribution')

describe('Frequency Distribution', function() {

  it('returns the frequency distribution of an array', function() {
    assert.deepEqual(getFrequencies(['A', 'A']), {A: 2})
    assert.deepEqual(getFrequencies(['A', 'B', 'A', 'A', 'A']), {A: 4, B: 1})
    assert.deepEqual(getFrequencies(['A', 'B', 'C', 'A', 'A']), {A: 3, B: 1, C: 1})
    assert.deepEqual(getFrequencies([true, false, true, false, false]), {'true': 2, 'false': 3})
    assert.deepEqual(getFrequencies([1, 2, 3, 3, 2]), {'1': 1, '2': 2, '3': 2})
    assert.deepEqual(getFrequencies([]), {})
  })
})