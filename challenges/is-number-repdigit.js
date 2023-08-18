// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit. Create a function 
// that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false

// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

function isRepdigit(num) {
  if (num < 0) {
    return false;
  }

  const digitArray = Array.from(String(num), Number);

  const repeatingNum = (currentValue) => currentValue === digitArray[0];

  return digitArray.every(repeatingNum);
}

module.exports = isRepdigit