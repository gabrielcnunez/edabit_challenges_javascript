// Holey Sort
// What do the numbers 4, 6, 8, 9 and 0 have in common? They 
// all have holes in them! Notice how the number 8 contains not one, but two holes.

// Given an array of numbers, sort the array in accordance to 
// how many holes occur in the number. It should be sorted in ascending order.

// Examples
// holeySort([44, 4, 444, 4444]) ➞ [4, 44, 444, 4444]

// holeySort([100, 888, 1660, 11]) ➞ [11, 100, 1660, 888]

// holeySort([8, 121, 41, 66]) ➞ [121, 41, 8, 66]

// Notes
// If two numbers have the same number of holes in them, 
// sort them by the order they first appeared in.
// Despite the number 0 appearing to have two holes in certain 
// fonts, it will only have one hole for the purposes of this challenge.

function holeySort(arr) {
  const holeCount = num => {
    const holeMap = { 4: 1, 6: 1, 8: 2, 9: 1, 0: 1 };
    return num.toString().split('').reduce((count, digit) => count + (holeMap[digit] || 0), 0);
  };

  return arr.sort((a, b) => {
    const holesA = holeCount(a);
    const holesB = holeCount(b);

    if (holesA === holesB) {
      return arr.indexOf(a) - arr.indexOf(b);
    }

    return holesA - holesB;
  });
}

module.exports = holeySort