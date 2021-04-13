// Exercise 1 : Your favorite colors
// Instructions

//     Create an array called colors where the value is a list of your favorite colors.
//     Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
//     Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus

let favColors = ["green", "blue", "silver", "yellow", "salmon"];

for (let i=0; i < favColors.length; i++) {
	console.log(`My #${i+1} favorite color is ${favColors[i]}.`);
}


//     Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus

let favColors = ["green", "blue", "silver", "yellow", "salmon"];
let suffixes = ["st", "nd", "rd", "th"]
let sentence;

for (let i = 0; i < favColors.length; i++){
	if (i < 3){
		console.log(`My ${i+1}${suffixes[i]} favorite color is ${favColors[i]}.`);
	} else if (i >= 3){
		console.log(`My ${i+1}${suffixes[3]} favorite color is ${favColors[i]}.`);
	}
}

// Exercise 2 : List of people
// Instructions

let people = ["Greg", "Mary", "Devon", "James"]

//     Write code to remove “Greg” from the people array.

people.shift();
console.log(people);

//     Write code to replace “James” to “Jason”.

people[2] = "Jason";
console.log(people);


//     Write code to add your name to the end of the people array.

people.push("Josh");
console.log(people);


//     Using a loop, iterate through the people array and console.log each person.

for (person of people) {
	console.log(person);
}

//     Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.

for (person of people) {
	if (person == "Jason") {
		console.log(person);
		break;
	}
	console.log(person);
}

//     Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.

for (person of people) {
	if (person == "Mary" || person == "Josh") {
		continue;
	}
	console.log(person);
}


//     Write code that console.logs Mary’s index. take a look at indexOf on google.

console.log(people.indexOf("Mary"));

//     Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1

console.log(people.indexOf("Foo"));


//     Create a variable called last which value is the last element of the array.

let last = people[people.length-1];
console.log(last);

//     Hint: What is the relationship between the index of the last element in the array and the length of the array?

the index of the last item is one less than the total length





// Exercise 3 : Repeat the question
// Instructions

//     Promt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?

let number;
do {
	number = prompt("Please enter a number.");
}
while (number < 10);


// Exercise 4 : Attendance
// Instructions

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// Given the object above where the key is the students name and the value is the country they are from.
// 1. Prompt the student for their name :

// let name = prompt("Please enter your name.");

// * If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."

let name = prompt("Please enter your name.");

if (name.toLowerCase() in guestList) {

	console.log(`Hi I'm ${(name[0].toUpperCase())+(name.substr(1))}, and I'm from ${guestList[name.toLowerCase()]}.`)
} else {
	console.log("Hi! I'm a guest.");
}

// * Hint: Look up the statement if ... in
// * If the name is not in the object, console.log: "Hi! I'm a guest."


// Exercise 5 : Family
// Instructions

//     Create an object called family with a few key value pairs.
//     Console.log the keys. (using a for loop).
//     Console.log the values. (using a for loop).


let family = {
	mother: "Sarah",
	father: "Moshe",
	son: "Joseph",
	daughter: "Leah"
}

for (person in family) {
	console.log(person);
}

for (person in family) {
	console.log(family[person]);
}


// Exercise 6
// Instructions

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

//     Given the object above, console.log “my name is Rudolf the raindeer”

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let sentence = [];
for (word in details) {
 	sentence.push(word);
 	sentence.push(details[word]);
}
console.log(sentence.join(" "));


// Exercise 7 : Secret Group
// Instructions

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

//     A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
//     Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let sorted = names.sort();
let society = [];

for (name of sorted) {
	society.push(name[0])
};

society = society.join("");
console.log(society);



