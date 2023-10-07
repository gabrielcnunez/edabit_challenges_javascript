// Adding Up Letters
// Create a function addLetters that takes a list/array 
// of letters a, and returns the "sum" of them.

// To add two letters, take their number value, add them 
// together, and convert it back together. For example, a 
// would be 1, b would be 2, etc. So to add b and c, take 
// 2 + 3 = 5, and then get the fifth letter of the alphabet (e).

// So then d + e + f would be 4 + 5 + 6 = 15, and the 
// fifteenth letter is o, so that's what you return.

// Letters can also wrap. Like with y + c, that's 25 + 3 = 28, 
// which doesn't exist. Consider that the 27th letter just wraps 
// around and ends back up at a. With this logic, y + c = b. 
// Don't just do 27 = 1 though, because you could end up with a much higher sum like 70.

// Examples
// addLetters(["a"]) ➞ "a"
// addLetters(["a", "b"]) ➞ "c"
// addLetters(["a", "b", "c"]) ➞ "f"
// addLetters(["a", "b", "c", "d", "e", "f"]) ➞ "u"
// addLetters(["y", "a"]) ➞ "z"
// addLetters(["y", "c"]) ➞ "b"
// addLetters(["z", "a"]) ➞ "a"
// addLetters(["x", "y", "z"]) ➞ "w"
// addLetters([]) ➞ "z"

// Notes
// Don't forget to return the result.
// An empty array should return z. The logic behind this is that if you get a sum of 0, then wrap it all the way around backwards (since the 0th letter doesn't exist), giving you 26 which = z.
// All letters given will be lowercase.

function addLetters(arr) {
  if (arr.length === 0) return 'z'
  if (arr.length === 1) return arr[0]

  const letterValues = arr.map((ltr) => ltr.charCodeAt(0) - 96)
  const valueSum = letterValues.reduce((a, b) => a + b, 0)
  
  return valueSum <= 26 ? String.fromCharCode(valueSum + 96) : String.fromCharCode((valueSum % 26) + 96)
}

module.exports = addLetters