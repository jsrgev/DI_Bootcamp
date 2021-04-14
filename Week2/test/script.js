
// function hotelCost() { 
// 	let nights;
// 	let format = /^\d+$/;
// 	do {
// 		nights = prompt("How many nights would you like to stay in the hotel?")
// 	}
// 	while (format.test(nights) == false);
// 	let totalHotelCost = nights*140;
// 	return totalHotelCost;
// }

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
		case "paris":
			totalPlaneCost = 220;
		default:
			totalPlaneCost = 300;
	}
	return totalPlaneCost;
}

plane_ride_cost();


// function rental_car_cost() {
// 	let days;
// 	let format = /^\d+$/;
// 	do {
// 		days = prompt("How many days would you like to rent a car?")
// 	}
// 	while (format.test(days) == false);
// 	let totalCarCost = days*40;
// 	return totalCarCost;
// }





