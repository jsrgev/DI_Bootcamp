var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/aboutMe/:hobby', (req, res) => {
	if (/\W/.test(req.params.hobby) === true) {
		res.status(404).send('Page not found');
	} else {
	res.send(req.params.hobby);
	}
})

app.get('/pic', (req, res) => {
	res.send('<img src="https://assets.amuniversal.com/272b55c02b5e01300649001dd8b71c47">');
})

app.get('/formData', (req,res) => {
	res.send(`${req.query.email} has sent you a message: ${req.query.message}`);
})

app.listen(3000);


