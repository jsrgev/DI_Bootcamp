
response.time().then(res => console.log(res))
.catch(err=>console.log(err))

const showTime = (async () => {
	try {
	let response = await require("./date.js")
	console.log(response.time());
	} catch(err) {
		console.log(err);
	}
})()