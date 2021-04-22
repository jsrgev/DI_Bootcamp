let links = document.querySelectorAll("ul a");

for (link of links) {
	link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
	event.preventDefault();
	let href = this.getAttribute("href");
	let offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}