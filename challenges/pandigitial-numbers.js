// Pandigital Numbers
// A pandigital number contains all digits (0-9) at least once. Write a function that 
// takes an integer, returning true if the integer is pandigital, and false otherwise.

// Examples
// isPandigital(98140723568910) ➞ true

// isPandigital(90864523148909) ➞ false
// // 7 is missing.

// isPandigital(112233445566778899) ➞ false

// Notes
// Think about the properties of a pandigital number when all duplicates are removed.

function isPandigital(num) {
  const digitsArray = Array.from(String(num));
  
  const uniqueDigitsArray = [...new Set(digitsArray.map(Number))];

  const sortedNums = uniqueDigitsArray.sort((a, b) => a - b).join('');

  return sortedNums == 0123456789;
}

module.exports = isPandigital;