// Exercise 1 : is_Blank
// Instructions

// Write a program to check whether a string is blank or not.

// console.log(is_Blank('')); --> true
// console.log(is_Blank('abc')); --> false


function isBlank(string) {
	if (string == "" || string == null) {
		return true;
	} else {
		return false;
	}
}


// Exercise 2 : Abbrev_name
// Instructions

// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrev_name("Robin Singh")); --> "Robin S."

function abbrevNam(name) {
	let space = name.indexOf(" ");
	let abbrev = name.slice(0,space+2) + ".";
	return abbrev;
}

// or

let abbrevNam = name => {
	let space = name.indexOf(" ");
	let abbrev = name.slice(0,space+2) + ".";
	return abbrev;
}


// Exercise 3 : SwapCase
// Instructions

// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


function swapCase(string) {
	let newString = []
	for (i=0; i<string.length; i++) {
		if (/[a-z]/.test(string[i]) == true) {
			newString.push(string[i].toUpperCase());
		} else if (/[A-Z]/.test(string[i]) == true) {
			newString.push(string[i].toLowerCase());
		} else {
			newString.push(string[i]);
		}
	}
	console.log(newString.join(""));
}


// Exercise 4 : Omnipresent value
// Instructions

//     Create a function that determines whether an argument is omnipresent for a given array.
//     A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.

// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false


function isOmnipresent(array,value) {
	for (item of array) {
		if (item.indexOf(value) == -1) {
			return false;
		}
	}
	return true;
}

