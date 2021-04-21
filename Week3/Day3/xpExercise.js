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


// function myMove() {
// id();
// };


// let id = setInterval(function() {
// 	if (unit <= 350) {
// 	box.style.left = unit + "px";
// 	box.style.top = unit + "px";
// 	unit++;
// 	} else {
// 		clearInterval(id);
// 	}
// }, 5)