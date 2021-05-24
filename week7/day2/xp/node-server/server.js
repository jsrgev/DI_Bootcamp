const http = require('http');

// const server = http.createServer( (req,res) => {
// 	let obj = {
// 		firstname: "John",
// 		lastname: "Doe"
// 	}
// 	// res.setHeader('Content-Type','application/JSON');
// 	res.setHeader('Content-Type','text/html');
// 	res.end(obj);
// })

const server = http.createServer( (req,res) => {
	let obj = {
		firstname: "John",
		lastname: "Doe"
	}
	let string = JSON.stringify(obj)
	res.setHeader('Content-Type','text/html');
	res.end(string);
})

server.listen(8080);