const prompt = require('prompts');

const getBirthdate = async () => {
  const response = await prompt({
    type: 'date',
    name: 'day',
    message: 'Enter your birthday (yyyy-mm-dd?'
  });
  return response;
};


const showMinutes = (async () => {
	let birthdate = await getBirthdate();
	try {
	let response = await require("./date.js")
	console.log(`You have lived ${response.minutes(birthdate.day)} minutes`);
	} catch(err) {
		console.log(err);
	}
})()


