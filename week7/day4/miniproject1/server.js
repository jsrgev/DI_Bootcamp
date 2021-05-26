let fs = require('fs')
let express = require('express')
let app = express();

app.use('/',express.static(__dirname+'/public'));

app.get('/add/:item/:quantity',(req,res) => {
	let file = './list.txt';
	let list = [];
	try {
	let fileData = fs.readFileSync(file);
	let fileString = fileData.toString();
	list = JSON.parse(fileString);
	} catch(err) {
		console.log(err);
	}
	list.push(req.params);
	fs.writeFileSync(file,JSON.stringify(list))

	res.send(list)
})

app.listen(2001);

