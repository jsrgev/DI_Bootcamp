const addItem = () => {
	let item = document.getElementById("item").value;
	let quantity = document.getElementById("quantity").value;
	fetch(`http://localhost:2001/add/${item}/${quantity}`)
	.then(res => res.json())
	.then(data => display(data))
	.catch(err => console.log(err))
}

const display = (data) => {
	let root = document.getElementById("root");
	root.innerHTML = "";
	for (let item of data) {
		let p = document.createElement("p");
		p.innerText = `${item.item}: ${item.quantity}`;
		root.appendChild(p)
	}
}