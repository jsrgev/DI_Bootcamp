// Exercise 1

let sentence = prompt("Please write a sentence with the word Nemo.");
let posNemo = sentence.indexOf("Nemo");
if (posNemo >= 0) {
	console.log(`I found Nemo at ${posNemo}`);
} else {
	console.log("I can't find Nemo.");
}

// Exercise 1

5 >= 1			// true
0 === 1			// false
4 <= 1			// false
1 != 1			// false
"A" > "B"		// false
"B" < "C"		// true
"a" > "A"		// true
"b" < "A"		// false
true === false	// false
true != true	// false

// Exercise 2

// 1. 23
// 2. undefined
// 3. 12		X	75

// Exercise 3

let numString = prompt("Please provide a string of numbers separated by commas.");
let numStringArray = numString.split(",");
let numArray = numStringArray.map(Number);
let sum = 0
for(var i in numArray) { sum += numArray[i]; }

// Exercise 4

let num = prompt("Please type a number.");
let oSequence = "o".repeat(num);
let div2 = num % 2 == 0;
let div5 = num % 5 == 0;

let punct;

if (div2) {
	punct = "!"
} else {
	punct = ""
}

let sentence = `b${oSequence}m${punct}`

if (num > 2) {
	if (div5) {
		console.log(sentence.toUpperCase());
	} else {
		console.log(sentence);
	}
} else if (num < 2) {
	console.log("boom")
} else {
	console.log("Sorry, you picked the wrong number.")
}

