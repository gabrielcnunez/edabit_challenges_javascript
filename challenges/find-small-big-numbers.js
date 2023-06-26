// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return 
// both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// Notes
// All test arrays will have at least one element and are valid.

function minMax(arr) {
  var results = [];
  results.push(arr.reduce((a, b) => Math.min(a, b), Infinity));
  results.push(arr.reduce((a, b) => Math.max(a, b), -Infinity));
  return results
}

module.exports = minMax;