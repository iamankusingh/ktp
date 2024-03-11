// Dark mode

const body = document.body;
const btn = document.querySelector(".checkbox");

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
  btn.checked = false;
}
function dark() {
  localStorage.setItem("them", "dark");
  body.classList.add("dark");
  body.classList.remove("light");
  btn.checked = true;
}

if (localStorage.getItem("them") == "dark") {
  dark();
} else {
  light();
}
