

const jsonInput = () => {
	let firstName = document.forms[0].elements.firstname.value;
	let lastName = document.forms[0].elements.lastname.value;
	let obj = {
		firstName,
		lastName
	}
	console.log(JSON.stringify(obj));
	return false;
}