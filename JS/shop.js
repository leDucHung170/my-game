//  Declare
const shopBtn = document.querySelector(".shop-btn");
const shopOverlay = document.querySelector(".shop-overlay");
const shopWindow = document.querySelector(".shop-window");
const shopSection = document.querySelector(".shop-window-footer");

const dailySpecialBtn = shopSection.querySelector("#daily-special");
const dailySpecialContainer = shopWindow.querySelector(".daily-special");
const heroicOfferBtn = shopSection.querySelector("#heroic-offer");
const heroicOfferContainer = shopWindow.querySelector(".heroic-offer");
const dailyPackBtn = shopSection.querySelector("#daily-packs");
const dailyPackContainer = shopWindow.querySelector(".daily-packs");
const dailyPackContent = dailyPackContainer.querySelector(".packs-container");
const weeklyPackBtn = shopSection.querySelector("#weekly-packs");
const weeklyPackContainer = shopWindow.querySelector(".weekly-packs");
const weeklyContent = weeklyPackContainer.querySelector(".packs-container");
const customWeeklyPassBtn = shopSection.querySelector("#custom-weekly-pass");
const customWeeklyPassContainer = shopWindow.querySelector(
  ".custom-weekly-pass",
);
const diamondStoreBtn = shopSection.querySelector("#diamond-store");
const diamondStoreContainer = shopWindow.querySelector(".diamond-store");
const diamondStoreContent = diamondStoreContainer.querySelector(".container");
const permanentPrivilegeBtn = shopSection.querySelector("#permanent-privilege");
const permanentPrivilegeContainer = shopWindow.querySelector(
  ".permanent-privilege",
);
const monthlyPrivilegesBtn = shopSection.querySelector("#monthly-privileges");
const monthlyPrivilegesContainer = shopWindow.querySelector(
  ".monthly-privileges",
);
const allSectionBtns = [
  dailySpecialBtn,
  heroicOfferBtn,
  dailyPackBtn,
  weeklyPackBtn,
  customWeeklyPassBtn,
  diamondStoreBtn,
  permanentPrivilegeBtn,
  monthlyPrivilegesBtn,
];
const allSectionContainers = [
  dailySpecialContainer,
  heroicOfferContainer,
  dailyPackContainer,
  weeklyPackContainer,
  customWeeklyPassContainer,
  diamondStoreContainer,
  permanentPrivilegeContainer,
  monthlyPrivilegesContainer,
];

// Load Shop data
let packs;
let items;
async function loadPacks() {
  const [packsResponse, itemsResponse] = await Promise.all([
    fetch("data/packs.json"),
    fetch("data/items.json"),
  ]);
  packs = await packsResponse.json();
  items = await itemsResponse.json();
}
loadPacks();
let chosenPack = null;
let isShopRendered = false;
// Render
function createReceiveHTML(receive) {
  return Object.entries(receive)
    .map(([itemId, amount]) => {
      const item = items[itemId];
      const amounts = calculatingNumber(amount);
      if (!item) {
        console.error("Missing item:", itemId);
        return `
      <div class="item">
      <img draggable="false" class="img" src="">
      <span class="amount">000</span>
      </div>
      `;
      }
      return `
  <div data-item-id="${itemId}" class="item ${item.rarity}">
  <img draggable="false" class="img" src="${item.image}">
  <span class="amount">${amounts}</span>
  </div>
  `;
    })
    .join("");
}
// Diamond Store
function renderDiamondStore() {
  const diamondPacks = Object.entries(packs).filter(
    ([id, pack]) => pack.category === "diamond-packs",
  );
  let html = "";
  diamondPacks.forEach(([id, pack]) => {
    const cost = format(pack.cost);
    html += `
    <div class="pack" data-pack-id="${id}">
      <div class="text">${pack.name}</div>
      <img draggable="false" class="img" src="${pack.image}"/>
      <div class="buy-btn">${cost}</div>
      </div>
      `;
  });
  diamondStoreContent.innerHTML = html;
}
// Daily Packs
function renderDailyPacks() {
  const dailyPacks = Object.entries(packs).filter(
    ([id, pack]) => pack.category === "daily",
  );
  let html = "";
  dailyPacks.forEach(([id, pack]) => {
    const receiveHTML = createReceiveHTML(pack.receive);
    const cost = format(pack.cost);
    html += `
    <div class="pack" data-pack-id="${id}">
      <img draggable="false" class="img" src="${pack.image}" alt="${pack.name}"/>
      <div class="name">${pack.name}</div>
      <div class="content">${receiveHTML}</div>
      <div class="buy-btn">${cost}</div>
    </div>
    `;
  });
  dailyPackContent.innerHTML = html;
}
// Weekly Packs
function renderWeeklyPacks() {
  const weeklyPacks = Object.entries(packs).filter(
    ([id, pack]) => pack.category === "weekly",
  );
  let html = "";
  weeklyPacks.forEach(([id, pack]) => {
    const receiveHTML = createReceiveHTML(pack.receive);
    const cost = format(pack.cost);
    html += `
    <div class="pack" data-pack-id="${id}">
      <img draggable="false" class="img" src="${pack.image}" alt="${pack.name}"/>
      <div class="availability">Availability: <span>${pack.availability}</span></div>
      <div class="name">${pack.name}</div>
      <div class="content">${receiveHTML}</div>
      <div class="buy-btn">${cost}</div>
    </div>
    `;
  });
  weeklyContent.innerHTML = html;
}
// Custom Weekly Pass
function renderValueWeeklyPass() {
  const pack = packs["value-weekly-pass"];

  const instantlyHTML = createReceiveHTML(pack.receive.instantly);
  const dailyHTML = createReceiveHTML(pack.receive.daily);
  const cost = format(pack.cost);

  const instantlyContainer = document.querySelector(
    ".custom-weekly-pass .pack.silver .instantly .container",
  );
  const dailyContainer = customWeeklyPassContainer.querySelector(
    ".custom-weekly-pass .pack.silver .daily-reward .container",
  );
  const valueBuyBtn = customWeeklyPassContainer.querySelector(
    ".custom-weekly-pass .pack.silver .buy-btn",
  );
  instantlyContainer.innerHTML = instantlyHTML;
  dailyContainer.innerHTML = dailyHTML;
  valueBuyBtn.textContent = cost;
}
function renderDeluxeWeeklyPass() {
  const pack = packs["deluxe-weekly-pass"];

  const instantlyHTML = createReceiveHTML(pack.receive.instantly);
  const dailyHTML = createReceiveHTML(pack.receive.daily);
  const cost = format(pack.cost);

  const instantlyContainer = customWeeklyPassContainer.querySelector(
    ".custom-weekly-pass .pack.golden .instantly .container",
  );
  const dailyContainer = customWeeklyPassContainer.querySelector(
    ".custom-weekly-pass .pack.golden .daily-reward .container",
  );
  const deluxeBuyBtn = customWeeklyPassContainer.querySelector(
    ".custom-weekly-pass .pack.golden .buy-btn",
  );
  instantlyContainer.innerHTML = instantlyHTML;
  dailyContainer.innerHTML = dailyHTML;
  deluxeBuyBtn.textContent = cost;
}
function renderPermanentPrivilege() {
  const pack = packs["permanent-privilege"];

  const getNowHTML = createReceiveHTML(pack.receive["get-now"]);
  const dailyGiftHTML = createReceiveHTML(pack.receive["daily-gift"]);
  const cost = format(pack.cost);

  const getNowContainer = permanentPrivilegeContainer.querySelector(".get-now");
  const dailyGiftContainer =
    permanentPrivilegeContainer.querySelector(".daily-gift");
  const buyBtn = permanentPrivilegeContainer.querySelector(".buy-btn");

  getNowContainer.innerHTML += getNowHTML;
  dailyGiftContainer.innerHTML += dailyGiftHTML;
  buyBtn.textContent = cost;
}
function renderMonthlyPrivileges() {
  const pack = packs["monthly-pass"];

  const getNowHTML = createReceiveHTML(pack.receive["get-now"]);
  const dailyGiftHTML = createReceiveHTML(pack.receive["daily-gift"]);
  const cost = format(pack.cost);

  const getNowContainer = monthlyPrivilegesContainer.querySelector(".get-now");
  const dailyGiftContainer =
    monthlyPrivilegesContainer.querySelector(".daily-gift");
  const buyBtn = monthlyPrivilegesContainer.querySelector(".buy-btn");

  getNowContainer.innerHTML += getNowHTML;
  dailyGiftContainer.innerHTML += dailyGiftHTML;
  buyBtn.textContent = cost;
}
// Drag
let isDraggingShopSection = false;
let hasShopSectionDragged = false;
let startXShopSection;

let isDraggingDailyContent = false;
let hasDailyContentDragged = false;
let startYDailyContent;

let isDraggingWeeklyContent = false;
let hasWeeklyContentDragged = false;
let startYWeeklyContent;

let isDraggingDiamondStoreContent = false;
let hasDiamondStoreContent = false;
let startYDiamondStoreContent;
// Function
function openShop() {
  btnLayer.classList.remove("show");
  shopOverlay.classList.add("show");
  shopWindow.classList.add("show");
  shopSection.scrollLeft = 0;
}
function closeShop() {
  btnLayer.classList.add("show");
  shopOverlay.classList.remove("show");
  shopWindow.classList.remove("show");
}
// Drag footer bar
function startDragShopSection(e) {
  isDraggingShopSection = true;
  hasShopSectionDragged = false;
  startX = e.clientX;
  startXShopSection = shopSection.scrollLeft;
}
function dragShopSection(e) {
  if (!isDraggingShopSection) {
    return;
  }
  const dx = e.clientX - startX;
  const speed = 1;
  if (Math.abs(dx) > 5) {
    hasShopSectionDragged = true;
  }
  shopSection.scrollLeft = startXShopSection - dx * speed;
}
function stopDragShopSection(e) {
  isDraggingShopSection = false;
}
// Drag Daily Content
function startDragDailyContent(e) {
  isDraggingDailyContent = true;
  hasDailyContentDragged = false;
  startY = e.clientY;
  startYDailyContent = dailyPackContent.scrollTop;
}
function dragDailyContent(e) {
  if (!isDraggingDailyContent) {
    return;
  }
  const dy = e.clientY - startY;
  const speed = 0.9;
  if (Math.abs(dy) > 5) {
    hasDailyContentDragged = true;
  }
  dailyPackContent.scrollTop = startYDailyContent - dy * speed;
}
function stopDragDailyContent(e) {
  isDraggingDailyContent = false;
}
// Drag Weekly Content
function startDragWeeklyContent(e) {
  isDraggingWeeklyContent = true;
  hasWeeklyContentDragged = false;
  startY = e.clientY;
  startYWeeklyContent = weeklyContent.scrollTop;
}
function dragWeeklyContent(e) {
  if (!isDraggingWeeklyContent) {
    return;
  }
  const dy = e.clientY - startY;
  const speed = 0.9;
  if (Math.abs(dy) > 5) {
    hasWeeklyContentDragged = true;
  }
  weeklyContent.scrollTop = startYWeeklyContent - dy * speed;
}
function stopDragWeeklyContent(e) {
  isDraggingWeeklyContent = false;
}
// Drag Diamond Store Content
function startDragDiamondStoreContent(e) {
  isDraggingDiamondStoreContent = true;
  hasDiamondStoreContent = false;
  startY = e.clientY;
  startYDiamondStoreContent = diamondStoreContent.scrollTop;
}
function dragDiamondStoreContent(e) {
  if (!isDraggingDiamondStoreContent) {
    return;
  }
  const dy = e.clientY - startY;
  const speed = 0.9;
  if (Math.abs(dy) > 5) {
    hasDiamondStoreContent = true;
  }
  diamondStoreContent.scrollTop = startYDiamondStoreContent - dy * speed;
}
function stopDragDiamondStoreContent(e) {
  isDraggingDiamondStoreContent = false;
}
// Unselect
function unselected() {
  allSectionBtns.forEach((btn) => {
    btn.classList.remove("selected");
  });
  allSectionContainers.forEach((container) => {
    container.classList.remove("show");
  });
}
// Open
function dailySpecial() {
  dailySpecialContainer.classList.add("show");
  dailySpecialBtn.classList.add("selected");
}
function heroicOffer() {
  heroicOfferBtn.classList.add("selected");
  heroicOfferContainer.classList.add("show");
}
function dailyPacks() {
  dailyPackBtn.classList.add("selected");
  dailyPackContainer.classList.add("show");
}
function weeklyPacks() {
  weeklyPackBtn.classList.add("selected");
  weeklyPackContainer.classList.add("show");
}
function customWeeklyPass() {
  customWeeklyPassBtn.classList.add("selected");
  customWeeklyPassContainer.classList.add("show");
}
function diamondStore() {
  diamondStoreBtn.classList.add("selected");
  diamondStoreContainer.classList.add("show");
}
function permanentPrivilege() {
  permanentPrivilegeBtn.classList.add("selected");
  permanentPrivilegeContainer.classList.add("show");
}
function monthlyPrivileges() {
  monthlyPrivilegesBtn.classList.add("selected");
  monthlyPrivilegesContainer.classList.add("show");
}
// EventListener
shopBtn.addEventListener("click", () => {
  if (!isShopRendered) {
    renderDailyPacks();
    renderWeeklyPacks();
    renderValueWeeklyPass();
    renderDeluxeWeeklyPass();
    renderPermanentPrivilege();
    renderDiamondStore();
    renderMonthlyPrivileges();
    isShopRendered = true;
  }
  openShop();
});
document.addEventListener("click", (e) => {
  const classes = e.target.classList;

  if (classes == shopOverlay.classList) {
    closeShop();
    return;
  }
});
shopSection.addEventListener("wheel", (e) => {
  e.preventDefault();
  shopSection.scrollLeft += e.deltaY * 0.3;
});
// Scroll
// Footer Bar
shopSection.addEventListener("mousedown", startDragShopSection);
document.addEventListener("mousemove", (e) => {
  if (isDraggingShopSection) {
    dragShopSection(e);
    console.log(`return after dragShop`);
    return;
  }
});
document.addEventListener("mouseup", (e) => {
  if (isDraggingShopSection) {
    stopDragShopSection(e);
    console.log(`return after stopDragShop`);
    return;
  }
});
// Daily Pack Content
dailyPackContent.addEventListener("mousedown", startDragDailyContent);
document.addEventListener("mousemove", (e) => {
  if (isDraggingDailyContent) {
    dragDailyContent(e);
    return;
  }
});
document.addEventListener("mouseup", (e) => {
  if (isDraggingDailyContent) {
    stopDragDailyContent(e);
    return;
  }
});
// Weekly Pack Content
weeklyContent.addEventListener("mousedown", startDragWeeklyContent);
document.addEventListener("mousemove", (e) => {
  if (isDraggingWeeklyContent) {
    dragWeeklyContent(e);
    return;
  }
});
document.addEventListener("mouseup", (e) => {
  if (isDraggingWeeklyContent) {
    stopDragWeeklyContent(e);
    return;
  }
});
// Diamond Store Content
diamondStoreContent.addEventListener("mousedown", startDragDiamondStoreContent);
document.addEventListener("mousemove", (e) => {
  if (isDraggingDiamondStoreContent) {
    dragDiamondStoreContent(e);
    return;
  }
});
document.addEventListener("mouseup", (e) => {
  if (isDraggingDiamondStoreContent) {
    stopDragDiamondStoreContent(e);
    return;
  }
});
// Section Btns
dailySpecialBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    dailySpecial();
  }, 100);
});
heroicOfferBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    heroicOffer();
  }, 100);
});
dailyPackBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    dailyPacks();
  }, 100);
});
weeklyPackBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    weeklyPacks();
  }, 100);
});
customWeeklyPassBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    customWeeklyPass();
  }, 100);
});
diamondStoreBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    diamondStore();
  }, 100);
});
permanentPrivilegeBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    permanentPrivilege();
  }, 100);
});
monthlyPrivilegesBtn.addEventListener("click", () => {
  unselected();
  setTimeout(() => {
    monthlyPrivileges();
  }, 100);
});

// Buy Packs
const shopConfirmationOverlay = shopOverlay.querySelector(
  ".confirmation-overlay",
);
const shopConfirmWindow = shopOverlay.querySelector(".confirmation");
const consume = shopConfirmWindow.querySelector(".inner .cost");
const shopCancelBtn = shopConfirmWindow.querySelector(".cancel");
const shopConfirmBtn = shopConfirmWindow.querySelector(".confirm");

function shopConfirmation() {
  shopConfirmationOverlay.classList.add("show");
  shopConfirmWindow.classList.add("show");
}
function shopCancel() {
  shopConfirmationOverlay.classList.remove("show");
  shopConfirmWindow.classList.remove("show");
  chosenPack = null;
}
function shopConfirm() {
  const packId = chosenPack.dataset.packId;
  const pack = packs[packId];
  if (!pack) {
    return;
  }
  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  const users = JSON.parse(localStorage.getItem("users"));
  buyPack(username, packId);
  shopConfirmWindow.classList.remove("show");
  shopConfirmationOverlay.classList.remove("show");
  chosenPack = null;
}
shopConfirmBtn.addEventListener("click", shopConfirm);
shopCancelBtn.addEventListener("click", shopCancel);
shopWindow.addEventListener("click", (e) => {
  const users = JSON.parse(localStorage.getItem("users"));

  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  if (e.target.classList == "buy-btn") {
    chosenPack = e.target.closest(".pack");
    const pack = packs[chosenPack.dataset.packId];
    consume.textContent = format(pack.cost);
    shopConfirmBtn.style.background = "";
    shopConfirmBtn.style.pointerEvents = "auto";
    consume.style.color = "";
    if (users[username]["goldBlock"] < pack.cost) {
      shopConfirmBtn.style.background = "grey";
      shopConfirmBtn.style.pointerEvents = "none";
      consume.style.color = "red";
    }
    shopConfirmation();
    return;
  }
});
function addItem(username, itemId, amount) {
  const users = JSON.parse(localStorage.getItem("users"));
  const bag = users[username].bag;
  const category = items[itemId].category;

  // In case category doesn't exist
  if (!bag[category]) {
    bag[category] = {};

  }
  // In case item doesn't exist
  if (!bag[category][itemId]) {
    bag[category][itemId] = 0;
  }
  // Add item
  bag[category][itemId] += amount;

  localStorage.setItem("users", JSON.stringify(users));
}
function buyPack(username, packId) {
  const pack = packs[packId];
  const packCost = pack.cost;
  const receives = pack.receive;
  Object.entries(receives).map(([itemId, amount]) => {
    addItem(username, itemId, amount);
  });
  spendGoldBlock(username, packCost);
}
