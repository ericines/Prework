const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal = mikesMeal + juansMeal + sheasMeal; //complete the line to calculate the total price for all of the meals
const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks; //complete the line to calculate the total price for all of the meals

const subtotal = mealsTotal + drinksTotal; //calculate the subtotal for the entire bill (both drinks and meals)

const tax = (subtotal * .1); //calculate the tax on the bill assuming a 10% tax rate
const tip = (subtotal * .2); //calculate what a 20% tip on the bill would be

const billTotal = subtotal + tax + tip; //calculate the total due for the bill
const splitAmount = (billTotal / 3); //calculate how much each person pays if they decide to split the bill evenly

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");
