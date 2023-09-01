// Count Ones in Binary Representation of Integer
// Count the amount of ones in the binary representation of an integer. 
// For example, since 12 is 1100 in binary, the return value should be 2.

// Examples
// countOnes(0) ➞ 0

// countOnes(100) ➞ 3

// countOnes(999) ➞ 8

// Notes
// The input will always be a valid integer (number).

function countOnes(int) {
  const binaryStr = int.toString(2);
  let onesCount = 0;

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      onesCount += 1;
    }
  }

  return onesCount
}

module.exports = countOnes;