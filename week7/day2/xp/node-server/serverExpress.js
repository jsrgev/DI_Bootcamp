const express = require('express');
const app = express();

app.get('/', function (req, res) {
	console.log(req.url);
  res.send('<h1>Hello, you are using Express</h1>');
})
 
app.listen(4000)

