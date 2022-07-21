const btn = document.getElementById("btn");
const menu = document.querySelector(".lateral");
const close = document.getElementById("close");

btn.addEventListener("click", function () {
  menu.classList.toggle("showl");
})

close.addEventListener("click", function () {
  menu.classList.remove("showl");
})
