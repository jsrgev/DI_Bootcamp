let displayDiv = document.getElementById("displayDiv");

const getCharacter = async () => {
	try	{
		displayDiv.innerHTML = `<i class="fas fa-spinner fa-spin fa-5x"></i>`
		let randomNum = Math.floor(Math.random() * 84);
		let response = await fetch(`https://swapi.dev/api/people/${randomNum}/`);
		let data = await response.json();
		data.homeworld = await getPlanet(data.homeworld);
		display(data);
	} catch {
		displayDiv.innerHTML = `Sorry, someone's missing! Please try again.`
		return;
	}
}

const getPlanet = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	// console.log(data.name);
	return data.name;
}

const display = (data) => {
	displayDiv.innerHTML = `<h1>${data.name}</h1>
	<p>Height: ${data.height}</p>
	<p>Gender: ${data.gender}</p>
	<p>Birth Year: ${data.birth_year}</p>
	<p>Home World: ${data.homeworld}</p>`;
}
