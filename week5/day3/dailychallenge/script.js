const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
	return new Promise((resolve,reject) => {

		let newArray = array.map(item  => {
			if (typeof(item) !== "string") {
				reject("error");
			} else {
				return item.toUpperCase();
			}
		})
		resolve(newArray);
	})
}

const sortWords = (array) => {
	return new Promise((resolve,reject) => {
		if (array==false) {
			reject("error2");
		} else {
			resolve(array.sort());
		}
	})
}

makeAllCaps(arrayOfWords)
.then(resolve => {
	return sortWords(resolve);
})
.then(resolve => {
	console.log(resolve);
})
.catch(reject => {
	console.log(reject);
})

