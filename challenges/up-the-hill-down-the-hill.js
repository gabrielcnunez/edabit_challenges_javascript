// Up the Hill, Down the Hill
// If a person traveled up a hill for 18mins at 20mph and then traveled 
// back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, 
// uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate 
// as an integer (mph). No rounding is necessary.

// Examples
// aveSpd(18, 20, 60) ➞ 30

// aveSpd(30, 10, 30) ➞ 15

// aveSpd(30, 8, 24) ➞ 12

// Notes
// The solution is not dividing the sum of the speeds by 2.
// Check the Resources tab if your stuck.

// function aveSpd(upTime, upSpd, downSpd) {
//   const halfway = (upTime / 60) * upSpd;
//   const downTime = (halfway / downSpd) * 60;

//   return halfway * 2 / (upTime + downTime) * 60;
// }

function aveSpd(uphillTime, uphillRate, downhillRate) {
  return (2 * uphillRate * downhillRate) / (uphillRate + downhillRate);
}

module.exports = aveSpd;