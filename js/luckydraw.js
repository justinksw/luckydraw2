var REWARDEE = [];

var IMGS = [
	"images/santa1-min.png",
	"images/santa2-min.png",
	"images/santa3-min.png",
	"images/santa4-min.png",
	"images/santa5-min.png",
	"images/santa6-min.png",
	"images/santa7-min.png",
	"images/santa8-min.png",
	"images/santa9-min.png",
	"images/santa10-min.png",
	"images/santa11-min.png",
];

var PIC_COUNTER = 0;


function drawNext() {
	// Get to the div
	const popup = document.getElementsByClassName("popup")[0];
	popup.style.display = "block";
	const loading = document.getElementsByClassName("popup-loading")[0];
	loading.style.display = "block";
	const person = document.getElementsByClassName("popup-personname")[0];
	person.style.display = "none";
	const picture = document.getElementsByClassName("popup-santa")[0];
	picture.style.display = "none";

	// Create img element under .popup-santa
	var img = document.createElement("img");
	img.id = "santa";
	img.width = 400;

	// Random draw from data.js
	var personname = data[Math.floor(Math.random() * data.length)];

	// Append rewardee list
	// if ((typeof personname === "string" || personname instanceof String) & (PIC_COUNTER <= 10)) {
	if (typeof personname === "string" || personname instanceof String) {
		REWARDEE.push(personname);
	}

	// Remove the one got reward
	const index = data.indexOf(personname);
	if (index > -1) {
		data.splice(index, 1)
	}

	// Show santa picture
	if (PIC_COUNTER > 10) {
		img.src = "images/santa2021.png";
		// personname = "Have fun:)";
	}
	else {
		img.src = IMGS[PIC_COUNTER];
	}
	PIC_COUNTER++;

	// Show person name
	$(".popup-personname").html(personname);

	// var timeDelay = 2080;
	var timeDelay = (Math.random() * (8 - 1) + 1) * 1000;  // [1, 8)
	// console.log(timeDelay);

	setTimeout(function () {
		loading.style.display = "none";
	}, timeDelay);

	setTimeout(function () {
		person.style.display = "block";

		picture.appendChild(img);
		picture.style.display = "block";

	}, timeDelay + 500);
}


function showResult() {
	const popup2 = document.getElementsByClassName("popup")[1];
	popup2.style.display = "block";

	document.getElementById('rewardee').innerHTML =
		'<li>' + REWARDEE.join('</li><li>') + '</li>'
}


function closePopup() {
	const popup = document.getElementsByClassName("popup")[0];
	popup.style.display = "none";

	const popup2 = document.getElementsByClassName("popup")[1];
	popup2.style.display = "none";

	const picture = document.getElementById("santa");
	picture.parentNode.removeChild(picture);

	const person = document.getElementsByClassName("popup-personname")[0];
	person.style.display = "none";
}
