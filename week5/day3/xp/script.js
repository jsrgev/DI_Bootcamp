// Exercise 1
// Exercise 1 : Comparison
// Instructions

//     Create a function called compareToTen that takes a number as an argument.
//     The function should return a Promise that tests if the value of the given argument is less or greater than 10.

let item = 10;

const compareToTen = (num) => {
	return new Promise((resolve,reject) => {
		if (num > 10) {
			resolve(`${num} is greater than 10.`);
		} else if (isNaN(num)) {
			reject(`"${num}" is not a number. Error!`)
		} else {
			reject(`${num} is not greater than 10.`);
		}
	});
}


compareToTen(item).then((resolve) => {
	console.log(resolve)
	})
.catch((reject) => {
	console.log(reject)
	})


// Exercise 2 : Promises
// Instructions

//     Create a promise that resolves itself in 4 seconds and returns a “success” string.
//     Read about Promise.resolve() and Promise.reject().
//     How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//     Add code to catch errors and console.log ‘Ooops something went wrong’.


let promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("success");
	},4000);
})

promise.then(resolve => {
	console.log(resolve);
})


let shortPromise = Promise.resolve("success");

shortPromise.then(resolve => {
	console.log(resolve);
}).catch(reject => console.log(reject));


let errorPromise =  Promise.reject("Ooops something went wrong");

errorPromise.then(resolve => {
	console.log(resolve);
}).catch(reject => console.log(reject));



// Exercise 3 : Resolve & Reject
// Instructions

//     Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//     Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


let promise1 = Promise.resolve(3+2);

let promise2 = Promise.reject("Boo");

promise1.then(resolve => console.log(resolve));

promise2.catch(reject => console.log(reject));






