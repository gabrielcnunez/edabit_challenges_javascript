// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// Notes
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(word) {
  const caps = [...word.matchAll(/[A-Z]/g)].join('');
  const unCaps = [...word.matchAll(/[a-z]/g)].join('');

  return caps + unCaps
}

module.exports = capToFront