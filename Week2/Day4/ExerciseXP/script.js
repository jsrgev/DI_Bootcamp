// Exercise 1 : Keyless car
// Instructions

//     Ask the user for their age, and save the value to a variable.
//     Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
//         if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
//         if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
//         if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
//     Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.




let age = prompt("Please enter your age");

function checkDriverAge() {
	if (age<18) {
		alert("Sorry, you are too young to drive this car. Powering off.");
	} else if (age>18) {
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
	} else if (age == 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!")
	}
}

checkDriverAge();



//     Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.


function checkDriverAge(age) {
	if (age<18) {
		alert("Sorry, you are too young to drive this car. Powering off.");
	} else if (age>18) {
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
	} else if (age == 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!")
	}
}

checkDriverAge(age);


// Exercise 2 : What’s in my wallet ?
// Instructions

//     Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
//     Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01

// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true


function changeEnough(change, price) {
	let money = (change[0]*25 + change[1]*10 + change[2]*5 + change[3])/100
	if (money > price) {
		console.log("You can afford this item.");
	} else {
		console.log("You cannot afford this item.");
	}
}

changeEnough([25, 20, 5, 0], 4.25);



// Exercise 3: Find the multiples of 23
// Instructions

// Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


function sumMultiples23() {
	let multiples = []
	for (let i = 1; i < Infinity; i++) {
		multiples.push(23*i);
		if (23*(i+1) > 500) {
			break;
		}
	}
	let sum = 0;
	for (let i = 0; i < multiples.length; i++) {
		sum += multiples[i];
	}		
	console.log(`Outcome: ${multiples.join(" ")}\nSum: ${sum}`);
}

sumMultiples23();


// Exercise 4 : Amazon Shopping
// Instructions

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

//     Create a function called checkBasket().
//     It should:
//         prompt the user for an item
//         let the user know if the item is in the basket
//         Hint: Use the in keyword inside the conditional


let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
	let item = prompt("Please enter an item.");
	if (item in amazonBasket) {
		alert("The item is in your basket.");
	} else {
		alert("The item is not in your basket.");
	}
}


// Exercise 5 : Shopping List
// Instructions

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

    // Add the stock and prices objects to your js file.
    // Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
    // Create a function called myBill() that takes no arguments.
    // The function should return the total price of your shoppingList. In order to do this you must follow these rules:
    //     The item must be in stock.
    //     If the item is in stock find out the price in the prices object.
    // Call the myBill() function.


let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
	let sum = 0
	for (item of shoppingList) {
		if (item in stock && stock[item]>0) {
			sum += prices[item];
		} 
	}
	console.log(`Your total is \$${sum.toFixed(2)}.`);
}

myBill();

    // Bonus: If the item is in stock, decrease the item’s stock by 1


let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
	let sum = 0
	for (item of shoppingList) {
		if (item in stock && stock[item]>0) {
			sum += prices[item];
			stock[item] -= 1;
		} 
	}
	console.log(`Your total is \$${sum.toFixed(2)}.`);
}

myBill();


// Exercise 6 : Tips
// Instructions

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

//     Ask John for the amount of the bill.
//     Create the program explained above.
//     In the end, John would like to know:
//         Tip amount.
//         Final bill (bill + tip).
//         (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

let billAmount = prompt("How much is the bill?");

function tipCalculator() {
	let tip = ""
	if (billAmount < 50) {
		tip = billAmount*.2;
	} else if (billAmount >=50 && billAmount <= 200) {
		tip = billAmount*.15;
	} else if (billAmount > 200) {
		tip = billAmount*.1;
	}
	let total = tip + Number(billAmount);
	console.log(`The tip is \$${tip.toFixed(2)}, and the total with the tip comes to \$${total.toFixed(2)}.`);
}

tipCalculator();


// Exercise 7 : Vacations Costs
// Instructions

// Let’s create functions that calculate your vacation’s costs:

//     Define a function called hotel_cost().
//         It should ask the user for the number of nights they would like to stay in the hotel.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         The hotel costs $140 per night. The function should return the total price of the hotel.
//     Define a function called plane_ride_cost().
//         It should ask the user for their destination.
//         The function should return a different price depending on the location.
//             “London”: 183$
//             “Paris” : 220$
//             All other destination : 300$
//             If the user doesn’t answer or if the answer is not a string, ask again.
//     Define a function called rental_car_cost().
//         It should ask the user for the number of days they would like to rent the car.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         Calculate the cost to rent the car. The car costs $40 everyday.
//             If the user rents a car for more than 10 days, they get a 5% discount.
//         The function should return the total price of the car rental.
//     Define a function called total_vacation_cost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//     Hint: You have to call the functions hotel_cost(), plane_ride_cost() and rental_car_cost() inside the function total_vacation_cost.
//     Call the function total_vacation_cost()
//     Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the total_vacation_cost() function.

function hotelCost() { 
	let nights;
	let format = /^\d+$/;
	do {
		nights = prompt("How many nights would you like to stay in the hotel?")
	}
	while (format.test(nights) == false);
	let totalHotelCost = nights*140;
	return totalHotelCost;
}

function plane_ride_cost() {
	let destination;
	let format = /^[a-z][a-z ]*$/i;
	do {
		destination = prompt("What is your destination?")
	}
	while (format.test(destination) == false);
	let totalPlaneCost;
	switch (destination.toLowerCase()) {
		case "london":
			totalPlaneCost = 183;
			break;
		case "paris":
			totalPlaneCost = 220;
			break;
		default:
			totalPlaneCost = 300;
	}
	return totalPlaneCost;
}

function rental_car_cost() {
	let days;
	let format = /^\d+$/;
	do {
		days = prompt("How many days would you like to rent a car?")
	}
	while (format.test(days) == false);
	let totalCarCost;
	if (days>10) {
		totalCarCost = days*38
	} else {
		totalCarCost = days*40;
	}
	return totalCarCost;
}

function total_vacation_cost() {
	let totalHotelCost = hotelCost()
	let totalPlaneCost = plane_ride_cost()
	let totalCarCost = rental_car_cost()
	let totalCost = totalHotelCost + totalPlaneCost + totalCarCost;
	console.log(`The car costs: ${totalCarCost}\nThe hotel costs: ${totalHotelCost}\nThe plane costs: ${totalPlaneCost}\nThe total cost is: ${totalCost}`)
}

total_vacation_cost();




