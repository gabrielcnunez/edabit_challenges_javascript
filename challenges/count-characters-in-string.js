// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of 
// times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4

// Notes
// Your output must be case-sensitive (see second example).

function charCount(char, str) {
  let totalCount = 0;

  for (const element of str.split('')) {
    if (element === char) {
      totalCount++;
    }
  }

  return totalCount;
}

module.exports = charCount;