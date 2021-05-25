// Exercise 1

// let fs = require('fs');

// let file = fs.readFileSync('./text.txt');
// let text = file.toString();
// console.log(text);


// Exercise 2

// let fs = require('fs');

// let string = "Written with node.js";
// fs.writeFile('newtext.txt',string,err => {
// 	if (err) {
// 		console.log(err);
// 	}
// })

// Exercise 3

let fs = require('fs');
let file = './newtext.txt'
let string = "Buy milk";
fs.writeFile(file,string,err => {
	if (err) {
		console.log(err);
	}
})

let text = "\nBuy orange juice";
fs.appendFile(file,text,err => {
	if (err) {
		console.log(err);
	}
})

fs.unlink(file,err => {
	if (err) {
		console.log(err);
	}
})

