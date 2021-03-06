let displayDiv = document.getElementById("displayDiv");

const getCharacter = async () => {
		displayDiv.innerHTML = `<i class="fas fa-spinner fa-spin fa-5x"></i>`
		let randomNum = Math.floor(Math.random() * 184);
		 // up to 184 instead of 84, to generate some errors
	try	{
		let response = await fetch(`https://swapi.dev/api/people/${randomNum}/`);
		let data = await response.json();
		data.homeworld = await getPlanet(data.homeworld);
		display(data);
	} catch {
		displayDiv.innerHTML = `Sorry, someone's missing! Please try again.`;
	}
}

const getPlanet = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	return data.name;
}

const display = (data) => {
	displayDiv.innerHTML = `<h1>${data.name}</h1>
	<p>Height: ${data.height}</p>
	<p>Gender: ${data.gender}</p>
	<p>Birth Year: ${data.birth_year}</p>
	<p>Home World: ${data.homeworld}</p>`;
}

