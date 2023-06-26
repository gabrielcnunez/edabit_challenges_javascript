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
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return [min, max];
}

module.exports = minMax;