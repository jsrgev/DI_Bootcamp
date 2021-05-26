let fs = require("fs");
let express = require('express');
let app = express();

const pws = require("p4ssw0rd");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'hardlyever',
    database : 'users'
  }
});

app.use('/',express.static(__dirname+'/public'));

const updateLoginDB = ({user_id,username,password}) => {
	console.log(user_id,username,password);
}

app.post('/login', async (req,res) => {
	let match = false
	let info = await validateUser(req.body);
	if (info.length !== 0) {
		info = info[0];
		match = pws.check(req.body.password,info.password, 10);
		knex('login').insert(info)
		.then(
			knex('register')
			.where('user_id',info.user_id)
			.update({'last_login_date':getTodaysDate()})
			.catch(err => console.log(err))
		)
	}
	res.send(match);
})

const validateUser = async (login) => {
	let result = await knex('register')
	.where({username: login.username})
	.select('user_id','username','password')
	return result;
}

const getTodaysDate = () => {
	return new Date().toISOString().slice(0, 10).replace('T', ' ');
}

app.post('/register',(req,res) => {
	let array = req.body;
	array.created_date = getTodaysDate();
	array.password = pws.hash(array.password,10);
	knex('register').insert(array)
	.then(data => res.send(true))
	.catch(err => res.send(JSON.stringify(err.detail)));
})

app.listen(2002)






