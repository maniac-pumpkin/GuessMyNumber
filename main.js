"use strict";

let [chosenNumber, randomNumber, score, highestRecord] = [undefined, undefined, 20, [0]];
const startingPage = document.querySelector(".starting-page");
const mainPage = document.querySelector(".game-main-page");
const body = document.body;

const switchScreen = (status) => {
	if (status) {
		startingPage.style.display = "none";
		mainPage.style.display = "block";
	} else {
		startingPage.style.display = "flex";
		mainPage.style.display = "none";
	}
};

const statusText = document.querySelector(".status");
const statusScore = document.querySelector(".score");
const highScoreStatus = document.querySelector(".highestrecord");
const invisibleRN = document.querySelector(".thenumber");
const checkerValue = document.querySelector(".checkerinput");
const startingInput = document.querySelector(".staringinput");
const checkerBtn = document.querySelector(".checkbtn");

const freezeOrReset = (trigger) => {
	if (trigger) {
		body.style.backgroundColor = "#222831";
		statusText.innerText = "Start Guessing...";
		invisibleRN.innerText = "?";
		checkerValue.value = "";
		startingInput.value = "";
		score = 20;
		switchScreen(0);
	} else {
		checkerValue.value = "";
		checkerValue.style.pointerEvents = "none";
		checkerBtn.style.pointerEvents = "none";
	}
};

const nextStage = (num) => {
	if (num === randomNumber) {
		body.style.backgroundColor = "#9CFF2E";
		invisibleRN.innerText = randomNumber;
		statusText.innerText = "You Won";
		highestRecord.push(score);
		freezeOrReset(0);
	} else if (num > randomNumber) {
		statusText.innerText = "The number is lower";
		--score;
	} else if (num < randomNumber) {
		statusText.innerText = "The number is higher";
		--score;
	}

	if (score === 0) {
		body.style.backgroundColor = "#FF1E1E";
		statusText.innerText = "You're a loser";
		invisibleRN.innerText = randomNumber;
		freezeOrReset(0);
	}
	statusScore.innerText = score;
	highScoreStatus.innerText = Math.max(...highestRecord);
};

const doStuff = () => {
	document.querySelector(".number").innerText = chosenNumber;
	document.querySelector(".checkerinput").placeholder = `1-${chosenNumber}`;

	checkerBtn.addEventListener("click", () => {
		if (checkerValue.value) {
			nextStage(Number(checkerValue.value));
		} else {
			statusText.innerText = "Guess a number";
		}
	});
};

document.querySelector(".again-btn").addEventListener("click", () => {
	freezeOrReset(1);
});

startingPage.addEventListener("submit", (e) => {
	e.preventDefault();
	const warningText = document.querySelector(".warning");

	chosenNumber = Number(startingInput.value);
	randomNumber = Math.ceil(Math.random() * Number(chosenNumber));

	if (chosenNumber >= 20 && chosenNumber <= 1000) {
		checkerValue.value = "";
		checkerValue.style.pointerEvents = "all";
		checkerBtn.style.pointerEvents = "all";
		switchScreen(1);
		doStuff();
	} else {
		warningText.style.visibility = "visible";
	}
});
