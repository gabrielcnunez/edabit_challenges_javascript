// GCD and LCM (Part 2)
// Create a function that takes two numbers as arguments and return the LCM of the two numbers.

// Examples
// lcm(3, 5) ➞ 15

// lcm(14, 28) ➞ 28

// lcm(4, 6) ➞ 12

// Notes
// Don't forget to return the result.
// You may want to use the GCD function to make this a little easier.
// LCM stands for least common multiple, the smallest multiple of both integers.

function lcm(a, b) {
  const sortedNumsArray = [a, b].sort((a, b) => a - b)

  if (sortedNumsArray[1] % sortedNumsArray[0] === 0) return sortedNumsArray[1]
  
  let possibleGcd = null

  for (let i = 2; i < sortedNumsArray[0]; i++) {
    if (sortedNumsArray[0] % i === 0 && sortedNumsArray[1] % i === 0) {
      possibleGcd = i
      break
    }
  }

  return possibleGcd == null ? sortedNumsArray[0] * sortedNumsArray[1] : (sortedNumsArray[0] * sortedNumsArray[1]) / possibleGcd
}

module.exports = lcm