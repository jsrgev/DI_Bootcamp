let num1;
let num2;
let oper;
let result;

function number(num) {
	if (num1 == undefined || oper == undefined) {
		num1 = num;
	} else {
		num2 = num;
	}
	console.log(`${num1} and ${num2}`);
}

function operator(operator) {
	oper = operator;
	console.log(oper);
}


function equal() {
	result = eval(num1 + oper + num2);
	num1 = result;
	oper = undefined;
	console.log(result);
}

function sign() {

}

function percent() {
	
}



