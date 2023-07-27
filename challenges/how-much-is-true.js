// How Much is True?
// Create a function which returns the number of true values 
// there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  let numberOfTrues = 0;

  for (const element of arr) {
    if (element === true) {
      numberOfTrues++;
    }
  }

  return numberOfTrues;
}

module.exports = countTrue;