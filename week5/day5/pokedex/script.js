let circle = document.getElementById("circle");
let left = document.getElementById("left");
let right = document.getElementById("right");
let picture = document.getElementById("picture");
let info = document.getElementById("info");

let current;

const displayPokemon = (obj) => {
	console.log(obj);
	let url = obj.sprites.other["official-artwork"]["front_default"];
	picture.innerHTML = `<img src="${url}">`;
	let types = obj.types.map(item => item.type.name).join(", ");
	info.innerHTML = `
	<h2>${obj.name}</h2>
	<p>Number: ${obj.id}</p>
	<p>Height: ${obj.height}</p>
	<p>Weight: ${obj.weight}</p>
	<p>Type: ${types}</p>`
}

const getPokemon = async (number) => {
	picture.innerHTML = `<img src="loading.gif">`;
	try {
		let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
		let data = await response.json();
		displayPokemon(data);
		current = data.id;
	} catch {
		info.innerHTML = "Oh no! That Pokemon isn’t available…";
		picture.innerHTML = "";
	}
}

const getRandom = () => {
	let randomNum = Math.floor(Math.random() * 899);
	getPokemon(randomNum);
}

const getPrevious = () => {
	if (current !== undefined & current < 899) {
		getPokemon(current-1);
	}
}

const getNext = () => {
	if (current !== undefined && current > 0) {
		getPokemon(current+1);
	}
}

circle.addEventListener("click",getRandom);
left.addEventListener("click",getPrevious);
right.addEventListener("click",getNext);
