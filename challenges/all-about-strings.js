// All About Strings
// Create a function that, given a string with at least three 
// characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. 
// Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the 
// format "@ index #" and "not found" if the second character doesn't occur again.

// Examples
// allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

// Notes
// N/A

function allAboutStrings(str) {
  const infoArray = [str.length, str[0], str[str.length - 1]]
  const strMiddle = Math.ceil(str.length / 2) - 1
  let secondOccurence = str.indexOf(str[1], 2)

  str.length % 2 === 0 ? infoArray.push(str.substr(strMiddle, 2)) : infoArray.push(str.substr(strMiddle, 1))

  secondOccurence !== -1 ? infoArray.push(`@ index ${secondOccurence}`) : infoArray.push('not found')
  
  return infoArray
}

module.exports = allAboutStrings