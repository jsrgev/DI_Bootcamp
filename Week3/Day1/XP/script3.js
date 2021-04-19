
// For the following exercise use the HTML presented above:

//     Add a “light blue” background color and some padding to the <div>.

let div = document.getElementsByTagName("div")[0];
div.style.backgroundColor="lightblue";

//     Do not display the first name (John) in the list.

let firstUser = document.getElementsByTagName("li")[0];
firstUser.style.visibility="hidden";

//     Add a border to the second name (Pete).

let secondUser = document.getElementsByTagName("li")[1];
secondUser.style.border="2px dashed aquamarine"

//     Change the font size of the whole body.

let body = document.getElementsByTagName("body")[0];
body.style.fontSize="26px";

//     Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


if (div.style.backgroundColor == "lightblue") {
	alert(`Hello ${firstUser.textContent} and ${secondUser.textContent}`);
}





