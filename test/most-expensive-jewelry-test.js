var assert = require('chai').assert;
var mostExpensive = require('../challenges/most-expensive-jewelry');

describe('Return the Most Expensive Piece of Jewelry', function() {

  it('takes object, returns the name of jewelry with highest price', function() {
    assert.equal(mostExpensive({'Diamond Earrings': 980, 'Gold Watch': 250, 'Pearl Necklace': 4650}), "The most expensive one is the Pearl Necklace");
    assert.equal(mostExpensive({'Silver Bracelet': 280,'Gemstone Earrings': 180, 'Diamond Ring': 3500}), "The most expensive one is the Diamond Ring");
    assert.equal(mostExpensive({'Simple Gold Ring': 310, 'Silver Anklet': 110, 'Crystal Bracelet': 190}), "The most expensive one is the Simple Gold Ring");
  })
})