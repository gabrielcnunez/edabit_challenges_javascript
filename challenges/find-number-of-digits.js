// Find Number of Digits in Number
// Create a function that will return an integer number corresponding 
// to the amount of digits in the given integer num.

// Examples
// numOfDigits(1000) ➞ 4

// numOfDigits(12) ➞ 2

// numOfDigits(1305981031) ➞ 10

// numOfDigits(0) ➞ 1

// Notes
// Try to solve this challenge without using strings!

function numOfDigits(num) {
  const absoluteNum = Math.abs(num);

  if (absoluteNum === 0) {
    return 1;
  }

  return Math.floor(Math.log10(absoluteNum)) + 1;
}

module.exports = numOfDigits;