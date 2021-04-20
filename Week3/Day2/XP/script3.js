// Exercice 3 : Volume of a sphere
// Instructions

//     Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

let button = document.querySelector("#submit");
button.addEventListener("click",volCalc);

function volCalc(event) {
	event.preventDefault();
	let radius = document.querySelector("#radius").value;
	let sphereVolume= eval(4/3 * Math.PI * Math.pow(radius,3));
	volume.value = sphereVolume;
}

