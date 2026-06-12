// Declare
const heroBtn = document.querySelector(".btn.hero");
const heroOverlay = document.querySelector(".hero-overlay");
const heroWindow = document.querySelector(".hero-window");
const heroContainer = document.querySelector(".hero-container");
const showQueueContainer = heroWindow.querySelector(".show-queue");
const toggleBtn = showQueueContainer.querySelector(".toggle-btn");

let isDraggingHeroContainer = false;
let hasHeroContainerDragged = false;
let startYHeroContainer;
// Function
function openHero() {
    heroOverlay.classList.add("show");
    heroWindow.classList.add("show");
    btnLayer.classList.remove("show");
    heroContainer.scrollTop = 0;
}
function closeHero() {
    heroOverlay.classList.remove("show");
    heroWindow.classList.remove("show");
    btnLayer.classList.add("show");
}
function startDragHeroContainer(e) {
    isDraggingHeroContainer = true;
    hasHeroContainerDragged = false;
    startY = e.clientY;
    startYHeroContainer = heroContainer.scrollTop
}
function dragHeroContainer(e) {
    if (!isDraggingHeroContainer) {
        return;
    }
    const dy = e.clientY - startY;
    const speed = 0.7;
    if (Math.abs(dy) > 5) {
    hasHeroContainerDragged = true;
  }
    heroContainer.scrollTop = startYHeroContainer - dy * speed;
}
function stopDragHeroContainer(e) {
    isDraggingHeroContainer = false;
}
function toggleShowQueue() {
    const isOff = toggleBtn.classList.toggle("off");
    toggleBtn.textContent = isOff ? "Off" : "On";
}

// Event Listener
showQueueContainer.addEventListener("click", toggleShowQueue);
heroBtn.addEventListener("click", openHero);
document.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if(classes == heroOverlay.classList) {
        closeHero();
        return;
    }
})
heroContainer.addEventListener("mousedown", startDragHeroContainer);
document.addEventListener("mousemove", (e) => {
    if (isDraggingHeroContainer) {
        dragHeroContainer(e);
        console.log(`return after dragHeroContainer`);
        return
    }
});
document.addEventListener("mouseup", (e) => {
    if (isDraggingHeroContainer) {
        stopDragHeroContainer(e);
        console.log(`return after stopDragHeroContainer`);
        return;
    }
})