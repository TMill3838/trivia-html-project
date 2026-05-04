import { startGame, goToMenu } from "./trivia.js";
import { initLogin } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
    initLogin(); 

    const form = document.getElementById("settings-form");
    const restartBtn = document.getElementById("restart-btn");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("settings-form");
    const restartBtn = document.getElementById("restart-btn");

    let currentPlayer = "";
    let currentDifficulty = "";

    form.addEventListener("submit", (e) => {
        e.preventDefault();


        currentPlayer = document.getElementById("player-name").value;
        currentDifficulty = document.getElementById("difficulty").value;

        const body = document.body;
        body.classList.remove('theme-autobot', 'theme-decepticon');

        if (currentPlayer.toLowerCase() === "autobot") {
            body.classList.add('theme-autobot');
        } else if (currentPlayer.toLowerCase() === "decepticon") {
            body.classList.add('theme-decepticon');
        }


        startGame(currentPlayer, currentDifficulty);
    });

    restartBtn.addEventListener("click", () => {
        if (currentPlayer) {
            goToMenu();
        }
    });
});