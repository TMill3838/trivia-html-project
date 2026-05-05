

import { questions } from "./questionData.js";
import { saveData, loadData } from "./storage.js";

// State
let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = "easy";
let gameQuestions = [];


const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("settings-form");
const gameDiv = document.getElementById("game");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restart-btn");


export function startGame(playerName, difficulty) {

    document.getElementById("login-form").style.display = "none";

    formEl.style.display = "none";
    gameDiv.style.display = "block";


    document.getElementById("display-name").textContent = playerName;
    statusEl.textContent = `Roll out & good luck, ${playerName}!`;
    restartBtn.style.display = "none";

    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = score;

    currentDifficulty = difficulty;

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const limit = (difficulty === "hard") ? 10 : 5;
    gameQuestions = shuffled.slice(0, limit);

    const existingData = loadData();

    
    saveData({ 
        player: playerName, 
        highScore: existingData.highScore, 
        difficulty: difficulty 
    });

    shuffleQuestions();
    showQuestion();
}

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const current = gameQuestions[currentQuestionIndex];
    questionEl.textContent = current.question;

    answersEl.innerHTML = "";

    current.answers.forEach(answer => {

        const col = document.createElement("div");
        col.className = "col-6 p-2";


        const btn = document.createElement("button");
        btn.className = "btn orbitron";


        const imgSrc = answer.img !== "" ? answer.img : "https://via.placeholder.com/100";

        btn.innerHTML = `
      <img src="${imgSrc}" width="100" alt="${answer.name}"><br>
      ${answer.name}
    `;

        btn.addEventListener("click", () => selectAnswer(answer));
        col.appendChild(btn);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {

        if (currentDifficulty === "hard") {
            score += 10;
        } else {
            score += 5;
        }

        scoreEl.textContent = score;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < gameQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionEl.textContent = "Game Over!";
    answersEl.innerHTML = `<p>Your final score: ${score}</p>`;
    restartBtn.style.display = "block";

    const currentData = loadData();
    if (score > currentData.highScore) {
        currentData.highScore = score;
        saveData(currentData);
        answersEl.innerHTML += `<p class="text-success mt-3 orbitron">New High Score: ${score}!</p>`;
    } else {
        answersEl.innerHTML += `<p class="text-info mt-3 orbitron">High Score: ${currentData.highScore}</p>`;
    }
}

export function goToMenu() {
    
    document.getElementById("login-form").style.display = "flex";
    formEl.style.display = "flex"; 

    
    gameDiv.style.display = "none";
    restartBtn.style.display = "none";

    
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
    
    
    const playerNameInput = document.getElementById("player-name");
    playerNameInput.value = "";
    playerNameInput.readOnly = false; 
    
    
    document.getElementById("login-error").style.display = "none";

    
    statusEl.textContent = "";
    document.body.classList.remove('theme-autobot', 'theme-decepticon');
}