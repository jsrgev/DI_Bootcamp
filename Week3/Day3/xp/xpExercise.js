// Exercise 1 : Move the box
// Instructions

//     Move the box from left to right
//     Tip: use setInterval


let box = document.querySelector("#animate");

let unit = 1;

function myMove() {setInterval(function() {
	if (unit <= 350) {
	box.style.left = unit + "px";
	unit++;
	} else {
		clearInterval(myMove);
	}
}, 5)
};


// Exercise 2: Drag & Drop
// Instructions

//     Create a draggable square/box element in your HTML file.
//     In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.


let drag = document.querySelector("#drag");

let container = document.querySelector("#container");

drag.addEventListener("dragstart", dragStart);

function dragStart() {
	console.log("a");
	event.dataTransfer.setData("text",event.target.id);
}


container.addEventListener("dragover",allowDrop);
container.addEventListener("drop",dragDrop);
container.addEventListener("dragenter", dragEnter);
container.addEventListener("dragleave", dragLeave);

function allowDrop(event) {
	event.preventDefault()
}


function dragDrop(event) {
	event.preventDefault();
	let dataDiv = event.dataTransfer.getData("text");
	let box = document.getElementById(dataDiv);
	event.target.appendChild(box);
}

function dragEnter(event){
  event.target.style.backgroundColor = "aquamarine"
}

function dragLeave(event){
  event.target.style.backgroundColor = "red"
}






