"use strict";

const startingPage = document.querySelector(".starting-page");
const mainPage = document.querySelector(".game-main-page");

let chosenNumber;
let randomNumber;

startingPage.addEventListener("submit", (e) => {
	e.preventDefault();
	const warningText = document.querySelector(".warning");
	chosenNumber = startingPage.staringInput.value;
	randomNumber = Math.ceil(Math.random() * Number(chosenNumber));

	if (chosenNumber > 20 && chosenNumber <= 1000) {
		startingPage.style.display = "none";
		mainPage.style.display = "block";
	} else {
		warningText.style.visibility = "visible";
	}
});
