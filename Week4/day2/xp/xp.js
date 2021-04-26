Exercise 1 : Function with two parameters
Instructions

    Create a one line function that receives two numbers as parameters and returns the sum.


// let sum = (a,b) => a*b;


Exercise 2 : Closure
Instructions

    Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);

// prediction: 13

// outcome: 13

Exercise 3 : Currying
Instructions

    Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//prediction: 31
//outcome: 31

Exercise 4 : Currying

    Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// prediction: 17
// outcome: 17

Exercise 5 : Composing

    Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// prediction: 16
// outocome: 16
















