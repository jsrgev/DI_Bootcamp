// let planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Neptune","Uranus"];

// for (i = 0; i<planets.length; i++) {
// 	let div = document.createElement("div");
// 	div.classList.add("planet",planets[i].toLowerCase());
// 	let section = document.getElementsByTagName("section")[0];
// 	section.appendChild(div);
// }


let planets = {
	Mercury:0,
	Venus:0,
	Earth:1,
	Mars:2,
	Jupiter:79,
	Saturn:82,
	Neptune:27,
	Uranus:14
};

for (planet in planets) {
	let div = document.createElement("div");
	div.classList.add("planet",planet.toLowerCase());
	for (i = 1; i<=planets[planet]; i++) {
		let divMoon = document.createElement("div");
		divMoon.classList.add("moon");
		let distance = i*10 + "px";
		divMoon.style.left=distance;
		div.appendChild(divMoon);
	}
	let section = document.getElementsByTagName("section")[0];
	section.appendChild(div);
}

