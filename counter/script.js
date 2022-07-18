
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const dec = document.getElementById("dec");
const num = document.getElementById("num");

let contador = 0;

function changecolor(n) {
  num.textContent = n;
  if(n === 0) {
    num.style.color = "black";
  }
  else if(n > 0) {
    num.style.color = "green";
  }
  else {
    num.style.color = "red";
  }
} 

inc.addEventListener("click", function () {
  contador++;
  changecolor(contador);
})

reset.addEventListener("click", function () {
  contador = 0;
  changecolor(contador);
})

dec.addEventListener("click", function () {
  contador--;
  changecolor(contador);
})
  