var assert = require('chai').assert
var danceConvert = require('../challenges/dance-for-cash')

describe('Dance for Cash', function() {

  it('converts a PIN number string into array of dance move strings', function() {
    assert.deepEqual(danceConvert("0000"), ['Shimmy', 'Shake', 'Pirouette', 'Slide'])
    assert.deepEqual(danceConvert("5555"), ['Headspin', 'Dosado', 'Pop', 'Lock'])
    assert.deepEqual(danceConvert("8888"), ['Lock', 'Arabesque', 'Shimmy', 'Shake'])
    assert.deepEqual(danceConvert("0123"), ['Shimmy', 'Pirouette', 'Box Step', 'Dosado'])
    assert.deepEqual(danceConvert("8765"), ['Lock', 'Lock', "Lock", 'Lock'])
    assert.deepEqual(danceConvert("9104"), ['Arabesque', 'Pirouette', 'Pirouette', 'Pop'])
    assert.deepEqual(danceConvert("3619"), ['Slide', 'Pop', 'Slide', 'Pirouette'])
    assert.deepEqual(danceConvert("9742"), ['Arabesque', 'Lock', 'Dosado', 'Headspin'])
    assert.equal(danceConvert("a95f"), "Invalid input.")
    assert.equal(danceConvert("834"), "Invalid input.")
    assert.equal(danceConvert("+493"), "Invalid input.")
    assert.equal(danceConvert("-324"), "Invalid input.")
  })
})