// Declare
const mailBtn = document.querySelector(".btn.mail");
const mailWindowOverlay = document.querySelector(".mail-overlay");
const mailWindow = document.querySelector(".mail-window");
// Function
// Open Mail
function openMailWindow() {
    mailWindow.classList.add("show");
    mailWindowOverlay.classList.add("show");
    btnLayer.classList.remove("show");
}
// Close Mail
function closeMailWindow() {
    mailWindow.classList.remove("show");
    mailWindowOverlay.classList.remove("show");
    btnLayer.classList.add("show");
}

// Event Listener

mailBtn.addEventListener("click", openMailWindow);
document.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if (classes == mailWindowOverlay.classList) {
        closeMailWindow();
        return;
    }
})