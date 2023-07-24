// Mubashir's Mystery Challenge
// Mubashir has written a mysterious function that takes two 
// numbers a and b and returns multiplication?. Solve the riddle 
// of what Mubashir's function is by having a look at some of 
// the examples below.

// Examples
// mubashirFunction(0, 1) ➞ 0

// mubashirFunction(1, 2) ➞ 2

// mubashirFunction(10, 10) ➞ 1

// Notes
// Check the Tests tab for more examples.
// This isn't really a coding challenge, more of a fun riddle ;)

function mubashirFunction(a,b) {
  return (a < 10 && b < 10) ? a * b : parseInt(a.toString().replace(/0/g, '')) * parseInt(b.toString().replace(/0/g, ''));
}

module.exports = mubashirFunction;