const assert = require('chai').assert
const insertWhiteSpace = require('../challenges/white-spaces')

describe('White Spaces Between Lower and Uppercase Letters', function() {

  it('inserts white space between every instance of lowercase letter followed by uppercase letter', function() {
    assert.equal(insertWhiteSpace("SheWalksToTheBeach"), "She Walks To The Beach")
    assert.equal(insertWhiteSpace("MarvinTalksTooMuch"), "Marvin Talks Too Much")
    assert.equal(insertWhiteSpace("HopelesslyDevotedToYou"), "Hopelessly Devoted To You")
    assert.equal(insertWhiteSpace("EvenTheBestFallDownSometimes"), "Even The Best Fall Down Sometimes")
    assert.equal(insertWhiteSpace("TheGreatestUpsetInHistory"), "The Greatest Upset In History")
  })
})