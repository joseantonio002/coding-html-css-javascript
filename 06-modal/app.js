const btn = document.getElementById("btn");
const close = document.querySelector(".closeBtn");
const modal = document.getElementById("mymodal");

btn.addEventListener("click", function () {
  modal.style.display = "block";
})

close.addEventListener("click", function () {
  modal.style.display = "none";
})

window.addEventListener("click", function (e) {
  if(e.target == mymodal) {
    modal.style.display = "none";
  }
})