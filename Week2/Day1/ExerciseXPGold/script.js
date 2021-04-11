let me = ["my","favorite","color","is","blue"]
let sentence = me.join(" ");
console.log(sentence);

let lang1 = "Hungarian";
let lang2 = "Finnish";
let lang3 = lang1.slice(0,2) + lang2.slice(2);
let lang4 = lang2.slice(0,2) + lang1.slice(2);
let twoLangs = `${lang3} ${lang4}`
console.log(twoLangs);

let num1 = Number(prompt("Please enter a number"));
let num2 = Number(prompt("Please enter another number"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = Number(num1) / Number(num2);
alert(`The sum is ${sum}.\nThe difference is ${difference}.\nThe product is ${product}.\nThe quotient is ${quotient}.`);

