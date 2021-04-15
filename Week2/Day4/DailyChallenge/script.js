let sentence = prompt("Please enter several words.");
let array = sentence.split(" ");

let longest = array[0];

for (i = 1; i<array.length; i++) {
	if (array[i].length > longest.length) {
		longest = array[i];
	}
}

let stars = []

for (word of array) {
	let spaces = " ".repeat(longest.length-word.length);
	let line = `* ${word}${spaces} *`;
	stars.push(line);
}
let bookend = "*".repeat(longest.length+4);
stars.unshift(bookend);
stars.push(bookend);
console.log(stars.join("\n"));
