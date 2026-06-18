// Declare
const vipBtn = document.querySelector(".information .vip");
const vipOverlay = document.querySelector(".vip-overlay");
const vipWindow = document.querySelector(".vip-window");
const leftBtn = vipWindow.querySelector(".left-btn");
const rightBtn = vipWindow.querySelector(".right-btn");
const privileges = vipWindow.querySelector(".privileges");
const privilegesContainers = privileges.querySelectorAll(".privileges-container");


// Load vip data
let vips;

async function loadVips() {
  const response = await fetch("data/vips.json");
  vips = await response.json();
}
loadVips();
let isVipRendered = false;
// Function
function openVip() {
  vipOverlay.classList.add("show");
  vipWindow.classList.add("show");
  btnLayer.classList.remove("show");
  validateVip();
  if (!isVipRendered) {
    renderVip();
    isVipRendered = true;
  }
}
function closeVip() {
  vipOverlay.classList.remove("show");
  vipWindow.classList.remove("show");
  btnLayer.classList.add("show");
}
function createPrivilegesHTML(privileges) {
 return Object.entries(privileges)
 .map(([name,value]) => {
  return `
  <div>
  <span>${name}</span>
  <span>${value}</span>
  </div>
  `
 })
 .join("");
}
function renderVip() {
    let html = "";
  Object.entries(vips).forEach(([vipId, vip]) => {
    const privilegesHTML =  createPrivilegesHTML(vip.privileges);
    html += `
    <div class="${vip.class}">
      <h2>${vip.name} (Accumulated activated effects)</h2>
      <div class="privileges-container">${privilegesHTML}</div>
    </div>
    `;
  });
  privileges.innerHTML = html;
}
function validateVip() {
  const vipLevel = vipWindow.querySelector(".vip-window-inner .vip-level span");
  const vipBtnLevel = document.querySelector(".information .vip .text span");
  const vipProgressNumber = vipWindow.querySelector(".vip-window-inner .vip-progress-bar .number");
  const vipProgressContainer = vipWindow.querySelector(".vip-window-inner .vip-progress-bar .progress");

  const users = JSON.parse(localStorage.getItem("users"));
  const username = document
    .querySelector(".user-information-window .information-container .username")
    .textContent.toLowerCase();
  const uVip = users[username].vipProgress
  const uVipLv = users[username].vipLevel;
  const currVip = vips[`vip-${uVipLv}`];


    vipBtnLevel.textContent = uVipLv
    vipLevel.textContent = uVipLv;
    vipProgressNumber.textContent = `${uVip}/${currVip.nextLevel}`
    vipProgressContainer.style.width = (uVip / currVip.nextLevel) * 100 + "%";

    if ( uVip >= currVip.nextLevel) {
      users[username].vipLevel += 1;
      localStorage.setItem("users", JSON.stringify(users));
      validateVip();
    }

}
function useVipPoints(username, amount) {
  const users = JSON.parse(localStorage.getItem("users"));
  users[username].vipProgress += amount;
  localStorage.setItem("users", JSON.stringify(users));
  validateVip();
}
// Event Listener
vipBtn.addEventListener("click", openVip);
document.addEventListener("click", (e) => {
  const classes = e.target.classList;

  if (classes == vipOverlay.classList) {
    closeVip();
    return;
  }
});
leftBtn.addEventListener("click", () => {
  privileges.scrollLeft -= 526;
  privilegesContainers.forEach((c) => {
    c.scrollTop = 0;
  });
  return;
});
rightBtn.addEventListener("click", () => {
  privileges.scrollLeft += 526;
  privilegesContainers.forEach((c) => {
    c.scrollTop = 0;
  });
  return;
});
