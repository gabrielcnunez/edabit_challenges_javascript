// Sum of Cubes
// Create a function that takes in an array of numbers and 
// returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0

// Notes
// If given an empty array, return 0.

function sumOfCubes(arr) {
  return arr.reduce((sum, element) => sum + (element ** 3), 0);
}

module.exports = sumOfCubes;