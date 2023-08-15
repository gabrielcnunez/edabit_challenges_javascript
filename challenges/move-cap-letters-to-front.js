// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// Notes
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(word) {
  let caps = '';
  let unCaps = '';

  for (let i = 0; i < word.length; i++) {
    word[i] >= 'A' && word[i] <= 'Z' ? caps += word[i] : unCaps += word[i];
  }

  return caps + unCaps;
}

module.exports = capToFront