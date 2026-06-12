// Resize Game
const gameScreen = document.querySelector(".game-screen");

function resizeGame() {
  const scale =
    Math.min(window.innerWidth / 1920, window.innerHeight / 1080) * 0.95;
  gameScreen.style.transform = `scale(${scale})`;
}
resizeGame();
window.addEventListener("resize", resizeGame);

// Global Declare
let startX;
let startY;

const btnLayer = document.querySelector(".btns");
function format(num) {
  return num.toLocaleString("vi-VN") + " ₫";
}

// Event Listener
document.addEventListener("keydown", (e) => {
  if (e.key == "g") {
    console.log(localStorage)
  }
  if (e.key == "p") {
    localStorage.clear();
  }
  if (e.key == "b") {
    console.log(renderValueWeeklyPass());
  }
})
