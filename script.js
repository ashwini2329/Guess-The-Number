"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

/**
 * Function to change the displayed message
 * @param {*} message
 */
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

/**
 * Event Listner and Event Handler
 */
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage("⛔ No Number");
    } else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
            console.log("highScore = ", highScore);
            document.querySelector(".highscore").textContent = highScore;
        }
        displayMessage("correct number");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = "🥳";
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too LOw");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 You lost the game !");
            document.querySelector(".score").textContent = 0;
        }
    }
});

/**
 ***********************************************
 CODING CHALLENGE
 ***********************************************
 
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input
fields

4. Also restore the original background color (#222) and number width (15rem)

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

 */

/**
 **************************************
 SOLUTION
 **************************************
 */

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});