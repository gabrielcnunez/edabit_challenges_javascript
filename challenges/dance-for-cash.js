// Dance for Cash
// Your local bank has decided to upgrade its ATM machines by incorporating 
// motion sensor technology. The machines now interpret a series of consecutive 
// dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance equivalent. 
// There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// Examples
// danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

// danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

// danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

// danceConvert("32a1") ➞ "Invalid input."

// Notes
// Each dance move will be selected from a list by index based on the current digit's 
// value plus that digit's index value. If this value is greater than the last index 
// value of the dance list, it should cycle to the beginning of the list.
// Valid input will always be a string of four digits. Output will be a string array.
// If the input is not four valid numbers, return the string, "Invalid input."

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
  if (pin.length !== 4 || (/[^0-9]/).test(pin)) return 'Invalid input.'
  const charArray = pin.split('')
	let danceMoves = []

  for (const [i, v] of charArray.entries()) {
    const movesIndex = (parseInt(v) + i) % 10
    danceMoves.push(MOVES[movesIndex])
  }

  return danceMoves
}

module.exports = danceConvert