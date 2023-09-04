// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values 
// than unique negative values. Write a function that returns true if an array is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false

// Notes
// 0 counts as neither a positive nor a negative value.

function isPositiveDominant(arr) {
  const distinctValues = [...new Set(arr)];
  let posValues = 0;
  let negValues = 0;

  for (const value of distinctValues) {
    if (value > 0) {
      posValues += 1;
    } else if (value < 0) {
      negValues += 1;
    }
  }
  
  return posValues > negValues;
}

module.exports = isPositiveDominant;