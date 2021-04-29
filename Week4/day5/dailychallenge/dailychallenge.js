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

const anagramCheck = (string1,strin2) => {
	let array1 = string1.replaceAll(" ","").split("");
	let array2 = string2.replaceAll(" ","").split("");
	for (letter of array1) {
		let array3 = array2.filter(i => i=letter);
		console.log(array3);
	}
}
