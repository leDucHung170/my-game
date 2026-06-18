// Local Storage
const users = {
  panda: {
    level: 36,
    influence: 99999999,
    vipLevel: 8,
    vipProgress: 12000,
    goldBlock: 36000,
    stamina: 90,
    guild: {
      name: "[Twn]Town",
      influence: 7300000000,
      members: 85,
      language: "Vietnamese",
      declaration: "Hello, There!",
    },
    resources: {
      meat: 3600000000,
      wood: 360000000,
      stone: 36000000,
      ruby: 3600000,
      diamond: 360000,
      nutrient: 360,
      seaweed: 3600,
      dragonEssence: 36000000000,
      dragonDust: 36000,
    },
    bag: {
      
    }
  },
};

if (!localStorage.getItem("users")) {
  localStorage.setItem(
    "users",

    JSON.stringify(users),
  );
}

// Function
function calculatingNumber(number) {
  const num = Number(number);

  if (num >= 1000000000) {
    return `${+(num / 1000000000).toFixed(2)}B`;
  } else if (num >= 1000000) {
    return `${+(num / 1000000).toFixed(2)}M`;
  } else if (num >= 100000) {
    return `${+(num / 1000).toFixed(2)}K`;
  }

  return num;
}

function validate(name) {
  // User data
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users[name];
  const uMeat = user["resources"]["meat"];
  const uWood = user["resources"]["wood"];
  const uStone = user["resources"]["stone"];
  const uRuby = user["resources"]["ruby"];
  const uDiamond = user["resources"]["diamond"];
  const uNutri = user["resources"]["nutrient"];
  const uSeaweed = user["resources"]["seaweed"];
  const uDE = user["resources"]["dragonEssence"];
  const uDD = user["resources"]["dragonDust"];
  const uLv = user["level"];
  const uInfluence = user["influence"];
  const uGoldBLock = user["goldBlock"];
  const uStamina = user["stamina"];
  const uGName = user["guild"]["name"];
  const uGInfluence = user["guild"]["influence"];
  const uGMembers = user["guild"]["members"];
  const uGLanguage = user["guild"]["language"];
  const uGDeclare = user["guild"]["declaration"];

  // HTML
  const meat = document.querySelector(".btns .resources .meat .text");
  const wood = document.querySelector(".btns .resources .wood .text");
  const stone = document.querySelector(".btns .resources .stone .text");
  const ruby = document.querySelector(".btns .resources .ruby .text");
  const diamond = document.querySelector(".btns .resources .diamond .text");
  const nutri = document.querySelector(".btns .resources .nutrient .text");
  const seaweed = document.querySelector(".btns .resources .seaweed .text");
  const de = document.querySelector(".btns .resources .dragon-essence .text");
  const dd = document.querySelector(".btns .resources .dragon-dust .text");
  const lv = document.querySelector(".btns .information .avatar .level");
  const influence = document.querySelector(".btns .information .power .text");
  const stamina = document.querySelector(".btns .information .stamina .text");
  const goldBlock = document.querySelector(
    ".btns .information .gold-block .text",
  );

  const guildName = document.querySelector(
    ".guild-window .guild-body .guild-info .name",
  );
  const guildInfluence = document.querySelector(
    ".guild-window .guild-body .guild-info .info .influence .value",
  );
  const guildMembers = document.querySelector(
    ".guild-window .guild-body .guild-info .info .members .value",
  );
  const guildLanguage = document.querySelector(
    ".guild-window .guild-body .guild-info .info .language .value",
  );
  const declaration = document.querySelector(
    ".guild-window .guild-body .declare-section .message",
  );

  //   Execute
  meat.textContent = calculatingNumber(uMeat);
  wood.textContent = calculatingNumber(uWood);
  stone.textContent = calculatingNumber(uStone);
  ruby.textContent = calculatingNumber(uRuby);
  diamond.textContent = calculatingNumber(uDiamond);
  nutri.textContent = calculatingNumber(uNutri);
  seaweed.textContent = calculatingNumber(uSeaweed);
  de.textContent = calculatingNumber(uDE);
  dd.textContent = calculatingNumber(uDD);
  lv.textContent = uLv;
  influence.textContent = calculatingNumber(uInfluence);
  console.log(calculatingNumber(uInfluence));
  stamina.textContent = uStamina;
  goldBlock.textContent = calculatingNumber(uGoldBLock);
  guildName.textContent = uGName;
  guildInfluence.textContent = calculatingNumber(uGInfluence);
  guildLanguage.textContent = uGLanguage;
  guildMembers.textContent = uGMembers;
  declaration.textContent = uGDeclare;
}
validate("panda");
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == " ") {
    validateVip();
    return;
  }
  if (e.key == "b") {
   console.log(localStorage.getItem("users"))}
});
