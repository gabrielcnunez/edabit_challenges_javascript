// Find the nth Tetrahedral Number
// A tetrahedron is a pyramid with a triangular base and three sides. 
// A tetrahedral number is a number of items within a tetrahedron.

// Create a function that takes an integer n and returns the 
// nth tetrahedral number.

// Examples
// tetra(2) ➞ 4

// tetra(5) ➞ 35

// tetra(6) ➞ 56

// Notes
// There is a formula for the nth tetrahedral number.

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6
}

module.exports = tetra