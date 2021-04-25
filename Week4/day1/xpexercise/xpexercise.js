Exercise 1 : Scope
Instructions

    What is the value of a in all the following functions.

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// a is 3


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// a is 0 inside function q22, because function q2 hasn't been called



//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// no a has been declared globally, error

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

// a is "test"


//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);   // a is 5
}
alert(a);       // a is 5 ... the if output redefined a.
                // if line 57 were "let a = 5", it would still be 2 outside



Exercise 2 : Ternary operator
Instructions

    Change the conditional into a ternary and assign the function to a variable called experiencePoints.

function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// let experiencePoints = function () {
//     winBattle() ? 10 : 1
// };

// or more simply:
// let experiencePoints = winBattle() ? 10 : 1;


Exercise 3 : Colors
Instructions

Using this array :

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

    Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
    Hint : Use the array methods taught in class.


// let orderColors = () => {
//     let array = [];
//     colors.forEach( (item,i) => {
//         array.push(`#${i+1} choice is ${item}.`);
//     } );
//     console.log(array.join("\n"));
// } 


Exercise 4 : Colors #2
Instructions

Using these arrays :

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

    Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
    Hint : Use the array methods taught in class.


let orderColors = () => {
    let array = [];
    color.forEach( (item,i) => {
        let suffix;
        if (i>2) {
            suffix = ordinal[0];
        } else {
            suffix = ordinal[i+1];
        }
        array.push(`${i+1}${suffix} choice is ${item}.`);
    } );
    console.log(array.join("\n"));
} 

Exercise 5 : Is it a string ?
Instructions

    Write a JavaScript function that checks whether the value of an input is a string or not.

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// function isString(input) {
//     return typeof(input)=="string";
// }
// or
// let isString = (input) => {
//     return typeof(input)=="string";
// }

Exercise 6 : Bank Details
Instructions

In this exercise, you have to decide which type of variables you have to use:

    Create a global variable called bankAmount which value is the amount of money currently in your account.
    Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
    Create an array with all your monthly expenses - both positive and negative (money made and money spent).
    Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
    Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
    Display your current bankAccount standing at the end of the month.










