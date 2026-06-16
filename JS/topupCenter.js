// Declare
const goldBlockBtn = document.querySelector(".information .gold-block");
const topUpOverlay = document.querySelector(".topup-overlay");
const topUpWindow = document.querySelector(".topup-window");
const purchaseContainer = topUpWindow.querySelector(".purchase-container");
const confirmWindow = topUpWindow.querySelector(".confirmation");
const confirmBtn = confirmWindow.querySelector(".confirm");
const cancelBtn = confirmWindow.querySelector(".cancel");
const successfulWindow = document.querySelector(".successful");
const successfulWindowCloseBtn = successfulWindow.querySelector(".close");
// Purchase
let isTopUpCenterRendered = false;
const goldBlockAmount = document.querySelector(
  ".topup-window-inner .amount span",
);
let chosenPurchase;


// Scroll
let isDraggingTopUpCenter = false;
let hasTopUpCenterDragged = false;
let startYTopUpCenter;
// Function

function renderTopUpCenter() {
  const purchases = Object.entries(packs).filter(
    ([id, pack]) => pack.category === "gold-block-packs",
  );
  let html = "";
  purchases.forEach(([id, pack]) => {
    const cost = format(pack.cost);
    html += `
        <div data-pack-id="${id}" class="purchase">${cost}</div>
        `;
  });
  purchaseContainer.innerHTML = html;
}
function buyGoldBlock(username, amount) {
    const users = JSON.parse(localStorage.getItem("users"));
    users[username].goldBlock += amount;
    localStorage.setItem("users", JSON.stringify(users));
    validateGoldBlock();
}
function spendGoldBlock(username, amount) {
    const users = JSON.parse(localStorage.getItem("users"));
    users[username].goldBlock -= amount;
    localStorage.setItem("users", JSON.stringify(users));
    validateGoldBlock();
}
function validateGoldBlock() {
  const users = JSON.parse(localStorage.getItem("users"));
  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  const user = users[username];
  const uGoldBlock = user["goldBlock"];
  const goldBlock = document.querySelector(
    ".btns .information .gold-block .text",
  );

  goldBlock.textContent = calculatingNumber(uGoldBlock);
  goldBlockAmount.textContent = format(uGoldBlock);
}
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
function confirm(e) {
  const packId = chosenPurchase.dataset.packId;
  const pack = packs[packId];
  if (!pack) {
    return;
  }
  const receiveNumber = Number(pack.receive);
  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  buyGoldBlock(username, receiveNumber);
  confirmWindow.classList.remove("show");
  successfulWindow.classList.add("show");
  chosenPurchase = null;
}
function cancel() {
  confirmWindow.classList.remove("show");
  chosenPurchase = null;
}
function closeSuccessfulWindow() {
  successfulWindow.classList.remove("show");
}
// Event Listener
goldBlockBtn.addEventListener("click", () => {
  if (!isTopUpCenterRendered) {
    renderTopUpCenter();
    isTopUpCenterRendered = true;
  }
  validateGoldBlock();
  openTopUpCenter();
});
document.addEventListener("click", (e) => {
  const classes = e.target.classList;

  if (classes == topUpOverlay.classList) {
    closeTopUpCenter();
    return;
  }
});
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
  if (isDraggingTopUpCenter) {
    stopDragTopUpCenter();
    return;
  }
});
purchaseContainer.addEventListener("click",(e) => {
    chosenPurchase = e.target.closest(".purchase");
    confirmation();
})