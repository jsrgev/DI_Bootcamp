// Exercise 2 : Users
//     In the HTML above change the name “Pete” to “Richard”.

let firstUl = document.getElementsByTagName("ul")[0];
let secondLi = firstUl.lastElementChild;
secondLi.textContent = "Richard";

//     Change each first name of the two <ul>'s to your name.

let uls = document.getElementsByTagName("ul");

for (i=0; i<uls.length; i++) {
	uls[i].firstElementChild.textContent = "Josh";
}

//     At the end of each <ul> add a <li> that says “Hey students”.

for (i=0; i<uls.length; i++) {
	let newLi = document.createElement("li");
	let Text = document.createTextNode("Hey students");
	newLi.appendChild(Text);
	uls[i].appendChild(newLi);
}

//     Delete the name Sarah from the second <ul>.

secondLi = uls[1];
secondLi.removeChild(secondLi.children[1]);

//     Bonus
//         Add a class called student_list to both of the <ul>'s.

for (i=0; i<uls.length; i++) {
	uls[i].classList.add("student_list");
}

//         Add the classes university and attendance to the first <ul>.

firstUl.classList.add("university", "attendance");


