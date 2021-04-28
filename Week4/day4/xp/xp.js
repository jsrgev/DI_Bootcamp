Exercise 1 : Location
Instructions

    Analyze the code below. What will be the output?

	const person = {
	    name: 'John Doe',
	    age: 25,
	    location: {
	        country: 'Canada',
	        city: 'Vancouver',
	        coordinates: [49.2827, -123.1207]
	    }
	}

	const {name, location: {country, city, coordinates: [lat, lng]}} = person;

	console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// predicted: I am John Doe from Vancouver, Canada. Latitude(undefined), Longitude(undefined)

// outcome: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Exercise 2: Display Student Info
// Instructions

//     Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
//     For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
//     The function should return a string as seen in the example below.

//     displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
//     // 'Your full name is Elie Schoppik'`

// Destructure this object inside the function.


let person = {first: 'Elie', last:'Schoppik'}

let displayStudentInfo = (obj) => {
	const {first, last} = obj;
	return `Your full name is ${first} ${last}`;
}

displayStudentInfo(person);


// Exercise 3: User & id
// Instructions

// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

//     Using methods taught in class, turn the users object into an array:
//     Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//     FYI : The number is their ID number.

//     Modify the outcome of part 1, by multipling the user’s ID by 2.
//     Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 }

let array = Object.entries(users);
console.log(array);

for (user of array) {
	user[1] = user[1]*2;
}

console.log(array);



Exercise 4 : Person class
Instructions

    Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// object


Exercise 5 : Dog class
Instructions

    Analyze the options below.

class Dog {
  constructor(name) {
    this.name = name;
  }
};

    Which constructor will successfully extend the Dog class?

  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

// answer 2





