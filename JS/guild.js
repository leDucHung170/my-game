// Declare



const guildButton = document.querySelector(".btn.guild");
const guildWindowOverlay = document.querySelector(".guild-window-overlay");
const guildWindow = document.querySelector(".guild-window");
const guildWindowBackBtn = guildWindowOverlay.querySelector(
  ".guild-window .guild-footer .back-btn",
);
// Guild Btn Section
const warBtn = document.querySelector(".guild-btns-section .war");
const territoriesBtn = document.querySelector(
  ".guild-btns-section .territories",
);
const giftsBtn = document.querySelector(".guild-btns-section .gifts");
const trialHallBtn = document.querySelector(".guild-btns-section .trial-hall");
const techBtn = document.querySelector(".guild-btns-section .tech");
const storeBtn = document.querySelector(".guild-btns-section .store");
const vaultBtn = document.querySelector(".guild-btns-section .vault");
const helpBtn = document.querySelector(".guild-btns-section .help");
const membersBtn = document.querySelector(".guild-btns-section .members");
const rankingsBtn = document.querySelector(".guild-btns-section .rankings");
const allBtns = document.querySelector(".guild-btns-section .btn-2");
// Overlay
const warOverlay = document.querySelector(".war-overlay");
const territoriesOverlay = document.querySelector(".territories-overlay");
const giftsOverlay = document.querySelector(".gifts-overlay");
const trialHallOverlay = document.querySelector(".trialHall-overlay");
const techOverlay = document.querySelector(".tech-overlay");
const storeOverlay = document.querySelector(".store-overlay");
const vaultOverlay = document.querySelector(".vault-overlay");
const helpOverlay = document.querySelector(".help-overlay");
const membersOverlay = document.querySelector(".members-overlay");
const rankingsOverlay = document.querySelector(".rankings-overlay");
const guildBtnsSection = document.querySelector(".guild-btns-section");
const overlays = [
  warOverlay,
  territoriesOverlay,
  giftsOverlay,
  trialHallOverlay,
  techOverlay,
  storeOverlay,
  vaultOverlay,
  helpOverlay,
  membersOverlay,
  rankingsOverlay,
];

// Function
// Open Guild
function openGuildWindow() {
  guildWindowOverlay.classList.add("show");
  guildWindow.classList.add("show");
  btnLayer.classList.remove("show");
  guildBtnsSection.scrollTop = 0;
}
// Close Guild
function closeGuildWindow() {
  guildWindowOverlay.classList.remove("show");
  guildWindow.classList.remove("show");
  btnLayer.classList.add("show");
}
// Scroll Guild Btn Section
let isDraggingGuildSection = false;
let hasGuildSectionDragged = false;

let startYGuildSection;
function startDragGuildSection(e) {
  isDraggingGuildSection = true;
  hasGuildSectionDragged = false;
  startY = e.clientY;
  startYGuildSection = guildBtnsSection.scrollTop;
}
function dragGuildSection(e) {
  if (!isDraggingGuildSection) {
    return;
  }

  const dy = e.clientY - startY;
  const speed = 0.7;
  if (Math.abs(dy) > 5) {
    hasGuildSectionDragged = true;
  }
  guildBtnsSection.scrollTop = startYGuildSection - dy * speed;
}

function stopDragGuildSection(e) {
  isDraggingGuildSection = false;
}
// Open War Overlay
function openWar(div) {
  warOverlay.classList.add("show");
}
// Close War Overlay
function closeWar(div) {
  warOverlay.classList.remove("show");
}
// Open Territories Overlay
function openTerritories() {
  territoriesOverlay.classList.add("show");
}
// Close Territories Overlay
function closeTerritories() {
  territoriesOverlay.classList.remove("show");
}
// Open Gifts Overlay
function openGifts() {
  giftsOverlay.classList.add("show");
}
// Close Gifts Overlay
function closeGifts() {
  giftsOverlay.classList.remove("show");
}
// Open Trial Hall Overlay
function openTrialHall() {
  trialHallOverlay.classList.add("show");
}
// Close Trial Hall Overlay
function closeTrialHall() {
  trialHallOverlay.classList.remove("show");
}
// Open Tech Overlay
function openTech() {
  techOverlay.classList.add("show");
}
// Close Tech Overlay
function closeTech() {
  techOverlay.classList.remove("show");
}
// Open Store
function openStore() {
  storeOverlay.classList.add("show");
}
// Close Store
function closeStore() {
  storeOverlay.classList.remove("show");
}
// Open Vault
function openVault() {
  vaultOverlay.classList.add("show");
}
// Close Vault
function closeVault() {
  vaultOverlay.classList.remove("show");
}
// Open Help
function openHelp() {
  helpOverlay.classList.add("show");
}
// Close Help
function closeHelp() {
  helpOverlay.classList.remove("show");
}
// Open Members
function openMembers() {
  membersOverlay.classList.add("show");
}
// Close Members
function closeMembers() {
  membersOverlay.classList.remove("show");
}
// Open Rankings
function openRankings() {
  rankingsOverlay.classList.add("show");
}
function closeRankings() {
  rankingsOverlay.classList.remove("show");
}

// EventListener
// Scroll Guild Btns Section
guildBtnsSection.addEventListener("mousedown", startDragGuildSection);
document.addEventListener("mousemove", (e) => {
  if (isDraggingGuildSection) {
    dragGuildSection(e);
    return;
  }

});
document.addEventListener("mouseup", () => {
  if (isDraggingGuildSection) {
    stopDragGuildSection();
    return;
  }
});

// Open-
guildButton.addEventListener("click", openGuildWindow);
warBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openWar();
  }
});
territoriesBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openTerritories();
  }
});
giftsBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
   return
  }
  else {
    openGifts()
  }
});
trialHallBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openTrialHall()
  }
});
techBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openTech()
  }
});
storeBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openStore()
  }
});
vaultBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openVault()
  }
});
helpBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openHelp()
  }
});
membersBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openMembers()
  }
});
rankingsBtn.addEventListener("click", () => {
  if (hasGuildSectionDragged) {
    return
  }
  else {
    openRankings();
  }
});

// Close-
document.addEventListener("click", (e) => {
  const classes = e.target.classList;
  //   Guild Window
  if (classes == guildWindowOverlay.classList) {
    closeGuildWindow();
    return;
  }
  //   War Window
  if (classes == warOverlay.classList) {
    closeWar();
    return;
  }
  //   Territories Window
  if (classes == territoriesOverlay.classList) {
    closeTerritories();
    return;
  }
  //   Gift Window
  if (classes == giftsOverlay.classList) {
    closeGifts();
    return;
  }
  //   Trial Hall
  if (classes == trialHallOverlay.classList) {
    closeTrialHall();
    return;
  }
  //   Tech
  if (classes == techOverlay.classList) {
    closeTech();
    return;
  }
  // Store
  if (classes == storeOverlay.classList) {
    closeStore();
    return;
  }
  // Vault
  if (classes == vaultOverlay.classList) {
    closeVault();
    return;
  }
  // Help
  if (classes == helpOverlay.classList) {
    closeHelp();
    return;
  }
  // Members
  if (classes == membersOverlay.classList) {
    closeMembers();
    return;
  }
  // Rankings
  if (classes == rankingsOverlay.classList) {
    closeRankings();
    return;
  } else {
    console.log(e.target);
    return;
  }
});
// Close- by Back Btn of Each
overlays.forEach((overlay) => {
  const backBtn = overlay.querySelector(".back-btn");
  backBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    return;
  });
});
guildWindowBackBtn.addEventListener("click", closeGuildWindow);

// Test
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() == "a") {
    console.log(`a`);
  }
});
