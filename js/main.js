let button = document.getElementById("button");
let adviceId = document.getElementById("adviceId");
let adviceText = document.getElementById("adviceText");

window.onload = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((resolve) => resolve.json())
    .then((jsonFile) => {
      adviceId.innerHTML = `Adivce # ${jsonFile.slip.id}`;
      adviceText.innerHTML = `"${jsonFile.slip.advice}"`;
    });
};

button.onclick = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((resolve) => resolve.json())
    .then((jsonFile) => {
      adviceId.innerHTML = `Adivce # ${jsonFile.slip.id}`;
      adviceText.innerHTML = `"${jsonFile.slip.advice}"`;
    });
};
