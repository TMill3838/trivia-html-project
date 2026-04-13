const KEY = "transformersTrivia";

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadData() {
  return JSON.parse(localStorage.getItem(KEY)) || {
    player: "",
    highScore: 0,
    difficulty: "easy"
  };
}