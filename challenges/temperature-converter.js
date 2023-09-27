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
  const degreesNumber = parseFloat(deg)

  if (deg.endsWith('°F')) {
    const celsConversion = Math.round((degreesNumber - 32) / 1.8)
    
    return `${celsConversion}°C`
  } else if (deg.endsWith('°C')) {
    const fahrConversion = Math.round(degreesNumber * 1.8 + 32)

    return `${fahrConversion}°F`
  } else {
    return 'Error'
  }
}

module.exports = convert