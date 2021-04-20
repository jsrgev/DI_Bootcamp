// Exercise 1 : Change the article
// Instructions

//     Using DOM methods, remove the last paragraph in the <article> tag from the DOM.

let article = document.querySelector("article");
let lastP = article.querySelector("p:last-child");
article.removeChild(lastP);

//     Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.

let h2 = document.querySelector("h2");
h2.addEventListener("click",changeBG);
function changeBG() {
	this.style.backgroundColor = "aquamarine";
}

//     Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)

let randomNum = Math.floor(Math.random() * 101);
let h1 = document.querySelector("h1");
h1.style.fontSize = `${randomNum}px`;

//     Add an event listener which will hide the h3 when it’s clicked on (use the display property).

let h3 = document.querySelector("h3");
h3.addEventListener("click", hide);
function hide() {
	this.style.display = "none";
}

//     Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let button = document.querySelector("#bold");
button.addEventListener("click", boldText);
function boldText() {
	let paragraphs = document.querySelectorAll("p");
	for (i=0; 1<paragraphs.length; i++) {
		paragraphs[i].style.fontWeight = "bold";
	} 
}

//     When the “Submit” button of the form is clicked:
//         get the values of the input tags
//         make sure that they are not empty,
//         then append them to a HTML table, in the div, below the form.

let div = document.querySelector(".usersAnswer");
let submit = document.querySelector("#submit");
let form = document.forms[0];
let textInputs = form.querySelectorAll("[type='text']");
submit.addEventListener("click", appendToTable);
function appendToTable(event) {
	event.preventDefault();
	for (data of textInputs) {
		if (data.value == "") {
			alert("Please enter both first name and last name")
			return;
		}
	}
	if (document.querySelector("table") == null) {
		let table = document.createElement("table");
		div.appendChild(table);
	}
	let table = document.querySelector("table");
	let row = document.createElement("tr");
	for (data of textInputs) {
		let cell = document.createElement("td");
		let text = document.createTextNode(data.value)
		cell.appendChild(text);
		row.appendChild(cell);
		data.value = "";
	}
	table.appendChild(row);
		// if (document.querySelector("table") == null) {

	// 	table = document.createElement.;
	// }
}

//     When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let para2 = document.querySelector("p:nth-of-type(2)");
para2.addEventListener("mouseover",fadeOut);
function fadeOut() {
	para2.style.transition = "all .5s";
	para2.style.opacity = "0";
}


