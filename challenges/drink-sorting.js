// Drink Sorting
// You will be given an array of drinks, with each drink being 
// an object with two properties: name and price. Create a function 
// that has the drinks array as an argument and return the drinks 
// objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

// Notes
// N/A

function sortDrinkByPrice(drinks) {
	return drinks.sort((a, b) => a.price-b.price);
}

module.exports = sortDrinkByPrice