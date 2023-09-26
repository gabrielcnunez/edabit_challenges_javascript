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
  
  let gcd = null

  for (let i = sortedNumsArray[0]; i > 0; i--) {
    if (sortedNumsArray[0] % i === 0 && sortedNumsArray[1] % i === 0) {
      gcd = i
      break
    }
  }

  return a * b / gcd
}

module.exports = lcm