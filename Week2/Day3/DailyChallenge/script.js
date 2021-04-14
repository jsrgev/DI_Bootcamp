// Instructions

//     Write a JavaScript program that recreates the pattern below.
//     Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
//     Do this Daily Challenge by youself, without looking at the answers on the internet.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


// 6 times
// for each iteration, add [number of iteration] starts

// One way:


let stars = [];
for (let i = 1; i < 7; i++) {
	stars.push("* ".repeat(i));
}
console.log(stars.join("\n"));


// Another way:


let stars = [];
for (let i = 1; i < 7; i++) {
	let line = ""
	for (let counter = 1; counter < i+1; counter++) {
		line += "* "
	}
	stars.push(line);
}
console.log(stars.join("\n"));

















