// Declare
const bagButton = document.querySelector(".btn.bag");
const bagOverlay = document.querySelector(".bag-overlay");
const bagWindow = document.querySelector(".bag-window");
const bagContainer = document.querySelector(".bag-body");
const bagCategory = document.querySelector(".bag-category");

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
  btnLayer.classList.add("show");
}
function startDragBagContainer(e) {
  isDraggingBagContainer = true;
  hasBagContainerDragged = false;
  startY = e.clientY;
  startYBagContainer = bagContainer.scrollTop;
}
function dragBagContainer(e) {
  if (!isDraggingBagContainer) {
    return;
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

// Render Bag
function renderItems(username, category) {
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users[username];
  const userItems = user["item"];
  if (!userItems) {
    console.error("Missing category:", category);
    return ``;
  }
  return Object.entries(userItems)
    .map(([itemId, amount]) => {
      const item = items[itemId];
      const amounts = calculatingNumber(amount);
      if (!item) {
        console.error("Missing Item:", itemId);
        return `
            <div class="item uncommon">
            <img draggable="false" class="img" src="">
            <p class="amount">0</p>
            </div>
            `;
      }
      return `
        <div data-item-id="${itemId}" class="item ${item.rarity}">
            <img draggable="false" class="img" src="${item.image}">
             <p class="amount">${amounts}</p>
        </div>
        `;
    })
    .join("");
}
function renderBag(username, category) {
  const contents = renderItems(username, category);
  bagContainer.innerHTML = contents;
}
// Event Listener
bagCategory.addEventListener("click", (e) => {
  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  const category = e.target.id;
  renderBag(username, category);
});
bagButton.addEventListener("click", () => {
  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  renderBag(username, "item");
  openBag();
});

document.addEventListener("click", (e) => {
  const classes = e.target.classList;

  if (classes == bagOverlay.classList) {
    closeBag();
    return;
  }
});
bagContainer.addEventListener("mousedown", startDragBagContainer);
document.addEventListener("mousemove", (e) => {
  if (isDraggingBagContainer) {
    dragBagContainer(e);
    console.log(`return after dragBag`);
    return;
  }
});
document.addEventListener("mouseup", (e) => {
  if (isDraggingBagContainer) {
    stopDragBagContainer(e);
    console.log(`return after stopDragBag`);
    return;
  }
});
