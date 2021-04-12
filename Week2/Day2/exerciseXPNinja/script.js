// Exercise 1 : Age difference
// Instruction

//     Given the years two people were born, find the date when the younger one is exactly half the age of the older.
//     Notes: The dates are given in the format YYYY


let year1 = prompt("Please enter someone's birth year.");
let year2 = prompt("Please enter someone else's birth year.");
let year3;

if (year1 > year2) {
	year3 = year1 - year2 + Number(year1);
	console.log(`The younger person will be exactly half the age of the older in ${year3}`);
} else if (year2 > year1) {
	year3 = year2 - year1 + Number(year2);
	console.log(`The younger person will be exactly half the age of the older in ${year3}`);
} else {
	console.log("The two people will always be the same age.");

}


// Exercise 2 : Zip codes
// Instruction

// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

//     While working in a Post Office you must have the clients’ zip code in order to send them their letters.
//     Ask the client for their zip code and console.log “success” or “error” based on the following rules.
//         Zip codes consists of 5 numbers
//         Must only contain numbers
//         Must not contain any whitespace (spaces)
//         Must not be greater than 5 digits in length


// Without Regular Expressions:

let zip = prompt("Please enter your zip code.");
if (isNaN(zip) == false && zip.length <= 5 && zip.includes(" ") == false) {
	console.log("Success");
} else {
	console.log("Error");
}

// With Regular Expressions:

let zip = prompt("Please enter your zip code.");
var properZip = /^\d{1,5}$/
if (properZip.test(zip) == true) {
	console.log("Success");
} else {
	console.log("Error");
}




// Exercise 3 : Secret word
// Instruction

// Harder exercise
// Hint : Use Regular Expressions

//     Prompt the user for a word and save it to a variable.
//     Delete all the vowels of the word and console.log the result.
//     Bonus: Replace the vowels with another character and console.log the result

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5



// Delete all vowels:

let word = prompt("Please enter a word.");
console.log(word.replace(/[aeiou]/g, ""));

// Replace vowels with numbers:

let word = prompt("Please enter a word.");
console.log(word.replace("a", "1").replace("e", "2").replace("i", "3").replace("o", "4").replace("u", "5"));






