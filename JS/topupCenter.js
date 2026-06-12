// Declare
const goldBlockBtn = document.querySelector(".information .gold-block");
const topUpOverlay =document.querySelector(".topup-overlay");
const topUpWindow = document.querySelector(".topup-window");
const purchaseContainer = topUpWindow.querySelector(".purchase-container");
const confirmWindow = document.querySelector(".confirmation");
const confirmBtn = confirmWindow.querySelector(".confirm");
const cancelBtn = confirmWindow.querySelector(".cancel");
const successfulWindow = document.querySelector(".successful");
const successfulWindowCloseBtn = successfulWindow.querySelector(".close");
// Purchase
let amount;
const goldBlockAmount = document.querySelector(".topup-window-inner .amount span");
// Scroll
let isDraggingTopUpCenter = false;
let hasTopUpCenterDragged = false;
let startYTopUpCenter;
// Function
function startDragTopUpCenter(e) {
    isDraggingTopUpCenter = true;
    hasGuildSectionDragged = false;
    startY = e.clientY;
    startYTopUpCenter = purchaseContainer.scrollTop;
}
function dragTopUpCenter(e) {
    if (!isDraggingTopUpCenter) {
        return;
    }
    const dy = e.clientY - startY;
    const speed = 0.6;
    if (Math.abs(dy) > 5) {
        hasTopUpCenterDragged = true;
    }
    purchaseContainer.scrollTop = startYTopUpCenter - dy * speed;
}
function stopDragTopUpCenter(e) {
    isDraggingTopUpCenter = false;
}
function openTopUpCenter() {
    topUpOverlay.classList.add("show");
    topUpWindow.classList.add("show");
    btnLayer.classList.remove("show");
    purchaseContainer.scrollTop = 0;
}
function closeTopUpCenter() {
    topUpOverlay.classList.remove("show");
    topUpWindow.classList.remove("show");
    btnLayer.classList.add("show");
}


function confirmation() {
    confirmWindow.classList.add("show");
}
function confirm() {
    let number = Number(goldBlockAmount.textContent);
    number += amount;
    goldBlockAmount.textContent = `${number}.0`;
    confirmWindow.classList.remove("show");
    successfulWindow.classList.add("show");
}
function cancel() {
    confirmWindow.classList.remove("show")
}
function closeSuccessfulWindow() {
    successfulWindow.classList.remove("show")
}
// Event Listener
goldBlockBtn.addEventListener("click", openTopUpCenter);
document.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if (classes == topUpOverlay.classList) {
        closeTopUpCenter();
        return;
    }
})
confirmBtn.addEventListener("click", confirm);
cancelBtn.addEventListener("click", cancel);
successfulWindowCloseBtn.addEventListener("click", closeSuccessfulWindow);
// Scroll By Dragging
purchaseContainer.addEventListener("mousedown", startDragTopUpCenter);
document.addEventListener("mousemove", (e) => {
    if (isDraggingTopUpCenter) {
        dragTopUpCenter(e);
        return;
    }
});
document.addEventListener("mouseup", () => {
    if(isDraggingTopUpCenter) {
        stopDragTopUpCenter();
        return;
    }
})