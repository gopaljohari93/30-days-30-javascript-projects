var icon = document.getElementById("icon");
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

menuBtn.onclick = function () {
  menu.classList.toggle("show");
};
