/* My implementation
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
*/
//correct implementation with querySelectorAll() and forEach()

let contador = 0;

const num = document.getElementById("num");
const botones = document.querySelectorAll(".btn"); //Node list

botones.forEach(function (boton) {
  boton.addEventListener("click", function(event) { //el objeto evento tiene un atributo .currentTarget
    const clasesdelboton = event.currentTarget.classList; //lista de clases a las que pertenece el boton
    if(clasesdelboton.contains("decr")) {
      contador--;
    }
    else if(clasesdelboton.contains("res")) {
      contador = 0;
    }
    else {
      contador++;
    }
    
    num.textContent = contador
    contador > 0 ? num.style.color = "green" : contador === 0 ? num.style.color = "black" : num.style.color = "red";
  })
})