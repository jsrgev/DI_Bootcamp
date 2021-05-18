// const createButton2 = () => {
// 	let root = document.getElementById("root");
// 	let button = document.createElement("button");
// 	button.innerText = "Show Text";
// 	button.addEventListener("click",showText);
// 	root.appendChild(button);
// }

const getInput = () => {
	let input = document.getElementById("input");
	array.push(input.value);
	displayItems();
}

const mapArray = (array) => {
	let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let newArray = array.map((a,i) => `${days[i]} ${a}`);
	return newArray;
}

const displayItems = () => {
	let display = document.getElementById("display");
	display.innerHTML = "";
	let newArray = mapArray(array);
	for (let item of newArray) {
		let div = document.createElement("div");
		div.innerText = item;
		display.appendChild(div);
	}
}

const createElements = (() => {
	let root = document.getElementById("root");

	let input = document.createElement("input");
	input.setAttribute("id","input");
	root.appendChild(input);

	let button1 = document.createElement("button");
	button1.innerText = "Add";
	button1.addEventListener("click",getInput);
	root.appendChild(button1);

	let display = document.createElement("div");
	display.setAttribute("id","display");
	root.appendChild(display);
})()

let array = [];







