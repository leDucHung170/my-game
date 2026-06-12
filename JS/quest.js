// Declare
const questBtn = document.querySelector(".btn.quest");
const questOverlay = document.querySelector(".quest-overlay");
const questWindow = document.querySelector(".quest-window");

// Function
function openQuest() {
    questOverlay.classList.add("show");
    questWindow.classList.add("show");
    btnLayer.classList.remove("show");
}
function closeQuest() {
    questOverlay.classList.remove("show");
    questWindow.classList.remove("show");
    btnLayer.classList.add("show");
}

// Event Listener
questBtn.addEventListener("click", openQuest);
document.addEventListener("click", (e) => {
    const classes = e.target.classList;
    if (classes == questOverlay.classList) {
        closeQuest();
        return;
    }
})