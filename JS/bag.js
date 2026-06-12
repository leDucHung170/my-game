// Declare
const bagButton = document.querySelector(".btn.bag");
const bagOverlay = document.querySelector(".bag-overlay");
const bagWindow = document.querySelector(".bag-window");
const bagContainer = document.querySelector(".bag-body");

let isDraggingBagContainer = false;
let hasBagContainerDragged = false;
let startYBagContainer;
// Function
function openBag() {
    bagOverlay.classList.add("show");
    bagWindow.classList.add("show");
    btnLayer.classList.remove("show");
    bagContainer.scrollTop = 0;
}
function closeBag() {
    bagOverlay.classList.remove("show");
    bagWindow.classList.remove("show");
    btnLayer.classList.add("show")
}
function startDragBagContainer(e) {
    isDraggingBagContainer = true;
    hasBagContainerDragged = false;
    startY = e.clientY;
    startYBagContainer = bagContainer.scrollTop;
}
function dragBagContainer(e) {
    if (!isDraggingBagContainer) {
        return
    }
    const dy = e.clientY - startY;
    const speed = 0.7;
    if (Math.abs(dy) > 5) {
    hasBagContainerDragged = true;
  }
    bagContainer.scrollTop = startYBagContainer - dy * speed;
}
function stopDragBagContainer(e) {
    isDraggingBagContainer = false;
}
// Event Listener

bagButton.addEventListener("click", openBag);
document.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if(classes == bagOverlay.classList) {
        closeBag();
        return
    }
})
bagContainer.addEventListener("mousedown", startDragBagContainer);
document.addEventListener("mousemove", (e) => {
    if (isDraggingBagContainer) {
        dragBagContainer(e);
        console.log(`return after dragBag`);
        return
    }
});
document.addEventListener("mouseup", (e) => {
    if (isDraggingBagContainer) {
        stopDragBagContainer(e);
        console.log(`return after stopDragBag`);
        return;
    }
})