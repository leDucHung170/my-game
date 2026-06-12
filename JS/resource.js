// Declare
const resourceBar = document.querySelector(".resources");
const resourceOverlay = document.querySelector(".resource-overlay");
const resourceWindow = document.querySelector(".resource-window");
const resourceContainer = document.querySelector(".resource-container");

let isDraggingResourceContainer = false;
let hasResourceContainerDragged = false;
let startYResourceContainer;
// Function
function openResource() {
    resourceOverlay.classList.add("show");
    resourceWindow.classList.add("show");
    btnLayer.classList.remove("show");
    resourceContainer.scrollTop = 0;
}
function closeResource() {
    resourceOverlay.classList.remove("show");
    resourceWindow.classList.remove("show");
    btnLayer.classList.add("show");
}
function startDragResourceContainer(e) {
    isDraggingResourceContainer = true;
    hasResourceContainerDragged = false;
    startY = e.clientY;
    startYResourceContainer = resourceContainer.scrollTop;
}
function dragResourceContainer(e) {
    if (!isDraggingResourceContainer) {
        return
    }
    const dy = e.clientY - startY;
    const speed = 0.7;
    if (Math.abs(dy) > 5) {
    hasDragged = true;
  }
    resourceContainer.scrollTop = startYResourceContainer - dy * speed;
}
function stopDragResourceContainer(e) {
    isDraggingResourceContainer = false;
}
// Event Listener
resourceBar.addEventListener("click", openResource);
document.addEventListener("click", (e) => {
    const classes = e.target.classList;
    if (classes == resourceOverlay.classList) {
        closeResource();
        return;
    }
})
resourceContainer.addEventListener("mousedown", startDragResourceContainer);
document.addEventListener("mousemove", (e) => {
    if (isDraggingResourceContainer) {
        dragResourceContainer(e);
        console.log(`return after dragRss`);
        return
    }
});
document.addEventListener("mouseup", (e) => {
    if (isDraggingResourceContainer) {
        stopDragResourceContainer(e);
        console.log(`return after stopDragRss`);
        return;
    }
})