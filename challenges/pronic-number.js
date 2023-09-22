// Pronic Number
// A pronic number (or otherwise called as heteromecic) is a number which 
// is a product of two consecutive integers, that is, a number of the form 
// n(n + 1). Create a function that determines whether a number is pronic or not.

// Examples
// isHeteromecic(0) ➞ true
// // 0 * (0 + 1) = 0 * 1 = 0

// isHeteromecic(2) ➞ true
// // 1 * (1 + 1) = 1 * 2 = 2

// isHeteromecic(7) ➞ false

// isHeteromecic(110) ➞ true
// // 10 * (10 + 1) = 10 * 11 = 110

// isHeteromecic(136) ➞ false

// isHeteromecic(156) ➞ true

// Notes
// A recursive version of this challenge can be found via this link.

function isHeteromecic(num) {
  for (let i = 0; i <= num; i++) {
    const product = i * (i + 1)

    if (product === num) return true;
    if (product > num) break;
  }

  return false;
}

module.exports = isHeteromecic;