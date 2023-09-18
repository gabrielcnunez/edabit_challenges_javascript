// Combinatorial Exploration
// Given a known number of unique items, how many ways could we arrange them in a row?

// Create a function that takes an integer n and returns the number of digits of the 
// number of possible permutations for n unique items. For instance, 5 unique items 
// could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.

// Examples
// noPermsDigits(0) ➞ 1

// noPermsDigits(1) ➞ 1

// noPermsDigits(5) ➞ 3

// noPermsDigits(8) ➞ 5

// Notes
// This challenge requires some understanding of combinatorics.

function noPermsDigits(n) {
  if (n <= 1) {
    return 1;
  }

  const pi = Math.PI;
  const e = Math.E;
  const digitCount = Math.floor(0.5 * Math.log10(2 * pi * n) + n * Math.log10(n / e) + 1);

  return digitCount;
}

module.exports = noPermsDigits;