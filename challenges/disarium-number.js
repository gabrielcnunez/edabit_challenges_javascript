// Disarium Number
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// Create a function that determines whether a number is a Disarium or not.

// Examples
// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32

// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// isDisarium(544) ➞ false

// isDisarium(518) ➞ true

// isDisarium(8) ➞ true

// isDisarium(466) ➞ false

// Notes
// Position of the digit is 1-indexed.
// A recursive version of this challenge can be found via this link.

function isDisarium(num) {
  const digitsArr = Array.from(String(num), Number);
  const disariumSum = digitsArr.reduce((sum, element, index) => sum + element ** (index + 1), 0);

  return disariumSum === num;
}

module.exports = isDisarium;