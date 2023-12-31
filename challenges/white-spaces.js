// White Spaces Between Lower and Uppercase Letters

// Write a function that inserts a white space between every instance of a lower 
// character followed immediately by an upper character.

// Examples
// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

// Notes

function insertWhiteSpace(str) {
  const regex = /([a-z])([A-Z])/g;

  return str.replace(regex, '$1 $2');
}

module.exports = insertWhiteSpace;