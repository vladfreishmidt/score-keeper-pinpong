const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Score"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Score"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
