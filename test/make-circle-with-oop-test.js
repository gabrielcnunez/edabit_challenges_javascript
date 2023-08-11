var assert = require('chai').assert
var Circle = require('../challenges/make-circle-with-oop')

describe('Make a Circle with OOP', function() {

  it('creates a circle object and uses two methods to find area, perimeter', function() {
    function round(number) {
      var factor = Math.pow(10, 5);
      return Math.round(number * factor) / factor;
    }

    let circo = new Circle(20);
    assert.equal(round(circo.getArea()), 1256.63706);
    assert.equal(round(circo.getPerimeter()), 125.66371);

    let circo1 = new Circle(2);
    assert.equal(round(circo1.getArea()), 12.56637);
    assert.equal(round(circo1.getPerimeter()), 12.56637);

    let circo2 = new Circle(4.4);
    assert.equal(round(circo2.getArea()), 60.82123);
    assert.equal(round(circo2.getPerimeter()),  27.64602);
  });
});