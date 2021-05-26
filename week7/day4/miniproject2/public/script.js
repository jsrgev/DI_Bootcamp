const login = () => {
	if (validateForm("login") === false) {
		return
	};
	let username = document.getElementById("loginUsername").value;
	let password = document.getElementById("loginPassword").value;
	let data = {username,password};
	fetch('http://localhost:2002/login', {
		method: 'POST',
		headers: {
			'Content-type':'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(data => {
		let message = data ? `Welcome ${username}!` : `Either your username or password is wrong. Please try again.`;
		display("login",message);
	});
}

const display = (form,message) => {
	let root = document.getElementById(`${form}Root`);
	root.innerHTML = "";
	let p = document.createElement("p");
	p.textContent = message;
	root.appendChild(p);
}



const validateForm = (form) => {
	let inputs = document.querySelectorAll(`#${form}>input`);
	for (let input of inputs) {
		if (input.value == "") {
			alert("Please fill out all fields.");
			return false;
		}
	}
}

const register = () => {
	if (validateForm("register") === false) {
		return;
	};
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;
	let email = document.getElementById("email").value;
	let username = document.getElementById("registerUsername").value;
	let password = document.getElementById("registerPassword").value;
	let data = {first_name,last_name,email,username,password};
	fetch('http://localhost:2002/register', {
		method: 'POST',
		headers: {
			'Content-type':'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(data => {
		let message = (data === true ? `Welcome ${first_name} ${last_name}` : data);
		display("register",message);
	})
}







