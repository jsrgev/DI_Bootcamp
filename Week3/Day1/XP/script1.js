// Exercise 1 : Change the navbar
// Instructions
    // In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let div = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

    // We are going to add a new <li> to the <ul>.
    //     First, create a new <li> tag (use the createElement method).

let li = document.createElement("li");

    //     Create a new text node with “Logout” as its specified text.

let text = document.createTextNode("Logout");

    //     Append the text node to the newly created list node (li).

li.appendChild(text);

    //     Finally, append this updated list node to the unordered list above, using the appendChild method.

let ul = document.getElementsByTagName("ul")[0];
ul.appendChild(li);

    // Bonus
    //     Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

