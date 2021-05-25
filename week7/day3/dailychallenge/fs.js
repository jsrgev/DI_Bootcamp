let fs = require('fs');

let file = fs.readFileSync('./right-left.txt');
let fileString = file.toString();
let array = fileString.split("");

let sum = array.reduce((sum,item) => {
	return sum + (item == ">" ? 1 : -1);
},0)
console.log(sum);

let total = 0;
for (let i=1; i<array.length; i++) {
	total += (array[i-1] == ">" ? 1 : -1);
	if (total === -1) {
		console.log(i);
		return;
	}
} 