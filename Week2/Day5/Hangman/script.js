function playHangman() {
	let word = prompt("Player 1, please enter a word:");
	word = word.toLowerCase();
	let starred = word.split("");
	let guesses = [];
	let letter;
	for (i=1; i<11; i++) {
		letter = prompt("Player 2, please enter a letter:");
		while (/^[a-z]$/.test(letter) == false) {
			letter = prompt("Please try again - enter one lower-case letter.")
		}
		while (guesses.indexOf(letter)>-1) {
			letter = prompt("You've already tried that letter. Please enter a different one:")
		}
		guesses.push(letter);
		let plural = "es"
		if (i == 1) {
			plural = "";
		}
		console.log(`${i} guess${plural} so far: ${guesses.join(", ")}.`);
		starred = word.split("");
		for (j=0; j<word.length; j++) {
			if (guesses.indexOf(word[j]) < 0) {
				starred[j] = "*";
			}
		}
		console.log(`The word: ${starred.join("")}.`);
		if (starred.indexOf("*") < 0) {
			alert("CONGRATS YOU WIN!!!");
			return;
		}
	}
	alert("You've had 10 guesses. Sorry, you lose.")
}
