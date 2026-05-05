import { loadData } from "./storage.js";

export function initLogin() {
    const loginForm = document.getElementById("login-form");
    const settingsForm = document.getElementById("settings-form");
    const errorMsg = document.getElementById("login-error");
    const playerNameInput = document.getElementById("player-name");
    const statusEl = document.getElementById("status");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const user = document.getElementById("login-username").value;
        const pass = document.getElementById("login-password").value;

        
        const isMegatron = (user === "Decepticon" && pass === "PeaceThroughTyranny");
        const isAutobot = (user === "Autobot" && pass === "TillAllAreOne");

        if (isMegatron || isAutobot) {
            
            loginForm.style.display = "none";
            settingsForm.style.display = "flex"; 
            
            
            playerNameInput.value = user;
            playerNameInput.readOnly = true;

            
            const savedData = loadData();
            if (isMegatron) {
                statusEl.textContent = `Welcome back, Mighty Decepticon. High Score: ${savedData.highScore}`;
            } else {
                statusEl.textContent = `Welcome back, Heroic Autobot. High Score: ${savedData.highScore}`;
            }
        } else {
            errorMsg.style.display = "block";
        }
    });
}
