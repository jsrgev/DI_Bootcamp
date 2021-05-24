//Exercise 1

// const express = require('express');
// const app = express();


// app.use('/', express.static(__dirname+'/public'));

// app.get('/blah', (req,res) => {
// 	const user = {
//         firstname: 'John',
//         lastname: 'Doe'
// 	}
// 	res.send(JSON.stringify(user));
// }) 


// app.listen(3000)

// Exercise 2
// const express = require('express');
// const app = express();


// app.use('/', express.static(__dirname+'/public'));

// app.get('/:id', (req,res) => {
// 	// let param = req.params
//     console.log(req.params)
//     res.send(JSON.stringify(req.params));
// })

// app.listen(3000);

// Exercise 3

const exp = require('express');
const app = exp();

app.use(exp.static('public'));


app.listen(3000);







