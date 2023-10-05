const assert = require('chai').assert
const knightMove = require('../challenges/knight-move')

describe('Knight Move', function() {

  it('takes position of knight on chess board, returns all possible moves', function() {
    assert.equal(knightMove('C1'), 'A2 - B3 - D3 - E2')
    assert.equal(knightMove('H8'), 'F7 - G6')
    assert.equal(knightMove('A4'), 'B2 - B6 - C3 - C5')
    assert.equal(knightMove('E4'), 'C3 - C5 - D2 - D6 - F2 - F6 - G3 - G5')
    assert.equal(knightMove('F7'), 'D6 - D8 - E5 - G5 - H6 - H8')
    assert.equal(knightMove('A2'), 'B4 - C1 - C3')
  })
})