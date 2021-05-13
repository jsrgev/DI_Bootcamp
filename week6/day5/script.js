// let inputStartDate = document.getElementById('inputStartDate');
// inputStartDate.value = new Date;
// inputStartDate.value = new Date().toDateInputValue();

// Date.prototype.toDateInputValue = (function() {
//     var local = new Date(this);
//     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
//     return local.toJSON().slice(0,10);
// });

// document.getElementById('datePicker').value = new Date().toDateInputValue();

let tasks = localStorage.getItem('storedTasks') ? JSON.parse(localStorage.getItem('storedTasks')) : [];

function addTask() {
	let startDate = document.getElementById('inputStartDate').value;
	let parsedStartDate = parseDate(startDate);
	console.log(parsedStartDate);
	let finishDate = document.getElementById('inputFinishDate').value;
	let parsedFinishDate = parseDate(finishDate);
	let task = {
		name: document.getElementById('inputName').value,
		startDate: parsedStartDate,
		startTime: document.getElementById('inputStartTime').value,
		finishDate: parsedFinishDate,
		finishTime: document.getElementById('inputFinishTime').value,
		desc: document.getElementById('inputDesc').value,
		completed: false
	};
	// console.dir(document.getElementById('inputDate').value)
	tasks.push(task);
	localStorage.setItem('storedTasks',JSON.stringify(tasks));
	createTable();
}

// s is format y-m-d
// Returns a date object for 00:00:00 local time
// on the specified date

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}

const calculateDays = (finishDate,finishTime) => {
	// let array = finishDate.split(/\D/);
	// let date = new Date(array[0], --array[1], array[2]);
	let today = new Date;
	let difference = (finishDate - today) / (1000 * 60 * 60 * 24);
	let rounded = Math.floor(difference)+1;
	return rounded;
}

const getDays = () => {
	calculateDays
}



function createTable() {
	let display = document.getElementById("display")
	display.innerHTML = "";
	let table = document.createElement("TABLE");
	table.innerHTML = "<tr><th>Name</th><th>Start</th><th>Finish</th><th>Days left</th><th>Completed</th></tr>";
	tasks = tasks.sort((a,b) => a.startDate - b.startDate);

	for (let i=0; i<tasks.length; i++) {
		let tr = document.createElement("TR");
		tr.setAttribute("id",`${i}task`);

		let days = calculateDays(tasks[i].finishDate,tasks[i].finishTime);
		days = isNaN(days) ? "" : days;

		let trContent = `
		<tr>
		  <td>${tasks[i].name}</td>
		  <td>${tasks[i].startDate.toString()} ${tasks[i].startTime}</td>
		  <td>${tasks[i].finishDate.toString()} ${tasks[i].finishTime}</td>
		  <td>${days}</td>
		  <td></td>
		</tr>`;
		tr.innerHTML = trContent;

		styleCompleted(tr.children[4]);
		styleLate(days,tr);

		table.appendChild(tr);

		let trDesc = document.createElement("TR");
		let trDescContent = tasks[i].desc;
		trDesc.innerHTML = `<td colspan="5">trDescContent</td>`;
		trDesc.setAttribute("class","hidden")
		table.appendChild(trDesc);

	}
	display.appendChild(table);
	addListeners();
}

const addListeners = () => {
	let cellsName = document.querySelectorAll("td:first-child");
	for (let cell of cellsName) {
		cell.addEventListener("click",toggleDesc);
	}
	let cellsCompleted = document.querySelectorAll("td:last-child")
	for (let cell of cellsCompleted) {
		cell.addEventListener("click",toggleCompleted);
	}
}

const toggleDesc = (event) => {
	let row = event.target.parentNode.nextElementSibling;
	row.classList.toggle("hidden");
}

const toggleCompleted = (event) => {
	let td = event.target;
	let number = td.parentNode.id[0];
	tasks[number].completed = !tasks[number].completed;
	updateStorage();
	styleCompleted(td);
}

const styleCompleted = (td) => {
	let tr = td.parentNode;
	let number = tr.id[0];
	td.textContent = tasks[number].completed ? "✓" : "";
	if (tasks[number].completed) {
		td.parentNode.classList.add("completed");
		// console.log(td.parentNode);
		// console.log(td.previousSiblingNode);
		// td.previousElementSibling.textContent = "";
		// td.parentNode.nextElementSibling.classList.add("completed");
	} else {
		td.parentNode.classList.remove("completed");
		// console.log(td.parentNode);
		// td.parentNode.nextElementSibling.classList.remove("completed");
	}
	let days = td.previousElementSibling.textContent;
	// console.log(days);
	styleLate(days,tr);
}

const updateStorage = () => {
	localStorage.setItem('storedTasks',JSON.stringify(tasks));
}


const styleLate = (days,tr) => {
	let number = tr.id[0];
	let completed = tasks[number].completed;
	if (completed) {
		tr.classList.remove("late");
		} else {
			if (days < 0) {
				tr.classList.add("late");
		}
	}		

}

const clearAll = () => {
	tasks = [];
	localStorage.removeItem('storedTasks')
	display.innerHTML = "";
}






