
function random(n) {
  return Math.floor(Math.random()*(n));
}

function fun1() {
    const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let n1, n2, n3, n4, n5, n6;
    n1 =  random(15);
    n2 =  random(15);
    n3 =  random(15);
    n4 =  random(15);
    n5 =  random(15);
    n6 =  random(15);
    let color = "" + arr[n1] + arr[n2] + arr[n3] + arr[n4] + arr[n5] + arr[n6];  
    document.getElementById("sub").innerHTML = `Background color : <span>#${color}</span>`;
    document.getElementById("content").style.backgroundColor = `#${color}`;
}

function fun2() {
  const arr = ["Red","Green","Blue","Gold","Coral","Black","Orange","Brown","Yellow"];
  let n1;
  n1 =  random(9);
  let color = arr[n1];
  document.getElementById("sub").innerHTML = `Background color : <span>${color}</span>`;
  document.getElementById("content").style.backgroundColor = `${color}`;
}

var whatfunc = 1;

function changeToHex() {
  whatfunc = 1;
}

function changeToSimple() {
  whatfunc = 2;
}

function original() {
  if(whatfunc == 1) {
    fun1();
  }
  else {
    fun2();
  }
}