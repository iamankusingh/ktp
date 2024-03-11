// The Kachchh Tour Planners

// responsive Nav BAr
const icon = document.getElementById("icon");
const ul = document.getElementById("ul2");

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
let ismenuOpen = false;

icon.addEventListener("click", () => {
  if (ismenuOpen === false) {
    openMenu();
    ismenuOpen = true;
  } else {
    closeMenu();
    ismenuOpen = false;
  }
});

function openMenu() {
  // console.log("Menu open");
  ul.style.right = "0px";
  bar1.classList.add("bar1");
  bar2.classList.add("bar2");
  bar3.classList.add("bar3");
}

function closeMenu() {
  // console.log("Menu close");
  ul.style.right = "-300px";
  bar1.classList.remove("bar1");
  bar2.classList.remove("bar2");
  bar3.classList.remove("bar3");
}

// dark Light Mode
const body = document.body;
const btn = document.querySelectorAll(".checkbox");
const nav = document.querySelector("nav");
const navImg = document.getElementById("logo");
const navLinks = document.querySelectorAll("a");
const ul2 = document.getElementById("ul2");
const serviceBox = document.querySelectorAll(".service-box");
const servImg = document.querySelectorAll(".serviceImg");

function colorMode() {
  if (body.classList.contains("light")) {
    dark();
  } else {
    light();
  }
}

function light() {
  body.classList.remove("dark");
  body.classList.add("light");
  localStorage.setItem("them", "light");
  btn[0].checked = false;
  btn[1].checked = false;
  nav.style.background = "#f7f4f4c7";
  nav.style.color = "#000";
  ul2.style.background = "#fff";
  bar1.style.background = "#000";
  bar2.style.background = "#000";
  bar3.style.background = "#000";
  navImg.style.filter = "invert(0%)";
  navLinks[0].style.color = "#000";
  navLinks[1].style.color = "#000";
  navLinks[2].style.color = "#000";
  navLinks[3].style.color = "#000";
  navLinks[4].style.color = "#000";
  navLinks[5].style.color = "#000";
  navLinks[6].style.color = "#000";
  navLinks[7].style.color = "#000";
  serviceBox[0].style.background = "#fff";
  serviceBox[1].style.background = "#fff";
  serviceBox[2].style.background = "#fff";
  serviceBox[3].style.background = "#fff";
  serviceBox[4].style.background = "#fff";
  serviceBox[5].style.background = "#fff";
  servImg[0].style.filter = "invert(0%)";
  servImg[1].style.filter = "invert(0%)";
  servImg[2].style.filter = "invert(0%)";
  servImg[3].style.filter = "invert(0%)";
  servImg[4].style.filter = "invert(0%)";
  servImg[5].style.filter = "invert(0%)";
  servImg[6].style.filter = "invert(0%)";
  servImg[7].style.filter = "invert(0%)";
  servImg[8].style.filter = "invert(0%)";
  servImg[9].style.filter = "invert(0%)";
  servImg[10].style.filter = "invert(0%)";
  servImg[11].style.filter = "invert(0%)";
  servImg[12].style.filter = "invert(0%)";
  servImg[13].style.filter = "invert(0%)";
  servImg[14].style.filter = "invert(0%)";
  servImg[15].style.filter = "invert(0%)";
  servImg[16].style.filter = "invert(0%)";
}
function dark() {
  localStorage.setItem("them", "dark");
  body.classList.add("dark");
  body.classList.remove("light");
  btn[0].checked = true;
  btn[1].checked = true;
  nav.style.background = "#312f2fc7";
  nav.style.color = "#fff";
  ul2.style.background = "#000";
  bar1.style.background = "#fff";
  bar2.style.background = "#fff";
  bar3.style.background = "#fff";
  navImg.style.filter = "invert(100%)";
  navLinks[0].style.color = "#fff";
  navLinks[1].style.color = "#fff";
  navLinks[2].style.color = "#fff";
  navLinks[3].style.color = "#fff";
  navLinks[4].style.color = "#fff";
  navLinks[5].style.color = "#fff";
  navLinks[6].style.color = "#fff";
  navLinks[7].style.color = "#fff";
  serviceBox[0].style.background = "#ffffff2b";
  serviceBox[1].style.background = "#ffffff2b";
  serviceBox[2].style.background = "#ffffff2b";
  serviceBox[3].style.background = "#ffffff2b";
  serviceBox[4].style.background = "#ffffff2b";
  serviceBox[5].style.background = "#ffffff2b";
  servImg[0].style.filter = "invert(100%)";
  servImg[1].style.filter = "invert(100%)";
  servImg[2].style.filter = "invert(100%)";
  servImg[3].style.filter = "invert(100%)";
  servImg[4].style.filter = "invert(100%)";
  servImg[5].style.filter = "invert(100%)";
  servImg[6].style.filter = "invert(100%)";
  servImg[7].style.filter = "invert(100%)";
  servImg[8].style.filter = "invert(100%)";
  servImg[9].style.filter = "invert(100%)";
  servImg[10].style.filter = "invert(100%)";
  servImg[11].style.filter = "invert(100%)";
  servImg[12].style.filter = "invert(100%)";
  servImg[13].style.filter = "invert(100%)";
  servImg[14].style.filter = "invert(100%)";
  servImg[15].style.filter = "invert(100%)";
  servImg[16].style.filter = "invert(100%)";
}

if (localStorage.getItem("them") == "dark") {
  dark();
} else {
  light();
}

// see more menu in services
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn4 = document.getElementById("btn4");

let morePickUp = document.getElementById("morePickUp");
let moreHotels = document.getElementById("moreHotels");
let moreTickits = document.getElementById("moreTickits");

btn1.addEventListener("click", () => {
  if (morePickUp.style.display == "none") {
    morePickUp.style.display = "flex";
    btn1.value = "See Less";
  } else {
    morePickUp.style.display = "none";
    btn1.value = "See More";
  }
});

btn2.addEventListener("click", () => {
  if (moreHotels.style.display == "none") {
    moreHotels.style.display = "flex";
    btn2.value = "See Less";
  } else {
    moreHotels.style.display = "none";
    btn2.value = "See More";
  }
});

btn4.addEventListener("click", () => {
  if (moreTickits.style.display == "none") {
    moreTickits.style.display = "flex";
    btn4.value = "See Less";
  } else {
    moreTickits.style.display = "none";
    btn4.value = "See More";
  }
});
