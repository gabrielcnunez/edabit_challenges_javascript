// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

// Notes
// N/A

function potatoes(str) {
  return (str.match(/potato/g) || []).length;
}

module.exports = potatoes