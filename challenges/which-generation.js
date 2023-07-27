// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), 
// and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

function generation(x, y) {
  const person = ageAndGenderFinder(x, y);

  switch(true) {
    case Math.abs(x) === 1:
      return person;
    case Math.abs(x) === 2:
      return `grand${person}`;
    case Math.abs(x) === 3:
      return `great grand${person}`;
    case Math.abs(x) > 3:
      return "great ".repeat(Math.abs(x) - 2) + `grand${person}`;
    default:
      return 'me!';
  }

} 

function ageAndGenderFinder(age, gender) {
  return age > 0 && gender === "m" ? "son"
    : age > 0 && gender === "f" ? "daughter"
    : age < 0 && gender === "m" ? "father"
    : "mother";
}

module.exports = generation;