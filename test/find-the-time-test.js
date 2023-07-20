var assert = require('chai').assert
var regExp = require('../challenges/find-the-time')

describe('Find the Time', function() {
  
  it('should find the time in a string using RegEx', function() {
    var string = 'Breakfast at 09:00 in the room 123:456.'

    assert.equal(regExp(string), "09:00");
  })
})