const assert = require('chai').assert
const addLetters = require('../challenges/adding-up-letters')

describe('Adding Up Letters', function() {

  it('takes array of letters, returns their sum in letter form', function() {
    assert.equal(addLetters(["a"]), "a")
    assert.equal(addLetters(["a", "b"]), "c")
    assert.equal(addLetters(["a", "b", "c"]), "f")
    assert.equal(addLetters(["a", "b", "c", "d", "e", "f"]), "u")
    assert.equal(addLetters(["y", "a"]), "z")
    assert.equal(addLetters(["y", "c"]), "b")
    assert.equal(addLetters(["z", "a"]), "a")
    assert.equal(addLetters(["x", "y", "z"]), "w")
    assert.equal(addLetters([]), "z")
  })
})