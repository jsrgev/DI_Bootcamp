// Instructions
// Daily challenge : Show only the letters

//     Create an input type text that takes/shows only letters.

// Hint: use the keyup event listener and remove any character that is not a letter.
// Hint : Check out keycodes in Javascript or Regular Expressions


let input = document.querySelector("#input");
input.addEventListener("keydown",lettersOnly);

function lettersOnly(event) {
	let key = event.code;
	if (key < 65 || key >90) {
		event.preventDefault();
	}
}

