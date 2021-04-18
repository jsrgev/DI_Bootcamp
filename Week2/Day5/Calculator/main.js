let num1;
let num2;
let oper;
let result;


function number(num) {
	if (num1 == undefined) {
		if (oper != undefined) {
			num1 = result;
			num2 = num;
			document.getElementById("display").innerHTML = num2;
			console.log(`${num1} and ${oper} and ${num2}`);
		} else {
			num1 = num;
			document.getElementById("display").innerHTML = num1;
		}
	} else if (oper == undefined) {
		num1 = num1.toString().concat(num.toString());
		document.getElementById("display").innerHTML = num1;
	} else {
		if (num2 == undefined) {
			num2 = num;
			document.getElementById("display").innerHTML = num2;
		} else {
			num2 = num2.toString().concat(num.toString());
			document.getElementById("display").innerHTML = num2;
		}
	}
	console.log(`${num1} and ${oper} and ${num2}`);
}

function operator(operator) {
	if (num1 != undefined || (num1 == undefined && result != undefined)) {
		oper = operator;
		document.getElementById("display").innerHTML = oper;
		console.log(oper);
	}
}

function equal() {
	result = eval(num1 + oper + num2);
	num1 = undefined;
	num2 = undefined;
	oper = undefined;
	document.getElementById("display").innerHTML = result;
	console.log(result);
}

function sign() {
	if (num1 != undefined && num2 == undefined) {
		num1 = "-" + num1;
		document.getElementById("display").innerHTML = num1;
	} else if (num1 != undefined && num2 != undefined) {
		num2 = "-" + num2;
		document.getElementById("display").innerHTML = num2;
	}
}

function percent() {
	if (num1 != undefined && num2 == undefined) {
		num1 = num1*.01;
		document.getElementById("display").innerHTML = num1;
	} else if (num1 != undefined && num2 != undefined) {
		num2 = num2*.01;
		document.getElementById("display").innerHTML = num2;
	}
}


function clearAll() {
	num1 = undefined;
	num2 = undefined;
	oper = undefined;
	result = undefined;
	console.log(`${num1} and ${oper} and  ${num2}`);
	document.getElementById("display").innerHTML = 0;
}
