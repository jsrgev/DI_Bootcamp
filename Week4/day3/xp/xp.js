// Exercise 1 : Analyzing
// Instructions

//     Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// expect:
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);

// expect"
// ["USA"]
// result: (3) ["U", "S", "A"]


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// expect
// [[null, null, null]]
// result: [undefined, undefined]



// Exercise 2 : Employees
// Instructions

// Using this array:

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

    // Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
    // Using the filter() method, congratulate only the Full Stack Residents.

let greetings = users.map(user => `Hello ${user["firstName"]}`);

console.log(fullStack);


let congratulate = () => {
	let fullStack = users.filter(user => user["role"]=="Full Stack Resident");
	let congrats = fullStack.map(user => `Congratulations ${user["firstName"]}`);
	return congrats;
}

congratulate();



// Exercise 3 : Star Wars
// Instructions

// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let string = epic.reduce((accumulator, item) => {
	return accumulator += item;
})



// Exercise 4 : Employees #2
// Instructions

// Using this object:

// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

//     Use the filter() method to congratulate the students that passed the course.


let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


let congratulate = () => {
	let passedStudents = student.filter(item => item["isPassed"]);
	let sentence = passedStudents.map(item=> `Congratulations ${item.name}!`)
	return sentence;
}

console.log(congratulate());






