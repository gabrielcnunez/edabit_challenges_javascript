// Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string 
// str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples
// ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

// ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

// ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

// Notes
// N/A

function ascDesNone(arr, str) {
  if (str === 'Asc') {
    return arr.sort((a, b) => a - b);
  } else if (str === 'Des') {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
}

module.exports = ascDesNone;