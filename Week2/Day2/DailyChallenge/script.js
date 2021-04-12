let sentence = "It's not bad, it's terrible.";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordBad > wordNot) {
	sentence = sentence.replace(/not.*bad/, "good");
	console.log(sentence)
} else {
	console.log(sentence);
}
