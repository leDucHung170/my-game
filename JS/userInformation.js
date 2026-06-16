// Declare
const informationBtn = document.querySelector(".information .avatar");
const informationOverlay = document.querySelector(".user-information-overlay");
const informationWindow = document.querySelector(".user-information-window");

// Function
function openUserInformation() {
    informationOverlay.classList.add("show");
    informationWindow.classList.add("show");
    btnLayer.classList.remove("show");
}
function closeUserInformation() {
    informationOverlay.classList.remove("show");
    informationWindow.classList.remove("show");
    btnLayer.classList.add("show");
}

// Event Listener
informationBtn.addEventListener("click", () => {
    openUserInformation();
});
document.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if (classes == informationOverlay.classList) {
        closeUserInformation();
        return;
    }
})