// Zipping Up an Array
// Two arrays are part of the same zipper if the ending is identical. The identical 
// section can be thought of as being "zipped-up". Below, [2, 2, 4] is "zipped-up".

// Array 1: [3, 5, 8, 9, 2, 2, 4]
// Array 2: [1, 7, 2, 2, 4]
// Create a function that takes in two arrays. Return false if none of the array is 
// "zipped." Return true if the arrays are identical. Otherwise, return an array with 
// the first index in each array where the zipper diverges.

// To illustrate:

// zipper([3, 5, 8, 9, 2, 2, 4], [1, 7, 2, 2, 4]) ➞ [3, 1]
// // Zipper 1: 9 (index-3) is first element to diverge.
// // Zipper 2: 7 (index-1) is first element to diverge.

// Examples
// zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]) ➞ [4, 7]

// zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]) ➞ [0, 0]

// zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]) ➞ false

// zipper([5, 4, 3, 2, 6], [5, 4, 3, 2, 6]) ➞ true

// Notes
// Use zero-indexing for the arrays.

function zipper(arr1, arr2) {
  const arrayOneEnd = arr1[arr1.length - 1]
  const arrayTwoEnd = arr2[arr2.length - 1]

  if (arrayOneEnd !== arrayTwoEnd) return false

  let firstArrayIndex = null
  let intersection

  for (let i = 1; i < arr1.length + 1; i++) {
    if (arr1[arr1.length - i] !== arr2[arr2.length - i]) { 
      firstArrayIndex = arr1.length - i
      intersection = arr1.slice(firstArrayIndex + 1)
      break
    }
  }

  if (firstArrayIndex === null) return true
  const secondArrayIndex = arr2.length - intersection.length - 1

  return [firstArrayIndex, secondArrayIndex]
}

module.exports = zipper