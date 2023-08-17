var assert = require('chai').assert
var areaOfCountry = require('../challenges/get-area-of-country')

describe('Get the Area of a Country', function() {

  it('takes a country name, area and returns area of countrys proportion of total world landmass', function() {
    assert.equal(areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass");
    assert.equal(areaOfCountry("Russia", 17098242), "Russia is 11.48% of the total world's landmass");
    assert.equal(areaOfCountry("Iran", 1648195), "Iran is 1.11% of the total world's landmass");
    assert.equal(areaOfCountry("India", 3287590), "India is 2.21% of the total world's landmass");
    assert.equal(areaOfCountry("China", 9706961), "China is 6.52% of the total world's landmass");
    assert.equal(areaOfCountry("Yemen", 527968), "Yemen is 0.35% of the total world's landmass");
    assert.equal(areaOfCountry("Switzerland", 41284), "Switzerland is 0.03% of the total world's landmass");
  });
});