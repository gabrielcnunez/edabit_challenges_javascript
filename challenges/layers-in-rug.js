// Layers in a Rug
// Write a function that counts how many concentric layers a rug has.

// Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5

// Notes
// Multiple layers can share the same component so count them separately (example #2).
// Layers will be horizontally and vertically symmetric.
// There will be at least one layer for each rug.

function countLayers(arr) {
  let layers = 1;

  for (let i = 0; i < .5 * arr.length - .5; i++) {
    if (arr[i] !== arr[i + 1]) {
      layers += 1;
    }
  }

  return layers;
}

module.exports = countLayers;