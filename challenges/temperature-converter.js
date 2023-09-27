// Temperature Converter
// Create a function that converts Celsius to Fahrenheit and vice versa.

// Examples
// convert("35°C") ➞ "95°F"

// convert("19°F") ➞ "-7°C"

// convert("33") ➞ "Error"

// Notes
// Round to the nearest integer.
// If the input is incorrect, return "Error".
// For the formulae to convert back and forth, check the Resources tab.

function convert(deg) {
  const numbers = deg.match(/(-?\d+)/)
  const intOfNumbers = parseInt(numbers[0], 10)

  if (deg.includes('F')) {
    const celsConversion = Math.round((intOfNumbers - 32) / 1.8)
    
    return `${celsConversion}°C`
  } else if (deg.includes('C')) {
    const fahrConversion = Math.round(intOfNumbers * 1.8 + 32)

    return `${fahrConversion}°F`
  } else {
    return 'Error'
  }
}

module.exports = convert