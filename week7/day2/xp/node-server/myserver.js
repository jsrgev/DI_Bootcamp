const http = require('http');

const server = http.createServer( (req,res) => {
	res.setHeader('Content-Type','text/html');
	res.end(`<h1>This is my first response</h1>
		<h2>Second response</h2>
		<h3>Third response</h3>
		`);
})

server.listen(3000);