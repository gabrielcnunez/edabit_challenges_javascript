var assert = require('chai').assert;
var sortDrinkByPrice = require('../challenges/drink-sorting');

describe('sortDrinkByPrice', function() {

  it ('should sort an array of drink objects by price', function() {
    const drinks1 = [
      {name: 'lemonade', price: 90}, 
      {name: 'lime', price: 432}, 
      {name: 'peach', price: 23}
    ];
    
    const sorted1 = [
      {name: 'peach', price: 23},
      {name: 'lemonade', price: 90}, 
      {name: 'lime', price: 432}
    ];
    
    const drinks2 = [
      {name: 'water', price: 120}, 
      {name: 'lime', price: 80}, 
      {name: 'peach', price: 90}
    ];
    
    const sorted2 = [
      {name: 'lime', price: 80},
      {name: 'peach', price: 90}, 
      {name: 'water', price: 120}
    ];
    assert.equal(sortDrinkByPrice(drinks1), sorted1, "Object is not sorted.");
    assert.equal(sortDrinkByPrice(drinks2), sorted2, "Object is not sorted.");
  });
});