// Catalan Number
// Create a function that returns the nth 
// catalan number.In combinatorial mathematics, 
// the Catalan numbers form a sequence of natural 
// numbers that occur in various counting problems, 
// often involving recursively-defined objects. 
// They are named after the Belgian mathematician 
// Eugène Charles Catalan (1814–1894). For more info, 
// check out the resource tab.

// Examples
// getCatalanNumber(0) ➞ 1

// getCatalanNumber(6) ➞ 132

// getCatalanNumber(8) ➞ 1430

// Notes
// Inputs are zero and positive integers.

function getCatalanNumber(num) {
  function factorialize(n) {
    let result = n

    if (n === 0 || n === 1) return 1

    while (n > 1) {
      n--
      result *= n
    }

    return result
  }

  return Math.round(factorialize(2 * num) / (factorialize(num + 1) * factorialize(num)))
}

module.exports = getCatalanNumber