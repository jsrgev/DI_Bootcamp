let num1;
let num2;
let oper;
let result;
let prevOper;
let prevResult

function number(num) {
	if (num1 == undefined) {
		if (oper != undefined) { //if user is starting with result after equals
			num1 = result;
			num2 = num;
			document.getElementById("display").innerHTML = num2;
		} else {
			num1 = num;
			document.getElementById("display").innerHTML = num1;
		}
	} else if (oper == undefined) {
		if (num1.toString().length < 14) {
			num1 = num1.toString().concat(num.toString());
			document.getElementById("display").innerHTML = num1;
		}
	} else {
		if (num2 == undefined) {
			num2 = num;
			document.getElementById("display").innerHTML = num2;
		} else if (num2.toString().length < 14) {
			num2 = num2.toString().concat(num.toString());
			document.getElementById("display").innerHTML = num2;
		}
	}
}

function operator(operator) {
	if (num1 != undefined || (num1 == undefined && result != undefined)) {
		oper = operator;
	}
}

function equal() {
	preResult = eval(num1 + oper + num2);
	if (isNaN(preResult) == true) {
		return;
	}
	if (preResult == Infinity || /e/.test(preResult) || preResult.toString().length > 14 && (preResult.toString().indexOf(".") < 1 || preResult.toString().indexOf(".") > 14)) {
		document.getElementById("display").innerHTML = "ERROR";
		//if it's longer than 14, and either there's no decimal or the decimal is past 14
	} else {
		if (preResult.toString().length > 14 && preResult.toString().indexOf(".") > -1) {
			//if it's longer than 14, and there's a decimal
			let decPlace = preResult.toString().indexOf(".");
			let roundTo = 13-decPlace;
			if (roundTo < 0) {
				roundTo = 0;
			}
			result = preResult.toFixed(roundTo);
		} else {
			result = preResult;
		}
		document.getElementById("display").innerHTML = result;
	}

	num1 = undefined;
	num2 = undefined;
	oper = undefined;
}

function sign() {
	if (num1 != undefined && num2 == undefined) {
		if (num1 > 0) {
			num1 = "-" + num1;
		} else if (num1 < 0) {
			num1 = num1.substr(1);
		}
		document.getElementById("display").innerHTML = num1;
	} else if (num1 != undefined && num2 != undefined) {
		if (num2 > 0) {
			num2 = "-" + num2;
		} else if (num2 < 0) {
			num2 = num2.splice(0,1);
		}
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
	document.getElementById("display").innerHTML = 0;
}
