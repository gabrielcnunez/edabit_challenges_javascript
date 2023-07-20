var assert = require('chai').assert
var regExp = require('../challenges/find-the-time')

describe('Find the Time', function() {
  
  it('should find the time in a string using RegEx', function() {
    var string1 = 'Breakfast at 09:00 in the room 123:456.'
    var string2 = "1:100 owls eat dinner at 12:00 o'clock"
    var string3 = '10:1 odds that horse is the owls dinner by 03:00 today'

    assert.equal(regExp(string1), "09:00")
    assert.equal(regExp(string2), "12:00")
    assert.equal(regExp(string3), "03:00")
  })
})