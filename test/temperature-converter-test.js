const assert = require('chai').assert
const convert = require('../challenges/temperature-converter')

describe('Temperature Converter', function() {

  it('converts Celsius and Fahrenheit and vice versa', function() {
    assert.equal(convert('35°C'), '95°F')
    assert.equal(convert('18°C'), '64°F')
    assert.equal(convert('0°F'), '-18°C')
    assert.equal(convert('100°C'), '212°F')
    assert.equal(convert('69°F'), '21°C')
    assert.equal(convert('159°C'), '318°F')
    assert.equal(convert('-40°C'), '-40°F')
    assert.equal(convert('-40°F'), '-40°C')
    assert.equal(convert('16°C'), '61°F')
    assert.equal(convert('500°C'), '932°F')
    assert.equal(convert('33'), 'Error')
    assert.equal(convert('19°F'), '-7°C')
    assert.equal(convert('85°C'), '185°F')
    assert.equal(convert('0°C'), '32°F')
    assert.equal(convert('1777°F'), '969°C')
    assert.equal(convert('-90°C'), '-130°F')
    assert.equal(convert('16°F'), '-9°C')
    assert.equal(convert('180°C'), '356°F')
    assert.equal(convert('7K'), 'Error')
    assert.equal(convert('100°F'), '38°C')
  })
})