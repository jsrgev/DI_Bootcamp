let num1;
let num2;
let oper;
let result;
let prevOper;

function display(string) {
	document.getElementById("display").textContent = string;
}

function tidy(string) {
		if (/e/.test(string) ||
		(string.toString().length > 14 &&
		(string.toString().indexOf(".") < 1 || string.toString().indexOf(".") > 14)) {
		display("TOO LARGE");
		//if longer than 14, and either there's no decimal or decimal is past 14
	} else {
		if (string.toString().length > 14 && string.toString().indexOf(".") > -1) {
			//if it's longer than 14, and there's a decimal
			let decPlace = string.toString().indexOf(".");
			let roundTo = 13-decPlace;
			if (roundTo < 0) {
				roundTo = 0;
			}
			result = string.toFixed(roundTo);
		} else {
			result = preResult;
		}
	}
}

function number(num) {
	if (num1 == undefined) {	//4 + 3 = (7) + 5
		if (oper != undefined) {
			//no new num1, but new oper entered
			//for when starting with result after equal
			num1 = result;
			num2 = num; //new input
			display(num2);
		} else { //if all vars empty, or new num input after equal
			num1 = num;
			num2 = undefined;
			oper = undefined;
			result = undefined;
			display(num1);
		}
	} else if (oper == undefined) { // if no oper, concat to num1
		if (num1.toString().length < 14) { //ignores if 14 chars already
			num1 = num1.toString().concat(num.toString());
			display(num1);
		}
	} else { //concat to num2
		if (num2 == undefined) { //num1 and oper but no num2
			num2 = num;
			display(num2);
		} else if (num2.toString().length < 14) {
			num2 = num2.toString().concat(num.toString());
			display(num2);
		}
	}
}

function operator(operator) {
	if ((num1 != undefined && num2 == undefined) || 
		//only if there is already num1, but no num2
		(num1 == undefined && result != undefined)) {
		// or: there is a result, and no new num1 input
		oper = operator;
	} else if (num1 != undefined && num2 != undefined && result == undefined) {
		// num1 and num2, but haven't hit equal and doing further operation
		equal();
		oper = operator;
	} //otherwise ignore
}

function equal() {
	preResult = eval(num1 + oper + num2);
	if (num1 == undefined && oper == undefined && result != undefined) {
		num1 = result;
		oper = prevOper;
		equal();
	}
	if (isNaN(preResult) == true) {
		return; // if equal before num2 input, ignore
	}
	if (preResult == Infinity || /e/.test(preResult) || preResult.toString().length > 14 && (preResult.toString().indexOf(".") < 1 || preResult.toString().indexOf(".") > 14)) {
		display("ERROR");
		//if longer than 14, and either there's no decimal or decimal is past 14
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
		display(result);
	}

	num1 = undefined;
	prevOper = oper;
	oper = undefined;

}



function sign() {
	if (num1 != undefined && num2 == undefined) {
		num1 = invert(num1);
		display(num1);
	} else if (num1 != undefined && num2 != undefined) {
		num2 = invert(num2);
		display(num2);
	}
}

function invert(string) {
		if (string > 0) {
			string = "-" + string;
		} else if (string < 0) {
			string = string.substr(1);
		}
		return string;
}


function percent() {
	if (num1 != undefined && num2 == undefined) {
		num1 = num1*.01;
		display(num1);
	} else if (num1 != undefined && num2 != undefined) {
		num2 = num2*.01;
		display(num2);
	}
}


function clearAll() {
	undefine()
	display(0);
}

function undefine() {
	num1 = undefined;
	num2 = undefined;
	oper = undefined;
	result = undefined;
}
