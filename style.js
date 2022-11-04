// Circle Input
let radius = document.querySelector(".circleInput");
// Circle Result
let resultValueC = document.querySelector(".cricleResult");
// Rectangle Input1 or Width
let width = document.querySelector(".rectangleInput1");
// Rectangle Input2 or HeightR
let heightR = document.querySelector(".rectangleInput2");
// ResultValueR (Rectangle Result)
let resultValueR = document.querySelector(".rectangleResult");
// Triangle Input1 or Base
let base = document.querySelector(".triangleInput1");
// Triangle Input2 or HeightT
let heightT = document.querySelector(".triangleInput2");
// ResultValueT (Triangle Result)
let resultValueT = document.querySelector(".triangleResult");

// Cricle Area Function
function cricleAreaFunction() {
  let pi = 3.141592653589793238;
  let ongValue = Math.pow(radius.value, 2) * pi;
  resultValueC.innerHTML = "Area :  " + ongValue.toFixed(1);
}
// Rectangle Area Function
function rectangleAreaFunction() {
  resultValueR.innerHTML = "Area :  " + width.value * heightR.value;
}
// Triangle Area Function
function triangleAreaFunction() {
  resultValueT.innerHTML = "Area :  " + (base.value * heightT.value) / 2;
}

// Rest
function restFunction() {
  radius.value = "";
  resultValueC.innerHTML = "Area :  ";
  // Rectangle
  width.value = "";
  heightR.value = "";
  resultValueR.innerHTML = "Area :  ";
  // Triangle
  base.value = "";
  heightT.value = "";
  resultValueT.innerHTML = "Area :  ";
}

// CircleTransfersBtn
let circleContainer = document.querySelector(".circleTransfersBtn");
// RectangleTransfersBtn
let rectangleContainer = document.querySelector(".rectangleTransfersBtn");
// TriangleTransfersBtn
let triangleContainer = document.querySelector(".triangleTransfersBtn");

// Hidden
// Circle Menu
let circleMenu = document.querySelector(".circleMenu");
// Rectangle Menu
let rectangleMenu = document.querySelector(".rectangleMenu");
// Triangle Menu
let triangleMenu = document.querySelector(".triangleMenu");

// formula
let formula = document.querySelector(".formula");

// Circle Function
function circleFunction() {
  circleContainer.classList.add("active");
  triangleContainer.classList.remove("active");
  rectangleContainer.classList.remove("active");
  circleMenu.classList.remove("hidden");
  rectangleMenu.classList.add("hidden");
  triangleMenu.classList.add("hidden");
  formula.innerHTML = "A = &#8508r" + "<sup>2</sup>";
}
// Rectangle Function
function rectangleFunction() {
  rectangleContainer.classList.add("active");
  circleContainer.classList.remove("active");
  triangleContainer.classList.remove("active");
  circleContainer.classList.remove("active");
  circleMenu.classList.add("hidden");
  rectangleMenu.classList.remove("hidden");
  triangleMenu.classList.add("hidden");
  formula.innerHTML = "A = lw";
}
// Triangle Function
function triangleFunction() {
  triangleContainer.classList.add("active");
  rectangleContainer.classList.remove("active");
  circleContainer.classList.remove("active");
  circleMenu.classList.add("hidden");
  rectangleMenu.classList.add("hidden");
  triangleMenu.classList.remove("hidden");
  formula.innerHTML = "A = &#189" + "bh";
}
