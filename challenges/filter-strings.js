// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and 
// strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.

function filterArray(arr) {
  // let filtered_array = arr.filter(function (e) {
  //   return typeof e !== 'string';
  // });

  // return filtered_array
  const filtered_array = arr.filter((e) => typeof e !== 'string');

  return filtered_array
}

module.exports = filterArray;