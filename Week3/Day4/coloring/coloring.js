let left = document.querySelector("#left");
let right = document.querySelector("#right");

let clear = document.createElement("div");
clear.textContent="Clear";
clear.setAttribute("id","clear")
clear.addEventListener("click",clearAll);

function clearAll() {
	let divs = document.querySelectorAll("#right div");
	for (item of divs) {
		item.style.backgroundColor = "#fff";
	}
}

left.appendChild(clear);

let colorRange = ["rgb(0,0,0)","rgb(255,255,255)"];

// for (i=0; i<3; i++) {
// 	for (j=0; j<3; j++) {
// 		for (k=0; k<3; k++) {
// 			value = `rgb(${i*50}%,${j*50}%,${k*50}%)`;
// 			colorRange.push(value);
// 		}
// 	}
// }

for (let i = 0; i<25;i++) {
	let array=[];
	let value;
	for (j=0;j<3;j++) {
		value = Math.floor(Math.random()*256);
		array.push(value);
	}
	let rgb = `rgb(${array.join(",")})`;
	colorRange.push(rgb);
}

colorRange.sort();

for (i = 0; i<27; i++) {
	let div = document.createElement("div");
	div.classList.add("palette");
	div.style.backgroundColor = colorRange[i];
	div.addEventListener("click",getColor);
	left.appendChild(div);
}

let palette = document.querySelectorAll(".palette");

let currentColor;

function getColor(event) {
	for (item of palette) {
		item.classList.remove("highlighted");
	}
	event.target.classList.add("highlighted");
	currentColor = event.target.style.backgroundColor;
	console.log(currentColor);
}

let mouseDown = false;

for (i = 1; i<=24000; i++) {
	let div = document.createElement("div");
	div.classList.add("canvas");
	div.addEventListener("mousedown",mouseIsDown);
	div.addEventListener("mouseover",applyColor);
	right.appendChild(div);
}

function mouseIsDown() {
	mouseDown = true;
	console.log(mouseDown);
}

window.addEventListener("mouseup",mouseIsUp);

function mouseIsUp() {
	mouseDown = false;
	console.log(mouseDown);
}

function applyColor(event) {
	if (mouseDown==true) {
		event.target.style.backgroundColor = currentColor;
	}
}

