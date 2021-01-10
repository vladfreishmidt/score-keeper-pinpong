const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1ScoreUI = document.querySelector("#p1Score");
const p2ScoreUI = document.querySelector("#p2Score");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1ScoreUI.classList.add("winner");
      p2ScoreUI.classList.add("loser");
    }
    p1ScoreUI.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2ScoreUI.classList.add("winner");
      p1ScoreUI.classList.add("loser");
    }
    p2ScoreUI.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreUI.textContent = p1Score;
  p2ScoreUI.textContent = p2Score;
  p1ScoreUI.classList.remove("winner", "loser");
  p2ScoreUI.classList.remove("winner", "loser");
}
