"use strict";

const startingPage = document.querySelector(".starting-page");
const mainPage = document.querySelector(".game-main-page");

let randomNumber;
let chosenNumber;

const gameStarter = (randomNum, chosenNum) => {
	startingPage.addEventListener("submit", (e) => {
		e.preventDefault();

		const warningText = document.querySelector(".warning");

		chosenNumber = startingPage.staringInput.value;
		randomNumber = Math.ceil(Math.random() * Number(chosenNumber));

		if (chosenNumber > 1 && chosenNumber <= 1000) {
			startingPage.style.display = "none";
			mainPage.style.display = "block";
		} else {
			warningText.style.visibility = "visible";
		}
	});
};
