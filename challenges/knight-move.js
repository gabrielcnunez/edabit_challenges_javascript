// Knight Move
// Create a function that takes a start position of the chess knight and return all possible moves.

// Formating
// Letters (A, B, C, D, E, F, G,H) must be on Uppercase.
// On result moves must be sorted alphabetically (numbers too).
// Moves must be separated by space-space.
// Examples
// knightMove("A1") ➞ "B3 - C2"

// knightMove("A2") ➞ "B4 - C1 - C3"

// knightMove("E2") ➞ "C1 - C3 - D4 - F4 - G1 - G3"

// Notes
// N/A

function knightMove(startPos) {
  const letter = startPos[0]
  const number = parseInt(startPos[1])
  const possibleMoves = []

  const moves = [
    { row: 2, col: 1 },
    { row: 2, col: -1 },
    { row: -2, col: 1 },
    { row: -2, col: -1 },
    { row: 1, col: 2 },
    { row: 1, col: -2 },
    { row: -1, col: 2 },
    { row: -1, col: -2 },
  ]

  for (const move of moves) {
    const newRow = number + move.row
    const newCol = letter.charCodeAt(0) - 'A'.charCodeAt(0) + move.col

    if (newRow >= 1 && newRow <= 8 && newCol >= 0 && newCol <= 7) {
      const newLetter = String.fromCharCode('A'.charCodeAt(0) + newCol)
      possibleMoves.push(`${newLetter}${newRow}`)
    }
  }

  return possibleMoves.sort().join(' - ')
}

module.exports = knightMove