// Instructions

// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.

// Some Help

//     What is an anagram?
//     An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

//     Example of anagrams

//     "Astronomer" is an anagram of "Moon starrer"
//     "School master" is an anagram of "The classroom"
//     "The Morse Code" is an anagram of "Here come dots"

//     Do we need to consider whitespace?
//     Trim whitespace prior to comparison.

const anagramCheck = (string1,string2) => {
	let string1Tidy = string1.replaceAll(" ","").toLowerCase();
	let string2Tidy = string2.replaceAll(" ","").toLowerCase();
	let array1 = string1Tidy.split("").sort();
	let array2 = string2Tidy.split("").sort();
	if (array1.length !== array2.length) {
		return false;
	}
	for (i = 0; i<array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	};
	return true;
}

console.log(anagramCheck("The Morse Code","He re  come dots"));







