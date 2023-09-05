// Combinations
// Create a function that takes a variable number of arguments, 
// each argument representing the number of items in a group. 
// The function should return the number of permutations (combinations) 
// of choices you would have if you selected one item from each group.

// Examples
// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120

// Notes
// Don't overthink this one.
// Input may include the number zero.

function combinations(...items) {
  itemsArray = [...items];
  let totalCombos = itemsArray[0];

  for (let i = 1; i < itemsArray.length; i++) {
    if (itemsArray[i] !== 0) {
      totalCombos *= itemsArray[i];
    }
  }

  return totalCombos;
}

module.exports = combinations;