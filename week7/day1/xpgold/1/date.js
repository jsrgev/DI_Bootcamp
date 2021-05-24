const timeTillJan = () => {
	let today = new Date;
	let jan1 = new Date(2022,0,1)
	let diff = (jan1-today)
	let days = (diff / (1000 * 60 * 60 * 24)).toFixed(0);
	let daysInMS = days*(1000 * 60 * 60 * 24);
	let remainder = diff-daysInMS;
	let remainderTime = new Date(remainder).toISOString().slice(11, -5);
	return `January first is in ${days} days and ${remainderTime} hours.`
}

// console.log(timeTillJan()); 

module.exports = {
	time: timeTillJan
}