function ninetyNineLyrics() {
	let number = prompt("Please enter a number from 1 - 99 to start with:")
	while (number > 99 || number < 1) {
		 max = prompt("Please try again. Enter a number from 1 - 99 to start with:")
	}
	let lyrics = []
	let takeDown = 1;
	for (i=number; i>=0; i -= takeDown) {
		let downPronoun = "them";
		if (takeDown == 1 || number == 1) {
			downPronoun = "it";
		}
			let startPlural = "s";
		if (number == 1 ) {
			startPlural = ""
		}
			let finishPlural = "s";
		if (number-takeDown == 1) {
			finishPlural = "";
		}
		
		let line1 = `${number} bottle${startPlural} of beer on the wall`;
		let line2 = `${number} bottle${startPlural} of beer`;
		lyrics.push(line1);
		lyrics.push(line2);

		let takeDownWord = takeDown;
		let finishAmount = number-takeDown;

		if (number-takeDown == 0 || number-takeDown < 0) {
			if (number == 1) {
				takeDownWord = "it";
			} else {
				takeDownWord = "them"
			}
			finishAmount = "No more";
		}

		let line3 = `Take ${takeDownWord} down, pass ${downPronoun} around`;
		let line4 = `${finishAmount} bottle${finishPlural} of beer on the wall\n`;
		lyrics.push(line3);
		lyrics.push(line4);
		number -= takeDown;
		takeDown += 1;
		if (number > 0 && number-takeDown < 0) {
			takeDown = number;
		}
	}
	console.log(lyrics.join("\n"));
}