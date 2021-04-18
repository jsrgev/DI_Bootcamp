// FUNCTIONS
​
function fn_name () {
	//statement
}
​
// goal of the function: say hello to the user
// //declaring a function
// // inside the parentheses : the parameter
function sayHello (userName, userAge, isMarried, children) {
	console.log(`Hello ${userName}, you are ${userAge}, and married ${isMarried}`)
	for (let i = 0; i < children.length; i++){
		console.log(children[i])
	}
}
​
// //calling a function - invoking
// // inside the parenthese : argument
sayHello("John", 45, true, ["a","b","c"])
sayHello("Lea", 25, false, ["c","d","b"])
sayHello("Dan", 55, false, ["t","e","h"])
​
​
​
// GLOBAL AND LOCAL SCOPE
​
// ----------- 1st example ---------------
​
// variable is a GLOBAL variable
// GLOBAL SCOPE
let color = "blue"
​
​
// // // LOCAL scope
// // // THE LOCAL SCOPE ( function, loops, conditionals) CAN USE THE VARIABLES DECLARED IN THE GLOBAL SCOPE
function favoriteColor(){
	console.log(color)
}
​
favoriteColor()
​
​
// ----------- 2nd example ---------------
// // // //LOCAL SCOPE
function favoriteColor (){
	let usersFavoriteColor = "pink"
}
​
​
//GLOBAL SCOPE
// THE GLOBAL SCOPE CANNOT USE THE VARIABLES DECLARED IN THE LOCAL SCOPE
console.log(usersFavoriteColor) //undefined
​
// ----------- 3rd example ---------------
//  the local variable color and the global variable color have the same name
​
// // //GLOBAL SCOPE
let color = "blue"
​
// //LOCAL SCOPE
function favoriteColor (color){
	console.log(color) //will console.log "pink"
}
​
favoriteColor("pink")
​
​
// EXERCISE WITH RETURN
​
let mealPrice = [20, 12, 87];
​
//local scope
function totalAmountRestaurant () {
	let sum = 0
	for (let i = 0; i < mealPrice.length; i++){
		sum += mealPrice[i]
	}
	// console.log(sum)
	return sum;
}
​
// RETURN : set a result to the function
// the variable sum becomes the result of the function
// sum is the result of the totalAmountRestaurant function
​
// console.log("Im consolging my function ", totalAmountRestaurant())
// let sumOutside = totalAmountRestaurant()
// console.log(sumOutside)
​
// //another local scope
// //multiply the sum by 10%
function tipToWaiter () {
	let sumRestaurant = totalAmountRestaurant()
	let tipToGive = sumRestaurant * 0.1
	return tipToGive;
}
​
function amountToGivePerPerson(){
	//sum + tip / 3
	let sum = totalAmountRestaurant();
	let tip = tipToWaiter();
	let total = sum + tip;
	let amontPerPerson = (total/mealPrice.length).toFixed(1)
	console.log("amontPerPerson : ", amontPerPerson)
}
​
function tellMyFriends(currency){
	let amountPerP =  amountToGivePerPerson()
	let sentence = `Each person needs to pay ${amountPerP} in ${currency}`
	return sentence;
}
​
​
function tellTheRestaurant(typeOfPayment) {
	//what each person need to pay, with the currency
	//how we will pay it
	let sentenceOfClient = tellMyFriends("dollars")
	let sentenceRestaurant = `${sentenceOfClient} in ${typeOfPayment}`
	alert(sentenceRestaurant)
}
​
tellTheRestaurant("cash")