var assert = require('chai').assert
var jazzify = require('../challenges/instant-jazz')

describe('Instant JAZZ', function() {

  it('concatenates number 7 to end of every chord, ignoring chords already having 7 at end', function() {
    assert.deepEqual(jazzify(['G', 'F', 'C']), ['G7', 'F7', 'C7']);
    assert.deepEqual(jazzify(['Dm', 'G', 'E', 'A']), ['Dm7', 'G7', 'E7', 'A7']);
    assert.deepEqual(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']), ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']);
    assert.deepEqual(jazzify(['G', 'C7']), ['G7', 'C7']);
    assert.deepEqual(jazzify([]), []);
  });
});