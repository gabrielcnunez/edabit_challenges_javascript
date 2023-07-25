// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be 
// nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// Notes
// Note the strict inequality (see example #3).

function canNest(arr1, arr2) {
  const minArr1 = findMin(arr1);
  const minArr2 = findMin(arr2);
  const maxArr1 = findMax(arr1);
  const maxArr2 = findMax(arr2);

  return minArr1 > minArr2 && maxArr1 < maxArr2;
}

function findMin(arr) {
  var min = arr.sort((a,b) => a-b);
  return min[0];
}

function findMax(arr) {
  var max = arr.sort((a,b) => b-a)
  return max[0];
}

module.exports = canNest;