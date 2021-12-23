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
  const popup = document.getElementsByClassName("popup")[0];
  popup.style.display = "block";
  const loading = document.getElementsByClassName("popup-loading")[0];
  loading.style.display = "block";
  const person = document.getElementsByClassName("popup-personname")[0];
  person.style.display = "none";
  const picture = document.getElementsByClassName("popup-santa")[0];
  picture.style.display = "none";

  var img = document.createElement("img");
  var sr = IMGS[PIC_COUNTER];
  img.src = sr;
  img.id = "santa";
  img.width = 400;

  var personname = data[Math.floor(Math.random() * data.length)];

  if ((typeof personname === "string" || personname instanceof String) & (PIC_COUNTER <= 10)) {
    REWARDEE.push(personname);
  }
  const index = data.indexOf(personname);
  if (index > -1) {
    data.splice(index, 1)
  }

  PIC_COUNTER++;
  if (PIC_COUNTER > 10) {
    img.src = "images/santa2021.png";
    personname = "Have fun:)"
  }

  $(".popup-personname").html(personname);

  var timeDelay = 2080;
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
