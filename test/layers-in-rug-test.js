var assert = require('chai').assert
var countLayers = require('../challenges/layers-in-rug')

describe('Layers in a Rug', function() {

  it('counts how many concentric layers a rug has', function() {
    assert.equal(countLayers([
      "AAA"]), 1)
      
    assert.equal(countLayers([
    "AAAA", 
    "AAAA", 
    "AAAA"]), 1)
    
    assert.equal(countLayers([
    "AAAA", 
    "ABBA", 
    "AAAA"]), 2)
    
    assert.equal(countLayers([
    "AAAAAAAAA", 
    "ABBBBBBBA", 
    "ABBBBBBBA", 
    "ABBBBBBBA", 
    "AAAAAAAAA"]), 2)
    
    assert.equal(countLayers([
    "AAAAAAAAA", 
    "ABBBBBBBA", 
    "ABBAAABBA", 
    "ABBBBBBBA", 
    "AAAAAAAAA"]), 3)
    
    assert.equal(countLayers([
    "AAAAAAAAA", 
    "ABBBBBBBA", 
    "ABCCCCCBA", 
    "ABBBBBBBA", 
    "AAAAAAAAA"]), 3)
    
    assert.equal(countLayers([
    "AAAAAAAAAAA", 
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA", 
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"]), 5)
    
    assert.equal(countLayers([
    "AAAAAAAAAAA", 
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCABACBAA", 
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"]), 5)
    
    assert.equal(countLayers([
    "AAAAAAAAAAA", 
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCDDDCBAA",
    "AABCDDDCBAA", 
    "AABCDDDCBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"]), 4)
    
    assert.equal(countLayers([
    "FFFFFFFFFFFFFFFFFFFFFFFFF",
    "FFFFFFFFFFFFFFFFFFFFFFFFF",
    "FFFFGGGGGGGGGGGGGGGGGFFFF",
    "FFFFGGGAAAAAAAAAAAGGGFFFF", 
    "FFFFGGGAABBBBBBBAAGGGFFFF",
    "FFFFGGGAABCCCCCBAAGGGFFFF",
    "FFFFGGGAABCDDDCBAAGGGFFFF",
    "FFFFGGGAABCDDDCBAAGGGFFFF", 
    "FFFFGGGAABCDDDCBAAGGGFFFF",
    "FFFFGGGAABCCCCCBAAGGGFFFF",
    "FFFFGGGAABBBBBBBAAGGGFFFF",
    "FFFFGGGAAAAAAAAAAAGGGFFFF", 
    "FFFFGGGGGGGGGGGGGGGGGFFFF", 
    "FFFFFFFFFFFFFFFFFFFFFFFFF", 
    "FFFFFFFFFFFFFFFFFFFFFFFFF"]), 6)
  })
})