function playTheGame() {
	let playGame = confirm("Would you like to play the game?");
	if (playGame = false) {
		alert("No problem. Goodbye.");
		return;
	} else {
		let number = prompt("Please enter a number between 0 and 10.");
		if (/^\d+$/.test(number) == false) {
			alert("Sorry, not a number. Goodbye.");
			return;
		} else if (number >10 || number < 0) {
			alert("Sorry, that’s not a good number. Goodbye.");
			return;
		} else {
			let computerNumber = Math.floor((Math.random()*10)+1);
			test(number, computerNumber);
		}
	}
}

function test(userNumber,computerNumber) {
	console.log(`userNumber is ${userNumber}`);
	console.log(`computerNumber is ${computerNumber}`);
	for (i = 1; i<=4; i++) {
		console.log(`Attempt #${i}`)
		if (userNumber == computerNumber) {
			alert("WINNER!!!");
			return;
		} else if (i == 4) {
			break;
		} else if (userNumber > computerNumber) {
			userNumber = prompt("Your number is bigger than the computer’s, guess again");
		} else {
			userNumber = prompt("Your number is lower than the computer’s, guess again");
		}
	}
	alert("Sorry, out of chances.")
}


