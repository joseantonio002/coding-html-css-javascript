const plusbuttons = document.querySelectorAll(".plus");
const minusbuttons = document.querySelectorAll(".minus");
const parts2 = document.querySelectorAll(".part2");

//si quisieramos añadir más preguntas solo cambiamos esta función
function shareqclass(obj1, obj2) {
  if(obj1.classList.contains("q1") && obj2.classList.contains("q1")) {
    return "q1";
  }
  else if(obj1.classList.contains("q2") && obj2.classList.contains("q2")) {
    return "q2";
  }
  else if(obj1.classList.contains("q3") && obj2.classList.contains("q3")){
    return "q3";
  }
  else {
    return false;
  }
}

console.log(plusbuttons);

plusbuttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    //Para cada parte2 comprobar si comparten clase qx donde x es el número de la pregunta
    //si la comparten ese es la parte2 que hacemos display, las demas las dejamos igual
    let qclass;
    parts2.forEach(function (part2) {
      qclass = shareqclass(part2, button);
      if(qclass != false) {
        part2.classList.add("show");
        button.setAttribute("style", "display:none");
        minusbuttons.forEach(function (btn) {
          if(shareqclass(part2, btn) != false) {
            btn.setAttribute("style", "display: block");
          }
        })
      }
      else { //part2 que no sean la del boton pulsado
        if(part2.classList.contains("show")) {
          part2.classList.remove("show");
          plusbuttons.forEach(function (btn) {
            if(shareqclass(part2, btn) != false) {
              btn.setAttribute("style", "display: block");
            }
          })
        }
      }
    })
  })
})

minusbuttons.forEach(function (button) {
  button.addEventListener("click", function (event) {

    let qclass;
    parts2.forEach(function (part2) {
      qclass = shareqclass(part2, button);
      if(qclass != false) {
        part2.classList.remove("show");
        button.setAttribute("style", "display:none");
        plusbuttons.forEach(function (plusb) {
          if(shareqclass(plusb, part2) != false) {
            plusb.setAttribute("style", "display: block");
          }
        }) 
      }
    }) 
  })
})

/*si pulso + {
  esconder todos las parte2 menos la del que pulse y cambiar su menos por mas
  cambiar el boton + por -
}

si pulso - {
  esconder parte2 actual 
  cambiar + por -
}

*/