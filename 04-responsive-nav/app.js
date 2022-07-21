const button = document.getElementById("btn");
const menu = document.getElementById("menu");
let state = 0; //0 - vertical | 1 - horizontal


button.addEventListener("click", function () {
    if(state === 0) {
        state = 1;
        button.style.transform = "rotate(90deg)";
        menu.style.display = "block";
        return;
      }
      else {
        state = 0;
        button.style.transform = "rotate(180deg)";
        menu.style.display = "none";
        return; 
      }
})