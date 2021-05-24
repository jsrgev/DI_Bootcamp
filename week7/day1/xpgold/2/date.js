const calculateMinutes = (date) => {
	let today = new Date;
	let diff = (today-date);
	let minutes = Math.floor(diff/(1000*60));
	return minutes;
}

module.exports = {
	minutes: calculateMinutes
}