var assert = require('chai').assert
var millionsRounding = require('../challenges/rounding-in-millions')

describe('Rounding in Millions', function() {

  it('Given array of cities and populations, return array with populations rounded to nearest million', function() {
    const cities1 = [
      ['Tokyo', 37435191],
      ['Delhi', 29399141],
      ['Shanghai', 26317104]
      ]
      
    const cities2 = [
      ['Sao Paulo', 21846507]
      ]
    
    const cities3 = [
      ['London', 9304016],
      ['Naples', 	2186853],
      ['Nice', 	942208],
      ['Abu Dhabi', 1482816],
      ['Riga', 	630692],
      ['Vatican City', 572]
      ]
      
    assert.deepEqual(millionsRounding(cities1), [
      ['Tokyo', 37000000],
      ['Delhi', 29000000],
      ['Shanghai', 26000000]
      ])
      
    assert.deepEqual(millionsRounding(cities2), [
      ['Sao Paulo', 22000000]
      ])
      
    assert.deepEqual(millionsRounding(cities3), [
      ['London', 9000000],
      ['Naples', 	2000000],
      ['Nice', 	1000000],
      ['Abu Dhabi', 1000000],
      ['Riga', 	1000000],
      ['Vatican City', 0]
      ])
      
    assert.deepEqual(millionsRounding([]), [])
  });
});