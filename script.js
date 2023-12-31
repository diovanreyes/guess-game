"use strict";
//variable storage ========================================
let score = 10;
let guessInput = document.querySelector(".guess");
let number = document.querySelector(".number");
number = Math.trunc(Math.random() * 20 + 1);
let savedHighScoreValue = localStorage.getItem("highScore");
let highScore = 0;
console.log(number);
// functions ==============================================
const message = (msg) => {
  document.querySelector(".message").textContent = msg;
};
const funcNumber = (num) => {
  document.querySelector(".number").textContent = num;
};
const reload = () => {
  localStorage.setItem("highScore", highScore);
  location.reload();
};
const checkHandler = () => {
  if (
    !guessInput.value ||
    Number(guessInput.value) <= 0 ||
    Number(guessInput.value) > 20
  ) {
    if (!guessInput.value) {
      message("Please Input Number");
    } else {
      message("Invalid Number (1 - 20) ONLY!");
    }
  } else if (Number(guessInput.value) !== number) {
    if (score > 1) {
      message(
        score > 1 && Number(guessInput.value) > number
          ? "Too High, Try Lower Number"
          : "Too Low, Try Higher Number"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message("You Lost the Game!!!");
      funcNumber("LOOSER");
      document.querySelector(".number").style.width = "150rem";
      document.body.style.backgroundColor = "red";
    }
  } else if (Number(guessInput.value) === number) {
    message("You Are Correct! Congratulations!");

    funcNumber(`${number} AWESOME!!!`);
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "150rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
};
//=========================================================
// game conditions ==========check button=======================================================================
document.querySelector(".check").addEventListener("click", checkHandler);
//==================================================================================================================================
//AGAIN button===============================================================================================================
document.querySelector(".again").addEventListener("click", reload);
document.querySelector(".highscore").textContent = Number(savedHighScoreValue);
//clear the files in localStorage of the user===========================================
const clear = () => {
  localStorage.removeItem("highScore");
  location.reload();
};
