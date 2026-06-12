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

// Vip Descriptions
const vipDescriptions = `
<div class="vip one">
                <h2>VIP1 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip two">
                <h2>VIP2 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Stamina Recovery Speed</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">7%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">7%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">7%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">7%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip three">
                <h2>VIP3 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Expedition Hall Reward Increase</span>
                    <span>5%</span>
                  </div>
                  <div>
                    <span>Daily Free Recruits (Max 2)</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Unlock Custom Avatar</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Stamina Recovery Speed</span>
                    <span class="accumulated">4%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">10%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">10%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">10%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">10%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span class="accumulated">4</span>
                  </div>
                </div>
              </div>
              <div class="vip four">
                <h2>VIP4 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Stamina Cap</span>
                    <span>10</span>
                  </div>
                  <div>
                    <span>Batch conduct Multiple non-combat Bounty Quests</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Expedition Hall Reward Increase</span>
                    <span class="accumulated">6%</span>
                  </div>
                  <div>
                    <span>Stamina Recovery Speed</span>
                    <span class="accumulated">5%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">12%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">12%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">12%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">12%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>4</span>
                  </div>
                  <div>
                    <span>Daily Free Recruits (Max 2)</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Unlock Custom Avatar</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="vip five">
                <h2>VIP5 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Construction Speed</span>
                    <span>5%</span>
                  </div>
                  <div>
                    <span>PvE Marching Speed Boost</span>
                    <span>5%</span>
                  </div>
                  <div>
                    <span>Ruin Hunt: Automatically deploy Heroes</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Daily Fire Extinguiushing Purchase Limit</span>
                    <span>5</span>
                  </div>
                  <div>
                    <span>Stamina Cap</span>
                    <span class="accumulated">15</span>
                  </div>
                  <div>
                    <span>Expedition Hall Reward Increase</span>
                    <span class="accumulated">7%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">15%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">15%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">15%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span class="accumulated">7</span>
                  </div>
                  <div>
                    <span>Daily Free Recruits (Max 2)</span>
                    <span class="accumulated">2</span>
                  </div>
                  <div>
                    <span>Batch conduct Multiple non-combat Bounty Quests</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Unlock Custom Avatar</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="vip six">
                <h2>VIP6 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Healing Speed</span>
                    <span>2%</span>
                  </div>
                  <div>
                    <span>Soldier Training Speed</span>
                    <span>2%</span>
                  </div>
                  <div>
                    <span>Construction Speed</span>
                    <span class="accumulated">10%</span>
                  </div>
                  <div>
                    <span>PvE Marching Speed Boost</span>
                    <span class="accumulated">8%</span>
                  </div>
                  <div>
                    <span>Expedition hall Reward Increase</span>
                    <span class="accumulated">8%</span>
                  </div>
                  <div>
                    <span>Stamina Recovery Speed</span>
                    <span class="accumulated">7%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">20%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">20%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">20%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">20%</span>
                  </div>
                  <div>
                    <span>Daily Fire Extinguishing Purchase Limit</span>
                    <span class="accumulated">10</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>7</span>
                  </div>
                  <div>
                    <span>Daily Free Recruits (Max 2)</span>
                    <span>2</span>
                  </div>
                  <div>
                    <span>Batch conduct Multiple non-combat Bounty Quests</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Ruin hunt: Automatically deploy Heroes</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Unlock Custom Avatar</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div class="vip seven">
                <h2>VIP7 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Tech Research Speed</span>
                    <span>2%</span>
                  </div>
                  <div>
                    <span>Auto-Translate Privilege</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Construction Speed</span>
                    <span class="accumulated">15%</span>
                  </div>
                  <div>
                    <span>Healing Speed</span>
                    <span class="accumulated">4%</span>
                  </div>
                  <div>
                    <span>Soldier Training Speed</span>
                    <span class="accumulated">4%</span>
                  </div>
                  <div>
                    <span>PvE Marching Speed Boost</span>
                    <span class="accumulated">12%</span>
                  </div>
                  <div>
                    <span>Expedition Hall Reward Increase</span>
                    <span class="accumulated">9%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">25%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">25%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">25%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">25%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span class="accumulated">9</span>
                  </div>
                </div>
              </div>
              <div class="vip eight">
                <h2>VIP8 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>HP of All Soldiers</span>
                    <span>5%</span>
                  </div>
                  <div>
                    <span
                      >Recruits 100 times to buy a Legendary Hero (67%
                      discount)</span
                    >
                    <span>1</span>
                  </div>
                  <div>
                    <span
                      >Auto-join Legion Boss rally (after the Shadow of the
                      World Tree begins, Castle Level > 20)</span
                    >
                    <span>1</span>
                  </div>
                  <div>
                    <span
                      >Quick Execute in Bounty supports pet search tasks
                      (unlocks in S1)</span
                    >
                    <span>1</span>
                  </div>
                  <div>
                    <span>Construction Speed</span>
                    <span class="accumulated">20%</span>
                  </div>
                  <div>
                    <span>Tech Research Speed</span>
                    <span class="accumulated">4%</span>
                  </div>
                  <div>
                    <span>Healing Speed</span>
                    <span class="accumulated">6%</span>
                  </div>
                  <div>
                    <span>Soldier Training Speed</span>
                    <span class="accumulated">6%</span>
                  </div>
                  <div>
                    <span>PvE Marching Speed Boost</span>
                    <span class="accumulated">15%</span>
                  </div>
                  <div>
                    <span>Expedition Hall Reward Increase</span>
                    <span class="accumulated">10%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">27%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">27%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">27%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">27%</span>
                  </div>
                </div>
              </div>
              <div class="vip nine">
                <h2>VIP9 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Quick Sweep cleared Dark Legion challenges (Available after entering the Frozen Flame season.)</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Hospital Capacity</span>
                    <span>100</span>
                  </div>
                  <div>
                    <span>Auto-join Wild Pet rally (after the Shadow of the World Tree begins, Castle Level > 20)</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>HP of All Soldiers</span>
                    <span class="accumulated">6%</span>
                  </div>
                  <div>
                    <span>Construction Speed</span>
                    <span class="accumulated">23%</span>
                  </div>
                  <div>
                    <span>Tech Research Speed</span>
                    <span class="accumulated">6%</span>
                  </div>
                  <div>
                    <span>Healing Speed</span>
                    <span class="accumulated">8%</span>
                  </div>
                  <div>
                    <span>Soldier Training Speed</span>
                    <span class="accumulated">8%</span>
                  </div>
                  <div>
                    <span>PvE Marching Speed Boost</span>
                    <span class="accumulated">18%</span>
                  </div>
                  <div>
                    <span>Expedition Hall Reward Increase</span>
                    <span class="accumulated">30%</span>
                  </div>
                  <div>
                    <span>All Troops Resource Load</span>
                    <span class="accumulated">30%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span class="accumulated">30%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span class="accumulated">30%</span>
                  </div>
                  <div>
                    <span>Increase Sawmill Yield</span>
                    <span class="accumulated">27%</span>
                  </div>
                </div>
              </div>
              <div class="vip ten">
                <h2>VIP10 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip eleven">
                <h2>VIP11 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Auto-join Wandering Monster Rallies (Available in the Ember of the Frozen Flame Season)</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Soldier Capacity (each faction)</span>
                    <span>100</span>
                  </div>
                  
                </div>
              </div>
              <div class="vip twelve">
                <h2>VIP12 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>Auto-join Wandering Monster Rallies (Available in the Ember of the Frozen Flame Season)</span>
                    <span>1</span>
                  </div>
                  <div>
                    <span>Soldier Capacity (each faction)</span>
                    <span>100</span>
                  </div>
                  
                </div>
              </div>
              <div class="vip thirdteen">
                <h2>VIP13 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip fourteen">
                <h2>VIP14 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip fifteen">
                <h2>VIP15 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip sixteen">
                <h2>VIP16 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip seventeen">
                <h2>VIP17 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="vip eighteen">
                <h2>VIP18 Privileges (Accumulated activated effects)</h2>
                <div class="privileges-container">
                  <div>
                    <span>All Troops Resource Load</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Resource Gathering Speed Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Stone Mine Yield Boost</span>
                    <span>3%</span>
                  </div>
                  <div>
                    <span>Daily Ruby Guard Kill Amount</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
`;
