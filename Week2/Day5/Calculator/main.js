let num1;
let num2;
let oper;
let result;


function number(num) {
	if (num1 == undefined) {
		if (oper != undefined) {
			num1 = result;
			num2 = num;
			console.log(`${num1} and ${oper} and ${num2}`);
		} else {
			num1 = num;
		}
	} else if (oper == undefined) {
		num1 = num1.toString().concat(num.toString());
	} else {
		if (num2 == undefined) {
			num2 = num;
		} else {
			num2 = num2.toString().concat(num.toString());
		}
	}
	console.log(`${num1} and ${oper} and ${num2}`);
}

function operator(operator) {
	if (num1 != undefined || (num1 == undefined && result != undefined)) {
		oper = operator;
		console.log(oper);
	}
}

function equal() {
	result = eval(num1 + oper + num2);
	num1 = undefined;
	num2 = undefined;
	oper = undefined;
	console.log(result);
}

function sign() {

}

function percent() {

}


function clearAll() {
	num1 = undefined;
	num2 = undefined;
	oper = undefined;
	result = undefined;
	console.log(`${num1} and ${oper} and  ${num2}`);
}
