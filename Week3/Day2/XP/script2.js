// Exercise 2 : Transform the sentence
// Instructions

// Add this sentence to your HTML file then follow the steps :


//     Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.

function getBold_items() {
	return document.querySelectorAll("strong");
}

//     Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
	let bold = getBold_items();
	for (text of bold) {
		this.style.color = "blue";
	}
}

//     Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal() {
	let bold = getBold_items();
	for (text of bold) {
		this.style.color = "black";
	}
}

//     Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let para = document.querySelector("p");
para.addEventListener("mouseover", highlight);
para.addEventListener("mouseout", return_normal);











