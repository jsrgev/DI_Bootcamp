let currency1 = document.getElementById("currency1");
let currency2 = document.getElementById("currency2");
let amount = document.getElementById("amount");
let button = document.getElementById("button");
let resultDiv = document.getElementById("result");
let accessKey = "6b543e9294a71d26a6606f5449cf71a6";

const fetchCurrencies = (async () => {
	let response = await fetch(`http://api.currencylayer.com/list?access_key=${accessKey}`);
	let data = await response.json();
	let currencies = data.currencies;
	populateSelect(currencies, currency1);
	populateSelect(currencies, currency2);
})()


const populateSelect = (currencies, select) => {
	for (item in currencies) {
		let option = document.createElement("option");
		option.setAttribute("value",item);
		option.textContent = item + ": " + currencies[item];
		select.appendChild(option);
	}
}

const convert = async () => {
	if (currency1.value === currency2.value) {
		resultDiv.innerHTML = amount.value;
		return;
	}
	let response = await fetch(`http://api.currencylayer.com/live?access_key=${accessKey}&currencies=${currency1.value},${currency2.value}`);
	let data = await response.json();
	let rates = Object.values(data.quotes);
	let result = amount.value/rates[0]*rates[1];
	resultDiv.innerHTML = `${result} ${currency2.value}`
}



