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
  if (a < 10 && b < 10) {
    return a * b;
  } else {
    var aString = a.toString().replaceAll(/0/g, '');
    var bString = b.toString().replaceAll(/0/g, '');
    
    return parseInt(aString) * parseInt(bString);
  }
}

module.exports = mubashirFunction;