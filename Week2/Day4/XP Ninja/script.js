// Exercise 1: Random Number
// Instructions

//     Get a random number between 1 and 100.
//     Console.log all even numbers from 0 to the random number.


let num = Math.floor((Math.random()*100) + 1);
console.log(num);
let list = []
for (i=0; i<=num; i+=2) {
	list.push(i);
}
console.log(list);


// Exercise 2: Capitalized letters
// Instructions

//     Create a function that takes a string as an argument.
//     Have the function return:
//         The string but all letters in even indexes should be capitalized.
//         The string but all letters in odd indexes should be capitalized.
//         Note:
//         Index 0 will be considered even.
//         The argument of the function should be a lowercase string with no spaces.

// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']


function capitalize(string) {
	let arrayEven = string.split("");
	for (i = 0; i < string.length; i+=2) {
		arrayEven[i] = string[i].toUpperCase();
	}
	let arrayOdd = string.split("");
	for (i = 1; i < string.length; i+=2) {
		arrayOdd[i] = string[i].toUpperCase();
	}
	console.log([arrayEven.join(), arrayOdd.join()]);
}


// Exercise 3 : Is palindrome?
// Instructions

//     Write a JavaScript function that checks whether a string is a palindrome or not.
//     Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

// palindrome

function isPalindrome(word) {
	let half = Math.floor(word.length/2);
	for (i=0; i<half; i++) {
		let position = word.length-i-1;
		if (word[i] != word[position]) {
			return false;
		}
	}
	return true;
}



// Exercise 4 : Biggest Number
// Instructions

//     Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
//     Note : This function should work with any array;

// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0

function biggestNumberInArray(arrayNumber) {
	let biggest = [0];
	for (i=0; i<arrayNumber.length; i++) {
		if (/^\d+$/.test(arrayNumber[i]) == false) {
			continue;
		} else if (arrayNumber[i] > biggest) {
		biggest = arrayNumber[i];
		}
	}
	return biggest;
	console.log(biggest);
}


// Exercise 5: Unique Elements
// Instructions

// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

function unique(array) {
	let newArray = [array[0]];
	for (i = 1; i<array.length; i++) {
		if (newArray.indexOf(array[i]) == -1) {
			newArray.push(array[i]);
		}
	}
	console.log(newArray);
}


