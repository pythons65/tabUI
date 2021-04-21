
function updateActiveTabIndicatorWidth() {
  let tab = document.querySelectorAll(".tab");
  let width = tab[0].offsetWidth + "px";
  document.body.style.setProperty("--activeTabIndicatorWidth", width);
}

function clearTabActiveProperty() {
  let tab = document.querySelectorAll(".tab");
  tab.forEach((p) => {
    removeTabActiveProperty(p);
  });
}

function removeTabActiveProperty(elt) {
  elt.classList.remove("active");
}

function removeContentViewIndexProperty() {
  let elt = document.querySelector(`.content[data-viewIndex="active"] `);
  if (elt) {
    elt.dataset["viewindex"] = "back";
  }
}

function updateContentViewIndexProperty(dataClass) {
  let elt = document.querySelector(`.${dataClass}`);
  elt.dataset["viewindex"] = "active";
}

function getActiveTabPosition() {
  let elt = document.querySelector(".active");
  return elt.offsetLeft + "px";
}

function updateActiveTabPosition() {
  let px = getActiveTabPosition();
  document.body.style.setProperty("--activeTabPosition", px);
}

function changeTab(elt){
  if(typeof elt == "number"){
    elt = document.querySelector(`.tab[data-content="c${elt}"]`)
  }
  clearTabActiveProperty();
  removeContentViewIndexProperty();
  elt.classList.add("active");
  updateActiveTabPosition();
  updateContentViewIndexProperty(elt.dataset["content"]);
}

function handleTabClick(e) {
  let elt = e.target;
  changeTab(elt)
}

function setup() {
  let tab = document.querySelectorAll(".tab");
  tab.forEach((p) => {
    p.onclick = handleTabClick;
  });
  updateActiveTabIndicatorWidth();
}

setup();
