// Exercise 1 : Favorite Color
// Instructions

// let me = ["my","favorite","color","is","blue"]

//     Write some simple Javascript code that will join all the items in the array above, and console.log the result.


let me = ["my","favorite","color","is","blue"]
let sentence = me.join(" ");
console.log(sentence);


// Exercise 2 : Mixup
// 1. Create 2 variables. The values should be strings. For example:
// 	let str1 = "mix" let str2 = "pod"
// 2. Slice out and swap the first 2 characters of the 2 strings from part 1.
// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// 4. Finally console.log the new concatenated string.


let lang1 = "Hungarian";
let lang2 = "Finnish";
console.log(lang1.slice(0,2) + lang2.slice(2) + " " + lang2.slice(0,2) + lang1.slice(2));


// Exercise 3 : Calculator
// Instructions

// Make a Calculator. Follow the instructions:

//     Prompt the user for the first number.
//     Store the first number in a variable called num1.
//     Prompt the user for the second number.
//     Store the second number in a variable called num2.
//     Create an Alert where the value is the SUM of num1 and num2.
//     BONUS: Make a program that can subtract, multiply, and also divide!


let num1 = Number(prompt("Please enter a number"));
let num2 = Number(prompt("Please enter another number"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = Number(num1) / Number(num2);
alert(`The sum is ${sum}.\nThe difference is ${difference}.\nThe product is ${product}.\nThe quotient is ${quotient}.`);

