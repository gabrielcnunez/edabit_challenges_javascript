var assert = require('chai').assert
var getTotalPrice = require('../challenges/calculate-total-price')

describe('Calculate the Total Price of Groceries', function() {

  it('takes array of objects (groceries), returns total price as number', function() {
    assert.equal(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 }
    ]), 1.5);
    
    assert.equal(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Cereals", quantity: 1, price: 2.50 }
    ]), 4);
    
    assert.equal(getTotalPrice([
      { product: "Milk", quantity: 3, price: 1.50 }
    ]), 4.5);
    
    assert.equal(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Eggs", quantity: 12, price: 0.10 },
      { product: "Bread", quantity: 2, price: 1.60 },
      { product: "Cheese", quantity: 1, price: 4.50 }
    ]), 10.4);
    
    assert.equal(getTotalPrice([
      { product: "Chocolate", quantity: 1, price: 0.10 },
      { product: "Lollipop", quantity: 1, price: 0.20 }
    ]), 0.3);
  });
});