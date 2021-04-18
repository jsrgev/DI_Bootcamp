// Instructions

//     Prompt the user for several words (separated by commas).
//     Put the words into an array.
//     Console.log the words one per line, in a rectangular frame as seen below.
//     Check out the Hints and Requirements below.

// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:


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


